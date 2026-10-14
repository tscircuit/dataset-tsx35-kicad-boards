import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro GMSL serializer
// Source: https://github.com/antmicro/gmsl-serializer
// Commit: 58641df7b331050bbb4456cb4cb73e3975ae9de9; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_R31, Footprint_C3, Footprint_R14, Footprint_U6, Footprint_TP9, Footprint_TP7, Footprint_D5, Footprint_R44, Footprint_R33, Footprint_R41, Footprint_C14, Footprint_C10, Footprint_C7, Footprint_R37, Footprint_R20, Footprint_R7, Footprint_R1, Footprint_C19, Footprint_D11, Footprint_TP5, Footprint_R6, Footprint_C12, Footprint_R35, Footprint_Y1, Footprint_C11, Footprint_R19, Footprint_R28, Footprint_U4, Footprint_R39, Footprint_R29, Footprint_D9, Footprint_J1, Footprint_C18, Footprint_C8, Footprint_R17, Footprint_C2, Footprint_C34, Footprint_C6, Footprint_R46, Footprint_L3, Footprint_C32, Footprint_C4, Footprint_R25, Footprint_D2, Footprint_R3, Footprint_C15, Footprint_TP8, Footprint_U5, Footprint_C22, Footprint_D4, Footprint_MP4, Footprint_TP1, Footprint_R34, Footprint_D1, Footprint_R8, Footprint_R32, Footprint_C5, Footprint_R12, Footprint_C31, Footprint_U1, Footprint_R40, Footprint_L2, Footprint_U2, Footprint_MP1, Footprint_C33, Footprint_L7, Footprint_R38, Footprint_J2, Footprint_R4, Footprint_C17, Footprint_R21, Footprint_TP4, Footprint_L6, Footprint_TP2, Footprint_R27, Footprint_R2, Footprint_L4, Footprint_R11, Footprint_U3, Footprint_L5, Footprint_R15, Footprint_MP3, Footprint_Q1, Footprint_R22, Footprint_R9, Footprint_R18, Footprint_N1, Footprint_TP3, Footprint_C30, Footprint_R10, Footprint_R5, Footprint_R24, Footprint_R42, Footprint_R45, Footprint_C1, Footprint_L1, Footprint_Q3, Footprint_C20, Footprint_C21, Footprint_C29, Footprint_R26, Footprint_D3, Footprint_R13, Footprint_D8, Footprint_MP2, Footprint_C35, Footprint_C16, Footprint_R23, Footprint_R30, Footprint_TP6, Footprint_D6, Footprint_R16, Footprint_C28, Footprint_C24, Footprint_C25, Footprint_C26, Footprint_C27, Footprint_C23 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={43} height={43} thickness={1.586} layers={4} outline={[{ "x": -21.5, "y": -21.5 }, { "x": -21.5, "y": 21.5 }, { "x": 21.5, "y": 21.5 }, { "x": 21.5, "y": -21.5 }, { "x": -21.5, "y": -21.5 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* R31: R_0R_0402 */}
    <chip name={"R31"} pcbX={-9.75} pcbY={-11.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R31 />} noSchematicRepresentation={true}/>

    {/* C3: C_220n_0402 */}
    <chip name={"C3"} pcbX={-14.03} pcbY={14.469} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402KRX5R6BB224"} displayName={"C_220n_0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* R14: R_0R_22.4A_0603 */}
    <chip name={"R14"} pcbX={19.25} pcbY={-6.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PMR03EZPJ000"} displayName={"R_0R_22.4A_0603"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* U6: MAX96717GTJ_VY+ */}
    <chip name={"U6"} pcbX={2.5} pcbY={-2.5} pcbRotation={135} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} manufacturerPartNumber={"MAX96717GTJ/VY+"} displayName={"MAX96717GTJ_VY+"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* TP9: TP_1.5mm_SMD */}
    <chip name={"TP9"} pcbX={18.4} pcbY={-12} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* TP7: TP_1.5mm_SMD */}
    <chip name={"TP7"} pcbX={13.6} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* D5: LED_G_0603_LTST-C190GKT */}
    <chip name={"D5"} pcbX={-2.9} pcbY={-16.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* R44: R_10k_0402 */}
    <chip name={"R44"} pcbX={-4.32} pcbY={19.369858} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R44 />} noSchematicRepresentation={true}/>

    {/* R33: R_0R_0402 */}
    <chip name={"R33"} pcbX={-9.75} pcbY={-9.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R33 />} noSchematicRepresentation={true}/>

    {/* R41: R_10k_0402 */}
    <chip name={"R41"} pcbX={-0.41} pcbY={19.649858} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R41 />} noSchematicRepresentation={true}/>

    {/* C14: C_1u_16V_0402 */}
    <chip name={"C14"} pcbX={15.058} pcbY={-7.044} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C105M4PACTU"} displayName={"C_1u_16V_0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* C10: C_100n_0402 */}
    <chip name={"C10"} pcbX={20.4} pcbY={12.877} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* C7: C_22u_0402 */}
    <chip name={"C7"} pcbX={-8.57} pcbY={13.703} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM158R60J226ME01D"} displayName={"C_22u_0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* R37: R_31k6_0402 */}
    <chip name={"R37"} pcbX={-4.32} pcbY={18.289858} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3162GLF"} displayName={"R_31k6_0402"} footprint={<Footprint_R37 />} noSchematicRepresentation={true}/>

    {/* R20: R_0R_0402 */}
    <chip name={"R20"} pcbX={7.758} pcbY={-1.234} pcbRotation={-135} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* R7: R_10k_0402 */}
    <chip name={"R7"} pcbX={-8.295} pcbY={19.675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* R1: R_10k_0402 */}
    <chip name={"R1"} pcbX={-12.05} pcbY={-6.224} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* C19: C_10u_25V_0603 */}
    <chip name={"C19"} pcbX={0} pcbY={16.37} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1608X5R1E106M080AC"} displayName={"C_10u_25V_0603"} footprint={<Footprint_C19 />} noSchematicRepresentation={true}/>

    {/* D11: LED_G_0603_LTST-C190GKT */}
    <chip name={"D11"} pcbX={-0.17} pcbY={-16.41} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* TP5: TP_1.5mm_SMD */}
    <chip name={"TP5"} pcbX={5.35} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* R6: R_4k7_0402 */}
    <chip name={"R6"} pcbX={-9.75} pcbY={-12.63} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* C12: C_1u_16V_0402 */}
    <chip name={"C12"} pcbX={7.38} pcbY={-9.99} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C105M4PACTU"} displayName={"C_1u_16V_0402"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* R35: R_470R_0402 */}
    <chip name={"R35"} pcbX={4.195} pcbY={-16.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R35 />} noSchematicRepresentation={true}/>

    {/* Y1: Resonator_25MHz_ABM8G */}
    <chip name={"Y1"} pcbX={9.536} pcbY={-2.504} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ABM8G-25.000MHZ-18-D2Y-T3"} displayName={"Resonator_25MHz_ABM8G"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* C11: C_10n_0402 */}
    <chip name={"C11"} pcbX={18.701} pcbY={5.615} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* R19: R_10k_0402 */}
    <chip name={"R19"} pcbX={5} pcbY={-10.93} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* R28: R_10k_0402 */}
    <chip name={"R28"} pcbX={3} pcbY={-9.855} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R28 />} noSchematicRepresentation={true}/>

    {/* U4: REF3012AIDBZT */}
    <chip name={"U4"} pcbX={7.18} pcbY={-7.79} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"REF3012AIDBZT"} displayName={"REF3012AIDBZT"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* R39: R_470R_0402 */}
    <chip name={"R39"} pcbX={1.4} pcbY={-16.645} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R39 />} noSchematicRepresentation={true}/>

    {/* R29: R_51R_0402 */}
    <chip name={"R29"} pcbX={6.625} pcbY={2.675} pcbRotation={-135} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R29 />} noSchematicRepresentation={true}/>

    {/* D9: LED_G_0603_LTST-C190GKT */}
    <chip name={"D9"} pcbX={-5.65} pcbY={-16.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* J1: Conn_FFC_WE_68715014022 */}
    <chip name={"J1"} pcbX={-18.95} pcbY={-2.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["MP1"], "pin52": ["MP2"] }} manufacturerPartNumber={"68715014022"} displayName={"Conn_FFC_WE_68715014022"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* C18: C_10u_0402 */}
    <chip name={"C18"} pcbX={5.07} pcbY={3.13} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* C8: C_22u_0402 */}
    <chip name={"C8"} pcbX={20.275} pcbY={-3.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM158R60J226ME01D"} displayName={"C_22u_0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* R17: R_5k1_0402 */}
    <chip name={"R17"} pcbX={13.117} pcbY={2.472} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-5101GLF"} displayName={"R_5k1_0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* C2: C_10u_25V_0603 */}
    <chip name={"C2"} pcbX={19.625} pcbY={-1.275} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1608X5R1E106M080AC"} displayName={"C_10u_25V_0603"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* C34: C_22u_0402 */}
    <chip name={"C34"} pcbX={1} pcbY={13.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM158R60J226ME01D"} displayName={"C_22u_0402"} footprint={<Footprint_C34 />} noSchematicRepresentation={true}/>

    {/* C6: C_22u_0402 */}
    <chip name={"C6"} pcbX={19.325} pcbY={-3.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM158R60J226ME01D"} displayName={"C_22u_0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* R46: R_200R_0402 */}
    <chip name={"R46"} pcbX={-1.33} pcbY={-16.22} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2000GLF"} displayName={"R_200R_0402"} footprint={<Footprint_R46 />} noSchematicRepresentation={true}/>

    {/* L3: L_22u_1.12A_Coilcraft-MSS6132T */}
    <chip name={"L3"} pcbX={16.45} pcbY={9.688} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"MSS6132T-223"} displayName={"L_22u_1.12A_Coilcraft-MSS6132T"} footprint={<Footprint_L3 />} noSchematicRepresentation={true}/>

    {/* C32: C_10n_0402 */}
    <chip name={"C32"} pcbX={1.57} pcbY={1.99} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C32 />} noSchematicRepresentation={true}/>

    {/* C4: C_100n_0402 */}
    <chip name={"C4"} pcbX={14.15} pcbY={-3.081} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* R25: R_100R_0402 */}
    <chip name={"R25"} pcbX={-12.05} pcbY={-11.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1000GLF"} displayName={"R_100R_0402"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* D2: AXGD10402KR */}
    <chip name={"D2"} pcbX={7.347391} pcbY={1.300241} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"AXGD10402KR"} displayName={"AXGD10402KR"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* R3: R_100R_0402 */}
    <chip name={"R3"} pcbX={-12.05} pcbY={-8.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1000GLF"} displayName={"R_100R_0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* C15: C_1u_16V_0402 */}
    <chip name={"C15"} pcbX={10.05} pcbY={-8.012} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C105M4PACTU"} displayName={"C_1u_16V_0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_1.5mm_SMD */}
    <chip name={"TP8"} pcbX={10.85} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* U5: TLV73312PDBVT */}
    <chip name={"U5"} pcbX={12.536} pcbY={-6.577} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"TLV73312PDBVT"} displayName={"TLV73312PDBVT"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C22: C_100n_0402 */}
    <chip name={"C22"} pcbX={4.38} pcbY={2.44} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* D4: PESD4USB5U-TTS */}
    <chip name={"D4"} pcbX={-14.65} pcbY={-13.999} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"PESD4USB5U-TTS"} displayName={"PESD4USB5U-TTS"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* MP4: MP_Pad6mm_Drill3mm */}
    <chip name={"MP4"} pcbX={-18} pcbY={18} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MP_Pad6mm_Drill3mm"} footprint={<Footprint_MP4 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_1.5mm_SMD */}
    <chip name={"TP1"} pcbX={-2.9} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* R34: R_100k_0402 */}
    <chip name={"R34"} pcbX={6.55} pcbY={-16.005} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R34 />} noSchematicRepresentation={true}/>

    {/* D1: PESD4USB5U-TTS */}
    <chip name={"D1"} pcbX={-14.65} pcbY={-9.999} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"PESD4USB5U-TTS"} displayName={"PESD4USB5U-TTS"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R8: R_10k_0402 */}
    <chip name={"R8"} pcbX={18.8} pcbY={1.225} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* R32: R_0R_0402 */}
    <chip name={"R32"} pcbX={-9.75} pcbY={-8.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R32 />} noSchematicRepresentation={true}/>

    {/* C5: C_22u_0402 */}
    <chip name={"C5"} pcbX={-7.37} pcbY={13.703} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM158R60J226ME01D"} displayName={"C_22u_0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* R12: R_10k_0402 */}
    <chip name={"R12"} pcbX={15.836} pcbY={1.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* C31: C_100n_0402 */}
    <chip name={"C31"} pcbX={5.3} pcbY={1.325} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C31 />} noSchematicRepresentation={true}/>

    {/* U1: AP62301_TSOT */}
    <chip name={"U1"} pcbX={-11.371} pcbY={15.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"AP62301WU-7"} displayName={"AP62301_TSOT"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* R40: R_1k65_0402 */}
    <chip name={"R40"} pcbX={-6.8} pcbY={-16.175} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RC0402FR-071K65L"} displayName={"R_1k65_0402"} footprint={<Footprint_R40 />} noSchematicRepresentation={true}/>

    {/* L2: L_1u_2.6A_0806 */}
    <chip name={"L2"} pcbX={16.45} pcbY={-4.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"SRP2010-1R0M"} displayName={"L_1u_2.6A_0806"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* U2: AP62301_TSOT */}
    <chip name={"U2"} pcbX={16.65} pcbY={-1.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"AP62301WU-7"} displayName={"AP62301_TSOT"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* MP1: MP_Pad6mm_Drill3mm */}
    <chip name={"MP1"} pcbX={18} pcbY={-18} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MP_Pad6mm_Drill3mm"} footprint={<Footprint_MP1 />} noSchematicRepresentation={true}/>

    {/* C33: C_10u_0402 */}
    <chip name={"C33"} pcbX={2.76} pcbY={3.58} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C33 />} noSchematicRepresentation={true}/>

    {/* L7: L_3u3_3.1A_Bourns-SRP3212A */}
    <chip name={"L7"} pcbX={-2.9} pcbY={12.439858} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"SRP3212-3R3M"} displayName={"L_3u3_3.1A_Bourns-SRP3212A"} footprint={<Footprint_L7 />} noSchematicRepresentation={true}/>

    {/* R38: R_100k_0402 */}
    <chip name={"R38"} pcbX={3.9} pcbY={-13.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R38 />} noSchematicRepresentation={true}/>

    {/* J2: Conn_FAKRA_59S2AQ-40MT5-Z_1 */}
    <chip name={"J2"} pcbX={7.85} pcbY={19.352} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"59S2AQ-40MT5-Z_1"} displayName={"Conn_FAKRA_59S2AQ-40MT5-Z_1"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* R4: R_100R_0402 */}
    <chip name={"R4"} pcbX={-12.05} pcbY={-9.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1000GLF"} displayName={"R_100R_0402"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* C17: C_33p_0402 */}
    <chip name={"C17"} pcbX={11.08} pcbY={-0.44} pcbRotation={135} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"04025A330FAT2A"} displayName={"C_33p_0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* R21: R_10k_0402 */}
    <chip name={"R21"} pcbX={3} pcbY={-12.005} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_1.5mm_SMD */}
    <chip name={"TP4"} pcbX={-0.15} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* L6: L_470n_1A_Coilcraft-PFL1609 */}
    <chip name={"L6"} pcbX={8.485} pcbY={7.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PFL1609-471"} displayName={"L_470n_1A_Coilcraft-PFL1609"} footprint={<Footprint_L6 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_1.5mm_SMD */}
    <chip name={"TP2"} pcbX={2.6} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* R27: R_10k_0402 */}
    <chip name={"R27"} pcbX={-9.32} pcbY={19.675} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* R2: R_12k_0402 */}
    <chip name={"R2"} pcbX={-12.05} pcbY={-7.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1202GLF"} displayName={"R_12k_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* L4: L_6u8_1A_Coilcraft-1210POC */}
    <chip name={"L4"} pcbX={13.092} pcbY={4.608} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"1210POC-682"} displayName={"L_6u8_1A_Coilcraft-1210POC"} footprint={<Footprint_L4 />} noSchematicRepresentation={true}/>

    {/* R11: R_12k4_0402 */}
    <chip name={"R11"} pcbX={15.836} pcbY={0.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1242GLF"} displayName={"R_12k4_0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* U3: AP62301_TSOT */}
    <chip name={"U3"} pcbX={-2.955} pcbY={15.999858} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"AP62301WU-7"} displayName={"AP62301_TSOT"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* L5: L_470n_1A_Coilcraft-PFL1609 */}
    <chip name={"L5"} pcbX={11.187} pcbY={7.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PFL1609-471"} displayName={"L_470n_1A_Coilcraft-PFL1609"} footprint={<Footprint_L5 />} noSchematicRepresentation={true}/>

    {/* R15: R_470R_0402 */}
    <chip name={"R15"} pcbX={-4.05} pcbY={-16.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* MP3: MP_Pad6mm_Drill3mm */}
    <chip name={"MP3"} pcbX={-11} pcbY={-18} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MP_Pad6mm_Drill3mm"} footprint={<Footprint_MP3 />} noSchematicRepresentation={true}/>

    {/* Q1: DMG1012T-7 */}
    <chip name={"Q1"} pcbX={6.02} pcbY={-13.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"DMG1012T-7"} displayName={"DMG1012T-7"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* R22: R_10k_0402 */}
    <chip name={"R22"} pcbX={5.01} pcbY={-12.005} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* R9: R_52k3_0402 */}
    <chip name={"R9"} pcbX={-12.98} pcbY={18.154} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-5232GLF"} displayName={"R_52k3_0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* R18: R_80k6_0402 */}
    <chip name={"R18"} pcbX={3} pcbY={-10.93} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-8062GLF"} displayName={"R_80k6_0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* N1: antmicro_logo */}
    <chip name={"N1"} pcbX={-8.525} pcbY={6.695} pcbRotation={0} pinLabels={{}} displayName={"antmicro_logo"} footprint={<Footprint_N1 />} noSchematicRepresentation={true}/>

    {/* TP3: TP_1.5mm_SMD */}
    <chip name={"TP3"} pcbX={-5.65} pcbY={-18.65} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* C30: C_100n_0402 */}
    <chip name={"C30"} pcbX={5.882448} pcbY={0.54} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C30 />} noSchematicRepresentation={true}/>

    {/* R10: R_10k_0402 */}
    <chip name={"R10"} pcbX={-12.98} pcbY={19.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R5: R_4k7_0402 */}
    <chip name={"R5"} pcbX={-12.05} pcbY={-12.63} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* R24: R_100R_0402 */}
    <chip name={"R24"} pcbX={-12.049} pcbY={-10.534} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1000GLF"} displayName={"R_100R_0402"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* R42: R_10k_0402 */}
    <chip name={"R42"} pcbX={-1.46} pcbY={19.649858} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R42 />} noSchematicRepresentation={true}/>

    {/* R45: R_0R_22.4A_0603 */}
    <chip name={"R45"} pcbX={0.145} pcbY={10.679858} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PMR03EZPJ000"} displayName={"R_0R_22.4A_0603"} footprint={<Footprint_R45 />} noSchematicRepresentation={true}/>

    {/* C1: C_10u_25V_0603 */}
    <chip name={"C1"} pcbX={-8.395} pcbY={16.25} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1608X5R1E106M080AC"} displayName={"C_10u_25V_0603"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* L1: L_3u3_3.1A_Bourns-SRP3212A */}
    <chip name={"L1"} pcbX={-11.371} pcbY={12.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"SRP3212-3R3M"} displayName={"L_3u3_3.1A_Bourns-SRP3212A"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* Q3: DMG1012T-7 */}
    <chip name={"Q3"} pcbX={2.275} pcbY={-13.875} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"DMG1012T-7"} displayName={"DMG1012T-7"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* C20: C_100n_0402 */}
    <chip name={"C20"} pcbX={3.7} pcbY={1.74} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* C21: C_220n_0402 */}
    <chip name={"C21"} pcbX={-5.59} pcbY={14.499858} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402KRX5R6BB224"} displayName={"C_220n_0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* C29: C_10n_0402 */}
    <chip name={"C29"} pcbX={2.07} pcbY={2.89} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C29 />} noSchematicRepresentation={true}/>

    {/* R26: R_10k_0402 */}
    <chip name={"R26"} pcbX={18.8} pcbY={2.225} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* D3: PESD4USB5U-TTS */}
    <chip name={"D3"} pcbX={-14.65} pcbY={-6.749} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} manufacturerPartNumber={"PESD4USB5U-TTS"} displayName={"PESD4USB5U-TTS"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* R13: R_0R_22.4A_0603 */}
    <chip name={"R13"} pcbX={-8.221} pcbY={10.703} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PMR03EZPJ000"} displayName={"R_0R_22.4A_0603"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* D8: LED_G_0603_LTST-C190GKT */}
    <chip name={"D8"} pcbX={2.6} pcbY={-16.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* MP2: MP_Pad6mm_Drill3mm */}
    <chip name={"MP2"} pcbX={18} pcbY={18} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MP_Pad6mm_Drill3mm"} footprint={<Footprint_MP2 />} noSchematicRepresentation={true}/>

    {/* C35: C_22u_0402 */}
    <chip name={"C35"} pcbX={-0.05} pcbY={13.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM158R60J226ME01D"} displayName={"C_22u_0402"} footprint={<Footprint_C35 />} noSchematicRepresentation={true}/>

    {/* C16: C_33p_0402 */}
    <chip name={"C16"} pcbX={7.54} pcbY={-3.98} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"04025A330FAT2A"} displayName={"C_33p_0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* R23: R_402R_0402 */}
    <chip name={"R23"} pcbX={6.919483} pcbY={-0.497484} pcbRotation={-135} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4020GLF"} displayName={"R_402R_0402"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* R30: R_0R_0402 */}
    <chip name={"R30"} pcbX={-9.75} pcbY={-10.534} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R30 />} noSchematicRepresentation={true}/>

    {/* TP6: TP_1.5mm_SMD */}
    <chip name={"TP6"} pcbX={8.1} pcbY={-18.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* D6: LED_G_0603_LTST-C190GKT */}
    <chip name={"D6"} pcbX={5.35} pcbY={-16.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LTST-C190GKT"} displayName={"LED_G_0603_LTST-C190GKT"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* R16: R_5k1_0402 */}
    <chip name={"R16"} pcbX={16.45} pcbY={13.752} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-5101GLF"} displayName={"R_5k1_0402"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* C28: C_10n_0402 */}
    <chip name={"C28"} pcbX={5.02} pcbY={-2.09} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C28 />} noSchematicRepresentation={true}/>

    {/* C24: C_100n_0402 */}
    <chip name={"C24"} pcbX={2.940036} pcbY={-0.010037} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* C25: C_10u_0402 */}
    <chip name={"C25"} pcbX={5.71} pcbY={-2.78} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* C26: C_10u_0402 */}
    <chip name={"C26"} pcbX={2.24} pcbY={0.69} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* C27: C_10n_0402 */}
    <chip name={"C27"} pcbX={4.33} pcbY={-1.4} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* C23: C_10n_0402 */}
    <chip name={"C23"} pcbX={3.640071} pcbY={-0.710072} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C23 />} noSchematicRepresentation={true}/>

    {/* KiCad net: /CSI Connector/I2C.SCL */}
    <KiCadNet name={"_CSI_Connector_I2C_SCL"} connectsTo={[".R31 > .pin1", ".R33 > .pin1", ".R6 > .pin1", ".R25 > .pin2", ".R4 > .pin2"]}/>
    {/* KiCad net: Net-(U6-MFP8) */}
    <KiCadNet name={"Net__U6_MFP8_"} connectsTo={[".R31 > .pin2", ".U6 > .pin32"]}/>
    {/* KiCad net: Net-(U1-BST) */}
    <KiCadNet name={"Net__U1_BST_"} connectsTo={[".C3 > .pin1", ".U1 > .pin6"]}/>
    {/* KiCad net: /Supply/SW_5V */}
    <KiCadNet name={"_Supply_SW_5V"} connectsTo={[".C3 > .pin2", ".U1 > .pin2", ".L1 > .pin1"]}/>
    {/* KiCad net: /Supply/OUT_1V8 */}
    <KiCadNet name={"_Supply_OUT_1V8"} connectsTo={[".R14 > .pin1", ".C8 > .pin2", ".C6 > .pin2", ".L2 > .pin2", ".R11 > .pin2"]}/>
    {/* KiCad net: +1V8 */}
    <KiCadNet name={"_1V8"} connectsTo={[".R14 > .pin2", ".U6 > .pin11", ".C14 > .pin2", ".U5 > .pin1", ".U5 > .pin3", ".R38 > .pin2", ".TP2 > .pin1", ".Q3 > .pin1", ".C28 > .pin2", ".C25 > .pin2", ".C27 > .pin2"]}/>
    {/* KiCad net: Net-(U6-PWDNB) */}
    <KiCadNet name={"Net__U6_PWDNB_"} connectsTo={[".U6 > .pin1", ".R28 > .pin1"]}/>
    {/* KiCad net: Net-(U6-MFP0) */}
    <KiCadNet name={"Net__U6_MFP0_"} connectsTo={[".U6 > .pin2", ".TP6 > .pin1"]}/>
    {/* KiCad net: /Serializer/CFG0 */}
    <KiCadNet name={"_Serializer_CFG0"} connectsTo={[".U6 > .pin3", ".R19 > .pin2", ".R18 > .pin1"]}/>
    {/* KiCad net: /Serializer/CFG1 */}
    <KiCadNet name={"_Serializer_CFG1"} connectsTo={[".U6 > .pin4", ".R21 > .pin1", ".R22 > .pin2"]}/>
    {/* KiCad net: Net-(U6-MFP9) */}
    <KiCadNet name={"Net__U6_MFP9_"} connectsTo={[".U6 > .pin5", ".R32 > .pin2"]}/>
    {/* KiCad net: Net-(U6-MFP10) */}
    <KiCadNet name={"Net__U6_MFP10_"} connectsTo={[".U6 > .pin6", ".R33 > .pin2"]}/>
    {/* KiCad net: /Serializer/VREF */}
    <KiCadNet name={"_Serializer_VREF"} connectsTo={[".U6 > .pin7", ".U4 > .pin2"]}/>
    {/* KiCad net: /Serializer/X1 */}
    <KiCadNet name={"_Serializer_X1"} connectsTo={[".U6 > .pin8", ".Y1 > .pin1", ".C16 > .pin2"]}/>
    {/* KiCad net: /Serializer/X2 */}
    <KiCadNet name={"_Serializer_X2"} connectsTo={[".U6 > .pin9", ".R20 > .pin2"]}/>
    {/* KiCad net: Net-(U6-XRES) */}
    <KiCadNet name={"Net__U6_XRES_"} connectsTo={[".U6 > .pin10", ".R23 > .pin2"]}/>
    {/* KiCad net: Net-(U6-SIOP) */}
    <KiCadNet name={"Net__U6_SIOP_"} connectsTo={[".U6 > .pin12", ".C30 > .pin1"]}/>
    {/* KiCad net: Net-(U6-SION) */}
    <KiCadNet name={"Net__U6_SION_"} connectsTo={[".U6 > .pin13", ".C31 > .pin1"]}/>
    {/* KiCad net: Net-(U6-CAP_VDD) */}
    <KiCadNet name={"Net__U6_CAP_VDD_"} connectsTo={[".U6 > .pin14", ".C24 > .pin2", ".C26 > .pin2", ".C23 > .pin2"]}/>
    {/* KiCad net: +1V2 */}
    <KiCadNet name={"_1V2"} connectsTo={[".U6 > .pin15", ".TP5 > .pin1", ".C18 > .pin2", ".C15 > .pin2", ".U5 > .pin5", ".C22 > .pin2", ".R34 > .pin2", ".Q1 > .pin1", ".C20 > .pin2"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".U6 > .pin16", ".D11 > .pin2", ".R6 > .pin2", ".R28 > .pin2", ".J1 > .pin47", ".J1 > .pin48", ".C32 > .pin2", ".D4 > .pin1", ".D4 > .pin2", ".D4 > .pin9", ".D4 > .pin10", ".C33 > .pin2", ".R21 > .pin2", ".TP4 > .pin1", ".R18 > .pin2", ".R5 > .pin2", ".R45 > .pin2", ".C29 > .pin2"]}/>
    {/* KiCad net: /CSI Connector/GPIO3 */}
    <KiCadNet name={"_CSI_Connector_GPIO3"} connectsTo={[".U6 > .pin17", ".J1 > .pin32", ".D3 > .pin1", ".D3 > .pin10"]}/>
    {/* KiCad net: /CSI Connector/GPIO4 */}
    <KiCadNet name={"_CSI_Connector_GPIO4"} connectsTo={[".U6 > .pin18", ".R1 > .pin2"]}/>
    {/* KiCad net: /CSI Connector/CSI.D2_P */}
    <KiCadNet name={"_CSI_Connector_CSI_D2_P"} connectsTo={[".U6 > .pin19", ".J1 > .pin22"]}/>
    {/* KiCad net: /CSI Connector/CSI.D2_N */}
    <KiCadNet name={"_CSI_Connector_CSI_D2_N"} connectsTo={[".U6 > .pin20", ".J1 > .pin21"]}/>
    {/* KiCad net: Net-(U6-MFP5) */}
    <KiCadNet name={"Net__U6_MFP5_"} connectsTo={[".U6 > .pin21", ".TP7 > .pin1"]}/>
    {/* KiCad net: Net-(U6-MFP6) */}
    <KiCadNet name={"Net__U6_MFP6_"} connectsTo={[".U6 > .pin22", ".TP8 > .pin1"]}/>
    {/* KiCad net: /CSI Connector/CSI.D3_P */}
    <KiCadNet name={"_CSI_Connector_CSI_D3_P"} connectsTo={[".U6 > .pin23", ".J1 > .pin20"]}/>
    {/* KiCad net: /CSI Connector/CSI.D3_N */}
    <KiCadNet name={"_CSI_Connector_CSI_D3_N"} connectsTo={[".U6 > .pin24", ".J1 > .pin19"]}/>
    {/* KiCad net: /CSI Connector/CSI.D0_P */}
    <KiCadNet name={"_CSI_Connector_CSI_D0_P"} connectsTo={[".U6 > .pin25", ".J1 > .pin26"]}/>
    {/* KiCad net: /CSI Connector/CSI.D0_N */}
    <KiCadNet name={"_CSI_Connector_CSI_D0_N"} connectsTo={[".U6 > .pin26", ".J1 > .pin25"]}/>
    {/* KiCad net: /CSI Connector/CSI.CLK_P */}
    <KiCadNet name={"_CSI_Connector_CSI_CLK_P"} connectsTo={[".U6 > .pin27", ".J1 > .pin29"]}/>
    {/* KiCad net: /CSI Connector/CSI.CLK_N */}
    <KiCadNet name={"_CSI_Connector_CSI_CLK_N"} connectsTo={[".U6 > .pin28", ".J1 > .pin28"]}/>
    {/* KiCad net: /CSI Connector/CSI.D1_P */}
    <KiCadNet name={"_CSI_Connector_CSI_D1_P"} connectsTo={[".U6 > .pin29", ".J1 > .pin24"]}/>
    {/* KiCad net: /CSI Connector/CSI.D1_N */}
    <KiCadNet name={"_CSI_Connector_CSI_D1_N"} connectsTo={[".U6 > .pin30", ".J1 > .pin23"]}/>
    {/* KiCad net: Net-(U6-MFP7) */}
    <KiCadNet name={"Net__U6_MFP7_"} connectsTo={[".U6 > .pin31", ".R30 > .pin2"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".U6 > .pin33", ".TP9 > .pin1", ".R44 > .pin1", ".C14 > .pin1", ".C10 > .pin1", ".C7 > .pin1", ".C19 > .pin1", ".C12 > .pin1", ".Y1 > .pin2", ".Y1 > .pin4", ".C11 > .pin1", ".R19 > .pin1", ".U4 > .pin3", ".R29 > .pin1", ".J1 > .pin9", ".J1 > .pin12", ".J1 > .pin15", ".J1 > .pin18", ".J1 > .pin27", ".J1 > .pin30", ".J1 > .pin51", ".J1 > .pin52", ".C18 > .pin1", ".C8 > .pin1", ".C2 > .pin1", ".C34 > .pin1", ".C6 > .pin1", ".R46 > .pin1", ".C32 > .pin1", ".D2 > .pin2", ".C15 > .pin1", ".U5 > .pin2", ".C22 > .pin1", ".D4 > .pin3", ".D4 > .pin8", ".MP4 > .pin1", ".R34 > .pin1", ".D1 > .pin3", ".D1 > .pin8", ".C5 > .pin1", ".R12 > .pin1", ".U1 > .pin1", ".R40 > .pin1", ".U2 > .pin1", ".MP1 > .pin1", ".C33 > .pin1", ".R38 > .pin1", ".J2 > .pin2", ".J2 > .pin3", ".J2 > .pin4", ".J2 > .pin5", ".C17 > .pin1", ".R27 > .pin1", ".R2 > .pin2", ".U3 > .pin1", ".R15 > .pin1", ".MP3 > .pin1", ".Q1 > .pin2", ".R22 > .pin1", ".R10 > .pin1", ".R42 > .pin1", ".C1 > .pin1", ".Q3 > .pin2", ".C20 > .pin1", ".C29 > .pin1", ".R26 > .pin1", ".D3 > .pin3", ".D3 > .pin8", ".MP2 > .pin1", ".C35 > .pin1", ".C16 > .pin1", ".R23 > .pin1", ".C28 > .pin1", ".C24 > .pin1", ".C25 > .pin1", ".C26 > .pin1", ".C27 > .pin1", ".C23 > .pin1"]}/>
    {/* KiCad net: Net-(D5-C) */}
    <KiCadNet name={"Net__D5_C_"} connectsTo={[".D5 > .pin1", ".R15 > .pin2"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".D5 > .pin2", ".C12 > .pin2", ".R35 > .pin2", ".U4 > .pin1", ".R39 > .pin2", ".J1 > .pin49", ".J1 > .pin50", ".D4 > .pin4", ".D4 > .pin5", ".D4 > .pin6", ".D4 > .pin7", ".TP1 > .pin1", ".R13 > .pin2"]}/>
    {/* KiCad net: /Supply/FB_3V3 */}
    <KiCadNet name={"_Supply_FB_3V3"} connectsTo={[".R44 > .pin2", ".R37 > .pin1", ".U3 > .pin4"]}/>
    {/* KiCad net: /Supply/EN_3V3 */}
    <KiCadNet name={"_Supply_EN_3V3"} connectsTo={[".R41 > .pin1", ".U3 > .pin5", ".R42 > .pin2"]}/>
    {/* KiCad net: +12V */}
    <KiCadNet name={"_12V"} connectsTo={[".R41 > .pin2", ".C10 > .pin2", ".R7 > .pin2", ".C19 > .pin2", ".C11 > .pin2", ".D9 > .pin2", ".C2 > .pin2", ".L3 > .pin1", ".R8 > .pin2", ".U1 > .pin3", ".U2 > .pin3", ".U3 > .pin3", ".TP3 > .pin1", ".C1 > .pin2", ".R16 > .pin1"]}/>
    {/* KiCad net: /Supply/OUT_5V */}
    <KiCadNet name={"_Supply_OUT_5V"} connectsTo={[".C7 > .pin2", ".C5 > .pin2", ".R9 > .pin2", ".L1 > .pin2", ".R13 > .pin1"]}/>
    {/* KiCad net: /Supply/OUT_3V3 */}
    <KiCadNet name={"_Supply_OUT_3V3"} connectsTo={[".R37 > .pin2", ".C34 > .pin2", ".L7 > .pin2", ".R45 > .pin1", ".C35 > .pin2"]}/>
    {/* KiCad net: /Serializer/X2_R */}
    <KiCadNet name={"_Serializer_X2_R"} connectsTo={[".R20 > .pin1", ".Y1 > .pin3", ".C17 > .pin2"]}/>
    {/* KiCad net: /Supply/EN_5V */}
    <KiCadNet name={"_Supply_EN_5V"} connectsTo={[".R7 > .pin1", ".U1 > .pin5", ".R27 > .pin2"]}/>
    {/* KiCad net: /CSI Connector/GPIO4_1V8 */}
    <KiCadNet name={"_CSI_Connector_GPIO4_1V8"} connectsTo={[".R1 > .pin1", ".J1 > .pin34", ".R2 > .pin1", ".D3 > .pin2", ".D3 > .pin9"]}/>
    {/* KiCad net: Net-(D11-C) */}
    <KiCadNet name={"Net__D11_C_"} connectsTo={[".D11 > .pin1", ".R46 > .pin2"]}/>
    {/* KiCad net: Net-(D6-A) */}
    <KiCadNet name={"Net__D6_A_"} connectsTo={[".R35 > .pin1", ".D6 > .pin2"]}/>
    {/* KiCad net: Net-(D8-A) */}
    <KiCadNet name={"Net__D8_A_"} connectsTo={[".R39 > .pin1", ".D8 > .pin2"]}/>
    {/* KiCad net: Net-(C31-Pad2) */}
    <KiCadNet name={"Net__C31_Pad2_"} connectsTo={[".R29 > .pin2", ".C31 > .pin2"]}/>
    {/* KiCad net: Net-(D9-C) */}
    <KiCadNet name={"Net__D9_C_"} connectsTo={[".D9 > .pin1", ".R40 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-Pad1) */}
    <KiCadNet name={"unconnected__J1_Pad1_"} connectsTo={[".J1 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1-Pad2) */}
    <KiCadNet name={"unconnected__J1_Pad2_"} connectsTo={[".J1 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-Pad3) */}
    <KiCadNet name={"unconnected__J1_Pad3_"} connectsTo={[".J1 > .pin3"]}/>
    {/* KiCad net: unconnected-(J1-Pad4) */}
    <KiCadNet name={"unconnected__J1_Pad4_"} connectsTo={[".J1 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1-Pad5) */}
    <KiCadNet name={"unconnected__J1_Pad5_"} connectsTo={[".J1 > .pin5"]}/>
    {/* KiCad net: unconnected-(J1-Pad6) */}
    <KiCadNet name={"unconnected__J1_Pad6_"} connectsTo={[".J1 > .pin6"]}/>
    {/* KiCad net: unconnected-(J1-Pad7) */}
    <KiCadNet name={"unconnected__J1_Pad7_"} connectsTo={[".J1 > .pin7"]}/>
    {/* KiCad net: unconnected-(J1-Pad8) */}
    <KiCadNet name={"unconnected__J1_Pad8_"} connectsTo={[".J1 > .pin8"]}/>
    {/* KiCad net: unconnected-(J1-Pad10) */}
    <KiCadNet name={"unconnected__J1_Pad10_"} connectsTo={[".J1 > .pin10"]}/>
    {/* KiCad net: unconnected-(J1-Pad11) */}
    <KiCadNet name={"unconnected__J1_Pad11_"} connectsTo={[".J1 > .pin11"]}/>
    {/* KiCad net: unconnected-(J1-Pad13) */}
    <KiCadNet name={"unconnected__J1_Pad13_"} connectsTo={[".J1 > .pin13"]}/>
    {/* KiCad net: unconnected-(J1-Pad14) */}
    <KiCadNet name={"unconnected__J1_Pad14_"} connectsTo={[".J1 > .pin14"]}/>
    {/* KiCad net: unconnected-(J1-Pad16) */}
    <KiCadNet name={"unconnected__J1_Pad16_"} connectsTo={[".J1 > .pin16"]}/>
    {/* KiCad net: unconnected-(J1-Pad17) */}
    <KiCadNet name={"unconnected__J1_Pad17_"} connectsTo={[".J1 > .pin17"]}/>
    {/* KiCad net: unconnected-(J1-Pad31) */}
    <KiCadNet name={"unconnected__J1_Pad31_"} connectsTo={[".J1 > .pin31"]}/>
    {/* KiCad net: unconnected-(J1-Pad33) */}
    <KiCadNet name={"unconnected__J1_Pad33_"} connectsTo={[".J1 > .pin33"]}/>
    {/* KiCad net: unconnected-(J1-Pad35) */}
    <KiCadNet name={"unconnected__J1_Pad35_"} connectsTo={[".J1 > .pin35"]}/>
    {/* KiCad net: unconnected-(J1-Pad36) */}
    <KiCadNet name={"unconnected__J1_Pad36_"} connectsTo={[".J1 > .pin36"]}/>
    {/* KiCad net: unconnected-(J1-Pad37) */}
    <KiCadNet name={"unconnected__J1_Pad37_"} connectsTo={[".J1 > .pin37"]}/>
    {/* KiCad net: unconnected-(J1-Pad38) */}
    <KiCadNet name={"unconnected__J1_Pad38_"} connectsTo={[".J1 > .pin38"]}/>
    {/* KiCad net: /CSI Connector/SDA_CAM0 */}
    <KiCadNet name={"_CSI_Connector_SDA_CAM0"} connectsTo={[".J1 > .pin39", ".R3 > .pin1", ".D1 > .pin1", ".D1 > .pin10"]}/>
    {/* KiCad net: /CSI Connector/SCL_CAM0 */}
    <KiCadNet name={"_CSI_Connector_SCL_CAM0"} connectsTo={[".J1 > .pin40", ".D1 > .pin2", ".D1 > .pin9", ".R4 > .pin1"]}/>
    {/* KiCad net: /CSI Connector/SDA_CAM1 */}
    <KiCadNet name={"_CSI_Connector_SDA_CAM1"} connectsTo={[".J1 > .pin41", ".D1 > .pin4", ".D1 > .pin7", ".R24 > .pin1"]}/>
    {/* KiCad net: /CSI Connector/SCL_CAM1 */}
    <KiCadNet name={"_CSI_Connector_SCL_CAM1"} connectsTo={[".J1 > .pin42", ".R25 > .pin1", ".D1 > .pin5", ".D1 > .pin6"]}/>
    {/* KiCad net: unconnected-(J1-Pad43) */}
    <KiCadNet name={"unconnected__J1_Pad43_"} connectsTo={[".J1 > .pin43"]}/>
    {/* KiCad net: unconnected-(J1-Pad44) */}
    <KiCadNet name={"unconnected__J1_Pad44_"} connectsTo={[".J1 > .pin44"]}/>
    {/* KiCad net: unconnected-(J1-Pad45) */}
    <KiCadNet name={"unconnected__J1_Pad45_"} connectsTo={[".J1 > .pin45"]}/>
    {/* KiCad net: unconnected-(J1-Pad46) */}
    <KiCadNet name={"unconnected__J1_Pad46_"} connectsTo={[".J1 > .pin46"]}/>
    {/* KiCad net: Net-(L3-Pad2) */}
    <KiCadNet name={"Net__L3_Pad2_"} connectsTo={[".R17 > .pin1", ".L3 > .pin2", ".L4 > .pin1", ".R16 > .pin2"]}/>
    {/* KiCad net: Net-(L4-Pad2) */}
    <KiCadNet name={"Net__L4_Pad2_"} connectsTo={[".R17 > .pin2", ".L4 > .pin2", ".L5 > .pin1"]}/>
    {/* KiCad net: Net-(U2-BST) */}
    <KiCadNet name={"Net__U2_BST_"} connectsTo={[".C4 > .pin1", ".U2 > .pin6"]}/>
    {/* KiCad net: /Supply/SW_1V8 */}
    <KiCadNet name={"_Supply_SW_1V8"} connectsTo={[".C4 > .pin2", ".L2 > .pin1", ".U2 > .pin2"]}/>
    {/* KiCad net: /GMSL Connector/SIO_P */}
    <KiCadNet name={"_GMSL_Connector_SIO_P"} connectsTo={[".D2 > .pin1", ".J2 > .pin1", ".L6 > .pin2", ".C30 > .pin2"]}/>
    {/* KiCad net: /CSI Connector/I2C.SDA */}
    <KiCadNet name={"_CSI_Connector_I2C_SDA"} connectsTo={[".R3 > .pin2", ".R32 > .pin1", ".R5 > .pin1", ".R24 > .pin2", ".R30 > .pin1"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad4) */}
    <KiCadNet name={"unconnected__U5_NC_Pad4_"} connectsTo={[".U5 > .pin4"]}/>
    {/* KiCad net: /Supply/EN_1V8 */}
    <KiCadNet name={"_Supply_EN_1V8"} connectsTo={[".R8 > .pin1", ".U2 > .pin5", ".R26 > .pin2"]}/>
    {/* KiCad net: /Supply/FB_1V8 */}
    <KiCadNet name={"_Supply_FB_1V8"} connectsTo={[".R12 > .pin2", ".U2 > .pin4", ".R11 > .pin1"]}/>
    {/* KiCad net: /Supply/FB_5V */}
    <KiCadNet name={"_Supply_FB_5V"} connectsTo={[".U1 > .pin4", ".R9 > .pin1", ".R10 > .pin2"]}/>
    {/* KiCad net: /Supply/SW_3V3 */}
    <KiCadNet name={"_Supply_SW_3V3"} connectsTo={[".L7 > .pin1", ".U3 > .pin2", ".C21 > .pin2"]}/>
    {/* KiCad net: Net-(L5-Pad2) */}
    <KiCadNet name={"Net__L5_Pad2_"} connectsTo={[".L6 > .pin1", ".L5 > .pin2"]}/>
    {/* KiCad net: Net-(U3-BST) */}
    <KiCadNet name={"Net__U3_BST_"} connectsTo={[".U3 > .pin6", ".C21 > .pin1"]}/>
    {/* KiCad net: Net-(D6-C) */}
    <KiCadNet name={"Net__D6_C_"} connectsTo={[".Q1 > .pin3", ".D6 > .pin1"]}/>
    {/* KiCad net: Net-(D8-C) */}
    <KiCadNet name={"Net__D8_C_"} connectsTo={[".Q3 > .pin3", ".D8 > .pin1"]}/>
    {/* KiCad net: unconnected-(D3-Pad4) */}
    <KiCadNet name={"unconnected__D3_Pad4_"} connectsTo={[".D3 > .pin4", ".D3 > .pin7"]}/>
    {/* KiCad net: unconnected-(D3-Pad5) */}
    <KiCadNet name={"unconnected__D3_Pad5_"} connectsTo={[".D3 > .pin5", ".D3 > .pin6"]}/>
    <KiCadSchematic /></board>);
}
