import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro CVBS-to-MIPI bridge
// Source: https://github.com/antmicro/cvbs-mipi-bridge
// Commit: 7cbcec2bceaf6e1efd25cce1d73ff4989dfcfe02; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_REF__, Footprint_S1, Footprint_C15, Footprint_Q1, Footprint_C27, Footprint_C3, Footprint_R32, Footprint_IC2, Footprint_TP4, Footprint_R3, Footprint_R33, Footprint_R12, Footprint_R21, Footprint_R16, Footprint_R10, Footprint_TP5, Footprint_J4, Footprint_R29, Footprint_C7, Footprint_C4, Footprint_J2, Footprint_Q2, Footprint_R19, Footprint_FB3, Footprint_J7, Footprint_C6, Footprint_R5, Footprint_D8, Footprint_D5, Footprint_IC1, Footprint_C22, Footprint_IC4, Footprint_C29, Footprint_TP9, Footprint_C19, Footprint_R15, Footprint_Q3, Footprint_R13, Footprint_C2, Footprint_R31, Footprint_J5, Footprint_TP13, Footprint_R24, Footprint_R14, Footprint_D3, Footprint_FB1, Footprint_C25, Footprint_R1, Footprint_D1, Footprint_J1, Footprint_TP1, Footprint_TP10, Footprint_R4, Footprint_TP14, Footprint_R8, Footprint_FB4, Footprint_R7, Footprint_R25, Footprint_R20, Footprint_D6, Footprint_C28, Footprint_R18, Footprint_C12, Footprint_C11, Footprint_TP6, Footprint_R6, Footprint_R17, Footprint_C16, Footprint_J3, Footprint_TP8, Footprint_IC5, Footprint_C24, Footprint_R2, Footprint_C17, Footprint_C8, Footprint_C30, Footprint_C21, Footprint_C31, Footprint_R9, Footprint_TP11, Footprint_FB5, Footprint_C18, Footprint_J6, Footprint_R27, Footprint_TP15, Footprint_C20, Footprint_D2, Footprint_C32, Footprint_TP7, Footprint_TP12, Footprint_REF___, Footprint_TP3, Footprint_C23, Footprint_Y1, Footprint_R26, Footprint_D7, Footprint_D4, Footprint_TP2, Footprint_C14, Footprint_C9, Footprint_R11, Footprint_C26, Footprint_C1, Footprint_R23, Footprint_Q4, Footprint_R30, Footprint_R22, Footprint_TP16, Footprint_C5, Footprint_R28, Footprint_C10, Footprint_C13, Footprint_MP3, Footprint_MP1, Footprint_MP4, Footprint_MP2 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={54.999999999999986} height={70} thickness={1.586} layers={4} outline={[{ "x": -27.499999999999986, "y": -35 }, { "x": -27.499999999999986, "y": 35 }, { "x": 27.5, "y": 35 }, { "x": 27.5, "y": -35 }, { "x": -27.499999999999986, "y": -35 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* Original KiCad copper zones, clipped to the board, in ascending priority. */}
    <copperpour name="GND_top_0_0" connectsTo="net.GND" layer="top" clearance={0.125} coveredWithSolderMask outline={[{"x":27.5,"y":25.64133216},{"x":27.48,"y":34.98},{"x":-27.48,"y":34.99},{"x":-27.5,"y":24.25922923},{"x":-27.5,"y":-34.76059739},{"x":16.58199973,"y":-35},{"x":27.5,"y":-35}]} />
    <copperpour name="GND_inner1_1_0" connectsTo="net.GND" layer="inner1" clearance={0.125} useThermalReliefs unbroken coveredWithSolderMask outline={[{"x":27.5,"y":35},{"x":-27.5,"y":35},{"x":-27.5,"y":-34.81},{"x":27.5,"y":-34.81}]} />
    <copperpour name="_3V3_SYS_inner2_2_0" connectsTo="net._3V3_SYS" layer="inner2" clearance={0.125} useThermalReliefs unbroken coveredWithSolderMask />
    <copperpour name="GND_bottom_3_0" connectsTo="net.GND" layer="bottom" clearance={0.2} useThermalReliefs coveredWithSolderMask outline={[{"x":27.5,"y":-34.95},{"x":27.5,"y":34.95},{"x":-27.45,"y":35},{"x":-27.5,"y":-35}]} />
    <copperpour name="AVDD_1V8_top_4_0" connectsTo="net.AVDD_1V8" layer="top" clearance={0.2} coveredWithSolderMask outline={[{"x":3.0048,"y":-7.5552},{"x":3.0048,"y":-4.8552},{"x":2.8048,"y":-4.6552},{"x":1.7048,"y":-4.6552},{"x":1.5048,"y":-4.8552},{"x":1.5048,"y":-7.5552},{"x":1.7048,"y":-7.7552},{"x":2.8048,"y":-7.7552}]} />
    <copperpour name="DVDD_1V8_top_5_0" connectsTo="net.DVDD_1V8" layer="top" clearance={0.2} coveredWithSolderMask outline={[{"x":5.0048,"y":-7.5552},{"x":5.0048,"y":-4.8552},{"x":4.8048,"y":-4.6552},{"x":3.7048,"y":-4.6552},{"x":3.5048,"y":-4.8552},{"x":3.5048,"y":-7.5552},{"x":3.7048,"y":-7.7552},{"x":4.8048,"y":-7.7552}]} />
    <copperpour name="Net__IC2_VOUT__top_6_0" connectsTo="net.Net__IC2_VOUT_" layer="top" clearance={0.2} coveredWithSolderMask outline={[{"x":4.45,"y":-16.55},{"x":4.9,"y":-16.1},{"x":4.89991,"y":-13.602124},{"x":3.65,"y":-13.6},{"x":3.65,"y":-17.45},{"x":4.45,"y":-17.45}]} />
    <copperpour name="_3V3_SYS_top_7_0" connectsTo="net._3V3_SYS" layer="top" clearance={0.125} coveredWithSolderMask outline={[{"x":4.475,"y":-21.785},{"x":4.475,"y":-18.66},{"x":4.6,"y":-18.56},{"x":5.225,"y":-18.56},{"x":5.325,"y":-18.685},{"x":5.325,"y":-19.685},{"x":5.425,"y":-19.785},{"x":5.7,"y":-19.785},{"x":5.8,"y":-19.685},{"x":5.8,"y":-18.385},{"x":5.6,"y":-18.185},{"x":3.5,"y":-18.185},{"x":3.1,"y":-18.55},{"x":3.1,"y":-21.7},{"x":3.4,"y":-21.985},{"x":4.275,"y":-21.985}]} />
    <copperpour name="Net__C12_Pad1__top_8_0" connectsTo="net.Net__C12_Pad1_" layer="top" clearance={0.125} coveredWithSolderMask outline={[{"x":-6.4,"y":25.9},{"x":-6.4,"y":28.675},{"x":-6.8,"y":29.2},{"x":-6.8,"y":29.55},{"x":-7.6,"y":29.55},{"x":-7.6,"y":27},{"x":-8.76,"y":25.72},{"x":-15.14,"y":25.75},{"x":-15.13,"y":24.56},{"x":-8.05,"y":24.54}]} />
    <copperpour name="_3V3_SYS_top_9_0" connectsTo="net._3V3_SYS" layer="top" clearance={0.125} coveredWithSolderMask outline={[{"x":-13.1,"y":26.53},{"x":-13.12,"y":28.7},{"x":-16,"y":28.69},{"x":-15.99,"y":26.52}]} />
    <copperpour name="PVDD_1V8_top_10_0" connectsTo="net.PVDD_1V8" layer="top" clearance={0.2} coveredWithSolderMask outline={[{"x":1.0048,"y":-7.5552},{"x":1.0048,"y":-4.8552},{"x":0.8048,"y":-4.6552},{"x":-0.2952,"y":-4.6552},{"x":-0.4952,"y":-4.8552},{"x":-0.4952,"y":-7.5552},{"x":-0.2952,"y":-7.7552},{"x":0.8048,"y":-7.7552}]} />
    <copperpour name="DVDD_1V8_inner2_11_0" connectsTo="net.DVDD_1V8" layer="inner2" clearance={0.2} unbroken coveredWithSolderMask outline={[{"x":4.8,"y":-6.097924},{"x":5.05,"y":-5.85},{"x":5.05,"y":-4.6},{"x":4.1,"y":-4},{"x":3.5,"y":-4.595502},{"x":3.5,"y":-5.9},{"x":3.7,"y":-6.1}]} />
    <copperpour name="PVDD_1V8_inner2_12_0" connectsTo="net.PVDD_1V8" layer="inner2" clearance={0.2} unbroken coveredWithSolderMask outline={[{"x":1,"y":-4.6},{"x":-0.5,"y":-4.6},{"x":-0.5,"y":-6.1},{"x":1,"y":-6.1}]} />
    <copperpour name="AVDD_1V8_inner2_13_0" connectsTo="net.AVDD_1V8" layer="inner2" clearance={0.2} unbroken coveredWithSolderMask outline={[{"x":2.8,"y":-6.097924},{"x":3,"y":-5.9},{"x":3,"y":-4.595502},{"x":2.5,"y":-4.1},{"x":1.5,"y":-4.595502},{"x":1.5,"y":-5.9},{"x":1.7,"y":-6.1}]} />
    {/* REF**: antmicro-logo_scaled_20mm */}
    <chip name={"REF__"} pcbX={17.3} pcbY={-23.25} pcbRotation={90} pinLabels={{}} displayName={"antmicro-logo_scaled_20mm"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* S1: SW_KMR211NGLFS_SMD */}
    <chip name={"S1"} pcbX={23.8} pcbY={-2.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"KMR211NGLFS"} displayName={"SW_KMR211NGLFS_SMD"} footprint={<Footprint_S1 />} noSchematicRepresentation={true}/>

    {/* C15: C_10n_0402 */}
    <chip name={"C15"} pcbX={-4.3534} pcbY={4.465} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* Q1: BSS138PW */}
    <chip name={"Q1"} pcbX={19} pcbY={-2.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"BSS138PW"} displayName={"BSS138PW"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C27: C_1u_0402 */}
    <chip name={"C27"} pcbX={7.66} pcbY={-1.62} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* C3: C_100n_0402 */}
    <chip name={"C3"} pcbX={-6.7} pcbY={0.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* R32: R_0R_0402 */}
    <chip name={"R32"} pcbX={-5.1} pcbY={19.88} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R32 />} noSchematicRepresentation={true}/>

    {/* IC2: TLV70018_SC70 */}
    <chip name={"IC2"} pcbX={4.9} pcbY={-18.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"TLV70018DCKR"} displayName={"TLV70018_SC70"} footprint={<Footprint_IC2 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_1.5mm_SMD */}
    <chip name={"TP4"} pcbX={-1.65} pcbY={-10.75} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* R3: R_51R_0402 */}
    <chip name={"R3"} pcbX={-8.01} pcbY={3.615} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* R33: R_0R_0402 */}
    <chip name={"R33"} pcbX={-6.19} pcbY={19.88} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R33 />} noSchematicRepresentation={true}/>

    {/* R12: R_470R_0402 */}
    <chip name={"R12"} pcbX={24.48} pcbY={8.8} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* R21: R_0R_0402 */}
    <chip name={"R21"} pcbX={-3.7} pcbY={18.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* R16: R_1M_0402 */}
    <chip name={"R16"} pcbX={-2.3718} pcbY={3.9524} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1004GLF"} displayName={"R_1M_0402"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* R10: R_24R_0402 */}
    <chip name={"R10"} pcbX={-4.72} pcbY={-6.19} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-24R0GLF"} displayName={"R_24R_0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* TP5: TP_1.5mm_SMD */}
    <chip name={"TP5"} pcbX={26} pcbY={25.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* J4: RCA_Jack_KLPX-0848A-2-Y */}
    <chip name={"J4"} pcbX={-23.299} pcbY={7.01} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KLPX-0848A-2-Y"} displayName={"RCA_Jack_KLPX-0848A-2-Y"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* R29: R_100k_0402 */}
    <chip name={"R29"} pcbX={9.54} pcbY={10.005} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R29 />} noSchematicRepresentation={true}/>

    {/* C7: C_100n_0402 */}
    <chip name={"C7"} pcbX={4.54} pcbY={-20.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* C4: C_100n_0402 */}
    <chip name={"C4"} pcbX={-6.53} pcbY={-2.035} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* J2: Molex_Nano-Fit_1x2_1053131102 */}
    <chip name={"J2"} pcbX={-16.9125} pcbY={-33.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"1053131102"} displayName={"Molex_Nano-Fit_1x2_1053131102"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* Q2: BSS138PW */}
    <chip name={"Q2"} pcbX={18.975} pcbY={19.95} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"BSS138PW"} displayName={"BSS138PW"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* R19: R_100k_0402 */}
    <chip name={"R19"} pcbX={17.9} pcbY={-4.77} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* FB3: FB_220Z_1.5A_WE-CBF_0805 */}
    <chip name={"FB3"} pcbX={4.25} pcbY={-8.03} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"742792022"} displayName={"FB_220Z_1.5A_WE-CBF_0805"} footprint={<Footprint_FB3 />} noSchematicRepresentation={true}/>

    {/* J7: PinHeader_1x2_P2.54mm_Drill1.1mm */}
    <chip name={"J7"} pcbX={15.63} pcbY={8.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"61300211121"} displayName={"PinHeader_1x2_P2.54mm_Drill1.1mm"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* C6: C_100n_0402 */}
    <chip name={"C6"} pcbX={-4.7} pcbY={0.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* R5: R_51R_0402 */}
    <chip name={"R5"} pcbX={-8.01} pcbY={1.235} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* D8: LED_G_0603_KP-1608ZGC */}
    <chip name={"D8"} pcbX={25.98} pcbY={8.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* D5: LED_G_0603_KP-1608ZGC */}
    <chip name={"D5"} pcbX={22.94} pcbY={20} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* IC1: ADV7282-M */}
    <chip name={"IC1"} pcbX={-1.05049} pcbY={0.01341} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} manufacturerPartNumber={"ADV7282WBCPZ-M"} displayName={"ADV7282-M"} footprint={<Footprint_IC1 />} noSchematicRepresentation={true}/>

    {/* C22: C_10p_0402 */}
    <chip name={"C22"} pcbX={-5.1} pcbY={6.73} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GCM1555C1H100GA16D"} displayName={"C_10p_0402"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* IC4: SN74AUP1G17_SC70 */}
    <chip name={"IC4"} pcbX={10.359} pcbY={-0.6584} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"SN74AUP1G17DCKR"} displayName={"SN74AUP1G17_SC70"} footprint={<Footprint_IC4 />} noSchematicRepresentation={true}/>

    {/* C29: C_100n_0402 */}
    <chip name={"C29"} pcbX={-13.71} pcbY={-31.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C29 />} noSchematicRepresentation={true}/>

    {/* TP9: TP_1.5mm_SMD */}
    <chip name={"TP9"} pcbX={23} pcbY={5.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* C19: C_10n_0402 */}
    <chip name={"C19"} pcbX={-0.5478} pcbY={5.81} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C19 />} noSchematicRepresentation={true}/>

    {/* R15: R_22k_0402 */}
    <chip name={"R15"} pcbX={9.196} pcbY={-3.0724} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2202GLF"} displayName={"R_22k_0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* Q3: BSS138PW */}
    <chip name={"Q3"} pcbX={8.57} pcbY={12} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"BSS138PW"} displayName={"BSS138PW"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* R13: R_470R_0402 */}
    <chip name={"R13"} pcbX={21.48} pcbY={8.8} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* C2: C_100n_0402 */}
    <chip name={"C2"} pcbX={-6.55} pcbY={1.72} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* R31: R_100k_0402 */}
    <chip name={"R31"} pcbX={11.49} pcbY={10.005} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R31 />} noSchematicRepresentation={true}/>

    {/* J5: RCA_Jack_KLPX-0848A-2-Y */}
    <chip name={"J5"} pcbX={-23.299} pcbY={-7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KLPX-0848A-2-Y"} displayName={"RCA_Jack_KLPX-0848A-2-Y"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* TP13: TP_1.5mm_SMD */}
    <chip name={"TP13"} pcbX={14} pcbY={15.6} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* R24: R_0R_0402 */}
    <chip name={"R24"} pcbX={2.32} pcbY={16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* R14: R_470R_0402 */}
    <chip name={"R14"} pcbX={24.44} pcbY={20} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* D3: UCLAMP2501T.TCT */}
    <chip name={"D3"} pcbX={-15.96} pcbY={-7.42} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"UCLAMP2501T.TCT"} displayName={"UCLAMP2501T.TCT"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* FB1: FB_220Z_1.5A_WE-CBF_0805 */}
    <chip name={"FB1"} pcbX={-14.55} pcbY={26.21} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"742792022"} displayName={"FB_220Z_1.5A_WE-CBF_0805"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* C25: C_1u_0402 */}
    <chip name={"C25"} pcbX={-14.75} pcbY={-31.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* R1: R_24R_0402 */}
    <chip name={"R1"} pcbX={-9.48} pcbY={3.13} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-24R0GLF"} displayName={"R_24R_0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* D1: UCLAMP2501T.TCT */}
    <chip name={"D1"} pcbX={-15.96} pcbY={20.58} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"UCLAMP2501T.TCT"} displayName={"UCLAMP2501T.TCT"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* J1: Conn_FFC_WE_68715014522 */}
    <chip name={"J1"} pcbX={3.788} pcbY={32.58} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["MP1"], "pin52": ["MP2"] }} manufacturerPartNumber={"68715014522"} displayName={"Conn_FFC_WE_68715014522"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_1.5mm_SMD */}
    <chip name={"TP1"} pcbX={20} pcbY={15.6} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* TP10: TP_1.5mm_SMD */}
    <chip name={"TP10"} pcbX={23} pcbY={15.6} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* R4: R_24R_0402 */}
    <chip name={"R4"} pcbX={-9.48} pcbY={1.72} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-24R0GLF"} displayName={"R_24R_0402"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* TP14: TP_1.5mm_SMD */}
    <chip name={"TP14"} pcbX={-1.65} pcbY={-8.783332} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* R8: R_24R_0402 */}
    <chip name={"R8"} pcbX={-9.48} pcbY={-2.035} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-24R0GLF"} displayName={"R_24R_0402"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* FB4: FB_220Z_1.5A_WE-CBF_0805 */}
    <chip name={"FB4"} pcbX={2.25} pcbY={-8.03} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"742792022"} displayName={"FB_220Z_1.5A_WE-CBF_0805"} footprint={<Footprint_FB4 />} noSchematicRepresentation={true}/>

    {/* R7: R_4k7_0402 */}
    <chip name={"R7"} pcbX={-3.715} pcbY={15.675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* R25: R_0R_0402 */}
    <chip name={"R25"} pcbX={1.32} pcbY={16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* R20: R_0R_0402 */}
    <chip name={"R20"} pcbX={-2.7} pcbY={18.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* D6: LED_G_0603_KP-1608ZGC */}
    <chip name={"D6"} pcbX={25.94} pcbY={20} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* C28: C_1u_0402 */}
    <chip name={"C28"} pcbX={15.9} pcbY={-4.77} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C28 />} noSchematicRepresentation={true}/>

    {/* R18: R_100k_0402 */}
    <chip name={"R18"} pcbX={14.5} pcbY={-6.5724} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* C12: C_1u_0603 */}
    <chip name={"C12"} pcbX={-12.85} pcbY={24.28} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"0603YD105KAT2A"} displayName={"C_1u_0603"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* C11: C_10n_0402 */}
    <chip name={"C11"} pcbX={-5.7} pcbY={0.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* TP6: TP_1.5mm_SMD */}
    <chip name={"TP6"} pcbX={-1.5066} pcbY={17.1876} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* R6: R_4k7_0402 */}
    <chip name={"R6"} pcbX={-2.69} pcbY={15.675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* R17: R_100k_0402 */}
    <chip name={"R17"} pcbX={7.16} pcbY={-0.12} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* C16: C_100n_0402 */}
    <chip name={"C16"} pcbX={0.45} pcbY={5.81} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* J3: RCA_Jack_KLPX-0848A-2-Y */}
    <chip name={"J3"} pcbX={-23.299} pcbY={21} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KLPX-0848A-2-Y"} displayName={"RCA_Jack_KLPX-0848A-2-Y"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_1.5mm_SMD */}
    <chip name={"TP8"} pcbX={20} pcbY={5.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* IC5: SN74AUP1G17_SC70 */}
    <chip name={"IC5"} pcbX={16.9} pcbY={-7.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} manufacturerPartNumber={"SN74AUP1G17DCKR"} displayName={"SN74AUP1G17_SC70"} footprint={<Footprint_IC5 />} noSchematicRepresentation={true}/>

    {/* C24: C_100n_0402 */}
    <chip name={"C24"} pcbX={15.9} pcbY={-3.77} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* R2: R_1k_0402 */}
    <chip name={"R2"} pcbX={13.29} pcbY={8.705} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* C17: C_100n_0402 */}
    <chip name={"C17"} pcbX={3.8914} pcbY={-0.1838} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* C8: C_1u_0402 */}
    <chip name={"C8"} pcbX={4.54} pcbY={-21.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* C30: C_10u_0603 */}
    <chip name={"C30"} pcbX={-14} pcbY={-33.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R61A106KE69D"} displayName={"C_10u_0603"} footprint={<Footprint_C30 />} noSchematicRepresentation={true}/>

    {/* C21: C_100n_0402 */}
    <chip name={"C21"} pcbX={14.5} pcbY={-8.5724} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* C31: C_10u_0603 */}
    <chip name={"C31"} pcbX={-14.55} pcbY={29.71} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R61A106KE69D"} displayName={"C_10u_0603"} footprint={<Footprint_C31 />} noSchematicRepresentation={true}/>

    {/* R9: R_51R_0402 */}
    <chip name={"R9"} pcbX={-8} pcbY={-1.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* TP11: TP_1.5mm_SMD */}
    <chip name={"TP11"} pcbX={26} pcbY={15.6} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* FB5: FB_220Z_1.5A_WE-CBF_0805 */}
    <chip name={"FB5"} pcbX={0.25} pcbY={-8.03} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"742792022"} displayName={"FB_220Z_1.5A_WE-CBF_0805"} footprint={<Footprint_FB5 />} noSchematicRepresentation={true}/>

    {/* C18: C_10n_0402 */}
    <chip name={"C18"} pcbX={2.8714} pcbY={-0.1868} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* J6: RCA_Jack_KLPX-0848A-2-Y */}
    <chip name={"J6"} pcbX={-23.3025} pcbY={-20.995} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KLPX-0848A-2-Y"} displayName={"RCA_Jack_KLPX-0848A-2-Y"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* R27: R_100k_0402 */}
    <chip name={"R27"} pcbX={16.79} pcbY={-1.71} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* TP15: TP_1.5mm_SMD */}
    <chip name={"TP15"} pcbX={-1.65} pcbY={-6.816666} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* C20: C_100n_0402 */}
    <chip name={"C20"} pcbX={6.68131} pcbY={-1.62} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* D2: UCLAMP2501T.TCT */}
    <chip name={"D2"} pcbX={-15.96} pcbY={6.58} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"UCLAMP2501T.TCT"} displayName={"UCLAMP2501T.TCT"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* C32: C_10u_0603 */}
    <chip name={"C32"} pcbX={6.55} pcbY={-12} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R61A106KE69D"} displayName={"C_10u_0603"} footprint={<Footprint_C32 />} noSchematicRepresentation={true}/>

    {/* TP7: TP_1.5mm_SMD */}
    <chip name={"TP7"} pcbX={-4.8848} pcbY={17.213} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* TP12: TP_1.5mm_SMD */}
    <chip name={"TP12"} pcbX={17} pcbY={15.6} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* REF**: OSHW-Logo_5.7x6mm_Mask */}
    <chip name={"REF___"} pcbX={7.3} pcbY={-30.5} pcbRotation={90} pinLabels={{}} displayName={"OSHW-Logo_5.7x6mm_Mask"} footprint={<Footprint_REF___ />} noSchematicRepresentation={true}/>

    {/* TP3: TP_1.5mm_SMD */}
    <chip name={"TP3"} pcbX={23} pcbY={25.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* C23: C_10p_0402 */}
    <chip name={"C23"} pcbX={-0.53} pcbY={7.7426} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GCM1555C1H100GA16D"} displayName={"C_10p_0402"} footprint={<Footprint_C23 />} noSchematicRepresentation={true}/>

    {/* Y1: Resonator_28.63636MHz_ABM8G */}
    <chip name={"Y1"} pcbX={-2.81} pcbY={7.0266} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ABM8G-28.63636MHZ-18-D2Y-T"} displayName={"Resonator_28.63636MHz_ABM8G"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* R26: R_470R_0402 */}
    <chip name={"R26"} pcbX={21.44} pcbY={20.015} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4700GLF"} displayName={"R_470R_0402"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* D7: LED_G_0603_KP-1608ZGC */}
    <chip name={"D7"} pcbX={22.98} pcbY={8.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"KP-1608ZGC"} displayName={"LED_G_0603_KP-1608ZGC"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* D4: UCLAMP2501T.TCT */}
    <chip name={"D4"} pcbX={-15.96} pcbY={-21.42} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"UCLAMP2501T.TCT"} displayName={"UCLAMP2501T.TCT"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_1.5mm_SMD */}
    <chip name={"TP2"} pcbX={26} pcbY={5.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* C14: C_100n_0402 */}
    <chip name={"C14"} pcbX={-4.354} pcbY={3.48} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* C9: C_1u_0402 */}
    <chip name={"C9"} pcbX={4.95} pcbY={-15.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* R11: R_51R_0402 */}
    <chip name={"R11"} pcbX={-5.2} pcbY={-4.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* C26: C_100n_0402 */}
    <chip name={"C26"} pcbX={4.95} pcbY={-10.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* C1: C_100n_0402 */}
    <chip name={"C1"} pcbX={-6.55} pcbY={3.13} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* R23: R_0R_0402 */}
    <chip name={"R23"} pcbX={3.78} pcbY={16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* Q4: BSS138PW */}
    <chip name={"Q4"} pcbX={11.22} pcbY={12} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"BSS138PW"} displayName={"BSS138PW"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* R30: R_0R_0805 */}
    <chip name={"R30"} pcbX={4.25} pcbY={-13.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CRCW08050000Z0EA"} displayName={"R_0R_0805"} footprint={<Footprint_R30 />} noSchematicRepresentation={true}/>

    {/* R22: R_0R_0402 */}
    <chip name={"R22"} pcbX={4.78} pcbY={16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* TP16: TP_1.5mm_SMD */}
    <chip name={"TP16"} pcbX={-1.65} pcbY={-4.85} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1.5mm_SMD"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* C5: C_100n_0402 */}
    <chip name={"C5"} pcbX={3.49} pcbY={-1.69} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* R28: R_100k_0402 */}
    <chip name={"R28"} pcbX={16.96} pcbY={19.96} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R28 />} noSchematicRepresentation={true}/>

    {/* C10: C_100n_0402 */}
    <chip name={"C10"} pcbX={-4.72} pcbY={-3.24} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* C13: C_100n_0402 */}
    <chip name={"C13"} pcbX={11.196} pcbY={-3.0724} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C13 />} noSchematicRepresentation={true}/>

    {/* MP3: Spacer_Drill3mm_H3mm_9774030243R */}
    <chip name={"MP3"} pcbX={23.5} pcbY={30} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"9774030243R"} displayName={"Spacer_Drill3mm_H3mm_9774030243R"} footprint={<Footprint_MP3 />} noSchematicRepresentation={true}/>

    {/* MP1: Spacer_Drill3mm_H3mm_9774030243R */}
    <chip name={"MP1"} pcbX={-23.5} pcbY={30} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"9774030243R"} displayName={"Spacer_Drill3mm_H3mm_9774030243R"} footprint={<Footprint_MP1 />} noSchematicRepresentation={true}/>

    {/* MP4: Spacer_Drill3mm_H3mm_9774030243R */}
    <chip name={"MP4"} pcbX={23.5} pcbY={-31} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"9774030243R"} displayName={"Spacer_Drill3mm_H3mm_9774030243R"} footprint={<Footprint_MP4 />} noSchematicRepresentation={true}/>

    {/* MP2: Spacer_Drill3mm_H3mm_9774030243R */}
    <chip name={"MP2"} pcbX={-8.7} pcbY={-31} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"9774030243R"} displayName={"Spacer_Drill3mm_H3mm_9774030243R"} footprint={<Footprint_MP2 />} noSchematicRepresentation={true}/>

    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".S1 > .pin1", ".S1 > .pin2", ".C15 > .pin1", ".Q1 > .pin2", ".C27 > .pin1", ".C3 > .pin2", ".IC2 > .pin2", ".R3 > .pin1", ".J4 > .pin2", ".R29 > .pin1", ".C7 > .pin2", ".J2 > .pin2", ".Q2 > .pin2", ".J7 > .pin2", ".R5 > .pin1", ".IC1 > .pin1", ".IC1 > .pin4", ".IC1 > .pin33", ".C22 > .pin2", ".IC4 > .pin3", ".C29 > .pin2", ".C19 > .pin2", ".Q3 > .pin2", ".R31 > .pin1", ".J5 > .pin2", ".TP13 > .pin1", ".D3 > .pin1", ".C25 > .pin2", ".D1 > .pin1", ".J1 > .pin9", ".J1 > .pin12", ".J1 > .pin15", ".J1 > .pin18", ".J1 > .pin27", ".J1 > .pin30", ".J1 > .pin51", ".J1 > .pin52", ".D6 > .pin2", ".C28 > .pin2", ".C12 > .pin2", ".C11 > .pin1", ".C16 > .pin2", ".J3 > .pin2", ".IC5 > .pin3", ".C24 > .pin1", ".C17 > .pin2", ".C8 > .pin2", ".C30 > .pin2", ".C21 > .pin2", ".C31 > .pin2", ".R9 > .pin1", ".C18 > .pin1", ".J6 > .pin2", ".R27 > .pin1", ".C20 > .pin2", ".D2 > .pin1", ".C32 > .pin2", ".C23 > .pin2", ".Y1 > .pin2", ".Y1 > .pin4", ".D4 > .pin1", ".C14 > .pin2", ".C9 > .pin2", ".R11 > .pin1", ".C26 > .pin2", ".Q4 > .pin2", ".C5 > .pin2", ".R28 > .pin1", ".C13 > .pin1"]}/>
    {/* KiCad net: Net-(IC5-A) */}
    <KiCadNet name={"Net__IC5_A_"} connectsTo={[".S1 > .pin3", ".S1 > .pin4", ".Q1 > .pin3", ".R18 > .pin1", ".IC5 > .pin2", ".C21 > .pin1"]}/>
    {/* KiCad net: AVDD_1V8 */}
    <KiCadNet name={"AVDD_1V8"} connectsTo={[".C15 > .pin2", ".IC1 > .pin16", ".FB4 > .pin2", ".C14 > .pin1"]}/>
    {/* KiCad net: /RST_IN */}
    <KiCadNet name={"_RST_IN"} connectsTo={[".Q1 > .pin1", ".J1 > .pin33", ".R27 > .pin2"]}/>
    {/* KiCad net: 3V3_SYS */}
    <KiCadNet name={"_3V3_SYS"} connectsTo={[".C27 > .pin2", ".IC2 > .pin1", ".IC2 > .pin3", ".R12 > .pin2", ".TP5 > .pin1", ".C7 > .pin1", ".J2 > .pin1", ".R19 > .pin2", ".IC1 > .pin2", ".IC4 > .pin5", ".C29 > .pin1", ".R15 > .pin2", ".R13 > .pin2", ".R14 > .pin1", ".FB1 > .pin1", ".C25 > .pin1", ".R7 > .pin2", ".C28 > .pin1", ".R18 > .pin2", ".R6 > .pin2", ".R17 > .pin2", ".IC5 > .pin5", ".C24 > .pin2", ".R2 > .pin1", ".C8 > .pin1", ".C30 > .pin1", ".C31 > .pin1", ".C20 > .pin1", ".R26 > .pin1", ".C5 > .pin1"]}/>
    {/* KiCad net: PVDD_1V8 */}
    <KiCadNet name={"PVDD_1V8"} connectsTo={[".C3 > .pin1", ".IC1 > .pin21", ".C11 > .pin2", ".FB5 > .pin2"]}/>
    {/* KiCad net: /SDA */}
    <KiCadNet name={"_SDA"} connectsTo={[".R32 > .pin1", ".IC1 > .pin30", ".R20 > .pin1", ".TP6 > .pin1", ".R6 > .pin1"]}/>
    {/* KiCad net: Net-(J1-Pad41) */}
    <KiCadNet name={"Net__J1_Pad41_"} connectsTo={[".R32 > .pin2", ".J1 > .pin41"]}/>
    {/* KiCad net: unconnected-(IC2-Pad4) */}
    <KiCadNet name={"unconnected__IC2_Pad4_"} connectsTo={[".IC2 > .pin4"]}/>
    {/* KiCad net: Net-(IC2-VOUT) */}
    <KiCadNet name={"Net__IC2_VOUT_"} connectsTo={[".IC2 > .pin5", ".TP3 > .pin1", ".C9 > .pin1", ".R30 > .pin1"]}/>
    {/* KiCad net: Net-(IC1-DIAG1) */}
    <KiCadNet name={"Net__IC1_DIAG1_"} connectsTo={[".TP4 > .pin1", ".IC1 > .pin22"]}/>
    {/* KiCad net: /AIN1_C */}
    <KiCadNet name={"_AIN1_C"} connectsTo={[".R3 > .pin2", ".R1 > .pin2", ".C1 > .pin1"]}/>
    {/* KiCad net: /SCL */}
    <KiCadNet name={"_SCL"} connectsTo={[".R33 > .pin1", ".R21 > .pin1", ".IC1 > .pin31", ".R7 > .pin1", ".TP7 > .pin1"]}/>
    {/* KiCad net: Net-(J1-Pad42) */}
    <KiCadNet name={"Net__J1_Pad42_"} connectsTo={[".R33 > .pin2", ".J1 > .pin42"]}/>
    {/* KiCad net: Net-(D8-Pad1) */}
    <KiCadNet name={"Net__D8_Pad1_"} connectsTo={[".R12 > .pin1", ".D8 > .pin1"]}/>
    {/* KiCad net: Net-(J1-Pad40) */}
    <KiCadNet name={"Net__J1_Pad40_"} connectsTo={[".R21 > .pin2", ".J1 > .pin40"]}/>
    {/* KiCad net: /XTAL_N */}
    <KiCadNet name={"_XTAL_N"} connectsTo={[".R16 > .pin1", ".IC1 > .pin15", ".C22 > .pin1", ".Y1 > .pin1"]}/>
    {/* KiCad net: /XTAL_P */}
    <KiCadNet name={"_XTAL_P"} connectsTo={[".R16 > .pin2", ".IC1 > .pin14", ".C23 > .pin1", ".Y1 > .pin3"]}/>
    {/* KiCad net: /AIN4_ESD */}
    <KiCadNet name={"_AIN4_ESD"} connectsTo={[".R10 > .pin1", ".J6 > .pin1", ".D4 > .pin2"]}/>
    {/* KiCad net: /AIN4_C */}
    <KiCadNet name={"_AIN4_C"} connectsTo={[".R10 > .pin2", ".R11 > .pin2", ".C10 > .pin1"]}/>
    {/* KiCad net: /AIN2_ESD */}
    <KiCadNet name={"_AIN2_ESD"} connectsTo={[".J4 > .pin1", ".R4 > .pin1", ".D2 > .pin2"]}/>
    {/* KiCad net: /AGPO0 */}
    <KiCadNet name={"_AGPO0"} connectsTo={[".R29 > .pin2", ".IC1 > .pin8", ".Q3 > .pin1", ".TP11 > .pin1"]}/>
    {/* KiCad net: /AIN3_C */}
    <KiCadNet name={"_AIN3_C"} connectsTo={[".C4 > .pin1", ".R8 > .pin2", ".R9 > .pin2"]}/>
    {/* KiCad net: /AIN3 */}
    <KiCadNet name={"_AIN3"} connectsTo={[".C4 > .pin2", ".IC1 > .pin23"]}/>
    {/* KiCad net: 1V8_SYS */}
    <KiCadNet name={"_1V8_SYS"} connectsTo={[".Q2 > .pin1", ".FB3 > .pin1", ".FB4 > .pin1", ".FB5 > .pin1", ".C32 > .pin1", ".C26 > .pin1", ".R30 > .pin2", ".R28 > .pin2"]}/>
    {/* KiCad net: Net-(Q2-D) */}
    <KiCadNet name={"Net__Q2_D_"} connectsTo={[".Q2 > .pin3", ".D5 > .pin2"]}/>
    {/* KiCad net: /RESET */}
    <KiCadNet name={"_RESET"} connectsTo={[".R19 > .pin1", ".IC1 > .pin28", ".TP8 > .pin1", ".IC5 > .pin4"]}/>
    {/* KiCad net: DVDD_1V8 */}
    <KiCadNet name={"DVDD_1V8"} connectsTo={[".FB3 > .pin2", ".IC1 > .pin3", ".IC1 > .pin13", ".C19 > .pin1", ".C16 > .pin1", ".C17 > .pin1", ".C18 > .pin2"]}/>
    {/* KiCad net: /ALSB */}
    <KiCadNet name={"_ALSB"} connectsTo={[".J7 > .pin1", ".IC1 > .pin29", ".R2 > .pin2", ".TP12 > .pin1"]}/>
    {/* KiCad net: /VREFP */}
    <KiCadNet name={"_VREFP"} connectsTo={[".C6 > .pin1", ".IC1 > .pin19"]}/>
    {/* KiCad net: /VREFN */}
    <KiCadNet name={"_VREFN"} connectsTo={[".C6 > .pin2", ".IC1 > .pin20"]}/>
    {/* KiCad net: /AIN2_C */}
    <KiCadNet name={"_AIN2_C"} connectsTo={[".R5 > .pin2", ".C2 > .pin1", ".R4 > .pin2"]}/>
    {/* KiCad net: Net-(Q3-D) */}
    <KiCadNet name={"Net__Q3_D_"} connectsTo={[".D8 > .pin2", ".Q3 > .pin3"]}/>
    {/* KiCad net: Net-(D5-Pad1) */}
    <KiCadNet name={"Net__D5_Pad1_"} connectsTo={[".D5 > .pin1", ".R26 > .pin2"]}/>
    {/* KiCad net: /~{INTRQ} */}
    <KiCadNet name={"___INTRQ_"} connectsTo={[".IC1 > .pin5", ".TP2 > .pin1"]}/>
    {/* KiCad net: /AGPO2 */}
    <KiCadNet name={"_AGPO2"} connectsTo={[".IC1 > .pin6", ".TP1 > .pin1"]}/>
    {/* KiCad net: /AGPO1 */}
    <KiCadNet name={"_AGPO1"} connectsTo={[".IC1 > .pin7", ".R31 > .pin2", ".TP10 > .pin1", ".Q4 > .pin1"]}/>
    {/* KiCad net: /CSI_A_D0_P */}
    <KiCadNet name={"_CSI_A_D0_P"} connectsTo={[".IC1 > .pin9", ".R23 > .pin1"]}/>
    {/* KiCad net: /CSI_A_D0_N */}
    <KiCadNet name={"_CSI_A_D0_N"} connectsTo={[".IC1 > .pin10", ".R22 > .pin1"]}/>
    {/* KiCad net: /CSI_A_CLK_P */}
    <KiCadNet name={"_CSI_A_CLK_P"} connectsTo={[".IC1 > .pin11", ".R25 > .pin1"]}/>
    {/* KiCad net: /CSI_A_CLK_N */}
    <KiCadNet name={"_CSI_A_CLK_N"} connectsTo={[".IC1 > .pin12", ".R24 > .pin1"]}/>
    {/* KiCad net: /AIN1 */}
    <KiCadNet name={"_AIN1"} connectsTo={[".IC1 > .pin17", ".C1 > .pin2"]}/>
    {/* KiCad net: /AIN2 */}
    <KiCadNet name={"_AIN2"} connectsTo={[".IC1 > .pin18", ".C2 > .pin2"]}/>
    {/* KiCad net: /AIN4 */}
    <KiCadNet name={"_AIN4"} connectsTo={[".IC1 > .pin24", ".C10 > .pin2"]}/>
    {/* KiCad net: Net-(IC1-DIAG2) */}
    <KiCadNet name={"Net__IC1_DIAG2_"} connectsTo={[".IC1 > .pin25", ".TP14 > .pin1"]}/>
    {/* KiCad net: Net-(IC1-AIN5) */}
    <KiCadNet name={"Net__IC1_AIN5_"} connectsTo={[".IC1 > .pin26", ".TP15 > .pin1"]}/>
    {/* KiCad net: Net-(IC1-AIN6) */}
    <KiCadNet name={"Net__IC1_AIN6_"} connectsTo={[".IC1 > .pin27", ".TP16 > .pin1"]}/>
    {/* KiCad net: /PWRDWN */}
    <KiCadNet name={"_PWRDWN"} connectsTo={[".IC1 > .pin32", ".IC4 > .pin4", ".TP9 > .pin1", ".R17 > .pin1"]}/>
    {/* KiCad net: unconnected-(IC4-NC-Pad1) */}
    <KiCadNet name={"unconnected__IC4_NC_Pad1_"} connectsTo={[".IC4 > .pin1"]}/>
    {/* KiCad net: Net-(IC4-A) */}
    <KiCadNet name={"Net__IC4_A_"} connectsTo={[".IC4 > .pin2", ".R15 > .pin1", ".C13 > .pin2"]}/>
    {/* KiCad net: Net-(D7-Pad1) */}
    <KiCadNet name={"Net__D7_Pad1_"} connectsTo={[".R13 > .pin1", ".D7 > .pin1"]}/>
    {/* KiCad net: /AIN3_ESD */}
    <KiCadNet name={"_AIN3_ESD"} connectsTo={[".J5 > .pin1", ".D3 > .pin2", ".R8 > .pin1"]}/>
    {/* KiCad net: /CSI_A_CLK_R_N */}
    <KiCadNet name={"_CSI_A_CLK_R_N"} connectsTo={[".R24 > .pin2", ".J1 > .pin28"]}/>
    {/* KiCad net: Net-(D6-Pad1) */}
    <KiCadNet name={"Net__D6_Pad1_"} connectsTo={[".R14 > .pin2", ".D6 > .pin1"]}/>
    {/* KiCad net: Net-(C12-Pad1) */}
    <KiCadNet name={"Net__C12_Pad1_"} connectsTo={[".FB1 > .pin2", ".J1 > .pin47", ".J1 > .pin48", ".C12 > .pin1"]}/>
    {/* KiCad net: /AIN1_ESD */}
    <KiCadNet name={"_AIN1_ESD"} connectsTo={[".R1 > .pin1", ".D1 > .pin2", ".J3 > .pin1"]}/>
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
    {/* KiCad net: unconnected-(J1-Pad19) */}
    <KiCadNet name={"unconnected__J1_Pad19_"} connectsTo={[".J1 > .pin19"]}/>
    {/* KiCad net: unconnected-(J1-Pad20) */}
    <KiCadNet name={"unconnected__J1_Pad20_"} connectsTo={[".J1 > .pin20"]}/>
    {/* KiCad net: unconnected-(J1-Pad21) */}
    <KiCadNet name={"unconnected__J1_Pad21_"} connectsTo={[".J1 > .pin21"]}/>
    {/* KiCad net: unconnected-(J1-Pad22) */}
    <KiCadNet name={"unconnected__J1_Pad22_"} connectsTo={[".J1 > .pin22"]}/>
    {/* KiCad net: unconnected-(J1-Pad23) */}
    <KiCadNet name={"unconnected__J1_Pad23_"} connectsTo={[".J1 > .pin23"]}/>
    {/* KiCad net: unconnected-(J1-Pad24) */}
    <KiCadNet name={"unconnected__J1_Pad24_"} connectsTo={[".J1 > .pin24"]}/>
    {/* KiCad net: /CSI_A_D0_R_N */}
    <KiCadNet name={"_CSI_A_D0_R_N"} connectsTo={[".J1 > .pin25", ".R22 > .pin2"]}/>
    {/* KiCad net: /CSI_A_D0_R_P */}
    <KiCadNet name={"_CSI_A_D0_R_P"} connectsTo={[".J1 > .pin26", ".R23 > .pin2"]}/>
    {/* KiCad net: /CSI_A_CLK_R_P */}
    <KiCadNet name={"_CSI_A_CLK_R_P"} connectsTo={[".J1 > .pin29", ".R25 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-Pad31) */}
    <KiCadNet name={"unconnected__J1_Pad31_"} connectsTo={[".J1 > .pin31"]}/>
    {/* KiCad net: unconnected-(J1-Pad32) */}
    <KiCadNet name={"unconnected__J1_Pad32_"} connectsTo={[".J1 > .pin32"]}/>
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
    {/* KiCad net: Net-(J1-Pad39) */}
    <KiCadNet name={"Net__J1_Pad39_"} connectsTo={[".J1 > .pin39", ".R20 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-Pad43) */}
    <KiCadNet name={"unconnected__J1_Pad43_"} connectsTo={[".J1 > .pin43"]}/>
    {/* KiCad net: unconnected-(J1-Pad44) */}
    <KiCadNet name={"unconnected__J1_Pad44_"} connectsTo={[".J1 > .pin44"]}/>
    {/* KiCad net: unconnected-(J1-Pad45) */}
    <KiCadNet name={"unconnected__J1_Pad45_"} connectsTo={[".J1 > .pin45"]}/>
    {/* KiCad net: unconnected-(J1-Pad46) */}
    <KiCadNet name={"unconnected__J1_Pad46_"} connectsTo={[".J1 > .pin46"]}/>
    {/* KiCad net: unconnected-(J1-Pad49) */}
    <KiCadNet name={"unconnected__J1_Pad49_"} connectsTo={[".J1 > .pin49"]}/>
    {/* KiCad net: unconnected-(J1-Pad50) */}
    <KiCadNet name={"unconnected__J1_Pad50_"} connectsTo={[".J1 > .pin50"]}/>
    {/* KiCad net: unconnected-(IC5-NC-Pad1) */}
    <KiCadNet name={"unconnected__IC5_NC_Pad1_"} connectsTo={[".IC5 > .pin1"]}/>
    {/* KiCad net: Net-(Q4-D) */}
    <KiCadNet name={"Net__Q4_D_"} connectsTo={[".D7 > .pin2", ".Q4 > .pin3"]}/>
    {/* KiCad net: unconnected-(MP3-Pad1) */}
    <KiCadNet name={"unconnected__MP3_Pad1_"} connectsTo={[".MP3 > .pin1"]}/>
    {/* KiCad net: unconnected-(MP1-Pad1) */}
    <KiCadNet name={"unconnected__MP1_Pad1_"} connectsTo={[".MP1 > .pin1"]}/>
    {/* KiCad net: unconnected-(MP4-Pad1) */}
    <KiCadNet name={"unconnected__MP4_Pad1_"} connectsTo={[".MP4 > .pin1"]}/>
    {/* KiCad net: unconnected-(MP2-Pad1) */}
    <KiCadNet name={"unconnected__MP2_Pad1_"} connectsTo={[".MP2 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
