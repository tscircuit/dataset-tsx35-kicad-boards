import { KiCadSchematic, KiCadNet } from './schematic'
// FTDI JTAG programmer
// Source: https://github.com/anthony-bernaert/ftdi-jtag-programmer
// Commit: c33005ef528526c137ba8fd1e9cf4e8ceab63a1f; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_D19, Footprint_TP1, Footprint_D5, Footprint_C29, Footprint_C8, Footprint_D6, Footprint_R8, Footprint_R28, Footprint_D18, Footprint_R20, Footprint_C23, Footprint_C16, Footprint_R17, Footprint_TP5, Footprint_H4, Footprint_R18, Footprint_D10, Footprint_D12, Footprint_U3, Footprint_C33, Footprint_J3, Footprint_C11, Footprint_R7, Footprint_R21, Footprint_R6, Footprint_U7, Footprint_C9, Footprint_R3, Footprint_TP7, Footprint_FB1, Footprint_R16, Footprint_R19, Footprint_R11, Footprint_Y1, Footprint_R15, Footprint_C4, Footprint_R1, Footprint_R2, Footprint_U6, Footprint_R27, Footprint_FB2, Footprint_C13, Footprint_C5, Footprint_C7, Footprint_F1, Footprint_C18, Footprint_C2, Footprint_TP3, Footprint_R24, Footprint_H1, Footprint_C17, Footprint_C27, Footprint_J5, Footprint_R13, Footprint_C22, Footprint_D13, Footprint_TP4, Footprint_C25, Footprint_Q1, Footprint_D2, Footprint_C21, Footprint_U5, Footprint_J4, Footprint_C6, Footprint_R12, Footprint_R5, Footprint_U4, Footprint_D8, Footprint_C1, Footprint_R23, Footprint_D11, Footprint_C26, Footprint_U2, Footprint_H2, Footprint_R14, Footprint_C15, Footprint_Q2, Footprint_TP14, Footprint_C10, Footprint_D4, Footprint_C12, Footprint_R26, Footprint_R25, Footprint_D16, Footprint_D7, Footprint_R22, Footprint_C14, Footprint_U1, Footprint_D20, Footprint_C28, Footprint_D3, Footprint_D9, Footprint_C3, Footprint_C31, Footprint_R9, Footprint_C32, Footprint_D15, Footprint_C30, Footprint_D1, Footprint_J2, Footprint_C24, Footprint_J6, Footprint_D14, Footprint_FB3, Footprint_H3, Footprint_D17, Footprint_R10, Footprint_R4, Footprint_TP6, Footprint_C19, Footprint_C20, Footprint_U8, Footprint_TP9, Footprint_TP10, Footprint_TP8, Footprint_TP13, Footprint_TP2, Footprint_TP15, Footprint_REF__, Footprint_TP16, Footprint_TP11, Footprint_TP12 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={44.012585000000726} height={64.00001300000002} thickness={1.6} layers={4} outline={[{ "x": 18.493707500000255, "y": -32.0000065 }, { "x": -18.506292499999745, "y": -32.0000065 }, { "x": -18.75597966106224, "y": -31.99108896231361 }, { "x": -19.00439447737071, "y": -31.96438166150915 }, { "x": -19.250271083127444, "y": -31.920020691959508 }, { "x": -19.492356546682387, "y": -31.85823210714628 }, { "x": -19.729417255189915, "y": -31.779330767742294 }, { "x": -19.960245200821248, "y": -31.68371873715276 }, { "x": -20.1836641364995, "y": -31.571883232690922 }, { "x": -20.398535569789146, "y": -31.444394142828727 }, { "x": -20.6037645643963, "y": -31.301901123173835 }, { "x": -20.798305319716803, "y": -31.145130285971376 }, { "x": -20.981166499999915, "y": -30.974880499999998 }, { "x": -21.151416285971337, "y": -30.792019319716914 }, { "x": -21.308187123173823, "y": -30.597478564396425 }, { "x": -21.45068014282876, "y": -30.3922495697893 }, { "x": -21.578169232690996, "y": -30.177378136499684 }, { "x": -21.690004737152876, "y": -29.953959200821444 }, { "x": -21.785616767742454, "y": -29.72313125519014 }, { "x": -21.86451810714648, "y": -29.486070546682626 }, { "x": -21.926306691959752, "y": -29.243985083127683 }, { "x": -21.970667661509438, "y": -28.998108477370963 }, { "x": -21.997374962313927, "y": -28.749693661062494 }, { "x": -22.00629250000037, "y": -28.500006499999998 }, { "x": -21.993819499999745, "y": 28.4999805 }, { "x": -21.984982969714224, "y": 28.748534864857326 }, { "x": -21.958517982317915, "y": 28.99583419967088 }, { "x": -21.914558168006494, "y": 29.240629810911813 }, { "x": -21.85332549395875, "y": 29.48168564715329 }, { "x": -21.775129143553173, "y": 29.717784540289962 }, { "x": -21.68036395520211, "y": 29.947734351409487 }, { "x": -21.56950842868619, "y": 30.170373990283586 }, { "x": -21.443122309055667, "y": 30.38457927808446 }, { "x": -21.301843760298496, "y": 30.589268623723612 }, { "x": -21.146386143045973, "y": 30.783408485151604 }, { "x": -20.977534412586465, "y": 30.966018588042836 }, { "x": -20.796141155374855, "y": 31.136176875514465 }, { "x": -20.6031222840505, "y": 31.293024163886898 }, { "x": -20.39945241270101, "y": 31.435768480977273 }, { "x": -20.18615993572371, "y": 31.563689065020654 }, { "x": -19.96432183513292, "y": 31.676140004026912 }, { "x": -19.73505824253303, "y": 31.77255349719725 }, { "x": -19.49952678321526, "y": 31.852442721932213 }, { "x": -19.258916730936903, "y": 31.9154042919549 }, { "x": -19.014443002897337, "y": 31.961120294137416 }, { "x": -18.76734002523203, "y": 31.989359893746084 }, { "x": -18.518855499999745, "y": 31.99998049999993 }, { "x": 18.493707500000255, "y": 32.000006500000005 }, { "x": 18.733130920824337, "y": 31.992667519346362 }, { "x": 18.97149167162644, "y": 31.968969680769746 }, { "x": 19.207673330495112, "y": 31.929023978996227 }, { "x": 19.44056968183847, "y": 31.873017509663725 }, { "x": 19.66908989762021, "y": 31.801212593013027 }, { "x": 19.892163646524253, "y": 31.713945545245636 }, { "x": 20.108746107117966, "y": 31.61162510330312 }, { "x": 20.317822861533386, "y": 31.49473051044589 }, { "x": 20.51841464674581, "y": 31.36380927159813 }, { "x": 20.709581941195978, "y": 31.21947458897214 }, { "x": 20.890429365273135, "y": 31.06240248998317 }, { "x": 21.06010987504834, "y": 30.893328660906732 }, { "x": 21.21782872961556, "y": 30.71304500110878 }, { "x": 21.362847213458565, "y": 30.522395913987914 }, { "x": 21.49448609640885, "y": 30.322274352001855 }, { "x": 21.612128814989347, "y": 30.113617634302344 }, { "x": 21.7152243602428, "y": 29.897403056567555 }, { "x": 21.803289858519506, "y": 29.67464331359451 }, { "x": 21.875912833136155, "y": 29.446381756090908 }, { "x": 21.932753136313153, "y": 29.21368750388237 }, { "x": 21.973544542341315, "y": 28.977650438423602 }, { "x": 21.998095994516333, "y": 28.739376098067282 }, { "x": 22.006292500000356, "y": 28.4999805 }, { "x": 21.99368150000025, "y": -28.500006499999998 }, { "x": 21.984764046623027, "y": -28.749692482257615 }, { "x": 21.95805699788822, "y": -28.99810613779725 }, { "x": 21.913696445597537, "y": -29.243981618704055 }, { "x": 21.85190843896916, "y": -29.48606601090556 }, { "x": 21.773007832752825, "y": -29.72312571867849 }, { "x": 21.677396682816394, "y": -29.95395275071442 }, { "x": 21.565562197379208, "y": -30.17737087571257 }, { "x": 21.438074254332633, "y": -30.392241616132097 }, { "x": 21.295582497298383, "y": -30.59747004956172 }, { "x": 21.13881302522273, "y": -30.792010388144263 }, { "x": 20.968564692375196, "y": -30.97487130762495 }, { "x": 20.785705037606164, "y": -31.145120998868236 }, { "x": 20.591165863606534, "y": -31.301891916101724 }, { "x": 20.385938488696695, "y": -31.444385197691787 }, { "x": 20.171068695339912, "y": -31.57187473692342 }, { "x": 19.947651401121476, "y": -31.68371088204117 }, { "x": 19.71682507934881, "y": -31.779323746696434 }, { "x": 19.479765957703393, "y": -31.858226113932105 }, { "x": 19.23768202450688, "y": -31.92001591890667 }, { "x": 18.991806873143616, "y": -31.96437829770649 }, { "x": 18.743393416006796, "y": -31.99108719180599 }, { "x": 18.493707500000255, "y": -32.00000650000001 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* D19: LED */}
    <chip name={"D19"} pcbX={-13.506292} pcbY={-25.100006} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D19 />} noSchematicRepresentation={true}/>

    {/* TP1: TestPoint */}
    <chip name={"TP1"} pcbX={-11.506292} pcbY={23.499994} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* D5: CUS520,H3F */}
    <chip name={"D5"} pcbX={-6.956292} pcbY={-16.500006} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CUS520,H3F"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* C29: 4.7u */}
    <capacitor name={"C29"} pcbX={12.143708} pcbY={7.899994} pcbRotation={0} capacitance={"4.7uF"} footprint={<Footprint_C29 />} schX={2.299999999999999} schY={-2.0749999999999993} schRotation={-90} schSheetName={"Power"}/>

    {/* C8: 4.7u */}
    <capacitor name={"C8"} pcbX={9.493708} pcbY={15.65166} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C8 />} schX={2.299999999999999} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* D6: PGB1010603MR */}
    <chip name={"D6"} pcbX={4.993708} pcbY={-15.849462} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* R8: 2.2K */}
    <resistor name={"R8"} pcbX={6.783361} pcbY={6.076553} pcbRotation={0} resistance={"2.2kohm"} footprint={<Footprint_R8 />} schX={-1.75} schY={-0.5999999999999996} schRotation={0} schSheetName={"FTDI"}/>

    {/* R28: 10K */}
    <resistor name={"R28"} pcbX={-10.906292} pcbY={-28.800006} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R28 />} schX={2.0249999999999986} schY={-2.1499999999999986} schRotation={90} schSheetName={"JTAG"}/>

    {/* D18: CUS520,H3F */}
    <chip name={"D18"} pcbX={-15.406292} pcbY={0.499994} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CUS520,H3F"} footprint={<Footprint_D18 />} noSchematicRepresentation={true}/>

    {/* R20: 150R */}
    <resistor name={"R20"} pcbX={2.693708} pcbY={-0.700007} pcbRotation={180} resistance={"150ohm"} footprint={<Footprint_R20 />} schX={0.6000000000000014} schY={3.950000000000001} schRotation={0} schSheetName={"UART"}/>

    {/* C23: 100n */}
    <capacitor name={"C23"} pcbX={-14.981292} pcbY={-3.000006} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C23 />} schX={-0.22499999999999964} schY={-4.199999999999999} schRotation={-90} schSheetName={"JTAG"}/>

    {/* C16: 100n */}
    <capacitor name={"C16"} pcbX={-7.081292} pcbY={-2.200007} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C16 />} schX={-7.45} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* R17: 10K */}
    <resistor name={"R17"} pcbX={8.418708} pcbY={-10.000006} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R17 />} schX={1.4000000000000021} schY={1.8500000000000005} schRotation={90} schSheetName={"UART"}/>

    {/* TP5: TestPoint */}
    <chip name={"TP5"} pcbX={-15.756292} pcbY={8.249994} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* H4: MountingHole */}
    <chip name={"H4"} pcbX={18.493708} pcbY={-28.500006} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* R18: 10K */}
    <resistor name={"R18"} pcbX={-1.906292} pcbY={-12.600006} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R18 />} schX={-0.07499999999999929} schY={5.15} schRotation={90} schSheetName={"JTAG"}/>

    {/* D10: PGB1010603MR */}
    <chip name={"D10"} pcbX={-5.206292} pcbY={-16.500006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* D12: PGB1010603MR */}
    <chip name={"D12"} pcbX={8.393708} pcbY={-14.900007} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* U3: 93LC56B */}
    <chip name={"U3"} pcbX={6.759661} pcbY={9.060852} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"93LC56B"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* C33: 4.7u */}
    <capacitor name={"C33"} pcbX={-9.306292} pcbY={-17.600006} pcbRotation={-90} capacitance={"4.7uF"} footprint={<Footprint_C33 />} schX={-5.9750000000000005} schY={-4.75} schRotation={-90} schSheetName={"JTAG"}/>

    {/* J3: Conn_01x06 */}
    <chip name={"J3"} pcbX={-13.506292} pcbY={-8.700006} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"Conn_01x06"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* C11: 4.7u */}
    <capacitor name={"C11"} pcbX={6.593708} pcbY={2.999994} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C11 />} schX={-1.1999999999999993} schY={4.4} schRotation={-90} schSheetName={"FTDI"}/>

    {/* R7: 10K */}
    <resistor name={"R7"} pcbX={2.684203} pcbY={9.026173} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R7 />} schX={-2.3} schY={0.15000000000000036} schRotation={90} schSheetName={"FTDI"}/>

    {/* R21: 150R */}
    <resistor name={"R21"} pcbX={5.593708} pcbY={-11.000006} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R21 />} schX={0.6500000000000004} schY={1.2500000000000009} schRotation={0} schSheetName={"UART"}/>

    {/* R6: 12K */}
    <resistor name={"R6"} pcbX={-2.006292} pcbY={14.749994} pcbRotation={180} resistance={"12kohm"} footprint={<Footprint_R6 />} schX={0.1999999999999993} schY={1.75} schRotation={90} schSheetName={"FTDI"}/>

    {/* U7: 74LVC3G17 */}
    <chip name={"U7"} pcbX={6.243708} pcbY={-6.800006} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"74LVC3G17"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* C9: 4.7u */}
    <capacitor name={"C9"} pcbX={-1.306292} pcbY={17.808578} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C9 />} schX={4.5} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* R3: 10R */}
    <resistor name={"R3"} pcbX={-4.756292} pcbY={17.049994} pcbRotation={-90} resistance={"10ohm"} footprint={<Footprint_R3 />} schX={-2.05} schY={3} schRotation={0} schSheetName={"FTDI"}/>

    {/* TP7: TestPoint */}
    <chip name={"TP7"} pcbX={-16.756292} pcbY={-3.000006} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* FB1: BLM18AG601SN1D */}
    <chip name={"FB1"} pcbX={-6.506292} pcbY={16.899994} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"BLM18AG601SN1D"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* R16: 10K */}
    <resistor name={"R16"} pcbX={8.393708} pcbY={-16.550006} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R16 />} schX={1.7500000000000018} schY={4.600000000000001} schRotation={90} schSheetName={"UART"}/>

    {/* R19: 150R */}
    <resistor name={"R19"} pcbX={-9.506292} pcbY={-13.500006} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R19 />} schX={-2.1750000000000007} schY={3.8499999999999996} schRotation={0} schSheetName={"JTAG"}/>

    {/* R11: 150R */}
    <resistor name={"R11"} pcbX={-3.906292} pcbY={-12.599462} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R11 />} schX={-2.1750000000000007} schY={4.25} schRotation={0} schSheetName={"JTAG"}/>

    {/* Y1: RH100-12.000-10-3030-TR */}
    <chip name={"Y1"} pcbX={2.493708} pcbY={14.299994} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"RH100-12.000-10-3030-TR"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* R15: 150R */}
    <resistor name={"R15"} pcbX={3.793708} pcbY={-11.000006} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R15 />} schX={3.3000000000000007} schY={2.6500000000000004} schRotation={0} schSheetName={"UART"}/>

    {/* C4: 4.7u */}
    <capacitor name={"C4"} pcbX={7.025085} pcbY={23.575481} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C4 />} schX={-3.8} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* R1: 0R */}
    <resistor name={"R1"} pcbX={-7.506292} pcbY={26.499994} pcbRotation={180} resistance={"0ohm"} footprint={<Footprint_R1 />} schX={-7.200000000000001} schY={-0.8125} schRotation={-90} schSheetName={"Overview"}/>

    {/* R2: 10R */}
    <resistor name={"R2"} pcbX={-3.256292} pcbY={17.049994} pcbRotation={-90} resistance={"10ohm"} footprint={<Footprint_R2 />} schX={-2.05} schY={3.2} schRotation={0} schSheetName={"FTDI"}/>

    {/* U6: 74LVC3G17 */}
    <chip name={"U6"} pcbX={5.243708} pcbY={-3.250006} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"74LVC3G17"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* R27: 10K */}
    <resistor name={"R27"} pcbX={10.893708} pcbY={-28.900007} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R27 />} schX={-0.5499999999999989} schY={-5.300000000000001} schRotation={90} schSheetName={"UART"}/>

    {/* FB2: BLM18AG601SN1D */}
    <chip name={"FB2"} pcbX={4.393708} pcbY={21.499994} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"BLM18AG601SN1D"} footprint={<Footprint_FB2 />} noSchematicRepresentation={true}/>

    {/* C13: 100n */}
    <capacitor name={"C13"} pcbX={4.493708} pcbY={2.999994} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C13 />} schX={0.1999999999999993} schY={4.4} schRotation={-90} schSheetName={"FTDI"}/>

    {/* C5: 100n */}
    <capacitor name={"C5"} pcbX={9.093708} pcbY={24.299994} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C5 />} schX={-2.1999999999999993} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* C7: 100n */}
    <capacitor name={"C7"} pcbX={10.211885} pcbY={17.63225} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C7 />} schX={1.3999999999999986} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* F1: 0805L075SLYR */}
    <chip name={"F1"} pcbX={3.093708} pcbY={23.299994} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"0805L075SLYR"} footprint={<Footprint_F1 />} noSchematicRepresentation={true}/>

    {/* C18: 100n */}
    <capacitor name={"C18"} pcbX={2.093708} pcbY={11.299994} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C18 />} schX={-6.25} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* C2: 100n */}
    <capacitor name={"C2"} pcbX={-6.106292} pcbY={13.499994} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C2 />} schX={6.4} schY={1.4749999999999996} schRotation={-90} schSheetName={"Power"}/>

    {/* TP3: TestPoint */}
    <chip name={"TP3"} pcbX={-4.006292} pcbY={-5.000006} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* R24: 5K1 */}
    <resistor name={"R24"} pcbX={7.493708} pcbY={28.499994} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R24 />} schX={-3.950000000000001} schY={-0.3125000000000009} schRotation={-90} schSheetName={"Overview"}/>

    {/* H1: MountingHole */}
    <chip name={"H1"} pcbX={-18.506292} pcbY={28.499994} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* C17: 100n */}
    <capacitor name={"C17"} pcbX={-9.106292} pcbY={13.499994} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C17 />} schX={-6.85} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* C27: 10n */}
    <capacitor name={"C27"} pcbX={8.313491} pcbY={12.749994} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C27 />} schX={0.5000000000000018} schY={-2.0749999999999993} schRotation={-90} schSheetName={"Power"}/>

    {/* J5: Conn_01x03 */}
    <chip name={"J5"} pcbX={13.493708} pcbY={4.539994} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"Conn_01x03"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* R13: 150R */}
    <resistor name={"R13"} pcbX={2.993708} pcbY={-15.849462} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R13 />} schX={-1.2750000000000004} schY={2.6500000000000004} schRotation={0} schSheetName={"JTAG"}/>

    {/* C22: 100n */}
    <capacitor name={"C22"} pcbX={3.518708} pcbY={5.499994} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C22 />} schX={-3.3} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* D13: PGB1010603MR */}
    <chip name={"D13"} pcbX={8.393708} pcbY={-13.250006} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* TP4: TestPoint */}
    <chip name={"TP4"} pcbX={-6.506292} pcbY={-4.993324} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* C25: 100n */}
    <capacitor name={"C25"} pcbX={0.893708} pcbY={-3.000006} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C25 />} schX={-5.249999999999999} schY={-4.899999999999999} schRotation={-90} schSheetName={"UART"}/>

    {/* Q1: BSS123 */}
    <chip name={"Q1"} pcbX={10.893708} pcbY={-26.100006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS123"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* D2: PGB1010603MR */}
    <chip name={"D2"} pcbX={-2.206292} pcbY={21.099994} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* C21: 100n */}
    <capacitor name={"C21"} pcbX={-12.831292} pcbY={2.849993} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C21 />} schX={-3.9000000000000004} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* U5: 74LVC3G17 */}
    <chip name={"U5"} pcbX={-12.456292} pcbY={-3.050006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"74LVC3G17"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* J4: Conn_01x06 */}
    <chip name={"J4"} pcbX={13.518708} pcbY={-8.750006} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"Conn_01x06"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* C6: 10n */}
    <capacitor name={"C6"} pcbX={7.143708} pcbY={19.599994} pcbRotation={90} capacitance={"10nF"} footprint={<Footprint_C6 />} schX={0.5000000000000018} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* R12: 150R */}
    <resistor name={"R12"} pcbX={0.143708} pcbY={-12.600551} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R12 />} schX={-2.1750000000000007} schY={3.45} schRotation={0} schSheetName={"JTAG"}/>

    {/* R5: 10K */}
    <resistor name={"R5"} pcbX={-13.506292} pcbY={12.174177} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R5 />} schX={-1.1999999999999993} schY={1.75} schRotation={90} schSheetName={"FTDI"}/>

    {/* U4: 74LVC3G17 */}
    <chip name={"U4"} pcbX={-6.406292} pcbY={-7.750006} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"74LVC3G17"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* D8: PGB1010603MR */}
    <chip name={"D8"} pcbX={-1.056292} pcbY={-16.500006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* C1: 4.7u */}
    <capacitor name={"C1"} pcbX={-8.506292} pcbY={17.699994} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C1 />} schX={5.9} schY={1.4749999999999996} schRotation={-90} schSheetName={"Power"}/>

    {/* R23: 5K1 */}
    <resistor name={"R23"} pcbX={-7.506292} pcbY={28.499994} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R23 />} schX={-4.550000000000001} schY={-0.3125000000000009} schRotation={-90} schSheetName={"Overview"}/>

    {/* D11: PGB1010603MR */}
    <chip name={"D11"} pcbX={8.393708} pcbY={-18.200006} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* C26: 100n */}
    <capacitor name={"C26"} pcbX={1.993708} pcbY={-7.000006} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C26 />} schX={-4.099999999999999} schY={-4.899999999999999} schRotation={-90} schSheetName={"UART"}/>

    {/* U2: FT2232HL */}
    <chip name={"U2"} pcbX={-5.131292} pcbY={5.449994} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"] }} displayName={"FT2232HL"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* H2: MountingHole */}
    <chip name={"H2"} pcbX={18.493708} pcbY={28.499994} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* R14: 150R */}
    <resistor name={"R14"} pcbX={4.543708} pcbY={-13.400007} pcbRotation={0} resistance={"150ohm"} footprint={<Footprint_R14 />} schX={3.3000000000000007} schY={3.0500000000000016} schRotation={0} schSheetName={"UART"}/>

    {/* C15: 10p */}
    <capacitor name={"C15"} pcbX={4.993708} pcbY={14.299994} pcbRotation={90} capacitance={"10pF"} footprint={<Footprint_C15 />} schX={-0.20000000000000107} schY={-2.9499999999999993} schRotation={-90} schSheetName={"FTDI"}/>

    {/* Q2: BSS123 */}
    <chip name={"Q2"} pcbX={-10.906292} pcbY={-26.100006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS123"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* TP14: TestPoint */}
    <chip name={"TP14"} pcbX={14.293708} pcbY={18.499994} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* C10: 100n */}
    <capacitor name={"C10"} pcbX={-2.006292} pcbY={13.249994} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C10 />} schX={5} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* D4: CUS520,H3F */}
    <chip name={"D4"} pcbX={-1.006292} pcbY={-6.750006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CUS520,H3F"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* C12: 100n */}
    <capacitor name={"C12"} pcbX={2.768708} pcbY={2.249994} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C12 />} schX={-0.5} schY={4.4} schRotation={-90} schSheetName={"FTDI"}/>

    {/* R26: 100R */}
    <resistor name={"R26"} pcbX={13.593708} pcbY={-28.100006} pcbRotation={90} resistance={"100ohm"} footprint={<Footprint_R26 />} schX={0.3500000000000014} schY={-3.3499999999999996} schRotation={-90} schSheetName={"UART"}/>

    {/* R25: 100R */}
    <resistor name={"R25"} pcbX={-13.506292} pcbY={-28.100006} pcbRotation={90} resistance={"100ohm"} footprint={<Footprint_R25 />} schX={2.924999999999999} schY={-0.1999999999999993} schRotation={-90} schSheetName={"JTAG"}/>

    {/* D16: CUS520,H3F */}
    <chip name={"D16"} pcbX={12.493708} pcbY={-5.850006} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CUS520,H3F"} footprint={<Footprint_D16 />} noSchematicRepresentation={true}/>

    {/* D7: PGB1010603MR */}
    <chip name={"D7"} pcbX={0.993708} pcbY={-16.550551} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* R22: 0R */}
    <resistor name={"R22"} pcbX={15.693708} pcbY={-5.500006} pcbRotation={180} resistance={"0ohm"} footprint={<Footprint_R22 />} schX={-0.09999999999999964} schY={-0.5999999999999996} schRotation={0} schSheetName={"UART"}/>

    {/* C14: 10p */}
    <capacitor name={"C14"} pcbX={2.893708} pcbY={17.199994} pcbRotation={0} capacitance={"10pF"} footprint={<Footprint_C14 />} schX={-2.7} schY={-2.9499999999999993} schRotation={-90} schSheetName={"FTDI"}/>

    {/* U1: LP2985-3.3 */}
    <chip name={"U1"} pcbX={9.993708} pcbY={20.449994} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"LP2985-3.3"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* D20: LED */}
    <chip name={"D20"} pcbX={13.593708} pcbY={-25.100006} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D20 />} noSchematicRepresentation={true}/>

    {/* C28: 100n */}
    <capacitor name={"C28"} pcbX={11.475771} pcbY={9.89443} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C28 />} schX={1.3999999999999986} schY={-2.0749999999999993} schRotation={-90} schSheetName={"Power"}/>

    {/* D3: LED */}
    <chip name={"D3"} pcbX={-13.256292} pcbY={19.499994} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* D9: PGB1010603MR */}
    <chip name={"D9"} pcbX={-3.056292} pcbY={-16.500006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* C3: 10n */}
    <capacitor name={"C3"} pcbX={2.093708} pcbY={20.699994} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C3 />} schX={-5.3999999999999995} schY={0.27500000000000036} schRotation={-90} schSheetName={"Power"}/>

    {/* C31: 100n */}
    <capacitor name={"C31"} pcbX={4.243708} pcbY={8.999994} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C31 />} schX={-5} schY={-0.34999999999999964} schRotation={-90} schSheetName={"FTDI"}/>

    {/* R9: 100R */}
    <resistor name={"R9"} pcbX={-14.023066} pcbY={16.499994} pcbRotation={90} resistance={"100ohm"} footprint={<Footprint_R9 />} schX={6.5} schY={-2} schRotation={0} schSheetName={"FTDI"}/>

    {/* C32: 4.7u */}
    <capacitor name={"C32"} pcbX={12.193708} pcbY={-3.600006} pcbRotation={0} capacitance={"4.7uF"} footprint={<Footprint_C32 />} schX={-4.999999999999999} schY={-1.5999999999999996} schRotation={-90} schSheetName={"UART"}/>

    {/* D15: CUS520,H3F */}
    <chip name={"D15"} pcbX={9.893708} pcbY={-0.800006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CUS520,H3F"} footprint={<Footprint_D15 />} noSchematicRepresentation={true}/>

    {/* C30: 100n */}
    <capacitor name={"C30"} pcbX={14.363491} pcbY={12.949994} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C30 />} schX={-2.25} schY={-2.0749999999999993} schRotation={-90} schSheetName={"Power"}/>

    {/* D1: PGB1010603MR */}
    <chip name={"D1"} pcbX={-5.256292} pcbY={21.099994} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* J2: 878325623 */}
    <chip name={"J2"} pcbX={-0.156292} pcbY={-23.500006} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"] }} displayName={"878325623"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* C24: 100n */}
    <capacitor name={"C24"} pcbX={-7.506292} pcbY={-10.306011} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C24 />} schX={0.6749999999999989} schY={-4.199999999999999} schRotation={-90} schSheetName={"JTAG"}/>

    {/* J6: USB_C_Receptacle_USB2.0 */}
    <chip name={"J6"} pcbX={-0.106292} pcbY={29.249994} pcbRotation={180} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} displayName={"USB_C_Receptacle_USB2.0"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* D14: PGB1010603MR */}
    <chip name={"D14"} pcbX={8.443708} pcbY={-11.599462} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PGB1010603MR"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* FB3: BLM18AG601SN1D */}
    <chip name={"FB3"} pcbX={0.593708} pcbY={18.599994} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"BLM18AG601SN1D"} footprint={<Footprint_FB3 />} noSchematicRepresentation={true}/>

    {/* H3: MountingHole */}
    <chip name={"H3"} pcbX={-18.506292} pcbY={-28.500006} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* D17: CUS520,H3F */}
    <chip name={"D17"} pcbX={9.893708} pcbY={2.549993} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"CUS520,H3F"} footprint={<Footprint_D17 />} noSchematicRepresentation={true}/>

    {/* R10: 150R */}
    <resistor name={"R10"} pcbX={-6.056292} pcbY={-12.599462} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R10 />} schX={-2.1750000000000007} schY={4.65} schRotation={0} schSheetName={"JTAG"}/>

    {/* R4: 15K */}
    <resistor name={"R4"} pcbX={-11.406292} pcbY={15.399994} pcbRotation={-90} resistance={"15kohm"} footprint={<Footprint_R4 />} schX={-2.05} schY={2.2} schRotation={0} schSheetName={"FTDI"}/>

    {/* TP6: TestPoint */}
    <chip name={"TP6"} pcbX={-8.756292} pcbY={-4.967584} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* C19: 100n */}
    <capacitor name={"C19"} pcbX={-12.831292} pcbY={6.349994} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C19 />} schX={-5.1000000000000005} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* C20: 100n */}
    <capacitor name={"C20"} pcbX={-3.181292} pcbY={-2.200007} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C20 />} schX={-4.500000000000001} schY={-4.800000000000001} schRotation={-90} schSheetName={"FTDI"}/>

    {/* U8: LP2985-2.5 */}
    <chip name={"U8"} pcbX={11.163491} pcbY={12.799994} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"LP2985-2.5"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* TP9: TestPoint */}
    <chip name={"TP9"} pcbX={-4.006292} pcbY={3.499994} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* TP10: TestPoint */}
    <chip name={"TP10"} pcbX={-7.506292} pcbY={1.749994} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* TP8: TestPoint */}
    <chip name={"TP8"} pcbX={-1.756292} pcbY={2.548542} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP13: TestPoint */}
    <chip name={"TP13"} pcbX={-0.606292} pcbY={-8.700006} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* TP2: TestPoint */}
    <chip name={"TP2"} pcbX={8.393708} pcbY={1.999994} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* TP15: TestPoint */}
    <chip name={"TP15"} pcbX={-4.206292} pcbY={11.999994} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* REF**: OSHW-Logo_11.4x12mm_SilkScreen */}
    <chip name={"REF__"} pcbX={-0.206292} pcbY={-22.000006} pcbRotation={180} pinLabels={{}} displayName={"OSHW-Logo_11.4x12mm_SilkScreen"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* TP16: TestPoint */}
    <chip name={"TP16"} pcbX={2.093708} pcbY={11.999994} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* TP11: TestPoint */}
    <chip name={"TP11"} pcbX={-0.506292} pcbY={-5.900007} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* TP12: TestPoint */}
    <chip name={"TP12"} pcbX={15.993708} pcbY={-5.650007} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* KiCad net: Net-(D19-K) */}
    <KiCadNet name={"Net__D19_K_"} connectsTo={[".D19 > .pin1", ".Q2 > .pin3"]}/>
    {/* KiCad net: Net-(D19-A) */}
    <KiCadNet name={"Net__D19_A_"} connectsTo={[".D19 > .pin2", ".R25 > .pin2"]}/>
    {/* KiCad net: /VBUS_FILT */}
    <KiCadNet name={"_VBUS_FILT"} connectsTo={[".TP1 > .pin1", ".C4 > .pin1", ".FB2 > .pin2", ".C5 > .pin1", ".TP14 > .pin1", ".R22 > .pin1", ".U1 > .pin1", ".U1 > .pin3", ".C30 > .pin1", ".R4 > .pin1", ".U8 > .pin1", ".U8 > .pin3"]}/>
    {/* KiCad net: /JTAG/VIO_JTAG */}
    <KiCadNet name={"_JTAG_VIO_JTAG"} connectsTo={[".D5 > .pin1", ".D18 > .pin1", ".C23 > .pin1", ".R18 > .pin2", ".C33 > .pin1", ".U5 > .pin8", ".U4 > .pin8", ".D4 > .pin1", ".C24 > .pin1", ".TP13 > .pin1"]}/>
    {/* KiCad net: /JTAG/VREF */}
    <KiCadNet name={"_JTAG_VREF"} connectsTo={[".D5 > .pin2", ".R28 > .pin2", ".J3 > .pin6", ".Q2 > .pin1", ".J2 > .pin2"]}/>
    {/* KiCad net: +2V5 */}
    <KiCadNet name={"_2V5"} connectsTo={[".C29 > .pin1", ".J5 > .pin3", ".D4 > .pin2", ".C28 > .pin1", ".D15 > .pin2", ".U8 > .pin5"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C29 > .pin2", ".C8 > .pin2", ".D6 > .pin2", ".R28 > .pin1", ".C23 > .pin2", ".C16 > .pin2", ".D10 > .pin2", ".D12 > .pin2", ".U3 > .pin2", ".C33 > .pin2", ".J3 > .pin5", ".C11 > .pin2", ".R6 > .pin1", ".U7 > .pin3", ".U7 > .pin4", ".C9 > .pin2", ".Y1 > .pin2", ".Y1 > .pin4", ".C4 > .pin2", ".R1 > .pin2", ".U6 > .pin3", ".U6 > .pin4", ".R27 > .pin1", ".C13 > .pin2", ".C5 > .pin2", ".C7 > .pin2", ".C18 > .pin2", ".C2 > .pin2", ".R24 > .pin2", ".C17 > .pin2", ".C27 > .pin2", ".J5 > .pin1", ".C22 > .pin2", ".D13 > .pin2", ".C25 > .pin2", ".Q1 > .pin2", ".D2 > .pin2", ".C21 > .pin2", ".U5 > .pin3", ".U5 > .pin4", ".J4 > .pin1", ".C6 > .pin2", ".R5 > .pin1", ".U4 > .pin4", ".D8 > .pin2", ".C1 > .pin2", ".R23 > .pin2", ".D11 > .pin2", ".C26 > .pin2", ".U2 > .pin1", ".U2 > .pin5", ".U2 > .pin10", ".U2 > .pin11", ".U2 > .pin13", ".U2 > .pin15", ".U2 > .pin25", ".U2 > .pin35", ".U2 > .pin47", ".U2 > .pin51", ".C15 > .pin2", ".Q2 > .pin2", ".C10 > .pin2", ".C12 > .pin2", ".D7 > .pin2", ".C14 > .pin2", ".U1 > .pin2", ".C28 > .pin2", ".D9 > .pin2", ".C3 > .pin2", ".C31 > .pin2", ".C32 > .pin2", ".C30 > .pin2", ".D1 > .pin2", ".J2 > .pin1", ".J2 > .pin3", ".J2 > .pin5", ".J2 > .pin7", ".J2 > .pin9", ".J2 > .pin11", ".J2 > .pin13", ".C24 > .pin2", ".J6 > .pin1", ".J6 > .pin8", ".J6 > .pin9", ".J6 > .pin16", ".D14 > .pin2", ".C19 > .pin2", ".C20 > .pin2", ".U8 > .pin2"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".C8 > .pin1", ".D18 > .pin2", ".U3 > .pin6", ".R7 > .pin2", ".FB1 > .pin1", ".C13 > .pin1", ".C7 > .pin1", ".J5 > .pin2", ".C22 > .pin1", ".C21 > .pin1", ".U2 > .pin20", ".U2 > .pin31", ".U2 > .pin42", ".U2 > .pin50", ".U2 > .pin56", ".R26 > .pin1", ".R25 > .pin1", ".U1 > .pin5", ".D3 > .pin2", ".C31 > .pin1", ".FB3 > .pin1", ".D17 > .pin2", ".C19 > .pin1", ".C20 > .pin1"]}/>
    {/* KiCad net: /JTAG/SRST_BUF */}
    <KiCadNet name={"_JTAG_SRST_BUF"} connectsTo={[".D6 > .pin1", ".R13 > .pin2", ".J2 > .pin14"]}/>
    {/* KiCad net: Net-(U3-DO) */}
    <KiCadNet name={"Net__U3_DO_"} connectsTo={[".R8 > .pin1", ".U3 > .pin1", ".R7 > .pin1"]}/>
    {/* KiCad net: Net-(U2-EEDATA) */}
    <KiCadNet name={"Net__U2_EEDATA_"} connectsTo={[".R8 > .pin2", ".U3 > .pin3", ".U2 > .pin61"]}/>
    {/* KiCad net: Net-(R20-Pad1) */}
    <KiCadNet name={"Net__R20_Pad1_"} connectsTo={[".R20 > .pin1", ".U6 > .pin6"]}/>
    {/* KiCad net: /UART/RXD_CONN */}
    <KiCadNet name={"_UART_RXD_CONN"} connectsTo={[".R20 > .pin2", ".D12 > .pin1", ".R16 > .pin1", ".J4 > .pin5"]}/>
    {/* KiCad net: +1V8 */}
    <KiCadNet name={"_1V8"} connectsTo={[".C16 > .pin1", ".C11 > .pin1", ".C18 > .pin1", ".C17 > .pin1", ".U2 > .pin12", ".U2 > .pin37", ".U2 > .pin49", ".U2 > .pin64", ".C12 > .pin1", ".TP2 > .pin1"]}/>
    {/* KiCad net: /UART/CTS_CONN */}
    <KiCadNet name={"_UART_CTS_CONN"} connectsTo={[".R17 > .pin1", ".R21 > .pin2", ".J4 > .pin2", ".D14 > .pin1"]}/>
    {/* KiCad net: /UART/VIO_UART */}
    <KiCadNet name={"_UART_VIO_UART"} connectsTo={[".R17 > .pin2", ".U7 > .pin8", ".R16 > .pin2", ".U6 > .pin8", ".C25 > .pin1", ".C26 > .pin1", ".D16 > .pin1", ".C32 > .pin1", ".D15 > .pin1", ".D17 > .pin1", ".TP12 > .pin1"]}/>
    {/* KiCad net: /FTDI/JTAG_TDO */}
    <KiCadNet name={"_FTDI_JTAG_TDO"} connectsTo={[".TP5 > .pin1", ".U5 > .pin7", ".U2 > .pin18"]}/>
    {/* KiCad net: /JTAG/TDO_CONN */}
    <KiCadNet name={"_JTAG_TDO_CONN"} connectsTo={[".R18 > .pin1", ".J3 > .pin3", ".R19 > .pin2", ".D8 > .pin1", ".J2 > .pin8"]}/>
    {/* KiCad net: /JTAG/TMS_BUF */}
    <KiCadNet name={"_JTAG_TMS_BUF"} connectsTo={[".D10 > .pin1", ".J3 > .pin1", ".J2 > .pin4", ".R10 > .pin2"]}/>
    {/* KiCad net: Net-(U2-EECLK) */}
    <KiCadNet name={"Net__U2_EECLK_"} connectsTo={[".U3 > .pin4", ".U2 > .pin62"]}/>
    {/* KiCad net: Net-(U2-EECS) */}
    <KiCadNet name={"Net__U2_EECS_"} connectsTo={[".U3 > .pin5", ".U2 > .pin63"]}/>
    {/* KiCad net: /JTAG/TDI_BUF */}
    <KiCadNet name={"_JTAG_TDI_BUF"} connectsTo={[".J3 > .pin2", ".R12 > .pin2", ".D7 > .pin1", ".J2 > .pin10"]}/>
    {/* KiCad net: /JTAG/TCK_BUF */}
    <KiCadNet name={"_JTAG_TCK_BUF"} connectsTo={[".J3 > .pin4", ".R11 > .pin2", ".D9 > .pin1", ".J2 > .pin6"]}/>
    {/* KiCad net: Net-(R21-Pad1) */}
    <KiCadNet name={"Net__R21_Pad1_"} connectsTo={[".R21 > .pin1", ".U7 > .pin1"]}/>
    {/* KiCad net: Net-(U2-REF) */}
    <KiCadNet name={"Net__U2_REF_"} connectsTo={[".R6 > .pin2", ".U2 > .pin6"]}/>
    {/* KiCad net: Net-(R15-Pad1) */}
    <KiCadNet name={"Net__R15_Pad1_"} connectsTo={[".U7 > .pin2", ".R15 > .pin1"]}/>
    {/* KiCad net: unconnected-(U7-Pad5) */}
    <KiCadNet name={"unconnected__U7_Pad5_"} connectsTo={[".U7 > .pin5"]}/>
    {/* KiCad net: /FTDI/UART_TXD */}
    <KiCadNet name={"_FTDI_UART_TXD"} connectsTo={[".U7 > .pin6", ".U2 > .pin38", ".TP10 > .pin1"]}/>
    {/* KiCad net: /FTDI/UART_CTS */}
    <KiCadNet name={"_FTDI_UART_CTS"} connectsTo={[".U7 > .pin7", ".U2 > .pin41", ".TP11 > .pin1"]}/>
    {/* KiCad net: /FTDI/VPHY */}
    <KiCadNet name={"_FTDI_VPHY"} connectsTo={[".C9 > .pin1", ".U2 > .pin4", ".C10 > .pin1", ".FB3 > .pin2", ".TP16 > .pin1"]}/>
    {/* KiCad net: /USB_D+ */}
    <KiCadNet name={"_USB_D_"} connectsTo={[".R3 > .pin1", ".D1 > .pin1", ".J6 > .pin4", ".J6 > .pin12"]}/>
    {/* KiCad net: /FTDI/FTDI_D+ */}
    <KiCadNet name={"_FTDI_FTDI_D_"} connectsTo={[".R3 > .pin2", ".U2 > .pin8"]}/>
    {/* KiCad net: /FTDI/JTAG_SRST */}
    <KiCadNet name={"_FTDI_JTAG_SRST"} connectsTo={[".TP7 > .pin1", ".U5 > .pin6", ".U2 > .pin24"]}/>
    {/* KiCad net: /FTDI/VPLL */}
    <KiCadNet name={"_FTDI_VPLL"} connectsTo={[".FB1 > .pin2", ".C2 > .pin1", ".C1 > .pin1", ".U2 > .pin9", ".TP15 > .pin1"]}/>
    {/* KiCad net: Net-(R19-Pad1) */}
    <KiCadNet name={"Net__R19_Pad1_"} connectsTo={[".R19 > .pin1", ".U5 > .pin1"]}/>
    {/* KiCad net: Net-(R11-Pad1) */}
    <KiCadNet name={"Net__R11_Pad1_"} connectsTo={[".R11 > .pin1", ".U4 > .pin7"]}/>
    {/* KiCad net: Net-(U2-OSCO) */}
    <KiCadNet name={"Net__U2_OSCO_"} connectsTo={[".Y1 > .pin1", ".U2 > .pin3", ".C15 > .pin1"]}/>
    {/* KiCad net: Net-(U2-OSCI) */}
    <KiCadNet name={"Net__U2_OSCI_"} connectsTo={[".Y1 > .pin3", ".U2 > .pin2", ".C14 > .pin1"]}/>
    {/* KiCad net: /UART/TXD_BUF */}
    <KiCadNet name={"_UART_TXD_BUF"} connectsTo={[".R15 > .pin2", ".D13 > .pin1", ".J4 > .pin4"]}/>
    {/* KiCad net: /USB_SHIELD */}
    <KiCadNet name={"_USB_SHIELD"} connectsTo={[".R1 > .pin1", ".J6 > .pin17"]}/>
    {/* KiCad net: /USB_D- */}
    <KiCadNet name={"_USB_D__"} connectsTo={[".R2 > .pin1", ".D2 > .pin1", ".J6 > .pin5", ".J6 > .pin13"]}/>
    {/* KiCad net: /FTDI/FTDI_D- */}
    <KiCadNet name={"_FTDI_FTDI_D__"} connectsTo={[".R2 > .pin2", ".U2 > .pin7"]}/>
    {/* KiCad net: /FTDI/UART_RTS */}
    <KiCadNet name={"_FTDI_UART_RTS"} connectsTo={[".U6 > .pin1", ".U2 > .pin40", ".TP8 > .pin1"]}/>
    {/* KiCad net: /FTDI/UART_RXD */}
    <KiCadNet name={"_FTDI_UART_RXD"} connectsTo={[".U6 > .pin2", ".U2 > .pin39", ".TP9 > .pin1"]}/>
    {/* KiCad net: unconnected-(U6-Pad5) */}
    <KiCadNet name={"unconnected__U6_Pad5_"} connectsTo={[".U6 > .pin5"]}/>
    {/* KiCad net: Net-(R14-Pad1) */}
    <KiCadNet name={"Net__R14_Pad1_"} connectsTo={[".U6 > .pin7", ".R14 > .pin1"]}/>
    {/* KiCad net: /UART/VREF_CONN */}
    <KiCadNet name={"_UART_VREF_CONN"} connectsTo={[".R27 > .pin2", ".Q1 > .pin1", ".J4 > .pin3", ".D16 > .pin2", ".R22 > .pin2"]}/>
    {/* KiCad net: Net-(C3-Pad1) */}
    <KiCadNet name={"Net__C3_Pad1_"} connectsTo={[".FB2 > .pin1", ".F1 > .pin2", ".C3 > .pin1"]}/>
    {/* KiCad net: /Power/VBUS */}
    <KiCadNet name={"_Power_VBUS"} connectsTo={[".F1 > .pin1", ".J6 > .pin2", ".J6 > .pin7", ".J6 > .pin10", ".J6 > .pin15"]}/>
    {/* KiCad net: /FTDI/JTAG_TMS */}
    <KiCadNet name={"_FTDI_JTAG_TMS"} connectsTo={[".TP3 > .pin1", ".U4 > .pin3", ".U2 > .pin19"]}/>
    {/* KiCad net: Net-(J6-CC1) */}
    <KiCadNet name={"Net__J6_CC1_"} connectsTo={[".R24 > .pin1", ".J6 > .pin3"]}/>
    {/* KiCad net: Net-(U8-BP) */}
    <KiCadNet name={"Net__U8_BP_"} connectsTo={[".C27 > .pin1", ".U8 > .pin4"]}/>
    {/* KiCad net: Net-(R13-Pad1) */}
    <KiCadNet name={"Net__R13_Pad1_"} connectsTo={[".R13 > .pin1", ".U5 > .pin2"]}/>
    {/* KiCad net: /FTDI/JTAG_TCK */}
    <KiCadNet name={"_FTDI_JTAG_TCK"} connectsTo={[".TP4 > .pin1", ".U4 > .pin1", ".U2 > .pin16"]}/>
    {/* KiCad net: Net-(D20-K) */}
    <KiCadNet name={"Net__D20_K_"} connectsTo={[".Q1 > .pin3", ".D20 > .pin1"]}/>
    {/* KiCad net: unconnected-(U5-Pad5) */}
    <KiCadNet name={"unconnected__U5_Pad5_"} connectsTo={[".U5 > .pin5"]}/>
    {/* KiCad net: /UART/RTS_BUF */}
    <KiCadNet name={"_UART_RTS_BUF"} connectsTo={[".J4 > .pin6", ".D11 > .pin1", ".R14 > .pin2"]}/>
    {/* KiCad net: Net-(U1-BP) */}
    <KiCadNet name={"Net__U1_BP_"} connectsTo={[".C6 > .pin1", ".U1 > .pin4"]}/>
    {/* KiCad net: Net-(R12-Pad1) */}
    <KiCadNet name={"Net__R12_Pad1_"} connectsTo={[".R12 > .pin1", ".U4 > .pin2"]}/>
    {/* KiCad net: Net-(U2-~{RESET}) */}
    <KiCadNet name={"Net__U2___RESET__"} connectsTo={[".R5 > .pin2", ".U2 > .pin14", ".R4 > .pin2"]}/>
    {/* KiCad net: Net-(R10-Pad1) */}
    <KiCadNet name={"Net__R10_Pad1_"} connectsTo={[".U4 > .pin5", ".R10 > .pin1"]}/>
    {/* KiCad net: /FTDI/JTAG_TDI */}
    <KiCadNet name={"_FTDI_JTAG_TDI"} connectsTo={[".U4 > .pin6", ".U2 > .pin17", ".TP6 > .pin1"]}/>
    {/* KiCad net: Net-(J6-CC2) */}
    <KiCadNet name={"Net__J6_CC2_"} connectsTo={[".R23 > .pin1", ".J6 > .pin11"]}/>
    {/* KiCad net: unconnected-(U2-ADBUS4-Pad21) */}
    <KiCadNet name={"unconnected__U2_ADBUS4_Pad21_"} connectsTo={[".U2 > .pin21"]}/>
    {/* KiCad net: unconnected-(U2-ADBUS5-Pad22) */}
    <KiCadNet name={"unconnected__U2_ADBUS5_Pad22_"} connectsTo={[".U2 > .pin22"]}/>
    {/* KiCad net: unconnected-(U2-ADBUS6-Pad23) */}
    <KiCadNet name={"unconnected__U2_ADBUS6_Pad23_"} connectsTo={[".U2 > .pin23"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS0-Pad26) */}
    <KiCadNet name={"unconnected__U2_ACBUS0_Pad26_"} connectsTo={[".U2 > .pin26"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS1-Pad27) */}
    <KiCadNet name={"unconnected__U2_ACBUS1_Pad27_"} connectsTo={[".U2 > .pin27"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS2-Pad28) */}
    <KiCadNet name={"unconnected__U2_ACBUS2_Pad28_"} connectsTo={[".U2 > .pin28"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS3-Pad29) */}
    <KiCadNet name={"unconnected__U2_ACBUS3_Pad29_"} connectsTo={[".U2 > .pin29"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS4-Pad30) */}
    <KiCadNet name={"unconnected__U2_ACBUS4_Pad30_"} connectsTo={[".U2 > .pin30"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS5-Pad32) */}
    <KiCadNet name={"unconnected__U2_ACBUS5_Pad32_"} connectsTo={[".U2 > .pin32"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS6-Pad33) */}
    <KiCadNet name={"unconnected__U2_ACBUS6_Pad33_"} connectsTo={[".U2 > .pin33"]}/>
    {/* KiCad net: unconnected-(U2-ACBUS7-Pad34) */}
    <KiCadNet name={"unconnected__U2_ACBUS7_Pad34_"} connectsTo={[".U2 > .pin34"]}/>
    {/* KiCad net: unconnected-(U2-~{SUSPEND}-Pad36) */}
    <KiCadNet name={"unconnected__U2___SUSPEND__Pad36_"} connectsTo={[".U2 > .pin36"]}/>
    {/* KiCad net: unconnected-(U2-BDBUS4-Pad43) */}
    <KiCadNet name={"unconnected__U2_BDBUS4_Pad43_"} connectsTo={[".U2 > .pin43"]}/>
    {/* KiCad net: unconnected-(U2-BDBUS5-Pad44) */}
    <KiCadNet name={"unconnected__U2_BDBUS5_Pad44_"} connectsTo={[".U2 > .pin44"]}/>
    {/* KiCad net: unconnected-(U2-BDBUS6-Pad45) */}
    <KiCadNet name={"unconnected__U2_BDBUS6_Pad45_"} connectsTo={[".U2 > .pin45"]}/>
    {/* KiCad net: unconnected-(U2-BDBUS7-Pad46) */}
    <KiCadNet name={"unconnected__U2_BDBUS7_Pad46_"} connectsTo={[".U2 > .pin46"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS0-Pad48) */}
    <KiCadNet name={"unconnected__U2_BCBUS0_Pad48_"} connectsTo={[".U2 > .pin48"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS1-Pad52) */}
    <KiCadNet name={"unconnected__U2_BCBUS1_Pad52_"} connectsTo={[".U2 > .pin52"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS2-Pad53) */}
    <KiCadNet name={"unconnected__U2_BCBUS2_Pad53_"} connectsTo={[".U2 > .pin53"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS3-Pad54) */}
    <KiCadNet name={"unconnected__U2_BCBUS3_Pad54_"} connectsTo={[".U2 > .pin54"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS4-Pad55) */}
    <KiCadNet name={"unconnected__U2_BCBUS4_Pad55_"} connectsTo={[".U2 > .pin55"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS5-Pad57) */}
    <KiCadNet name={"unconnected__U2_BCBUS5_Pad57_"} connectsTo={[".U2 > .pin57"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS6-Pad58) */}
    <KiCadNet name={"unconnected__U2_BCBUS6_Pad58_"} connectsTo={[".U2 > .pin58"]}/>
    {/* KiCad net: unconnected-(U2-BCBUS7-Pad59) */}
    <KiCadNet name={"unconnected__U2_BCBUS7_Pad59_"} connectsTo={[".U2 > .pin59"]}/>
    {/* KiCad net: Net-(U2-~{PWREN}) */}
    <KiCadNet name={"Net__U2___PWREN__"} connectsTo={[".U2 > .pin60", ".R9 > .pin1"]}/>
    {/* KiCad net: Net-(D20-A) */}
    <KiCadNet name={"Net__D20_A_"} connectsTo={[".R26 > .pin2", ".D20 > .pin2"]}/>
    {/* KiCad net: Net-(D3-K) */}
    <KiCadNet name={"Net__D3_K_"} connectsTo={[".D3 > .pin1", ".R9 > .pin2"]}/>
    {/* KiCad net: unconnected-(J2-Pad12) */}
    <KiCadNet name={"unconnected__J2_Pad12_"} connectsTo={[".J2 > .pin12"]}/>
    {/* KiCad net: unconnected-(J6-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__J6_SBU1_PadA8_"} connectsTo={[".J6 > .pin6"]}/>
    {/* KiCad net: unconnected-(J6-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__J6_SBU2_PadB8_"} connectsTo={[".J6 > .pin14"]}/>
    <KiCadSchematic /></board>);
}
