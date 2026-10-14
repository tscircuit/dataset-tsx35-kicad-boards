import { KiCadSchematic, KiCadNet } from './schematic'
// Tiliqua (apfaudio)
// Source: https://github.com/apfaudio/tiliqua-hardware
// Commit: 4ee5878ae821a6b7096f6aed6795dc1349475cb5; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_J5, Footprint_J6, Footprint_D11, Footprint_C33, Footprint_RN3, Footprint_U12, Footprint_C17, Footprint_J10, Footprint_H3, Footprint_R24, Footprint_F1, Footprint_L2, Footprint_C21, Footprint_RN1, Footprint_RN5, Footprint_C50, Footprint_C7, Footprint_C28, Footprint_C49, Footprint_R10, Footprint_J7, Footprint_R20, Footprint_R25, Footprint_L1, Footprint_U2, Footprint_R41, Footprint_D17, Footprint_RN10, Footprint_R29, Footprint_J3, Footprint_U5, Footprint_C2, Footprint_C22, Footprint_RN8, Footprint_U14, Footprint_C38, Footprint_H1, Footprint_R26, Footprint_R8, Footprint_C43, Footprint_R17, Footprint_D3, Footprint_R22, Footprint_C19, Footprint_C39, Footprint_C37, Footprint_L5, Footprint_C11, Footprint_D9, Footprint_R38, Footprint_C30, Footprint_C3, Footprint_L6, Footprint_F3, Footprint_R11, Footprint_C10, Footprint_Y1, Footprint_C5, Footprint_L4, Footprint_R33, Footprint_R32, Footprint_R37, Footprint_RN9, Footprint_R13, Footprint_C1, Footprint_R14, Footprint_C20, Footprint_C26, Footprint_C9, Footprint_L8, Footprint_C27, Footprint_SW3, Footprint_C24, Footprint_F2, Footprint_C42, Footprint_J2, Footprint_U13, Footprint_C51, Footprint_U10, Footprint_R39, Footprint_C32, Footprint_R7, Footprint_R6, Footprint_R18, Footprint_R36, Footprint_R16, Footprint_R31, Footprint_R40, Footprint_C12, Footprint_J8, Footprint_C13, Footprint_R19, Footprint_R15, Footprint_C16, Footprint_U9, Footprint_R50, Footprint_R9, Footprint_C53, Footprint_R44, Footprint_D5, Footprint_D7, Footprint_R27, Footprint_C29, Footprint_D2, Footprint_R28, Footprint_R3, Footprint_SW2, Footprint_C25, Footprint_R1, Footprint_D1, Footprint_C41, Footprint_C46, Footprint_D13, Footprint_C48, Footprint_C15, Footprint_R12, Footprint_C23, Footprint_C40, Footprint_C4, Footprint_R5, Footprint_C34, Footprint_R2, Footprint_L3, Footprint_H2, Footprint_R30, Footprint_C31, Footprint_U8, Footprint_C14, Footprint_C47, Footprint_R4, Footprint_U7, Footprint_C45, Footprint_C6, Footprint_J4, Footprint_C8, Footprint_R42, Footprint_D4, Footprint_RN6, Footprint_C52, Footprint_R23, Footprint_R21, Footprint_L7, Footprint_D6, Footprint_U3, Footprint_R49, Footprint_Y2, Footprint_D16, Footprint_D14, Footprint_U6, Footprint_R48, Footprint_D10, Footprint_D8, Footprint_J1, Footprint_RN4, Footprint_U1, Footprint_REF__, Footprint_U4, Footprint_C35, Footprint_C44, Footprint_D12, Footprint_R47, Footprint_RN7, Footprint_RN2, Footprint_U11, Footprint_R34, Footprint_D20, Footprint_R45, Footprint_R35, Footprint_D18, Footprint_R46, Footprint_C36 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={31.725763999999998} height={110.01879999999994} thickness={1.1884} layers={6} outline={[{ "x": 7.937117999999975, "y": -36.7034 }, { "x": 12.937116999999974, "y": -36.685163 }, { "x": 13.178724714394177, "y": -36.675170147523545 }, { "x": 13.418682011133429, "y": -36.64525960595378 }, { "x": 13.65534973644768, "y": -36.59563569488277 }, { "x": 13.88711120770436, "y": -36.5266373963795 }, { "x": 14.11238325700432, "y": -36.43873603939565 }, { "x": 14.329627045837894, "y": -36.332532080106745 }, { "x": 14.537358576925877, "y": -36.208751000182346 }, { "x": 14.7341588314388, "y": -36.068238351004226 }, { "x": 14.918683462346943, "y": -35.91195397768553 }, { "x": 15.08967197768556, "y": -35.74096546234692 }, { "x": 15.24595635100428, "y": -35.55644083143879 }, { "x": 15.386469000182418, "y": -35.35964057692587 }, { "x": 15.510250080106823, "y": -35.1519090458379 }, { "x": 15.616454039395743, "y": -34.934665257004326 }, { "x": 15.704355396379617, "y": -34.70939320770438 }, { "x": 15.773353694882902, "y": -34.477631736447705 }, { "x": 15.822977605953925, "y": -34.24096401113346 }, { "x": 15.852888147523698, "y": -34.00100671439421 }, { "x": 15.862881000000181, "y": -33.759399 }, { "x": 15.862881999999976, "y": 51.1994 }, { "x": 15.854724532239382, "y": 51.44858593348368 }, { "x": 15.830286987400717, "y": 51.69670481653908 }, { "x": 15.78967401084177, "y": 51.942694165620345 }, { "x": 15.733059513628119, "y": 52.185500616176434 }, { "x": 15.660685927818966, "y": 52.42408443332153 }, { "x": 15.572863168335457, "y": 52.65742396414112 }, { "x": 15.469967305856906, "y": 52.884520012568196 }, { "x": 15.352438956427827, "y": 53.10440011809591 }, { "x": 15.22078139467166, "y": 53.31612272000421 }, { "x": 15.075558398690786, "y": 53.518781189268985 }, { "x": 14.91739183588122, "y": 53.711507710888114 }, { "x": 14.746958999999974, "y": 53.893476999999976 }, { "x": 14.564989710888108, "y": 54.06390983588122 }, { "x": 14.372263189268976, "y": 54.22207639869078 }, { "x": 14.169604720004203, "y": 54.367299394671655 }, { "x": 13.957882118095897, "y": 54.49895695642782 }, { "x": 13.738002012568186, "y": 54.6164853058569 }, { "x": 13.5109059641411, "y": 54.719381168335445 }, { "x": 13.277566433321516, "y": 54.807203927818954 }, { "x": 13.038982616176417, "y": 54.8795775136281 }, { "x": 12.796176165620325, "y": 54.93619201084175 }, { "x": 12.550186816539062, "y": 54.97680498740069 }, { "x": 12.302067933483661, "y": 55.00124253223935 }, { "x": 12.052881999999977, "y": 55.00939999999994 }, { "x": -15.862882000000024, "y": 54.99059999999999 }, { "x": -15.862882000000024, "y": -55.0094 }, { "x": 4.367117999999975, "y": -55.00540000000001 }, { "x": 4.610743400850849, "y": -54.99707745992157 }, { "x": 4.853232904873957, "y": -54.97214874050535 }, { "x": 5.093455914638591, "y": -54.93073007088972 }, { "x": 5.330292400151153, "y": -54.87301456393392 }, { "x": 5.562638120949371, "y": -54.79927131583713 }, { "x": 5.78940977457844, "y": -54.70984415148847 }, { "x": 6.009550047444593, "y": -54.60515002139742 }, { "x": 6.2220325444966225, "y": -54.485677057679084 }, { "x": 6.4258665747509855, "y": -54.35198229815812 }, { "x": 6.620101770348159, "y": -54.20468908920253 }, { "x": 6.803832517604031, "y": -54.04448417939666 }, { "x": 6.976202179396813, "y": -53.872114517603904 }, { "x": 7.136407089202708, "y": -53.688383770348054 }, { "x": 7.283700298158328, "y": -53.49414857475091 }, { "x": 7.417395057679327, "y": -53.29031454449657 }, { "x": 7.536868021397689, "y": -53.07783204744456 }, { "x": 7.641562151488779, "y": -52.85769177457843 }, { "x": 7.730989315837482, "y": -52.63092012094937 }, { "x": 7.804732563934303, "y": -52.39857440015116 }, { "x": 7.862448070890137, "y": -52.16173791463861 }, { "x": 7.903866740505796, "y": -51.92151490487399 }, { "x": 7.928795459922062, "y": -51.679025400850875 }, { "x": 7.93711800000054, "y": -51.4354 }, { "x": 7.937117999999975, "y": -36.7034 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* J5: USB_C_Receptacle_USB2.0_14P */}
    <chip name={"J5"} pcbX={-7.304882} pcbY={37.4794} pcbRotation={90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A9"], "pin7": ["A12"], "pin8": ["B1"], "pin9": ["B4"], "pin10": ["B5"], "pin11": ["B6"], "pin12": ["B7"], "pin13": ["B9"], "pin14": ["B12"], "pin15": ["S1"] }} displayName={"USB_C_Receptacle_USB2.0_14P"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* J6: CONN 2x5 P=2.54mm */}
    <chip name={"J6"} pcbX={4.435118} pcbY={-50.9806} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"CONN 2x5 P=2.54mm"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* D11: LED 0402 RED */}
    <chip name={"D11"} pcbX={-13.809882} pcbY={-53.0906} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* C33: 100uF/10V */}
    <chip name={"C33"} pcbX={6.195118} pcbY={38.3494} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100uF/10V"} footprint={<Footprint_C33 />} noSchematicRepresentation={true}/>

    {/* RN3: 220R */}
    <chip name={"RN3"} pcbX={-11.294882} pcbY={-53.6306} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"220R"} footprint={<Footprint_RN3 />} noSchematicRepresentation={true}/>

    {/* U12: W25Q128JVP */}
    <chip name={"U12"} pcbX={8.288775} pcbY={15.799401} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"W25Q128JVP"} footprint={<Footprint_U12 />} noSchematicRepresentation={true}/>

    {/* C17: 6.8pF */}
    <capacitor name={"C17"} pcbX={14.180994} pcbY={-22.560347} pcbRotation={180} capacitance={"6.8pF"} footprint={<Footprint_C17 />} schX={7.600000000000005} schY={-2.6500000000000004} schRotation={-90} schSheetName={"power"}/>

    {/* J10: DVI_GPDI */}
    <chip name={"J10"} pcbX={-12.829882} pcbY={13.5494} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["SH"] }} displayName={"DVI_GPDI"} footprint={<Footprint_J10 />} noSchematicRepresentation={true}/>

    {/* H3: MountingHole */}
    <chip name={"H3"} pcbX={7.820118} pcbY={7.7994} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* R24: 18K */}
    <resistor name={"R24"} pcbX={-9.864882} pcbY={41.201107} pcbRotation={0} resistance={"18kohm"} footprint={<Footprint_R24 />} schX={4.15} schY={-3} schRotation={90} schSheetName={"rp2040_jtag"}/>

    {/* F1: 16V 500mA */}
    <chip name={"F1"} pcbX={5.645118} pcbY={-37.9506} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"16V 500mA"} footprint={<Footprint_F1 />} noSchematicRepresentation={true}/>

    {/* L2: FERRITE */}
    <chip name={"L2"} pcbX={-0.792382} pcbY={-41.9506} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"FERRITE"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* C21: 100uF/10V */}
    <chip name={"C21"} pcbX={-3.154882} pcbY={-31.2506} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100uF/10V"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* RN1: 220R */}
    <chip name={"RN1"} pcbX={-11.864882} pcbY={42.1794} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"220R"} footprint={<Footprint_RN1 />} noSchematicRepresentation={true}/>

    {/* RN5: 33R */}
    <chip name={"RN5"} pcbX={-0.571225} pcbY={-7.140599} pcbRotation={-45} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"33R"} footprint={<Footprint_RN5 />} noSchematicRepresentation={true}/>

    {/* C50: 100nF */}
    <capacitor name={"C50"} pcbX={1.513775} pcbY={12.625675} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C50 />} schX={-1.0999999999999996} schY={0.6499999999999995} schRotation={0} schSheetName={"gpdi"}/>

    {/* C7: 0.1uF */}
    <capacitor name={"C7"} pcbX={2.138775} pcbY={2.799401} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C7 />} schX={-7.449999999999999} schY={-1.2999999999999998} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* C28: 100nF */}
    <capacitor name={"C28"} pcbX={9.752961} pcbY={-23.346223} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C28 />} schX={4.400000000000002} schY={-2.8499999999999996} schRotation={-90} schSheetName={"power"}/>

    {/* C49: 100nF */}
    <capacitor name={"C49"} pcbX={1.513775} pcbY={11.224401} pcbRotation={135} capacitance={"100nF"} footprint={<Footprint_C49 />} schX={-1.0999999999999996} schY={0.8500000000000005} schRotation={0} schSheetName={"gpdi"}/>

    {/* R10: 220R */}
    <resistor name={"R10"} pcbX={-7.289882} pcbY={-42.9006} pcbRotation={180} resistance={"220ohm"} footprint={<Footprint_R10 />} schX={-1.3500000000000014} schY={0.14999999999999947} schRotation={0} schSheetName={"midi"}/>

    {/* J7: USB_C_Receptacle_USB2.0_14P */}
    <chip name={"J7"} pcbX={-7.371132} pcbY={28.6194} pcbRotation={90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A9"], "pin7": ["A12"], "pin8": ["B1"], "pin9": ["B4"], "pin10": ["B5"], "pin11": ["B6"], "pin12": ["B7"], "pin13": ["B9"], "pin14": ["B12"], "pin15": ["S1"] }} displayName={"USB_C_Receptacle_USB2.0_14P"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* R20: 900K (910K) */}
    <resistor name={"R20"} pcbX={-4.564882} pcbY={31.4994} pcbRotation={180} resistance={"900kohm"} footprint={<Footprint_R20 />} schX={0.7500000000000018} schY={0.25} schRotation={180} schSheetName={"usbc"}/>

    {/* R25: 4K7 */}
    <resistor name={"R25"} pcbX={-2.996209} pcbY={17.575082} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R25 />} schX={1.4000000000000004} schY={-1.7500000000000009} schRotation={90} schSheetName={"gpdi"}/>

    {/* L1: FERRITE */}
    <chip name={"L1"} pcbX={5.609367} pcbY={-32.954067} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"FERRITE"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* U2: RP2040(QFN-56_7x7mm_P0.4mm) */}
    <chip name={"U2"} pcbX={5.295118} pcbY={-2.2506} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"] }} displayName={"RP2040(QFN-56_7x7mm_P0.4mm)"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* R41: 33R */}
    <resistor name={"R41"} pcbX={-3.071225} pcbY={6.059401} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R41 />} schX={9.649999999999999} schY={-1.7400000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* D17: LED 0402 RED */}
    <chip name={"D17"} pcbX={-13.814882} pcbY={43.5144} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D17 />} noSchematicRepresentation={true}/>

    {/* RN10: 33R */}
    <chip name={"RN10"} pcbX={-7.111225} pcbY={-7.600024} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"33R"} footprint={<Footprint_RN10 />} noSchematicRepresentation={true}/>

    {/* R29: 10K */}
    <resistor name={"R29"} pcbX={-1.104882} pcbY={53.2894} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R29 />} schX={0.3000000000000007} schY={-0.5999999999999996} schRotation={0} schSheetName={"encoder"}/>

    {/* J3: Conn_02x06_Top_Bottom */}
    <chip name={"J3"} pcbX={-9.354882} pcbY={-1.2506} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"] }} displayName={"Conn_02x06_Top_Bottom"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* U5: AP63200WU */}
    <chip name={"U5"} pcbX={4.660118} pcbY={-29.4131} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"AP63200WU"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C2: 0.1uF */}
    <capacitor name={"C2"} pcbX={11.645117} pcbY={1.732134} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C2 />} schX={-7.449999999999999} schY={0.5} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* C22: 22uF */}
    <capacitor name={"C22"} pcbX={-13.326183} pcbY={-18.009152} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C22 />} schX={-3.1499999999999986} schY={5.259999999999999} schRotation={-90} schSheetName={"Overview"}/>

    {/* RN8: 33R */}
    <chip name={"RN8"} pcbX={4.129399} pcbY={-7.402819} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"33R"} footprint={<Footprint_RN8 />} noSchematicRepresentation={true}/>

    {/* U14: PCA9306 */}
    <chip name={"U14"} pcbX={1.388775} pcbY={21.049401} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"PCA9306"} footprint={<Footprint_U14 />} noSchematicRepresentation={true}/>

    {/* C38: 22uF */}
    <capacitor name={"C38"} pcbX={7.165812} pcbY={-25.007834} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C38 />} schX={-2.3999999999999986} schY={-2.8499999999999996} schRotation={-90} schSheetName={"power"}/>

    {/* H1: MountingHole */}
    <chip name={"H1"} pcbX={12.937118} pcbY={31.2406} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* R26: 4K7 */}
    <resistor name={"R26"} pcbX={-3.936475} pcbY={17.575082} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R26 />} schX={2.3000000000000007} schY={-0.14999999999999947} schRotation={180} schSheetName={"gpdi"}/>

    {/* R8: 100R */}
    <resistor name={"R8"} pcbX={4.030118} pcbY={17.7244} pcbRotation={180} resistance={"100ohm"} footprint={<Footprint_R8 />} schX={-4.149999999999999} schY={3.9} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* C43: 100nF */}
    <capacitor name={"C43"} pcbX={14.445118} pcbY={48.5744} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C43 />} schX={-4.000000000000001} schY={0.5} schRotation={-90} schSheetName={"led_driver"}/>

    {/* R17: 157K (158K) */}
    <resistor name={"R17"} pcbX={2.486354} pcbY={-31.612012} pcbRotation={-90} resistance={"157kohm"} footprint={<Footprint_R17 />} schX={-3.299999999999997} schY={-2.6500000000000004} schRotation={90} schSheetName={"power"}/>

    {/* D3: 1N4007FL */}
    <chip name={"D3"} pcbX={-0.132382} pcbY={-45.2006} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1N4007FL"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* R22: 10K */}
    <resistor name={"R22"} pcbX={-1.104882} pcbY={48.7894} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R22 />} schX={0.1999999999999993} schY={0.7000000000000002} schRotation={0} schSheetName={"encoder"}/>

    {/* C19: 22uF */}
    <capacitor name={"C19"} pcbX={-2.829882} pcbY={-38.4506} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C19 />} schX={-6.999999999999997} schY={1.6500000000000004} schRotation={-90} schSheetName={"power"}/>

    {/* C39: 10n */}
    <capacitor name={"C39"} pcbX={-1.104882} pcbY={46.3194} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C39 />} schX={0.8000000000000007} schY={0.2999999999999998} schRotation={-90} schSheetName={"encoder"}/>

    {/* C37: 100nF */}
    <capacitor name={"C37"} pcbX={-1.621225} pcbY={7.009401} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C37 />} schX={-0.40000000000000036} schY={-3.45} schRotation={-90} schSheetName={"gpdi"}/>

    {/* L5: FERRITE */}
    <chip name={"L5"} pcbX={9.080524} pcbY={-20.580351} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"FERRITE"} footprint={<Footprint_L5 />} noSchematicRepresentation={true}/>

    {/* C11: 2.2uF */}
    <capacitor name={"C11"} pcbX={-0.604882} pcbY={2.2994} pcbRotation={180} capacitance={"2.2uF"} footprint={<Footprint_C11 />} schX={-7.449999999999999} schY={-2.0999999999999996} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* D9: LED 0402 RED */}
    <chip name={"D9"} pcbX={-13.814882} pcbY={41.6144} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* R38: 200K */}
    <resistor name={"R38"} pcbX={-1.351225} pcbY={20.299401} pcbRotation={180} resistance={"200kohm"} footprint={<Footprint_R38 />} schX={-3.5999999999999996} schY={-0.14999999999999947} schRotation={90} schSheetName={"gpdi"}/>

    {/* C30: 100nF */}
    <capacitor name={"C30"} pcbX={0.975557} pcbY={-27.221886} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C30 />} schX={-5.599999999999998} schY={-2.3499999999999996} schRotation={0} schSheetName={"power"}/>

    {/* C3: 0.1uF */}
    <capacitor name={"C3"} pcbX={1.925118} pcbY={-7.1106} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C3 />} schX={-7.449999999999999} schY={-0.5} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* L6: FERRITE */}
    <chip name={"L6"} pcbX={4.131274} pcbY={-32.966755} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"FERRITE"} footprint={<Footprint_L6 />} noSchematicRepresentation={true}/>

    {/* F3: 15V 50mA */}
    <chip name={"F3"} pcbX={-6.351225} pcbY={20.499401} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"15V 50mA"} footprint={<Footprint_F3 />} noSchematicRepresentation={true}/>

    {/* R11: 5.1K */}
    <resistor name={"R11"} pcbX={-7.354882} pcbY={40.691107} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R11 />} schX={7.15} schY={4.3} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* C10: 0.1uF */}
    <capacitor name={"C10"} pcbX={1.132432} pcbY={2.799401} pcbRotation={90} capacitance={"0.1uF"} footprint={<Footprint_C10 />} schX={-7.449999999999999} schY={-1.9000000000000004} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* Y1: Crystal_GND24_Small */}
    <chip name={"Y1"} pcbX={12.761929} pcbY={-4.6614} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"Crystal_GND24_Small"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* C5: 0.1uF */}
    <capacitor name={"C5"} pcbX={11.628471} pcbY={-1.4006} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C5 />} schX={-7.449999999999999} schY={-0.9000000000000004} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* L4: FERRITE */}
    <chip name={"L4"} pcbX={9.080524} pcbY={-22.090351} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"FERRITE"} footprint={<Footprint_L4 />} noSchematicRepresentation={true}/>

    {/* R33: 10K */}
    <resistor name={"R33"} pcbX={2.395118} pcbY={28.665807} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R33 />} schX={-3.1499999999999986} schY={2.45} schRotation={-90} schSheetName={"usbc"}/>

    {/* R32: 4K7 */}
    <resistor name={"R32"} pcbX={7.664795} pcbY={42.986607} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R32 />} schX={-1.950000000000002} schY={0.7000000000000002} schRotation={90} schSheetName={"led_driver"}/>

    {/* R37: 47K */}
    <resistor name={"R37"} pcbX={2.144767} pcbY={17.359396} pcbRotation={-90} resistance={"47kohm"} footprint={<Footprint_R37 />} schX={-2.3000000000000007} schY={-1.0499999999999998} schRotation={90} schSheetName={"gpdi"}/>

    {/* RN9: 33R */}
    <chip name={"RN9"} pcbX={-10.106705} pcbY={-16.944662} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"33R"} footprint={<Footprint_RN9 />} noSchematicRepresentation={true}/>

    {/* R13: 10K */}
    <resistor name={"R13"} pcbX={-1.104882} pcbY={44.0494} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R13 />} schX={-1.4000000000000004} schY={1.1000000000000005} schRotation={-90} schSheetName={"encoder"}/>

    {/* C1: 0.1uF */}
    <capacitor name={"C1"} pcbX={9.380118} pcbY={12.2944} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C1 />} schX={-8.649999999999999} schY={1.9000000000000004} schRotation={90} schSheetName={"rp2040_jtag"}/>

    {/* R14: 10K */}
    <resistor name={"R14"} pcbX={-9.904882} pcbY={43.2994} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R14 />} schX={-0.6999999999999993} schY={-0.1999999999999993} schRotation={-90} schSheetName={"encoder"}/>

    {/* C20: 22uF */}
    <capacitor name={"C20"} pcbX={5.645118} pcbY={-35.621074} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C20 />} schX={-6.999999999999997} schY={3.2500000000000004} schRotation={-90} schSheetName={"power"}/>

    {/* C26: 22uF */}
    <capacitor name={"C26"} pcbX={-7.014882} pcbY={25.1294} pcbRotation={0} capacitance={"22uF"} footprint={<Footprint_C26 />} schX={2.3500000000000014} schY={2.0500000000000007} schRotation={-90} schSheetName={"usbc"}/>

    {/* C9: 0.1uF */}
    <capacitor name={"C9"} pcbX={-0.604882} pcbY={-1.3006} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C9 />} schX={-7.449999999999999} schY={-1.6999999999999993} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* L8: 2.2uH */}
    <inductor name={"L8"} pcbX={11.613973} pcbY={-27.238016} pcbRotation={-90} inductance={"2.2uH"} footprint={<Footprint_L8 />} schX={7.100000000000001} schY={-2.3499999999999996} schRotation={0} schSheetName={"power"}/>

    {/* C27: 100nF */}
    <capacitor name={"C27"} pcbX={-11.104882} pcbY={25.0494} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C27 />} schX={2.7500000000000018} schY={2.0500000000000007} schRotation={-90} schSheetName={"usbc"}/>

    {/* SW3: RotaryEncoder_Switch */}
    <chip name={"SW3"} pcbX={-10.454882} pcbY={51.5494} pcbRotation={180} pinLabels={{ "pin1": ["A"], "pin2": ["B"], "pin3": ["C"], "pin4": ["S1"], "pin5": ["S2"] }} displayName={"RotaryEncoder_Switch"} footprint={<Footprint_SW3 />} noSchematicRepresentation={true}/>

    {/* C24: 22uF */}
    <capacitor name={"C24"} pcbX={-12.111225} pcbY={-21.450599} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C24 />} schX={-3.75} schY={5.259999999999999} schRotation={-90} schSheetName={"Overview"}/>

    {/* F2: 15V 200mA */}
    <chip name={"F2"} pcbX={-0.132382} pcbY={-50.0631} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"15V 200mA"} footprint={<Footprint_F2 />} noSchematicRepresentation={true}/>

    {/* C42: 22uF */}
    <capacitor name={"C42"} pcbX={12.545118} pcbY={47.7744} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C42 />} schX={-4.3500000000000005} schY={0.5} schRotation={-90} schSheetName={"led_driver"}/>

    {/* J2: Conn_02x06_Top_Bottom */}
    <chip name={"J2"} pcbX={-9.354882} pcbY={-24.1106} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"] }} displayName={"Conn_02x06_Top_Bottom"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* U13: PI3HDX511E */}
    <chip name={"U13"} pcbX={-2.861225} pcbY={11.549401} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} displayName={"PI3HDX511E"} footprint={<Footprint_U13 />} noSchematicRepresentation={true}/>

    {/* C51: 100nF */}
    <capacitor name={"C51"} pcbX={0.986227} pcbY={13.123127} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C51 />} schX={-1.0999999999999996} schY={0.4500000000000002} schRotation={0} schSheetName={"gpdi"}/>

    {/* U10: TLV62569ADRLR */}
    <chip name={"U10"} pcbX={12.138775} pcbY={-24.200599} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"TLV62569ADRLR"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* R39: 210K */}
    <resistor name={"R39"} pcbX={14.665391} pcbY={-23.981708} pcbRotation={-90} resistance={"210kohm"} footprint={<Footprint_R39 />} schX={7.300000000000001} schY={-2.6500000000000004} schRotation={90} schSheetName={"power"}/>

    {/* C32: 22uF */}
    <capacitor name={"C32"} pcbX={9.485255} pcbY={-26.232262} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C32 />} schX={7.900000000000002} schY={-2.8499999999999996} schRotation={-90} schSheetName={"power"}/>

    {/* R7: 27R */}
    <resistor name={"R7"} pcbX={-2.454882} pcbY={-0.4756} pcbRotation={0} resistance={"27ohm"} footprint={<Footprint_R7 />} schX={-5.949999999999999} schY={-0.09999999999999964} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* R6: 27R */}
    <resistor name={"R6"} pcbX={-2.454882} pcbY={0.5244} pcbRotation={0} resistance={"27ohm"} footprint={<Footprint_R6 />} schX={-5.949999999999999} schY={0.09999999999999964} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* R18: 30K */}
    <resistor name={"R18"} pcbX={2.485156} pcbY={-29.716232} pcbRotation={-90} resistance={"30kohm"} footprint={<Footprint_R18 />} schX={-3.299999999999997} schY={-3.25} schRotation={90} schSheetName={"power"}/>

    {/* R36: 47K */}
    <resistor name={"R36"} pcbX={-0.599148} pcbY={16.942611} pcbRotation={-90} resistance={"47kohm"} footprint={<Footprint_R36 />} schX={-2} schY={-1.0499999999999998} schRotation={90} schSheetName={"gpdi"}/>

    {/* R16: 220R */}
    <resistor name={"R16"} pcbX={13.745118} pcbY={-7.7906} pcbRotation={90} resistance={"220ohm"} footprint={<Footprint_R16 />} schX={2.950000000000001} schY={-0.14999999999999947} schRotation={180} schSheetName={"midi"}/>

    {/* R31: 2K2 */}
    <resistor name={"R31"} pcbX={-5.871225} pcbY={17.579401} pcbRotation={90} resistance={"2.2kohm"} footprint={<Footprint_R31 />} schX={3.0999999999999996} schY={2.8499999999999996} schRotation={90} schSheetName={"gpdi"}/>

    {/* R40: 33R */}
    <resistor name={"R40"} pcbX={-3.061225} pcbY={5.119401} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R40 />} schX={9.649999999999999} schY={-1.540000000000001} schRotation={0} schSheetName={"Overview"}/>

    {/* C12: 2.2uF */}
    <capacitor name={"C12"} pcbX={-0.604882} pcbY={1.2994} pcbRotation={180} capacitance={"2.2uF"} footprint={<Footprint_C12 />} schX={-7.449999999999999} schY={-2.5} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* J8: MICROMOD-2222 */}
    <chip name={"J8"} pcbX={3.845118} pcbY={-12.435} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["S1"], "pin77": ["S2"] }} displayName={"MICROMOD-2222"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* C13: 0.1uF */}
    <capacitor name={"C13"} pcbX={11.645118} pcbY={-0.1256} pcbRotation={0} capacitance={"0.1uF"} footprint={<Footprint_C13 />} schX={-7.449999999999999} schY={-2.6999999999999993} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* R19: 4K7 */}
    <resistor name={"R19"} pcbX={-9.654882} pcbY={33.5494} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R19 />} schX={-3.349999999999998} schY={-0.04999999999999982} schRotation={90} schSheetName={"usbc"}/>

    {/* R15: 1K */}
    <resistor name={"R15"} pcbX={14.720118} pcbY={-7.8006} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R15 />} schX={2.4499999999999993} schY={0.25} schRotation={90} schSheetName={"midi"}/>

    {/* C16: 15pF */}
    <capacitor name={"C16"} pcbX={11.731427} pcbY={-7.652282} pcbRotation={0} capacitance={"15pF"} footprint={<Footprint_C16 />} schX={-7.449999999999999} schY={-4.299999999999999} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* U9: AP2161W */}
    <chip name={"U9"} pcbX={-0.242382} pcbY={28.615807} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"AP2161W"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* R50: 4K7 */}
    <resistor name={"R50"} pcbX={-3.071225} pcbY={6.999401} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R50 />} schX={1.4000000000000004} schY={3.45} schRotation={180} schSheetName={"gpdi"}/>

    {/* R9: 4K7 */}
    <resistor name={"R9"} pcbX={-2.061225} pcbY={17.575082} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R9 />} schX={1.200000000000001} schY={-1.7500000000000009} schRotation={90} schSheetName={"gpdi"}/>

    {/* C53: 100nF */}
    <capacitor name={"C53"} pcbX={-0.037499} pcbY={14.124401} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C53 />} schX={-1.0999999999999996} schY={0.04999999999999982} schRotation={0} schSheetName={"gpdi"}/>

    {/* R44: 4K7 */}
    <resistor name={"R44"} pcbX={0.338775} pcbY={16.929401} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R44 />} schX={-1} schY={-0.4500000000000002} schRotation={90} schSheetName={"gpdi"}/>

    {/* D5: LED 0402 GREEN */}
    <chip name={"D5"} pcbX={-13.809882} pcbY={40.6744} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* D7: LED 0402 GREEN */}
    <chip name={"D7"} pcbX={-13.809882} pcbY={-54.0806} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* R27: 10K */}
    <resistor name={"R27"} pcbX={-0.864882} pcbY={26.165807} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R27 />} schX={-2.549999999999997} schY={2.45} schRotation={-90} schSheetName={"usbc"}/>

    {/* C29: 22uF */}
    <capacitor name={"C29"} pcbX={12.920492} pcbY={-20.950599} pcbRotation={0} capacitance={"22uF"} footprint={<Footprint_C29 />} schX={3.900000000000002} schY={-2.8499999999999996} schRotation={-90} schSheetName={"power"}/>

    {/* D2: 1N4007FL */}
    <chip name={"D2"} pcbX={1.745118} pcbY={-37.9506} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1N4007FL"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* R28: 2K2 */}
    <resistor name={"R28"} pcbX={-4.911225} pcbY={17.575813} pcbRotation={90} resistance={"2.2kohm"} footprint={<Footprint_R28 />} schX={3.4000000000000004} schY={2.8499999999999996} schRotation={90} schSheetName={"gpdi"}/>

    {/* R3: 10K */}
    <resistor name={"R3"} pcbX={11.830118} pcbY={12.3244} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R3 />} schX={-6.749999999999999} schY={3.9} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* SW2: SW_Tactile_SPST */}
    <chip name={"SW2"} pcbX={6.145118} pcbY={27.2494} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SW_Tactile_SPST"} footprint={<Footprint_SW2 />} noSchematicRepresentation={true}/>

    {/* C25: 100nF */}
    <capacitor name={"C25"} pcbX={8.625118} pcbY={-33.4506} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C25 />} schX={-8.599999999999998} schY={-2.4499999999999993} schRotation={-90} schSheetName={"power"}/>

    {/* R1: 4K7 */}
    <resistor name={"R1"} pcbX={-0.629882} pcbY={-19.7256} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R1 />} schX={6.150000000000002} schY={3.5599999999999996} schRotation={90} schSheetName={"Overview"}/>

    {/* D1: 1N4007FL */}
    <chip name={"D1"} pcbX={-10.804882} pcbY={-42.8256} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1N4007FL"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* C41: 10n */}
    <capacitor name={"C41"} pcbX={-1.104882} pcbY={51.0494} pcbRotation={-90} capacitance={"10nF"} footprint={<Footprint_C41 />} schX={1.5999999999999996} schY={-1.0999999999999996} schRotation={-90} schSheetName={"encoder"}/>

    {/* C46: 100nF */}
    <capacitor name={"C46"} pcbX={0.013775} pcbY={9.749401} pcbRotation={135} capacitance={"100nF"} footprint={<Footprint_C46 />} schX={-1.0999999999999996} schY={1.4499999999999993} schRotation={0} schSheetName={"gpdi"}/>

    {/* D13: LED 0402 GREEN */}
    <chip name={"D13"} pcbX={-13.804882} pcbY={42.5644} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* C48: 100nF */}
    <capacitor name={"C48"} pcbX={1.017795} pcbY={10.741593} pcbRotation={135} capacitance={"100nF"} footprint={<Footprint_C48 />} schX={-1.0999999999999996} schY={1.0499999999999998} schRotation={0} schSheetName={"gpdi"}/>

    {/* C15: 15pF */}
    <capacitor name={"C15"} pcbX={13.165392} pcbY={-1.905995} pcbRotation={90} capacitance={"15pF"} footprint={<Footprint_C15 />} schX={-7.449999999999999} schY={-3.9000000000000004} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* R12: 5.1K */}
    <resistor name={"R12"} pcbX={-6.364882} pcbY={40.691107} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R12 />} schX={7.15} schY={4.1} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* C23: 22uF */}
    <capacitor name={"C23"} pcbX={7.535498} pcbY={-30.834833} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C23 />} schX={-8.999999999999998} schY={-2.4499999999999993} schRotation={-90} schSheetName={"power"}/>

    {/* C40: 10n */}
    <capacitor name={"C40"} pcbX={-3.084882} pcbY={43.2994} pcbRotation={0} capacitance={"10nF"} footprint={<Footprint_C40 />} schX={0.8000000000000007} schY={-1.0999999999999996} schRotation={-90} schSheetName={"encoder"}/>

    {/* C4: 0.1uF */}
    <capacitor name={"C4"} pcbX={6.496058} pcbY={-7.950599} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C4 />} schX={-7.449999999999999} schY={-0.6999999999999993} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* R5: 1K */}
    <resistor name={"R5"} pcbX={11.635118} pcbY={-2.3506} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R5 />} schX={-6.149999999999999} schY={-3.6999999999999993} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* C34: 100nF */}
    <capacitor name={"C34"} pcbX={-0.347117} pcbY={-22.217834} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C34 />} schX={-1.5999999999999996} schY={-2.8499999999999996} schRotation={-90} schSheetName={"power"}/>

    {/* R2: 4K7 */}
    <resistor name={"R2"} pcbX={0.420118} pcbY={-19.7256} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R2 />} schX={6.350000000000001} schY={3.3599999999999994} schRotation={90} schSheetName={"Overview"}/>

    {/* L3: 10uH 2A */}
    <inductor name={"L3"} pcbX={3.211023} pcbY={-23.397982} pcbRotation={90} inductance={"10uH"} footprint={<Footprint_L3 />} schX={-4.499999999999998} schY={-2.3499999999999996} schRotation={0} schSheetName={"power"}/>

    {/* H2: MountingHole */}
    <chip name={"H2"} pcbX={12.937118} pcbY={-33.842674} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* R30: 10K */}
    <resistor name={"R30"} pcbX={-5.344882} pcbY={43.2994} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R30 />} schX={0.3000000000000007} schY={-0.7999999999999998} schRotation={0} schSheetName={"encoder"}/>

    {/* C31: 100pF */}
    <capacitor name={"C31"} pcbX={1.53266} pcbY={-31.621224} pcbRotation={-90} capacitance={"100pF"} footprint={<Footprint_C31 />} schX={-3.9999999999999982} schY={-2.6500000000000004} schRotation={90} schSheetName={"power"}/>

    {/* U8: TUSB322I */}
    <chip name={"U8"} pcbX={-7.325662} pcbY={32.067714} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"] }} displayName={"TUSB322I"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* C14: 0.1uF */}
    <capacitor name={"C14"} pcbX={-1.204882} pcbY={-3.7606} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C14 />} schX={-7.449999999999999} schY={-2.9000000000000004} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* C47: 100nF */}
    <capacitor name={"C47"} pcbX={0.513775} pcbY={10.249401} pcbRotation={135} capacitance={"100nF"} footprint={<Footprint_C47 />} schX={-1.0999999999999996} schY={1.25} schRotation={0} schSheetName={"gpdi"}/>

    {/* R4: 10K */}
    <resistor name={"R4"} pcbX={11.64076} pcbY={0.7994} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R4 />} schX={-6.749999999999999} schY={3.1} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* U7: PCA9635 LED DRIVER */}
    <chip name={"U7"} pcbX={6.170118} pcbY={47.6869} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"] }} displayName={"PCA9635 LED DRIVER"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* C45: 4.7uF */}
    <capacitor name={"C45"} pcbX={0.638775} pcbY={7.149401} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C45 />} schX={-0.4999999999999982} schY={1.6500000000000004} schRotation={180} schSheetName={"gpdi"}/>

    {/* C6: 0.1uF */}
    <capacitor name={"C6"} pcbX={5.828988} pcbY={2.794972} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C6 />} schX={-7.449999999999999} schY={-1.0999999999999996} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* J4: ~ */}
    <chip name={"J4"} pcbX={-8.804882} pcbY={-47.508336} pcbRotation={0} pinLabels={{ "pin1": ["G"], "pin2": ["S"], "pin3": ["SN"], "pin4": ["T"], "pin5": ["TN"] }} displayName={"~"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* C8: 0.1uF */}
    <capacitor name={"C8"} pcbX={-0.604882} pcbY={-2.3006} pcbRotation={180} capacitance={"0.1uF"} footprint={<Footprint_C8 />} schX={-7.449999999999999} schY={-1.4999999999999991} schRotation={180} schSheetName={"rp2040_jtag"}/>

    {/* R42: 47K */}
    <resistor name={"R42"} pcbX={13.706717} pcbY={-23.972749} pcbRotation={90} resistance={"47kohm"} footprint={<Footprint_R42 />} schX={7.300000000000001} schY={-3.25} schRotation={90} schSheetName={"power"}/>

    {/* D4: B0520LW */}
    <chip name={"D4"} pcbX={-2.971225} pcbY={22.629401} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"B0520LW"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* RN6: 33R */}
    <chip name={"RN6"} pcbX={-5.745108} pcbY={-22.523822} pcbRotation={-135} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"33R"} footprint={<Footprint_RN6 />} noSchematicRepresentation={true}/>

    {/* C52: 100nF */}
    <capacitor name={"C52"} pcbX={0.463775} pcbY={13.625675} pcbRotation={-135} capacitance={"100nF"} footprint={<Footprint_C52 />} schX={-1.0999999999999996} schY={0.25} schRotation={0} schSheetName={"gpdi"}/>

    {/* R23: 10K */}
    <resistor name={"R23"} pcbX={-8.364882} pcbY={40.711107} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R23 />} schX={4.450000000000001} schY={-2.5} schRotation={0} schSheetName={"rp2040_jtag"}/>

    {/* R21: 10K */}
    <resistor name={"R21"} pcbX={-7.864882} pcbY={43.2994} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R21 />} schX={-0.3000000000000007} schY={-0.1999999999999993} schRotation={-90} schSheetName={"encoder"}/>

    {/* L7: FERRITE */}
    <chip name={"L7"} pcbX={-0.792382} pcbY={-40.4506} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"FERRITE"} footprint={<Footprint_L7 />} noSchematicRepresentation={true}/>

    {/* D6: LED 0402 GREEN */}
    <chip name={"D6"} pcbX={-13.829882} pcbY={52.3494} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* U3: USBLC6-4SC6 */}
    <chip name={"U3"} pcbX={-7.361225} pcbY={25.049401} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"USBLC6-4SC6"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* R49: 33R */}
    <resistor name={"R49"} pcbX={-3.575298} pcbY={-18.513519} pcbRotation={45} resistance={"33ohm"} footprint={<Footprint_R49 />} schX={1.549999999999999} schY={-2.539999999999999} schRotation={0} schSheetName={"Overview"}/>

    {/* Y2: 25MHz AMB8G */}
    <chip name={"Y2"} pcbX={-3.394084} pcbY={-33.412959} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"25MHz AMB8G"} footprint={<Footprint_Y2 />} noSchematicRepresentation={true}/>

    {/* D16: LED 0402 GREEN */}
    <chip name={"D16"} pcbX={-13.809882} pcbY={46.6594} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D16 />} noSchematicRepresentation={true}/>

    {/* D14: LED 0402 GREEN */}
    <chip name={"D14"} pcbX={-13.829882} pcbY={50.4494} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* U6: 74AUC1G79 */}
    <chip name={"U6"} pcbX={-2.611225} pcbY={-11.700599} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74AUC1G79"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* R48: 33R */}
    <resistor name={"R48"} pcbX={-0.923534} pcbY={-22.434767} pcbRotation={45} resistance={"33ohm"} footprint={<Footprint_R48 />} schX={-6.6499999999999995} schY={-5.640000000000001} schRotation={0} schSheetName={"Overview"}/>

    {/* D10: LED 0402 RED */}
    <chip name={"D10"} pcbX={-13.822382} pcbY={51.3994} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* D8: LED 0402 GREEN */}
    <chip name={"D8"} pcbX={-13.814882} pcbY={48.5594} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 GREEN"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* J1: Conn_01x15 */}
    <chip name={"J1"} pcbX={-5.144882} pcbY={1.6494} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"] }} displayName={"Conn_01x15"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* RN4: 220R */}
    <chip name={"RN4"} pcbX={-7.184882} pcbY={46.5594} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"220R"} footprint={<Footprint_RN4 />} noSchematicRepresentation={true}/>

    {/* U1: USBLC6-2P6 */}
    <chip name={"U1"} pcbX={-7.361225} pcbY={40.049401} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"USBLC6-2P6"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* REF**: WEEE-Logo_4.2x6mm_SilkScreen */}
    <chip name={"REF__"} pcbX={-10.354882} pcbY={-41.3506} pcbRotation={-90} pinLabels={{}} displayName={"WEEE-Logo_4.2x6mm_SilkScreen"} footprint={<Footprint_REF__ />} noSchematicRepresentation={true}/>

    {/* U4: H11L1SR2M */}
    <chip name={"U4"} pcbX={3.860118} pcbY={-30.8456} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"H11L1SR2M"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* C35: 100nF */}
    <capacitor name={"C35"} pcbX={-4.441225} pcbY={11.549401} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C35 />} schX={-1} schY={-3.45} schRotation={-90} schSheetName={"gpdi"}/>

    {/* C44: 4.7uF */}
    <capacitor name={"C44"} pcbX={-5.161225} pcbY={13.749401} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C44 />} schX={0.1999999999999993} schY={-3.45} schRotation={-90} schSheetName={"gpdi"}/>

    {/* D12: LED 0402 RED */}
    <chip name={"D12"} pcbX={-13.809882} pcbY={47.6094} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* R47: 33R */}
    <resistor name={"R47"} pcbX={-0.220266} pcbY={-23.1185} pcbRotation={45} resistance={"33ohm"} footprint={<Footprint_R47 />} schX={-6.6499999999999995} schY={-5.240000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* RN7: 33R */}
    <chip name={"RN7"} pcbX={-6.51941} pcbY={-24.509911} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"33R"} footprint={<Footprint_RN7 />} noSchematicRepresentation={true}/>

    {/* RN2: 220R */}
    <chip name={"RN2"} pcbX={-7.254882} pcbY={51.5594} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"220R"} footprint={<Footprint_RN2 />} noSchematicRepresentation={true}/>

    {/* U11: Si5351A-B-GT */}
    <chip name={"U11"} pcbX={-3.590374} pcbY={-28.326956} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"Si5351A-B-GT"} footprint={<Footprint_U11 />} noSchematicRepresentation={true}/>

    {/* R34: 33R */}
    <resistor name={"R34"} pcbX={-6.922544} pcbY={-17.444427} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R34 />} schX={1.549999999999999} schY={-2.34} schRotation={0} schSheetName={"Overview"}/>

    {/* D20: LED 0402 RED */}
    <chip name={"D20"} pcbX={-13.809882} pcbY={45.7094} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D20 />} noSchematicRepresentation={true}/>

    {/* R45: 10K */}
    <resistor name={"R45"} pcbX={-3.611225} pcbY={-15.200599} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R45 />} schX={3.450000000000001} schY={-4.040000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* R35: 33R */}
    <resistor name={"R35"} pcbX={-7.861225} pcbY={-17.440599} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R35 />} schX={1.549999999999999} schY={-2.1400000000000006} schRotation={0} schSheetName={"Overview"}/>

    {/* D18: LED 0402 RED */}
    <chip name={"D18"} pcbX={-13.822382} pcbY={49.4994} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED 0402 RED"} footprint={<Footprint_D18 />} noSchematicRepresentation={true}/>

    {/* R46: 0R */}
    <resistor name={"R46"} pcbX={-1.601226} pcbY={-8.950599} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R46 />} schX={3.75} schY={-2.4400000000000013} schRotation={180} schSheetName={"Overview"}/>

    {/* C36: 0.1uF */}
    <capacitor name={"C36"} pcbX={-1.361225} pcbY={-29.950599} pcbRotation={-90} capacitance={"0.1uF"} footprint={<Footprint_C36 />} schX={-9.649999999999999} schY={-4.440000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".J5 > .pin1", ".J5 > .pin7", ".J5 > .pin8", ".J5 > .pin14", ".J5 > .pin15", ".J6 > .pin3", ".J6 > .pin4", ".J6 > .pin5", ".J6 > .pin6", ".J6 > .pin7", ".J6 > .pin8", ".C33 > .pin2", ".U12 > .pin4", ".U12 > .pin9", ".J10 > .pin2", ".J10 > .pin5", ".J10 > .pin8", ".J10 > .pin11", ".J10 > .pin17", ".J10 > .pin20", ".H3 > .pin1", ".R24 > .pin1", ".C21 > .pin2", ".C7 > .pin2", ".C28 > .pin2", ".J7 > .pin1", ".J7 > .pin7", ".J7 > .pin8", ".J7 > .pin14", ".J7 > .pin15", ".R25 > .pin1", ".U2 > .pin19", ".U2 > .pin57", ".J3 > .pin5", ".J3 > .pin11", ".U5 > .pin4", ".C2 > .pin2", ".C22 > .pin2", ".U14 > .pin1", ".C38 > .pin2", ".H1 > .pin1", ".R26 > .pin1", ".C43 > .pin2", ".C19 > .pin2", ".C39 > .pin2", ".C37 > .pin2", ".C11 > .pin2", ".C3 > .pin2", ".R11 > .pin2", ".C10 > .pin2", ".Y1 > .pin2", ".Y1 > .pin4", ".C5 > .pin2", ".R32 > .pin1", ".C1 > .pin1", ".C20 > .pin1", ".C26 > .pin2", ".C9 > .pin2", ".C27 > .pin2", ".SW3 > .pin3", ".SW3 > .pin4", ".C24 > .pin2", ".C42 > .pin2", ".J2 > .pin5", ".J2 > .pin11", ".U13 > .pin14", ".U13 > .pin31", ".U13 > .pin32", ".U13 > .pin33", ".U10 > .pin2", ".C32 > .pin2", ".R18 > .pin1", ".C12 > .pin2", ".J8 > .pin1", ".J8 > .pin7", ".J8 > .pin33", ".J8 > .pin36", ".J8 > .pin39", ".J8 > .pin45", ".J8 > .pin75", ".J8 > .pin76", ".J8 > .pin77", ".C13 > .pin2", ".C16 > .pin2", ".U9 > .pin2", ".R9 > .pin1", ".C29 > .pin2", ".SW2 > .pin1", ".C25 > .pin2", ".C41 > .pin2", ".C15 > .pin2", ".R12 > .pin2", ".C23 > .pin2", ".C40 > .pin2", ".C4 > .pin2", ".C34 > .pin2", ".H2 > .pin1", ".U8 > .pin5", ".U8 > .pin10", ".U8 > .pin11", ".C14 > .pin2", ".U7 > .pin2", ".U7 > .pin4", ".U7 > .pin5", ".U7 > .pin14", ".U7 > .pin24", ".U7 > .pin25", ".C45 > .pin1", ".C6 > .pin2", ".J4 > .pin1", ".C8 > .pin2", ".R42 > .pin1", ".U3 > .pin2", ".Y2 > .pin2", ".Y2 > .pin4", ".U6 > .pin3", ".J1 > .pin4", ".J1 > .pin6", ".J1 > .pin15", ".U1 > .pin2", ".U4 > .pin5", ".C35 > .pin2", ".C44 > .pin2", ".U11 > .pin8", ".R45 > .pin1", ".C36 > .pin2"]}/>
    {/* KiCad net: /rp2040_jtag/RP2040_USB_VBUS */}
    <KiCadNet name={"_rp2040_jtag_RP2040_USB_VBUS"} connectsTo={[".J5 > .pin2", ".J5 > .pin6", ".J5 > .pin9", ".J5 > .pin13", ".R23 > .pin2", ".U1 > .pin5"]}/>
    {/* KiCad net: Net-(J5-CC1) */}
    <KiCadNet name={"Net__J5_CC1_"} connectsTo={[".J5 > .pin3", ".R11 > .pin1"]}/>
    {/* KiCad net: /rp2040_jtag/RP2040_USB_D+ */}
    <KiCadNet name={"_rp2040_jtag_RP2040_USB_D_"} connectsTo={[".J5 > .pin4", ".J5 > .pin11", ".R7 > .pin1", ".U1 > .pin3", ".U1 > .pin4"]}/>
    {/* KiCad net: /rp2040_jtag/RP2040_USB_D- */}
    <KiCadNet name={"_rp2040_jtag_RP2040_USB_D__"} connectsTo={[".J5 > .pin5", ".J5 > .pin12", ".R6 > .pin1", ".U1 > .pin1", ".U1 > .pin6"]}/>
    {/* KiCad net: Net-(J5-CC2) */}
    <KiCadNet name={"Net__J5_CC2_"} connectsTo={[".J5 > .pin10", ".R12 > .pin1"]}/>
    {/* KiCad net: Net-(J6-Pin_1) */}
    <KiCadNet name={"Net__J6_Pin_1_"} connectsTo={[".J6 > .pin1", ".J6 > .pin2", ".F2 > .pin1"]}/>
    {/* KiCad net: Net-(J6-Pin_10) */}
    <KiCadNet name={"Net__J6_Pin_10_"} connectsTo={[".J6 > .pin9", ".J6 > .pin10", ".F1 > .pin1"]}/>
    {/* KiCad net: Net-(D11-K) */}
    <KiCadNet name={"Net__D11_K_"} connectsTo={[".D11 > .pin1", ".U7 > .pin16"]}/>
    {/* KiCad net: Net-(D11-A) */}
    <KiCadNet name={"Net__D11_A_"} connectsTo={[".D11 > .pin2", ".RN3 > .pin7"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".C33 > .pin1", ".RN3 > .pin1", ".RN3 > .pin2", ".RN3 > .pin3", ".RN3 > .pin4", ".U12 > .pin8", ".C17 > .pin1", ".C21 > .pin1", ".RN1 > .pin1", ".RN1 > .pin2", ".RN1 > .pin3", ".RN1 > .pin4", ".C7 > .pin1", ".U2 > .pin1", ".U2 > .pin10", ".U2 > .pin22", ".U2 > .pin33", ".U2 > .pin42", ".U2 > .pin43", ".U2 > .pin44", ".U2 > .pin48", ".U2 > .pin49", ".J3 > .pin6", ".J3 > .pin12", ".C22 > .pin1", ".U14 > .pin2", ".C43 > .pin1", ".C37 > .pin1", ".C11 > .pin1", ".R38 > .pin2", ".C3 > .pin1", ".C10 > .pin1", ".C5 > .pin1", ".R33 > .pin1", ".R37 > .pin2", ".R13 > .pin1", ".C1 > .pin2", ".R14 > .pin1", ".C9 > .pin1", ".L8 > .pin2", ".C24 > .pin1", ".C42 > .pin1", ".J2 > .pin6", ".J2 > .pin12", ".U13 > .pin1", ".U13 > .pin22", ".R39 > .pin2", ".C32 > .pin1", ".R36 > .pin2", ".J8 > .pin2", ".J8 > .pin74", ".R19 > .pin2", ".R15 > .pin2", ".R50 > .pin1", ".R44 > .pin1", ".R27 > .pin1", ".R3 > .pin1", ".R1 > .pin2", ".C4 > .pin1", ".R2 > .pin2", ".R4 > .pin1", ".U7 > .pin1", ".U7 > .pin3", ".U7 > .pin28", ".C6 > .pin1", ".C8 > .pin1", ".R21 > .pin1", ".U6 > .pin5", ".J1 > .pin5", ".RN4 > .pin1", ".RN4 > .pin2", ".RN4 > .pin3", ".RN4 > .pin4", ".U4 > .pin6", ".C35 > .pin1", ".C44 > .pin1", ".RN2 > .pin1", ".RN2 > .pin2", ".RN2 > .pin3", ".RN2 > .pin4", ".U11 > .pin1", ".U11 > .pin7", ".C36 > .pin1"]}/>
    {/* KiCad net: unconnected-(RN3D-R4.2-Pad5) */}
    <KiCadNet name={"unconnected__RN3D_R4_2_Pad5_"} connectsTo={[".RN3 > .pin5"]}/>
    {/* KiCad net: unconnected-(RN3C-R3.2-Pad6) */}
    <KiCadNet name={"unconnected__RN3C_R3_2_Pad6_"} connectsTo={[".RN3 > .pin6"]}/>
    {/* KiCad net: Net-(D7-A) */}
    <KiCadNet name={"Net__D7_A_"} connectsTo={[".RN3 > .pin8", ".D7 > .pin2"]}/>
    {/* KiCad net: Net-(U12-~{CS}) */}
    <KiCadNet name={"Net__U12___CS__"} connectsTo={[".U12 > .pin1", ".U2 > .pin56", ".R8 > .pin1", ".R3 > .pin2"]}/>
    {/* KiCad net: Net-(U12-DO(IO1)) */}
    <KiCadNet name={"Net__U12_DO_IO1__"} connectsTo={[".U12 > .pin2", ".U2 > .pin55"]}/>
    {/* KiCad net: Net-(U12-IO2) */}
    <KiCadNet name={"Net__U12_IO2_"} connectsTo={[".U12 > .pin3", ".U2 > .pin54"]}/>
    {/* KiCad net: Net-(U12-DI(IO0)) */}
    <KiCadNet name={"Net__U12_DI_IO0__"} connectsTo={[".U12 > .pin5", ".U2 > .pin53"]}/>
    {/* KiCad net: Net-(U12-CLK) */}
    <KiCadNet name={"Net__U12_CLK_"} connectsTo={[".U12 > .pin6", ".U2 > .pin52"]}/>
    {/* KiCad net: Net-(U12-IO3) */}
    <KiCadNet name={"Net__U12_IO3_"} connectsTo={[".U12 > .pin7", ".U2 > .pin51"]}/>
    {/* KiCad net: Net-(U10-FB) */}
    <KiCadNet name={"Net__U10_FB_"} connectsTo={[".C17 > .pin2", ".U10 > .pin1", ".R39 > .pin1", ".R42 > .pin2"]}/>
    {/* KiCad net: /gpdi/CONN_D2+ */}
    <KiCadNet name={"_gpdi_CONN_D2_"} connectsTo={[".J10 > .pin1", ".U13 > .pin26"]}/>
    {/* KiCad net: /gpdi/CONN_D2- */}
    <KiCadNet name={"_gpdi_CONN_D2__"} connectsTo={[".J10 > .pin3", ".U13 > .pin25"]}/>
    {/* KiCad net: /gpdi/CONN_D1+ */}
    <KiCadNet name={"_gpdi_CONN_D1_"} connectsTo={[".J10 > .pin4", ".U13 > .pin24"]}/>
    {/* KiCad net: /gpdi/CONN_D1- */}
    <KiCadNet name={"_gpdi_CONN_D1__"} connectsTo={[".J10 > .pin6", ".U13 > .pin23"]}/>
    {/* KiCad net: /gpdi/CONN_D0+ */}
    <KiCadNet name={"_gpdi_CONN_D0_"} connectsTo={[".J10 > .pin7", ".U13 > .pin21"]}/>
    {/* KiCad net: /gpdi/CONN_D0- */}
    <KiCadNet name={"_gpdi_CONN_D0__"} connectsTo={[".J10 > .pin9", ".U13 > .pin20"]}/>
    {/* KiCad net: /gpdi/CONN_CK+ */}
    <KiCadNet name={"_gpdi_CONN_CK_"} connectsTo={[".J10 > .pin10", ".U13 > .pin19"]}/>
    {/* KiCad net: /gpdi/CONN_CK- */}
    <KiCadNet name={"_gpdi_CONN_CK__"} connectsTo={[".J10 > .pin12", ".U13 > .pin18"]}/>
    {/* KiCad net: unconnected-(J10-CEC-Pad13) */}
    <KiCadNet name={"unconnected__J10_CEC_Pad13_"} connectsTo={[".J10 > .pin13"]}/>
    {/* KiCad net: unconnected-(J10-UTILITY-Pad14) */}
    <KiCadNet name={"unconnected__J10_UTILITY_Pad14_"} connectsTo={[".J10 > .pin14"]}/>
    {/* KiCad net: /gpdi/SCL_Sink */}
    <KiCadNet name={"_gpdi_SCL_Sink"} connectsTo={[".J10 > .pin15", ".U13 > .pin27", ".R28 > .pin1"]}/>
    {/* KiCad net: /gpdi/SDA_Sink */}
    <KiCadNet name={"_gpdi_SDA_Sink"} connectsTo={[".J10 > .pin16", ".U13 > .pin28", ".R31 > .pin1"]}/>
    {/* KiCad net: Net-(J10-+5V) */}
    <KiCadNet name={"Net__J10__5V_"} connectsTo={[".J10 > .pin18", ".F3 > .pin1"]}/>
    {/* KiCad net: /gpdi/HPD_Sink */}
    <KiCadNet name={"_gpdi_HPD_Sink"} connectsTo={[".J10 > .pin19", ".U13 > .pin29"]}/>
    {/* KiCad net: Net-(U2-GPIO22{slash}SPI0_SCK{slash}UART1_CTS{slash}I2C1_SDA{slash}PWM3_A{slash}CLOCK_GPIN1{slash}USB_VBUS_DET) */}
    <KiCadNet name={"Net__U2_GPIO22_slash_SPI0_SCK_slash_UART1_CTS_slash_I2C1_SDA_slash_PWM3_A_slash_CLOCK_GPIN1_slash_USB_VBUS_DET_"} connectsTo={[".R24 > .pin2", ".U2 > .pin34", ".R23 > .pin1"]}/>
    {/* KiCad net: Net-(D2-A) */}
    <KiCadNet name={"Net__D2_A_"} connectsTo={[".F1 > .pin2", ".D2 > .pin2"]}/>
    {/* KiCad net: -12V */}
    <KiCadNet name={"_12V"} connectsTo={[".L2 > .pin1", ".L7 > .pin2", ".J1 > .pin1"]}/>
    {/* KiCad net: Net-(D3-A) */}
    <KiCadNet name={"Net__D3_A_"} connectsTo={[".L2 > .pin2", ".D3 > .pin2", ".C19 > .pin1", ".L7 > .pin1"]}/>
    {/* KiCad net: Net-(D17-A) */}
    <KiCadNet name={"Net__D17_A_"} connectsTo={[".RN1 > .pin5", ".D17 > .pin2"]}/>
    {/* KiCad net: Net-(D13-A) */}
    <KiCadNet name={"Net__D13_A_"} connectsTo={[".RN1 > .pin6", ".D13 > .pin2"]}/>
    {/* KiCad net: Net-(D9-A) */}
    <KiCadNet name={"Net__D9_A_"} connectsTo={[".RN1 > .pin7", ".D9 > .pin2"]}/>
    {/* KiCad net: Net-(D5-A) */}
    <KiCadNet name={"Net__D5_A_"} connectsTo={[".RN1 > .pin8", ".D5 > .pin2"]}/>
    {/* KiCad net: FFC_SDIN1 */}
    <KiCadNet name={"FFC_SDIN1"} connectsTo={[".RN5 > .pin1", ".J1 > .pin7"]}/>
    {/* KiCad net: FFC_SDOUT1 */}
    <KiCadNet name={"FFC_SDOUT1"} connectsTo={[".RN5 > .pin2", ".J1 > .pin8"]}/>
    {/* KiCad net: FFC_LRCK */}
    <KiCadNet name={"FFC_LRCK"} connectsTo={[".RN5 > .pin3", ".J1 > .pin9"]}/>
    {/* KiCad net: FFC_BICK */}
    <KiCadNet name={"FFC_BICK"} connectsTo={[".RN5 > .pin4", ".J1 > .pin10"]}/>
    {/* KiCad net: Net-(J8-AUD_BCLK) */}
    <KiCadNet name={"Net__J8_AUD_BCLK_"} connectsTo={[".RN5 > .pin5", ".J8 > .pin50"]}/>
    {/* KiCad net: Net-(J8-G4{slash}BUS4) */}
    <KiCadNet name={"Net__J8_G4_slash_BUS4_"} connectsTo={[".RN5 > .pin6", ".J8 > .pin48"]}/>
    {/* KiCad net: Net-(J8-G3{slash}BUS3) */}
    <KiCadNet name={"Net__J8_G3_slash_BUS3_"} connectsTo={[".RN5 > .pin7", ".J8 > .pin46"]}/>
    {/* KiCad net: Net-(J8-G1{slash}BUS1) */}
    <KiCadNet name={"Net__J8_G1_slash_BUS1_"} connectsTo={[".RN5 > .pin8", ".J8 > .pin42"]}/>
    {/* KiCad net: GPDI_D0+ */}
    <KiCadNet name={"GPDI_D0_"} connectsTo={[".C50 > .pin1", ".J8 > .pin68"]}/>
    {/* KiCad net: Net-(U13-IN_D0-) */}
    <KiCadNet name={"Net__U13_IN_D0__"} connectsTo={[".C50 > .pin2", ".U13 > .pin7"]}/>
    {/* KiCad net: Net-(U10-EN) */}
    <KiCadNet name={"Net__U10_EN_"} connectsTo={[".C28 > .pin1", ".L5 > .pin1", ".L4 > .pin1", ".U10 > .pin3", ".U10 > .pin5", ".C29 > .pin1"]}/>
    {/* KiCad net: GPDI_D1- */}
    <KiCadNet name={"GPDI_D1_"} connectsTo={[".C49 > .pin1", ".J8 > .pin54"]}/>
    {/* KiCad net: Net-(U13-IN_D1+) */}
    <KiCadNet name={"Net__U13_IN_D1__"} connectsTo={[".C49 > .pin2", ".U13 > .pin6"]}/>
    {/* KiCad net: Net-(J4-PadS) */}
    <KiCadNet name={"Net__J4_PadS_"} connectsTo={[".R10 > .pin1", ".J4 > .pin2"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".R10 > .pin2", ".D1 > .pin1", ".U4 > .pin1"]}/>
    {/* KiCad net: SC_USB0_VBUS */}
    <KiCadNet name={"SC_USB0_VBUS"} connectsTo={[".J7 > .pin2", ".J7 > .pin6", ".J7 > .pin9", ".J7 > .pin13", ".R20 > .pin1", ".C26 > .pin1", ".C27 > .pin1", ".J8 > .pin9", ".U9 > .pin1", ".U3 > .pin5"]}/>
    {/* KiCad net: /usbc/USB_CC1 */}
    <KiCadNet name={"_usbc_USB_CC1"} connectsTo={[".J7 > .pin3", ".U8 > .pin1", ".U3 > .pin4"]}/>
    {/* KiCad net: SC_USB0_D+ */}
    <KiCadNet name={"SC_USB0_D_"} connectsTo={[".J7 > .pin4", ".J7 > .pin11", ".J8 > .pin3", ".U3 > .pin1"]}/>
    {/* KiCad net: SC_USB0_D- */}
    <KiCadNet name={"SC_USB0_D__"} connectsTo={[".J7 > .pin5", ".J7 > .pin12", ".J8 > .pin5", ".U3 > .pin6"]}/>
    {/* KiCad net: /usbc/USB_CC2 */}
    <KiCadNet name={"_usbc_USB_CC2"} connectsTo={[".J7 > .pin10", ".U8 > .pin2", ".U3 > .pin3"]}/>
    {/* KiCad net: Net-(U8-VBUS_DET) */}
    <KiCadNet name={"Net__U8_VBUS_DET_"} connectsTo={[".R20 > .pin2", ".U8 > .pin3"]}/>
    {/* KiCad net: Net-(U13-OC_S0) */}
    <KiCadNet name={"Net__U13_OC_S0_"} connectsTo={[".R25 > .pin2", ".U13 > .pin16"]}/>
    {/* KiCad net: +12V */}
    <KiCadNet name={"_12V_"} connectsTo={[".L1 > .pin1", ".U5 > .pin2", ".U5 > .pin3", ".L6 > .pin2", ".C25 > .pin1", ".C23 > .pin1", ".J1 > .pin3"]}/>
    {/* KiCad net: Net-(D2-K) */}
    <KiCadNet name={"Net__D2_K_"} connectsTo={[".L1 > .pin2", ".L6 > .pin1", ".C20 > .pin2", ".D2 > .pin1"]}/>
    {/* KiCad net: unconnected-(U2-GPIO0{slash}SPI0_RX{slash}UART0_TX{slash}I2C0_SDA{slash}PWM0_A{slash}USB_OVCUR_DET-Pad2) */}
    <KiCadNet name={"unconnected__U2_GPIO0_slash_SPI0_RX_slash_UART0_TX_slash_I2C0_SDA_slash_PWM0_A_slash_USB_OVCUR_DET_Pad2_"} connectsTo={[".U2 > .pin2"]}/>
    {/* KiCad net: /rp2040_jtag/SPI0_CSn */}
    <KiCadNet name={"_rp2040_jtag_SPI0_CSn"} connectsTo={[".U2 > .pin3", ".RN8 > .pin8"]}/>
    {/* KiCad net: /rp2040_jtag/SPI0_SCK */}
    <KiCadNet name={"_rp2040_jtag_SPI0_SCK"} connectsTo={[".U2 > .pin4", ".RN8 > .pin7"]}/>
    {/* KiCad net: /rp2040_jtag/SPI0_TX */}
    <KiCadNet name={"_rp2040_jtag_SPI0_TX"} connectsTo={[".U2 > .pin5", ".RN8 > .pin6"]}/>
    {/* KiCad net: /rp2040_jtag/SPI0_RX */}
    <KiCadNet name={"_rp2040_jtag_SPI0_RX"} connectsTo={[".U2 > .pin6", ".RN8 > .pin5"]}/>
    {/* KiCad net: unconnected-(U2-GPIO5{slash}SPI0_CSn{slash}UART1_RX{slash}I2C0_SCL{slash}PWM2_B{slash}USB_VBUS_EN-Pad7) */}
    <KiCadNet name={"unconnected__U2_GPIO5_slash_SPI0_CSn_slash_UART1_RX_slash_I2C0_SCL_slash_PWM2_B_slash_USB_VBUS_EN_Pad7_"} connectsTo={[".U2 > .pin7"]}/>
    {/* KiCad net: unconnected-(U2-GPIO6{slash}SPI0_SCK{slash}UART1_CTS{slash}I2C1_SDA{slash}PWM3_A{slash}USB_OVCUR_DET-Pad8) */}
    <KiCadNet name={"unconnected__U2_GPIO6_slash_SPI0_SCK_slash_UART1_CTS_slash_I2C1_SDA_slash_PWM3_A_slash_USB_OVCUR_DET_Pad8_"} connectsTo={[".U2 > .pin8"]}/>
    {/* KiCad net: unconnected-(U2-GPIO7{slash}SPI0_TX{slash}UART1_RTS{slash}I2C1_SCL{slash}PWM3_B{slash}USB_VBUS_DET-Pad9) */}
    <KiCadNet name={"unconnected__U2_GPIO7_slash_SPI0_TX_slash_UART1_RTS_slash_I2C1_SCL_slash_PWM3_B_slash_USB_VBUS_DET_Pad9_"} connectsTo={[".U2 > .pin9"]}/>
    {/* KiCad net: unconnected-(U2-GPIO8{slash}SPI1_RX{slash}UART1_TX{slash}I2C0_SDA{slash}PWM4_A{slash}USB_VBUS_EN-Pad11) */}
    <KiCadNet name={"unconnected__U2_GPIO8_slash_SPI1_RX_slash_UART1_TX_slash_I2C0_SDA_slash_PWM4_A_slash_USB_VBUS_EN_Pad11_"} connectsTo={[".U2 > .pin11"]}/>
    {/* KiCad net: unconnected-(U2-GPIO9{slash}SPI1_CSn{slash}UART1_RX{slash}I2C0_SCL{slash}PWM4_B{slash}USB_OVCUR_DET-Pad12) */}
    <KiCadNet name={"unconnected__U2_GPIO9_slash_SPI1_CSn_slash_UART1_RX_slash_I2C0_SCL_slash_PWM4_B_slash_USB_OVCUR_DET_Pad12_"} connectsTo={[".U2 > .pin12"]}/>
    {/* KiCad net: unconnected-(U2-GPIO10{slash}SPI1_SCK{slash}UART1_CTS{slash}I2C1_SDA{slash}PWM5_A{slash}USB_VBUS_DET-Pad13) */}
    <KiCadNet name={"unconnected__U2_GPIO10_slash_SPI1_SCK_slash_UART1_CTS_slash_I2C1_SDA_slash_PWM5_A_slash_USB_VBUS_DET_Pad13_"} connectsTo={[".U2 > .pin13"]}/>
    {/* KiCad net: unconnected-(U2-GPIO11{slash}SPI1_TX{slash}UART1_RTS{slash}I2C1_SCL{slash}PWM5_B{slash}USB_VBUS_EN-Pad14) */}
    <KiCadNet name={"unconnected__U2_GPIO11_slash_SPI1_TX_slash_UART1_RTS_slash_I2C1_SCL_slash_PWM5_B_slash_USB_VBUS_EN_Pad14_"} connectsTo={[".U2 > .pin14"]}/>
    {/* KiCad net: RP2040_UART0_TX */}
    <KiCadNet name={"RP2040_UART0_TX"} connectsTo={[".U2 > .pin15", ".J8 > .pin19"]}/>
    {/* KiCad net: RP2040_UART0_RX */}
    <KiCadNet name={"RP2040_UART0_RX"} connectsTo={[".U2 > .pin16", ".J8 > .pin17"]}/>
    {/* KiCad net: unconnected-(U2-GPIO14{slash}SPI1_SCK{slash}UART0_CTS{slash}I2C1_SDA{slash}PWM7_A{slash}USB_VBUS_EN-Pad17) */}
    <KiCadNet name={"unconnected__U2_GPIO14_slash_SPI1_SCK_slash_UART0_CTS_slash_I2C1_SDA_slash_PWM7_A_slash_USB_VBUS_EN_Pad17_"} connectsTo={[".U2 > .pin17"]}/>
    {/* KiCad net: unconnected-(U2-GPIO15{slash}SPI1_TX{slash}UART0_RTS{slash}I2C1_SCL{slash}PWM7_B{slash}USB_OVCUR_DET-Pad18) */}
    <KiCadNet name={"unconnected__U2_GPIO15_slash_SPI1_TX_slash_UART0_RTS_slash_I2C1_SCL_slash_PWM7_B_slash_USB_OVCUR_DET_Pad18_"} connectsTo={[".U2 > .pin18"]}/>
    {/* KiCad net: Net-(U2-XIN) */}
    <KiCadNet name={"Net__U2_XIN_"} connectsTo={[".U2 > .pin20", ".Y1 > .pin1", ".C16 > .pin1"]}/>
    {/* KiCad net: Net-(U2-XOUT) */}
    <KiCadNet name={"Net__U2_XOUT_"} connectsTo={[".U2 > .pin21", ".R5 > .pin2"]}/>
    {/* KiCad net: Net-(U2-VREG_VOUT) */}
    <KiCadNet name={"Net__U2_VREG_VOUT_"} connectsTo={[".U2 > .pin23", ".U2 > .pin45", ".U2 > .pin50", ".C12 > .pin1", ".C13 > .pin1", ".C14 > .pin1"]}/>
    {/* KiCad net: unconnected-(U2-SWCLK-Pad24) */}
    <KiCadNet name={"unconnected__U2_SWCLK_Pad24_"} connectsTo={[".U2 > .pin24"]}/>
    {/* KiCad net: unconnected-(U2-SWDIO-Pad25) */}
    <KiCadNet name={"unconnected__U2_SWDIO_Pad25_"} connectsTo={[".U2 > .pin25"]}/>
    {/* KiCad net: Net-(U2-RUN(RESET#)) */}
    <KiCadNet name={"Net__U2_RUN_RESET___"} connectsTo={[".U2 > .pin26", ".C2 > .pin1", ".R4 > .pin2"]}/>
    {/* KiCad net: ECP5_R11_TDI */}
    <KiCadNet name={"ECP5_R11_TDI"} connectsTo={[".U2 > .pin27", ".J8 > .pin18"]}/>
    {/* KiCad net: ECP5_M10_TDO */}
    <KiCadNet name={"ECP5_M10_TDO"} connectsTo={[".U2 > .pin28", ".J8 > .pin23"]}/>
    {/* KiCad net: ECP5_T10_TCK */}
    <KiCadNet name={"ECP5_T10_TCK"} connectsTo={[".U2 > .pin29", ".J8 > .pin10"]}/>
    {/* KiCad net: ECP5_T11_TMS */}
    <KiCadNet name={"ECP5_T11_TMS"} connectsTo={[".U2 > .pin30", ".J8 > .pin21"]}/>
    {/* KiCad net: unconnected-(U2-GPIO20{slash}SPI0_RX{slash}UART1_TX{slash}I2C0_SDA{slash}PWM2_A{slash}CLOCK_GPIN0{slash}USB_VBUS_EN-Pad31) */}
    <KiCadNet name={"unconnected__U2_GPIO20_slash_SPI0_RX_slash_UART1_TX_slash_I2C0_SDA_slash_PWM2_A_slash_CLOCK_GPIN0_slash_USB_VBUS_EN_Pad31_"} connectsTo={[".U2 > .pin31"]}/>
    {/* KiCad net: unconnected-(U2-GPIO21{slash}SPI0_CSn{slash}UART1_RX{slash}I2C0_SCL{slash}PWM2_B{slash}CLOCK_GPOUT0{slash}USB_OVCUR_DET-Pad32) */}
    <KiCadNet name={"unconnected__U2_GPIO21_slash_SPI0_CSn_slash_UART1_RX_slash_I2C0_SCL_slash_PWM2_B_slash_CLOCK_GPOUT0_slash_USB_OVCUR_DET_Pad32_"} connectsTo={[".U2 > .pin32"]}/>
    {/* KiCad net: unconnected-(U2-GPIO23{slash}SPI0_TX{slash}UART1_RTS{slash}I2C1_SCL{slash}PWM3_B{slash}CLOCK_GPOUT1{slash}USB_VBUS_EN-Pad35) */}
    <KiCadNet name={"unconnected__U2_GPIO23_slash_SPI0_TX_slash_UART1_RTS_slash_I2C1_SCL_slash_PWM3_B_slash_CLOCK_GPOUT1_slash_USB_VBUS_EN_Pad35_"} connectsTo={[".U2 > .pin35"]}/>
    {/* KiCad net: unconnected-(U2-GPIO24{slash}SPI1_RX{slash}UART1_TX{slash}I2C0_SDA{slash}PWM4_A{slash}CLOCK_GPOUT2{slash}USB_OVCUR_DET-Pad36) */}
    <KiCadNet name={"unconnected__U2_GPIO24_slash_SPI1_RX_slash_UART1_TX_slash_I2C0_SDA_slash_PWM4_A_slash_CLOCK_GPOUT2_slash_USB_OVCUR_DET_Pad36_"} connectsTo={[".U2 > .pin36"]}/>
    {/* KiCad net: unconnected-(U2-GPIO25{slash}SPI1_CSn{slash}UART1_RX{slash}I2C0_SCL{slash}PWM4_B{slash}CLOCK_GPOUT3{slash}USB_VBUS_DET-Pad37) */}
    <KiCadNet name={"unconnected__U2_GPIO25_slash_SPI1_CSn_slash_UART1_RX_slash_I2C0_SCL_slash_PWM4_B_slash_CLOCK_GPOUT3_slash_USB_VBUS_DET_Pad37_"} connectsTo={[".U2 > .pin37"]}/>
    {/* KiCad net: unconnected-(U2-GPIO26{slash}ADC0{slash}SPI1_SCK{slash}UART1_CTS{slash}I2C1_SDA{slash}PWM5_A{slash}USB_VBUS_EN-Pad38) */}
    <KiCadNet name={"unconnected__U2_GPIO26_slash_ADC0_slash_SPI1_SCK_slash_UART1_CTS_slash_I2C1_SDA_slash_PWM5_A_slash_USB_VBUS_EN_Pad38_"} connectsTo={[".U2 > .pin38"]}/>
    {/* KiCad net: unconnected-(U2-GPIO27{slash}ADC1{slash}SPI1_TX{slash}UART1_RTS{slash}I2C1_SCL{slash}PWM5_B{slash}USB_OVCUR_DET-Pad39) */}
    <KiCadNet name={"unconnected__U2_GPIO27_slash_ADC1_slash_SPI1_TX_slash_UART1_RTS_slash_I2C1_SCL_slash_PWM5_B_slash_USB_OVCUR_DET_Pad39_"} connectsTo={[".U2 > .pin39"]}/>
    {/* KiCad net: /rp2040_jtag/I2C0_SDA */}
    <KiCadNet name={"_rp2040_jtag_I2C0_SDA"} connectsTo={[".U2 > .pin40", ".R41 > .pin1"]}/>
    {/* KiCad net: /rp2040_jtag/I2C0_SCL */}
    <KiCadNet name={"_rp2040_jtag_I2C0_SCL"} connectsTo={[".U2 > .pin41", ".R40 > .pin1"]}/>
    {/* KiCad net: Net-(U2-USB_DM) */}
    <KiCadNet name={"Net__U2_USB_DM_"} connectsTo={[".U2 > .pin46", ".R6 > .pin2"]}/>
    {/* KiCad net: Net-(U2-USB_DP) */}
    <KiCadNet name={"Net__U2_USB_DP_"} connectsTo={[".U2 > .pin47", ".R7 > .pin2"]}/>
    {/* KiCad net: MOBO_I2C_SDA */}
    <KiCadNet name={"MOBO_I2C_SDA"} connectsTo={[".R41 > .pin2", ".U14 > .pin4", ".J8 > .pin51", ".R2 > .pin1", ".U8 > .pin7", ".U7 > .pin27", ".U11 > .pin5"]}/>
    {/* KiCad net: Net-(D17-K) */}
    <KiCadNet name={"Net__D17_K_"} connectsTo={[".D17 > .pin1", ".U7 > .pin9"]}/>
    {/* KiCad net: Net-(J3-Pin_4) */}
    <KiCadNet name={"Net__J3_Pin_4_"} connectsTo={[".RN10 > .pin1", ".J3 > .pin4"]}/>
    {/* KiCad net: Net-(J3-Pin_10) */}
    <KiCadNet name={"Net__J3_Pin_10_"} connectsTo={[".RN10 > .pin2", ".J3 > .pin10"]}/>
    {/* KiCad net: Net-(J3-Pin_9) */}
    <KiCadNet name={"Net__J3_Pin_9_"} connectsTo={[".RN10 > .pin3", ".J3 > .pin9"]}/>
    {/* KiCad net: Net-(J3-Pin_3) */}
    <KiCadNet name={"Net__J3_Pin_3_"} connectsTo={[".RN10 > .pin4", ".J3 > .pin3"]}/>
    {/* KiCad net: EX1_3 */}
    <KiCadNet name={"EX1_3"} connectsTo={[".RN10 > .pin5", ".J8 > .pin66"]}/>
    {/* KiCad net: EX1_9 */}
    <KiCadNet name={"EX1_9"} connectsTo={[".RN10 > .pin6", ".RN8 > .pin2", ".J8 > .pin34"]}/>
    {/* KiCad net: EX1_10 */}
    <KiCadNet name={"EX1_10"} connectsTo={[".RN10 > .pin7", ".J8 > .pin73"]}/>
    {/* KiCad net: EX1_4 */}
    <KiCadNet name={"EX1_4"} connectsTo={[".RN10 > .pin8", ".J8 > .pin41"]}/>
    {/* KiCad net: Net-(R14-Pad2) */}
    <KiCadNet name={"Net__R14_Pad2_"} connectsTo={[".R29 > .pin1", ".R14 > .pin2", ".SW3 > .pin2"]}/>
    {/* KiCad net: ENC_A */}
    <KiCadNet name={"ENC_A"} connectsTo={[".R29 > .pin2", ".J8 > .pin8", ".C41 > .pin1"]}/>
    {/* KiCad net: Net-(J3-Pin_1) */}
    <KiCadNet name={"Net__J3_Pin_1_"} connectsTo={[".J3 > .pin1", ".RN9 > .pin5"]}/>
    {/* KiCad net: Net-(J3-Pin_2) */}
    <KiCadNet name={"Net__J3_Pin_2_"} connectsTo={[".J3 > .pin2", ".RN9 > .pin6"]}/>
    {/* KiCad net: Net-(J3-Pin_7) */}
    <KiCadNet name={"Net__J3_Pin_7_"} connectsTo={[".J3 > .pin7", ".RN9 > .pin8"]}/>
    {/* KiCad net: Net-(J3-Pin_8) */}
    <KiCadNet name={"Net__J3_Pin_8_"} connectsTo={[".J3 > .pin8", ".RN9 > .pin7"]}/>
    {/* KiCad net: Net-(U5-FB) */}
    <KiCadNet name={"Net__U5_FB_"} connectsTo={[".U5 > .pin1", ".R17 > .pin1", ".R18 > .pin2", ".C31 > .pin1"]}/>
    {/* KiCad net: Net-(U5-SW) */}
    <KiCadNet name={"Net__U5_SW_"} connectsTo={[".U5 > .pin5", ".C30 > .pin2", ".L3 > .pin1"]}/>
    {/* KiCad net: Net-(U5-BST) */}
    <KiCadNet name={"Net__U5_BST_"} connectsTo={[".U5 > .pin6", ".C30 > .pin1"]}/>
    {/* KiCad net: EX1_2 */}
    <KiCadNet name={"EX1_2"} connectsTo={[".RN8 > .pin1", ".RN9 > .pin4", ".J8 > .pin38"]}/>
    {/* KiCad net: EX2_4 */}
    <KiCadNet name={"EX2_4"} connectsTo={[".RN8 > .pin3", ".J8 > .pin20", ".RN7 > .pin7"]}/>
    {/* KiCad net: EX2_10 */}
    <KiCadNet name={"EX2_10"} connectsTo={[".RN8 > .pin4", ".J8 > .pin22", ".RN7 > .pin6"]}/>
    {/* KiCad net: MOBO_I2C_SCL */}
    <KiCadNet name={"MOBO_I2C_SCL"} connectsTo={[".U14 > .pin3", ".R40 > .pin2", ".J8 > .pin53", ".R1 > .pin1", ".U8 > .pin8", ".U7 > .pin26", ".U11 > .pin4"]}/>
    {/* KiCad net: Net-(U13-SDA_SRC) */}
    <KiCadNet name={"Net__U13_SDA_SRC_"} connectsTo={[".U14 > .pin5", ".U13 > .pin12", ".R36 > .pin1"]}/>
    {/* KiCad net: Net-(U13-SCL_SRC) */}
    <KiCadNet name={"Net__U13_SCL_SRC_"} connectsTo={[".U14 > .pin6", ".R37 > .pin1", ".U13 > .pin13"]}/>
    {/* KiCad net: Net-(U14-VREF2) */}
    <KiCadNet name={"Net__U14_VREF2_"} connectsTo={[".U14 > .pin7", ".R38 > .pin1"]}/>
    {/* KiCad net: GPDI_DDC_EN */}
    <KiCadNet name={"GPDI_DDC_EN"} connectsTo={[".U14 > .pin8", ".J8 > .pin11"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".C38 > .pin1", ".R17 > .pin2", ".L5 > .pin2", ".L4 > .pin2", ".U9 > .pin5", ".C34 > .pin1", ".L3 > .pin2", ".C31 > .pin2", ".U8 > .pin12", ".D4 > .pin2"]}/>
    {/* KiCad net: Net-(U13-EQ_S0) */}
    <KiCadNet name={"Net__U13_EQ_S0_"} connectsTo={[".R26 > .pin2", ".U13 > .pin17"]}/>
    {/* KiCad net: Net-(R8-Pad2) */}
    <KiCadNet name={"Net__R8_Pad2_"} connectsTo={[".R8 > .pin2", ".SW2 > .pin2"]}/>
    {/* KiCad net: Net-(D3-K) */}
    <KiCadNet name={"Net__D3_K_"} connectsTo={[".D3 > .pin1", ".F2 > .pin2"]}/>
    {/* KiCad net: Net-(R13-Pad2) */}
    <KiCadNet name={"Net__R13_Pad2_"} connectsTo={[".R22 > .pin1", ".R13 > .pin2", ".SW3 > .pin5"]}/>
    {/* KiCad net: ENC_S */}
    <KiCadNet name={"ENC_S"} connectsTo={[".R22 > .pin2", ".C39 > .pin1", ".J8 > .pin43"]}/>
    {/* KiCad net: Net-(D9-K) */}
    <KiCadNet name={"Net__D9_K_"} connectsTo={[".D9 > .pin1", ".U7 > .pin7"]}/>
    {/* KiCad net: Net-(D4-K) */}
    <KiCadNet name={"Net__D4_K_"} connectsTo={[".F3 > .pin2", ".R31 > .pin2", ".R28 > .pin2", ".D4 > .pin1"]}/>
    {/* KiCad net: Net-(C15-Pad1) */}
    <KiCadNet name={"Net__C15_Pad1_"} connectsTo={[".Y1 > .pin3", ".C15 > .pin1", ".R5 > .pin1"]}/>
    {/* KiCad net: USB_VBUS_EN */}
    <KiCadNet name={"USB_VBUS_EN"} connectsTo={[".R33 > .pin2", ".J8 > .pin32", ".U9 > .pin4"]}/>
    {/* KiCad net: /led_driver/~{OE} */}
    <KiCadNet name={"_led_driver___OE_"} connectsTo={[".R32 > .pin2", ".U7 > .pin23"]}/>
    {/* KiCad net: EX1_7 */}
    <KiCadNet name={"EX1_7"} connectsTo={[".RN9 > .pin1", ".J8 > .pin57"]}/>
    {/* KiCad net: EX1_1 */}
    <KiCadNet name={"EX1_1"} connectsTo={[".RN9 > .pin2", ".J8 > .pin55"]}/>
    {/* KiCad net: EX1_8 */}
    <KiCadNet name={"EX1_8"} connectsTo={[".RN9 > .pin3", ".J8 > .pin35"]}/>
    {/* KiCad net: Net-(U10-SW) */}
    <KiCadNet name={"Net__U10_SW_"} connectsTo={[".L8 > .pin1", ".U10 > .pin4"]}/>
    {/* KiCad net: Net-(R21-Pad2) */}
    <KiCadNet name={"Net__R21_Pad2_"} connectsTo={[".SW3 > .pin1", ".R30 > .pin1", ".R21 > .pin2"]}/>
    {/* KiCad net: Net-(J2-Pin_1) */}
    <KiCadNet name={"Net__J2_Pin_1_"} connectsTo={[".J2 > .pin1", ".RN6 > .pin8"]}/>
    {/* KiCad net: Net-(J2-Pin_2) */}
    <KiCadNet name={"Net__J2_Pin_2_"} connectsTo={[".J2 > .pin2", ".RN6 > .pin6"]}/>
    {/* KiCad net: Net-(J2-Pin_3) */}
    <KiCadNet name={"Net__J2_Pin_3_"} connectsTo={[".J2 > .pin3", ".RN7 > .pin1"]}/>
    {/* KiCad net: Net-(J2-Pin_4) */}
    <KiCadNet name={"Net__J2_Pin_4_"} connectsTo={[".J2 > .pin4", ".RN7 > .pin2"]}/>
    {/* KiCad net: Net-(J2-Pin_7) */}
    <KiCadNet name={"Net__J2_Pin_7_"} connectsTo={[".J2 > .pin7", ".RN6 > .pin7"]}/>
    {/* KiCad net: Net-(J2-Pin_8) */}
    <KiCadNet name={"Net__J2_Pin_8_"} connectsTo={[".J2 > .pin8", ".RN7 > .pin4"]}/>
    {/* KiCad net: Net-(J2-Pin_9) */}
    <KiCadNet name={"Net__J2_Pin_9_"} connectsTo={[".J2 > .pin9", ".RN6 > .pin5"]}/>
    {/* KiCad net: Net-(J2-Pin_10) */}
    <KiCadNet name={"Net__J2_Pin_10_"} connectsTo={[".J2 > .pin10", ".RN7 > .pin3"]}/>
    {/* KiCad net: Net-(U13-CEXT) */}
    <KiCadNet name={"Net__U13_CEXT_"} connectsTo={[".U13 > .pin2", ".C45 > .pin2"]}/>
    {/* KiCad net: Net-(U13-IN_D2-) */}
    <KiCadNet name={"Net__U13_IN_D2__"} connectsTo={[".U13 > .pin3", ".C46 > .pin2"]}/>
    {/* KiCad net: Net-(U13-IN_D2+) */}
    <KiCadNet name={"Net__U13_IN_D2___"} connectsTo={[".U13 > .pin4", ".C47 > .pin2"]}/>
    {/* KiCad net: Net-(U13-IN_D1-) */}
    <KiCadNet name={"Net__U13_IN_D1___"} connectsTo={[".U13 > .pin5", ".C48 > .pin2"]}/>
    {/* KiCad net: Net-(U13-IN_D0+) */}
    <KiCadNet name={"Net__U13_IN_D0___"} connectsTo={[".U13 > .pin8", ".C51 > .pin2"]}/>
    {/* KiCad net: Net-(U13-IN_CLK-) */}
    <KiCadNet name={"Net__U13_IN_CLK__"} connectsTo={[".U13 > .pin9", ".C52 > .pin2"]}/>
    {/* KiCad net: Net-(U13-IN_CLK+) */}
    <KiCadNet name={"Net__U13_IN_CLK___"} connectsTo={[".U13 > .pin10", ".C53 > .pin2"]}/>
    {/* KiCad net: GPDI_HPD */}
    <KiCadNet name={"GPDI_HPD"} connectsTo={[".U13 > .pin11", ".J8 > .pin37", ".R44 > .pin2"]}/>
    {/* KiCad net: Net-(U13-ROUT_S0) */}
    <KiCadNet name={"Net__U13_ROUT_S0_"} connectsTo={[".U13 > .pin15", ".R9 > .pin2"]}/>
    {/* KiCad net: Net-(U13-~OE) */}
    <KiCadNet name={"Net__U13__OE_"} connectsTo={[".U13 > .pin30", ".R50 > .pin2"]}/>
    {/* KiCad net: GPDI_D0- */}
    <KiCadNet name={"GPDI_D0__"} connectsTo={[".C51 > .pin1", ".J8 > .pin70"]}/>
    {/* KiCad net: unconnected-(U10-NC-Pad6) */}
    <KiCadNet name={"unconnected__U10_NC_Pad6_"} connectsTo={[".U10 > .pin6"]}/>
    {/* KiCad net: MIDI_RX */}
    <KiCadNet name={"MIDI_RX"} connectsTo={[".R16 > .pin1", ".J8 > .pin6"]}/>
    {/* KiCad net: Net-(R15-Pad1) */}
    <KiCadNet name={"Net__R15_Pad1_"} connectsTo={[".R16 > .pin2", ".R15 > .pin1", ".U4 > .pin4"]}/>
    {/* KiCad net: unconnected-(J8-3.3V_EN-Pad4) */}
    <KiCadNet name={"unconnected__J8_3_3V_EN_Pad4_"} connectsTo={[".J8 > .pin4"]}/>
    {/* KiCad net: ENC_B */}
    <KiCadNet name={"ENC_B"} connectsTo={[".J8 > .pin12", ".C40 > .pin1", ".R30 > .pin2"]}/>
    {/* KiCad net: EX2_9 */}
    <KiCadNet name={"EX2_9"} connectsTo={[".J8 > .pin13", ".RN6 > .pin4"]}/>
    {/* KiCad net: EX2_3 */}
    <KiCadNet name={"EX2_3"} connectsTo={[".J8 > .pin14", ".RN7 > .pin8"]}/>
    {/* KiCad net: EX2_8 */}
    <KiCadNet name={"EX2_8"} connectsTo={[".J8 > .pin15", ".RN7 > .pin5"]}/>
    {/* KiCad net: SC_USB0_ID */}
    <KiCadNet name={"SC_USB0_ID"} connectsTo={[".J8 > .pin16", ".R19 > .pin1", ".U8 > .pin9"]}/>
    {/* KiCad net: PLL_CLK1 */}
    <KiCadNet name={"PLL_CLK1"} connectsTo={[".J8 > .pin40", ".R48 > .pin2"]}/>
    {/* KiCad net: PLL_CLK0 */}
    <KiCadNet name={"PLL_CLK0"} connectsTo={[".J8 > .pin44", ".R47 > .pin2"]}/>
    {/* KiCad net: USB_INT */}
    <KiCadNet name={"USB_INT"} connectsTo={[".J8 > .pin47", ".U8 > .pin6"]}/>
    {/* KiCad net: unconnected-(J8-BATT_VIN{slash}3-Pad49) */}
    <KiCadNet name={"unconnected__J8_BATT_VIN_slash_3_Pad49_"} connectsTo={[".J8 > .pin49"]}/>
    {/* KiCad net: GPDI_D1+ */}
    <KiCadNet name={"GPDI_D1__"} connectsTo={[".J8 > .pin52", ".C48 > .pin1"]}/>
    {/* KiCad net: FFC_PDN_CLK */}
    <KiCadNet name={"FFC_PDN_CLK"} connectsTo={[".J8 > .pin56", ".U6 > .pin2", ".R45 > .pin2"]}/>
    {/* KiCad net: GPDI_D2- */}
    <KiCadNet name={"GPDI_D2_"} connectsTo={[".J8 > .pin58", ".C47 > .pin1"]}/>
    {/* KiCad net: EX2_1 */}
    <KiCadNet name={"EX2_1"} connectsTo={[".J8 > .pin59", ".RN6 > .pin1"]}/>
    {/* KiCad net: GPDI_D2+ */}
    <KiCadNet name={"GPDI_D2__"} connectsTo={[".J8 > .pin60", ".C46 > .pin1"]}/>
    {/* KiCad net: EX2_7 */}
    <KiCadNet name={"EX2_7"} connectsTo={[".J8 > .pin61", ".RN6 > .pin2"]}/>
    {/* KiCad net: GPDI_CK+ */}
    <KiCadNet name={"GPDI_CK_"} connectsTo={[".J8 > .pin62", ".C52 > .pin1"]}/>
    {/* KiCad net: EX2_2 */}
    <KiCadNet name={"EX2_2"} connectsTo={[".J8 > .pin63", ".RN6 > .pin3"]}/>
    {/* KiCad net: GPDI_CK- */}
    <KiCadNet name={"GPDI_CK__"} connectsTo={[".J8 > .pin64", ".C53 > .pin1"]}/>
    {/* KiCad net: FFC_PDN_D */}
    <KiCadNet name={"FFC_PDN_D"} connectsTo={[".J8 > .pin65", ".U6 > .pin1", ".R46 > .pin2"]}/>
    {/* KiCad net: Net-(J8-G8) */}
    <KiCadNet name={"Net__J8_G8_"} connectsTo={[".J8 > .pin67", ".R49 > .pin1"]}/>
    {/* KiCad net: Net-(J8-G7{slash}BUS7) */}
    <KiCadNet name={"Net__J8_G7_slash_BUS7_"} connectsTo={[".J8 > .pin69", ".R34 > .pin1"]}/>
    {/* KiCad net: Net-(J8-G6{slash}BUS6) */}
    <KiCadNet name={"Net__J8_G6_slash_BUS6_"} connectsTo={[".J8 > .pin71", ".R35 > .pin1"]}/>
    {/* KiCad net: unconnected-(J8-RTC_3V-Pad72) */}
    <KiCadNet name={"unconnected__J8_RTC_3V_Pad72_"} connectsTo={[".J8 > .pin72"]}/>
    {/* KiCad net: /usbc/~{USB_VBUS_FLG} */}
    <KiCadNet name={"_usbc___USB_VBUS_FLG_"} connectsTo={[".U9 > .pin3", ".R27 > .pin2"]}/>
    {/* KiCad net: Net-(D5-K) */}
    <KiCadNet name={"Net__D5_K_"} connectsTo={[".D5 > .pin1", ".U7 > .pin6"]}/>
    {/* KiCad net: Net-(D7-K) */}
    <KiCadNet name={"Net__D7_K_"} connectsTo={[".D7 > .pin1", ".U7 > .pin15"]}/>
    {/* KiCad net: Net-(D1-A) */}
    <KiCadNet name={"Net__D1_A_"} connectsTo={[".D1 > .pin2", ".J4 > .pin4", ".U4 > .pin2"]}/>
    {/* KiCad net: Net-(D13-K) */}
    <KiCadNet name={"Net__D13_K_"} connectsTo={[".D13 > .pin1", ".U7 > .pin8"]}/>
    {/* KiCad net: /usbc/~{USB_DIR} */}
    <KiCadNet name={"_usbc___USB_DIR_"} connectsTo={[".U8 > .pin4"]}/>
    {/* KiCad net: Net-(D6-K) */}
    <KiCadNet name={"Net__D6_K_"} connectsTo={[".U7 > .pin10", ".D6 > .pin1"]}/>
    {/* KiCad net: Net-(D10-K) */}
    <KiCadNet name={"Net__D10_K_"} connectsTo={[".U7 > .pin11", ".D10 > .pin1"]}/>
    {/* KiCad net: Net-(D14-K) */}
    <KiCadNet name={"Net__D14_K_"} connectsTo={[".U7 > .pin12", ".D14 > .pin1"]}/>
    {/* KiCad net: Net-(D18-K) */}
    <KiCadNet name={"Net__D18_K_"} connectsTo={[".U7 > .pin13", ".D18 > .pin1"]}/>
    {/* KiCad net: unconnected-(U7-LED10-Pad17) */}
    <KiCadNet name={"unconnected__U7_LED10_Pad17_"} connectsTo={[".U7 > .pin17"]}/>
    {/* KiCad net: unconnected-(U7-LED11-Pad18) */}
    <KiCadNet name={"unconnected__U7_LED11_Pad18_"} connectsTo={[".U7 > .pin18"]}/>
    {/* KiCad net: Net-(D8-K) */}
    <KiCadNet name={"Net__D8_K_"} connectsTo={[".U7 > .pin19", ".D8 > .pin1"]}/>
    {/* KiCad net: Net-(D12-K) */}
    <KiCadNet name={"Net__D12_K_"} connectsTo={[".U7 > .pin20", ".D12 > .pin1"]}/>
    {/* KiCad net: Net-(D16-K) */}
    <KiCadNet name={"Net__D16_K_"} connectsTo={[".U7 > .pin21", ".D16 > .pin1"]}/>
    {/* KiCad net: Net-(D20-K) */}
    <KiCadNet name={"Net__D20_K_"} connectsTo={[".U7 > .pin22", ".D20 > .pin1"]}/>
    {/* KiCad net: unconnected-(J4-PadSN) */}
    <KiCadNet name={"unconnected__J4_PadSN_"} connectsTo={[".J4 > .pin3"]}/>
    {/* KiCad net: unconnected-(J4-PadTN) */}
    <KiCadNet name={"unconnected__J4_PadTN_"} connectsTo={[".J4 > .pin5"]}/>
    {/* KiCad net: Net-(D6-A) */}
    <KiCadNet name={"Net__D6_A_"} connectsTo={[".D6 > .pin2", ".RN2 > .pin8"]}/>
    {/* KiCad net: FFC_MCLK */}
    <KiCadNet name={"FFC_MCLK"} connectsTo={[".R49 > .pin2", ".J1 > .pin11"]}/>
    {/* KiCad net: Net-(U11-XB) */}
    <KiCadNet name={"Net__U11_XB_"} connectsTo={[".Y2 > .pin1", ".U11 > .pin3"]}/>
    {/* KiCad net: Net-(U11-XA) */}
    <KiCadNet name={"Net__U11_XA_"} connectsTo={[".Y2 > .pin3", ".U11 > .pin2"]}/>
    {/* KiCad net: Net-(D16-A) */}
    <KiCadNet name={"Net__D16_A_"} connectsTo={[".D16 > .pin2", ".RN4 > .pin6"]}/>
    {/* KiCad net: Net-(D14-A) */}
    <KiCadNet name={"Net__D14_A_"} connectsTo={[".D14 > .pin2", ".RN2 > .pin6"]}/>
    {/* KiCad net: /pmod_audio/PDN */}
    <KiCadNet name={"_pmod_audio_PDN"} connectsTo={[".U6 > .pin4", ".J1 > .pin12", ".R46 > .pin1"]}/>
    {/* KiCad net: Net-(U11-CLK1) */}
    <KiCadNet name={"Net__U11_CLK1_"} connectsTo={[".R48 > .pin1", ".U11 > .pin9"]}/>
    {/* KiCad net: Net-(D10-A) */}
    <KiCadNet name={"Net__D10_A_"} connectsTo={[".D10 > .pin2", ".RN2 > .pin7"]}/>
    {/* KiCad net: Net-(D8-A) */}
    <KiCadNet name={"Net__D8_A_"} connectsTo={[".D8 > .pin2", ".RN4 > .pin8"]}/>
    {/* KiCad net: unconnected-(J1-Pin_2-Pad2) */}
    <KiCadNet name={"unconnected__J1_Pin_2_Pad2_"} connectsTo={[".J1 > .pin2"]}/>
    {/* KiCad net: FFC_SDA */}
    <KiCadNet name={"FFC_SDA"} connectsTo={[".J1 > .pin13", ".R35 > .pin2"]}/>
    {/* KiCad net: FFC_SCL */}
    <KiCadNet name={"FFC_SCL"} connectsTo={[".J1 > .pin14", ".R34 > .pin2"]}/>
    {/* KiCad net: Net-(D20-A) */}
    <KiCadNet name={"Net__D20_A_"} connectsTo={[".RN4 > .pin5", ".D20 > .pin2"]}/>
    {/* KiCad net: Net-(D12-A) */}
    <KiCadNet name={"Net__D12_A_"} connectsTo={[".RN4 > .pin7", ".D12 > .pin2"]}/>
    {/* KiCad net: unconnected-(U4-Pad3) */}
    <KiCadNet name={"unconnected__U4_Pad3_"} connectsTo={[".U4 > .pin3"]}/>
    {/* KiCad net: Net-(U11-CLK0) */}
    <KiCadNet name={"Net__U11_CLK0_"} connectsTo={[".R47 > .pin1", ".U11 > .pin10"]}/>
    {/* KiCad net: Net-(D18-A) */}
    <KiCadNet name={"Net__D18_A_"} connectsTo={[".RN2 > .pin5", ".D18 > .pin2"]}/>
    {/* KiCad net: unconnected-(U11-CLK2-Pad6) */}
    <KiCadNet name={"unconnected__U11_CLK2_Pad6_"} connectsTo={[".U11 > .pin6"]}/>
    <KiCadSchematic /></board>);
}
