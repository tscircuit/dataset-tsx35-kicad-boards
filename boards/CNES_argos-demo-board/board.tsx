import { KiCadSchematic, KiCadNet } from './schematic'
// Argos demo board
// Source: https://github.com/CNES/argos-demo-board
// Commit: 1eccb3f20cb9004c046dba82b72bf85c500efcaa; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_H4, Footprint_F2, Footprint_R9, Footprint_R20, Footprint_R8, Footprint_C4, Footprint_R29, Footprint_D3, Footprint_R24, Footprint_J2, Footprint_H2, Footprint_R26, Footprint_SW1, Footprint_R2, Footprint_C6, Footprint_H5, Footprint_C1, Footprint_J3, Footprint_C14, Footprint_L4, Footprint_Q2, Footprint_D5, Footprint_Q1, Footprint_C8, Footprint_C7, Footprint_R16, Footprint_C16, Footprint_C10, Footprint_R32, Footprint_J6, Footprint_FB2, Footprint_R3, Footprint_J4, Footprint_L3, Footprint_C13, Footprint_R25, Footprint_C3, Footprint_R5, Footprint_R7, Footprint_R4, Footprint_R23, Footprint_C9, Footprint_R6, Footprint_R18, Footprint_D2, Footprint_J8, Footprint_C5, Footprint_J5, Footprint_R1, Footprint_U6, Footprint_C11, Footprint_L1, Footprint_R34, Footprint_R14, Footprint_R31, Footprint_FB1, Footprint_J1, Footprint_R27, Footprint_D7, Footprint_R21, Footprint_C2, Footprint_H1, Footprint_R33, Footprint_R17, Footprint_R19, Footprint_F1, Footprint_C12, Footprint_R11, Footprint_R28, Footprint_D1, Footprint_R13, Footprint_R10, Footprint_R22, Footprint_R30, Footprint_U1, Footprint_L2, Footprint_R15, Footprint_D8, Footprint_U2, Footprint_D9, Footprint_U3, Footprint_D4, Footprint_U5, Footprint_U4, Footprint_J7, Footprint_R12, Footprint_JP1, Footprint_D6, Footprint_C15, Footprint_H3, Footprint_G___ } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={50.00000000000226} height={80.00000000000054} thickness={1.61668} layers={4} outline={[{ "x": -24.999999999998863, "y": -36.99999999999973 }, { "x": -24.999999999998863, "y": 37.00000000000027 }, { "x": -24.989753388344425, "y": 37.24773800622486 }, { "x": -24.959083741787694, "y": 37.493783704335215 }, { "x": -24.908200564904803, "y": 37.7364563543987 }, { "x": -24.83745144104283, "y": 37.974098257798104 }, { "x": -24.747319657975524, "y": 38.205086080982866 }, { "x": -24.638420906560967, "y": 38.4278419444722 }, { "x": -24.511499074952965, "y": 38.64084420136119 }, { "x": -24.367421167095713, "y": 38.84263783170171 }, { "x": -24.20717138021358, "y": 39.03184438175417 }, { "x": -24.03184438175279, "y": 39.207171380214945 }, { "x": -23.84263783170033, "y": 39.36742116709708 }, { "x": -23.640844201359798, "y": 39.51149907495432 }, { "x": -23.427841944470813, "y": 39.63842090656231 }, { "x": -23.205086080981474, "y": 39.74731965797685 }, { "x": -22.974098257796697, "y": 39.83745144104416 }, { "x": -22.73645635439729, "y": 39.90820056490612 }, { "x": -22.493783704333808, "y": 39.959083741789 }, { "x": -22.247738006223443, "y": 39.98975338834572 }, { "x": -21.999999999998863, "y": 40.00000000000015 }, { "x": 22.000000000001137, "y": 40.00000000000027 }, { "x": 22.24773800622566, "y": 39.989753388345704 }, { "x": 22.493783704335954, "y": 39.95908374178887 }, { "x": 22.736456354399337, "y": 39.90820056490588 }, { "x": 22.97409825779866, "y": 39.83745144104384 }, { "x": 23.205086080983335, "y": 39.74731965797646 }, { "x": 23.42784194447259, "y": 39.63842090656187 }, { "x": 23.64084420136149, "y": 39.51149907495385 }, { "x": 23.84263783170192, "y": 39.36742116709659 }, { "x": 24.031844381754325, "y": 39.20717138021445 }, { "x": 24.207171380215016, "y": 39.03184438175369 }, { "x": 24.36742116709712, "y": 38.84263783170125 }, { "x": 24.511499074954315, "y": 38.64084420136077 }, { "x": 24.63842090656226, "y": 38.42784194447183 }, { "x": 24.74731965797679, "y": 38.20508608098255 }, { "x": 24.837451441044095, "y": 37.97409825779785 }, { "x": 24.908200564906082, "y": 37.736456354398506 }, { "x": 24.959083741788987, "y": 37.49378370433509 }, { "x": 24.989753388345747, "y": 37.24773800622479 }, { "x": 25.000000000000256, "y": 37.00000000000027 }, { "x": 25.000000000001137, "y": -36.99999999999973 }, { "x": 24.9897533883464, "y": -37.24773800622425 }, { "x": 24.959083741789442, "y": -37.49378370433452 }, { "x": 24.908200564906366, "y": -37.73645635439787 }, { "x": 24.837451441044237, "y": -37.974098257797166 }, { "x": 24.74731965797679, "y": -38.205086080981815 }, { "x": 24.638420906562175, "y": -38.42784194447107 }, { "x": 24.511499074954145, "y": -38.64084420135994 }, { "x": 24.367421167096893, "y": -38.8426378317004 }, { "x": 24.20717138021479, "y": -39.031844381752805 }, { "x": 24.03184438175407, "y": -39.20717138021355 }, { "x": 23.842637831701694, "y": -39.367421167095685 }, { "x": 23.64084420136126, "y": -39.511499074952994 }, { "x": 23.42784194447239, "y": -39.63842090656105 }, { "x": 23.205086080983193, "y": -39.74731965797572 }, { "x": 22.974098257798545, "y": -39.8374514410432 }, { "x": 22.73645635439928, "y": -39.90820056490536 }, { "x": 22.493783704335897, "y": -39.95908374178849 }, { "x": 22.24773800622563, "y": -39.989753388345505 }, { "x": 22.000000000001137, "y": -40.00000000000027 }, { "x": -21.999999999998863, "y": -39.99999999999973 }, { "x": -22.24773800622353, "y": -39.989753388345335 }, { "x": -22.493783704333993, "y": -39.95908374178866 }, { "x": -22.73645635439756, "y": -39.90820056490581 }, { "x": -22.974098257797067, "y": -39.83745144104388 }, { "x": -23.205086080981943, "y": -39.747319657976604 }, { "x": -23.427841944471382, "y": -39.638420906562075 }, { "x": -23.640844201360494, "y": -39.51149907495413 }, { "x": -23.842637831701126, "y": -39.36742116709688 }, { "x": -24.031844381753714, "y": -39.207171380214746 }, { "x": -24.207171380214618, "y": -39.031844381754 }, { "x": -24.367421167096893, "y": -38.84263783170151 }, { "x": -24.511499074954273, "y": -38.64084420136099 }, { "x": -24.638420906562402, "y": -38.42784194447198 }, { "x": -24.747319657977087, "y": -38.20508608098261 }, { "x": -24.837451441044536, "y": -37.97409825779782 }, { "x": -24.90820056490665, "y": -37.736456354398356 }, { "x": -24.959083741789684, "y": -37.49378370433483 }, { "x": -24.989753388346543, "y": -37.247738006224395 }, { "x": -25.000000000001123, "y": -36.99999999999973 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* H4: 3610213126S */}
    <chip name={"H4"} pcbX={0} pcbY={15} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3610213126S"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* F2: 1206L035/16YR */}
    <chip name={"F2"} pcbX={-9} pcbY={-27.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1206L035/16YR"} footprint={<Footprint_F2 />} noSchematicRepresentation={true}/>

    {/* R9: 0R */}
    <resistor name={"R9"} pcbX={-14.5} pcbY={2} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R9 />} schX={1.1500000000000004} schY={-0.6999999999999993} schRotation={180} schSheetName={"Overview"}/>

    {/* R20: 36.5K */}
    <resistor name={"R20"} pcbX={10.8} pcbY={-7} pcbRotation={0} resistance={"36.5kohm"} footprint={<Footprint_R20 />} schX={8.65} schY={-1.0999999999999988} schRotation={180} schSheetName={"Overview"}/>

    {/* R8: 10K */}
    <resistor name={"R8"} pcbX={16.8} pcbY={10} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R8 />} schX={-3.3500000000000005} schY={1.700000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* C4: 3.6pF */}
    <capacitor name={"C4"} pcbX={-9.5} pcbY={30} pcbRotation={180} capacitance={"3.6pF"} footprint={<Footprint_C4 />} schX={-3.9499999999999993} schY={4.6000000000000005} schRotation={90} schSheetName={"Overview"}/>

    {/* R29: 10R */}
    <resistor name={"R29"} pcbX={-2.2} pcbY={-4.4} pcbRotation={90} resistance={"10ohm"} footprint={<Footprint_R29 />} schX={4.649999999999999} schY={0.45000000000000107} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* D3: LED_Small */}
    <chip name={"D3"} pcbX={12} pcbY={-26} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* R24: 5.1K */}
    <resistor name={"R24"} pcbX={6.6} pcbY={-35.8} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R24 />} schX={-3.75} schY={0.6500000000000004} schRotation={180} schSheetName={"USBtoSerial"}/>

    {/* J2: 60312002114503 */}
    <chip name={"J2"} pcbX={0} pcbY={35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"60312002114503"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* H2: M3 */}
    <chip name={"H2"} pcbX={-21.8} pcbY={36.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"M3"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* R26: 27R */}
    <resistor name={"R26"} pcbX={1.3} pcbY={-16} pcbRotation={90} resistance={"27ohm"} footprint={<Footprint_R26 />} schX={-0.05000000000000071} schY={0.15000000000000036} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* SW1: PTS647 */}
    <chip name={"SW1"} pcbX={20.9} pcbY={1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PTS647"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* R2: 150K */}
    <resistor name={"R2"} pcbX={-11} pcbY={-23} pcbRotation={90} resistance={"150kohm"} footprint={<Footprint_R2 />} schX={-7.6499999999999995} schY={-3.9999999999999982} schRotation={90} schSheetName={"Overview"}/>

    {/* C6: NC */}
    <chip name={"C6"} pcbX={-6.6} pcbY={35.78} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NC"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* H5: M3 */}
    <chip name={"H5"} pcbX={21.8} pcbY={-36.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"M3"} footprint={<Footprint_H5 />} noSchematicRepresentation={true}/>

    {/* C1: 100nF */}
    <capacitor name={"C1"} pcbX={16.85} pcbY={19.75} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C1 />} schX={-9.149999999999999} schY={0.5} schRotation={90} schSheetName={"Overview"}/>

    {/* J3: B4B-XH-A */}
    <chip name={"J3"} pcbX={21.7} pcbY={14.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"B4B-XH-A"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* C14: 100nF */}
    <capacitor name={"C14"} pcbX={4.8} pcbY={-11} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C14 />} schX={1.25} schY={-0.8499999999999996} schRotation={90} schSheetName={"USBtoSerial"}/>

    {/* L4: 744232090 */}
    <chip name={"L4"} pcbX={0.5} pcbY={-20.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"744232090"} footprint={<Footprint_L4 />} noSchematicRepresentation={true}/>

    {/* Q2: BSN20 */}
    <chip name={"Q2"} pcbX={-8.5} pcbY={-13.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSN20"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* D5: LED_Small */}
    <chip name={"D5"} pcbX={21} pcbY={-26} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* Q1: BSN20 */}
    <chip name={"Q1"} pcbX={-12.6875} pcbY={-12.25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSN20"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C8: 22uF */}
    <capacitor name={"C8"} pcbX={-8.5} pcbY={-8.6} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C8 />} schX={4.25} schY={-0.29999999999999893} schRotation={0} schSheetName={"Overview"}/>

    {/* C7: 10uF */}
    <capacitor name={"C7"} pcbX={-9.1} pcbY={-2.8} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C7 />} schX={1.75} schY={-0.29999999999999893} schRotation={180} schSheetName={"Overview"}/>

    {/* R16: 470R */}
    <resistor name={"R16"} pcbX={12} pcbY={-22.9} pcbRotation={90} resistance={"470ohm"} footprint={<Footprint_R16 />} schX={4.950000000000001} schY={2.500000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* C16: 4.7uF */}
    <capacitor name={"C16"} pcbX={4.8} pcbY={-7.8} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C16 />} schX={5.350000000000001} schY={1.75} schRotation={90} schSheetName={"USBtoSerial"}/>

    {/* C10: 22uF */}
    <capacitor name={"C10"} pcbX={15.5} pcbY={-9.8} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C10 />} schX={8.65} schY={-0.29999999999999893} schRotation={0} schSheetName={"Overview"}/>

    {/* R32: 270R */}
    <resistor name={"R32"} pcbX={11} pcbY={-18.1} pcbRotation={-90} resistance={"270ohm"} footprint={<Footprint_R32 />} schX={5.050000000000001} schY={-1.549999999999999} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* J6: B6B-XH-A */}
    <chip name={"J6"} pcbX={-21.7} pcbY={17} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"B6B-XH-A"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* FB2: BLM18KG601SN1D */}
    <chip name={"FB2"} pcbX={-4.3} pcbY={-26.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"BLM18KG601SN1D"} footprint={<Footprint_FB2 />} noSchematicRepresentation={true}/>

    {/* R3: 150k */}
    <resistor name={"R3"} pcbX={-13} pcbY={-23} pcbRotation={90} resistance={"150kohm"} footprint={<Footprint_R3 />} schX={-7.6499999999999995} schY={-4.6} schRotation={90} schSheetName={"Overview"}/>

    {/* J4: JTAG 10-PINS */}
    <chip name={"J4"} pcbX={12} pcbY={35} pcbRotation={180} pinLabels={{ "pin1": ["01"], "pin2": ["02"], "pin3": ["03"], "pin4": ["04"], "pin5": ["05"], "pin6": ["06"], "pin7": ["07"], "pin8": ["08"], "pin9": ["09"], "pin10": ["10"] }} displayName={"JTAG 10-PINS"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* L3: 2.2uH */}
    <inductor name={"L3"} pcbX={18} pcbY={-6.4} pcbRotation={90} inductance={"2.2uH"} footprint={<Footprint_L3 />} schX={6.5500000000000025} schY={-1.4999999999999982} schRotation={90} schSheetName={"Overview"}/>

    {/* C13: 47pF */}
    <capacitor name={"C13"} pcbX={-1.05} pcbY={-13.5} pcbRotation={0} capacitance={"47pF"} footprint={<Footprint_C13 />} schX={0.3500000000000014} schY={-0.5499999999999989} schRotation={90} schSheetName={"USBtoSerial"}/>

    {/* R25: NC */}
    <chip name={"R25"} pcbX={-7} pcbY={-38.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NC"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* C3: 100nF */}
    <capacitor name={"C3"} pcbX={16.2} pcbY={2.2} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C3 />} schX={-8.65} schY={3.8000000000000007} schRotation={90} schSheetName={"Overview"}/>

    {/* R5: 0R */}
    <resistor name={"R5"} pcbX={-7.9} pcbY={-16.15} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R5 />} schX={-4.949999999999999} schY={-2.5999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* R7: 10K */}
    <resistor name={"R7"} pcbX={16.8} pcbY={6.9} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R7 />} schX={-3.55} schY={1.700000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* R4: 100k */}
    <resistor name={"R4"} pcbX={-14} pcbY={-19} pcbRotation={90} resistance={"100kohm"} footprint={<Footprint_R4 />} schX={-6.55} schY={-3.3000000000000007} schRotation={0} schSheetName={"Overview"}/>

    {/* R23: 5.1K */}
    <resistor name={"R23"} pcbX={-2.7} pcbY={-26.75} pcbRotation={-90} resistance={"5.1kohm"} footprint={<Footprint_R23 />} schX={-3.75} schY={0.8500000000000005} schRotation={180} schSheetName={"USBtoSerial"}/>

    {/* C9: 10uF */}
    <capacitor name={"C9"} pcbX={14.8} pcbY={-4} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C9 />} schX={6.049999999999999} schY={-0.29999999999999893} schRotation={180} schSheetName={"Overview"}/>

    {/* R6: 0R */}
    <resistor name={"R6"} pcbX={-12.1} pcbY={-14.8} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R6 />} schX={-5.749999999999999} schY={-2.5999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* R18: 270R */}
    <resistor name={"R18"} pcbX={21} pcbY={-22.9} pcbRotation={90} resistance={"270ohm"} footprint={<Footprint_R18 />} schX={6.35} schY={2.500000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* D2: LED_Small */}
    <chip name={"D2"} pcbX={9} pcbY={-26} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* J8: USB4085-GF-A */}
    <chip name={"J8"} pcbX={-2.5} pcbY={-31} pcbRotation={0} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} displayName={"USB4085-GF-A"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* C5: 100nF */}
    <capacitor name={"C5"} pcbX={-12.1} pcbY={-16.35} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C5 />} schX={-4.05} schY={-3.5} schRotation={-90} schSheetName={"Overview"}/>

    {/* J5: B4B-XH-A */}
    <chip name={"J5"} pcbX={-21.7} pcbY={3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"B4B-XH-A"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* R1: 1.2M */}
    <resistor name={"R1"} pcbX={-9} pcbY={-23} pcbRotation={-90} resistance={"1.2Mohm"} footprint={<Footprint_R1 />} schX={-7.6499999999999995} schY={-3.3999999999999986} schRotation={90} schSheetName={"Overview"}/>

    {/* U6: FT231XQ */}
    <chip name={"U6"} pcbX={0.25} pcbY={-9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"] }} displayName={"FT231XQ"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* C11: 10nF */}
    <capacitor name={"C11"} pcbX={-5.9} pcbY={-26.75} pcbRotation={90} capacitance={"10nF"} footprint={<Footprint_C11 />} schX={-2.3499999999999996} schY={1.5500000000000007} schRotation={90} schSheetName={"USBtoSerial"}/>

    {/* L1: 18nH */}
    <inductor name={"L1"} pcbX={-8.75} pcbY={32.5} pcbRotation={90} inductance={"18nH"} footprint={<Footprint_L1 />} schX={-3.45} schY={4.300000000000001} schRotation={0} schSheetName={"Overview"}/>

    {/* R34: 10k */}
    <resistor name={"R34"} pcbX={-13.7} pcbY={-1} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R34 />} schX={1.1500000000000004} schY={-0.4999999999999991} schRotation={180} schSheetName={"Overview"}/>

    {/* R14: 0R */}
    <resistor name={"R14"} pcbX={-10.4} pcbY={-8.4} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R14 />} schX={4.25} schY={-1.4999999999999982} schRotation={180} schSheetName={"Overview"}/>

    {/* R31: 270R */}
    <resistor name={"R31"} pcbX={9.3} pcbY={-18.1} pcbRotation={-90} resistance={"270ohm"} footprint={<Footprint_R31 />} schX={5.050000000000001} schY={-1.3499999999999996} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* FB1: BLM18KG601SN1D */}
    <chip name={"FB1"} pcbX={-7} pcbY={-36.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"BLM18KG601SN1D"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* J1: B2B-XH-A */}
    <chip name={"J1"} pcbX={-21.7} pcbY={-29} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"B2B-XH-A"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* R27: 27R */}
    <resistor name={"R27"} pcbX={-0.3} pcbY={-16} pcbRotation={90} resistance={"27ohm"} footprint={<Footprint_R27 />} schX={-0.05000000000000071} schY={-0.2499999999999991} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* D7: SMAJ15CA */}
    <chip name={"D7"} pcbX={-7.5} pcbY={-32} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SMAJ15CA"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* R21: 0R */}
    <resistor name={"R21"} pcbX={12} pcbY={-9.6} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R21 />} schX={8.65} schY={-1.299999999999999} schRotation={180} schSheetName={"Overview"}/>

    {/* C2: 4.7uF */}
    <capacitor name={"C2"} pcbX={15.2} pcbY={19.75} pcbRotation={-90} capacitance={"4.7uF"} footprint={<Footprint_C2 />} schX={-8.75} schY={0.5} schRotation={90} schSheetName={"Overview"}/>

    {/* H1: M3 */}
    <chip name={"H1"} pcbX={-21.8} pcbY={-36.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"M3"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* R33: 10R */}
    <resistor name={"R33"} pcbX={1} pcbY={-4.4} pcbRotation={90} resistance={"10ohm"} footprint={<Footprint_R33 />} schX={5.050000000000001} schY={-1.75} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* R17: 270R */}
    <resistor name={"R17"} pcbX={15} pcbY={-22.9} pcbRotation={90} resistance={"270ohm"} footprint={<Footprint_R17 />} schX={5.65} schY={2.500000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* R19: 270R */}
    <resistor name={"R19"} pcbX={18} pcbY={-22.9} pcbRotation={90} resistance={"270ohm"} footprint={<Footprint_R19 />} schX={7.049999999999999} schY={2.500000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* F1: 1206L035/16YR */}
    <chip name={"F1"} pcbX={-16} pcbY={-22.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1206L035/16YR"} footprint={<Footprint_F1 />} noSchematicRepresentation={true}/>

    {/* C12: 47pF */}
    <capacitor name={"C12"} pcbX={2.05} pcbY={-13.5} pcbRotation={0} capacitance={"47pF"} footprint={<Footprint_C12 />} schX={0.3500000000000014} schY={0.45000000000000107} schRotation={90} schSheetName={"USBtoSerial"}/>

    {/* R11: 10k */}
    <resistor name={"R11"} pcbX={-17.4} pcbY={-1} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R11 />} schX={1.1500000000000004} schY={-1.0999999999999988} schRotation={180} schSheetName={"Overview"}/>

    {/* R28: 10R */}
    <resistor name={"R28"} pcbX={-0.6} pcbY={-4.4} pcbRotation={90} resistance={"10ohm"} footprint={<Footprint_R28 />} schX={4.649999999999999} schY={0.6500000000000004} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* D1: SMAJ15CA */}
    <chip name={"D1"} pcbX={-21} pcbY={-21.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SMAJ15CA"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R13: 0R */}
    <resistor name={"R13"} pcbX={-12} pcbY={-8.4} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R13 />} schX={4.25} schY={-1.299999999999999} schRotation={180} schSheetName={"Overview"}/>

    {/* R10: 0R */}
    <resistor name={"R10"} pcbX={-16.5} pcbY={2} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R10 />} schX={1.1500000000000004} schY={-0.8999999999999995} schRotation={180} schSheetName={"Overview"}/>

    {/* R22: 0R */}
    <resistor name={"R22"} pcbX={13.6} pcbY={-9.6} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R22 />} schX={8.65} schY={-1.4999999999999982} schRotation={180} schSheetName={"Overview"}/>

    {/* R30: 10R */}
    <resistor name={"R30"} pcbX={2.6} pcbY={-4.4} pcbRotation={90} resistance={"10ohm"} footprint={<Footprint_R30 />} schX={5.050000000000001} schY={-1.1500000000000004} schRotation={0} schSheetName={"USBtoSerial"}/>

    {/* U1: Argos SMD module */}
    <chip name={"U1"} pcbX={0} pcbY={15} pcbRotation={90} pinLabels={{ "pin36": ["0"], "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"] }} displayName={"Argos SMD module"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* L2: 2.2uH */}
    <inductor name={"L2"} pcbX={-5.9} pcbY={-5.3} pcbRotation={90} inductance={"2.2uH"} footprint={<Footprint_L2 />} schX={2.1499999999999986} schY={-1.4999999999999982} schRotation={90} schSheetName={"Overview"}/>

    {/* R15: 470R */}
    <resistor name={"R15"} pcbX={9} pcbY={-22.9} pcbRotation={90} resistance={"470ohm"} footprint={<Footprint_R15 />} schX={4.25} schY={2.500000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* D8: LED_Small */}
    <chip name={"D8"} pcbX={9.3} pcbY={-15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* U2: LTC4365DDB */}
    <chip name={"U2"} pcbX={-11} pcbY={-19} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"LTC4365DDB"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* D9: LED_Small */}
    <chip name={"D9"} pcbX={11} pcbY={-15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* U3: TPS63900 */}
    <chip name={"U3"} pcbX={-9.4} pcbY={-5.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} displayName={"TPS63900"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* D4: LED_Small */}
    <chip name={"D4"} pcbX={15} pcbY={-26} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* U5: 82400102 */}
    <chip name={"U5"} pcbX={0.5} pcbY={-25.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"82400102"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* U4: TPS63900 */}
    <chip name={"U4"} pcbX={14.4} pcbY={-6.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} displayName={"TPS63900"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* J7: B3B-XH-A */}
    <chip name={"J7"} pcbX={21.7} pcbY={26} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"B3B-XH-A"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* R12: 36.5K */}
    <resistor name={"R12"} pcbX={-13} pcbY={-5.9} pcbRotation={0} resistance={"36.5kohm"} footprint={<Footprint_R12 />} schX={4.25} schY={-1.0999999999999988} schRotation={180} schSheetName={"Overview"}/>

    {/* JP1: 42375-1246 */}
    <chip name={"JP1"} pcbX={-19} pcbY={-12} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"42375-1246"} footprint={<Footprint_JP1 />} noSchematicRepresentation={true}/>

    {/* D6: LED_Small */}
    <chip name={"D6"} pcbX={18} pcbY={-26} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED_Small"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* C15: 100nF */}
    <capacitor name={"C15"} pcbX={4.8} pcbY={-9.4} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C15 />} schX={4.949999999999999} schY={1.75} schRotation={90} schSheetName={"USBtoSerial"}/>

    {/* H3: M3 */}
    <chip name={"H3"} pcbX={21.8} pcbY={36.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"M3"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* G***: LOGO */}
    <chip name={"G___"} pcbX={0} pcbY={15} pcbRotation={180} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_G___ />} noSchematicRepresentation={true}/>

    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".H4 > .pin1", ".R20 > .pin1", ".C4 > .pin2", ".D3 > .pin1", ".R24 > .pin1", ".J2 > .pin2", ".H2 > .pin1", ".SW1 > .pin2", ".C6 > .pin2", ".H5 > .pin1", ".C1 > .pin1", ".J3 > .pin1", ".C14 > .pin1", ".D5 > .pin1", ".C8 > .pin2", ".C7 > .pin2", ".C16 > .pin1", ".C10 > .pin2", ".J6 > .pin2", ".R3 > .pin1", ".J4 > .pin3", ".J4 > .pin5", ".J4 > .pin9", ".C13 > .pin1", ".R25 > .pin2", ".C3 > .pin1", ".R23 > .pin1", ".C9 > .pin2", ".D2 > .pin1", ".J8 > .pin1", ".J8 > .pin8", ".J8 > .pin9", ".J8 > .pin16", ".C5 > .pin2", ".J5 > .pin4", ".U6 > .pin3", ".U6 > .pin13", ".U6 > .pin21", ".C11 > .pin2", ".R34 > .pin2", ".R14 > .pin1", ".FB1 > .pin2", ".J1 > .pin1", ".D7 > .pin2", ".R21 > .pin1", ".C2 > .pin1", ".H1 > .pin1", ".C12 > .pin2", ".D1 > .pin2", ".R13 > .pin1", ".R22 > .pin1", ".U1 > .pin6", ".U1 > .pin13", ".U1 > .pin14", ".U1 > .pin15", ".U1 > .pin16", ".U1 > .pin17", ".U1 > .pin19", ".U1 > .pin20", ".U1 > .pin21", ".U1 > .pin29", ".U2 > .pin1", ".U2 > .pin9", ".U3 > .pin8", ".U3 > .pin11", ".D4 > .pin1", ".U5 > .pin2", ".U4 > .pin8", ".U4 > .pin11", ".J7 > .pin1", ".R12 > .pin1", ".D6 > .pin1", ".C15 > .pin1", ".H3 > .pin1"]}/>
    {/* KiCad net: Net-(D7-A1) */}
    <KiCadNet name={"Net__D7_A1_"} connectsTo={[".F2 > .pin1", ".J8 > .pin2", ".J8 > .pin7", ".J8 > .pin10", ".J8 > .pin15", ".D7 > .pin1"]}/>
    {/* KiCad net: Net-(C11-Pad1) */}
    <KiCadNet name={"Net__C11_Pad1_"} connectsTo={[".F2 > .pin2", ".FB2 > .pin1", ".C11 > .pin1"]}/>
    {/* KiCad net: Net-(U3-EN) */}
    <KiCadNet name={"Net__U3_EN_"} connectsTo={[".R9 > .pin1", ".R34 > .pin1", ".U3 > .pin1"]}/>
    {/* KiCad net: /VPA_EN */}
    <KiCadNet name={"_VPA_EN"} connectsTo={[".R9 > .pin2", ".U1 > .pin10"]}/>
    {/* KiCad net: Net-(U4-CFG1) */}
    <KiCadNet name={"Net__U4_CFG1_"} connectsTo={[".R20 > .pin2", ".U4 > .pin3"]}/>
    {/* KiCad net: /SDA */}
    <KiCadNet name={"_SDA"} connectsTo={[".R8 > .pin1", ".J3 > .pin3", ".U1 > .pin33"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".R8 > .pin2", ".C1 > .pin2", ".J3 > .pin2", ".C10 > .pin1", ".J6 > .pin1", ".J4 > .pin1", ".R7 > .pin2", ".R18 > .pin2", ".J5 > .pin1", ".C2 > .pin2", ".R11 > .pin2", ".U1 > .pin30", ".U1 > .pin31", ".U1 > .pin32", ".U4 > .pin6"]}/>
    {/* KiCad net: /RF-OUT */}
    <KiCadNet name={"_RF_OUT"} connectsTo={[".C4 > .pin1", ".L1 > .pin1", ".U1 > .pin18"]}/>
    {/* KiCad net: /USBtoSerial/RXD */}
    <KiCadNet name={"_USBtoSerial_RXD"} connectsTo={[".R29 > .pin1", ".U6 > .pin1"]}/>
    {/* KiCad net: /LPUART_TX */}
    <KiCadNet name={"_LPUART_TX"} connectsTo={[".R29 > .pin2", ".U1 > .pin5"]}/>
    {/* KiCad net: Net-(D3-A) */}
    <KiCadNet name={"Net__D3_A_"} connectsTo={[".D3 > .pin2", ".R16 > .pin1"]}/>
    {/* KiCad net: Net-(J8-CC2) */}
    <KiCadNet name={"Net__J8_CC2_"} connectsTo={[".R24 > .pin2", ".J8 > .pin11"]}/>
    {/* KiCad net: /RF-SMA */}
    <KiCadNet name={"_RF_SMA"} connectsTo={[".J2 > .pin1", ".C6 > .pin1", ".L1 > .pin2"]}/>
    {/* KiCad net: /USBtoSerial/3D- */}
    <KiCadNet name={"_USBtoSerial_3D_"} connectsTo={[".R26 > .pin1", ".L4 > .pin3"]}/>
    {/* KiCad net: /USBtoSerial/4D- */}
    <KiCadNet name={"_USBtoSerial_4D_"} connectsTo={[".R26 > .pin2", ".U6 > .pin9", ".C12 > .pin1"]}/>
    {/* KiCad net: /RST */}
    <KiCadNet name={"_RST"} connectsTo={[".SW1 > .pin1", ".J4 > .pin10", ".C3 > .pin2", ".U1 > .pin35"]}/>
    {/* KiCad net: Net-(U2-OV) */}
    <KiCadNet name={"Net__U2_OV_"} connectsTo={[".R2 > .pin1", ".R3 > .pin2", ".U2 > .pin2"]}/>
    {/* KiCad net: Net-(U2-UV) */}
    <KiCadNet name={"Net__U2_UV_"} connectsTo={[".R2 > .pin2", ".R1 > .pin1", ".U2 > .pin3"]}/>
    {/* KiCad net: /SCL */}
    <KiCadNet name={"_SCL"} connectsTo={[".J3 > .pin4", ".R7 > .pin1", ".U1 > .pin34"]}/>
    {/* KiCad net: +VCCIO */}
    <KiCadNet name={"_VCCIO"} connectsTo={[".C14 > .pin2", ".R32 > .pin2", ".U6 > .pin10", ".U6 > .pin11", ".U6 > .pin20", ".R31 > .pin2", ".R17 > .pin2"]}/>
    {/* KiCad net: /USBtoSerial/2D+ */}
    <KiCadNet name={"_USBtoSerial_2D_"} connectsTo={[".L4 > .pin1", ".U5 > .pin3"]}/>
    {/* KiCad net: /USBtoSerial/3D+ */}
    <KiCadNet name={"_USBtoSerial_3D__"} connectsTo={[".L4 > .pin2", ".R27 > .pin1"]}/>
    {/* KiCad net: /USBtoSerial/2D- */}
    <KiCadNet name={"_USBtoSerial_2D__"} connectsTo={[".L4 > .pin4", ".U5 > .pin1"]}/>
    {/* KiCad net: Net-(Q2-G) */}
    <KiCadNet name={"Net__Q2_G_"} connectsTo={[".Q2 > .pin1", ".R5 > .pin2"]}/>
    {/* KiCad net: Net-(Q1-S) */}
    <KiCadNet name={"Net__Q1_S_"} connectsTo={[".Q2 > .pin2", ".Q1 > .pin2"]}/>
    {/* KiCad net: VOUT */}
    <KiCadNet name={"VOUT"} connectsTo={[".Q2 > .pin3", ".R16 > .pin2", ".C5 > .pin1", ".U2 > .pin6", ".JP1 > .pin3"]}/>
    {/* KiCad net: Net-(D5-A) */}
    <KiCadNet name={"Net__D5_A_"} connectsTo={[".D5 > .pin2", ".R18 > .pin1"]}/>
    {/* KiCad net: Net-(Q1-G) */}
    <KiCadNet name={"Net__Q1_G_"} connectsTo={[".Q1 > .pin1", ".R6 > .pin1"]}/>
    {/* KiCad net: Net-(Q1-D) */}
    <KiCadNet name={"Net__Q1_D_"} connectsTo={[".Q1 > .pin3", ".R4 > .pin1", ".R1 > .pin2", ".F1 > .pin1", ".U2 > .pin4"]}/>
    {/* KiCad net: VPA */}
    <KiCadNet name={"VPA"} connectsTo={[".C8 > .pin1", ".R19 > .pin2", ".U1 > .pin7", ".U1 > .pin8", ".U3 > .pin6"]}/>
    {/* KiCad net: VDD */}
    <KiCadNet name={"VDD"} connectsTo={[".C7 > .pin1", ".C9 > .pin1", ".U3 > .pin10", ".U4 > .pin1", ".U4 > .pin2", ".U4 > .pin10", ".JP1 > .pin2"]}/>
    {/* KiCad net: VBUS */}
    <KiCadNet name={"VBUS"} connectsTo={[".C16 > .pin2", ".FB2 > .pin2", ".U6 > .pin12", ".R15 > .pin2", ".U5 > .pin5", ".JP1 > .pin1", ".C15 > .pin2"]}/>
    {/* KiCad net: Net-(D9-A) */}
    <KiCadNet name={"Net__D9_A_"} connectsTo={[".R32 > .pin1", ".D9 > .pin2"]}/>
    {/* KiCad net: /SPI_SCK */}
    <KiCadNet name={"_SPI_SCK"} connectsTo={[".J6 > .pin3", ".U1 > .pin3"]}/>
    {/* KiCad net: /SPI_MISO */}
    <KiCadNet name={"_SPI_MISO"} connectsTo={[".J6 > .pin4", ".U1 > .pin22"]}/>
    {/* KiCad net: /SPI_MOSI */}
    <KiCadNet name={"_SPI_MOSI"} connectsTo={[".J6 > .pin5", ".U1 > .pin2"]}/>
    {/* KiCad net: /SPI_CS */}
    <KiCadNet name={"_SPI_CS"} connectsTo={[".J6 > .pin6", ".U1 > .pin24"]}/>
    {/* KiCad net: /SWDIO */}
    <KiCadNet name={"_SWDIO"} connectsTo={[".J4 > .pin2", ".U1 > .pin26"]}/>
    {/* KiCad net: /SWCLK */}
    <KiCadNet name={"_SWCLK"} connectsTo={[".J4 > .pin4", ".U1 > .pin25"]}/>
    {/* KiCad net: /SWO */}
    <KiCadNet name={"_SWO"} connectsTo={[".J4 > .pin6", ".U1 > .pin23"]}/>
    {/* KiCad net: unconnected-(J4-Pad07) */}
    <KiCadNet name={"unconnected__J4_Pad07_"} connectsTo={[".J4 > .pin7"]}/>
    {/* KiCad net: unconnected-(J4-Pad08) */}
    <KiCadNet name={"unconnected__J4_Pad08_"} connectsTo={[".J4 > .pin8"]}/>
    {/* KiCad net: Net-(U4-LX2) */}
    <KiCadNet name={"Net__U4_LX2_"} connectsTo={[".L3 > .pin1", ".U4 > .pin7"]}/>
    {/* KiCad net: Net-(U4-LX1) */}
    <KiCadNet name={"Net__U4_LX1_"} connectsTo={[".L3 > .pin2", ".U4 > .pin9"]}/>
    {/* KiCad net: /USBtoSerial/4D+ */}
    <KiCadNet name={"_USBtoSerial_4D__"} connectsTo={[".C13 > .pin2", ".U6 > .pin8", ".R27 > .pin2"]}/>
    {/* KiCad net: Shield */}
    <KiCadNet name={"Shield"} connectsTo={[".R25 > .pin1", ".J8 > .pin17", ".FB1 > .pin1"]}/>
    {/* KiCad net: Net-(U2-GATE) */}
    <KiCadNet name={"Net__U2_GATE_"} connectsTo={[".R5 > .pin1", ".R6 > .pin2", ".U2 > .pin5"]}/>
    {/* KiCad net: Net-(U2-~{SHDN}) */}
    <KiCadNet name={"Net__U2___SHDN__"} connectsTo={[".R4 > .pin2", ".U2 > .pin8"]}/>
    {/* KiCad net: Net-(J8-CC1) */}
    <KiCadNet name={"Net__J8_CC1_"} connectsTo={[".R23 > .pin2", ".J8 > .pin3"]}/>
    {/* KiCad net: Net-(D2-A) */}
    <KiCadNet name={"Net__D2_A_"} connectsTo={[".D2 > .pin2", ".R15 > .pin1"]}/>
    {/* KiCad net: /USBtoSerial/1D+ */}
    <KiCadNet name={"_USBtoSerial_1D_"} connectsTo={[".J8 > .pin4", ".J8 > .pin12", ".U5 > .pin4"]}/>
    {/* KiCad net: /USBtoSerial/1D- */}
    <KiCadNet name={"_USBtoSerial_1D__"} connectsTo={[".J8 > .pin5", ".J8 > .pin13", ".U5 > .pin6"]}/>
    {/* KiCad net: unconnected-(J8-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__J8_SBU1_PadA8_"} connectsTo={[".J8 > .pin6"]}/>
    {/* KiCad net: unconnected-(J8-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__J8_SBU2_PadB8_"} connectsTo={[".J8 > .pin14"]}/>
    {/* KiCad net: /UART_TX */}
    <KiCadNet name={"_UART_TX"} connectsTo={[".J5 > .pin2", ".U1 > .pin11"]}/>
    {/* KiCad net: /UART_RX */}
    <KiCadNet name={"_UART_RX"} connectsTo={[".J5 > .pin3", ".U1 > .pin12"]}/>
    {/* KiCad net: unconnected-(U6-~{RI}-Pad2) */}
    <KiCadNet name={"unconnected__U6___RI__Pad2_"} connectsTo={[".U6 > .pin2"]}/>
    {/* KiCad net: unconnected-(U6-~{DSR}-Pad4) */}
    <KiCadNet name={"unconnected__U6___DSR__Pad4_"} connectsTo={[".U6 > .pin4"]}/>
    {/* KiCad net: unconnected-(U6-~{DCD}-Pad5) */}
    <KiCadNet name={"unconnected__U6___DCD__Pad5_"} connectsTo={[".U6 > .pin5"]}/>
    {/* KiCad net: unconnected-(U6-~{CTS}-Pad6) */}
    <KiCadNet name={"unconnected__U6___CTS__Pad6_"} connectsTo={[".U6 > .pin6"]}/>
    {/* KiCad net: Net-(D9-K) */}
    <KiCadNet name={"Net__D9_K_"} connectsTo={[".U6 > .pin7", ".D9 > .pin1"]}/>
    {/* KiCad net: Net-(D8-K) */}
    <KiCadNet name={"Net__D8_K_"} connectsTo={[".U6 > .pin14", ".D8 > .pin1"]}/>
    {/* KiCad net: /USBtoSerial/CBUS0 */}
    <KiCadNet name={"_USBtoSerial_CBUS0"} connectsTo={[".U6 > .pin15", ".R30 > .pin1"]}/>
    {/* KiCad net: /USBtoSerial/CBUS3 */}
    <KiCadNet name={"_USBtoSerial_CBUS3"} connectsTo={[".U6 > .pin16", ".R33 > .pin1"]}/>
    {/* KiCad net: /USBtoSerial/TXD */}
    <KiCadNet name={"_USBtoSerial_TXD"} connectsTo={[".U6 > .pin17", ".R28 > .pin1"]}/>
    {/* KiCad net: unconnected-(U6-~{DTR}-Pad18) */}
    <KiCadNet name={"unconnected__U6___DTR__Pad18_"} connectsTo={[".U6 > .pin18"]}/>
    {/* KiCad net: unconnected-(U6-~{RTS}-Pad19) */}
    <KiCadNet name={"unconnected__U6___RTS__Pad19_"} connectsTo={[".U6 > .pin19"]}/>
    {/* KiCad net: Net-(U3-CFG3) */}
    <KiCadNet name={"Net__U3_CFG3_"} connectsTo={[".R14 > .pin2", ".U3 > .pin5"]}/>
    {/* KiCad net: Net-(D8-A) */}
    <KiCadNet name={"Net__D8_A_"} connectsTo={[".R31 > .pin1", ".D8 > .pin2"]}/>
    {/* KiCad net: Net-(D1-A1) */}
    <KiCadNet name={"Net__D1_A1_"} connectsTo={[".J1 > .pin2", ".F1 > .pin2", ".D1 > .pin1"]}/>
    {/* KiCad net: Net-(U4-CFG2) */}
    <KiCadNet name={"Net__U4_CFG2_"} connectsTo={[".R21 > .pin2", ".U4 > .pin4"]}/>
    {/* KiCad net: /RF-BUSY */}
    <KiCadNet name={"_RF_BUSY"} connectsTo={[".R33 > .pin2", ".U1 > .pin27", ".J7 > .pin2"]}/>
    {/* KiCad net: Net-(D4-A) */}
    <KiCadNet name={"Net__D4_A_"} connectsTo={[".R17 > .pin1", ".D4 > .pin2"]}/>
    {/* KiCad net: Net-(D6-A) */}
    <KiCadNet name={"Net__D6_A_"} connectsTo={[".R19 > .pin1", ".D6 > .pin2"]}/>
    {/* KiCad net: Net-(U3-SEL) */}
    <KiCadNet name={"Net__U3_SEL_"} connectsTo={[".R11 > .pin1", ".R10 > .pin1", ".U3 > .pin2"]}/>
    {/* KiCad net: /LPUART_RX */}
    <KiCadNet name={"_LPUART_RX"} connectsTo={[".R28 > .pin2", ".U1 > .pin4"]}/>
    {/* KiCad net: Net-(U3-CFG2) */}
    <KiCadNet name={"Net__U3_CFG2_"} connectsTo={[".R13 > .pin2", ".U3 > .pin4"]}/>
    {/* KiCad net: /VPA_PGOOD */}
    <KiCadNet name={"_VPA_PGOOD"} connectsTo={[".R10 > .pin2", ".U1 > .pin9"]}/>
    {/* KiCad net: Net-(U4-CFG3) */}
    <KiCadNet name={"Net__U4_CFG3_"} connectsTo={[".R22 > .pin2", ".U4 > .pin5"]}/>
    {/* KiCad net: /RF-NRST */}
    <KiCadNet name={"_RF_NRST"} connectsTo={[".R30 > .pin2", ".U1 > .pin28", ".J7 > .pin3"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad0) */}
    <KiCadNet name={"unconnected__U1_NC_Pad0_"} connectsTo={[".U1 > .pin36"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad1) */}
    <KiCadNet name={"unconnected__U1_NC_Pad1_"} connectsTo={[".U1 > .pin1"]}/>
    {/* KiCad net: Net-(U3-LX2) */}
    <KiCadNet name={"Net__U3_LX2_"} connectsTo={[".L2 > .pin1", ".U3 > .pin7"]}/>
    {/* KiCad net: Net-(U3-LX1) */}
    <KiCadNet name={"Net__U3_LX1_"} connectsTo={[".L2 > .pin2", ".U3 > .pin9"]}/>
    {/* KiCad net: unconnected-(U2-~{FAULT}-Pad7) */}
    <KiCadNet name={"unconnected__U2___FAULT__Pad7_"} connectsTo={[".U2 > .pin7"]}/>
    {/* KiCad net: Net-(U3-CFG1) */}
    <KiCadNet name={"Net__U3_CFG1_"} connectsTo={[".U3 > .pin3", ".R12 > .pin2"]}/>
    <KiCadSchematic /></board>);
}
