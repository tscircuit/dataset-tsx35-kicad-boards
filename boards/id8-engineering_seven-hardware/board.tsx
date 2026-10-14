import { KiCadSchematic, KiCadNet } from './schematic'
// Seven
// Source: https://github.com/id8-engineering/seven-hardware
// Commit: 7c69a1482ffd1dddc206294a55602477c55e17d8; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_C16, Footprint_C19, Footprint_LS1, Footprint_J5, Footprint_JP3, Footprint_C24, Footprint_C12, Footprint_U3, Footprint_VDD_GNSS1, Footprint_Q1, Footprint_J7, Footprint_VDD_3V3, Footprint_C32, Footprint_mB1, Footprint_R17, Footprint_J9, Footprint_U5, Footprint_C8, Footprint_JP4, Footprint_C11, Footprint_C28, Footprint_C33, Footprint_C2, Footprint_R16, Footprint_C7, Footprint_C34, Footprint_C31, Footprint_S1, Footprint_C27, Footprint_R2, Footprint_U1, Footprint_L2, Footprint_R3, Footprint_R10, Footprint_R14, Footprint_REF__, Footprint_C4, Footprint_REF___, Footprint_R11, Footprint_C17, Footprint_R7, Footprint_C5, Footprint_C6, Footprint_C35, Footprint_C21, Footprint_VDD_1V8, Footprint_L1, Footprint_D3, Footprint_C26, Footprint_REF____, Footprint_R1, Footprint_C20, Footprint_C3, Footprint_L3, Footprint_R5, Footprint_FB1, Footprint_R4, Footprint_J8, Footprint_REF_____, Footprint_R8, Footprint_C1, Footprint_R13, Footprint_R18, Footprint_C13, Footprint_L5, Footprint_C14, Footprint_VDD_5V5, Footprint_mB2, Footprint_R15, Footprint_D1, Footprint_L4, Footprint_C9, Footprint_mB4, Footprint_U4, Footprint_C29, Footprint_R6, Footprint_J3, Footprint_R12, Footprint_mB3, Footprint_C30, Footprint_C10, Footprint_C18, Footprint_J1, Footprint_C15, Footprint_JP1, Footprint_D5, Footprint_C25 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={84.99999999999999} height={60.05} thickness={1.6} layers={4} outline={[{ "x": -42.499999999999986, "y": 30.02499999999999 }, { "x": 42.5, "y": 30.02499999999999 }, { "x": 42.5, "y": -30.025000000000006 }, { "x": -42.499999999999986, "y": -30.025000000000006 }, { "x": -42.499999999999986, "y": 30.02499999999999 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* C16: 39pF */}
    <capacitor name={"C16"} pcbX={38.3} pcbY={18.475} pcbRotation={-90} capacitance={"39pF"} footprint={<Footprint_C16 />} schX={1} schY={0.15000000000000036} schRotation={0} schSheetName={"Antenna GNSS"}/>

    {/* C19: 10uF */}
    <capacitor name={"C19"} pcbX={15.52} pcbY={-17.425} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C19 />} schX={3.95} schY={2.6000000000000005} schRotation={90} schSheetName={"PMIC"}/>

    {/* LS1: CMT-8504-100-SMT-TR */}
    <chip name={"LS1"} pcbX={-35.1} pcbY={8.375} pcbRotation={0} pinLabels={{ "pin1": ["N"], "pin2": ["P"] }} manufacturerPartNumber={"CMT-8504-100-SMT-TR"} displayName={"CMT-8504-100-SMT-TR"} footprint={<Footprint_LS1 />} noSchematicRepresentation={true}/>

    {/* J5: Conn_01x02 */}
    <chip name={"J5"} pcbX={32.0225} pcbY={-11.47} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"1757242"} displayName={"Conn_01x02"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* JP3: SolderJumper_2_Bridged */}
    <chip name={"JP3"} pcbX={7.5} pcbY={-11.325} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SolderJumper_2_Bridged"} footprint={<Footprint_JP3 />} noSchematicRepresentation={true}/>

    {/* C24: 1.0nF */}
    <capacitor name={"C24"} pcbX={13.7} pcbY={-14.425} pcbRotation={0} capacitance={"1.0nF"} footprint={<Footprint_C24 />} schX={5.1499999999999995} schY={2.6000000000000005} schRotation={90} schSheetName={"PMIC"}/>

    {/* C12: 10uF */}
    <capacitor name={"C12"} pcbX={14.6} pcbY={-19.925} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C12 />} schX={2.3500000000000005} schY={2.6000000000000005} schRotation={90} schSheetName={"PMIC"}/>

    {/* U3: TPD3F303DPVR */}
    <chip name={"U3"} pcbX={-35.78} pcbY={1.725} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} manufacturerPartNumber={"TPD3F303DPVR"} displayName={"TPD3F303DPVR"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* VDD_GNSS1: VDD_GNSS */}
    <chip name={"VDD_GNSS1"} pcbX={-33} pcbY={-24.025} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"VDD_GNSS"} footprint={<Footprint_VDD_GNSS1 />} noSchematicRepresentation={true}/>

    {/* Q1: MMST3904-7-F */}
    <chip name={"Q1"} pcbX={-30.5} pcbY={15.875} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"MMST3904-7-F"} displayName={"MMST3904-7-F"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* J7: NSIM-2-C */}
    <chip name={"J7"} pcbX={-35.3} pcbY={-12.3875} pcbRotation={0} pinLabels={{ "pin1": ["C1"], "pin2": ["C2"], "pin3": ["C3"], "pin4": ["C5"], "pin5": ["C6"], "pin6": ["C7"], "pin7": ["S/W"], "pin8": ["SH1"], "pin9": ["SH2"], "pin10": ["SH3"] }} manufacturerPartNumber={"NSIM-2-C"} displayName={"NSIM-2-C"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* VDD_3V3: VDD_3V3 */}
    <chip name={"VDD_3V3"} pcbX={-33} pcbY={-27.725} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"VDD_3V3"} footprint={<Footprint_VDD_3V3 />} noSchematicRepresentation={true}/>

    {/* C32: 10uF */}
    <capacitor name={"C32"} pcbX={29.4} pcbY={-22.725} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C32 />} schX={-2.95} schY={-0.09999999999999964} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* mB1: ~ */}
    <chip name={"mB1"} pcbX={-14.327049} pcbY={-15.20924} pcbRotation={-90} pinLabels={{ "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} manufacturerPartNumber={"M20-7820842"} displayName={"~"} footprint={<Footprint_mB1 />} noSchematicRepresentation={true}/>

    {/* R17: 4k7 */}
    <resistor name={"R17"} pcbX={9.018093} pcbY={-15.781698} pcbRotation={0} resistance={"4.7kohm"} footprint={<Footprint_R17 />} schX={-5.15} schY={-1.4999999999999991} schRotation={90} schSheetName={"PMIC"}/>

    {/* J9: LTE */}
    <chip name={"J9"} pcbX={38.633239} pcbY={8.451781} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["G1"], "pin3": ["G2"], "pin4": ["G3"], "pin5": ["G4"] }} manufacturerPartNumber={"2081679-1"} displayName={"LTE"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* U5: ISL85410FRZ-T7A */}
    <chip name={"U5"} pcbX={25.124396} pcbY={-23.613743} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"] }} manufacturerPartNumber={"ISL85410FRZ-T7A"} displayName={"ISL85410FRZ-T7A"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C8: 1.0uF */}
    <capacitor name={"C8"} pcbX={8.8} pcbY={12.975} pcbRotation={90} capacitance={"1.0uF"} footprint={<Footprint_C8 />} schX={-1.6500000000000012} schY={5} schRotation={-90} schSheetName={"MCU"}/>

    {/* JP4: SolderJumper_2_Bridged */}
    <chip name={"JP4"} pcbX={-38.8} pcbY={22.525} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SolderJumper_2_Bridged"} footprint={<Footprint_JP4 />} noSchematicRepresentation={true}/>

    {/* C11: N.C. */}
    <chip name={"C11"} pcbX={13.78} pcbY={-10.325} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"N.C."} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* C28: 22nF */}
    <capacitor name={"C28"} pcbX={27.048782} pcbY={-27.45719} pcbRotation={90} capacitance={"22nF"} footprint={<Footprint_C28 />} schX={-2.8499999999999996} schY={1.6000000000000005} schRotation={90} schSheetName={"Power Supply"}/>

    {/* C33: 470pF */}
    <capacitor name={"C33"} pcbX={29.458157} pcbY={-26.912746} pcbRotation={90} capacitance={"470pF"} footprint={<Footprint_C33 />} schX={3.749999999999999} schY={0.7000000000000002} schRotation={180} schSheetName={"Power Supply"}/>

    {/* C2: 4.7uF */}
    <capacitor name={"C2"} pcbX={16.42} pcbY={9.486111} pcbRotation={0} capacitance={"4.7uF"} footprint={<Footprint_C2 />} schX={3.049999999999999} schY={2.7} schRotation={180} schSheetName={"MCU"}/>

    {/* R16: 1k */}
    <resistor name={"R16"} pcbX={-41.096396} pcbY={23.081799} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R16 />} schX={-0.4500000000000002} schY={0.39999999999999947} schRotation={-90} schSheetName={"Power LED"}/>

    {/* C7: 10uF */}
    <capacitor name={"C7"} pcbX={6} pcbY={9.675} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C7 />} schX={-2.6500000000000004} schY={5} schRotation={-90} schSheetName={"MCU"}/>

    {/* C34: 27pF */}
    <capacitor name={"C34"} pcbX={23.142532} pcbY={-20.068302} pcbRotation={90} capacitance={"27pF"} footprint={<Footprint_C34 />} schX={5.6499999999999995} schY={1} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C31: 22uF */}
    <capacitor name={"C31"} pcbX={17.286811} pcbY={-27.155203} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C31 />} schX={-5.65} schY={-0.39999999999999947} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* S1: TL3336AF160Q */}
    <chip name={"S1"} pcbX={40.025} pcbY={-21.15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"TL3336AF160Q"} displayName={"TL3336AF160Q"} footprint={<Footprint_S1 />} noSchematicRepresentation={true}/>

    {/* C27: 10uF */}
    <capacitor name={"C27"} pcbX={20.9} pcbY={-6.575} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C27 />} schX={2.45} schY={-0.7999999999999989} schRotation={-90} schSheetName={"PMIC"}/>

    {/* R2: 10k */}
    <resistor name={"R2"} pcbX={7} pcbY={12.375} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R2 />} schX={-2.5500000000000007} schY={3.4000000000000004} schRotation={90} schSheetName={"MCU"}/>

    {/* U1: nRF9151-LAXX */}
    <chip name={"U1"} pcbX={20.35} pcbY={16.025} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"], "pin82": ["82"], "pin83": ["83"], "pin84": ["84"], "pin85": ["85"], "pin86": ["86"], "pin87": ["87"], "pin88": ["88"], "pin89": ["89"], "pin90": ["90"], "pin91": ["91"], "pin92": ["92"], "pin93": ["93"], "pin94": ["94"], "pin95": ["95"], "pin96": ["96"], "pin97": ["97"], "pin98": ["98"], "pin99": ["99"], "pin100": ["100"], "pin101": ["101"], "pin102": ["102"], "pin103": ["103"], "pin104": ["104"], "pin105": ["105"], "pin106": ["106"], "pin107": ["107"], "pin108": ["108"], "pin109": ["109"], "pin110": ["110"], "pin111": ["111"], "pin112": ["112"], "pin113": ["113"] }} manufacturerPartNumber={"nRF9151-LACA-R7"} displayName={"nRF9151-LAXX"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* L2: 2.2uH */}
    <inductor name={"L2"} pcbX={13} pcbY={-11.825} pcbRotation={0} inductance={"2.2uH"} footprint={<Footprint_L2 />} schX={1.7500000000000009} schY={0.10000000000000053} schRotation={180} schSheetName={"PMIC"}/>

    {/* R3: 300 */}
    <resistor name={"R3"} pcbX={-40.1} pcbY={15.665} pcbRotation={90} resistance={"300ohm"} footprint={<Footprint_R3 />} schX={-0.7999999999999998} schY={-1.4500000000000002} schRotation={0} schSheetName={"Buzzer"}/>

    {/* R10: DNP */}
    <chip name={"R10"} pcbX={19.319279} pcbY={-23.706346} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R14: 220 */}
    <resistor name={"R14"} pcbX={-31.2} pcbY={28.275} pcbRotation={90} resistance={"220ohm"} footprint={<Footprint_R14 />} schX={-0.9000000000000004} schY={-0.5499999999999998} schRotation={0} schSheetName={"System Controlled LED"}/>

    {/* REF**: MountingHole_2.1mm */}
    <chip name={"REF__"} pcbX={11.9} pcbY={-27.125} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.1mm"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* C4: 100nF */}
    <capacitor name={"C4"} pcbX={16.5} pcbY={-9.725} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C4 />} schX={-1.8499999999999996} schY={2.7} schRotation={180} schSheetName={"PMIC"}/>

    {/* REF**: MountingHole_2.1mm */}
    <chip name={"REF___"} pcbX={31} pcbY={27.275} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.1mm"} footprint={<Footprint_REF___ />} noSchematicRepresentation={true}/>

    {/* R11: 100k */}
    <resistor name={"R11"} pcbX={31.1} pcbY={-26.575} pcbRotation={180} resistance={"100kohm"} footprint={<Footprint_R11 />} schX={3.1499999999999995} schY={0.7000000000000002} schRotation={0} schSheetName={"Power Supply"}/>

    {/* C17: 39pF */}
    <capacitor name={"C17"} pcbX={34.779375} pcbY={17.263889} pcbRotation={0} capacitance={"39pF"} footprint={<Footprint_C17 />} schX={1} schY={1.25} schRotation={90} schSheetName={"Antenna GNSS"}/>

    {/* R7: 250k */}
    <resistor name={"R7"} pcbX={31.05} pcbY={-18.975} pcbRotation={-90} resistance={"250kohm"} footprint={<Footprint_R7 />} schX={-4.45} schY={-2.7} schRotation={0} schSheetName={"PMIC"}/>

    {/* C5: 1.0uF */}
    <capacitor name={"C5"} pcbX={10.1} pcbY={8.975} pcbRotation={0} capacitance={"1.0uF"} footprint={<Footprint_C5 />} schX={-4.8500000000000005} schY={5} schRotation={-90} schSheetName={"MCU"}/>

    {/* C6: 1.0uF */}
    <capacitor name={"C6"} pcbX={7.8} pcbY={9.875} pcbRotation={90} capacitance={"1.0uF"} footprint={<Footprint_C6 />} schX={-3.7500000000000004} schY={5} schRotation={-90} schSheetName={"MCU"}/>

    {/* C35: 1.0uF */}
    <capacitor name={"C35"} pcbX={21.5} pcbY={-22.45} pcbRotation={-90} capacitance={"1.0uF"} footprint={<Footprint_C35 />} schX={2.5500000000000016} schY={0} schRotation={90} schSheetName={"Power Supply"}/>

    {/* C21: 100nF */}
    <capacitor name={"C21"} pcbX={30.4825} pcbY={6.375} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C21 />} schX={4.050000000000001} schY={-5.4} schRotation={-90} schSheetName={"MCU"}/>

    {/* VDD_1V8: VDD_1V8 */}
    <chip name={"VDD_1V8"} pcbX={-29.9} pcbY={-27.725} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"VDD_1V8"} footprint={<Footprint_VDD_1V8 />} noSchematicRepresentation={true}/>

    {/* L1: N.C. */}
    <chip name={"L1"} pcbX={38.6} pcbY={20.275} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"N.C."} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* D3: LED */}
    <chip name={"D3"} pcbX={-41.2} pcbY={20.8625} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"TLMG1100-GS08"} displayName={"LED"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* C26: 10uF */}
    <capacitor name={"C26"} pcbX={18.2} pcbY={-18.825} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C26 />} schX={2.45} schY={0.20000000000000018} schRotation={-90} schSheetName={"PMIC"}/>

    {/* REF**: MountingHole_2.1mm */}
    <chip name={"REF____"} pcbX={-39.7} pcbY={-27.125} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.1mm"} footprint={<Footprint_REF____ />} noSchematicRepresentation={true}/>

    {/* R1: 10k */}
    <resistor name={"R1"} pcbX={24.8} pcbY={-5.625} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R1 />} schX={-0.6500000000000004} schY={0.34999999999999964} schRotation={-90} schSheetName={"Reset Button"}/>

    {/* C20: 100nF */}
    <capacitor name={"C20"} pcbX={-33.3} pcbY={28.275} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C20 />} schX={0.8999999999999995} schY={0.5499999999999998} schRotation={0} schSheetName={"System Controlled LED"}/>

    {/* C3: 1.0uF */}
    <capacitor name={"C3"} pcbX={19} pcbY={-6.2} pcbRotation={-90} capacitance={"1.0uF"} footprint={<Footprint_C3 />} schX={-4.85} schY={2.6000000000000005} schRotation={0} schSheetName={"PMIC"}/>

    {/* L3: 68nH */}
    <inductor name={"L3"} pcbX={36.101939} pcbY={18.67187} pcbRotation={0} inductance={"68nH"} footprint={<Footprint_L3 />} schX={0.20000000000000018} schY={1.25} schRotation={-90} schSheetName={"Antenna GNSS"}/>

    {/* R5: 0 */}
    <resistor name={"R5"} pcbX={-33.29} pcbY={15.375} pcbRotation={180} resistance={"0ohm"} footprint={<Footprint_R5 />} schX={0.2999999999999998} schY={1.4499999999999993} schRotation={90} schSheetName={"Buzzer"}/>

    {/* FB1: 22Ω @ 100MHz */}
    <chip name={"FB1"} pcbX={10.351939} pcbY={11.255203} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"NBQ160808T-220Y-N"} displayName={"22Ω @ 100MHz"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* R4: 0 */}
    <resistor name={"R4"} pcbX={-40} pcbY={18.075} pcbRotation={-90} resistance={"0ohm"} footprint={<Footprint_R4 />} schX={0.2999999999999998} schY={-0.5500000000000007} schRotation={90} schSheetName={"Buzzer"}/>

    {/* J8: GNSS */}
    <chip name={"J8"} pcbX={38.633239} pcbY={25.826781} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["G1"], "pin3": ["G2"], "pin4": ["G3"], "pin5": ["G4"] }} manufacturerPartNumber={"2081679-1"} displayName={"GNSS"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* REF**: MountingHole_2.1mm */}
    <chip name={"REF_____"} pcbX={-39.7} pcbY={27.275} pcbRotation={0} pinLabels={{}} displayName={"MountingHole_2.1mm"} footprint={<Footprint_REF_____ />} noSchematicRepresentation={true}/>

    {/* R8: 0 */}
    <resistor name={"R8"} pcbX={11.683093} pcbY={-7.54392} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R8 />} schX={0.7499999999999991} schY={2.3000000000000007} schRotation={0} schSheetName={"PMIC"}/>

    {/* C1: 10nF */}
    <capacitor name={"C1"} pcbX={-31.78} pcbY={2.175} pcbRotation={0} capacitance={"10nF"} footprint={<Footprint_C1 />} schX={1.0500000000000007} schY={-0.2999999999999998} schRotation={-90} schSheetName={"SIM Socket"}/>

    {/* R13: 12.4k */}
    <resistor name={"R13"} pcbX={28.8} pcbY={-21.125} pcbRotation={180} resistance={"12.4kohm"} footprint={<Footprint_R13 />} schX={4.95} schY={0.10000000000000053} schRotation={90} schSheetName={"Power Supply"}/>

    {/* R18: 4k7 */}
    <resistor name={"R18"} pcbX={13.71} pcbY={-13.425} pcbRotation={0} resistance={"4.7kohm"} footprint={<Footprint_R18 />} schX={-4.75} schY={-1.4999999999999991} schRotation={90} schSheetName={"PMIC"}/>

    {/* C13: 4.7uF */}
    <capacitor name={"C13"} pcbX={29.25125} pcbY={-0.175} pcbRotation={-90} capacitance={"4.7uF"} footprint={<Footprint_C13 />} schX={1.8499999999999996} schY={4.5} schRotation={-90} schSheetName={"MCU"}/>

    {/* L5: 22uH */}
    <inductor name={"L5"} pcbX={20.5125} pcbY={-26.925} pcbRotation={0} inductance={"22uH"} footprint={<Footprint_L5 />} schX={-4.45} schY={0.3000000000000007} schRotation={0} schSheetName={"Power Supply"}/>

    {/* C14: 100nF */}
    <capacitor name={"C14"} pcbX={31.26375} pcbY={-0.236111} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C14 />} schX={2.8499999999999996} schY={4.5} schRotation={-90} schSheetName={"MCU"}/>

    {/* VDD_5V5: VDD_5V_OUT */}
    <chip name={"VDD_5V5"} pcbX={-29.9} pcbY={-24.025} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"VDD_5V_OUT"} footprint={<Footprint_VDD_5V5 />} noSchematicRepresentation={true}/>

    {/* mB2: ~ */}
    <chip name={"mB2"} pcbX={-21.827049} pcbY={-14.54924} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"M20-7820842"} displayName={"~"} footprint={<Footprint_mB2 />} noSchematicRepresentation={true}/>

    {/* R15: 1k */}
    <resistor name={"R15"} pcbX={30.502468} pcbY={7.551635} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R15 />} schX={4.85} schY={-5.1} schRotation={0} schSheetName={"MCU"}/>

    {/* D1: BAT54KFILM */}
    <chip name={"D1"} pcbX={-36.2} pcbY={16.075} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BAT54KFILM"} displayName={"BAT54KFILM"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* L4: 2.2uH */}
    <inductor name={"L4"} pcbX={14.1} pcbY={-7.925} pcbRotation={180} inductance={"2.2uH"} footprint={<Footprint_L4 />} schX={1.7500000000000009} schY={-0.8999999999999995} schRotation={180} schSheetName={"PMIC"}/>

    {/* C9: 10uF */}
    <capacitor name={"C9"} pcbX={25.7} pcbY={-13.425} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C9 />} schX={-0.6500000000000004} schY={2.6000000000000005} schRotation={90} schSheetName={"PMIC"}/>

    {/* mB4: ~ */}
    <chip name={"mB4"} pcbX={-21.8175} pcbY={15.245} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"M20-7820842"} displayName={"~"} footprint={<Footprint_mB4 />} noSchematicRepresentation={true}/>

    {/* U4: nPM1300-QEXX */}
    <chip name={"U4"} pcbX={20.1875} pcbY={-13.125} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} manufacturerPartNumber={"NPM1300-QEAA-R7"} displayName={"nPM1300-QEXX"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* C29: 100nF */}
    <capacitor name={"C29"} pcbX={16.955561} pcbY={-22.549648} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C29 />} schX={-3.45} schY={0.7000000000000002} schRotation={180} schSheetName={"Power Supply"}/>

    {/* R6: 47k */}
    <resistor name={"R6"} pcbX={29.878125} pcbY={-18.975} pcbRotation={90} resistance={"47kohm"} footprint={<Footprint_R6 />} schX={-4.45} schY={-2.499999999999999} schRotation={0} schSheetName={"PMIC"}/>

    {/* J3: Conn_01x03 */}
    <chip name={"J3"} pcbX={-34.965} pcbY={-2.99} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"M20-8770342"} displayName={"Conn_01x03"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* R12: 90.9k */}
    <resistor name={"R12"} pcbX={26.7375} pcbY={-20.508333} pcbRotation={180} resistance={"90.9kohm"} footprint={<Footprint_R12 />} schX={4.95} schY={1} schRotation={90} schSheetName={"Power Supply"}/>

    {/* mB3: ~ */}
    <chip name={"mB3"} pcbX={-14.3175} pcbY={14.585} pcbRotation={-90} pinLabels={{ "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} manufacturerPartNumber={"M20-7820842"} displayName={"~"} footprint={<Footprint_mB3 />} noSchematicRepresentation={true}/>

    {/* C30: 47uF */}
    <capacitor name={"C30"} pcbX={24.8} pcbY={-19.475} pcbRotation={90} capacitance={"47uF"} footprint={<Footprint_C30 />} schX={-4.75} schY={-0.39999999999999947} schRotation={-90} schSheetName={"Power Supply"}/>

    {/* C10: 1.0nF */}
    <capacitor name={"C10"} pcbX={26.2} pcbY={-14.925} pcbRotation={0} capacitance={"1.0nF"} footprint={<Footprint_C10 />} schX={0.04999999999999982} schY={2.6000000000000005} schRotation={90} schSheetName={"PMIC"}/>

    {/* C18: 1.0nF */}
    <capacitor name={"C18"} pcbX={11.4} pcbY={-18.225} pcbRotation={0} capacitance={"1.0nF"} footprint={<Footprint_C18 />} schX={3.1499999999999995} schY={2.6000000000000005} schRotation={90} schSheetName={"PMIC"}/>

    {/* J1: JST_SH_BM03B-SRSS-TB_1x03 */}
    <chip name={"J1"} pcbX={38.6} pcbY={1.425} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["MP"] }} displayName={"JST_SH_BM03B-SRSS-TB_1x03"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* C15: N.C. */}
    <chip name={"C15"} pcbX={41.2} pcbY={20.175} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"N.C."} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* JP1: Current measurement */}
    <chip name={"JP1"} pcbX={-32.3} pcbY={21.075} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"M20-8770242P"} displayName={"Current measurement"} footprint={<Footprint_JP1 />} noSchematicRepresentation={true}/>

    {/* D5: SK6805-EC15 */}
    <chip name={"D5"} pcbX={-33.76} pcbY={26.215} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"SK6805-EC15"} displayName={"SK6805-EC15"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* C25: 1.0nF */}
    <capacitor name={"C25"} pcbX={25.28} pcbY={-11.825} pcbRotation={0} capacitance={"1.0nF"} footprint={<Footprint_C25 />} schX={1.9500000000000002} schY={1.700000000000001} schRotation={0} schSheetName={"PMIC"}/>

    {/* KiCad net: Net-(C16-Pad1) */}
    <KiCadNet name={"Net__C16_Pad1_"} connectsTo={[".C16 > .pin1", ".L1 > .pin2", ".L3 > .pin2", ".J8 > .pin1"]}/>
    {/* KiCad net: /Antenna GNSS/GNSS_ANTENNA */}
    <KiCadNet name={"_Antenna_GNSS_GNSS_ANTENNA"} connectsTo={[".C16 > .pin2", ".U1 > .pin42"]}/>
    {/* KiCad net: Net-(U4-PVDD) */}
    <KiCadNet name={"Net__U4_PVDD_"} connectsTo={[".C19 > .pin1", ".C24 > .pin1", ".C12 > .pin1", ".C11 > .pin1", ".R8 > .pin2", ".U4 > .pin4", ".C18 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C19 > .pin2", ".J5 > .pin1", ".C24 > .pin2", ".C12 > .pin2", ".U3 > .pin9", ".Q1 > .pin2", ".J7 > .pin4", ".J7 > .pin8", ".J7 > .pin9", ".J7 > .pin10", ".C32 > .pin2", ".mB1 > .pin16", ".J9 > .pin2", ".J9 > .pin3", ".J9 > .pin4", ".J9 > .pin5", ".U5 > .pin6", ".U5 > .pin13", ".C8 > .pin2", ".C11 > .pin2", ".C28 > .pin2", ".C33 > .pin1", ".C2 > .pin1", ".C7 > .pin2", ".C31 > .pin2", ".S1 > .pin2", ".C27 > .pin2", ".U1 > .pin1", ".U1 > .pin7", ".U1 > .pin13", ".U1 > .pin15", ".U1 > .pin20", ".U1 > .pin25", ".U1 > .pin30", ".U1 > .pin34", ".U1 > .pin36", ".U1 > .pin38", ".U1 > .pin39", ".U1 > .pin40", ".U1 > .pin41", ".U1 > .pin43", ".U1 > .pin46", ".U1 > .pin51", ".U1 > .pin55", ".U1 > .pin60", ".U1 > .pin66", ".U1 > .pin71", ".U1 > .pin76", ".U1 > .pin105", ".U1 > .pin106", ".U1 > .pin107", ".U1 > .pin108", ".U1 > .pin109", ".U1 > .pin110", ".U1 > .pin111", ".U1 > .pin112", ".U1 > .pin113", ".R10 > .pin2", ".C4 > .pin2", ".C17 > .pin1", ".R7 > .pin1", ".C5 > .pin2", ".C6 > .pin2", ".C35 > .pin1", ".C21 > .pin2", ".D3 > .pin1", ".C26 > .pin2", ".C20 > .pin2", ".C3 > .pin2", ".J8 > .pin2", ".J8 > .pin3", ".J8 > .pin4", ".J8 > .pin5", ".C1 > .pin2", ".R13 > .pin1", ".C13 > .pin2", ".C14 > .pin2", ".mB2 > .pin1", ".C9 > .pin2", ".mB4 > .pin1", ".U4 > .pin2", ".U4 > .pin6", ".U4 > .pin33", ".R6 > .pin1", ".J3 > .pin1", ".mB3 > .pin16", ".C30 > .pin2", ".C10 > .pin2", ".C18 > .pin2", ".J1 > .pin2", ".C15 > .pin1", ".D5 > .pin2", ".C25 > .pin2"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".LS1 > .pin1", ".R4 > .pin2", ".D1 > .pin2"]}/>
    {/* KiCad net: Net-(D1-A) */}
    <KiCadNet name={"Net__D1_A_"} connectsTo={[".LS1 > .pin2", ".R5 > .pin1", ".D1 > .pin1"]}/>
    {/* KiCad net: Net-(J5-VIN) */}
    <KiCadNet name={"Net__J5_VIN_"} connectsTo={[".J5 > .pin2", ".C32 > .pin1", ".U5 > .pin4", ".U5 > .pin7"]}/>
    {/* KiCad net: VDD_GNSS */}
    <KiCadNet name={"VDD_GNSS"} connectsTo={[".JP3 > .pin1", ".VDD_GNSS1 > .pin1", ".C17 > .pin2", ".L3 > .pin1", ".U4 > .pin29"]}/>
    {/* KiCad net: VDD_3V3 */}
    <KiCadNet name={"VDD_3V3"} connectsTo={[".JP3 > .pin2", ".VDD_3V3 > .pin1", ".mB1 > .pin15", ".R17 > .pin2", ".JP4 > .pin2", ".C27 > .pin1", ".U1 > .pin65", ".C4 > .pin1", ".R1 > .pin1", ".R18 > .pin2", ".C13 > .pin1", ".C14 > .pin1", ".L4 > .pin1", ".U4 > .pin12", ".U4 > .pin28", ".U4 > .pin30", ".U4 > .pin32", ".mB3 > .pin15"]}/>
    {/* KiCad net: Net-(J7-RST) */}
    <KiCadNet name={"Net__J7_RST_"} connectsTo={[".U3 > .pin1", ".J7 > .pin2"]}/>
    {/* KiCad net: Net-(J7-CLK) */}
    <KiCadNet name={"Net__J7_CLK_"} connectsTo={[".U3 > .pin2", ".J7 > .pin3"]}/>
    {/* KiCad net: Net-(J7-I{slash}O) */}
    <KiCadNet name={"Net__J7_I_slash_O_"} connectsTo={[".U3 > .pin3", ".J7 > .pin6"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad4) */}
    <KiCadNet name={"unconnected__U3_NC_Pad4_"} connectsTo={[".U3 > .pin4"]}/>
    {/* KiCad net: /MCU/SIM_1V8 */}
    <KiCadNet name={"_MCU_SIM_1V8"} connectsTo={[".U3 > .pin5", ".J7 > .pin1", ".U1 > .pin19", ".C1 > .pin1"]}/>
    {/* KiCad net: /MCU/SIM_IO */}
    <KiCadNet name={"_MCU_SIM_IO"} connectsTo={[".U3 > .pin6", ".U1 > .pin17"]}/>
    {/* KiCad net: /MCU/SIM_CLK */}
    <KiCadNet name={"_MCU_SIM_CLK"} connectsTo={[".U3 > .pin7", ".U1 > .pin18"]}/>
    {/* KiCad net: /MCU/SIM_RST */}
    <KiCadNet name={"_MCU_SIM_RST"} connectsTo={[".U3 > .pin8", ".U1 > .pin16"]}/>
    {/* KiCad net: Net-(Q1-Pad1) */}
    <KiCadNet name={"Net__Q1_Pad1_"} connectsTo={[".Q1 > .pin1", ".R3 > .pin2"]}/>
    {/* KiCad net: Net-(Q1-Pad3) */}
    <KiCadNet name={"Net__Q1_Pad3_"} connectsTo={[".Q1 > .pin3", ".R4 > .pin1"]}/>
    {/* KiCad net: unconnected-(J7-VPP-PadC6) */}
    <KiCadNet name={"unconnected__J7_VPP_PadC6_"} connectsTo={[".J7 > .pin5"]}/>
    {/* KiCad net: unconnected-(J7-PadS{slash}W) */}
    <KiCadNet name={"unconnected__J7_PadS_slash_W_"} connectsTo={[".J7 > .pin7"]}/>
    {/* KiCad net: /MCU/AN2 */}
    <KiCadNet name={"_MCU_AN2"} connectsTo={[".mB1 > .pin9", ".U1 > .pin74"]}/>
    {/* KiCad net: /MCU/RST2 */}
    <KiCadNet name={"_MCU_RST2"} connectsTo={[".mB1 > .pin10", ".U1 > .pin58"]}/>
    {/* KiCad net: /MCU/CS2 */}
    <KiCadNet name={"_MCU_CS2"} connectsTo={[".mB1 > .pin11", ".U1 > .pin56"]}/>
    {/* KiCad net: /MCU/SPI_SCK2 */}
    <KiCadNet name={"_MCU_SPI_SCK2"} connectsTo={[".mB1 > .pin12", ".U1 > .pin63"]}/>
    {/* KiCad net: /MCU/SPI_MISO2 */}
    <KiCadNet name={"_MCU_SPI_MISO2"} connectsTo={[".mB1 > .pin13", ".U1 > .pin62"]}/>
    {/* KiCad net: /MCU/SPI_MOSI2 */}
    <KiCadNet name={"_MCU_SPI_MOSI2"} connectsTo={[".mB1 > .pin14", ".U1 > .pin61"]}/>
    {/* KiCad net: /MCU/SDA */}
    <KiCadNet name={"_MCU_SDA"} connectsTo={[".R17 > .pin1", ".U1 > .pin49", ".U4 > .pin13"]}/>
    {/* KiCad net: /Antenna LTE/LTE_ANTENNA */}
    <KiCadNet name={"_Antenna_LTE_LTE_ANTENNA"} connectsTo={[".J9 > .pin1", ".U1 > .pin35"]}/>
    {/* KiCad net: Net-(U5-SS) */}
    <KiCadNet name={"Net__U5_SS_"} connectsTo={[".U5 > .pin1", ".C28 > .pin1"]}/>
    {/* KiCad net: unconnected-(U5-SYNC-Pad2) */}
    <KiCadNet name={"unconnected__U5_SYNC_Pad2_"} connectsTo={[".U5 > .pin2"]}/>
    {/* KiCad net: Net-(U5-BOOT) */}
    <KiCadNet name={"Net__U5_BOOT_"} connectsTo={[".U5 > .pin3", ".C29 > .pin1"]}/>
    {/* KiCad net: Net-(U5-PHASE) */}
    <KiCadNet name={"Net__U5_PHASE_"} connectsTo={[".U5 > .pin5", ".L5 > .pin2", ".C29 > .pin2"]}/>
    {/* KiCad net: unconnected-(U5-PG-Pad8) */}
    <KiCadNet name={"unconnected__U5_PG_Pad8_"} connectsTo={[".U5 > .pin8"]}/>
    {/* KiCad net: Net-(U5-FS) */}
    <KiCadNet name={"Net__U5_FS_"} connectsTo={[".U5 > .pin9", ".U5 > .pin12", ".R10 > .pin1", ".C35 > .pin2"]}/>
    {/* KiCad net: Net-(U5-FB) */}
    <KiCadNet name={"Net__U5_FB_"} connectsTo={[".U5 > .pin10", ".C34 > .pin2", ".R13 > .pin2", ".R12 > .pin1"]}/>
    {/* KiCad net: Net-(U5-COMP) */}
    <KiCadNet name={"Net__U5_COMP_"} connectsTo={[".U5 > .pin11", ".R11 > .pin1"]}/>
    {/* KiCad net: Net-(JP1-B) */}
    <KiCadNet name={"Net__JP1_B_"} connectsTo={[".C8 > .pin1", ".FB1 > .pin2", ".JP1 > .pin2"]}/>
    {/* KiCad net: VDD_POWER_LED */}
    <KiCadNet name={"VDD_POWER_LED"} connectsTo={[".JP4 > .pin1", ".R16 > .pin1", ".U4 > .pin31"]}/>
    {/* KiCad net: Net-(C33-Pad2) */}
    <KiCadNet name={"Net__C33_Pad2_"} connectsTo={[".C33 > .pin2", ".R11 > .pin2"]}/>
    {/* KiCad net: Net-(U1-DEC0) */}
    <KiCadNet name={"Net__U1_DEC0_"} connectsTo={[".C2 > .pin2", ".U1 > .pin24"]}/>
    {/* KiCad net: Net-(D3-A) */}
    <KiCadNet name={"Net__D3_A_"} connectsTo={[".R16 > .pin2", ".D3 > .pin2"]}/>
    {/* KiCad net: VDD_5V */}
    <KiCadNet name={"VDD_5V"} connectsTo={[".C7 > .pin1", ".C34 > .pin1", ".C31 > .pin1", ".C5 > .pin1", ".C6 > .pin1", ".C20 > .pin1", ".C3 > .pin1", ".R5 > .pin2", ".FB1 > .pin1", ".L5 > .pin1", ".VDD_5V5 > .pin1", ".mB2 > .pin2", ".mB4 > .pin2", ".U4 > .pin21", ".R12 > .pin2", ".C30 > .pin1", ".D5 > .pin4"]}/>
    {/* KiCad net: /MCU/nRESET */}
    <KiCadNet name={"_MCU_nRESET"} connectsTo={[".S1 > .pin1", ".R1 > .pin2", ".R15 > .pin2"]}/>
    {/* KiCad net: Net-(U1-ENABLE) */}
    <KiCadNet name={"Net__U1_ENABLE_"} connectsTo={[".R2 > .pin1", ".U1 > .pin10"]}/>
    {/* KiCad net: Net-(JP1-A) */}
    <KiCadNet name={"Net__JP1_A_"} connectsTo={[".R2 > .pin2", ".U1 > .pin14", ".JP1 > .pin1"]}/>
    {/* KiCad net: /MCU/AN1 */}
    <KiCadNet name={"_MCU_AN1"} connectsTo={[".U1 > .pin2", ".mB3 > .pin9"]}/>
    {/* KiCad net: /JST-SH Contact/SWCLK */}
    <KiCadNet name={"_JST_SH_Contact_SWCLK"} connectsTo={[".U1 > .pin3", ".J1 > .pin1"]}/>
    {/* KiCad net: /JST-SH Contact/SWDIO */}
    <KiCadNet name={"_JST_SH_Contact_SWDIO"} connectsTo={[".U1 > .pin4", ".J1 > .pin3"]}/>
    {/* KiCad net: /MCU/SPI_MOSI1 */}
    <KiCadNet name={"_MCU_SPI_MOSI1"} connectsTo={[".U1 > .pin5", ".mB3 > .pin14"]}/>
    {/* KiCad net: /MCU/I2C_SDA1 */}
    <KiCadNet name={"_MCU_I2C_SDA1"} connectsTo={[".U1 > .pin6", ".mB4 > .pin3"]}/>
    {/* KiCad net: /MCU/I2C_SCL1 */}
    <KiCadNet name={"_MCU_I2C_SCL1"} connectsTo={[".U1 > .pin8", ".mB4 > .pin4"]}/>
    {/* KiCad net: Net-(U1-~{RESET}) */}
    <KiCadNet name={"Net__U1___RESET__"} connectsTo={[".U1 > .pin9", ".C21 > .pin1", ".R15 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-P0.24{slash}TRACEDATA2-Pad11) */}
    <KiCadNet name={"unconnected__U1_P0_24_slash_TRACEDATA2_Pad11_"} connectsTo={[".U1 > .pin11"]}/>
    {/* KiCad net: unconnected-(U1-P0.25{slash}TRACEDATA3-Pad12) */}
    <KiCadNet name={"unconnected__U1_P0_25_slash_TRACEDATA3_Pad12_"} connectsTo={[".U1 > .pin12"]}/>
    {/* KiCad net: unconnected-(U1-MAGPIO0-Pad21) */}
    <KiCadNet name={"unconnected__U1_MAGPIO0_Pad21_"} connectsTo={[".U1 > .pin21"]}/>
    {/* KiCad net: unconnected-(U1-MAGPIO1-Pad22) */}
    <KiCadNet name={"unconnected__U1_MAGPIO1_Pad22_"} connectsTo={[".U1 > .pin22"]}/>
    {/* KiCad net: unconnected-(U1-MAGPIO2-Pad23) */}
    <KiCadNet name={"unconnected__U1_MAGPIO2_Pad23_"} connectsTo={[".U1 > .pin23"]}/>
    {/* KiCad net: unconnected-(U1-SIM_DET-Pad26) */}
    <KiCadNet name={"unconnected__U1_SIM_DET_Pad26_"} connectsTo={[".U1 > .pin26"]}/>
    {/* KiCad net: unconnected-(U1-SDATA-Pad27) */}
    <KiCadNet name={"unconnected__U1_SDATA_Pad27_"} connectsTo={[".U1 > .pin27"]}/>
    {/* KiCad net: unconnected-(U1-SCLK-Pad28) */}
    <KiCadNet name={"unconnected__U1_SCLK_Pad28_"} connectsTo={[".U1 > .pin28"]}/>
    {/* KiCad net: unconnected-(U1-VIO-Pad29) */}
    <KiCadNet name={"unconnected__U1_VIO_Pad29_"} connectsTo={[".U1 > .pin29"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad31) */}
    <KiCadNet name={"unconnected__U1_NC_Pad31_"} connectsTo={[".U1 > .pin31"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad32) */}
    <KiCadNet name={"unconnected__U1_NC_Pad32_"} connectsTo={[".U1 > .pin32"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad33) */}
    <KiCadNet name={"unconnected__U1_NC_Pad33_"} connectsTo={[".U1 > .pin33"]}/>
    {/* KiCad net: unconnected-(U1-AUX-Pad37) */}
    <KiCadNet name={"unconnected__U1_AUX_Pad37_"} connectsTo={[".U1 > .pin37"]}/>
    {/* KiCad net: /MCU/UART_RX */}
    <KiCadNet name={"_MCU_UART_RX"} connectsTo={[".U1 > .pin44", ".J3 > .pin3"]}/>
    {/* KiCad net: /MCU/UART_TX */}
    <KiCadNet name={"_MCU_UART_TX"} connectsTo={[".U1 > .pin45", ".J3 > .pin2"]}/>
    {/* KiCad net: /MCU/SPI_MISO1 */}
    <KiCadNet name={"_MCU_SPI_MISO1"} connectsTo={[".U1 > .pin47", ".mB3 > .pin13"]}/>
    {/* KiCad net: /MCU/SPI_SCK1 */}
    <KiCadNet name={"_MCU_SPI_SCK1"} connectsTo={[".U1 > .pin48", ".mB3 > .pin12"]}/>
    {/* KiCad net: /MCU/SCL */}
    <KiCadNet name={"_MCU_SCL"} connectsTo={[".U1 > .pin50", ".R18 > .pin1", ".U4 > .pin14"]}/>
    {/* KiCad net: unconnected-(U1-COEX0-Pad52) */}
    <KiCadNet name={"unconnected__U1_COEX0_Pad52_"} connectsTo={[".U1 > .pin52"]}/>
    {/* KiCad net: unconnected-(U1-COEX1-Pad53) */}
    <KiCadNet name={"unconnected__U1_COEX1_Pad53_"} connectsTo={[".U1 > .pin53"]}/>
    {/* KiCad net: unconnected-(U1-COEX2-Pad54) */}
    <KiCadNet name={"unconnected__U1_COEX2_Pad54_"} connectsTo={[".U1 > .pin54"]}/>
    {/* KiCad net: /MCU/INT2 */}
    <KiCadNet name={"_MCU_INT2"} connectsTo={[".U1 > .pin57", ".mB2 > .pin7"]}/>
    {/* KiCad net: /MCU/PWM2 */}
    <KiCadNet name={"_MCU_PWM2"} connectsTo={[".U1 > .pin59", ".mB2 > .pin8"]}/>
    {/* KiCad net: /MCU/CS1 */}
    <KiCadNet name={"_MCU_CS1"} connectsTo={[".U1 > .pin64", ".mB3 > .pin11"]}/>
    {/* KiCad net: /MCU/I2C_SCL2 */}
    <KiCadNet name={"_MCU_I2C_SCL2"} connectsTo={[".U1 > .pin67", ".mB2 > .pin4"]}/>
    {/* KiCad net: /MCU/I2C_SDA2 */}
    <KiCadNet name={"_MCU_I2C_SDA2"} connectsTo={[".U1 > .pin68", ".mB2 > .pin3"]}/>
    {/* KiCad net: /MCU/UART_TX2 */}
    <KiCadNet name={"_MCU_UART_TX2"} connectsTo={[".U1 > .pin69", ".mB2 > .pin6"]}/>
    {/* KiCad net: /MCU/UART_RX2 */}
    <KiCadNet name={"_MCU_UART_RX2"} connectsTo={[".U1 > .pin70", ".mB2 > .pin5"]}/>
    {/* KiCad net: /MCU/UART_TX1 */}
    <KiCadNet name={"_MCU_UART_TX1"} connectsTo={[".U1 > .pin72", ".mB4 > .pin6"]}/>
    {/* KiCad net: /MCU/UART_RX1 */}
    <KiCadNet name={"_MCU_UART_RX1"} connectsTo={[".U1 > .pin73", ".mB4 > .pin5"]}/>
    {/* KiCad net: /MCU/INT1 */}
    <KiCadNet name={"_MCU_INT1"} connectsTo={[".U1 > .pin75", ".mB4 > .pin7"]}/>
    {/* KiCad net: /MCU/RST1 */}
    <KiCadNet name={"_MCU_RST1"} connectsTo={[".U1 > .pin77", ".mB3 > .pin10"]}/>
    {/* KiCad net: /MCU/PWM1 */}
    <KiCadNet name={"_MCU_PWM1"} connectsTo={[".U1 > .pin78", ".mB4 > .pin8"]}/>
    {/* KiCad net: /MCU/SYSTEM_LED */}
    <KiCadNet name={"_MCU_SYSTEM_LED"} connectsTo={[".U1 > .pin79", ".R14 > .pin1"]}/>
    {/* KiCad net: /Buzzer/BUZZER */}
    <KiCadNet name={"_Buzzer_BUZZER"} connectsTo={[".U1 > .pin80", ".R3 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad81) */}
    <KiCadNet name={"unconnected__U1_NC_Pad81_"} connectsTo={[".U1 > .pin81"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad82) */}
    <KiCadNet name={"unconnected__U1_NC_Pad82_"} connectsTo={[".U1 > .pin82"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad83) */}
    <KiCadNet name={"unconnected__U1_NC_Pad83_"} connectsTo={[".U1 > .pin83"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad84) */}
    <KiCadNet name={"unconnected__U1_NC_Pad84_"} connectsTo={[".U1 > .pin84"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad85) */}
    <KiCadNet name={"unconnected__U1_NC_Pad85_"} connectsTo={[".U1 > .pin85"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad86) */}
    <KiCadNet name={"unconnected__U1_NC_Pad86_"} connectsTo={[".U1 > .pin86"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad87) */}
    <KiCadNet name={"unconnected__U1_NC_Pad87_"} connectsTo={[".U1 > .pin87"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad88) */}
    <KiCadNet name={"unconnected__U1_NC_Pad88_"} connectsTo={[".U1 > .pin88"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad89) */}
    <KiCadNet name={"unconnected__U1_NC_Pad89_"} connectsTo={[".U1 > .pin89"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad90) */}
    <KiCadNet name={"unconnected__U1_NC_Pad90_"} connectsTo={[".U1 > .pin90"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad91) */}
    <KiCadNet name={"unconnected__U1_NC_Pad91_"} connectsTo={[".U1 > .pin91"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad92) */}
    <KiCadNet name={"unconnected__U1_NC_Pad92_"} connectsTo={[".U1 > .pin92"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad93) */}
    <KiCadNet name={"unconnected__U1_NC_Pad93_"} connectsTo={[".U1 > .pin93"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad94) */}
    <KiCadNet name={"unconnected__U1_NC_Pad94_"} connectsTo={[".U1 > .pin94"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad95) */}
    <KiCadNet name={"unconnected__U1_NC_Pad95_"} connectsTo={[".U1 > .pin95"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad96) */}
    <KiCadNet name={"unconnected__U1_NC_Pad96_"} connectsTo={[".U1 > .pin96"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad97) */}
    <KiCadNet name={"unconnected__U1_NC_Pad97_"} connectsTo={[".U1 > .pin97"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad98) */}
    <KiCadNet name={"unconnected__U1_NC_Pad98_"} connectsTo={[".U1 > .pin98"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad99) */}
    <KiCadNet name={"unconnected__U1_NC_Pad99_"} connectsTo={[".U1 > .pin99"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad100) */}
    <KiCadNet name={"unconnected__U1_NC_Pad100_"} connectsTo={[".U1 > .pin100"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad101) */}
    <KiCadNet name={"unconnected__U1_NC_Pad101_"} connectsTo={[".U1 > .pin101"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad102) */}
    <KiCadNet name={"unconnected__U1_NC_Pad102_"} connectsTo={[".U1 > .pin102"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad103) */}
    <KiCadNet name={"unconnected__U1_NC_Pad103_"} connectsTo={[".U1 > .pin103"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad104) */}
    <KiCadNet name={"unconnected__U1_NC_Pad104_"} connectsTo={[".U1 > .pin104"]}/>
    {/* KiCad net: VDD_1V8 */}
    <KiCadNet name={"VDD_1V8"} connectsTo={[".L2 > .pin1", ".VDD_1V8 > .pin1", ".C26 > .pin1", ".U4 > .pin1"]}/>
    {/* KiCad net: Net-(U4-SW1) */}
    <KiCadNet name={"Net__U4_SW1_"} connectsTo={[".L2 > .pin2", ".U4 > .pin3"]}/>
    {/* KiCad net: Net-(D5-DIN) */}
    <KiCadNet name={"Net__D5_DIN_"} connectsTo={[".R14 > .pin2", ".D5 > .pin3"]}/>
    {/* KiCad net: Net-(U4-VSET2) */}
    <KiCadNet name={"Net__U4_VSET2_"} connectsTo={[".R7 > .pin2", ".U4 > .pin16"]}/>
    {/* KiCad net: Net-(C15-Pad2) */}
    <KiCadNet name={"Net__C15_Pad2_"} connectsTo={[".L1 > .pin1", ".C15 > .pin2"]}/>
    {/* KiCad net: Net-(U4-VSYS) */}
    <KiCadNet name={"Net__U4_VSYS_"} connectsTo={[".R8 > .pin1", ".C9 > .pin1", ".U4 > .pin20", ".C10 > .pin1"]}/>
    {/* KiCad net: Net-(U4-SW2) */}
    <KiCadNet name={"Net__U4_SW2_"} connectsTo={[".L4 > .pin2", ".U4 > .pin5"]}/>
    {/* KiCad net: unconnected-(U4-GPIO0-Pad7) */}
    <KiCadNet name={"unconnected__U4_GPIO0_Pad7_"} connectsTo={[".U4 > .pin7"]}/>
    {/* KiCad net: unconnected-(U4-GPIO1-Pad8) */}
    <KiCadNet name={"unconnected__U4_GPIO1_Pad8_"} connectsTo={[".U4 > .pin8"]}/>
    {/* KiCad net: unconnected-(U4-GPIO2-Pad9) */}
    <KiCadNet name={"unconnected__U4_GPIO2_Pad9_"} connectsTo={[".U4 > .pin9"]}/>
    {/* KiCad net: unconnected-(U4-GPIO3-Pad10) */}
    <KiCadNet name={"unconnected__U4_GPIO3_Pad10_"} connectsTo={[".U4 > .pin10"]}/>
    {/* KiCad net: unconnected-(U4-GPIO4-Pad11) */}
    <KiCadNet name={"unconnected__U4_GPIO4_Pad11_"} connectsTo={[".U4 > .pin11"]}/>
    {/* KiCad net: unconnected-(U4-SHPHLD-Pad15) */}
    <KiCadNet name={"unconnected__U4_SHPHLD_Pad15_"} connectsTo={[".U4 > .pin15"]}/>
    {/* KiCad net: Net-(U4-VSET1) */}
    <KiCadNet name={"Net__U4_VSET1_"} connectsTo={[".U4 > .pin17", ".R6 > .pin2"]}/>
    {/* KiCad net: unconnected-(U4-NTC-Pad18) */}
    <KiCadNet name={"unconnected__U4_NTC_Pad18_"} connectsTo={[".U4 > .pin18"]}/>
    {/* KiCad net: unconnected-(U4-VBAT-Pad19) */}
    <KiCadNet name={"unconnected__U4_VBAT_Pad19_"} connectsTo={[".U4 > .pin19"]}/>
    {/* KiCad net: Net-(U4-VBUSOUT) */}
    <KiCadNet name={"Net__U4_VBUSOUT_"} connectsTo={[".U4 > .pin22", ".C25 > .pin1"]}/>
    {/* KiCad net: unconnected-(U4-CC1-Pad23) */}
    <KiCadNet name={"unconnected__U4_CC1_Pad23_"} connectsTo={[".U4 > .pin23"]}/>
    {/* KiCad net: unconnected-(U4-CC2-Pad24) */}
    <KiCadNet name={"unconnected__U4_CC2_Pad24_"} connectsTo={[".U4 > .pin24"]}/>
    {/* KiCad net: unconnected-(U4-LED0-Pad25) */}
    <KiCadNet name={"unconnected__U4_LED0_Pad25_"} connectsTo={[".U4 > .pin25"]}/>
    {/* KiCad net: unconnected-(U4-LED1-Pad26) */}
    <KiCadNet name={"unconnected__U4_LED1_Pad26_"} connectsTo={[".U4 > .pin26"]}/>
    {/* KiCad net: unconnected-(U4-LED2-Pad27) */}
    <KiCadNet name={"unconnected__U4_LED2_Pad27_"} connectsTo={[".U4 > .pin27"]}/>
    {/* KiCad net: unconnected-(D5-DOUT-Pad1) */}
    <KiCadNet name={"unconnected__D5_DOUT_Pad1_"} connectsTo={[".D5 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
