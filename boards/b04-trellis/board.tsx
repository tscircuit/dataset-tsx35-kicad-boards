import { KiCadSchematic, KiCadNet } from './schematic'
// Trellis Core
// Source: https://github.com/protolux-electronics/trellis_core
// Commit: db4fe71623c14bcea47d7457d0db4c99d3899124; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_C7, Footprint_C33, Footprint_C28, Footprint_C2, Footprint_C41, Footprint_R23, Footprint_R25, Footprint_U6, Footprint_C10, Footprint_C20, Footprint_R17, Footprint_C44, Footprint_R18, Footprint_R1, Footprint_SW1, Footprint_R11, Footprint_R20, Footprint_R15, Footprint_F1, Footprint_C40, Footprint_C23, Footprint_H2, Footprint_C27, Footprint_C5, Footprint_C14, Footprint_C34, Footprint_C36, Footprint_R22, Footprint_C17, Footprint_U5, Footprint_C31, Footprint_Y1, Footprint_C30, Footprint_C25, Footprint_R19, Footprint_C11, Footprint_C6, Footprint_U3, Footprint_U2, Footprint_C24, Footprint_D1, Footprint_C37, Footprint_R12, Footprint_H1, Footprint_R5, Footprint_J1, Footprint_C22, Footprint_U1, Footprint_R2, Footprint_C4, Footprint_C15, Footprint_C19, Footprint_R13, Footprint_C38, Footprint_C8, Footprint_H3, Footprint_SW2, Footprint_C35, Footprint_R4, Footprint_kibuzzard_68FD2BE5, Footprint_L1, Footprint_R6, Footprint_R16, Footprint_R24, Footprint_Y2, Footprint_C42, Footprint_C39, Footprint_C9, Footprint_C3, Footprint_R14, Footprint_C43, Footprint_C13, Footprint_C29, Footprint_C16, Footprint_C18, Footprint_R3, Footprint_C32, Footprint_C21, Footprint_R10, Footprint_C26, Footprint_R9, Footprint_R7, Footprint_H4, Footprint_R8, Footprint_U4, Footprint_R21, Footprint_L2, Footprint_C1, Footprint_C12 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={50.00000000000048} height={50.00000000000007} thickness={1.6} layers={4} outline={[{ "x": 22.00000000000024, "y": -24.99999999999997 }, { "x": -21.99999999999976, "y": -24.99999999999997 }, { "x": -22.247738006224367, "y": -24.989753388345548 }, { "x": -22.493783704334753, "y": -24.95908374178883 }, { "x": -22.736456354398257, "y": -24.908200564905954 }, { "x": -22.974098257797692, "y": -24.837451441043996 }, { "x": -23.205086080982483, "y": -24.74731965797669 }, { "x": -23.427841944471844, "y": -24.638420906562146 }, { "x": -23.640844201360864, "y": -24.51149907495416 }, { "x": -23.84263783170141, "y": -24.367421167096907 }, { "x": -24.031844381753913, "y": -24.207171380214774 }, { "x": -24.207171380214717, "y": -24.031844381754 }, { "x": -24.367421167096886, "y": -23.842637831701524 }, { "x": -24.511499074954166, "y": -23.64084420136099 }, { "x": -24.63842090656218, "y": -23.427841944472007 }, { "x": -24.747319657976767, "y": -23.205086080982653 }, { "x": -24.83745144104411, "y": -22.974098257797877 }, { "x": -24.908200564906103, "y": -22.736456354398456 }, { "x": -24.959083741789023, "y": -22.49378370433496 }, { "x": -24.989753388345775, "y": -22.24773800622458 }, { "x": -25.00000000000024, "y": -21.99999999999997 }, { "x": -24.99999999999976, "y": 22.00000000000003 }, { "x": -24.989753916198424, "y": 22.247738181986676 }, { "x": -24.95908472222652, "y": 22.49378409150038 }, { "x": -24.90820192078217, "y": 22.736456977428098 }, { "x": -24.837453094661328, "y": 22.974099129938615 }, { "x": -24.747321532403454, "y": 23.20508720437595 }, { "x": -24.638422926924903, "y": 23.427843310402558 }, { "x": -24.511501169691826, "y": 23.64084579064206 }, { "x": -24.367423269162757, "y": 23.842639615191892 }, { "x": -24.207173428213338, "y": 24.031846321000643 }, { "x": -24.0318463210004, "y": 24.207173428213572 }, { "x": -23.84263961519165, "y": 24.367423269162984 }, { "x": -23.640845790641812, "y": 24.511501169692046 }, { "x": -23.427843310402302, "y": 24.638422926925116 }, { "x": -23.205087204375687, "y": 24.747321532403653 }, { "x": -22.974099129938352, "y": 24.83745309466152 }, { "x": -22.736456977427828, "y": 24.908201920782354 }, { "x": -22.49378409150011, "y": 24.9590847222267 }, { "x": -22.247738181986406, "y": 24.989753916198588 }, { "x": -21.99999999999976, "y": 24.999999999999915 }, { "x": 22.00000000000024, "y": 25.00000000000003 }, { "x": 22.24773800622478, "y": 24.989753388345463 }, { "x": 22.493783704335073, "y": 24.959083741788625 }, { "x": 22.736456354398484, "y": 24.908200564905634 }, { "x": 22.97409825779782, "y": 24.837451441043598 }, { "x": 23.20508608098251, "y": 24.747319657976227 }, { "x": 23.42784194447178, "y": 24.638420906561635 }, { "x": 23.640844201360693, "y": 24.51149907495362 }, { "x": 23.842637831701154, "y": 24.36742116709636 }, { "x": 24.031844381753572, "y": 24.207171380214227 }, { "x": 24.207171380214305, "y": 24.031844381753473 }, { "x": 24.36742116709641, "y": 23.842637831701033 }, { "x": 24.511499074953633, "y": 23.640844201360558 }, { "x": 24.63842090656162, "y": 23.427841944471616 }, { "x": 24.747319657976178, "y": 23.20508608098234 }, { "x": 24.837451441043513, "y": 22.974098257797635 }, { "x": 24.908200564905528, "y": 22.736456354398285 }, { "x": 24.959083741788476, "y": 22.493783704334867 }, { "x": 24.989753388345278, "y": 22.247738006224566 }, { "x": 24.999999999999815, "y": 22.00000000000003 }, { "x": 25.00000000000024, "y": -21.99999999999997 }, { "x": 24.989753388345818, "y": -22.247738006224566 }, { "x": 24.959083741789115, "y": -22.493783704334945 }, { "x": 24.908200564906238, "y": -22.73645635439844 }, { "x": 24.83745144104428, "y": -22.974098257797863 }, { "x": 24.747319657976973, "y": -23.20508608098264 }, { "x": 24.638420906562416, "y": -23.427841944471993 }, { "x": 24.51149907495443, "y": -23.64084420136099 }, { "x": 24.367421167097177, "y": -23.842637831701524 }, { "x": 24.207171380215044, "y": -24.031844381754013 }, { "x": 24.031844381754254, "y": -24.20717138021479 }, { "x": 23.84263783170178, "y": -24.367421167096936 }, { "x": 23.640844201361247, "y": -24.5114990749542 }, { "x": 23.42784194447225, "y": -24.63842090656219 }, { "x": 23.20508608098291, "y": -24.747319657976746 }, { "x": 22.97409825779812, "y": -24.837451441044053 }, { "x": 22.73645635439871, "y": -24.90820056490601 }, { "x": 22.493783704335215, "y": -24.959083741788902 }, { "x": 22.247738006224836, "y": -24.98975338834562 }, { "x": 22.00000000000024, "y": -25.000000000000043 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* C7: 10u */}
    <capacitor name={"C7"} pcbX={11} pcbY={-16.9} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C7 />} schX={-5.35} schY={-2.049999999999999} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C33: 10p */}
    <capacitor name={"C33"} pcbX={10.897624} pcbY={7.60129} pcbRotation={-90} capacitance={"10pF"} footprint={<Footprint_C33 />} schX={-6.7} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C28: 2u2 */}
    <capacitor name={"C28"} pcbX={6.1} pcbY={14.9} pcbRotation={0} capacitance={"2.2uF"} footprint={<Footprint_C28 />} schX={3.6999999999999993} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C2: 10p */}
    <capacitor name={"C2"} pcbX={-8} pcbY={-12.5} pcbRotation={180} capacitance={"10pF"} footprint={<Footprint_C2 />} schX={-0.75} schY={2.0500000000000007} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C41: 10u */}
    <capacitor name={"C41"} pcbX={21.5} pcbY={4.5875} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C41 />} schX={8.799999999999999} schY={0.04999999999999982} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* R23: 22R */}
    <resistor name={"R23"} pcbX={16.7} pcbY={13.2875} pcbRotation={-90} resistance={"22ohm"} footprint={<Footprint_R23 />} schX={0.7000000000000011} schY={-0.34999999999999964} schRotation={0} schSheetName={"Architecture/Storage"}/>

    {/* R25: 5k1 */}
    <resistor name={"R25"} pcbX={21.51} pcbY={-10} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R25 />} schX={2.4000000000000004} schY={-4.549999999999999} schRotation={-90} schSheetName={"Architecture/CPU IO"}/>

    {/* U6: SN74AHC1G08 */}
    <chip name={"U6"} pcbX={14.7} pcbY={14.0875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"SN74AHC1G08DCKR"} displayName={"SN74AHC1G08"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* C10: 10u */}
    <capacitor name={"C10"} pcbX={-18.6} pcbY={7.6} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C10 />} schX={-8.3} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C20: 100n */}
    <capacitor name={"C20"} pcbX={-16.7} pcbY={14.4} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C20 />} schX={6.9} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R17: 51k */}
    <resistor name={"R17"} pcbX={18} pcbY={1.4875} pcbRotation={90} resistance={"51kohm"} footprint={<Footprint_R17 />} schX={1.5999999999999996} schY={1.1499999999999995} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* C44: 100n */}
    <capacitor name={"C44"} pcbX={12.3} pcbY={22} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C44 />} schX={-6} schY={-1.1499999999999995} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* R18: 51k */}
    <resistor name={"R18"} pcbX={16.7} pcbY={1.4875} pcbRotation={90} resistance={"51kohm"} footprint={<Footprint_R18 />} schX={2.3999999999999986} schY={1.1499999999999995} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* R1: 100k */}
    <resistor name={"R1"} pcbX={-8} pcbY={-11.1} pcbRotation={180} resistance={"100kohm"} footprint={<Footprint_R1 />} schX={-5.1499999999999995} schY={2.0500000000000007} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* SW1: SW_Push */}
    <chip name={"SW1"} pcbX={9} pcbY={20.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"TSA010A2026B"} displayName={"SW_Push"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* R11: 100k */}
    <resistor name={"R11"} pcbX={6.6} pcbY={19.6} pcbRotation={90} resistance={"100kohm"} footprint={<Footprint_R11 />} schX={-0.5} schY={-3.799999999999999} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R20: 51k */}
    <resistor name={"R20"} pcbX={18} pcbY={13.2875} pcbRotation={-90} resistance={"51kohm"} footprint={<Footprint_R20 />} schX={4.000000000000002} schY={1.1499999999999995} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* R15: 5k1 */}
    <resistor name={"R15"} pcbX={2.6} pcbY={-12.1} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R15 />} schX={-1.4000000000000004} schY={0.09999999999999964} schRotation={180} schSheetName={"Architecture/USB"}/>

    {/* F1: 1A */}
    <chip name={"F1"} pcbX={-3.3} pcbY={-13.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"JK-nSMD100-16"} displayName={"1A"} footprint={<Footprint_F1 />} noSchematicRepresentation={true}/>

    {/* C40: 2u2 */}
    <capacitor name={"C40"} pcbX={6.6} pcbY={22} pcbRotation={90} capacitance={"2.2uF"} footprint={<Footprint_C40 />} schX={-0.5} schY={-4.799999999999999} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C23: 100n */}
    <capacitor name={"C23"} pcbX={-2.1} pcbY={18.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C23 />} schX={-7.5} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* H2: MountingHole_2.7mm_M2.5_DIN965 */}
    <chip name={"H2"} pcbX={-22} pcbY={-22} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.7mm_M2.5_DIN965"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* C27: 100n */}
    <capacitor name={"C27"} pcbX={-3.5} pcbY={-4} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C27 />} schX={-4.3} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C5: 22u */}
    <capacitor name={"C5"} pcbX={11} pcbY={-9.3} pcbRotation={0} capacitance={"22uF"} footprint={<Footprint_C5 />} schX={0.25} schY={-1.9499999999999993} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C14: 100n */}
    <capacitor name={"C14"} pcbX={-16.7} pcbY={13.2} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C14 />} schX={-5.1} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C34: 100n */}
    <capacitor name={"C34"} pcbX={-11.5} pcbY={-4} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C34 />} schX={-1.3000000000000007} schY={-0.1999999999999993} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C36: 18p */}
    <capacitor name={"C36"} pcbX={8.2} pcbY={13.8} pcbRotation={0} capacitance={"18pF"} footprint={<Footprint_C36 />} schX={-8.1} schY={-2.5} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R22: 5k1 */}
    <resistor name={"R22"} pcbX={12.3} pcbY={19.6} pcbRotation={-90} resistance={"5.1kohm"} footprint={<Footprint_R22 />} schX={-6.8999999999999995} schY={-0.14999999999999947} schRotation={90} schSheetName={"Architecture/Storage"}/>

    {/* C17: 100n */}
    <capacitor name={"C17"} pcbX={6.1} pcbY={11.6} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C17 />} schX={4.499999999999998} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* U5: ZDSD08GLGEAG */}
    <chip name={"U5"} pcbX={17.3} pcbY={7.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"ZDSD04GLGEAG"} displayName={"ZDSD08GLGEAG"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C31: 100n */}
    <capacitor name={"C31"} pcbX={-4.7} pcbY={18.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C31 />} schX={6.1} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* Y1: 24MHz */}
    <chip name={"Y1"} pcbX={8.697624} pcbY={8.60129} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"CM4024M00008001"} displayName={"24MHz"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* C30: 100n */}
    <capacitor name={"C30"} pcbX={-5.8} pcbY={18.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C30 />} schX={5.299999999999999} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C25: 100n */}
    <capacitor name={"C25"} pcbX={-16.7} pcbY={7.6} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C25 />} schX={-5.9} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R19: 51k */}
    <resistor name={"R19"} pcbX={15.4} pcbY={1.4875} pcbRotation={90} resistance={"51kohm"} footprint={<Footprint_R19 />} schX={3.200000000000001} schY={1.1499999999999995} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* C11: 100n */}
    <capacitor name={"C11"} pcbX={-16.7} pcbY={6.4} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C11 />} schX={-7.5} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C6: 22u */}
    <capacitor name={"C6"} pcbX={11} pcbY={-7.1} pcbRotation={0} capacitance={"22uF"} footprint={<Footprint_C6 />} schX={1.25} schY={-1.9499999999999993} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* U3: T113-S3 */}
    <chip name={"U3"} pcbX={-5.3} pcbY={7.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"], "pin82": ["82"], "pin83": ["83"], "pin84": ["84"], "pin85": ["85"], "pin86": ["86"], "pin87": ["87"], "pin88": ["88"], "pin89": ["89"], "pin90": ["90"], "pin91": ["91"], "pin92": ["92"], "pin93": ["93"], "pin94": ["94"], "pin95": ["95"], "pin96": ["96"], "pin97": ["97"], "pin98": ["98"], "pin99": ["99"], "pin100": ["100"], "pin101": ["101"], "pin102": ["102"], "pin103": ["103"], "pin104": ["104"], "pin105": ["105"], "pin106": ["106"], "pin107": ["107"], "pin108": ["108"], "pin109": ["109"], "pin110": ["110"], "pin111": ["111"], "pin112": ["112"], "pin113": ["113"], "pin114": ["114"], "pin115": ["115"], "pin116": ["116"], "pin117": ["117"], "pin118": ["118"], "pin119": ["119"], "pin120": ["120"], "pin121": ["121"], "pin122": ["122"], "pin123": ["123"], "pin124": ["124"], "pin125": ["125"], "pin126": ["126"], "pin127": ["127"], "pin128": ["128"], "pin129": ["129"] }} manufacturerPartNumber={"T113M4020DC0"} displayName={"T113-S3"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* U2: TLV62569PDDCR */}
    <chip name={"U2"} pcbX={11} pcbY={-13.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"TLV62569PDDCR"} displayName={"TLV62569PDDCR"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* C24: 100n */}
    <capacitor name={"C24"} pcbX={-8.3} pcbY={18.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C24 />} schX={-6.7} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* D1: RED */}
    <chip name={"D1"} pcbX={-6.9} pcbY={-21.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"NCD0805R1"} displayName={"RED"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* C37: 18p */}
    <capacitor name={"C37"} pcbX={10.2} pcbY={13.8} pcbRotation={180} capacitance={"18pF"} footprint={<Footprint_C37 />} schX={-6.7} schY={-2.5} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R12: 5k1 */}
    <resistor name={"R12"} pcbX={21.5} pcbY={-6.7} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R12 />} schX={-2.4000000000000012} schY={4.550000000000001} schRotation={-90} schSheetName={"Architecture/CPU IO"}/>

    {/* H1: MountingHole_2.7mm_M2.5_DIN965 */}
    <chip name={"H1"} pcbX={-22} pcbY={22} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.7mm_M2.5_DIN965"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* R5: 51k */}
    <resistor name={"R5"} pcbX={14} pcbY={-15.3} pcbRotation={180} resistance={"51kohm"} footprint={<Footprint_R5 />} schX={-1.549999999999999} schY={-1.6500000000000004} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* J1: USB_C_Receptacle_USB2.0_14P */}
    <chip name={"J1"} pcbX={0} pcbY={-21.2} pcbRotation={0} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} manufacturerPartNumber={"HX TYPE-C 16P L8.35"} displayName={"USB_C_Receptacle_USB2.0_14P"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* C22: 10u */}
    <capacitor name={"C22"} pcbX={-2.5} pcbY={-5.8} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C22 />} schX={-8.3} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* U1: TLV62569PDDCR */}
    <chip name={"U1"} pcbX={-11} pcbY={-13.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"TLV62569PDDCR"} displayName={"TLV62569PDDCR"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* R2: 453k */}
    <resistor name={"R2"} pcbX={-8} pcbY={-13.9} pcbRotation={180} resistance={"453kohm"} footprint={<Footprint_R2 />} schX={-1.549999999999999} schY={2.0500000000000007} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C4: 10p */}
    <capacitor name={"C4"} pcbX={14} pcbY={-13.9} pcbRotation={180} capacitance={"10pF"} footprint={<Footprint_C4 />} schX={-0.75} schY={-1.6500000000000004} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C15: 100n */}
    <capacitor name={"C15"} pcbX={-16.7} pcbY={8.8} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C15 />} schX={-4.3} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C19: 100n */}
    <capacitor name={"C19"} pcbX={-7.5} pcbY={-4} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C19 />} schX={6.1} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R13: 5k1 */}
    <resistor name={"R13"} pcbX={21.5} pcbY={-7.8} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R13 />} schX={-2.0000000000000018} schY={4.550000000000001} schRotation={-90} schSheetName={"Architecture/CPU IO"}/>

    {/* C38: 100n */}
    <capacitor name={"C38"} pcbX={-16.8} pcbY={2.9} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C38 />} schX={8.299999999999999} schY={-2.599999999999998} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C8: 100n */}
    <capacitor name={"C8"} pcbX={14} pcbY={-11.1} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C8 />} schX={5.850000000000001} schY={-2.3499999999999996} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* H3: MountingHole_2.7mm_M2.5_DIN965 */}
    <chip name={"H3"} pcbX={22} pcbY={22} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.7mm_M2.5_DIN965"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* SW2: SW_Push */}
    <chip name={"SW2"} pcbX={14.7} pcbY={20.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"TSA010A2026B"} displayName={"SW_Push"} footprint={<Footprint_SW2 />} noSchematicRepresentation={true}/>

    {/* C35: 100n */}
    <capacitor name={"C35"} pcbX={-16.8} pcbY={4} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C35 />} schX={-0.5} schY={-0.1999999999999993} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R4: 5k1 */}
    <resistor name={"R4"} pcbX={-6.9} pcbY={-18.8} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R4 />} schX={1.25} schY={1.4500000000000002} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* kibuzzard-68FD2BE5: G*** */}
    <chip name={"kibuzzard_68FD2BE5"} pcbX={-22} pcbY={0} pcbRotation={90} pinLabels={{}} displayName={"G***"} footprint={<Footprint_kibuzzard_68FD2BE5 />} noSchematicRepresentation={true}/>

    {/* L1: 2u2 */}
    <inductor name={"L1"} pcbX={-14.5} pcbY={-13.2} pcbRotation={90} inductance={"2.2uH"} footprint={<Footprint_L1 />} schX={-2.1500000000000004} schY={2.3500000000000005} schRotation={0} schSheetName={"Architecture/Power"}/>

    {/* R6: 100k */}
    <resistor name={"R6"} pcbX={14} pcbY={-12.5} pcbRotation={180} resistance={"100kohm"} footprint={<Footprint_R6 />} schX={5.850000000000001} schY={-1.75} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* R16: 5k1 */}
    <resistor name={"R16"} pcbX={3.8} pcbY={-12.1} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R16 />} schX={-1.4000000000000004} schY={-0.10000000000000053} schRotation={0} schSheetName={"Architecture/USB"}/>

    {/* R24: 5k1 */}
    <resistor name={"R24"} pcbX={21.51} pcbY={-11.1} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R24 />} schX={1.6999999999999993} schY={-4.549999999999999} schRotation={-90} schSheetName={"Architecture/CPU IO"}/>

    {/* Y2: 32.768kHz */}
    <chip name={"Y2"} pcbX={9.2} pcbY={12} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"Q13FC13500004"} displayName={"32.768kHz"} footprint={<Footprint_Y2 />} noSchematicRepresentation={true}/>

    {/* C42: 100n */}
    <capacitor name={"C42"} pcbX={19.2} pcbY={1.4875} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C42 />} schX={9.200000000000001} schY={0.04999999999999982} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* C39: 100n */}
    <capacitor name={"C39"} pcbX={-16.8} pcbY={1.7} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C39 />} schX={9.1} schY={-2.599999999999998} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C9: 2u2 */}
    <capacitor name={"C9"} pcbX={6.1} pcbY={13.8} pcbRotation={0} capacitance={"2.2uF"} footprint={<Footprint_C9 />} schX={-9.1} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C3: 10u */}
    <capacitor name={"C3"} pcbX={-11} pcbY={-9.5} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C3 />} schX={0.25} schY={1.7500000000000009} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* R14: 5k1 */}
    <resistor name={"R14"} pcbX={21.51} pcbY={-8.9} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R14 />} schX={0.8999999999999986} schY={-4.549999999999999} schRotation={-90} schSheetName={"Architecture/CPU IO"}/>

    {/* C43: 100n */}
    <capacitor name={"C43"} pcbX={14.4} pcbY={16.5} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C43 />} schX={-9.2} schY={-0.5499999999999998} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* C13: 100n */}
    <capacitor name={"C13"} pcbX={0.9} pcbY={-4} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C13 />} schX={-5.9} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C29: 10u */}
    <capacitor name={"C29"} pcbX={-5.8} pcbY={20.6} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C29 />} schX={4.499999999999998} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C16: 2u2 */}
    <capacitor name={"C16"} pcbX={6.1} pcbY={12.7} pcbRotation={0} capacitance={"2.2uF"} footprint={<Footprint_C16 />} schX={3.6999999999999993} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C18: 100n */}
    <capacitor name={"C18"} pcbX={6.1} pcbY={8.45} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C18 />} schX={5.299999999999999} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R3: 100k */}
    <resistor name={"R3"} pcbX={-8} pcbY={-15.3} pcbRotation={0} resistance={"100kohm"} footprint={<Footprint_R3 />} schX={-1.549999999999999} schY={1.4500000000000002} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C32: 10p */}
    <capacitor name={"C32"} pcbX={10.897624} pcbY={9.50129} pcbRotation={90} capacitance={"10pF"} footprint={<Footprint_C32 />} schX={-8.1} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C21: 100n */}
    <capacitor name={"C21"} pcbX={-7.1} pcbY={18.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C21 />} schX={7.700000000000001} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R10: 240R */}
    <resistor name={"R10"} pcbX={-3.4} pcbY={19.4} pcbRotation={90} resistance={"240ohm"} footprint={<Footprint_R10 />} schX={-5.3} schY={-1.5999999999999996} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* C26: 100n */}
    <capacitor name={"C26"} pcbX={-2.4} pcbY={-4} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C26 />} schX={-5.1} schY={3.4000000000000004} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* R9: TODO */}
    <chip name={"R9"} pcbX={-9.2} pcbY={-4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"TODO"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* R7: 100k */}
    <resistor name={"R7"} pcbX={14} pcbY={-16.7} pcbRotation={0} resistance={"100kohm"} footprint={<Footprint_R7 />} schX={-1.549999999999999} schY={-2.25} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* H4: MountingHole_2.7mm_M2.5_DIN965 */}
    <chip name={"H4"} pcbX={22} pcbY={-22} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.7mm_M2.5_DIN965"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* R8: TODO */}
    <chip name={"R8"} pcbX={-10.4} pcbY={-4} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"TODO"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* U4: USBLC6-2SC6 */}
    <chip name={"U4"} pcbX={0} pcbY={-13.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"USBLC6-2SC6"} displayName={"USBLC6-2SC6"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* R21: 51k */}
    <resistor name={"R21"} pcbX={19.2} pcbY={13.2875} pcbRotation={-90} resistance={"51kohm"} footprint={<Footprint_R21 />} schX={4.800000000000001} schY={1.1499999999999995} schRotation={-90} schSheetName={"Architecture/Storage"}/>

    {/* L2: 2u2 */}
    <inductor name={"L2"} pcbX={7.5} pcbY={-13.2} pcbRotation={90} inductance={"2.2uH"} footprint={<Footprint_L2 />} schX={-2.1500000000000004} schY={-1.3499999999999996} schRotation={0} schSheetName={"Architecture/Power"}/>

    {/* C1: 10u */}
    <capacitor name={"C1"} pcbX={-11.00342} pcbY={-16.900041} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C1 />} schX={-5.85} schY={2.0500000000000007} schRotation={-90} schSheetName={"Architecture/Power"}/>

    {/* C12: 100n */}
    <capacitor name={"C12"} pcbX={0.5} pcbY={18.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C12 />} schX={-6.7} schY={5.2} schRotation={-90} schSheetName={"Architecture/CPU Core"}/>

    {/* KiCad net: VBUS */}
    <KiCadNet name={"VBUS"} connectsTo={[".C7 > .pin1", ".R1 > .pin1", ".F1 > .pin2", ".U2 > .pin4", ".U1 > .pin4", ".R6 > .pin1", ".C1 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C7 > .pin2", ".C33 > .pin2", ".C28 > .pin2", ".C41 > .pin2", ".R25 > .pin2", ".U6 > .pin3", ".C10 > .pin2", ".C20 > .pin2", ".C44 > .pin2", ".SW1 > .pin1", ".R15 > .pin2", ".C40 > .pin2", ".C23 > .pin2", ".C27 > .pin2", ".C5 > .pin2", ".C14 > .pin2", ".C34 > .pin2", ".C36 > .pin2", ".C17 > .pin2", ".U5 > .pin4", ".C31 > .pin2", ".Y1 > .pin2", ".Y1 > .pin4", ".C30 > .pin2", ".C25 > .pin2", ".C11 > .pin2", ".C6 > .pin2", ".U3 > .pin91", ".U3 > .pin93", ".U3 > .pin94", ".U3 > .pin129", ".U2 > .pin2", ".C24 > .pin2", ".C37 > .pin2", ".J1 > .pin1", ".J1 > .pin8", ".J1 > .pin9", ".J1 > .pin16", ".J1 > .pin17", ".C22 > .pin2", ".U1 > .pin2", ".C15 > .pin2", ".C19 > .pin2", ".C38 > .pin2", ".C8 > .pin2", ".SW2 > .pin1", ".C35 > .pin2", ".R4 > .pin2", ".R16 > .pin2", ".R24 > .pin2", ".C42 > .pin2", ".C39 > .pin2", ".C9 > .pin2", ".C3 > .pin2", ".R14 > .pin2", ".C43 > .pin2", ".C13 > .pin2", ".C29 > .pin2", ".C16 > .pin2", ".C18 > .pin2", ".R3 > .pin2", ".C32 > .pin2", ".C21 > .pin2", ".R10 > .pin2", ".C26 > .pin2", ".R9 > .pin2", ".R7 > .pin2", ".U4 > .pin2", ".C1 > .pin2", ".C12 > .pin2"]}/>
    {/* KiCad net: /Architecture/CPU Core/DXOUT */}
    <KiCadNet name={"_Architecture_CPU_Core_DXOUT"} connectsTo={[".C33 > .pin1", ".Y1 > .pin3", ".U3 > .pin22"]}/>
    {/* KiCad net: +1V5 */}
    <KiCadNet name={"_1V5"} connectsTo={[".C28 > .pin1", ".C31 > .pin1", ".C30 > .pin1", ".U3 > .pin30", ".U3 > .pin48", ".U3 > .pin49", ".C29 > .pin1"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".C2 > .pin1", ".C41 > .pin1", ".U6 > .pin5", ".C10 > .pin1", ".R17 > .pin1", ".R18 > .pin1", ".R11 > .pin1", ".R20 > .pin1", ".C14 > .pin1", ".R22 > .pin2", ".U5 > .pin8", ".R19 > .pin1", ".C11 > .pin1", ".U3 > .pin29", ".U3 > .pin34", ".U3 > .pin66", ".U3 > .pin77", ".U3 > .pin83", ".U3 > .pin128", ".D1 > .pin2", ".R12 > .pin1", ".R2 > .pin1", ".C15 > .pin1", ".R13 > .pin1", ".L1 > .pin2", ".C42 > .pin1", ".C9 > .pin1", ".C3 > .pin1", ".C43 > .pin1", ".C13 > .pin1", ".R21 > .pin1", ".C12 > .pin1"]}/>
    {/* KiCad net: Net-(U1-FB) */}
    <KiCadNet name={"Net__U1_FB_"} connectsTo={[".C2 > .pin2", ".U1 > .pin6", ".R2 > .pin2", ".R3 > .pin1"]}/>
    {/* KiCad net: Net-(R23-Pad1) */}
    <KiCadNet name={"Net__R23_Pad1_"} connectsTo={[".R23 > .pin1", ".U6 > .pin4"]}/>
    {/* KiCad net: Net-(U5-CLK) */}
    <KiCadNet name={"Net__U5_CLK_"} connectsTo={[".R23 > .pin2", ".U5 > .pin3"]}/>
    {/* KiCad net: /Architecture/CPU IO/BOARD_ID_3 */}
    <KiCadNet name={"_Architecture_CPU_IO_BOARD_ID_3"} connectsTo={[".R25 > .pin1", ".U3 > .pin52"]}/>
    {/* KiCad net: /Architecture/CPU IO/SDC0_CLK */}
    <KiCadNet name={"_Architecture_CPU_IO_SDC0_CLK"} connectsTo={[".U6 > .pin1", ".U3 > .pin9"]}/>
    {/* KiCad net: Net-(C44-Pad1) */}
    <KiCadNet name={"Net__C44_Pad1_"} connectsTo={[".U6 > .pin2", ".C44 > .pin1", ".R22 > .pin1", ".SW2 > .pin2"]}/>
    {/* KiCad net: +1V8 */}
    <KiCadNet name={"_1V8"} connectsTo={[".C20 > .pin1", ".C34 > .pin1", ".C17 > .pin1", ".U3 > .pin20", ".U3 > .pin26", ".U3 > .pin28", ".U3 > .pin50", ".U3 > .pin65", ".U3 > .pin89", ".U3 > .pin97", ".U3 > .pin107", ".C19 > .pin1", ".C35 > .pin1", ".C16 > .pin1", ".C18 > .pin1", ".C21 > .pin1"]}/>
    {/* KiCad net: /Architecture/CPU IO/SDC0_D1 */}
    <KiCadNet name={"_Architecture_CPU_IO_SDC0_D1"} connectsTo={[".R17 > .pin2", ".U5 > .pin7", ".U3 > .pin7"]}/>
    {/* KiCad net: /Architecture/CPU IO/SDC0_D0 */}
    <KiCadNet name={"_Architecture_CPU_IO_SDC0_D0"} connectsTo={[".R18 > .pin2", ".U5 > .pin6", ".U3 > .pin8"]}/>
    {/* KiCad net: Net-(U1-EN) */}
    <KiCadNet name={"Net__U1_EN_"} connectsTo={[".R1 > .pin2", ".U1 > .pin1"]}/>
    {/* KiCad net: /Architecture/CPU Core/~{RESET} */}
    <KiCadNet name={"_Architecture_CPU_Core___RESET_"} connectsTo={[".SW1 > .pin2", ".R11 > .pin2", ".C40 > .pin1", ".U3 > .pin27"]}/>
    {/* KiCad net: /Architecture/CPU IO/SDC0_D3 */}
    <KiCadNet name={"_Architecture_CPU_IO_SDC0_D3"} connectsTo={[".R20 > .pin2", ".U5 > .pin2", ".U3 > .pin11"]}/>
    {/* KiCad net: /Architecture/USB/USB0_CC1 */}
    <KiCadNet name={"_Architecture_USB_USB0_CC1"} connectsTo={[".R15 > .pin1", ".J1 > .pin3"]}/>
    {/* KiCad net: Net-(U4-VBUS) */}
    <KiCadNet name={"Net__U4_VBUS_"} connectsTo={[".F1 > .pin1", ".J1 > .pin2", ".J1 > .pin7", ".J1 > .pin10", ".J1 > .pin15", ".U4 > .pin5"]}/>
    {/* KiCad net: +0V9 */}
    <KiCadNet name={"_0V9"} connectsTo={[".C23 > .pin1", ".C27 > .pin1", ".C5 > .pin1", ".C25 > .pin1", ".C6 > .pin1", ".U3 > .pin46", ".U3 > .pin51", ".U3 > .pin81", ".U3 > .pin116", ".U3 > .pin117", ".C24 > .pin1", ".R5 > .pin1", ".C22 > .pin1", ".C4 > .pin1", ".C26 > .pin1", ".L2 > .pin2"]}/>
    {/* KiCad net: /Architecture/CPU Core/LXIN */}
    <KiCadNet name={"_Architecture_CPU_Core_LXIN"} connectsTo={[".C36 > .pin1", ".U3 > .pin25", ".Y2 > .pin1"]}/>
    {/* KiCad net: /Architecture/CPU IO/SDC0_D2 */}
    <KiCadNet name={"_Architecture_CPU_IO_SDC0_D2"} connectsTo={[".U5 > .pin1", ".U3 > .pin12", ".R21 > .pin2"]}/>
    {/* KiCad net: /Architecture/CPU IO/SDC0_CMD */}
    <KiCadNet name={"_Architecture_CPU_IO_SDC0_CMD"} connectsTo={[".U5 > .pin5", ".R19 > .pin2", ".U3 > .pin10"]}/>
    {/* KiCad net: /Architecture/CPU Core/DXIN */}
    <KiCadNet name={"_Architecture_CPU_Core_DXIN"} connectsTo={[".Y1 > .pin1", ".U3 > .pin23", ".C32 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3E-PG6-Pad1) */}
    <KiCadNet name={"unconnected__U3E_PG6_Pad1_"} connectsTo={[".U3 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3E-PG7-Pad2) */}
    <KiCadNet name={"unconnected__U3E_PG7_Pad2_"} connectsTo={[".U3 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3E-PG8-Pad3) */}
    <KiCadNet name={"unconnected__U3E_PG8_Pad3_"} connectsTo={[".U3 > .pin3"]}/>
    {/* KiCad net: unconnected-(U3E-PG9-Pad4) */}
    <KiCadNet name={"unconnected__U3E_PG9_Pad4_"} connectsTo={[".U3 > .pin4"]}/>
    {/* KiCad net: unconnected-(U3E-PG10-Pad5) */}
    <KiCadNet name={"unconnected__U3E_PG10_Pad5_"} connectsTo={[".U3 > .pin5"]}/>
    {/* KiCad net: unconnected-(U3E-PG11-Pad6) */}
    <KiCadNet name={"unconnected__U3E_PG11_Pad6_"} connectsTo={[".U3 > .pin6"]}/>
    {/* KiCad net: /Architecture/CPU IO/BOARD_ID_1 */}
    <KiCadNet name={"_Architecture_CPU_IO_BOARD_ID_1"} connectsTo={[".U3 > .pin13", ".R14 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3E-PC7-Pad14) */}
    <KiCadNet name={"unconnected__U3E_PC7_Pad14_"} connectsTo={[".U3 > .pin14"]}/>
    {/* KiCad net: unconnected-(U3E-PC6-Pad15) */}
    <KiCadNet name={"unconnected__U3E_PC6_Pad15_"} connectsTo={[".U3 > .pin15"]}/>
    {/* KiCad net: /Architecture/CPU IO/BOOT_SEL1 */}
    <KiCadNet name={"_Architecture_CPU_IO_BOOT_SEL1"} connectsTo={[".U3 > .pin16", ".R12 > .pin2"]}/>
    {/* KiCad net: /Architecture/CPU IO/BOOT_SEL0 */}
    <KiCadNet name={"_Architecture_CPU_IO_BOOT_SEL0"} connectsTo={[".U3 > .pin17", ".R13 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3E-PC3-Pad18) */}
    <KiCadNet name={"unconnected__U3E_PC3_Pad18_"} connectsTo={[".U3 > .pin18"]}/>
    {/* KiCad net: unconnected-(U3E-PC2-Pad19) */}
    <KiCadNet name={"unconnected__U3E_PC2_Pad19_"} connectsTo={[".U3 > .pin19"]}/>
    {/* KiCad net: unconnected-(U3B-REFCLK_OUT-Pad21) */}
    <KiCadNet name={"unconnected__U3B_REFCLK_OUT_Pad21_"} connectsTo={[".U3 > .pin21"]}/>
    {/* KiCad net: /Architecture/CPU Core/LXOUT */}
    <KiCadNet name={"_Architecture_CPU_Core_LXOUT"} connectsTo={[".U3 > .pin24", ".C37 > .pin1", ".Y2 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3E-PE13-Pad31) */}
    <KiCadNet name={"unconnected__U3E_PE13_Pad31_"} connectsTo={[".U3 > .pin31"]}/>
    {/* KiCad net: unconnected-(U3E-PE12-Pad32) */}
    <KiCadNet name={"unconnected__U3E_PE12_Pad32_"} connectsTo={[".U3 > .pin32"]}/>
    {/* KiCad net: unconnected-(U3E-PE3-Pad33) */}
    <KiCadNet name={"unconnected__U3E_PE3_Pad33_"} connectsTo={[".U3 > .pin33"]}/>
    {/* KiCad net: unconnected-(U3E-PE2-Pad35) */}
    <KiCadNet name={"unconnected__U3E_PE2_Pad35_"} connectsTo={[".U3 > .pin35"]}/>
    {/* KiCad net: unconnected-(U3E-PE11-Pad36) */}
    <KiCadNet name={"unconnected__U3E_PE11_Pad36_"} connectsTo={[".U3 > .pin36"]}/>
    {/* KiCad net: unconnected-(U3E-PE10-Pad37) */}
    <KiCadNet name={"unconnected__U3E_PE10_Pad37_"} connectsTo={[".U3 > .pin37"]}/>
    {/* KiCad net: unconnected-(U3E-PE9-Pad38) */}
    <KiCadNet name={"unconnected__U3E_PE9_Pad38_"} connectsTo={[".U3 > .pin38"]}/>
    {/* KiCad net: unconnected-(U3E-PE8-Pad39) */}
    <KiCadNet name={"unconnected__U3E_PE8_Pad39_"} connectsTo={[".U3 > .pin39"]}/>
    {/* KiCad net: unconnected-(U3E-PE7-Pad40) */}
    <KiCadNet name={"unconnected__U3E_PE7_Pad40_"} connectsTo={[".U3 > .pin40"]}/>
    {/* KiCad net: unconnected-(U3E-PE6-Pad41) */}
    <KiCadNet name={"unconnected__U3E_PE6_Pad41_"} connectsTo={[".U3 > .pin41"]}/>
    {/* KiCad net: unconnected-(U3E-PE5-Pad42) */}
    <KiCadNet name={"unconnected__U3E_PE5_Pad42_"} connectsTo={[".U3 > .pin42"]}/>
    {/* KiCad net: unconnected-(U3E-PE4-Pad43) */}
    <KiCadNet name={"unconnected__U3E_PE4_Pad43_"} connectsTo={[".U3 > .pin43"]}/>
    {/* KiCad net: unconnected-(U3E-PE0-Pad44) */}
    <KiCadNet name={"unconnected__U3E_PE0_Pad44_"} connectsTo={[".U3 > .pin44"]}/>
    {/* KiCad net: unconnected-(U3E-PE1-Pad45) */}
    <KiCadNet name={"unconnected__U3E_PE1_Pad45_"} connectsTo={[".U3 > .pin45"]}/>
    {/* KiCad net: Net-(U3B-DZQ) */}
    <KiCadNet name={"Net__U3B_DZQ_"} connectsTo={[".U3 > .pin47", ".R10 > .pin1"]}/>
    {/* KiCad net: /Architecture/CPU IO/BOARD_ID_2 */}
    <KiCadNet name={"_Architecture_CPU_IO_BOARD_ID_2"} connectsTo={[".U3 > .pin53", ".R24 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3E-PD20-Pad54) */}
    <KiCadNet name={"unconnected__U3E_PD20_Pad54_"} connectsTo={[".U3 > .pin54"]}/>
    {/* KiCad net: unconnected-(U3E-PD0-Pad55) */}
    <KiCadNet name={"unconnected__U3E_PD0_Pad55_"} connectsTo={[".U3 > .pin55"]}/>
    {/* KiCad net: unconnected-(U3E-PD1-Pad56) */}
    <KiCadNet name={"unconnected__U3E_PD1_Pad56_"} connectsTo={[".U3 > .pin56"]}/>
    {/* KiCad net: unconnected-(U3E-PD2-Pad57) */}
    <KiCadNet name={"unconnected__U3E_PD2_Pad57_"} connectsTo={[".U3 > .pin57"]}/>
    {/* KiCad net: unconnected-(U3E-PD3-Pad58) */}
    <KiCadNet name={"unconnected__U3E_PD3_Pad58_"} connectsTo={[".U3 > .pin58"]}/>
    {/* KiCad net: unconnected-(U3E-PD4-Pad59) */}
    <KiCadNet name={"unconnected__U3E_PD4_Pad59_"} connectsTo={[".U3 > .pin59"]}/>
    {/* KiCad net: unconnected-(U3E-PD5-Pad60) */}
    <KiCadNet name={"unconnected__U3E_PD5_Pad60_"} connectsTo={[".U3 > .pin60"]}/>
    {/* KiCad net: unconnected-(U3E-PD6-Pad61) */}
    <KiCadNet name={"unconnected__U3E_PD6_Pad61_"} connectsTo={[".U3 > .pin61"]}/>
    {/* KiCad net: /Architecture/CPU IO/DEBUG_TX */}
    <KiCadNet name={"_Architecture_CPU_IO_DEBUG_TX"} connectsTo={[".U3 > .pin62"]}/>
    {/* KiCad net: /Architecture/CPU IO/DEBUG_RX */}
    <KiCadNet name={"_Architecture_CPU_IO_DEBUG_RX"} connectsTo={[".U3 > .pin63"]}/>
    {/* KiCad net: unconnected-(U3E-PD9-Pad64) */}
    <KiCadNet name={"unconnected__U3E_PD9_Pad64_"} connectsTo={[".U3 > .pin64"]}/>
    {/* KiCad net: unconnected-(U3E-PD10-Pad67) */}
    <KiCadNet name={"unconnected__U3E_PD10_Pad67_"} connectsTo={[".U3 > .pin67"]}/>
    {/* KiCad net: unconnected-(U3E-PD11-Pad68) */}
    <KiCadNet name={"unconnected__U3E_PD11_Pad68_"} connectsTo={[".U3 > .pin68"]}/>
    {/* KiCad net: unconnected-(U3E-PD13-Pad69) */}
    <KiCadNet name={"unconnected__U3E_PD13_Pad69_"} connectsTo={[".U3 > .pin69"]}/>
    {/* KiCad net: unconnected-(U3E-PD12-Pad70) */}
    <KiCadNet name={"unconnected__U3E_PD12_Pad70_"} connectsTo={[".U3 > .pin70"]}/>
    {/* KiCad net: unconnected-(U3E-PD14-Pad71) */}
    <KiCadNet name={"unconnected__U3E_PD14_Pad71_"} connectsTo={[".U3 > .pin71"]}/>
    {/* KiCad net: unconnected-(U3E-PD15-Pad72) */}
    <KiCadNet name={"unconnected__U3E_PD15_Pad72_"} connectsTo={[".U3 > .pin72"]}/>
    {/* KiCad net: unconnected-(U3E-PD16-Pad73) */}
    <KiCadNet name={"unconnected__U3E_PD16_Pad73_"} connectsTo={[".U3 > .pin73"]}/>
    {/* KiCad net: unconnected-(U3E-PD17-Pad74) */}
    <KiCadNet name={"unconnected__U3E_PD17_Pad74_"} connectsTo={[".U3 > .pin74"]}/>
    {/* KiCad net: unconnected-(U3E-PD18-Pad75) */}
    <KiCadNet name={"unconnected__U3E_PD18_Pad75_"} connectsTo={[".U3 > .pin75"]}/>
    {/* KiCad net: unconnected-(U3E-PD19-Pad76) */}
    <KiCadNet name={"unconnected__U3E_PD19_Pad76_"} connectsTo={[".U3 > .pin76"]}/>
    {/* KiCad net: unconnected-(U3D-TVOUT0-Pad78) */}
    <KiCadNet name={"unconnected__U3D_TVOUT0_Pad78_"} connectsTo={[".U3 > .pin78"]}/>
    {/* KiCad net: unconnected-(U3E-PB7-Pad79) */}
    <KiCadNet name={"unconnected__U3E_PB7_Pad79_"} connectsTo={[".U3 > .pin79"]}/>
    {/* KiCad net: unconnected-(U3E-PB6-Pad80) */}
    <KiCadNet name={"unconnected__U3E_PB6_Pad80_"} connectsTo={[".U3 > .pin80"]}/>
    {/* KiCad net: unconnected-(U3E-PB5-Pad82) */}
    <KiCadNet name={"unconnected__U3E_PB5_Pad82_"} connectsTo={[".U3 > .pin82"]}/>
    {/* KiCad net: unconnected-(U3E-PB4-Pad84) */}
    <KiCadNet name={"unconnected__U3E_PB4_Pad84_"} connectsTo={[".U3 > .pin84"]}/>
    {/* KiCad net: unconnected-(U3E-PB3-Pad85) */}
    <KiCadNet name={"unconnected__U3E_PB3_Pad85_"} connectsTo={[".U3 > .pin85"]}/>
    {/* KiCad net: unconnected-(U3E-PB2-Pad86) */}
    <KiCadNet name={"unconnected__U3E_PB2_Pad86_"} connectsTo={[".U3 > .pin86"]}/>
    {/* KiCad net: unconnected-(U3F-MICIN3P-Pad87) */}
    <KiCadNet name={"unconnected__U3F_MICIN3P_Pad87_"} connectsTo={[".U3 > .pin87"]}/>
    {/* KiCad net: unconnected-(U3F-MICIN3N-Pad88) */}
    <KiCadNet name={"unconnected__U3F_MICIN3N_Pad88_"} connectsTo={[".U3 > .pin88"]}/>
    {/* KiCad net: Net-(U3F-VRA2) */}
    <KiCadNet name={"Net__U3F_VRA2_"} connectsTo={[".U3 > .pin90", ".C38 > .pin1"]}/>
    {/* KiCad net: Net-(U3F-VRA1) */}
    <KiCadNet name={"Net__U3F_VRA1_"} connectsTo={[".U3 > .pin92", ".C39 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3F-LINEINR-Pad95) */}
    <KiCadNet name={"unconnected__U3F_LINEINR_Pad95_"} connectsTo={[".U3 > .pin95"]}/>
    {/* KiCad net: unconnected-(U3F-LINEINL-Pad96) */}
    <KiCadNet name={"unconnected__U3F_LINEINL_Pad96_"} connectsTo={[".U3 > .pin96"]}/>
    {/* KiCad net: unconnected-(U3F-HPOUTR-Pad98) */}
    <KiCadNet name={"unconnected__U3F_HPOUTR_Pad98_"} connectsTo={[".U3 > .pin98"]}/>
    {/* KiCad net: unconnected-(U3F-HPOUTL-Pad99) */}
    <KiCadNet name={"unconnected__U3F_HPOUTL_Pad99_"} connectsTo={[".U3 > .pin99"]}/>
    {/* KiCad net: unconnected-(U3F-HPOUTFB-Pad100) */}
    <KiCadNet name={"unconnected__U3F_HPOUTFB_Pad100_"} connectsTo={[".U3 > .pin100"]}/>
    {/* KiCad net: Net-(U3F-GPADC0) */}
    <KiCadNet name={"Net__U3F_GPADC0_"} connectsTo={[".U3 > .pin101", ".R9 > .pin1", ".R8 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3F-TP_X1-Pad102) */}
    <KiCadNet name={"unconnected__U3F_TP_X1_Pad102_"} connectsTo={[".U3 > .pin102"]}/>
    {/* KiCad net: unconnected-(U3F-TP_X2-Pad103) */}
    <KiCadNet name={"unconnected__U3F_TP_X2_Pad103_"} connectsTo={[".U3 > .pin103"]}/>
    {/* KiCad net: unconnected-(U3F-TP_Y1-Pad104) */}
    <KiCadNet name={"unconnected__U3F_TP_Y1_Pad104_"} connectsTo={[".U3 > .pin104"]}/>
    {/* KiCad net: unconnected-(U3F-TP_Y2-Pad105) */}
    <KiCadNet name={"unconnected__U3F_TP_Y2_Pad105_"} connectsTo={[".U3 > .pin105"]}/>
    {/* KiCad net: unconnected-(U3F-NC0-Pad106) */}
    <KiCadNet name={"unconnected__U3F_NC0_Pad106_"} connectsTo={[".U3 > .pin106"]}/>
    {/* KiCad net: unconnected-(U3D-TVIN0-Pad108) */}
    <KiCadNet name={"unconnected__U3D_TVIN0_Pad108_"} connectsTo={[".U3 > .pin108"]}/>
    {/* KiCad net: unconnected-(U3D-TVIN1-Pad109) */}
    <KiCadNet name={"unconnected__U3D_TVIN1_Pad109_"} connectsTo={[".U3 > .pin109"]}/>
    {/* KiCad net: unconnected-(U3D-TVIN_VRP-Pad110) */}
    <KiCadNet name={"unconnected__U3D_TVIN_VRP_Pad110_"} connectsTo={[".U3 > .pin110"]}/>
    {/* KiCad net: unconnected-(U3D-TVIN_VRN-Pad111) */}
    <KiCadNet name={"unconnected__U3D_TVIN_VRN_Pad111_"} connectsTo={[".U3 > .pin111"]}/>
    {/* KiCad net: unconnected-(U3C-USB1_DP-Pad112) */}
    <KiCadNet name={"unconnected__U3C_USB1_DP_Pad112_"} connectsTo={[".U3 > .pin112"]}/>
    {/* KiCad net: unconnected-(U3C-USB1_DM-Pad113) */}
    <KiCadNet name={"unconnected__U3C_USB1_DM_Pad113_"} connectsTo={[".U3 > .pin113"]}/>
    {/* KiCad net: /Architecture/USB/USB0_DN */}
    <KiCadNet name={"_Architecture_USB_USB0_DN"} connectsTo={[".U3 > .pin114", ".U4 > .pin6"]}/>
    {/* KiCad net: /Architecture/USB/USB0_DP */}
    <KiCadNet name={"_Architecture_USB_USB0_DP"} connectsTo={[".U3 > .pin115", ".U4 > .pin4"]}/>
    {/* KiCad net: unconnected-(U3E-PG1-Pad118) */}
    <KiCadNet name={"unconnected__U3E_PG1_Pad118_"} connectsTo={[".U3 > .pin118"]}/>
    {/* KiCad net: unconnected-(U3E-PG2-Pad119) */}
    <KiCadNet name={"unconnected__U3E_PG2_Pad119_"} connectsTo={[".U3 > .pin119"]}/>
    {/* KiCad net: unconnected-(U3E-PG0-Pad120) */}
    <KiCadNet name={"unconnected__U3E_PG0_Pad120_"} connectsTo={[".U3 > .pin120"]}/>
    {/* KiCad net: unconnected-(U3E-PG3-Pad121) */}
    <KiCadNet name={"unconnected__U3E_PG3_Pad121_"} connectsTo={[".U3 > .pin121"]}/>
    {/* KiCad net: unconnected-(U3E-PG5-Pad122) */}
    <KiCadNet name={"unconnected__U3E_PG5_Pad122_"} connectsTo={[".U3 > .pin122"]}/>
    {/* KiCad net: unconnected-(U3E-PG4-Pad123) */}
    <KiCadNet name={"unconnected__U3E_PG4_Pad123_"} connectsTo={[".U3 > .pin123"]}/>
    {/* KiCad net: unconnected-(U3E-PG12-Pad124) */}
    <KiCadNet name={"unconnected__U3E_PG12_Pad124_"} connectsTo={[".U3 > .pin124"]}/>
    {/* KiCad net: unconnected-(U3E-PG13-Pad125) */}
    <KiCadNet name={"unconnected__U3E_PG13_Pad125_"} connectsTo={[".U3 > .pin125"]}/>
    {/* KiCad net: unconnected-(U3E-PG14-Pad126) */}
    <KiCadNet name={"unconnected__U3E_PG14_Pad126_"} connectsTo={[".U3 > .pin126"]}/>
    {/* KiCad net: unconnected-(U3E-PG15-Pad127) */}
    <KiCadNet name={"unconnected__U3E_PG15_Pad127_"} connectsTo={[".U3 > .pin127"]}/>
    {/* KiCad net: /Architecture/Power/3V3_PG */}
    <KiCadNet name={"_Architecture_Power_3V3_PG"} connectsTo={[".U2 > .pin1", ".U1 > .pin5", ".C8 > .pin1", ".R6 > .pin2"]}/>
    {/* KiCad net: Net-(U2-SW) */}
    <KiCadNet name={"Net__U2_SW_"} connectsTo={[".U2 > .pin3", ".L2 > .pin1"]}/>
    {/* KiCad net: unconnected-(U2-PG-Pad5) */}
    <KiCadNet name={"unconnected__U2_PG_Pad5_"} connectsTo={[".U2 > .pin5"]}/>
    {/* KiCad net: Net-(U2-FB) */}
    <KiCadNet name={"Net__U2_FB_"} connectsTo={[".U2 > .pin6", ".R5 > .pin2", ".C4 > .pin2", ".R7 > .pin1"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".D1 > .pin1", ".R4 > .pin1"]}/>
    {/* KiCad net: Net-(J1-D+-PadA6) */}
    <KiCadNet name={"Net__J1_D__PadA6_"} connectsTo={[".J1 > .pin4", ".J1 > .pin12", ".U4 > .pin3"]}/>
    {/* KiCad net: Net-(J1-D--PadA7) */}
    <KiCadNet name={"Net__J1_D__PadA7_"} connectsTo={[".J1 > .pin5", ".J1 > .pin13", ".U4 > .pin1"]}/>
    {/* KiCad net: /Architecture/USB/USB0_CC2 */}
    <KiCadNet name={"_Architecture_USB_USB0_CC2"} connectsTo={[".J1 > .pin11", ".R16 > .pin1"]}/>
    {/* KiCad net: Net-(U1-SW) */}
    <KiCadNet name={"Net__U1_SW_"} connectsTo={[".U1 > .pin3", ".L1 > .pin1"]}/>
    {/* KiCad net: /Architecture/CPU Core/V_MEASURE */}
    <KiCadNet name={"_Architecture_CPU_Core_V_MEASURE"} connectsTo={[".R8 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
