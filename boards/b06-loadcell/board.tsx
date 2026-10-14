import { KiCadSchematic, KiCadNet } from './schematic'
// Ender-3 load-cell bed-levelling sensor
// Source: https://github.com/jujojujo2003/Ender-3-3DPrinter-Load-Cell-Bed-Leveling-Sensor
// Commit: eae5c6f3e67d0b7f83a500bfb3d1aef38cb69b0b; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_C22, Footprint_C9, Footprint_C3, Footprint_C28, Footprint_R12, Footprint_R8, Footprint_C26, Footprint_C6, Footprint_R6, Footprint_C2, Footprint_R1, Footprint_C16, Footprint_R7, Footprint_USB1, Footprint_C4, Footprint_C13, Footprint_H1, Footprint_C17, Footprint_C25, Footprint_R11, Footprint_C24, Footprint_R5, Footprint_R2, Footprint_U1, Footprint_C7, Footprint_C21, Footprint_CRYSTAL1, Footprint_C8, Footprint_R10, Footprint_R13, Footprint_BLT_CONN1, Footprint_C11, Footprint_C14, Footprint_H3, Footprint_C27, Footprint__3VREG1, Footprint_C12, Footprint_FLASH1, Footprint_C5, Footprint_R3, Footprint_R9, Footprint_C1, Footprint_C23, Footprint_R4, Footprint_LED1, Footprint_SWD1, Footprint_H4, Footprint_C20, Footprint_Boot1, Footprint_RP2040, Footprint_H2, Footprint_LOADCELL1, Footprint_C19, Footprint_C10, Footprint_C15, Footprint_C18 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={42} height={42} thickness={1.6} layers={2} outline={[{ "x": -21, "y": 21 }, { "x": 21, "y": 21 }, { "x": 21, "y": -21 }, { "x": -21, "y": -21 }, { "x": -21, "y": 21 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* Original KiCad copper zones, clipped to the board, in ascending priority. */}
    <copperpour name="GND_bottom_0_0" connectsTo="net.GND" layer="bottom" clearance={0.5} useThermalReliefs coveredWithSolderMask />
    {/* C22: 10nF */}
    <capacitor name={"C22"} pcbX={-6} pcbY={-13.9625} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C22 />} schX={8.750000000000004} schY={2.8500000000000005} schRotation={-90} schSheetName={"Overview"}/>

    {/* C9: 12pF */}
    <capacitor name={"C9"} pcbX={1.555904} pcbY={-11.015441} pcbRotation={-90} capacitance={"12pF"} footprint={<Footprint_C9 />} schX={-9.35} schY={1.8499999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* C3: 0.1uF */}
    <capacitor name={"C3"} pcbX={-8.981148} pcbY={-4.781065} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C3 />} schX={-0.24999999999999822} schY={2.05} schRotation={-90} schSheetName={"Overview"}/>

    {/* C28: 1nF */}
    <capacitor name={"C28"} pcbX={-19.584954} pcbY={-4} pcbRotation={-90} capacitance={"1nF"} footprint={<Footprint_C28 />} schX={6.550000000000001} schY={-0.6500000000000004} schRotation={0} schSheetName={"Overview"}/>

    {/* R12: 5.1k */}
    <resistor name={"R12"} pcbX={0} pcbY={12} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R12 />} schX={-10.149999999999999} schY={-6.25} schRotation={0} schSheetName={"Overview"}/>

    {/* R8: 1k */}
    <resistor name={"R8"} pcbX={-19.551476} pcbY={2.2233} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R8 />} schX={2.2500000000000018} schY={-2.5500000000000007} schRotation={0} schSheetName={"Overview"}/>

    {/* C26: 1nF */}
    <capacitor name={"C26"} pcbX={-18.937716} pcbY={-10} pcbRotation={-90} capacitance={"1nF"} footprint={<Footprint_C26 />} schX={7.649999999999999} schY={0.25} schRotation={90} schSheetName={"Overview"}/>

    {/* C6: 10uf */}
    <capacitor name={"C6"} pcbX={0} pcbY={10} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C6 />} schX={5.050000000000001} schY={4.55} schRotation={-90} schSheetName={"Overview"}/>

    {/* R6: 27 */}
    <resistor name={"R6"} pcbX={10.485} pcbY={12.75} pcbRotation={-90} resistance={"27ohm"} footprint={<Footprint_R6 />} schX={-8.049999999999999} schY={4.05} schRotation={0} schSheetName={"Overview"}/>

    {/* C2: 10uF */}
    <capacitor name={"C2"} pcbX={-9} pcbY={-7} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C2 />} schX={0.45000000000000107} schY={2.05} schRotation={-90} schSheetName={"Overview"}/>

    {/* R1: 100k */}
    <resistor name={"R1"} pcbX={-10} pcbY={-13.9625} pcbRotation={-90} resistance={"100kohm"} footprint={<Footprint_R1 />} schX={7.75} schY={2.8500000000000005} schRotation={-90} schSheetName={"Overview"}/>

    {/* C16: 0.1uF */}
    <capacitor name={"C16"} pcbX={-1} pcbY={-3} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C16 />} schX={0.6500000000000004} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* R7: 10k */}
    <resistor name={"R7"} pcbX={-16} pcbY={2.250687} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R7 />} schX={2.8500000000000014} schY={-2.3500000000000014} schRotation={-90} schSheetName={"Overview"}/>

    {/* USB1: ~ */}
    <chip name={"USB1"} pcbX={5} pcbY={15} pcbRotation={90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"], "pin18": ["S2"], "pin19": ["S3"], "pin20": ["S4"] }} displayName={"~"} footprint={<Footprint_USB1 />} noSchematicRepresentation={true}/>

    {/* C4: 4.7nF */}
    <capacitor name={"C4"} pcbX={-9} pcbY={-9} pcbRotation={0} capacitance={"4.7nF"} footprint={<Footprint_C4 />} schX={1.450000000000001} schY={2.55} schRotation={-90} schSheetName={"Overview"}/>

    {/* C13: 0.1uF */}
    <capacitor name={"C13"} pcbX={13.90802} pcbY={0.726155} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C13 />} schX={-2.1499999999999986} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* H1: MountingHole */}
    <chip name={"H1"} pcbX={-15.5445} pcbY={15.5169} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* C17: 0.1uF */}
    <capacitor name={"C17"} pcbX={0.375245} pcbY={1.26164} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C17 />} schX={1.6500000000000004} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* C25: 1nF */}
    <capacitor name={"C25"} pcbX={-12.620779} pcbY={-10.34459} pcbRotation={-90} capacitance={"1nF"} footprint={<Footprint_C25 />} schX={7.649999999999999} schY={1.0499999999999998} schRotation={-90} schSheetName={"Overview"}/>

    {/* R11: 5.1k */}
    <resistor name={"R11"} pcbX={9.461923} pcbY={18.99488} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R11 />} schX={-5.849999999999999} schY={-6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* C24: 1nF */}
    <capacitor name={"C24"} pcbX={-8} pcbY={-16.9625} pcbRotation={-90} capacitance={"1nF"} footprint={<Footprint_C24 />} schX={8.25} schY={2.3500000000000005} schRotation={-90} schSheetName={"Overview"}/>

    {/* R5: 27 */}
    <resistor name={"R5"} pcbX={8.485} pcbY={12.75} pcbRotation={-90} resistance={"27ohm"} footprint={<Footprint_R5 />} schX={-8.049999999999999} schY={4.25} schRotation={0} schSheetName={"Overview"}/>

    {/* R2: 100 */}
    <resistor name={"R2"} pcbX={-2} pcbY={-10} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R2 />} schX={9.25} schY={3.1500000000000004} schRotation={180} schSheetName={"Overview"}/>

    {/* U1: ADS1235IRHBR */}
    <chip name={"U1"} pcbX={-15} pcbY={-5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} displayName={"ADS1235IRHBR"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* C7: 10uf */}
    <capacitor name={"C7"} pcbX={17.163104} pcbY={10.722127} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C7 />} schX={10.149999999999999} schY={5.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* C21: 1uF */}
    <capacitor name={"C21"} pcbX={11.465752} pcbY={5.412208} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C21 />} schX={-6.449999999999999} schY={5.65} schRotation={180} schSheetName={"Overview"}/>

    {/* CRYSTAL1: 12Mhz */}
    <chip name={"CRYSTAL1"} pcbX={6} pcbY={-11} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"12Mhz"} footprint={<Footprint_CRYSTAL1 />} noSchematicRepresentation={true}/>

    {/* C8: 0.1uF */}
    <capacitor name={"C8"} pcbX={-12.533689} pcbY={1.772787} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C8 />} schX={5.75} schY={-2.4499999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* R10: 10K */}
    <resistor name={"R10"} pcbX={13.910396} pcbY={-3.301085} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R10 />} schX={-9.149999999999999} schY={5.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* R13: 100 */}
    <resistor name={"R13"} pcbX={-4} pcbY={-20} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R13 />} schX={9.350000000000001} schY={0.15000000000000036} schRotation={0} schSheetName={"Overview"}/>

    {/* BLT-CONN1: 532610571 */}
    <chip name={"BLT_CONN1"} pcbX={-4.578633} pcbY={17.938089} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["S1"], "pin7": ["S2"] }} displayName={"532610571"} footprint={<Footprint_BLT_CONN1 />} noSchematicRepresentation={true}/>

    {/* C11: 0.1uF */}
    <capacitor name={"C11"} pcbX={5.971827} pcbY={7.57491} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C11 />} schX={-4.1499999999999995} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* C14: 0.1uF */}
    <capacitor name={"C14"} pcbX={13.918201} pcbY={-1.300783} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C14 />} schX={-1.25} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* H3: MountingHole */}
    <chip name={"H3"} pcbX={15.4977} pcbY={-15.4219} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* C27: 10nF */}
    <capacitor name={"C27"} pcbX={-15.51123} pcbY={-10.279959} pcbRotation={180} capacitance={"10nF"} footprint={<Footprint_C27 />} schX={8.45} schY={0.6500000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* 3VREG1: AP2112K-3.3 */}
    <chip name={"_3VREG1"} pcbX={-5} pcbY={11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"AP2112K-3.3"} footprint={<Footprint__3VREG1 />} noSchematicRepresentation={true}/>

    {/* C12: 0.1uF */}
    <capacitor name={"C12"} pcbX={13} pcbY={3} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C12 />} schX={-3.1500000000000004} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* FLASH1: W25Q128JVS */}
    <chip name={"FLASH1"} pcbX={-6} pcbY={2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"W25Q128JVS"} footprint={<Footprint_FLASH1 />} noSchematicRepresentation={true}/>

    {/* C5: 10uf */}
    <capacitor name={"C5"} pcbX={-10} pcbY={12} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C5 />} schX={3.25} schY={4.55} schRotation={-90} schSheetName={"Overview"}/>

    {/* R3: 100 */}
    <resistor name={"R3"} pcbX={-2} pcbY={-13} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R3 />} schX={9.25} schY={2.55} schRotation={0} schSheetName={"Overview"}/>

    {/* R9: 1k */}
    <resistor name={"R9"} pcbX={3.64918} pcbY={-7} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R9 />} schX={-7.85} schY={0.15000000000000036} schRotation={0} schSheetName={"Overview"}/>

    {/* C1: 1uF */}
    <capacitor name={"C1"} pcbX={-18} pcbY={-1} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C1 />} schX={1.8499999999999996} schY={-0.14999999999999947} schRotation={-90} schSheetName={"Overview"}/>

    {/* C23: 1nF */}
    <capacitor name={"C23"} pcbX={-8} pcbY={-12.9625} pcbRotation={-90} capacitance={"1nF"} footprint={<Footprint_C23 />} schX={8.25} schY={3.3499999999999996} schRotation={-90} schSheetName={"Overview"}/>

    {/* R4: 100 */}
    <resistor name={"R4"} pcbX={-4} pcbY={-17} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R4 />} schX={9.350000000000001} schY={0.8500000000000005} schRotation={0} schSheetName={"Overview"}/>

    {/* LED1: WS2812B */}
    <chip name={"LED1"} pcbX={17} pcbY={6.784563} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"WS2812B"} footprint={<Footprint_LED1 />} noSchematicRepresentation={true}/>

    {/* SWD1: ~ */}
    <chip name={"SWD1"} pcbX={17.560567} pcbY={-8.10896} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["MP"] }} displayName={"~"} footprint={<Footprint_SWD1 />} noSchematicRepresentation={true}/>

    {/* H4: MountingHole */}
    <chip name={"H4"} pcbX={-15.4153} pcbY={-15.5253} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* C20: 0.1uF */}
    <capacitor name={"C20"} pcbX={7.744672} pcbY={-6.78959} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C20 />} schX={-6.6499999999999995} schY={6.25} schRotation={-90} schSheetName={"Overview"}/>

    {/* Boot1: PTS645SK50SMTR92LFS */}
    <chip name={"Boot1"} pcbX={-16.035625} pcbY={7.626998} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"PTS645SK50SMTR92LFS"} footprint={<Footprint_Boot1 />} noSchematicRepresentation={true}/>

    {/* RP2040: RP2040 */}
    <chip name={"RP2040"} pcbX={6} pcbY={0} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"] }} displayName={"RP2040"} footprint={<Footprint_RP2040 />} noSchematicRepresentation={true}/>

    {/* H2: MountingHole */}
    <chip name={"H2"} pcbX={15.5235} pcbY={15.4911} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* LOADCELL1: B4B-XH-A */}
    <chip name={"LOADCELL1"} pcbX={1.25} pcbY={-17} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"B4B-XH-A"} footprint={<Footprint_LOADCELL1 />} noSchematicRepresentation={true}/>

    {/* C19: 0.1uF */}
    <capacitor name={"C19"} pcbX={3.939081} pcbY={7.577779} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C19 />} schX={-7.749999999999999} schY={6.25} schRotation={-90} schSheetName={"Overview"}/>

    {/* C10: 12pF */}
    <capacitor name={"C10"} pcbX={10.388601} pcbY={-11.061767} pcbRotation={-90} capacitance={"12pF"} footprint={<Footprint_C10 />} schX={-9.35} schY={0.15000000000000036} schRotation={0} schSheetName={"Overview"}/>

    {/* C15: 0.1uF */}
    <capacitor name={"C15"} pcbX={5.738442} pcbY={-6.785245} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C15 />} schX={-0.24999999999999822} schY={6.15} schRotation={-90} schSheetName={"Overview"}/>

    {/* C18: 1uF */}
    <capacitor name={"C18"} pcbX={12.374013} pcbY={8.366958} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C18 />} schX={-3.25} schY={5.25} schRotation={0} schSheetName={"Overview"}/>

    {/* KiCad net: Net-(U1-REFP0) */}
    <KiCadNet name={"Net__U1_REFP0_"} connectsTo={[".C22 > .pin1", ".R1 > .pin1", ".R2 > .pin2", ".U1 > .pin32", ".C23 > .pin2"]}/>
    {/* KiCad net: Net-(U1-REFN0) */}
    <KiCadNet name={"Net__U1_REFN0_"} connectsTo={[".C22 > .pin2", ".R1 > .pin2", ".C24 > .pin1", ".U1 > .pin31", ".R3 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C9 > .pin1", ".C3 > .pin2", ".C28 > .pin2", ".R12 > .pin2", ".C26 > .pin1", ".C6 > .pin2", ".C2 > .pin2", ".C16 > .pin2", ".USB1 > .pin1", ".USB1 > .pin8", ".USB1 > .pin9", ".USB1 > .pin16", ".USB1 > .pin17", ".USB1 > .pin18", ".USB1 > .pin19", ".USB1 > .pin20", ".C13 > .pin2", ".C17 > .pin2", ".C25 > .pin1", ".R11 > .pin2", ".C24 > .pin2", ".U1 > .pin5", ".U1 > .pin16", ".U1 > .pin18", ".U1 > .pin33", ".C7 > .pin2", ".C21 > .pin2", ".CRYSTAL1 > .pin2", ".CRYSTAL1 > .pin4", ".C8 > .pin2", ".BLT_CONN1 > .pin2", ".BLT_CONN1 > .pin5", ".BLT_CONN1 > .pin6", ".BLT_CONN1 > .pin7", ".C11 > .pin2", ".C14 > .pin2", "._3VREG1 > .pin2", ".C12 > .pin2", ".FLASH1 > .pin4", ".C5 > .pin2", ".R3 > .pin2", ".C1 > .pin2", ".C23 > .pin1", ".LED1 > .pin3", ".SWD1 > .pin2", ".C20 > .pin2", ".Boot1 > .pin3", ".Boot1 > .pin4", ".RP2040 > .pin19", ".RP2040 > .pin57", ".LOADCELL1 > .pin2", ".C19 > .pin2", ".C10 > .pin1", ".C15 > .pin2", ".C18 > .pin2"]}/>
    {/* KiCad net: Net-(RP2040-XIN) */}
    <KiCadNet name={"Net__RP2040_XIN_"} connectsTo={[".C9 > .pin2", ".CRYSTAL1 > .pin3", ".RP2040 > .pin20"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".C3 > .pin1", ".C2 > .pin1", ".USB1 > .pin2", ".USB1 > .pin7", ".USB1 > .pin10", ".USB1 > .pin15", ".R2 > .pin1", ".U1 > .pin4", ".U1 > .pin27", ".U1 > .pin28", ".U1 > .pin29", ".U1 > .pin30", ".C7 > .pin1", ".BLT_CONN1 > .pin4", "._3VREG1 > .pin1", "._3VREG1 > .pin3", ".C5 > .pin1", ".LED1 > .pin1", ".LOADCELL1 > .pin1"]}/>
    {/* KiCad net: +3.3V */}
    <KiCadNet name={"_3_3V"} connectsTo={[".C28 > .pin1", ".C6 > .pin1", ".C16 > .pin1", ".R7 > .pin1", ".C13 > .pin1", ".C17 > .pin1", ".U1 > .pin17", ".C8 > .pin1", ".R10 > .pin1", ".C11 > .pin1", ".C14 > .pin1", "._3VREG1 > .pin5", ".C12 > .pin1", ".FLASH1 > .pin8", ".RP2040 > .pin1", ".RP2040 > .pin10", ".RP2040 > .pin22", ".RP2040 > .pin33", ".RP2040 > .pin42", ".RP2040 > .pin43", ".RP2040 > .pin44", ".RP2040 > .pin48", ".RP2040 > .pin49", ".C15 > .pin1", ".C18 > .pin1"]}/>
    {/* KiCad net: Net-(USB1-CC1) */}
    <KiCadNet name={"Net__USB1_CC1_"} connectsTo={[".R12 > .pin1", ".USB1 > .pin3"]}/>
    {/* KiCad net: /BOOT */}
    <KiCadNet name={"_BOOT"} connectsTo={[".R8 > .pin1", ".Boot1 > .pin1", ".Boot1 > .pin2"]}/>
    {/* KiCad net: /QSPI_SS */}
    <KiCadNet name={"_QSPI_SS"} connectsTo={[".R8 > .pin2", ".R7 > .pin2", ".FLASH1 > .pin1", ".RP2040 > .pin56"]}/>
    {/* KiCad net: Net-(U1-AIN5) */}
    <KiCadNet name={"Net__U1_AIN5_"} connectsTo={[".C26 > .pin2", ".U1 > .pin25", ".R13 > .pin1", ".C27 > .pin2"]}/>
    {/* KiCad net: /D- */}
    <KiCadNet name={"_D_"} connectsTo={[".R6 > .pin1", ".USB1 > .pin5", ".USB1 > .pin13"]}/>
    {/* KiCad net: /USB_D- */}
    <KiCadNet name={"_USB_D_"} connectsTo={[".R6 > .pin2", ".RP2040 > .pin46"]}/>
    {/* KiCad net: /D+ */}
    <KiCadNet name={"_D__"} connectsTo={[".USB1 > .pin4", ".USB1 > .pin12", ".R5 > .pin1"]}/>
    {/* KiCad net: unconnected-(USB1-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__USB1_SBU1_PadA8_"} connectsTo={[".USB1 > .pin6"]}/>
    {/* KiCad net: Net-(USB1-CC2) */}
    <KiCadNet name={"Net__USB1_CC2_"} connectsTo={[".USB1 > .pin11", ".R11 > .pin1"]}/>
    {/* KiCad net: unconnected-(USB1-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__USB1_SBU2_PadB8_"} connectsTo={[".USB1 > .pin14"]}/>
    {/* KiCad net: Net-(U1-CAPP) */}
    <KiCadNet name={"Net__U1_CAPP_"} connectsTo={[".C4 > .pin1", ".U1 > .pin2"]}/>
    {/* KiCad net: Net-(U1-CAPN) */}
    <KiCadNet name={"Net__U1_CAPN_"} connectsTo={[".C4 > .pin2", ".U1 > .pin3"]}/>
    {/* KiCad net: Net-(U1-AIN4) */}
    <KiCadNet name={"Net__U1_AIN4_"} connectsTo={[".C25 > .pin2", ".U1 > .pin26", ".C27 > .pin1", ".R4 > .pin1"]}/>
    {/* KiCad net: /USB_D+ */}
    <KiCadNet name={"_USB_D__"} connectsTo={[".R5 > .pin2", ".RP2040 > .pin47"]}/>
    {/* KiCad net: unconnected-(U1-NC_2-Pad1) */}
    <KiCadNet name={"unconnected__U1_NC_2_Pad1_"} connectsTo={[".U1 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-NC_3-Pad6) */}
    <KiCadNet name={"unconnected__U1_NC_3_Pad6_"} connectsTo={[".U1 > .pin6"]}/>
    {/* KiCad net: /ADC_PWDN */}
    <KiCadNet name={"_ADC_PWDN"} connectsTo={[".U1 > .pin7", ".RP2040 > .pin16"]}/>
    {/* KiCad net: /ADC_RESET */}
    <KiCadNet name={"_ADC_RESET"} connectsTo={[".U1 > .pin8", ".RP2040 > .pin15"]}/>
    {/* KiCad net: /ADC_START */}
    <KiCadNet name={"_ADC_START"} connectsTo={[".U1 > .pin9", ".RP2040 > .pin14"]}/>
    {/* KiCad net: /ADC_CS */}
    <KiCadNet name={"_ADC_CS"} connectsTo={[".U1 > .pin10", ".RP2040 > .pin13"]}/>
    {/* KiCad net: /ADC_SCLK */}
    <KiCadNet name={"_ADC_SCLK"} connectsTo={[".U1 > .pin11", ".RP2040 > .pin12"]}/>
    {/* KiCad net: /ADC_MOSI */}
    <KiCadNet name={"_ADC_MOSI"} connectsTo={[".U1 > .pin12", ".RP2040 > .pin11"]}/>
    {/* KiCad net: /ADC_DRDY */}
    <KiCadNet name={"_ADC_DRDY"} connectsTo={[".U1 > .pin13", ".RP2040 > .pin9"]}/>
    {/* KiCad net: /ADC_MISO */}
    <KiCadNet name={"_ADC_MISO"} connectsTo={[".U1 > .pin14", ".RP2040 > .pin8"]}/>
    {/* KiCad net: Net-(U1-BYPASS) */}
    <KiCadNet name={"Net__U1_BYPASS_"} connectsTo={[".U1 > .pin15", ".C1 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-NC_4-Pad19) */}
    <KiCadNet name={"unconnected__U1_NC_4_Pad19_"} connectsTo={[".U1 > .pin19"]}/>
    {/* KiCad net: unconnected-(U1-NC_5-Pad20) */}
    <KiCadNet name={"unconnected__U1_NC_5_Pad20_"} connectsTo={[".U1 > .pin20"]}/>
    {/* KiCad net: unconnected-(U1-NC_6-Pad21) */}
    <KiCadNet name={"unconnected__U1_NC_6_Pad21_"} connectsTo={[".U1 > .pin21"]}/>
    {/* KiCad net: unconnected-(U1-NC_7-Pad22) */}
    <KiCadNet name={"unconnected__U1_NC_7_Pad22_"} connectsTo={[".U1 > .pin22"]}/>
    {/* KiCad net: unconnected-(U1-NC_8-Pad23) */}
    <KiCadNet name={"unconnected__U1_NC_8_Pad23_"} connectsTo={[".U1 > .pin23"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad24) */}
    <KiCadNet name={"unconnected__U1_NC_Pad24_"} connectsTo={[".U1 > .pin24"]}/>
    {/* KiCad net: Net-(RP2040-VREG_VOUT) */}
    <KiCadNet name={"Net__RP2040_VREG_VOUT_"} connectsTo={[".C21 > .pin1", ".C20 > .pin1", ".RP2040 > .pin23", ".RP2040 > .pin45", ".RP2040 > .pin50", ".C19 > .pin1"]}/>
    {/* KiCad net: Net-(C10-Pad2) */}
    <KiCadNet name={"Net__C10_Pad2_"} connectsTo={[".CRYSTAL1 > .pin1", ".R9 > .pin1", ".C10 > .pin2"]}/>
    {/* KiCad net: Net-(RP2040-RUN) */}
    <KiCadNet name={"Net__RP2040_RUN_"} connectsTo={[".R10 > .pin2", ".RP2040 > .pin26"]}/>
    {/* KiCad net: /A- */}
    <KiCadNet name={"_A_"} connectsTo={[".R13 > .pin2", ".LOADCELL1 > .pin4"]}/>
    {/* KiCad net: /SENSOR_OUT */}
    <KiCadNet name={"_SENSOR_OUT"} connectsTo={[".BLT_CONN1 > .pin1", ".RP2040 > .pin3"]}/>
    {/* KiCad net: /SERVO */}
    <KiCadNet name={"_SERVO"} connectsTo={[".BLT_CONN1 > .pin3", ".RP2040 > .pin4"]}/>
    {/* KiCad net: unconnected-(3VREG1-NC-Pad4) */}
    <KiCadNet name={"unconnected__3VREG1_NC_Pad4_"} connectsTo={["._3VREG1 > .pin4"]}/>
    {/* KiCad net: /QSPI_SD1 */}
    <KiCadNet name={"_QSPI_SD1"} connectsTo={[".FLASH1 > .pin2", ".RP2040 > .pin55"]}/>
    {/* KiCad net: /QSPI_SD2 */}
    <KiCadNet name={"_QSPI_SD2"} connectsTo={[".FLASH1 > .pin3", ".RP2040 > .pin54"]}/>
    {/* KiCad net: /QSPI_SD0 */}
    <KiCadNet name={"_QSPI_SD0"} connectsTo={[".FLASH1 > .pin5", ".RP2040 > .pin53"]}/>
    {/* KiCad net: /QSPI_SCLK */}
    <KiCadNet name={"_QSPI_SCLK"} connectsTo={[".FLASH1 > .pin6", ".RP2040 > .pin52"]}/>
    {/* KiCad net: /QSPI_SD3 */}
    <KiCadNet name={"_QSPI_SD3"} connectsTo={[".FLASH1 > .pin7", ".RP2040 > .pin51"]}/>
    {/* KiCad net: Net-(RP2040-XOUT) */}
    <KiCadNet name={"Net__RP2040_XOUT_"} connectsTo={[".R9 > .pin2", ".RP2040 > .pin21"]}/>
    {/* KiCad net: /A+ */}
    <KiCadNet name={"_A__"} connectsTo={[".R4 > .pin2", ".LOADCELL1 > .pin3"]}/>
    {/* KiCad net: unconnected-(LED1-DOUT-Pad2) */}
    <KiCadNet name={"unconnected__LED1_DOUT_Pad2_"} connectsTo={[".LED1 > .pin2"]}/>
    {/* KiCad net: /LED_DIN */}
    <KiCadNet name={"_LED_DIN"} connectsTo={[".LED1 > .pin4", ".RP2040 > .pin29"]}/>
    {/* KiCad net: Net-(RP2040-SWCLK) */}
    <KiCadNet name={"Net__RP2040_SWCLK_"} connectsTo={[".SWD1 > .pin1", ".RP2040 > .pin24"]}/>
    {/* KiCad net: Net-(RP2040-SWD) */}
    <KiCadNet name={"Net__RP2040_SWD_"} connectsTo={[".SWD1 > .pin3", ".RP2040 > .pin25"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO0-Pad2) */}
    <KiCadNet name={"unconnected__RP2040_GPIO0_Pad2_"} connectsTo={[".RP2040 > .pin2"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO3-Pad5) */}
    <KiCadNet name={"unconnected__RP2040_GPIO3_Pad5_"} connectsTo={[".RP2040 > .pin5"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO4-Pad6) */}
    <KiCadNet name={"unconnected__RP2040_GPIO4_Pad6_"} connectsTo={[".RP2040 > .pin6"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO5-Pad7) */}
    <KiCadNet name={"unconnected__RP2040_GPIO5_Pad7_"} connectsTo={[".RP2040 > .pin7"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO14-Pad17) */}
    <KiCadNet name={"unconnected__RP2040_GPIO14_Pad17_"} connectsTo={[".RP2040 > .pin17"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO15-Pad18) */}
    <KiCadNet name={"unconnected__RP2040_GPIO15_Pad18_"} connectsTo={[".RP2040 > .pin18"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO16-Pad27) */}
    <KiCadNet name={"unconnected__RP2040_GPIO16_Pad27_"} connectsTo={[".RP2040 > .pin27"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO17-Pad28) */}
    <KiCadNet name={"unconnected__RP2040_GPIO17_Pad28_"} connectsTo={[".RP2040 > .pin28"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO19-Pad30) */}
    <KiCadNet name={"unconnected__RP2040_GPIO19_Pad30_"} connectsTo={[".RP2040 > .pin30"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO20-Pad31) */}
    <KiCadNet name={"unconnected__RP2040_GPIO20_Pad31_"} connectsTo={[".RP2040 > .pin31"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO21-Pad32) */}
    <KiCadNet name={"unconnected__RP2040_GPIO21_Pad32_"} connectsTo={[".RP2040 > .pin32"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO22-Pad34) */}
    <KiCadNet name={"unconnected__RP2040_GPIO22_Pad34_"} connectsTo={[".RP2040 > .pin34"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO23-Pad35) */}
    <KiCadNet name={"unconnected__RP2040_GPIO23_Pad35_"} connectsTo={[".RP2040 > .pin35"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO24-Pad36) */}
    <KiCadNet name={"unconnected__RP2040_GPIO24_Pad36_"} connectsTo={[".RP2040 > .pin36"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO25-Pad37) */}
    <KiCadNet name={"unconnected__RP2040_GPIO25_Pad37_"} connectsTo={[".RP2040 > .pin37"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO26_ADC0-Pad38) */}
    <KiCadNet name={"unconnected__RP2040_GPIO26_ADC0_Pad38_"} connectsTo={[".RP2040 > .pin38"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO27_ADC1-Pad39) */}
    <KiCadNet name={"unconnected__RP2040_GPIO27_ADC1_Pad39_"} connectsTo={[".RP2040 > .pin39"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO28_ADC2-Pad40) */}
    <KiCadNet name={"unconnected__RP2040_GPIO28_ADC2_Pad40_"} connectsTo={[".RP2040 > .pin40"]}/>
    {/* KiCad net: unconnected-(RP2040-GPIO29_ADC3-Pad41) */}
    <KiCadNet name={"unconnected__RP2040_GPIO29_ADC3_Pad41_"} connectsTo={[".RP2040 > .pin41"]}/>
    <KiCadSchematic /></board>);
}
