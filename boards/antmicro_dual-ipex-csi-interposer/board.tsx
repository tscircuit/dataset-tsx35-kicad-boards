import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro dual IPEX CSI interposer
// Source: https://github.com/antmicro/dual-ipex-csi-interposer
// Commit: 6b6bd0af5aafe13c02377d534a23a6373922f350; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_J1, Footprint_N1, Footprint_N2, Footprint_MP4, Footprint_MP2, Footprint_MP1, Footprint_R1, Footprint_R2, Footprint_TP8, Footprint_TP7, Footprint_TP1, Footprint_TP2, Footprint_TP5, Footprint_TP4, Footprint_TP3, Footprint_TP6, Footprint_MP3, Footprint_R7, Footprint_C1, Footprint_R8, Footprint_R6, Footprint_TP9, Footprint_TP10, Footprint_R5, Footprint_C2, Footprint_R4, Footprint_R3, Footprint_J2, Footprint_J3 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={26.500000000006736} height={64.35} thickness={1.6} layers={4} outline={[{ "x": -13.249999999999659, "y": -29.924999999999983 }, { "x": -13.249999999999659, "y": 29.92500000000001 }, { "x": -13.239165555325044, "y": 30.14553853829696 }, { "x": -13.206766735281462, "y": 30.363953163552097 }, { "x": -13.153115557906503, "y": 30.578140425619296 }, { "x": -13.078728712852978, "y": 30.78603758613032 }, { "x": -12.984322585390032, "y": 30.985642483773162 }, { "x": -12.870806357228247, "y": 31.175032816180817 }, { "x": -12.739273250611504, "y": 31.35238465273548 }, { "x": -12.590989999999621, "y": 31.515989999999974 }, { "x": -12.427384652735128, "y": 31.664273250611856 }, { "x": -12.250032816180465, "y": 31.7958063572286 }, { "x": -12.06064248377281, "y": 31.909322585390385 }, { "x": -11.861037586129967, "y": 32.00372871285333 }, { "x": -11.653140425618943, "y": 32.078115557906855 }, { "x": -11.438953163551744, "y": 32.131766735281815 }, { "x": -11.220538538296609, "y": 32.1641655553254 }, { "x": -10.999999999999659, "y": 32.17500000000001 }, { "x": 11.000000000000341, "y": 32.17500000000001 }, { "x": 11.220538538297475, "y": 32.16416555532565 }, { "x": 11.438953163552839, "y": 32.131766735282284 }, { "x": 11.653140425620265, "y": 32.078115557907495 }, { "x": 11.86103758613153, "y": 32.00372871285411 }, { "x": 12.060642483774615, "y": 31.909322585391266 }, { "x": 12.250032816182525, "y": 31.795806357229537 }, { "x": 12.42738465273743, "y": 31.664273250612837 }, { "x": 12.590990000002165, "y": 31.51599000000094 }, { "x": 12.739273250614275, "y": 31.35238465273642 }, { "x": 12.870806357231217, "y": 31.175032816181684 }, { "x": 12.984322585393187, "y": 30.98564248377393 }, { "x": 13.078728712856304, "y": 30.78603758613096 }, { "x": 13.15311555790997, "y": 30.578140425619807 }, { "x": 13.206766735285044, "y": 30.363953163552452 }, { "x": 13.23916555532871, "y": 30.14553853829713 }, { "x": 13.250000000003368, "y": 29.92500000000001 }, { "x": 13.250000000000341, "y": -29.924999999999983 }, { "x": 13.239165555325513, "y": -30.14553853829682 }, { "x": 13.206766735281747, "y": -30.363953163551855 }, { "x": 13.153115557906645, "y": -30.578140425618926 }, { "x": 13.078728712853007, "y": -30.786037586129794 }, { "x": 12.98432258538999, "y": -30.985642483772523 }, { "x": 12.870806357228162, "y": -31.17503281618005 }, { "x": 12.739273250611419, "y": -31.3523846527346 }, { "x": 12.59098999999955, "y": -31.515989999998965 }, { "x": 12.427384652735114, "y": -31.66427325061079 }, { "x": 12.250032816180536, "y": -31.795806357227463 }, { "x": 12.060642483772966, "y": -31.90932258538922 }, { "x": 11.861037586130223, "y": -32.003728712852194 }, { "x": 11.653140425619313, "y": -32.07811555790576 }, { "x": 11.438953163552227, "y": -32.13176673528079 }, { "x": 11.220538538297191, "y": -32.16416555532447 }, { "x": 11.000000000000341, "y": -32.174999999999216 }, { "x": -10.999999999999659, "y": -32.17499999999998 }, { "x": -11.220538538296708, "y": -32.1641655553253 }, { "x": -11.438953163551957, "y": -32.13176673528167 }, { "x": -11.65314042561927, "y": -32.07811555790667 }, { "x": -11.861037586130394, "y": -32.00372871285313 }, { "x": -12.060642483773364, "y": -31.909322585390214 }, { "x": -12.250032816181175, "y": -31.795806357228457 }, { "x": -12.427384652735995, "y": -31.664273250611757 }, { "x": -12.590990000000673, "y": -31.515989999999903 }, { "x": -12.739273250612783, "y": -31.35238465273548 }, { "x": -12.870806357229768, "y": -31.175032816180874 }, { "x": -12.984322585391837, "y": -30.985642483773262 }, { "x": -13.07872871285511, "y": -30.786037586130448 }, { "x": -13.15311555790899, "y": -30.578140425619438 }, { "x": -13.206766735284333, "y": -30.363953163552225 }, { "x": -13.239165555328327, "y": -30.145538538297018 }, { "x": -13.250000000003368, "y": -29.924999999999983 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* J1: WE_68715014522 */}
    <chip name={"J1"} pcbX={-0.75} pcbY={0.025} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["~"] }} manufacturerPartNumber={"68715014522"} displayName={"WE_68715014522"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* N1: oshw_logo */}
    <chip name={"N1"} pcbX={-9.45} pcbY={-24.075} pcbRotation={90} pinLabels={{}} displayName={"oshw_logo"} footprint={<Footprint_N1 />} noSchematicRepresentation={true}/>

    {/* N2: antmicro_logo */}
    <chip name={"N2"} pcbX={-10.75} pcbY={13.175} pcbRotation={90} pinLabels={{}} displayName={"antmicro_logo"} footprint={<Footprint_N2 />} noSchematicRepresentation={true}/>

    {/* MP4: PCB_Mount_Hole_2.2_4.5 */}
    <chip name={"MP4"} pcbX={11} pcbY={-29.925} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PCB_Mount_Hole_2.2_4.5"} footprint={<Footprint_MP4 />} noSchematicRepresentation={true}/>

    {/* MP2: PCB_Mount_Hole_2.2_4.5 */}
    <chip name={"MP2"} pcbX={-11} pcbY={-29.925} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PCB_Mount_Hole_2.2_4.5"} footprint={<Footprint_MP2 />} noSchematicRepresentation={true}/>

    {/* MP1: PCB_Mount_Hole_2.2_4.5 */}
    <chip name={"MP1"} pcbX={-11} pcbY={29.905} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PCB_Mount_Hole_2.2_4.5"} footprint={<Footprint_MP1 />} noSchematicRepresentation={true}/>

    {/* R1: R_0R_0402 */}
    <chip name={"R1"} pcbX={0.725} pcbY={20.85} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* R2: R_0R_0402 */}
    <chip name={"R2"} pcbX={0.725} pcbY={21.925} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_SMD1MM */}
    <chip name={"TP8"} pcbX={-1.05} pcbY={23.275} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP7: TP_SMD1MM */}
    <chip name={"TP7"} pcbX={-1.05} pcbY={24.6258} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_SMD1MM */}
    <chip name={"TP1"} pcbX={5.7} pcbY={27.925} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_SMD1MM */}
    <chip name={"TP2"} pcbX={7.1} pcbY={27.925} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* TP5: TP_SMD1MM */}
    <chip name={"TP5"} pcbX={-1.1} pcbY={20.425} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_SMD1MM */}
    <chip name={"TP4"} pcbX={-1.15} pcbY={-24.225} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* TP3: TP_SMD1MM */}
    <chip name={"TP3"} pcbX={-1.15} pcbY={-22.725} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* TP6: TP_SMD1MM */}
    <chip name={"TP6"} pcbX={-1.1} pcbY={21.7742} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* MP3: PCB_Mount_Hole_2.2_4.5 */}
    <chip name={"MP3"} pcbX={11} pcbY={29.925} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PCB_Mount_Hole_2.2_4.5"} footprint={<Footprint_MP3 />} noSchematicRepresentation={true}/>

    {/* R7: R_0R_0402 */}
    <chip name={"R7"} pcbX={0.71} pcbY={-21.855} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* C1: C_100n_0402 */}
    <chip name={"C1"} pcbX={-6.17} pcbY={27.675} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* R8: R_0R_0402 */}
    <chip name={"R8"} pcbX={0.725} pcbY={22.975} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* R6: R_0R_0402 */}
    <chip name={"R6"} pcbX={0.725} pcbY={24.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* TP9: TP_SMD1MM */}
    <chip name={"TP9"} pcbX={5.65} pcbY={-29.125} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* TP10: TP_SMD1MM */}
    <chip name={"TP10"} pcbX={7.05} pcbY={-29.125} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SMD1MM"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* R5: R_0R_0402 */}
    <chip name={"R5"} pcbX={0.7} pcbY={-20.795} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* C2: C_100n_0402 */}
    <chip name={"C2"} pcbX={-6.170001} pcbY={30.469} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* R4: R_0R_0402 */}
    <chip name={"R4"} pcbX={0.71} pcbY={-22.895} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* R3: R_0R_0402 */}
    <chip name={"R3"} pcbX={0.71} pcbY={-23.965} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* J2: MSAK24025P30 */}
    <chip name={"J2"} pcbX={10.25} pcbY={14.425} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["~"] }} manufacturerPartNumber={"MSAK24025P30"} displayName={"MSAK24025P30"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* J3: MSAK24025P30 */}
    <chip name={"J3"} pcbX={10.25} pcbY={-14.375} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["~"] }} manufacturerPartNumber={"MSAK24025P30"} displayName={"MSAK24025P30"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* KiCad net: CAM2_CSI_D3_N */}
    <KiCadNet name={"CAM2_CSI_D3_N"} connectsTo={[".J1 > .pin1", ".J3 > .pin2"]}/>
    {/* KiCad net: CAM2_CSI_D3_P */}
    <KiCadNet name={"CAM2_CSI_D3_P"} connectsTo={[".J1 > .pin2", ".J3 > .pin3"]}/>
    {/* KiCad net: CAM2_CSI_D2_N */}
    <KiCadNet name={"CAM2_CSI_D2_N"} connectsTo={[".J1 > .pin3", ".J3 > .pin5"]}/>
    {/* KiCad net: CAM2_CSI_D2_P */}
    <KiCadNet name={"CAM2_CSI_D2_P"} connectsTo={[".J1 > .pin4", ".J3 > .pin6"]}/>
    {/* KiCad net: CAM2_CSI_D1_N */}
    <KiCadNet name={"CAM2_CSI_D1_N"} connectsTo={[".J1 > .pin5", ".J3 > .pin8"]}/>
    {/* KiCad net: CAM2_CSI_D1_P */}
    <KiCadNet name={"CAM2_CSI_D1_P"} connectsTo={[".J1 > .pin6", ".J3 > .pin9"]}/>
    {/* KiCad net: CAM2_CSI_D0_N */}
    <KiCadNet name={"CAM2_CSI_D0_N"} connectsTo={[".J1 > .pin7", ".J3 > .pin11"]}/>
    {/* KiCad net: CAM2_CSI_D0_P */}
    <KiCadNet name={"CAM2_CSI_D0_P"} connectsTo={[".J1 > .pin8", ".J3 > .pin12"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".J1 > .pin9", ".J1 > .pin12", ".J1 > .pin15", ".J1 > .pin18", ".J1 > .pin27", ".J1 > .pin30", ".C1 > .pin2", ".C2 > .pin2", ".J2 > .pin1", ".J2 > .pin4", ".J2 > .pin7", ".J2 > .pin10", ".J2 > .pin13", ".J2 > .pin16", ".J2 > .pin19", ".J3 > .pin1", ".J3 > .pin4", ".J3 > .pin7", ".J3 > .pin10", ".J3 > .pin13", ".J3 > .pin16", ".J3 > .pin19"]}/>
    {/* KiCad net: CAM2_CSI_CLK_N */}
    <KiCadNet name={"CAM2_CSI_CLK_N"} connectsTo={[".J1 > .pin10", ".J3 > .pin14"]}/>
    {/* KiCad net: CAM2_CSI_CLK_P */}
    <KiCadNet name={"CAM2_CSI_CLK_P"} connectsTo={[".J1 > .pin11", ".J3 > .pin15"]}/>
    {/* KiCad net: unconnected-(J1-Pad13) */}
    <KiCadNet name={"unconnected__J1_Pad13_"} connectsTo={[".J1 > .pin13"]}/>
    {/* KiCad net: unconnected-(J1-Pad14) */}
    <KiCadNet name={"unconnected__J1_Pad14_"} connectsTo={[".J1 > .pin14"]}/>
    {/* KiCad net: unconnected-(J1-Pad16) */}
    <KiCadNet name={"unconnected__J1_Pad16_"} connectsTo={[".J1 > .pin16"]}/>
    {/* KiCad net: unconnected-(J1-Pad17) */}
    <KiCadNet name={"unconnected__J1_Pad17_"} connectsTo={[".J1 > .pin17"]}/>
    {/* KiCad net: CAM1_CSI_D3_N */}
    <KiCadNet name={"CAM1_CSI_D3_N"} connectsTo={[".J1 > .pin19", ".J2 > .pin2"]}/>
    {/* KiCad net: CAM1_CSI_D3_P */}
    <KiCadNet name={"CAM1_CSI_D3_P"} connectsTo={[".J1 > .pin20", ".J2 > .pin3"]}/>
    {/* KiCad net: CAM1_CSI_D2_N */}
    <KiCadNet name={"CAM1_CSI_D2_N"} connectsTo={[".J1 > .pin21", ".J2 > .pin5"]}/>
    {/* KiCad net: CAM1_CSI_D2_P */}
    <KiCadNet name={"CAM1_CSI_D2_P"} connectsTo={[".J1 > .pin22", ".J2 > .pin6"]}/>
    {/* KiCad net: CAM1_CSI_D1_N */}
    <KiCadNet name={"CAM1_CSI_D1_N"} connectsTo={[".J1 > .pin23", ".J2 > .pin8"]}/>
    {/* KiCad net: CAM1_CSI_D1_P */}
    <KiCadNet name={"CAM1_CSI_D1_P"} connectsTo={[".J1 > .pin24", ".J2 > .pin9"]}/>
    {/* KiCad net: CAM1_CSI_D0_N */}
    <KiCadNet name={"CAM1_CSI_D0_N"} connectsTo={[".J1 > .pin25", ".J2 > .pin11"]}/>
    {/* KiCad net: CAM1_CSI_D0_P */}
    <KiCadNet name={"CAM1_CSI_D0_P"} connectsTo={[".J1 > .pin26", ".J2 > .pin12"]}/>
    {/* KiCad net: CAM1_CSI_CLK_N */}
    <KiCadNet name={"CAM1_CSI_CLK_N"} connectsTo={[".J1 > .pin28", ".J2 > .pin14"]}/>
    {/* KiCad net: CAM1_CSI_CLK_P */}
    <KiCadNet name={"CAM1_CSI_CLK_P"} connectsTo={[".J1 > .pin29", ".J2 > .pin15"]}/>
    {/* KiCad net: unconnected-(J1-Pad31) */}
    <KiCadNet name={"unconnected__J1_Pad31_"} connectsTo={[".J1 > .pin31"]}/>
    {/* KiCad net: /CAM_CSI_CAM_EN */}
    <KiCadNet name={"_CAM_CSI_CAM_EN"} connectsTo={[".J1 > .pin32", ".TP7 > .pin1", ".R6 > .pin2", ".R5 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-Pad33) */}
    <KiCadNet name={"unconnected__J1_Pad33_"} connectsTo={[".J1 > .pin33"]}/>
    {/* KiCad net: /CAM_CSI_CAM_XVS */}
    <KiCadNet name={"_CAM_CSI_CAM_XVS"} connectsTo={[".J1 > .pin34", ".TP8 > .pin1", ".R7 > .pin2", ".R8 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-Pad35) */}
    <KiCadNet name={"unconnected__J1_Pad35_"} connectsTo={[".J1 > .pin35"]}/>
    {/* KiCad net: unconnected-(J1-Pad36) */}
    <KiCadNet name={"unconnected__J1_Pad36_"} connectsTo={[".J1 > .pin36"]}/>
    {/* KiCad net: unconnected-(J1-Pad37) */}
    <KiCadNet name={"unconnected__J1_Pad37_"} connectsTo={[".J1 > .pin37"]}/>
    {/* KiCad net: unconnected-(J1-Pad38) */}
    <KiCadNet name={"unconnected__J1_Pad38_"} connectsTo={[".J1 > .pin38"]}/>
    {/* KiCad net: /CAM_L_SDA */}
    <KiCadNet name={"_CAM_L_SDA"} connectsTo={[".J1 > .pin39", ".TP3 > .pin1", ".R4 > .pin2"]}/>
    {/* KiCad net: /CAM_L_SCL */}
    <KiCadNet name={"_CAM_L_SCL"} connectsTo={[".J1 > .pin40", ".TP4 > .pin1", ".R3 > .pin2"]}/>
    {/* KiCad net: /CAM_R_SDA */}
    <KiCadNet name={"_CAM_R_SDA"} connectsTo={[".J1 > .pin41", ".R2 > .pin2", ".TP6 > .pin1"]}/>
    {/* KiCad net: /CAM_R_SCL */}
    <KiCadNet name={"_CAM_R_SCL"} connectsTo={[".J1 > .pin42", ".R1 > .pin2", ".TP5 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1-Pad43) */}
    <KiCadNet name={"unconnected__J1_Pad43_"} connectsTo={[".J1 > .pin43"]}/>
    {/* KiCad net: unconnected-(J1-Pad44) */}
    <KiCadNet name={"unconnected__J1_Pad44_"} connectsTo={[".J1 > .pin44"]}/>
    {/* KiCad net: unconnected-(J1-Pad45) */}
    <KiCadNet name={"unconnected__J1_Pad45_"} connectsTo={[".J1 > .pin45"]}/>
    {/* KiCad net: unconnected-(J1-Pad46) */}
    <KiCadNet name={"unconnected__J1_Pad46_"} connectsTo={[".J1 > .pin46"]}/>
    {/* KiCad net: 3V3_FFC */}
    <KiCadNet name={"_3V3_FFC"} connectsTo={[".J1 > .pin47", ".J1 > .pin48", ".C1 > .pin1", ".J2 > .pin24", ".J2 > .pin25", ".J2 > .pin26", ".J3 > .pin24", ".J3 > .pin25", ".J3 > .pin26"]}/>
    {/* KiCad net: 5V0_SYS */}
    <KiCadNet name={"_5V0_SYS"} connectsTo={[".J1 > .pin49", ".J1 > .pin50", ".C2 > .pin1", ".J2 > .pin27", ".J2 > .pin28", ".J2 > .pin29", ".J2 > .pin30", ".J3 > .pin27", ".J3 > .pin28", ".J3 > .pin29", ".J3 > .pin30"]}/>
    {/* KiCad net: CAM1_SCL */}
    <KiCadNet name={"CAM1_SCL"} connectsTo={[".R1 > .pin1", ".J2 > .pin18"]}/>
    {/* KiCad net: CAM1_SDA */}
    <KiCadNet name={"CAM1_SDA"} connectsTo={[".R2 > .pin1", ".J2 > .pin17"]}/>
    {/* KiCad net: CAM1_CSI_CAM_CLK */}
    <KiCadNet name={"CAM1_CSI_CAM_CLK"} connectsTo={[".TP1 > .pin1", ".J2 > .pin22"]}/>
    {/* KiCad net: CAM1_CSI_CAM_XTRIG */}
    <KiCadNet name={"CAM1_CSI_CAM_XTRIG"} connectsTo={[".TP2 > .pin1", ".J2 > .pin23"]}/>
    {/* KiCad net: CAM2_CSI_CAM_XVS */}
    <KiCadNet name={"CAM2_CSI_CAM_XVS"} connectsTo={[".R7 > .pin1", ".J3 > .pin21"]}/>
    {/* KiCad net: CAM1_CSI_CAM_XVS */}
    <KiCadNet name={"CAM1_CSI_CAM_XVS"} connectsTo={[".R8 > .pin1", ".J2 > .pin21"]}/>
    {/* KiCad net: CAM1_CSI_CAM_EN */}
    <KiCadNet name={"CAM1_CSI_CAM_EN"} connectsTo={[".R6 > .pin1", ".J2 > .pin20"]}/>
    {/* KiCad net: CAM2_CSI_CAM_CLK */}
    <KiCadNet name={"CAM2_CSI_CAM_CLK"} connectsTo={[".TP9 > .pin1", ".J3 > .pin22"]}/>
    {/* KiCad net: CAM2_CSI_CAM_XTRIG */}
    <KiCadNet name={"CAM2_CSI_CAM_XTRIG"} connectsTo={[".TP10 > .pin1", ".J3 > .pin23"]}/>
    {/* KiCad net: CAM2_CSI_CAM_EN */}
    <KiCadNet name={"CAM2_CSI_CAM_EN"} connectsTo={[".R5 > .pin1", ".J3 > .pin20"]}/>
    {/* KiCad net: CAM2_SDA */}
    <KiCadNet name={"CAM2_SDA"} connectsTo={[".R4 > .pin1", ".J3 > .pin17"]}/>
    {/* KiCad net: CAM2_SCL */}
    <KiCadNet name={"CAM2_SCL"} connectsTo={[".R3 > .pin1", ".J3 > .pin18"]}/>
    <KiCadSchematic /></board>);
}
