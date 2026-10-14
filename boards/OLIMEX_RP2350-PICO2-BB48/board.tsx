import { KiCadSchematic, KiCadNet } from './schematic'
// RP2350-PICO2-BB48
// Source: https://github.com/OLIMEX/RP2350-PICO2-BB48
// Commit: 74b030363ca03eea5bfa6dac59cbcd9e4277e910; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_FID1, Footprint_LED1, Footprint_FID3, Footprint_FID2, Footprint_D1, Footprint_R18, Footprint_R17, Footprint_RST1, Footprint_R5, Footprint_R12, Footprint_pUEXT1, Footprint_BOOT1, Footprint_R15, Footprint_USB_C1, Footprint_R13, Footprint_C14, Footprint_SWD1, Footprint_L1, Footprint_R2, Footprint_Q1, Footprint_C21, Footprint_FB1, Footprint_Logo_OLIMEX_80, Footprint_C22, Footprint_C2, Footprint_U3, Footprint_L2, Footprint_U2, Footprint_R3, Footprint_C20, Footprint_C18, Footprint_C24, Footprint_R11, Footprint_R1, Footprint_C1, Footprint_U1, Footprint_R9, Footprint_C25, Footprint_R14, Footprint_QWST1, Footprint_C19, Footprint_C6, Footprint_C5, Footprint_R10, Footprint_R7, Footprint_R6, Footprint_C10, Footprint_C4, Footprint_R20, Footprint_Sign_PB_Free, Footprint_C17, Footprint_C9, Footprint_C16, Footprint_C11, Footprint_U4, Footprint_U5, Footprint_FID4, Footprint_C3, Footprint_C8, Footprint_C26, Footprint_Sign_Antistatic_Small, Footprint_R25, Footprint_R16, Footprint_FID6, Footprint_R23, Footprint_C12, Footprint_C13, Footprint_EXT2, Footprint_FID5, Footprint_R21, Footprint_EXT1, Footprint_R22, Footprint_C7, Footprint_Logo_OLIMEX_80_Bot, Footprint_R19, Footprint_Sign_OSHW_7_3x6_0mm, Footprint_L3, Footprint_Sign_CE, Footprint_R24, Footprint_R27, Footprint_Sign_RecycleBin_1, Footprint_C27, Footprint_C15, Footprint_MICRO_SD1, Footprint_R26 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={18.30000000000001} height={69} thickness={1.578} layers={4} outline={[{ "x": -9.150000000000006, "y": -34.5 }, { "x": -9.150000000000006, "y": 34.5 }, { "x": 9.150000000000006, "y": 34.5 }, { "x": 9.150000000000006, "y": -34.5 }, { "x": -9.150000000000006, "y": -34.5 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* FID1: Fiducial */}
    <chip name={"FID1"} pcbX={-5.045} pcbY={-33.08} pcbRotation={0} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID1 />} noSchematicRepresentation={true}/>

    {/* LED1: LED/GREEN/0603 */}
    <chip name={"LED1"} pcbX={2.85} pcbY={14.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED/GREEN/0603"} footprint={<Footprint_LED1 />} noSchematicRepresentation={true}/>

    {/* FID3: Fiducial */}
    <chip name={"FID3"} pcbX={-4.664} pcbY={25.086} pcbRotation={0} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID3 />} noSchematicRepresentation={true}/>

    {/* FID2: Fiducial */}
    <chip name={"FID2"} pcbX={5.115} pcbY={-33.08} pcbRotation={0} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID2 />} noSchematicRepresentation={true}/>

    {/* D1: 1N5822/SS34/SMA */}
    <chip name={"D1"} pcbX={4.861} pcbY={22.292} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1N5822/SS34/SMA"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* R18: 2.2k/R0402 */}
    <chip name={"R18"} pcbX={5.242} pcbY={-29.778} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"2.2k/R0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* R17: 2.2k/R0402 */}
    <chip name={"R17"} pcbX={4.353} pcbY={-29.778} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"2.2k/R0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* RST1: YTS-A016-X */}
    <chip name={"RST1"} pcbX={-4.15} pcbY={-17.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"YTS-A016-X"} footprint={<Footprint_RST1 />} noSchematicRepresentation={true}/>

    {/* R5: 5.1k/1%/R0402 */}
    <chip name={"R5"} pcbX={-2.505} pcbY={24.07} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.1k/1%/R0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* R12: 1M/R0402 */}
    <chip name={"R12"} pcbX={2.321} pcbY={24.07} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1M/R0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* pUEXT1: SH1.0-10P-180D */}
    <chip name={"pUEXT1"} pcbX={0} pcbY={-23.5} pcbRotation={0} pinLabels={{ "pin11": ["0"], "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"SH1.0-10P-180D"} footprint={<Footprint_pUEXT1 />} noSchematicRepresentation={true}/>

    {/* BOOT1: YTS-A016-X */}
    <chip name={"BOOT1"} pcbX={3.85} pcbY={-17.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"YTS-A016-X"} footprint={<Footprint_BOOT1 />} noSchematicRepresentation={true}/>

    {/* R15: 2.2k/R0402 */}
    <chip name={"R15"} pcbX={2.956} pcbY={16.958} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"2.2k/R0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* USB-C1: USB-C-16P-F(A40-00119-A52-12) */}
    <chip name={"USB_C1"} pcbX={0} pcbY={31} pcbRotation={90} pinLabels={{ "pin1": ["0"], "pin2": ["A1"], "pin3": ["A4"], "pin4": ["A5"], "pin5": ["A6"], "pin6": ["A7"], "pin7": ["A8"], "pin8": ["A9"], "pin9": ["A12"], "pin10": ["B1"], "pin11": ["B4"], "pin12": ["B5"], "pin13": ["B6"], "pin14": ["B7"], "pin15": ["B8"], "pin16": ["B9"], "pin17": ["B12"] }} displayName={"USB-C-16P-F(A40-00119-A52-12)"} footprint={<Footprint_USB_C1 />} noSchematicRepresentation={true}/>

    {/* R13: 220k/R0402 */}
    <chip name={"R13"} pcbX={-4.41} pcbY={22.673} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"220k/R0402"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* C14: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C14"} pcbX={4.353} pcbY={8.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* SWD1: NA(NH1x3) */}
    <chip name={"SWD1"} pcbX={5.115} pcbY={-10.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NA(NH1x3)"} footprint={<Footprint_SWD1 />} noSchematicRepresentation={true}/>

    {/* L1: 3.3uH/2.0A/DCR=140mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-3R3MTS00) */}
    <chip name={"L1"} pcbX={2.829} pcbY={9.465} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"3.3uH/2.0A/DCR=140mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-3R3MTS00)"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* R2: NA(10k/R0402) */}
    <chip name={"R2"} pcbX={-2.759} pcbY={-13.395} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* Q1: Q12MHz/18pF/30ppm/4P/3.2x2.5mm(ABM8-12.000MHZ-D2Y-T) */}
    <chip name={"Q1"} pcbX={0.162} pcbY={-8.823} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"Q12MHz/18pF/30ppm/4P/3.2x2.5mm(ABM8-12.000MHZ-D2Y-T)"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C21: 27pF/50V/5%/C0G/C0402 */}
    <chip name={"C21"} pcbX={-0.6} pcbY={-6.537} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27pF/50V/5%/C0G/C0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* FB1: PZ1005U601-R45TF/0.34OHM/0.45A */}
    <chip name={"FB1"} pcbX={6.131} pcbY={8.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PZ1005U601-R45TF/0.34OHM/0.45A"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* Logo_OLIMEX_80: Logo_OLIMEX_80 */}
    <chip name={"Logo_OLIMEX_80"} pcbX={-5.7816} pcbY={-28.508} pcbRotation={90} pinLabels={{}} displayName={"Logo_OLIMEX_80"} footprint={<Footprint_Logo_OLIMEX_80 />} noSchematicRepresentation={true}/>

    {/* C22: 22uF/6.3V/20%/X5R/C0603 */}
    <chip name={"C22"} pcbX={2.448} pcbY={21.911} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"22uF/6.3V/20%/X5R/C0603"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* C2: NA(100nF/10V/20%/X5R/C0402) */}
    <chip name={"C2"} pcbX={4.607} pcbY={-5.648} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(100nF/10V/20%/X5R/C0402)"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* U3: RP2350B(QFN-80_10.00x10.00x0.90mm_P0.4mm) */}
    <chip name={"U3"} pcbX={0} pcbY={0.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"] }} displayName={"RP2350B(QFN-80_10.00x10.00x0.90mm_P0.4mm)"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* L2: 1.0uH/4.2A/DCR=35mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-1R0MTS00) */}
    <chip name={"L2"} pcbX={-0.473} pcbY={19.625} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1.0uH/4.2A/DCR=35mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-1R0MTS00)"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* U2: TPS62A02ADRLR(SOT-563-6) */}
    <chip name={"U2"} pcbX={0.035} pcbY={22.292} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"TPS62A02ADRLR(SOT-563-6)"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* R3: 33R/R0402 */}
    <chip name={"R3"} pcbX={5.242} pcbY={8.957} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"33R/R0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* C20: 27pF/50V/5%/C0G/C0402 */}
    <chip name={"C20"} pcbX={2.829} pcbY={-8.188} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27pF/50V/5%/C0G/C0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* C18: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C18"} pcbX={4.48} pcbY={7.306} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* C24: 22uF/6.3V/20%/X5R/C0603 */}
    <chip name={"C24"} pcbX={-2.886} pcbY={20.514} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"22uF/6.3V/20%/X5R/C0603"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* R11: 1k/R0402 */}
    <chip name={"R11"} pcbX={2.448} pcbY={-13.395} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1k/R0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* R1: 10k/R0402 */}
    <chip name={"R1"} pcbX={-4.918} pcbY={13.021} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"10k/R0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* C1: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C1"} pcbX={-4.918} pcbY={16.196} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* U1: W25Q16JVSSIQ */}
    <chip name={"U1"} pcbX={-1.743} pcbY={13.275} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"W25Q16JVSSIQ"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* R9: 1k/R0402 */}
    <chip name={"R9"} pcbX={1.432} pcbY={-6.537} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1k/R0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* C25: NA(22uF/6.3V/20%/X5R/C0603) */}
    <chip name={"C25"} pcbX={-4.537} pcbY={20.514} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(22uF/6.3V/20%/X5R/C0603)"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* R14: 49.9k/1%/R0402 */}
    <chip name={"R14"} pcbX={-2.505} pcbY={22.673} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"49.9k/1%/R0402"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* QWST1: SH1.0-4P-180D */}
    <chip name={"QWST1"} pcbX={0} pcbY={-30.5} pcbRotation={0} pinLabels={{ "pin5": ["0"], "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"SH1.0-4P-180D"} footprint={<Footprint_QWST1 />} noSchematicRepresentation={true}/>

    {/* C19: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C19"} pcbX={6.131} pcbY={7.052} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C19 />} noSchematicRepresentation={true}/>

    {/* C6: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C6"} pcbX={-2.886} pcbY={-7.426} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* C5: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C5"} pcbX={-2.886} pcbY={-6.537} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* R10: 5.1k/1%/R0402 */}
    <chip name={"R10"} pcbX={2.067} pcbY={27.372} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.1k/1%/R0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R7: 27R/R0402 */}
    <chip name={"R7"} pcbX={0.797} pcbY={7.941} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27R/R0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* R6: 27R/R0402 */}
    <chip name={"R6"} pcbX={1.686} pcbY={7.941} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"27R/R0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* C10: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C10"} pcbX={-2.378} pcbY={5.782} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* C4: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C4"} pcbX={-4.791} pcbY={-0.06} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* R20: NA(10k/R0402) */}
    <chip name={"R20"} pcbX={-1.997} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* Sign_PB-Free: Sign_PB-Free */}
    <chip name={"Sign_PB_Free"} pcbX={0.416} pcbY={-8.696} pcbRotation={180} pinLabels={{}} displayName={"Sign_PB-Free"} footprint={<Footprint_Sign_PB_Free />} noSchematicRepresentation={true}/>

    {/* C17: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C17"} pcbX={1.686} pcbY={2.734} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* C9: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C9"} pcbX={2.067} pcbY={5.147} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* C16: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C16"} pcbX={1.051} pcbY={-4.378} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* C11: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C11"} pcbX={0.543} pcbY={3.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* U4: NA(W25Q128JVSIQ(SOIC-8_208mils)) */}
    <chip name={"U4"} pcbX={0.737} pcbY={15.307} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"NA(W25Q128JVSIQ(SOIC-8_208mils))"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* U5: NA(APS6404L-3SQR-SN(SOIC-8_150mils)) */}
    <chip name={"U5"} pcbX={0.737} pcbY={15.307} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"NA(APS6404L-3SQR-SN(SOIC-8_150mils))"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* FID4: Fiducial */}
    <chip name={"FID4"} pcbX={-5.045} pcbY={-33.08} pcbRotation={180} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID4 />} noSchematicRepresentation={true}/>

    {/* C3: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C3"} pcbX={-4.791} pcbY={3.496} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* C8: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C8"} pcbX={1.813} pcbY={0.956} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* C26: NA(100nF/10V/20%/X5R/C0402) */}
    <chip name={"C26"} pcbX={-3.013} pcbY={18.99} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(100nF/10V/20%/X5R/C0402)"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* Sign_Antistatic_Small: Sign_Antistatic */}
    <chip name={"Sign_Antistatic_Small"} pcbX={0.035} pcbY={30.166} pcbRotation={180} pinLabels={{}} displayName={"Sign_Antistatic"} footprint={<Footprint_Sign_Antistatic_Small />} noSchematicRepresentation={true}/>

    {/* R25: NA(33R/R0402) */}
    <chip name={"R25"} pcbX={3.083} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(33R/R0402)"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* R16: NA(10k/R0402) */}
    <chip name={"R16"} pcbX={0.543} pcbY={18.99} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* FID6: Fiducial */}
    <chip name={"FID6"} pcbX={5.115} pcbY={-33.08} pcbRotation={180} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID6 />} noSchematicRepresentation={true}/>

    {/* R23: NA(10k/R0402) */}
    <chip name={"R23"} pcbX={-5.045} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* C12: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C12"} pcbX={1.051} pcbY={5.147} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* C13: 4.7uF/10V/20%/X5R/C0402 */}
    <chip name={"C13"} pcbX={3.083} pcbY={5.147} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"4.7uF/10V/20%/X5R/C0402"} footprint={<Footprint_C13 />} noSchematicRepresentation={true}/>

    {/* EXT2: HN1x27 */}
    <chip name={"EXT2"} pcbX={7.655} pcbY={0.067} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"] }} displayName={"HN1x27"} footprint={<Footprint_EXT2 />} noSchematicRepresentation={true}/>

    {/* FID5: Fiducial */}
    <chip name={"FID5"} pcbX={-4.664} pcbY={25.086} pcbRotation={180} pinLabels={{ "pin1": ["Fid1"] }} displayName={"Fiducial"} footprint={<Footprint_FID5 />} noSchematicRepresentation={true}/>

    {/* R21: NA(10k/R0402) */}
    <chip name={"R21"} pcbX={4.353} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* EXT1: HN1x27 */}
    <chip name={"EXT1"} pcbX={-7.585} pcbY={0.067} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"] }} displayName={"HN1x27"} footprint={<Footprint_EXT1 />} noSchematicRepresentation={true}/>

    {/* R22: NA(10k/R0402) */}
    <chip name={"R22"} pcbX={5.242} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* C7: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C7"} pcbX={1.813} pcbY={0.067} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* Logo_OLIMEX_80-Bot: Logo_OLIMEX_80 */}
    <chip name={"Logo_OLIMEX_80_Bot"} pcbX={2.7782} pcbY={25.2892} pcbRotation={180} pinLabels={{}} displayName={"Logo_OLIMEX_80"} footprint={<Footprint_Logo_OLIMEX_80_Bot />} noSchematicRepresentation={true}/>

    {/* R19: NA(10k/R0402) */}
    <chip name={"R19"} pcbX={-4.156} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(10k/R0402)"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* Sign_OSHW_7.3x6.0mm: Sign_OSHW_7.3x6.0mm */}
    <chip name={"Sign_OSHW_7_3x6_0mm"} pcbX={-3.394} pcbY={-3.616} pcbRotation={180} pinLabels={{}} displayName={"Sign_OSHW_7.3x6.0mm"} footprint={<Footprint_Sign_OSHW_7_3x6_0mm />} noSchematicRepresentation={true}/>

    {/* L3: NA(600OHM/2A/UPZ2012E-601-2R0TF/0805) */}
    <chip name={"L3"} pcbX={0.289} pcbY={-15.046} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(600OHM/2A/UPZ2012E-601-2R0TF/0805)"} footprint={<Footprint_L3 />} noSchematicRepresentation={true}/>

    {/* Sign_CE: CE_Sign */}
    <chip name={"Sign_CE"} pcbX={-0.981} pcbY={-32.064} pcbRotation={180} pinLabels={{}} displayName={"CE_Sign"} footprint={<Footprint_Sign_CE />} noSchematicRepresentation={true}/>

    {/* R24: NA(33R/R0402) */}
    <chip name={"R24"} pcbX={-3.267} pcbY={-17.078} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(33R/R0402)"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* R27: NA */}
    <chip name={"R27"} pcbX={2.321} pcbY={-13.268} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* Sign_RecycleBin_1: Sign_RecycleBin_1 */}
    <chip name={"Sign_RecycleBin_1"} pcbX={-1.235} pcbY={-12.506} pcbRotation={180} pinLabels={{}} displayName={"Sign_RecycleBin_1"} footprint={<Footprint_Sign_RecycleBin_1 />} noSchematicRepresentation={true}/>

    {/* C27: NA(47uF/6.3V/20%/X5R/C0805) */}
    <chip name={"C27"} pcbX={0.543} pcbY={-17.078} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(47uF/6.3V/20%/X5R/C0805)"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* C15: 100nF/10V/20%/X5R/C0402 */}
    <chip name={"C15"} pcbX={-4.791} pcbY={1.718} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"100nF/10V/20%/X5R/C0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* MICRO_SD1: NA(TFC-9P-1.7H(ATFFS150A01BR016)) */}
    <chip name={"MICRO_SD1"} pcbX={0.05} pcbY={-22.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["CD1"], "pin10": ["CH1"] }} displayName={"NA(TFC-9P-1.7H(ATFFS150A01BR016))"} footprint={<Footprint_MICRO_SD1 />} noSchematicRepresentation={true}/>

    {/* R26: NA(33R/R0402) */}
    <chip name={"R26"} pcbX={2.829} pcbY={-11.617} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NA(33R/R0402)"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* KiCad net: unconnected-(FID1-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID1_FID__PadFid1_"} connectsTo={[".FID1 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".LED1 > .pin1", ".RST1 > .pin2", ".R5 > .pin1", ".pUEXT1 > .pin11", ".pUEXT1 > .pin2", ".BOOT1 > .pin2", ".USB_C1 > .pin1", ".USB_C1 > .pin2", ".USB_C1 > .pin9", ".USB_C1 > .pin10", ".USB_C1 > .pin17", ".C14 > .pin2", ".SWD1 > .pin3", ".Q1 > .pin3", ".C21 > .pin2", ".C22 > .pin2", ".C2 > .pin2", ".U3 > .pin62", ".U3 > .pin81", ".U2 > .pin1", ".C20 > .pin2", ".C18 > .pin2", ".C24 > .pin2", ".C1 > .pin1", ".U1 > .pin4", ".C25 > .pin2", ".R14 > .pin2", ".QWST1 > .pin5", ".QWST1 > .pin1", ".C19 > .pin2", ".C6 > .pin2", ".C5 > .pin2", ".R10 > .pin1", ".C10 > .pin2", ".C4 > .pin2", ".C17 > .pin2", ".C9 > .pin2", ".C16 > .pin2", ".C11 > .pin2", ".U4 > .pin4", ".U5 > .pin4", ".C3 > .pin2", ".C8 > .pin2", ".C26 > .pin1", ".C12 > .pin2", ".C13 > .pin2", ".EXT2 > .pin3", ".EXT1 > .pin2", ".C7 > .pin2", ".C27 > .pin2", ".C15 > .pin2", ".MICRO_SD1 > .pin6", ".MICRO_SD1 > .pin10"]}/>
    {/* KiCad net: Net-(LED1-A) */}
    <KiCadNet name={"Net__LED1_A_"} connectsTo={[".LED1 > .pin2", ".R15 > .pin1"]}/>
    {/* KiCad net: unconnected-(FID3-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID3_FID__PadFid1_"} connectsTo={[".FID3 > .pin1"]}/>
    {/* KiCad net: unconnected-(FID2-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID2_FID__PadFid1_"} connectsTo={[".FID2 > .pin1"]}/>
    {/* KiCad net: VSYS */}
    <KiCadNet name={"VSYS"} connectsTo={[".D1 > .pin1", ".R12 > .pin1", ".C22 > .pin1", ".U2 > .pin3", ".EXT2 > .pin2"]}/>
    {/* KiCad net: VBUS */}
    <KiCadNet name={"VBUS"} connectsTo={[".D1 > .pin2", ".USB_C1 > .pin3", ".USB_C1 > .pin8", ".USB_C1 > .pin11", ".USB_C1 > .pin16", ".EXT2 > .pin1"]}/>
    {/* KiCad net: +3.3V */}
    <KiCadNet name={"_3_3V"} connectsTo={[".R18 > .pin1", ".R17 > .pin1", ".pUEXT1 > .pin1", ".R13 > .pin2", ".R2 > .pin1", ".FB1 > .pin1", ".U3 > .pin5", ".U3 > .pin15", ".U3 > .pin24", ".U3 > .pin29", ".U3 > .pin41", ".U3 > .pin50", ".U3 > .pin60", ".U3 > .pin64", ".U3 > .pin68", ".U3 > .pin69", ".U3 > .pin76", ".L2 > .pin1", ".R3 > .pin1", ".C24 > .pin1", ".R1 > .pin1", ".C1 > .pin2", ".U1 > .pin8", ".C25 > .pin1", ".QWST1 > .pin2", ".C6 > .pin1", ".C5 > .pin1", ".C10 > .pin1", ".C4 > .pin1", ".R20 > .pin1", ".C9 > .pin1", ".C11 > .pin1", ".U4 > .pin8", ".U5 > .pin8", ".C3 > .pin1", ".C8 > .pin1", ".C26 > .pin2", ".R16 > .pin1", ".R23 > .pin1", ".C12 > .pin1", ".C13 > .pin1", ".R21 > .pin1", ".EXT1 > .pin1", ".R22 > .pin1", ".C7 > .pin1", ".R19 > .pin1", ".L3 > .pin1"]}/>
    {/* KiCad net: /GPIO2\I2C1_SDA */}
    <KiCadNet name={"_GPIO2_I2C1_SDA"} connectsTo={[".R18 > .pin2", ".pUEXT1 > .pin6", ".U3 > .pin79", ".QWST1 > .pin3", ".EXT1 > .pin6"]}/>
    {/* KiCad net: /GPIO3\I2C1_SCL */}
    <KiCadNet name={"_GPIO3_I2C1_SCL"} connectsTo={[".R17 > .pin2", ".pUEXT1 > .pin5", ".U3 > .pin80", ".QWST1 > .pin4", ".EXT1 > .pin7"]}/>
    {/* KiCad net: /RUN */}
    <KiCadNet name={"_RUN"} connectsTo={[".RST1 > .pin1", ".R2 > .pin2", ".C2 > .pin1", ".U3 > .pin35"]}/>
    {/* KiCad net: /USB_CC2 */}
    <KiCadNet name={"_USB_CC2"} connectsTo={[".R5 > .pin2", ".USB_C1 > .pin12"]}/>
    {/* KiCad net: /3V3_EN */}
    <KiCadNet name={"_3V3_EN"} connectsTo={[".R12 > .pin2", ".U2 > .pin4", ".EXT1 > .pin3"]}/>
    {/* KiCad net: /GPIO0\UART0_TX */}
    <KiCadNet name={"_GPIO0_UART0_TX"} connectsTo={[".pUEXT1 > .pin3", ".U3 > .pin77", ".EXT1 > .pin4"]}/>
    {/* KiCad net: /GPIO1\UART0_RX */}
    <KiCadNet name={"_GPIO1_UART0_RX"} connectsTo={[".pUEXT1 > .pin4", ".U3 > .pin78", ".EXT1 > .pin5"]}/>
    {/* KiCad net: /GPIO4\SPI0_RX(MISO) */}
    <KiCadNet name={"_GPIO4_SPI0_RX_MISO_"} connectsTo={[".pUEXT1 > .pin7", ".U3 > .pin1", ".EXT1 > .pin8"]}/>
    {/* KiCad net: /GPIO7\SPI0_TX(MOSI) */}
    <KiCadNet name={"_GPIO7_SPI0_TX_MOSI_"} connectsTo={[".pUEXT1 > .pin8", ".U3 > .pin4", ".EXT1 > .pin11"]}/>
    {/* KiCad net: /GPIO6\SPI0_SCK(SCK) */}
    <KiCadNet name={"_GPIO6_SPI0_SCK_SCK_"} connectsTo={[".pUEXT1 > .pin9", ".U3 > .pin3", ".EXT1 > .pin10"]}/>
    {/* KiCad net: /GPIO5\SPI0_CSn(CS#) */}
    <KiCadNet name={"_GPIO5_SPI0_CSn_CS__"} connectsTo={[".pUEXT1 > .pin10", ".U3 > .pin2", ".EXT1 > .pin9"]}/>
    {/* KiCad net: /BOOTSEL# */}
    <KiCadNet name={"_BOOTSEL_"} connectsTo={[".BOOT1 > .pin1", ".R11 > .pin2"]}/>
    {/* KiCad net: /GPIO25\User_Led */}
    <KiCadNet name={"_GPIO25_User_Led"} connectsTo={[".R15 > .pin2", ".U3 > .pin26", ".EXT2 > .pin5"]}/>
    {/* KiCad net: /USB_CC1 */}
    <KiCadNet name={"_USB_CC1"} connectsTo={[".USB_C1 > .pin4", ".R10 > .pin2"]}/>
    {/* KiCad net: /USB_D+ */}
    <KiCadNet name={"_USB_D_"} connectsTo={[".USB_C1 > .pin5", ".USB_C1 > .pin13", ".R7 > .pin1"]}/>
    {/* KiCad net: /USB_D- */}
    <KiCadNet name={"_USB_D__"} connectsTo={[".USB_C1 > .pin6", ".USB_C1 > .pin14", ".R6 > .pin1"]}/>
    {/* KiCad net: unconnected-(USB-C1-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__USB_C1_SBU1_PadA8_"} connectsTo={[".USB_C1 > .pin7"]}/>
    {/* KiCad net: unconnected-(USB-C1-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__USB_C1_SBU2_PadB8_"} connectsTo={[".USB_C1 > .pin15"]}/>
    {/* KiCad net: Net-(U2-FB) */}
    <KiCadNet name={"Net__U2_FB_"} connectsTo={[".R13 > .pin1", ".U2 > .pin5", ".R14 > .pin1"]}/>
    {/* KiCad net: /+1V1 */}
    <KiCadNet name={"__1V1"} connectsTo={[".C14 > .pin1", ".L1 > .pin1", ".U3 > .pin10", ".U3 > .pin32", ".U3 > .pin51", ".U3 > .pin65", ".C17 > .pin1", ".C16 > .pin1", ".C15 > .pin1"]}/>
    {/* KiCad net: /SWDIO */}
    <KiCadNet name={"_SWDIO"} connectsTo={[".SWD1 > .pin1", ".U3 > .pin34"]}/>
    {/* KiCad net: /SWCLK */}
    <KiCadNet name={"_SWCLK"} connectsTo={[".SWD1 > .pin2", ".U3 > .pin33"]}/>
    {/* KiCad net: Net-(U3-VREG_LX) */}
    <KiCadNet name={"Net__U3_VREG_LX_"} connectsTo={[".L1 > .pin2", ".U3 > .pin63"]}/>
    {/* KiCad net: Net-(C20-Pad1) */}
    <KiCadNet name={"Net__C20_Pad1_"} connectsTo={[".Q1 > .pin1", ".C20 > .pin1", ".R9 > .pin1"]}/>
    {/* KiCad net: Net-(U3-XIN) */}
    <KiCadNet name={"Net__U3_XIN_"} connectsTo={[".Q1 > .pin2", ".C21 > .pin1", ".U3 > .pin30"]}/>
    {/* KiCad net: /ADC_AVDD */}
    <KiCadNet name={"_ADC_AVDD"} connectsTo={[".FB1 > .pin2", ".U3 > .pin59", ".C19 > .pin1"]}/>
    {/* KiCad net: /GPIO8\QMI_CS1n */}
    <KiCadNet name={"_GPIO8_QMI_CS1n"} connectsTo={[".U3 > .pin6", ".U4 > .pin1", ".U5 > .pin1", ".R16 > .pin2", ".EXT1 > .pin12"]}/>
    {/* KiCad net: /GPIO9\SPI1_CSn */}
    <KiCadNet name={"_GPIO9_SPI1_CSn"} connectsTo={[".U3 > .pin7", ".EXT1 > .pin13", ".R24 > .pin1", ".R27 > .pin1"]}/>
    {/* KiCad net: /GPIO10\SPI1_SCK\SD_CLK */}
    <KiCadNet name={"_GPIO10_SPI1_SCK_SD_CLK"} connectsTo={[".U3 > .pin8", ".R25 > .pin1", ".EXT1 > .pin14"]}/>
    {/* KiCad net: /GPIO11\SPI1_TX\SD_CMD */}
    <KiCadNet name={"_GPIO11_SPI1_TX_SD_CMD"} connectsTo={[".U3 > .pin9", ".R20 > .pin2", ".EXT1 > .pin15", ".MICRO_SD1 > .pin3"]}/>
    {/* KiCad net: /GPIO12 */}
    <KiCadNet name={"_GPIO12"} connectsTo={[".U3 > .pin11", ".EXT1 > .pin16"]}/>
    {/* KiCad net: /GPIO13 */}
    <KiCadNet name={"_GPIO13"} connectsTo={[".U3 > .pin12", ".EXT1 > .pin17"]}/>
    {/* KiCad net: /GPIO14 */}
    <KiCadNet name={"_GPIO14"} connectsTo={[".U3 > .pin13", ".EXT1 > .pin18"]}/>
    {/* KiCad net: /GPIO15 */}
    <KiCadNet name={"_GPIO15"} connectsTo={[".U3 > .pin14", ".EXT1 > .pin19"]}/>
    {/* KiCad net: /GPIO16 */}
    <KiCadNet name={"_GPIO16"} connectsTo={[".U3 > .pin16", ".EXT1 > .pin20"]}/>
    {/* KiCad net: /GPIO17 */}
    <KiCadNet name={"_GPIO17"} connectsTo={[".U3 > .pin17", ".EXT1 > .pin21"]}/>
    {/* KiCad net: /GPIO18 */}
    <KiCadNet name={"_GPIO18"} connectsTo={[".U3 > .pin18", ".EXT1 > .pin22"]}/>
    {/* KiCad net: /GPIO19 */}
    <KiCadNet name={"_GPIO19"} connectsTo={[".U3 > .pin19", ".EXT1 > .pin23"]}/>
    {/* KiCad net: /GPIO20 */}
    <KiCadNet name={"_GPIO20"} connectsTo={[".U3 > .pin20", ".EXT1 > .pin24"]}/>
    {/* KiCad net: /GPIO21 */}
    <KiCadNet name={"_GPIO21"} connectsTo={[".U3 > .pin21", ".EXT1 > .pin25"]}/>
    {/* KiCad net: /GPIO22 */}
    <KiCadNet name={"_GPIO22"} connectsTo={[".U3 > .pin22", ".EXT1 > .pin26"]}/>
    {/* KiCad net: /GPIO23 */}
    <KiCadNet name={"_GPIO23"} connectsTo={[".U3 > .pin23", ".EXT1 > .pin27"]}/>
    {/* KiCad net: /GPIO24\SPI1_RX\SD_DAT0 */}
    <KiCadNet name={"_GPIO24_SPI1_RX_SD_DAT0"} connectsTo={[".U3 > .pin25", ".EXT2 > .pin4", ".R26 > .pin1"]}/>
    {/* KiCad net: /GPIO26 */}
    <KiCadNet name={"_GPIO26"} connectsTo={[".U3 > .pin27", ".EXT2 > .pin6"]}/>
    {/* KiCad net: /GPIO27 */}
    <KiCadNet name={"_GPIO27"} connectsTo={[".U3 > .pin28", ".EXT2 > .pin7"]}/>
    {/* KiCad net: Net-(U3-XOUT) */}
    <KiCadNet name={"Net__U3_XOUT_"} connectsTo={[".U3 > .pin31", ".R9 > .pin2"]}/>
    {/* KiCad net: /GPIO28 */}
    <KiCadNet name={"_GPIO28"} connectsTo={[".U3 > .pin36", ".EXT2 > .pin8"]}/>
    {/* KiCad net: /GPIO29 */}
    <KiCadNet name={"_GPIO29"} connectsTo={[".U3 > .pin37", ".EXT2 > .pin9"]}/>
    {/* KiCad net: /GPIO30 */}
    <KiCadNet name={"_GPIO30"} connectsTo={[".U3 > .pin38", ".EXT2 > .pin10"]}/>
    {/* KiCad net: /GPIO31 */}
    <KiCadNet name={"_GPIO31"} connectsTo={[".U3 > .pin39", ".EXT2 > .pin11"]}/>
    {/* KiCad net: /GPIO32 */}
    <KiCadNet name={"_GPIO32"} connectsTo={[".U3 > .pin40", ".EXT2 > .pin12"]}/>
    {/* KiCad net: /GPIO33 */}
    <KiCadNet name={"_GPIO33"} connectsTo={[".U3 > .pin42", ".EXT2 > .pin13"]}/>
    {/* KiCad net: /GPIO34 */}
    <KiCadNet name={"_GPIO34"} connectsTo={[".U3 > .pin43", ".EXT2 > .pin14"]}/>
    {/* KiCad net: /GPIO35 */}
    <KiCadNet name={"_GPIO35"} connectsTo={[".U3 > .pin44", ".EXT2 > .pin15"]}/>
    {/* KiCad net: /GPIO36 */}
    <KiCadNet name={"_GPIO36"} connectsTo={[".U3 > .pin45", ".EXT2 > .pin16"]}/>
    {/* KiCad net: /GPIO37 */}
    <KiCadNet name={"_GPIO37"} connectsTo={[".U3 > .pin46", ".EXT2 > .pin17"]}/>
    {/* KiCad net: /GPIO38 */}
    <KiCadNet name={"_GPIO38"} connectsTo={[".U3 > .pin47", ".EXT2 > .pin18"]}/>
    {/* KiCad net: /GPIO39 */}
    <KiCadNet name={"_GPIO39"} connectsTo={[".U3 > .pin48", ".EXT2 > .pin19"]}/>
    {/* KiCad net: /GPIO40 */}
    <KiCadNet name={"_GPIO40"} connectsTo={[".U3 > .pin49", ".EXT2 > .pin20"]}/>
    {/* KiCad net: /GPIO41 */}
    <KiCadNet name={"_GPIO41"} connectsTo={[".U3 > .pin52", ".EXT2 > .pin21"]}/>
    {/* KiCad net: /GPIO42 */}
    <KiCadNet name={"_GPIO42"} connectsTo={[".U3 > .pin53", ".EXT2 > .pin22"]}/>
    {/* KiCad net: /GPIO43 */}
    <KiCadNet name={"_GPIO43"} connectsTo={[".U3 > .pin54", ".EXT2 > .pin23"]}/>
    {/* KiCad net: /GPIO44 */}
    <KiCadNet name={"_GPIO44"} connectsTo={[".U3 > .pin55", ".EXT2 > .pin24"]}/>
    {/* KiCad net: /GPIO45 */}
    <KiCadNet name={"_GPIO45"} connectsTo={[".U3 > .pin56", ".EXT2 > .pin25"]}/>
    {/* KiCad net: /GPIO46 */}
    <KiCadNet name={"_GPIO46"} connectsTo={[".U3 > .pin57", ".EXT2 > .pin26"]}/>
    {/* KiCad net: /GPIO47 */}
    <KiCadNet name={"_GPIO47"} connectsTo={[".U3 > .pin58", ".EXT2 > .pin27"]}/>
    {/* KiCad net: /VREG_AVDD */}
    <KiCadNet name={"_VREG_AVDD"} connectsTo={[".U3 > .pin61", ".R3 > .pin2", ".C18 > .pin1"]}/>
    {/* KiCad net: /D- */}
    <KiCadNet name={"_D_"} connectsTo={[".U3 > .pin66", ".R6 > .pin2"]}/>
    {/* KiCad net: /D+ */}
    <KiCadNet name={"_D__"} connectsTo={[".U3 > .pin67", ".R7 > .pin2"]}/>
    {/* KiCad net: /QSPI_SD3 */}
    <KiCadNet name={"_QSPI_SD3"} connectsTo={[".U3 > .pin70", ".U1 > .pin7", ".U4 > .pin7", ".U5 > .pin7"]}/>
    {/* KiCad net: /QSPI_CLK */}
    <KiCadNet name={"_QSPI_CLK"} connectsTo={[".U3 > .pin71", ".U1 > .pin6", ".U4 > .pin6", ".U5 > .pin6"]}/>
    {/* KiCad net: /QSPI_SD0 */}
    <KiCadNet name={"_QSPI_SD0"} connectsTo={[".U3 > .pin72", ".U1 > .pin5", ".U4 > .pin5", ".U5 > .pin5"]}/>
    {/* KiCad net: /QSPI_SD2 */}
    <KiCadNet name={"_QSPI_SD2"} connectsTo={[".U3 > .pin73", ".U1 > .pin3", ".U4 > .pin3", ".U5 > .pin3"]}/>
    {/* KiCad net: /QSPI_SD1 */}
    <KiCadNet name={"_QSPI_SD1"} connectsTo={[".U3 > .pin74", ".U1 > .pin2", ".U4 > .pin2", ".U5 > .pin2"]}/>
    {/* KiCad net: /QSPI_CSn */}
    <KiCadNet name={"_QSPI_CSn"} connectsTo={[".U3 > .pin75", ".R11 > .pin1", ".R1 > .pin2", ".U1 > .pin1"]}/>
    {/* KiCad net: /SW1 */}
    <KiCadNet name={"_SW1"} connectsTo={[".L2 > .pin2", ".U2 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-PG-Pad6) */}
    <KiCadNet name={"unconnected__U2_PG_Pad6_"} connectsTo={[".U2 > .pin6"]}/>
    {/* KiCad net: unconnected-(FID4-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID4_FID__PadFid1_"} connectsTo={[".FID4 > .pin1"]}/>
    {/* KiCad net: Net-(MICRO_SD1-CLK{slash}SCLK) */}
    <KiCadNet name={"Net__MICRO_SD1_CLK_slash_SCLK_"} connectsTo={[".R25 > .pin2", ".MICRO_SD1 > .pin5"]}/>
    {/* KiCad net: unconnected-(FID6-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID6_FID__PadFid1_"} connectsTo={[".FID6 > .pin1"]}/>
    {/* KiCad net: Net-(MICRO_SD1-DAT2{slash}RES) */}
    <KiCadNet name={"Net__MICRO_SD1_DAT2_slash_RES_"} connectsTo={[".R23 > .pin2", ".MICRO_SD1 > .pin1"]}/>
    {/* KiCad net: unconnected-(FID5-FID*-PadFid1) */}
    <KiCadNet name={"unconnected__FID5_FID__PadFid1_"} connectsTo={[".FID5 > .pin1"]}/>
    {/* KiCad net: Net-(MICRO_SD1-DAT0{slash}DO) */}
    <KiCadNet name={"Net__MICRO_SD1_DAT0_slash_DO_"} connectsTo={[".R21 > .pin2", ".R27 > .pin2", ".MICRO_SD1 > .pin7", ".R26 > .pin2"]}/>
    {/* KiCad net: Net-(MICRO_SD1-DAT1{slash}RES) */}
    <KiCadNet name={"Net__MICRO_SD1_DAT1_slash_RES_"} connectsTo={[".R22 > .pin2", ".MICRO_SD1 > .pin8"]}/>
    {/* KiCad net: Net-(MICRO_SD1-CD{slash}DAT3{slash}CS) */}
    <KiCadNet name={"Net__MICRO_SD1_CD_slash_DAT3_slash_CS_"} connectsTo={[".R19 > .pin2", ".R24 > .pin2", ".MICRO_SD1 > .pin2"]}/>
    {/* KiCad net: /SD_VDD */}
    <KiCadNet name={"_SD_VDD"} connectsTo={[".L3 > .pin2", ".C27 > .pin1", ".MICRO_SD1 > .pin4"]}/>
    {/* KiCad net: unconnected-(MICRO_SD1-Card_Detect-PadCD1) */}
    <KiCadNet name={"unconnected__MICRO_SD1_Card_Detect_PadCD1_"} connectsTo={[".MICRO_SD1 > .pin9"]}/>
    <KiCadSchematic /></board>);
}
