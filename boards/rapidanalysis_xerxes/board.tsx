import { KiCadSchematic, KiCadNet } from './schematic'
// Xerxes
// Source: https://github.com/rapidanalysis/xerxes
// Commit: 43abf5730d092358bc6d10e9faa7233818b5412e; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_R1, Footprint_U6, Footprint_U8, Footprint_J4, Footprint_Sym2, Footprint_R15, Footprint_C3, Footprint_J2, Footprint_C2, Footprint_J7, Footprint_R7, Footprint_C4, Footprint_Conn2, Footprint_Module1, Footprint_J5, Footprint_D2, Footprint_U5, Footprint_Conn1, Footprint_J8, Footprint_R14, Footprint_J6, Footprint_R11, Footprint_D3, Footprint_R12, Footprint_R6, Footprint_J9, Footprint_U4, Footprint_U7, Footprint_Sym1, Footprint_C11, Footprint_C8, Footprint_J10, Footprint_R8, Footprint_R4, Footprint_D1, Footprint_D6, Footprint_U1, Footprint_C10, Footprint_R10, Footprint_C9, Footprint_R9, Footprint_D4, Footprint_C7, Footprint_D5, Footprint_C12, Footprint_L1, Footprint_J1, Footprint_U2, Footprint_C13, Footprint_C6, Footprint_U3, Footprint_R2, Footprint_C5, Footprint_R13, Footprint_R5, Footprint_R3, Footprint_J3, Footprint_C1 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={120} height={40.00000000000111} thickness={1.6} layers={6} outline={[{ "x": -60, "y": -16.999999999999446 }, { "x": -60, "y": 17.000000000000554 }, { "x": -59.98975338834551, "y": 17.24773800622512 }, { "x": -59.959083741788746, "y": 17.493783704335456 }, { "x": -59.90820056490581, "y": 17.736456354398918 }, { "x": -59.83745144104382, "y": 17.974098257798296 }, { "x": -59.74731965797648, "y": 18.20508608098303 }, { "x": -59.63842090656191, "y": 18.42784194447234 }, { "x": -59.51149907495391, "y": 18.640844201361304 }, { "x": -59.36742116709666, "y": 18.8426378317018 }, { "x": -59.20717138021452, "y": 19.031844381754247 }, { "x": -59.03184438175375, "y": 19.207171380215 }, { "x": -58.84263783170129, "y": 19.367421167097127 }, { "x": -58.640844201360785, "y": 19.511499074954372 }, { "x": -58.427841944471815, "y": 19.638420906562352 }, { "x": -58.2050860809825, "y": 19.74731965797691 }, { "x": -57.97409825779775, "y": 19.83745144104423 }, { "x": -57.73645635439836, "y": 19.90820056490621 }, { "x": -57.4937837043349, "y": 19.959083741789122 }, { "x": -57.247738006224566, "y": 19.989753388345868 }, { "x": -57, "y": 20.00000000000034 }, { "x": 57, "y": 20.000000000000554 }, { "x": 57.24773800622441, "y": 19.98975338834596 }, { "x": 57.49378370433462, "y": 19.959083741789094 }, { "x": 57.736456354397916, "y": 19.908200564906075 }, { "x": 57.974098257797124, "y": 19.837451441043996 }, { "x": 58.20508608098169, "y": 19.74731965797659 }, { "x": 58.4278419444708, "y": 19.63842090656196 }, { "x": 58.640844201359585, "y": 19.511499074953917 }, { "x": 58.842637831699875, "y": 19.36742116709663 }, { "x": 59.03184438175214, "y": 19.20717138021447 }, { "x": 59.207171380212685, "y": 19.031844381753693 }, { "x": 59.36742116709462, "y": 18.84263783170124 }, { "x": 59.511499074951644, "y": 18.640844201360757 }, { "x": 59.63842090655942, "y": 18.427841944471822 }, { "x": 59.747319657973776, "y": 18.205086080982554 }, { "x": 59.83745144104088, "y": 17.974098257797877 }, { "x": 59.90820056490264, "y": 17.736456354398577 }, { "x": 59.95908374178538, "y": 17.493783704335215 }, { "x": 59.98975338834191, "y": 17.247738006224992 }, { "x": 59.99999999999622, "y": 17.000000000000554 }, { "x": 60, "y": -16.999999999999446 }, { "x": 59.98975338834546, "y": -17.247738006224026 }, { "x": 59.959083741788646, "y": -17.49378370433439 }, { "x": 59.908200564905684, "y": -17.73645635439786 }, { "x": 59.83745144104367, "y": -17.974098257797266 }, { "x": 59.747319657976306, "y": -18.205086080982014 }, { "x": 59.63842090656175, "y": -18.427841944471353 }, { "x": 59.51149907495375, "y": -18.640844201360338 }, { "x": 59.367421167096495, "y": -18.84263783170087 }, { "x": 59.20717138021439, "y": -19.031844381753373 }, { "x": 59.03184438175364, "y": -19.207171380214177 }, { "x": 58.84263783170121, "y": -19.367421167096367 }, { "x": 58.64084420136072, "y": -19.51149907495369 }, { "x": 58.427841944471766, "y": -19.638420906561763 }, { "x": 58.20508608098248, "y": -19.74731965797642 }, { "x": 57.97409825779775, "y": -19.837451441043854 }, { "x": 57.73645635439837, "y": -19.908200564905968 }, { "x": 57.49378370433493, "y": -19.959083741789016 }, { "x": 57.24773800622458, "y": -19.989753388345918 }, { "x": 57, "y": -20.000000000000554 }, { "x": -57, "y": -19.999999999999446 }, { "x": -57.247738006224566, "y": -19.98975338834495 }, { "x": -57.4937837043349, "y": -19.95908374178819 }, { "x": -57.73645635439836, "y": -19.908200564905258 }, { "x": -57.97409825779774, "y": -19.837451441043257 }, { "x": -58.20508608098248, "y": -19.747319657975922 }, { "x": -58.427841944471794, "y": -19.63842090656135 }, { "x": -58.64084420136076, "y": -19.51149907495335 }, { "x": -58.84263783170125, "y": -19.367421167096097 }, { "x": -59.0318443817537, "y": -19.207171380213964 }, { "x": -59.20717138021446, "y": -19.03184438175319 }, { "x": -59.36742116709659, "y": -18.842637831700728 }, { "x": -59.51149907495383, "y": -18.640844201360224 }, { "x": -59.63842090656183, "y": -18.427841944471254 }, { "x": -59.747319657976384, "y": -18.205086080981943 }, { "x": -59.837451441043704, "y": -17.974098257797195 }, { "x": -59.90820056490569, "y": -17.736456354397816 }, { "x": -59.95908374178861, "y": -17.493783704334348 }, { "x": -59.98975338834536, "y": -17.24773800622401 }, { "x": -59.999999999999844, "y": -16.999999999999446 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* R1: 2.2K 1% */}
    <resistor name={"R1"} pcbX={-53.575} pcbY={-17.65} pcbRotation={-90} resistance={"2.2kohm"} footprint={<Footprint_R1 />} schX={2.5500000000000007} schY={10.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* U6: DP5405 */}
    <chip name={"U6"} pcbX={-31} pcbY={14.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"DP5405"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* U8: CDDFN10-3324P */}
    <chip name={"U8"} pcbX={-39.3575} pcbY={-4.2025} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"CDDFN10-3324P"} displayName={"CDDFN10-3324P"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* J4: Conn_01x02 */}
    <chip name={"J4"} pcbX={-38.62} pcbY={-17.875} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"G800W306018EU"} displayName={"Conn_01x02"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* Sym2: ~ */}
    <chip name={"Sym2"} pcbX={12} pcbY={0} pcbRotation={-90} pinLabels={{}} displayName={"~"} footprint={<Footprint_Sym2 />} noSchematicRepresentation={true}/>

    {/* R15: 5.1k */}
    <resistor name={"R15"} pcbX={-48.1} pcbY={-15.175} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R15 />} schX={1.9500000000000028} schY={9.700000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* C3: 16SVPK220M */}
    <chip name={"C3"} pcbX={-9.3} pcbY={6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"16SVPK220M"} displayName={"16SVPK220M"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* J2: USB_C_Receptacle_USB2.0_16P */}
    <chip name={"J2"} pcbX={-54} pcbY={-13.75} pcbRotation={-90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} manufacturerPartNumber={"USB4205-GF-A"} displayName={"USB_C_Receptacle_USB2.0_16P"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* C2: 10u */}
    <capacitor name={"C2"} pcbX={-56.01} pcbY={-17.81} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C2 />} schX={3.5500000000000007} schY={10.100000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* J7: BM04B-SRSS-TBLFSN */}
    <chip name={"J7"} pcbX={-7.66} pcbY={-17.42} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["MP"] }} manufacturerPartNumber={"BM04B-SRSS-TBLFSN"} displayName={"BM04B-SRSS-TBLFSN"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* R7: 470R */}
    <resistor name={"R7"} pcbX={-53.5} pcbY={-9.1} pcbRotation={0} resistance={"470ohm"} footprint={<Footprint_R7 />} schX={-8.05} schY={0.1999999999999993} schRotation={180} schSheetName={"Overview"}/>

    {/* C4: 100n */}
    <capacitor name={"C4"} pcbX={-41.22} pcbY={4.26} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C4 />} schX={-8.350000000000001} schY={3.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* Conn2: ComputeModule5 High Speed rail */}
    <chip name={"Conn2"} pcbX={35} pcbY={17} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"], "pin82": ["82"], "pin83": ["83"], "pin84": ["84"], "pin85": ["85"], "pin86": ["86"], "pin87": ["87"], "pin88": ["88"], "pin89": ["89"], "pin90": ["90"], "pin91": ["91"], "pin92": ["92"], "pin93": ["93"], "pin94": ["94"], "pin95": ["95"], "pin96": ["96"], "pin97": ["97"], "pin98": ["98"], "pin99": ["99"], "pin100": ["100"] }} manufacturerPartNumber={"DF40C-100DS-0.4V(51)"} displayName={"ComputeModule5 High Speed rail"} footprint={<Footprint_Conn2 />} noSchematicRepresentation={true}/>

    {/* Module1: Compute Module 5 */}
    <chip name={"Module1"} pcbX={60} pcbY={-20} pcbRotation={90} pinLabels={{}} displayName={"Compute Module 5"} footprint={<Footprint_Module1 />} noSchematicRepresentation={true}/>

    {/* J5: Conn_01x03 */}
    <chip name={"J5"} pcbX={-44.63} pcbY={-17.08} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"G800W305018EU"} displayName={"Conn_01x03"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* D2: LED Red */}
    <chip name={"D2"} pcbX={-34.46375} pcbY={-18.26375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190KRKT"} displayName={"LED Red"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* U5: 74LVC1G07 */}
    <chip name={"U5"} pcbX={-31.94125} pcbY={-15.02} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"74LVC1G07"} displayName={"74LVC1G07"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* Conn1: ComputeModule5 GPIO rail */}
    <chip name={"Conn1"} pcbX={35} pcbY={-17} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"], "pin82": ["82"], "pin83": ["83"], "pin84": ["84"], "pin85": ["85"], "pin86": ["86"], "pin87": ["87"], "pin88": ["88"], "pin89": ["89"], "pin90": ["90"], "pin91": ["91"], "pin92": ["92"], "pin93": ["93"], "pin94": ["94"], "pin95": ["95"], "pin96": ["96"], "pin97": ["97"], "pin98": ["98"], "pin99": ["99"], "pin100": ["100"] }} manufacturerPartNumber={"DF40C-100DS-0.4V(51)"} displayName={"ComputeModule5 GPIO rail"} footprint={<Footprint_Conn1 />} noSchematicRepresentation={true}/>

    {/* J8: BM03B-SRSS-TBLFSN */}
    <chip name={"J8"} pcbX={-15.01} pcbY={-17.42} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["MP"] }} manufacturerPartNumber={"BM03B-SRSS-TBLFSN"} displayName={"BM03B-SRSS-TBLFSN"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* R14: 5.1k */}
    <resistor name={"R14"} pcbX={-48.1} pcbY={-12.665} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R14 />} schX={1.3500000000000014} schY={9.700000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* J6: BM04B-SRSS-TBLFSN */}
    <chip name={"J6"} pcbX={0.16} pcbY={-17.42} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["MP"] }} manufacturerPartNumber={"BM04B-SRSS-TBLFSN"} displayName={"BM04B-SRSS-TBLFSN"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* R11: 1k */}
    <resistor name={"R11"} pcbX={-33.12375} pcbY={-17.63375} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R11 />} schX={0.15000000000000213} schY={-5.299999999999997} schRotation={-90} schSheetName={"Overview"}/>

    {/* D3: LED Green */}
    <chip name={"D3"} pcbX={-29.81} pcbY={-18.17} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED Green"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* R12: 1k */}
    <resistor name={"R12"} pcbX={-28.47} pcbY={-17.42} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R12 />} schX={1.8499999999999979} schY={-6.5} schRotation={-90} schSheetName={"Overview"}/>

    {/* R6: 470R */}
    <resistor name={"R6"} pcbX={-55.5} pcbY={-9.1} pcbRotation={0} resistance={"470ohm"} footprint={<Footprint_R6 />} schX={-8.05} schY={0.6000000000000014} schRotation={180} schSheetName={"Overview"}/>

    {/* J9: BM06B-SRSS-TBLFSN */}
    <chip name={"J9"} pcbX={-23.19} pcbY={-17.79} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"BM06B-SRSS-TBLFSN"} displayName={"BM06B-SRSS-TBLFSN"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* U4: MagJack-RJ45 */}
    <chip name={"U4"} pcbX={-52.5} pcbY={-0.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"] }} manufacturerPartNumber={"LPJG0926HENL"} displayName={"MagJack-RJ45"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* U7: CDDFN10-3324P */}
    <chip name={"U7"} pcbX={-39.39} pcbY={-0.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"CDDFN10-3324P"} displayName={"CDDFN10-3324P"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* Sym1: ~ */}
    <chip name={"Sym1"} pcbX={10} pcbY={0} pcbRotation={90} pinLabels={{}} displayName={"~"} footprint={<Footprint_Sym1 />} noSchematicRepresentation={true}/>

    {/* C11: 10u */}
    <capacitor name={"C11"} pcbX={39.25} pcbY={3.325} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C11 />} schX={16.049999999999994} schY={0.1999999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* C8: 100n */}
    <capacitor name={"C8"} pcbX={52.53} pcbY={-17.5} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C8 />} schX={9.250000000000004} schY={0.3000000000000025} schRotation={-90} schSheetName={"Overview"}/>

    {/* J10: DF40HC(4.0)-50DS-0.4V(51) */}
    <chip name={"J10"} pcbX={40} pcbY={17} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"] }} manufacturerPartNumber={"DF40HC(4.0)-50DS-0.4V(51)"} displayName={"DF40HC(4.0)-50DS-0.4V(51)"} footprint={<Footprint_J10 />} noSchematicRepresentation={true}/>

    {/* R8: 10K 1% */}
    <resistor name={"R8"} pcbX={38.325} pcbY={-0.175} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R8 />} schX={14.249999999999996} schY={0.3000000000000025} schRotation={-90} schSheetName={"Overview"}/>

    {/* R4: 2.2K 1% */}
    <resistor name={"R4"} pcbX={3.14} pcbY={-14.08} pcbRotation={0} resistance={"2.2kohm"} footprint={<Footprint_R4 />} schX={1.6500000000000021} schY={1.5} schRotation={-90} schSheetName={"Overview"}/>

    {/* D1: LED Green */}
    <chip name={"D1"} pcbX={35.105} pcbY={3.01} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED Green"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* D6: SMAJ58A */}
    <chip name={"D6"} pcbX={-46.5} pcbY={16} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"SMAJ58A"} displayName={"SMAJ58A"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* U1: RT9742GGJ5 */}
    <chip name={"U1"} pcbX={44.48} pcbY={-3.9675} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"RT9742GGJ5"} displayName={"RT9742GGJ5"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* C10: 10u */}
    <capacitor name={"C10"} pcbX={39.25} pcbY={1.325} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C10 />} schX={15.249999999999996} schY={0.1999999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* R10: 2.2K 1% */}
    <resistor name={"R10"} pcbX={40.225} pcbY={-0.175} pcbRotation={0} resistance={"2.2kohm"} footprint={<Footprint_R10 />} schX={14.249999999999996} schY={-0.3999999999999986} schRotation={-90} schSheetName={"Overview"}/>

    {/* C9: 4.7nF */}
    <capacitor name={"C9"} pcbX={38.325} pcbY={-1.15} pcbRotation={0} capacitance={"4.7nF"} footprint={<Footprint_C9 />} schX={13.45} schY={0.3000000000000025} schRotation={-90} schSheetName={"Overview"}/>

    {/* R9: 100K 1% */}
    <resistor name={"R9"} pcbX={34.275} pcbY={-3.3} pcbRotation={-90} resistance={"100kohm"} footprint={<Footprint_R9 />} schX={11.849999999999998} schY={0.10000000000000142} schRotation={-90} schSheetName={"Overview"}/>

    {/* D4: MB6S */}
    <chip name={"D4"} pcbX={-54} pcbY={16} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"MB6S"} displayName={"MB6S"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* C7: 10u */}
    <capacitor name={"C7"} pcbX={51.055} pcbY={-17.65} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C7 />} schX={8.55} schY={0.3000000000000025} schRotation={-90} schSheetName={"Overview"}/>

    {/* D5: MB6S */}
    <chip name={"D5"} pcbX={-39} pcbY={16} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"MB6S"} displayName={"MB6S"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* C12: 10u */}
    <capacitor name={"C12"} pcbX={39.25} pcbY={5.325} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C12 />} schX={16.850000000000005} schY={0.1999999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* L1: 2.2uH */}
    <inductor name={"L1"} pcbX={36.825} pcbY={-8.1} pcbRotation={90} inductance={"2.2uH"} footprint={<Footprint_L1 />} schX={12.850000000000005} schY={0.6000000000000014} schRotation={0} schSheetName={"Overview"}/>

    {/* J1: Micro_SD_Card_Det */}
    <chip name={"J1"} pcbX={50} pcbY={5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} manufacturerPartNumber={"5033981892"} displayName={"Micro_SD_Card_Det"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* U2: ASEK-32.768KHZ-L-R-T */}
    <chip name={"U2"} pcbX={35.34} pcbY={6.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ASEK-32.768KHZ-L-R-T"} displayName={"ASEK-32.768KHZ-L-R-T"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* C13: 10u */}
    <capacitor name={"C13"} pcbX={39.25} pcbY={7.325} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C13 />} schX={17.650000000000002} schY={0.1999999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* C6: 10u */}
    <capacitor name={"C6"} pcbX={49.05} pcbY={-17.65} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C6 />} schX={7.850000000000005} schY={0.3000000000000025} schRotation={-90} schSheetName={"Overview"}/>

    {/* U3: AP3441SHE-7B */}
    <chip name={"U3"} pcbX={37.9975} pcbY={-2.9025} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} manufacturerPartNumber={"AP3441SHE-7B"} displayName={"AP3441SHE-7B"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* R2: 12K 1% */}
    <resistor name={"R2"} pcbX={43.36} pcbY={-6.16} pcbRotation={180} resistance={"12kohm"} footprint={<Footprint_R2 />} schX={-5.2499999999999964} schY={8.000000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C5: 100n */}
    <capacitor name={"C5"} pcbX={36.53} pcbY={8.66} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C5 />} schX={16.850000000000005} schY={2.5000000000000018} schRotation={-90} schSheetName={"Overview"}/>

    {/* R13: 1k */}
    <resistor name={"R13"} pcbX={43.37} pcbY={-7.15} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R13 />} schX={1.3500000000000014} schY={-10.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* R5: 2.2K 1% */}
    <resistor name={"R5"} pcbX={3.14} pcbY={-15.07} pcbRotation={0} resistance={"2.2kohm"} footprint={<Footprint_R5 />} schX={1.8499999999999979} schY={1.5} schRotation={-90} schSheetName={"Overview"}/>

    {/* R3: 1k */}
    <resistor name={"R3"} pcbX={35.3} pcbY={1.675} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R3 />} schX={14.349999999999998} schY={7} schRotation={-90} schSheetName={"Overview"}/>

    {/* J3: Bus_M.2_Socket_M */}
    <chip name={"J3"} pcbX={25} pcbY={0} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["M1"], "pin77": ["M2"], "pin78": ["M3"], "pin79": ["S1"], "pin80": ["S2"] }} manufacturerPartNumber={"MDT320M03001"} displayName={"Bus_M.2_Socket_M"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* C1: 10u */}
    <capacitor name={"C1"} pcbX={48.29} pcbY={-3.04} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C1 />} schX={-10.55} schY={10.600000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* KiCad net: /USB_5V */}
    <KiCadNet name={"_USB_5V"} connectsTo={[".R1 > .pin1", ".J2 > .pin2", ".J2 > .pin7", ".J2 > .pin10", ".J2 > .pin15", ".C2 > .pin1", ".J5 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".R1 > .pin2", ".U6 > .pin5", ".U6 > .pin8", ".U8 > .pin3", ".U8 > .pin8", ".J4 > .pin2", ".R15 > .pin2", ".C3 > .pin2", ".J2 > .pin1", ".J2 > .pin8", ".J2 > .pin9", ".J2 > .pin16", ".J2 > .pin17", ".C2 > .pin2", ".J7 > .pin3", ".C4 > .pin2", ".Conn2 > .pin7", ".Conn2 > .pin8", ".Conn2 > .pin13", ".Conn2 > .pin14", ".Conn2 > .pin19", ".Conn2 > .pin20", ".Conn2 > .pin25", ".Conn2 > .pin26", ".Conn2 > .pin31", ".Conn2 > .pin32", ".Conn2 > .pin37", ".Conn2 > .pin38", ".Conn2 > .pin44", ".Conn2 > .pin50", ".Conn2 > .pin55", ".Conn2 > .pin56", ".Conn2 > .pin61", ".Conn2 > .pin62", ".Conn2 > .pin67", ".Conn2 > .pin68", ".Conn2 > .pin73", ".Conn2 > .pin74", ".Conn2 > .pin79", ".Conn2 > .pin80", ".Conn2 > .pin85", ".Conn2 > .pin86", ".Conn2 > .pin91", ".Conn2 > .pin92", ".Conn2 > .pin97", ".Conn2 > .pin98", ".U5 > .pin3", ".Conn1 > .pin1", ".Conn1 > .pin2", ".Conn1 > .pin7", ".Conn1 > .pin8", ".Conn1 > .pin13", ".Conn1 > .pin14", ".Conn1 > .pin22", ".Conn1 > .pin23", ".Conn1 > .pin32", ".Conn1 > .pin33", ".Conn1 > .pin42", ".Conn1 > .pin43", ".Conn1 > .pin52", ".Conn1 > .pin53", ".Conn1 > .pin59", ".Conn1 > .pin60", ".Conn1 > .pin65", ".Conn1 > .pin66", ".Conn1 > .pin71", ".Conn1 > .pin74", ".Conn1 > .pin98", ".J8 > .pin2", ".R14 > .pin2", ".J6 > .pin1", ".J9 > .pin2", ".J9 > .pin6", ".U4 > .pin19", ".U4 > .pin20", ".U7 > .pin3", ".U7 > .pin8", ".C11 > .pin2", ".C8 > .pin2", ".J10 > .pin6", ".J10 > .pin12", ".J10 > .pin18", ".J10 > .pin24", ".J10 > .pin30", ".J10 > .pin36", ".J10 > .pin42", ".J10 > .pin48", ".U1 > .pin2", ".C10 > .pin2", ".R10 > .pin2", ".R9 > .pin2", ".C7 > .pin2", ".C12 > .pin2", ".J1 > .pin6", ".J1 > .pin11", ".U2 > .pin2", ".C13 > .pin2", ".C6 > .pin2", ".U3 > .pin4", ".U3 > .pin8", ".U3 > .pin9", ".C5 > .pin2", ".R13 > .pin2", ".J3 > .pin1", ".J3 > .pin3", ".J3 > .pin9", ".J3 > .pin15", ".J3 > .pin21", ".J3 > .pin27", ".J3 > .pin33", ".J3 > .pin39", ".J3 > .pin45", ".J3 > .pin51", ".J3 > .pin57", ".J3 > .pin71", ".J3 > .pin73", ".J3 > .pin75", ".J3 > .pin76", ".J3 > .pin77", ".J3 > .pin78", ".J3 > .pin79", ".J3 > .pin80", ".C1 > .pin2"]}/>
    {/* KiCad net: Net-(D4-+) */}
    <KiCadNet name={"Net__D4___"} connectsTo={[".U6 > .pin1", ".D6 > .pin1", ".D4 > .pin3", ".D5 > .pin3"]}/>
    {/* KiCad net: Net-(D4--) */}
    <KiCadNet name={"Net__D4____"} connectsTo={[".U6 > .pin2", ".D6 > .pin2", ".D4 > .pin4", ".D5 > .pin4"]}/>
    {/* KiCad net: unconnected-(U6-AT-Det-Pad3) */}
    <KiCadNet name={"unconnected__U6_AT_Det_Pad3_"} connectsTo={[".U6 > .pin3"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad4) */}
    <KiCadNet name={"unconnected__U6_NC_Pad4_"} connectsTo={[".U6 > .pin4"]}/>
    {/* KiCad net: /PoE_5V */}
    <KiCadNet name={"_PoE_5V"} connectsTo={[".U6 > .pin6", ".C3 > .pin1", ".J5 > .pin3"]}/>
    {/* KiCad net: unconnected-(U6-ADJ-Pad7) */}
    <KiCadNet name={"unconnected__U6_ADJ_Pad7_"} connectsTo={[".U6 > .pin7"]}/>
    {/* KiCad net: /TRD2_P */}
    <KiCadNet name={"_TRD2_P"} connectsTo={[".U8 > .pin1", ".U8 > .pin10", ".Conn1 > .pin11", ".U4 > .pin7"]}/>
    {/* KiCad net: /TRD2_N */}
    <KiCadNet name={"_TRD2_N"} connectsTo={[".U8 > .pin2", ".U8 > .pin9", ".Conn1 > .pin9", ".U4 > .pin8"]}/>
    {/* KiCad net: /TRD3_P */}
    <KiCadNet name={"_TRD3_P"} connectsTo={[".U8 > .pin4", ".U8 > .pin7", ".Conn1 > .pin3", ".U4 > .pin9"]}/>
    {/* KiCad net: /TRD3_N */}
    <KiCadNet name={"_TRD3_N"} connectsTo={[".U8 > .pin5", ".U8 > .pin6", ".Conn1 > .pin5", ".U4 > .pin10"]}/>
    {/* KiCad net: /nRPIBOOT */}
    <KiCadNet name={"_nRPIBOOT"} connectsTo={[".J4 > .pin1", ".Conn1 > .pin93"]}/>
    {/* KiCad net: Net-(J2-CC1) */}
    <KiCadNet name={"Net__J2_CC1_"} connectsTo={[".R15 > .pin1", ".J2 > .pin3"]}/>
    {/* KiCad net: /USB2_P */}
    <KiCadNet name={"_USB2_P"} connectsTo={[".J2 > .pin4", ".J2 > .pin12", ".Conn2 > .pin5"]}/>
    {/* KiCad net: /USB2_N */}
    <KiCadNet name={"_USB2_N"} connectsTo={[".J2 > .pin5", ".J2 > .pin13", ".Conn2 > .pin3"]}/>
    {/* KiCad net: unconnected-(J2-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__J2_SBU1_PadA8_"} connectsTo={[".J2 > .pin6"]}/>
    {/* KiCad net: Net-(J2-CC2) */}
    <KiCadNet name={"Net__J2_CC2_"} connectsTo={[".J2 > .pin11", ".R14 > .pin1"]}/>
    {/* KiCad net: unconnected-(J2-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__J2_SBU2_PadB8_"} connectsTo={[".J2 > .pin14"]}/>
    {/* KiCad net: /CM5_5V */}
    <KiCadNet name={"_CM5_5V"} connectsTo={[".J7 > .pin1", ".J5 > .pin2", ".Conn1 > .pin77", ".Conn1 > .pin79", ".Conn1 > .pin81", ".Conn1 > .pin83", ".Conn1 > .pin85", ".Conn1 > .pin87", ".C8 > .pin1", ".C7 > .pin1", ".C6 > .pin1", ".U3 > .pin3"]}/>
    {/* KiCad net: /FAN_PWM */}
    <KiCadNet name={"_FAN_PWM"} connectsTo={[".J7 > .pin2", ".Conn1 > .pin19"]}/>
    {/* KiCad net: /FAN_TACHO */}
    <KiCadNet name={"_FAN_TACHO"} connectsTo={[".J7 > .pin4", ".Conn1 > .pin16"]}/>
    {/* KiCad net: Net-(U4-LEDY_K) */}
    <KiCadNet name={"Net__U4_LEDY_K_"} connectsTo={[".R7 > .pin1", ".U4 > .pin18"]}/>
    {/* KiCad net: /ETH_LEDY */}
    <KiCadNet name={"_ETH_LEDY"} connectsTo={[".R7 > .pin2", ".Conn1 > .pin15"]}/>
    {/* KiCad net: Net-(C4-Pad1) */}
    <KiCadNet name={"Net__C4_Pad1_"} connectsTo={[".C4 > .pin1", ".U4 > .pin4", ".U4 > .pin5"]}/>
    {/* KiCad net: unconnected-(Conn2-USB_OTG_ID-Pad1) */}
    <KiCadNet name={"unconnected__Conn2_USB_OTG_ID_Pad1_"} connectsTo={[".Conn2 > .pin1"]}/>
    {/* KiCad net: /PCIe_CLK_nREQ */}
    <KiCadNet name={"_PCIe_CLK_nREQ"} connectsTo={[".Conn2 > .pin2", ".J3 > .pin52"]}/>
    {/* KiCad net: /PCIe_nWAKE */}
    <KiCadNet name={"_PCIe_nWAKE"} connectsTo={[".Conn2 > .pin4", ".J3 > .pin54"]}/>
    {/* KiCad net: /PCIe_PWR_EN */}
    <KiCadNet name={"_PCIe_PWR_EN"} connectsTo={[".Conn2 > .pin6", ".R9 > .pin1", ".U3 > .pin7"]}/>
    {/* KiCad net: /PCIe_nRST */}
    <KiCadNet name={"_PCIe_nRST"} connectsTo={[".Conn2 > .pin9", ".J3 > .pin50"]}/>
    {/* KiCad net: /PCIe_CLK_P */}
    <KiCadNet name={"_PCIe_CLK_P"} connectsTo={[".Conn2 > .pin10", ".J3 > .pin55"]}/>
    {/* KiCad net: unconnected-(Conn2-VBUS_EN-Pad11) */}
    <KiCadNet name={"unconnected__Conn2_VBUS_EN_Pad11_"} connectsTo={[".Conn2 > .pin11"]}/>
    {/* KiCad net: /PCIe_CLK_N */}
    <KiCadNet name={"_PCIe_CLK_N"} connectsTo={[".Conn2 > .pin12", ".J3 > .pin53"]}/>
    {/* KiCad net: /MIPI0_D0_N */}
    <KiCadNet name={"_MIPI0_D0_N"} connectsTo={[".Conn2 > .pin15", ".J10 > .pin1"]}/>
    {/* KiCad net: /PCIe_RX_P */}
    <KiCadNet name={"_PCIe_RX_P"} connectsTo={[".Conn2 > .pin16", ".J3 > .pin41"]}/>
    {/* KiCad net: /MIPI0_D0_P */}
    <KiCadNet name={"_MIPI0_D0_P"} connectsTo={[".Conn2 > .pin17", ".J10 > .pin3"]}/>
    {/* KiCad net: /PCIe_RX_N */}
    <KiCadNet name={"_PCIe_RX_N"} connectsTo={[".Conn2 > .pin18", ".J3 > .pin43"]}/>
    {/* KiCad net: /MIPI0_D1_N */}
    <KiCadNet name={"_MIPI0_D1_N"} connectsTo={[".Conn2 > .pin21", ".J10 > .pin7"]}/>
    {/* KiCad net: /PCIe_TX_P */}
    <KiCadNet name={"_PCIe_TX_P"} connectsTo={[".Conn2 > .pin22", ".J3 > .pin47"]}/>
    {/* KiCad net: /MIPI0_D1_P */}
    <KiCadNet name={"_MIPI0_D1_P"} connectsTo={[".Conn2 > .pin23", ".J10 > .pin9"]}/>
    {/* KiCad net: /PCIe_TX_N */}
    <KiCadNet name={"_PCIe_TX_N"} connectsTo={[".Conn2 > .pin24", ".J3 > .pin49"]}/>
    {/* KiCad net: /MIPI0_C_N */}
    <KiCadNet name={"_MIPI0_C_N"} connectsTo={[".Conn2 > .pin27", ".J10 > .pin13"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-0-RX_N-Pad28) */}
    <KiCadNet name={"unconnected__Conn2_USB3_0_RX_N_Pad28_"} connectsTo={[".Conn2 > .pin28"]}/>
    {/* KiCad net: /MIPI0_C_P */}
    <KiCadNet name={"_MIPI0_C_P"} connectsTo={[".Conn2 > .pin29", ".J10 > .pin15"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-0-RX_P-Pad30) */}
    <KiCadNet name={"unconnected__Conn2_USB3_0_RX_P_Pad30_"} connectsTo={[".Conn2 > .pin30"]}/>
    {/* KiCad net: /MIPI0_D2_N */}
    <KiCadNet name={"_MIPI0_D2_N"} connectsTo={[".Conn2 > .pin33", ".J10 > .pin19"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-0-D_P-Pad34) */}
    <KiCadNet name={"unconnected__Conn2_USB3_0_D_P_Pad34_"} connectsTo={[".Conn2 > .pin34"]}/>
    {/* KiCad net: /MIPI0_D2_P */}
    <KiCadNet name={"_MIPI0_D2_P"} connectsTo={[".Conn2 > .pin35", ".J10 > .pin21"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-0-D_N-Pad36) */}
    <KiCadNet name={"unconnected__Conn2_USB3_0_D_N_Pad36_"} connectsTo={[".Conn2 > .pin36"]}/>
    {/* KiCad net: /MIPI0_D3_N */}
    <KiCadNet name={"_MIPI0_D3_N"} connectsTo={[".Conn2 > .pin39", ".J10 > .pin14"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-0-TX_N-Pad40) */}
    <KiCadNet name={"unconnected__Conn2_USB3_0_TX_N_Pad40_"} connectsTo={[".Conn2 > .pin40"]}/>
    {/* KiCad net: /MIPI0_D3_P */}
    <KiCadNet name={"_MIPI0_D3_P"} connectsTo={[".Conn2 > .pin41", ".J10 > .pin16"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-0-TX_P-Pad42) */}
    <KiCadNet name={"unconnected__Conn2_USB3_0_TX_P_Pad42_"} connectsTo={[".Conn2 > .pin42"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_HOTPLUG-Pad43) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_HOTPLUG_Pad43_"} connectsTo={[".Conn2 > .pin43"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_SDA-Pad45) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_SDA_Pad45_"} connectsTo={[".Conn2 > .pin45"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_TX2_P-Pad46) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_TX2_P_Pad46_"} connectsTo={[".Conn2 > .pin46"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_SCL-Pad47) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_SCL_Pad47_"} connectsTo={[".Conn2 > .pin47"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_TX2_N-Pad48) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_TX2_N_Pad48_"} connectsTo={[".Conn2 > .pin48"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_CEC-Pad49) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_CEC_Pad49_"} connectsTo={[".Conn2 > .pin49"]}/>
    {/* KiCad net: /HDMI0_CEC */}
    <KiCadNet name={"_HDMI0_CEC"} connectsTo={[".Conn2 > .pin51", ".J10 > .pin8"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_TX1_P-Pad52) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_TX1_P_Pad52_"} connectsTo={[".Conn2 > .pin52"]}/>
    {/* KiCad net: /HDMI0_HOTPLUG */}
    <KiCadNet name={"_HDMI0_HOTPLUG"} connectsTo={[".Conn2 > .pin53", ".J10 > .pin10"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_TX1_N-Pad54) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_TX1_N_Pad54_"} connectsTo={[".Conn2 > .pin54"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-1-RX_N-Pad57) */}
    <KiCadNet name={"unconnected__Conn2_USB3_1_RX_N_Pad57_"} connectsTo={[".Conn2 > .pin57"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_TX0_P-Pad58) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_TX0_P_Pad58_"} connectsTo={[".Conn2 > .pin58"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-1-RX_P-Pad59) */}
    <KiCadNet name={"unconnected__Conn2_USB3_1_RX_P_Pad59_"} connectsTo={[".Conn2 > .pin59"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_TX0_N-Pad60) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_TX0_N_Pad60_"} connectsTo={[".Conn2 > .pin60"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-1-D_P-Pad63) */}
    <KiCadNet name={"unconnected__Conn2_USB3_1_D_P_Pad63_"} connectsTo={[".Conn2 > .pin63"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_CLK_P-Pad64) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_CLK_P_Pad64_"} connectsTo={[".Conn2 > .pin64"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-1-D_N-Pad65) */}
    <KiCadNet name={"unconnected__Conn2_USB3_1_D_N_Pad65_"} connectsTo={[".Conn2 > .pin65"]}/>
    {/* KiCad net: unconnected-(Conn2-HDMI1_CLK_N-Pad66) */}
    <KiCadNet name={"unconnected__Conn2_HDMI1_CLK_N_Pad66_"} connectsTo={[".Conn2 > .pin66"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-1-TX_N-Pad69) */}
    <KiCadNet name={"unconnected__Conn2_USB3_1_TX_N_Pad69_"} connectsTo={[".Conn2 > .pin69"]}/>
    {/* KiCad net: /HDMI0_TX2_P */}
    <KiCadNet name={"_HDMI0_TX2_P"} connectsTo={[".Conn2 > .pin70", ".J10 > .pin20"]}/>
    {/* KiCad net: unconnected-(Conn2-USB3-1-TX_P-Pad71) */}
    <KiCadNet name={"unconnected__Conn2_USB3_1_TX_P_Pad71_"} connectsTo={[".Conn2 > .pin71"]}/>
    {/* KiCad net: /HDMI0_TX2_N */}
    <KiCadNet name={"_HDMI0_TX2_N"} connectsTo={[".Conn2 > .pin72", ".J10 > .pin22"]}/>
    {/* KiCad net: /DPHY1_D0_N */}
    <KiCadNet name={"_DPHY1_D0_N"} connectsTo={[".Conn2 > .pin75", ".J10 > .pin25"]}/>
    {/* KiCad net: /HDMI0_TX1_P */}
    <KiCadNet name={"_HDMI0_TX1_P"} connectsTo={[".Conn2 > .pin76", ".J10 > .pin26"]}/>
    {/* KiCad net: /DPHY1_D0_P */}
    <KiCadNet name={"_DPHY1_D0_P"} connectsTo={[".Conn2 > .pin77", ".J10 > .pin27"]}/>
    {/* KiCad net: /HDMI0_TX1_N */}
    <KiCadNet name={"_HDMI0_TX1_N"} connectsTo={[".Conn2 > .pin78", ".J10 > .pin28"]}/>
    {/* KiCad net: /DPHY1_D1_N */}
    <KiCadNet name={"_DPHY1_D1_N"} connectsTo={[".Conn2 > .pin81", ".J10 > .pin31"]}/>
    {/* KiCad net: /HDMI0_TX0_P */}
    <KiCadNet name={"_HDMI0_TX0_P"} connectsTo={[".Conn2 > .pin82", ".J10 > .pin32"]}/>
    {/* KiCad net: /DPHY1_D1_P */}
    <KiCadNet name={"_DPHY1_D1_P"} connectsTo={[".Conn2 > .pin83", ".J10 > .pin33"]}/>
    {/* KiCad net: /HDMI0_TX0_N */}
    <KiCadNet name={"_HDMI0_TX0_N"} connectsTo={[".Conn2 > .pin84", ".J10 > .pin34"]}/>
    {/* KiCad net: /DPHY1_C_N */}
    <KiCadNet name={"_DPHY1_C_N"} connectsTo={[".Conn2 > .pin87", ".J10 > .pin37"]}/>
    {/* KiCad net: /HDMI0_CLK_P */}
    <KiCadNet name={"_HDMI0_CLK_P"} connectsTo={[".Conn2 > .pin88", ".J10 > .pin38"]}/>
    {/* KiCad net: /DPHY1_C_P */}
    <KiCadNet name={"_DPHY1_C_P"} connectsTo={[".Conn2 > .pin89", ".J10 > .pin39"]}/>
    {/* KiCad net: /HDMI0_CLK_N */}
    <KiCadNet name={"_HDMI0_CLK_N"} connectsTo={[".Conn2 > .pin90", ".J10 > .pin40"]}/>
    {/* KiCad net: /DPHY1_D2_N */}
    <KiCadNet name={"_DPHY1_D2_N"} connectsTo={[".Conn2 > .pin93", ".J10 > .pin43"]}/>
    {/* KiCad net: /DPHY1_D3_N */}
    <KiCadNet name={"_DPHY1_D3_N"} connectsTo={[".Conn2 > .pin94", ".J10 > .pin44"]}/>
    {/* KiCad net: /DPHY1_D2_P */}
    <KiCadNet name={"_DPHY1_D2_P"} connectsTo={[".Conn2 > .pin95", ".J10 > .pin45"]}/>
    {/* KiCad net: /DPHY1_D3_P */}
    <KiCadNet name={"_DPHY1_D3_P"} connectsTo={[".Conn2 > .pin96", ".J10 > .pin46"]}/>
    {/* KiCad net: /HDMI0_SDA */}
    <KiCadNet name={"_HDMI0_SDA"} connectsTo={[".Conn2 > .pin99", ".J10 > .pin49"]}/>
    {/* KiCad net: /HDMI0_SCL */}
    <KiCadNet name={"_HDMI0_SCL"} connectsTo={[".Conn2 > .pin100", ".J10 > .pin50"]}/>
    {/* KiCad net: Net-(D2-K) */}
    <KiCadNet name={"Net__D2_K_"} connectsTo={[".D2 > .pin1", ".R11 > .pin1"]}/>
    {/* KiCad net: /CM5_3V3 */}
    <KiCadNet name={"_CM5_3V3"} connectsTo={[".D2 > .pin2", ".U5 > .pin5", ".Conn1 > .pin78", ".Conn1 > .pin84", ".Conn1 > .pin86", ".J6 > .pin2", ".D3 > .pin2", ".J9 > .pin1", ".U4 > .pin15", ".U4 > .pin17", ".J10 > .pin5", ".J10 > .pin11", ".J10 > .pin17", ".J10 > .pin23", ".J10 > .pin29", ".J10 > .pin35", ".J10 > .pin41", ".J10 > .pin47", ".R4 > .pin2", ".U1 > .pin5", ".R2 > .pin1", ".R5 > .pin2"]}/>
    {/* KiCad net: /nPI_LED_PWR */}
    <KiCadNet name={"_nPI_LED_PWR"} connectsTo={[".U5 > .pin2", ".Conn1 > .pin95"]}/>
    {/* KiCad net: Net-(R11-Pad2) */}
    <KiCadNet name={"Net__R11_Pad2_"} connectsTo={[".U5 > .pin4", ".R11 > .pin2"]}/>
    {/* KiCad net: /TRD1_P */}
    <KiCadNet name={"_TRD1_P"} connectsTo={[".Conn1 > .pin4", ".U4 > .pin3", ".U7 > .pin4", ".U7 > .pin7"]}/>
    {/* KiCad net: /TRD1_N */}
    <KiCadNet name={"_TRD1_N"} connectsTo={[".Conn1 > .pin6", ".U4 > .pin6", ".U7 > .pin5", ".U7 > .pin6"]}/>
    {/* KiCad net: /TRD0_N */}
    <KiCadNet name={"_TRD0_N"} connectsTo={[".Conn1 > .pin10", ".U4 > .pin2", ".U7 > .pin2", ".U7 > .pin9"]}/>
    {/* KiCad net: /TRD0_P */}
    <KiCadNet name={"_TRD0_P"} connectsTo={[".Conn1 > .pin12", ".U4 > .pin1", ".U7 > .pin1", ".U7 > .pin10"]}/>
    {/* KiCad net: /ETH_LEDG */}
    <KiCadNet name={"_ETH_LEDG"} connectsTo={[".Conn1 > .pin17", ".R6 > .pin2"]}/>
    {/* KiCad net: unconnected-(Conn1-Ethernet_SYNC_OUT(3.3v)-Pad18) */}
    <KiCadNet name={"unconnected__Conn1_Ethernet_SYNC_OUT_3_3v__Pad18_"} connectsTo={[".Conn1 > .pin18"]}/>
    {/* KiCad net: unconnected-(Conn1-EEPROM_nWP-Pad20) */}
    <KiCadNet name={"unconnected__Conn1_EEPROM_nWP_Pad20_"} connectsTo={[".Conn1 > .pin20"]}/>
    {/* KiCad net: /PI_nLED_Activity */}
    <KiCadNet name={"_PI_nLED_Activity"} connectsTo={[".Conn1 > .pin21", ".R12 > .pin2"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO26-Pad24) */}
    <KiCadNet name={"unconnected__Conn1_GPIO26_Pad24_"} connectsTo={[".Conn1 > .pin24"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO21-Pad25) */}
    <KiCadNet name={"unconnected__Conn1_GPIO21_Pad25_"} connectsTo={[".Conn1 > .pin25"]}/>
    {/* KiCad net: /I2S_LRCLK */}
    <KiCadNet name={"_I2S_LRCLK"} connectsTo={[".Conn1 > .pin26", ".J9 > .pin5"]}/>
    {/* KiCad net: /I2S_DIN */}
    <KiCadNet name={"_I2S_DIN"} connectsTo={[".Conn1 > .pin27", ".J9 > .pin4"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO13-Pad28) */}
    <KiCadNet name={"unconnected__Conn1_GPIO13_Pad28_"} connectsTo={[".Conn1 > .pin28"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO16-Pad29) */}
    <KiCadNet name={"unconnected__Conn1_GPIO16_Pad29_"} connectsTo={[".Conn1 > .pin29"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO6-Pad30) */}
    <KiCadNet name={"unconnected__Conn1_GPIO6_Pad30_"} connectsTo={[".Conn1 > .pin30"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO12-Pad31) */}
    <KiCadNet name={"unconnected__Conn1_GPIO12_Pad31_"} connectsTo={[".Conn1 > .pin31"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO5-Pad34) */}
    <KiCadNet name={"unconnected__Conn1_GPIO5_Pad34_"} connectsTo={[".Conn1 > .pin34"]}/>
    {/* KiCad net: unconnected-(Conn1-ID_SC-Pad35) */}
    <KiCadNet name={"unconnected__Conn1_ID_SC_Pad35_"} connectsTo={[".Conn1 > .pin35"]}/>
    {/* KiCad net: unconnected-(Conn1-ID_SD-Pad36) */}
    <KiCadNet name={"unconnected__Conn1_ID_SD_Pad36_"} connectsTo={[".Conn1 > .pin36"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO7-Pad37) */}
    <KiCadNet name={"unconnected__Conn1_GPIO7_Pad37_"} connectsTo={[".Conn1 > .pin37"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO11-Pad38) */}
    <KiCadNet name={"unconnected__Conn1_GPIO11_Pad38_"} connectsTo={[".Conn1 > .pin38"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO8-Pad39) */}
    <KiCadNet name={"unconnected__Conn1_GPIO8_Pad39_"} connectsTo={[".Conn1 > .pin39"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO9-Pad40) */}
    <KiCadNet name={"unconnected__Conn1_GPIO9_Pad40_"} connectsTo={[".Conn1 > .pin40"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO25-Pad41) */}
    <KiCadNet name={"unconnected__Conn1_GPIO25_Pad41_"} connectsTo={[".Conn1 > .pin41"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO10-Pad44) */}
    <KiCadNet name={"unconnected__Conn1_GPIO10_Pad44_"} connectsTo={[".Conn1 > .pin44"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO24-Pad45) */}
    <KiCadNet name={"unconnected__Conn1_GPIO24_Pad45_"} connectsTo={[".Conn1 > .pin45"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO22-Pad46) */}
    <KiCadNet name={"unconnected__Conn1_GPIO22_Pad46_"} connectsTo={[".Conn1 > .pin46"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO23-Pad47) */}
    <KiCadNet name={"unconnected__Conn1_GPIO23_Pad47_"} connectsTo={[".Conn1 > .pin47"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO27-Pad48) */}
    <KiCadNet name={"unconnected__Conn1_GPIO27_Pad48_"} connectsTo={[".Conn1 > .pin48"]}/>
    {/* KiCad net: /I2S_BCLK */}
    <KiCadNet name={"_I2S_BCLK"} connectsTo={[".Conn1 > .pin49", ".J9 > .pin3"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO17-Pad50) */}
    <KiCadNet name={"unconnected__Conn1_GPIO17_Pad50_"} connectsTo={[".Conn1 > .pin50"]}/>
    {/* KiCad net: /UART0_RX */}
    <KiCadNet name={"_UART0_RX"} connectsTo={[".Conn1 > .pin51", ".J8 > .pin1"]}/>
    {/* KiCad net: unconnected-(Conn1-GPIO4-Pad54) */}
    <KiCadNet name={"unconnected__Conn1_GPIO4_Pad54_"} connectsTo={[".Conn1 > .pin54"]}/>
    {/* KiCad net: /UART0_TX */}
    <KiCadNet name={"_UART0_TX"} connectsTo={[".Conn1 > .pin55", ".J8 > .pin3"]}/>
    {/* KiCad net: /SCL1 */}
    <KiCadNet name={"_SCL1"} connectsTo={[".Conn1 > .pin56", ".J6 > .pin4", ".J10 > .pin2", ".R5 > .pin1"]}/>
    {/* KiCad net: /SD_CLK */}
    <KiCadNet name={"_SD_CLK"} connectsTo={[".Conn1 > .pin57", ".J1 > .pin5"]}/>
    {/* KiCad net: /SDA1 */}
    <KiCadNet name={"_SDA1"} connectsTo={[".Conn1 > .pin58", ".J6 > .pin3", ".J10 > .pin4", ".R4 > .pin1"]}/>
    {/* KiCad net: /SD_DAT3 */}
    <KiCadNet name={"_SD_DAT3"} connectsTo={[".Conn1 > .pin61", ".J1 > .pin2"]}/>
    {/* KiCad net: /SD_CMD */}
    <KiCadNet name={"_SD_CMD"} connectsTo={[".Conn1 > .pin62", ".J1 > .pin3"]}/>
    {/* KiCad net: /SD_DAT0 */}
    <KiCadNet name={"_SD_DAT0"} connectsTo={[".Conn1 > .pin63", ".J1 > .pin7"]}/>
    {/* KiCad net: unconnected-(Conn1-SD_DAT5-Pad64) */}
    <KiCadNet name={"unconnected__Conn1_SD_DAT5_Pad64_"} connectsTo={[".Conn1 > .pin64"]}/>
    {/* KiCad net: /SD_DAT1 */}
    <KiCadNet name={"_SD_DAT1"} connectsTo={[".Conn1 > .pin67", ".J1 > .pin8"]}/>
    {/* KiCad net: unconnected-(Conn1-SD_DAT4-Pad68) */}
    <KiCadNet name={"unconnected__Conn1_SD_DAT4_Pad68_"} connectsTo={[".Conn1 > .pin68"]}/>
    {/* KiCad net: /SD_DAT2 */}
    <KiCadNet name={"_SD_DAT2"} connectsTo={[".Conn1 > .pin69", ".J1 > .pin1"]}/>
    {/* KiCad net: unconnected-(Conn1-SD_DAT7-Pad70) */}
    <KiCadNet name={"unconnected__Conn1_SD_DAT7_Pad70_"} connectsTo={[".Conn1 > .pin70"]}/>
    {/* KiCad net: unconnected-(Conn1-SD_DAT6-Pad72) */}
    <KiCadNet name={"unconnected__Conn1_SD_DAT6_Pad72_"} connectsTo={[".Conn1 > .pin72"]}/>
    {/* KiCad net: /SD_VDD_Override */}
    <KiCadNet name={"_SD_VDD_Override"} connectsTo={[".Conn1 > .pin73", ".R13 > .pin1"]}/>
    {/* KiCad net: /SD_PWR_ON */}
    <KiCadNet name={"_SD_PWR_ON"} connectsTo={[".Conn1 > .pin75", ".U1 > .pin4", ".R2 > .pin2"]}/>
    {/* KiCad net: unconnected-(Conn1-VBAT-Pad76) */}
    <KiCadNet name={"unconnected__Conn1_VBAT_Pad76_"} connectsTo={[".Conn1 > .pin76"]}/>
    {/* KiCad net: unconnected-(Conn1-SCL0-Pad80) */}
    <KiCadNet name={"unconnected__Conn1_SCL0_Pad80_"} connectsTo={[".Conn1 > .pin80"]}/>
    {/* KiCad net: unconnected-(Conn1-SDA0-Pad82) */}
    <KiCadNet name={"unconnected__Conn1_SDA0_Pad82_"} connectsTo={[".Conn1 > .pin82"]}/>
    {/* KiCad net: unconnected-(Conn1-+1.8v_(Output)-Pad88) */}
    <KiCadNet name={"unconnected__Conn1__1_8v__Output__Pad88_"} connectsTo={[".Conn1 > .pin88"]}/>
    {/* KiCad net: unconnected-(Conn1-WiFi_nDisable-Pad89) */}
    <KiCadNet name={"unconnected__Conn1_WiFi_nDisable_Pad89_"} connectsTo={[".Conn1 > .pin89"]}/>
    {/* KiCad net: unconnected-(Conn1-+1.8v_(Output)-Pad90) */}
    <KiCadNet name={"unconnected__Conn1__1_8v__Output__Pad90_"} connectsTo={[".Conn1 > .pin90"]}/>
    {/* KiCad net: unconnected-(Conn1-BT_nDisable-Pad91) */}
    <KiCadNet name={"unconnected__Conn1_BT_nDisable_Pad91_"} connectsTo={[".Conn1 > .pin91"]}/>
    {/* KiCad net: unconnected-(Conn1-PWR_BUT-Pad92) */}
    <KiCadNet name={"unconnected__Conn1_PWR_BUT_Pad92_"} connectsTo={[".Conn1 > .pin92"]}/>
    {/* KiCad net: unconnected-(Conn1-CC1-Pad94) */}
    <KiCadNet name={"unconnected__Conn1_CC1_Pad94_"} connectsTo={[".Conn1 > .pin94"]}/>
    {/* KiCad net: unconnected-(Conn1-CC2-Pad96) */}
    <KiCadNet name={"unconnected__Conn1_CC2_Pad96_"} connectsTo={[".Conn1 > .pin96"]}/>
    {/* KiCad net: unconnected-(Conn1-CAM_GPIO0-Pad97) */}
    <KiCadNet name={"unconnected__Conn1_CAM_GPIO0_Pad97_"} connectsTo={[".Conn1 > .pin97"]}/>
    {/* KiCad net: unconnected-(Conn1-PMIC_ENABLE-Pad99) */}
    <KiCadNet name={"unconnected__Conn1_PMIC_ENABLE_Pad99_"} connectsTo={[".Conn1 > .pin99"]}/>
    {/* KiCad net: unconnected-(Conn1-CAM_GPIO1-Pad100) */}
    <KiCadNet name={"unconnected__Conn1_CAM_GPIO1_Pad100_"} connectsTo={[".Conn1 > .pin100"]}/>
    {/* KiCad net: Net-(D3-K) */}
    <KiCadNet name={"Net__D3_K_"} connectsTo={[".D3 > .pin1", ".R12 > .pin1"]}/>
    {/* KiCad net: Net-(U4-LEDG_K) */}
    <KiCadNet name={"Net__U4_LEDG_K_"} connectsTo={[".R6 > .pin1", ".U4 > .pin16"]}/>
    {/* KiCad net: /TR0_TAP */}
    <KiCadNet name={"_TR0_TAP"} connectsTo={[".U4 > .pin11", ".D4 > .pin2"]}/>
    {/* KiCad net: /TR1_TAP */}
    <KiCadNet name={"_TR1_TAP"} connectsTo={[".U4 > .pin12", ".D4 > .pin1"]}/>
    {/* KiCad net: /TR2_TAP */}
    <KiCadNet name={"_TR2_TAP"} connectsTo={[".U4 > .pin13", ".D5 > .pin2"]}/>
    {/* KiCad net: /TR3_TAP */}
    <KiCadNet name={"_TR3_TAP"} connectsTo={[".U4 > .pin14", ".D5 > .pin1"]}/>
    {/* KiCad net: /M2_3v3 */}
    <KiCadNet name={"_M2_3v3"} connectsTo={[".C11 > .pin1", ".R8 > .pin1", ".D1 > .pin2", ".C10 > .pin1", ".C9 > .pin1", ".C12 > .pin1", ".L1 > .pin2", ".U2 > .pin1", ".U2 > .pin4", ".C13 > .pin1", ".C5 > .pin1", ".J3 > .pin2", ".J3 > .pin4", ".J3 > .pin12", ".J3 > .pin14", ".J3 > .pin16", ".J3 > .pin18", ".J3 > .pin70", ".J3 > .pin72", ".J3 > .pin74"]}/>
    {/* KiCad net: /FB */}
    <KiCadNet name={"_FB"} connectsTo={[".R8 > .pin2", ".R10 > .pin1", ".C9 > .pin2", ".U3 > .pin1"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".D1 > .pin1", ".R3 > .pin1"]}/>
    {/* KiCad net: /SD_PWR */}
    <KiCadNet name={"_SD_PWR"} connectsTo={[".U1 > .pin1", ".J1 > .pin4", ".C1 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-nFLG-Pad3) */}
    <KiCadNet name={"unconnected__U1_nFLG_Pad3_"} connectsTo={[".U1 > .pin3"]}/>
    {/* KiCad net: Net-(U3-LX) */}
    <KiCadNet name={"Net__U3_LX_"} connectsTo={[".L1 > .pin1", ".U3 > .pin6"]}/>
    {/* KiCad net: unconnected-(J1-DET_B-Pad9) */}
    <KiCadNet name={"unconnected__J1_DET_B_Pad9_"} connectsTo={[".J1 > .pin9"]}/>
    {/* KiCad net: unconnected-(J1-DET_A-Pad10) */}
    <KiCadNet name={"unconnected__J1_DET_A_Pad10_"} connectsTo={[".J1 > .pin10"]}/>
    {/* KiCad net: Net-(J3-SUSCLK) */}
    <KiCadNet name={"Net__J3_SUSCLK_"} connectsTo={[".U2 > .pin3", ".J3 > .pin68"]}/>
    {/* KiCad net: unconnected-(U3-PG-Pad2) */}
    <KiCadNet name={"unconnected__U3_PG_Pad2_"} connectsTo={[".U3 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3-nc-Pad5) */}
    <KiCadNet name={"unconnected__U3_nc_Pad5_"} connectsTo={[".U3 > .pin5"]}/>
    {/* KiCad net: Net-(J3-DAS{slash}~{DSS}{slash}~{LED1}) */}
    <KiCadNet name={"Net__J3_DAS_slash___DSS__slash___LED1__"} connectsTo={[".R3 > .pin2", ".J3 > .pin10"]}/>
    {/* KiCad net: unconnected-(J3-PETn3-Pad5) */}
    <KiCadNet name={"unconnected__J3_PETn3_Pad5_"} connectsTo={[".J3 > .pin5"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad6) */}
    <KiCadNet name={"unconnected__J3_NC_Pad6_"} connectsTo={[".J3 > .pin6"]}/>
    {/* KiCad net: unconnected-(J3-PETp3-Pad7) */}
    <KiCadNet name={"unconnected__J3_PETp3_Pad7_"} connectsTo={[".J3 > .pin7"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad8) */}
    <KiCadNet name={"unconnected__J3_NC_Pad8_"} connectsTo={[".J3 > .pin8"]}/>
    {/* KiCad net: unconnected-(J3-PERn3-Pad11) */}
    <KiCadNet name={"unconnected__J3_PERn3_Pad11_"} connectsTo={[".J3 > .pin11"]}/>
    {/* KiCad net: unconnected-(J3-PERp3-Pad13) */}
    <KiCadNet name={"unconnected__J3_PERp3_Pad13_"} connectsTo={[".J3 > .pin13"]}/>
    {/* KiCad net: unconnected-(J3-PETn2-Pad17) */}
    <KiCadNet name={"unconnected__J3_PETn2_Pad17_"} connectsTo={[".J3 > .pin17"]}/>
    {/* KiCad net: unconnected-(J3-PETp2-Pad19) */}
    <KiCadNet name={"unconnected__J3_PETp2_Pad19_"} connectsTo={[".J3 > .pin19"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad20) */}
    <KiCadNet name={"unconnected__J3_NC_Pad20_"} connectsTo={[".J3 > .pin20"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad22) */}
    <KiCadNet name={"unconnected__J3_NC_Pad22_"} connectsTo={[".J3 > .pin22"]}/>
    {/* KiCad net: unconnected-(J3-PERn2-Pad23) */}
    <KiCadNet name={"unconnected__J3_PERn2_Pad23_"} connectsTo={[".J3 > .pin23"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad24) */}
    <KiCadNet name={"unconnected__J3_NC_Pad24_"} connectsTo={[".J3 > .pin24"]}/>
    {/* KiCad net: unconnected-(J3-PERp2-Pad25) */}
    <KiCadNet name={"unconnected__J3_PERp2_Pad25_"} connectsTo={[".J3 > .pin25"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad26) */}
    <KiCadNet name={"unconnected__J3_NC_Pad26_"} connectsTo={[".J3 > .pin26"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad28) */}
    <KiCadNet name={"unconnected__J3_NC_Pad28_"} connectsTo={[".J3 > .pin28"]}/>
    {/* KiCad net: unconnected-(J3-PETn1-Pad29) */}
    <KiCadNet name={"unconnected__J3_PETn1_Pad29_"} connectsTo={[".J3 > .pin29"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad30) */}
    <KiCadNet name={"unconnected__J3_NC_Pad30_"} connectsTo={[".J3 > .pin30"]}/>
    {/* KiCad net: unconnected-(J3-PETp1-Pad31) */}
    <KiCadNet name={"unconnected__J3_PETp1_Pad31_"} connectsTo={[".J3 > .pin31"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad32) */}
    <KiCadNet name={"unconnected__J3_NC_Pad32_"} connectsTo={[".J3 > .pin32"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad34) */}
    <KiCadNet name={"unconnected__J3_NC_Pad34_"} connectsTo={[".J3 > .pin34"]}/>
    {/* KiCad net: unconnected-(J3-PERn1-Pad35) */}
    <KiCadNet name={"unconnected__J3_PERn1_Pad35_"} connectsTo={[".J3 > .pin35"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad36) */}
    <KiCadNet name={"unconnected__J3_NC_Pad36_"} connectsTo={[".J3 > .pin36"]}/>
    {/* KiCad net: unconnected-(J3-PERp1-Pad37) */}
    <KiCadNet name={"unconnected__J3_PERp1_Pad37_"} connectsTo={[".J3 > .pin37"]}/>
    {/* KiCad net: unconnected-(J3-DEVSLP-Pad38) */}
    <KiCadNet name={"unconnected__J3_DEVSLP_Pad38_"} connectsTo={[".J3 > .pin38"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad40) */}
    <KiCadNet name={"unconnected__J3_NC_Pad40_"} connectsTo={[".J3 > .pin40"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad42) */}
    <KiCadNet name={"unconnected__J3_NC_Pad42_"} connectsTo={[".J3 > .pin42"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad44) */}
    <KiCadNet name={"unconnected__J3_NC_Pad44_"} connectsTo={[".J3 > .pin44"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad46) */}
    <KiCadNet name={"unconnected__J3_NC_Pad46_"} connectsTo={[".J3 > .pin46"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad48) */}
    <KiCadNet name={"unconnected__J3_NC_Pad48_"} connectsTo={[".J3 > .pin48"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad56) */}
    <KiCadNet name={"unconnected__J3_NC_Pad56_"} connectsTo={[".J3 > .pin56"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad58) */}
    <KiCadNet name={"unconnected__J3_NC_Pad58_"} connectsTo={[".J3 > .pin58"]}/>
    {/* KiCad net: unconnected-(J3-NC-Pad67) */}
    <KiCadNet name={"unconnected__J3_NC_Pad67_"} connectsTo={[".J3 > .pin67"]}/>
    {/* KiCad net: unconnected-(J3-PEDET-Pad69) */}
    <KiCadNet name={"unconnected__J3_PEDET_Pad69_"} connectsTo={[".J3 > .pin69"]}/>
    <KiCadSchematic /></board>);
}
