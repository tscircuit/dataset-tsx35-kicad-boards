import { KiCadSchematic, KiCadNet } from './schematic'
// RP2040 development board
// Source: https://github.com/acornitum/fucked-up-rp2040-devboard
// Commit: d94328619f4fcaef2f2d62aa42c62c789a463d56; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_C10, Footprint_REF__, Footprint_R7, Footprint_SW1, Footprint_C4, Footprint_R6, Footprint_C2, Footprint_U1, Footprint_J6, Footprint_C5, Footprint_C1, Footprint_R3, Footprint_R5, Footprint_C15, Footprint_D7, Footprint_C13, Footprint_J1, Footprint_C9, Footprint_R1, Footprint_R4, Footprint_C11, Footprint_U3, Footprint_J2, Footprint_C8, Footprint_D5, Footprint_R2, Footprint_Y1, Footprint_U2, Footprint_C14, Footprint_C12, Footprint_R8, Footprint_C3, Footprint_C6, Footprint_C7, Footprint_C17, Footprint_C16, Footprint_REF___, Footprint_MX2, Footprint_MX3, Footprint_MX1 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={62.557286000000005} height={20.945209} thickness={1.6} layers={2} outline={[{ "x": 97.138459, "y": -44.631018 }, { "x": 97.279811, "y": -44.641767 }, { "x": 97.419108, "y": -44.659468 }, { "x": 97.556175, "y": -44.683946 }, { "x": 97.690838, "y": -44.715026 }, { "x": 97.82292, "y": -44.752533 }, { "x": 97.952249, "y": -44.796293 }, { "x": 98.078647, "y": -44.846131 }, { "x": 98.201942, "y": -44.901871 }, { "x": 98.321957, "y": -44.96334 }, { "x": 98.438518, "y": -45.030361 }, { "x": 98.55145, "y": -45.10276 }, { "x": 98.660578, "y": -45.180362 }, { "x": 98.765727, "y": -45.262993 }, { "x": 98.866723, "y": -45.350477 }, { "x": 98.96339, "y": -45.44264 }, { "x": 99.055553, "y": -45.539306 }, { "x": 99.143038, "y": -45.640301 }, { "x": 99.225669, "y": -45.74545 }, { "x": 99.303272, "y": -45.854578 }, { "x": 99.375672, "y": -45.96751 }, { "x": 99.442694, "y": -46.084071 }, { "x": 99.504164, "y": -46.204086 }, { "x": 99.559905, "y": -46.327381 }, { "x": 99.609743, "y": -46.453781 }, { "x": 99.653504, "y": -46.58311 }, { "x": 99.691012, "y": -46.715193 }, { "x": 99.722093, "y": -46.849857 }, { "x": 99.746571, "y": -46.986926 }, { "x": 99.764272, "y": -47.126225 }, { "x": 99.775021, "y": -47.267579 }, { "x": 99.778643, "y": -47.410813 }, { "x": 99.778643, "y": -62.78919 }, { "x": 99.775021, "y": -62.932421 }, { "x": 99.764272, "y": -63.073773 }, { "x": 99.746571, "y": -63.21307 }, { "x": 99.722093, "y": -63.350137 }, { "x": 99.691012, "y": -63.4848 }, { "x": 99.653504, "y": -63.616882 }, { "x": 99.609743, "y": -63.746211 }, { "x": 99.559905, "y": -63.872609 }, { "x": 99.504164, "y": -63.995904 }, { "x": 99.442694, "y": -64.115919 }, { "x": 99.375672, "y": -64.23248 }, { "x": 99.303272, "y": -64.345412 }, { "x": 99.225669, "y": -64.45454 }, { "x": 99.143038, "y": -64.559689 }, { "x": 99.055553, "y": -64.660685 }, { "x": 98.96339, "y": -64.757352 }, { "x": 98.866723, "y": -64.849515 }, { "x": 98.765727, "y": -64.937 }, { "x": 98.660578, "y": -65.019631 }, { "x": 98.55145, "y": -65.097234 }, { "x": 98.438518, "y": -65.169634 }, { "x": 98.321957, "y": -65.236656 }, { "x": 98.201942, "y": -65.298125 }, { "x": 98.078647, "y": -65.353867 }, { "x": 97.952249, "y": -65.403705 }, { "x": 97.82292, "y": -65.447466 }, { "x": 97.690838, "y": -65.484974 }, { "x": 97.556175, "y": -65.516055 }, { "x": 97.419108, "y": -65.540533 }, { "x": 97.279811, "y": -65.558234 }, { "x": 97.138459, "y": -65.568983 }, { "x": 96.995228, "y": -65.572605 }, { "x": 37.917212, "y": -65.572605 }, { "x": 37.881403, "y": -65.5717 }, { "x": 37.846064, "y": -65.569012 }, { "x": 37.81124, "y": -65.564587 }, { "x": 37.776973, "y": -65.558468 }, { "x": 37.743307, "y": -65.550698 }, { "x": 37.710286, "y": -65.541322 }, { "x": 37.677953, "y": -65.530382 }, { "x": 37.646354, "y": -65.517923 }, { "x": 37.61553, "y": -65.503988 }, { "x": 37.585526, "y": -65.488622 }, { "x": 37.556386, "y": -65.471867 }, { "x": 37.528153, "y": -65.453767 }, { "x": 37.500871, "y": -65.434367 }, { "x": 37.474584, "y": -65.41371 }, { "x": 37.449335, "y": -65.391839 }, { "x": 37.425168, "y": -65.368799 }, { "x": 37.402128, "y": -65.344633 }, { "x": 37.380257, "y": -65.319384 }, { "x": 37.359599, "y": -65.293097 }, { "x": 37.340198, "y": -65.265815 }, { "x": 37.322099, "y": -65.237582 }, { "x": 37.305343, "y": -65.208442 }, { "x": 37.289976, "y": -65.178438 }, { "x": 37.276041, "y": -65.147615 }, { "x": 37.263582, "y": -65.116014 }, { "x": 37.252642, "y": -65.083682 }, { "x": 37.243265, "y": -65.050661 }, { "x": 37.235495, "y": -65.016994 }, { "x": 37.229375, "y": -64.982726 }, { "x": 37.22495, "y": -64.947901 }, { "x": 37.222263, "y": -64.912562 }, { "x": 37.221357, "y": -64.876752 }, { "x": 37.221357, "y": -45.323251 }, { "x": 37.222263, "y": -45.287442 }, { "x": 37.22495, "y": -45.252103 }, { "x": 37.229375, "y": -45.217279 }, { "x": 37.235495, "y": -45.183012 }, { "x": 37.243265, "y": -45.149346 }, { "x": 37.252642, "y": -45.116325 }, { "x": 37.263582, "y": -45.083992 }, { "x": 37.276041, "y": -45.052393 }, { "x": 37.289976, "y": -45.021569 }, { "x": 37.305343, "y": -44.991565 }, { "x": 37.322098, "y": -44.962425 }, { "x": 37.340198, "y": -44.934192 }, { "x": 37.359599, "y": -44.90691 }, { "x": 37.380256, "y": -44.880623 }, { "x": 37.402127, "y": -44.855374 }, { "x": 37.425168, "y": -44.831207 }, { "x": 37.449335, "y": -44.808167 }, { "x": 37.474583, "y": -44.786296 }, { "x": 37.500871, "y": -44.765638 }, { "x": 37.528152, "y": -44.746237 }, { "x": 37.556385, "y": -44.728138 }, { "x": 37.585526, "y": -44.711382 }, { "x": 37.61553, "y": -44.696015 }, { "x": 37.646353, "y": -44.68208 }, { "x": 37.677953, "y": -44.669621 }, { "x": 37.710286, "y": -44.658681 }, { "x": 37.743307, "y": -44.649304 }, { "x": 37.776972, "y": -44.641534 }, { "x": 37.81124, "y": -44.635414 }, { "x": 37.846064, "y": -44.630989 }, { "x": 37.881403, "y": -44.628302 }, { "x": 37.917212, "y": -44.627396 }, { "x": 96.995228, "y": -44.627396 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* C10: 100n */}
    <capacitor name={"C10"} pcbX={68.43} pcbY={-59.3} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C10 />} schX={3.1000000000000014} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* REF**: MountingHole_3.2mm_M3 */}
    <chip name={"REF__"} pcbX={96.55} pcbY={-47.65} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_3.2mm_M3"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* R7: 5.1k */}
    <resistor name={"R7"} pcbX={90.69} pcbY={-57.49} pcbRotation={-90} resistance={"5.1kohm"} footprint={<Footprint_R7 />} schX={-11} schY={7.2} schRotation={0} schSheetName={"Overview"}/>

    {/* SW1: SW_Push */}
    <chip name={"SW1"} pcbX={75.52} pcbY={-52.355} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SW_Push"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* C4: 100n */}
    <capacitor name={"C4"} pcbX={51.79} pcbY={-58.27} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C4 />} schX={9.400000000000002} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* R6: 330 */}
    <resistor name={"R6"} pcbX={90.77} pcbY={-50.98} pcbRotation={90} resistance={"330ohm"} footprint={<Footprint_R6 />} schX={-6.399999999999999} schY={-7.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* C2: 100n */}
    <capacitor name={"C2"} pcbX={68.44} pcbY={-60.32} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C2 />} schX={7.400000000000002} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* U1: RP2040 */}
    <chip name={"U1"} pcbX={57.32} pcbY={-55.081371} pcbRotation={-135} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"] }} displayName={"RP2040"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* J6: Conn_01x20 */}
    <chip name={"J6"} pcbX={89.36} pcbY={-63.96} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"] }} displayName={"Conn_01x20"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* C5: 100n */}
    <capacitor name={"C5"} pcbX={52.66} pcbY={-50.67} pcbRotation={135} capacitance={"100nF"} footprint={<Footprint_C5 />} schX={10.400000000000002} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* C1: 1u */}
    <capacitor name={"C1"} pcbX={57.92} pcbY={-61.17} pcbRotation={-135} capacitance={"1uF"} footprint={<Footprint_C1 />} schX={7.300000000000001} schY={6} schRotation={-90} schSheetName={"Overview"}/>

    {/* R3: 1k */}
    <resistor name={"R3"} pcbX={71.74} pcbY={-56.61} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R3 />} schX={-4.599999999999998} schY={0.9000000000000004} schRotation={0} schSheetName={"Overview"}/>

    {/* R5: 1k */}
    <resistor name={"R5"} pcbX={43.68} pcbY={-56.99} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R5 />} schX={-10.499999999999998} schY={0} schRotation={0} schSheetName={"Overview"}/>

    {/* C15: 15p */}
    <capacitor name={"C15"} pcbX={45.52} pcbY={-60.17} pcbRotation={-90} capacitance={"15pF"} footprint={<Footprint_C15 />} schX={-13.399999999999999} schY={1} schRotation={0} schSheetName={"Overview"}/>

    {/* D7: S-LMBR340FT1G */}
    <chip name={"D7"} pcbX={84.4} pcbY={-60.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"S-LMBR340FT1G"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* C13: 1u */}
    <capacitor name={"C13"} pcbX={90.69} pcbY={-60.07} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C13 />} schX={-3.4999999999999982} schY={6.5} schRotation={-90} schSheetName={"Overview"}/>

    {/* J1: USB_C_Receptacle_USB2.0_16P */}
    <chip name={"J1"} pcbX={96.195} pcbY={-55.15} pcbRotation={90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} displayName={"USB_C_Receptacle_USB2.0_16P"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* C9: 1u */}
    <capacitor name={"C9"} pcbX={59.44} pcbY={-61.68} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C9 />} schX={3.1999999999999993} schY={5.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* R1: 27.4 */}
    <resistor name={"R1"} pcbX={61.8} pcbY={-60.44} pcbRotation={-45} resistance={"27.4ohm"} footprint={<Footprint_R1 />} schX={8.7} schY={4.5} schRotation={0} schSheetName={"Overview"}/>

    {/* R4: DNF */}
    <chip name={"R4"} pcbX={75.43} pcbY={-55.7125} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNF"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* C11: 100n */}
    <capacitor name={"C11"} pcbX={51.98} pcbY={-51.35} pcbRotation={135} capacitance={"100nF"} footprint={<Footprint_C11 />} schX={2.1000000000000014} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* U3: W25Q64JVZPIQ */}
    <chip name={"U3"} pcbX={75.6475} pcbY={-59.0775} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"W25Q64JVZPIQ"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* J2: Conn_01x20 */}
    <chip name={"J2"} pcbX={89.36} pcbY={-46.18} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"] }} displayName={"Conn_01x20"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* C8: 100n */}
    <capacitor name={"C8"} pcbX={56.41} pcbY={-61.35} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C8 />} schX={13.399999999999999} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* D5: LED */}
    <chip name={"D5"} pcbX={81.15} pcbY={-55.04} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* R2: 27.4 */}
    <resistor name={"R2"} pcbX={61.1} pcbY={-61.13} pcbRotation={-45} resistance={"27.4ohm"} footprint={<Footprint_R2 />} schX={8.7} schY={4.300000000000001} schRotation={0} schSheetName={"Overview"}/>

    {/* Y1: Crystal_GND23 */}
    <chip name={"Y1"} pcbX={42.72} pcbY={-59.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"Crystal_GND23"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* U2: XC6206PxxxMR */}
    <chip name={"U2"} pcbX={88.3575} pcbY={-59.67} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"XC6206PxxxMR"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* C14: 100n */}
    <capacitor name={"C14"} pcbX={79.55} pcbY={-56.77} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C14 />} schX={-0.6999999999999993} schY={2} schRotation={-90} schSheetName={"Overview"}/>

    {/* C12: 1u */}
    <capacitor name={"C12"} pcbX={89.03} pcbY={-57.01} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C12 />} schX={-5.6} schY={6.5} schRotation={-90} schSheetName={"Overview"}/>

    {/* R8: 5.1k */}
    <resistor name={"R8"} pcbX={90.74} pcbY={-53.31} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R8 />} schX={-11} schY={7} schRotation={0} schSheetName={"Overview"}/>

    {/* C3: 100n */}
    <capacitor name={"C3"} pcbX={55.44} pcbY={-60.95} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C3 />} schX={8.399999999999999} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* C6: 100n */}
    <capacitor name={"C6"} pcbX={60.54} pcbY={-48.97} pcbRotation={45} capacitance={"100nF"} footprint={<Footprint_C6 />} schX={11.400000000000002} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* C7: 100n */}
    <capacitor name={"C7"} pcbX={69.67} pcbY={-56.79} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C7 />} schX={12.399999999999999} schY={6.9} schRotation={-90} schSheetName={"Overview"}/>

    {/* C17: 10u */}
    <capacitor name={"C17"} pcbX={68.43} pcbY={-61.35} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C17 />} schX={-2.3999999999999986} schY={-6.6999999999999975} schRotation={-90} schSheetName={"Overview"}/>

    {/* C16: 15p */}
    <capacitor name={"C16"} pcbX={41.61} pcbY={-56.98} pcbRotation={180} capacitance={"15pF"} footprint={<Footprint_C16 />} schX={-13.399999999999999} schY={0} schRotation={0} schSheetName={"Overview"}/>

    {/* REF**: MountingHole_3.2mm_M3 */}
    <chip name={"REF___"} pcbX={96.55} pcbY={-62.6} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_3.2mm_M3"} footprint={<Footprint_REF___ />} noSchematicRepresentation={true}/>

    {/* MX2: MX-NoLED */}
    <chip name={"MX2"} pcbX={63.34125} pcbY={-50} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"MX-NoLED"} footprint={<Footprint_MX2 />} noSchematicRepresentation={true}/>

    {/* MX3: MX-NoLED */}
    <chip name={"MX3"} pcbX={44.29125} pcbY={-50} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"MX-NoLED"} footprint={<Footprint_MX3 />} noSchematicRepresentation={true}/>

    {/* MX1: MX-NoLED */}
    <chip name={"MX1"} pcbX={82.39125} pcbY={-50} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"MX-NoLED"} footprint={<Footprint_MX1 />} noSchematicRepresentation={true}/>

    {/* KiCad net: +1V1 */}
    <KiCadNet name={"_1V1"} connectsTo={[".C10 > .pin1", ".U1 > .pin23", ".U1 > .pin45", ".U1 > .pin50", ".C9 > .pin1", ".C11 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C10 > .pin2", ".R7 > .pin2", ".SW1 > .pin1", ".C4 > .pin2", ".R6 > .pin2", ".C2 > .pin2", ".U1 > .pin19", ".U1 > .pin57", ".J6 > .pin3", ".J6 > .pin8", ".J6 > .pin13", ".J6 > .pin18", ".C5 > .pin2", ".C1 > .pin2", ".C15 > .pin1", ".C13 > .pin2", ".J1 > .pin1", ".J1 > .pin8", ".J1 > .pin9", ".J1 > .pin16", ".J1 > .pin17", ".C9 > .pin2", ".C11 > .pin2", ".U3 > .pin4", ".J2 > .pin3", ".J2 > .pin8", ".J2 > .pin13", ".J2 > .pin18", ".C8 > .pin2", ".Y1 > .pin2", ".Y1 > .pin3", ".U2 > .pin1", ".C14 > .pin2", ".C12 > .pin2", ".R8 > .pin2", ".C3 > .pin2", ".C6 > .pin2", ".C7 > .pin2", ".C17 > .pin2", ".C16 > .pin1", ".MX2 > .pin2", ".MX3 > .pin2", ".MX1 > .pin2"]}/>
    {/* KiCad net: Net-(J1-CC1) */}
    <KiCadNet name={"Net__J1_CC1_"} connectsTo={[".R7 > .pin1", ".J1 > .pin3"]}/>
    {/* KiCad net: Net-(R3-Pad1) */}
    <KiCadNet name={"Net__R3_Pad1_"} connectsTo={[".SW1 > .pin2", ".R3 > .pin1"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".C4 > .pin1", ".C2 > .pin1", ".U1 > .pin1", ".U1 > .pin10", ".U1 > .pin22", ".U1 > .pin33", ".U1 > .pin42", ".U1 > .pin43", ".U1 > .pin44", ".U1 > .pin48", ".U1 > .pin49", ".J6 > .pin4", ".J6 > .pin5", ".C5 > .pin1", ".C1 > .pin1", ".D7 > .pin1", ".R4 > .pin1", ".U3 > .pin8", ".C8 > .pin1", ".C14 > .pin1", ".C3 > .pin1", ".C6 > .pin1", ".C7 > .pin1", ".C17 > .pin1"]}/>
    {/* KiCad net: Net-(D5-K) */}
    <KiCadNet name={"Net__D5_K_"} connectsTo={[".R6 > .pin1", ".D5 > .pin1"]}/>
    {/* KiCad net: GPIO0 */}
    <KiCadNet name={"GPIO0"} connectsTo={[".U1 > .pin2", ".J2 > .pin1"]}/>
    {/* KiCad net: GPIO1 */}
    <KiCadNet name={"GPIO1"} connectsTo={[".U1 > .pin3", ".J2 > .pin2"]}/>
    {/* KiCad net: GPIO2 */}
    <KiCadNet name={"GPIO2"} connectsTo={[".U1 > .pin4", ".J2 > .pin4"]}/>
    {/* KiCad net: GPIO3 */}
    <KiCadNet name={"GPIO3"} connectsTo={[".U1 > .pin5", ".J2 > .pin5"]}/>
    {/* KiCad net: GPIO4 */}
    <KiCadNet name={"GPIO4"} connectsTo={[".U1 > .pin6", ".J2 > .pin6"]}/>
    {/* KiCad net: GPIO5 */}
    <KiCadNet name={"GPIO5"} connectsTo={[".U1 > .pin7", ".J2 > .pin7"]}/>
    {/* KiCad net: GPIO6 */}
    <KiCadNet name={"GPIO6"} connectsTo={[".U1 > .pin8", ".J2 > .pin9"]}/>
    {/* KiCad net: GPIO7 */}
    <KiCadNet name={"GPIO7"} connectsTo={[".U1 > .pin9", ".J2 > .pin10"]}/>
    {/* KiCad net: GPIO8 */}
    <KiCadNet name={"GPIO8"} connectsTo={[".U1 > .pin11", ".J2 > .pin11"]}/>
    {/* KiCad net: GPIO9 */}
    <KiCadNet name={"GPIO9"} connectsTo={[".U1 > .pin12", ".J2 > .pin12"]}/>
    {/* KiCad net: GPIO10 */}
    <KiCadNet name={"GPIO10"} connectsTo={[".U1 > .pin13", ".J2 > .pin14"]}/>
    {/* KiCad net: GPIO11 */}
    <KiCadNet name={"GPIO11"} connectsTo={[".U1 > .pin14", ".J2 > .pin15"]}/>
    {/* KiCad net: GPIO12 */}
    <KiCadNet name={"GPIO12"} connectsTo={[".U1 > .pin15", ".J2 > .pin16"]}/>
    {/* KiCad net: GPIO13 */}
    <KiCadNet name={"GPIO13"} connectsTo={[".U1 > .pin16", ".J2 > .pin17"]}/>
    {/* KiCad net: GPIO14 */}
    <KiCadNet name={"GPIO14"} connectsTo={[".U1 > .pin17", ".J2 > .pin19"]}/>
    {/* KiCad net: GPIO15 */}
    <KiCadNet name={"GPIO15"} connectsTo={[".U1 > .pin18", ".J2 > .pin20"]}/>
    {/* KiCad net: XIN */}
    <KiCadNet name={"XIN"} connectsTo={[".U1 > .pin20", ".C15 > .pin2", ".Y1 > .pin1"]}/>
    {/* KiCad net: XOUT */}
    <KiCadNet name={"XOUT"} connectsTo={[".U1 > .pin21", ".R5 > .pin2"]}/>
    {/* KiCad net: SWCLK */}
    <KiCadNet name={"SWCLK"} connectsTo={[".U1 > .pin24"]}/>
    {/* KiCad net: SWD */}
    <KiCadNet name={"SWD"} connectsTo={[".U1 > .pin25"]}/>
    {/* KiCad net: RUN */}
    <KiCadNet name={"RUN"} connectsTo={[".U1 > .pin26", ".J6 > .pin11"]}/>
    {/* KiCad net: GPIO16 */}
    <KiCadNet name={"GPIO16"} connectsTo={[".U1 > .pin27", ".J6 > .pin20"]}/>
    {/* KiCad net: GPIO17 */}
    <KiCadNet name={"GPIO17"} connectsTo={[".U1 > .pin28", ".J6 > .pin19"]}/>
    {/* KiCad net: GPIO18 */}
    <KiCadNet name={"GPIO18"} connectsTo={[".U1 > .pin29", ".J6 > .pin17"]}/>
    {/* KiCad net: GPIO19 */}
    <KiCadNet name={"GPIO19"} connectsTo={[".U1 > .pin30", ".J6 > .pin16"]}/>
    {/* KiCad net: GPIO20 */}
    <KiCadNet name={"GPIO20"} connectsTo={[".U1 > .pin31", ".J6 > .pin15"]}/>
    {/* KiCad net: GPIO21 */}
    <KiCadNet name={"GPIO21"} connectsTo={[".U1 > .pin32", ".J6 > .pin14"]}/>
    {/* KiCad net: GPIO22 */}
    <KiCadNet name={"GPIO22"} connectsTo={[".U1 > .pin34", ".J6 > .pin12"]}/>
    {/* KiCad net: GPIO23 */}
    <KiCadNet name={"GPIO23"} connectsTo={[".U1 > .pin35", ".MX1 > .pin1"]}/>
    {/* KiCad net: GPIO24 */}
    <KiCadNet name={"GPIO24"} connectsTo={[".U1 > .pin36", ".MX2 > .pin1"]}/>
    {/* KiCad net: GPIO25 */}
    <KiCadNet name={"GPIO25"} connectsTo={[".U1 > .pin37", ".MX3 > .pin1"]}/>
    {/* KiCad net: GPIO26_ADC0 */}
    <KiCadNet name={"GPIO26_ADC0"} connectsTo={[".U1 > .pin38", ".J6 > .pin10"]}/>
    {/* KiCad net: GPIO26_ADC1 */}
    <KiCadNet name={"GPIO26_ADC1"} connectsTo={[".U1 > .pin39", ".J6 > .pin9"]}/>
    {/* KiCad net: GPIO26_ADC2 */}
    <KiCadNet name={"GPIO26_ADC2"} connectsTo={[".U1 > .pin40", ".J6 > .pin7"]}/>
    {/* KiCad net: GPIO26_ADC3 */}
    <KiCadNet name={"GPIO26_ADC3"} connectsTo={[".U1 > .pin41", ".J6 > .pin6"]}/>
    {/* KiCad net: Net-(U1-USB_DM) */}
    <KiCadNet name={"Net__U1_USB_DM_"} connectsTo={[".U1 > .pin46", ".R2 > .pin1"]}/>
    {/* KiCad net: Net-(U1-USB_DP) */}
    <KiCadNet name={"Net__U1_USB_DP_"} connectsTo={[".U1 > .pin47", ".R1 > .pin1"]}/>
    {/* KiCad net: QSPI_SD3 */}
    <KiCadNet name={"QSPI_SD3"} connectsTo={[".U1 > .pin51", ".U3 > .pin7"]}/>
    {/* KiCad net: QSPI_SCLK */}
    <KiCadNet name={"QSPI_SCLK"} connectsTo={[".U1 > .pin52", ".U3 > .pin6"]}/>
    {/* KiCad net: QSPI_SD0 */}
    <KiCadNet name={"QSPI_SD0"} connectsTo={[".U1 > .pin53", ".U3 > .pin5"]}/>
    {/* KiCad net: QSPI_SD2 */}
    <KiCadNet name={"QSPI_SD2"} connectsTo={[".U1 > .pin54", ".U3 > .pin3"]}/>
    {/* KiCad net: QSPI_SD1 */}
    <KiCadNet name={"QSPI_SD1"} connectsTo={[".U1 > .pin55", ".U3 > .pin2"]}/>
    {/* KiCad net: QSPI_SS */}
    <KiCadNet name={"QSPI_SS"} connectsTo={[".U1 > .pin56", ".R3 > .pin2", ".R4 > .pin2", ".U3 > .pin1"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".J6 > .pin1", ".J6 > .pin2", ".J1 > .pin2", ".J1 > .pin7", ".J1 > .pin10", ".J1 > .pin15", ".D5 > .pin2", ".U2 > .pin3", ".C12 > .pin1"]}/>
    {/* KiCad net: Net-(C16-Pad2) */}
    <KiCadNet name={"Net__C16_Pad2_"} connectsTo={[".R5 > .pin1", ".Y1 > .pin4", ".C16 > .pin2"]}/>
    {/* KiCad net: Net-(D7-A) */}
    <KiCadNet name={"Net__D7_A_"} connectsTo={[".D7 > .pin2", ".C13 > .pin1", ".U2 > .pin2"]}/>
    {/* KiCad net: D+ */}
    <KiCadNet name={"D_"} connectsTo={[".J1 > .pin4", ".J1 > .pin12", ".R1 > .pin2"]}/>
    {/* KiCad net: D- */}
    <KiCadNet name={"D__"} connectsTo={[".J1 > .pin5", ".J1 > .pin13", ".R2 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__J1_SBU1_PadA8_"} connectsTo={[".J1 > .pin6"]}/>
    {/* KiCad net: Net-(J1-CC2) */}
    <KiCadNet name={"Net__J1_CC2_"} connectsTo={[".J1 > .pin11", ".R8 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__J1_SBU2_PadB8_"} connectsTo={[".J1 > .pin14"]}/>
    <KiCadSchematic /></board>);
}
