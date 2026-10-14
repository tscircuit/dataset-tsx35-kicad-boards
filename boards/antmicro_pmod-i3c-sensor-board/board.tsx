import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro PMOD I3C sensor board
// Source: https://github.com/antmicro/pmod-i3c-sensor-board
// Commit: 5ee5d34ff918422fe7af59f7ffdc9d4bdabf18a7; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_U5, Footprint_F1, Footprint_R1, Footprint_REF__, Footprint_R30, Footprint_R21, Footprint_R12, Footprint_R33, Footprint_R60, Footprint_R8, Footprint_U7, Footprint_R59, Footprint_Q2, Footprint_R29, Footprint_D1, Footprint_R2, Footprint_J3, Footprint_R15, Footprint_R31, Footprint_TP4, Footprint_TP1, Footprint_R36, Footprint_R7, Footprint_R6, Footprint_F2, Footprint_R3, Footprint_D3, Footprint_Q4, Footprint_C5, Footprint_R19, Footprint_R34, Footprint_TP3, Footprint_U6, Footprint_R20, Footprint_R57, Footprint_C2, Footprint_R24, Footprint_U2, Footprint_Q5, Footprint_C4, Footprint_R9, Footprint_R22, Footprint_R58, Footprint_R27, Footprint_R51, Footprint_C9, Footprint_R10, Footprint_R26, Footprint_R13, Footprint_D2, Footprint_R48, Footprint_U8, Footprint_U4, Footprint_C8, Footprint_R5, Footprint_R32, Footprint_R17, Footprint_R28, Footprint_R25, Footprint_TP2, Footprint_Q3, Footprint_R23, Footprint_R55, Footprint_R37, Footprint_R38, Footprint_U3, Footprint_U1, Footprint_R54, Footprint_R16, Footprint_C1, Footprint_R14, Footprint_C10, Footprint_Q1, Footprint_R4, Footprint_R11, Footprint_C3, Footprint_C7, Footprint_R56, Footprint_R35, Footprint_R18, Footprint_TP15, Footprint_TP12, Footprint_BoardFeature_83, Footprint_TP11, Footprint_BoardFeature_85, Footprint_TP7, Footprint_BoardFeature_87, Footprint_TP13, Footprint_TP6, Footprint_TP14, Footprint_TP10, Footprint_REF___, Footprint_TP9, Footprint_BoardFeature_94, Footprint_TP5, Footprint_TP8 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={33.02000000000001} height={20.319999999999993} thickness={1.59} layers={4} outline={[{ "x": -16.50999999999999, "y": 10.159999999999997 }, { "x": 16.51000000000002, "y": 10.159999999999997 }, { "x": 16.51000000000002, "y": -10.159999999999997 }, { "x": -16.50999999999999, "y": -10.159999999999997 }, { "x": -16.50999999999999, "y": 10.159999999999997 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* Original KiCad copper zones, clipped to the board, in ascending priority. */}
    <copperpour name="GND_inner1_0_0" connectsTo="net.GND" layer="inner1" clearance={0.25} useThermalReliefs unbroken coveredWithSolderMask />
    <copperpour name="VCC_inner2_1_0" connectsTo="net.VCC" layer="inner2" clearance={0.25} useThermalReliefs unbroken coveredWithSolderMask />
    <copperpour name="_SEN1_VCC_inner2_2_0" connectsTo="net._SEN1_VCC" layer="inner2" clearance={0.25} useThermalReliefs unbroken coveredWithSolderMask outline={[{"x":16.51,"y":8.97976923},{"x":13.94,"y":8.96},{"x":13.94,"y":4.71},{"x":7.65593,"y":4.710275},{"x":7.641124,"y":2.735},{"x":16.51,"y":2.735}]} />
    {/* U5: MMC5603NJ */}
    <chip name={"U5"} pcbX={12.82} pcbY={-3.01} pcbRotation={0} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["B1"], "pin4": ["B2"] }} manufacturerPartNumber={"MMC5603NJ"} displayName={"MMC5603NJ"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* F1: F_20mA_0603 */}
    <chip name={"F1"} pcbX={-1.91} pcbY={0.335} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"0ZCM0002FF2G"} displayName={"F_20mA_0603"} footprint={<Footprint_F1 />} noSchematicRepresentation={true}/>

    {/* R1: R_0R_0402 */}
    <chip name={"R1"} pcbX={-3.805} pcbY={2.735} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* REF**: LOGO */}
    <chip name={"REF__"} pcbX={8.99} pcbY={-6.54} pcbRotation={0} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* R30: R_0R_0603 */}
    <chip name={"R30"} pcbX={7.615} pcbY={7.36} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R30 />} noSchematicRepresentation={true}/>

    {/* R21: R_0R_0402 */}
    <chip name={"R21"} pcbX={0.82} pcbY={2.96} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* R12: R_2k_0402 */}
    <chip name={"R12"} pcbX={2.685} pcbY={0.235} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2001GLF"} displayName={"R_2k_0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* R33: R_0R_0603 */}
    <chip name={"R33"} pcbX={8.88} pcbY={1.195} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R33 />} noSchematicRepresentation={true}/>

    {/* R60: R_200R_0402 */}
    <chip name={"R60"} pcbX={-6.730671} pcbY={-7.36} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2000GLF"} displayName={"R_200R_0402"} footprint={<Footprint_R60 />} noSchematicRepresentation={true}/>

    {/* R8: R_0R_0402 */}
    <chip name={"R8"} pcbX={0.785989} pcbY={5.875428} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* U7: TPD4E05U06QDQARQ1 */}
    <chip name={"U7"} pcbX={-7.625} pcbY={-0.065} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"TPD4E05U06QDQARQ1"} displayName={"TPD4E05U06QDQARQ1"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* R59: R_100k_0402 */}
    <chip name={"R59"} pcbX={-3.114628} pcbY={-2.54507} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R59 />} noSchematicRepresentation={true}/>

    {/* Q2: DMC31D5UDJ */}
    <chip name={"Q2"} pcbX={-2.044999} pcbY={7.163586} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"DMC31D5UDJ"} displayName={"DMC31D5UDJ"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* R29: R_0R_0402 */}
    <chip name={"R29"} pcbX={15.31} pcbY={3.72} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R29 />} noSchematicRepresentation={true}/>

    {/* D1: ESD9X5.0ST5G */}
    <chip name={"D1"} pcbX={-7.830671} pcbY={-5.252} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ESD9X5.0ST5G"} displayName={"ESD9X5.0ST5G"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R2: R_0R_0402 */}
    <chip name={"R2"} pcbX={-3.959546} pcbY={7.521793} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* J3: PinHeader_2x6_P2.54mm_Drill1.1mm_Horizontal */}
    <chip name={"J3"} pcbX={-10.055} pcbY={6.35} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"] }} manufacturerPartNumber={"10129382-912002BLF"} displayName={"PinHeader_2x6_P2.54mm_Drill1.1mm_Horizontal"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* R15: R_0R_0402 */}
    <chip name={"R15"} pcbX={5.78464} pcbY={1.268836} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* R31: R_0R_0603 */}
    <chip name={"R31"} pcbX={7.615} pcbY={6.035} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R31 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_0.75mm_SMD */}
    <chip name={"TP4"} pcbX={6.07} pcbY={-0.31} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_0.75mm_SMD */}
    <chip name={"TP1"} pcbX={9.479621} pcbY={8.909432} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* R36: R_0R_0603 */}
    <chip name={"R36"} pcbX={8.9} pcbY={-3.635} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R36 />} noSchematicRepresentation={true}/>

    {/* R7: R_0R_0402 */}
    <chip name={"R7"} pcbX={-0.735} pcbY={0.315} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* R6: R_10k_0402 */}
    <chip name={"R6"} pcbX={-0.255925} pcbY={5.865} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* F2: F_20mA_0603 */}
    <chip name={"F2"} pcbX={-2.06} pcbY={5.61} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"0ZCM0002FF2G"} displayName={"F_20mA_0603"} footprint={<Footprint_F2 />} noSchematicRepresentation={true}/>

    {/* R3: R_10k_0402 */}
    <chip name={"R3"} pcbX={-2.455} pcbY={3.785} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* D3: LED_G_0603_LTST-C190GKT */}
    <chip name={"D3"} pcbX={-6.980671} pcbY={-9.033506} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* Q4: DMC2400UV-7 */}
    <chip name={"Q4"} pcbX={3.009301} pcbY={1.987836} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"DMC2400UV-7"} displayName={"DMC2400UV-7"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* C5: C_2u2_0402 */}
    <chip name={"C5"} pcbX={11.2} pcbY={-2.98} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1A225K050BC"} displayName={"C_2u2_0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* R19: R_10k_0402 */}
    <chip name={"R19"} pcbX={4.73464} pcbY={1.268836} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* R34: R_0R_0603 */}
    <chip name={"R34"} pcbX={8.88} pcbY={-0.13} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R34 />} noSchematicRepresentation={true}/>

    {/* TP3: TP_0.75mm_SMD */}
    <chip name={"TP3"} pcbX={4.24} pcbY={3.81} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* U6: AP7366_SOT */}
    <chip name={"U6"} pcbX={-4.429671} pcbY={-6.20734} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"AP7366-W5-7"} displayName={"AP7366_SOT"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* R20: R_10k_0402 */}
    <chip name={"R20"} pcbX={0.766246} pcbY={3.985} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* R57: R_33k2_0402 */}
    <chip name={"R57"} pcbX={-3.108566} pcbY={-3.69} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3322GLF"} displayName={"R_33k2_0402"} footprint={<Footprint_R57 />} noSchematicRepresentation={true}/>

    {/* C2: C_100n_0402 */}
    <chip name={"C2"} pcbX={12.84504} pcbY={-1.254765} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* R24: R_10k_0402 */}
    <chip name={"R24"} pcbX={0.835} pcbY={8.749735} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* U2: SN74LVC1G240_SC70 */}
    <chip name={"U2"} pcbX={-4.71} pcbY={4.9928} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"SN74LVC1G240DCKR"} displayName={"SN74LVC1G240_SC70"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* Q5: DMG1012T-7 */}
    <chip name={"Q5"} pcbX={-7.491402} pcbY={-3.04} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"DMG1012T-7"} displayName={"DMG1012T-7"} footprint={<Footprint_Q5 />} noSchematicRepresentation={true}/>

    {/* C4: C_100n_0402 */}
    <chip name={"C4"} pcbX={-5.98} pcbY={2.335} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* R9: R_0R_0402 */}
    <chip name={"R9"} pcbX={4.13255} pcbY={5.417578} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* R22: R_2k_0402 */}
    <chip name={"R22"} pcbX={2.77} pcbY={9.21} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2001GLF"} displayName={"R_2k_0402"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* R58: R_0R_0402 */}
    <chip name={"R58"} pcbX={-0.58} pcbY={-8.718333} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R58 />} noSchematicRepresentation={true}/>

    {/* R27: R_0R_0402 */}
    <chip name={"R27"} pcbX={14.35} pcbY={3.72} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* R51: R_10k_0402 */}
    <chip name={"R51"} pcbX={11.58} pcbY={8.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R51 />} noSchematicRepresentation={true}/>

    {/* C9: C_1u_0402 */}
    <chip name={"C9"} pcbX={-5.774024} pcbY={-3.020011} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* R10: R_10k_0402 */}
    <chip name={"R10"} pcbX={2.660384} pcbY={4.852754} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R26: R_0R_0402 */}
    <chip name={"R26"} pcbX={12.4} pcbY={3.71} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* R13: R_10k_0402 */}
    <chip name={"R13"} pcbX={-0.735} pcbY={8.02536} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* D2: LED_G_0603_LTST-C190GKT */}
    <chip name={"D2"} pcbX={-12.38} pcbY={-9.04} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* R48: R_0R_0402 */}
    <chip name={"R48"} pcbX={14.17} pcbY={8.46} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R48 />} noSchematicRepresentation={true}/>

    {/* U8: TPD4E05U06QDQARQ1 */}
    <chip name={"U8"} pcbX={-7.625} pcbY={4.585} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"TPD4E05U06QDQARQ1"} displayName={"TPD4E05U06QDQARQ1"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* U4: BMA580 */}
    <chip name={"U4"} pcbX={12.865} pcbY={0.354937} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"BMA580"} displayName={"BMA580"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* C8: C_1u_0402 */}
    <chip name={"C8"} pcbX={-6.78} pcbY={-5.219329} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* R5: R_10k_0402 */}
    <chip name={"R5"} pcbX={0.29} pcbY={0.305} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* R32: R_0R_0402 */}
    <chip name={"R32"} pcbX={12.835686} pcbY={2.154862} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R32 />} noSchematicRepresentation={true}/>

    {/* R17: R_0R_0402 */}
    <chip name={"R17"} pcbX={9.5} pcbY={3.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* R28: R_200R_0402 */}
    <chip name={"R28"} pcbX={-10.12} pcbY={-9.04} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2000GLF"} displayName={"R_200R_0402"} footprint={<Footprint_R28 />} noSchematicRepresentation={true}/>

    {/* R25: R_0R_0402 */}
    <chip name={"R25"} pcbX={0.845} pcbY={7.71492} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_0.75mm_SMD */}
    <chip name={"TP2"} pcbX={15.428171} pcbY={0.357801} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* Q3: DMC2400UV-7 */}
    <chip name={"Q3"} pcbX={3.037} pcbY={7.572098} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"DMC2400UV-7"} displayName={"DMC2400UV-7"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* R23: R_2k_0402 */}
    <chip name={"R23"} pcbX={2.659361} pcbY={5.872277} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2001GLF"} displayName={"R_2k_0402"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* R55: R_0R_0402 */}
    <chip name={"R55"} pcbX={-1.005135} pcbY={-5.785692} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R55 />} noSchematicRepresentation={true}/>

    {/* R37: R_0R_0603 */}
    <chip name={"R37"} pcbX={8.9} pcbY={-2.315} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R37 />} noSchematicRepresentation={true}/>

    {/* R38: R_0R_0402 */}
    <chip name={"R38"} pcbX={15.207014} pcbY={2.114558} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R38 />} noSchematicRepresentation={true}/>

    {/* U3: SN74LVC1G240_SC70 */}
    <chip name={"U3"} pcbX={-4.71} pcbY={0.327199} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"SN74LVC1G240DCKR"} displayName={"SN74LVC1G240_SC70"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* U1: P3T1755DP/Q900Z */}
    <chip name={"U1"} pcbX={12.119451} pcbY={6.078722} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"P3T1755DP/Q900Z"} displayName={"P3T1755DP/Q900Z"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* R54: R_0R_0402 */}
    <chip name={"R54"} pcbX={-1.029285} pcbY={-7.107108} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R54 />} noSchematicRepresentation={true}/>

    {/* R16: R_0R_0402 */}
    <chip name={"R16"} pcbX={8.54} pcbY={3.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* C1: C_100n_0402 */}
    <chip name={"C1"} pcbX={15.81} pcbY={6.58} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* R14: R_10k_0402 */}
    <chip name={"R14"} pcbX={-0.635} pcbY={2.29} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* C10: C_100n_0402 */}
    <chip name={"C10"} pcbX={-2.09} pcbY={-9.154882} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* Q1: DMC31D5UDJ */}
    <chip name={"Q1"} pcbX={-2.035} pcbY={2.46} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"DMC31D5UDJ"} displayName={"DMC31D5UDJ"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* R4: R_10k_0402 */}
    <chip name={"R4"} pcbX={-2.98} pcbY={8.59} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* R11: R_2k_0402 */}
    <chip name={"R11"} pcbX={2.785} pcbY={3.785} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2001GLF"} displayName={"R_2k_0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* C3: C_100n_0402 */}
    <chip name={"C3"} pcbX={-6.356423} pcbY={7.097109} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* C7: C_100n_0402 */}
    <chip name={"C7"} pcbX={-7.755671} pcbY={-7.37} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* R56: R_41k2_0402 */}
    <chip name={"R56"} pcbX={-4.666778} pcbY={-3.024957} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4122GLF"} displayName={"R_41k2_0402"} footprint={<Footprint_R56 />} noSchematicRepresentation={true}/>

    {/* R35: R_0R_0402 */}
    <chip name={"R35"} pcbX={14.46} pcbY={-2.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R35 />} noSchematicRepresentation={true}/>

    {/* R18: R_0R_0402 */}
    <chip name={"R18"} pcbX={11.44} pcbY={3.71} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* TP15: TP_1.5mm_SMD */}
    <chip name={"TP15"} pcbX={-5.447144} pcbY={-8.497989} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* TP12: TP_1.5mm_SMD */}
    <chip name={"TP12"} pcbX={-0.389482} pcbY={-8.477952} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* BoardFeature_83:  */}
    <chip name={"BoardFeature_83"} pcbX={9.479621} pcbY={8.909432} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} footprint={<Footprint_BoardFeature_83 />} noSchematicRepresentation={true}/>

    {/* TP11: TP_1.5mm_SMD */}
    <chip name={"TP11"} pcbX={-2.934977} pcbY={-8.509992} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* BoardFeature_85:  */}
    <chip name={"BoardFeature_85"} pcbX={15.428171} pcbY={0.357801} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} footprint={<Footprint_BoardFeature_85 />} noSchematicRepresentation={true}/>

    {/* TP7: TP_1.5mm_SMD */}
    <chip name={"TP7"} pcbX={4.702954} pcbY={-8.483954} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* BoardFeature_87:  */}
    <chip name={"BoardFeature_87"} pcbX={6.07} pcbY={-0.31} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} footprint={<Footprint_BoardFeature_87 />} noSchematicRepresentation={true}/>

    {/* TP13: TP_1.5mm_SMD */}
    <chip name={"TP13"} pcbX={-7.967419} pcbY={-8.459992} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* TP6: TP_1.5mm_SMD */}
    <chip name={"TP6"} pcbX={14.898499} pcbY={-8.527952} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* TP14: TP_1.5mm_SMD */}
    <chip name={"TP14"} pcbX={-7.967419} pcbY={-3.79573} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* TP10: TP_1.5mm_SMD */}
    <chip name={"TP10"} pcbX={7.259565} pcbY={-8.497989} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* REF**: OSHW-Logo_5.7x6mm_SilkScreen */}
    <chip name={"REF___"} pcbX={-3.495638} pcbY={5.410753} pcbRotation={180} pinLabels={{}} displayName={"OSHW-Logo_5.7x6mm_SilkScreen"} footprint={<Footprint_REF___ />} noSchematicRepresentation={true}/>

    {/* TP9: TP_1.5mm_SMD */}
    <chip name={"TP9"} pcbX={2.222109} pcbY={-8.527952} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* BoardFeature_94:  */}
    <chip name={"BoardFeature_94"} pcbX={4.24} pcbY={3.81} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} footprint={<Footprint_BoardFeature_94 />} noSchematicRepresentation={true}/>

    {/* TP5: TP_1.5mm_SMD */}
    <chip name={"TP5"} pcbX={12.321314} pcbY={-8.475967} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_1.5mm_SMD */}
    <chip name={"TP8"} pcbX={9.820415} pcbY={-8.463963} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".U5 > .pin1", ".R12 > .pin1", ".U7 > .pin3", ".U7 > .pin8", ".R59 > .pin1", ".Q2 > .pin1", ".R29 > .pin1", ".D1 > .pin2", ".J3 > .pin9", ".J3 > .pin10", ".R3 > .pin1", ".D3 > .pin1", ".C5 > .pin1", ".R19 > .pin1", ".U6 > .pin2", ".R57 > .pin1", ".C2 > .pin1", ".U2 > .pin3", ".Q5 > .pin2", ".C4 > .pin1", ".C9 > .pin1", ".R10 > .pin1", ".R26 > .pin1", ".U8 > .pin3", ".U8 > .pin8", ".U4 > .pin1", ".C8 > .pin1", ".R17 > .pin1", ".R23 > .pin1", ".U3 > .pin3", ".U1 > .pin4", ".C1 > .pin1", ".C10 > .pin1", ".Q1 > .pin1", ".R4 > .pin1", ".C3 > .pin1", ".C7 > .pin1", ".TP15 > .pin1"]}/>
    {/* KiCad net: Net-(U5-SCL) */}
    <KiCadNet name={"Net__U5_SCL_"} connectsTo={[".U5 > .pin2", ".R37 > .pin2"]}/>
    {/* KiCad net: /SEN3_VDD */}
    <KiCadNet name={"_SEN3_VDD"} connectsTo={[".U5 > .pin3", ".C5 > .pin2", ".R35 > .pin2"]}/>
    {/* KiCad net: Net-(U5-SDA) */}
    <KiCadNet name={"Net__U5_SDA_"} connectsTo={[".U5 > .pin4", ".R36 > .pin2"]}/>
    {/* KiCad net: Net-(Q1-S2) */}
    <KiCadNet name={"Net__Q1_S2_"} connectsTo={[".F1 > .pin1", ".Q1 > .pin4"]}/>
    {/* KiCad net: VCC */}
    <KiCadNet name={"VCC"} connectsTo={[".F1 > .pin2", ".R6 > .pin2", ".F2 > .pin2", ".R20 > .pin2", ".R24 > .pin2", ".U2 > .pin5", ".C4 > .pin2", ".R22 > .pin2", ".R13 > .pin2", ".R48 > .pin1", ".R5 > .pin2", ".R32 > .pin1", ".R55 > .pin2", ".U3 > .pin5", ".R54 > .pin2", ".R14 > .pin2", ".R11 > .pin2", ".C3 > .pin2", ".R35 > .pin1"]}/>
    {/* KiCad net: /SDA_EN{slash}PULL */}
    <KiCadNet name={"_SDA_EN_slash_PULL"} connectsTo={[".R1 > .pin1", ".J3 > .pin4", ".U8 > .pin1", ".U8 > .pin10", ".U3 > .pin1", ".TP9 > .pin1"]}/>
    {/* KiCad net: Net-(Q1-G1) */}
    <KiCadNet name={"Net__Q1_G1_"} connectsTo={[".R1 > .pin2", ".R3 > .pin2", ".Q1 > .pin2"]}/>
    {/* KiCad net: /SDA */}
    <KiCadNet name={"_SDA"} connectsTo={[".R30 > .pin1", ".R33 > .pin1", ".U7 > .pin1", ".U7 > .pin10", ".J3 > .pin8", ".R36 > .pin1", ".Q4 > .pin3", ".Q4 > .pin6", ".U3 > .pin4", ".R14 > .pin1", ".Q1 > .pin3", ".Q1 > .pin6", ".TP5 > .pin1"]}/>
    {/* KiCad net: Net-(U1-SDA) */}
    <KiCadNet name={"Net__U1_SDA_"} connectsTo={[".R30 > .pin2", ".U1 > .pin1"]}/>
    {/* KiCad net: Net-(Q4-G2) */}
    <KiCadNet name={"Net__Q4_G2_"} connectsTo={[".R21 > .pin1", ".Q4 > .pin5", ".R20 > .pin1"]}/>
    {/* KiCad net: /SDA_UP */}
    <KiCadNet name={"_SDA_UP"} connectsTo={[".R21 > .pin2", ".J3 > .pin2", ".U8 > .pin4", ".U8 > .pin7", ".TP11 > .pin1"]}/>
    {/* KiCad net: Net-(Q4-S1) */}
    <KiCadNet name={"Net__Q4_S1_"} connectsTo={[".R12 > .pin2", ".Q4 > .pin1"]}/>
    {/* KiCad net: Net-(U4-SDA) */}
    <KiCadNet name={"Net__U4_SDA_"} connectsTo={[".R33 > .pin2", ".U4 > .pin4"]}/>
    {/* KiCad net: Net-(D3-A) */}
    <KiCadNet name={"Net__D3_A_"} connectsTo={[".R60 > .pin1", ".D3 > .pin2"]}/>
    {/* KiCad net: /PMOD_3V3 */}
    <KiCadNet name={"_PMOD_3V3"} connectsTo={[".R60 > .pin2", ".D1 > .pin1", ".J3 > .pin11", ".J3 > .pin12", ".U6 > .pin1", ".R58 > .pin2", ".C8 > .pin2", ".R28 > .pin2", ".R54 > .pin1", ".C7 > .pin2", ".TP13 > .pin1"]}/>
    {/* KiCad net: Net-(Q2-G2) */}
    <KiCadNet name={"Net__Q2_G2_"} connectsTo={[".R8 > .pin1", ".Q2 > .pin5", ".R6 > .pin1"]}/>
    {/* KiCad net: /SCL_IN{slash}PUSH */}
    <KiCadNet name={"_SCL_IN_slash_PUSH"} connectsTo={[".R8 > .pin2", ".J3 > .pin3", ".U2 > .pin2", ".U8 > .pin2", ".U8 > .pin9", ".TP8 > .pin1"]}/>
    {/* KiCad net: /SCL_UP */}
    <KiCadNet name={"_SCL_UP"} connectsTo={[".U7 > .pin2", ".U7 > .pin9", ".J3 > .pin7", ".R25 > .pin2", ".TP12 > .pin1"]}/>
    {/* KiCad net: /SDA_IN{slash}PUSH */}
    <KiCadNet name={"_SDA_IN_slash_PUSH"} connectsTo={[".U7 > .pin4", ".U7 > .pin7", ".J3 > .pin6", ".R7 > .pin2", ".U3 > .pin2", ".TP7 > .pin1"]}/>
    {/* KiCad net: /SCL_EN{slash}PULL */}
    <KiCadNet name={"_SCL_EN_slash_PULL"} connectsTo={[".U7 > .pin5", ".U7 > .pin6", ".R2 > .pin1", ".J3 > .pin5", ".U2 > .pin1", ".TP10 > .pin1"]}/>
    {/* KiCad net: /LDO_OUTPUT */}
    <KiCadNet name={"_LDO_OUTPUT"} connectsTo={[".R59 > .pin2", ".U6 > .pin5", ".Q5 > .pin1", ".C9 > .pin2", ".R55 > .pin1", ".R56 > .pin2", ".TP14 > .pin1"]}/>
    {/* KiCad net: Net-(Q2-G1) */}
    <KiCadNet name={"Net__Q2_G1_"} connectsTo={[".Q2 > .pin2", ".R2 > .pin2", ".R4 > .pin2"]}/>
    {/* KiCad net: /SCL */}
    <KiCadNet name={"_SCL"} connectsTo={[".Q2 > .pin3", ".Q2 > .pin6", ".J3 > .pin1", ".R31 > .pin1", ".R34 > .pin1", ".U2 > .pin4", ".R13 > .pin1", ".U8 > .pin5", ".U8 > .pin6", ".Q3 > .pin3", ".Q3 > .pin6", ".R37 > .pin1", ".TP6 > .pin1"]}/>
    {/* KiCad net: Net-(Q2-S2) */}
    <KiCadNet name={"Net__Q2_S2_"} connectsTo={[".Q2 > .pin4", ".F2 > .pin1"]}/>
    {/* KiCad net: /SEN1_A2 */}
    <KiCadNet name={"_SEN1_A2"} connectsTo={[".R29 > .pin2", ".R27 > .pin1", ".U1 > .pin5"]}/>
    {/* KiCad net: /SDA_DOWN */}
    <KiCadNet name={"_SDA_DOWN"} connectsTo={[".R15 > .pin1", ".TP4 > .pin1", ".BoardFeature_87 > .pin1"]}/>
    {/* KiCad net: Net-(Q4-G1) */}
    <KiCadNet name={"Net__Q4_G1_"} connectsTo={[".R15 > .pin2", ".Q4 > .pin2", ".R19 > .pin2"]}/>
    {/* KiCad net: Net-(U1-SCL) */}
    <KiCadNet name={"Net__U1_SCL_"} connectsTo={[".R31 > .pin2", ".U1 > .pin2"]}/>
    {/* KiCad net: /SEN1_~{ALERT} */}
    <KiCadNet name={"_SEN1___ALERT_"} connectsTo={[".TP1 > .pin1", ".R51 > .pin1", ".U1 > .pin3", ".BoardFeature_83 > .pin1"]}/>
    {/* KiCad net: Net-(Q1-G2) */}
    <KiCadNet name={"Net__Q1_G2_"} connectsTo={[".R7 > .pin1", ".R5 > .pin1", ".Q1 > .pin5"]}/>
    {/* KiCad net: Net-(Q4-S2) */}
    <KiCadNet name={"Net__Q4_S2_"} connectsTo={[".Q4 > .pin4", ".R11 > .pin1"]}/>
    {/* KiCad net: Net-(U4-SCL) */}
    <KiCadNet name={"Net__U4_SCL_"} connectsTo={[".R34 > .pin2", ".U4 > .pin5"]}/>
    {/* KiCad net: /SCL_DOWN */}
    <KiCadNet name={"_SCL_DOWN"} connectsTo={[".TP3 > .pin1", ".R9 > .pin1", ".BoardFeature_94 > .pin1"]}/>
    {/* KiCad net: Net-(U6-EN) */}
    <KiCadNet name={"Net__U6_EN_"} connectsTo={[".U6 > .pin3", ".R58 > .pin1", ".C10 > .pin2"]}/>
    {/* KiCad net: Net-(U6-ADJ) */}
    <KiCadNet name={"Net__U6_ADJ_"} connectsTo={[".U6 > .pin4", ".R57 > .pin2", ".R56 > .pin1"]}/>
    {/* KiCad net: /SEN2_VDD */}
    <KiCadNet name={"_SEN2_VDD"} connectsTo={[".C2 > .pin2", ".U4 > .pin6", ".R32 > .pin2", ".R38 > .pin2"]}/>
    {/* KiCad net: Net-(Q3-G2) */}
    <KiCadNet name={"Net__Q3_G2_"} connectsTo={[".R24 > .pin1", ".R25 > .pin1", ".Q3 > .pin5"]}/>
    {/* KiCad net: Net-(D2-C) */}
    <KiCadNet name={"Net__D2_C_"} connectsTo={[".Q5 > .pin3", ".D2 > .pin1"]}/>
    {/* KiCad net: Net-(Q3-G1) */}
    <KiCadNet name={"Net__Q3_G1_"} connectsTo={[".R9 > .pin2", ".R10 > .pin2", ".Q3 > .pin2"]}/>
    {/* KiCad net: Net-(Q3-S2) */}
    <KiCadNet name={"Net__Q3_S2_"} connectsTo={[".R22 > .pin1", ".Q3 > .pin4"]}/>
    {/* KiCad net: /SEN1_VCC */}
    <KiCadNet name={"_SEN1_VCC"} connectsTo={[".R27 > .pin2", ".R51 > .pin2", ".R48 > .pin2", ".U1 > .pin8", ".R16 > .pin2", ".C1 > .pin2", ".R18 > .pin2"]}/>
    {/* KiCad net: /SEN1_A1 */}
    <KiCadNet name={"_SEN1_A1"} connectsTo={[".R26 > .pin2", ".U1 > .pin6", ".R18 > .pin1"]}/>
    {/* KiCad net: Net-(D2-A) */}
    <KiCadNet name={"Net__D2_A_"} connectsTo={[".D2 > .pin2", ".R28 > .pin1"]}/>
    {/* KiCad net: /SEN2_INT1 */}
    <KiCadNet name={"_SEN2_INT1"} connectsTo={[".U4 > .pin2", ".TP2 > .pin1", ".BoardFeature_85 > .pin1"]}/>
    {/* KiCad net: /SEN2_INT2 */}
    <KiCadNet name={"_SEN2_INT2"} connectsTo={[".U4 > .pin3", ".R38 > .pin1"]}/>
    {/* KiCad net: /SEN1_A0 */}
    <KiCadNet name={"_SEN1_A0"} connectsTo={[".R17 > .pin2", ".U1 > .pin7", ".R16 > .pin1"]}/>
    {/* KiCad net: Net-(Q3-S1) */}
    <KiCadNet name={"Net__Q3_S1_"} connectsTo={[".Q3 > .pin1", ".R23 > .pin2"]}/>
    <KiCadSchematic /></board>);
}
