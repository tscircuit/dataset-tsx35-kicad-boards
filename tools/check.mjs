import fs from 'node:fs'
import { createHash } from 'node:crypto'
import path from 'node:path'
import ts from 'typescript'
import React from 'react'
import { Circuit } from '@tscircuit/core'

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../work')
const dataset = path.resolve(process.argv[2] ?? path.join(root, '..'))
const id = process.argv[3] ?? 'b09-waterlevel'
const directory = path.join(dataset, 'boards', id)
const compiled = path.join(root, 'compiled', id)
fs.mkdirSync(compiled, {recursive: true})
for (const name of ['board', 'footprints', 'schematic'].filter(name => fs.existsSync(path.join(directory, `${name}.tsx`)))) {
  const source = fs.readFileSync(path.join(directory, `${name}.tsx`), 'utf8')
  const result = ts.transpileModule(source, {fileName: `${name}.tsx`, reportDiagnostics: true,
    compilerOptions: {jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ESNext}})
  if (result.diagnostics.length) throw new Error('TypeScript transpilation failed')
  fs.writeFileSync(path.join(compiled, `${name}.mjs`), result.outputText.replace(/(["'])\.\/(footprints|schematic)\1/g, '"./$2.mjs"'))
}
const Board = (await import(path.join(compiled, 'board.mjs'))).default
const circuit = new Circuit()
if(process.env.PROFILE_RENDER==='1'){
 let phase
 circuit.on('renderable:renderLifecycle:anyEvent',event=>{
  const current=event.type.split(':')[2]
  if(current!==phase){phase=current;console.error(new Date().toISOString(),event.type,event.componentDisplayName)}
 })
}
circuit.schematicDisabled = process.env.CHECK_SCHEMATIC !== '1'
circuit.add(React.createElement(Board, {routingDisabled: true}))
await circuit.renderUntilSettled()
const actual = circuit.getCircuitJson()
const expected = JSON.parse(fs.readFileSync(path.join(directory, 'validation-reference.json')))
const sources = new Map(actual.filter(e => e.type === 'source_component').map(e => [e.source_component_id, e.name]))
const components = new Map(actual.filter(e => e.type === 'pcb_component').map(e => [e.pcb_component_id, sources.get(e.source_component_id)]))
const ports = new Map(actual.filter(e => e.type === 'source_port').map(e => [e.source_port_id, `.${sources.get(e.source_component_id)} > .pin${e.pin_number}`]))
const nets = new Map(actual.filter(e => e.type === 'source_net').map(e => [e.source_net_id, e.name]))
const actualNetTargets = new Map()
for (const trace of actual.filter(e => e.type === 'source_trace')) {
  for (const netId of trace.connected_source_net_ids ?? []) {
    const name = nets.get(netId), targets = actualNetTargets.get(name) ?? new Set()
    for (const portId of trace.connected_source_port_ids) targets.add(ports.get(portId))
    actualNetTargets.set(name, targets)
  }
}
const netMismatches = expected.nets.filter(net => JSON.stringify([...actualNetTargets.get(net.runtimeName) ?? []].sort()) !== JSON.stringify([...net.targets].sort()))
const expectedNetNames = new Set(expected.nets.map(net => net.runtimeName))
const unexpectedNets = [...nets.values()].filter(name => !expectedNetNames.has(name))
const physicalTypes = new Set(['pcb_smtpad', 'pcb_plated_hole', 'pcb_hole'])
const expectedPhysical = expected.primitives.filter(e => physicalTypes.has(e.type))
const actualPhysical = actual.filter(e => physicalTypes.has(e.type))
const unmatched = [...actualPhysical]
const geometryMismatches = []
const getCenter = e => typeof e.x === 'number' ? {x:e.x,y:e.y} : e.points?.length ? {x:e.points.reduce((s,p)=>s+p.x,0)/e.points.length,y:e.points.reduce((s,p)=>s+p.y,0)/e.points.length} : null
for (const primitive of expectedPhysical) {
  const center = getCenter(primitive)
  const index = unmatched.findIndex(other => {
    if (other.type !== primitive.type || components.get(other.pcb_component_id) !== primitive.componentName) return false
    const otherCenter = getCenter(other)
    if (center && otherCenter && Math.hypot(center.x-otherCenter.x,center.y-otherCenter.y) > 0.00001) return false
    if (primitive.layer !== undefined && primitive.layer !== other.layer) return false
    return true
  })
  if (index < 0) geometryMismatches.push({component: primitive.componentName, type: primitive.type, center, shape: primitive.shape, layer: primitive.layer})
  else unmatched.splice(index, 1)
}
const errors = actual.filter(e => e.type.endsWith('_error'))
const report = {
  id, compiled: true,
  input_sha256: Object.fromEntries(['board.tsx', 'footprints.tsx', 'schematic.tsx', 'metadata.json'].map(name => [name, createHash('sha256').update(fs.readFileSync(path.join(directory, name))).digest('hex')])),
  expectedComponents: expected.components.length, actualComponents: components.size,
  expectedPhysicalPrimitives: expectedPhysical.length, actualPhysicalPrimitives: actualPhysical.length,
  netCount: expected.nets.length, actualNetCount: nets.size, unexpectedNets, netMismatches, geometryMismatches, unmatchedActualPrimitives: unmatched.length,
  circuitErrors: errors.map(e => ({type:e.type, message:e.message})),
  checked: `Compiled native TSX with tscircuit core. Compared each imported copper pad/hole center and layer and every original pad-number net membership. PCB routing disabled; schematic rendering ${circuit.schematicDisabled ? 'disabled' : 'enabled'}.`,
}
fs.writeFileSync(path.join(directory, 'validation.json'), JSON.stringify(report, null, 2) + '\n')
fs.writeFileSync(path.join(compiled, 'circuit.json'), JSON.stringify(actual))
console.log(JSON.stringify({id, components: components.size, nets: nets.size, netMismatches: netMismatches.length, geometryMismatches: geometryMismatches.length, unexpectedNets: unexpectedNets.length, circuitErrors: errors.length}))
if (unexpectedNets.length || nets.size !== expected.nets.length || netMismatches.length || geometryMismatches.length || unmatched.length || expected.components.length !== components.size || errors.some(error => error.type.startsWith('source_'))) process.exitCode = 1
