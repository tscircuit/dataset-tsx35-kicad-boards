import concurrent.futures,json,pathlib,subprocess,xml.etree.ElementTree as ET
root=pathlib.Path(__file__).resolve().parent
dataset=root.parent
kicad_version=subprocess.check_output(['kicad-cli','--version'],text=True).strip()

def check(board):
 id=board['id'];directory=dataset/'boards'/id;metadata=json.loads((directory/'metadata.json').read_text())
 pcb=metadata['provenance']['pcb']['path'];schematic=(dataset/'upstream-schematics'/id/pathlib.Path(pcb)).with_suffix('.kicad_sch')
 output=dataset/'work'/id/'netlist.xml'
 output.parent.mkdir(parents=True,exist_ok=True)
 result=subprocess.run(['kicad-cli','sch','export','netlist','--format','kicadxml','-o',str(output),str(schematic)],capture_output=True,text=True,timeout=120)
 if result.returncode: return {'id':id,'success':False,'error':result.stdout+result.stderr}
 tree=ET.parse(output).getroot()
 parts=[{'ref':e.attrib['ref'],'value':e.findtext('value'),'libpart':e.find('libsource').attrib if e.find('libsource') is not None else {},'sheet':e.find('sheetpath').attrib if e.find('sheetpath') is not None else {}} for e in tree.findall('./components/comp')]
 nets=[{'name':e.attrib['name'],'nodes':[{'ref':n.attrib['ref'],'pin':n.attrib['pin'],'function':n.attrib.get('pinfunction'),'type':n.attrib.get('pintype')} for n in e.findall('node')]} for e in tree.findall('./nets/net')]
 full_universe={(c['originalName'],p['original']) for c in metadata['components'] for p in c['pins']}
 schematic_refs={c['ref'] for c in parts}
 universe={t for t in full_universe if t[0] in schematic_refs}
 selector={(f'.{c["name"]} > .{p["pin"]}'):(c['originalName'],p['original']) for c in metadata['components'] for p in c['pins']}
 schematic_sets={};tsx_sets={};duplicate_nc=[]
 connected_nodes={(n['ref'],n['pin']) for net in nets for n in net['nodes'] if n.get('type')!='no_connect'}
 for net in nets:
  members=frozenset((n['ref'],n['pin']) for n in net['nodes'] if (n['ref'],n['pin']) in universe and not (n.get('type')=='no_connect' and (n['ref'],n['pin']) in connected_nodes))
  duplicate_nc.extend([{'ref':n['ref'],'pin':n['pin'],'net':net['name']} for n in net['nodes'] if n.get('type')=='no_connect' and (n['ref'],n['pin']) in connected_nodes])
  for node in members:schematic_sets[node]=members
 for net in metadata['nets']:
  members=frozenset(selector[t] for t in net['targets'] if selector[t] in universe)
  for node in members:tsx_sets[node]=members
 mismatches=[]
 for terminal in sorted(universe):
  expected=schematic_sets.get(terminal,frozenset([terminal]));actual=tsx_sets.get(terminal,frozenset([terminal]))
  if expected!=actual:mismatches.append({'terminal':terminal,'schematic':sorted(expected),'tsx':sorted(actual)})
 absent=[t for t in sorted(universe) if t not in schematic_sets]
 payload={'root_file':str(schematic.relative_to(dataset/'upstream-schematics'/id)),'kicad_version':kicad_version,'components':parts,'nets':nets}
 (directory/'schematic-netlist.json').write_text(json.dumps(payload,indent=2)+'\n')
 report={'id':id,'success':not mismatches,'terminals_checked':len(universe),'schematic_nets':len(nets),'mismatched_terminals':len(mismatches),'pcb_only_terminals':sorted(full_universe-universe),'redundant_no_connect_entries':duplicate_nc,'absent_or_isolated_schematic_terminals':absent,'mismatches':mismatches,'warnings':result.stdout+result.stderr}
 (directory/'schematic-net-check.json').write_text(json.dumps(report,indent=2)+'\n')
 return {k:v for k,v in report.items() if k not in ['mismatches','absent_or_isolated_schematic_terminals','warnings']}

manifest=json.loads((dataset/'manifest.json').read_text())
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 results=list(pool.map(check,manifest))
(dataset/'schematic-net-summary.json').write_text(json.dumps(results,indent=2)+'\n')
for result in results:print(json.dumps(result),flush=True)
raise SystemExit(0 if all(result['success'] for result in results) else 1)
