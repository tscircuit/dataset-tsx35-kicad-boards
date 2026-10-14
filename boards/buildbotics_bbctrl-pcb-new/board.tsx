import { KiCadSchematic, KiCadNet } from './schematic'
// Buildbotics controller
// Source: https://github.com/buildbotics/bbctrl-pcb-new
// Commit: 1a2f36ddc4797ac05e45405fb5664ff1f7ca7974; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_D11, Footprint_R8, Footprint_J11, Footprint_D18, Footprint_TP5, Footprint_R46, Footprint_R43, Footprint_R75, Footprint_R64, Footprint_C59, Footprint_C37, Footprint_Q10, Footprint_C82, Footprint_R29, Footprint_R87, Footprint_R5, Footprint_Q2, Footprint_J12, Footprint_C88, Footprint_R33, Footprint_TP24, Footprint_TP12, Footprint_Q15, Footprint_R67, Footprint_C61, Footprint_C96, Footprint_R66, Footprint_C15, Footprint_U20, Footprint_U9, Footprint_Q22, Footprint_C87, Footprint_R54, Footprint_C94, Footprint_TP21, Footprint_C28, Footprint_D9, Footprint_C33, Footprint_C6, Footprint_D3, Footprint_TP19, Footprint_TP16, Footprint_C43, Footprint_C24, Footprint_C64, Footprint_C97, Footprint_C58, Footprint_C19, Footprint_C9, Footprint_C23, Footprint_C69, Footprint_U25, Footprint_Q23, Footprint_U16, Footprint_C54, Footprint_R85, Footprint_C83, Footprint_C90, Footprint_C10, Footprint_C29, Footprint_U6, Footprint_D12, Footprint_D17, Footprint_TP20, Footprint_C12, Footprint_C72, Footprint_D7, Footprint_R22, Footprint_C62, Footprint_TP3, Footprint_TP10, Footprint_C27, Footprint_R58, Footprint_D16, Footprint_C38, Footprint_R71, Footprint_C55, Footprint_J10, Footprint_TP4, Footprint_U4, Footprint_D10, Footprint_R69, Footprint_C73, Footprint_C86, Footprint_C66, Footprint_J4, Footprint_Q13, Footprint_TP23, Footprint_C78, Footprint_C51, Footprint_R44, Footprint_U8, Footprint_Q24, Footprint_R3, Footprint_C63, Footprint_R21, Footprint_Q7, Footprint_C84, Footprint_C2, Footprint_C79, Footprint_J6, Footprint_C26, Footprint_C44, Footprint_C41, Footprint_C32, Footprint_C20, Footprint_Q9, Footprint_U13, Footprint_TP2, Footprint_C74, Footprint_R30, Footprint_C89, Footprint_R42, Footprint_Q5, Footprint_TP11, Footprint_Z1, Footprint_R84, Footprint_U7, Footprint_C35, Footprint_L2, Footprint_R7, Footprint_TP14, Footprint_U22, Footprint_R18, Footprint_R79, Footprint_TP18, Footprint_R4, Footprint_U23, Footprint_R39, Footprint_X1, Footprint_C68, Footprint_R41, Footprint_R23, Footprint_C91, Footprint_C31, Footprint_R49, Footprint_R40, Footprint_C46, Footprint_J2, Footprint_C30, Footprint_C56, Footprint_C81, Footprint_R34, Footprint_Q8, Footprint_R55, Footprint_C67, Footprint_R82, Footprint_U27, Footprint_R74, Footprint_R6, Footprint_R28, Footprint_R25, Footprint_TP1, Footprint_TP8, Footprint_REF__, Footprint_C16, Footprint_D1, Footprint_R24, Footprint_R80, Footprint_Q14, Footprint_R27, Footprint_J5, Footprint_C70, Footprint_J13, Footprint_C95, Footprint_R90, Footprint_R1, Footprint_C52, Footprint_R11, Footprint_R61, Footprint_R73, Footprint_R57, Footprint_U2, Footprint_D6, Footprint_C40, Footprint_Q19, Footprint_REF___, Footprint_REF____, Footprint_C4, Footprint_R14, Footprint_J8, Footprint_U26, Footprint_R53, Footprint_U21, Footprint_R81, Footprint_U19, Footprint_R86, Footprint_Q17, Footprint_C57, Footprint_R32, Footprint_Q16, Footprint_C93, Footprint_R13, Footprint_R10, Footprint_C85, Footprint_Z4, Footprint_R52, Footprint_D4, Footprint_R38, Footprint_Q6, Footprint_U10, Footprint_C76, Footprint_Q18, Footprint_C18, Footprint_J9, Footprint_U1, Footprint_U24, Footprint_U15, Footprint_U18, Footprint_C53, Footprint_Q21, Footprint_C75, Footprint_C21, Footprint_TP13, Footprint_J3, Footprint_R26, Footprint_R77, Footprint_TP6, Footprint_R47, Footprint_R12, Footprint_R68, Footprint_C17, Footprint_Z2, Footprint_J7, Footprint_C71, Footprint_R51, Footprint_U5, Footprint_R91, Footprint_D8, Footprint_C34, Footprint_R19, Footprint_U3, Footprint_R50, Footprint_C77, Footprint_R78, Footprint_R37, Footprint_R70, Footprint_R45, Footprint_C45, Footprint_C47, Footprint_J15, Footprint_R16, Footprint_D14, Footprint_R48, Footprint_R76, Footprint_Q11, Footprint_R20, Footprint_C8, Footprint_R31, Footprint_U14, Footprint_R60, Footprint_C7, Footprint_C3, Footprint_TP9, Footprint_R63, Footprint_R17, Footprint_C11, Footprint_C25, Footprint_C1, Footprint_TP17, Footprint_J1, Footprint_R56, Footprint_R15, Footprint_C49, Footprint_Q12, Footprint_R2, Footprint_R72, Footprint_Q20, Footprint_C5, Footprint_D20, Footprint_C13, Footprint_R65, Footprint_REF_____, Footprint_Q3, Footprint_C98, Footprint_Q4, Footprint_C92, Footprint_TP7, Footprint_C48, Footprint_C22, Footprint_C36, Footprint_C60, Footprint_D19, Footprint_U12, Footprint_U11, Footprint_U17, Footprint_R36, Footprint_Q1, Footprint_R35, Footprint_TP15, Footprint_C14, Footprint_R62, Footprint_C39, Footprint_C42, Footprint_C65, Footprint_R59, Footprint_J14, Footprint_L1, Footprint_D2, Footprint_R9, Footprint_D13, Footprint_C50, Footprint_D15, Footprint_U29, Footprint_TP22 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={143.3} height={155} thickness={1.512} layers={4} outline={[{ "x": -71.65, "y": 77.5 }, { "x": 71.65, "y": 77.5 }, { "x": 71.65, "y": -77.5 }, { "x": -71.65, "y": -77.5 }, { "x": -71.65, "y": 77.5 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* D11: CDBW46-G */}
    <chip name={"D11"} pcbX={48.55} pcbY={-34.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* R8: 180 */}
    <resistor name={"R8"} pcbX={-17.95} pcbY={-51.7} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R8 />} schX={-7} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* J11: SERIAL */}
    <chip name={"J11"} pcbX={-23.75} pcbY={56.125} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"SERIAL"} footprint={<Footprint_J11 />} noSchematicRepresentation={true}/>

    {/* D18: CDBW46-G */}
    <chip name={"D18"} pcbX={54.65} pcbY={-31.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D18 />} noSchematicRepresentation={true}/>

    {/* TP5: Vs */}
    <chip name={"TP5"} pcbX={-29.25} pcbY={48.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Vs"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* R46: .05 */}
    <resistor name={"R46"} pcbX={15.3} pcbY={-7.8} pcbRotation={-90} resistance={".05ohm"} footprint={<Footprint_R46 />} schX={0.3000000000000007} schY={-0.5999999999999988} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* R43: 180 */}
    <resistor name={"R43"} pcbX={-21.1} pcbY={-21.7} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R43 />} schX={-7} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* R75: 130 */}
    <resistor name={"R75"} pcbX={-47.266} pcbY={-68.55} pcbRotation={90} resistance={"130ohm"} footprint={<Footprint_R75 />} schX={-2.1500000000000004} schY={3.7500000000000004} schRotation={90} schSheetName={"Peripherals"}/>

    {/* R64: 75 */}
    <resistor name={"R64"} pcbX={11.04} pcbY={44.98} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R64 />} schX={0.3999999999999986} schY={1.6000000000000005} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* C59: .22uF 100V */}
    <capacitor name={"C59"} pcbX={-1.292} pcbY={45.75} pcbRotation={180} capacitance={".22uF"} footprint={<Footprint_C59 />} schX={-6.3} schY={-4.5} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* C37: 10pF */}
    <capacitor name={"C37"} pcbX={-62.76} pcbY={-18.512} pcbRotation={90} capacitance={"10pF"} footprint={<Footprint_C37 />} schX={-7.8999999999999995} schY={-3.049999999999999} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* Q10: FDC5614P */}
    <chip name={"Q10"} pcbX={-32.05} pcbY={36.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"FDC5614P"} footprint={<Footprint_Q10 />} noSchematicRepresentation={true}/>

    {/* C82: 130pF */}
    <capacitor name={"C82"} pcbX={-58.696} pcbY={-64.74} pcbRotation={-90} capacitance={"130pF"} footprint={<Footprint_C82 />} schX={-6.1499999999999995} schY={4.25} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* R29: 8.06k */}
    <resistor name={"R29"} pcbX={-26.25} pcbY={38.1} pcbRotation={90} resistance={"8.06kohm"} footprint={<Footprint_R29 />} schX={-7.949999999999999} schY={-1.549999999999999} schRotation={90} schSheetName={"Power Supply"}/>

    {/* R87: 10k */}
    <resistor name={"R87"} pcbX={-56.4} pcbY={35} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R87 />} schX={1.75} schY={-1} schRotation={-90} schSheetName={"Raspberry Pi"}/>

    {/* R5: .05 */}
    <resistor name={"R5"} pcbX={14.35} pcbY={-61.75} pcbRotation={90} resistance={".05ohm"} footprint={<Footprint_R5 />} schX={0.5999999999999996} schY={-4.4} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* Q2: DMTH6010LPD-13 */}
    <chip name={"Q2"} pcbX={20.85} pcbY={-47.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* J12: I2C */}
    <chip name={"J12"} pcbX={-17.15} pcbY={14.825} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"I2C"} footprint={<Footprint_J12 />} noSchematicRepresentation={true}/>

    {/* C88: .1uF */}
    <capacitor name={"C88"} pcbX={54.55} pcbY={-55.9} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C88 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_13"}/>

    {/* R33: 47k */}
    <resistor name={"R33"} pcbX={-44.85} pcbY={20.1} pcbRotation={0} resistance={"47kohm"} footprint={<Footprint_R33 />} schX={-3.45} schY={-4.149999999999999} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* TP24: Vin */}
    <chip name={"TP24"} pcbX={-39.85} pcbY={38.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Vin"} footprint={<Footprint_TP24 />} noSchematicRepresentation={true}/>

    {/* TP12: test */}
    <chip name={"TP12"} pcbX={-62.05} pcbY={-12.1} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* Q15: DMTH6010LPD-13 */}
    <chip name={"Q15"} pcbX={20.8525} pcbY={7.53} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q15 />} noSchematicRepresentation={true}/>

    {/* R67: 100 */}
    <resistor name={"R67"} pcbX={-36.25} pcbY={-47.6} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R67 />} schX={2.799999999999999} schY={-4.049999999999999} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* C61: .1uF */}
    <capacitor name={"C61"} pcbX={-10.95} pcbY={42.5} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C61 />} schX={-5.700000000000001} schY={1.7999999999999998} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* C96: .1uF */}
    <capacitor name={"C96"} pcbX={-14.75} pcbY={-73.1} pcbRotation={180} capacitance={".1uF"} footprint={<Footprint_C96 />} schX={1.1500000000000004} schY={-0.14999999999999947} schRotation={90} schSheetName={"Peripherals"}/>

    {/* R66: 100 */}
    <resistor name={"R66"} pcbX={-20.45} pcbY={-33} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R66 />} schX={3.0999999999999996} schY={-3.6499999999999986} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* C15: .1uF */}
    <capacitor name={"C15"} pcbX={54.1} pcbY={-63.25} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C15 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_12"}/>

    {/* U20: SN74AHC1G125DBVR */}
    <chip name={"U20"} pcbX={9.0562} pcbY={-34.250001} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U20 />} noSchematicRepresentation={true}/>

    {/* U9: DRV8711DCP */}
    <chip name={"U9"} pcbX={5.65} pcbY={-17} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"] }} displayName={"DRV8711DCP"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* Q22: DMTH6010LPD-13 */}
    <chip name={"Q22"} pcbX={20.325} pcbY={44.89} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q22 />} noSchematicRepresentation={true}/>

    {/* C87: .1uF */}
    <capacitor name={"C87"} pcbX={-57.95} pcbY={70.3} pcbRotation={180} capacitance={".1uF"} footprint={<Footprint_C87 />} schX={3.3500000000000014} schY={-0.9499999999999993} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R54: .05 */}
    <resistor name={"R54"} pcbX={14.85} pcbY={22.94} pcbRotation={-90} resistance={".05ohm"} footprint={<Footprint_R54 />} schX={0.3000000000000007} schY={-0.5999999999999988} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* C94: 1uF 100V */}
    <capacitor name={"C94"} pcbX={-2.75} pcbY={-61.6} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C94 />} schX={-2.9499999999999993} schY={0.9500000000000002} schRotation={0} schSheetName={"Peripherals"}/>

    {/* TP21: test */}
    <chip name={"TP21"} pcbX={-31.18} pcbY={-46.81} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP21 />} noSchematicRepresentation={true}/>

    {/* C28: .1uF */}
    <capacitor name={"C28"} pcbX={-48.45} pcbY={-0.3} pcbRotation={-90} capacitance={".1uF"} footprint={<Footprint_C28 />} schX={-6.85} schY={-6.75} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* D9: RB521S30T1G */}
    <chip name={"D9"} pcbX={-66.05} pcbY={-46.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RB521S30T1G"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* C33: .1uF */}
    <capacitor name={"C33"} pcbX={-35.45} pcbY={-16.6} pcbRotation={-135} capacitance={".1uF"} footprint={<Footprint_C33 />} schX={-2.7} schY={4.45} schRotation={90} schSheetName={"Microprocessor"}/>

    {/* C6: 10n */}
    <capacitor name={"C6"} pcbX={-7.65} pcbY={-44.6} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C6 />} schX={-5.6} schY={2.7} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* D3: MBR0580 */}
    <chip name={"D3"} pcbX={-18.65} pcbY={28.25} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"MBR0580"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* TP19: test */}
    <chip name={"TP19"} pcbX={-22.805} pcbY={-45.885} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP19 />} noSchematicRepresentation={true}/>

    {/* TP16: test */}
    <chip name={"TP16"} pcbX={-33.665} pcbY={-11.185} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* C43: 1nF */}
    <capacitor name={"C43"} pcbX={8.45} pcbY={-24.4} pcbRotation={-90} capacitance={"1nF"} footprint={<Footprint_C43 />} schX={-0.29999999999999893} schY={-5.1} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* C24: 68nF */}
    <capacitor name={"C24"} pcbX={-49.05} pcbY={14.3} pcbRotation={90} capacitance={"68nF"} footprint={<Footprint_C24 />} schX={1.1500000000000021} schY={-4.649999999999999} schRotation={180} schSheetName={"Power Supply"}/>

    {/* C64: 1nF */}
    <capacitor name={"C64"} pcbX={4.5} pcbY={32.16} pcbRotation={0} capacitance={"1nF"} footprint={<Footprint_C64 />} schX={-0.29999999999999893} schY={-5.1} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* C97: .1uF */}
    <capacitor name={"C97"} pcbX={-42.75} pcbY={54.9} pcbRotation={180} capacitance={".1uF"} footprint={<Footprint_C97 />} schX={5.649999999999999} schY={-1.7499999999999982} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C58: 22uF */}
    <capacitor name={"C58"} pcbX={-5.614887} pcbY={18.63} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C58 />} schX={7} schY={5.4} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* C19: 10uF 63V */}
    <capacitor name={"C19"} pcbX={-42.05} pcbY={34.3} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C19 />} schX={-5.549999999999999} schY={-2.9499999999999975} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C9: .1uF */}
    <capacitor name={"C9"} pcbX={-7.65} pcbY={-47.6} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C9 />} schX={-5.700000000000001} schY={1.7999999999999998} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* C23: .1uF */}
    <capacitor name={"C23"} pcbX={-38.45} pcbY={14.1} pcbRotation={180} capacitance={".1uF"} footprint={<Footprint_C23 />} schX={0.5500000000000007} schY={-2.8499999999999996} schRotation={0} schSheetName={"Power Supply"}/>

    {/* C69: 130pF */}
    <capacitor name={"C69"} pcbX={-20.4} pcbY={-30.75} pcbRotation={0} capacitance={"130pF"} footprint={<Footprint_C69 />} schX={3.3000000000000007} schY={-3.1500000000000004} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* U25: ZXTR2012Z-7 */}
    <chip name={"U25"} pcbX={-3.118} pcbY={-66.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"ZXTR2012Z-7"} footprint={<Footprint_U25 />} noSchematicRepresentation={true}/>

    {/* Q23: 2N7002K */}
    <chip name={"Q23"} pcbX={-53.4} pcbY={29.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2N7002K"} footprint={<Footprint_Q23 />} noSchematicRepresentation={true}/>

    {/* U16: ISL83485IBZ */}
    <chip name={"U16"} pcbX={-53.38105} pcbY={-68.9945} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"ISL83485IBZ"} footprint={<Footprint_U16 />} noSchematicRepresentation={true}/>

    {/* C54: 1nF */}
    <capacitor name={"C54"} pcbX={7.73} pcbY={3.81} pcbRotation={180} capacitance={"1nF"} footprint={<Footprint_C54 />} schX={-0.29999999999999893} schY={-5.1} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* R85: 10k */}
    <resistor name={"R85"} pcbX={-50.4} pcbY={35} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R85 />} schX={-1.049999999999999} schY={-0.9000000000000004} schRotation={-90} schSheetName={"Raspberry Pi"}/>

    {/* C83: 130pF */}
    <capacitor name={"C83"} pcbX={-58.442} pcbY={-70.836} pcbRotation={-90} capacitance={"130pF"} footprint={<Footprint_C83 />} schX={-5.95} schY={2.8500000000000005} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* C90: .1uF */}
    <capacitor name={"C90"} pcbX={42.95} pcbY={-47.9} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C90 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_15"}/>

    {/* C10: 1uF */}
    <capacitor name={"C10"} pcbX={-7.15} pcbY={-49.75} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C10 />} schX={-5.700000000000001} schY={1.200000000000001} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* C29: .1uF */}
    <capacitor name={"C29"} pcbX={-56.45} pcbY={-4.5} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C29 />} schX={-3.9499999999999993} schY={-6.349999999999998} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* U6: L7987 */}
    <chip name={"U6"} pcbX={-39.65} pcbY={19.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["EPAD"] }} displayName={"L7987"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* D12: CDBW46-G */}
    <chip name={"D12"} pcbX={48.95} pcbY={-38.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* D17: CDBW46-G */}
    <chip name={"D17"} pcbX={54.55} pcbY={-53.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D17 />} noSchematicRepresentation={true}/>

    {/* TP20: test */}
    <chip name={"TP20"} pcbX={-40.26} pcbY={-45.2} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP20 />} noSchematicRepresentation={true}/>

    {/* C12: 1uF 100V */}
    <capacitor name={"C12"} pcbX={-0.15} pcbY={70.25} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C12 />} schX={-0.8499999999999996} schY={5.65} schRotation={0} schSheetName={"Power Supply"}/>

    {/* C72: .1uF */}
    <capacitor name={"C72"} pcbX={-5.15} pcbY={-35.75} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C72 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_3"}/>

    {/* D7: RB521S30T1G */}
    <chip name={"D7"} pcbX={-66.85} pcbY={-53.3} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RB521S30T1G"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* R22: 180 */}
    <resistor name={"R22"} pcbX={-67.9} pcbY={62.25} pcbRotation={180} resistance={"180ohm"} footprint={<Footprint_R22 />} schX={9.55} schY={-2.4499999999999993} schRotation={0} schSheetName={"Power Supply"}/>

    {/* C62: 1uF */}
    <capacitor name={"C62"} pcbX={-10.25} pcbY={40.4} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C62 />} schX={-5.700000000000001} schY={1.200000000000001} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* TP3: TP_VDD */}
    <chip name={"TP3"} pcbX={-28.85} pcbY={42.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_VDD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* TP10: TP_3.3V */}
    <chip name={"TP10"} pcbX={-63.05} pcbY={0.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_3.3V"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* C27: 47uF */}
    <capacitor name={"C27"} pcbX={-45.65} pcbY={3.7} pcbRotation={-90} capacitance={"47uF"} footprint={<Footprint_C27 />} schX={3.75} schY={-3.1500000000000004} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R58: 2.4k */}
    <resistor name={"R58"} pcbX={-50.15} pcbY={-39.5} pcbRotation={0} resistance={"2.4kohm"} footprint={<Footprint_R58 />} schX={-7} schY={-2.700000000000001} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* D16: CDBW46-G */}
    <chip name={"D16"} pcbX={54.65} pcbY={-28.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D16 />} noSchematicRepresentation={true}/>

    {/* C38: .22uF 100V */}
    <capacitor name={"C38"} pcbX={3.5} pcbY={-10.58} pcbRotation={180} capacitance={".22uF"} footprint={<Footprint_C38 />} schX={-6.3} schY={-4.5} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* R71: 180 */}
    <resistor name={"R71"} pcbX={-66.062} pcbY={-64.994} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R71 />} schX={-7.45} schY={3.9500000000000006} schRotation={0} schSheetName={"Peripherals"}/>

    {/* C55: 100uF */}
    <capacitor name={"C55"} pcbX={38.1} pcbY={3.867677} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C55 />} schX={4.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* J10: RPI */}
    <chip name={"J10"} pcbX={-6.28} pcbY={60.23} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"] }} displayName={"RPI"} footprint={<Footprint_J10 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_SenseIn */}
    <chip name={"TP4"} pcbX={-6.65} pcbY={69.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_SenseIn"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* U4: TSC2012IDT */}
    <chip name={"U4"} pcbX={-17.806525} pcbY={57.97415} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"TSC2012IDT"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* D10: RB521S30T1G */}
    <chip name={"D10"} pcbX={-62.35} pcbY={-46.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RB521S30T1G"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* R69: 180 */}
    <resistor name={"R69"} pcbX={-20.4} pcbY={-36.75} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R69 />} schX={6.1} schY={-3.8499999999999996} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* C73: .1uF */}
    <capacitor name={"C73"} pcbX={-4.9} pcbY={-28.5} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C73 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_4"}/>

    {/* C86: .1uF */}
    <capacitor name={"C86"} pcbX={-44.75} pcbY={-72.6} pcbRotation={-90} capacitance={".1uF"} footprint={<Footprint_C86 />} schX={-1.5500000000000007} schY={2.95} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* C66: 100uF */}
    <capacitor name={"C66"} pcbX={39.9} pcbY={30.59} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C66 />} schX={5.099999999999998} schY={5.4} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* J4: Conn_02x03_Odd_Even */}
    <chip name={"J4"} pcbX={-67.4} pcbY={-25.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"Conn_02x03_Odd_Even"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* Q13: DMTH6010LPD-13 */}
    <chip name={"Q13"} pcbX={21.155} pcbY={-29.7125} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q13 />} noSchematicRepresentation={true}/>

    {/* TP23: 12V */}
    <chip name={"TP23"} pcbX={-11.55} pcbY={-63} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"12V"} footprint={<Footprint_TP23 />} noSchematicRepresentation={true}/>

    {/* C78: .1uF */}
    <capacitor name={"C78"} pcbX={-27.2535} pcbY={1.717901} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C78 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_9"}/>

    {/* C51: .1uF */}
    <capacitor name={"C51"} pcbX={-5.73} pcbY={14.59} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C51 />} schX={-5.700000000000001} schY={1.7999999999999998} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* R44: .05 */}
    <resistor name={"R44"} pcbX={14.35} pcbY={-30.8} pcbRotation={90} resistance={".05ohm"} footprint={<Footprint_R44 />} schX={0.5999999999999996} schY={-4.4} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* U8: LM74801QDRRRQ1 */}
    <chip name={"U8"} pcbX={31.1} pcbY={68.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"] }} displayName={"LM74801QDRRRQ1"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* Q24: 2N7002K */}
    <chip name={"Q24"} pcbX={-53.4} pcbY={35} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2N7002K"} footprint={<Footprint_Q24 />} noSchematicRepresentation={true}/>

    {/* R3: .05 */}
    <resistor name={"R3"} pcbX={14.45} pcbY={-39.1} pcbRotation={-90} resistance={".05ohm"} footprint={<Footprint_R3 />} schX={0.3000000000000007} schY={-0.5999999999999988} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* C63: 10n */}
    <capacitor name={"C63"} pcbX={-7.134} pcbY={44.48} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C63 />} schX={-5.6} schY={2.7} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* R21: 10k */}
    <resistor name={"R21"} pcbX={-67.9} pcbY={64.5} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R21 />} schX={8.650000000000002} schY={-2.7499999999999982} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* Q7: 2N7002K */}
    <chip name={"Q7"} pcbX={-42.45} pcbY={49.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2N7002K"} footprint={<Footprint_Q7 />} noSchematicRepresentation={true}/>

    {/* C84: .1uF */}
    <capacitor name={"C84"} pcbX={-44.726} pcbY={-64.486} pcbRotation={-90} capacitance={".1uF"} footprint={<Footprint_C84 />} schX={-1.5500000000000007} schY={4.45} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* C2: 100uF */}
    <capacitor name={"C2"} pcbX={32.35} pcbY={-61.25} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C2 />} schX={4.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* C79: .1uF */}
    <capacitor name={"C79"} pcbX={-17.8875} pcbY={46.4} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C79 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_10"}/>

    {/* J6: Conn_02x08_Odd_Even */}
    <chip name={"J6"} pcbX={5.05} pcbY={-43.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} displayName={"Conn_02x08_Odd_Even"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* C26: 1.5nF */}
    <capacitor name={"C26"} pcbX={-46.65} pcbY={11.1} pcbRotation={0} capacitance={"1.5nF"} footprint={<Footprint_C26 />} schX={2.5500000000000007} schY={-3.8499999999999996} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C44: 100uF */}
    <capacitor name={"C44"} pcbX={41.85} pcbY={-29.632323} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C44 />} schX={4.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* C41: 1uF */}
    <capacitor name={"C41"} pcbX={-5.05} pcbY={-15.18} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C41 />} schX={-5.700000000000001} schY={1.200000000000001} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* C32: .1uF */}
    <capacitor name={"C32"} pcbX={-41.1} pcbY={-10.85} pcbRotation={-135} capacitance={".1uF"} footprint={<Footprint_C32 />} schX={-3.4000000000000004} schY={4.45} schRotation={90} schSheetName={"Microprocessor"}/>

    {/* C20: 1uF 100V */}
    <capacitor name={"C20"} pcbX={-42.65} pcbY={31.3} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C20 />} schX={-5.049999999999999} schY={-2.9499999999999975} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* Q9: 2N7002K */}
    <chip name={"Q9"} pcbX={-26.85} pcbY={33.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2N7002K"} footprint={<Footprint_Q9 />} noSchematicRepresentation={true}/>

    {/* U13: SN74AHC1G125DBVR */}
    <chip name={"U13"} pcbX={54.4562} pcbY={-59.049999} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U13 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_HGATE */}
    <chip name={"TP2"} pcbX={9.05} pcbY={67.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_HGATE"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* C74: .1uF */}
    <capacitor name={"C74"} pcbX={-40.08125} pcbY={-1.0625} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C74 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_5"}/>

    {/* R30: 402 */}
    <resistor name={"R30"} pcbX={-32.07} pcbY={33.46} pcbRotation={180} resistance={"402ohm"} footprint={<Footprint_R30 />} schX={-6.6499999999999995} schY={-2.25} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C89: .1uF */}
    <capacitor name={"C89"} pcbX={40.95} pcbY={-54.8} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C89 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_14"}/>

    {/* R42: 2.4k */}
    <resistor name={"R42"} pcbX={-21.1} pcbY={-19.6} pcbRotation={0} resistance={"2.4kohm"} footprint={<Footprint_R42 />} schX={-7} schY={-2.700000000000001} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* Q5: BSC040N08NS5ATMA1 */}
    <chip name={"Q5"} pcbX={12.85} pcbY={71.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"BSC040N08NS5ATMA1"} footprint={<Footprint_Q5 />} noSchematicRepresentation={true}/>

    {/* TP11: TP_5V */}
    <chip name={"TP11"} pcbX={-49.65} pcbY={4.9} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_5V"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* Z1: DDZ6V2BQ-7 */}
    <chip name={"Z1"} pcbX={-42.85} pcbY={42.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DDZ6V2BQ-7"} footprint={<Footprint_Z1 />} noSchematicRepresentation={true}/>

    {/* R84: 10k */}
    <resistor name={"R84"} pcbX={-50.4} pcbY={29.25} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R84 />} schX={-1.049999999999999} schY={1.0999999999999996} schRotation={-90} schSheetName={"Raspberry Pi"}/>

    {/* U7: AZ1117IH-3.3TRG1 */}
    <chip name={"U7"} pcbX={-56.45} pcbY={0.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"AZ1117IH-3.3TRG1"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* C35: .1uF */}
    <capacitor name={"C35"} pcbX={-51.45} pcbY={-33.7} pcbRotation={45} capacitance={".1uF"} footprint={<Footprint_C35 />} schX={-1.0999999999999996} schY={4.45} schRotation={90} schSheetName={"Microprocessor"}/>

    {/* L2: L_Coupled_1243 */}
    <chip name={"L2"} pcbX={-40.408} pcbY={-68.804} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"L_Coupled_1243"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* R7: 2.4k */}
    <resistor name={"R7"} pcbX={-17.95} pcbY={-53.9} pcbRotation={0} resistance={"2.4kohm"} footprint={<Footprint_R7 />} schX={-7} schY={-2.700000000000001} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* TP14: TP_VIN */}
    <chip name={"TP14"} pcbX={54.95} pcbY={72.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_VIN"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* U22: SN74AHC1G125DBVR */}
    <chip name={"U22"} pcbX={-10.65} pcbY={-30.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U22 />} noSchematicRepresentation={true}/>

    {/* R18: 10k */}
    <resistor name={"R18"} pcbX={-62.55} pcbY={71.2} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R18 />} schX={4.949999999999999} schY={0.6500000000000004} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R79: 100k */}
    <resistor name={"R79"} pcbX={-24.05} pcbY={-71.1} pcbRotation={90} resistance={"100kohm"} footprint={<Footprint_R79 />} schX={-1.049999999999999} schY={-1.6499999999999986} schRotation={90} schSheetName={"Peripherals"}/>

    {/* TP18: test */}
    <chip name={"TP18"} pcbX={-19.57} pcbY={36.02} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP18 />} noSchematicRepresentation={true}/>

    {/* R4: 75 */}
    <resistor name={"R4"} pcbX={7.6} pcbY={-52.25} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R4 />} schX={0.3000000000000007} schY={-2} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* U23: SN74AHC1G125DBVR */}
    <chip name={"U23"} pcbX={-27.55} pcbY={-1.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U23 />} noSchematicRepresentation={true}/>

    {/* R39: 180 */}
    <resistor name={"R39"} pcbX={-18.65} pcbY={-7} pcbRotation={180} resistance={"180ohm"} footprint={<Footprint_R39 />} schX={-3.999999999999999} schY={-1.6499999999999995} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* X1: ABLS-16.000MHZ-B4-T */}
    <chip name={"X1"} pcbX={-66.824} pcbY={-12.924} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"ABLS-16.000MHZ-B4-T"} footprint={<Footprint_X1 />} noSchematicRepresentation={true}/>

    {/* C68: 22uF */}
    <capacitor name={"C68"} pcbX={3.305112} pcbY={49.3} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C68 />} schX={7} schY={5.4} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* R41: 10k */}
    <resistor name={"R41"} pcbX={-64.15} pcbY={-49} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R41 />} schX={7.9} schY={2.6500000000000004} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* R23: 10k */}
    <resistor name={"R23"} pcbX={-37.65} pcbY={48.9} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R23 />} schX={4.15} schY={3.1500000000000012} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C91: .1uF */}
    <capacitor name={"C91"} pcbX={-33.35} pcbY={3.8} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C91 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_16"}/>

    {/* C31: .1uF */}
    <capacitor name={"C31"} pcbX={-53.1} pcbY={-11.55} pcbRotation={-45} capacitance={".1uF"} footprint={<Footprint_C31 />} schX={-4.2} schY={4.45} schRotation={90} schSheetName={"Microprocessor"}/>

    {/* R49: 75 */}
    <resistor name={"R49"} pcbX={14.15} pcbY={-17.9} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R49 />} schX={0.3000000000000007} schY={-2} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* R40: 10k */}
    <resistor name={"R40"} pcbX={-65.25} pcbY={-56.5} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R40 />} schX={5.800000000000001} schY={2.7500000000000004} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* C46: 22uF */}
    <capacitor name={"C46"} pcbX={-4.31} pcbY={-21.25} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C46 />} schX={6.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* J2: 39-30-0060 */}
    <chip name={"J2"} pcbX={66.1} pcbY={60.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"39-30-0060"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* C30: .1uF */}
    <capacitor name={"C30"} pcbX={-57.95} pcbY={-15.75} pcbRotation={-45} capacitance={".1uF"} footprint={<Footprint_C30 />} schX={-5} schY={4.45} schRotation={90} schSheetName={"Microprocessor"}/>

    {/* C56: 100uF */}
    <capacitor name={"C56"} pcbX={29.69} pcbY={22.06} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C56 />} schX={5.099999999999998} schY={5.4} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* C81: 130pF */}
    <capacitor name={"C81"} pcbX={-63.014} pcbY={-70.836} pcbRotation={-90} capacitance={"130pF"} footprint={<Footprint_C81 />} schX={-6.85} schY={2.8500000000000005} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* R34: 20k */}
    <resistor name={"R34"} pcbX={-44.85} pcbY={22.3} pcbRotation={0} resistance={"20kohm"} footprint={<Footprint_R34 />} schX={-3.049999999999999} schY={-4.149999999999999} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* Q8: NTD5867NLT4G */}
    <chip name={"Q8"} pcbX={-51.25} pcbY={48.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin3": ["3"], "pin4": ["4"] }} displayName={"NTD5867NLT4G"} footprint={<Footprint_Q8 />} noSchematicRepresentation={true}/>

    {/* R55: 75 */}
    <resistor name={"R55"} pcbX={13.58} pcbY={7.08} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R55 />} schX={0.3999999999999986} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* C67: 22uF */}
    <capacitor name={"C67"} pcbX={-6.25} pcbY={32.6} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C67 />} schX={6.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* R82: 2.1k */}
    <resistor name={"R82"} pcbX={-17.75} pcbY={-65.2} pcbRotation={0} resistance={"2.1kohm"} footprint={<Footprint_R82 />} schX={1.25} schY={-2.549999999999999} schRotation={0} schSheetName={"Peripherals"}/>

    {/* U27: SN74AHC1G125DBVR */}
    <chip name={"U27"} pcbX={55.25} pcbY={-44.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U27 />} noSchematicRepresentation={true}/>

    {/* R74: 750 */}
    <resistor name={"R74"} pcbX={-47.266} pcbY={-64.47} pcbRotation={90} resistance={"750ohm"} footprint={<Footprint_R74 />} schX={-2.1500000000000004} schY={4.45} schRotation={90} schSheetName={"Peripherals"}/>

    {/* R6: 75 */}
    <resistor name={"R6"} pcbX={7.6} pcbY={-54.5} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R6 />} schX={0.3999999999999986} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* R28: 402k */}
    <resistor name={"R28"} pcbX={-29.85} pcbY={28.3} pcbRotation={180} resistance={"402kohm"} footprint={<Footprint_R28 />} schX={-8.25} schY={-3.1500000000000004} schRotation={0} schSheetName={"Power Supply"}/>

    {/* R25: 5.1 */}
    <resistor name={"R25"} pcbX={-63.85} pcbY={49.945} pcbRotation={-90} resistance={"5.1ohm"} footprint={<Footprint_R25 />} schX={6.550000000000001} schY={3.250000000000001} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* TP1: TP_DGATE */}
    <chip name={"TP1"} pcbX={49.95} pcbY={72.73} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_DGATE"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_GATE */}
    <chip name={"TP8"} pcbX={-33.85} pcbY={30.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_GATE"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* REF**: MountingHole_3.2mm_M3 */}
    <chip name={"REF__"} pcbX={46.85} pcbY={48.25} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_3.2mm_M3"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* C16: .22uF */}
    <capacitor name={"C16"} pcbX={-29.85} pcbY={30.7} pcbRotation={0} capacitance={".22uF"} footprint={<Footprint_C16 />} schX={-7.6499999999999995} schY={-4.049999999999999} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* D1: 5.0SMDJ48CA */}
    <chip name={"D1"} pcbX={56.3} pcbY={48.62} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.0SMDJ48CA"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R24: 37.4k */}
    <resistor name={"R24"} pcbX={-53.25} pcbY={54.3} pcbRotation={0} resistance={"37.4kohm"} footprint={<Footprint_R24 />} schX={5.75} schY={3.1500000000000012} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R80: 100k */}
    <resistor name={"R80"} pcbX={-20.75} pcbY={-70.1} pcbRotation={0} resistance={"100kohm"} footprint={<Footprint_R80 />} schX={-0.5499999999999989} schY={-1.1499999999999995} schRotation={0} schSheetName={"Peripherals"}/>

    {/* Q14: DMTH6010LPD-13 */}
    <chip name={"Q14"} pcbX={21.15} pcbY={-16.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q14 />} noSchematicRepresentation={true}/>

    {/* R27: 16.2K */}
    <resistor name={"R27"} pcbX={-25.25} pcbY={29.9} pcbRotation={90} resistance={"16.2kohm"} footprint={<Footprint_R27 />} schX={-8.75} schY={-4.049999999999999} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* J5: DB25_Male */}
    <chip name={"J5"} pcbX={60.35} pcbY={-58.87} pcbRotation={90} pinLabels={{ "pin26": ["0"], "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"] }} displayName={"DB25_Male"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* C70: 130pF */}
    <capacitor name={"C70"} pcbX={-36.15} pcbY={-49.75} pcbRotation={0} capacitance={"130pF"} footprint={<Footprint_C70 />} schX={3.6999999999999993} schY={-4.549999999999999} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* J13: LCD */}
    <chip name={"J13"} pcbX={-63.9} pcbY={54.25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"LCD"} footprint={<Footprint_J13 />} noSchematicRepresentation={true}/>

    {/* C95: .22uF */}
    <capacitor name={"C95"} pcbX={-20.65} pcbY={-72.3} pcbRotation={180} capacitance={".22uF"} footprint={<Footprint_C95 />} schX={-0.049999999999998934} schY={-1.75} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* R90: 1.82k */}
    <resistor name={"R90"} pcbX={-47.85} pcbY={18.7} pcbRotation={90} resistance={"1.82kohm"} footprint={<Footprint_R90 />} schX={1.450000000000001} schY={-5.85} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R1: 75 */}
    <resistor name={"R1"} pcbX={10.06} pcbY={-49.13} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R1 />} schX={0.3000000000000007} schY={0.20000000000000107} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* C52: 1uF */}
    <capacitor name={"C52"} pcbX={-5.76} pcbY={12.48} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C52 />} schX={-5.700000000000001} schY={1.200000000000001} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* R11: 2.49k */}
    <resistor name={"R11"} pcbX={26.85} pcbY={69} pcbRotation={-90} resistance={"2.49kohm"} footprint={<Footprint_R11 />} schX={-7.249999999999999} schY={3.0500000000000007} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R61: 75 */}
    <resistor name={"R61"} pcbX={10.98} pcbY={42.89} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R61 />} schX={0.3000000000000007} schY={0.20000000000000107} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* R73: 2.4k */}
    <resistor name={"R73"} pcbX={-60.728} pcbY={-70.836} pcbRotation={90} resistance={"2.4kohm"} footprint={<Footprint_R73 />} schX={-6.35} schY={2.8500000000000005} schRotation={90} schSheetName={"Peripherals"}/>

    {/* R57: 75 */}
    <resistor name={"R57"} pcbX={13.62} pcbY={9.26} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R57 />} schX={0.3000000000000007} schY={-2} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* U2: ATtiny1616-S */}
    <chip name={"U2"} pcbX={-42.65} pcbY={62.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"] }} displayName={"ATtiny1616-S"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* D6: STPS3L60U */}
    <chip name={"D6"} pcbX={-37.15} pcbY={11.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"STPS3L60U"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* C40: .1uF */}
    <capacitor name={"C40"} pcbX={-5.05} pcbY={-12.98} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C40 />} schX={-5.700000000000001} schY={1.7999999999999998} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* Q19: DMTH6010LPD-13 */}
    <chip name={"Q19"} pcbX={20.345} pcbY={38.33} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q19 />} noSchematicRepresentation={true}/>

    {/* REF**: MountingHole_3.2mm_M3 */}
    <chip name={"REF___"} pcbX={-11.15} pcbY={-0.75} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_3.2mm_M3"} footprint={<Footprint_REF___ />} noSchematicRepresentation={true}/>

    {/* REF**: MountingHole_3.2mm_M3 */}
    <chip name={"REF____"} pcbX={46.85} pcbY={-0.75} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_3.2mm_M3"} footprint={<Footprint_REF____ />} noSchematicRepresentation={true}/>

    {/* C4: 22uF */}
    <capacitor name={"C4"} pcbX={-11.65} pcbY={-56} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C4 />} schX={6.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* R14: 100k .5% */}
    <resistor name={"R14"} pcbX={-31.15} pcbY={52.25} pcbRotation={180} resistance={"100kohm"} footprint={<Footprint_R14 />} schX={7.850000000000001} schY={6.050000000000001} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* J8: 43045-0402 */}
    <chip name={"J8"} pcbX={63.030001} pcbY={13.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"43045-0402"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* U26: SN74AHC1G125DBVR */}
    <chip name={"U26"} pcbX={-33.35} pcbY={0.8} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U26 />} noSchematicRepresentation={true}/>

    {/* R53: 75 */}
    <resistor name={"R53"} pcbX={13.72} pcbY={14.11} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R53 />} schX={0.3000000000000007} schY={0.20000000000000107} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* U21: SN74AHC1G125DBVR */}
    <chip name={"U21"} pcbX={-11.95} pcbY={-38.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U21 />} noSchematicRepresentation={true}/>

    {/* R81: 1k */}
    <resistor name={"R81"} pcbX={-20.75} pcbY={-64.3} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R81 />} schX={0.5500000000000007} schY={-2.9499999999999993} schRotation={90} schSheetName={"Peripherals"}/>

    {/* U19: SN74AHC1G125DBVR */}
    <chip name={"U19"} pcbX={-40.25} pcbY={-4.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U19 />} noSchematicRepresentation={true}/>

    {/* R86: 10k */}
    <resistor name={"R86"} pcbX={-56.4} pcbY={29.25} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R86 />} schX={1.6500000000000004} schY={1} schRotation={-90} schSheetName={"Raspberry Pi"}/>

    {/* Q17: DMTH6010LPD-13 */}
    <chip name={"Q17"} pcbX={20.85} pcbY={1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q17 />} noSchematicRepresentation={true}/>

    {/* C57: 22uF */}
    <capacitor name={"C57"} pcbX={-4.644888} pcbY={3.99} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C57 />} schX={6.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* R32: 100k */}
    <resistor name={"R32"} pcbX={-42.65} pcbY={26.9} pcbRotation={180} resistance={"100kohm"} footprint={<Footprint_R32 />} schX={-4.1499999999999995} schY={-2.9499999999999975} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* Q16: DMTH6010LPD-13 */}
    <chip name={"Q16"} pcbX={20.8525} pcbY={20.53} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q16 />} noSchematicRepresentation={true}/>

    {/* C93: .1uF */}
    <capacitor name={"C93"} pcbX={-53.05} pcbY={-65.2} pcbRotation={180} capacitance={".1uF"} footprint={<Footprint_C93 />} schX={-3.0500000000000007} schY={4.75} schRotation={180} schSheetName={"Peripherals"}/>

    {/* R13: .002 */}
    <resistor name={"R13"} pcbX={-11.25} pcbY={57.15} pcbRotation={-90} resistance={".002ohm"} footprint={<Footprint_R13 />} schX={5.050000000000001} schY={6.750000000000001} schRotation={0} schSheetName={"Power Supply"}/>

    {/* R10: 4.53k */}
    <resistor name={"R10"} pcbX={22.35} pcbY={71.25} pcbRotation={-90} resistance={"4.53kohm"} footprint={<Footprint_R10 />} schX={-7.249999999999999} schY={4.750000000000001} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C85: .1uF */}
    <capacitor name={"C85"} pcbX={-44.726} pcbY={-68.55} pcbRotation={-90} capacitance={".1uF"} footprint={<Footprint_C85 />} schX={-1.5500000000000007} schY={3.6500000000000004} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* Z4: 12V */}
    <chip name={"Z4"} pcbX={-23.22} pcbY={37.87} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"12V"} footprint={<Footprint_Z4 />} noSchematicRepresentation={true}/>

    {/* R52: .05 */}
    <resistor name={"R52"} pcbX={15.05} pcbY={0.52} pcbRotation={90} resistance={".05ohm"} footprint={<Footprint_R52 />} schX={0.5999999999999996} schY={-4.4} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* D4: MBR0580 */}
    <chip name={"D4"} pcbX={-35.4} pcbY={27.3} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"MBR0580"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* R38: 2.4k */}
    <resistor name={"R38"} pcbX={-18.65} pcbY={-4.75} pcbRotation={0} resistance={"2.4kohm"} footprint={<Footprint_R38 />} schX={-4.8999999999999995} schY={-1.3499999999999996} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* Q6: BSC040N08NS5ATMA1 */}
    <chip name={"Q6"} pcbX={41.65} pcbY={71.605} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"BSC040N08NS5ATMA1"} footprint={<Footprint_Q6 />} noSchematicRepresentation={true}/>

    {/* U10: SN74AHC1G125DBVR */}
    <chip name={"U10"} pcbX={-57.95} pcbY={73.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* C76: .1uF */}
    <capacitor name={"C76"} pcbX={-11.4} pcbY={-35.75} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C76 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_7"}/>

    {/* Q18: DMTH6010LPD-13 */}
    <chip name={"Q18"} pcbX={20.8425} pcbY={14.04} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q18 />} noSchematicRepresentation={true}/>

    {/* C18: 47n */}
    <capacitor name={"C18"} pcbX={-31.25} pcbY={24.5} pcbRotation={0} capacitance={"47nF"} footprint={<Footprint_C18 />} schX={-6.05} schY={-2.9499999999999975} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* J9: 43045-0402 */}
    <chip name={"J9"} pcbX={63.030001} pcbY={23.45} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"43045-0402"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* U1: DRV8711DCP */}
    <chip name={"U1"} pcbX={0.35} pcbY={-51.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"] }} displayName={"DRV8711DCP"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* U24: SN74AHC1G125DBVR */}
    <chip name={"U24"} pcbX={-17.9438} pcbY={43.350001} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U24 />} noSchematicRepresentation={true}/>

    {/* U15: SN74AHC1G125DBVR */}
    <chip name={"U15"} pcbX={42.6562} pcbY={-50.949999} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U15 />} noSchematicRepresentation={true}/>

    {/* U18: SN74AHC1G125DBVR */}
    <chip name={"U18"} pcbX={-5.05} pcbY={-31.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U18 />} noSchematicRepresentation={true}/>

    {/* C53: 10n */}
    <capacitor name={"C53"} pcbX={-2.32} pcbY={15.76} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C53 />} schX={-5.6} schY={2.7} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* Q21: DMTH6010LPD-13 */}
    <chip name={"Q21"} pcbX={20.345} pcbY={31.79} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q21 />} noSchematicRepresentation={true}/>

    {/* C75: .1uF */}
    <capacitor name={"C75"} pcbX={9.122} pcbY={-31.212} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C75 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_6"}/>

    {/* C21: 1uF 100V */}
    <capacitor name={"C21"} pcbX={-42.65} pcbY={29.1} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C21 />} schX={-4.55} schY={-2.9499999999999975} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* TP13: TP_GND */}
    <chip name={"TP13"} pcbX={-49.45} pcbY={-51.1} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_GND"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* J3: ENABLE */}
    <chip name={"J3"} pcbX={-22.15} pcbY={25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"ENABLE"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* R26: 49.9k */}
    <resistor name={"R26"} pcbX={-18.65} pcbY={23.25} pcbRotation={-90} resistance={"49.9kohm"} footprint={<Footprint_R26 />} schX={-9.45} schY={1.8500000000000014} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R77: 10 */}
    <resistor name={"R77"} pcbX={-35.836} pcbY={-67.788} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R77 />} schX={0.25} schY={3.9500000000000006} schRotation={0} schSheetName={"Peripherals"}/>

    {/* TP6: TP_PGOOD */}
    <chip name={"TP6"} pcbX={-50.65} pcbY={73.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_PGOOD"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* R47: 75 */}
    <resistor name={"R47"} pcbX={13.25} pcbY={-20.9} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R47 />} schX={0.3999999999999986} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* R12: 100 */}
    <resistor name={"R12"} pcbX={5.1} pcbY={69.5} pcbRotation={180} resistance={"100ohm"} footprint={<Footprint_R12 />} schX={-1.549999999999999} schY={5.65} schRotation={0} schSheetName={"Power Supply"}/>

    {/* R68: 2.4k */}
    <resistor name={"R68"} pcbX={-20.4} pcbY={-39} pcbRotation={0} resistance={"2.4kohm"} footprint={<Footprint_R68 />} schX={6} schY={-3.549999999999999} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* C17: 47nF */}
    <capacitor name={"C17"} pcbX={-28.65} pcbY={38.1} pcbRotation={90} capacitance={"47nF"} footprint={<Footprint_C17 />} schX={-7.35} schY={-1.549999999999999} schRotation={90} schSheetName={"Power Supply"}/>

    {/* Z2: DDZ6V2BQ-7 */}
    <chip name={"Z2"} pcbX={-22.05} pcbY={29.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DDZ6V2BQ-7"} footprint={<Footprint_Z2 />} noSchematicRepresentation={true}/>

    {/* J7: 43045-0402 */}
    <chip name={"J7"} pcbX={63.030001} pcbY={2.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"43045-0402"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* C71: .22uF */}
    <capacitor name={"C71"} pcbX={-62.69} pcbY={-57.46} pcbRotation={-90} capacitance={".22uF"} footprint={<Footprint_C71 />} schX={6.35} schY={-4.75} schRotation={0} schSheetName={"Peripherals"}/>

    {/* R51: 180 */}
    <resistor name={"R51"} pcbX={-21.51} pcbY={2.67} pcbRotation={90} resistance={"180ohm"} footprint={<Footprint_R51 />} schX={-7} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* U5: SN74AHC1G125DBVR */}
    <chip name={"U5"} pcbX={53.85} pcbY={-66.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* R91: 10k */}
    <resistor name={"R91"} pcbX={-58.71} pcbY={6.53} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R91 />} schX={-6.5} schY={-2.1499999999999986} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* D8: RB521S30T1G */}
    <chip name={"D8"} pcbX={-63.55} pcbY={-53.3} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RB521S30T1G"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* C34: .1uF */}
    <capacitor name={"C34"} pcbX={-38.4} pcbY={-29.7} pcbRotation={135} capacitance={".1uF"} footprint={<Footprint_C34 />} schX={-1.8999999999999995} schY={4.45} schRotation={90} schSheetName={"Microprocessor"}/>

    {/* R19: 4.99k */}
    <resistor name={"R19"} pcbX={-62.55} pcbY={73.6} pcbRotation={0} resistance={"4.99kohm"} footprint={<Footprint_R19 />} schX={4.650000000000002} schY={-0.34999999999999964} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* U3: ATxmega256A3U-AU */}
    <chip name={"U3"} pcbX={-46.9} pcbY={-21.75} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"] }} displayName={"ATxmega256A3U-AU"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* R50: 2.4k */}
    <resistor name={"R50"} pcbX={-19.2} pcbY={2.62} pcbRotation={90} resistance={"2.4kohm"} footprint={<Footprint_R50 />} schX={-7} schY={-2.700000000000001} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* C77: .1uF */}
    <capacitor name={"C77"} pcbX={-10.75} pcbY={-33.5} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C77 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Microprocessor/3to5_8"}/>

    {/* R78: 10 */}
    <resistor name={"R78"} pcbX={-35.836} pcbY={-70.074} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R78 />} schX={0.25} schY={3.5500000000000007} schRotation={0} schSheetName={"Peripherals"}/>

    {/* R37: 10k */}
    <resistor name={"R37"} pcbX={-46.65} pcbY={8.9} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R37 />} schX={3.0500000000000007} schY={-3.1500000000000004} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R70: 180 */}
    <resistor name={"R70"} pcbX={-66.062} pcbY={-69.058} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R70 />} schX={-7.45} schY={3.3500000000000005} schRotation={0} schSheetName={"Peripherals"}/>

    {/* R45: 75 */}
    <resistor name={"R45"} pcbX={13.7} pcbY={-15.25} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R45 />} schX={0.3000000000000007} schY={0.20000000000000107} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* C45: 100uF */}
    <capacitor name={"C45"} pcbX={29.4} pcbY={-7.35} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C45 />} schX={5.099999999999998} schY={5.4} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* C47: 22uF */}
    <capacitor name={"C47"} pcbX={-4.634888} pcbY={-6.79} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C47 />} schX={7} schY={5.4} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* J15: Conn_01x03 */}
    <chip name={"J15"} pcbX={-61.65} pcbY={6.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"Conn_01x03"} footprint={<Footprint_J15 />} noSchematicRepresentation={true}/>

    {/* R16: 2.49k */}
    <resistor name={"R16"} pcbX={-31.15} pcbY={56.75} pcbRotation={180} resistance={"2.49kohm"} footprint={<Footprint_R16 />} schX={7.850000000000001} schY={4.65} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* D14: CDBW46-G */}
    <chip name={"D14"} pcbX={54.65} pcbY={-33.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* R48: 75 */}
    <resistor name={"R48"} pcbX={13.45} pcbY={-13.15} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R48 />} schX={0.3999999999999986} schY={1.6000000000000005} schRotation={0} schSheetName={"MotorDriver1"}/>

    {/* R76: 750 */}
    <resistor name={"R76"} pcbX={-47.266} pcbY={-72.614} pcbRotation={90} resistance={"750ohm"} footprint={<Footprint_R76 />} schX={-2.1500000000000004} schY={2.95} schRotation={90} schSheetName={"Peripherals"}/>

    {/* Q11: DMTH6010LPD-13 */}
    <chip name={"Q11"} pcbX={21.15} pcbY={-23.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q11 />} noSchematicRepresentation={true}/>

    {/* R20: 10k */}
    <resistor name={"R20"} pcbX={-41.4} pcbY={71.5} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R20 />} schX={-0.34999999999999964} schY={3.3500000000000005} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C8: 1uF */}
    <capacitor name={"C8"} pcbX={-5.45} pcbY={-44.6625} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C8 />} schX={-5.800000000000001} schY={-5.4} schRotation={180} schSheetName={"MotorDriver0"}/>

    {/* R31: 2k */}
    <resistor name={"R31"} pcbX={-26.45} pcbY={24.5} pcbRotation={0} resistance={"2kohm"} footprint={<Footprint_R31 />} schX={-6.6499999999999995} schY={-4.049999999999999} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* U14: SN74AHC1G125DBVR */}
    <chip name={"U14"} pcbX={41.45} pcbY={-57.8} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U14 />} noSchematicRepresentation={true}/>

    {/* R60: .05 */}
    <resistor name={"R60"} pcbX={13.85} pcbY={31.19} pcbRotation={90} resistance={".05ohm"} footprint={<Footprint_R60 />} schX={0.5999999999999996} schY={-4.4} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* C7: .22uF 100V */}
    <capacitor name={"C7"} pcbX={-1.75} pcbY={-44.8} pcbRotation={180} capacitance={".22uF"} footprint={<Footprint_C7 />} schX={-6.3} schY={-4.5} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* C3: 100uF */}
    <capacitor name={"C3"} pcbX={32.75} pcbY={-40.367677} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C3 />} schX={5.099999999999998} schY={5.4} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* TP9: TP_FB */}
    <chip name={"TP9"} pcbX={-26.65} pcbY={19.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_FB"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* R63: 75 */}
    <resistor name={"R63"} pcbX={9.54} pcbY={36.31} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R63 />} schX={0.3999999999999986} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* R17: 24.9k */}
    <resistor name={"R17"} pcbX={-62.55} pcbY={68.9} pcbRotation={180} resistance={"24.9kohm"} footprint={<Footprint_R17 />} schX={4.25} schY={0.6500000000000004} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C11: .68uF */}
    <capacitor name={"C11"} pcbX={34.85} pcbY={68.4} pcbRotation={-90} capacitance={".68uF"} footprint={<Footprint_C11 />} schX={-3.1500000000000004} schY={5.65} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C25: 330pF */}
    <capacitor name={"C25"} pcbX={-51.65} pcbY={14.3} pcbRotation={90} capacitance={"330pF"} footprint={<Footprint_C25 />} schX={1.1500000000000021} schY={-5.35} schRotation={180} schSheetName={"Power Supply"}/>

    {/* C1: 1nF */}
    <capacitor name={"C1"} pcbX={2.35} pcbY={-58} pcbRotation={180} capacitance={"1nF"} footprint={<Footprint_C1 />} schX={-0.29999999999999893} schY={-5.1} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* TP17: test */}
    <chip name={"TP17"} pcbX={-22.02} pcbY={12.87} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP17 />} noSchematicRepresentation={true}/>

    {/* J1: 43045-0402 */}
    <chip name={"J1"} pcbX={63.030001} pcbY={-7.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"43045-0402"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* R56: 75 */}
    <resistor name={"R56"} pcbX={13.7} pcbY={16.22} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R56 />} schX={0.3999999999999986} schY={1.6000000000000005} schRotation={0} schSheetName={"MotorDriver2"}/>

    {/* R15: 4.53k */}
    <resistor name={"R15"} pcbX={-31.15} pcbY={54.5} pcbRotation={0} resistance={"4.53kohm"} footprint={<Footprint_R15 />} schX={7.850000000000001} schY={5.350000000000001} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C49: .22uF 100V */}
    <capacitor name={"C49"} pcbX={3.57} pcbY={16.73} pcbRotation={180} capacitance={".22uF"} footprint={<Footprint_C49 />} schX={-6.3} schY={-4.5} schRotation={-90} schSheetName={"MotorDriver2"}/>

    {/* Q12: DMTH6010LPD-13 */}
    <chip name={"Q12"} pcbX={21.15} pcbY={-10} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q12 />} noSchematicRepresentation={true}/>

    {/* R2: 75 */}
    <resistor name={"R2"} pcbX={10.02} pcbY={-47.08} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R2 />} schX={0.3999999999999986} schY={1.6000000000000005} schRotation={0} schSheetName={"MotorDriver0"}/>

    {/* R72: 180 */}
    <resistor name={"R72"} pcbX={-66.062} pcbY={-67.026} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R72 />} schX={-7.45} schY={3.7500000000000004} schRotation={0} schSheetName={"Peripherals"}/>

    {/* Q20: DMTH6010LPD-13 */}
    <chip name={"Q20"} pcbX={20.27} pcbY={51.42} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q20 />} noSchematicRepresentation={true}/>

    {/* C5: 22uF */}
    <capacitor name={"C5"} pcbX={-10.894887} pcbY={-44.8} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C5 />} schX={7} schY={5.4} schRotation={-90} schSheetName={"MotorDriver0"}/>

    {/* D20: CDBW46-G */}
    <chip name={"D20"} pcbX={54.6661} pcbY={-36.63805} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D20 />} noSchematicRepresentation={true}/>

    {/* C13: .1uF */}
    <capacitor name={"C13"} pcbX={-17.759025} pcbY={63.359025} pcbRotation={180} capacitance={".1uF"} footprint={<Footprint_C13 />} schX={3.0500000000000007} schY={4.550000000000001} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* R65: 75 */}
    <resistor name={"R65"} pcbX={10.92} pcbY={38.89} pcbRotation={0} resistance={"75ohm"} footprint={<Footprint_R65 />} schX={0.3000000000000007} schY={-2} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* REF**: MountingHole_3.2mm_M3 */}
    <chip name={"REF_____"} pcbX={-11.15} pcbY={48.25} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_3.2mm_M3"} footprint={<Footprint_REF_____ />} noSchematicRepresentation={true}/>

    {/* Q3: DMTH6010LPD-13 */}
    <chip name={"Q3"} pcbX={20.85} pcbY={-54.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* C98: 10uF */}
    <capacitor name={"C98"} pcbX={-7.65} pcbY={-66.2} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C98 />} schX={-2.4499999999999993} schY={-0.9499999999999993} schRotation={-90} schSheetName={"Peripherals"}/>

    {/* Q4: DMTH6010LPD-13 */}
    <chip name={"Q4"} pcbX={20.85} pcbY={-60.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* C92: .1uF */}
    <capacitor name={"C92"} pcbX={55.35} pcbY={-41.7} pcbRotation={0} capacitance={".1uF"} footprint={<Footprint_C92 />} schX={1.5} schY={0.34999999999999964} schRotation={-90} schSheetName={"Peripherals/3_to_5_17"}/>

    {/* TP7: TP_GATE */}
    <chip name={"TP7"} pcbX={-47.65} pcbY={41.9} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_GATE"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* C48: .22uF */}
    <capacitor name={"C48"} pcbX={-61.47} pcbY={-49.94} pcbRotation={-90} capacitance={".22uF"} footprint={<Footprint_C48 />} schX={6.15} schY={-2.3499999999999996} schRotation={0} schSheetName={"Peripherals"}/>

    {/* C22: 33nF */}
    <capacitor name={"C22"} pcbX={-42.65} pcbY={24.7} pcbRotation={180} capacitance={"33nF"} footprint={<Footprint_C22 />} schX={-3.9499999999999993} schY={-4.049999999999999} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C36: 10pF */}
    <capacitor name={"C36"} pcbX={-62.76} pcbY={-7.336} pcbRotation={-90} capacitance={"10pF"} footprint={<Footprint_C36 />} schX={-7.8999999999999995} schY={0.15000000000000036} schRotation={0} schSheetName={"Microprocessor"}/>

    {/* C60: 1uF */}
    <capacitor name={"C60"} pcbX={-4.848} pcbY={44.48} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C60 />} schX={-5.800000000000001} schY={-5.4} schRotation={180} schSheetName={"MotorDriver3"}/>

    {/* D19: CDBW46-G */}
    <chip name={"D19"} pcbX={54.55} pcbY={-47.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D19 />} noSchematicRepresentation={true}/>

    {/* U12: DRV8711DCP */}
    <chip name={"U12"} pcbX={0.68} pcbY={39.36} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"] }} displayName={"DRV8711DCP"} footprint={<Footprint_U12 />} noSchematicRepresentation={true}/>

    {/* U11: DRV8711DCP */}
    <chip name={"U11"} pcbX={5.85} pcbY={10.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"] }} displayName={"DRV8711DCP"} footprint={<Footprint_U11 />} noSchematicRepresentation={true}/>

    {/* U17: SN74AHC1G125DBVR */}
    <chip name={"U17"} pcbX={-5.65} pcbY={-38.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"SN74AHC1G125DBVR"} footprint={<Footprint_U17 />} noSchematicRepresentation={true}/>

    {/* R36: 422 */}
    <resistor name={"R36"} pcbX={-50.65} pcbY={11.1} pcbRotation={0} resistance={"422ohm"} footprint={<Footprint_R36 />} schX={2.5500000000000007} schY={-3.1500000000000004} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* Q1: DMTH6010LPD-13 */}
    <chip name={"Q1"} pcbX={20.85} pcbY={-41.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5-6"], "pin6": ["7-8"] }} displayName={"DMTH6010LPD-13"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* R35: 1.96k */}
    <resistor name={"R35"} pcbX={-50.05} pcbY={18.7} pcbRotation={-90} resistance={"1.96kohm"} footprint={<Footprint_R35 />} schX={0.3500000000000014} schY={-4.649999999999999} schRotation={0} schSheetName={"Power Supply"}/>

    {/* TP15: Prog */}
    <chip name={"TP15"} pcbX={-53.65} pcbY={61.9} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Prog"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* C14: 130pF */}
    <capacitor name={"C14"} pcbX={-67.85} pcbY={60.1} pcbRotation={180} capacitance={"130pF"} footprint={<Footprint_C14 />} schX={10.05} schY={-2.7499999999999982} schRotation={90} schSheetName={"Power Supply"}/>

    {/* R62: .05 */}
    <resistor name={"R62"} pcbX={13.15} pcbY={52.66} pcbRotation={-90} resistance={".05ohm"} footprint={<Footprint_R62 />} schX={0.3000000000000007} schY={-0.5999999999999988} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* C39: 1uF */}
    <capacitor name={"C39"} pcbX={0.05} pcbY={-11} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C39 />} schX={-5.800000000000001} schY={-5.4} schRotation={180} schSheetName={"MotorDriver1"}/>

    {/* C42: 10n */}
    <capacitor name={"C42"} pcbX={-2.05} pcbY={-11} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C42 />} schX={-5.6} schY={2.7} schRotation={-90} schSheetName={"MotorDriver1"}/>

    {/* C65: 100uF */}
    <capacitor name={"C65"} pcbX={34.182323} pcbY={52.9} pcbRotation={0} capacitance={"100uF"} footprint={<Footprint_C65 />} schX={4.100000000000001} schY={5.4} schRotation={-90} schSheetName={"MotorDriver3"}/>

    {/* R59: 180 */}
    <resistor name={"R59"} pcbX={-50.15} pcbY={-37.4} pcbRotation={0} resistance={"180ohm"} footprint={<Footprint_R59 />} schX={-7} schY={-3.3999999999999986} schRotation={0} schSheetName={"MotorDriver3"}/>

    {/* J14: PROG */}
    <chip name={"J14"} pcbX={-57.55} pcbY={58.22} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"PROG"} footprint={<Footprint_J14 />} noSchematicRepresentation={true}/>

    {/* L1: 3.3uH */}
    <inductor name={"L1"} pcbX={-40.35} pcbY={6.2} pcbRotation={180} inductance={"3.3uH"} footprint={<Footprint_L1 />} schX={0.9499999999999993} schY={-2.8499999999999996} schRotation={0} schSheetName={"Power Supply"}/>

    {/* D2: MBR0580 */}
    <chip name={"D2"} pcbX={30.35} pcbY={72.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"MBR0580"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* R9: 100k .5% */}
    <resistor name={"R9"} pcbX={25.85} pcbY={72.25} pcbRotation={180} resistance={"100kohm"} footprint={<Footprint_R9 />} schX={-7.249999999999999} schY={5.550000000000001} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* D13: CDBW46-G */}
    <chip name={"D13"} pcbX={54.65} pcbY={-39.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* C50: 1uF */}
    <capacitor name={"C50"} pcbX={-0.16} pcbY={15.81} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C50 />} schX={-5.800000000000001} schY={-5.4} schRotation={180} schSheetName={"MotorDriver2"}/>

    {/* D15: CDBW46-G */}
    <chip name={"D15"} pcbX={54.55} pcbY={-50.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CDBW46-G"} footprint={<Footprint_D15 />} noSchematicRepresentation={true}/>

    {/* U29: LM358 */}
    <chip name={"U29"} pcbX={-14.05} pcbY={-69.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"LM358"} footprint={<Footprint_U29 />} noSchematicRepresentation={true}/>

    {/* TP22: test */}
    <chip name={"TP22"} pcbX={-39.92} pcbY={-53.58} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"test"} footprint={<Footprint_TP22 />} noSchematicRepresentation={true}/>

    {/* KiCad net: /Microprocessor/in_23 */}
    <KiCadNet name={"_Microprocessor_in_23"} connectsTo={[".D11 > .pin1", ".J5 > .pin23"]}/>
    {/* KiCad net: Net-(U3-PF3) */}
    <KiCadNet name={"Net__U3_PF3_"} connectsTo={[".D11 > .pin2", ".U3 > .pin49"]}/>
    {/* KiCad net: /Microprocessor/stall_0 */}
    <KiCadNet name={"_Microprocessor_stall_0"} connectsTo={[".R8 > .pin1", ".U3 > .pin62"]}/>
    {/* KiCad net: Net-(U1-STALL_BEMFV_N) */}
    <KiCadNet name={"Net__U1_STALL_BEMFV_N_"} connectsTo={[".R8 > .pin2", ".R7 > .pin2", ".U1 > .pin19"]}/>
    {/* KiCad net: /Microprocessor/serial_cts */}
    <KiCadNet name={"_Microprocessor_serial_cts"} connectsTo={[".J11 > .pin1", ".J10 > .pin36", ".U3 > .pin20"]}/>
    {/* KiCad net: /Microprocessor/serial_tx */}
    <KiCadNet name={"_Microprocessor_serial_tx"} connectsTo={[".J11 > .pin2", ".J10 > .pin8", ".U3 > .pin18"]}/>
    {/* KiCad net: /Microprocessor/serial_rx */}
    <KiCadNet name={"_Microprocessor_serial_rx"} connectsTo={[".J11 > .pin3", ".J10 > .pin10", ".U3 > .pin19"]}/>
    {/* KiCad net: /Microprocessor/in_11 */}
    <KiCadNet name={"_Microprocessor_in_11"} connectsTo={[".D18 > .pin1", ".J5 > .pin11"]}/>
    {/* KiCad net: Net-(U3-PB2) */}
    <KiCadNet name={"Net__U3_PB2_"} connectsTo={[".D18 > .pin2", ".U3 > .pin8"]}/>
    {/* KiCad net: Vs */}
    <KiCadNet name={"Vs"} connectsTo={[".TP5 > .pin1", ".Q2 > .pin5", ".Q15 > .pin6", ".U9 > .pin4", ".Q22 > .pin5", ".C94 > .pin1", ".C6 > .pin2", ".C58 > .pin1", ".U25 > .pin2", ".U25 > .pin4", ".C55 > .pin1", ".U4 > .pin1", ".C66 > .pin1", ".Q13 > .pin5", ".C63 > .pin2", ".C2 > .pin1", ".C44 > .pin1", ".C68 > .pin1", ".C46 > .pin1", ".C56 > .pin1", ".C67 > .pin1", ".R25 > .pin1", ".R24 > .pin1", ".Q14 > .pin5", ".Q19 > .pin6", ".C4 > .pin1", ".R14 > .pin1", ".Q17 > .pin5", ".C57 > .pin1", ".Q16 > .pin6", ".R13 > .pin2", ".Q18 > .pin5", ".U1 > .pin4", ".C53 > .pin2", ".Q21 > .pin5", ".C45 > .pin1", ".C47 > .pin1", ".Q11 > .pin6", ".C8 > .pin2", ".C3 > .pin1", ".Q12 > .pin6", ".Q20 > .pin6", ".C5 > .pin1", ".Q3 > .pin6", ".Q4 > .pin5", ".C60 > .pin2", ".U12 > .pin4", ".U11 > .pin4", ".Q1 > .pin6", ".C39 > .pin2", ".C42 > .pin2", ".C65 > .pin1", ".C50 > .pin2"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".R46 > .pin1", ".C37 > .pin1", ".C82 > .pin1", ".R5 > .pin1", ".J12 > .pin3", ".C88 > .pin1", ".R33 > .pin2", ".C61 > .pin1", ".C96 > .pin2", ".C15 > .pin1", ".U20 > .pin3", ".U9 > .pin5", ".U9 > .pin24", ".U9 > .pin29", ".U9 > .pin33", ".U9 > .pin38", ".U9 > .pin39", ".C87 > .pin1", ".R54 > .pin1", ".C94 > .pin2", ".C28 > .pin2", ".C33 > .pin1", ".C6 > .pin1", ".C43 > .pin2", ".C64 > .pin2", ".C97 > .pin2", ".C58 > .pin2", ".C19 > .pin2", ".C9 > .pin1", ".C69 > .pin1", ".U25 > .pin1", ".U16 > .pin5", ".C54 > .pin2", ".C83 > .pin2", ".C90 > .pin1", ".C10 > .pin1", ".C29 > .pin2", ".U6 > .pin1", ".U6 > .pin16", ".U6 > .pin17", ".C12 > .pin2", ".C72 > .pin1", ".C62 > .pin1", ".C27 > .pin2", ".C55 > .pin2", ".J10 > .pin6", ".J10 > .pin9", ".J10 > .pin14", ".J10 > .pin25", ".J10 > .pin30", ".J10 > .pin34", ".J10 > .pin39", ".U4 > .pin2", ".U4 > .pin3", ".U4 > .pin4", ".U4 > .pin7", ".D10 > .pin2", ".C73 > .pin1", ".C86 > .pin2", ".C66 > .pin2", ".J4 > .pin6", ".C78 > .pin1", ".C51 > .pin1", ".R44 > .pin1", ".U8 > .pin7", ".R3 > .pin1", ".C63 > .pin1", ".R21 > .pin2", ".Q7 > .pin2", ".C84 > .pin1", ".C2 > .pin2", ".C79 > .pin1", ".J6 > .pin12", ".J6 > .pin14", ".J6 > .pin16", ".C44 > .pin2", ".C41 > .pin1", ".C32 > .pin1", ".C20 > .pin2", ".U13 > .pin3", ".C74 > .pin1", ".C89 > .pin1", ".Z1 > .pin2", ".U7 > .pin1", ".C35 > .pin1", ".U22 > .pin3", ".R79 > .pin1", ".U23 > .pin3", ".C68 > .pin2", ".C91 > .pin1", ".C31 > .pin1", ".C46 > .pin2", ".J2 > .pin4", ".J2 > .pin5", ".J2 > .pin6", ".C30 > .pin1", ".C56 > .pin2", ".C81 > .pin2", ".R34 > .pin2", ".Q8 > .pin3", ".C67 > .pin2", ".U27 > .pin3", ".C16 > .pin2", ".D1 > .pin2", ".R27 > .pin2", ".J5 > .pin26", ".J5 > .pin7", ".J5 > .pin19", ".J5 > .pin25", ".C70 > .pin1", ".J13 > .pin1", ".C95 > .pin2", ".R90 > .pin2", ".C52 > .pin1", ".R11 > .pin2", ".R73 > .pin1", ".U2 > .pin20", ".D6 > .pin2", ".C40 > .pin1", ".C4 > .pin2", ".U26 > .pin3", ".U21 > .pin3", ".R81 > .pin1", ".U19 > .pin3", ".C57 > .pin2", ".R32 > .pin2", ".C93 > .pin2", ".R52 > .pin1", ".U10 > .pin1", ".U10 > .pin3", ".C76 > .pin1", ".U1 > .pin5", ".U1 > .pin24", ".U1 > .pin29", ".U1 > .pin33", ".U1 > .pin38", ".U1 > .pin39", ".U24 > .pin3", ".U15 > .pin3", ".U18 > .pin3", ".C53 > .pin1", ".C75 > .pin1", ".C21 > .pin2", ".TP13 > .pin1", ".Z2 > .pin2", ".C71 > .pin1", ".U5 > .pin3", ".D8 > .pin2", ".C34 > .pin1", ".U3 > .pin14", ".U3 > .pin24", ".U3 > .pin34", ".U3 > .pin44", ".U3 > .pin52", ".U3 > .pin60", ".C77 > .pin1", ".C45 > .pin2", ".C47 > .pin2", ".J15 > .pin3", ".R16 > .pin2", ".R76 > .pin1", ".R20 > .pin2", ".R31 > .pin2", ".U14 > .pin3", ".R60 > .pin1", ".C3 > .pin2", ".R17 > .pin2", ".C1 > .pin2", ".C5 > .pin2", ".C13 > .pin2", ".C98 > .pin2", ".C92 > .pin1", ".C48 > .pin1", ".C22 > .pin2", ".C36 > .pin1", ".U12 > .pin5", ".U12 > .pin24", ".U12 > .pin29", ".U12 > .pin33", ".U12 > .pin38", ".U12 > .pin39", ".U11 > .pin5", ".U11 > .pin24", ".U11 > .pin29", ".U11 > .pin33", ".U11 > .pin38", ".U11 > .pin39", ".U17 > .pin3", ".C14 > .pin1", ".R62 > .pin1", ".C42 > .pin1", ".C65 > .pin2", ".J14 > .pin1", ".U29 > .pin4"]}/>
    {/* KiCad net: Net-(Q12B-S2) */}
    <KiCadNet name={"Net__Q12B_S2_"} connectsTo={[".R46 > .pin2", ".U9 > .pin34", ".Q14 > .pin1", ".Q12 > .pin3"]}/>
    {/* KiCad net: /Microprocessor/stall_1 */}
    <KiCadNet name={"_Microprocessor_stall_1"} connectsTo={[".R43 > .pin1", ".U3 > .pin63"]}/>
    {/* KiCad net: Net-(U9-STALL_BEMFV_N) */}
    <KiCadNet name={"Net__U9_STALL_BEMFV_N_"} connectsTo={[".R43 > .pin2", ".U9 > .pin19", ".R42 > .pin2"]}/>
    {/* KiCad net: Net-(U16-A{slash}Y) */}
    <KiCadNet name={"Net__U16_A_slash_Y_"} connectsTo={[".R75 > .pin1", ".U16 > .pin6", ".C86 > .pin1", ".L2 > .pin4", ".C85 > .pin2", ".R76 > .pin2"]}/>
    {/* KiCad net: Net-(U16-B{slash}Z) */}
    <KiCadNet name={"Net__U16_B_slash_Z_"} connectsTo={[".R75 > .pin2", ".U16 > .pin7", ".C84 > .pin2", ".L2 > .pin1", ".R74 > .pin1", ".C85 > .pin1"]}/>
    {/* KiCad net: Net-(U12-A1LS) */}
    <KiCadNet name={"Net__U12_A1LS_"} connectsTo={[".R64 > .pin1", ".U12 > .pin35"]}/>
    {/* KiCad net: Net-(Q20B-G2) */}
    <KiCadNet name={"Net__Q20B_G2_"} connectsTo={[".R64 > .pin2", ".Q20 > .pin4"]}/>
    {/* KiCad net: Net-(U12-CP1) */}
    <KiCadNet name={"Net__U12_CP1_"} connectsTo={[".C59 > .pin1", ".U12 > .pin1"]}/>
    {/* KiCad net: Net-(U12-CP2) */}
    <KiCadNet name={"Net__U12_CP2_"} connectsTo={[".C59 > .pin2", ".U12 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PR1{slash}XTAL1) */}
    <KiCadNet name={"Net__U3_PR1_slash_XTAL1_"} connectsTo={[".C37 > .pin2", ".X1 > .pin2", ".U3 > .pin59"]}/>
    {/* KiCad net: Net-(U6-VCC) */}
    <KiCadNet name={"Net__U6_VCC_"} connectsTo={[".Q10 > .pin1", ".Q10 > .pin2", ".Q10 > .pin5", ".Q10 > .pin6", ".TP24 > .pin1", ".C19 > .pin1", ".U6 > .pin2", ".U6 > .pin3", ".U6 > .pin4", ".C20 > .pin1", ".R32 > .pin1", ".C18 > .pin1", ".C21 > .pin1"]}/>
    {/* KiCad net: Net-(C17-Pad1) */}
    <KiCadNet name={"Net__C17_Pad1_"} connectsTo={[".Q10 > .pin3", ".R29 > .pin1", ".R30 > .pin1", ".Z4 > .pin1", ".C17 > .pin1"]}/>
    {/* KiCad net: /Power Supply/Vdd */}
    <KiCadNet name={"_Power_Supply_Vdd"} connectsTo={[".Q10 > .pin4", ".R29 > .pin2", ".TP3 > .pin1", ".U8 > .pin3", ".U8 > .pin4", ".U8 > .pin10", ".U8 > .pin12", ".Q5 > .pin5", ".Q5 > .pin6", ".Q5 > .pin7", ".Q5 > .pin8", ".Z4 > .pin3", ".Q6 > .pin5", ".Q6 > .pin6", ".Q6 > .pin7", ".Q6 > .pin8", ".C17 > .pin2", ".C11 > .pin1"]}/>
    {/* KiCad net: Net-(U16-RO) */}
    <KiCadNet name={"Net__U16_RO_"} connectsTo={[".C82 > .pin2", ".U16 > .pin1", ".R71 > .pin2"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".R87 > .pin1", ".C88 > .pin2", ".C15 > .pin2", ".U20 > .pin5", ".C87 > .pin2", ".C28 > .pin1", ".C97 > .pin1", ".C90 > .pin2", ".C72 > .pin2", ".C27 > .pin1", ".J10 > .pin2", ".J10 > .pin4", ".U4 > .pin6", ".C73 > .pin2", ".C78 > .pin2", ".C79 > .pin2", ".J6 > .pin11", ".J6 > .pin13", ".U13 > .pin5", ".C74 > .pin2", ".C89 > .pin2", ".TP11 > .pin1", ".U7 > .pin3", ".U22 > .pin5", ".U23 > .pin5", ".R23 > .pin1", ".C91 > .pin2", ".U27 > .pin5", ".J5 > .pin20", ".J13 > .pin2", ".U2 > .pin1", ".U26 > .pin5", ".U21 > .pin5", ".U19 > .pin5", ".R86 > .pin1", ".U10 > .pin5", ".C76 > .pin2", ".U24 > .pin5", ".U15 > .pin5", ".U18 > .pin5", ".C75 > .pin2", ".U5 > .pin5", ".C77 > .pin2", ".R37 > .pin1", ".U14 > .pin5", ".C13 > .pin1", ".C92 > .pin2", ".U17 > .pin5", ".R36 > .pin1", ".L1 > .pin2"]}/>
    {/* KiCad net: /Power Supply/5V_scl */}
    <KiCadNet name={"_Power_Supply_5V_scl"} connectsTo={[".R87 > .pin2", ".Q24 > .pin3", ".J13 > .pin4", ".U2 > .pin11"]}/>
    {/* KiCad net: Net-(Q3B-S2) */}
    <KiCadNet name={"Net__Q3B_S2_"} connectsTo={[".R5 > .pin2", ".U1 > .pin25", ".Q3 > .pin3", ".Q4 > .pin1"]}/>
    {/* KiCad net: Net-(Q1B-S2) */}
    <KiCadNet name={"Net__Q1B_S2_"} connectsTo={[".Q2 > .pin1", ".R3 > .pin2", ".U1 > .pin34", ".Q1 > .pin3"]}/>
    {/* KiCad net: Net-(Q2A-G1) */}
    <KiCadNet name={"Net__Q2A_G1_"} connectsTo={[".Q2 > .pin2", ".R1 > .pin2"]}/>
    {/* KiCad net: Net-(Q2A-D1) */}
    <KiCadNet name={"Net__Q2A_D1_"} connectsTo={[".Q2 > .pin3", ".Q2 > .pin6", ".U1 > .pin30", ".J1 > .pin2"]}/>
    {/* KiCad net: Net-(Q2B-G2) */}
    <KiCadNet name={"Net__Q2B_G2_"} connectsTo={[".Q2 > .pin4", ".U1 > .pin31"]}/>
    {/* KiCad net: /Microprocessor/sda */}
    <KiCadNet name={"_Microprocessor_sda"} connectsTo={[".J12 > .pin1", ".Q23 > .pin2", ".J10 > .pin3", ".R84 > .pin2", ".U3 > .pin16"]}/>
    {/* KiCad net: /Microprocessor/scl */}
    <KiCadNet name={"_Microprocessor_scl"} connectsTo={[".J12 > .pin2", ".R85 > .pin2", ".J10 > .pin5", ".Q24 > .pin2", ".U3 > .pin17"]}/>
    {/* KiCad net: Net-(U6-FSW) */}
    <KiCadNet name={"Net__U6_FSW_"} connectsTo={[".R33 > .pin1", ".U6 > .pin10"]}/>
    {/* KiCad net: Net-(U3-PF6) */}
    <KiCadNet name={"Net__U3_PF6_"} connectsTo={[".TP12 > .pin1", ".U3 > .pin54"]}/>
    {/* KiCad net: Net-(Q15A-S1) */}
    <KiCadNet name={"Net__Q15A_S1_"} connectsTo={[".Q15 > .pin1", ".Q15 > .pin5", ".J8 > .pin3", ".U11 > .pin28"]}/>
    {/* KiCad net: Net-(Q15A-G1) */}
    <KiCadNet name={"Net__Q15A_G1_"} connectsTo={[".Q15 > .pin2", ".U11 > .pin27"]}/>
    {/* KiCad net: Net-(Q15B-S2) */}
    <KiCadNet name={"Net__Q15B_S2_"} connectsTo={[".Q15 > .pin3", ".Q17 > .pin1", ".R52 > .pin2", ".U11 > .pin25"]}/>
    {/* KiCad net: Net-(Q15B-G2) */}
    <KiCadNet name={"Net__Q15B_G2_"} connectsTo={[".Q15 > .pin4", ".R57 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PC7) */}
    <KiCadNet name={"Net__U3_PC7_"} connectsTo={[".R67 > .pin1", ".U3 > .pin23"]}/>
    {/* KiCad net: /Microprocessor/sck */}
    <KiCadNet name={"_Microprocessor_sck"} connectsTo={[".R67 > .pin2", ".U9 > .pin14", ".C70 > .pin2", ".U1 > .pin14", ".U12 > .pin14", ".U11 > .pin14", ".TP22 > .pin1"]}/>
    {/* KiCad net: Net-(U12-V5) */}
    <KiCadNet name={"Net__U12_V5_"} connectsTo={[".C61 > .pin2", ".U12 > .pin6"]}/>
    {/* KiCad net: Net-(U25-VOUT) */}
    <KiCadNet name={"Net__U25_VOUT_"} connectsTo={[".C96 > .pin1", ".U25 > .pin3", ".TP23 > .pin1", ".C98 > .pin1", ".U29 > .pin8"]}/>
    {/* KiCad net: Net-(U3-PC5) */}
    <KiCadNet name={"Net__U3_PC5_"} connectsTo={[".R66 > .pin1", ".U3 > .pin21"]}/>
    {/* KiCad net: /Microprocessor/mosi */}
    <KiCadNet name={"_Microprocessor_mosi"} connectsTo={[".R66 > .pin2", ".U9 > .pin15", ".C69 > .pin2", ".TP20 > .pin1", ".U1 > .pin15", ".U12 > .pin15", ".U11 > .pin15"]}/>
    {/* KiCad net: buffer_enable */}
    <KiCadNet name={"buffer_enable"} connectsTo={[".U20 > .pin1", ".U13 > .pin1", ".U22 > .pin1", ".U23 > .pin1", ".U27 > .pin1", ".U26 > .pin1", ".U21 > .pin1", ".U19 > .pin1", ".U24 > .pin1", ".U15 > .pin1", ".U18 > .pin1", ".U5 > .pin1", ".R91 > .pin2", ".J15 > .pin2", ".U14 > .pin1", ".U17 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/3to5_6/in */}
    <KiCadNet name={"_Microprocessor_3to5_6_in"} connectsTo={[".U20 > .pin2", ".U3 > .pin40"]}/>
    {/* KiCad net: /Microprocessor/step_3 */}
    <KiCadNet name={"_Microprocessor_step_3"} connectsTo={[".U20 > .pin4", ".J6 > .pin9", ".U12 > .pin10"]}/>
    {/* KiCad net: Net-(U9-CP1) */}
    <KiCadNet name={"Net__U9_CP1_"} connectsTo={[".U9 > .pin1", ".C38 > .pin1"]}/>
    {/* KiCad net: Net-(U9-CP2) */}
    <KiCadNet name={"Net__U9_CP2_"} connectsTo={[".U9 > .pin2", ".C38 > .pin2"]}/>
    {/* KiCad net: Net-(U9-VCP) */}
    <KiCadNet name={"Net__U9_VCP_"} connectsTo={[".U9 > .pin3", ".C39 > .pin1"]}/>
    {/* KiCad net: Net-(U9-V5) */}
    <KiCadNet name={"Net__U9_V5_"} connectsTo={[".U9 > .pin6", ".C40 > .pin2"]}/>
    {/* KiCad net: Net-(U9-VINT) */}
    <KiCadNet name={"Net__U9_VINT_"} connectsTo={[".U9 > .pin7", ".C41 > .pin2"]}/>
    {/* KiCad net: /MotorDriver0/enable */}
    <KiCadNet name={"_MotorDriver0_enable"} connectsTo={[".U9 > .pin8", ".R22 > .pin2", ".J6 > .pin2", ".U1 > .pin8", ".U12 > .pin8", ".U11 > .pin8", ".C14 > .pin2"]}/>
    {/* KiCad net: unconnected-(U9-RESET-Pad9) */}
    <KiCadNet name={"unconnected__U9_RESET_Pad9_"} connectsTo={[".U9 > .pin9"]}/>
    {/* KiCad net: /Microprocessor/step_1 */}
    <KiCadNet name={"_Microprocessor_step_1"} connectsTo={[".U9 > .pin10", ".J6 > .pin5", ".U18 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/dir_1 */}
    <KiCadNet name={"_Microprocessor_dir_1"} connectsTo={[".U9 > .pin11", ".J6 > .pin6", ".U22 > .pin4"]}/>
    {/* KiCad net: unconnected-(U9-BIN1-Pad12) */}
    <KiCadNet name={"unconnected__U9_BIN1_Pad12_"} connectsTo={[".U9 > .pin12"]}/>
    {/* KiCad net: unconnected-(U9-BIN2-Pad13) */}
    <KiCadNet name={"unconnected__U9_BIN2_Pad13_"} connectsTo={[".U9 > .pin13"]}/>
    {/* KiCad net: /Microprocessor/cs_1 */}
    <KiCadNet name={"_Microprocessor_cs_1"} connectsTo={[".U9 > .pin16", ".TP16 > .pin1", ".U3 > .pin37"]}/>
    {/* KiCad net: /Microprocessor/miso */}
    <KiCadNet name={"_Microprocessor_miso"} connectsTo={[".U9 > .pin17", ".TP21 > .pin1", ".R69 > .pin2", ".U1 > .pin17", ".R68 > .pin2", ".U12 > .pin17", ".U11 > .pin17"]}/>
    {/* KiCad net: /Microprocessor/drv_fault */}
    <KiCadNet name={"_Microprocessor_drv_fault"} connectsTo={[".U9 > .pin18", ".R39 > .pin1", ".R38 > .pin2", ".U1 > .pin18", ".U12 > .pin18", ".U11 > .pin18"]}/>
    {/* KiCad net: Net-(U9-BEMF) */}
    <KiCadNet name={"Net__U9_BEMF_"} connectsTo={[".U9 > .pin20", ".C43 > .pin1"]}/>
    {/* KiCad net: Net-(Q13A-D1) */}
    <KiCadNet name={"Net__Q13A_D1_"} connectsTo={[".U9 > .pin21", ".Q13 > .pin3", ".Q13 > .pin6", ".J7 > .pin4"]}/>
    {/* KiCad net: Net-(Q13B-G2) */}
    <KiCadNet name={"Net__Q13B_G2_"} connectsTo={[".U9 > .pin22", ".Q13 > .pin4"]}/>
    {/* KiCad net: Net-(U9-B2LS) */}
    <KiCadNet name={"Net__U9_B2LS_"} connectsTo={[".U9 > .pin23", ".R47 > .pin1"]}/>
    {/* KiCad net: Net-(Q11B-S2) */}
    <KiCadNet name={"Net__Q11B_S2_"} connectsTo={[".U9 > .pin25", ".Q13 > .pin1", ".R44 > .pin2", ".Q11 > .pin3"]}/>
    {/* KiCad net: Net-(U9-B1LS) */}
    <KiCadNet name={"Net__U9_B1LS_"} connectsTo={[".U9 > .pin26", ".R49 > .pin1"]}/>
    {/* KiCad net: Net-(Q11A-G1) */}
    <KiCadNet name={"Net__Q11A_G1_"} connectsTo={[".U9 > .pin27", ".Q11 > .pin2"]}/>
    {/* KiCad net: Net-(Q11A-S1) */}
    <KiCadNet name={"Net__Q11A_S1_"} connectsTo={[".U9 > .pin28", ".J7 > .pin3", ".Q11 > .pin1", ".Q11 > .pin5"]}/>
    {/* KiCad net: Net-(Q14A-D1) */}
    <KiCadNet name={"Net__Q14A_D1_"} connectsTo={[".U9 > .pin30", ".Q14 > .pin3", ".Q14 > .pin6", ".J7 > .pin2"]}/>
    {/* KiCad net: Net-(Q14B-G2) */}
    <KiCadNet name={"Net__Q14B_G2_"} connectsTo={[".U9 > .pin31", ".Q14 > .pin4"]}/>
    {/* KiCad net: Net-(U9-A2LS) */}
    <KiCadNet name={"Net__U9_A2LS_"} connectsTo={[".U9 > .pin32", ".R45 > .pin1"]}/>
    {/* KiCad net: Net-(U9-A1LS) */}
    <KiCadNet name={"Net__U9_A1LS_"} connectsTo={[".U9 > .pin35", ".R48 > .pin1"]}/>
    {/* KiCad net: Net-(Q12A-G1) */}
    <KiCadNet name={"Net__Q12A_G1_"} connectsTo={[".U9 > .pin36", ".Q12 > .pin2"]}/>
    {/* KiCad net: Net-(Q12A-S1) */}
    <KiCadNet name={"Net__Q12A_S1_"} connectsTo={[".U9 > .pin37", ".J7 > .pin1", ".Q12 > .pin1", ".Q12 > .pin5"]}/>
    {/* KiCad net: Net-(Q20B-S2) */}
    <KiCadNet name={"Net__Q20B_S2_"} connectsTo={[".Q22 > .pin1", ".Q20 > .pin3", ".U12 > .pin34", ".R62 > .pin2"]}/>
    {/* KiCad net: Net-(Q22A-G1) */}
    <KiCadNet name={"Net__Q22A_G1_"} connectsTo={[".Q22 > .pin2", ".R61 > .pin2"]}/>
    {/* KiCad net: Net-(Q22A-D1) */}
    <KiCadNet name={"Net__Q22A_D1_"} connectsTo={[".Q22 > .pin3", ".Q22 > .pin6", ".J9 > .pin2", ".U12 > .pin30"]}/>
    {/* KiCad net: Net-(Q22B-G2) */}
    <KiCadNet name={"Net__Q22B_G2_"} connectsTo={[".Q22 > .pin4", ".U12 > .pin31"]}/>
    {/* KiCad net: Net-(Q16B-S2) */}
    <KiCadNet name={"Net__Q16B_S2_"} connectsTo={[".R54 > .pin2", ".Q16 > .pin3", ".Q18 > .pin1", ".U11 > .pin34"]}/>
    {/* KiCad net: +3.3V */}
    <KiCadNet name={"_3_3V"} connectsTo={[".D9 > .pin1", ".C33 > .pin2", ".Q23 > .pin1", ".U16 > .pin8", ".R85 > .pin1", ".C29 > .pin1", ".D7 > .pin1", ".TP10 > .pin1", ".R58 > .pin1", ".J4 > .pin2", ".Q24 > .pin1", ".C32 > .pin2", ".R42 > .pin1", ".R84 > .pin1", ".U7 > .pin2", ".U7 > .pin4", ".C35 > .pin2", ".R7 > .pin1", ".C31 > .pin2", ".C30 > .pin2", ".R74 > .pin2", ".C93 > .pin1", ".R38 > .pin1", ".R68 > .pin1", ".R91 > .pin1", ".C34 > .pin2", ".U3 > .pin15", ".U3 > .pin25", ".U3 > .pin35", ".U3 > .pin45", ".U3 > .pin53", ".U3 > .pin61", ".R50 > .pin1", ".J14 > .pin3"]}/>
    {/* KiCad net: Net-(U3-PA7) */}
    <KiCadNet name={"Net__U3_PA7_"} connectsTo={[".D9 > .pin2", ".D10 > .pin1", ".R41 > .pin1", ".U3 > .pin5"]}/>
    {/* KiCad net: Net-(D3-K) */}
    <KiCadNet name={"Net__D3_K_"} connectsTo={[".D3 > .pin1", ".R26 > .pin1"]}/>
    {/* KiCad net: /Power Supply/Vin */}
    <KiCadNet name={"_Power_Supply_Vin"} connectsTo={[".D3 > .pin2", ".U8 > .pin2", ".TP14 > .pin1", ".J2 > .pin1", ".J2 > .pin2", ".J2 > .pin3", ".D1 > .pin1", ".Q6 > .pin1", ".Q6 > .pin2", ".Q6 > .pin3", ".D2 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/cs_0 */}
    <KiCadNet name={"_Microprocessor_cs_0"} connectsTo={[".TP19 > .pin1", ".U1 > .pin16", ".U3 > .pin27"]}/>
    {/* KiCad net: Net-(U6-FB) */}
    <KiCadNet name={"Net__U6_FB_"} connectsTo={[".C24 > .pin1", ".U6 > .pin9", ".C26 > .pin2", ".R90 > .pin1", ".R37 > .pin2", ".C25 > .pin1"]}/>
    {/* KiCad net: Net-(C24-Pad2) */}
    <KiCadNet name={"Net__C24_Pad2_"} connectsTo={[".C24 > .pin2", ".R35 > .pin2"]}/>
    {/* KiCad net: Net-(U12-BEMF) */}
    <KiCadNet name={"Net__U12_BEMF_"} connectsTo={[".C64 > .pin1", ".U12 > .pin20"]}/>
    {/* KiCad net: Net-(U1-V5) */}
    <KiCadNet name={"Net__U1_V5_"} connectsTo={[".C9 > .pin2", ".U1 > .pin6"]}/>
    {/* KiCad net: Net-(U6-BOOT) */}
    <KiCadNet name={"Net__U6_BOOT_"} connectsTo={[".C23 > .pin1", ".U6 > .pin15"]}/>
    {/* KiCad net: Net-(D6-K) */}
    <KiCadNet name={"Net__D6_K_"} connectsTo={[".C23 > .pin2", ".U6 > .pin13", ".U6 > .pin14", ".D6 > .pin1", ".L1 > .pin1"]}/>
    {/* KiCad net: /Power Supply/5V_sda */}
    <KiCadNet name={"_Power_Supply_5V_sda"} connectsTo={[".Q23 > .pin3", ".J13 > .pin3", ".U2 > .pin10", ".R86 > .pin2"]}/>
    {/* KiCad net: Net-(U16-*RE) */}
    <KiCadNet name={"Net__U16__RE_"} connectsTo={[".U16 > .pin2", ".U16 > .pin3", ".C81 > .pin1", ".R73 > .pin2", ".R72 > .pin2"]}/>
    {/* KiCad net: Net-(U16-DI) */}
    <KiCadNet name={"Net__U16_DI_"} connectsTo={[".U16 > .pin4", ".C83 > .pin1", ".R70 > .pin2"]}/>
    {/* KiCad net: Net-(U11-BEMF) */}
    <KiCadNet name={"Net__U11_BEMF_"} connectsTo={[".C54 > .pin1", ".U11 > .pin20"]}/>
    {/* KiCad net: Net-(U1-VINT) */}
    <KiCadNet name={"Net__U1_VINT_"} connectsTo={[".C10 > .pin2", ".U1 > .pin7"]}/>
    {/* KiCad net: /Power Supply/en */}
    <KiCadNet name={"_Power_Supply_en"} connectsTo={[".U6 > .pin5", ".R28 > .pin1", ".R27 > .pin1", ".D4 > .pin1", ".J3 > .pin1", ".Z2 > .pin1"]}/>
    {/* KiCad net: Net-(U6-SS) */}
    <KiCadNet name={"Net__U6_SS_"} connectsTo={[".U6 > .pin6", ".C22 > .pin1"]}/>
    {/* KiCad net: unconnected-(U6-SYNCH-Pad7) */}
    <KiCadNet name={"unconnected__U6_SYNCH_Pad7_"} connectsTo={[".U6 > .pin7"]}/>
    {/* KiCad net: Net-(U6-COMP) */}
    <KiCadNet name={"Net__U6_COMP_"} connectsTo={[".U6 > .pin8", ".C25 > .pin2", ".R35 > .pin1"]}/>
    {/* KiCad net: Net-(U6-ILIM) */}
    <KiCadNet name={"Net__U6_ILIM_"} connectsTo={[".U6 > .pin11", ".R34 > .pin1"]}/>
    {/* KiCad net: unconnected-(U6-PGOOD-Pad12) */}
    <KiCadNet name={"unconnected__U6_PGOOD_Pad12_"} connectsTo={[".U6 > .pin12"]}/>
    {/* KiCad net: /Microprocessor/in_22 */}
    <KiCadNet name={"_Microprocessor_in_22"} connectsTo={[".D12 > .pin1", ".J5 > .pin22"]}/>
    {/* KiCad net: Net-(U3-PF7) */}
    <KiCadNet name={"Net__U3_PF7_"} connectsTo={[".D12 > .pin2", ".U3 > .pin55"]}/>
    {/* KiCad net: /Microprocessor/in_3 */}
    <KiCadNet name={"_Microprocessor_in_3"} connectsTo={[".D17 > .pin1", ".J5 > .pin3"]}/>
    {/* KiCad net: Net-(U3-AREFB{slash}PB0) */}
    <KiCadNet name={"Net__U3_AREFB_slash_PB0_"} connectsTo={[".D17 > .pin2", ".U3 > .pin6"]}/>
    {/* KiCad net: Net-(C12-Pad1) */}
    <KiCadNet name={"Net__C12_Pad1_"} connectsTo={[".C12 > .pin1", ".R12 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PA6) */}
    <KiCadNet name={"Net__U3_PA6_"} connectsTo={[".D7 > .pin2", ".R40 > .pin1", ".D8 > .pin1", ".U3 > .pin4"]}/>
    {/* KiCad net: Net-(U2-PC3) */}
    <KiCadNet name={"Net__U2_PC3_"} connectsTo={[".R22 > .pin1", ".R21 > .pin1", ".U2 > .pin15"]}/>
    {/* KiCad net: Net-(U12-VINT) */}
    <KiCadNet name={"Net__U12_VINT_"} connectsTo={[".C62 > .pin2", ".U12 > .pin7"]}/>
    {/* KiCad net: Net-(U12-STALL_BEMFV_N) */}
    <KiCadNet name={"Net__U12_STALL_BEMFV_N_"} connectsTo={[".R58 > .pin2", ".U12 > .pin19", ".R59 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/in_12 */}
    <KiCadNet name={"_Microprocessor_in_12"} connectsTo={[".D16 > .pin1", ".J5 > .pin12"]}/>
    {/* KiCad net: Net-(U3-PB3) */}
    <KiCadNet name={"Net__U3_PB3_"} connectsTo={[".D16 > .pin2", ".U3 > .pin9"]}/>
    {/* KiCad net: /Microprocessor/rs485_ro */}
    <KiCadNet name={"_Microprocessor_rs485_ro"} connectsTo={[".R71 > .pin1", ".U3 > .pin32"]}/>
    {/* KiCad net: unconnected-(J10-Pin_1-Pad1) */}
    <KiCadNet name={"unconnected__J10_Pin_1_Pad1_"} connectsTo={[".J10 > .pin1"]}/>
    {/* KiCad net: /Power Supply/pwr_tx */}
    <KiCadNet name={"_Power_Supply_pwr_tx"} connectsTo={[".J10 > .pin7", ".U10 > .pin2", ".J14 > .pin4"]}/>
    {/* KiCad net: unconnected-(J10-Pin_11-Pad11) */}
    <KiCadNet name={"unconnected__J10_Pin_11_Pad11_"} connectsTo={[".J10 > .pin11"]}/>
    {/* KiCad net: unconnected-(J10-Pin_12-Pad12) */}
    <KiCadNet name={"unconnected__J10_Pin_12_Pad12_"} connectsTo={[".J10 > .pin12"]}/>
    {/* KiCad net: /Microprocessor/reset */}
    <KiCadNet name={"_Microprocessor_reset"} connectsTo={[".J10 > .pin13", ".J4 > .pin5", ".U3 > .pin57"]}/>
    {/* KiCad net: unconnected-(J10-Pin_15-Pad15) */}
    <KiCadNet name={"unconnected__J10_Pin_15_Pad15_"} connectsTo={[".J10 > .pin15"]}/>
    {/* KiCad net: /Microprocessor/pdi */}
    <KiCadNet name={"_Microprocessor_pdi"} connectsTo={[".J10 > .pin16", ".J4 > .pin1", ".U3 > .pin56"]}/>
    {/* KiCad net: unconnected-(J10-Pin_17-Pad17) */}
    <KiCadNet name={"unconnected__J10_Pin_17_Pad17_"} connectsTo={[".J10 > .pin17"]}/>
    {/* KiCad net: unconnected-(J10-Pin_18-Pad18) */}
    <KiCadNet name={"unconnected__J10_Pin_18_Pad18_"} connectsTo={[".J10 > .pin18"]}/>
    {/* KiCad net: unconnected-(J10-Pin_19-Pad19) */}
    <KiCadNet name={"unconnected__J10_Pin_19_Pad19_"} connectsTo={[".J10 > .pin19"]}/>
    {/* KiCad net: unconnected-(J10-Pin_20-Pad20) */}
    <KiCadNet name={"unconnected__J10_Pin_20_Pad20_"} connectsTo={[".J10 > .pin20"]}/>
    {/* KiCad net: unconnected-(J10-Pin_21-Pad21) */}
    <KiCadNet name={"unconnected__J10_Pin_21_Pad21_"} connectsTo={[".J10 > .pin21"]}/>
    {/* KiCad net: unconnected-(J10-Pin_22-Pad22) */}
    <KiCadNet name={"unconnected__J10_Pin_22_Pad22_"} connectsTo={[".J10 > .pin22"]}/>
    {/* KiCad net: unconnected-(J10-Pin_23-Pad23) */}
    <KiCadNet name={"unconnected__J10_Pin_23_Pad23_"} connectsTo={[".J10 > .pin23"]}/>
    {/* KiCad net: unconnected-(J10-Pin_24-Pad24) */}
    <KiCadNet name={"unconnected__J10_Pin_24_Pad24_"} connectsTo={[".J10 > .pin24"]}/>
    {/* KiCad net: unconnected-(J10-Pin_26-Pad26) */}
    <KiCadNet name={"unconnected__J10_Pin_26_Pad26_"} connectsTo={[".J10 > .pin26"]}/>
    {/* KiCad net: unconnected-(J10-Pin_27-Pad27) */}
    <KiCadNet name={"unconnected__J10_Pin_27_Pad27_"} connectsTo={[".J10 > .pin27"]}/>
    {/* KiCad net: unconnected-(J10-Pin_28-Pad28) */}
    <KiCadNet name={"unconnected__J10_Pin_28_Pad28_"} connectsTo={[".J10 > .pin28"]}/>
    {/* KiCad net: /Power Supply/pwr_rx */}
    <KiCadNet name={"_Power_Supply_pwr_rx"} connectsTo={[".J10 > .pin29", ".R18 > .pin1", ".R17 > .pin1", ".J14 > .pin2"]}/>
    {/* KiCad net: unconnected-(J10-Pin_31-Pad31) */}
    <KiCadNet name={"unconnected__J10_Pin_31_Pad31_"} connectsTo={[".J10 > .pin31"]}/>
    {/* KiCad net: unconnected-(J10-Pin_32-Pad32) */}
    <KiCadNet name={"unconnected__J10_Pin_32_Pad32_"} connectsTo={[".J10 > .pin32"]}/>
    {/* KiCad net: unconnected-(J10-Pin_33-Pad33) */}
    <KiCadNet name={"unconnected__J10_Pin_33_Pad33_"} connectsTo={[".J10 > .pin33"]}/>
    {/* KiCad net: unconnected-(J10-Pin_35-Pad35) */}
    <KiCadNet name={"unconnected__J10_Pin_35_Pad35_"} connectsTo={[".J10 > .pin35"]}/>
    {/* KiCad net: unconnected-(J10-Pin_37-Pad37) */}
    <KiCadNet name={"unconnected__J10_Pin_37_Pad37_"} connectsTo={[".J10 > .pin37"]}/>
    {/* KiCad net: unconnected-(J10-Pin_38-Pad38) */}
    <KiCadNet name={"unconnected__J10_Pin_38_Pad38_"} connectsTo={[".J10 > .pin38"]}/>
    {/* KiCad net: unconnected-(J10-Pin_40-Pad40) */}
    <KiCadNet name={"unconnected__J10_Pin_40_Pad40_"} connectsTo={[".J10 > .pin40"]}/>
    {/* KiCad net: Net-(U4-IN+) */}
    <KiCadNet name={"Net__U4_IN__"} connectsTo={[".TP4 > .pin1", ".U4 > .pin8", ".U8 > .pin9", ".Q5 > .pin1", ".Q5 > .pin2", ".Q5 > .pin3", ".R13 > .pin1"]}/>
    {/* KiCad net: /Power Supply/imon */}
    <KiCadNet name={"_Power_Supply_imon"} connectsTo={[".U4 > .pin5", ".U2 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PC6) */}
    <KiCadNet name={"Net__U3_PC6_"} connectsTo={[".R69 > .pin1", ".U3 > .pin22"]}/>
    {/* KiCad net: unconnected-(J4-Pin_3-Pad3) */}
    <KiCadNet name={"unconnected__J4_Pin_3_Pad3_"} connectsTo={[".J4 > .pin3"]}/>
    {/* KiCad net: unconnected-(J4-Pin_4-Pad4) */}
    <KiCadNet name={"unconnected__J4_Pin_4_Pad4_"} connectsTo={[".J4 > .pin4"]}/>
    {/* KiCad net: Net-(Q13A-G1) */}
    <KiCadNet name={"Net__Q13A_G1_"} connectsTo={[".Q13 > .pin2", ".R47 > .pin2"]}/>
    {/* KiCad net: Net-(U11-V5) */}
    <KiCadNet name={"Net__U11_V5_"} connectsTo={[".C51 > .pin2", ".U11 > .pin6"]}/>
    {/* KiCad net: Net-(Q6-G) */}
    <KiCadNet name={"Net__Q6_G_"} connectsTo={[".U8 > .pin1", ".TP1 > .pin1", ".Q6 > .pin4"]}/>
    {/* KiCad net: Net-(U8-OV) */}
    <KiCadNet name={"Net__U8_OV_"} connectsTo={[".U8 > .pin5", ".R11 > .pin1", ".R10 > .pin2"]}/>
    {/* KiCad net: /Power Supply/enable */}
    <KiCadNet name={"_Power_Supply_enable"} connectsTo={[".U8 > .pin6", ".U2 > .pin13", ".R20 > .pin1"]}/>
    {/* KiCad net: Net-(Q5-G) */}
    <KiCadNet name={"Net__Q5_G_"} connectsTo={[".U8 > .pin8", ".TP2 > .pin1", ".Q5 > .pin4", ".R12 > .pin1"]}/>
    {/* KiCad net: Net-(U8-CAP) */}
    <KiCadNet name={"Net__U8_CAP_"} connectsTo={[".U8 > .pin11", ".C11 > .pin2"]}/>
    {/* KiCad net: unconnected-(U8-PAD-Pad13) */}
    <KiCadNet name={"unconnected__U8_PAD_Pad13_"} connectsTo={[".U8 > .pin13"]}/>
    {/* KiCad net: /Power Supply/shunt */}
    <KiCadNet name={"_Power_Supply_shunt"} connectsTo={[".Q7 > .pin1", ".R23 > .pin2", ".U2 > .pin3"]}/>
    {/* KiCad net: Net-(Q7-D) */}
    <KiCadNet name={"Net__Q7_D_"} connectsTo={[".Q7 > .pin3", ".Z1 > .pin1", ".Q8 > .pin1", ".R24 > .pin2", ".TP7 > .pin1"]}/>
    {/* KiCad net: unconnected-(J6-Pin_1-Pad1) */}
    <KiCadNet name={"unconnected__J6_Pin_1_Pad1_"} connectsTo={[".J6 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/step_0 */}
    <KiCadNet name={"_Microprocessor_step_0"} connectsTo={[".J6 > .pin3", ".U1 > .pin10", ".U17 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/dir_0 */}
    <KiCadNet name={"_Microprocessor_dir_0"} connectsTo={[".J6 > .pin4", ".U21 > .pin4", ".U1 > .pin11"]}/>
    {/* KiCad net: /Microprocessor/step_2 */}
    <KiCadNet name={"_Microprocessor_step_2"} connectsTo={[".J6 > .pin7", ".U19 > .pin4", ".U11 > .pin10"]}/>
    {/* KiCad net: /Microprocessor/dir_2 */}
    <KiCadNet name={"_Microprocessor_dir_2"} connectsTo={[".J6 > .pin8", ".U23 > .pin4", ".U11 > .pin11"]}/>
    {/* KiCad net: /Microprocessor/dir_3 */}
    <KiCadNet name={"_Microprocessor_dir_3"} connectsTo={[".J6 > .pin10", ".U24 > .pin4", ".U12 > .pin11"]}/>
    {/* KiCad net: /Peripherals/spin_0to10 */}
    <KiCadNet name={"_Peripherals_spin_0to10"} connectsTo={[".J6 > .pin15", ".R82 > .pin2", ".J5 > .pin6", ".U29 > .pin1"]}/>
    {/* KiCad net: Net-(C26-Pad1) */}
    <KiCadNet name={"Net__C26_Pad1_"} connectsTo={[".C26 > .pin1", ".R36 > .pin2"]}/>
    {/* KiCad net: Net-(D4-A) */}
    <KiCadNet name={"Net__D4_A_"} connectsTo={[".Q9 > .pin1", ".R28 > .pin2", ".TP8 > .pin1", ".C16 > .pin1", ".D4 > .pin2"]}/>
    {/* KiCad net: Net-(Q9-S) */}
    <KiCadNet name={"Net__Q9_S_"} connectsTo={[".Q9 > .pin2", ".C18 > .pin2", ".R31 > .pin1", ".TP9 > .pin1"]}/>
    {/* KiCad net: Net-(Q9-D) */}
    <KiCadNet name={"Net__Q9_D_"} connectsTo={[".Q9 > .pin3", ".R30 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/3to5_13/in */}
    <KiCadNet name={"_Microprocessor_3to5_13_in"} connectsTo={[".U13 > .pin2", ".U3 > .pin41"]}/>
    {/* KiCad net: /Microprocessor/out_2 */}
    <KiCadNet name={"_Microprocessor_out_2"} connectsTo={[".U13 > .pin4", ".J5 > .pin2"]}/>
    {/* KiCad net: Net-(L2-Pad2) */}
    <KiCadNet name={"Net__L2_Pad2_"} connectsTo={[".L2 > .pin2", ".R77 > .pin1"]}/>
    {/* KiCad net: Net-(L2-Pad3) */}
    <KiCadNet name={"Net__L2_Pad3_"} connectsTo={[".L2 > .pin3", ".R78 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/3to5_8/in */}
    <KiCadNet name={"_Microprocessor_3to5_8_in"} connectsTo={[".U22 > .pin2", ".U3 > .pin39"]}/>
    {/* KiCad net: Net-(U2-~{RESET}{slash}PA0) */}
    <KiCadNet name={"Net__U2___RESET__slash_PA0_"} connectsTo={[".R18 > .pin2", ".U2 > .pin16", ".R19 > .pin1", ".TP15 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/spin_pwm_3 */}
    <KiCadNet name={"_Microprocessor_spin_pwm_3"} connectsTo={[".R79 > .pin2", ".U27 > .pin2", ".R80 > .pin1", ".U3 > .pin30"]}/>
    {/* KiCad net: /Microprocessor/cs_3 */}
    <KiCadNet name={"_Microprocessor_cs_3"} connectsTo={[".TP18 > .pin1", ".U3 > .pin28", ".U12 > .pin16"]}/>
    {/* KiCad net: Net-(U1-B1LS) */}
    <KiCadNet name={"Net__U1_B1LS_"} connectsTo={[".R4 > .pin1", ".U1 > .pin26"]}/>
    {/* KiCad net: Net-(Q3B-G2) */}
    <KiCadNet name={"Net__Q3B_G2_"} connectsTo={[".R4 > .pin2", ".Q3 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/3to5_9/in */}
    <KiCadNet name={"_Microprocessor_3to5_9_in"} connectsTo={[".U23 > .pin2", ".U3 > .pin42"]}/>
    {/* KiCad net: Net-(U3-PF4) */}
    <KiCadNet name={"Net__U3_PF4_"} connectsTo={[".R39 > .pin2", ".U3 > .pin50"]}/>
    {/* KiCad net: Net-(U3-PR0{slash}XTAL2) */}
    <KiCadNet name={"Net__U3_PR0_slash_XTAL2_"} connectsTo={[".X1 > .pin1", ".U3 > .pin58", ".C36 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/analog_2 */}
    <KiCadNet name={"_Microprocessor_analog_2"} connectsTo={[".R41 > .pin2", ".J5 > .pin18", ".C48 > .pin2"]}/>
    {/* KiCad net: Net-(Q11B-G2) */}
    <KiCadNet name={"Net__Q11B_G2_"} connectsTo={[".R49 > .pin2", ".Q11 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/analog_1 */}
    <KiCadNet name={"_Microprocessor_analog_1"} connectsTo={[".R40 > .pin2", ".J5 > .pin24", ".C71 > .pin2"]}/>
    {/* KiCad net: Net-(Q8-D) */}
    <KiCadNet name={"Net__Q8_D_"} connectsTo={[".Q8 > .pin4", ".R25 > .pin2"]}/>
    {/* KiCad net: Net-(U11-B2LS) */}
    <KiCadNet name={"Net__U11_B2LS_"} connectsTo={[".R55 > .pin1", ".U11 > .pin23"]}/>
    {/* KiCad net: Net-(Q17A-G1) */}
    <KiCadNet name={"Net__Q17A_G1_"} connectsTo={[".R55 > .pin2", ".Q17 > .pin2"]}/>
    {/* KiCad net: Net-(U29A--) */}
    <KiCadNet name={"Net__U29A___"} connectsTo={[".R82 > .pin1", ".R81 > .pin2", ".U29 > .pin2"]}/>
    {/* KiCad net: /Peripherals/spin_pwm */}
    <KiCadNet name={"_Peripherals_spin_pwm"} connectsTo={[".U27 > .pin4", ".J5 > .pin17"]}/>
    {/* KiCad net: Net-(U1-B2LS) */}
    <KiCadNet name={"Net__U1_B2LS_"} connectsTo={[".R6 > .pin1", ".U1 > .pin23"]}/>
    {/* KiCad net: Net-(Q4A-G1) */}
    <KiCadNet name={"Net__Q4A_G1_"} connectsTo={[".R6 > .pin2", ".Q4 > .pin2"]}/>
    {/* KiCad net: Net-(U29A-+) */}
    <KiCadNet name={"Net__U29A____"} connectsTo={[".R80 > .pin2", ".C95 > .pin1", ".U29 > .pin3"]}/>
    {/* KiCad net: Net-(Q14A-G1) */}
    <KiCadNet name={"Net__Q14A_G1_"} connectsTo={[".Q14 > .pin2", ".R45 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/out_1 */}
    <KiCadNet name={"_Microprocessor_out_1"} connectsTo={[".J5 > .pin1", ".U5 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/in_4 */}
    <KiCadNet name={"_Microprocessor_in_4"} connectsTo={[".J5 > .pin4", ".D15 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/in_5 */}
    <KiCadNet name={"_Microprocessor_in_5"} connectsTo={[".J5 > .pin5", ".D19 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/in_8 */}
    <KiCadNet name={"_Microprocessor_in_8"} connectsTo={[".J5 > .pin8", ".D13 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/in_9 */}
    <KiCadNet name={"_Microprocessor_in_9"} connectsTo={[".J5 > .pin9", ".D20 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/in_10 */}
    <KiCadNet name={"_Microprocessor_in_10"} connectsTo={[".J5 > .pin10", ".D14 > .pin1"]}/>
    {/* KiCad net: /Peripherals/rs485- */}
    <KiCadNet name={"_Peripherals_rs485_"} connectsTo={[".J5 > .pin13", ".R78 > .pin2"]}/>
    {/* KiCad net: /Peripherals/rs485+ */}
    <KiCadNet name={"_Peripherals_rs485__"} connectsTo={[".J5 > .pin14", ".R77 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/out_15 */}
    <KiCadNet name={"_Microprocessor_out_15"} connectsTo={[".J5 > .pin15", ".U14 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/out_16 */}
    <KiCadNet name={"_Microprocessor_out_16"} connectsTo={[".J5 > .pin16", ".U15 > .pin4"]}/>
    {/* KiCad net: /Microprocessor/out_21 */}
    <KiCadNet name={"_Microprocessor_out_21"} connectsTo={[".J5 > .pin21", ".U26 > .pin4"]}/>
    {/* KiCad net: Net-(U1-A2LS) */}
    <KiCadNet name={"Net__U1_A2LS_"} connectsTo={[".R1 > .pin1", ".U1 > .pin32"]}/>
    {/* KiCad net: Net-(U11-VINT) */}
    <KiCadNet name={"Net__U11_VINT_"} connectsTo={[".C52 > .pin2", ".U11 > .pin7"]}/>
    {/* KiCad net: Net-(U12-A2LS) */}
    <KiCadNet name={"Net__U12_A2LS_"} connectsTo={[".R61 > .pin1", ".U12 > .pin32"]}/>
    {/* KiCad net: Net-(U11-B1LS) */}
    <KiCadNet name={"Net__U11_B1LS_"} connectsTo={[".R57 > .pin1", ".U11 > .pin26"]}/>
    {/* KiCad net: unconnected-(U2-PA6-Pad4) */}
    <KiCadNet name={"unconnected__U2_PA6_Pad4_"} connectsTo={[".U2 > .pin4"]}/>
    {/* KiCad net: unconnected-(U2-PA7-Pad5) */}
    <KiCadNet name={"unconnected__U2_PA7_Pad5_"} connectsTo={[".U2 > .pin5"]}/>
    {/* KiCad net: /Power Supply/vout_ref */}
    <KiCadNet name={"_Power_Supply_vout_ref"} connectsTo={[".U2 > .pin6", ".R14 > .pin2", ".R15 > .pin1"]}/>
    {/* KiCad net: /Power Supply/vin_ref */}
    <KiCadNet name={"_Power_Supply_vin_ref"} connectsTo={[".U2 > .pin7", ".R10 > .pin1", ".R9 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-PB3-Pad8) */}
    <KiCadNet name={"unconnected__U2_PB3_Pad8_"} connectsTo={[".U2 > .pin8"]}/>
    {/* KiCad net: unconnected-(U2-PB2-Pad9) */}
    <KiCadNet name={"unconnected__U2_PB2_Pad9_"} connectsTo={[".U2 > .pin9"]}/>
    {/* KiCad net: Net-(U2-PC0) */}
    <KiCadNet name={"Net__U2_PC0_"} connectsTo={[".U2 > .pin12", ".TP6 > .pin1"]}/>
    {/* KiCad net: unconnected-(U2-PC2-Pad14) */}
    <KiCadNet name={"unconnected__U2_PC2_Pad14_"} connectsTo={[".U2 > .pin14"]}/>
    {/* KiCad net: unconnected-(U2-PA1-Pad17) */}
    <KiCadNet name={"unconnected__U2_PA1_Pad17_"} connectsTo={[".U2 > .pin17"]}/>
    {/* KiCad net: unconnected-(U2-PA2-Pad18) */}
    <KiCadNet name={"unconnected__U2_PA2_Pad18_"} connectsTo={[".U2 > .pin18"]}/>
    {/* KiCad net: unconnected-(U2-PA3-Pad19) */}
    <KiCadNet name={"unconnected__U2_PA3_Pad19_"} connectsTo={[".U2 > .pin19"]}/>
    {/* KiCad net: Net-(Q19A-S1) */}
    <KiCadNet name={"Net__Q19A_S1_"} connectsTo={[".Q19 > .pin1", ".Q19 > .pin5", ".J9 > .pin3", ".U12 > .pin28"]}/>
    {/* KiCad net: Net-(Q19A-G1) */}
    <KiCadNet name={"Net__Q19A_G1_"} connectsTo={[".Q19 > .pin2", ".U12 > .pin27"]}/>
    {/* KiCad net: Net-(Q19B-S2) */}
    <KiCadNet name={"Net__Q19B_S2_"} connectsTo={[".Q19 > .pin3", ".Q21 > .pin1", ".R60 > .pin2", ".U12 > .pin25"]}/>
    {/* KiCad net: Net-(Q19B-G2) */}
    <KiCadNet name={"Net__Q19B_G2_"} connectsTo={[".Q19 > .pin4", ".R65 > .pin2"]}/>
    {/* KiCad net: Net-(Q16A-S1) */}
    <KiCadNet name={"Net__Q16A_S1_"} connectsTo={[".J8 > .pin1", ".Q16 > .pin1", ".Q16 > .pin5", ".U11 > .pin37"]}/>
    {/* KiCad net: Net-(Q18A-D1) */}
    <KiCadNet name={"Net__Q18A_D1_"} connectsTo={[".J8 > .pin2", ".Q18 > .pin3", ".Q18 > .pin6", ".U11 > .pin30"]}/>
    {/* KiCad net: Net-(Q17A-D1) */}
    <KiCadNet name={"Net__Q17A_D1_"} connectsTo={[".J8 > .pin4", ".Q17 > .pin3", ".Q17 > .pin6", ".U11 > .pin21"]}/>
    {/* KiCad net: /Microprocessor/3to5_16/in */}
    <KiCadNet name={"_Microprocessor_3to5_16_in"} connectsTo={[".U26 > .pin2", ".U3 > .pin48"]}/>
    {/* KiCad net: Net-(U11-A2LS) */}
    <KiCadNet name={"Net__U11_A2LS_"} connectsTo={[".R53 > .pin1", ".U11 > .pin32"]}/>
    {/* KiCad net: Net-(Q18A-G1) */}
    <KiCadNet name={"Net__Q18A_G1_"} connectsTo={[".R53 > .pin2", ".Q18 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/3to5_7/in */}
    <KiCadNet name={"_Microprocessor_3to5_7_in"} connectsTo={[".U21 > .pin2", ".U3 > .pin38"]}/>
    {/* KiCad net: /Microprocessor/3to5_5/in */}
    <KiCadNet name={"_Microprocessor_3to5_5_in"} connectsTo={[".U19 > .pin2", ".U3 > .pin46"]}/>
    {/* KiCad net: Net-(Q17B-G2) */}
    <KiCadNet name={"Net__Q17B_G2_"} connectsTo={[".Q17 > .pin4", ".U11 > .pin22"]}/>
    {/* KiCad net: Net-(Q16A-G1) */}
    <KiCadNet name={"Net__Q16A_G1_"} connectsTo={[".Q16 > .pin2", ".U11 > .pin36"]}/>
    {/* KiCad net: Net-(Q16B-G2) */}
    <KiCadNet name={"Net__Q16B_G2_"} connectsTo={[".Q16 > .pin4", ".R56 > .pin2"]}/>
    {/* KiCad net: Net-(U10-Y) */}
    <KiCadNet name={"Net__U10_Y_"} connectsTo={[".U10 > .pin4", ".R19 > .pin2"]}/>
    {/* KiCad net: Net-(Q18B-G2) */}
    <KiCadNet name={"Net__Q18B_G2_"} connectsTo={[".Q18 > .pin4", ".U11 > .pin31"]}/>
    {/* KiCad net: Net-(Q20A-S1) */}
    <KiCadNet name={"Net__Q20A_S1_"} connectsTo={[".J9 > .pin1", ".Q20 > .pin1", ".Q20 > .pin5", ".U12 > .pin37"]}/>
    {/* KiCad net: Net-(Q21A-D1) */}
    <KiCadNet name={"Net__Q21A_D1_"} connectsTo={[".J9 > .pin4", ".Q21 > .pin3", ".Q21 > .pin6", ".U12 > .pin21"]}/>
    {/* KiCad net: Net-(U1-CP1) */}
    <KiCadNet name={"Net__U1_CP1_"} connectsTo={[".U1 > .pin1", ".C7 > .pin1"]}/>
    {/* KiCad net: Net-(U1-CP2) */}
    <KiCadNet name={"Net__U1_CP2_"} connectsTo={[".U1 > .pin2", ".C7 > .pin2"]}/>
    {/* KiCad net: Net-(U1-VCP) */}
    <KiCadNet name={"Net__U1_VCP_"} connectsTo={[".U1 > .pin3", ".C8 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-RESET-Pad9) */}
    <KiCadNet name={"unconnected__U1_RESET_Pad9_"} connectsTo={[".U1 > .pin9"]}/>
    {/* KiCad net: unconnected-(U1-BIN1-Pad12) */}
    <KiCadNet name={"unconnected__U1_BIN1_Pad12_"} connectsTo={[".U1 > .pin12"]}/>
    {/* KiCad net: unconnected-(U1-BIN2-Pad13) */}
    <KiCadNet name={"unconnected__U1_BIN2_Pad13_"} connectsTo={[".U1 > .pin13"]}/>
    {/* KiCad net: Net-(U1-BEMF) */}
    <KiCadNet name={"Net__U1_BEMF_"} connectsTo={[".U1 > .pin20", ".C1 > .pin1"]}/>
    {/* KiCad net: Net-(Q4A-D1) */}
    <KiCadNet name={"Net__Q4A_D1_"} connectsTo={[".U1 > .pin21", ".J1 > .pin4", ".Q4 > .pin3", ".Q4 > .pin6"]}/>
    {/* KiCad net: Net-(Q4B-G2) */}
    <KiCadNet name={"Net__Q4B_G2_"} connectsTo={[".U1 > .pin22", ".Q4 > .pin4"]}/>
    {/* KiCad net: Net-(Q3A-G1) */}
    <KiCadNet name={"Net__Q3A_G1_"} connectsTo={[".U1 > .pin27", ".Q3 > .pin2"]}/>
    {/* KiCad net: Net-(Q3A-S1) */}
    <KiCadNet name={"Net__Q3A_S1_"} connectsTo={[".U1 > .pin28", ".J1 > .pin3", ".Q3 > .pin1", ".Q3 > .pin5"]}/>
    {/* KiCad net: Net-(U1-A1LS) */}
    <KiCadNet name={"Net__U1_A1LS_"} connectsTo={[".U1 > .pin35", ".R2 > .pin1"]}/>
    {/* KiCad net: Net-(Q1A-G1) */}
    <KiCadNet name={"Net__Q1A_G1_"} connectsTo={[".U1 > .pin36", ".Q1 > .pin2"]}/>
    {/* KiCad net: Net-(Q1A-S1) */}
    <KiCadNet name={"Net__Q1A_S1_"} connectsTo={[".U1 > .pin37", ".J1 > .pin1", ".Q1 > .pin1", ".Q1 > .pin5"]}/>
    {/* KiCad net: /Microprocessor/3to5_10/in */}
    <KiCadNet name={"_Microprocessor_3to5_10_in"} connectsTo={[".U24 > .pin2", ".U3 > .pin43"]}/>
    {/* KiCad net: /Microprocessor/3to5_15/in */}
    <KiCadNet name={"_Microprocessor_3to5_15_in"} connectsTo={[".U15 > .pin2", ".U3 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/3to5_4/in */}
    <KiCadNet name={"_Microprocessor_3to5_4_in"} connectsTo={[".U18 > .pin2", ".U3 > .pin36"]}/>
    {/* KiCad net: Net-(Q21A-G1) */}
    <KiCadNet name={"Net__Q21A_G1_"} connectsTo={[".Q21 > .pin2", ".R63 > .pin2"]}/>
    {/* KiCad net: Net-(Q21B-G2) */}
    <KiCadNet name={"Net__Q21B_G2_"} connectsTo={[".Q21 > .pin4", ".U12 > .pin22"]}/>
    {/* KiCad net: Net-(J3-Pin_2) */}
    <KiCadNet name={"Net__J3_Pin_2_"} connectsTo={[".J3 > .pin2", ".R26 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/stall_2 */}
    <KiCadNet name={"_Microprocessor_stall_2"} connectsTo={[".R51 > .pin1", ".U3 > .pin64"]}/>
    {/* KiCad net: Net-(U11-STALL_BEMFV_N) */}
    <KiCadNet name={"Net__U11_STALL_BEMFV_N_"} connectsTo={[".R51 > .pin2", ".R50 > .pin2", ".U11 > .pin19"]}/>
    {/* KiCad net: /Microprocessor/3to5_12/in */}
    <KiCadNet name={"_Microprocessor_3to5_12_in"} connectsTo={[".U5 > .pin2", ".U3 > .pin31"]}/>
    {/* KiCad net: /Microprocessor/stall_3 */}
    <KiCadNet name={"_Microprocessor_stall_3"} connectsTo={[".U3 > .pin1", ".R59 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/3to5_14/in */}
    <KiCadNet name={"_Microprocessor_3to5_14_in"} connectsTo={[".U3 > .pin3", ".U14 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PB1) */}
    <KiCadNet name={"Net__U3_PB1_"} connectsTo={[".U3 > .pin7", ".D15 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PB4) */}
    <KiCadNet name={"Net__U3_PB4_"} connectsTo={[".U3 > .pin10", ".D19 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PB5) */}
    <KiCadNet name={"Net__U3_PB5_"} connectsTo={[".U3 > .pin11", ".D13 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PB6) */}
    <KiCadNet name={"Net__U3_PB6_"} connectsTo={[".U3 > .pin12", ".D20 > .pin2"]}/>
    {/* KiCad net: Net-(U3-PB7) */}
    <KiCadNet name={"Net__U3_PB7_"} connectsTo={[".U3 > .pin13", ".D14 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/3to5_3/in */}
    <KiCadNet name={"_Microprocessor_3to5_3_in"} connectsTo={[".U3 > .pin26", ".U17 > .pin2"]}/>
    {/* KiCad net: /Microprocessor/cs_2 */}
    <KiCadNet name={"_Microprocessor_cs_2"} connectsTo={[".U3 > .pin29", ".TP17 > .pin1", ".U11 > .pin16"]}/>
    {/* KiCad net: /Microprocessor/rs485_di */}
    <KiCadNet name={"_Microprocessor_rs485_di"} connectsTo={[".U3 > .pin33", ".R70 > .pin1"]}/>
    {/* KiCad net: /Microprocessor/rs485_rw */}
    <KiCadNet name={"_Microprocessor_rs485_rw"} connectsTo={[".U3 > .pin47", ".R72 > .pin1"]}/>
    {/* KiCad net: Net-(J15-Pin_1) */}
    <KiCadNet name={"Net__J15_Pin_1_"} connectsTo={[".U3 > .pin51", ".J15 > .pin1"]}/>
    {/* KiCad net: Net-(R15-Pad2) */}
    <KiCadNet name={"Net__R15_Pad2_"} connectsTo={[".R16 > .pin1", ".R15 > .pin2"]}/>
    {/* KiCad net: Net-(Q12B-G2) */}
    <KiCadNet name={"Net__Q12B_G2_"} connectsTo={[".R48 > .pin2", ".Q12 > .pin4"]}/>
    {/* KiCad net: Net-(U12-B2LS) */}
    <KiCadNet name={"Net__U12_B2LS_"} connectsTo={[".R63 > .pin1", ".U12 > .pin23"]}/>
    {/* KiCad net: Net-(U11-A1LS) */}
    <KiCadNet name={"Net__U11_A1LS_"} connectsTo={[".R56 > .pin1", ".U11 > .pin35"]}/>
    {/* KiCad net: Net-(U11-CP1) */}
    <KiCadNet name={"Net__U11_CP1_"} connectsTo={[".C49 > .pin1", ".U11 > .pin1"]}/>
    {/* KiCad net: Net-(U11-CP2) */}
    <KiCadNet name={"Net__U11_CP2_"} connectsTo={[".C49 > .pin2", ".U11 > .pin2"]}/>
    {/* KiCad net: Net-(Q1B-G2) */}
    <KiCadNet name={"Net__Q1B_G2_"} connectsTo={[".R2 > .pin2", ".Q1 > .pin4"]}/>
    {/* KiCad net: Net-(Q20A-G1) */}
    <KiCadNet name={"Net__Q20A_G1_"} connectsTo={[".Q20 > .pin2", ".U12 > .pin36"]}/>
    {/* KiCad net: Net-(U12-B1LS) */}
    <KiCadNet name={"Net__U12_B1LS_"} connectsTo={[".R65 > .pin1", ".U12 > .pin26"]}/>
    {/* KiCad net: Net-(U12-VCP) */}
    <KiCadNet name={"Net__U12_VCP_"} connectsTo={[".C60 > .pin1", ".U12 > .pin3"]}/>
    {/* KiCad net: unconnected-(U12-RESET-Pad9) */}
    <KiCadNet name={"unconnected__U12_RESET_Pad9_"} connectsTo={[".U12 > .pin9"]}/>
    {/* KiCad net: unconnected-(U12-BIN1-Pad12) */}
    <KiCadNet name={"unconnected__U12_BIN1_Pad12_"} connectsTo={[".U12 > .pin12"]}/>
    {/* KiCad net: unconnected-(U12-BIN2-Pad13) */}
    <KiCadNet name={"unconnected__U12_BIN2_Pad13_"} connectsTo={[".U12 > .pin13"]}/>
    {/* KiCad net: Net-(U11-VCP) */}
    <KiCadNet name={"Net__U11_VCP_"} connectsTo={[".U11 > .pin3", ".C50 > .pin1"]}/>
    {/* KiCad net: unconnected-(U11-RESET-Pad9) */}
    <KiCadNet name={"unconnected__U11_RESET_Pad9_"} connectsTo={[".U11 > .pin9"]}/>
    {/* KiCad net: unconnected-(U11-BIN1-Pad12) */}
    <KiCadNet name={"unconnected__U11_BIN1_Pad12_"} connectsTo={[".U11 > .pin12"]}/>
    {/* KiCad net: unconnected-(U11-BIN2-Pad13) */}
    <KiCadNet name={"unconnected__U11_BIN2_Pad13_"} connectsTo={[".U11 > .pin13"]}/>
    {/* KiCad net: Net-(D2-K) */}
    <KiCadNet name={"Net__D2_K_"} connectsTo={[".D2 > .pin1", ".R9 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
