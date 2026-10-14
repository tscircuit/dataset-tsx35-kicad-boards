import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro CM4 baseboard LVDS adapter
// Source: https://github.com/antmicro/cm4-baseboard-lvds-adapter
// Commit: 4af945ed558e58e4b8aea6fe909fc33d78b63f6f; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_R21, Footprint_R1, Footprint_R46, Footprint_D11, Footprint_R3, Footprint_J1, Footprint_R47, Footprint_R10, Footprint_R11, Footprint_C12, Footprint_R43, Footprint_R8, Footprint_R33, Footprint_D8, Footprint_R19, Footprint_R22, Footprint_R40, Footprint_C9, Footprint_TP18, Footprint_R18, Footprint_C44, Footprint_C47, Footprint_R32, Footprint_R45, Footprint_C8, Footprint_TP16, Footprint_R52, Footprint_C42, Footprint_REF__, Footprint_D2, Footprint_TP19, Footprint_TP3, Footprint_R38, Footprint_C15, Footprint_MP1, Footprint_C45, Footprint_C10, Footprint_D5, Footprint_R41, Footprint_R42, Footprint_C13, Footprint_R44, Footprint_TP1, Footprint_C6, Footprint_R2, Footprint_D1, Footprint_TP11, Footprint_C7, Footprint_R9, Footprint_C49, Footprint_REF___, Footprint_R51, Footprint_R20, Footprint_C11, Footprint_FB1, Footprint_R49, Footprint_TP2, Footprint_C37, Footprint_R27, Footprint_R28, Footprint_TP9, Footprint_D9, Footprint_U6, Footprint_C21, Footprint_C1, Footprint_D4, Footprint_R26, Footprint_U4, Footprint_R4, Footprint_R30, Footprint_C23, Footprint_Q4, Footprint_C28, Footprint_C18, Footprint_C17, Footprint_TP13, Footprint_R48, Footprint_R39, Footprint_C29, Footprint_R15, Footprint_U2, Footprint_R13, Footprint_R50, Footprint_R37, Footprint_D3, Footprint_C38, Footprint_C35, Footprint_D10, Footprint_TP21, Footprint_D7, Footprint_R25, Footprint_Q6, Footprint_C36, Footprint_J2, Footprint_TP8, Footprint_R34, Footprint_C22, Footprint_R14, Footprint_R24, Footprint_C26, Footprint_R23, Footprint_TP20, Footprint_TP10, Footprint_TP7, Footprint_J3, Footprint_C40, Footprint_C3, Footprint_D6, Footprint_R12, Footprint_TP23, Footprint_C30, Footprint_L1, Footprint_C33, Footprint_TP4, Footprint_Q7, Footprint_R6, Footprint_U1, Footprint_U5, Footprint_C4, Footprint_U3, Footprint_C5, Footprint_TP15, Footprint_C31, Footprint_C32, Footprint_TP17, Footprint_TP12, Footprint_C25, Footprint_Q8, Footprint_R17, Footprint_R29, Footprint_R5, Footprint_C2, Footprint_TP14, Footprint_TP22, Footprint_Q3, Footprint_R7, Footprint_C46, Footprint_R31, Footprint_C24, Footprint_C39, Footprint_R36, Footprint_R35, Footprint_C20, Footprint_Q2, Footprint_C27, Footprint_C43, Footprint_L2, Footprint_C16, Footprint_Q1, Footprint_C34, Footprint_TP6, Footprint_Q5, Footprint_R16, Footprint_C14, Footprint_C41 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={52} height={43} thickness={1.63} layers={6} outline={[{ "x": -26, "y": 21.5 }, { "x": -26, "y": -21.5 }, { "x": 26, "y": -21.5 }, { "x": 26, "y": 21.5 }, { "x": -26, "y": 21.5 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* R21: R_1k5_0402 */}
    <chip name={"R21"} pcbX={22.53} pcbY={-17.38} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1501GLF"} displayName={"R_1k5_0402"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* R1: R_470R_0402 */}
    <chip name={"R1"} pcbX={19.59} pcbY={-17.38} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* R46: R_0R_0402 */}
    <chip name={"R46"} pcbX={-23.9075} pcbY={12.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R46 />} noSchematicRepresentation={true}/>

    {/* D11: LED_G_0603_KP-1608ZGC */}
    <chip name={"D11"} pcbX={22.53} pcbY={-19.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* R3: R_100R_0402 */}
    <chip name={"R3"} pcbX={18.12} pcbY={-17.38} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1000GLF"} displayName={"R_100R_0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* J1: Plug_Molex_SlimStack_2x20_556500488 */}
    <chip name={"J1"} pcbX={3.2} pcbY={-1.946} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["MP"] }} manufacturerPartNumber={"556500488"} displayName={"Plug_Molex_SlimStack_2x20_556500488"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* R47: R_10k_0402 */}
    <chip name={"R47"} pcbX={8.7} pcbY={-3.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R47 />} noSchematicRepresentation={true}/>

    {/* R10: R_100k_0402 */}
    <chip name={"R10"} pcbX={11.15} pcbY={0.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R11: R_100k_0402 */}
    <chip name={"R11"} pcbX={13.168} pcbY={-1.85} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* C12: C_10n_0402 */}
    <chip name={"C12"} pcbX={-15.38} pcbY={0.82} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* R43: R_0R_0402 */}
    <chip name={"R43"} pcbX={-23.9} pcbY={10.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R43 />} noSchematicRepresentation={true}/>

    {/* R8: R_10k_0402 */}
    <chip name={"R8"} pcbX={-6.53} pcbY={-7.38} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* R33: R_100k_0402 */}
    <chip name={"R33"} pcbX={22.2} pcbY={3.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R33 />} noSchematicRepresentation={true}/>

    {/* D8: LED_G_0603_KP-1608ZGC */}
    <chip name={"D8"} pcbX={16.65} pcbY={-19.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* R19: R_590k_0402 */}
    <chip name={"R19"} pcbX={22.95} pcbY={-8.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RC0402FR-07590KL"} displayName={"R_590k_0402"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* R22: R_0R_0402 */}
    <chip name={"R22"} pcbX={22.965} pcbY={-12.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* R40: R_10k_0402 */}
    <chip name={"R40"} pcbX={-21.9} pcbY={9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R40 />} noSchematicRepresentation={true}/>

    {/* C9: C_100n_0402 */}
    <chip name={"C9"} pcbX={-15.38} pcbY={-0.28} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* TP18: TP_0.75mm_SMD */}
    <chip name={"TP18"} pcbX={22.55} pcbY={-15.97} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP18 />} noSchematicRepresentation={true}/>

    {/* R18: R_1M_0402 */}
    <chip name={"R18"} pcbX={22.95} pcbY={-7.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1004GLF"} displayName={"R_1M_0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* C44: C_100n_0402 */}
    <chip name={"C44"} pcbX={-10.4} pcbY={16.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C44 />} noSchematicRepresentation={true}/>

    {/* C47: C_100n_0402 */}
    <chip name={"C47"} pcbX={2.65} pcbY={16.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C47 />} noSchematicRepresentation={true}/>

    {/* R32: R_510k_0402 */}
    <chip name={"R32"} pcbX={22.2} pcbY={2.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-5103GLF"} displayName={"R_510k_0402"} footprint={<Footprint_R32 />} noSchematicRepresentation={true}/>

    {/* R45: R_10k_0402 */}
    <chip name={"R45"} pcbX={-21.8925} pcbY={12.3} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R45 />} noSchematicRepresentation={true}/>

    {/* C8: C_100n_0402 */}
    <chip name={"C8"} pcbX={-9.98} pcbY={1.295} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* TP16: TP_0.75mm_SMD */}
    <chip name={"TP16"} pcbX={16.65} pcbY={-15.96} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* R52: R_0R_0402 */}
    <chip name={"R52"} pcbX={-17.4} pcbY={-17.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R52 />} noSchematicRepresentation={true}/>

    {/* C42: C_100n_0402 */}
    <chip name={"C42"} pcbX={-14.85} pcbY={16.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C42 />} noSchematicRepresentation={true}/>

    {/* REF**: LOGO */}
    <chip name={"REF__"} pcbX={-2.35} pcbY={-16.9} pcbRotation={0} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* D2: LED_G_0603_KP-1608ZGC */}
    <chip name={"D2"} pcbX={18.12} pcbY={-19.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* TP19: TP_0.75mm_SMD */}
    <chip name={"TP19"} pcbX={23.75} pcbY={-20.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP19 />} noSchematicRepresentation={true}/>

    {/* TP3: TP_0.75mm_SMD */}
    <chip name={"TP3"} pcbX={18.12} pcbY={-15.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* R38: R_470R_0402 */}
    <chip name={"R38"} pcbX={16.65} pcbY={-17.38} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R38 />} noSchematicRepresentation={true}/>

    {/* C15: C_10u_0402 */}
    <chip name={"C15"} pcbX={13.134} pcbY={-0.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* MP1: MP_Pad6mm_Drill3mm */}
    <chip name={"MP1"} pcbX={-22.75} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MP_Pad6mm_Drill3mm"} footprint={<Footprint_MP1 />} noSchematicRepresentation={true}/>

    {/* C45: C_100n_0402 */}
    <chip name={"C45"} pcbX={3.75} pcbY={16.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C45 />} noSchematicRepresentation={true}/>

    {/* C10: C_100n_0402 */}
    <chip name={"C10"} pcbX={-14.905} pcbY={-6.13} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* D5: LED_G_0603_KP-1608ZGC */}
    <chip name={"D5"} pcbX={21.06} pcbY={-19.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* R41: R_0R_0402 */}
    <chip name={"R41"} pcbX={-23.9} pcbY={9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R41 />} noSchematicRepresentation={true}/>

    {/* R42: R_10k_0402 */}
    <chip name={"R42"} pcbX={-21.9} pcbY={10.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R42 />} noSchematicRepresentation={true}/>

    {/* C13: C_10n_0402 */}
    <chip name={"C13"} pcbX={-8.5} pcbY={-3.97} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C13 />} noSchematicRepresentation={true}/>

    {/* R44: R_100k_0402 */}
    <chip name={"R44"} pcbX={11.15} pcbY={-1.8} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R44 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_0.75mm_SMD */}
    <chip name={"TP1"} pcbX={19.58} pcbY={-15.97} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* C6: C_10u_0402 */}
    <chip name={"C6"} pcbX={-8.905} pcbY={1.32} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* R2: R_1k5_0402 */}
    <chip name={"R2"} pcbX={21.06} pcbY={-17.38} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1501GLF"} displayName={"R_1k5_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* D1: LED_G_0603_KP-1608ZGC */}
    <chip name={"D1"} pcbX={19.59} pcbY={-19.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* TP11: TP_0.75mm_SMD */}
    <chip name={"TP11"} pcbX={21.07} pcbY={-15.94} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* C7: C_1u_0402 */}
    <chip name={"C7"} pcbX={-8.5} pcbY={-2.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* R9: R_1k_0402 */}
    <chip name={"R9"} pcbX={11.153} pcbY={-0.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* C49: C_100n_0402 */}
    <chip name={"C49"} pcbX={-13.4} pcbY={16.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C49 />} noSchematicRepresentation={true}/>

    {/* REF**: oshw_logo */}
    <chip name={"REF___"} pcbX={7.55} pcbY={-17.75} pcbRotation={0} pinLabels={{}} displayName={"oshw_logo"} footprint={<Footprint_REF___ />} noSchematicRepresentation={true}/>

    {/* R51: R_0R_0402 */}
    <chip name={"R51"} pcbX={-18.35} pcbY={-17.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R51 />} noSchematicRepresentation={true}/>

    {/* R20: R_0R_0402 */}
    <chip name={"R20"} pcbX={22.98} pcbY={-11.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* C11: C_10n_0402 */}
    <chip name={"C11"} pcbX={-13.88} pcbY={-6.13} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* FB1: FB_220Z_2.2A_TDK-MPZ_0603 */}
    <chip name={"FB1"} pcbX={-3.43} pcbY={2.17} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"MPZ1608S221ATA00"} displayName={"FB_220Z_2.2A_TDK-MPZ_0603"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* R49: R_100k_0402 */}
    <chip name={"R49"} pcbX={11.18} pcbY={-12.37} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R49 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_0.75mm_SMD */}
    <chip name={"TP2"} pcbX={2.15} pcbY={20.25} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* C37: C_220n_16V_0402 */}
    <chip name={"C37"} pcbX={21.8} pcbY={-0.96} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71C224KA12D"} displayName={"C_220n_16V_0402"} footprint={<Footprint_C37 />} noSchematicRepresentation={true}/>

    {/* R27: R_110k_0402 */}
    <chip name={"R27"} pcbX={22.95} pcbY={-7.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1103GLF"} displayName={"R_110k_0402"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* R28: R_1M5_0402 */}
    <chip name={"R28"} pcbX={22.95} pcbY={-8.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1504GLF"} displayName={"R_1M5_0402"} footprint={<Footprint_R28 />} noSchematicRepresentation={true}/>

    {/* TP9: TP_0.75mm_SMD */}
    <chip name={"TP9"} pcbX={-8.75} pcbY={20.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* D9: PMEG3010CEJ,115 */}
    <chip name={"D9"} pcbX={19} pcbY={-2.98} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PMEG3010CEJ,115"} displayName={"PMEG3010CEJ,115"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* U6: TLV76701_WSON */}
    <chip name={"U6"} pcbX={10.317} pcbY={9.375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"] }} manufacturerPartNumber={"TLV76701DRVT"} displayName={"TLV76701_WSON"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* C21: C_1n_0402 */}
    <chip name={"C21"} pcbX={22.965} pcbY={-6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* C1: C_10u_0402 */}
    <chip name={"C1"} pcbX={-21.3} pcbY={-11.45} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* D4: PUSB3F96X_PASS */}
    <chip name={"D4"} pcbX={-20.1135} pcbY={-17.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"PUSB3F96X"} displayName={"PUSB3F96X_PASS"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* R26: R_100k_0402 */}
    <chip name={"R26"} pcbX={11.468} pcbY={-9.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* U4: TPS65150_HTSSOP */}
    <chip name={"U4"} pcbX={17.15} pcbY={-8.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"] }} manufacturerPartNumber={"TPS65150PWP"} displayName={"TPS65150_HTSSOP"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* R4: R_100k_0402 */}
    <chip name={"R4"} pcbX={-17.495} pcbY={-9.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* R30: R_330k_0402 */}
    <chip name={"R30"} pcbX={18.15} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3303GLF"} displayName={"R_330k_0402"} footprint={<Footprint_R30 />} noSchematicRepresentation={true}/>

    {/* C23: C_22u_25V_0805 */}
    <chip name={"C23"} pcbX={11.8} pcbY={-3.65} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CL21A226MAYNNNE"} displayName={"C_22u_25V_0805"} footprint={<Footprint_C23 />} noSchematicRepresentation={true}/>

    {/* Q4: PJE138K */}
    <chip name={"Q4"} pcbX={14.302} pcbY={8.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"PJE138K_R1_00001"} displayName={"PJE138K"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* C28: C_1u_25V_0402 */}
    <chip name={"C28"} pcbX={19.56} pcbY={-0.96} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61E105KE11J"} displayName={"C_1u_25V_0402"} footprint={<Footprint_C28 />} noSchematicRepresentation={true}/>

    {/* C18: C_100n_0402 */}
    <chip name={"C18"} pcbX={14.35} pcbY={12.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* C17: C_220n_16V_0402 */}
    <chip name={"C17"} pcbX={17.45} pcbY={-15.216} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71C224KA12D"} displayName={"C_220n_16V_0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* TP13: TP_0.75mm_SMD */}
    <chip name={"TP13"} pcbX={8.15} pcbY={1.65} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* R48: R_10k_0402 */}
    <chip name={"R48"} pcbX={-9.6} pcbY={-16.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R48 />} noSchematicRepresentation={true}/>

    {/* R39: R_10k_0402 */}
    <chip name={"R39"} pcbX={9.6} pcbY={-1.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R39 />} noSchematicRepresentation={true}/>

    {/* C29: C_22u_25V_0805 */}
    <chip name={"C29"} pcbX={22.12} pcbY={9.105} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CL21A226MAYNNNE"} displayName={"C_22u_25V_0805"} footprint={<Footprint_C29 />} noSchematicRepresentation={true}/>

    {/* R15: R_330k_0402 */}
    <chip name={"R15"} pcbX={14.3} pcbY={10.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3303GLF"} displayName={"R_330k_0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* U2: NTS0104_DHVQFN */}
    <chip name={"U2"} pcbX={-14.6} pcbY={-18.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"] }} manufacturerPartNumber={"NTS0104BQ"} displayName={"NTS0104_DHVQFN"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* R13: R_590k_0402 */}
    <chip name={"R13"} pcbX={15.25} pcbY={-15.216} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RC0402FR-07590KL"} displayName={"R_590k_0402"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* R50: R_10k_0402 */}
    <chip name={"R50"} pcbX={-9.6} pcbY={-17.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R50 />} noSchematicRepresentation={true}/>

    {/* R37: R_10k_0402 */}
    <chip name={"R37"} pcbX={11.35} pcbY={13.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R37 />} noSchematicRepresentation={true}/>

    {/* D3: PUSB3F96X_PASS */}
    <chip name={"D3"} pcbX={-20.0625} pcbY={-13.5125} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"PUSB3F96X"} displayName={"PUSB3F96X_PASS"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* C38: C_22u_25V_0805 */}
    <chip name={"C38"} pcbX={19.85} pcbY={18.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CL21A226MAYNNNE"} displayName={"C_22u_25V_0805"} footprint={<Footprint_C38 />} noSchematicRepresentation={true}/>

    {/* C35: C_330n_0402 */}
    <chip name={"C35"} pcbX={22.15} pcbY={-19.001} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61J334KE01J"} displayName={"C_330n_0402"} footprint={<Footprint_C35 />} noSchematicRepresentation={true}/>

    {/* D10: BAT54S-E3-08 */}
    <chip name={"D10"} pcbX={19.25} pcbY={-18.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"BAT54S-E3-08"} displayName={"BAT54S-E3-08"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* TP21: TP_0.75mm_SMD */}
    <chip name={"TP21"} pcbX={-18.75} pcbY={20.9} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP21 />} noSchematicRepresentation={true}/>

    {/* D7: RB521S30T1G */}
    <chip name={"D7"} pcbX={14.4} pcbY={13.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RB521S30T1G"} displayName={"RB521S30T1G"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* R25: R_820k_0402 */}
    <chip name={"R25"} pcbX={11.468} pcbY={-8.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-8203GLF"} displayName={"R_820k_0402"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* Q6: PJE138K */}
    <chip name={"Q6"} pcbX={17.15} pcbY={12.702} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"PJE138K_R1_00001"} displayName={"PJE138K"} footprint={<Footprint_Q6 />} noSchematicRepresentation={true}/>

    {/* C36: C_100n_0402 */}
    <chip name={"C36"} pcbX={25} pcbY={17.35} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C36 />} noSchematicRepresentation={true}/>

    {/* J2: JST_SUR_1x10_SM10B-SURS-TF-LF-SN */}
    <chip name={"J2"} pcbX={-23.63} pcbY={-15.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["MP"] }} manufacturerPartNumber={"SM10B-SURS-TF"} displayName={"JST_SUR_1x10_SM10B-SURS-TF-LF-SN"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_0.75mm_SMD */}
    <chip name={"TP8"} pcbX={-7.75} pcbY={20.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* R34: R_0R_0402 */}
    <chip name={"R34"} pcbX={18.3} pcbY={19.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R34 />} noSchematicRepresentation={true}/>

    {/* C22: C_330n_0402 */}
    <chip name={"C22"} pcbX={18.55} pcbY={-15.216} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61J334KE01J"} displayName={"C_330n_0402"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* R14: R_120k_0402 */}
    <chip name={"R14"} pcbX={16.35} pcbY={-15.216} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1203GLF"} displayName={"R_120k_0402"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* R24: R_10k_0402 */}
    <chip name={"R24"} pcbX={17.515} pcbY={10.95} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* C26: C_1u_25V_0402 */}
    <chip name={"C26"} pcbX={21.14} pcbY={-2.94} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61E105KE11J"} displayName={"C_1u_25V_0402"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* R23: R_0R_0402 */}
    <chip name={"R23"} pcbX={22.3} pcbY={-2.935} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* TP20: TP_0.75mm_SMD */}
    <chip name={"TP20"} pcbX={13.21} pcbY={-4.29} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP20 />} noSchematicRepresentation={true}/>

    {/* TP10: TP_0.75mm_SMD */}
    <chip name={"TP10"} pcbX={19.4} pcbY={11} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* TP7: TP_0.75mm_SMD */}
    <chip name={"TP7"} pcbX={-21.25} pcbY={-20.25} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* J3: FFC_Amphenol_1x40_62684-401100AHLF */}
    <chip name={"J3"} pcbX={-6.089998} pcbY={16.065} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["SH"] }} manufacturerPartNumber={"62684-401100AHLF"} displayName={"FFC_Amphenol_1x40_62684-401100AHLF"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* C40: C_1u_25V_0402 */}
    <chip name={"C40"} pcbX={18.3} pcbY={2.13} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61E105KE11J"} displayName={"C_1u_25V_0402"} footprint={<Footprint_C40 />} noSchematicRepresentation={true}/>

    {/* C3: C_1u_0402 */}
    <chip name={"C3"} pcbX={7.25} pcbY={-13.42} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* D6: BAT54S-E3-08 */}
    <chip name={"D6"} pcbX={15.5} pcbY={-18.05} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"BAT54S-E3-08"} displayName={"BAT54S-E3-08"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* R12: R_0R_0402 */}
    <chip name={"R12"} pcbX={11.95} pcbY={-18.535} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* TP23: TP_0.75mm_SMD */}
    <chip name={"TP23"} pcbX={5.15} pcbY={20.25} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP23 />} noSchematicRepresentation={true}/>

    {/* C30: C_22u_25V_0805 */}
    <chip name={"C30"} pcbX={18.64} pcbY={0.57} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CL21A226MAYNNNE"} displayName={"C_22u_25V_0805"} footprint={<Footprint_C30 />} noSchematicRepresentation={true}/>

    {/* L1: L_3u3_2.5A_1008 */}
    <chip name={"L1"} pcbX={15.45} pcbY={-2.67} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"TFM252012ALMA3R3MTAA"} displayName={"L_3u3_2.5A_1008"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* C33: C_22p_0402 */}
    <chip name={"C33"} pcbX={11.484} pcbY={-7.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402JRNPO9BN220"} displayName={"C_22p_0402"} footprint={<Footprint_C33 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_0.75mm_SMD */}
    <chip name={"TP4"} pcbX={-6.75} pcbY={20.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* Q7: SSM3J332R */}
    <chip name={"Q7"} pcbX={22.3} pcbY={2.225} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"SSM3J332R,LF"} displayName={"SSM3J332R"} footprint={<Footprint_Q7 />} noSchematicRepresentation={true}/>

    {/* R6: R_10k_0402 */}
    <chip name={"R6"} pcbX={-1.48} pcbY={2.52} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* U1: TLV70018_SC70 */}
    <chip name={"U1"} pcbX={7.52} pcbY={-11.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"TLV70018DCKR"} displayName={"TLV70018_SC70"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* U5: MPQ7235GQBE */}
    <chip name={"U5"} pcbX={20.644} pcbY={13.256} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"] }} manufacturerPartNumber={"MPQ7235GQBE-AEC1-Z"} displayName={"MPQ7235GQBE"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C4: C_100n_0402 */}
    <chip name={"C4"} pcbX={-15.8} pcbY={-15.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* U3: SN65DSI84 */}
    <chip name={"U3"} pcbX={-12.22} pcbY={-2.13} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"] }} manufacturerPartNumber={"SN65DSI84TPAPRQ1"} displayName={"SN65DSI84"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* C5: C_100n_0402 */}
    <chip name={"C5"} pcbX={-13.45} pcbY={-15.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* TP15: TP_0.75mm_SMD */}
    <chip name={"TP15"} pcbX={-20.7} pcbY={14.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* C31: C_100n_0402 */}
    <chip name={"C31"} pcbX={21.25} pcbY={10.621} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C31 />} noSchematicRepresentation={true}/>

    {/* C32: C_100n_0402 */}
    <chip name={"C32"} pcbX={19.8} pcbY={16.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C32 />} noSchematicRepresentation={true}/>

    {/* TP17: TP_0.75mm_SMD */}
    <chip name={"TP17"} pcbX={10.975} pcbY={5} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP17 />} noSchematicRepresentation={true}/>

    {/* TP12: TP_0.75mm_SMD */}
    <chip name={"TP12"} pcbX={-9.75} pcbY={20.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* C25: C_10n_0402 */}
    <chip name={"C25"} pcbX={11.468} pcbY={-10.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* Q8: PJE138K */}
    <chip name={"Q8"} pcbX={-17.5} pcbY={-11.05} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"PJE138K_R1_00001"} displayName={"PJE138K"} footprint={<Footprint_Q8 />} noSchematicRepresentation={true}/>

    {/* R17: R_100k_0402 */}
    <chip name={"R17"} pcbX={14.8} pcbY={6.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* R29: R_20R_0603 */}
    <chip name={"R29"} pcbX={24.15} pcbY={14.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-FX-20R0ELF"} displayName={"R_20R_0603"} footprint={<Footprint_R29 />} noSchematicRepresentation={true}/>

    {/* R5: R_0R_0402 */}
    <chip name={"R5"} pcbX={13.1} pcbY={-15.216} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* C2: C_1u_0402 */}
    <chip name={"C2"} pcbX={7.25} pcbY={-9.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* TP14: TP_0.75mm_SMD */}
    <chip name={"TP14"} pcbX={-16.65} pcbY={20.9} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* TP22: TP_0.75mm_SMD */}
    <chip name={"TP22"} pcbX={-17.7} pcbY={20.9} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP22 />} noSchematicRepresentation={true}/>

    {/* Q3: SSM3J332R */}
    <chip name={"Q3"} pcbX={11.75} pcbY={0.675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"SSM3J332R,LF"} displayName={"SSM3J332R"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* R7: R_10k_0402 */}
    <chip name={"R7"} pcbX={-0.38} pcbY={2.52} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* C46: C_100n_0402 */}
    <chip name={"C46"} pcbX={-14} pcbY={20.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C46 />} noSchematicRepresentation={true}/>

    {/* R31: R_1R2_0402 */}
    <chip name={"R31"} pcbX={16.885} pcbY={15.09} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1R20GLF"} displayName={"R_1R2_0402"} footprint={<Footprint_R31 />} noSchematicRepresentation={true}/>

    {/* C24: C_22p_0402 */}
    <chip name={"C24"} pcbX={22.981} pcbY={-11.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402JRNPO9BN220"} displayName={"C_22p_0402"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* C39: C_1u_25V_0402 */}
    <chip name={"C39"} pcbX={12.165} pcbY={8.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61E105KE11J"} displayName={"C_1u_25V_0402"} footprint={<Footprint_C39 />} noSchematicRepresentation={true}/>

    {/* R36: R_110k_0402 */}
    <chip name={"R36"} pcbX={9.4} pcbY={13.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1103GLF"} displayName={"R_110k_0402"} footprint={<Footprint_R36 />} noSchematicRepresentation={true}/>

    {/* R35: R_0R_0402 */}
    <chip name={"R35"} pcbX={18.3} pcbY={3.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R35 />} noSchematicRepresentation={true}/>

    {/* C20: C_2n2_0402 */}
    <chip name={"C20"} pcbX={14.2} pcbY={-15.216} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C222J5RACTU"} displayName={"C_2n2_0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* Q2: PJE138K */}
    <chip name={"Q2"} pcbX={14.65} pcbY={0.923} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"PJE138K_R1_00001"} displayName={"PJE138K"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* C27: C_100n_0402 */}
    <chip name={"C27"} pcbX={11.484} pcbY={-6.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* C43: C_100n_0402 */}
    <chip name={"C43"} pcbX={8.15} pcbY={-1.25} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C43 />} noSchematicRepresentation={true}/>

    {/* L2: L_10u_0.5A_Murata-8200 */}
    <chip name={"L2"} pcbX={22.65} pcbY={18.55} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"82103C"} displayName={"L_10u_0.5A_Murata-8200"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* C16: C_330n_0402 */}
    <chip name={"C16"} pcbX={13.05} pcbY={-18.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61J334KE01J"} displayName={"C_330n_0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* Q1: PJE138K */}
    <chip name={"Q1"} pcbX={11.205} pcbY={-14.12} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"PJE138K_R1_00001"} displayName={"PJE138K"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C34: C_330n_0402 */}
    <chip name={"C34"} pcbX={19.55} pcbY={-15.216} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61J334KE01J"} displayName={"C_330n_0402"} footprint={<Footprint_C34 />} noSchematicRepresentation={true}/>

    {/* TP6: TP_0.75mm_SMD */}
    <chip name={"TP6"} pcbX={-20.2} pcbY={-20.25} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_0.75mm_SMD"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* Q5: SSM3J332R */}
    <chip name={"Q5"} pcbX={17.5} pcbY={7.8} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"SSM3J332R,LF"} displayName={"SSM3J332R"} footprint={<Footprint_Q5 />} noSchematicRepresentation={true}/>

    {/* R16: R_49k9_0402 */}
    <chip name={"R16"} pcbX={14.3} pcbY={11.25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4992GLF"} displayName={"R_49k9_0402"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* C14: C_1u_0402 */}
    <chip name={"C14"} pcbX={-15.73} pcbY={-9.98} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* C41: C_22u_25V_0805 */}
    <chip name={"C41"} pcbX={10.365} pcbY={11.95} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CL21A226MAYNNNE"} displayName={"C_22u_25V_0805"} footprint={<Footprint_C41 />} noSchematicRepresentation={true}/>

    {/* KiCad net: Net-(D11-A) */}
    <KiCadNet name={"Net__D11_A_"} connectsTo={[".R21 > .pin1", ".D11 > .pin2"]}/>
    {/* KiCad net: Net-(Q5-D) */}
    <KiCadNet name={"Net__Q5_D_"} connectsTo={[".R21 > .pin2", ".TP18 > .pin1", ".C29 > .pin1", ".R24 > .pin2", ".U5 > .pin1", ".U5 > .pin2", ".C31 > .pin2", ".Q5 > .pin3"]}/>
    {/* KiCad net: Net-(D1-A) */}
    <KiCadNet name={"Net__D1_A_"} connectsTo={[".R1 > .pin1", ".D1 > .pin2"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".R1 > .pin2", ".J1 > .pin4", ".J1 > .pin6", ".J1 > .pin8", ".J1 > .pin10", ".R10 > .pin2", ".R38 > .pin2", ".TP1 > .pin1", ".R20 > .pin2", ".C1 > .pin2", ".D3 > .pin1", ".D3 > .pin10", ".J2 > .pin10", ".Q3 > .pin2"]}/>
    {/* KiCad net: /LVDS and Touchscreen Connectors/UPDN */}
    <KiCadNet name={"_LVDS_and_Touchscreen_Connectors_UPDN"} connectsTo={[".R46 > .pin1", ".R45 > .pin1", ".J3 > .pin34"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".R46 > .pin2", ".D11 > .pin1", ".J1 > .pin1", ".J1 > .pin2", ".J1 > .pin7", ".J1 > .pin13", ".J1 > .pin14", ".J1 > .pin19", ".J1 > .pin25", ".J1 > .pin31", ".J1 > .pin32", ".J1 > .pin41", ".R11 > .pin1", ".C12 > .pin1", ".R43 > .pin2", ".R8 > .pin2", ".R19 > .pin1", ".C9 > .pin1", ".C44 > .pin1", ".C47 > .pin1", ".C8 > .pin1", ".C42 > .pin1", ".D2 > .pin1", ".TP19 > .pin1", ".C15 > .pin1", ".MP1 > .pin1", ".C45 > .pin1", ".C10 > .pin1", ".D5 > .pin1", ".R41 > .pin2", ".C13 > .pin1", ".C6 > .pin1", ".D1 > .pin1", ".C7 > .pin1", ".C49 > .pin1", ".C11 > .pin1", ".R49 > .pin2", ".R27 > .pin1", ".U6 > .pin3", ".U6 > .pin5", ".U6 > .pin7", ".C21 > .pin1", ".C1 > .pin1", ".D4 > .pin3", ".D4 > .pin5", ".D4 > .pin6", ".D4 > .pin8", ".R26 > .pin1", ".U4 > .pin7", ".U4 > .pin8", ".U4 > .pin19", ".U4 > .pin25", ".R4 > .pin2", ".C23 > .pin2", ".Q4 > .pin2", ".C28 > .pin1", ".C18 > .pin1", ".C17 > .pin1", ".C29 > .pin2", ".U2 > .pin7", ".U2 > .pin15", ".R37 > .pin1", ".D3 > .pin3", ".D3 > .pin8", ".C38 > .pin2", ".C35 > .pin1", ".Q6 > .pin2", ".J2 > .pin6", ".J2 > .pin11", ".C26 > .pin1", ".J3 > .pin7", ".J3 > .pin10", ".J3 > .pin13", ".J3 > .pin16", ".J3 > .pin19", ".J3 > .pin22", ".J3 > .pin25", ".J3 > .pin30", ".J3 > .pin41", ".C40 > .pin1", ".C3 > .pin1", ".D6 > .pin2", ".C30 > .pin2", ".U1 > .pin2", ".U5 > .pin8", ".U5 > .pin11", ".U5 > .pin12", ".U5 > .pin13", ".C4 > .pin1", ".U3 > .pin23", ".U3 > .pin26", ".U3 > .pin52", ".U3 > .pin65", ".C5 > .pin1", ".C31 > .pin1", ".C32 > .pin1", ".TP17 > .pin1", ".C25 > .pin1", ".Q8 > .pin2", ".C2 > .pin1", ".R7 > .pin1", ".R31 > .pin1", ".C24 > .pin1", ".C39 > .pin1", ".C20 > .pin1", ".Q2 > .pin2", ".C27 > .pin1", ".C43 > .pin1", ".C16 > .pin1", ".Q1 > .pin2", ".R16 > .pin1", ".C14 > .pin1", ".C41 > .pin2"]}/>
    {/* KiCad net: Net-(D2-A) */}
    <KiCadNet name={"Net__D2_A_"} connectsTo={[".R3 > .pin1", ".D2 > .pin2"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".R3 > .pin2", ".J1 > .pin12", ".R47 > .pin2", ".R40 > .pin2", ".C47 > .pin2", ".R45 > .pin2", ".TP3 > .pin1", ".R42 > .pin2", ".R44 > .pin2", ".R39 > .pin2", ".U2 > .pin14", ".J3 > .pin2", ".J3 > .pin3", ".U1 > .pin1", ".C4 > .pin2", ".C2 > .pin2"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D3_N */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D3_N"} connectsTo={[".J1 > .pin3", ".U3 > .pin30"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D3_P */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D3_P"} connectsTo={[".J1 > .pin5", ".U3 > .pin29"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D2_N */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D2_N"} connectsTo={[".J1 > .pin9", ".U3 > .pin28"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D2_P */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D2_P"} connectsTo={[".J1 > .pin11", ".U3 > .pin27"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D1_N */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D1_N"} connectsTo={[".J1 > .pin15", ".U3 > .pin22"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.SDA */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl_SDA"} connectsTo={[".J1 > .pin16", ".U2 > .pin13", ".D3 > .pin4", ".D3 > .pin7", ".J2 > .pin8"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D1_P */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D1_P"} connectsTo={[".J1 > .pin17", ".U3 > .pin21"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.SCL */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl_SCL"} connectsTo={[".J1 > .pin18", ".U2 > .pin12", ".D3 > .pin2", ".D3 > .pin9", ".J2 > .pin9"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.~{IRQ1} */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl___IRQ1_"} connectsTo={[".J1 > .pin20", ".R47 > .pin1", ".Q8 > .pin3"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D0_N */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D0_N"} connectsTo={[".J1 > .pin21", ".U3 > .pin20"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.~{IRQ2} */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl___IRQ2_"} connectsTo={[".J1 > .pin22", ".D3 > .pin5", ".D3 > .pin6", ".J2 > .pin7"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.D0_P */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_D0_P"} connectsTo={[".J1 > .pin23", ".U3 > .pin19"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.EN */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl_EN"} connectsTo={[".J1 > .pin24", ".R44 > .pin1", ".R9 > .pin1", ".U2 > .pin11", ".D7 > .pin1", ".J3 > .pin6", ".U1 > .pin3"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.~{RST} */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl___RST_"} connectsTo={[".J1 > .pin26", ".R52 > .pin1", ".R51 > .pin1", ".TP13 > .pin1", ".R39 > .pin1", ".J3 > .pin5", ".C43 > .pin2"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.CLK_N */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_CLK_N"} connectsTo={[".J1 > .pin27", ".U3 > .pin25"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.DIM */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl_DIM"} connectsTo={[".J1 > .pin28", ".Q6 > .pin1"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSI.CLK_P */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSI_CLK_P"} connectsTo={[".J1 > .pin29", ".U3 > .pin24"]}/>
    {/* KiCad net: /Antmicro CM4 Baseboard DSI Connector /DSICtrl.GPIO */}
    <KiCadNet name={"_Antmicro_CM4_Baseboard_DSI_Connector__DSICtrl_GPIO"} connectsTo={[".J1 > .pin30", ".D4 > .pin2", ".D4 > .pin9", ".J2 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1-Pad33) */}
    <KiCadNet name={"unconnected__J1_Pad33_"} connectsTo={[".J1 > .pin33"]}/>
    {/* KiCad net: unconnected-(J1-Pad34) */}
    <KiCadNet name={"unconnected__J1_Pad34_"} connectsTo={[".J1 > .pin34"]}/>
    {/* KiCad net: unconnected-(J1-Pad35) */}
    <KiCadNet name={"unconnected__J1_Pad35_"} connectsTo={[".J1 > .pin35"]}/>
    {/* KiCad net: unconnected-(J1-Pad36) */}
    <KiCadNet name={"unconnected__J1_Pad36_"} connectsTo={[".J1 > .pin36"]}/>
    {/* KiCad net: unconnected-(J1-Pad37) */}
    <KiCadNet name={"unconnected__J1_Pad37_"} connectsTo={[".J1 > .pin37"]}/>
    {/* KiCad net: unconnected-(J1-Pad38) */}
    <KiCadNet name={"unconnected__J1_Pad38_"} connectsTo={[".J1 > .pin38"]}/>
    {/* KiCad net: unconnected-(J1-Pad39) */}
    <KiCadNet name={"unconnected__J1_Pad39_"} connectsTo={[".J1 > .pin39"]}/>
    {/* KiCad net: unconnected-(J1-Pad40) */}
    <KiCadNet name={"unconnected__J1_Pad40_"} connectsTo={[".J1 > .pin40"]}/>
    {/* KiCad net: Net-(Q2-D) */}
    <KiCadNet name={"Net__Q2_D_"} connectsTo={[".R10 > .pin1", ".Q3 > .pin1", ".Q2 > .pin3"]}/>
    {/* KiCad net: Net-(Q2-G) */}
    <KiCadNet name={"Net__Q2_G_"} connectsTo={[".R11 > .pin2", ".C15 > .pin2", ".R9 > .pin2", ".Q2 > .pin1"]}/>
    {/* KiCad net: Net-(C10-Pad2) */}
    <KiCadNet name={"Net__C10_Pad2_"} connectsTo={[".C12 > .pin2", ".C9 > .pin2", ".C8 > .pin2", ".C10 > .pin2", ".C13 > .pin2", ".C6 > .pin2", ".C7 > .pin2", ".C11 > .pin2", ".FB1 > .pin2", ".U3 > .pin3", ".U3 > .pin14", ".U3 > .pin18", ".U3 > .pin32", ".U3 > .pin35", ".U3 > .pin40", ".U3 > .pin43", ".U3 > .pin48", ".U3 > .pin49", ".U3 > .pin55", ".U3 > .pin58", ".U3 > .pin63"]}/>
    {/* KiCad net: /LVDS and Touchscreen Connectors/SHLR */}
    <KiCadNet name={"_LVDS_and_Touchscreen_Connectors_SHLR"} connectsTo={[".R43 > .pin1", ".R42 > .pin1", ".J3 > .pin33"]}/>
    {/* KiCad net: Net-(U3-REFCLK) */}
    <KiCadNet name={"Net__U3_REFCLK_"} connectsTo={[".R8 > .pin1", ".U3 > .pin17"]}/>
    {/* KiCad net: Net-(U4-GD) */}
    <KiCadNet name={"Net__U4_GD_"} connectsTo={[".R33 > .pin1", ".U4 > .pin23"]}/>
    {/* KiCad net: Net-(Q7-G) */}
    <KiCadNet name={"Net__Q7_G_"} connectsTo={[".R33 > .pin2", ".R32 > .pin1", ".C37 > .pin1", ".Q7 > .pin1"]}/>
    {/* KiCad net: Net-(D8-C) */}
    <KiCadNet name={"Net__D8_C_"} connectsTo={[".D8 > .pin1", ".Q1 > .pin3"]}/>
    {/* KiCad net: Net-(D8-A) */}
    <KiCadNet name={"Net__D8_A_"} connectsTo={[".D8 > .pin2", ".R38 > .pin1"]}/>
    {/* KiCad net: Net-(U4-IN) */}
    <KiCadNet name={"Net__U4_IN_"} connectsTo={[".R19 > .pin2", ".R18 > .pin1", ".C21 > .pin2", ".U4 > .pin11"]}/>
    {/* KiCad net: Net-(U4-VGH) */}
    <KiCadNet name={"Net__U4_VGH_"} connectsTo={[".R22 > .pin1", ".U4 > .pin15"]}/>
    {/* KiCad net: +18V */}
    <KiCadNet name={"_18V"} connectsTo={[".R22 > .pin2", ".C42 > .pin2", ".R15 > .pin2", ".J3 > .pin38", ".TP22 > .pin1"]}/>
    {/* KiCad net: /LVDS and Touchscreen Connectors/SELB */}
    <KiCadNet name={"_LVDS_and_Touchscreen_Connectors_SELB"} connectsTo={[".R40 > .pin1", ".R41 > .pin1", ".J3 > .pin28"]}/>
    {/* KiCad net: +10V5 */}
    <KiCadNet name={"_10V5"} connectsTo={[".R18 > .pin2", ".R2 > .pin2", ".TP11 > .pin1", ".U6 > .pin4", ".U6 > .pin6", ".R17 > .pin2", ".C39 > .pin2", ".R35 > .pin2", ".Q5 > .pin2"]}/>
    {/* KiCad net: +9V6 */}
    <KiCadNet name={"_9V6"} connectsTo={[".C44 > .pin2", ".U6 > .pin1", ".J3 > .pin29", ".R36 > .pin2", ".C41 > .pin1"]}/>
    {/* KiCad net: Net-(D9-C) */}
    <KiCadNet name={"Net__D9_C_"} connectsTo={[".R32 > .pin2", ".C37 > .pin2", ".D9 > .pin1", ".U4 > .pin9", ".C28 > .pin2", ".D10 > .pin1", ".R25 > .pin2", ".C30 > .pin1", ".C33 > .pin2", ".Q7 > .pin2"]}/>
    {/* KiCad net: +1V8 */}
    <KiCadNet name={"_1V8"} connectsTo={[".TP16 > .pin1", ".FB1 > .pin1", ".R49 > .pin1", ".R48 > .pin2", ".U2 > .pin1", ".U2 > .pin8", ".R50 > .pin2", ".C3 > .pin2", ".R6 > .pin2", ".U1 > .pin5", ".C5 > .pin2", ".Q1 > .pin1"]}/>
    {/* KiCad net: /LVDS and Touchscreen Connectors/TP10_TS */}
    <KiCadNet name={"_LVDS_and_Touchscreen_Connectors_TP10_TS"} connectsTo={[".R52 > .pin2", ".D4 > .pin4", ".D4 > .pin7", ".J2 > .pin1"]}/>
    {/* KiCad net: +3V9 */}
    <KiCadNet name={"_3V9"} connectsTo={[".C45 > .pin2", ".R23 > .pin2", ".J3 > .pin1", ".TP23 > .pin1"]}/>
    {/* KiCad net: Net-(D5-A) */}
    <KiCadNet name={"Net__D5_A_"} connectsTo={[".D5 > .pin2", ".R2 > .pin1"]}/>
    {/* KiCad net: -6V */}
    <KiCadNet name={"_6V"} connectsTo={[".C49 > .pin2", ".TP21 > .pin1", ".J3 > .pin35", ".R12 > .pin2"]}/>
    {/* KiCad net: /LVDS and Touchscreen Connectors/RST_TS */}
    <KiCadNet name={"_LVDS_and_Touchscreen_Connectors_RST_TS"} connectsTo={[".R51 > .pin2", ".D4 > .pin1", ".D4 > .pin10", ".J2 > .pin5"]}/>
    {/* KiCad net: /Power/FLK */}
    <KiCadNet name={"_Power_FLK"} connectsTo={[".R20 > .pin1", ".U4 > .pin13"]}/>
    {/* KiCad net: Net-(J3-Pad4) */}
    <KiCadNet name={"Net__J3_Pad4_"} connectsTo={[".TP2 > .pin1", ".J3 > .pin4"]}/>
    {/* KiCad net: Net-(U4-FBP) */}
    <KiCadNet name={"Net__U4_FBP_"} connectsTo={[".R27 > .pin2", ".R28 > .pin1", ".U4 > .pin12"]}/>
    {/* KiCad net: Net-(U4-CPI) */}
    <KiCadNet name={"Net__U4_CPI_"} connectsTo={[".R28 > .pin2", ".U4 > .pin16", ".C35 > .pin2", ".D10 > .pin2"]}/>
    {/* KiCad net: Net-(J3-Pad26) */}
    <KiCadNet name={"Net__J3_Pad26_"} connectsTo={[".TP9 > .pin1", ".J3 > .pin26"]}/>
    {/* KiCad net: Net-(D9-A) */}
    <KiCadNet name={"Net__D9_A_"} connectsTo={[".D9 > .pin2", ".U4 > .pin5", ".U4 > .pin6", ".L1 > .pin2"]}/>
    {/* KiCad net: Net-(U6-FB) */}
    <KiCadNet name={"Net__U6_FB_"} connectsTo={[".U6 > .pin2", ".R37 > .pin2", ".R36 > .pin1"]}/>
    {/* KiCad net: Net-(U4-FB) */}
    <KiCadNet name={"Net__U4_FB_"} connectsTo={[".R26 > .pin2", ".U4 > .pin1", ".R25 > .pin1", ".C33 > .pin1"]}/>
    {/* KiCad net: /Power/DLY1 */}
    <KiCadNet name={"_Power_DLY1"} connectsTo={[".U4 > .pin2", ".C25 > .pin2"]}/>
    {/* KiCad net: /Power/DLY2 */}
    <KiCadNet name={"_Power_DLY2"} connectsTo={[".U4 > .pin3", ".C27 > .pin2"]}/>
    {/* KiCad net: /Power/Vi_{BOOST} */}
    <KiCadNet name={"_Power_Vi__BOOST_"} connectsTo={[".U4 > .pin4", ".C23 > .pin1", ".TP20 > .pin1", ".L1 > .pin1", ".R5 > .pin1", ".Q3 > .pin3"]}/>
    {/* KiCad net: Net-(U4-VCOM) */}
    <KiCadNet name={"Net__U4_VCOM_"} connectsTo={[".U4 > .pin10", ".C26 > .pin2", ".R23 > .pin1"]}/>
    {/* KiCad net: /Power/ADJ */}
    <KiCadNet name={"_Power_ADJ"} connectsTo={[".U4 > .pin14", ".C24 > .pin2"]}/>
    {/* KiCad net: Net-(U4-DRVP) */}
    <KiCadNet name={"Net__U4_DRVP_"} connectsTo={[".U4 > .pin17", ".C34 > .pin2"]}/>
    {/* KiCad net: Net-(U4-DRVN) */}
    <KiCadNet name={"Net__U4_DRVN_"} connectsTo={[".U4 > .pin18", ".C22 > .pin1"]}/>
    {/* KiCad net: Net-(U4-REF) */}
    <KiCadNet name={"Net__U4_REF_"} connectsTo={[".U4 > .pin20", ".C17 > .pin2", ".R14 > .pin1"]}/>
    {/* KiCad net: Net-(U4-FBN) */}
    <KiCadNet name={"Net__U4_FBN_"} connectsTo={[".U4 > .pin21", ".R13 > .pin1", ".R14 > .pin2"]}/>
    {/* KiCad net: /Power/COMP */}
    <KiCadNet name={"_Power_COMP"} connectsTo={[".U4 > .pin22", ".C20 > .pin2"]}/>
    {/* KiCad net: /Power/FDLY */}
    <KiCadNet name={"_Power_FDLY"} connectsTo={[".U4 > .pin24", ".R5 > .pin2"]}/>
    {/* KiCad net: Net-(Q8-G) */}
    <KiCadNet name={"Net__Q8_G_"} connectsTo={[".R4 > .pin1", ".U3 > .pin33", ".Q8 > .pin1"]}/>
    {/* KiCad net: -VLED */}
    <KiCadNet name={"_VLED"} connectsTo={[".R30 > .pin1", ".J3 > .pin31", ".J3 > .pin32", ".C46 > .pin1", ".R31 > .pin2"]}/>
    {/* KiCad net: Net-(U5-FB) */}
    <KiCadNet name={"Net__U5_FB_"} connectsTo={[".R30 > .pin2", ".U5 > .pin6"]}/>
    {/* KiCad net: Net-(D7-A) */}
    <KiCadNet name={"Net__D7_A_"} connectsTo={[".Q4 > .pin1", ".C18 > .pin2", ".R15 > .pin1", ".D7 > .pin2", ".R16 > .pin2"]}/>
    {/* KiCad net: Net-(Q4-D) */}
    <KiCadNet name={"Net__Q4_D_"} connectsTo={[".Q4 > .pin3", ".R17 > .pin1", ".Q5 > .pin1"]}/>
    {/* KiCad net: /DSI to LVDS/DSICtrl_1V8.SDA */}
    <KiCadNet name={"_DSI_to_LVDS_DSICtrl_1V8_SDA"} connectsTo={[".R48 > .pin1", ".U2 > .pin2", ".U3 > .pin16"]}/>
    {/* KiCad net: /DSI to LVDS/DSICtrl_1V8.SCL */}
    <KiCadNet name={"_DSI_to_LVDS_DSICtrl_1V8_SCL"} connectsTo={[".U2 > .pin3", ".R50 > .pin1", ".U3 > .pin15"]}/>
    {/* KiCad net: /DSI to LVDS/DSICtrl_1V8.EN */}
    <KiCadNet name={"_DSI_to_LVDS_DSICtrl_1V8_EN"} connectsTo={[".U2 > .pin4", ".U3 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-A4-Pad5) */}
    <KiCadNet name={"unconnected__U2_A4_Pad5_"} connectsTo={[".U2 > .pin5"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad6) */}
    <KiCadNet name={"unconnected__U2_NC_Pad6_"} connectsTo={[".U2 > .pin6"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad9) */}
    <KiCadNet name={"unconnected__U2_NC_Pad9_"} connectsTo={[".U2 > .pin9"]}/>
    {/* KiCad net: unconnected-(U2-B4-Pad10) */}
    <KiCadNet name={"unconnected__U2_B4_Pad10_"} connectsTo={[".U2 > .pin10"]}/>
    {/* KiCad net: Net-(C16-Pad2) */}
    <KiCadNet name={"Net__C16_Pad2_"} connectsTo={[".R13 > .pin2", ".D6 > .pin1", ".R12 > .pin1", ".C16 > .pin2"]}/>
    {/* KiCad net: Net-(C38-Pad1) */}
    <KiCadNet name={"Net__C38_Pad1_"} connectsTo={[".C38 > .pin1", ".R34 > .pin1", ".L2 > .pin2"]}/>
    {/* KiCad net: Net-(C34-Pad1) */}
    <KiCadNet name={"Net__C34_Pad1_"} connectsTo={[".D10 > .pin3", ".C34 > .pin1"]}/>
    {/* KiCad net: Net-(Q6-D) */}
    <KiCadNet name={"Net__Q6_D_"} connectsTo={[".Q6 > .pin3", ".R24 > .pin1", ".U5 > .pin5"]}/>
    {/* KiCad net: Net-(U5-SW) */}
    <KiCadNet name={"Net__U5_SW_"} connectsTo={[".C36 > .pin1", ".U5 > .pin9", ".L2 > .pin1"]}/>
    {/* KiCad net: Net-(C36-Pad2) */}
    <KiCadNet name={"Net__C36_Pad2_"} connectsTo={[".C36 > .pin2", ".R29 > .pin2"]}/>
    {/* KiCad net: Net-(J2-Pad2) */}
    <KiCadNet name={"Net__J2_Pad2_"} connectsTo={[".J2 > .pin2", ".TP7 > .pin1"]}/>
    {/* KiCad net: Net-(J2-Pad3) */}
    <KiCadNet name={"Net__J2_Pad3_"} connectsTo={[".J2 > .pin3", ".TP6 > .pin1"]}/>
    {/* KiCad net: Net-(J3-Pad24) */}
    <KiCadNet name={"Net__J3_Pad24_"} connectsTo={[".TP8 > .pin1", ".J3 > .pin24"]}/>
    {/* KiCad net: +VLED */}
    <KiCadNet name={"_VLED_"} connectsTo={[".R34 > .pin2", ".J3 > .pin39", ".J3 > .pin40", ".C46 > .pin2"]}/>
    {/* KiCad net: Net-(C22-Pad2) */}
    <KiCadNet name={"Net__C22_Pad2_"} connectsTo={[".C22 > .pin2", ".D6 > .pin3"]}/>
    {/* KiCad net: Net-(U5-~{FAULT}) */}
    <KiCadNet name={"Net__U5___FAULT__"} connectsTo={[".TP10 > .pin1", ".U5 > .pin4"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D0_N */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D0_N"} connectsTo={[".J3 > .pin8", ".U3 > .pin47"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D0_P */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D0_P"} connectsTo={[".J3 > .pin9", ".U3 > .pin46"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D1_N */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D1_N"} connectsTo={[".J3 > .pin11", ".U3 > .pin45"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D1_P */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D1_P"} connectsTo={[".J3 > .pin12", ".U3 > .pin44"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D2_N */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D2_N"} connectsTo={[".J3 > .pin14", ".U3 > .pin42"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D2_P */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D2_P"} connectsTo={[".J3 > .pin15", ".U3 > .pin41"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.CLK_N */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_CLK_N"} connectsTo={[".J3 > .pin17", ".U3 > .pin39"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.CLK_P */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_CLK_P"} connectsTo={[".J3 > .pin18", ".U3 > .pin38"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D3_N */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D3_N"} connectsTo={[".J3 > .pin20", ".U3 > .pin37"]}/>
    {/* KiCad net: /DSI to LVDS/LVDS.D3_P */}
    <KiCadNet name={"_DSI_to_LVDS_LVDS_D3_P"} connectsTo={[".J3 > .pin21", ".U3 > .pin36"]}/>
    {/* KiCad net: Net-(J3-Pad23) */}
    <KiCadNet name={"Net__J3_Pad23_"} connectsTo={[".J3 > .pin23", ".TP4 > .pin1"]}/>
    {/* KiCad net: Net-(J3-Pad27) */}
    <KiCadNet name={"Net__J3_Pad27_"} connectsTo={[".J3 > .pin27", ".TP12 > .pin1"]}/>
    {/* KiCad net: Net-(J3-Pad36) */}
    <KiCadNet name={"Net__J3_Pad36_"} connectsTo={[".J3 > .pin36", ".TP14 > .pin1"]}/>
    {/* KiCad net: Net-(J3-Pad37) */}
    <KiCadNet name={"Net__J3_Pad37_"} connectsTo={[".J3 > .pin37", ".TP15 > .pin1"]}/>
    {/* KiCad net: Net-(Q7-D) */}
    <KiCadNet name={"Net__Q7_D_"} connectsTo={[".C40 > .pin2", ".Q7 > .pin3", ".R35 > .pin1"]}/>
    {/* KiCad net: Net-(U3-ADDR) */}
    <KiCadNet name={"Net__U3_ADDR_"} connectsTo={[".R6 > .pin1", ".U3 > .pin64", ".R7 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-Pad4) */}
    <KiCadNet name={"unconnected__U1_Pad4_"} connectsTo={[".U1 > .pin4"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad3) */}
    <KiCadNet name={"unconnected__U5_NC_Pad3_"} connectsTo={[".U5 > .pin3"]}/>
    {/* KiCad net: Net-(U5-V_{CC}) */}
    <KiCadNet name={"Net__U5_V__CC__"} connectsTo={[".U5 > .pin7", ".C32 > .pin2"]}/>
    {/* KiCad net: Net-(U5-BST) */}
    <KiCadNet name={"Net__U5_BST_"} connectsTo={[".U5 > .pin10", ".R29 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3-RSVD2-Pad1) */}
    <KiCadNet name={"unconnected__U3_RSVD2_Pad1_"} connectsTo={[".U3 > .pin1"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad4) */}
    <KiCadNet name={"unconnected__U3_NC_Pad4_"} connectsTo={[".U3 > .pin4"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad5) */}
    <KiCadNet name={"unconnected__U3_NC_Pad5_"} connectsTo={[".U3 > .pin5"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad6) */}
    <KiCadNet name={"unconnected__U3_NC_Pad6_"} connectsTo={[".U3 > .pin6"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad7) */}
    <KiCadNet name={"unconnected__U3_NC_Pad7_"} connectsTo={[".U3 > .pin7"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad8) */}
    <KiCadNet name={"unconnected__U3_NC_Pad8_"} connectsTo={[".U3 > .pin8"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad9) */}
    <KiCadNet name={"unconnected__U3_NC_Pad9_"} connectsTo={[".U3 > .pin9"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad10) */}
    <KiCadNet name={"unconnected__U3_NC_Pad10_"} connectsTo={[".U3 > .pin10"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad11) */}
    <KiCadNet name={"unconnected__U3_NC_Pad11_"} connectsTo={[".U3 > .pin11"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad12) */}
    <KiCadNet name={"unconnected__U3_NC_Pad12_"} connectsTo={[".U3 > .pin12"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad13) */}
    <KiCadNet name={"unconnected__U3_NC_Pad13_"} connectsTo={[".U3 > .pin13"]}/>
    {/* KiCad net: Net-(U3-VCORE) */}
    <KiCadNet name={"Net__U3_VCORE_"} connectsTo={[".U3 > .pin31", ".C14 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3-RSVD1-Pad34) */}
    <KiCadNet name={"unconnected__U3_RSVD1_Pad34_"} connectsTo={[".U3 > .pin34"]}/>
    {/* KiCad net: unconnected-(U3-B_Y3P-Pad50) */}
    <KiCadNet name={"unconnected__U3_B_Y3P_Pad50_"} connectsTo={[".U3 > .pin50"]}/>
    {/* KiCad net: unconnected-(U3-B_Y3N-Pad51) */}
    <KiCadNet name={"unconnected__U3_B_Y3N_Pad51_"} connectsTo={[".U3 > .pin51"]}/>
    {/* KiCad net: unconnected-(U3-B_CLKP-Pad53) */}
    <KiCadNet name={"unconnected__U3_B_CLKP_Pad53_"} connectsTo={[".U3 > .pin53"]}/>
    {/* KiCad net: unconnected-(U3-B_CLKN-Pad54) */}
    <KiCadNet name={"unconnected__U3_B_CLKN_Pad54_"} connectsTo={[".U3 > .pin54"]}/>
    {/* KiCad net: unconnected-(U3-B_Y2P-Pad56) */}
    <KiCadNet name={"unconnected__U3_B_Y2P_Pad56_"} connectsTo={[".U3 > .pin56"]}/>
    {/* KiCad net: unconnected-(U3-B_Y2N-Pad57) */}
    <KiCadNet name={"unconnected__U3_B_Y2N_Pad57_"} connectsTo={[".U3 > .pin57"]}/>
    {/* KiCad net: unconnected-(U3-B_Y1P-Pad59) */}
    <KiCadNet name={"unconnected__U3_B_Y1P_Pad59_"} connectsTo={[".U3 > .pin59"]}/>
    {/* KiCad net: unconnected-(U3-B_Y1N-Pad60) */}
    <KiCadNet name={"unconnected__U3_B_Y1N_Pad60_"} connectsTo={[".U3 > .pin60"]}/>
    {/* KiCad net: unconnected-(U3-B_Y0P-Pad61) */}
    <KiCadNet name={"unconnected__U3_B_Y0P_Pad61_"} connectsTo={[".U3 > .pin61"]}/>
    {/* KiCad net: unconnected-(U3-B_Y0N-Pad62) */}
    <KiCadNet name={"unconnected__U3_B_Y0N_Pad62_"} connectsTo={[".U3 > .pin62"]}/>
    <KiCadSchematic /></board>);
}
