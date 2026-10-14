import { KiCadSchematic, KiCadNet } from './schematic'
// Arduino water-level monitor
// Source: https://github.com/Srushti-D-Hebbar/arduino-water-level-monitor
// Commit: 7b47f46949e99d8075590de0c5a08a550d646d84; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_R4, Footprint_RV1, Footprint_J4, Footprint_U2, Footprint_C4, Footprint_SW2, Footprint_R3, Footprint_C2, Footprint_Q1, Footprint_SW1, Footprint_J2, Footprint_D1, Footprint_R1, Footprint_K1, Footprint_R5, Footprint_C1, Footprint_C3, Footprint_J3, Footprint_U1 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={88.64} height={78.81} thickness={1.6} layers={2} outline={[{ "x": -44.32000000000001, "y": 39.40500000000001 }, { "x": 44.31999999999999, "y": 39.40500000000001 }, { "x": 44.31999999999999, "y": -39.405 }, { "x": -44.32000000000001, "y": -39.405 }, { "x": -44.32000000000001, "y": 39.40500000000001 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* Original KiCad copper zones, clipped to the board, in ascending priority. */}
    <copperpour name="GND_top_0_0" connectsTo="net.GND" layer="top" clearance={0.5} coveredWithSolderMask outline={[{"x":44.22,"y":39.255},{"x":-44,"y":39.015},{"x":-44.17,"y":-39.255},{"x":44.22,"y":-39.275}]} />
    <copperpour name="GND_bottom_0_0" connectsTo="net.GND" layer="bottom" clearance={0.5} coveredWithSolderMask outline={[{"x":44.22,"y":39.255},{"x":-44,"y":39.015},{"x":-44.17,"y":-39.255},{"x":44.22,"y":-39.275}]} />
    {/* R4: 10k */}
    <resistor name={"R4"} pcbX={-33} pcbY={-31.415} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R4 />} schX={-0.3000000000000025} schY={-2.1999999999999993} schRotation={0} schSheetName={"Overview"}/>

    {/* RV1: 10k */}
    <chip name={"RV1"} pcbX={-27.3} pcbY={-21.265} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"10k"} footprint={<Footprint_RV1 />} noSchematicRepresentation={true}/>

    {/* J4: POWER_IN */}
    <chip name={"J4"} pcbX={41.27} pcbY={-6.435} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"POWER_IN"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* U2: HC-SR04 */}
    <chip name={"U2"} pcbX={-25.79} pcbY={-12.055} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"HC-SR04"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* C4: 10uF */}
    <capacitor name={"C4"} pcbX={-29.64} pcbY={-14.215} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C4 />} schX={11.8} schY={4.400000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* SW2: AUTO/MANUAL */}
    <chip name={"SW2"} pcbX={-36.16} pcbY={-10.48} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"AUTO/MANUAL"} footprint={<Footprint_SW2 />} noSchematicRepresentation={true}/>

    {/* R3: 220R */}
    <resistor name={"R3"} pcbX={-24.71} pcbY={2.5575} pcbRotation={-90} resistance={"220ohm"} footprint={<Footprint_R3 />} schX={-1.7000000000000028} schY={2.900000000000002} schRotation={180} schSheetName={"Overview"}/>

    {/* C2: 10uF */}
    <capacitor name={"C2"} pcbX={-24.73} pcbY={-31.38} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C2 />} schX={3.299999999999997} schY={5.000000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* Q1: 2N2219 */}
    <chip name={"Q1"} pcbX={-36.15} pcbY={-1.875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2N2219"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* SW1: SET */}
    <chip name={"SW1"} pcbX={-35.44} pcbY={-24.525} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SET"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* J2: Conn_01x16_Pin */}
    <chip name={"J2"} pcbX={-20.46} pcbY={-31.775} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} displayName={"Conn_01x16_Pin"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* D1: 1N4007 */}
    <chip name={"D1"} pcbX={-25.3} pcbY={8.025} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1N4007"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R1: 1k */}
    <resistor name={"R1"} pcbX={-28.64} pcbY={-0.325} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R1 />} schX={-11.800000000000002} schY={-4.499999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* K1: SANYOU_SRD_Form_C */}
    <chip name={"K1"} pcbX={-36.62} pcbY={18.875} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SANYOU_SRD_Form_C"} footprint={<Footprint_K1 />} noSchematicRepresentation={true}/>

    {/* R5: 10k */}
    <resistor name={"R5"} pcbX={-34.91} pcbY={-17.145} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R5 />} schX={-0.3000000000000025} schY={-4.199999999999999} schRotation={0} schSheetName={"Overview"}/>

    {/* C1: 100nF */}
    <capacitor name={"C1"} pcbX={-24.78} pcbY={-26.95} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C1 />} schX={2.4999999999999964} schY={5.000000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C3: 100nF */}
    <capacitor name={"C3"} pcbX={-29.59} pcbY={-9.815} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C3 />} schX={10.899999999999999} schY={4.400000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* J3: RELAY_OUT */}
    <chip name={"J3"} pcbX={-41.23} pcbY={16.275} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RELAY_OUT"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* U1: Arduino_UNO_R3 */}
    <chip name={"U1"} pcbX={34.96} pcbY={3.84} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"] }} displayName={"Arduino_UNO_R3"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".R4 > .pin1", ".RV1 > .pin1", ".J4 > .pin1", ".U2 > .pin1", ".C4 > .pin1", ".R3 > .pin2", ".C2 > .pin1", ".J2 > .pin2", ".D1 > .pin1", ".K1 > .pin5", ".R5 > .pin1", ".C1 > .pin1", ".C3 > .pin1", ".U1 > .pin5"]}/>
    {/* KiCad net: /BTN_SET */}
    <KiCadNet name={"_BTN_SET"} connectsTo={[".R4 > .pin2", ".SW1 > .pin1", ".U1 > .pin25"]}/>
    {/* KiCad net: /VO */}
    <KiCadNet name={"_VO"} connectsTo={[".RV1 > .pin2", ".J2 > .pin3"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".RV1 > .pin3", ".J4 > .pin2", ".U2 > .pin4", ".C4 > .pin2", ".SW2 > .pin2", ".C2 > .pin2", ".Q1 > .pin1", ".SW1 > .pin2", ".J2 > .pin1", ".J2 > .pin5", ".J2 > .pin16", ".C1 > .pin2", ".C3 > .pin2", ".U1 > .pin6", ".U1 > .pin7"]}/>
    {/* KiCad net: /TRIG */}
    <KiCadNet name={"_TRIG"} connectsTo={[".U2 > .pin2", ".U1 > .pin23"]}/>
    {/* KiCad net: /ECHO */}
    <KiCadNet name={"_ECHO"} connectsTo={[".U2 > .pin3", ".U1 > .pin24"]}/>
    {/* KiCad net: /AUTO_MODE */}
    <KiCadNet name={"_AUTO_MODE"} connectsTo={[".SW2 > .pin1", ".R5 > .pin2", ".U1 > .pin26"]}/>
    {/* KiCad net: /A */}
    <KiCadNet name={"_A"} connectsTo={[".R3 > .pin1", ".J2 > .pin15"]}/>
    {/* KiCad net: Net-(Q1-B) */}
    <KiCadNet name={"Net__Q1_B_"} connectsTo={[".Q1 > .pin2", ".R1 > .pin2"]}/>
    {/* KiCad net: Net-(D1-A) */}
    <KiCadNet name={"Net__D1_A_"} connectsTo={[".Q1 > .pin3", ".D1 > .pin2", ".K1 > .pin2"]}/>
    {/* KiCad net: /LCD_RS */}
    <KiCadNet name={"_LCD_RS"} connectsTo={[".J2 > .pin4", ".U1 > .pin17"]}/>
    {/* KiCad net: /LCD_E */}
    <KiCadNet name={"_LCD_E"} connectsTo={[".J2 > .pin6", ".U1 > .pin18"]}/>
    {/* KiCad net: /D0 */}
    <KiCadNet name={"_D0"} connectsTo={[".J2 > .pin7"]}/>
    {/* KiCad net: /D1 */}
    <KiCadNet name={"_D1"} connectsTo={[".J2 > .pin8"]}/>
    {/* KiCad net: /D2 */}
    <KiCadNet name={"_D2"} connectsTo={[".J2 > .pin9"]}/>
    {/* KiCad net: /D3 */}
    <KiCadNet name={"_D3"} connectsTo={[".J2 > .pin10"]}/>
    {/* KiCad net: /LCD_D4 */}
    <KiCadNet name={"_LCD_D4"} connectsTo={[".J2 > .pin11", ".U1 > .pin19"]}/>
    {/* KiCad net: /LCD_D5 */}
    <KiCadNet name={"_LCD_D5"} connectsTo={[".J2 > .pin12", ".U1 > .pin20"]}/>
    {/* KiCad net: /LCD_D6 */}
    <KiCadNet name={"_LCD_D6"} connectsTo={[".J2 > .pin13", ".U1 > .pin21"]}/>
    {/* KiCad net: /LCD_D7 */}
    <KiCadNet name={"_LCD_D7"} connectsTo={[".J2 > .pin14", ".U1 > .pin22"]}/>
    {/* KiCad net: /RELAY_CTRL */}
    <KiCadNet name={"_RELAY_CTRL"} connectsTo={[".R1 > .pin1", ".U1 > .pin27"]}/>
    {/* KiCad net: /COM */}
    <KiCadNet name={"_COM"} connectsTo={[".K1 > .pin1", ".J3 > .pin2"]}/>
    {/* KiCad net: /NO */}
    <KiCadNet name={"_NO"} connectsTo={[".K1 > .pin3", ".J3 > .pin1"]}/>
    {/* KiCad net: /NC */}
    <KiCadNet name={"_NC"} connectsTo={[".K1 > .pin4", ".J3 > .pin3"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad1) */}
    <KiCadNet name={"unconnected__U1_NC_Pad1_"} connectsTo={[".U1 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-IOREF-Pad2) */}
    <KiCadNet name={"unconnected__U1_IOREF_Pad2_"} connectsTo={[".U1 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-~{RESET}-Pad3) */}
    <KiCadNet name={"unconnected__U1___RESET__Pad3_"} connectsTo={[".U1 > .pin3"]}/>
    {/* KiCad net: unconnected-(U1-3V3-Pad4) */}
    <KiCadNet name={"unconnected__U1_3V3_Pad4_"} connectsTo={[".U1 > .pin4"]}/>
    {/* KiCad net: unconnected-(U1-VIN-Pad8) */}
    <KiCadNet name={"unconnected__U1_VIN_Pad8_"} connectsTo={[".U1 > .pin8"]}/>
    {/* KiCad net: unconnected-(U1-A0-Pad9) */}
    <KiCadNet name={"unconnected__U1_A0_Pad9_"} connectsTo={[".U1 > .pin9"]}/>
    {/* KiCad net: unconnected-(U1-A1-Pad10) */}
    <KiCadNet name={"unconnected__U1_A1_Pad10_"} connectsTo={[".U1 > .pin10"]}/>
    {/* KiCad net: unconnected-(U1-A2-Pad11) */}
    <KiCadNet name={"unconnected__U1_A2_Pad11_"} connectsTo={[".U1 > .pin11"]}/>
    {/* KiCad net: unconnected-(U1-A3-Pad12) */}
    <KiCadNet name={"unconnected__U1_A3_Pad12_"} connectsTo={[".U1 > .pin12"]}/>
    {/* KiCad net: unconnected-(U1-SDA{slash}A4-Pad13) */}
    <KiCadNet name={"unconnected__U1_SDA_slash_A4_Pad13_"} connectsTo={[".U1 > .pin13"]}/>
    {/* KiCad net: unconnected-(U1-SCL{slash}A5-Pad14) */}
    <KiCadNet name={"unconnected__U1_SCL_slash_A5_Pad14_"} connectsTo={[".U1 > .pin14"]}/>
    {/* KiCad net: unconnected-(U1-D0{slash}RX-Pad15) */}
    <KiCadNet name={"unconnected__U1_D0_slash_RX_Pad15_"} connectsTo={[".U1 > .pin15"]}/>
    {/* KiCad net: unconnected-(U1-D1{slash}TX-Pad16) */}
    <KiCadNet name={"unconnected__U1_D1_slash_TX_Pad16_"} connectsTo={[".U1 > .pin16"]}/>
    {/* KiCad net: unconnected-(U1-D13-Pad28) */}
    <KiCadNet name={"unconnected__U1_D13_Pad28_"} connectsTo={[".U1 > .pin28"]}/>
    {/* KiCad net: unconnected-(U1-GND-Pad29) */}
    <KiCadNet name={"unconnected__U1_GND_Pad29_"} connectsTo={[".U1 > .pin29"]}/>
    {/* KiCad net: unconnected-(U1-AREF-Pad30) */}
    <KiCadNet name={"unconnected__U1_AREF_Pad30_"} connectsTo={[".U1 > .pin30"]}/>
    {/* KiCad net: unconnected-(U1-SDA{slash}A4-Pad31) */}
    <KiCadNet name={"unconnected__U1_SDA_slash_A4_Pad31_"} connectsTo={[".U1 > .pin31"]}/>
    {/* KiCad net: unconnected-(U1-SCL{slash}A5-Pad32) */}
    <KiCadNet name={"unconnected__U1_SCL_slash_A5_Pad32_"} connectsTo={[".U1 > .pin32"]}/>
    <KiCadSchematic /></board>);
}
