import { KiCadSchematic, KiCadNet } from './schematic'
// Bitaxe Ultra (fork)
// Source: https://github.com/BastelPichi/bitaxe
// Commit: 0c3e71fd54fc0edef4c19c06d2320ef5468adc6a; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_C43, Footprint_C19, Footprint_D1, Footprint_U8, Footprint_C7, Footprint_FID2, Footprint_FID4, Footprint_R13, Footprint_FID3, Footprint_R6, Footprint_C1, Footprint_TP38, Footprint_Q4, Footprint_C41, Footprint_TP19, Footprint_R8, Footprint_C3, Footprint_H6, Footprint_R5, Footprint_C38, Footprint_TP35, Footprint_TP5, Footprint_C25, Footprint_C45, Footprint_Y1, Footprint_TP16, Footprint_TP15, Footprint_U5, Footprint_C51, Footprint_TP8, Footprint_TP23, Footprint_U6, Footprint_H5, Footprint_TP1, Footprint_C4, Footprint_TP43, Footprint_U7, Footprint_C12, Footprint_C52, Footprint_R1, Footprint_H7, Footprint_C30, Footprint_FID1, Footprint_U2, Footprint_R10, Footprint_TP42, Footprint_TP17, Footprint_L1, Footprint_R15, Footprint_C15, Footprint_R16, Footprint_H9, Footprint_C16, Footprint_C49, Footprint_C18, Footprint_TP18, Footprint_C40, Footprint_U10, Footprint_TP36, Footprint_C39, Footprint_TP44, Footprint_H10, Footprint_C31, Footprint_C35, Footprint_C10, Footprint_C11, Footprint_R14, Footprint_C14, Footprint_C13, Footprint_Q2, Footprint_C33, Footprint_R2, Footprint_TP3, Footprint_TP41, Footprint_C44, Footprint_U9, Footprint_TP34, Footprint_TP46, Footprint_H8, Footprint_C22, Footprint_TP10, Footprint_C21, Footprint_C6, Footprint_C46, Footprint_Q1, Footprint_C42, Footprint_TP7, Footprint_C34, Footprint_TP40, Footprint_TP4, Footprint_U1, Footprint_TP13, Footprint_R12, Footprint_R4, Footprint_C2, Footprint_R7, Footprint_C23, Footprint_TP6, Footprint_C5, Footprint_TP9, Footprint_R9, Footprint_C17, Footprint_C8, Footprint_C29, Footprint_TP14, Footprint_TP45, Footprint_R3, Footprint_C27, Footprint_TP22, Footprint_TP2, Footprint_C20, Footprint_C47, Footprint_C24, Footprint_C36, Footprint_C9, Footprint_U11, Footprint_C37, Footprint_J4, Footprint_J9, Footprint_FID7, Footprint_J7, Footprint_J3, Footprint_J8, Footprint_U12, Footprint_J5, Footprint_G___, Footprint_G____, Footprint_FID8, Footprint_U14, Footprint_C28, Footprint_J1, Footprint_SW1, Footprint_U3, Footprint_FID5, Footprint_J2, Footprint_SW2, Footprint_FID6 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={56.54300000000009} height={99.7620000000051} thickness={1.6} layers={4} outline={[{ "x": -25.73150000000004, "y": 49.88100000000235 }, { "x": 25.73149999999997, "y": 49.88100000000235 }, { "x": 25.980463512555886, "y": 49.868769136409234 }, { "x": 26.227029364854914, "y": 49.83219448550908 }, { "x": 26.46882299477376, "y": 49.77162828091369 }, { "x": 26.70351579926411, "y": 49.68765380783488 }, { "x": 26.9288475600559, "y": 49.581079785733344 }, { "x": 27.142648210777892, "y": 49.45293257991413 }, { "x": 27.342858735867267, "y": 49.304446317075296 }, { "x": 27.52755099999986, "y": 49.13705100000222 }, { "x": 27.694946317072933, "y": 48.95235873586964 }, { "x": 27.843432579911777, "y": 48.75214821078025 }, { "x": 27.97157978573101, "y": 48.53834756005826 }, { "x": 28.07815380783255, "y": 48.3130157992665 }, { "x": 28.162128280911375, "y": 48.07832299477614 }, { "x": 28.22269448550678, "y": 47.836529364857306 }, { "x": 28.259269136406928, "y": 47.58996351255828 }, { "x": 28.271500000000046, "y": 47.34100000000235 }, { "x": 28.27149999999996, "y": -47.34099999999765 }, { "x": 28.259269136407326, "y": -47.58996351255391 }, { "x": 28.222694485507574, "y": -47.836529364853305 }, { "x": 28.16212828091254, "y": -48.07832299477255 }, { "x": 28.078153807834, "y": -48.313015799263354 }, { "x": 27.97157978573263, "y": -48.53834756005554 }, { "x": 27.84343257991354, "y": -48.75214821077799 }, { "x": 27.694946317074752, "y": -48.95235873586779 }, { "x": 27.52755100000165, "y": -49.13705100000078 }, { "x": 27.342858735869, "y": -49.30444631707425 }, { "x": 27.142648210779456, "y": -49.45293257991341 }, { "x": 26.928847560057292, "y": -49.581079785732925 }, { "x": 26.703515799265304, "y": -49.68765380783469 }, { "x": 26.46882299477467, "y": -49.77162828091372 }, { "x": 26.22702936485554, "y": -49.832194485509234 }, { "x": 25.9804635125562, "y": -49.86876913640944 }, { "x": 25.73149999999997, "y": -49.88100000000256 }, { "x": -25.73150000000004, "y": -49.88099999999764 }, { "x": -25.9804635125559, "y": -49.86876913640458 }, { "x": -26.227029364854886, "y": -49.83219448550446 }, { "x": -26.46882299477366, "y": -49.77162828090911 }, { "x": -26.703515799263954, "y": -49.687653807830316 }, { "x": -26.928847560055658, "y": -49.581079785728775 }, { "x": -27.142648210777566, "y": -49.45293257990954 }, { "x": -27.34285873586687, "y": -49.3044463170707 }, { "x": -27.527550999999335, "y": -49.13705099999757 }, { "x": -27.694946317072294, "y": -48.952358735864976 }, { "x": -27.843432579910996, "y": -48.752148210775545 }, { "x": -27.97157978573003, "y": -48.53834756005352 }, { "x": -28.078153807831384, "y": -48.313015799261734 }, { "x": -28.162128280909982, "y": -48.078322994771355 }, { "x": -28.222694485505144, "y": -47.83652936485254 }, { "x": -28.259269136405052, "y": -47.58996351255351 }, { "x": -28.2714999999979, "y": -47.34099999999765 }, { "x": -28.271500000000046, "y": 47.34100000000235 }, { "x": -28.259269136406928, "y": 47.58996351255828 }, { "x": -28.22269448550678, "y": 47.83652936485731 }, { "x": -28.162128280911375, "y": 48.07832299477615 }, { "x": -28.078153807832564, "y": 48.31301579926652 }, { "x": -27.971579785731038, "y": 48.53834756005829 }, { "x": -27.843432579911834, "y": 48.752148210780284 }, { "x": -27.69494631707299, "y": 48.95235873586969 }, { "x": -27.527550999999903, "y": 49.13705100000227 }, { "x": -27.34285873586734, "y": 49.304446317075374 }, { "x": -27.14264821077795, "y": 49.452932579914226 }, { "x": -26.928847560055956, "y": 49.58107978573344 }, { "x": -26.703515799264196, "y": 49.687653807835 }, { "x": -26.46882299477383, "y": 49.77162828091382 }, { "x": -26.227029364855, "y": 49.832194485509234 }, { "x": -25.98046351255597, "y": 49.868769136409405 }, { "x": -25.73150000000004, "y": 49.881000000002544 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* C43: 10uF */}
    <capacitor name={"C43"} pcbX={0.4035} pcbY={27.916} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C43 />} schX={1.8599999999999977} schY={1.6750000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* C19: 0.1uF */}
    <capacitor name={"C19"} pcbX={10.8955} pcbY={-5.962} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C19 />} schX={3.075000000000001} schY={-3.75} schRotation={-90} schSheetName={"BM1366"}/>

    {/* D1: SS310 */}
    <chip name={"D1"} pcbX={13.9195} pcbY={9.011} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SS310"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* U8: INA260 */}
    <chip name={"U8"} pcbX={-22.8205} pcbY={15.633} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} displayName={"INA260"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* C7: 0.1uF */}
    <capacitor name={"C7"} pcbX={6.8075} pcbY={-17.2526} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C7 />} schX={-4.5249999999999995} schY={3.8500000000000005} schRotation={-90} schSheetName={"BM1366"}/>

    {/* FID2: Fiducial */}
    <chip name={"FID2"} pcbX={19.8123} pcbY={47.111} pcbRotation={0} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID2 />} noSchematicRepresentation={true}/>

    {/* FID4: Fiducial */}
    <chip name={"FID4"} pcbX={26.7973} pcbY={-41.662} pcbRotation={0} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID4 />} noSchematicRepresentation={true}/>

    {/* R13: 1.33k */}
    <resistor name={"R13"} pcbX={-14.8109} pcbY={33.324} pcbRotation={-90} resistance={"1.33kohm"} footprint={<Footprint_R13 />} schX={5.359999999999999} schY={2.9750000000000005} schRotation={-90} schSheetName={"Power"}/>

    {/* FID3: Fiducial */}
    <chip name={"FID3"} pcbX={-26.6189} pcbY={-41.662} pcbRotation={0} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID3 />} noSchematicRepresentation={true}/>

    {/* R6: 10k */}
    <resistor name={"R6"} pcbX={16.7465} pcbY={-18.151} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R6 />} schX={-7.124999999999999} schY={-0.05000000000000071} schRotation={90} schSheetName={"BM1366"}/>

    {/* C1: 0.1uF */}
    <capacitor name={"C1"} pcbX={9.7895} pcbY={-30.407} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C1 />} schX={-7.725} schY={-2.4000000000000004} schRotation={0} schSheetName={"BM1366"}/>

    {/* TP38: TestPoint */}
    <chip name={"TP38"} pcbX={-18.4147} pcbY={-15.2968} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP38 />} noSchematicRepresentation={true}/>

    {/* Q4: 2N7002K */}
    <chip name={"Q4"} pcbX={4.9095} pcbY={27.623} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2N7002K"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* C41: 1.5nF */}
    <capacitor name={"C41"} pcbX={-8.0551} pcbY={34.3972} pcbRotation={180} capacitance={"1.5nF"} footprint={<Footprint_C41 />} schX={-3.040000000000001} schY={2.125} schRotation={-90} schSheetName={"Power"}/>

    {/* TP19: TestPoint */}
    <chip name={"TP19"} pcbX={18.1495} pcbY={13.283} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP19 />} noSchematicRepresentation={true}/>

    {/* R8: 1M */}
    <resistor name={"R8"} pcbX={8.3095} pcbY={26.963} pcbRotation={-90} resistance={"1Mohm"} footprint={<Footprint_R8 />} schX={-7.4} schY={-0.20000000000000018} schRotation={-90} schSheetName={"ESP32"}/>

    {/* C3: 1uF */}
    <capacitor name={"C3"} pcbX={8.9795} pcbY={-10.387} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C3 />} schX={-6.374999999999999} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* H6: MountingHole */}
    <chip name={"H6"} pcbX={-20.7505} pcbY={2.493} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H6 />} noSchematicRepresentation={true}/>

    {/* R5: 5.1k */}
    <resistor name={"R5"} pcbX={21.7935} pcbY={-1.507} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R5 />} schX={5.9} schY={3.05} schRotation={0} schSheetName={"ESP32"}/>

    {/* C38: 1uF */}
    <capacitor name={"C38"} pcbX={-3.6775} pcbY={29.2414} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C38 />} schX={-6.010000000000001} schY={3.375} schRotation={-90} schSheetName={"Power"}/>

    {/* TP35: TestPoint */}
    <chip name={"TP35"} pcbX={5.7645} pcbY={-1.747} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP35 />} noSchematicRepresentation={true}/>

    {/* TP5: TestPoint */}
    <chip name={"TP5"} pcbX={5.9795} pcbY={-32.757} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* C25: 1uF */}
    <capacitor name={"C25"} pcbX={0.0795} pcbY={-32.837} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C25 />} schX={8.225000000000001} schY={2.9499999999999993} schRotation={-90} schSheetName={"BM1366"}/>

    {/* C45: 470pF */}
    <capacitor name={"C45"} pcbX={-11.9885} pcbY={30.983} pcbRotation={0} capacitance={"470pF"} footprint={<Footprint_C45 />} schX={5.359999999999999} schY={2.175} schRotation={-90} schSheetName={"Power"}/>

    {/* Y1: 32.768kHz */}
    <chip name={"Y1"} pcbX={17.1345} pcbY={19.054} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"32.768kHz"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* TP16: TestPoint */}
    <chip name={"TP16"} pcbX={-11.3535} pcbY={-44.0496} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* TP15: TestPoint */}
    <chip name={"TP15"} pcbX={-14.6047} pcbY={-48.5454} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* U5: MCP1824T-1802E */}
    <chip name={"U5"} pcbX={-11.7075} pcbY={-31.905} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1802E"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C51: 10uF */}
    <capacitor name={"C51"} pcbX={26.0695} pcbY={13.313} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C51 />} schX={-0.8000000000000007} schY={3} schRotation={-90} schSheetName={"ESP32"}/>

    {/* TP8: TestPoint */}
    <chip name={"TP8"} pcbX={14.3395} pcbY={-22.587} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP23: TestPoint */}
    <chip name={"TP23"} pcbX={17.0955} pcbY={39.875} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP23 />} noSchematicRepresentation={true}/>

    {/* U6: MCP1824T-0802E */}
    <chip name={"U6"} pcbX={-3.1405} pcbY={-32.837} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* H5: MountingHole */}
    <chip name={"H5"} pcbX={20.5995} pcbY={-38.957} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H5 />} noSchematicRepresentation={true}/>

    {/* TP1: TestPoint */}
    <chip name={"TP1"} pcbX={-15.6969} pcbY={-16.8208} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* C4: 1uF */}
    <capacitor name={"C4"} pcbX={3.0245} pcbY={-24.915} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C4 />} schX={-5.824999999999999} schY={-1.9499999999999993} schRotation={-90} schSheetName={"BM1366"}/>

    {/* TP43: TestPoint */}
    <chip name={"TP43"} pcbX={-18.3131} pcbY={-17.913} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP43 />} noSchematicRepresentation={true}/>

    {/* U7: EMC2101 */}
    <chip name={"U7"} pcbX={-4.0637} pcbY={-18.6242} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"EMC2101"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* C12: 1uF */}
    <capacitor name={"C12"} pcbX={-6.1605} pcbY={-6.837} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C12 />} schX={-0.7249999999999996} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* C52: 0.1uF */}
    <capacitor name={"C52"} pcbX={26.0695} pcbY={11.703} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C52 />} schX={0.049999999999998934} schY={3} schRotation={-90} schSheetName={"ESP32"}/>

    {/* R1: 10k */}
    <resistor name={"R1"} pcbX={21.3765} pcbY={-4.255} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R1 />} schX={-7.6} schY={2.1499999999999995} schRotation={-90} schSheetName={"ESP32"}/>

    {/* H7: MountingHole_Pad */}
    <chip name={"H7"} pcbX={24.77451} pcbY={46.28201} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H7 />} noSchematicRepresentation={true}/>

    {/* C30: 6.8pF */}
    <capacitor name={"C30"} pcbX={18.5825} pcbY={21.307} pcbRotation={90} capacitance={"6.8pF"} footprint={<Footprint_C30 />} schX={-0.6500000000000004} schY={5.1} schRotation={-90} schSheetName={"ESP32"}/>

    {/* FID1: Fiducial */}
    <chip name={"FID1"} pcbX={-26.7205} pcbY={41.4976} pcbRotation={0} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID1 />} noSchematicRepresentation={true}/>

    {/* U2: TXB0104RGYR */}
    <chip name={"U2"} pcbX={10.9615} pcbY={-1.862} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"] }} displayName={"TXB0104RGYR"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* R10: 3.83k */}
    <resistor name={"R10"} pcbX={-10.6317} pcbY={33.3194} pcbRotation={-90} resistance={"3.83kohm"} footprint={<Footprint_R10 />} schX={-3.040000000000001} schY={1.4249999999999998} schRotation={-90} schSheetName={"Power"}/>

    {/* TP42: TestPoint */}
    <chip name={"TP42"} pcbX={-18.3605} pcbY={-9.107} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP42 />} noSchematicRepresentation={true}/>

    {/* TP17: TestPoint */}
    <chip name={"TP17"} pcbX={20.0395} pcbY={27.213} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP17 />} noSchematicRepresentation={true}/>

    {/* L1: 150nH */}
    <inductor name={"L1"} pcbX={0.5401} pcbY={15.4816} pcbRotation={-90} inductance={"150nH"} footprint={<Footprint_L1 />} schX={4.359999999999998} schY={3.4750000000000005} schRotation={0} schSheetName={"Power"}/>

    {/* R15: 3.32k */}
    <resistor name={"R15"} pcbX={-11.9955} pcbY={33.324} pcbRotation={90} resistance={"3.32kohm"} footprint={<Footprint_R15 />} schX={6.209999999999999} schY={1.1750000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* C15: 1uF */}
    <capacitor name={"C15"} pcbX={-7.4505} pcbY={-8.637} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C15 />} schX={0.1750000000000007} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* R16: 80.6k */}
    <resistor name={"R16"} pcbX={-11.1305} pcbY={-4.637} pcbRotation={180} resistance={"80.6kohm"} footprint={<Footprint_R16 />} schX={8.209999999999999} schY={-3.575} schRotation={-90} schSheetName={"Power"}/>

    {/* H9: MountingHole_Pad */}
    <chip name={"H9"} pcbX={24.8415} pcbY={-46.325} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H9 />} noSchematicRepresentation={true}/>

    {/* C16: 1uF */}
    <capacitor name={"C16"} pcbX={-2.8145} pcbY={-24.915} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C16 />} schX={0.32500000000000107} schY={-1.9000000000000004} schRotation={-90} schSheetName={"BM1366"}/>

    {/* C49: 1uF */}
    <capacitor name={"C49"} pcbX={9.1395} pcbY={36.473} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C49 />} schX={-4.95} schY={5.1} schRotation={-90} schSheetName={"ESP32"}/>

    {/* C18: 1uF */}
    <capacitor name={"C18"} pcbX={-9.8015} pcbY={-12.278} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C18 />} schX={2.0250000000000004} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* TP18: TestPoint */}
    <chip name={"TP18"} pcbX={22.7395} pcbY={37.343} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP18 />} noSchematicRepresentation={true}/>

    {/* C40: 180pF */}
    <capacitor name={"C40"} pcbX={-8.0775} pcbY={32.135} pcbRotation={180} capacitance={"180pF"} footprint={<Footprint_C40 />} schX={-3.6400000000000015} schY={1.7750000000000004} schRotation={-90} schSheetName={"Power"}/>

    {/* U10: DS4432U+ */}
    <chip name={"U10"} pcbX={-12.4205} pcbY={-2.137} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"DS4432U+"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* TP36: TestPoint */}
    <chip name={"TP36"} pcbX={11.4095} pcbY={-8.147} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP36 />} noSchematicRepresentation={true}/>

    {/* C39: 3.3nF */}
    <capacitor name={"C39"} pcbX={-0.3305} pcbY={29.953} pcbRotation={0} capacitance={"3.3nF"} footprint={<Footprint_C39 />} schX={-5.160000000000002} schY={3.3550000000000004} schRotation={-90} schSheetName={"Power"}/>

    {/* TP44: TestPoint */}
    <chip name={"TP44"} pcbX={-15.7731} pcbY={-19.437} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP44 />} noSchematicRepresentation={true}/>

    {/* H10: MountingHole_Pad */}
    <chip name={"H10"} pcbX={-24.75549} pcbY={-46.42799} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H10 />} noSchematicRepresentation={true}/>

    {/* C31: 6.8pF */}
    <capacitor name={"C31"} pcbX={15.6985} pcbY={21.298} pcbRotation={90} capacitance={"6.8pF"} footprint={<Footprint_C31 />} schX={1.299999999999999} schY={5.1} schRotation={-90} schSheetName={"ESP32"}/>

    {/* C35: 1uF */}
    <capacitor name={"C35"} pcbX={-23.2905} pcbY={9.683} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C35 />} schX={-6.990000000000001} schY={-4.175} schRotation={-90} schSheetName={"Power"}/>

    {/* C10: 1uF */}
    <capacitor name={"C10"} pcbX={3.2515} pcbY={-17.278} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C10 />} schX={-2.924999999999999} schY={3.8500000000000005} schRotation={-90} schSheetName={"BM1366"}/>

    {/* C11: 1uF */}
    <capacitor name={"C11"} pcbX={5.6899} pcbY={-17.3034} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C11 />} schX={-2.125} schY={3.8500000000000005} schRotation={-90} schSheetName={"BM1366"}/>

    {/* R14: 4.99k */}
    <resistor name={"R14"} pcbX={-13.4032} pcbY={33.324} pcbRotation={-90} resistance={"4.99kohm"} footprint={<Footprint_R14 />} schX={6.209999999999999} schY={2.4750000000000005} schRotation={-90} schSheetName={"Power"}/>

    {/* C14: 1uF */}
    <capacitor name={"C14"} pcbX={-6.8485} pcbY={-24.385} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C14 />} schX={-0.4250000000000007} schY={-1.9000000000000004} schRotation={-90} schSheetName={"BM1366"}/>

    {/* C13: 330uF */}
    <capacitor name={"C13"} pcbX={0.1395} pcbY={-17.157} pcbRotation={-90} capacitance={"330uF"} footprint={<Footprint_C13 />} schX={-1.174999999999999} schY={3.8500000000000005} schRotation={-90} schSheetName={"BM1366"}/>

    {/* Q2: CSD17311Q5 */}
    <chip name={"Q2"} pcbX={-7.7789} pcbY={17.2928} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"CSD17311Q5"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* C33: 0.1uF */}
    <capacitor name={"C33"} pcbX={-3.3271} pcbY={-13.1632} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C33 />} schX={2.2250000000000014} schY={1.5999999999999996} schRotation={-90} schSheetName={"Fan"}/>

    {/* R2: 5.6k */}
    <resistor name={"R2"} pcbX={-9.3105} pcbY={-41.077} pcbRotation={0} resistance={"5.6kohm"} footprint={<Footprint_R2 />} schX={-1.2750000000000004} schY={-0.6500000000000004} schRotation={90} schSheetName={"Fan"}/>

    {/* TP3: TestPoint */}
    <chip name={"TP3"} pcbX={8.9495} pcbY={-42.747} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* TP41: TestPoint */}
    <chip name={"TP41"} pcbX={-15.9605} pcbY={-10.727} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP41 />} noSchematicRepresentation={true}/>

    {/* C44: 1uF */}
    <capacitor name={"C44"} pcbX={-9.5305} pcbY={0.263} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C44 />} schX={4.659999999999998} schY={-2.7250000000000005} schRotation={-90} schSheetName={"Power"}/>

    {/* U9: TPS40305 */}
    <chip name={"U9"} pcbX={-7.258809} pcbY={27.9808} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} displayName={"TPS40305"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* TP34: TestPoint */}
    <chip name={"TP34"} pcbX={4.6145} pcbY={-4.297} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP34 />} noSchematicRepresentation={true}/>

    {/* TP46: TestPoint */}
    <chip name={"TP46"} pcbX={-18.3893} pcbY={-23.4248} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP46 />} noSchematicRepresentation={true}/>

    {/* H8: MountingHole_Pad */}
    <chip name={"H8"} pcbX={-24.6525} pcbY={46.349} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H8 />} noSchematicRepresentation={true}/>

    {/* C22: 1uF */}
    <capacitor name={"C22"} pcbX={-11.7275} pcbY={-34.415} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C22 />} schX={5.475000000000001} schY={5.05} schRotation={-90} schSheetName={"BM1366"}/>

    {/* TP10: TestPoint */}
    <chip name={"TP10"} pcbX={14.3395} pcbY={-26.137} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* C21: 1uF */}
    <capacitor name={"C21"} pcbX={18.4295} pcbY={-4.257} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C21 />} schX={-7.6} schY={1.049999999999999} schRotation={-90} schSheetName={"ESP32"}/>

    {/* C6: 1uF */}
    <capacitor name={"C6"} pcbX={7.6795} pcbY={-8.627} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C6 />} schX={-5.424999999999999} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* C46: 220uF */}
    <capacitor name={"C46"} pcbX={-3.1089} pcbY={7.7628} pcbRotation={180} capacitance={"220uF"} footprint={<Footprint_C46 />} schX={7.609999999999998} schY={2.4250000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* Q1: CSD17311Q5 */}
    <chip name={"Q1"} pcbX={-13.740613} pcbY={17.336636} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"CSD17311Q5"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C42: 0.1uF */}
    <capacitor name={"C42"} pcbX={-8.7907} pcbY={24.275} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C42 />} schX={0.9099999999999984} schY={3.625} schRotation={-90} schSheetName={"Power"}/>

    {/* TP7: TestPoint */}
    <chip name={"TP7"} pcbX={10.0995} pcbY={-24.307} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* C34: 47uF */}
    <capacitor name={"C34"} pcbX={-11.1789} pcbY={11.4328} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C34 />} schX={-8.610000000000001} schY={3.375} schRotation={-90} schSheetName={"Power"}/>

    {/* TP40: TestPoint */}
    <chip name={"TP40"} pcbX={-18.2805} pcbY={-12.337} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP40 />} noSchematicRepresentation={true}/>

    {/* TP4: TestPoint */}
    <chip name={"TP4"} pcbX={11.5795} pcbY={-42.787} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* U1: 25MHz */}
    <chip name={"U1"} pcbX={9.7295} pcbY={-27.617} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"25MHz"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* TP13: TestPoint */}
    <chip name={"TP13"} pcbX={-6.9875} pcbY={-30.333} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* R12: 4.12k */}
    <resistor name={"R12"} pcbX={-6.3003} pcbY={24.2796} pcbRotation={0} resistance={"4.12kohm"} footprint={<Footprint_R12 />} schX={2.8599999999999994} schY={1.7250000000000005} schRotation={-90} schSheetName={"Power"}/>

    {/* R4: 10k */}
    <resistor name={"R4"} pcbX={4.4945} pcbY={25.643} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R4 />} schX={0.15999999999999837} schY={-2.124999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C2: 1uF */}
    <capacitor name={"C2"} pcbX={10.0795} pcbY={-12.221} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C2 />} schX={-7.2749999999999995} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* R7: 10k */}
    <resistor name={"R7"} pcbX={4.3895} pcbY={22.993} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R7 />} schX={-6.2} schY={-0.09999999999999964} schRotation={-90} schSheetName={"ESP32"}/>

    {/* C23: 1uF */}
    <capacitor name={"C23"} pcbX={-3.2505} pcbY={-35.207} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C23 />} schX={5.524999999999999} schY={2.9499999999999993} schRotation={-90} schSheetName={"BM1366"}/>

    {/* TP6: TestPoint */}
    <chip name={"TP6"} pcbX={-15.9001} pcbY={-22.104} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* C5: 1uF */}
    <capacitor name={"C5"} pcbX={6.6995} pcbY={-23.917} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C5 />} schX={-5.174999999999999} schY={-1.9000000000000004} schRotation={-90} schSheetName={"BM1366"}/>

    {/* TP9: TestPoint */}
    <chip name={"TP9"} pcbX={17.0395} pcbY={-16.027} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* R9: 10k */}
    <resistor name={"R9"} pcbX={-4.3685} pcbY={-14.1538} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R9 />} schX={1.2249999999999996} schY={1.9999999999999991} schRotation={90} schSheetName={"Fan"}/>

    {/* C17: 1uF */}
    <capacitor name={"C17"} pcbX={-8.7305} pcbY={-10.377} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C17 />} schX={1.125} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* C8: 1uF */}
    <capacitor name={"C8"} pcbX={6.3495} pcbY={-6.837} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C8 />} schX={-4.5249999999999995} schY={2.2} schRotation={0} schSheetName={"BM1366"}/>

    {/* C29: 0.1uF */}
    <capacitor name={"C29"} pcbX={-9.3405} pcbY={-40.007} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C29 />} schX={-0.9749999999999996} schY={-1.700000000000001} schRotation={-90} schSheetName={"Fan"}/>

    {/* TP14: TestPoint */}
    <chip name={"TP14"} pcbX={2.3695} pcbY={-31.797} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* TP45: TestPoint */}
    <chip name={"TP45"} pcbX={-18.3385} pcbY={-20.58} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP45 />} noSchematicRepresentation={true}/>

    {/* R3: 5.1k */}
    <resistor name={"R3"} pcbX={21.4115} pcbY={11.356} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R3 />} schX={5} schY={3.249999999999999} schRotation={0} schSheetName={"ESP32"}/>

    {/* C27: 1uF */}
    <capacitor name={"C27"} pcbX={6.0705} pcbY={31.472} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C27 />} schX={-7.950000000000001} schY={5.1} schRotation={-90} schSheetName={"ESP32"}/>

    {/* TP22: TestPoint */}
    <chip name={"TP22"} pcbX={18.1795} pcbY={35.893} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP22 />} noSchematicRepresentation={true}/>

    {/* TP2: TestPoint */}
    <chip name={"TP2"} pcbX={6.4295} pcbY={-42.747} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* C20: 0.1uF */}
    <capacitor name={"C20"} pcbX={8.6415} pcbY={1.048} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C20 />} schX={8.225000000000001} schY={-3.75} schRotation={-90} schSheetName={"BM1366"}/>

    {/* C47: 100uF */}
    <capacitor name={"C47"} pcbX={-3.1489} pcbY={4.7928} pcbRotation={180} capacitance={"100uF"} footprint={<Footprint_C47 />} schX={8.610000000000001} schY={2.4250000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* C24: 1uF */}
    <capacitor name={"C24"} pcbX={-8.6975} pcbY={-31.715} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C24 />} schX={8.175} schY={5.05} schRotation={-90} schSheetName={"BM1366"}/>

    {/* C36: 47uF */}
    <capacitor name={"C36"} pcbX={-11.2189} pcbY={8.0228} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C36 />} schX={-7.760000000000002} schY={3.375} schRotation={-90} schSheetName={"Power"}/>

    {/* C9: 0.1uF */}
    <capacitor name={"C9"} pcbX={4.5215} pcbY={-17.307} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C9 />} schX={-3.7249999999999996} schY={3.8500000000000005} schRotation={-90} schSheetName={"BM1366"}/>

    {/* U11: RT9080-33GJ5 */}
    <chip name={"U11"} pcbX={7.1025} pcbY={34.023} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"RT9080-33GJ5"} footprint={<Footprint_U11 />} noSchematicRepresentation={true}/>

    {/* C37: 47uF */}
    <capacitor name={"C37"} pcbX={-11.2189} pcbY={4.6628} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C37 />} schX={-6.910000000000001} schY={3.375} schRotation={-90} schSheetName={"Power"}/>

    {/* J4: Conn_01x04 */}
    <chip name={"J4"} pcbX={-15.8395} pcbY={-46.219} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"Conn_01x04"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* J9: Conn_01x04 */}
    <chip name={"J9"} pcbX={-18.2555} pcbY={43.313} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"Conn_01x04"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* FID7: Fiducial */}
    <chip name={"FID7"} pcbX={26.7995} pcbY={-41.657} pcbRotation={180} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID7 />} noSchematicRepresentation={true}/>

    {/* J7: Conn_01x02 */}
    <chip name={"J7"} pcbX={-22.4605} pcbY={20.863} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Conn_01x02"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* J3: Conn_01x05 */}
    <chip name={"J3"} pcbX={3.8895} pcbY={-46.177} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"Conn_01x05"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* J8: USB_C_Receptacle_USB2.0 */}
    <chip name={"J8"} pcbX={24.5875} pcbY={4.947} pcbRotation={-90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} displayName={"USB_C_Receptacle_USB2.0"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* U12: ESP32-S3-WROOM-1 */}
    <chip name={"U12"} pcbX={11.9695} pcbY={24.793} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"] }} displayName={"ESP32-S3-WROOM-1"} footprint={<Footprint_U12 />} noSchematicRepresentation={true}/>

    {/* J5: TC2030-IDC */}
    <chip name={"J5"} pcbX={22.6695} pcbY={39.673} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"TC2030-IDC"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* G***: LOGO */}
    <chip name={"G___"} pcbX={-0.329195} pcbY={7.717196} pcbRotation={180} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_G___ />} noSchematicRepresentation={true}/>

    {/* G***: LOGO */}
    <chip name={"G____"} pcbX={-0.329195} pcbY={7.717196} pcbRotation={180} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_G____ />} noSchematicRepresentation={true}/>

    {/* FID8: Fiducial */}
    <chip name={"FID8"} pcbX={-26.6105} pcbY={-41.667} pcbRotation={180} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID8 />} noSchematicRepresentation={true}/>

    {/* U14: BM1366_mode1 */}
    <chip name={"U14"} pcbX={0.1515} pcbY={-18.665} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"] }} displayName={"BM1366_mode1"} footprint={<Footprint_U14 />} noSchematicRepresentation={true}/>

    {/* C28: 220uF */}
    <capacitor name={"C28"} pcbX={-1.9705} pcbY={-44.017} pcbRotation={-90} capacitance={"220uF"} footprint={<Footprint_C28 />} schX={-1.4749999999999996} schY={-1.700000000000001} schRotation={-90} schSheetName={"Fan"}/>

    {/* J1: 54-00164 */}
    <chip name={"J1"} pcbX={-19.6355} pcbY={30.053} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"54-00164"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* SW1: GT-TC029B-H025-L1N */}
    <chip name={"SW1"} pcbX={24.7255} pcbY={-7.045} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"GT-TC029B-H025-L1N"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* U3: ~ */}
    <chip name={"U3"} pcbX={-11.1955} pcbY={29.248} pcbRotation={90} pinLabels={{}} displayName={"~"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* FID5: Fiducial */}
    <chip name={"FID5"} pcbX={19.8095} pcbY={47.093} pcbRotation={180} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID5 />} noSchematicRepresentation={true}/>

    {/* J2: Conn_01x02 */}
    <chip name={"J2"} pcbX={-24.9905} pcbY={-32.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Conn_01x02"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* SW2: GT-TC029B-H025-L1N */}
    <chip name={"SW2"} pcbX={24.6215} pcbY={-15.752} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"GT-TC029B-H025-L1N"} footprint={<Footprint_SW2 />} noSchematicRepresentation={true}/>

    {/* FID6: Fiducial */}
    <chip name={"FID6"} pcbX={-26.7105} pcbY={41.503} pcbRotation={180} pinLabels={{}} displayName={"Fiducial"} footprint={<Footprint_FID6 />} noSchematicRepresentation={true}/>

    {/* KiCad net: Net-(U9-BP) */}
    <KiCadNet name={"Net__U9_BP_"} connectsTo={[".C43 > .pin1", ".U9 > .pin10"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C43 > .pin2", ".C19 > .pin2", ".U8 > .pin4", ".U8 > .pin5", ".U8 > .pin6", ".U8 > .pin11", ".C7 > .pin2", ".R6 > .pin1", ".C1 > .pin1", ".Q4 > .pin2", ".R5 > .pin1", ".C38 > .pin2", ".TP5 > .pin1", ".C25 > .pin2", ".U5 > .pin2", ".C51 > .pin2", ".U6 > .pin2", ".C4 > .pin2", ".U7 > .pin5", ".C52 > .pin2", ".H7 > .pin1", ".C30 > .pin2", ".U2 > .pin5", ".U2 > .pin7", ".U2 > .pin10", ".U2 > .pin15", ".U2 > .pin16", ".U2 > .pin17", ".U2 > .pin18", ".U2 > .pin19", ".R15 > .pin2", ".R16 > .pin2", ".H9 > .pin1", ".C16 > .pin2", ".C49 > .pin2", ".C18 > .pin2", ".U10 > .pin4", ".C39 > .pin2", ".H10 > .pin1", ".C31 > .pin2", ".C35 > .pin2", ".C10 > .pin2", ".C11 > .pin2", ".C14 > .pin2", ".C13 > .pin2", ".Q2 > .pin1", ".Q2 > .pin2", ".Q2 > .pin3", ".C33 > .pin2", ".C44 > .pin2", ".U9 > .pin11", ".H8 > .pin1", ".C22 > .pin2", ".C21 > .pin2", ".C46 > .pin2", ".C34 > .pin2", ".U1 > .pin2", ".R12 > .pin2", ".C2 > .pin1", ".C23 > .pin2", ".C5 > .pin2", ".C29 > .pin2", ".R3 > .pin1", ".C27 > .pin2", ".C20 > .pin2", ".C47 > .pin2", ".C24 > .pin2", ".C36 > .pin2", ".C9 > .pin2", ".U11 > .pin2", ".C37 > .pin2", ".J4 > .pin1", ".J9 > .pin1", ".J3 > .pin5", ".J8 > .pin1", ".J8 > .pin8", ".J8 > .pin9", ".J8 > .pin16", ".J8 > .pin17", ".U12 > .pin1", ".U12 > .pin40", ".U12 > .pin41", ".J5 > .pin4", ".U14 > .pin4", ".U14 > .pin12", ".U14 > .pin17", ".U14 > .pin25", ".U14 > .pin30", ".C28 > .pin2", ".J1 > .pin2", ".SW1 > .pin1", ".J2 > .pin1", ".SW2 > .pin1"]}/>
    {/* KiCad net: /BM1366/1V8 */}
    <KiCadNet name={"_BM1366_1V8"} connectsTo={[".C19 > .pin1", ".C1 > .pin2", ".U5 > .pin5", ".U2 > .pin1", ".U2 > .pin8", ".U1 > .pin1", ".U1 > .pin4", ".TP13 > .pin1", ".C5 > .pin1", ".C24 > .pin1", ".J3 > .pin1", ".U14 > .pin14"]}/>
    {/* KiCad net: /5V */}
    <KiCadNet name={"_5V"} connectsTo={[".D1 > .pin1", ".U8 > .pin14", ".U8 > .pin15", ".U8 > .pin16", ".C38 > .pin1", ".U5 > .pin1", ".U5 > .pin3", ".U6 > .pin1", ".U6 > .pin3", ".U9 > .pin1", ".C22 > .pin1", ".Q1 > .pin5", ".C34 > .pin1", ".C23 > .pin1", ".C29 > .pin1", ".C27 > .pin1", ".C36 > .pin1", ".U11 > .pin1", ".U11 > .pin3", ".C37 > .pin1", ".J4 > .pin2", ".J7 > .pin2", ".C28 > .pin1", ".J2 > .pin2"]}/>
    {/* KiCad net: Net-(D1-Pad2) */}
    <KiCadNet name={"Net__D1_Pad2_"} connectsTo={[".D1 > .pin2", ".J8 > .pin2", ".J8 > .pin7", ".J8 > .pin10", ".J8 > .pin15"]}/>
    {/* KiCad net: /Power/VIN */}
    <KiCadNet name={"_Power_VIN"} connectsTo={[".U8 > .pin1", ".U8 > .pin2", ".U8 > .pin3", ".U8 > .pin12", ".J7 > .pin1", ".J1 > .pin1"]}/>
    {/* KiCad net: unconnected-(U8-ALERT-Pad7) */}
    <KiCadNet name={"unconnected__U8_ALERT_Pad7_"} connectsTo={[".U8 > .pin7"]}/>
    {/* KiCad net: /SDA */}
    <KiCadNet name={"_SDA"} connectsTo={[".U8 > .pin8", ".U7 > .pin7", ".U10 > .pin1", ".J9 > .pin4", ".U12 > .pin24"]}/>
    {/* KiCad net: /SCL */}
    <KiCadNet name={"_SCL"} connectsTo={[".U8 > .pin9", ".U7 > .pin8", ".U10 > .pin2", ".J9 > .pin3", ".U12 > .pin25"]}/>
    {/* KiCad net: /3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".U8 > .pin10", ".TP19 > .pin1", ".R8 > .pin1", ".C51 > .pin1", ".U7 > .pin1", ".C52 > .pin1", ".R1 > .pin1", ".U2 > .pin14", ".C49 > .pin1", ".U10 > .pin8", ".C35 > .pin1", ".C33 > .pin1", ".R2 > .pin2", ".C44 > .pin1", ".R4 > .pin1", ".R7 > .pin1", ".R9 > .pin2", ".C20 > .pin1", ".U11 > .pin5", ".J9 > .pin2", ".U12 > .pin2", ".U12 > .pin15", ".J5 > .pin2"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad13) */}
    <KiCadNet name={"unconnected__U8_NC_Pad13_"} connectsTo={[".U8 > .pin13"]}/>
    {/* KiCad net: /VDD */}
    <KiCadNet name={"_VDD"} connectsTo={[".C7 > .pin1", ".R13 > .pin1", ".C12 > .pin1", ".L1 > .pin2", ".C10 > .pin1", ".C11 > .pin1", ".R14 > .pin1", ".C13 > .pin1", ".C46 > .pin1", ".C8 > .pin2", ".C47 > .pin1", ".C9 > .pin1", ".U12 > .pin38", ".U14 > .pin29"]}/>
    {/* KiCad net: Net-(C45-Pad1) */}
    <KiCadNet name={"Net__C45_Pad1_"} connectsTo={[".R13 > .pin2", ".C45 > .pin1"]}/>
    {/* KiCad net: /BM1366/BI */}
    <KiCadNet name={"_BM1366_BI"} connectsTo={[".R6 > .pin2", ".TP9 > .pin1", ".U14 > .pin6"]}/>
    {/* KiCad net: /BM1366/NRSTO */}
    <KiCadNet name={"_BM1366_NRSTO"} connectsTo={[".TP38 > .pin1", ".U14 > .pin24"]}/>
    {/* KiCad net: /ESP32/PWR_EN */}
    <KiCadNet name={"_ESP32_PWR_EN"} connectsTo={[".Q4 > .pin1", ".R7 > .pin2", ".U12 > .pin18"]}/>
    {/* KiCad net: Net-(Q4-D) */}
    <KiCadNet name={"Net__Q4_D_"} connectsTo={[".Q4 > .pin3", ".C39 > .pin1", ".U9 > .pin2"]}/>
    {/* KiCad net: Net-(U9-COMP) */}
    <KiCadNet name={"Net__U9_COMP_"} connectsTo={[".C41 > .pin1", ".C40 > .pin1", ".U9 > .pin4"]}/>
    {/* KiCad net: Net-(C41-Pad2) */}
    <KiCadNet name={"Net__C41_Pad2_"} connectsTo={[".C41 > .pin2", ".R10 > .pin1"]}/>
    {/* KiCad net: /PLUG_SENSE */}
    <KiCadNet name={"_PLUG_SENSE"} connectsTo={[".R8 > .pin2", ".U12 > .pin20", ".J1 > .pin3"]}/>
    {/* KiCad net: /BM1366/VDD3_0 */}
    <KiCadNet name={"_BM1366_VDD3_0"} connectsTo={[".C3 > .pin1", ".TP36 > .pin1", ".C2 > .pin2", ".U14 > .pin3"]}/>
    {/* KiCad net: /BM1366/VDD2_0 */}
    <KiCadNet name={"_BM1366_VDD2_0"} connectsTo={[".C3 > .pin2", ".TP35 > .pin1", ".C6 > .pin1", ".U14 > .pin2"]}/>
    {/* KiCad net: Net-(J8-CC2) */}
    <KiCadNet name={"Net__J8_CC2_"} connectsTo={[".R5 > .pin2", ".J8 > .pin11"]}/>
    {/* KiCad net: /BM1366/0V8 */}
    <KiCadNet name={"_BM1366_0V8"} connectsTo={[".C25 > .pin1", ".U6 > .pin5", ".C4 > .pin1", ".TP14 > .pin1", ".U14 > .pin13"]}/>
    {/* KiCad net: /Power/OUT0 */}
    <KiCadNet name={"_Power_OUT0"} connectsTo={[".C45 > .pin2", ".R10 > .pin2", ".R15 > .pin1", ".C40 > .pin2", ".U10 > .pin6", ".R14 > .pin2", ".U9 > .pin5"]}/>
    {/* KiCad net: /ESP32/XIN32 */}
    <KiCadNet name={"_ESP32_XIN32"} connectsTo={[".Y1 > .pin1", ".C30 > .pin1", ".U12 > .pin8"]}/>
    {/* KiCad net: /ESP32/XOUT32 */}
    <KiCadNet name={"_ESP32_XOUT32"} connectsTo={[".Y1 > .pin2", ".C31 > .pin1", ".U12 > .pin9"]}/>
    {/* KiCad net: /Fan/FAN_TACH */}
    <KiCadNet name={"_Fan_FAN_TACH"} connectsTo={[".TP16 > .pin1", ".U7 > .pin6", ".R2 > .pin1", ".J4 > .pin3"]}/>
    {/* KiCad net: /Fan/FAN_PWM */}
    <KiCadNet name={"_Fan_FAN_PWM"} connectsTo={[".TP15 > .pin1", ".U7 > .pin4", ".R9 > .pin1", ".J4 > .pin4"]}/>
    {/* KiCad net: unconnected-(U5-PG-Pad4) */}
    <KiCadNet name={"unconnected__U5_PG_Pad4_"} connectsTo={[".U5 > .pin4"]}/>
    {/* KiCad net: /BM1366/ADDR0 */}
    <KiCadNet name={"_BM1366_ADDR0"} connectsTo={[".TP8 > .pin1", ".U14 > .pin10"]}/>
    {/* KiCad net: /ESP32/IO0 */}
    <KiCadNet name={"_ESP32_IO0"} connectsTo={[".TP23 > .pin1", ".U12 > .pin27", ".J5 > .pin6", ".SW2 > .pin2"]}/>
    {/* KiCad net: unconnected-(U6-PG-Pad4) */}
    <KiCadNet name={"unconnected__U6_PG_Pad4_"} connectsTo={[".U6 > .pin4"]}/>
    {/* KiCad net: /BM1366/BO */}
    <KiCadNet name={"_BM1366_BO"} connectsTo={[".TP1 > .pin1", ".U14 > .pin23"]}/>
    {/* KiCad net: /BM1366/RI */}
    <KiCadNet name={"_BM1366_RI"} connectsTo={[".TP43 > .pin1", ".U14 > .pin22"]}/>
    {/* KiCad net: unconnected-(U7-DP-Pad2) */}
    <KiCadNet name={"unconnected__U7_DP_Pad2_"} connectsTo={[".U7 > .pin2"]}/>
    {/* KiCad net: unconnected-(U7-DN-Pad3) */}
    <KiCadNet name={"unconnected__U7_DN_Pad3_"} connectsTo={[".U7 > .pin3"]}/>
    {/* KiCad net: /BM1366/VDD1_1 */}
    <KiCadNet name={"_BM1366_VDD1_1"} connectsTo={[".C12 > .pin2", ".TP42 > .pin1", ".C15 > .pin1", ".U14 > .pin28"]}/>
    {/* KiCad net: /ESP32/EN */}
    <KiCadNet name={"_ESP32_EN"} connectsTo={[".R1 > .pin2", ".TP17 > .pin1", ".C21 > .pin1", ".U12 > .pin3", ".J5 > .pin1", ".SW1 > .pin2"]}/>
    {/* KiCad net: /BM1366/RO */}
    <KiCadNet name={"_BM1366_RO"} connectsTo={[".U2 > .pin2", ".TP3 > .pin1", ".J3 > .pin3", ".U14 > .pin7"]}/>
    {/* KiCad net: /BM1366/CI */}
    <KiCadNet name={"_BM1366_CI"} connectsTo={[".U2 > .pin3", ".TP2 > .pin1", ".J3 > .pin2", ".U14 > .pin9"]}/>
    {/* KiCad net: /BM1366/RST_N */}
    <KiCadNet name={"_BM1366_RST_N"} connectsTo={[".U2 > .pin4", ".TP4 > .pin1", ".J3 > .pin4", ".U14 > .pin5"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad6) */}
    <KiCadNet name={"unconnected__U2_NC_Pad6_"} connectsTo={[".U2 > .pin6"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad9) */}
    <KiCadNet name={"unconnected__U2_NC_Pad9_"} connectsTo={[".U2 > .pin9"]}/>
    {/* KiCad net: /RST */}
    <KiCadNet name={"_RST"} connectsTo={[".U2 > .pin11", ".U12 > .pin39"]}/>
    {/* KiCad net: /TX */}
    <KiCadNet name={"_TX"} connectsTo={[".U2 > .pin12", ".U12 > .pin10"]}/>
    {/* KiCad net: /RX */}
    <KiCadNet name={"_RX"} connectsTo={[".U2 > .pin13", ".U12 > .pin11"]}/>
    {/* KiCad net: /Power/SW */}
    <KiCadNet name={"_Power_SW"} connectsTo={[".L1 > .pin1", ".Q2 > .pin5", ".U9 > .pin8", ".Q1 > .pin1", ".Q1 > .pin2", ".Q1 > .pin3", ".C42 > .pin2"]}/>
    {/* KiCad net: /BM1366/VDD2_1 */}
    <KiCadNet name={"_BM1366_VDD2_1"} connectsTo={[".C15 > .pin2", ".TP41 > .pin1", ".C17 > .pin1", ".U14 > .pin27"]}/>
    {/* KiCad net: Net-(U10-FS0) */}
    <KiCadNet name={"Net__U10_FS0_"} connectsTo={[".R16 > .pin1", ".U10 > .pin5"]}/>
    {/* KiCad net: Net-(U14-VDDIO_08_1) */}
    <KiCadNet name={"Net__U14_VDDIO_08_1_"} connectsTo={[".C16 > .pin1", ".U14 > .pin16"]}/>
    {/* KiCad net: /BM1366/VDD3_1 */}
    <KiCadNet name={"_BM1366_VDD3_1"} connectsTo={[".C18 > .pin1", ".TP40 > .pin1", ".C17 > .pin2", ".U14 > .pin26"]}/>
    {/* KiCad net: /ESP32/P_TX */}
    <KiCadNet name={"_ESP32_P_TX"} connectsTo={[".TP18 > .pin1", ".U12 > .pin37", ".J5 > .pin3"]}/>
    {/* KiCad net: unconnected-(U10-FS1-Pad3) */}
    <KiCadNet name={"unconnected__U10_FS1_Pad3_"} connectsTo={[".U10 > .pin3"]}/>
    {/* KiCad net: /Power/OUT1 */}
    <KiCadNet name={"_Power_OUT1"} connectsTo={[".U10 > .pin7"]}/>
    {/* KiCad net: /BM1366/CLKO */}
    <KiCadNet name={"_BM1366_CLKO"} connectsTo={[".TP44 > .pin1", ".U14 > .pin21"]}/>
    {/* KiCad net: Net-(U14-VDDIO_18_1) */}
    <KiCadNet name={"Net__U14_VDDIO_18_1_"} connectsTo={[".C14 > .pin1", ".U14 > .pin15"]}/>
    {/* KiCad net: Net-(Q2-G) */}
    <KiCadNet name={"Net__Q2_G_"} connectsTo={[".Q2 > .pin4", ".U9 > .pin9", ".R12 > .pin1"]}/>
    {/* KiCad net: /Power/PGOOD */}
    <KiCadNet name={"_Power_PGOOD"} connectsTo={[".U9 > .pin3", ".R4 > .pin2", ".U12 > .pin19"]}/>
    {/* KiCad net: Net-(U9-BOOT) */}
    <KiCadNet name={"Net__U9_BOOT_"} connectsTo={[".U9 > .pin6", ".C42 > .pin1"]}/>
    {/* KiCad net: Net-(Q1-G) */}
    <KiCadNet name={"Net__Q1_G_"} connectsTo={[".U9 > .pin7", ".Q1 > .pin4"]}/>
    {/* KiCad net: /BM1366/VDD1_0 */}
    <KiCadNet name={"_BM1366_VDD1_0"} connectsTo={[".TP34 > .pin1", ".C6 > .pin2", ".C8 > .pin1", ".U14 > .pin1"]}/>
    {/* KiCad net: /BM1366/PIN_MODE */}
    <KiCadNet name={"_BM1366_PIN_MODE"} connectsTo={[".TP46 > .pin1", ".U14 > .pin18"]}/>
    {/* KiCad net: /BM1366/ADDR1 */}
    <KiCadNet name={"_BM1366_ADDR1"} connectsTo={[".TP10 > .pin1", ".U14 > .pin11"]}/>
    {/* KiCad net: /BM1366/CLKI */}
    <KiCadNet name={"_BM1366_CLKI"} connectsTo={[".TP7 > .pin1", ".U1 > .pin3", ".U14 > .pin8"]}/>
    {/* KiCad net: /BM1366/INV_CLKO */}
    <KiCadNet name={"_BM1366_INV_CLKO"} connectsTo={[".TP6 > .pin1", ".U14 > .pin19"]}/>
    {/* KiCad net: /BM1366/CO */}
    <KiCadNet name={"_BM1366_CO"} connectsTo={[".TP45 > .pin1", ".U14 > .pin20"]}/>
    {/* KiCad net: Net-(J8-CC1) */}
    <KiCadNet name={"Net__J8_CC1_"} connectsTo={[".R3 > .pin2", ".J8 > .pin3"]}/>
    {/* KiCad net: /ESP32/P_RX */}
    <KiCadNet name={"_ESP32_P_RX"} connectsTo={[".TP22 > .pin1", ".U12 > .pin36", ".J5 > .pin5"]}/>
    {/* KiCad net: unconnected-(U11-NC-Pad4) */}
    <KiCadNet name={"unconnected__U11_NC_Pad4_"} connectsTo={[".U11 > .pin4"]}/>
    {/* KiCad net: Net-(U12-GPIO20{slash}U1CTS{slash}ADC2_CH9{slash}CLK_OUT1{slash}USB_D+) */}
    <KiCadNet name={"Net__U12_GPIO20_slash_U1CTS_slash_ADC2_CH9_slash_CLK_OUT1_slash_USB_D__"} connectsTo={[".J8 > .pin4", ".J8 > .pin12", ".U12 > .pin14"]}/>
    {/* KiCad net: Net-(U12-GPIO19{slash}U1RTS{slash}ADC2_CH8{slash}CLK_OUT2{slash}USB_D-) */}
    <KiCadNet name={"Net__U12_GPIO19_slash_U1RTS_slash_ADC2_CH8_slash_CLK_OUT2_slash_USB_D__"} connectsTo={[".J8 > .pin5", ".J8 > .pin13", ".U12 > .pin13"]}/>
    {/* KiCad net: unconnected-(J8-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__J8_SBU1_PadA8_"} connectsTo={[".J8 > .pin6"]}/>
    {/* KiCad net: unconnected-(J8-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__J8_SBU2_PadB8_"} connectsTo={[".J8 > .pin14"]}/>
    {/* KiCad net: unconnected-(U12-GPIO4{slash}TOUCH4{slash}ADC1_CH3-Pad4) */}
    <KiCadNet name={"unconnected__U12_GPIO4_slash_TOUCH4_slash_ADC1_CH3_Pad4_"} connectsTo={[".U12 > .pin4"]}/>
    {/* KiCad net: unconnected-(U12-GPIO5{slash}TOUCH5{slash}ADC1_CH4-Pad5) */}
    <KiCadNet name={"unconnected__U12_GPIO5_slash_TOUCH5_slash_ADC1_CH4_Pad5_"} connectsTo={[".U12 > .pin5"]}/>
    {/* KiCad net: unconnected-(U12-GPIO6{slash}TOUCH6{slash}ADC1_CH5-Pad6) */}
    <KiCadNet name={"unconnected__U12_GPIO6_slash_TOUCH6_slash_ADC1_CH5_Pad6_"} connectsTo={[".U12 > .pin6"]}/>
    {/* KiCad net: unconnected-(U12-GPIO7{slash}TOUCH7{slash}ADC1_CH6-Pad7) */}
    <KiCadNet name={"unconnected__U12_GPIO7_slash_TOUCH7_slash_ADC1_CH6_Pad7_"} connectsTo={[".U12 > .pin7"]}/>
    {/* KiCad net: unconnected-(U12-GPIO8{slash}TOUCH8{slash}ADC1_CH7{slash}SUBSPICS1-Pad12) */}
    <KiCadNet name={"unconnected__U12_GPIO8_slash_TOUCH8_slash_ADC1_CH7_slash_SUBSPICS1_Pad12_"} connectsTo={[".U12 > .pin12"]}/>
    {/* KiCad net: unconnected-(U12-*GPIO46-Pad16) */}
    <KiCadNet name={"unconnected__U12__GPIO46_Pad16_"} connectsTo={[".U12 > .pin16"]}/>
    {/* KiCad net: unconnected-(U12-GPIO9{slash}TOUCH9{slash}ADC1_CH8{slash}FSPIHD{slash}SUBSPIHD-Pad17) */}
    <KiCadNet name={"unconnected__U12_GPIO9_slash_TOUCH9_slash_ADC1_CH8_slash_FSPIHD_slash_SUBSPIHD_Pad17_"} connectsTo={[".U12 > .pin17"]}/>
    {/* KiCad net: unconnected-(U12-GPIO13{slash}TOUCH13{slash}ADC2_CH2{slash}FSPIQ{slash}FSPIIO7{slash}SUBSPIQ-Pad21) */}
    <KiCadNet name={"unconnected__U12_GPIO13_slash_TOUCH13_slash_ADC2_CH2_slash_FSPIQ_slash_FSPIIO7_slash_SUBSPIQ_Pad21_"} connectsTo={[".U12 > .pin21"]}/>
    {/* KiCad net: unconnected-(U12-GPIO14{slash}TOUCH14{slash}ADC2_CH3{slash}FSPIWP{slash}FSPIDQS{slash}SUBSPIWP-Pad22) */}
    <KiCadNet name={"unconnected__U12_GPIO14_slash_TOUCH14_slash_ADC2_CH3_slash_FSPIWP_slash_FSPIDQS_slash_SUBSPIWP_Pad22_"} connectsTo={[".U12 > .pin22"]}/>
    {/* KiCad net: unconnected-(U12-GPIO21-Pad23) */}
    <KiCadNet name={"unconnected__U12_GPIO21_Pad23_"} connectsTo={[".U12 > .pin23"]}/>
    {/* KiCad net: unconnected-(U12-*GPIO45-Pad26) */}
    <KiCadNet name={"unconnected__U12__GPIO45_Pad26_"} connectsTo={[".U12 > .pin26"]}/>
    {/* KiCad net: unconnected-(U12-SPIIO6{slash}GPIO35{slash}FSPID{slash}SUBSPID-Pad28) */}
    <KiCadNet name={"unconnected__U12_SPIIO6_slash_GPIO35_slash_FSPID_slash_SUBSPID_Pad28_"} connectsTo={[".U12 > .pin28"]}/>
    {/* KiCad net: unconnected-(U12-SPIIO7{slash}GPIO36{slash}FSPICLK{slash}SUBSPICLK-Pad29) */}
    <KiCadNet name={"unconnected__U12_SPIIO7_slash_GPIO36_slash_FSPICLK_slash_SUBSPICLK_Pad29_"} connectsTo={[".U12 > .pin29"]}/>
    {/* KiCad net: unconnected-(U12-SPIDQS{slash}GPIO37{slash}FSPIQ{slash}SUBSPIQ-Pad30) */}
    <KiCadNet name={"unconnected__U12_SPIDQS_slash_GPIO37_slash_FSPIQ_slash_SUBSPIQ_Pad30_"} connectsTo={[".U12 > .pin30"]}/>
    {/* KiCad net: unconnected-(U12-GPIO38{slash}FSPIWP{slash}SUBSPIWP-Pad31) */}
    <KiCadNet name={"unconnected__U12_GPIO38_slash_FSPIWP_slash_SUBSPIWP_Pad31_"} connectsTo={[".U12 > .pin31"]}/>
    {/* KiCad net: unconnected-(U12-MTCK{slash}GPIO39{slash}CLK_OUT3{slash}SUBSPICS1-Pad32) */}
    <KiCadNet name={"unconnected__U12_MTCK_slash_GPIO39_slash_CLK_OUT3_slash_SUBSPICS1_Pad32_"} connectsTo={[".U12 > .pin32"]}/>
    {/* KiCad net: unconnected-(U12-MTDO{slash}GPIO40{slash}CLK_OUT2-Pad33) */}
    <KiCadNet name={"unconnected__U12_MTDO_slash_GPIO40_slash_CLK_OUT2_Pad33_"} connectsTo={[".U12 > .pin33"]}/>
    {/* KiCad net: unconnected-(U12-MTDI{slash}GPIO41{slash}CLK_OUT1-Pad34) */}
    <KiCadNet name={"unconnected__U12_MTDI_slash_GPIO41_slash_CLK_OUT1_Pad34_"} connectsTo={[".U12 > .pin34"]}/>
    {/* KiCad net: unconnected-(U12-MTMS{slash}GPIO42-Pad35) */}
    <KiCadNet name={"unconnected__U12_MTMS_slash_GPIO42_Pad35_"} connectsTo={[".U12 > .pin35"]}/>
    <KiCadSchematic /></board>);
}
