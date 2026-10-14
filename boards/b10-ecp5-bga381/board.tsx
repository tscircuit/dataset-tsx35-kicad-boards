import { KiCadSchematic, KiCadNet } from './schematic'
// ECP5 BGA-381 FT2232HQ FIFO board
// Source: https://github.com/gildobjanschi/ECP5_BGA381_FT2232HQ_FIFO_EXT
// Commit: 81403f7487a9eded36c6500b8c8b6c12a6705f81; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_D21, Footprint_D1, Footprint_SW1, Footprint_D19, Footprint_D4, Footprint_D18, Footprint_H2, Footprint_D2, Footprint_D10, Footprint_H1, Footprint_H4, Footprint_D20, Footprint_D3, Footprint_TP3, Footprint_D5, Footprint_TP9, Footprint_R29, Footprint_T1, Footprint_R27, Footprint_TP1, Footprint_D23, Footprint_D25, Footprint_D8, Footprint_D16, Footprint_G___, Footprint_D9, Footprint_D12, Footprint_TP8, Footprint_J2, Footprint_R28, Footprint_C3, Footprint_D13, Footprint_D14, Footprint_D15, Footprint_TP7, Footprint_TP2, Footprint_C4, Footprint_H3, Footprint_R26, Footprint_D6, Footprint_D11, Footprint_J3, Footprint_TP6, Footprint_D7, Footprint_D22, Footprint_D17, Footprint_TP5, Footprint_TP4, Footprint_U2, Footprint_D24, Footprint_U1, Footprint_R25, Footprint_R1, Footprint_R12, Footprint_R23, Footprint_R6, Footprint_R18, Footprint_R7, Footprint_R21, Footprint_R14, Footprint_R10, Footprint_R20, Footprint_R4, Footprint_R15, Footprint_R3, Footprint_R9, Footprint_R22, Footprint_C2, Footprint_R24, Footprint_R17, Footprint_J1, Footprint_R11, Footprint_R5, Footprint_R13, Footprint_R19, Footprint_R2, Footprint_R8, Footprint_R16, Footprint_C1 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={64.40000000000131} height={54.60000000000025} thickness={1.58} layers={4} outline={[{ "x": 21.999999999999318, "y": 27.29999999999987 }, { "x": 21.999999999999318, "y": 25.399999999999878 }, { "x": 24.09999999999934, "y": 25.399999999999878 }, { "x": 24.09999999999934, "y": 27.29999999999987 }, { "x": 28.399999999999324, "y": 27.29999999999987 }, { "x": 28.648531906796478, "y": 27.291863957383313 }, { "x": 28.895999564634394, "y": 27.26749056595122 }, { "x": 29.141343278449227, "y": 27.22698419636285 }, { "x": 29.383512448236303, "y": 27.170518303203266 }, { "x": 29.621470067883138, "y": 27.098334682223793 }, { "x": 29.854197165790907, "y": 27.01074243493494 }, { "x": 30.080697168269836, "y": 26.90811664498561 }, { "x": 30.300000167022915, "y": 26.790896771996444 }, { "x": 30.51116707244421, "y": 26.659584769725257 }, { "x": 30.713293634947064, "y": 26.514742936622852 }, { "x": 30.905514317101535, "y": 26.35699150798351 }, { "x": 31.08700600000057, "y": 26.18700600000072 }, { "x": 31.2569915079834, "y": 26.005514317101756 }, { "x": 31.414742936622815, "y": 25.813293634947343 }, { "x": 31.55958476972529, "y": 25.611167072444545 }, { "x": 31.690896771996563, "y": 25.40000016702328 }, { "x": 31.8081166449858, "y": 25.180697168270257 }, { "x": 31.9107424349352, "y": 24.954197165791342 }, { "x": 31.99833468222414, "y": 24.7214700678836 }, { "x": 32.0705183032037, "y": 24.483512448236823 }, { "x": 32.12698419636337, "y": 24.241343278449733 }, { "x": 32.16749056595182, "y": 23.995999564634914 }, { "x": 32.19186395738399, "y": 23.748531906797012 }, { "x": 32.20000000000064, "y": 23.499999999999872 }, { "x": 32.199999999999335, "y": -23.500000000000128 }, { "x": 32.19186395738279, "y": -23.748531906797226 }, { "x": 32.16749056595074, "y": -23.9959995646351 }, { "x": 32.1269841963624, "y": -24.24134327844989 }, { "x": 32.07051830320282, "y": -24.48351244823695 }, { "x": 31.998334682223344, "y": -24.721470067883715 }, { "x": 31.91074243493449, "y": -24.95419716579144 }, { "x": 31.808116644985176, "y": -25.180697168270342 }, { "x": 31.690896771995995, "y": -25.40000016702335 }, { "x": 31.55958476972478, "y": -25.6111670724446 }, { "x": 31.41474293662236, "y": -25.8132936349474 }, { "x": 31.256991507983003, "y": -26.005514317101785 }, { "x": 31.0870060000002, "y": -26.187006000000736 }, { "x": 30.905514317101222, "y": -26.356991507983494 }, { "x": 30.71329363494678, "y": -26.51474293662281 }, { "x": 30.511167072443953, "y": -26.659584769725186 }, { "x": 30.30000016702266, "y": -26.79089677199633 }, { "x": 30.080697168269637, "y": -26.90811664498547 }, { "x": 29.85419716579071, "y": -27.01074243493474 }, { "x": 29.621470067882967, "y": -27.098334682223523 }, { "x": 29.38351244823619, "y": -27.17051830320294 }, { "x": 29.141343278449114, "y": -27.22698419636245 }, { "x": 28.89599956463431, "y": -27.267490565950737 }, { "x": 28.64853190679642, "y": -27.291863957382745 }, { "x": 28.399999999999324, "y": -27.299999999999216 }, { "x": -28.400000000000674, "y": -27.300000000000125 }, { "x": -28.648531906797686, "y": -27.291863957383327 }, { "x": -28.895999564635446, "y": -27.267490565951036 }, { "x": -29.141343278450123, "y": -27.22698419636248 }, { "x": -29.383512448237056, "y": -27.17051830320274 }, { "x": -29.621470067883692, "y": -27.098334682223125 }, { "x": -29.85419716579129, "y": -27.010742434934173 }, { "x": -30.08069716827005, "y": -26.90811664498476 }, { "x": -30.300000167022944, "y": -26.79089677199552 }, { "x": -30.51116707244408, "y": -26.659584769724276 }, { "x": -30.713293634946766, "y": -26.514742936621857 }, { "x": -30.905514317101066, "y": -26.356991507982514 }, { "x": -31.087005999999946, "y": -26.187005999999755 }, { "x": -31.256991507982633, "y": -26.00551431710082 }, { "x": -31.41474293662192, "y": -25.813293634946476 }, { "x": -31.55958476972428, "y": -25.611167072443735 }, { "x": -31.690896771995455, "y": -25.400000167022554 }, { "x": -31.808116644984622, "y": -25.18069716826963 }, { "x": -31.910742434933965, "y": -24.954197165790845 }, { "x": -31.998334682222847, "y": -24.721470067883217 }, { "x": -32.07051830320238, "y": -24.483512448236553 }, { "x": -32.126984196362045, "y": -24.241343278449605 }, { "x": -32.167490565950516, "y": -23.995999564634914 }, { "x": -32.191863957382736, "y": -23.74853190679714 }, { "x": -32.19999999999945, "y": -23.500000000000128 }, { "x": -32.20000000000067, "y": 23.499999999999872 }, { "x": -32.1918639573839, "y": 23.748531906796927 }, { "x": -32.167490565951624, "y": 23.99599956463473 }, { "x": -32.12698419636308, "y": 24.24134327844945 }, { "x": -32.07051830320334, "y": 24.483512448236425 }, { "x": -31.998334682223756, "y": 24.721470067883118 }, { "x": -31.910742434934804, "y": 24.95419716579076 }, { "x": -31.808116644985418, "y": 25.180697168269575 }, { "x": -31.690896771996194, "y": 25.40000016702251 }, { "x": -31.559584769724964, "y": 25.611167072443692 }, { "x": -31.414742936622545, "y": 25.813293634946433 }, { "x": -31.256991507983216, "y": 26.005514317100804 }, { "x": -31.08700600000047, "y": 26.18700599999974 }, { "x": -30.905514317101535, "y": 26.3569915079825 }, { "x": -30.713293634947192, "y": 26.514742936621857 }, { "x": -30.51116707244445, "y": 26.659584769724276 }, { "x": -30.30000016702327, "y": 26.79089677199552 }, { "x": -30.080697168270348, "y": 26.90811664498476 }, { "x": -29.854197165791533, "y": 27.010742434934173 }, { "x": -29.62147006788389, "y": 27.098334682223125 }, { "x": -29.383512448237227, "y": 27.17051830320274 }, { "x": -29.14134327845025, "y": 27.22698419636248 }, { "x": -28.89599956463553, "y": 27.267490565951036 }, { "x": -28.64853190679773, "y": 27.291863957383327 }, { "x": -28.400000000000674, "y": 27.300000000000125 }, { "x": 13.499999999999318, "y": 27.29999999999987 }, { "x": 13.499999999999318, "y": 25.399999999999878 }, { "x": 15.59999999999934, "y": 25.399999999999878 }, { "x": 15.59999999999934, "y": 27.29999999999987 }, { "x": 21.999999999999318, "y": 27.29999999999987 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* D21: YELLOW */}
    <chip name={"D21"} pcbX={-25.8} pcbY={-11.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LSYCK/J3-PRV"} displayName={"YELLOW"} footprint={<Footprint_D21 />} noSchematicRepresentation={true}/>

    {/* D1: BLUE */}
    <chip name={"D1"} pcbX={-27.8} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* SW1: PTS645SK43SMTR92 LFS */}
    <chip name={"SW1"} pcbX={18.8} pcbY={-11.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PTS645SK43SMTR92 LFS"} displayName={"PTS645SK43SMTR92 LFS"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* D19: BLUE */}
    <chip name={"D19"} pcbX={-7.4} pcbY={-2.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D19 />} noSchematicRepresentation={true}/>

    {/* D4: BLUE */}
    <chip name={"D4"} pcbX={-18.8} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* D18: GREEN */}
    <chip name={"D18"} pcbX={-11.8} pcbY={-3.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D18 />} noSchematicRepresentation={true}/>

    {/* H2: MountingHole */}
    <chip name={"H2"} pcbX={28.4} pcbY={23.5} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* D2: BLUE */}
    <chip name={"D2"} pcbX={-24.8} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* D10: BLUE */}
    <chip name={"D10"} pcbX={-19.8} pcbY={22.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* H1: MountingHole */}
    <chip name={"H1"} pcbX={-28.4} pcbY={23.5} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* H4: MountingHole */}
    <chip name={"H4"} pcbX={-28.4} pcbY={-23.5} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* D20: RED */}
    <chip name={"D20"} pcbX={-0.4} pcbY={-7.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LSECK/J3-PRV"} displayName={"RED"} footprint={<Footprint_D20 />} noSchematicRepresentation={true}/>

    {/* D3: BLUE */}
    <chip name={"D3"} pcbX={-21.8} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* TP3: 5190TR */}
    <chip name={"TP3"} pcbX={8.8} pcbY={-14.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5190TR"} displayName={"5190TR"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* D5: BLUE */}
    <chip name={"D5"} pcbX={-15.2} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* TP9: 5194TR */}
    <chip name={"TP9"} pcbX={8.8} pcbY={10.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5194TR"} displayName={"5194TR"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* R29: 100 */}
    <resistor name={"R29"} pcbX={6} pcbY={14.1} pcbRotation={-90} resistance={"100ohm"} footprint={<Footprint_R29 />} schX={4.299999999999997} schY={-7.850000000000001} schRotation={0} schSheetName={"Extension"}/>

    {/* T1: DA101JC */}
    <chip name={"T1"} pcbX={18.8} pcbY={8.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"DA101JC"} displayName={"DA101JC"} footprint={<Footprint_T1 />} noSchematicRepresentation={true}/>

    {/* R27: 75 */}
    <resistor name={"R27"} pcbX={10} pcbY={6.9} pcbRotation={90} resistance={"75ohm"} footprint={<Footprint_R27 />} schX={-9.700000000000001} schY={-7.050000000000001} schRotation={-90} schSheetName={"Extension"}/>

    {/* TP1: 5197TR */}
    <chip name={"TP1"} pcbX={25.8} pcbY={-14.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5197TR"} displayName={"5197TR"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* D23: YELLOW */}
    <chip name={"D23"} pcbX={-11.8} pcbY={-11.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LSYCK/J3-PRV"} displayName={"YELLOW"} footprint={<Footprint_D23 />} noSchematicRepresentation={true}/>

    {/* D25: BLUE */}
    <chip name={"D25"} pcbX={-7.4} pcbY={-10.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D25 />} noSchematicRepresentation={true}/>

    {/* D8: BLUE */}
    <chip name={"D8"} pcbX={-6.2} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* D16: GREEN */}
    <chip name={"D16"} pcbX={-20} pcbY={-2.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D16 />} noSchematicRepresentation={true}/>

    {/* G***: LOGO */}
    <chip name={"G___"} pcbX={0.2} pcbY={4.3} pcbRotation={0} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_G___ />} noSchematicRepresentation={true}/>

    {/* D9: BLUE */}
    <chip name={"D9"} pcbX={-22.8} pcbY={22.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* D12: BLUE */}
    <chip name={"D12"} pcbX={-13.8} pcbY={22.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* TP8: 5191TR */}
    <chip name={"TP8"} pcbX={-19.3} pcbY={-22.1} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5191TR"} displayName={"5191TR"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* J2: RCJ-044 */}
    <chip name={"J2"} pcbX={18.8} pcbY={27.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RCJ-044"} displayName={"RCJ-044"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* R28: 100 */}
    <resistor name={"R28"} pcbX={3.2} pcbY={14.1} pcbRotation={-90} resistance={"100ohm"} footprint={<Footprint_R28 />} schX={4.899999999999999} schY={-7.650000000000002} schRotation={0} schSheetName={"Extension"}/>

    {/* C3: 0.1µF */}
    <capacitor name={"C3"} pcbX={12.6} pcbY={6.9} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C3 />} schX={-8.900000000000002} schY={-6.550000000000001} schRotation={0} schSheetName={"Extension"}/>

    {/* D13: GREEN */}
    <chip name={"D13"} pcbX={11.2} pcbY={22.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* D14: GREEN */}
    <chip name={"D14"} pcbX={-10.6} pcbY={22.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* D15: GREEN */}
    <chip name={"D15"} pcbX={-25.8} pcbY={-3.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D15 />} noSchematicRepresentation={true}/>

    {/* TP7: 5191TR */}
    <chip name={"TP7"} pcbX={20.6} pcbY={-22.1} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5191TR"} displayName={"5191TR"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* TP2: 5197TR */}
    <chip name={"TP2"} pcbX={25.8} pcbY={-9.1} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5197TR"} displayName={"5197TR"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* C4: 18nF */}
    <capacitor name={"C4"} pcbX={12.6} pcbY={13.9} pcbRotation={-90} capacitance={"18nF"} footprint={<Footprint_C4 />} schX={-6.900000000000002} schY={-7.650000000000002} schRotation={-90} schSheetName={"Extension"}/>

    {/* H3: MountingHole */}
    <chip name={"H3"} pcbX={28.4} pcbY={-23.5} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* R26: 150 */}
    <resistor name={"R26"} pcbX={12.6} pcbY={-0.5} pcbRotation={-90} resistance={"150ohm"} footprint={<Footprint_R26 />} schX={-10.400000000000002} schY={-6.550000000000001} schRotation={0} schSheetName={"Extension"}/>

    {/* D6: BLUE */}
    <chip name={"D6"} pcbX={-12.2} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* D11: BLUE */}
    <chip name={"D11"} pcbX={-16.8} pcbY={22.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* J3: HDMI A */}
    <chip name={"J3"} pcbX={-0.2} pcbY={19.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["SH"] }} manufacturerPartNumber={"10029449-001RLF"} displayName={"HDMI A"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* TP6: 5190TR */}
    <chip name={"TP6"} pcbX={8.8} pcbY={1.9} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5190TR"} displayName={"5190TR"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* D7: BLUE */}
    <chip name={"D7"} pcbX={-9.2} pcbY={11.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LVBC/D"} displayName={"BLUE"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* D22: GREEN */}
    <chip name={"D22"} pcbX={-20} pcbY={-10.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D22 />} noSchematicRepresentation={true}/>

    {/* D17: YELLOW */}
    <chip name={"D17"} pcbX={-15.4} pcbY={-3.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LSYCK/J3-PRV"} displayName={"YELLOW"} footprint={<Footprint_D17 />} noSchematicRepresentation={true}/>

    {/* TP5: 5190TR */}
    <chip name={"TP5"} pcbX={8.8} pcbY={-3.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5190TR"} displayName={"5190TR"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* TP4: 5190TR */}
    <chip name={"TP4"} pcbX={8.8} pcbY={-9.1} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"5190TR"} displayName={"5190TR"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* U2: DSLVDS1047 */}
    <chip name={"U2"} pcbX={-1.6} pcbY={11.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} manufacturerPartNumber={"DSLVDS1047PWR"} displayName={"DSLVDS1047"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* D24: GREEN */}
    <chip name={"D24"} pcbX={-15.4} pcbY={-11.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"APT1608LZGCK"} displayName={"GREEN"} footprint={<Footprint_D24 />} noSchematicRepresentation={true}/>

    {/* U1: 74HC04 */}
    <chip name={"U1"} pcbX={18.8} pcbY={-1.525} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"] }} manufacturerPartNumber={"SN74HC04PWR"} displayName={"74HC04"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* R25: 330 */}
    <resistor name={"R25"} pcbX={-7.4} pcbY={-10.1} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R25 />} schX={-5.700000000000001} schY={-2.3499999999999996} schRotation={-90} schSheetName={"Extension"}/>

    {/* R1: 330 */}
    <resistor name={"R1"} pcbX={-27.8} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R1 />} schX={-13.000000000000002} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R12: 330 */}
    <resistor name={"R12"} pcbX={-13.8} pcbY={22.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R12 />} schX={-9.100000000000001} schY={4.35} schRotation={-90} schSheetName={"Extension"}/>

    {/* R23: 750 */}
    <resistor name={"R23"} pcbX={-11.8} pcbY={-11.9} pcbRotation={-90} resistance={"750ohm"} footprint={<Footprint_R23 />} schX={-8.3} schY={-2.3499999999999996} schRotation={-90} schSheetName={"Extension"}/>

    {/* R6: 330 */}
    <resistor name={"R6"} pcbX={-12.2} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R6 />} schX={-6} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R18: 330 */}
    <resistor name={"R18"} pcbX={-11.8} pcbY={-3.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R18 />} schX={-7.000000000000002} schY={0.8499999999999979} schRotation={-90} schSheetName={"Extension"}/>

    {/* R7: 330 */}
    <resistor name={"R7"} pcbX={-9.2} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R7 />} schX={-4.600000000000001} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R21: 750 */}
    <resistor name={"R21"} pcbX={-25.8} pcbY={-11.9} pcbRotation={-90} resistance={"750ohm"} footprint={<Footprint_R21 />} schX={-13.000000000000002} schY={-2.3499999999999996} schRotation={-90} schSheetName={"Extension"}/>

    {/* R14: 330 */}
    <resistor name={"R14"} pcbX={-10.6} pcbY={22.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R14 />} schX={1.3999999999999986} schY={4.249999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R10: 330 */}
    <resistor name={"R10"} pcbX={-19.8} pcbY={22.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R10 />} schX={-11.700000000000001} schY={4.35} schRotation={-90} schSheetName={"Extension"}/>

    {/* R20: 750 */}
    <resistor name={"R20"} pcbX={-0.4} pcbY={-7.5} pcbRotation={-90} resistance={"750ohm"} footprint={<Footprint_R20 />} schX={-2.900000000000002} schY={-0.6500000000000004} schRotation={-90} schSheetName={"Extension"}/>

    {/* R4: 330 */}
    <resistor name={"R4"} pcbX={-18.8} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R4 />} schX={-9.100000000000001} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R15: 330 */}
    <resistor name={"R15"} pcbX={-25.8} pcbY={-3.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R15 />} schX={-13.000000000000002} schY={0.8499999999999979} schRotation={-90} schSheetName={"Extension"}/>

    {/* R3: 330 */}
    <resistor name={"R3"} pcbX={-21.8} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R3 />} schX={-10.400000000000002} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R9: 330 */}
    <resistor name={"R9"} pcbX={-22.8} pcbY={22.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R9 />} schX={-13.000000000000002} schY={4.35} schRotation={-90} schSheetName={"Extension"}/>

    {/* R22: 330 */}
    <resistor name={"R22"} pcbX={-20} pcbY={-10.1} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R22 />} schX={-11.3} schY={-2.3499999999999996} schRotation={-90} schSheetName={"Extension"}/>

    {/* C2: 0.1µF */}
    <capacitor name={"C2"} pcbX={18.8} pcbY={-1.525} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C2 />} schX={-5.000000000000002} schY={-6.449999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R24: 330 */}
    <resistor name={"R24"} pcbX={-15.4} pcbY={-11.9} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R24 />} schX={-7.000000000000002} schY={-2.3499999999999996} schRotation={-90} schSheetName={"Extension"}/>

    {/* R17: 750 */}
    <resistor name={"R17"} pcbX={-15.4} pcbY={-3.7} pcbRotation={-90} resistance={"750ohm"} footprint={<Footprint_R17 />} schX={-8.3} schY={0.8499999999999979} schRotation={-90} schSheetName={"Extension"}/>

    {/* J1: FLE-126-01-G-DV */}
    <chip name={"J1"} pcbX={0.8} pcbY={-20.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"] }} manufacturerPartNumber={"FLE-126-01-G-DV"} displayName={"FLE-126-01-G-DV"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* R11: 330 */}
    <resistor name={"R11"} pcbX={-16.8} pcbY={22.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R11 />} schX={-10.400000000000002} schY={4.35} schRotation={-90} schSheetName={"Extension"}/>

    {/* R5: 330 */}
    <resistor name={"R5"} pcbX={-15.2} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R5 />} schX={-7.300000000000001} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R13: 330 */}
    <resistor name={"R13"} pcbX={11.2} pcbY={22.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R13 />} schX={0.09999999999999787} schY={4.249999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R19: 330 */}
    <resistor name={"R19"} pcbX={-7.4} pcbY={-2.3} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R19 />} schX={-5.600000000000001} schY={0.8499999999999979} schRotation={-90} schSheetName={"Extension"}/>

    {/* R2: 330 */}
    <resistor name={"R2"} pcbX={-24.8} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R2 />} schX={-11.700000000000001} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R8: 330 */}
    <resistor name={"R8"} pcbX={-6.2} pcbY={11.7} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R8 />} schX={-3.200000000000001} schY={7.549999999999999} schRotation={-90} schSheetName={"Extension"}/>

    {/* R16: 330 */}
    <resistor name={"R16"} pcbX={-20} pcbY={-2.3} pcbRotation={-90} resistance={"330ohm"} footprint={<Footprint_R16 />} schX={-11.3} schY={0.8499999999999979} schRotation={-90} schSheetName={"Extension"}/>

    {/* C1: 0.1µF */}
    <capacitor name={"C1"} pcbX={-1.6} pcbY={11.5} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C1 />} schX={1.2999999999999972} schY={-4.450000000000001} schRotation={-90} schSheetName={"Extension"}/>

    {/* KiCad net: Net-(D21-K) */}
    <KiCadNet name={"Net__D21_K_"} connectsTo={[".D21 > .pin1", ".R21 > .pin1"]}/>
    {/* KiCad net: EXT_45 */}
    <KiCadNet name={"EXT_45"} connectsTo={[".D21 > .pin2", ".J1 > .pin3"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".D1 > .pin1", ".R1 > .pin1"]}/>
    {/* KiCad net: EXT_40 */}
    <KiCadNet name={"EXT_40"} connectsTo={[".D1 > .pin2", ".J1 > .pin8"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".SW1 > .pin1", ".T1 > .pin4", ".R27 > .pin2", ".TP8 > .pin1", ".TP7 > .pin1", ".C4 > .pin2", ".J3 > .pin2", ".J3 > .pin5", ".J3 > .pin8", ".J3 > .pin11", ".J3 > .pin17", ".J3 > .pin20", ".U2 > .pin5", ".U2 > .pin8", ".U1 > .pin7", ".U1 > .pin9", ".U1 > .pin11", ".U1 > .pin13", ".R25 > .pin2", ".R1 > .pin2", ".R12 > .pin2", ".R23 > .pin2", ".R6 > .pin2", ".R18 > .pin2", ".R7 > .pin2", ".R21 > .pin2", ".R14 > .pin2", ".R10 > .pin2", ".R20 > .pin2", ".R4 > .pin2", ".R15 > .pin2", ".R3 > .pin2", ".R9 > .pin2", ".R22 > .pin2", ".C2 > .pin2", ".R24 > .pin2", ".R17 > .pin2", ".J1 > .pin1", ".J1 > .pin2", ".J1 > .pin51", ".J1 > .pin52", ".R11 > .pin2", ".R5 > .pin2", ".R13 > .pin2", ".R19 > .pin2", ".R2 > .pin2", ".R8 > .pin2", ".R16 > .pin2", ".C1 > .pin2"]}/>
    {/* KiCad net: EXT_0 */}
    <KiCadNet name={"EXT_0"} connectsTo={[".SW1 > .pin2", ".J1 > .pin48"]}/>
    {/* KiCad net: Net-(D19-K) */}
    <KiCadNet name={"Net__D19_K_"} connectsTo={[".D19 > .pin1", ".R19 > .pin1"]}/>
    {/* KiCad net: EXT_31 */}
    <KiCadNet name={"EXT_31"} connectsTo={[".D19 > .pin2", ".J1 > .pin17"]}/>
    {/* KiCad net: Net-(D4-K) */}
    <KiCadNet name={"Net__D4_K_"} connectsTo={[".D4 > .pin1", ".R4 > .pin1"]}/>
    {/* KiCad net: EXT_34 */}
    <KiCadNet name={"EXT_34"} connectsTo={[".D4 > .pin2", ".J1 > .pin14"]}/>
    {/* KiCad net: Net-(D18-K) */}
    <KiCadNet name={"Net__D18_K_"} connectsTo={[".D18 > .pin1", ".R18 > .pin1"]}/>
    {/* KiCad net: EXT_35 */}
    <KiCadNet name={"EXT_35"} connectsTo={[".D18 > .pin2", ".J1 > .pin13"]}/>
    {/* KiCad net: Net-(D2-K) */}
    <KiCadNet name={"Net__D2_K_"} connectsTo={[".D2 > .pin1", ".R2 > .pin1"]}/>
    {/* KiCad net: EXT_38 */}
    <KiCadNet name={"EXT_38"} connectsTo={[".D2 > .pin2", ".J1 > .pin10"]}/>
    {/* KiCad net: Net-(D10-K) */}
    <KiCadNet name={"Net__D10_K_"} connectsTo={[".D10 > .pin1", ".R10 > .pin1"]}/>
    {/* KiCad net: EXT_22 */}
    <KiCadNet name={"EXT_22"} connectsTo={[".D10 > .pin2", ".J1 > .pin26"]}/>
    {/* KiCad net: Net-(D20-K) */}
    <KiCadNet name={"Net__D20_K_"} connectsTo={[".D20 > .pin1", ".R20 > .pin1"]}/>
    {/* KiCad net: EXT_29 */}
    <KiCadNet name={"EXT_29"} connectsTo={[".D20 > .pin2", ".J1 > .pin19"]}/>
    {/* KiCad net: Net-(D3-K) */}
    <KiCadNet name={"Net__D3_K_"} connectsTo={[".D3 > .pin1", ".R3 > .pin1"]}/>
    {/* KiCad net: EXT_36 */}
    <KiCadNet name={"EXT_36"} connectsTo={[".D3 > .pin2", ".J1 > .pin12"]}/>
    {/* KiCad net: EXT_12 */}
    <KiCadNet name={"EXT_12"} connectsTo={[".TP3 > .pin1", ".U2 > .pin2", ".J1 > .pin36"]}/>
    {/* KiCad net: Net-(D5-K) */}
    <KiCadNet name={"Net__D5_K_"} connectsTo={[".D5 > .pin1", ".R5 > .pin1"]}/>
    {/* KiCad net: EXT_32 */}
    <KiCadNet name={"EXT_32"} connectsTo={[".D5 > .pin2", ".J1 > .pin16"]}/>
    {/* KiCad net: Net-(C3-Pad2) */}
    <KiCadNet name={"Net__C3_Pad2_"} connectsTo={[".TP9 > .pin1", ".R27 > .pin1", ".C3 > .pin2", ".R26 > .pin1"]}/>
    {/* KiCad net: Net-(J3-SDA) */}
    <KiCadNet name={"Net__J3_SDA_"} connectsTo={[".R29 > .pin1", ".J3 > .pin16"]}/>
    {/* KiCad net: EXT_9 */}
    <KiCadNet name={"EXT_9"} connectsTo={[".R29 > .pin2", ".J1 > .pin39"]}/>
    {/* KiCad net: Net-(J2-In) */}
    <KiCadNet name={"Net__J2_In_"} connectsTo={[".T1 > .pin1", ".J2 > .pin2"]}/>
    {/* KiCad net: unconnected-(T1-NC-Pad2) */}
    <KiCadNet name={"unconnected__T1_NC_Pad2_"} connectsTo={[".T1 > .pin2"]}/>
    {/* KiCad net: Net-(J2-Ext) */}
    <KiCadNet name={"Net__J2_Ext_"} connectsTo={[".T1 > .pin3", ".J2 > .pin1", ".C4 > .pin1"]}/>
    {/* KiCad net: unconnected-(T1-NC-Pad5) */}
    <KiCadNet name={"unconnected__T1_NC_Pad5_"} connectsTo={[".T1 > .pin5"]}/>
    {/* KiCad net: Net-(T1-SB) */}
    <KiCadNet name={"Net__T1_SB_"} connectsTo={[".T1 > .pin6", ".C3 > .pin1"]}/>
    {/* KiCad net: EXT_1 */}
    <KiCadNet name={"EXT_1"} connectsTo={[".TP1 > .pin1", ".J1 > .pin47"]}/>
    {/* KiCad net: Net-(D23-K) */}
    <KiCadNet name={"Net__D23_K_"} connectsTo={[".D23 > .pin1", ".R23 > .pin1"]}/>
    {/* KiCad net: EXT_37 */}
    <KiCadNet name={"EXT_37"} connectsTo={[".D23 > .pin2", ".J1 > .pin11"]}/>
    {/* KiCad net: Net-(D25-K) */}
    <KiCadNet name={"Net__D25_K_"} connectsTo={[".D25 > .pin1", ".R25 > .pin1"]}/>
    {/* KiCad net: EXT_33 */}
    <KiCadNet name={"EXT_33"} connectsTo={[".D25 > .pin2", ".J1 > .pin15"]}/>
    {/* KiCad net: Net-(D8-K) */}
    <KiCadNet name={"Net__D8_K_"} connectsTo={[".D8 > .pin1", ".R8 > .pin1"]}/>
    {/* KiCad net: EXT_26 */}
    <KiCadNet name={"EXT_26"} connectsTo={[".D8 > .pin2", ".J1 > .pin22"]}/>
    {/* KiCad net: Net-(D16-K) */}
    <KiCadNet name={"Net__D16_K_"} connectsTo={[".D16 > .pin1", ".R16 > .pin1"]}/>
    {/* KiCad net: EXT_42 */}
    <KiCadNet name={"EXT_42"} connectsTo={[".D16 > .pin2", ".J1 > .pin6"]}/>
    {/* KiCad net: Net-(D9-K) */}
    <KiCadNet name={"Net__D9_K_"} connectsTo={[".D9 > .pin1", ".R9 > .pin1"]}/>
    {/* KiCad net: EXT_24 */}
    <KiCadNet name={"EXT_24"} connectsTo={[".D9 > .pin2", ".J1 > .pin24"]}/>
    {/* KiCad net: Net-(D12-K) */}
    <KiCadNet name={"Net__D12_K_"} connectsTo={[".D12 > .pin1", ".R12 > .pin1"]}/>
    {/* KiCad net: EXT_18 */}
    <KiCadNet name={"EXT_18"} connectsTo={[".D12 > .pin2", ".J1 > .pin30"]}/>
    {/* KiCad net: Net-(J3-SCL) */}
    <KiCadNet name={"Net__J3_SCL_"} connectsTo={[".R28 > .pin1", ".J3 > .pin15"]}/>
    {/* KiCad net: EXT_11 */}
    <KiCadNet name={"EXT_11"} connectsTo={[".R28 > .pin2", ".J1 > .pin37"]}/>
    {/* KiCad net: Net-(D13-K) */}
    <KiCadNet name={"Net__D13_K_"} connectsTo={[".D13 > .pin1", ".R13 > .pin1"]}/>
    {/* KiCad net: EXT_14 */}
    <KiCadNet name={"EXT_14"} connectsTo={[".D13 > .pin2", ".J1 > .pin34"]}/>
    {/* KiCad net: Net-(D14-K) */}
    <KiCadNet name={"Net__D14_K_"} connectsTo={[".D14 > .pin1", ".R14 > .pin1"]}/>
    {/* KiCad net: EXT_16 */}
    <KiCadNet name={"EXT_16"} connectsTo={[".D14 > .pin2", ".J1 > .pin32"]}/>
    {/* KiCad net: Net-(D15-K) */}
    <KiCadNet name={"Net__D15_K_"} connectsTo={[".D15 > .pin1", ".R15 > .pin1"]}/>
    {/* KiCad net: EXT_44 */}
    <KiCadNet name={"EXT_44"} connectsTo={[".D15 > .pin2", ".J1 > .pin4"]}/>
    {/* KiCad net: EXT_2 */}
    <KiCadNet name={"EXT_2"} connectsTo={[".TP2 > .pin1", ".J1 > .pin46"]}/>
    {/* KiCad net: Net-(R26-Pad2) */}
    <KiCadNet name={"Net__R26_Pad2_"} connectsTo={[".R26 > .pin2", ".U1 > .pin4", ".U1 > .pin6"]}/>
    {/* KiCad net: Net-(D6-K) */}
    <KiCadNet name={"Net__D6_K_"} connectsTo={[".D6 > .pin1", ".R6 > .pin1"]}/>
    {/* KiCad net: EXT_30 */}
    <KiCadNet name={"EXT_30"} connectsTo={[".D6 > .pin2", ".J1 > .pin18"]}/>
    {/* KiCad net: Net-(D11-K) */}
    <KiCadNet name={"Net__D11_K_"} connectsTo={[".D11 > .pin1", ".R11 > .pin1"]}/>
    {/* KiCad net: EXT_20 */}
    <KiCadNet name={"EXT_20"} connectsTo={[".D11 > .pin2", ".J1 > .pin28"]}/>
    {/* KiCad net: DIFF_SDATA+ */}
    <KiCadNet name={"DIFF_SDATA_"} connectsTo={[".J3 > .pin1", ".U2 > .pin15"]}/>
    {/* KiCad net: DIFF_SDATA- */}
    <KiCadNet name={"DIFF_SDATA__"} connectsTo={[".J3 > .pin3", ".U2 > .pin16"]}/>
    {/* KiCad net: DIFF_BCLK+ */}
    <KiCadNet name={"DIFF_BCLK_"} connectsTo={[".J3 > .pin4", ".U2 > .pin14"]}/>
    {/* KiCad net: DIFF_BCLK- */}
    <KiCadNet name={"DIFF_BCLK__"} connectsTo={[".J3 > .pin6", ".U2 > .pin13"]}/>
    {/* KiCad net: DIFF_LRCK+ */}
    <KiCadNet name={"DIFF_LRCK_"} connectsTo={[".J3 > .pin7", ".U2 > .pin11"]}/>
    {/* KiCad net: DIFF_LRCK- */}
    <KiCadNet name={"DIFF_LRCK__"} connectsTo={[".J3 > .pin9", ".U2 > .pin12"]}/>
    {/* KiCad net: DIFF_MCLK+ */}
    <KiCadNet name={"DIFF_MCLK_"} connectsTo={[".J3 > .pin10", ".U2 > .pin10"]}/>
    {/* KiCad net: DIFF_MCLK- */}
    <KiCadNet name={"DIFF_MCLK__"} connectsTo={[".J3 > .pin12", ".U2 > .pin9"]}/>
    {/* KiCad net: unconnected-(J3-CEC-Pad13) */}
    <KiCadNet name={"unconnected__J3_CEC_Pad13_"} connectsTo={[".J3 > .pin13"]}/>
    {/* KiCad net: unconnected-(J3-UTILITY-Pad14) */}
    <KiCadNet name={"unconnected__J3_UTILITY_Pad14_"} connectsTo={[".J3 > .pin14"]}/>
    {/* KiCad net: unconnected-(J3-+5V-Pad18) */}
    <KiCadNet name={"unconnected__J3__5V_Pad18_"} connectsTo={[".J3 > .pin18"]}/>
    {/* KiCad net: unconnected-(J3-HPD-Pad19) */}
    <KiCadNet name={"unconnected__J3_HPD_Pad19_"} connectsTo={[".J3 > .pin19"]}/>
    {/* KiCad net: EXT_6 */}
    <KiCadNet name={"EXT_6"} connectsTo={[".TP6 > .pin1", ".U2 > .pin7", ".J1 > .pin42"]}/>
    {/* KiCad net: Net-(D7-K) */}
    <KiCadNet name={"Net__D7_K_"} connectsTo={[".D7 > .pin1", ".R7 > .pin1"]}/>
    {/* KiCad net: EXT_28 */}
    <KiCadNet name={"EXT_28"} connectsTo={[".D7 > .pin2", ".J1 > .pin20"]}/>
    {/* KiCad net: Net-(D22-K) */}
    <KiCadNet name={"Net__D22_K_"} connectsTo={[".D22 > .pin1", ".R22 > .pin1"]}/>
    {/* KiCad net: EXT_43 */}
    <KiCadNet name={"EXT_43"} connectsTo={[".D22 > .pin2", ".J1 > .pin5"]}/>
    {/* KiCad net: Net-(D17-K) */}
    <KiCadNet name={"Net__D17_K_"} connectsTo={[".D17 > .pin1", ".R17 > .pin1"]}/>
    {/* KiCad net: EXT_39 */}
    <KiCadNet name={"EXT_39"} connectsTo={[".D17 > .pin2", ".J1 > .pin9"]}/>
    {/* KiCad net: EXT_8 */}
    <KiCadNet name={"EXT_8"} connectsTo={[".TP5 > .pin1", ".U2 > .pin6", ".J1 > .pin40"]}/>
    {/* KiCad net: EXT_10 */}
    <KiCadNet name={"EXT_10"} connectsTo={[".TP4 > .pin1", ".U2 > .pin3", ".J1 > .pin38"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".U2 > .pin1", ".U2 > .pin4", ".U1 > .pin14", ".C2 > .pin1", ".J1 > .pin49", ".J1 > .pin50", ".C1 > .pin1"]}/>
    {/* KiCad net: Net-(D24-K) */}
    <KiCadNet name={"Net__D24_K_"} connectsTo={[".D24 > .pin1", ".R24 > .pin1"]}/>
    {/* KiCad net: EXT_41 */}
    <KiCadNet name={"EXT_41"} connectsTo={[".D24 > .pin2", ".J1 > .pin7"]}/>
    {/* KiCad net: EXT_4 */}
    <KiCadNet name={"EXT_4"} connectsTo={[".U1 > .pin1", ".J1 > .pin44"]}/>
    {/* KiCad net: Net-(U1-Pad2) */}
    <KiCadNet name={"Net__U1_Pad2_"} connectsTo={[".U1 > .pin2", ".U1 > .pin3", ".U1 > .pin5"]}/>
    {/* KiCad net: unconnected-(U1-Pad8) */}
    <KiCadNet name={"unconnected__U1_Pad8_"} connectsTo={[".U1 > .pin8"]}/>
    {/* KiCad net: unconnected-(U1-Pad10) */}
    <KiCadNet name={"unconnected__U1_Pad10_"} connectsTo={[".U1 > .pin10"]}/>
    {/* KiCad net: unconnected-(U1-Pad12) */}
    <KiCadNet name={"unconnected__U1_Pad12_"} connectsTo={[".U1 > .pin12"]}/>
    {/* KiCad net: unconnected-(J1-Pin_21-Pad21) */}
    <KiCadNet name={"unconnected__J1_Pin_21_Pad21_"} connectsTo={[".J1 > .pin21"]}/>
    {/* KiCad net: unconnected-(J1-Pin_23-Pad23) */}
    <KiCadNet name={"unconnected__J1_Pin_23_Pad23_"} connectsTo={[".J1 > .pin23"]}/>
    {/* KiCad net: unconnected-(J1-Pin_25-Pad25) */}
    <KiCadNet name={"unconnected__J1_Pin_25_Pad25_"} connectsTo={[".J1 > .pin25"]}/>
    {/* KiCad net: unconnected-(J1-Pin_27-Pad27) */}
    <KiCadNet name={"unconnected__J1_Pin_27_Pad27_"} connectsTo={[".J1 > .pin27"]}/>
    {/* KiCad net: unconnected-(J1-Pin_29-Pad29) */}
    <KiCadNet name={"unconnected__J1_Pin_29_Pad29_"} connectsTo={[".J1 > .pin29"]}/>
    {/* KiCad net: unconnected-(J1-Pin_31-Pad31) */}
    <KiCadNet name={"unconnected__J1_Pin_31_Pad31_"} connectsTo={[".J1 > .pin31"]}/>
    {/* KiCad net: unconnected-(J1-Pin_33-Pad33) */}
    <KiCadNet name={"unconnected__J1_Pin_33_Pad33_"} connectsTo={[".J1 > .pin33"]}/>
    {/* KiCad net: unconnected-(J1-Pin_35-Pad35) */}
    <KiCadNet name={"unconnected__J1_Pin_35_Pad35_"} connectsTo={[".J1 > .pin35"]}/>
    {/* KiCad net: unconnected-(J1-Pin_41-Pad41) */}
    <KiCadNet name={"unconnected__J1_Pin_41_Pad41_"} connectsTo={[".J1 > .pin41"]}/>
    {/* KiCad net: unconnected-(J1-Pin_43-Pad43) */}
    <KiCadNet name={"unconnected__J1_Pin_43_Pad43_"} connectsTo={[".J1 > .pin43"]}/>
    {/* KiCad net: unconnected-(J1-Pin_45-Pad45) */}
    <KiCadNet name={"unconnected__J1_Pin_45_Pad45_"} connectsTo={[".J1 > .pin45"]}/>
    <KiCadSchematic /></board>);
}
