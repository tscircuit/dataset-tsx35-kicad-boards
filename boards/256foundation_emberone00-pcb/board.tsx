import { KiCadSchematic, KiCadNet } from './schematic'
// EmberOne
// Source: https://github.com/256foundation/emberone00-pcb
// Commit: b21b32ca49710b99cb75f86406b0df5190c9beb4; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_U55, Footprint_C16, Footprint_U4, Footprint_R6, Footprint_C11, Footprint_D1, Footprint_J16, Footprint_R5, Footprint_H6, Footprint_R20, Footprint_R30, Footprint_Q4, Footprint_C31, Footprint_C15, Footprint_R27, Footprint_C101, Footprint_C30, Footprint_C7, Footprint_U65, Footprint_U47, Footprint_C9, Footprint_R28, Footprint_C5, Footprint_H8, Footprint_U27, Footprint_C27, Footprint_R9, Footprint_C22, Footprint_U74, Footprint_C107, Footprint_U54, Footprint_R23, Footprint_U46, Footprint_J4, Footprint_J3, Footprint_C17, Footprint_J18, Footprint_C20, Footprint_R52, Footprint_R53, Footprint_U9, Footprint_R4, Footprint_C106, Footprint_C99, Footprint_U7, Footprint_U45, Footprint_J11, Footprint_C18, Footprint_J10, Footprint_J1, Footprint_R69, Footprint_EXTRA1, Footprint_H5, Footprint_J17, Footprint_J9, Footprint_U72, Footprint_D2, Footprint_J12, Footprint_C24, Footprint_L1, Footprint_J8, Footprint_C100, Footprint_U63, Footprint_U10, Footprint_R7, Footprint_U64, Footprint_R31, Footprint_C105, Footprint_H2, Footprint_J6, Footprint_C90, Footprint_C96, Footprint_J19, Footprint_C25, Footprint_U73, Footprint_U8, Footprint_R25, Footprint_C21, Footprint_C104, Footprint_Q2, Footprint_C108, Footprint_J15, Footprint_R51, Footprint_U56, Footprint_C109, Footprint_J13, Footprint_C4, Footprint_R26, Footprint_R10, Footprint_J5, Footprint_R22, Footprint_R3, Footprint_C28, Footprint_H10, Footprint_C2, Footprint_C1, Footprint_J7, Footprint_C10, Footprint_Y1, Footprint_R2, Footprint_C13, Footprint_C102, Footprint_H7, Footprint_U2, Footprint_C110, Footprint_U1, Footprint_C29, Footprint_R19, Footprint_C8, Footprint_C12, Footprint_R1, Footprint_R8, Footprint_C19, Footprint_H1, Footprint_H4, Footprint_C6, Footprint_C103, Footprint_R54, Footprint_R11, Footprint_C14, Footprint_J2, Footprint_Q3, Footprint_C26, Footprint_R21, Footprint_R33, Footprint_Q1, Footprint_U3, Footprint_C98, Footprint_R32, Footprint_R24, Footprint_J21, Footprint_C3, Footprint_H9, Footprint_H3, Footprint_L2, Footprint_R50, Footprint_U6, Footprint_C97, Footprint_R29, Footprint_J14, Footprint_TP95, Footprint_C118, Footprint_R129, Footprint_U28, Footprint_C159, Footprint_C215, Footprint_C275, Footprint_TP124, Footprint_TP104, Footprint_R97, Footprint_R12, Footprint_R115, Footprint_R15, Footprint_U52, Footprint_C242, Footprint_R68, Footprint_C236, Footprint_C191, Footprint_R119, Footprint_C257, Footprint_U68, Footprint_R117, Footprint_C240, Footprint_TP10, Footprint_C183, Footprint_R89, Footprint_C196, Footprint_C218, Footprint_C228, Footprint_TP100, Footprint_U70, Footprint_R135, Footprint_C120, Footprint_R64, Footprint_C258, Footprint_U42, Footprint_U48, Footprint_TP146, Footprint_R133, Footprint_R17, Footprint_R88, Footprint_C112, Footprint_TP55, Footprint_C263, Footprint_C176, Footprint_R58, Footprint_C192, Footprint_C174, Footprint_R136, Footprint_C181, Footprint_C248, Footprint_C261, Footprint_C246, Footprint_R120, Footprint_R63, Footprint_R83, Footprint_TP51, Footprint_C227, Footprint_U67, Footprint_U50, Footprint_C201, Footprint_C224, Footprint_TP54, Footprint_R122, Footprint_C177, Footprint_R125, Footprint_U58, Footprint_TP7, Footprint_C212, Footprint_R131, Footprint_TP53, Footprint_R67, Footprint_R104, Footprint_U32, Footprint_C113, Footprint_TP123, Footprint_C189, Footprint_C234, Footprint_TP143, Footprint_C223, Footprint_C185, Footprint_C251, Footprint_U57, Footprint_R123, Footprint_C278, Footprint_TP12, Footprint_R126, Footprint_R108, Footprint_TP5, Footprint_C229, Footprint_R121, Footprint_C157, Footprint_TP52, Footprint_TP103, Footprint_R85, Footprint_R79, Footprint_C219, Footprint_C116, Footprint_C188, Footprint_C170, Footprint_R90, Footprint_U51, Footprint_R127, Footprint_R18, Footprint_C184, Footprint_C187, Footprint_C208, Footprint_TP9, Footprint_R59, Footprint_R128, Footprint_U66, Footprint_U62, Footprint_C207, Footprint_C220, Footprint_R113, Footprint_C164, Footprint_C195, Footprint_TP101, Footprint_U59, Footprint_C197, Footprint_C194, Footprint_TP97, Footprint_C268, Footprint_R75, Footprint_R130, Footprint_U30, Footprint_U60, Footprint_R99, Footprint_C221, Footprint_R114, Footprint_TP121, Footprint_R16, Footprint_R112, Footprint_R91, Footprint_R65, Footprint_R118, Footprint_R103, Footprint_C202, Footprint_TP122, Footprint_TP1, Footprint_LOGO1, Footprint_C213, Footprint_C244, Footprint_C186, Footprint_C190, Footprint_R138, Footprint_R60, Footprint_C241, Footprint_C225, Footprint_C209, Footprint_TP102, Footprint_U43, Footprint_C23, Footprint_TP142, Footprint_C249, Footprint_C161, Footprint_TP2, Footprint_C255, Footprint_U5, Footprint_R92, Footprint_C235, Footprint_C269, Footprint_TP98, Footprint_R101, Footprint_R98, Footprint_C180, Footprint_TP3, Footprint_C250, Footprint_TP147, Footprint_U61, Footprint_C276, Footprint_C253, Footprint_R57, Footprint_R106, Footprint_R96, Footprint_C111, Footprint_C163, Footprint_C175, Footprint_C119, Footprint_C211, Footprint_C168, Footprint_C259, Footprint_C117, Footprint_TP99, Footprint_TP126, Footprint_C273, Footprint_R124, Footprint_R110, Footprint_C115, Footprint_C262, Footprint_R62, Footprint_R13, Footprint_C210, Footprint_U69, Footprint_TP8, Footprint_TP6, Footprint_R14, Footprint_C179, Footprint_TP56, Footprint_C277, Footprint_C162, Footprint_C267, Footprint_C214, Footprint_C254, Footprint_C247, Footprint_C122, Footprint_R137, Footprint_U71, Footprint_C243, Footprint_TP105, Footprint_R100, Footprint_C160, Footprint_C216, Footprint_R132, Footprint_TP108, Footprint_C226, Footprint_C217, Footprint_TP4, Footprint_R109, Footprint_U53, Footprint_C252, Footprint_U49, Footprint_TP144, Footprint_R102, Footprint_C156, Footprint_TP145, Footprint_R105, Footprint_C230, Footprint_TP125, Footprint_C245, Footprint_R86, Footprint_C203, Footprint_R134, Footprint_C178, Footprint_TP107, Footprint_C256, Footprint_R56, Footprint_R111, Footprint_R66, Footprint_TP11, Footprint_R87, Footprint_R94, Footprint_C169, Footprint_R107, Footprint_TP106, Footprint_R116, Footprint_R93, Footprint_C260, Footprint_C193, Footprint_R95, Footprint_C222, Footprint_U29, Footprint_TP96, Footprint_C182, Footprint_C274 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={128} height={128.00000000000017} thickness={1.6} layers={6} outline={[{ "x": -61.44, "y": 63.99999999999993 }, { "x": 61.44, "y": 63.99999999999993 }, { "x": 61.676206964422136, "y": 63.98907938605289 }, { "x": 61.91039868628738, "y": 63.95641094164104 }, { "x": 62.14057712683845, "y": 63.90227338207315 }, { "x": 62.36477848717743, "y": 63.827128589355056 }, { "x": 62.58108996268501, "y": 63.73161767157998 }, { "x": 62.78766606237514, "y": 63.61655549322708 }, { "x": 62.98274435395422, "y": 63.482923723033466 }, { "x": 63.16466050025369, "y": 63.33186245875288 }, { "x": 63.33186245875049, "y": 63.16466050025558 }, { "x": 63.482923723030524, "y": 62.98274435395567 }, { "x": 63.616555493223586, "y": 62.78766606237619 }, { "x": 63.73161767157586, "y": 62.58108996268574 }, { "x": 63.82712858935031, "y": 62.36477848717789 }, { "x": 63.90227338206773, "y": 62.14057712683868 }, { "x": 63.95641094163494, "y": 61.91039868628742 }, { "x": 63.989079386046086, "y": 61.67620696442209 }, { "x": 63.99999999999244, "y": 61.43999999999993 }, { "x": 64, "y": -61.44000000000008 }, { "x": 63.989079386052964, "y": -61.67620696442242 }, { "x": 63.95641094164114, "y": -61.91039868628789 }, { "x": 63.902273382073304, "y": -62.14057712683919 }, { "x": 63.827128589355254, "y": -62.36477848717843 }, { "x": 63.73161767158027, "y": -62.581089962686235 }, { "x": 63.61655549322742, "y": -62.787666062376644 }, { "x": 63.48292372303385, "y": -62.98274435395601 }, { "x": 63.331862458753335, "y": -63.16466050025582 }, { "x": 63.164660500256076, "y": -63.331862458752965 }, { "x": 62.98274435395621, "y": -63.482923723033394 }, { "x": 62.78766606237676, "y": -63.616555493226855 }, { "x": 62.58108996268629, "y": -63.731617671579556 }, { "x": 62.36477848717843, "y": -63.82712858935446 }, { "x": 62.14057712683916, "y": -63.902273382072394 }, { "x": 61.910398686287806, "y": -63.95641094164009 }, { "x": 61.676206964422335, "y": -63.9890793860518 }, { "x": 61.44, "y": -63.99999999999869 }, { "x": -61.44, "y": -64.00000000000009 }, { "x": -61.67620696442212, "y": -63.98907938605299 }, { "x": -61.91039868628735, "y": -63.95641094164108 }, { "x": -62.14057712683842, "y": -63.90227338207316 }, { "x": -62.36477848717739, "y": -63.827128589355056 }, { "x": -62.581089962684956, "y": -63.731617671579954 }, { "x": -62.78766606237507, "y": -63.616555493227054 }, { "x": -62.982744353954146, "y": -63.48292372303342 }, { "x": -63.1646605002536, "y": -63.33186245875285 }, { "x": -63.33186245875042, "y": -63.164660500255565 }, { "x": -63.48292372303048, "y": -62.982744353955695 }, { "x": -63.61655549322356, "y": -62.78766606237622 }, { "x": -63.73161767157589, "y": -62.58108996268578 }, { "x": -63.82712858935035, "y": -62.36477848717797 }, { "x": -63.90227338206785, "y": -62.14057712683879 }, { "x": -63.95641094163511, "y": -61.91039868628755 }, { "x": -63.989079386046356, "y": -61.67620696442222 }, { "x": -63.999999999992795, "y": -61.44000000000008 }, { "x": -64, "y": 61.43999999999993 }, { "x": -63.98907938605315, "y": 61.67620696442238 }, { "x": -63.95641094164148, "y": 61.91039868628796 }, { "x": -63.90227338207377, "y": 62.14057712683942 }, { "x": -63.82712858935582, "y": 62.36477848717878 }, { "x": -63.73161767158089, "y": 62.58108996268675 }, { "x": -63.616555493228105, "y": 62.7876660623773 }, { "x": -63.48292372303456, "y": 62.98274435395682 }, { "x": -63.33186245875403, "y": 63.164660500256744 }, { "x": -63.16466050025677, "y": 63.33186245875402 }, { "x": -62.98274435395686, "y": 63.48292372303456 }, { "x": -62.78766606237734, "y": 63.616555493228105 }, { "x": -62.581089962686804, "y": 63.73161767158092 }, { "x": -62.36477848717884, "y": 63.827128589355866 }, { "x": -62.140577126839474, "y": 63.902273382073815 }, { "x": -61.91039868628803, "y": 63.95641094164155 }, { "x": -61.67620696442245, "y": 63.989079386053234 }, { "x": -61.44, "y": 64.0000000000001 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* U55: BM1362AC_MODE0 */}
    <chip name={"U55"} pcbX={-18.485} pcbY={-32.16} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE0"} footprint={<Footprint_U55 />} noSchematicRepresentation={true}/>

    {/* C16: 470uF */}
    <capacitor name={"C16"} pcbX={-16.225} pcbY={11.1476} pcbRotation={90} capacitance={"470uF"} footprint={<Footprint_C16 />} schX={12.7} schY={3.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* U4: SN74AVC4T774 */}
    <chip name={"U4"} pcbX={55.15} pcbY={-8.8975} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} displayName={"SN74AVC4T774"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* R6: 3.57k */}
    <resistor name={"R6"} pcbX={-30.195} pcbY={45.455} pcbRotation={90} resistance={"3.57kohm"} footprint={<Footprint_R6 />} schX={9.599999999999998} schY={4.850000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* C11: 0.015uF */}
    <capacitor name={"C11"} pcbX={-33.685} pcbY={53.595} pcbRotation={90} capacitance={"0.015uF"} footprint={<Footprint_C11 />} schX={-6.800000000000001} schY={5.8500000000000005} schRotation={-90} schSheetName={"Power"}/>

    {/* D1: XBS104S13R-G */}
    <chip name={"D1"} pcbX={-51.025} pcbY={42.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"XBS104S13R-G"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* J16: Conn_01x01 */}
    <chip name={"J16"} pcbX={6.82} pcbY={-54.695} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J16 />} noSchematicRepresentation={true}/>

    {/* R5: 86.6k */}
    <resistor name={"R5"} pcbX={-44.715} pcbY={44.185} pcbRotation={180} resistance={"86.6kohm"} footprint={<Footprint_R5 />} schX={2.599999999999998} schY={6.050000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* H6: MountingHole */}
    <chip name={"H6"} pcbX={14.455} pcbY={-39.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H6 />} noSchematicRepresentation={true}/>

    {/* R20: 4.7k */}
    <resistor name={"R20"} pcbX={35.585} pcbY={42.115} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R20 />} schX={4.200000000000003} schY={0.75} schRotation={90} schSheetName={"Data"}/>

    {/* R30: 10 */}
    <resistor name={"R30"} pcbX={-25.025} pcbY={41.475} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R30 />} schX={1.8000000000000007} schY={-0.6499999999999986} schRotation={0} schSheetName={"Power"}/>

    {/* Q4: CSD18511Q5A */}
    <chip name={"Q4"} pcbX={27.4737} pcbY={28.979998} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"CSD18511Q5A"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* C31: 1000pF */}
    <capacitor name={"C31"} pcbX={-33.575} pcbY={41.475} pcbRotation={90} capacitance={"1000pF"} footprint={<Footprint_C31 />} schX={-0.40000000000000036} schY={3.750000000000001} schRotation={90} schSheetName={"Power"}/>

    {/* C15: 0.22uF */}
    <capacitor name={"C15"} pcbX={-49.125} pcbY={52.565} pcbRotation={90} capacitance={"0.22uF"} footprint={<Footprint_C15 />} schX={4.199999999999999} schY={2.950000000000001} schRotation={0} schSheetName={"Power"}/>

    {/* R27: 6.8 */}
    <resistor name={"R27"} pcbX={-39.575} pcbY={43.225} pcbRotation={90} resistance={"6.8ohm"} footprint={<Footprint_R27 />} schX={8.399999999999999} schY={3.950000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* C101: 0.1uF */}
    <capacitor name={"C101"} pcbX={47.2437} pcbY={51.35} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C101 />} schX={-2.099999999999998} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* C30: 1000pF */}
    <capacitor name={"C30"} pcbX={-27.675} pcbY={42.125} pcbRotation={90} capacitance={"1000pF"} footprint={<Footprint_C30 />} schX={0.8999999999999986} schY={-0.049999999999998934} schRotation={90} schSheetName={"Power"}/>

    {/* C7: 0.015uF */}
    <capacitor name={"C7"} pcbX={-39.875} pcbY={57.515} pcbRotation={90} capacitance={"0.015uF"} footprint={<Footprint_C7 />} schX={-6} schY={0.6500000000000004} schRotation={-90} schSheetName={"Power"}/>

    {/* U65: BM1362AC_MODE1 */}
    <chip name={"U65"} pcbX={3.025} pcbY={-45.85} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U65 />} noSchematicRepresentation={true}/>

    {/* U47: BM1362AC_MODE1 */}
    <chip name={"U47"} pcbX={-40.015} pcbY={-45.82} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U47 />} noSchematicRepresentation={true}/>

    {/* C9: 0.015uF */}
    <capacitor name={"C9"} pcbX={-39.345} pcbY={46.245} pcbRotation={0} capacitance={"0.015uF"} footprint={<Footprint_C9 />} schX={-9.3} schY={2.3500000000000014} schRotation={-90} schSheetName={"Power"}/>

    {/* R28: 6.8 */}
    <resistor name={"R28"} pcbX={-52.95} pcbY={55.575} pcbRotation={0} resistance={"6.8ohm"} footprint={<Footprint_R28 />} schX={8.600000000000001} schY={-0.6499999999999986} schRotation={-90} schSheetName={"Power"}/>

    {/* C5: 1uF */}
    <capacitor name={"C5"} pcbX={-47.875} pcbY={43.595} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C5 />} schX={-0.1999999999999993} schY={6.250000000000001} schRotation={0} schSheetName={"Power"}/>

    {/* H8: MountingHole */}
    <chip name={"H8"} pcbX={-7.545} pcbY={-39.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H8 />} noSchematicRepresentation={true}/>

    {/* U27: RP2040 */}
    <chip name={"U27"} pcbX={43.645807} pcbY={45.6775} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"] }} displayName={"RP2040"} footprint={<Footprint_U27 />} noSchematicRepresentation={true}/>

    {/* C27: 0.1uF */}
    <capacitor name={"C27"} pcbX={0.675} pcbY={10.805} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C27 />} schX={10.8} schY={3.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* R9: 86.6k */}
    <resistor name={"R9"} pcbX={-44.035} pcbY={57.305} pcbRotation={90} resistance={"86.6kohm"} footprint={<Footprint_R9 />} schX={1.8000000000000007} schY={-1.3499999999999979} schRotation={0} schSheetName={"Power"}/>

    {/* C22: 0.1uF */}
    <capacitor name={"C22"} pcbX={53.325} pcbY={-3.525} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C22 />} schX={-7.800000000000001} schY={8.049999999999999} schRotation={-90} schSheetName={"stack7"}/>

    {/* U74: BM1362AC_MODE1 */}
    <chip name={"U74"} pcbX={24.575} pcbY={-18.57} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U74 />} noSchematicRepresentation={true}/>

    {/* C107: 0.1uF */}
    <capacitor name={"C107"} pcbX={37.345807} pcbY={45.115} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C107 />} schX={4.800000000000001} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* U54: BM1362AC_MODE1 */}
    <chip name={"U54"} pcbX={-18.485} pcbY={-45.83} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U54 />} noSchematicRepresentation={true}/>

    {/* R23: 10 */}
    <resistor name={"R23"} pcbX={-35.815} pcbY={46.265} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R23 />} schX={3} schY={4.450000000000001} schRotation={0} schSheetName={"Power"}/>

    {/* U46: BM1362AC_MODE0 */}
    <chip name={"U46"} pcbX={-40.015} pcbY={-32.14} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE0"} footprint={<Footprint_U46 />} noSchematicRepresentation={true}/>

    {/* J4: Conn_01x01 */}
    <chip name={"J4"} pcbX={-40.015} pcbY={-38.985} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* J3: Conn_01x01 */}
    <chip name={"J3"} pcbX={-40.015} pcbY={-25.295} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* C17: 470uF */}
    <capacitor name={"C17"} pcbX={-7.175} pcbY={11.125} pcbRotation={90} capacitance={"470uF"} footprint={<Footprint_C17 />} schX={13.799999999999997} schY={3.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* J18: Conn_01x01 */}
    <chip name={"J18"} pcbX={-43.795} pcbY={-9.645} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J18 />} noSchematicRepresentation={true}/>

    {/* C20: 1uF */}
    <capacitor name={"C20"} pcbX={-25.665} pcbY={45.945} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C20 />} schX={9.899999999999999} schY={-5.449999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* R52: 5.1k */}
    <resistor name={"R52"} pcbX={37.3337} pcbY={59.265} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R52 />} schX={-8.6} schY={2.25} schRotation={0} schSheetName={"Data"}/>

    {/* R53: 33 */}
    <resistor name={"R53"} pcbX={44.075807} pcbY={52.405} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R53 />} schX={-2.8999999999999986} schY={2.3499999999999996} schRotation={0} schSheetName={"Data"}/>

    {/* U9: SK6812 */}
    <chip name={"U9"} pcbX={57.8437} pcbY={61.955} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"SK6812"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* R4: 11k */}
    <resistor name={"R4"} pcbX={-36.845} pcbY={54.755} pcbRotation={180} resistance={"11kohm"} footprint={<Footprint_R4 />} schX={-6.800000000000001} schY={4.950000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* C106: 0.1uF */}
    <capacitor name={"C106"} pcbX={47.965807} pcbY={40.135} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C106 />} schX={3.900000000000002} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* C99: 0.1uF */}
    <capacitor name={"C99"} pcbX={38.165807} pcbY={53.205} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C99 />} schX={-4.6} schY={-2.6500000000000004} schRotation={90} schSheetName={"Data"}/>

    {/* U7: TMP1075 */}
    <chip name={"U7"} pcbX={55.095} pcbY={-33.175} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"TMP1075"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* U45: BM1362AC_MODE1 */}
    <chip name={"U45"} pcbX={-40.015} pcbY={-18.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U45 />} noSchematicRepresentation={true}/>

    {/* J11: Conn_01x01 */}
    <chip name={"J11"} pcbX={24.575} pcbY={-25.405} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J11 />} noSchematicRepresentation={true}/>

    {/* C18: 470uF */}
    <capacitor name={"C18"} pcbX={24.2687} pcbY={11.1} pcbRotation={180} capacitance={"470uF"} footprint={<Footprint_C18 />} schX={14.899999999999999} schY={3.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* J10: Conn_01x01 */}
    <chip name={"J10"} pcbX={24.575} pcbY={-39.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J10 />} noSchematicRepresentation={true}/>

    {/* J1: Screw Terminal */}
    <chip name={"J1"} pcbX={-11.679451} pcbY={57.925} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Screw Terminal"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* R69: 1k */}
    <resistor name={"R69"} pcbX={56.585} pcbY={-14.475} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R69 />} schX={-12.100000000000001} schY={8.149999999999999} schRotation={180} schSheetName={"stack7"}/>

    {/* EXTRA1: 70x90mm Heatsink */}
    <chip name={"EXTRA1"} pcbX={-7.395} pcbY={-31.865} pcbRotation={0} pinLabels={{}} displayName={"70x90mm Heatsink"} footprint={<Footprint_EXTRA1 />} noSchematicRepresentation={true}/>

    {/* H5: MountingHole */}
    <chip name={"H5"} pcbX={14.455} pcbY={-25.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H5 />} noSchematicRepresentation={true}/>

    {/* J17: Conn_01x01 */}
    <chip name={"J17"} pcbX={20.795} pcbY={-54.695} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J17 />} noSchematicRepresentation={true}/>

    {/* J9: Conn_01x01 */}
    <chip name={"J9"} pcbX={3.025} pcbY={-39.005} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* U72: BM1362AC_MODE1 */}
    <chip name={"U72"} pcbX={24.575} pcbY={-45.94} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U72 />} noSchematicRepresentation={true}/>

    {/* D2: XBS104S13R-G */}
    <chip name={"D2"} pcbX={-49.17} pcbY={56.485} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"XBS104S13R-G"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* J12: Conn_01x01 */}
    <chip name={"J12"} pcbX={-36.265} pcbY={-54.665} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J12 />} noSchematicRepresentation={true}/>

    {/* C24: 0.1uF */}
    <capacitor name={"C24"} pcbX={-57.895} pcbY={-29.365} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C24 />} schX={9.399999999999999} schY={-0.45000000000000107} schRotation={-90} schSheetName={"Data"}/>

    {/* L1: 3.3uH */}
    <chip name={"L1"} pcbX={-42.675} pcbY={20.625} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"3.3uH"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* J8: Conn_01x01 */}
    <chip name={"J8"} pcbX={3.025} pcbY={-25.315} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* C100: 0.1uF */}
    <capacitor name={"C100"} pcbX={41.325807} pcbY={51.905} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C100 />} schX={-3} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* U63: BM1362AC_MODE1 */}
    <chip name={"U63"} pcbX={3.025} pcbY={-18.48} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U63 />} noSchematicRepresentation={true}/>

    {/* U10: TLV1117LV33DCYR */}
    <chip name={"U10"} pcbX={55.4237} pcbY={48.595} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"TLV1117LV33DCYR"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* R7: 1.02k */}
    <resistor name={"R7"} pcbX={-28.485} pcbY={45.455} pcbRotation={-90} resistance={"1.02kohm"} footprint={<Footprint_R7 />} schX={9.599999999999998} schY={3.750000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* U64: BM1362AC_MODE0 */}
    <chip name={"U64"} pcbX={3.025} pcbY={-32.16} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE0"} footprint={<Footprint_U64 />} noSchematicRepresentation={true}/>

    {/* R31: 10 */}
    <resistor name={"R31"} pcbX={-30.825} pcbY={41.425} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R31 />} schX={0.5999999999999979} schY={3.8500000000000014} schRotation={0} schSheetName={"Power"}/>

    {/* C105: 0.1uF */}
    <capacitor name={"C105"} pcbX={46.625807} pcbY={40.085} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C105 />} schX={3} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* H2: MountingHole */}
    <chip name={"H2"} pcbX={59.525} pcbY={40.675} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* J6: USB_C_Receptacle_USB2.0 */}
    <chip name={"J6"} pcbX={43.4737} pcbY={60.285} pcbRotation={180} pinLabels={{ "pin1": ["A1B12"], "pin2": ["A4B9"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["B1A12"], "pin8": ["B4A9"], "pin9": ["B5"], "pin10": ["B6"], "pin11": ["B7"], "pin12": ["B8"], "pin13": ["S1"] }} displayName={"USB_C_Receptacle_USB2.0"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* C90: 1uF */}
    <capacitor name={"C90"} pcbX={51.3687} pcbY={49.645} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C90 />} schX={-9.2} schY={5.05} schRotation={-90} schSheetName={"Data"}/>

    {/* C96: 30pF */}
    <capacitor name={"C96"} pcbX={45.195807} pcbY={37.345} pcbRotation={-90} capacitance={"30pF"} footprint={<Footprint_C96 />} schX={-8.6} schY={-5.15} schRotation={90} schSheetName={"Data"}/>

    {/* J19: Conn_Coaxial */}
    <chip name={"J19"} pcbX={-55.855} pcbY={8.435} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Conn_Coaxial"} footprint={<Footprint_J19 />} noSchematicRepresentation={true}/>

    {/* C25: 0.1uF */}
    <capacitor name={"C25"} pcbX={54.255} pcbY={-29.335} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C25 />} schX={9.399999999999999} schY={-3.2500000000000018} schRotation={-90} schSheetName={"Data"}/>

    {/* U73: BM1362AC_MODE0 */}
    <chip name={"U73"} pcbX={24.575} pcbY={-32.25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE0"} footprint={<Footprint_U73 />} noSchematicRepresentation={true}/>

    {/* U8: W25Q16JVUXIQ TR */}
    <chip name={"U8"} pcbX={37.238007} pcbY={51.095001} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"W25Q16JVUXIQ TR"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* R25: 0 */}
    <resistor name={"R25"} pcbX={-36.845} pcbY={56.365} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R25 />} schX={3.1999999999999993} schY={0.8500000000000014} schRotation={0} schSheetName={"Power"}/>

    {/* C21: 0.1uF */}
    <capacitor name={"C21"} pcbX={51.725} pcbY={-5.625} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C21 />} schX={-13.200000000000001} schY={8.049999999999999} schRotation={-90} schSheetName={"stack7"}/>

    {/* C104: 0.1uF */}
    <capacitor name={"C104"} pcbX={49.985807} pcbY={48.25} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C104 />} schX={2.1000000000000014} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* Q2: CSD18511Q5A */}
    <chip name={"Q2"} pcbX={-20.58} pcbY={28.994999} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"CSD18511Q5A"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* C108: 0.1uF */}
    <capacitor name={"C108"} pcbX={48.3687} pcbY={50.275} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C108 />} schX={5.699999999999999} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* J15: Conn_01x01 */}
    <chip name={"J15"} pcbX={-14.685} pcbY={-9.635} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J15 />} noSchematicRepresentation={true}/>

    {/* R51: 5.1k */}
    <resistor name={"R51"} pcbX={49.7137} pcbY={59.275} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R51 />} schX={-9.299999999999999} schY={2.4499999999999993} schRotation={0} schSheetName={"Data"}/>

    {/* U56: BM1362AC_MODE1 */}
    <chip name={"U56"} pcbX={-18.465} pcbY={-18.48} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"BM1362AC_MODE1"} footprint={<Footprint_U56 />} noSchematicRepresentation={true}/>

    {/* C109: 0.1uF */}
    <capacitor name={"C109"} pcbX={37.335807} pcbY={48.27} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C109 />} schX={6.599999999999998} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* J13: Conn_01x01 */}
    <chip name={"J13"} pcbX={-22.265} pcbY={-54.675} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J13 />} noSchematicRepresentation={true}/>

    {/* C4: 82uF */}
    <capacitor name={"C4"} pcbX={19.845} pcbY={31.8406} pcbRotation={-90} capacitance={"82uF"} footprint={<Footprint_C4 />} schX={-12.9} schY={4.150000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* R26: 10 */}
    <resistor name={"R26"} pcbX={-30.975} pcbY={47.885} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R26 />} schX={3.1999999999999993} schY={1.3500000000000014} schRotation={0} schSheetName={"Power"}/>

    {/* R10: 3m */}
    <resistor name={"R10"} pcbX={22.045} pcbY={21.395} pcbRotation={180} resistance={"3mohm"} footprint={<Footprint_R10 />} schX={6.599999999999998} schY={-0.6499999999999986} schRotation={-90} schSheetName={"Power"}/>

    {/* J5: Conn_01x01 */}
    <chip name={"J5"} pcbX={-18.485} pcbY={-38.995} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* R22: 100k */}
    <resistor name={"R22"} pcbX={51.645} pcbY={45.895} pcbRotation={0} resistance={"100kohm"} footprint={<Footprint_R22 />} schX={3.5} schY={-3.049999999999999} schRotation={-90} schSheetName={"Data"}/>

    {/* R3: 44.2k */}
    <resistor name={"R3"} pcbX={-36.845} pcbY={51.065} pcbRotation={0} resistance={"44.2kohm"} footprint={<Footprint_R3 />} schX={-8.400000000000002} schY={1.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* C28: 4700pF */}
    <capacitor name={"C28"} pcbX={-41.445} pcbY={43.225} pcbRotation={-90} capacitance={"4700pF"} footprint={<Footprint_C28 />} schX={8.399999999999999} schY={4.75} schRotation={-90} schSheetName={"Power"}/>

    {/* H10: MountingHole */}
    <chip name={"H10"} pcbX={-29.545} pcbY={-39.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H10 />} noSchematicRepresentation={true}/>

    {/* C2: 0.1uF */}
    <capacitor name={"C2"} pcbX={-53.735} pcbY={46.865} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C2 />} schX={-11.9} schY={4.150000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* C1: 82uF */}
    <capacitor name={"C1"} pcbX={-12.485} pcbY={30.7627} pcbRotation={-90} capacitance={"82uF"} footprint={<Footprint_C1 />} schX={-14.9} schY={4.150000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* J7: Conn_01x01 */}
    <chip name={"J7"} pcbX={-18.475} pcbY={-25.315} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* C10: 820pF */}
    <capacitor name={"C10"} pcbX={-44.505} pcbY={42.225} pcbRotation={180} capacitance={"820pF"} footprint={<Footprint_C10 />} schX={-10.100000000000001} schY={1.0500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* Y1: 12MHz */}
    <chip name={"Y1"} pcbX={42.795807} pcbY={38.49} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"12MHz"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* R2: 9.09k */}
    <resistor name={"R2"} pcbX={-53.505} pcbY={50.525} pcbRotation={180} resistance={"9.09kohm"} footprint={<Footprint_R2 />} schX={-11.100000000000001} schY={2.1500000000000004} schRotation={-90} schSheetName={"Power"}/>

    {/* C13: 0.22uF */}
    <capacitor name={"C13"} pcbX={-49.161051} pcbY={47.150157} pcbRotation={-90} capacitance={"0.22uF"} footprint={<Footprint_C13 />} schX={1.3999999999999986} schY={5.3500000000000005} schRotation={0} schSheetName={"Power"}/>

    {/* C102: 1uF */}
    <capacitor name={"C102"} pcbX={46.625807} pcbY={37.355} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C102 />} schX={-1.1000000000000014} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* H7: MountingHole */}
    <chip name={"H7"} pcbX={-7.545} pcbY={-25.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H7 />} noSchematicRepresentation={true}/>

    {/* U2: DS4432U+ */}
    <chip name={"U2"} pcbX={-26.571051} pcbY={51.628949} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"DS4432U+"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* C110: 0.1uF */}
    <capacitor name={"C110"} pcbX={41.325807} pcbY={52.905} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C110 />} schX={7.5} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* U1: LM25119PSQ/NOPB */}
    <chip name={"U1"} pcbX={-44.461051} pcbY={49.393951} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} displayName={"LM25119PSQ/NOPB"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* C29: 4700pF */}
    <capacitor name={"C29"} pcbX={-52.925} pcbY={57.425} pcbRotation={180} capacitance={"4700pF"} footprint={<Footprint_C29 />} schX={8.600000000000001} schY={0.15000000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* R19: 4.7k */}
    <resistor name={"R19"} pcbX={34.565} pcbY={43.245} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R19 />} schX={3.900000000000002} schY={0.75} schRotation={-90} schSheetName={"Data"}/>

    {/* C8: 0.47uF */}
    <capacitor name={"C8"} pcbX={-36.625} pcbY={52.905} pcbRotation={0} capacitance={"0.47uF"} footprint={<Footprint_C8 />} schX={-7.700000000000001} schY={1.0500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* C12: 330pF */}
    <capacitor name={"C12"} pcbX={-36.61} pcbY={49.225} pcbRotation={180} capacitance={"330pF"} footprint={<Footprint_C12 />} schX={-7.800000000000001} schY={5.45} schRotation={-90} schSheetName={"Power"}/>

    {/* R1: 56.2k */}
    <resistor name={"R1"} pcbX={-53.495} pcbY={48.835} pcbRotation={0} resistance={"56.2kohm"} footprint={<Footprint_R1 />} schX={-11.100000000000001} schY={5.950000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* R8: 3m */}
    <resistor name={"R8"} pcbX={-17.165} pcbY={21.395} pcbRotation={0} resistance={"3mohm"} footprint={<Footprint_R8 />} schX={6.599999999999998} schY={3.450000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* C19: 1uF */}
    <capacitor name={"C19"} pcbX={-30.495} pcbY={51.465} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C19 />} schX={3.5} schY={-5.449999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* H1: MountingHole */}
    <chip name={"H1"} pcbX={-59.475} pcbY={-59.325} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* H4: MountingHole */}
    <chip name={"H4"} pcbX={-59.475} pcbY={40.675} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* C6: 820pF */}
    <capacitor name={"C6"} pcbX={-42.015} pcbY={57.515} pcbRotation={90} capacitance={"820pF"} footprint={<Footprint_C6 />} schX={-6.800000000000001} schY={1.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* C103: 1uF */}
    <capacitor name={"C103"} pcbX={49.915} pcbY={44.08} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C103 />} schX={1.1999999999999993} schY={4.65} schRotation={90} schSheetName={"Data"}/>

    {/* R54: 33 */}
    <resistor name={"R54"} pcbX={45.175807} pcbY={52.405} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R54 />} schX={-2.8999999999999986} schY={2.1500000000000004} schRotation={0} schSheetName={"Data"}/>

    {/* R11: 39k */}
    <resistor name={"R11"} pcbX={-24.875} pcbY={55.385} pcbRotation={0} resistance={"39kohm"} footprint={<Footprint_R11 />} schX={7} schY={-6.25} schRotation={-90} schSheetName={"Power"}/>

    {/* C14: 1uF */}
    <capacitor name={"C14"} pcbX={-46.035} pcbY={57.535} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C14 />} schX={1.6999999999999993} schY={3.1500000000000012} schRotation={-90} schSheetName={"Power"}/>

    {/* J2: Screw Terminal */}
    <chip name={"J2"} pcbX={16.799249} pcbY={57.875} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"Screw Terminal"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* Q3: CSD18511Q5A */}
    <chip name={"Q3"} pcbX={29.139999} pcbY={35.86} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"CSD18511Q5A"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* C26: 1uF */}
    <capacitor name={"C26"} pcbX={0.675} pcbY={8.425} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C26 />} schX={11.7} schY={3.5500000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* R21: 100k */}
    <resistor name={"R21"} pcbX={49.385} pcbY={45.895} pcbRotation={0} resistance={"100kohm"} footprint={<Footprint_R21 />} schX={3.5} schY={-1.75} schRotation={-90} schSheetName={"Data"}/>

    {/* R33: 0 */}
    <resistor name={"R33"} pcbX={-53.5} pcbY={52.225} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R33 />} schX={-10.200000000000001} schY={4.850000000000001} schRotation={180} schSheetName={"Power"}/>

    {/* Q1: CSD18511Q5A */}
    <chip name={"Q1"} pcbX={-20.676053} pcbY={35.801051} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"CSD18511Q5A"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* U3: INA260 */}
    <chip name={"U3"} pcbX={-20.199451} pcbY={48.282651} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} displayName={"INA260"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* C98: 1uF */}
    <capacitor name={"C98"} pcbX={59.6637} pcbY={49.435} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C98 />} schX={-6.199999999999999} schY={5.05} schRotation={-90} schSheetName={"Data"}/>

    {/* R32: 10 */}
    <resistor name={"R32"} pcbX={-34.05} pcbY={38.975} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R32 />} schX={0.5999999999999979} schY={3.5500000000000007} schRotation={0} schSheetName={"Power"}/>

    {/* R24: 0 */}
    <resistor name={"R24"} pcbX={-30.83} pcbY={42.985} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R24 />} schX={3} schY={4.150000000000001} schRotation={0} schSheetName={"Power"}/>

    {/* J21: Conn_01x01 */}
    <chip name={"J21"} pcbX={20.735} pcbY={-9.835} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J21 />} noSchematicRepresentation={true}/>

    {/* C3: 82uF */}
    <capacitor name={"C3"} pcbX={-3.375} pcbY={30.7806} pcbRotation={-90} capacitance={"82uF"} footprint={<Footprint_C3 />} schX={-13.9} schY={4.150000000000001} schRotation={-90} schSheetName={"Power"}/>

    {/* H9: MountingHole */}
    <chip name={"H9"} pcbX={-29.545} pcbY={-25.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H9 />} noSchematicRepresentation={true}/>

    {/* H3: MountingHole */}
    <chip name={"H3"} pcbX={59.525} pcbY={-59.325} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* L2: 3.3uH */}
    <chip name={"L2"} pcbX={48.7937} pcbY={20.65} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"3.3uH"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* R50: 10k */}
    <resistor name={"R50"} pcbX={34.685807} pcbY={53.205} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R50 />} schX={-9.399999999999999} schY={-1.25} schRotation={-90} schSheetName={"Data"}/>

    {/* U6: TMP1075 */}
    <chip name={"U6"} pcbX={-57.045} pcbY={-33.205} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"TMP1075"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* C97: 30pF */}
    <capacitor name={"C97"} pcbX={40.425807} pcbY={38.49} pcbRotation={90} capacitance={"30pF"} footprint={<Footprint_C97 />} schX={-6.799999999999999} schY={-5.15} schRotation={90} schSheetName={"Data"}/>

    {/* R29: 10 */}
    <resistor name={"R29"} pcbX={-25.025} pcbY={43.325} pcbRotation={0} resistance={"10ohm"} footprint={<Footprint_R29 />} schX={1.8000000000000007} schY={0.45000000000000107} schRotation={0} schSheetName={"Power"}/>

    {/* J14: Conn_01x01 */}
    <chip name={"J14"} pcbX={-0.765} pcbY={-9.635} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"Conn_01x01"} footprint={<Footprint_J14 />} noSchematicRepresentation={true}/>

    {/* TP95: TestPoint */}
    <chip name={"TP95"} pcbX={-45.215} pcbY={-12.035} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP95 />} noSchematicRepresentation={true}/>

    {/* C118: 1uF */}
    <capacitor name={"C118"} pcbX={-51.035} pcbY={-14.535} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C118 />} schX={-7.449999999999999} schY={4.5} schRotation={-90} schSheetName={"stack4"}/>

    {/* R129: 33 */}
    <resistor name={"R129"} pcbX={18.075} pcbY={-31.955} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R129 />} schX={6.699999999999999} schY={-2.25} schRotation={-90} schSheetName={"stack7"}/>

    {/* U28: MCP1824T-1202E/OT */}
    <chip name={"U28"} pcbX={-49.655} pcbY={-20.9925} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U28 />} noSchematicRepresentation={true}/>

    {/* C159: 1uF */}
    <capacitor name={"C159"} pcbX={-46.345} pcbY={-21.395} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C159 />} schX={0.6499999999999986} schY={2.7} schRotation={-90} schSheetName={"stack4"}/>

    {/* C215: 1uF */}
    <capacitor name={"C215"} pcbX={-9.2025} pcbY={-44.355} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C215 />} schX={-12.900000000000002} schY={-4.149999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* C275: 1uF */}
    <capacitor name={"C275"} pcbX={27.425} pcbY={-25.315} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C275 />} schX={12.299999999999997} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* TP124: TestPoint */}
    <chip name={"TP124"} pcbX={-3.115} pcbY={-22.375} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP124 />} noSchematicRepresentation={true}/>

    {/* TP104: TestPoint */}
    <chip name={"TP104"} pcbX={-3.015} pcbY={-27.015} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP104 />} noSchematicRepresentation={true}/>

    {/* R97: 33 */}
    <resistor name={"R97"} pcbX={-25.445} pcbY={-18.153} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R97 />} schX={8.05} schY={-0.05000000000000071} schRotation={-90} schSheetName={"stack5"}/>

    {/* R12: 33 */}
    <resistor name={"R12"} pcbX={12.515} pcbY={-42.965} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R12 />} schX={6.099999999999998} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* R115: 33 */}
    <resistor name={"R115"} pcbX={10.135} pcbY={-16.411} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R115 />} schX={8.8} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R15: 33 */}
    <resistor name={"R15"} pcbX={12.515} pcbY={-45.845} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R15 />} schX={7.899999999999999} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* U52: MCP1824T-0802E */}
    <chip name={"U52"} pcbX={-11.465} pcbY={-31.185} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U52 />} noSchematicRepresentation={true}/>

    {/* C242: 1uF */}
    <capacitor name={"C242"} pcbX={6.885} pcbY={-39.025} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C242 />} schX={12} schY={-4.25} schRotation={-90} schSheetName={"stack6"}/>

    {/* R68: 1k */}
    <resistor name={"R68"} pcbX={17.35} pcbY={-43.675} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R68 />} schX={10.199999999999996} schY={3.749999999999999} schRotation={-90} schSheetName={"stack7"}/>

    {/* C236: 0.1uF */}
    <capacitor name={"C236"} pcbX={5.855} pcbY={-39.025} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C236 />} schX={11.199999999999996} schY={-4.25} schRotation={-90} schSheetName={"stack6"}/>

    {/* C191: 1uF */}
    <capacitor name={"C191"} pcbX={-32.0825} pcbY={-20.285} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C191 />} schX={-5.550000000000001} schY={-4.150000000000002} schRotation={-90} schSheetName={"stack5"}/>

    {/* R119: 33 */}
    <resistor name={"R119"} pcbX={10.135} pcbY={-14.395} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R119 />} schX={10.199999999999996} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* C257: 1uF */}
    <capacitor name={"C257"} pcbX={37.4225} pcbY={-14.6275} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C257 />} schX={-5.100000000000001} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* U68: MCP1824T-1202E/OT */}
    <chip name={"U68"} pcbX={35.155} pcbY={-20.6875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U68 />} noSchematicRepresentation={true}/>

    {/* R117: 33 */}
    <resistor name={"R117"} pcbX={10.135} pcbY={-15.403} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R117 />} schX={9.5} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* C240: 1uF */}
    <capacitor name={"C240"} pcbX={7.199} pcbY={-12.039} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C240 />} schX={12} schY={4.8500000000000005} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP10: TestPoint */}
    <chip name={"TP10"} pcbX={60.035} pcbY={1.945} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* C183: 1uF */}
    <capacitor name={"C183"} pcbX={-29.985} pcbY={-46.135} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C183 />} schX={-10.350000000000001} schY={4.949999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* R89: 33 */}
    <resistor name={"R89"} pcbX={-11.615} pcbY={-47.591} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R89 />} schX={-2.3500000000000014} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C196: 1uF */}
    <capacitor name={"C196"} pcbX={-23.995} pcbY={-30.015} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C196 />} schX={3.75} schY={-1.2500000000000018} schRotation={-90} schSheetName={"stack5"}/>

    {/* C218: 1uF */}
    <capacitor name={"C218"} pcbX={-9.1825} pcbY={-46.655} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C218 />} schX={-10.200000000000001} schY={-4.149999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* C228: 1uF */}
    <capacitor name={"C228"} pcbX={12.7675} pcbY={-19.41} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C228 />} schX={5.199999999999999} schY={3.1500000000000004} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP100: TestPoint */}
    <chip name={"TP100"} pcbX={-30.305} pcbY={-48.115} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP100 />} noSchematicRepresentation={true}/>

    {/* U70: MCP1824T-0802E */}
    <chip name={"U70"} pcbX={35.195} pcbY={-29.6775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U70 />} noSchematicRepresentation={true}/>

    {/* R135: 33 */}
    <resistor name={"R135"} pcbX={47.375} pcbY={-21.725} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R135 />} schX={-2.400000000000002} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* C120: 1uF */}
    <capacitor name={"C120"} pcbX={-51.085} pcbY={-41.545} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C120 />} schX={-7.449999999999999} schY={-4.600000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* R64: 1k */}
    <resistor name={"R64"} pcbX={-54.225} pcbY={-19.9} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R64 />} schX={-1.3499999999999996} schY={5.499999999999999} schRotation={-90} schSheetName={"stack4"}/>

    {/* C258: 1uF */}
    <capacitor name={"C258"} pcbX={31.645} pcbY={-44.675} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C258 />} schX={1.1999999999999993} schY={0.9499999999999993} schRotation={-90} schSheetName={"stack7"}/>

    {/* U42: MCP1824T-0802E */}
    <chip name={"U42"} pcbX={-48.985} pcbY={-29.6175} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U42 />} noSchematicRepresentation={true}/>

    {/* U48: MCP1824T-1202E/OT */}
    <chip name={"U48"} pcbX={-27.6775} pcbY={-44.9725} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U48 />} noSchematicRepresentation={true}/>

    {/* TP146: TestPoint */}
    <chip name={"TP146"} pcbX={39.05} pcbY={-28.025} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP146 />} noSchematicRepresentation={true}/>

    {/* R133: 33 */}
    <resistor name={"R133"} pcbX={18.075} pcbY={-35.987} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R133 />} schX={9.499999999999996} schY={-2.25} schRotation={-90} schSheetName={"stack7"}/>

    {/* R17: 2k */}
    <resistor name={"R17"} pcbX={16.625} pcbY={-46.8} pcbRotation={0} resistance={"2kohm"} footprint={<Footprint_R17 />} schX={9.099999999999998} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* R88: 33 */}
    <resistor name={"R88"} pcbX={-11.615} pcbY={-48.609} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R88 />} schX={-2.950000000000001} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C112: 1uF */}
    <capacitor name={"C112"} pcbX={-51.3275} pcbY={-33.575} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C112 />} schX={-12.25} schY={-0.09999999999999964} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP55: TestPoint */}
    <chip name={"TP55"} pcbX={-52.895} pcbY={-31.215} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP55 />} noSchematicRepresentation={true}/>

    {/* C263: 1uF */}
    <capacitor name={"C263"} pcbX={31.045} pcbY={-15.725} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C263 />} schX={1.7999999999999972} schY={-7.85} schRotation={-90} schSheetName={"stack7"}/>

    {/* C176: 1uF */}
    <capacitor name={"C176"} pcbX={-36.035} pcbY={-39.005} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C176 />} schX={11.350000000000001} schY={-4.700000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* R58: 33 */}
    <resistor name={"R58"} pcbX={-49.987} pcbY={-38.705} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R58 />} schX={-2.0500000000000007} schY={-0.5000000000000018} schRotation={-90} schSheetName={"stack4"}/>

    {/* C192: 1uF */}
    <capacitor name={"C192"} pcbX={-24.065} pcbY={-42.745} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C192 />} schX={4.349999999999998} schY={3.1499999999999986} schRotation={-90} schSheetName={"stack5"}/>

    {/* C174: 1uF */}
    <capacitor name={"C174"} pcbX={-36.845} pcbY={-12.145} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C174 />} schX={11.350000000000001} schY={4.399999999999999} schRotation={-90} schSheetName={"stack4"}/>

    {/* R136: 33 */}
    <resistor name={"R136"} pcbX={47.375} pcbY={-20.425} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R136 />} schX={-1.1000000000000032} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* C181: 1uF */}
    <capacitor name={"C181"} pcbX={-30.285} pcbY={-30.02} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C181 />} schX={-13.05} schY={0.34999999999999787} schRotation={-90} schSheetName={"stack5"}/>

    {/* C248: 1uF */}
    <capacitor name={"C248"} pcbX={37.4625} pcbY={-21.8275} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C248 />} schX={-12.600000000000001} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* C261: 1uF */}
    <capacitor name={"C261"} pcbX={30.595} pcbY={-44.675} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C261 />} schX={1.7999999999999972} schY={0.9499999999999993} schRotation={-90} schSheetName={"stack7"}/>

    {/* C246: 1uF */}
    <capacitor name={"C246"} pcbX={37.5425} pcbY={-49.4475} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C246 />} schX={-12.600000000000001} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* R120: 33 */}
    <resistor name={"R120"} pcbX={-12.025} pcbY={-18.045} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R120 />} schX={-2.200000000000001} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R63: 33 */}
    <resistor name={"R63"} pcbX={-33.175} pcbY={-30.085} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R63 />} schX={6.149999999999999} schY={3.8999999999999995} schRotation={-90} schSheetName={"stack4"}/>

    {/* R83: 33 */}
    <resistor name={"R83"} pcbX={-33.175} pcbY={-34.109} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R83 />} schX={8.55} schY={3.8999999999999995} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP51: TestPoint */}
    <chip name={"TP51"} pcbX={-53.825} pcbY={-22.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP51 />} noSchematicRepresentation={true}/>

    {/* C227: 1uF */}
    <capacitor name={"C227"} pcbX={-3.875} pcbY={-50.315} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C227 />} schX={1.2999999999999972} schY={-5.649999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* U67: MCP1824T-1202E/OT */}
    <chip name={"U67"} pcbX={35.195} pcbY={-34.5775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U67 />} noSchematicRepresentation={true}/>

    {/* U50: MCP1824T-1202E/OT */}
    <chip name={"U50"} pcbX={-27.555} pcbY={-13.2975} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U50 />} noSchematicRepresentation={true}/>

    {/* C201: 0.1uF */}
    <capacitor name={"C201"} pcbX={-14.137} pcbY={-52.115} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C201 />} schX={11.349999999999998} schY={4.849999999999999} schRotation={-90} schSheetName={"stack5"}/>

    {/* C224: 1uF */}
    <capacitor name={"C224"} pcbX={-9.2025} pcbY={-51.465} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C224 />} schX={-5.400000000000002} schY={-4.149999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP54: TestPoint */}
    <chip name={"TP54"} pcbX={-52.999} pcbY={-17.145} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP54 />} noSchematicRepresentation={true}/>

    {/* R122: 2k */}
    <resistor name={"R122"} pcbX={-9.655} pcbY={-20.345} pcbRotation={90} resistance={"2kohm"} footprint={<Footprint_R122 />} schX={-2.900000000000002} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* C177: 100uF */}
    <capacitor name={"C177"} pcbX={-34.035} pcbY={-12.145} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C177 />} schX={12.25} schY={4.399999999999999} schRotation={-90} schSheetName={"stack4"}/>

    {/* R125: 33 */}
    <resistor name={"R125"} pcbX={35.447} pcbY={-38.925} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R125 />} schX={-1.8000000000000007} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* U58: MCP1824T-1202E/OT */}
    <chip name={"U58"} pcbX={-4.175} pcbY={-30.9625} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U58 />} noSchematicRepresentation={true}/>

    {/* TP7: TestPoint */}
    <chip name={"TP7"} pcbX={49.735} pcbY={-20.475} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* C212: 100uF */}
    <capacitor name={"C212"} pcbX={-12.495} pcbY={-25.385} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C212 />} schX={13.05} schY={-4.25} schRotation={-90} schSheetName={"stack5"}/>

    {/* R131: 33 */}
    <resistor name={"R131"} pcbX={18.075} pcbY={-33.971} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R131 />} schX={8.100000000000001} schY={-2.25} schRotation={-90} schSheetName={"stack7"}/>

    {/* TP53: TestPoint */}
    <chip name={"TP53"} pcbX={-53.175} pcbY={-50.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP53 />} noSchematicRepresentation={true}/>

    {/* R67: 1k */}
    <resistor name={"R67"} pcbX={-11.475} pcbY={-16.25} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R67 />} schX={-2.600000000000003} schY={5.950000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R104: 2k */}
    <resistor name={"R104"} pcbX={-33.125} pcbY={-48.95} pcbRotation={-90} resistance={"2kohm"} footprint={<Footprint_R104 />} schX={8.749999999999996} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* U32: MCP1824T-0802E */}
    <chip name={"U32"} pcbX={-48.565} pcbY={-15.6925} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U32 />} noSchematicRepresentation={true}/>

    {/* C113: 1uF */}
    <capacitor name={"C113"} pcbX={-51.445} pcbY={-47.325} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C113 />} schX={-12.25} schY={-4.600000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP123: TestPoint */}
    <chip name={"TP123"} pcbX={-1.725} pcbY={-52.995} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP123 />} noSchematicRepresentation={true}/>

    {/* C189: 1uF */}
    <capacitor name={"C189"} pcbX={-27.4925} pcbY={-50.98} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C189 />} schX={-5.550000000000001} schY={4.949999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C234: 0.1uF */}
    <capacitor name={"C234"} pcbX={6.114} pcbY={-12.039} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C234 />} schX={11.199999999999996} schY={4.8500000000000005} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP143: TestPoint */}
    <chip name={"TP143"} pcbX={39.095} pcbY={-32.855} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP143 />} noSchematicRepresentation={true}/>

    {/* C223: 1uF */}
    <capacitor name={"C223"} pcbX={13.123749} pcbY={-29.868749} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C223 />} schX={-5.400000000000002} schY={0.3500000000000014} schRotation={-90} schSheetName={"stack6"}/>

    {/* C185: 1uF */}
    <capacitor name={"C185"} pcbX={-29.8425} pcbY={-14.44} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C185 />} schX={-10.350000000000001} schY={-4.150000000000002} schRotation={-90} schSheetName={"stack5"}/>

    {/* C251: 1uF */}
    <capacitor name={"C251"} pcbX={37.4425} pcbY={-19.5575} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C251 />} schX={-9.900000000000002} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* U57: MCP1824T-1202E/OT */}
    <chip name={"U57"} pcbX={15.3275} pcbY={-18.2375} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U57 />} noSchematicRepresentation={true}/>

    {/* R123: 2k */}
    <resistor name={"R123"} pcbX={31.6} pcbY={-32.4} pcbRotation={180} resistance={"2kohm"} footprint={<Footprint_R123 />} schX={-2.400000000000002} schY={-2.7500000000000018} schRotation={-90} schSheetName={"stack7"}/>

    {/* C278: 100uF */}
    <capacitor name={"C278"} pcbX={30.475} pcbY={-25.365} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C278 />} schX={13.2} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* TP12: TestPoint */}
    <chip name={"TP12"} pcbX={58.025} pcbY={55.975} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* R126: 33 */}
    <resistor name={"R126"} pcbX={34.443} pcbY={-38.925} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R126 />} schX={-1.1000000000000032} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* R108: 33 */}
    <resistor name={"R108"} pcbX={-3.335} pcbY={-45.153} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R108 />} schX={-0.8000000000000007} schY={-0.049999999999998934} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP5: TestPoint */}
    <chip name={"TP5"} pcbX={60.035} pcbY={-4.145} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* C229: 1uF */}
    <capacitor name={"C229"} pcbX={-2.965} pcbY={-34.895} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C229 />} schX={1.8999999999999986} schY={-1.25} schRotation={-90} schSheetName={"stack6"}/>

    {/* R121: 2k */}
    <resistor name={"R121"} pcbX={10.145} pcbY={-28.325} pcbRotation={0} resistance={"2kohm"} footprint={<Footprint_R121 />} schX={6.899999999999999} schY={2.5500000000000016} schRotation={-90} schSheetName={"stack6"}/>

    {/* C157: 1uF */}
    <capacitor name={"C157"} pcbX={-51.075} pcbY={-43.8} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C157 />} schX={-4.75} schY={-4.600000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP52: TestPoint */}
    <chip name={"TP52"} pcbX={-52.925} pcbY={-36.365} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP52 />} noSchematicRepresentation={true}/>

    {/* TP103: TestPoint */}
    <chip name={"TP103"} pcbX={-30.1} pcbY={-50.375} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP103 />} noSchematicRepresentation={true}/>

    {/* R85: 2k */}
    <resistor name={"R85"} pcbX={-33.975} pcbY={-27.05} pcbRotation={90} resistance={"2kohm"} footprint={<Footprint_R85 />} schX={5.549999999999997} schY={1.799999999999999} schRotation={-90} schSheetName={"stack4"}/>

    {/* R79: 33 */}
    <resistor name={"R79"} pcbX={-33.175} pcbY={-33.103} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R79 />} schX={7.949999999999999} schY={3.8999999999999995} schRotation={-90} schSheetName={"stack4"}/>

    {/* C219: 1uF */}
    <capacitor name={"C219"} pcbX={-8.495} pcbY={-17.035} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C219 />} schX={-8.100000000000001} schY={4.95} schRotation={-90} schSheetName={"stack6"}/>

    {/* C116: 1uF */}
    <capacitor name={"C116"} pcbX={-51.3075} pcbY={-35.815} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C116 />} schX={-9.55} schY={-0.09999999999999964} schRotation={-90} schSheetName={"stack4"}/>

    {/* C188: 1uF */}
    <capacitor name={"C188"} pcbX={-32.0725} pcbY={-18.005} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C188 />} schX={-8.25} schY={-4.150000000000002} schRotation={-90} schSheetName={"stack5"}/>

    {/* C170: 0.1uF */}
    <capacitor name={"C170"} pcbX={-37.08} pcbY={-39.005} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C170 />} schX={10.549999999999997} schY={-4.700000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* R90: 33 */}
    <resistor name={"R90"} pcbX={-11.615} pcbY={-46.573} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R90 />} schX={-1.7500000000000018} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* U51: MCP1824T-0802E */}
    <chip name={"U51"} pcbX={-25.175} pcbY={-49.8725} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U51 />} noSchematicRepresentation={true}/>

    {/* R127: 33 */}
    <resistor name={"R127"} pcbX={33.439} pcbY={-38.925} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R127 />} schX={-0.40000000000000213} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* R18: 10k */}
    <resistor name={"R18"} pcbX={31.205} pcbY={-19.295} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R18 />} schX={-1.700000000000001} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* C184: 1uF */}
    <capacitor name={"C184"} pcbX={-30.285} pcbY={-32.28} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C184 />} schX={-10.350000000000001} schY={0.34999999999999787} schRotation={-90} schSheetName={"stack5"}/>

    {/* C187: 1uF */}
    <capacitor name={"C187"} pcbX={-9.195} pcbY={-32.3275} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C187 />} schX={-8.25} schY={0.34999999999999787} schRotation={-90} schSheetName={"stack5"}/>

    {/* C208: 1uF */}
    <capacitor name={"C208"} pcbX={-15.595} pcbY={-38.975} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C208 />} schX={12.149999999999999} schY={1.049999999999999} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP9: TestPoint */}
    <chip name={"TP9"} pcbX={49.755} pcbY={-17.905} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* R59: 33 */}
    <resistor name={"R59"} pcbX={-48.983} pcbY={-38.705} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R59 />} schX={-1.4499999999999993} schY={-0.5000000000000018} schRotation={-90} schSheetName={"stack4"}/>

    {/* R128: 33 */}
    <resistor name={"R128"} pcbX={32.435} pcbY={-38.925} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R128 />} schX={0.29999999999999716} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* U66: MCP1824T-1202E/OT */}
    <chip name={"U66"} pcbX={35.195} pcbY={-48.2875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U66 />} noSchematicRepresentation={true}/>

    {/* U62: MCP1824T-0802E */}
    <chip name={"U62"} pcbX={-6.875} pcbY={-50.3275} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U62 />} noSchematicRepresentation={true}/>

    {/* C207: 1uF */}
    <capacitor name={"C207"} pcbX={-15.207} pcbY={-52.115} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C207 />} schX={12.149999999999999} schY={4.849999999999999} schRotation={-90} schSheetName={"stack5"}/>

    {/* C220: 1uF */}
    <capacitor name={"C220"} pcbX={13.143749} pcbY={-32.148749} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C220 />} schX={-8.100000000000001} schY={0.3500000000000014} schRotation={-90} schSheetName={"stack6"}/>

    {/* R113: 33 */}
    <resistor name={"R113"} pcbX={10.135} pcbY={-17.419} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R113 />} schX={8.2} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* C164: 1uF */}
    <capacitor name={"C164"} pcbX={-45.575} pcbY={-49.6} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C164 />} schX={1.25} schY={-6.100000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* C195: 1uF */}
    <capacitor name={"C195"} pcbX={-25.175} pcbY={-42.745} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C195 />} schX={3.75} schY={3.1499999999999986} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP101: TestPoint */}
    <chip name={"TP101"} pcbX={-25.005} pcbY={-33.205} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP101 />} noSchematicRepresentation={true}/>

    {/* U59: MCP1824T-1202E/OT */}
    <chip name={"U59"} pcbX={-6.875} pcbY={-45.5225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U59 />} noSchematicRepresentation={true}/>

    {/* C197: 1uF */}
    <capacitor name={"C197"} pcbX={-23.875} pcbY={-12.065} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C197 />} schX={3.75} schY={-5.650000000000002} schRotation={-90} schSheetName={"stack5"}/>

    {/* C194: 1uF */}
    <capacitor name={"C194"} pcbX={-24.865} pcbY={-12.065} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C194 />} schX={4.349999999999998} schY={-5.650000000000002} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP97: TestPoint */}
    <chip name={"TP97"} pcbX={-45.715} pcbY={-16.745} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP97 />} noSchematicRepresentation={true}/>

    {/* C268: 0.1uF */}
    <capacitor name={"C268"} pcbX={28.545} pcbY={-39.155} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C268 />} schX={11.5} schY={-1.6500000000000004} schRotation={-90} schSheetName={"stack7"}/>

    {/* R75: 33 */}
    <resistor name={"R75"} pcbX={-33.175} pcbY={-32.097} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R75 />} schX={7.349999999999998} schY={3.8999999999999995} schRotation={-90} schSheetName={"stack4"}/>

    {/* R130: 33 */}
    <resistor name={"R130"} pcbX={18.075} pcbY={-32.963} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R130 />} schX={7.399999999999995} schY={-2.25} schRotation={-90} schSheetName={"stack7"}/>

    {/* U30: MCP1824T-1202E/OT */}
    <chip name={"U30"} pcbX={-49.135} pcbY={-48.4675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U30 />} noSchematicRepresentation={true}/>

    {/* U60: MCP1824T-0802E */}
    <chip name={"U60"} pcbX={-6.1775} pcbY={-18.1775} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U60 />} noSchematicRepresentation={true}/>

    {/* R99: 33 */}
    <resistor name={"R99"} pcbX={-25.445} pcbY={-17.139} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R99 />} schX={8.649999999999999} schY={-0.05000000000000071} schRotation={-90} schSheetName={"stack5"}/>

    {/* C221: 1uF */}
    <capacitor name={"C221"} pcbX={-9.1825} pcbY={-49.165} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C221 />} schX={-8.100000000000001} schY={-4.149999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* R114: 33 */}
    <resistor name={"R114"} pcbX={-12.025} pcbY={-21.065} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R114 />} schX={-0.1000000000000032} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP121: TestPoint */}
    <chip name={"TP121"} pcbX={17.725} pcbY={-15.015} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP121 />} noSchematicRepresentation={true}/>

    {/* R16: 33 */}
    <resistor name={"R16"} pcbX={12.515} pcbY={-46.805} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R16 />} schX={8.5} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* R112: 33 */}
    <resistor name={"R112"} pcbX={-12.025} pcbY={-22.075} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R112 />} schX={0.5999999999999979} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R91: 33 */}
    <resistor name={"R91"} pcbX={-11.615} pcbY={-45.555} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R91 />} schX={-1.1500000000000021} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* R65: 33 */}
    <resistor name={"R65"} pcbX={-33.175} pcbY={-31.091} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R65 />} schX={6.75} schY={3.8999999999999995} schRotation={-90} schSheetName={"stack4"}/>

    {/* R118: 33 */}
    <resistor name={"R118"} pcbX={-12.025} pcbY={-19.045} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R118 />} schX={-1.5000000000000018} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R103: 2k */}
    <resistor name={"R103"} pcbX={-25.225} pcbY={-22.7} pcbRotation={0} resistance={"2kohm"} footprint={<Footprint_R103 />} schX={6.25} schY={-2.0500000000000007} schRotation={-90} schSheetName={"stack5"}/>

    {/* C202: 0.1uF */}
    <capacitor name={"C202"} pcbX={-14.505} pcbY={-38.975} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C202 />} schX={11.349999999999998} schY={1.049999999999999} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP122: TestPoint */}
    <chip name={"TP122"} pcbX={-5.465} pcbY={-34.455} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP122 />} noSchematicRepresentation={true}/>

    {/* TP1: TestPoint */}
    <chip name={"TP1"} pcbX={31.925} pcbY={47.675} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* LOGO1: 256 Foundation Logo */}
    <chip name={"LOGO1"} pcbX={-16.735} pcbY={0.735} pcbRotation={180} pinLabels={{}} displayName={"256 Foundation Logo"} footprint={<Footprint_LOGO1 />} noSchematicRepresentation={true}/>

    {/* C213: 1uF */}
    <capacitor name={"C213"} pcbX={17.645} pcbY={-19.375} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C213 />} schX={-12.900000000000002} schY={4.95} schRotation={-90} schSheetName={"stack6"}/>

    {/* C244: 100uF */}
    <capacitor name={"C244"} pcbX={9.105} pcbY={-25.375} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C244 />} schX={12.899999999999999} schY={1.0500000000000007} schRotation={-90} schSheetName={"stack6"}/>

    {/* C186: 1uF */}
    <capacitor name={"C186"} pcbX={-27.4825} pcbY={-48.72} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C186 />} schX={-8.25} schY={4.949999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C190: 1uF */}
    <capacitor name={"C190"} pcbX={-9.195} pcbY={-30.0575} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C190 />} schX={-5.550000000000001} schY={0.34999999999999787} schRotation={-90} schSheetName={"stack5"}/>

    {/* R138: 33 */}
    <resistor name={"R138"} pcbX={47.375} pcbY={-19.075} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R138 />} schX={0.29999999999999716} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* R60: 33 */}
    <resistor name={"R60"} pcbX={-47.979} pcbY={-38.705} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R60 />} schX={-0.8499999999999996} schY={-0.5000000000000018} schRotation={-90} schSheetName={"stack4"}/>

    {/* C241: 1uF */}
    <capacitor name={"C241"} pcbX={6.225} pcbY={-25.345} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C241 />} schX={12} schY={1.0500000000000007} schRotation={-90} schSheetName={"stack6"}/>

    {/* C225: 1uF */}
    <capacitor name={"C225"} pcbX={-3.065} pcbY={-19.525} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C225 />} schX={1.2999999999999972} schY={3.1500000000000004} schRotation={-90} schSheetName={"stack6"}/>

    {/* C209: 1uF */}
    <capacitor name={"C209"} pcbX={-15.595} pcbY={-25.255} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C209 />} schX={12.149999999999999} schY={-4.25} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP102: TestPoint */}
    <chip name={"TP102"} pcbX={-31.435} pcbY={-14.915} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP102 />} noSchematicRepresentation={true}/>

    {/* U43: MCP1824T-0802E */}
    <chip name={"U43"} pcbX={-48.775} pcbY={-42.6775} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U43 />} noSchematicRepresentation={true}/>

    {/* C23: 0.1uF */}
    <capacitor name={"C23"} pcbX={42.34341} pcbY={-26.99159} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C23 />} schX={-4.400000000000002} schY={7.349999999999999} schRotation={0} schSheetName={"stack7"}/>

    {/* TP142: TestPoint */}
    <chip name={"TP142"} pcbX={39.155} pcbY={-46.655} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP142 />} noSchematicRepresentation={true}/>

    {/* C249: 1uF */}
    <capacitor name={"C249"} pcbX={37.5225} pcbY={-47.1775} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C249 />} schX={-9.900000000000002} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* C161: 1uF */}
    <capacitor name={"C161"} pcbX={-46.655} pcbY={-49.6} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C161 />} schX={0.6499999999999986} schY={-6.100000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP2: TestPoint */}
    <chip name={"TP2"} pcbX={36.945} pcbY={40.395} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* C255: 1uF */}
    <capacitor name={"C255"} pcbX={37.5425} pcbY={-42.2575} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C255 />} schX={-5.100000000000001} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* U5: 25MHz */}
    <chip name={"U5"} pcbX={42.355} pcbY={-24.585} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"25MHz"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* R92: 33 */}
    <resistor name={"R92"} pcbX={-11.615} pcbY={-44.537} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R92 />} schX={-0.5500000000000007} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C235: 0.1uF */}
    <capacitor name={"C235"} pcbX={7.255} pcbY={-25.355} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C235 />} schX={11.199999999999996} schY={1.0500000000000007} schRotation={-90} schSheetName={"stack6"}/>

    {/* C269: 0.1uF */}
    <capacitor name={"C269"} pcbX={28.53} pcbY={-25.315} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C269 />} schX={11.5} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* TP98: TestPoint */}
    <chip name={"TP98"} pcbX={-45.735} pcbY={-18.815} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP98 />} noSchematicRepresentation={true}/>

    {/* R101: 33 */}
    <resistor name={"R101"} pcbX={-25.445} pcbY={-16.125} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R101 />} schX={9.25} schY={-0.05000000000000071} schRotation={-90} schSheetName={"stack5"}/>

    {/* R98: 33 */}
    <resistor name={"R98"} pcbX={-33.595} pcbY={-43.619} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R98 />} schX={6.75} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C180: 1uF */}
    <capacitor name={"C180"} pcbX={-29.985} pcbY={-43.835} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C180 />} schX={-13.05} schY={4.949999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP3: TestPoint */}
    <chip name={"TP3"} pcbX={36.225} pcbY={46.275} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* C250: 1uF */}
    <capacitor name={"C250"} pcbX={37.525} pcbY={-33.4875} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C250 />} schX={-9.900000000000002} schY={-1.8500000000000014} schRotation={-90} schSheetName={"stack7"}/>

    {/* TP147: TestPoint */}
    <chip name={"TP147"} pcbX={39.15} pcbY={-14.175} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP147 />} noSchematicRepresentation={true}/>

    {/* U61: MCP1824T-0802E */}
    <chip name={"U61"} pcbX={10.833749} pcbY={-31.016249} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U61 />} noSchematicRepresentation={true}/>

    {/* C276: 100uF */}
    <capacitor name={"C276"} pcbX={30.837} pcbY={-52.628} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C276 />} schX={13.2} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* C253: 1uF */}
    <capacitor name={"C253"} pcbX={37.505} pcbY={-30.7975} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C253 />} schX={-7.800000000000001} schY={-1.8500000000000014} schRotation={-90} schSheetName={"stack7"}/>

    {/* R57: 33 */}
    <resistor name={"R57"} pcbX={-50.991} pcbY={-38.705} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R57 />} schX={-2.6500000000000004} schY={-0.5000000000000018} schRotation={-90} schSheetName={"stack4"}/>

    {/* R106: 33 */}
    <resistor name={"R106"} pcbX={-3.335} pcbY={-47.157} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R106 />} schX={-2.200000000000001} schY={-0.049999999999998934} schRotation={-90} schSheetName={"stack6"}/>

    {/* R96: 33 */}
    <resistor name={"R96"} pcbX={-33.595} pcbY={-42.617} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R96 />} schX={6.149999999999999} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C111: 1uF */}
    <capacitor name={"C111"} pcbX={-52.035} pcbY={-19.9} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C111 />} schX={-12.25} schY={4.5} schRotation={-90} schSheetName={"stack4"}/>

    {/* C163: 1uF */}
    <capacitor name={"C163"} pcbX={-45.545} pcbY={-35.245} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C163 />} schX={1.25} schY={-1.6999999999999993} schRotation={-90} schSheetName={"stack4"}/>

    {/* C175: 1uF */}
    <capacitor name={"C175"} pcbX={-36.335} pcbY={-25.295} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C175 />} schX={11.350000000000001} schY={0.5999999999999979} schRotation={-90} schSheetName={"stack4"}/>

    {/* C119: 1uF */}
    <capacitor name={"C119"} pcbX={-51.265} pcbY={-28.475} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C119 />} schX={-7.449999999999999} schY={-0.09999999999999964} schRotation={-90} schSheetName={"stack4"}/>

    {/* C211: 100uF */}
    <capacitor name={"C211"} pcbX={-12.485} pcbY={-39.26} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C211 />} schX={13.05} schY={1.049999999999999} schRotation={-90} schSheetName={"stack5"}/>

    {/* C168: 0.1uF */}
    <capacitor name={"C168"} pcbX={-35.785} pcbY={-12.145} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C168 />} schX={10.549999999999997} schY={4.399999999999999} schRotation={-90} schSheetName={"stack4"}/>

    {/* C259: 1uF */}
    <capacitor name={"C259"} pcbX={31.05} pcbY={-30.65} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C259 />} schX={1.1999999999999993} schY={-3.450000000000001} schRotation={-90} schSheetName={"stack7"}/>

    {/* C117: 1uF */}
    <capacitor name={"C117"} pcbX={-51.435} pcbY={-49.615} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C117 />} schX={-9.55} schY={-4.600000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP99: TestPoint */}
    <chip name={"TP99"} pcbX={-52.965} pcbY={-14.895} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP99 />} noSchematicRepresentation={true}/>

    {/* TP126: TestPoint */}
    <chip name={"TP126"} pcbX={-4.105} pcbY={-53.045} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP126 />} noSchematicRepresentation={true}/>

    {/* C273: 1uF */}
    <capacitor name={"C273"} pcbX={28.027} pcbY={-52.623} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C273 />} schX={12.299999999999997} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* R124: 33 */}
    <resistor name={"R124"} pcbX={36.451} pcbY={-38.925} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R124 />} schX={-2.400000000000002} schY={-1.0500000000000025} schRotation={-90} schSheetName={"stack7"}/>

    {/* R110: 33 */}
    <resistor name={"R110"} pcbX={-3.335} pcbY={-43.149} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R110 />} schX={0.5999999999999979} schY={-0.049999999999998934} schRotation={-90} schSheetName={"stack6"}/>

    {/* C115: 1uF */}
    <capacitor name={"C115"} pcbX={-52.045} pcbY={-22.15} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C115 />} schX={-9.55} schY={4.5} schRotation={-90} schSheetName={"stack4"}/>

    {/* C262: 1uF */}
    <capacitor name={"C262"} pcbX={32.105} pcbY={-30.65} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C262 />} schX={1.7999999999999972} schY={-3.450000000000001} schRotation={-90} schSheetName={"stack7"}/>

    {/* R62: 33 */}
    <resistor name={"R62"} pcbX={-46.975} pcbY={-38.705} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R62 />} schX={-0.25} schY={-0.5000000000000018} schRotation={-90} schSheetName={"stack4"}/>

    {/* R13: 33 */}
    <resistor name={"R13"} pcbX={12.515} pcbY={-43.925} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R13 />} schX={6.699999999999999} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* C210: 100uF */}
    <capacitor name={"C210"} pcbX={-12.347} pcbY={-53.451} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C210 />} schX={13.05} schY={4.849999999999999} schRotation={-90} schSheetName={"stack5"}/>

    {/* U69: MCP1824T-0802E */}
    <chip name={"U69"} pcbX={35.195} pcbY={-43.3875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U69 />} noSchematicRepresentation={true}/>

    {/* TP8: TestPoint */}
    <chip name={"TP8"} pcbX={39.675} pcbY={-21.875} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP6: TestPoint */}
    <chip name={"TP6"} pcbX={49.725} pcbY={-23.075} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* R14: 33 */}
    <resistor name={"R14"} pcbX={12.515} pcbY={-44.885} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R14 />} schX={7.299999999999997} schY={2.1499999999999986} schRotation={-90} schSheetName={"stack7"}/>

    {/* C179: 100uF */}
    <capacitor name={"C179"} pcbX={-34.155} pcbY={-38.645} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C179 />} schX={12.25} schY={-4.700000000000001} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP56: TestPoint */}
    <chip name={"TP56"} pcbX={-52.975} pcbY={-44.295} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP56 />} noSchematicRepresentation={true}/>

    {/* C277: 100uF */}
    <capacitor name={"C277"} pcbX={30.475} pcbY={-39.135} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C277 />} schX={13.2} schY={-1.6500000000000004} schRotation={-90} schSheetName={"stack7"}/>

    {/* C162: 1uF */}
    <capacitor name={"C162"} pcbX={-45.345} pcbY={-21.395} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C162 />} schX={1.25} schY={2.7} schRotation={-90} schSheetName={"stack4"}/>

    {/* C267: 0.1uF */}
    <capacitor name={"C267"} pcbX={29.097} pcbY={-52.628} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C267 />} schX={11.5} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* C214: 1uF */}
    <capacitor name={"C214"} pcbX={-6.485} pcbY={-29.815} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C214 />} schX={-12.900000000000002} schY={0.3500000000000014} schRotation={-90} schSheetName={"stack6"}/>

    {/* C254: 1uF */}
    <capacitor name={"C254"} pcbX={37.4425} pcbY={-16.9275} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C254 />} schX={-7.800000000000001} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* C247: 1uF */}
    <capacitor name={"C247"} pcbX={37.525} pcbY={-35.7075} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C247 />} schX={-12.600000000000001} schY={-1.8500000000000014} schRotation={-90} schSheetName={"stack7"}/>

    {/* C122: 1uF */}
    <capacitor name={"C122"} pcbX={-51.035} pcbY={-16.795} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C122 />} schX={-4.75} schY={4.5} schRotation={-90} schSheetName={"stack4"}/>

    {/* R137: 33 */}
    <resistor name={"R137"} pcbX={41.175} pcbY={-21.325} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R137 />} schX={-0.40000000000000213} schY={-6.350000000000003} schRotation={-90} schSheetName={"stack7"}/>

    {/* U71: MCP1824T-0802E */}
    <chip name={"U71"} pcbX={35.155} pcbY={-15.7875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U71 />} noSchematicRepresentation={true}/>

    {/* C243: 100uF */}
    <capacitor name={"C243"} pcbX={9.049} pcbY={-10.987} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C243 />} schX={12.899999999999999} schY={4.8500000000000005} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP105: TestPoint */}
    <chip name={"TP105"} pcbX={-33.635} pcbY={-20.795} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP105 />} noSchematicRepresentation={true}/>

    {/* R100: 33 */}
    <resistor name={"R100"} pcbX={-33.595} pcbY={-44.621} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R100 />} schX={7.350000000000001} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C160: 1uF */}
    <capacitor name={"C160"} pcbX={-46.575} pcbY={-34.595} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C160 />} schX={0.6499999999999986} schY={-1.6999999999999993} schRotation={-90} schSheetName={"stack4"}/>

    {/* C216: 1uF */}
    <capacitor name={"C216"} pcbX={17.645} pcbY={-17.095} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C216 />} schX={-10.200000000000001} schY={4.95} schRotation={-90} schSheetName={"stack6"}/>

    {/* R132: 33 */}
    <resistor name={"R132"} pcbX={18.075} pcbY={-34.979} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R132 />} schX={8.799999999999997} schY={-2.25} schRotation={-90} schSheetName={"stack7"}/>

    {/* TP108: TestPoint */}
    <chip name={"TP108"} pcbX={16.05} pcbY={-45.225} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP108 />} noSchematicRepresentation={true}/>

    {/* C226: 1uF */}
    <capacitor name={"C226"} pcbX={9.475} pcbY={-34.025} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C226 />} schX={5.799999999999997} schY={-1.25} schRotation={-90} schSheetName={"stack6"}/>

    {/* C217: 1uF */}
    <capacitor name={"C217"} pcbX={-6.485} pcbY={-32.095} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C217 />} schX={-10.200000000000001} schY={0.3500000000000014} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP4: TestPoint */}
    <chip name={"TP4"} pcbX={60.035} pcbY={-1.095} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* R109: 33 */}
    <resistor name={"R109"} pcbX={-3.335} pcbY={-44.151} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R109 />} schX={-0.1000000000000032} schY={-0.049999999999998934} schRotation={-90} schSheetName={"stack6"}/>

    {/* U53: MCP1824T-0802E */}
    <chip name={"U53"} pcbX={-29.785} pcbY={-19.1575} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-0802E"} footprint={<Footprint_U53 />} noSchematicRepresentation={true}/>

    {/* C252: 1uF */}
    <capacitor name={"C252"} pcbX={37.5225} pcbY={-44.5275} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C252 />} schX={-7.800000000000001} schY={2.7499999999999982} schRotation={-90} schSheetName={"stack7"}/>

    {/* U49: MCP1824T-1202E/OT */}
    <chip name={"U49"} pcbX={-27.955} pcbY={-31.1575} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U49 />} noSchematicRepresentation={true}/>

    {/* TP144: TestPoint */}
    <chip name={"TP144"} pcbX={39.275} pcbY={-19.15} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP144 />} noSchematicRepresentation={true}/>

    {/* R102: 33 */}
    <resistor name={"R102"} pcbX={-33.595} pcbY={-45.623} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R102 />} schX={8.05} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C156: 1uF */}
    <capacitor name={"C156"} pcbX={-51.2675} pcbY={-30.74} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C156 />} schX={-4.75} schY={-0.09999999999999964} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP145: TestPoint */}
    <chip name={"TP145"} pcbX={39.125} pcbY={-41.65} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP145 />} noSchematicRepresentation={true}/>

    {/* R105: 2k */}
    <resistor name={"R105"} pcbX={-3.315} pcbY={-48.475} pcbRotation={180} resistance={"2kohm"} footprint={<Footprint_R105 />} schX={-2.200000000000001} schY={-4.649999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* C230: 1uF */}
    <capacitor name={"C230"} pcbX={-2.805} pcbY={-50.325} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C230 />} schX={1.8999999999999986} schY={-5.649999999999999} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP125: TestPoint */}
    <chip name={"TP125"} pcbX={15.375} pcbY={-30.025} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP125 />} noSchematicRepresentation={true}/>

    {/* C245: 100uF */}
    <capacitor name={"C245"} pcbX={8.815} pcbY={-39.235} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C245 />} schX={12.899999999999999} schY={-4.25} schRotation={-90} schSheetName={"stack6"}/>

    {/* R86: 2k */}
    <resistor name={"R86"} pcbX={-53.125} pcbY={-19.9} pcbRotation={-90} resistance={"2kohm"} footprint={<Footprint_R86 />} schX={-1.3499999999999996} schY={3.999999999999999} schRotation={-90} schSheetName={"stack4"}/>

    {/* C203: 0.1uF */}
    <capacitor name={"C203"} pcbX={-14.54} pcbY={-25.255} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C203 />} schX={11.349999999999998} schY={-4.25} schRotation={-90} schSheetName={"stack5"}/>

    {/* R134: 2k */}
    <resistor name={"R134"} pcbX={18.625} pcbY={-23.2} pcbRotation={-90} resistance={"2kohm"} footprint={<Footprint_R134 />} schX={6.299999999999997} schY={-4.15} schRotation={-90} schSheetName={"stack7"}/>

    {/* C178: 100uF */}
    <capacitor name={"C178"} pcbX={-45.95} pcbY={-25.725} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C178 />} schX={12.25} schY={0.5999999999999979} schRotation={-90} schSheetName={"stack4"}/>

    {/* TP107: TestPoint */}
    <chip name={"TP107"} pcbX={-9.75} pcbY={-15.4} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP107 />} noSchematicRepresentation={true}/>

    {/* C256: 1uF */}
    <capacitor name={"C256"} pcbX={37.505} pcbY={-28.5075} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C256 />} schX={-5.100000000000001} schY={-1.8500000000000014} schRotation={-90} schSheetName={"stack7"}/>

    {/* R56: 2k */}
    <resistor name={"R56"} pcbX={-45.575} pcbY={-47.225} pcbRotation={-90} resistance={"2kohm"} footprint={<Footprint_R56 />} schX={-1.0500000000000007} schY={-5.400000000000002} schRotation={-90} schSheetName={"stack4"}/>

    {/* R111: 33 */}
    <resistor name={"R111"} pcbX={10.145} pcbY={-18.407} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R111 />} schX={7.5} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R66: 1k */}
    <resistor name={"R66"} pcbX={-24.75} pcbY={-40.85} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R66 />} schX={9.349999999999998} schY={5.949999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* TP11: TestPoint */}
    <chip name={"TP11"} pcbX={60.035} pcbY={-7.185} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* R87: 2k */}
    <resistor name={"R87"} pcbX={-12.125} pcbY={-35.2} pcbRotation={-90} resistance={"2kohm"} footprint={<Footprint_R87 />} schX={-2.1500000000000004} schY={-0.2500000000000018} schRotation={-90} schSheetName={"stack5"}/>

    {/* R94: 33 */}
    <resistor name={"R94"} pcbX={-33.595} pcbY={-41.615} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R94 />} schX={5.449999999999999} schY={4.349999999999998} schRotation={-90} schSheetName={"stack5"}/>

    {/* C169: 0.1uF */}
    <capacitor name={"C169"} pcbX={-37.38} pcbY={-25.295} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C169 />} schX={10.549999999999997} schY={0.5999999999999979} schRotation={-90} schSheetName={"stack4"}/>

    {/* R107: 33 */}
    <resistor name={"R107"} pcbX={-3.335} pcbY={-46.155} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R107 />} schX={-1.5000000000000018} schY={-0.049999999999998934} schRotation={-90} schSheetName={"stack6"}/>

    {/* TP106: TestPoint */}
    <chip name={"TP106"} pcbX={-24.6} pcbY={-38.85} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP106 />} noSchematicRepresentation={true}/>

    {/* R116: 33 */}
    <resistor name={"R116"} pcbX={-12.025} pcbY={-20.055} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R116 />} schX={-0.8000000000000007} schY={4.350000000000001} schRotation={-90} schSheetName={"stack6"}/>

    {/* R93: 33 */}
    <resistor name={"R93"} pcbX={-25.445} pcbY={-20.181} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R93 />} schX={6.849999999999998} schY={-0.05000000000000071} schRotation={-90} schSheetName={"stack5"}/>

    {/* C260: 1uF */}
    <capacitor name={"C260"} pcbX={32.045} pcbY={-15.725} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C260 />} schX={1.1999999999999993} schY={-7.85} schRotation={-90} schSheetName={"stack7"}/>

    {/* C193: 1uF */}
    <capacitor name={"C193"} pcbX={-12.265} pcbY={-28.365} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C193 />} schX={0.25} schY={-1.2500000000000018} schRotation={-90} schSheetName={"stack5"}/>

    {/* R95: 33 */}
    <resistor name={"R95"} pcbX={-25.445} pcbY={-19.167} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R95 />} schX={7.449999999999999} schY={-0.05000000000000071} schRotation={-90} schSheetName={"stack5"}/>

    {/* C222: 1uF */}
    <capacitor name={"C222"} pcbX={-8.485} pcbY={-19.315} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C222 />} schX={-5.400000000000002} schY={4.95} schRotation={-90} schSheetName={"stack6"}/>

    {/* U29: MCP1824T-1202E/OT */}
    <chip name={"U29"} pcbX={-49.005} pcbY={-34.7075} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"MCP1824T-1202E/OT"} footprint={<Footprint_U29 />} noSchematicRepresentation={true}/>

    {/* TP96: TestPoint */}
    <chip name={"TP96"} pcbX={-47.285} pcbY={-11.975} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP96 />} noSchematicRepresentation={true}/>

    {/* C182: 1uF */}
    <capacitor name={"C182"} pcbX={-29.8525} pcbY={-12.16} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C182 />} schX={-13.05} schY={-4.150000000000002} schRotation={-90} schSheetName={"stack5"}/>

    {/* C274: 1uF */}
    <capacitor name={"C274"} pcbX={27.445} pcbY={-39.155} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C274 />} schX={12.299999999999997} schY={-1.6500000000000004} schRotation={-90} schSheetName={"stack7"}/>

    {/* KiCad net: /stack5/GND1 */}
    <KiCadNet name={"_stack5_GND1"} connectsTo={[".U55 > .pin1", ".U55 > .pin10", ".U55 > .pin15", ".U55 > .pin17", ".U55 > .pin18", ".U55 > .pin24", ".U55 > .pin26", ".U56 > .pin25", ".J7 > .pin1", ".U52 > .pin2", ".C196 > .pin2", ".C181 > .pin2", ".C212 > .pin1", ".C184 > .pin2", ".C187 > .pin2", ".C208 > .pin2", ".C202 > .pin2", ".C190 > .pin2", ".C209 > .pin1", ".C211 > .pin2", ".U49 > .pin2", ".C203 > .pin1", ".R87 > .pin2", ".C193 > .pin2"]}/>
    {/* KiCad net: Net-(U55-CO) */}
    <KiCadNet name={"Net__U55_CO_"} connectsTo={[".U55 > .pin2", ".R92 > .pin2"]}/>
    {/* KiCad net: Net-(U55-CLKO) */}
    <KiCadNet name={"Net__U55_CLKO_"} connectsTo={[".U55 > .pin3", ".R91 > .pin2"]}/>
    {/* KiCad net: Net-(U55-RI) */}
    <KiCadNet name={"Net__U55_RI_"} connectsTo={[".U55 > .pin4", ".R90 > .pin2"]}/>
    {/* KiCad net: Net-(U55-BO) */}
    <KiCadNet name={"Net__U55_BO_"} connectsTo={[".U55 > .pin5", ".R89 > .pin2"]}/>
    {/* KiCad net: Net-(U55-NRSTO) */}
    <KiCadNet name={"Net__U55_NRSTO_"} connectsTo={[".U55 > .pin6", ".R88 > .pin2", ".R87 > .pin1"]}/>
    {/* KiCad net: unconnected-(U55-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U55_INV_CLKO_Pad7_"} connectsTo={[".U55 > .pin7"]}/>
    {/* KiCad net: unconnected-(U55-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U55_TEMP_P_Pad8_"} connectsTo={[".U55 > .pin8"]}/>
    {/* KiCad net: unconnected-(U55-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U55_TEMP_N_Pad9_"} connectsTo={[".U55 > .pin9"]}/>
    {/* KiCad net: /stack5/0V8-1 */}
    <KiCadNet name={"_stack5_0V8_1"} connectsTo={[".U55 > .pin11", ".TP104 > .pin1", ".U52 > .pin5", ".C190 > .pin1", ".C193 > .pin1"]}/>
    {/* KiCad net: unconnected-(U55-VDDIO_18_0-Pad12) */}
    <KiCadNet name={"unconnected__U55_VDDIO_18_0_Pad12_"} connectsTo={[".U55 > .pin12"]}/>
    {/* KiCad net: /stack5/1V2-1 */}
    <KiCadNet name={"_stack5_1V2_1"} connectsTo={[".U55 > .pin13", ".C196 > .pin1", ".C184 > .pin1", ".TP101 > .pin1", ".U49 > .pin5"]}/>
    {/* KiCad net: unconnected-(U55-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U55_VDDIO_08_1_Pad14_"} connectsTo={[".U55 > .pin14"]}/>
    {/* KiCad net: unconnected-(U55-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U55_POR_EN_Pad16_"} connectsTo={[".U55 > .pin16"]}/>
    {/* KiCad net: Net-(U55-NRSTI) */}
    <KiCadNet name={"Net__U55_NRSTI_"} connectsTo={[".U55 > .pin19", ".R93 > .pin1"]}/>
    {/* KiCad net: Net-(U55-BI) */}
    <KiCadNet name={"Net__U55_BI_"} connectsTo={[".U55 > .pin20", ".R95 > .pin1"]}/>
    {/* KiCad net: Net-(U55-RO) */}
    <KiCadNet name={"Net__U55_RO_"} connectsTo={[".U55 > .pin21", ".R97 > .pin1"]}/>
    {/* KiCad net: Net-(U55-CLKI) */}
    <KiCadNet name={"Net__U55_CLKI_"} connectsTo={[".U55 > .pin22", ".R99 > .pin1"]}/>
    {/* KiCad net: Net-(U55-CI) */}
    <KiCadNet name={"Net__U55_CI_"} connectsTo={[".U55 > .pin23", ".R101 > .pin1"]}/>
    {/* KiCad net: /stack5/GND0 */}
    <KiCadNet name={"_stack5_GND0"} connectsTo={[".U55 > .pin25", ".U54 > .pin1", ".U54 > .pin10", ".U54 > .pin15", ".U54 > .pin18", ".U54 > .pin24", ".U54 > .pin26", ".J5 > .pin1", ".C183 > .pin2", ".U48 > .pin2", ".C192 > .pin2", ".C201 > .pin2", ".R104 > .pin2", ".C189 > .pin2", ".U51 > .pin2", ".C208 > .pin1", ".C207 > .pin2", ".C195 > .pin2", ".C202 > .pin1", ".C186 > .pin2", ".C180 > .pin2", ".C211 > .pin1", ".C210 > .pin2"]}/>
    {/* KiCad net: /3V6 */}
    <KiCadNet name={"_3V6"} connectsTo={[".C16 > .pin1", ".R6 > .pin1", ".C27 > .pin1", ".C17 > .pin1", ".J18 > .pin1", ".U45 > .pin25", ".C18 > .pin1", ".L1 > .pin1", ".J19 > .pin1", ".C26 > .pin1", ".R21 > .pin1", ".L2 > .pin2", ".C174 > .pin1", ".C177 > .pin1", ".C168 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C16 > .pin2", ".U4 > .pin1", ".U4 > .pin2", ".U4 > .pin6", ".U4 > .pin9", ".U4 > .pin10", ".R30 > .pin2", ".R27 > .pin2", ".C101 > .pin1", ".C7 > .pin2", ".C9 > .pin2", ".R28 > .pin2", ".C5 > .pin2", ".U27 > .pin19", ".U27 > .pin57", ".C27 > .pin2", ".C22 > .pin2", ".U74 > .pin1", ".U74 > .pin10", ".U74 > .pin15", ".U74 > .pin18", ".U74 > .pin24", ".U74 > .pin26", ".C107 > .pin1", ".C17 > .pin2", ".C20 > .pin2", ".R52 > .pin1", ".U9 > .pin4", ".C106 > .pin1", ".C99 > .pin1", ".U7 > .pin4", ".U7 > .pin5", ".C18 > .pin2", ".C24 > .pin2", ".C100 > .pin1", ".U10 > .pin1", ".R7 > .pin2", ".C105 > .pin1", ".J6 > .pin1", ".J6 > .pin7", ".J6 > .pin13", ".C90 > .pin2", ".C96 > .pin1", ".J19 > .pin2", ".C25 > .pin2", ".U8 > .pin4", ".U8 > .pin9", ".C21 > .pin2", ".C104 > .pin1", ".C108 > .pin1", ".R51 > .pin1", ".C109 > .pin1", ".C4 > .pin2", ".R10 > .pin2", ".R22 > .pin2", ".R3 > .pin2", ".C2 > .pin2", ".C1 > .pin2", ".C10 > .pin2", ".Y1 > .pin2", ".Y1 > .pin4", ".R2 > .pin2", ".C102 > .pin1", ".U2 > .pin4", ".C110 > .pin1", ".U1 > .pin3", ".U1 > .pin12", ".U1 > .pin22", ".U1 > .pin33", ".C8 > .pin2", ".R8 > .pin2", ".C19 > .pin2", ".C6 > .pin2", ".C103 > .pin1", ".R11 > .pin2", ".C14 > .pin1", ".J2 > .pin1", ".C26 > .pin2", ".U3 > .pin4", ".U3 > .pin5", ".U3 > .pin6", ".U3 > .pin11", ".C98 > .pin2", ".R32 > .pin2", ".J21 > .pin1", ".C3 > .pin2", ".U6 > .pin4", ".U6 > .pin5", ".U6 > .pin7", ".C97 > .pin1", ".C275 > .pin2", ".C257 > .pin2", ".U68 > .pin2", ".C263 > .pin2", ".C248 > .pin2", ".C251 > .pin2", ".C278 > .pin2", ".R18 > .pin2", ".C23 > .pin1", ".U5 > .pin2", ".C269 > .pin2", ".TP3 > .pin1", ".C254 > .pin2", ".U71 > .pin2", ".R134 > .pin2", ".TP11 > .pin1", ".C260 > .pin2"]}/>
    {/* KiCad net: /stack7/RST_N */}
    <KiCadNet name={"_stack7_RST_N"} connectsTo={[".U4 > .pin3", ".R135 > .pin2", ".TP6 > .pin1"]}/>
    {/* KiCad net: /stack7/CI */}
    <KiCadNet name={"_stack7_CI"} connectsTo={[".U4 > .pin4", ".TP9 > .pin1", ".R138 > .pin2"]}/>
    {/* KiCad net: /stack7/RO */}
    <KiCadNet name={"_stack7_RO"} connectsTo={[".U4 > .pin5", ".R69 > .pin2", ".R136 > .pin2", ".TP7 > .pin1"]}/>
    {/* KiCad net: /stack7/1V2-2 */}
    <KiCadNet name={"_stack7_1V2_2"} connectsTo={[".U4 > .pin7", ".U4 > .pin8", ".U4 > .pin16", ".U74 > .pin12", ".R69 > .pin1", ".C21 > .pin1", ".U68 > .pin5", ".C263 > .pin1", ".C251 > .pin1", ".C23 > .pin2", ".U5 > .pin1", ".U5 > .pin4", ".TP144 > .pin1"]}/>
    {/* KiCad net: unconnected-(U4-B4-Pad11) */}
    <KiCadNet name={"unconnected__U4_B4_Pad11_"} connectsTo={[".U4 > .pin11"]}/>
    {/* KiCad net: /RX */}
    <KiCadNet name={"_RX"} connectsTo={[".U4 > .pin12", ".U27 > .pin12", ".TP5 > .pin1"]}/>
    {/* KiCad net: /TX */}
    <KiCadNet name={"_TX"} connectsTo={[".U4 > .pin13", ".U27 > .pin11", ".TP4 > .pin1"]}/>
    {/* KiCad net: /RST */}
    <KiCadNet name={"_RST"} connectsTo={[".U4 > .pin14", ".U27 > .pin14", ".TP10 > .pin1"]}/>
    {/* KiCad net: /3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".U4 > .pin15", ".R20 > .pin2", ".U27 > .pin1", ".U27 > .pin10", ".U27 > .pin22", ".U27 > .pin26", ".U27 > .pin33", ".U27 > .pin42", ".U27 > .pin43", ".U27 > .pin44", ".U27 > .pin48", ".U27 > .pin49", ".C22 > .pin1", ".C107 > .pin2", ".C20 > .pin1", ".C106 > .pin2", ".C99 > .pin2", ".U7 > .pin6", ".U7 > .pin7", ".U7 > .pin8", ".C24 > .pin1", ".U10 > .pin2", ".U10 > .pin4", ".C105 > .pin2", ".C25 > .pin1", ".U8 > .pin8", ".C104 > .pin2", ".C108 > .pin2", ".C109 > .pin2", ".U2 > .pin8", ".C110 > .pin2", ".R19 > .pin1", ".C19 > .pin1", ".C103 > .pin2", ".U3 > .pin10", ".C98 > .pin1", ".R50 > .pin1", ".U6 > .pin6", ".U6 > .pin8"]}/>
    {/* KiCad net: /Power/OUT0 */}
    <KiCadNet name={"_Power_OUT0"} connectsTo={[".R6 > .pin2", ".C11 > .pin1", ".R7 > .pin1", ".U2 > .pin6", ".U1 > .pin9", ".C12 > .pin1"]}/>
    {/* KiCad net: Net-(C11-Pad2) */}
    <KiCadNet name={"Net__C11_Pad2_"} connectsTo={[".C11 > .pin2", ".R4 > .pin1"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".D1 > .pin1", ".C13 > .pin1", ".U1 > .pin30"]}/>
    {/* KiCad net: Net-(D1-A) */}
    <KiCadNet name={"Net__D1_A_"} connectsTo={[".D1 > .pin2", ".C5 > .pin1", ".U1 > .pin1", ".U1 > .pin17"]}/>
    {/* KiCad net: /stack6/GND2 */}
    <KiCadNet name={"_stack6_GND2"} connectsTo={[".J16 > .pin1", ".U65 > .pin1", ".U65 > .pin10", ".U65 > .pin15", ".U65 > .pin17", ".U65 > .pin18", ".U65 > .pin24", ".U65 > .pin26", ".J17 > .pin1", ".U72 > .pin25", ".C215 > .pin2", ".C242 > .pin2", ".C236 > .pin2", ".C218 > .pin2", ".C227 > .pin2", ".C224 > .pin2", ".U62 > .pin2", ".U59 > .pin2", ".C221 > .pin2", ".C276 > .pin1", ".C273 > .pin1", ".C267 > .pin1", ".R105 > .pin2", ".C230 > .pin2", ".C245 > .pin2"]}/>
    {/* KiCad net: Net-(U1-RAMP1) */}
    <KiCadNet name={"Net__U1_RAMP1_"} connectsTo={[".R5 > .pin1", ".C10 > .pin1", ".U1 > .pin6"]}/>
    {/* KiCad net: /Power/SW1 */}
    <KiCadNet name={"_Power_SW1"} connectsTo={[".R5 > .pin2", ".L1 > .pin2", ".Q2 > .pin5", ".Q2 > .pin6", ".Q2 > .pin7", ".Q2 > .pin8", ".C28 > .pin1", ".C13 > .pin2", ".U1 > .pin32", ".Q1 > .pin1", ".Q1 > .pin2", ".Q1 > .pin3"]}/>
    {/* KiCad net: unconnected-(H6-Pad1) */}
    <KiCadNet name={"unconnected__H6_Pad1_"} connectsTo={[".H6 > .pin1"]}/>
    {/* KiCad net: /Data/SCL */}
    <KiCadNet name={"_Data_SCL"} connectsTo={[".R20 > .pin1", ".U27 > .pin18", ".U7 > .pin2", ".U2 > .pin2", ".U3 > .pin9", ".U6 > .pin2", ".TP1 > .pin1"]}/>
    {/* KiCad net: Net-(U1-CSG2) */}
    <KiCadNet name={"Net__U1_CSG2_"} connectsTo={[".R30 > .pin1", ".C30 > .pin1", ".U1 > .pin21"]}/>
    {/* KiCad net: /Power/LOOP2 */}
    <KiCadNet name={"_Power_LOOP2"} connectsTo={[".Q4 > .pin1", ".Q4 > .pin2", ".Q4 > .pin3", ".R10 > .pin1", ".R29 > .pin2"]}/>
    {/* KiCad net: Net-(Q4-G) */}
    <KiCadNet name={"Net__Q4_G_"} connectsTo={[".Q4 > .pin4", ".R25 > .pin2"]}/>
    {/* KiCad net: /Power/SW2 */}
    <KiCadNet name={"_Power_SW2"} connectsTo={[".Q4 > .pin5", ".Q4 > .pin6", ".Q4 > .pin7", ".Q4 > .pin8", ".C15 > .pin2", ".R9 > .pin2", ".U1 > .pin25", ".C29 > .pin1", ".Q3 > .pin1", ".Q3 > .pin2", ".Q3 > .pin3", ".L2 > .pin1"]}/>
    {/* KiCad net: Net-(U1-CSG1) */}
    <KiCadNet name={"Net__U1_CSG1_"} connectsTo={[".C31 > .pin1", ".U1 > .pin4", ".R32 > .pin1"]}/>
    {/* KiCad net: Net-(U1-CS1) */}
    <KiCadNet name={"Net__U1_CS1_"} connectsTo={[".C31 > .pin2", ".R31 > .pin1", ".U1 > .pin5"]}/>
    {/* KiCad net: Net-(D2-K) */}
    <KiCadNet name={"Net__D2_K_"} connectsTo={[".C15 > .pin1", ".D2 > .pin1", ".U1 > .pin27"]}/>
    {/* KiCad net: Net-(C28-Pad2) */}
    <KiCadNet name={"Net__C28_Pad2_"} connectsTo={[".R27 > .pin1", ".C28 > .pin2"]}/>
    {/* KiCad net: /Data/1V1 */}
    <KiCadNet name={"_Data_1V1"} connectsTo={[".C101 > .pin2", ".U27 > .pin23", ".U27 > .pin45", ".U27 > .pin50", ".C100 > .pin2", ".C102 > .pin2"]}/>
    {/* KiCad net: Net-(U1-CS2) */}
    <KiCadNet name={"Net__U1_CS2_"} connectsTo={[".C30 > .pin2", ".U1 > .pin20", ".R29 > .pin1"]}/>
    {/* KiCad net: Net-(U1-SS2) */}
    <KiCadNet name={"Net__U1_SS2_"} connectsTo={[".C7 > .pin1", ".U1 > .pin18"]}/>
    {/* KiCad net: Net-(U65-CO) */}
    <KiCadNet name={"Net__U65_CO_"} connectsTo={[".U65 > .pin2", ".R110 > .pin2"]}/>
    {/* KiCad net: Net-(U65-CLKO) */}
    <KiCadNet name={"Net__U65_CLKO_"} connectsTo={[".U65 > .pin3", ".R109 > .pin2"]}/>
    {/* KiCad net: Net-(U65-RI) */}
    <KiCadNet name={"Net__U65_RI_"} connectsTo={[".U65 > .pin4", ".R108 > .pin2"]}/>
    {/* KiCad net: Net-(U65-BO) */}
    <KiCadNet name={"Net__U65_BO_"} connectsTo={[".U65 > .pin5", ".R107 > .pin2"]}/>
    {/* KiCad net: Net-(U65-NRSTO) */}
    <KiCadNet name={"Net__U65_NRSTO_"} connectsTo={[".U65 > .pin6", ".R106 > .pin2", ".R105 > .pin1"]}/>
    {/* KiCad net: unconnected-(U65-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U65_INV_CLKO_Pad7_"} connectsTo={[".U65 > .pin7"]}/>
    {/* KiCad net: unconnected-(U65-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U65_TEMP_P_Pad8_"} connectsTo={[".U65 > .pin8"]}/>
    {/* KiCad net: unconnected-(U65-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U65_TEMP_N_Pad9_"} connectsTo={[".U65 > .pin9"]}/>
    {/* KiCad net: /stack6/0V8-2 */}
    <KiCadNet name={"_stack6_0V8_2"} connectsTo={[".U65 > .pin11", ".C227 > .pin1", ".C224 > .pin1", ".U62 > .pin5", ".TP126 > .pin1"]}/>
    {/* KiCad net: /stack6/1V2-2 */}
    <KiCadNet name={"_stack6_1V2_2"} connectsTo={[".U65 > .pin12", ".C218 > .pin1", ".TP123 > .pin1", ".U59 > .pin5", ".C230 > .pin1"]}/>
    {/* KiCad net: unconnected-(U65-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U65_VDDIO_18_1_Pad13_"} connectsTo={[".U65 > .pin13"]}/>
    {/* KiCad net: unconnected-(U65-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U65_VDDIO_08_1_Pad14_"} connectsTo={[".U65 > .pin14"]}/>
    {/* KiCad net: unconnected-(U65-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U65_POR_EN_Pad16_"} connectsTo={[".U65 > .pin16"]}/>
    {/* KiCad net: /stack6/NRSTI */}
    <KiCadNet name={"_stack6_NRSTI"} connectsTo={[".U65 > .pin19", ".R16 > .pin2"]}/>
    {/* KiCad net: /stack6/BI */}
    <KiCadNet name={"_stack6_BI"} connectsTo={[".U65 > .pin20", ".R15 > .pin2"]}/>
    {/* KiCad net: /stack6/RO */}
    <KiCadNet name={"_stack6_RO"} connectsTo={[".U65 > .pin21", ".R14 > .pin2"]}/>
    {/* KiCad net: /stack6/CLKI */}
    <KiCadNet name={"_stack6_CLKI"} connectsTo={[".U65 > .pin22", ".R13 > .pin2"]}/>
    {/* KiCad net: /stack6/CI */}
    <KiCadNet name={"_stack6_CI"} connectsTo={[".U65 > .pin23", ".R12 > .pin2"]}/>
    {/* KiCad net: /stack6/GND1 */}
    <KiCadNet name={"_stack6_GND1"} connectsTo={[".U65 > .pin25", ".J9 > .pin1", ".U64 > .pin1", ".U64 > .pin10", ".U64 > .pin15", ".U64 > .pin18", ".U64 > .pin24", ".U64 > .pin26", ".C242 > .pin1", ".C236 > .pin1", ".U58 > .pin2", ".C223 > .pin2", ".C229 > .pin2", ".R121 > .pin2", ".C220 > .pin2", ".C244 > .pin2", ".C241 > .pin2", ".C235 > .pin2", ".U61 > .pin2", ".C214 > .pin2", ".C226 > .pin2", ".C217 > .pin2", ".C245 > .pin1"]}/>
    {/* KiCad net: /stack4/GND2 */}
    <KiCadNet name={"_stack4_GND2"} connectsTo={[".U47 > .pin1", ".U47 > .pin10", ".U47 > .pin15", ".U47 > .pin17", ".U47 > .pin18", ".U47 > .pin24", ".U47 > .pin26", ".U54 > .pin25", ".J12 > .pin1", ".J13 > .pin1", ".C120 > .pin2", ".C176 > .pin2", ".C201 > .pin1", ".C113 > .pin2", ".C157 > .pin2", ".C170 > .pin2", ".C207 > .pin1", ".C164 > .pin2", ".U30 > .pin2", ".U43 > .pin2", ".C161 > .pin2", ".C117 > .pin2", ".C210 > .pin1", ".C179 > .pin2", ".R56 > .pin2"]}/>
    {/* KiCad net: Net-(U47-CO) */}
    <KiCadNet name={"Net__U47_CO_"} connectsTo={[".U47 > .pin2", ".R62 > .pin2"]}/>
    {/* KiCad net: Net-(U47-CLKO) */}
    <KiCadNet name={"Net__U47_CLKO_"} connectsTo={[".U47 > .pin3", ".R60 > .pin2"]}/>
    {/* KiCad net: Net-(U47-RI) */}
    <KiCadNet name={"Net__U47_RI_"} connectsTo={[".U47 > .pin4", ".R59 > .pin2"]}/>
    {/* KiCad net: Net-(U47-BO) */}
    <KiCadNet name={"Net__U47_BO_"} connectsTo={[".U47 > .pin5", ".R58 > .pin2"]}/>
    {/* KiCad net: Net-(U47-NRSTO) */}
    <KiCadNet name={"Net__U47_NRSTO_"} connectsTo={[".U47 > .pin6", ".R57 > .pin2", ".R56 > .pin1"]}/>
    {/* KiCad net: unconnected-(U47-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U47_INV_CLKO_Pad7_"} connectsTo={[".U47 > .pin7"]}/>
    {/* KiCad net: unconnected-(U47-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U47_TEMP_P_Pad8_"} connectsTo={[".U47 > .pin8"]}/>
    {/* KiCad net: unconnected-(U47-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U47_TEMP_N_Pad9_"} connectsTo={[".U47 > .pin9"]}/>
    {/* KiCad net: /stack4/0V8-2 */}
    <KiCadNet name={"_stack4_0V8_2"} connectsTo={[".U47 > .pin11", ".C157 > .pin1", ".U43 > .pin5", ".C161 > .pin1", ".TP56 > .pin1"]}/>
    {/* KiCad net: /stack4/1V2-2 */}
    <KiCadNet name={"_stack4_1V2_2"} connectsTo={[".U47 > .pin12", ".TP53 > .pin1", ".C164 > .pin1", ".U30 > .pin5", ".C117 > .pin1"]}/>
    {/* KiCad net: unconnected-(U47-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U47_VDDIO_18_1_Pad13_"} connectsTo={[".U47 > .pin13"]}/>
    {/* KiCad net: unconnected-(U47-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U47_VDDIO_08_1_Pad14_"} connectsTo={[".U47 > .pin14"]}/>
    {/* KiCad net: unconnected-(U47-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U47_POR_EN_Pad16_"} connectsTo={[".U47 > .pin16"]}/>
    {/* KiCad net: /stack4/NRSTI */}
    <KiCadNet name={"_stack4_NRSTI"} connectsTo={[".U47 > .pin19", ".R102 > .pin2"]}/>
    {/* KiCad net: /stack4/BI */}
    <KiCadNet name={"_stack4_BI"} connectsTo={[".U47 > .pin20", ".R100 > .pin2"]}/>
    {/* KiCad net: /stack4/RO */}
    <KiCadNet name={"_stack4_RO"} connectsTo={[".U47 > .pin21", ".R98 > .pin2"]}/>
    {/* KiCad net: /stack4/CLKI */}
    <KiCadNet name={"_stack4_CLKI"} connectsTo={[".U47 > .pin22", ".R96 > .pin2"]}/>
    {/* KiCad net: /stack4/CI */}
    <KiCadNet name={"_stack4_CI"} connectsTo={[".U47 > .pin23", ".R94 > .pin2"]}/>
    {/* KiCad net: /stack4/GND1 */}
    <KiCadNet name={"_stack4_GND1"} connectsTo={[".U47 > .pin25", ".U46 > .pin1", ".U46 > .pin10", ".U46 > .pin15", ".U46 > .pin18", ".U46 > .pin24", ".U46 > .pin26", ".J4 > .pin1", ".U42 > .pin2", ".C112 > .pin2", ".C176 > .pin1", ".R85 > .pin2", ".C116 > .pin2", ".C170 > .pin1", ".C163 > .pin2", ".C175 > .pin2", ".C119 > .pin2", ".C179 > .pin1", ".C160 > .pin2", ".C156 > .pin2", ".C178 > .pin2", ".C169 > .pin2", ".U29 > .pin2"]}/>
    {/* KiCad net: Net-(U1-SS1) */}
    <KiCadNet name={"Net__U1_SS1_"} connectsTo={[".C9 > .pin1", ".U1 > .pin7"]}/>
    {/* KiCad net: Net-(C29-Pad2) */}
    <KiCadNet name={"Net__C29_Pad2_"} connectsTo={[".R28 > .pin1", ".C29 > .pin2"]}/>
    {/* KiCad net: unconnected-(H8-Pad1) */}
    <KiCadNet name={"unconnected__H8_Pad1_"} connectsTo={[".H8 > .pin1"]}/>
    {/* KiCad net: /Data/PWR_EN */}
    <KiCadNet name={"_Data_PWR_EN"} connectsTo={[".U27 > .pin2", ".R33 > .pin1"]}/>
    {/* KiCad net: Net-(U27-GPIO1) */}
    <KiCadNet name={"Net__U27_GPIO1_"} connectsTo={[".U27 > .pin3", ".U9 > .pin1", ".TP12 > .pin1"]}/>
    {/* KiCad net: unconnected-(U27-GPIO2-Pad4) */}
    <KiCadNet name={"unconnected__U27_GPIO2_Pad4_"} connectsTo={[".U27 > .pin4"]}/>
    {/* KiCad net: unconnected-(U27-GPIO3-Pad5) */}
    <KiCadNet name={"unconnected__U27_GPIO3_Pad5_"} connectsTo={[".U27 > .pin5"]}/>
    {/* KiCad net: unconnected-(U27-GPIO4-Pad6) */}
    <KiCadNet name={"unconnected__U27_GPIO4_Pad6_"} connectsTo={[".U27 > .pin6"]}/>
    {/* KiCad net: unconnected-(U27-GPIO5-Pad7) */}
    <KiCadNet name={"unconnected__U27_GPIO5_Pad7_"} connectsTo={[".U27 > .pin7"]}/>
    {/* KiCad net: unconnected-(U27-GPIO6-Pad8) */}
    <KiCadNet name={"unconnected__U27_GPIO6_Pad8_"} connectsTo={[".U27 > .pin8"]}/>
    {/* KiCad net: unconnected-(U27-GPIO7-Pad9) */}
    <KiCadNet name={"unconnected__U27_GPIO7_Pad9_"} connectsTo={[".U27 > .pin9"]}/>
    {/* KiCad net: unconnected-(U27-GPIO10-Pad13) */}
    <KiCadNet name={"unconnected__U27_GPIO10_Pad13_"} connectsTo={[".U27 > .pin13"]}/>
    {/* KiCad net: unconnected-(U27-GPIO12-Pad15) */}
    <KiCadNet name={"unconnected__U27_GPIO12_Pad15_"} connectsTo={[".U27 > .pin15"]}/>
    {/* KiCad net: unconnected-(U27-GPIO13-Pad16) */}
    <KiCadNet name={"unconnected__U27_GPIO13_Pad16_"} connectsTo={[".U27 > .pin16"]}/>
    {/* KiCad net: /Data/SDA */}
    <KiCadNet name={"_Data_SDA"} connectsTo={[".U27 > .pin17", ".U7 > .pin1", ".U2 > .pin1", ".R19 > .pin2", ".U3 > .pin8", ".U6 > .pin1", ".TP2 > .pin1"]}/>
    {/* KiCad net: /Data/XIN */}
    <KiCadNet name={"_Data_XIN"} connectsTo={[".U27 > .pin20", ".Y1 > .pin3", ".C97 > .pin2"]}/>
    {/* KiCad net: /Data/XOUT */}
    <KiCadNet name={"_Data_XOUT"} connectsTo={[".U27 > .pin21", ".C96 > .pin2", ".Y1 > .pin1"]}/>
    {/* KiCad net: /Data/SWCLK */}
    <KiCadNet name={"_Data_SWCLK"} connectsTo={[".U27 > .pin24", ".J6 > .pin6"]}/>
    {/* KiCad net: /Data/SWD */}
    <KiCadNet name={"_Data_SWD"} connectsTo={[".U27 > .pin25", ".J6 > .pin12"]}/>
    {/* KiCad net: unconnected-(U27-GPIO16-Pad27) */}
    <KiCadNet name={"unconnected__U27_GPIO16_Pad27_"} connectsTo={[".U27 > .pin27"]}/>
    {/* KiCad net: unconnected-(U27-GPIO17-Pad28) */}
    <KiCadNet name={"unconnected__U27_GPIO17_Pad28_"} connectsTo={[".U27 > .pin28"]}/>
    {/* KiCad net: unconnected-(U27-GPIO18-Pad29) */}
    <KiCadNet name={"unconnected__U27_GPIO18_Pad29_"} connectsTo={[".U27 > .pin29"]}/>
    {/* KiCad net: unconnected-(U27-GPIO19-Pad30) */}
    <KiCadNet name={"unconnected__U27_GPIO19_Pad30_"} connectsTo={[".U27 > .pin30"]}/>
    {/* KiCad net: unconnected-(U27-GPIO20-Pad31) */}
    <KiCadNet name={"unconnected__U27_GPIO20_Pad31_"} connectsTo={[".U27 > .pin31"]}/>
    {/* KiCad net: unconnected-(U27-GPIO21-Pad32) */}
    <KiCadNet name={"unconnected__U27_GPIO21_Pad32_"} connectsTo={[".U27 > .pin32"]}/>
    {/* KiCad net: unconnected-(U27-GPIO22-Pad34) */}
    <KiCadNet name={"unconnected__U27_GPIO22_Pad34_"} connectsTo={[".U27 > .pin34"]}/>
    {/* KiCad net: unconnected-(U27-GPIO23-Pad35) */}
    <KiCadNet name={"unconnected__U27_GPIO23_Pad35_"} connectsTo={[".U27 > .pin35"]}/>
    {/* KiCad net: unconnected-(U27-GPIO24-Pad36) */}
    <KiCadNet name={"unconnected__U27_GPIO24_Pad36_"} connectsTo={[".U27 > .pin36"]}/>
    {/* KiCad net: unconnected-(U27-GPIO25-Pad37) */}
    <KiCadNet name={"unconnected__U27_GPIO25_Pad37_"} connectsTo={[".U27 > .pin37"]}/>
    {/* KiCad net: Net-(U27-GPIO26_ADC0) */}
    <KiCadNet name={"Net__U27_GPIO26_ADC0_"} connectsTo={[".U27 > .pin38", ".R22 > .pin1", ".R21 > .pin2"]}/>
    {/* KiCad net: unconnected-(U27-GPIO27_ADC1-Pad39) */}
    <KiCadNet name={"unconnected__U27_GPIO27_ADC1_Pad39_"} connectsTo={[".U27 > .pin39"]}/>
    {/* KiCad net: unconnected-(U27-GPIO28_ADC2-Pad40) */}
    <KiCadNet name={"unconnected__U27_GPIO28_ADC2_Pad40_"} connectsTo={[".U27 > .pin40"]}/>
    {/* KiCad net: unconnected-(U27-GPIO29_ADC3-Pad41) */}
    <KiCadNet name={"unconnected__U27_GPIO29_ADC3_Pad41_"} connectsTo={[".U27 > .pin41"]}/>
    {/* KiCad net: Net-(U27-USB_DM) */}
    <KiCadNet name={"Net__U27_USB_DM_"} connectsTo={[".U27 > .pin46", ".R54 > .pin2"]}/>
    {/* KiCad net: Net-(U27-USB_DP) */}
    <KiCadNet name={"Net__U27_USB_DP_"} connectsTo={[".U27 > .pin47", ".R53 > .pin2"]}/>
    {/* KiCad net: /Data/QSPI_SD3 */}
    <KiCadNet name={"_Data_QSPI_SD3"} connectsTo={[".U27 > .pin51", ".U8 > .pin7"]}/>
    {/* KiCad net: /Data/QSPI_SCLK */}
    <KiCadNet name={"_Data_QSPI_SCLK"} connectsTo={[".U27 > .pin52", ".U8 > .pin6"]}/>
    {/* KiCad net: /Data/QSPI_SD0 */}
    <KiCadNet name={"_Data_QSPI_SD0"} connectsTo={[".U27 > .pin53", ".U8 > .pin5"]}/>
    {/* KiCad net: /Data/QSPI_SD2 */}
    <KiCadNet name={"_Data_QSPI_SD2"} connectsTo={[".U27 > .pin54", ".U8 > .pin3"]}/>
    {/* KiCad net: /Data/QSPI_SD1 */}
    <KiCadNet name={"_Data_QSPI_SD1"} connectsTo={[".U27 > .pin55", ".U8 > .pin2"]}/>
    {/* KiCad net: /Data/QSPI_SS */}
    <KiCadNet name={"_Data_QSPI_SS"} connectsTo={[".U27 > .pin56", ".U8 > .pin1", ".R50 > .pin2"]}/>
    {/* KiCad net: Net-(U1-RAMP2) */}
    <KiCadNet name={"Net__U1_RAMP2_"} connectsTo={[".R9 > .pin1", ".U1 > .pin19", ".C6 > .pin1"]}/>
    {/* KiCad net: Net-(U74-NRSTI) */}
    <KiCadNet name={"Net__U74_NRSTI_"} connectsTo={[".U74 > .pin2", ".R135 > .pin1"]}/>
    {/* KiCad net: Net-(U74-BI) */}
    <KiCadNet name={"Net__U74_BI_"} connectsTo={[".U74 > .pin3", ".R18 > .pin1"]}/>
    {/* KiCad net: Net-(U74-RO) */}
    <KiCadNet name={"Net__U74_RO_"} connectsTo={[".U74 > .pin4", ".R136 > .pin1"]}/>
    {/* KiCad net: Net-(U74-CLKI) */}
    <KiCadNet name={"Net__U74_CLKI_"} connectsTo={[".U74 > .pin5", ".R137 > .pin1"]}/>
    {/* KiCad net: Net-(U74-CI) */}
    <KiCadNet name={"Net__U74_CI_"} connectsTo={[".U74 > .pin6", ".R138 > .pin1"]}/>
    {/* KiCad net: unconnected-(U74-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U74_INV_CLKO_Pad7_"} connectsTo={[".U74 > .pin7"]}/>
    {/* KiCad net: unconnected-(U74-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U74_TEMP_P_Pad8_"} connectsTo={[".U74 > .pin8"]}/>
    {/* KiCad net: unconnected-(U74-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U74_TEMP_N_Pad9_"} connectsTo={[".U74 > .pin9"]}/>
    {/* KiCad net: /stack7/0V8-2 */}
    <KiCadNet name={"_stack7_0V8_2"} connectsTo={[".U74 > .pin11", ".C257 > .pin1", ".TP147 > .pin1", ".U71 > .pin5", ".C260 > .pin1"]}/>
    {/* KiCad net: unconnected-(U74-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U74_VDDIO_18_1_Pad13_"} connectsTo={[".U74 > .pin13"]}/>
    {/* KiCad net: unconnected-(U74-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U74_VDDIO_08_1_Pad14_"} connectsTo={[".U74 > .pin14"]}/>
    {/* KiCad net: unconnected-(U74-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U74_POR_EN_Pad16_"} connectsTo={[".U74 > .pin16"]}/>
    {/* KiCad net: unconnected-(U74-PIN_MODE-Pad17) */}
    <KiCadNet name={"unconnected__U74_PIN_MODE_Pad17_"} connectsTo={[".U74 > .pin17"]}/>
    {/* KiCad net: Net-(U74-CO) */}
    <KiCadNet name={"Net__U74_CO_"} connectsTo={[".U74 > .pin19", ".R133 > .pin2"]}/>
    {/* KiCad net: Net-(U74-CLKO) */}
    <KiCadNet name={"Net__U74_CLKO_"} connectsTo={[".U74 > .pin20", ".R132 > .pin2"]}/>
    {/* KiCad net: Net-(U74-RI) */}
    <KiCadNet name={"Net__U74_RI_"} connectsTo={[".U74 > .pin21", ".R131 > .pin2"]}/>
    {/* KiCad net: Net-(U74-BO) */}
    <KiCadNet name={"Net__U74_BO_"} connectsTo={[".U74 > .pin22", ".R130 > .pin2"]}/>
    {/* KiCad net: Net-(U74-NRSTO) */}
    <KiCadNet name={"Net__U74_NRSTO_"} connectsTo={[".U74 > .pin23", ".R129 > .pin2", ".R134 > .pin1"]}/>
    {/* KiCad net: /stack7/GND1 */}
    <KiCadNet name={"_stack7_GND1"} connectsTo={[".U74 > .pin25", ".J11 > .pin1", ".U73 > .pin1", ".U73 > .pin10", ".U73 > .pin15", ".U73 > .pin17", ".U73 > .pin18", ".U73 > .pin24", ".U73 > .pin26", ".C275 > .pin1", ".U70 > .pin2", ".U67 > .pin2", ".R123 > .pin2", ".C278 > .pin1", ".C268 > .pin2", ".C269 > .pin1", ".C250 > .pin2", ".C253 > .pin2", ".C259 > .pin2", ".C262 > .pin2", ".C277 > .pin2", ".C247 > .pin2", ".C256 > .pin2", ".C274 > .pin2"]}/>
    {/* KiCad net: Net-(U54-NRSTI) */}
    <KiCadNet name={"Net__U54_NRSTI_"} connectsTo={[".U54 > .pin2", ".R88 > .pin1"]}/>
    {/* KiCad net: Net-(U54-BI) */}
    <KiCadNet name={"Net__U54_BI_"} connectsTo={[".U54 > .pin3", ".R89 > .pin1"]}/>
    {/* KiCad net: Net-(U54-RO) */}
    <KiCadNet name={"Net__U54_RO_"} connectsTo={[".U54 > .pin4", ".R90 > .pin1"]}/>
    {/* KiCad net: Net-(U54-CLKI) */}
    <KiCadNet name={"Net__U54_CLKI_"} connectsTo={[".U54 > .pin5", ".R91 > .pin1"]}/>
    {/* KiCad net: Net-(U54-CI) */}
    <KiCadNet name={"Net__U54_CI_"} connectsTo={[".U54 > .pin6", ".R92 > .pin1"]}/>
    {/* KiCad net: unconnected-(U54-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U54_INV_CLKO_Pad7_"} connectsTo={[".U54 > .pin7"]}/>
    {/* KiCad net: unconnected-(U54-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U54_TEMP_P_Pad8_"} connectsTo={[".U54 > .pin8"]}/>
    {/* KiCad net: unconnected-(U54-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U54_TEMP_N_Pad9_"} connectsTo={[".U54 > .pin9"]}/>
    {/* KiCad net: unconnected-(U54-VDDIO_08_0-Pad11) */}
    <KiCadNet name={"unconnected__U54_VDDIO_08_0_Pad11_"} connectsTo={[".U54 > .pin11"]}/>
    {/* KiCad net: unconnected-(U54-VDDIO_18_0-Pad12) */}
    <KiCadNet name={"unconnected__U54_VDDIO_18_0_Pad12_"} connectsTo={[".U54 > .pin12"]}/>
    {/* KiCad net: /stack5/1V2-0 */}
    <KiCadNet name={"_stack5_1V2_0"} connectsTo={[".U54 > .pin13", ".C183 > .pin1", ".TP100 > .pin1", ".U48 > .pin5", ".C195 > .pin1", ".R66 > .pin1"]}/>
    {/* KiCad net: /stack5/0V8-0 */}
    <KiCadNet name={"_stack5_0V8_0"} connectsTo={[".U54 > .pin14", ".C192 > .pin1", ".C189 > .pin1", ".TP103 > .pin1", ".U51 > .pin5"]}/>
    {/* KiCad net: unconnected-(U54-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U54_POR_EN_Pad16_"} connectsTo={[".U54 > .pin16"]}/>
    {/* KiCad net: unconnected-(U54-PIN_MODE-Pad17) */}
    <KiCadNet name={"unconnected__U54_PIN_MODE_Pad17_"} connectsTo={[".U54 > .pin17"]}/>
    {/* KiCad net: Net-(U54-CO) */}
    <KiCadNet name={"Net__U54_CO_"} connectsTo={[".U54 > .pin19", ".R94 > .pin1"]}/>
    {/* KiCad net: Net-(U54-CLKO) */}
    <KiCadNet name={"Net__U54_CLKO_"} connectsTo={[".U54 > .pin20", ".R96 > .pin1"]}/>
    {/* KiCad net: Net-(U54-RI) */}
    <KiCadNet name={"Net__U54_RI_"} connectsTo={[".U54 > .pin21", ".R98 > .pin1", ".R66 > .pin2", ".TP106 > .pin1"]}/>
    {/* KiCad net: Net-(U54-BO) */}
    <KiCadNet name={"Net__U54_BO_"} connectsTo={[".U54 > .pin22", ".R100 > .pin1"]}/>
    {/* KiCad net: Net-(U54-NRSTO) */}
    <KiCadNet name={"Net__U54_NRSTO_"} connectsTo={[".U54 > .pin23", ".R104 > .pin1", ".R102 > .pin1"]}/>
    {/* KiCad net: Net-(U1-HO1) */}
    <KiCadNet name={"Net__U1_HO1_"} connectsTo={[".R23 > .pin1", ".U1 > .pin31"]}/>
    {/* KiCad net: Net-(Q1-G) */}
    <KiCadNet name={"Net__Q1_G_"} connectsTo={[".R23 > .pin2", ".Q1 > .pin4"]}/>
    {/* KiCad net: Net-(U46-NRSTI) */}
    <KiCadNet name={"Net__U46_NRSTI_"} connectsTo={[".U46 > .pin2", ".R57 > .pin1"]}/>
    {/* KiCad net: Net-(U46-BI) */}
    <KiCadNet name={"Net__U46_BI_"} connectsTo={[".U46 > .pin3", ".R58 > .pin1"]}/>
    {/* KiCad net: Net-(U46-RO) */}
    <KiCadNet name={"Net__U46_RO_"} connectsTo={[".U46 > .pin4", ".R59 > .pin1"]}/>
    {/* KiCad net: Net-(U46-CLKI) */}
    <KiCadNet name={"Net__U46_CLKI_"} connectsTo={[".U46 > .pin5", ".R60 > .pin1"]}/>
    {/* KiCad net: Net-(U46-CI) */}
    <KiCadNet name={"Net__U46_CI_"} connectsTo={[".U46 > .pin6", ".R62 > .pin1"]}/>
    {/* KiCad net: unconnected-(U46-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U46_INV_CLKO_Pad7_"} connectsTo={[".U46 > .pin7"]}/>
    {/* KiCad net: unconnected-(U46-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U46_TEMP_P_Pad8_"} connectsTo={[".U46 > .pin8"]}/>
    {/* KiCad net: unconnected-(U46-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U46_TEMP_N_Pad9_"} connectsTo={[".U46 > .pin9"]}/>
    {/* KiCad net: /stack4/0V8-1 */}
    <KiCadNet name={"_stack4_0V8_1"} connectsTo={[".U46 > .pin11", ".U42 > .pin5", ".TP55 > .pin1", ".C160 > .pin1", ".C156 > .pin1"]}/>
    {/* KiCad net: /stack4/1V2-1 */}
    <KiCadNet name={"_stack4_1V2_1"} connectsTo={[".U46 > .pin12", ".TP52 > .pin1", ".C116 > .pin1", ".C163 > .pin1", ".U29 > .pin5"]}/>
    {/* KiCad net: unconnected-(U46-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U46_VDDIO_18_1_Pad13_"} connectsTo={[".U46 > .pin13"]}/>
    {/* KiCad net: unconnected-(U46-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U46_VDDIO_08_1_Pad14_"} connectsTo={[".U46 > .pin14"]}/>
    {/* KiCad net: unconnected-(U46-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U46_POR_EN_Pad16_"} connectsTo={[".U46 > .pin16"]}/>
    {/* KiCad net: unconnected-(U46-PIN_MODE-Pad17) */}
    <KiCadNet name={"unconnected__U46_PIN_MODE_Pad17_"} connectsTo={[".U46 > .pin17"]}/>
    {/* KiCad net: Net-(U46-CO) */}
    <KiCadNet name={"Net__U46_CO_"} connectsTo={[".U46 > .pin19", ".R83 > .pin2"]}/>
    {/* KiCad net: Net-(U46-CLKO) */}
    <KiCadNet name={"Net__U46_CLKO_"} connectsTo={[".U46 > .pin20", ".R79 > .pin2"]}/>
    {/* KiCad net: Net-(U46-RI) */}
    <KiCadNet name={"Net__U46_RI_"} connectsTo={[".U46 > .pin21", ".R75 > .pin2"]}/>
    {/* KiCad net: Net-(U46-BO) */}
    <KiCadNet name={"Net__U46_BO_"} connectsTo={[".U46 > .pin22", ".R65 > .pin2"]}/>
    {/* KiCad net: Net-(U46-NRSTO) */}
    <KiCadNet name={"Net__U46_NRSTO_"} connectsTo={[".U46 > .pin23", ".R63 > .pin2", ".R85 > .pin1"]}/>
    {/* KiCad net: /stack4/GND0 */}
    <KiCadNet name={"_stack4_GND0"} connectsTo={[".U46 > .pin25", ".J3 > .pin1", ".U45 > .pin1", ".U45 > .pin10", ".U45 > .pin15", ".U45 > .pin17", ".U45 > .pin18", ".U45 > .pin24", ".U45 > .pin26", ".C118 > .pin2", ".U28 > .pin2", ".C159 > .pin2", ".C174 > .pin2", ".C177 > .pin2", ".U32 > .pin2", ".C111 > .pin2", ".C175 > .pin1", ".C168 > .pin2", ".C115 > .pin2", ".C162 > .pin2", ".C122 > .pin2", ".R86 > .pin2", ".C178 > .pin1", ".C169 > .pin1"]}/>
    {/* KiCad net: Net-(J6-CC2) */}
    <KiCadNet name={"Net__J6_CC2_"} connectsTo={[".R52 > .pin2", ".J6 > .pin9"]}/>
    {/* KiCad net: /Data/USB_DP */}
    <KiCadNet name={"_Data_USB_DP"} connectsTo={[".R53 > .pin1", ".J6 > .pin4", ".J6 > .pin10"]}/>
    {/* KiCad net: /5V */}
    <KiCadNet name={"_5V"} connectsTo={[".U9 > .pin2", ".U10 > .pin3", ".J6 > .pin2", ".J6 > .pin8", ".C90 > .pin1", ".C118 > .pin1", ".U28 > .pin1", ".U28 > .pin3", ".C215 > .pin1", ".U52 > .pin1", ".U52 > .pin3", ".U68 > .pin1", ".U68 > .pin3", ".U70 > .pin1", ".U70 > .pin3", ".C120 > .pin1", ".U42 > .pin1", ".U42 > .pin3", ".U48 > .pin1", ".U48 > .pin3", ".C112 > .pin1", ".C181 > .pin1", ".C248 > .pin1", ".C246 > .pin1", ".U67 > .pin1", ".U67 > .pin3", ".U50 > .pin1", ".U50 > .pin3", ".U58 > .pin1", ".U58 > .pin3", ".U32 > .pin1", ".U32 > .pin3", ".C113 > .pin1", ".U57 > .pin1", ".U57 > .pin3", ".C219 > .pin1", ".C188 > .pin1", ".U51 > .pin1", ".U51 > .pin3", ".C187 > .pin1", ".U66 > .pin1", ".U66 > .pin3", ".U62 > .pin1", ".U62 > .pin3", ".C220 > .pin1", ".U59 > .pin1", ".U59 > .pin3", ".U30 > .pin1", ".U30 > .pin3", ".U60 > .pin1", ".U60 > .pin3", ".C221 > .pin1", ".C213 > .pin1", ".C186 > .pin1", ".U43 > .pin1", ".U43 > .pin3", ".C180 > .pin1", ".U61 > .pin1", ".U61 > .pin3", ".C253 > .pin1", ".C111 > .pin1", ".C119 > .pin1", ".U69 > .pin1", ".U69 > .pin3", ".C214 > .pin1", ".C254 > .pin1", ".C247 > .pin1", ".U71 > .pin1", ".U71 > .pin3", ".U53 > .pin1", ".U53 > .pin3", ".C252 > .pin1", ".U49 > .pin1", ".U49 > .pin3", ".U29 > .pin1", ".U29 > .pin3", ".C182 > .pin1"]}/>
    {/* KiCad net: unconnected-(U9-DOUT-Pad3) */}
    <KiCadNet name={"unconnected__U9_DOUT_Pad3_"} connectsTo={[".U9 > .pin3"]}/>
    {/* KiCad net: Net-(U1-COMP1) */}
    <KiCadNet name={"Net__U1_COMP1_"} connectsTo={[".R4 > .pin2", ".U1 > .pin10", ".U1 > .pin15", ".C12 > .pin2"]}/>
    {/* KiCad net: unconnected-(U7-ALERT-Pad3) */}
    <KiCadNet name={"unconnected__U7_ALERT_Pad3_"} connectsTo={[".U7 > .pin3"]}/>
    {/* KiCad net: Net-(U45-CO) */}
    <KiCadNet name={"Net__U45_CO_"} connectsTo={[".U45 > .pin2", ".TP95 > .pin1"]}/>
    {/* KiCad net: Net-(U45-CLKO) */}
    <KiCadNet name={"Net__U45_CLKO_"} connectsTo={[".U45 > .pin3", ".TP96 > .pin1"]}/>
    {/* KiCad net: Net-(U45-RI) */}
    <KiCadNet name={"Net__U45_RI_"} connectsTo={[".U45 > .pin4", ".R64 > .pin2", ".TP97 > .pin1"]}/>
    {/* KiCad net: Net-(U45-BO) */}
    <KiCadNet name={"Net__U45_BO_"} connectsTo={[".U45 > .pin5", ".TP98 > .pin1"]}/>
    {/* KiCad net: Net-(U45-NRSTO) */}
    <KiCadNet name={"Net__U45_NRSTO_"} connectsTo={[".U45 > .pin6", ".TP99 > .pin1", ".R86 > .pin1"]}/>
    {/* KiCad net: unconnected-(U45-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U45_INV_CLKO_Pad7_"} connectsTo={[".U45 > .pin7"]}/>
    {/* KiCad net: unconnected-(U45-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U45_TEMP_P_Pad8_"} connectsTo={[".U45 > .pin8"]}/>
    {/* KiCad net: unconnected-(U45-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U45_TEMP_N_Pad9_"} connectsTo={[".U45 > .pin9"]}/>
    {/* KiCad net: /stack4/0V8-0 */}
    <KiCadNet name={"_stack4_0V8_0"} connectsTo={[".U45 > .pin11", ".C159 > .pin1", ".TP54 > .pin1", ".U32 > .pin5", ".C122 > .pin1"]}/>
    {/* KiCad net: /stack4/1V2-0 */}
    <KiCadNet name={"_stack4_1V2_0"} connectsTo={[".U45 > .pin12", ".U28 > .pin5", ".R64 > .pin1", ".TP51 > .pin1", ".C115 > .pin1", ".C162 > .pin1"]}/>
    {/* KiCad net: unconnected-(U45-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U45_VDDIO_18_1_Pad13_"} connectsTo={[".U45 > .pin13"]}/>
    {/* KiCad net: unconnected-(U45-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U45_VDDIO_08_1_Pad14_"} connectsTo={[".U45 > .pin14"]}/>
    {/* KiCad net: unconnected-(U45-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U45_POR_EN_Pad16_"} connectsTo={[".U45 > .pin16"]}/>
    {/* KiCad net: Net-(U45-NRSTI) */}
    <KiCadNet name={"Net__U45_NRSTI_"} connectsTo={[".U45 > .pin19", ".R63 > .pin1"]}/>
    {/* KiCad net: Net-(U45-BI) */}
    <KiCadNet name={"Net__U45_BI_"} connectsTo={[".U45 > .pin20", ".R65 > .pin1"]}/>
    {/* KiCad net: Net-(U45-RO) */}
    <KiCadNet name={"Net__U45_RO_"} connectsTo={[".U45 > .pin21", ".R75 > .pin1"]}/>
    {/* KiCad net: Net-(U45-CLKI) */}
    <KiCadNet name={"Net__U45_CLKI_"} connectsTo={[".U45 > .pin22", ".R79 > .pin1"]}/>
    {/* KiCad net: Net-(U45-CI) */}
    <KiCadNet name={"Net__U45_CI_"} connectsTo={[".U45 > .pin23", ".R83 > .pin1"]}/>
    {/* KiCad net: /stack7/GND0 */}
    <KiCadNet name={"_stack7_GND0"} connectsTo={[".J10 > .pin1", ".U72 > .pin1", ".U72 > .pin10", ".U72 > .pin15", ".U72 > .pin18", ".U72 > .pin24", ".U72 > .pin26", ".U73 > .pin25", ".C258 > .pin2", ".R17 > .pin2", ".C261 > .pin2", ".C246 > .pin2", ".U66 > .pin2", ".C268 > .pin1", ".C249 > .pin2", ".C255 > .pin2", ".C276 > .pin2", ".C273 > .pin2", ".U69 > .pin2", ".C277 > .pin1", ".C267 > .pin2", ".C252 > .pin2", ".C274 > .pin1"]}/>
    {/* KiCad net: /Power/VIN */}
    <KiCadNet name={"_Power_VIN"} connectsTo={[".J1 > .pin1", ".U3 > .pin1", ".U3 > .pin2", ".U3 > .pin3", ".U3 > .pin12"]}/>
    {/* KiCad net: unconnected-(H5-Pad1) */}
    <KiCadNet name={"unconnected__H5_Pad1_"} connectsTo={[".H5 > .pin1"]}/>
    {/* KiCad net: Net-(U72-NRSTI) */}
    <KiCadNet name={"Net__U72_NRSTI_"} connectsTo={[".U72 > .pin2", ".R124 > .pin1"]}/>
    {/* KiCad net: Net-(U72-BI) */}
    <KiCadNet name={"Net__U72_BI_"} connectsTo={[".U72 > .pin3", ".R125 > .pin1"]}/>
    {/* KiCad net: Net-(U72-RO) */}
    <KiCadNet name={"Net__U72_RO_"} connectsTo={[".U72 > .pin4", ".R126 > .pin1"]}/>
    {/* KiCad net: Net-(U72-CLKI) */}
    <KiCadNet name={"Net__U72_CLKI_"} connectsTo={[".U72 > .pin5", ".R127 > .pin1"]}/>
    {/* KiCad net: Net-(U72-CI) */}
    <KiCadNet name={"Net__U72_CI_"} connectsTo={[".U72 > .pin6", ".R128 > .pin1"]}/>
    {/* KiCad net: unconnected-(U72-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U72_INV_CLKO_Pad7_"} connectsTo={[".U72 > .pin7"]}/>
    {/* KiCad net: unconnected-(U72-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U72_TEMP_P_Pad8_"} connectsTo={[".U72 > .pin8"]}/>
    {/* KiCad net: unconnected-(U72-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U72_TEMP_N_Pad9_"} connectsTo={[".U72 > .pin9"]}/>
    {/* KiCad net: /stack7/0V8-0 */}
    <KiCadNet name={"_stack7_0V8_0"} connectsTo={[".U72 > .pin11", ".C258 > .pin1", ".C255 > .pin1", ".U69 > .pin5", ".TP145 > .pin1"]}/>
    {/* KiCad net: /stack7/1V2-0 */}
    <KiCadNet name={"_stack7_1V2_0"} connectsTo={[".U72 > .pin12", ".C261 > .pin1", ".U66 > .pin5", ".TP142 > .pin1", ".C249 > .pin1"]}/>
    {/* KiCad net: /stack7/1V2-0B */}
    <KiCadNet name={"_stack7_1V2_0B"} connectsTo={[".U72 > .pin13", ".R68 > .pin1"]}/>
    {/* KiCad net: unconnected-(U72-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U72_VDDIO_08_1_Pad14_"} connectsTo={[".U72 > .pin14"]}/>
    {/* KiCad net: unconnected-(U72-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U72_POR_EN_Pad16_"} connectsTo={[".U72 > .pin16"]}/>
    {/* KiCad net: unconnected-(U72-PIN_MODE-Pad17) */}
    <KiCadNet name={"unconnected__U72_PIN_MODE_Pad17_"} connectsTo={[".U72 > .pin17"]}/>
    {/* KiCad net: Net-(U72-CO) */}
    <KiCadNet name={"Net__U72_CO_"} connectsTo={[".U72 > .pin19", ".R12 > .pin1"]}/>
    {/* KiCad net: Net-(U72-CLKO) */}
    <KiCadNet name={"Net__U72_CLKO_"} connectsTo={[".U72 > .pin20", ".R13 > .pin1"]}/>
    {/* KiCad net: Net-(U72-RI) */}
    <KiCadNet name={"Net__U72_RI_"} connectsTo={[".U72 > .pin21", ".R68 > .pin2", ".R14 > .pin1", ".TP108 > .pin1"]}/>
    {/* KiCad net: Net-(U72-BO) */}
    <KiCadNet name={"Net__U72_BO_"} connectsTo={[".U72 > .pin22", ".R15 > .pin1"]}/>
    {/* KiCad net: Net-(U72-NRSTO) */}
    <KiCadNet name={"Net__U72_NRSTO_"} connectsTo={[".U72 > .pin23", ".R17 > .pin1", ".R16 > .pin1"]}/>
    {/* KiCad net: Net-(D2-A) */}
    <KiCadNet name={"Net__D2_A_"} connectsTo={[".D2 > .pin2", ".U1 > .pin16", ".U1 > .pin24", ".C14 > .pin2"]}/>
    {/* KiCad net: unconnected-(L1-NC-Pad3) */}
    <KiCadNet name={"unconnected__L1_NC_Pad3_"} connectsTo={[".L1 > .pin3"]}/>
    {/* KiCad net: /stack6/GND0 */}
    <KiCadNet name={"_stack6_GND0"} connectsTo={[".J8 > .pin1", ".U63 > .pin1", ".U63 > .pin10", ".U63 > .pin15", ".U63 > .pin17", ".U63 > .pin18", ".U63 > .pin24", ".U63 > .pin26", ".U64 > .pin25", ".C240 > .pin2", ".C228 > .pin2", ".R122 > .pin2", ".C234 > .pin2", ".U57 > .pin2", ".C219 > .pin2", ".U60 > .pin2", ".C213 > .pin2", ".C244 > .pin1", ".C241 > .pin1", ".C225 > .pin2", ".C235 > .pin1", ".C243 > .pin2", ".C216 > .pin2", ".C222 > .pin2"]}/>
    {/* KiCad net: Net-(U63-CO) */}
    <KiCadNet name={"Net__U63_CO_"} connectsTo={[".U63 > .pin2", ".R120 > .pin1"]}/>
    {/* KiCad net: Net-(U63-CLKO) */}
    <KiCadNet name={"Net__U63_CLKO_"} connectsTo={[".U63 > .pin3", ".R118 > .pin1"]}/>
    {/* KiCad net: Net-(U63-RI) */}
    <KiCadNet name={"Net__U63_RI_"} connectsTo={[".U63 > .pin4", ".R67 > .pin2", ".TP107 > .pin1", ".R116 > .pin1"]}/>
    {/* KiCad net: Net-(U63-BO) */}
    <KiCadNet name={"Net__U63_BO_"} connectsTo={[".U63 > .pin5", ".R114 > .pin1"]}/>
    {/* KiCad net: Net-(U63-NRSTO) */}
    <KiCadNet name={"Net__U63_NRSTO_"} connectsTo={[".U63 > .pin6", ".R122 > .pin1", ".R112 > .pin1"]}/>
    {/* KiCad net: unconnected-(U63-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U63_INV_CLKO_Pad7_"} connectsTo={[".U63 > .pin7"]}/>
    {/* KiCad net: unconnected-(U63-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U63_TEMP_P_Pad8_"} connectsTo={[".U63 > .pin8"]}/>
    {/* KiCad net: unconnected-(U63-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U63_TEMP_N_Pad9_"} connectsTo={[".U63 > .pin9"]}/>
    {/* KiCad net: /stack6/0V8-0 */}
    <KiCadNet name={"_stack6_0V8_0"} connectsTo={[".U63 > .pin11", ".TP124 > .pin1", ".U60 > .pin5", ".C225 > .pin1", ".C222 > .pin1"]}/>
    {/* KiCad net: /stack6/1V2-0B */}
    <KiCadNet name={"_stack6_1V2_0B"} connectsTo={[".U63 > .pin12", ".R67 > .pin1"]}/>
    {/* KiCad net: /stack6/1V2-0 */}
    <KiCadNet name={"_stack6_1V2_0"} connectsTo={[".U63 > .pin13", ".C228 > .pin1", ".U57 > .pin5", ".TP121 > .pin1", ".C216 > .pin1"]}/>
    {/* KiCad net: unconnected-(U63-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U63_VDDIO_08_1_Pad14_"} connectsTo={[".U63 > .pin14"]}/>
    {/* KiCad net: unconnected-(U63-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U63_POR_EN_Pad16_"} connectsTo={[".U63 > .pin16"]}/>
    {/* KiCad net: Net-(U63-NRSTI) */}
    <KiCadNet name={"Net__U63_NRSTI_"} connectsTo={[".U63 > .pin19", ".R111 > .pin1"]}/>
    {/* KiCad net: Net-(U63-BI) */}
    <KiCadNet name={"Net__U63_BI_"} connectsTo={[".U63 > .pin20", ".R113 > .pin1"]}/>
    {/* KiCad net: Net-(U63-RO) */}
    <KiCadNet name={"Net__U63_RO_"} connectsTo={[".U63 > .pin21", ".R115 > .pin1"]}/>
    {/* KiCad net: Net-(U63-CLKI) */}
    <KiCadNet name={"Net__U63_CLKI_"} connectsTo={[".U63 > .pin22", ".R117 > .pin1"]}/>
    {/* KiCad net: Net-(U63-CI) */}
    <KiCadNet name={"Net__U63_CI_"} connectsTo={[".U63 > .pin23", ".R119 > .pin1"]}/>
    {/* KiCad net: /stack5/GND2 */}
    <KiCadNet name={"_stack5_GND2"} connectsTo={[".U63 > .pin25", ".J15 > .pin1", ".U56 > .pin1", ".U56 > .pin10", ".U56 > .pin15", ".U56 > .pin18", ".U56 > .pin24", ".U56 > .pin26", ".J14 > .pin1", ".C191 > .pin2", ".C240 > .pin1", ".U50 > .pin2", ".C212 > .pin2", ".C234 > .pin1", ".C185 > .pin2", ".C188 > .pin2", ".C197 > .pin2", ".C194 > .pin2", ".R103 > .pin2", ".C209 > .pin2", ".C243 > .pin1", ".U53 > .pin2", ".C203 > .pin2", ".C182 > .pin2"]}/>
    {/* KiCad net: Net-(U64-NRSTI) */}
    <KiCadNet name={"Net__U64_NRSTI_"} connectsTo={[".U64 > .pin2", ".R106 > .pin1"]}/>
    {/* KiCad net: Net-(U64-BI) */}
    <KiCadNet name={"Net__U64_BI_"} connectsTo={[".U64 > .pin3", ".R107 > .pin1"]}/>
    {/* KiCad net: Net-(U64-RO) */}
    <KiCadNet name={"Net__U64_RO_"} connectsTo={[".U64 > .pin4", ".R108 > .pin1"]}/>
    {/* KiCad net: Net-(U64-CLKI) */}
    <KiCadNet name={"Net__U64_CLKI_"} connectsTo={[".U64 > .pin5", ".R109 > .pin1"]}/>
    {/* KiCad net: Net-(U64-CI) */}
    <KiCadNet name={"Net__U64_CI_"} connectsTo={[".U64 > .pin6", ".R110 > .pin1"]}/>
    {/* KiCad net: unconnected-(U64-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U64_INV_CLKO_Pad7_"} connectsTo={[".U64 > .pin7"]}/>
    {/* KiCad net: unconnected-(U64-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U64_TEMP_P_Pad8_"} connectsTo={[".U64 > .pin8"]}/>
    {/* KiCad net: unconnected-(U64-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U64_TEMP_N_Pad9_"} connectsTo={[".U64 > .pin9"]}/>
    {/* KiCad net: unconnected-(U64-VDDIO_08_0-Pad11) */}
    <KiCadNet name={"unconnected__U64_VDDIO_08_0_Pad11_"} connectsTo={[".U64 > .pin11"]}/>
    {/* KiCad net: /stack6/1V2-1 */}
    <KiCadNet name={"_stack6_1V2_1"} connectsTo={[".U64 > .pin12", ".U58 > .pin5", ".C229 > .pin1", ".TP122 > .pin1", ".C217 > .pin1"]}/>
    {/* KiCad net: unconnected-(U64-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U64_VDDIO_18_1_Pad13_"} connectsTo={[".U64 > .pin13"]}/>
    {/* KiCad net: /stack6/0V8-1 */}
    <KiCadNet name={"_stack6_0V8_1"} connectsTo={[".U64 > .pin14", ".C223 > .pin1", ".U61 > .pin5", ".C226 > .pin1", ".TP125 > .pin1"]}/>
    {/* KiCad net: unconnected-(U64-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U64_POR_EN_Pad16_"} connectsTo={[".U64 > .pin16"]}/>
    {/* KiCad net: unconnected-(U64-PIN_MODE-Pad17) */}
    <KiCadNet name={"unconnected__U64_PIN_MODE_Pad17_"} connectsTo={[".U64 > .pin17"]}/>
    {/* KiCad net: Net-(U64-CO) */}
    <KiCadNet name={"Net__U64_CO_"} connectsTo={[".U64 > .pin19", ".R119 > .pin2"]}/>
    {/* KiCad net: Net-(U64-CLKO) */}
    <KiCadNet name={"Net__U64_CLKO_"} connectsTo={[".U64 > .pin20", ".R117 > .pin2"]}/>
    {/* KiCad net: Net-(U64-RI) */}
    <KiCadNet name={"Net__U64_RI_"} connectsTo={[".U64 > .pin21", ".R115 > .pin2"]}/>
    {/* KiCad net: Net-(U64-BO) */}
    <KiCadNet name={"Net__U64_BO_"} connectsTo={[".U64 > .pin22", ".R113 > .pin2"]}/>
    {/* KiCad net: Net-(U64-NRSTO) */}
    <KiCadNet name={"Net__U64_NRSTO_"} connectsTo={[".U64 > .pin23", ".R121 > .pin1", ".R111 > .pin2"]}/>
    {/* KiCad net: /Power/LOOP1 */}
    <KiCadNet name={"_Power_LOOP1"} connectsTo={[".R31 > .pin2", ".Q2 > .pin1", ".Q2 > .pin2", ".Q2 > .pin3", ".R8 > .pin1"]}/>
    {/* KiCad net: Net-(J6-CC1) */}
    <KiCadNet name={"Net__J6_CC1_"} connectsTo={[".J6 > .pin3", ".R51 > .pin2"]}/>
    {/* KiCad net: /Data/USB_DN */}
    <KiCadNet name={"_Data_USB_DN"} connectsTo={[".J6 > .pin5", ".J6 > .pin11", ".R54 > .pin1"]}/>
    {/* KiCad net: Net-(U73-CO) */}
    <KiCadNet name={"Net__U73_CO_"} connectsTo={[".U73 > .pin2", ".R128 > .pin2"]}/>
    {/* KiCad net: Net-(U73-CLKO) */}
    <KiCadNet name={"Net__U73_CLKO_"} connectsTo={[".U73 > .pin3", ".R127 > .pin2"]}/>
    {/* KiCad net: Net-(U73-RI) */}
    <KiCadNet name={"Net__U73_RI_"} connectsTo={[".U73 > .pin4", ".R126 > .pin2"]}/>
    {/* KiCad net: Net-(U73-BO) */}
    <KiCadNet name={"Net__U73_BO_"} connectsTo={[".U73 > .pin5", ".R125 > .pin2"]}/>
    {/* KiCad net: Net-(U73-NRSTO) */}
    <KiCadNet name={"Net__U73_NRSTO_"} connectsTo={[".U73 > .pin6", ".R123 > .pin1", ".R124 > .pin2"]}/>
    {/* KiCad net: unconnected-(U73-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U73_INV_CLKO_Pad7_"} connectsTo={[".U73 > .pin7"]}/>
    {/* KiCad net: unconnected-(U73-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U73_TEMP_P_Pad8_"} connectsTo={[".U73 > .pin8"]}/>
    {/* KiCad net: unconnected-(U73-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U73_TEMP_N_Pad9_"} connectsTo={[".U73 > .pin9"]}/>
    {/* KiCad net: /stack7/0V8-1 */}
    <KiCadNet name={"_stack7_0V8_1"} connectsTo={[".U73 > .pin11", ".U70 > .pin5", ".TP146 > .pin1", ".C259 > .pin1", ".C256 > .pin1"]}/>
    {/* KiCad net: /stack7/1V2-1 */}
    <KiCadNet name={"_stack7_1V2_1"} connectsTo={[".U73 > .pin12", ".U67 > .pin5", ".TP143 > .pin1", ".C250 > .pin1", ".C262 > .pin1"]}/>
    {/* KiCad net: unconnected-(U73-VDDIO_18_1-Pad13) */}
    <KiCadNet name={"unconnected__U73_VDDIO_18_1_Pad13_"} connectsTo={[".U73 > .pin13"]}/>
    {/* KiCad net: unconnected-(U73-VDDIO_08_1-Pad14) */}
    <KiCadNet name={"unconnected__U73_VDDIO_08_1_Pad14_"} connectsTo={[".U73 > .pin14"]}/>
    {/* KiCad net: unconnected-(U73-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U73_POR_EN_Pad16_"} connectsTo={[".U73 > .pin16"]}/>
    {/* KiCad net: Net-(U73-NRSTI) */}
    <KiCadNet name={"Net__U73_NRSTI_"} connectsTo={[".U73 > .pin19", ".R129 > .pin1"]}/>
    {/* KiCad net: Net-(U73-BI) */}
    <KiCadNet name={"Net__U73_BI_"} connectsTo={[".U73 > .pin20", ".R130 > .pin1"]}/>
    {/* KiCad net: Net-(U73-RO) */}
    <KiCadNet name={"Net__U73_RO_"} connectsTo={[".U73 > .pin21", ".R131 > .pin1"]}/>
    {/* KiCad net: Net-(U73-CLKI) */}
    <KiCadNet name={"Net__U73_CLKI_"} connectsTo={[".U73 > .pin22", ".R132 > .pin1"]}/>
    {/* KiCad net: Net-(U73-CI) */}
    <KiCadNet name={"Net__U73_CI_"} connectsTo={[".U73 > .pin23", ".R133 > .pin1"]}/>
    {/* KiCad net: Net-(U1-LO2) */}
    <KiCadNet name={"Net__U1_LO2_"} connectsTo={[".R25 > .pin1", ".U1 > .pin23"]}/>
    {/* KiCad net: Net-(Q2-G) */}
    <KiCadNet name={"Net__Q2_G_"} connectsTo={[".Q2 > .pin4", ".R24 > .pin2"]}/>
    {/* KiCad net: /stack5/NRSTI */}
    <KiCadNet name={"_stack5_NRSTI"} connectsTo={[".U56 > .pin2", ".R112 > .pin2"]}/>
    {/* KiCad net: /stack5/BI */}
    <KiCadNet name={"_stack5_BI"} connectsTo={[".U56 > .pin3", ".R114 > .pin2"]}/>
    {/* KiCad net: /stack5/RO */}
    <KiCadNet name={"_stack5_RO"} connectsTo={[".U56 > .pin4", ".R116 > .pin2"]}/>
    {/* KiCad net: /stack5/CLKI */}
    <KiCadNet name={"_stack5_CLKI"} connectsTo={[".U56 > .pin5", ".R118 > .pin2"]}/>
    {/* KiCad net: /stack5/CI */}
    <KiCadNet name={"_stack5_CI"} connectsTo={[".U56 > .pin6", ".R120 > .pin2"]}/>
    {/* KiCad net: unconnected-(U56-INV_CLKO-Pad7) */}
    <KiCadNet name={"unconnected__U56_INV_CLKO_Pad7_"} connectsTo={[".U56 > .pin7"]}/>
    {/* KiCad net: unconnected-(U56-TEMP_P-Pad8) */}
    <KiCadNet name={"unconnected__U56_TEMP_P_Pad8_"} connectsTo={[".U56 > .pin8"]}/>
    {/* KiCad net: unconnected-(U56-TEMP_N-Pad9) */}
    <KiCadNet name={"unconnected__U56_TEMP_N_Pad9_"} connectsTo={[".U56 > .pin9"]}/>
    {/* KiCad net: unconnected-(U56-VDDIO_08_0-Pad11) */}
    <KiCadNet name={"unconnected__U56_VDDIO_08_0_Pad11_"} connectsTo={[".U56 > .pin11"]}/>
    {/* KiCad net: unconnected-(U56-VDDIO_18_0-Pad12) */}
    <KiCadNet name={"unconnected__U56_VDDIO_18_0_Pad12_"} connectsTo={[".U56 > .pin12"]}/>
    {/* KiCad net: /stack5/1V2-2 */}
    <KiCadNet name={"_stack5_1V2_2"} connectsTo={[".U56 > .pin13", ".U50 > .pin5", ".C185 > .pin1", ".C197 > .pin1", ".TP102 > .pin1"]}/>
    {/* KiCad net: /stack5/0V8-2 */}
    <KiCadNet name={"_stack5_0V8_2"} connectsTo={[".U56 > .pin14", ".C191 > .pin1", ".C194 > .pin1", ".TP105 > .pin1", ".U53 > .pin5"]}/>
    {/* KiCad net: unconnected-(U56-POR_EN-Pad16) */}
    <KiCadNet name={"unconnected__U56_POR_EN_Pad16_"} connectsTo={[".U56 > .pin16"]}/>
    {/* KiCad net: unconnected-(U56-PIN_MODE-Pad17) */}
    <KiCadNet name={"unconnected__U56_PIN_MODE_Pad17_"} connectsTo={[".U56 > .pin17"]}/>
    {/* KiCad net: Net-(U56-CO) */}
    <KiCadNet name={"Net__U56_CO_"} connectsTo={[".U56 > .pin19", ".R101 > .pin2"]}/>
    {/* KiCad net: Net-(U56-CLKO) */}
    <KiCadNet name={"Net__U56_CLKO_"} connectsTo={[".U56 > .pin20", ".R99 > .pin2"]}/>
    {/* KiCad net: Net-(U56-RI) */}
    <KiCadNet name={"Net__U56_RI_"} connectsTo={[".U56 > .pin21", ".R97 > .pin2"]}/>
    {/* KiCad net: Net-(U56-BO) */}
    <KiCadNet name={"Net__U56_BO_"} connectsTo={[".U56 > .pin22", ".R95 > .pin2"]}/>
    {/* KiCad net: Net-(U56-NRSTO) */}
    <KiCadNet name={"Net__U56_NRSTO_"} connectsTo={[".U56 > .pin23", ".R103 > .pin1", ".R93 > .pin2"]}/>
    {/* KiCad net: /Power/VIN_M */}
    <KiCadNet name={"_Power_VIN_M"} connectsTo={[".C4 > .pin1", ".C2 > .pin1", ".C1 > .pin1", ".U1 > .pin29", ".R1 > .pin1", ".Q3 > .pin5", ".Q3 > .pin6", ".Q3 > .pin7", ".Q3 > .pin8", ".Q1 > .pin5", ".Q1 > .pin6", ".Q1 > .pin7", ".Q1 > .pin8", ".U3 > .pin14", ".U3 > .pin15", ".U3 > .pin16", ".C3 > .pin1"]}/>
    {/* KiCad net: Net-(U1-HO2) */}
    <KiCadNet name={"Net__U1_HO2_"} connectsTo={[".R26 > .pin1", ".U1 > .pin26"]}/>
    {/* KiCad net: Net-(Q3-G) */}
    <KiCadNet name={"Net__Q3_G_"} connectsTo={[".R26 > .pin2", ".Q3 > .pin4"]}/>
    {/* KiCad net: Net-(U1-RT) */}
    <KiCadNet name={"Net__U1_RT_"} connectsTo={[".R3 > .pin1", ".U1 > .pin13"]}/>
    {/* KiCad net: unconnected-(H10-Pad1) */}
    <KiCadNet name={"unconnected__H10_Pad1_"} connectsTo={[".H10 > .pin1"]}/>
    {/* KiCad net: Net-(U1-UVLO) */}
    <KiCadNet name={"Net__U1_UVLO_"} connectsTo={[".R2 > .pin1", ".U1 > .pin28", ".R1 > .pin2", ".R33 > .pin2"]}/>
    {/* KiCad net: unconnected-(H7-Pad1) */}
    <KiCadNet name={"unconnected__H7_Pad1_"} connectsTo={[".H7 > .pin1"]}/>
    {/* KiCad net: unconnected-(U2-FS1-Pad3) */}
    <KiCadNet name={"unconnected__U2_FS1_Pad3_"} connectsTo={[".U2 > .pin3"]}/>
    {/* KiCad net: Net-(U2-FS0) */}
    <KiCadNet name={"Net__U2_FS0_"} connectsTo={[".U2 > .pin5", ".R11 > .pin1"]}/>
    {/* KiCad net: unconnected-(U2-OUT1-Pad7) */}
    <KiCadNet name={"unconnected__U2_OUT1_Pad7_"} connectsTo={[".U2 > .pin7"]}/>
    {/* KiCad net: Net-(U1-LO1) */}
    <KiCadNet name={"Net__U1_LO1_"} connectsTo={[".U1 > .pin2", ".R24 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-VCCDIS-Pad8) */}
    <KiCadNet name={"unconnected__U1_VCCDIS_Pad8_"} connectsTo={[".U1 > .pin8"]}/>
    {/* KiCad net: unconnected-(U1-EN2-Pad11) */}
    <KiCadNet name={"unconnected__U1_EN2_Pad11_"} connectsTo={[".U1 > .pin11"]}/>
    {/* KiCad net: Net-(U1-RES) */}
    <KiCadNet name={"Net__U1_RES_"} connectsTo={[".U1 > .pin14", ".C8 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3-ALERT-Pad7) */}
    <KiCadNet name={"unconnected__U3_ALERT_Pad7_"} connectsTo={[".U3 > .pin7"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad13) */}
    <KiCadNet name={"unconnected__U3_NC_Pad13_"} connectsTo={[".U3 > .pin13"]}/>
    {/* KiCad net: unconnected-(H9-Pad1) */}
    <KiCadNet name={"unconnected__H9_Pad1_"} connectsTo={[".H9 > .pin1"]}/>
    {/* KiCad net: unconnected-(L2-NC-Pad3) */}
    <KiCadNet name={"unconnected__L2_NC_Pad3_"} connectsTo={[".L2 > .pin3"]}/>
    {/* KiCad net: unconnected-(U6-ALERT-Pad3) */}
    <KiCadNet name={"unconnected__U6_ALERT_Pad3_"} connectsTo={[".U6 > .pin3"]}/>
    {/* KiCad net: unconnected-(U28-PG-Pad4) */}
    <KiCadNet name={"unconnected__U28_PG_Pad4_"} connectsTo={[".U28 > .pin4"]}/>
    {/* KiCad net: unconnected-(U52-PG-Pad4) */}
    <KiCadNet name={"unconnected__U52_PG_Pad4_"} connectsTo={[".U52 > .pin4"]}/>
    {/* KiCad net: unconnected-(U68-PG-Pad4) */}
    <KiCadNet name={"unconnected__U68_PG_Pad4_"} connectsTo={[".U68 > .pin4"]}/>
    {/* KiCad net: unconnected-(U70-PG-Pad4) */}
    <KiCadNet name={"unconnected__U70_PG_Pad4_"} connectsTo={[".U70 > .pin4"]}/>
    {/* KiCad net: unconnected-(U42-PG-Pad4) */}
    <KiCadNet name={"unconnected__U42_PG_Pad4_"} connectsTo={[".U42 > .pin4"]}/>
    {/* KiCad net: unconnected-(U48-PG-Pad4) */}
    <KiCadNet name={"unconnected__U48_PG_Pad4_"} connectsTo={[".U48 > .pin4"]}/>
    {/* KiCad net: unconnected-(U67-PG-Pad4) */}
    <KiCadNet name={"unconnected__U67_PG_Pad4_"} connectsTo={[".U67 > .pin4"]}/>
    {/* KiCad net: unconnected-(U50-PG-Pad4) */}
    <KiCadNet name={"unconnected__U50_PG_Pad4_"} connectsTo={[".U50 > .pin4"]}/>
    {/* KiCad net: unconnected-(U58-PG-Pad4) */}
    <KiCadNet name={"unconnected__U58_PG_Pad4_"} connectsTo={[".U58 > .pin4"]}/>
    {/* KiCad net: unconnected-(U32-PG-Pad4) */}
    <KiCadNet name={"unconnected__U32_PG_Pad4_"} connectsTo={[".U32 > .pin4"]}/>
    {/* KiCad net: unconnected-(U57-PG-Pad4) */}
    <KiCadNet name={"unconnected__U57_PG_Pad4_"} connectsTo={[".U57 > .pin4"]}/>
    {/* KiCad net: unconnected-(U51-PG-Pad4) */}
    <KiCadNet name={"unconnected__U51_PG_Pad4_"} connectsTo={[".U51 > .pin4"]}/>
    {/* KiCad net: unconnected-(U66-PG-Pad4) */}
    <KiCadNet name={"unconnected__U66_PG_Pad4_"} connectsTo={[".U66 > .pin4"]}/>
    {/* KiCad net: unconnected-(U62-PG-Pad4) */}
    <KiCadNet name={"unconnected__U62_PG_Pad4_"} connectsTo={[".U62 > .pin4"]}/>
    {/* KiCad net: unconnected-(U59-PG-Pad4) */}
    <KiCadNet name={"unconnected__U59_PG_Pad4_"} connectsTo={[".U59 > .pin4"]}/>
    {/* KiCad net: unconnected-(U30-PG-Pad4) */}
    <KiCadNet name={"unconnected__U30_PG_Pad4_"} connectsTo={[".U30 > .pin4"]}/>
    {/* KiCad net: unconnected-(U60-PG-Pad4) */}
    <KiCadNet name={"unconnected__U60_PG_Pad4_"} connectsTo={[".U60 > .pin4"]}/>
    {/* KiCad net: unconnected-(U43-PG-Pad4) */}
    <KiCadNet name={"unconnected__U43_PG_Pad4_"} connectsTo={[".U43 > .pin4"]}/>
    {/* KiCad net: /stack7/CLKI */}
    <KiCadNet name={"_stack7_CLKI"} connectsTo={[".U5 > .pin3", ".TP8 > .pin1", ".R137 > .pin2"]}/>
    {/* KiCad net: unconnected-(U61-PG-Pad4) */}
    <KiCadNet name={"unconnected__U61_PG_Pad4_"} connectsTo={[".U61 > .pin4"]}/>
    {/* KiCad net: unconnected-(U69-PG-Pad4) */}
    <KiCadNet name={"unconnected__U69_PG_Pad4_"} connectsTo={[".U69 > .pin4"]}/>
    {/* KiCad net: unconnected-(U71-PG-Pad4) */}
    <KiCadNet name={"unconnected__U71_PG_Pad4_"} connectsTo={[".U71 > .pin4"]}/>
    {/* KiCad net: unconnected-(U53-PG-Pad4) */}
    <KiCadNet name={"unconnected__U53_PG_Pad4_"} connectsTo={[".U53 > .pin4"]}/>
    {/* KiCad net: unconnected-(U49-PG-Pad4) */}
    <KiCadNet name={"unconnected__U49_PG_Pad4_"} connectsTo={[".U49 > .pin4"]}/>
    {/* KiCad net: unconnected-(U29-PG-Pad4) */}
    <KiCadNet name={"unconnected__U29_PG_Pad4_"} connectsTo={[".U29 > .pin4"]}/>
    <KiCadSchematic /></board>);
}
