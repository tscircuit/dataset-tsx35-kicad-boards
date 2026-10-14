import { KiCadSchematic, KiCadNet } from './schematic'
// discretesim test board
// Source: https://github.com/cnlohr/discretesim
// Commit: f7a169ee07b18b6c857d23582474b8ba20185436; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_TP39, Footprint_P36, Footprint_TP87, Footprint_N58, Footprint_TP6, Footprint_TP93, Footprint_N10, Footprint_P14, Footprint_D2, Footprint_TP10, Footprint_N70, Footprint_R36, Footprint_R34, Footprint_TP59, Footprint_TP11, Footprint_TP88, Footprint_P64, Footprint_TP63, Footprint_R13, Footprint_P13, Footprint_TP25, Footprint_D18, Footprint_P20, Footprint_TP22, Footprint_D10, Footprint_N17, Footprint_P8, Footprint_TP85, Footprint_TP1, Footprint_R51, Footprint_TP114, Footprint_P49, Footprint_P71, Footprint_P52, Footprint_TP127, Footprint_N23, Footprint_TP28, Footprint_TP70, Footprint_N26, Footprint_N19, Footprint_D20, Footprint_N20, Footprint_N52, Footprint_TP107, Footprint_TP65, Footprint_P58, Footprint_N76, Footprint_TP109, Footprint_TP131, Footprint_D11, Footprint_N6, Footprint_N74, Footprint_N28, Footprint_R11, Footprint_TP99, Footprint_N4, Footprint_P57, Footprint_TP15, Footprint_TP133, Footprint_N13, Footprint_D3, Footprint_TP35, Footprint_P45, Footprint_N64, Footprint_N18, Footprint_D8, Footprint_R9, Footprint_N41, Footprint_TP69, Footprint_R50, Footprint_TP118, Footprint_TP117, Footprint_N54, Footprint_TP115, Footprint_P56, Footprint_P68, Footprint_TP64, Footprint_N69, Footprint_P5, Footprint_TP44, Footprint_R1, Footprint_N16, Footprint_TP119, Footprint_P75, Footprint_P6, Footprint_TP61, Footprint_TP7, Footprint_P66, Footprint_P24, Footprint_P43, Footprint_N60, Footprint_P55, Footprint_TP30, Footprint_TP103, Footprint_TP86, Footprint_TP21, Footprint_TP23, Footprint_P2, Footprint_D12, Footprint_TP46, Footprint_P16, Footprint_TP122, Footprint_R49, Footprint_N38, Footprint_TP20, Footprint_TP91, Footprint_N61, Footprint_TP40, Footprint_TP50, Footprint_P33, Footprint_R5, Footprint_N27, Footprint_TP71, Footprint_TP135, Footprint_TP52, Footprint_N46, Footprint_R2, Footprint_P31, Footprint_TP34, Footprint_TP8, Footprint_TP43, Footprint_P62, Footprint_R16, Footprint_R40, Footprint_P15, Footprint_N57, Footprint_R7, Footprint_N33, Footprint_D1, Footprint_TP81, Footprint_R33, Footprint_P69, Footprint_TP125, Footprint_P12, Footprint_N40, Footprint_R24, Footprint_P46, Footprint_N75, Footprint_R48, Footprint_TP96, Footprint_N66, Footprint_TP3, Footprint_TP80, Footprint_TP100, Footprint_TP111, Footprint_TP13, Footprint_N42, Footprint_N29, Footprint_P70, Footprint_N8, Footprint_N65, Footprint_P38, Footprint_TP126, Footprint_TP94, Footprint_N77, Footprint_R32, Footprint_N36, Footprint_TP67, Footprint_D16, Footprint_P25, Footprint_TP98, Footprint_D14, Footprint_P17, Footprint_P40, Footprint_TP55, Footprint_N68, Footprint_P47, Footprint_TP48, Footprint_R19, Footprint_N73, Footprint_TP14, Footprint_TP26, Footprint_N7, Footprint_TP66, Footprint_N1, Footprint_TP9, Footprint_P60, Footprint_TP58, Footprint_R43, Footprint_TP110, Footprint_TP132, Footprint_TP24, Footprint_D21, Footprint_N43, Footprint_R17, Footprint_TP19, Footprint_N62, Footprint_P23, Footprint_TP31, Footprint_N50, Footprint_TP5, Footprint_TP16, Footprint_R52, Footprint_R28, Footprint_TP37, Footprint_TP12, Footprint_N49, Footprint_P26, Footprint_P72, Footprint_R18, Footprint_TP73, Footprint_P32, Footprint_P51, Footprint_R47, Footprint_TP2, Footprint_TP105, Footprint_R15, Footprint_TP116, Footprint_R14, Footprint_TP90, Footprint_P41, Footprint_N2, Footprint_P30, Footprint_R41, Footprint_P54, Footprint_N12, Footprint_TP53, Footprint_N47, Footprint_TP72, Footprint_N48, Footprint_R45, Footprint_TP33, Footprint_P48, Footprint_TP74, Footprint_P63, Footprint_TP106, Footprint_N56, Footprint_D17, Footprint_TP108, Footprint_TP79, Footprint_P7, Footprint_TP27, Footprint_TP77, Footprint_TP68, Footprint_R10, Footprint_N71, Footprint_TP83, Footprint_R39, Footprint_N21, Footprint_R27, Footprint_N55, Footprint_R30, Footprint_N14, Footprint_P67, Footprint_TP49, Footprint_P21, Footprint_P29, Footprint_TP84, Footprint_R46, Footprint_TP97, Footprint_R37, Footprint_R6, Footprint_P44, Footprint_TP104, Footprint_P77, Footprint_P27, Footprint_TP102, Footprint_R21, Footprint_N24, Footprint_R26, Footprint_R22, Footprint_N11, Footprint_N22, Footprint_N45, Footprint_N25, Footprint_N15, Footprint_R42, Footprint_N34, Footprint_P61, Footprint_TP130, Footprint_TP42, Footprint_R44, Footprint_P10, Footprint_P74, Footprint_R35, Footprint_P1, Footprint_R12, Footprint_R4, Footprint_TP54, Footprint_R31, Footprint_P73, Footprint_P9, Footprint_TP134, Footprint_TP62, Footprint_N51, Footprint_P22, Footprint_D13, Footprint_P3, Footprint_D7, Footprint_P18, Footprint_D19, Footprint_N63, Footprint_TP29, Footprint_TP51, Footprint_P53, Footprint_N39, Footprint_TP47, Footprint_TP41, Footprint_TP4, Footprint_R23, Footprint_P19, Footprint_P11, Footprint_R29, Footprint_TP60, Footprint_N31, Footprint_TP92, Footprint_TP18, Footprint_N53, Footprint_TP101, Footprint_D6, Footprint_P35, Footprint_P76, Footprint_P65, Footprint_P28, Footprint_P39, Footprint_D4, Footprint_TP56, Footprint_P37, Footprint_TP128, Footprint_N44, Footprint_TP36, Footprint_R25, Footprint_N35, Footprint_N32, Footprint_TP120, Footprint_N3, Footprint_TP112, Footprint_TP129, Footprint_TP45, Footprint_R8, Footprint_TP89, Footprint_P59, Footprint_TP57, Footprint_TP17, Footprint_TP82, Footprint_D5, Footprint_TP76, Footprint_N67, Footprint_P4, Footprint_P42, Footprint_TP32, Footprint_TP78, Footprint_TP113, Footprint_P34, Footprint_R20, Footprint_N37, Footprint_N9, Footprint_TP124, Footprint_D15, Footprint_N30, Footprint_R38, Footprint_TP75, Footprint_R3, Footprint_TP121, Footprint_TP123, Footprint_N72, Footprint_TP95, Footprint_TP38, Footprint_N5, Footprint_D9, Footprint_N59, Footprint_P50 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={99.65999999999825} height={73.5} thickness={1.6} layers={2} outline={[{ "x": 44.36999999999999, "y": 35.750000000000796 }, { "x": -46.63000000000001, "y": 36.750000000000796 }, { "x": -46.87773800622458, "y": 36.7397533883463 }, { "x": -47.123783704334926, "y": 36.70908374178953 }, { "x": -47.36645635439839, "y": 36.6582005649066 }, { "x": -47.60409825779777, "y": 36.5874514410446 }, { "x": -47.835086080982514, "y": 36.497319657977265 }, { "x": -48.05784194447183, "y": 36.3884209065627 }, { "x": -48.2708442013608, "y": 36.2614990749547 }, { "x": -48.4726378317013, "y": 36.11742116709745 }, { "x": -48.66184438175376, "y": 35.95717138021531 }, { "x": -48.83717138021453, "y": 35.78184438175454 }, { "x": -48.99742116709666, "y": 35.592637831702085 }, { "x": -49.14149907495392, "y": 35.39084420136158 }, { "x": -49.268420906561914, "y": 35.17784194447262 }, { "x": -49.377319657976486, "y": 34.95508608098329 }, { "x": -49.46745144104383, "y": 34.72409825779856 }, { "x": -49.53820056490582, "y": 34.48645635439917 }, { "x": -49.589083741788755, "y": 34.24378370433571 }, { "x": -49.61975338834553, "y": 33.99773800622536 }, { "x": -49.630000000000024, "y": 33.750000000000796 }, { "x": -49.83000000000001, "y": -32.36999999999921 }, { "x": -49.81975338834555, "y": -32.6177380062238 }, { "x": -49.789083741788815, "y": -32.86378370433417 }, { "x": -49.73820056490591, "y": -33.106456354397665 }, { "x": -49.66745144104394, "y": -33.344098257797086 }, { "x": -49.57731965797662, "y": -33.57508608098186 }, { "x": -49.468420906562066, "y": -33.7978419444712 }, { "x": -49.34149907495408, "y": -34.010844201360214 }, { "x": -49.19742116709683, "y": -34.21263783170075 }, { "x": -49.037171380214694, "y": -34.401844381753236 }, { "x": -48.861844381753926, "y": -34.577171380214025 }, { "x": -48.67263783170146, "y": -34.7374211670962 }, { "x": -48.47084420136094, "y": -34.88149907495347 }, { "x": -48.25784194447196, "y": -35.0084209065615 }, { "x": -48.03508608098262, "y": -35.11731965797608 }, { "x": -47.80409825779786, "y": -35.20745144104343 }, { "x": -47.566456354398454, "y": -35.27820056490545 }, { "x": -47.32378370433497, "y": -35.32908374178838 }, { "x": -47.07773800622461, "y": -35.359753388345155 }, { "x": -46.83000000000001, "y": -35.36999999999965 }, { "x": 46.829999999999984, "y": -36.749999999999204 }, { "x": 47.07773800622451, "y": -36.739753388344724 }, { "x": 47.3237837043348, "y": -36.709083741787964 }, { "x": 47.5664563543982, "y": -36.65820056490503 }, { "x": 47.80409825779755, "y": -36.58745144104303 }, { "x": 48.035086080982225, "y": -36.49731965797568 }, { "x": 48.25784194447148, "y": -36.38842090656111 }, { "x": 48.47084420136038, "y": -36.26149907495309 }, { "x": 48.67263783170081, "y": -36.11742116709583 }, { "x": 48.86184438175319, "y": -35.957171380213666 }, { "x": 49.03717138021388, "y": -35.78184438175289 }, { "x": 49.197421167095925, "y": -35.592637831700415 }, { "x": 49.34149907495306, "y": -35.3908442013599 }, { "x": 49.46842090656095, "y": -35.17784194447091 }, { "x": 49.57731965797542, "y": -34.9550860809816 }, { "x": 49.667451441042616, "y": -34.724098257796854 }, { "x": 49.73820056490449, "y": -34.48645635439749 }, { "x": 49.78908374178728, "y": -34.24378370433405 }, { "x": 49.8197533883439, "y": -33.99773800622373 }, { "x": 49.829999999998236, "y": -33.749999999999204 }, { "x": 47.36999999999999, "y": 32.750000000000796 }, { "x": 47.35975338834555, "y": 32.99773800622543 }, { "x": 47.329083741788835, "y": 33.24378370433584 }, { "x": 47.27820056490596, "y": 33.48645635439938 }, { "x": 47.207451441044, "y": 33.72409825779884 }, { "x": 47.117319657976694, "y": 33.95508608098366 }, { "x": 47.008420906562165, "y": 34.177841944473066 }, { "x": 46.88149907495418, "y": 34.390844201362114 }, { "x": 46.73742116709694, "y": 34.59263783170271 }, { "x": 46.57717138021481, "y": 34.781844381755256 }, { "x": 46.401844381754046, "y": 34.95717138021611 }, { "x": 46.212637831701585, "y": 35.117421167098335 }, { "x": 46.01084420136107, "y": 35.26149907495568 }, { "x": 45.79784194447208, "y": 35.388420906563766 }, { "x": 45.57508608098273, "y": 35.497319657978416 }, { "x": 45.34409825779795, "y": 35.587451441045836 }, { "x": 45.10645635439853, "y": 35.658200564907915 }, { "x": 44.86378370433502, "y": 35.70908374179092 }, { "x": 44.61773800622463, "y": 35.739753388347765 }, { "x": 44.36999999999999, "y": 35.75000000000232 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* TP39: GNDXOR */}
    <chip name={"TP39"} pcbX={-8.66} pcbY={23.65} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDXOR"} footprint={<Footprint_TP39 />} noSchematicRepresentation={true}/>

    {/* P36: RZM001P02T2L */}
    <chip name={"P36"} pcbX={-36.33} pcbY={-15.38} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P36 />} noSchematicRepresentation={true}/>

    {/* TP87: JOIN2 */}
    <chip name={"TP87"} pcbX={16.62} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN2"} footprint={<Footprint_TP87 />} noSchematicRepresentation={true}/>

    {/* N58: 2SK3541 */}
    <chip name={"N58"} pcbX={-12} pcbY={-9.825} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N58 />} noSchematicRepresentation={true}/>

    {/* TP6: GNDFF */}
    <chip name={"TP6"} pcbX={-41.78} pcbY={32.295} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDFF"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* TP93: JOIN3 */}
    <chip name={"TP93"} pcbX={16.63} pcbY={13.69} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN3"} footprint={<Footprint_TP93 />} noSchematicRepresentation={true}/>

    {/* N10: NX7002BKMB315 */}
    <chip name={"N10"} pcbX={-42.65} pcbY={11.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N10 />} noSchematicRepresentation={true}/>

    {/* P14: RZM001P02T2L */}
    <chip name={"P14"} pcbX={-21.185} pcbY={28.155} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P14 />} noSchematicRepresentation={true}/>

    {/* D2: LED */}
    <chip name={"D2"} pcbX={-44.16} pcbY={18.7375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* TP10: VCCRO */}
    <chip name={"TP10"} pcbX={-37.43} pcbY={8.49} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCRO"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* N70: 2SK3541 */}
    <chip name={"N70"} pcbX={36.12} pcbY={-22.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N70 />} noSchematicRepresentation={true}/>

    {/* R36: 1k */}
    <resistor name={"R36"} pcbX={-17.62} pcbY={-30.83} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R36 />} schX={-5.949999999999999} schY={-7.000000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* R34: 1k */}
    <resistor name={"R34"} pcbX={-39.64} pcbY={-18.26} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R34 />} schX={-13.149999999999999} schY={-3.0999999999999996} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP59: JOIN0 */}
    <chip name={"TP59"} pcbX={20.52} pcbY={25.21} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN0"} footprint={<Footprint_TP59 />} noSchematicRepresentation={true}/>

    {/* TP11: ROON */}
    <chip name={"TP11"} pcbX={-40.31} pcbY={9.22} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"ROON"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* TP88: JOIN2 */}
    <chip name={"TP88"} pcbX={6.169001} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN2"} footprint={<Footprint_TP88 />} noSchematicRepresentation={true}/>

    {/* P64: RZM001P02T2L */}
    <chip name={"P64"} pcbX={29.14} pcbY={-24.5725} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P64 />} noSchematicRepresentation={true}/>

    {/* TP63: JOIN1 */}
    <chip name={"TP63"} pcbX={9.48} pcbY={32.51} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN1"} footprint={<Footprint_TP63 />} noSchematicRepresentation={true}/>

    {/* R13: 1k */}
    <resistor name={"R13"} pcbX={-23.44} pcbY={11.77} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R13 />} schX={-4.85} schY={0.3000000000000007} schRotation={90} schSheetName={"Overview"}/>

    {/* P13: BSS84KNC */}
    <chip name={"P13"} pcbX={-37.46} pcbY={12.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P13 />} noSchematicRepresentation={true}/>

    {/* TP25: 2NOR0 */}
    <chip name={"TP25"} pcbX={-5.0875} pcbY={9.2725} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"2NOR0"} footprint={<Footprint_TP25 />} noSchematicRepresentation={true}/>

    {/* D18: LED */}
    <chip name={"D18"} pcbX={9.81} pcbY={-25.65} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D18 />} noSchematicRepresentation={true}/>

    {/* P20: RZM001P02T2L */}
    <chip name={"P20"} pcbX={-5.645} pcbY={13.6025} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P20 />} noSchematicRepresentation={true}/>

    {/* TP22: VCC3NAND */}
    <chip name={"TP22"} pcbX={-27.72} pcbY={12.49} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCC3NAND"} footprint={<Footprint_TP22 />} noSchematicRepresentation={true}/>

    {/* D10: LED */}
    <chip name={"D10"} pcbX={-6.2875} pcbY={2.3375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* N17: NX7002BKMB315 */}
    <chip name={"N17"} pcbX={-22.06} pcbY={14.425} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N17 />} noSchematicRepresentation={true}/>

    {/* P8: RZM001P02T2L */}
    <chip name={"P8"} pcbX={-42.95} pcbY={20.53} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P8 />} noSchematicRepresentation={true}/>

    {/* TP85: JOIN2 */}
    <chip name={"TP85"} pcbX={2.579001} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN2"} footprint={<Footprint_TP85 />} noSchematicRepresentation={true}/>

    {/* TP1: BOS */}
    <chip name={"TP1"} pcbX={-39.96} pcbY={26.135} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"BOS"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* R51: 1k */}
    <resistor name={"R51"} pcbX={32.32} pcbY={-27.41} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R51 />} schX={8.450000000000003} schY={-2.3000000000000007} schRotation={0} schSheetName={"Overview"}/>

    {/* TP114: JKJ */}
    <chip name={"TP114"} pcbX={-14.11} pcbY={-25.97} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JKJ"} footprint={<Footprint_TP114 />} noSchematicRepresentation={true}/>

    {/* P49: RZM001P02T2L */}
    <chip name={"P49"} pcbX={-15.95} pcbY={-22.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P49 />} noSchematicRepresentation={true}/>

    {/* P71: RZM001P02T2L */}
    <chip name={"P71"} pcbX={31.04} pcbY={-18.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P71 />} noSchematicRepresentation={true}/>

    {/* P52: RZM001P02T2L */}
    <chip name={"P52"} pcbX={9.63} pcbY={-20.29} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P52 />} noSchematicRepresentation={true}/>

    {/* TP127: VCCXOR2 */}
    <chip name={"TP127"} pcbX={-16.5} pcbY={-7.565} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCXOR2"} footprint={<Footprint_TP127 />} noSchematicRepresentation={true}/>

    {/* N23: 2SK3541 */}
    <chip name={"N23"} pcbX={-43.595} pcbY={3.41} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N23 />} noSchematicRepresentation={true}/>

    {/* TP28: GND2NOR */}
    <chip name={"TP28"} pcbX={-9.4175} pcbY={8.6625} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND2NOR"} footprint={<Footprint_TP28 />} noSchematicRepresentation={true}/>

    {/* TP70: NG */}
    <chip name={"TP70"} pcbX={40.065} pcbY={15.59} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NG"} footprint={<Footprint_TP70 />} noSchematicRepresentation={true}/>

    {/* N26: 2SK3541 */}
    <chip name={"N26"} pcbX={30.17} pcbY={13.85} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N26 />} noSchematicRepresentation={true}/>

    {/* N19: NX7002BKMB315 */}
    <chip name={"N19"} pcbX={-25.06} pcbY={14.445} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N19 />} noSchematicRepresentation={true}/>

    {/* D20: LED */}
    <chip name={"D20"} pcbX={30.38} pcbY={-27.1425} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D20 />} noSchematicRepresentation={true}/>

    {/* N20: 2SK3541 */}
    <chip name={"N20"} pcbX={-5.855} pcbY={12.0525} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N20 />} noSchematicRepresentation={true}/>

    {/* N52: 2SK3541 */}
    <chip name={"N52"} pcbX={3.03} pcbY={-21.83} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N52 />} noSchematicRepresentation={true}/>

    {/* TP107: RSQ */}
    <chip name={"TP107"} pcbX={-34.04} pcbY={-16.16} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"RSQ"} footprint={<Footprint_TP107 />} noSchematicRepresentation={true}/>

    {/* TP65: JOIN1 */}
    <chip name={"TP65"} pcbX={6.13} pcbY={32.47} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN1"} footprint={<Footprint_TP65 />} noSchematicRepresentation={true}/>

    {/* P58: RZM001P02T2L */}
    <chip name={"P58"} pcbX={-12.82} pcbY={-11.575} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P58 />} noSchematicRepresentation={true}/>

    {/* N76: 2SK3541 */}
    <chip name={"N76"} pcbX={35.76} pcbY={-21.44} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N76 />} noSchematicRepresentation={true}/>

    {/* TP109: RSS */}
    <chip name={"TP109"} pcbX={-37.16} pcbY={-13.15} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"RSS"} footprint={<Footprint_TP109 />} noSchematicRepresentation={true}/>

    {/* TP131: FAA */}
    <chip name={"TP131"} pcbX={28.66} pcbY={-15.01} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FAA"} footprint={<Footprint_TP131 />} noSchematicRepresentation={true}/>

    {/* D11: LED */}
    <chip name={"D11"} pcbX={-2.6075} pcbY={2.4875} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* N6: 2SK3541 */}
    <chip name={"N6"} pcbX={-38.45} pcbY={18.7375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N6 />} noSchematicRepresentation={true}/>

    {/* N74: 2SK3541 */}
    <chip name={"N74"} pcbX={34.35} pcbY={-23.16} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N74 />} noSchematicRepresentation={true}/>

    {/* N28: NX7002BKMB315 */}
    <chip name={"N28"} pcbX={32.0875} pcbY={3.065} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N28 />} noSchematicRepresentation={true}/>

    {/* R11: 1k */}
    <resistor name={"R11"} pcbX={-24.35} pcbY={11.77} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R11 />} schX={-7.149999999999999} schY={1.9000000000000004} schRotation={0} schSheetName={"Overview"}/>

    {/* TP99: GND */}
    <chip name={"TP99"} pcbX={34.4} pcbY={32.42} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND"} footprint={<Footprint_TP99 />} noSchematicRepresentation={true}/>

    {/* N4: 2SK3541 */}
    <chip name={"N4"} pcbX={-41.45} pcbY={18.7475} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N4 />} noSchematicRepresentation={true}/>

    {/* P57: RZM001P02T2L */}
    <chip name={"P57"} pcbX={3.76} pcbY={-26.855} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P57 />} noSchematicRepresentation={true}/>

    {/* TP15: 3NANDI2 */}
    <chip name={"TP15"} pcbX={-27.99} pcbY={26.15} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDI2"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* TP133: FASO */}
    <chip name={"TP133"} pcbX={34.95} pcbY={-15.24} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FASO"} footprint={<Footprint_TP133 />} noSchematicRepresentation={true}/>

    {/* N13: NX7002BKMB315 */}
    <chip name={"N13"} pcbX={-37.46} pcbY={11.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N13 />} noSchematicRepresentation={true}/>

    {/* D3: LED */}
    <chip name={"D3"} pcbX={-36.29} pcbY={10.735} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* TP35: VCCXM */}
    <chip name={"TP35"} pcbX={-47.2575} pcbY={-0.28} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCXM"} footprint={<Footprint_TP35 />} noSchematicRepresentation={true}/>

    {/* P45: RZM001P02T2L */}
    <chip name={"P45"} pcbX={-21.23} pcbY={-21.02} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P45 />} noSchematicRepresentation={true}/>

    {/* N64: 2SK3541 */}
    <chip name={"N64"} pcbX={37.3475} pcbY={-25.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N64 />} noSchematicRepresentation={true}/>

    {/* N18: NX7002BKMB315 */}
    <chip name={"N18"} pcbX={-23.56} pcbY={14.435} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N18 />} noSchematicRepresentation={true}/>

    {/* D8: LED */}
    <chip name={"D8"} pcbX={-8.4875} pcbY={30.03} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* R9: 1k */}
    <resistor name={"R9"} pcbX={-25.78} pcbY={25.945} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R9 />} schX={-5.649999999999999} schY={4.4} schRotation={0} schSheetName={"Overview"}/>

    {/* N41: 2SK3541 */}
    <chip name={"N41"} pcbX={6.445} pcbY={-23.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N41 />} noSchematicRepresentation={true}/>

    {/* TP69: PD */}
    <chip name={"TP69"} pcbX={44.84} pcbY={25.18} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PD"} footprint={<Footprint_TP69 />} noSchematicRepresentation={true}/>

    {/* R50: 1k */}
    <resistor name={"R50"} pcbX={34.28} pcbY={-26.8325} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R50 />} schX={8.349999999999998} schY={1.9000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP118: FASO */}
    <chip name={"TP118"} pcbX={10.67} pcbY={-27.9} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FASO"} footprint={<Footprint_TP118 />} noSchematicRepresentation={true}/>

    {/* TP117: FACO */}
    <chip name={"TP117"} pcbX={1.24} pcbY={-29.15} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FACO"} footprint={<Footprint_TP117 />} noSchematicRepresentation={true}/>

    {/* N54: 2SK3541 */}
    <chip name={"N54"} pcbX={0.63} pcbY={-25.26} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N54 />} noSchematicRepresentation={true}/>

    {/* TP115: VCCJK */}
    <chip name={"TP115"} pcbX={-31.57} pcbY={-23.07} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCJK"} footprint={<Footprint_TP115 />} noSchematicRepresentation={true}/>

    {/* P56: RZM001P02T2L */}
    <chip name={"P56"} pcbX={8.46} pcbY={-25.06} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P56 />} noSchematicRepresentation={true}/>

    {/* P68: RZM001P02T2L */}
    <chip name={"P68"} pcbX={31.175} pcbY={-22.2325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P68 />} noSchematicRepresentation={true}/>

    {/* TP64: JOIN1 */}
    <chip name={"TP64"} pcbX={20.39} pcbY={32.47} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN1"} footprint={<Footprint_TP64 />} noSchematicRepresentation={true}/>

    {/* N69: 2SK3541 */}
    <chip name={"N69"} pcbX={32.1} pcbY={-25.18} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N69 />} noSchematicRepresentation={true}/>

    {/* P5: RZM001P02T2L */}
    <chip name={"P5"} pcbX={-39.95} pcbY={20.52} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P5 />} noSchematicRepresentation={true}/>

    {/* TP44: PG */}
    <chip name={"TP44"} pcbX={26.91} pcbY={27.63} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PG"} footprint={<Footprint_TP44 />} noSchematicRepresentation={true}/>

    {/* R1: 1k */}
    <resistor name={"R1"} pcbX={-43.05} pcbY={30.08} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R1 />} schX={-11.749999999999998} schY={7.3} schRotation={0} schSheetName={"Overview"}/>

    {/* N16: 2SK3541 */}
    <chip name={"N16"} pcbX={-24.675} pcbY={28.855} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N16 />} noSchematicRepresentation={true}/>

    {/* TP119: FACi */}
    <chip name={"TP119"} pcbX={6.71} pcbY={-29.98} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FACi"} footprint={<Footprint_TP119 />} noSchematicRepresentation={true}/>

    {/* P75: RZM001P02T2L */}
    <chip name={"P75"} pcbX={34.47} pcbY={-21.295} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P75 />} noSchematicRepresentation={true}/>

    {/* P6: RZM001P02T2L */}
    <chip name={"P6"} pcbX={-38.45} pcbY={20.495} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P6 />} noSchematicRepresentation={true}/>

    {/* TP61: JOIN1 */}
    <chip name={"TP61"} pcbX={16.66} pcbY={32.51} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN1"} footprint={<Footprint_TP61 />} noSchematicRepresentation={true}/>

    {/* TP7: GNDRO */}
    <chip name={"TP7"} pcbX={-43.41} pcbY={16.513806} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDRO"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* P66: RZM001P02T2L */}
    <chip name={"P66"} pcbX={32.91} pcbY={-23.3725} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P66 />} noSchematicRepresentation={true}/>

    {/* P24: RZM001P02T2L */}
    <chip name={"P24"} pcbX={-43.59} pcbY={1.91} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P24 />} noSchematicRepresentation={true}/>

    {/* P43: RZM001P02T2L */}
    <chip name={"P43"} pcbX={8.57} pcbY={-21.91} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P43 />} noSchematicRepresentation={true}/>

    {/* N60: 2SK3541 */}
    <chip name={"N60"} pcbX={-11.31} pcbY={-11.565} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N60 />} noSchematicRepresentation={true}/>

    {/* P55: RZM001P02T2L */}
    <chip name={"P55"} pcbX={6.335} pcbY={-18.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P55 />} noSchematicRepresentation={true}/>

    {/* TP30: XM1 */}
    <chip name={"TP30"} pcbX={-45.9575} pcbY={3.26} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XM1"} footprint={<Footprint_TP30 />} noSchematicRepresentation={true}/>

    {/* TP103: JKCK */}
    <chip name={"TP103"} pcbX={-22.1} pcbY={-28.54} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JKCK"} footprint={<Footprint_TP103 />} noSchematicRepresentation={true}/>

    {/* TP86: JOIN2 */}
    <chip name={"TP86"} pcbX={9.399} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN2"} footprint={<Footprint_TP86 />} noSchematicRepresentation={true}/>

    {/* TP21: 3NANDOUT */}
    <chip name={"TP21"} pcbX={-21.43} pcbY={9.41} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDOUT"} footprint={<Footprint_TP21 />} noSchematicRepresentation={true}/>

    {/* TP23: GND3NAND */}
    <chip name={"TP23"} pcbX={-26.74} pcbY={17.64} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND3NAND"} footprint={<Footprint_TP23 />} noSchematicRepresentation={true}/>

    {/* P2: RZM001P02T2L */}
    <chip name={"P2"} pcbX={-40.35} pcbY={30.07} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P2 />} noSchematicRepresentation={true}/>

    {/* D12: LED */}
    <chip name={"D12"} pcbX={1.3025} pcbY={2.5875} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* TP46: ND */}
    <chip name={"TP46"} pcbX={33.235} pcbY={13.92} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"ND"} footprint={<Footprint_TP46 />} noSchematicRepresentation={true}/>

    {/* P16: RZM001P02T2L */}
    <chip name={"P16"} pcbX={-24.83} pcbY={27.335} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P16 />} noSchematicRepresentation={true}/>

    {/* TP122: VCCFA */}
    <chip name={"TP122"} pcbX={13.26} pcbY={-18.7} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCFA"} footprint={<Footprint_TP122 />} noSchematicRepresentation={true}/>

    {/* R49: 1k */}
    <resistor name={"R49"} pcbX={32.82} pcbY={-20.45} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R49 />} schX={7.75} schY={1.9000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* N38: 2SK3541 */}
    <chip name={"N38"} pcbX={-37.74} pcbY={-18.39} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N38 />} noSchematicRepresentation={true}/>

    {/* TP20: 3NANDI2 */}
    <chip name={"TP20"} pcbX={-26.2} pcbY={9.95} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDI2"} footprint={<Footprint_TP20 />} noSchematicRepresentation={true}/>

    {/* TP91: JOIN3 */}
    <chip name={"TP91"} pcbX={2.52} pcbY={13.41} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN3"} footprint={<Footprint_TP91 />} noSchematicRepresentation={true}/>

    {/* N61: 2SK3541 */}
    <chip name={"N61"} pcbX={-14.03} pcbY={-14.825} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N61 />} noSchematicRepresentation={true}/>

    {/* TP40: LED0 */}
    <chip name={"TP40"} pcbX={-6.5575} pcbY={-0.3975} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"LED0"} footprint={<Footprint_TP40 />} noSchematicRepresentation={true}/>

    {/* TP50: R */}
    <chip name={"TP50"} pcbX={-13.75} pcbY={3.51} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"R"} footprint={<Footprint_TP50 />} noSchematicRepresentation={true}/>

    {/* P33: RZM001P02T2L */}
    <chip name={"P33"} pcbX={2.605} pcbY={-18.52} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P33 />} noSchematicRepresentation={true}/>

    {/* R5: 1k */}
    <resistor name={"R5"} pcbX={-36.26} pcbY={12.55} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R5 />} schX={-9.049999999999999} schY={0.8000000000000007} schRotation={-90} schSheetName={"Overview"}/>

    {/* N27: 2SK3541 */}
    <chip name={"N27"} pcbX={42.47} pcbY={13.44} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N27 />} noSchematicRepresentation={true}/>

    {/* TP71: ND */}
    <chip name={"TP71"} pcbX={45.115} pcbY={13.34} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"ND"} footprint={<Footprint_TP71 />} noSchematicRepresentation={true}/>

    {/* TP135: GNDFA */}
    <chip name={"TP135"} pcbX={38.84} pcbY={-28.64} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDFA"} footprint={<Footprint_TP135 />} noSchematicRepresentation={true}/>

    {/* TP52: R */}
    <chip name={"TP52"} pcbX={-18.72} pcbY={-1.73} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"R"} footprint={<Footprint_TP52 />} noSchematicRepresentation={true}/>

    {/* N46: 2SK3541 */}
    <chip name={"N46"} pcbX={-22.43} pcbY={-26.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N46 />} noSchematicRepresentation={true}/>

    {/* R2: 1k */}
    <resistor name={"R2"} pcbX={-40.25} pcbY={28.32} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R2 />} schX={-11.849999999999998} schY={7.8999999999999995} schRotation={180} schSheetName={"Overview"}/>

    {/* P31: RZM001P02T2L */}
    <chip name={"P31"} pcbX={2.66} pcbY={-20.16} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P31 />} noSchematicRepresentation={true}/>

    {/* TP34: XORA */}
    <chip name={"TP34"} pcbX={-4.01} pcbY={24.7975} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XORA"} footprint={<Footprint_TP34 />} noSchematicRepresentation={true}/>

    {/* TP8: VCCRO */}
    <chip name={"TP8"} pcbX={-46.33} pcbY={18.543806} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCRO"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP43: PS */}
    <chip name={"TP43"} pcbX={26.37} pcbY={22.77} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PS"} footprint={<Footprint_TP43 />} noSchematicRepresentation={true}/>

    {/* P62: RZM001P02T2L */}
    <chip name={"P62"} pcbX={-14.425} pcbY={-11.525} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P62 />} noSchematicRepresentation={true}/>

    {/* R16: 1k */}
    <resistor name={"R16"} pcbX={-7.965} pcbY={15.1825} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R16 />} schX={-0.5499999999999989} schY={6.3} schRotation={0} schSheetName={"Overview"}/>

    {/* R40: 1k */}
    <resistor name={"R40"} pcbX={6.67} pcbY={-28.06} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R40 />} schX={-3.549999999999997} schY={-5.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* P15: RZM001P02T2L */}
    <chip name={"P15"} pcbX={-22.905} pcbY={27.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P15 />} noSchematicRepresentation={true}/>

    {/* N57: 2SK3541 */}
    <chip name={"N57"} pcbX={2.23} pcbY={-26.86} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N57 />} noSchematicRepresentation={true}/>

    {/* R7: 1k */}
    <resistor name={"R7"} pcbX={-21.34} pcbY={31.075} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R7 />} schX={-5.949999999999999} schY={7.8999999999999995} schRotation={0} schSheetName={"Overview"}/>

    {/* N33: 2SK3541 */}
    <chip name={"N33"} pcbX={6.57} pcbY={-21.82} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N33 />} noSchematicRepresentation={true}/>

    {/* D1: LED */}
    <chip name={"D1"} pcbX={-44.1475} pcbY={28.2975} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* TP81: PD */}
    <chip name={"TP81"} pcbX={24.97} pcbY={1.95} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PD"} footprint={<Footprint_TP81 />} noSchematicRepresentation={true}/>

    {/* R33: 1k */}
    <resistor name={"R33"} pcbX={-36.42} pcbY={-20.28} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R33 />} schX={-9.549999999999999} schY={-3.0999999999999996} schRotation={-90} schSheetName={"Overview"}/>

    {/* P69: RZM001P02T2L */}
    <chip name={"P69"} pcbX={30.005} pcbY={-23.3025} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P69 />} noSchematicRepresentation={true}/>

    {/* TP125: XOR2B */}
    <chip name={"TP125"} pcbX={-13.47} pcbY={-17.156996} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XOR2B"} footprint={<Footprint_TP125 />} noSchematicRepresentation={true}/>

    {/* P12: BSS84KNC */}
    <chip name={"P12"} pcbX={-39.24} pcbY={12.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P12 />} noSchematicRepresentation={true}/>

    {/* N40: 2SK3541 */}
    <chip name={"N40"} pcbX={-37.75} pcbY={-19.89} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N40 />} noSchematicRepresentation={true}/>

    {/* R24: 1k */}
    <resistor name={"R24"} pcbX={-6.1375} pcbY={4.4825} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R24 />} schX={1.5500000000000007} schY={9.1} schRotation={-90} schSheetName={"Overview"}/>

    {/* P46: RZM001P02T2L */}
    <chip name={"P46"} pcbX={-19.73} pcbY={-21.02} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P46 />} noSchematicRepresentation={true}/>

    {/* N75: 2SK3541 */}
    <chip name={"N75"} pcbX={33.8} pcbY={-25.655} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N75 />} noSchematicRepresentation={true}/>

    {/* R48: 1k */}
    <resistor name={"R48"} pcbX={38.72} pcbY={-25.2} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R48 />} schX={7.050000000000001} schY={1.9000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP96: JOIN3 */}
    <chip name={"TP96"} pcbX={20.22} pcbY={13.69} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN3"} footprint={<Footprint_TP96 />} noSchematicRepresentation={true}/>

    {/* N66: 2SK3541 */}
    <chip name={"N66"} pcbX={37.35} pcbY={-23.145} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N66 />} noSchematicRepresentation={true}/>

    {/* TP3: FFOUT */}
    <chip name={"TP3"} pcbX={-36.78} pcbY={28.985} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FFOUT"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* TP80: PS */}
    <chip name={"TP80"} pcbX={19.84} pcbY={-0.15} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PS"} footprint={<Footprint_TP80 />} noSchematicRepresentation={true}/>

    {/* TP100: GND */}
    <chip name={"TP100"} pcbX={-17.36} pcbY={20.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND"} footprint={<Footprint_TP100 />} noSchematicRepresentation={true}/>

    {/* TP111: GNDRS */}
    <chip name={"TP111"} pcbX={-42.04} pcbY={-22.22} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDRS"} footprint={<Footprint_TP111 />} noSchematicRepresentation={true}/>

    {/* TP13: 3NANDI0 */}
    <chip name={"TP13"} pcbX={-21.21} pcbY={32.82} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDI0"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* N42: 2SK3541 */}
    <chip name={"N42"} pcbX={6.71} pcbY={-26.615} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N42 />} noSchematicRepresentation={true}/>

    {/* N29: NX7002BKMB315 */}
    <chip name={"N29"} pcbX={43.563699} pcbY={2.145} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N29 />} noSchematicRepresentation={true}/>

    {/* P70: RZM001P02T2L */}
    <chip name={"P70"} pcbX={29.955} pcbY={-21.6725} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P70 />} noSchematicRepresentation={true}/>

    {/* N8: 2SK3541 */}
    <chip name={"N8"} pcbX={-42.95} pcbY={18.7625} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N8 />} noSchematicRepresentation={true}/>

    {/* N65: 2SK3541 */}
    <chip name={"N65"} pcbX={37.02} pcbY={-24.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N65 />} noSchematicRepresentation={true}/>

    {/* P38: RZM001P02T2L */}
    <chip name={"P38"} pcbX={-36.34} pcbY={-16.89} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P38 />} noSchematicRepresentation={true}/>

    {/* TP126: XOR2O */}
    <chip name={"TP126"} pcbX={-13.12} pcbY={-7.565} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XOR2O"} footprint={<Footprint_TP126 />} noSchematicRepresentation={true}/>

    {/* TP94: JOIN3 */}
    <chip name={"TP94"} pcbX={6.11} pcbY={13.41} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN3"} footprint={<Footprint_TP94 />} noSchematicRepresentation={true}/>

    {/* N77: 2SK3541 */}
    <chip name={"N77"} pcbX={35.55} pcbY={-25.885} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N77 />} noSchematicRepresentation={true}/>

    {/* R32: 1k */}
    <resistor name={"R32"} pcbX={-38.17} pcbY={-16.98} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R32 />} schX={-7.85} schY={-2.700000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* N36: 2SK3541 */}
    <chip name={"N36"} pcbX={-41.765} pcbY={-19.91} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N36 />} noSchematicRepresentation={true}/>

    {/* TP67: PG */}
    <chip name={"TP67"} pcbX={38.56} pcbY={26.91} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PG"} footprint={<Footprint_TP67 />} noSchematicRepresentation={true}/>

    {/* D16: LED */}
    <chip name={"D16"} pcbX={-26.5} pcbY={-25.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D16 />} noSchematicRepresentation={true}/>

    {/* P25: RZM001P02T2L */}
    <chip name={"P25"} pcbX={-4.735} pcbY={28.4375} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P25 />} noSchematicRepresentation={true}/>

    {/* TP98: GND */}
    <chip name={"TP98"} pcbX={-20.95} pcbY={20.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND"} footprint={<Footprint_TP98 />} noSchematicRepresentation={true}/>

    {/* D14: LED */}
    <chip name={"D14"} pcbX={-46.32} pcbY={-12.97} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* P17: BSS84KNC */}
    <chip name={"P17"} pcbX={-22.06} pcbY={13.425} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P17 />} noSchematicRepresentation={true}/>

    {/* P40: RZM001P02T2L */}
    <chip name={"P40"} pcbX={-42.19} pcbY={-15.31} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P40 />} noSchematicRepresentation={true}/>

    {/* TP55: JOIN0 */}
    <chip name={"TP55"} pcbX={17.07} pcbY={25.21} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN0"} footprint={<Footprint_TP55 />} noSchematicRepresentation={true}/>

    {/* N68: 2SK3541 */}
    <chip name={"N68"} pcbX={31.84} pcbY={-23.685} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N68 />} noSchematicRepresentation={true}/>

    {/* P47: RZM001P02T2L */}
    <chip name={"P47"} pcbX={-18.22} pcbY={-21.02} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P47 />} noSchematicRepresentation={true}/>

    {/* TP48: NG */}
    <chip name={"TP48"} pcbX={27.795} pcbY={16.16} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NG"} footprint={<Footprint_TP48 />} noSchematicRepresentation={true}/>

    {/* R19: 1k */}
    <resistor name={"R19"} pcbX={-39.9175} pcbY={2.82} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R19 />} schX={-0.04999999999999716} schY={0.8000000000000007} schRotation={-90} schSheetName={"Overview"}/>

    {/* N73: 2SK3541 */}
    <chip name={"N73"} pcbX={36.32} pcbY={-26.98} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N73 />} noSchematicRepresentation={true}/>

    {/* TP14: 3NANDI1 */}
    <chip name={"TP14"} pcbX={-25.63} pcbY={32.61} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDI1"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* TP26: 2NOROUT */}
    <chip name={"TP26"} pcbX={-11.5075} pcbY={13.2425} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"2NOROUT"} footprint={<Footprint_TP26 />} noSchematicRepresentation={true}/>

    {/* N7: 2SK3541 */}
    <chip name={"N7"} pcbX={-36.93} pcbY={18.7275} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N7 />} noSchematicRepresentation={true}/>

    {/* TP66: JOIN1 */}
    <chip name={"TP66"} pcbX={2.71} pcbY={32.44} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN1"} footprint={<Footprint_TP66 />} noSchematicRepresentation={true}/>

    {/* N1: 2SK3541 */}
    <chip name={"N1"} pcbX={-41.45} pcbY={28.32} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N1 />} noSchematicRepresentation={true}/>

    {/* TP9: GNDRO */}
    <chip name={"TP9"} pcbX={-44.32} pcbY={9.24} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDRO"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* P60: RZM001P02T2L */}
    <chip name={"P60"} pcbX={-13.9} pcbY={-13.175} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P60 />} noSchematicRepresentation={true}/>

    {/* TP58: JOIN0 */}
    <chip name={"TP58"} pcbX={9.96} pcbY={25.26} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN0"} footprint={<Footprint_TP58 />} noSchematicRepresentation={true}/>

    {/* R43: 1k */}
    <resistor name={"R43"} pcbX={4.17} pcbY={-28.74} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R43 />} schX={-2.1499999999999986} schY={-9.4} schRotation={0} schSheetName={"Overview"}/>

    {/* TP110: RSCK */}
    <chip name={"TP110"} pcbX={-45.02} pcbY={-18.97} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"RSCK"} footprint={<Footprint_TP110 />} noSchematicRepresentation={true}/>

    {/* TP132: FACO */}
    <chip name={"TP132"} pcbX={30.2} pcbY={-30.14} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FACO"} footprint={<Footprint_TP132 />} noSchematicRepresentation={true}/>

    {/* TP24: 2NOR1 */}
    <chip name={"TP24"} pcbX={-5.6275} pcbY={15.7225} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"2NOR1"} footprint={<Footprint_TP24 />} noSchematicRepresentation={true}/>

    {/* D21: LED */}
    <chip name={"D21"} pcbX={35.09} pcbY={-18.67} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D21 />} noSchematicRepresentation={true}/>

    {/* N43: 2SK3541 */}
    <chip name={"N43"} pcbX={-20.8} pcbY={-24.47} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N43 />} noSchematicRepresentation={true}/>

    {/* R17: 1k */}
    <resistor name={"R17"} pcbX={-44.96} pcbY={0.62} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R17 />} schX={-1.4499999999999993} schY={1.5999999999999996} schRotation={90} schSheetName={"Overview"}/>

    {/* TP19: 3NANDI0 */}
    <chip name={"TP19"} pcbX={-27.76} pcbY={15.09} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDI0"} footprint={<Footprint_TP19 />} noSchematicRepresentation={true}/>

    {/* N62: 2SK3541 */}
    <chip name={"N62"} pcbX={-13.6} pcbY={-9.975} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N62 />} noSchematicRepresentation={true}/>

    {/* P23: RZM001P02T2L */}
    <chip name={"P23"} pcbX={-8.26} pcbY={26.6075} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P23 />} noSchematicRepresentation={true}/>

    {/* TP31: XM2 */}
    <chip name={"TP31"} pcbX={-35.9775} pcbY={1.86} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XM2"} footprint={<Footprint_TP31 />} noSchematicRepresentation={true}/>

    {/* N50: 2SK3541 */}
    <chip name={"N50"} pcbX={-19.06} pcbY={-26.21} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N50 />} noSchematicRepresentation={true}/>

    {/* TP5: VCCFF */}
    <chip name={"TP5"} pcbX={-44.21} pcbY={26.095} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCFF"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* TP16: VCC3NAND */}
    <chip name={"TP16"} pcbX={-21.39} pcbY={24.07} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCC3NAND"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* R52: 1k */}
    <resistor name={"R52"} pcbX={33.25} pcbY={-18.67} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R52 />} schX={8.55} schY={-2.9000000000000004} schRotation={0} schSheetName={"Overview"}/>

    {/* R28: 1k */}
    <resistor name={"R28"} pcbX={-18.84} pcbY={0.77} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R28 />} schX={10.350000000000001} schY={7.199999999999999} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP37: XOROUT */}
    <chip name={"TP37"} pcbX={-4.07} pcbY={30.8675} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XOROUT"} footprint={<Footprint_TP37 />} noSchematicRepresentation={true}/>

    {/* TP12: 3NANDOUT */}
    <chip name={"TP12"} pcbX={-24.3} pcbY={24.14} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDOUT"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* N49: 2SK3541 */}
    <chip name={"N49"} pcbX={-16.925} pcbY={-26.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N49 />} noSchematicRepresentation={true}/>

    {/* P26: RZM001P02T2L */}
    <chip name={"P26"} pcbX={29.355} pcbY={24.97} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P26 />} noSchematicRepresentation={true}/>

    {/* P72: RZM001P02T2L */}
    <chip name={"P72"} pcbX={30.13} pcbY={-20.2425} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P72 />} noSchematicRepresentation={true}/>

    {/* R18: 1k */}
    <resistor name={"R18"} pcbX={-42.17} pcbY={0.58} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R18 />} schX={-1.4499999999999993} schY={-0.5999999999999996} schRotation={90} schSheetName={"Overview"}/>

    {/* TP73: PG */}
    <chip name={"TP73"} pcbX={7.3975} pcbY={4.685} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PG"} footprint={<Footprint_TP73 />} noSchematicRepresentation={true}/>

    {/* P32: RZM001P02T2L */}
    <chip name={"P32"} pcbX={1.26} pcbY={-21.79} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P32 />} noSchematicRepresentation={true}/>

    {/* P51: RZM001P02T2L */}
    <chip name={"P51"} pcbX={-17.55} pcbY={-22.72} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P51 />} noSchematicRepresentation={true}/>

    {/* R47: 1k */}
    <resistor name={"R47"} pcbX={-17.19} pcbY={-13.175} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R47 />} schX={7.650000000000002} schY={-4.799999999999999} schRotation={180} schSheetName={"Overview"}/>

    {/* TP2: BOR */}
    <chip name={"TP2"} pcbX={-39.14} pcbY={32.225} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"BOR"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* TP105: JKNQ */}
    <chip name={"TP105"} pcbX={-24.71} pcbY={-26.95} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JKNQ"} footprint={<Footprint_TP105 />} noSchematicRepresentation={true}/>

    {/* R15: 1k */}
    <resistor name={"R15"} pcbX={-4.475} pcbY={11.8625} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R15 />} schX={-0.5499999999999989} schY={5.8} schRotation={0} schSheetName={"Overview"}/>

    {/* TP116: GNDJK */}
    <chip name={"TP116"} pcbX={-31.57} pcbY={-26.66} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDJK"} footprint={<Footprint_TP116 />} noSchematicRepresentation={true}/>

    {/* R14: 1k */}
    <resistor name={"R14"} pcbX={-7.465} pcbY={10.4925} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R14 />} schX={1.9500000000000028} schY={6.1000000000000005} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP90: JOIN2 */}
    <chip name={"TP90"} pcbX={20.12} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN2"} footprint={<Footprint_TP90 />} noSchematicRepresentation={true}/>

    {/* P41: RZM001P02T2L */}
    <chip name={"P41"} pcbX={6.345} pcbY={-20.28} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P41 />} noSchematicRepresentation={true}/>

    {/* N2: 2SK3541 */}
    <chip name={"N2"} pcbX={-41.85} pcbY={30.07} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N2 />} noSchematicRepresentation={true}/>

    {/* P30: RZM001P02T2L */}
    <chip name={"P30"} pcbX={0.87} pcbY={-18.52} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P30 />} noSchematicRepresentation={true}/>

    {/* R41: 1k */}
    <resistor name={"R41"} pcbX={5.25} pcbY={-26.8} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R41 />} schX={-2.8499999999999996} schY={-5.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* P54: RZM001P02T2L */}
    <chip name={"P54"} pcbX={7.97} pcbY={-19.07} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P54 />} noSchematicRepresentation={true}/>

    {/* N12: NX7002BKMB315 */}
    <chip name={"N12"} pcbX={-39.24} pcbY={11.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N12 />} noSchematicRepresentation={true}/>

    {/* TP53: R */}
    <chip name={"TP53"} pcbX={-22.36} pcbY={4.32} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"R"} footprint={<Footprint_TP53 />} noSchematicRepresentation={true}/>

    {/* N47: 2SK3541 */}
    <chip name={"N47"} pcbX={-20.78} pcbY={-26.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N47 />} noSchematicRepresentation={true}/>

    {/* TP72: NS */}
    <chip name={"TP72"} pcbX={40.275} pcbY={11.21} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NS"} footprint={<Footprint_TP72 />} noSchematicRepresentation={true}/>

    {/* N48: 2SK3541 */}
    <chip name={"N48"} pcbX={-16.92} pcbY={-24.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N48 />} noSchematicRepresentation={true}/>

    {/* R45: 1k */}
    <resistor name={"R45"} pcbX={-9.97} pcbY={-11.515} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R45 />} schX={12.350000000000001} schY={-6.799999999999999} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP33: XMINN */}
    <chip name={"TP33"} pcbX={-38.3975} pcbY={-1.05} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XMINN"} footprint={<Footprint_TP33 />} noSchematicRepresentation={true}/>

    {/* P48: RZM001P02T2L */}
    <chip name={"P48"} pcbX={-16.71} pcbY={-21.01} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P48 />} noSchematicRepresentation={true}/>

    {/* TP74: PS */}
    <chip name={"TP74"} pcbX={7.2675} pcbY={0.855} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PS"} footprint={<Footprint_TP74 />} noSchematicRepresentation={true}/>

    {/* P63: RZM001P02T2L */}
    <chip name={"P63"} pcbX={-12.29} pcbY={-14.795} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P63 />} noSchematicRepresentation={true}/>

    {/* TP106: RSNQ */}
    <chip name={"TP106"} pcbX={-45.78} pcbY={-15.45} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"RSNQ"} footprint={<Footprint_TP106 />} noSchematicRepresentation={true}/>

    {/* N56: 2SK3541 */}
    <chip name={"N56"} pcbX={8.465} pcbY={-26.59} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N56 />} noSchematicRepresentation={true}/>

    {/* D17: LED */}
    <chip name={"D17"} pcbX={3.11} pcbY={-28.73} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D17 />} noSchematicRepresentation={true}/>

    {/* TP108: RSR */}
    <chip name={"TP108"} pcbX={-39.73} pcbY={-12.81} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"RSR"} footprint={<Footprint_TP108 />} noSchematicRepresentation={true}/>

    {/* TP79: PG */}
    <chip name={"TP79"} pcbX={19.89} pcbY={3.68} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PG"} footprint={<Footprint_TP79 />} noSchematicRepresentation={true}/>

    {/* P7: RZM001P02T2L */}
    <chip name={"P7"} pcbX={-36.92} pcbY={20.51} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P7 />} noSchematicRepresentation={true}/>

    {/* TP27: VCC2NOR */}
    <chip name={"TP27"} pcbX={-10.5175} pcbY={16.0225} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCC2NOR"} footprint={<Footprint_TP27 />} noSchematicRepresentation={true}/>

    {/* TP77: ND */}
    <chip name={"TP77"} pcbX={34.58} pcbY={3.405} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"ND"} footprint={<Footprint_TP77 />} noSchematicRepresentation={true}/>

    {/* TP68: PS */}
    <chip name={"TP68"} pcbX={38.88} pcbY={23.02} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PS"} footprint={<Footprint_TP68 />} noSchematicRepresentation={true}/>

    {/* R10: 1k */}
    <resistor name={"R10"} pcbX={-20.9} pcbY={11.85} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R10 />} schX={-3.849999999999998} schY={1.8000000000000007} schRotation={-90} schSheetName={"Overview"}/>

    {/* N71: 2SK3541 */}
    <chip name={"N71"} pcbX={35.45} pcbY={-24.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N71 />} noSchematicRepresentation={true}/>

    {/* TP83: ND */}
    <chip name={"TP83"} pcbX={45.953699} pcbY={2.09} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"ND"} footprint={<Footprint_TP83 />} noSchematicRepresentation={true}/>

    {/* R39: 1k */}
    <resistor name={"R39"} pcbX={-16.87} pcbY={-27.74} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R39 />} schX={-9.749999999999998} schY={-9.1} schRotation={-90} schSheetName={"Overview"}/>

    {/* N21: 2SK3541 */}
    <chip name={"N21"} pcbX={-7.485} pcbY={12.05} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N21 />} noSchematicRepresentation={true}/>

    {/* R27: 1k */}
    <resistor name={"R27"} pcbX={-13.550001} pcbY={0.75} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R27 />} schX={9.650000000000002} schY={7.199999999999999} schRotation={-90} schSheetName={"Overview"}/>

    {/* N55: 2SK3541 */}
    <chip name={"N55"} pcbX={0.43} pcbY={-23.49} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N55 />} noSchematicRepresentation={true}/>

    {/* R30: 1k */}
    <resistor name={"R30"} pcbX={-24.92} pcbY={-25.06} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R30 />} schX={-13.649999999999999} schY={-7.4} schRotation={-90} schSheetName={"Overview"}/>

    {/* N14: 2SK3541 */}
    <chip name={"N14"} pcbX={-21.175} pcbY={29.725} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N14 />} noSchematicRepresentation={true}/>

    {/* P67: RZM001P02T2L */}
    <chip name={"P67"} pcbX={30.63} pcbY={-24.8325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P67 />} noSchematicRepresentation={true}/>

    {/* TP49: R */}
    <chip name={"TP49"} pcbX={-13.78} pcbY={-1.66} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"R"} footprint={<Footprint_TP49 />} noSchematicRepresentation={true}/>

    {/* P21: RZM001P02T2L */}
    <chip name={"P21"} pcbX={-7.435} pcbY={13.6625} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P21 />} noSchematicRepresentation={true}/>

    {/* P29: BSS84KNC */}
    <chip name={"P29"} pcbX={22.02} pcbY={1.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P29 />} noSchematicRepresentation={true}/>

    {/* TP84: NS */}
    <chip name={"TP84"} pcbX={41.273699} pcbY={-0.01} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NS"} footprint={<Footprint_TP84 />} noSchematicRepresentation={true}/>

    {/* R46: 1k */}
    <resistor name={"R46"} pcbX={-10.43} pcbY={-15.215} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R46 />} schX={7.650000000000002} schY={-7.700000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP97: GND */}
    <chip name={"TP97"} pcbX={30.81} pcbY={32.42} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND"} footprint={<Footprint_TP97 />} noSchematicRepresentation={true}/>

    {/* R37: 1k */}
    <resistor name={"R37"} pcbX={-23.975} pcbY={-22.128327} pcbRotation={120} resistance={"1kohm"} footprint={<Footprint_R37 />} schX={-12.849999999999998} schY={-8.1} schRotation={-90} schSheetName={"Overview"}/>

    {/* R6: 1k */}
    <resistor name={"R6"} pcbX={-20.53} pcbY={26.25} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R6 />} schX={-1.6499999999999986} schY={7.8} schRotation={-90} schSheetName={"Overview"}/>

    {/* P44: RZM001P02T2L */}
    <chip name={"P44"} pcbX={-22} pcbY={-22.63} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P44 />} noSchematicRepresentation={true}/>

    {/* TP104: JKQ */}
    <chip name={"TP104"} pcbX={-19.23} pcbY={-28.57} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JKQ"} footprint={<Footprint_TP104 />} noSchematicRepresentation={true}/>

    {/* P77: RZM001P02T2L */}
    <chip name={"P77"} pcbX={35.77} pcbY={-19.91} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P77 />} noSchematicRepresentation={true}/>

    {/* P27: RZM001P02T2L */}
    <chip name={"P27"} pcbX={41.685} pcbY={24.96} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P27 />} noSchematicRepresentation={true}/>

    {/* TP102: GND */}
    <chip name={"TP102"} pcbX={-13.77} pcbY={20.3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND"} footprint={<Footprint_TP102 />} noSchematicRepresentation={true}/>

    {/* R21: 1k */}
    <resistor name={"R21"} pcbX={-10.16} pcbY={25.5275} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R21 />} schX={4.650000000000002} schY={1.4000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* N24: 2SK3541 */}
    <chip name={"N24"} pcbX={-6.5} pcbY={26.8675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N24 />} noSchematicRepresentation={true}/>

    {/* R26: 1k */}
    <resistor name={"R26"} pcbX={1.3725} pcbY={4.9425} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R26 />} schX={2.9499999999999993} schY={9.1} schRotation={-90} schSheetName={"Overview"}/>

    {/* R22: 1k */}
    <resistor name={"R22"} pcbX={-10.25} pcbY={26.5075} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R22 />} schX={1.9500000000000028} schY={-0.9000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* N11: NX7002BKMB315 */}
    <chip name={"N11"} pcbX={-40.96} pcbY={11.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N11 />} noSchematicRepresentation={true}/>

    {/* N22: 2SK3541 */}
    <chip name={"N22"} pcbX={-8.4} pcbY={28.6175} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N22 />} noSchematicRepresentation={true}/>

    {/* N45: 2SK3541 */}
    <chip name={"N45"} pcbX={-22.43} pcbY={-24.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N45 />} noSchematicRepresentation={true}/>

    {/* N25: 2SK3541 */}
    <chip name={"N25"} pcbX={-4.725} pcbY={26.8975} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N25 />} noSchematicRepresentation={true}/>

    {/* N15: 2SK3541 */}
    <chip name={"N15"} pcbX={-22.935} pcbY={29.305} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N15 />} noSchematicRepresentation={true}/>

    {/* R42: 1k */}
    <resistor name={"R42"} pcbX={-0.66} pcbY={-22.08} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R42 />} schX={-2.2499999999999982} schY={-5.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* N34: 2SK3541 */}
    <chip name={"N34"} pcbX={6.355} pcbY={-24.93} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N34 />} noSchematicRepresentation={true}/>

    {/* P61: RZM001P02T2L */}
    <chip name={"P61"} pcbX={-16.16} pcbY={-11.085} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P61 />} noSchematicRepresentation={true}/>

    {/* TP130: FAB */}
    <chip name={"TP130"} pcbX={33.3} pcbY={-29.56} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FAB"} footprint={<Footprint_TP130 />} noSchematicRepresentation={true}/>

    {/* TP42: LED2 */}
    <chip name={"TP42"} pcbX={1.2225} pcbY={-0.3575} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"LED2"} footprint={<Footprint_TP42 />} noSchematicRepresentation={true}/>

    {/* R44: 1k */}
    <resistor name={"R44"} pcbX={10.74} pcbY={-25.64} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R44 />} schX={-2.049999999999999} schY={-9.999999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* P10: BSS84KNC */}
    <chip name={"P10"} pcbX={-42.65} pcbY={12.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P10 />} noSchematicRepresentation={true}/>

    {/* P74: RZM001P02T2L */}
    <chip name={"P74"} pcbX={33.98} pcbY={-20.0125} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P74 />} noSchematicRepresentation={true}/>

    {/* R35: 1k */}
    <resistor name={"R35"} pcbX={-40.02} pcbY={-20.06} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R35 />} schX={-11.649999999999999} schY={-3.9000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* P1: RZM001P02T2L */}
    <chip name={"P1"} pcbX={-42.95} pcbY={28.32} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P1 />} noSchematicRepresentation={true}/>

    {/* R12: 1k */}
    <resistor name={"R12"} pcbX={-25.1} pcbY={13.27} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R12 />} schX={-5.649999999999999} schY={0.3000000000000007} schRotation={90} schSheetName={"Overview"}/>

    {/* R4: 1k */}
    <resistor name={"R4"} pcbX={-44.15} pcbY={20.5475} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R4 />} schX={-9.049999999999999} schY={3.8999999999999995} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP54: R */}
    <chip name={"TP54"} pcbX={-22.21} pcbY={-1.43} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"R"} footprint={<Footprint_TP54 />} noSchematicRepresentation={true}/>

    {/* R31: 1k */}
    <resistor name={"R31"} pcbX={-43.56} pcbY={-15.12} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R31 />} schX={-8.649999999999999} schY={-1.8999999999999986} schRotation={-90} schSheetName={"Overview"}/>

    {/* P73: RZM001P02T2L */}
    <chip name={"P73"} pcbX={31.5825} pcbY={-19.7625} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P73 />} noSchematicRepresentation={true}/>

    {/* P9: BSS84KNC */}
    <chip name={"P9"} pcbX={-44.31} pcbY={12.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P9 />} noSchematicRepresentation={true}/>

    {/* TP134: VCCFA */}
    <chip name={"TP134"} pcbX={31.59} pcbY={-15.05} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCFA"} footprint={<Footprint_TP134 />} noSchematicRepresentation={true}/>

    {/* TP62: JOIN1 */}
    <chip name={"TP62"} pcbX={12.95} pcbY={32.41} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN1"} footprint={<Footprint_TP62 />} noSchematicRepresentation={true}/>

    {/* N51: 2SK3541 */}
    <chip name={"N51"} pcbX={2.32} pcbY={-23.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N51 />} noSchematicRepresentation={true}/>

    {/* P22: RZM001P02T2L */}
    <chip name={"P22"} pcbX={-6.72} pcbY={28.8975} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P22 />} noSchematicRepresentation={true}/>

    {/* D13: LED */}
    <chip name={"D13"} pcbX={-25.0225} pcbY={-23.3475} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* P3: RZM001P02T2L */}
    <chip name={"P3"} pcbX={-38.85} pcbY={30.07} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P3 />} noSchematicRepresentation={true}/>

    {/* D7: LED */}
    <chip name={"D7"} pcbX={-38.94} pcbY={2.8225} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* P18: BSS84KNC */}
    <chip name={"P18"} pcbX={-22.06} pcbY={12.425} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P18 />} noSchematicRepresentation={true}/>

    {/* D19: LED */}
    <chip name={"D19"} pcbX={-10.73} pcbY={-9.705} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D19 />} noSchematicRepresentation={true}/>

    {/* N63: 2SK3541 */}
    <chip name={"N63"} pcbX={-10.58} pcbY={-13.275} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N63 />} noSchematicRepresentation={true}/>

    {/* TP29: XORB */}
    <chip name={"TP29"} pcbX={-11.28} pcbY={28.3975} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XORB"} footprint={<Footprint_TP29 />} noSchematicRepresentation={true}/>

    {/* TP51: R */}
    <chip name={"TP51"} pcbX={-18.72} pcbY={4.01} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"R"} footprint={<Footprint_TP51 />} noSchematicRepresentation={true}/>

    {/* P53: RZM001P02T2L */}
    <chip name={"P53"} pcbX={9.615} pcbY={-18.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P53 />} noSchematicRepresentation={true}/>

    {/* N39: 2SK3541 */}
    <chip name={"N39"} pcbX={-36.14} pcbY={-18.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N39 />} noSchematicRepresentation={true}/>

    {/* TP47: NS */}
    <chip name={"TP47"} pcbX={27.815} pcbY={11.63} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NS"} footprint={<Footprint_TP47 />} noSchematicRepresentation={true}/>

    {/* TP41: LED1 */}
    <chip name={"TP41"} pcbX={-2.6075} pcbY={-0.2775} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"LED1"} footprint={<Footprint_TP41 />} noSchematicRepresentation={true}/>

    {/* TP4: ROON */}
    <chip name={"TP4"} pcbX={-37.12} pcbY={16.603806} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"ROON"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* R23: 1k */}
    <resistor name={"R23"} pcbX={-6.34} pcbY={25.2475} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R23 />} schX={5.650000000000002} schY={-2.3000000000000007} schRotation={-90} schSheetName={"Overview"}/>

    {/* P19: BSS84KNC */}
    <chip name={"P19"} pcbX={-22.06} pcbY={11.425} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P19 />} noSchematicRepresentation={true}/>

    {/* P11: BSS84KNC */}
    <chip name={"P11"} pcbX={-40.96} pcbY={12.11} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P11 />} noSchematicRepresentation={true}/>

    {/* R29: 1k */}
    <resistor name={"R29"} pcbX={-22.13} pcbY={1.51} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R29 />} schX={10.950000000000003} schY={7.199999999999999} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP60: JOIN0 */}
    <chip name={"TP60"} pcbX={13.56} pcbY={25.23} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN0"} footprint={<Footprint_TP60 />} noSchematicRepresentation={true}/>

    {/* N31: 2SK3541 */}
    <chip name={"N31"} pcbX={4.82} pcbY={-21.99} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N31 />} noSchematicRepresentation={true}/>

    {/* TP92: JOIN3 */}
    <chip name={"TP92"} pcbX={9.58} pcbY={13.49} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN3"} footprint={<Footprint_TP92 />} noSchematicRepresentation={true}/>

    {/* TP18: 3NANDI1 */}
    <chip name={"TP18"} pcbX={-24.19} pcbY={16.4} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"3NANDI1"} footprint={<Footprint_TP18 />} noSchematicRepresentation={true}/>

    {/* N53: 2SK3541 */}
    <chip name={"N53"} pcbX={2.35} pcbY={-24.94} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N53 />} noSchematicRepresentation={true}/>

    {/* TP101: GND */}
    <chip name={"TP101"} pcbX={37.99} pcbY={32.42} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND"} footprint={<Footprint_TP101 />} noSchematicRepresentation={true}/>

    {/* D6: LED */}
    <chip name={"D6"} pcbX={-8.875} pcbY={13.7625} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* P35: RZM001P02T2L */}
    <chip name={"P35"} pcbX={-37.94} pcbY={-15.58} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P35 />} noSchematicRepresentation={true}/>

    {/* P76: RZM001P02T2L */}
    <chip name={"P76"} pcbX={31.4675} pcbY={-20.8825} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P76 />} noSchematicRepresentation={true}/>

    {/* P65: RZM001P02T2L */}
    <chip name={"P65"} pcbX={32.59} pcbY={-22.0075} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P65 />} noSchematicRepresentation={true}/>

    {/* P28: BSS84KNC */}
    <chip name={"P28"} pcbX={9.78} pcbY={2.185} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS84KNC"} footprint={<Footprint_P28 />} noSchematicRepresentation={true}/>

    {/* P39: RZM001P02T2L */}
    <chip name={"P39"} pcbX={-40.59} pcbY={-15.61} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P39 />} noSchematicRepresentation={true}/>

    {/* D4: LED */}
    <chip name={"D4"} pcbX={-21.53} pcbY={26.245} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* TP56: JOIN0 */}
    <chip name={"TP56"} pcbX={3.06} pcbY={25.2} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN0"} footprint={<Footprint_TP56 />} noSchematicRepresentation={true}/>

    {/* P37: RZM001P02T2L */}
    <chip name={"P37"} pcbX={-42.815} pcbY={-16.81} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P37 />} noSchematicRepresentation={true}/>

    {/* TP128: GNDXOR2 */}
    <chip name={"TP128"} pcbX={-8.2} pcbY={-15.495} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDXOR2"} footprint={<Footprint_TP128 />} noSchematicRepresentation={true}/>

    {/* N44: 2SK3541 */}
    <chip name={"N44"} pcbX={-18.56} pcbY={-24.42} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N44 />} noSchematicRepresentation={true}/>

    {/* TP36: GNDXM */}
    <chip name={"TP36"} pcbX={-41.2375} pcbY={-1.78} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDXM"} footprint={<Footprint_TP36 />} noSchematicRepresentation={true}/>

    {/* R25: 1k */}
    <resistor name={"R25"} pcbX={-2.5675} pcbY={4.7125} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R25 />} schX={2.25} schY={9.1} schRotation={-90} schSheetName={"Overview"}/>

    {/* N35: 2SK3541 */}
    <chip name={"N35"} pcbX={-40.99} pcbY={-18.31} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N35 />} noSchematicRepresentation={true}/>

    {/* N32: 2SK3541 */}
    <chip name={"N32"} pcbX={4.45} pcbY={-24.14} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N32 />} noSchematicRepresentation={true}/>

    {/* TP120: FAB */}
    <chip name={"TP120"} pcbX={-1.66} pcbY={-25.31} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FAB"} footprint={<Footprint_TP120 />} noSchematicRepresentation={true}/>

    {/* N3: 2SK3541 */}
    <chip name={"N3"} pcbX={-38.95} pcbY={28.47} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N3 />} noSchematicRepresentation={true}/>

    {/* TP112: VCCRS */}
    <chip name={"TP112"} pcbX={-44.52} pcbY={-12.86} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCRS"} footprint={<Footprint_TP112 />} noSchematicRepresentation={true}/>

    {/* TP129: FACi */}
    <chip name={"TP129"} pcbX={42.16} pcbY={-22.8} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FACi"} footprint={<Footprint_TP129 />} noSchematicRepresentation={true}/>

    {/* TP45: PD */}
    <chip name={"TP45"} pcbX={32.5} pcbY={24.99} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PD"} footprint={<Footprint_TP45 />} noSchematicRepresentation={true}/>

    {/* R8: 1k */}
    <resistor name={"R8"} pcbX={-23.26} pcbY={31.085} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R8 />} schX={-5.449999999999999} schY={5.699999999999999} schRotation={0} schSheetName={"Overview"}/>

    {/* TP89: JOIN2 */}
    <chip name={"TP89"} pcbX={13.12} pcbY={18.25} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN2"} footprint={<Footprint_TP89 />} noSchematicRepresentation={true}/>

    {/* P59: RZM001P02T2L */}
    <chip name={"P59"} pcbX={-12.185} pcbY={-13.235} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P59 />} noSchematicRepresentation={true}/>

    {/* TP57: JOIN0 */}
    <chip name={"TP57"} pcbX={6.35} pcbY={25.23} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN0"} footprint={<Footprint_TP57 />} noSchematicRepresentation={true}/>

    {/* TP17: GND3NAND */}
    <chip name={"TP17"} pcbX={-26.84} pcbY={29.72} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GND3NAND"} footprint={<Footprint_TP17 />} noSchematicRepresentation={true}/>

    {/* TP82: NG */}
    <chip name={"TP82"} pcbX={40.923699} pcbY={4.055} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NG"} footprint={<Footprint_TP82 />} noSchematicRepresentation={true}/>

    {/* D5: LED */}
    <chip name={"D5"} pcbX={-20.9025} pcbY={13.6625} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* TP76: NG */}
    <chip name={"TP76"} pcbX={29.64} pcbY={5.285} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NG"} footprint={<Footprint_TP76 />} noSchematicRepresentation={true}/>

    {/* N67: 2SK3541 */}
    <chip name={"N67"} pcbX={30.2225} pcbY={-26.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N67 />} noSchematicRepresentation={true}/>

    {/* P4: RZM001P02T2L */}
    <chip name={"P4"} pcbX={-41.45} pcbY={20.51} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P4 />} noSchematicRepresentation={true}/>

    {/* P42: RZM001P02T2L */}
    <chip name={"P42"} pcbX={8.295} pcbY={-23.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P42 />} noSchematicRepresentation={true}/>

    {/* TP32: XMINP */}
    <chip name={"TP32"} pcbX={-44.4575} pcbY={-1.31} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XMINP"} footprint={<Footprint_TP32 />} noSchematicRepresentation={true}/>

    {/* TP78: NS */}
    <chip name={"TP78"} pcbX={29.64} pcbY={0.885} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"NS"} footprint={<Footprint_TP78 />} noSchematicRepresentation={true}/>

    {/* TP113: JKK */}
    <chip name={"TP113"} pcbX={-25.18} pcbY={-19.72} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JKK"} footprint={<Footprint_TP113 />} noSchematicRepresentation={true}/>

    {/* P34: RZM001P02T2L */}
    <chip name={"P34"} pcbX={0.99} pcbY={-20.17} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P34 />} noSchematicRepresentation={true}/>

    {/* R20: 1k */}
    <resistor name={"R20"} pcbX={-39.3875} pcbY={0.85} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R20 />} schX={-0.04999999999999716} schY={-0.40000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* N37: 2SK3541 */}
    <chip name={"N37"} pcbX={-42.815} pcbY={-18.31} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N37 />} noSchematicRepresentation={true}/>

    {/* N9: NX7002BKMB315 */}
    <chip name={"N9"} pcbX={-44.31} pcbY={11.105} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"NX7002BKMB315"} footprint={<Footprint_N9 />} noSchematicRepresentation={true}/>

    {/* TP124: XOR2A */}
    <chip name={"TP124"} pcbX={-18.904405} pcbY={-14.035} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"XOR2A"} footprint={<Footprint_TP124 />} noSchematicRepresentation={true}/>

    {/* D15: LED */}
    <chip name={"D15"} pcbX={-39.2575} pcbY={-15.6325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D15 />} noSchematicRepresentation={true}/>

    {/* N30: 2SK3541 */}
    <chip name={"N30"} pcbX={4.54} pcbY={-20.11} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N30 />} noSchematicRepresentation={true}/>

    {/* R38: 1k */}
    <resistor name={"R38"} pcbX={-15.03} pcbY={-24.04} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R38 />} schX={-7.249999999999998} schY={-8.1} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP75: PD */}
    <chip name={"TP75"} pcbX={13.0375} pcbY={2.105} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"PD"} footprint={<Footprint_TP75 />} noSchematicRepresentation={true}/>

    {/* R3: 1k */}
    <resistor name={"R3"} pcbX={-43.98} pcbY={30.09} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R3 />} schX={-13.349999999999998} schY={7.8} schRotation={-90} schSheetName={"Overview"}/>

    {/* TP121: FAA */}
    <chip name={"TP121"} pcbX={-1.6} pcbY={-19.68} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"FAA"} footprint={<Footprint_TP121 />} noSchematicRepresentation={true}/>

    {/* TP123: GNDFA */}
    <chip name={"TP123"} pcbX={-1.76} pcbY={-29.33} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"GNDFA"} footprint={<Footprint_TP123 />} noSchematicRepresentation={true}/>

    {/* N72: 2SK3541 */}
    <chip name={"N72"} pcbX={33.55} pcbY={-24.6025} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N72 />} noSchematicRepresentation={true}/>

    {/* TP95: JOIN3 */}
    <chip name={"TP95"} pcbX={13.17} pcbY={13.49} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"JOIN3"} footprint={<Footprint_TP95 />} noSchematicRepresentation={true}/>

    {/* TP38: VCCXOR */}
    <chip name={"TP38"} pcbX={-11.2} pcbY={32.78} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"VCCXOR"} footprint={<Footprint_TP38 />} noSchematicRepresentation={true}/>

    {/* N5: 2SK3541 */}
    <chip name={"N5"} pcbX={-39.95} pcbY={18.7475} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N5 />} noSchematicRepresentation={true}/>

    {/* D9: LED */}
    <chip name={"D9"} pcbX={-37.99} pcbY={2.8425} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* N59: 2SK3541 */}
    <chip name={"N59"} pcbX={-15.62} pcbY={-13.185} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"2SK3541"} footprint={<Footprint_N59 />} noSchematicRepresentation={true}/>

    {/* P50: RZM001P02T2L */}
    <chip name={"P50"} pcbX={-20.39} pcbY={-22.73} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"RZM001P02T2L"} footprint={<Footprint_P50 />} noSchematicRepresentation={true}/>

    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".TP39 > .pin1", ".TP6 > .pin1", ".N10 > .pin2", ".R36 > .pin2", ".R34 > .pin2", ".R51 > .pin2", ".TP28 > .pin1", ".N19 > .pin2", ".N20 > .pin2", ".N76 > .pin2", ".N6 > .pin2", ".TP99 > .pin1", ".N4 > .pin2", ".N13 > .pin2", ".N64 > .pin2", ".N41 > .pin2", ".R50 > .pin2", ".N54 > .pin2", ".N69 > .pin2", ".N16 > .pin2", ".TP7 > .pin1", ".N60 > .pin2", ".TP23 > .pin1", ".R49 > .pin2", ".N38 > .pin2", ".N61 > .pin2", ".TP135 > .pin1", ".R16 > .pin1", ".R40 > .pin2", ".N57 > .pin2", ".R33 > .pin2", ".N40 > .pin2", ".R24 > .pin2", ".N75 > .pin2", ".R48 > .pin2", ".N66 > .pin2", ".TP100 > .pin1", ".TP111 > .pin1", ".N42 > .pin2", ".N8 > .pin2", ".N77 > .pin2", ".N36 > .pin2", ".TP98 > .pin1", ".D14 > .pin1", ".N73 > .pin2", ".N7 > .pin2", ".N1 > .pin2", ".TP9 > .pin1", ".R43 > .pin2", ".N43 > .pin2", ".N62 > .pin2", ".N50 > .pin2", ".R52 > .pin2", ".R18 > .pin1", ".R47 > .pin2", ".R15 > .pin1", ".TP116 > .pin1", ".N2 > .pin2", ".R41 > .pin2", ".N12 > .pin2", ".N47 > .pin2", ".R45 > .pin2", ".N56 > .pin2", ".R39 > .pin2", ".N21 > .pin2", ".N55 > .pin2", ".R30 > .pin2", ".R46 > .pin2", ".TP97 > .pin1", ".R37 > .pin2", ".TP102 > .pin1", ".R26 > .pin2", ".R22 > .pin2", ".N11 > .pin2", ".N22 > .pin2", ".R42 > .pin2", ".N34 > .pin2", ".R44 > .pin2", ".R35 > .pin2", ".N63 > .pin2", ".R23 > .pin2", ".N53 > .pin2", ".TP101 > .pin1", ".TP128 > .pin1", ".N44 > .pin2", ".TP36 > .pin1", ".R25 > .pin2", ".N32 > .pin2", ".N3 > .pin2", ".TP17 > .pin1", ".N67 > .pin2", ".R20 > .pin2", ".N37 > .pin2", ".N9 > .pin2", ".D15 > .pin1", ".R38 > .pin2", ".TP123 > .pin1", ".N72 > .pin2", ".N5 > .pin2"]}/>
    {/* KiCad net: Net-(N39-G) */}
    <KiCadNet name={"Net__N39_G_"} connectsTo={[".P36 > .pin1", ".TP109 > .pin1", ".R33 > .pin1", ".N39 > .pin1"]}/>
    {/* KiCad net: VDD */}
    <KiCadNet name={"VDD"} connectsTo={[".P36 > .pin2", ".P14 > .pin2", ".D2 > .pin2", ".TP10 > .pin1", ".P64 > .pin2", ".R13 > .pin1", ".P13 > .pin2", ".TP22 > .pin1", ".P8 > .pin2", ".P49 > .pin2", ".TP127 > .pin1", ".P58 > .pin2", ".R11 > .pin1", ".P57 > .pin2", ".D3 > .pin2", ".TP35 > .pin1", ".P45 > .pin2", ".D8 > .pin2", ".R9 > .pin1", ".TP115 > .pin1", ".P56 > .pin2", ".P68 > .pin2", ".P5 > .pin2", ".P6 > .pin2", ".P55 > .pin2", ".P2 > .pin2", ".P16 > .pin2", ".TP122 > .pin1", ".P33 > .pin2", ".TP8 > .pin1", ".P62 > .pin2", ".P15 > .pin2", ".R7 > .pin1", ".D1 > .pin2", ".P12 > .pin2", ".P46 > .pin2", ".P70 > .pin2", ".P17 > .pin2", ".P40 > .pin2", ".P47 > .pin2", ".R17 > .pin2", ".TP5 > .pin1", ".TP16 > .pin1", ".P72 > .pin2", ".P30 > .pin2", ".P54 > .pin2", ".P48 > .pin2", ".P63 > .pin2", ".P7 > .pin2", ".TP27 > .pin1", ".P67 > .pin2", ".P21 > .pin2", ".P44 > .pin2", ".P77 > .pin2", ".P10 > .pin2", ".P1 > .pin2", ".R12 > .pin1", ".P9 > .pin2", ".TP134 > .pin1", ".P22 > .pin2", ".P3 > .pin2", ".D7 > .pin2", ".P18 > .pin2", ".P53 > .pin2", ".P19 > .pin2", ".P11 > .pin2", ".D6 > .pin2", ".P35 > .pin2", ".P76 > .pin2", ".P39 > .pin2", ".D4 > .pin2", ".TP112 > .pin1", ".R8 > .pin1", ".P59 > .pin2", ".D5 > .pin2", ".P4 > .pin2", ".TP38 > .pin1"]}/>
    {/* KiCad net: Net-(P35-D) */}
    <KiCadNet name={"Net__P35_D_"} connectsTo={[".P36 > .pin3", ".P38 > .pin2", ".P35 > .pin3"]}/>
    {/* KiCad net: Net-(TP85-Pad1) */}
    <KiCadNet name={"Net__TP85_Pad1_"} connectsTo={[".TP87 > .pin1", ".TP88 > .pin1", ".TP85 > .pin1", ".TP86 > .pin1", ".TP90 > .pin1", ".TP89 > .pin1"]}/>
    {/* KiCad net: Net-(N58-G) */}
    <KiCadNet name={"Net__N58_G_"} connectsTo={[".N58 > .pin1", ".P58 > .pin1", ".P62 > .pin3", ".N62 > .pin3"]}/>
    {/* KiCad net: Net-(N58-S) */}
    <KiCadNet name={"Net__N58_S_"} connectsTo={[".N58 > .pin2", ".N60 > .pin3"]}/>
    {/* KiCad net: Net-(D19-A) */}
    <KiCadNet name={"Net__D19_A_"} connectsTo={[".N58 > .pin3", ".TP126 > .pin1", ".P60 > .pin3", ".P61 > .pin3", ".D19 > .pin2", ".N59 > .pin3"]}/>
    {/* KiCad net: Net-(TP91-Pad1) */}
    <KiCadNet name={"Net__TP91_Pad1_"} connectsTo={[".TP93 > .pin1", ".TP91 > .pin1", ".TP96 > .pin1", ".TP94 > .pin1", ".TP92 > .pin1", ".TP95 > .pin1"]}/>
    {/* KiCad net: Net-(N10-G) */}
    <KiCadNet name={"Net__N10_G_"} connectsTo={[".N10 > .pin1", ".P10 > .pin1", ".P9 > .pin3", ".N9 > .pin3"]}/>
    {/* KiCad net: Net-(N10-D) */}
    <KiCadNet name={"Net__N10_D_"} connectsTo={[".N10 > .pin3", ".N11 > .pin1", ".P10 > .pin3", ".P11 > .pin1"]}/>
    {/* KiCad net: Net-(N14-G) */}
    <KiCadNet name={"Net__N14_G_"} connectsTo={[".P14 > .pin1", ".R7 > .pin2", ".TP13 > .pin1", ".N14 > .pin1"]}/>
    {/* KiCad net: Net-(N14-D) */}
    <KiCadNet name={"Net__N14_D_"} connectsTo={[".P14 > .pin3", ".P16 > .pin3", ".P15 > .pin3", ".TP12 > .pin1", ".N14 > .pin3", ".R6 > .pin2"]}/>
    {/* KiCad net: Net-(D2-K) */}
    <KiCadNet name={"Net__D2_K_"} connectsTo={[".D2 > .pin1", ".R4 > .pin1"]}/>
    {/* KiCad net: FAAs */}
    <KiCadNet name={"FAAs"} connectsTo={[".N70 > .pin1", ".P64 > .pin1", ".TP131 > .pin1", ".R50 > .pin1", ".P66 > .pin1", ".N66 > .pin1", ".N68 > .pin1", ".N73 > .pin1", ".P72 > .pin1", ".P73 > .pin1"]}/>
    {/* KiCad net: Net-(N70-S) */}
    <KiCadNet name={"Net__N70_S_"} connectsTo={[".N70 > .pin2", ".N71 > .pin3"]}/>
    {/* KiCad net: Net-(N70-D) */}
    <KiCadNet name={"Net__N70_D_"} connectsTo={[".N70 > .pin3", ".P71 > .pin3", ".N76 > .pin1", ".N74 > .pin3", ".P75 > .pin3", ".P77 > .pin1"]}/>
    {/* KiCad net: Net-(D16-K) */}
    <KiCadNet name={"Net__D16_K_"} connectsTo={[".R36 > .pin1", ".D16 > .pin1"]}/>
    {/* KiCad net: Net-(N35-G) */}
    <KiCadNet name={"Net__N35_G_"} connectsTo={[".R34 > .pin1", ".TP108 > .pin1", ".P39 > .pin1", ".N35 > .pin1"]}/>
    {/* KiCad net: Net-(TP55-Pad1) */}
    <KiCadNet name={"Net__TP55_Pad1_"} connectsTo={[".TP59 > .pin1", ".TP55 > .pin1", ".TP58 > .pin1", ".TP60 > .pin1", ".TP56 > .pin1", ".TP57 > .pin1"]}/>
    {/* KiCad net: Net-(N12-D) */}
    <KiCadNet name={"Net__N12_D_"} connectsTo={[".TP11 > .pin1", ".P13 > .pin1", ".N13 > .pin1", ".P12 > .pin3", ".N12 > .pin3"]}/>
    {/* KiCad net: Net-(P64-D) */}
    <KiCadNet name={"Net__P64_D_"} connectsTo={[".P64 > .pin3", ".P68 > .pin3", ".P69 > .pin2", ".P65 > .pin2"]}/>
    {/* KiCad net: Net-(TP61-Pad1) */}
    <KiCadNet name={"Net__TP61_Pad1_"} connectsTo={[".TP63 > .pin1", ".TP65 > .pin1", ".TP64 > .pin1", ".TP61 > .pin1", ".TP66 > .pin1", ".TP62 > .pin1"]}/>
    {/* KiCad net: Net-(N19-G) */}
    <KiCadNet name={"Net__N19_G_"} connectsTo={[".R13 > .pin2", ".N19 > .pin1", ".TP20 > .pin1", ".P19 > .pin1"]}/>
    {/* KiCad net: Net-(N13-D) */}
    <KiCadNet name={"Net__N13_D_"} connectsTo={[".P13 > .pin3", ".N13 > .pin3", ".R5 > .pin2", ".P9 > .pin1", ".N9 > .pin1"]}/>
    {/* KiCad net: Net-(N21-G) */}
    <KiCadNet name={"Net__N21_G_"} connectsTo={[".TP25 > .pin1", ".R16 > .pin2", ".N21 > .pin1", ".P21 > .pin1"]}/>
    {/* KiCad net: Net-(D18-K) */}
    <KiCadNet name={"Net__D18_K_"} connectsTo={[".D18 > .pin1", ".R44 > .pin1"]}/>
    {/* KiCad net: SOUT */}
    <KiCadNet name={"SOUT"} connectsTo={[".D18 > .pin2", ".TP118 > .pin1", ".P56 > .pin3", ".N56 > .pin3"]}/>
    {/* KiCad net: Net-(N20-G) */}
    <KiCadNet name={"Net__N20_G_"} connectsTo={[".P20 > .pin1", ".N20 > .pin1", ".TP24 > .pin1", ".R15 > .pin2"]}/>
    {/* KiCad net: Net-(P20-S) */}
    <KiCadNet name={"Net__P20_S_"} connectsTo={[".P20 > .pin2", ".P21 > .pin3"]}/>
    {/* KiCad net: Net-(N20-D) */}
    <KiCadNet name={"Net__N20_D_"} connectsTo={[".P20 > .pin3", ".N20 > .pin3", ".TP26 > .pin1", ".R14 > .pin2", ".N21 > .pin3"]}/>
    {/* KiCad net: Net-(D10-K) */}
    <KiCadNet name={"Net__D10_K_"} connectsTo={[".D10 > .pin1", ".R24 > .pin1"]}/>
    {/* KiCad net: Net-(D10-A) */}
    <KiCadNet name={"Net__D10_A_"} connectsTo={[".D10 > .pin2", ".TP40 > .pin1"]}/>
    {/* KiCad net: Net-(N17-G) */}
    <KiCadNet name={"Net__N17_G_"} connectsTo={[".N17 > .pin1", ".R11 > .pin2", ".P17 > .pin1", ".TP19 > .pin1"]}/>
    {/* KiCad net: Net-(N17-S) */}
    <KiCadNet name={"Net__N17_S_"} connectsTo={[".N17 > .pin2", ".N18 > .pin3"]}/>
    {/* KiCad net: Net-(N17-D) */}
    <KiCadNet name={"Net__N17_D_"} connectsTo={[".N17 > .pin3", ".TP21 > .pin1", ".P17 > .pin3", ".R10 > .pin2", ".P18 > .pin3", ".P19 > .pin3"]}/>
    {/* KiCad net: Net-(N7-D) */}
    <KiCadNet name={"Net__N7_D_"} connectsTo={[".P8 > .pin1", ".N8 > .pin1", ".N7 > .pin3", ".P7 > .pin3", ".TP4 > .pin1"]}/>
    {/* KiCad net: Net-(N4-G) */}
    <KiCadNet name={"Net__N4_G_"} connectsTo={[".P8 > .pin3", ".N4 > .pin1", ".N8 > .pin3", ".R4 > .pin2", ".P4 > .pin1"]}/>
    {/* KiCad net: B0S */}
    <KiCadNet name={"B0S"} connectsTo={[".TP1 > .pin1", ".R2 > .pin2", ".N1 > .pin1", ".P1 > .pin1"]}/>
    {/* KiCad net: Net-(D20-K) */}
    <KiCadNet name={"Net__D20_K_"} connectsTo={[".R51 > .pin1", ".D20 > .pin1"]}/>
    {/* KiCad net: Net-(N48-G) */}
    <KiCadNet name={"Net__N48_G_"} connectsTo={[".TP114 > .pin1", ".P49 > .pin1", ".N48 > .pin1", ".R38 > .pin1"]}/>
    {/* KiCad net: Net-(P47-D) */}
    <KiCadNet name={"Net__P47_D_"} connectsTo={[".P49 > .pin3", ".P47 > .pin3", ".P51 > .pin2", ".P48 > .pin3"]}/>
    {/* KiCad net: Xs */}
    <KiCadNet name={"Xs"} connectsTo={[".P71 > .pin1", ".N74 > .pin1", ".P66 > .pin3", ".P69 > .pin3", ".N65 > .pin3", ".N68 > .pin3", ".P67 > .pin1", ".N67 > .pin1"]}/>
    {/* KiCad net: Net-(P70-D) */}
    <KiCadNet name={"Net__P70_D_"} connectsTo={[".P71 > .pin2", ".P70 > .pin3", ".P72 > .pin3", ".P73 > .pin2", ".P76 > .pin3"]}/>
    {/* KiCad net: FAA */}
    <KiCadNet name={"FAA"} connectsTo={[".P52 > .pin1", ".N52 > .pin1", ".N41 > .pin1", ".P32 > .pin1", ".P30 > .pin1", ".N55 > .pin1", ".R42 > .pin1", ".P53 > .pin1", ".N30 > .pin1", ".TP121 > .pin1"]}/>
    {/* KiCad net: Net-(P41-S) */}
    <KiCadNet name={"Net__P41_S_"} connectsTo={[".P52 > .pin2", ".P55 > .pin3", ".P41 > .pin2", ".P54 > .pin3", ".P53 > .pin3"]}/>
    {/* KiCad net: Net-(P43-S) */}
    <KiCadNet name={"Net__P43_S_"} connectsTo={[".P52 > .pin3", ".P43 > .pin2"]}/>
    {/* KiCad net: Net-(N23-G) */}
    <KiCadNet name={"Net__N23_G_"} connectsTo={[".N23 > .pin1", ".R18 > .pin2", ".TP33 > .pin1"]}/>
    {/* KiCad net: Net-(D9-A) */}
    <KiCadNet name={"Net__D9_A_"} connectsTo={[".N23 > .pin2", ".P24 > .pin2", ".R19 > .pin2", ".TP31 > .pin1", ".D9 > .pin2"]}/>
    {/* KiCad net: Net-(N23-D) */}
    <KiCadNet name={"Net__N23_D_"} connectsTo={[".N23 > .pin3", ".P24 > .pin3", ".TP30 > .pin1"]}/>
    {/* KiCad net: Net-(N27-G) */}
    <KiCadNet name={"Net__N27_G_"} connectsTo={[".TP70 > .pin1", ".N27 > .pin1"]}/>
    {/* KiCad net: Net-(N26-G) */}
    <KiCadNet name={"Net__N26_G_"} connectsTo={[".N26 > .pin1", ".TP48 > .pin1"]}/>
    {/* KiCad net: Net-(N26-S) */}
    <KiCadNet name={"Net__N26_S_"} connectsTo={[".N26 > .pin2", ".TP47 > .pin1"]}/>
    {/* KiCad net: Net-(N26-D) */}
    <KiCadNet name={"Net__N26_D_"} connectsTo={[".N26 > .pin3", ".TP46 > .pin1"]}/>
    {/* KiCad net: Net-(N18-S) */}
    <KiCadNet name={"Net__N18_S_"} connectsTo={[".N19 > .pin3", ".N18 > .pin2"]}/>
    {/* KiCad net: COUTs */}
    <KiCadNet name={"COUTs"} connectsTo={[".D20 > .pin2", ".TP132 > .pin1", ".P67 > .pin3", ".N67 > .pin3"]}/>
    {/* KiCad net: Net-(N52-S) */}
    <KiCadNet name={"Net__N52_S_"} connectsTo={[".N52 > .pin2", ".N53 > .pin3"]}/>
    {/* KiCad net: X */}
    <KiCadNet name={"X"} connectsTo={[".N52 > .pin3", ".P57 > .pin1", ".N57 > .pin1", ".N33 > .pin1", ".P32 > .pin3", ".P41 > .pin1", ".N51 > .pin3", ".P34 > .pin3"]}/>
    {/* KiCad net: Net-(N35-D) */}
    <KiCadNet name={"Net__N35_D_"} connectsTo={[".TP107 > .pin1", ".N38 > .pin1", ".P38 > .pin1", ".TP106 > .pin1", ".R31 > .pin2", ".P37 > .pin3", ".N35 > .pin3", ".N37 > .pin3"]}/>
    {/* KiCad net: Net-(P58-D) */}
    <KiCadNet name={"Net__P58_D_"} connectsTo={[".P58 > .pin3", ".P60 > .pin2", ".P61 > .pin2", ".P59 > .pin3"]}/>
    {/* KiCad net: SOUTs */}
    <KiCadNet name={"SOUTs"} connectsTo={[".N76 > .pin3", ".TP133 > .pin1", ".D21 > .pin2", ".P77 > .pin3"]}/>
    {/* KiCad net: Net-(D11-K) */}
    <KiCadNet name={"Net__D11_K_"} connectsTo={[".D11 > .pin1", ".R25 > .pin1"]}/>
    {/* KiCad net: Net-(D11-A) */}
    <KiCadNet name={"Net__D11_A_"} connectsTo={[".D11 > .pin2", ".TP41 > .pin1"]}/>
    {/* KiCad net: Net-(N5-D) */}
    <KiCadNet name={"Net__N5_D_"} connectsTo={[".N6 > .pin1", ".P5 > .pin3", ".P6 > .pin1", ".N5 > .pin3"]}/>
    {/* KiCad net: Net-(N6-D) */}
    <KiCadNet name={"Net__N6_D_"} connectsTo={[".N6 > .pin3", ".P6 > .pin3", ".N7 > .pin1", ".P7 > .pin1"]}/>
    {/* KiCad net: Net-(N73-D) */}
    <KiCadNet name={"Net__N73_D_"} connectsTo={[".N74 > .pin2", ".N75 > .pin3", ".N77 > .pin3", ".N73 > .pin3"]}/>
    {/* KiCad net: Net-(N28-G) */}
    <KiCadNet name={"Net__N28_G_"} connectsTo={[".N28 > .pin1", ".TP76 > .pin1"]}/>
    {/* KiCad net: Net-(N28-S) */}
    <KiCadNet name={"Net__N28_S_"} connectsTo={[".N28 > .pin2", ".TP78 > .pin1"]}/>
    {/* KiCad net: Net-(N28-D) */}
    <KiCadNet name={"Net__N28_D_"} connectsTo={[".N28 > .pin3", ".TP77 > .pin1"]}/>
    {/* KiCad net: Net-(N4-D) */}
    <KiCadNet name={"Net__N4_D_"} connectsTo={[".N4 > .pin3", ".P5 > .pin1", ".P4 > .pin3", ".N5 > .pin1"]}/>
    {/* KiCad net: COUT */}
    <KiCadNet name={"COUT"} connectsTo={[".P57 > .pin3", ".TP117 > .pin1", ".N57 > .pin3", ".D17 > .pin2"]}/>
    {/* KiCad net: Net-(N16-G) */}
    <KiCadNet name={"Net__N16_G_"} connectsTo={[".TP15 > .pin1", ".R9 > .pin2", ".N16 > .pin1", ".P16 > .pin1"]}/>
    {/* KiCad net: Net-(D3-K) */}
    <KiCadNet name={"Net__D3_K_"} connectsTo={[".D3 > .pin1", ".R5 > .pin1"]}/>
    {/* KiCad net: Net-(D13-A) */}
    <KiCadNet name={"Net__D13_A_"} connectsTo={[".P45 > .pin1", ".N43 > .pin3", ".P51 > .pin1", ".TP105 > .pin1", ".N47 > .pin1", ".N45 > .pin3", ".D13 > .pin2", ".N44 > .pin1", ".P50 > .pin3"]}/>
    {/* KiCad net: Net-(P44-D) */}
    <KiCadNet name={"Net__P44_D_"} connectsTo={[".P45 > .pin3", ".P46 > .pin3", ".P44 > .pin3", ".P50 > .pin2"]}/>
    {/* KiCad net: FABs */}
    <KiCadNet name={"FABs"} connectsTo={[".N64 > .pin1", ".P68 > .pin1", ".N69 > .pin1", ".P75 > .pin1", ".R49 > .pin1", ".N75 > .pin1", ".N71 > .pin1", ".TP130 > .pin1", ".P76 > .pin1", ".P65 > .pin1"]}/>
    {/* KiCad net: Net-(N64-D) */}
    <KiCadNet name={"Net__N64_D_"} connectsTo={[".N64 > .pin3", ".N66 > .pin3", ".N65 > .pin2"]}/>
    {/* KiCad net: Net-(N18-G) */}
    <KiCadNet name={"Net__N18_G_"} connectsTo={[".N18 > .pin1", ".R12 > .pin2", ".P18 > .pin1", ".TP18 > .pin1"]}/>
    {/* KiCad net: Net-(D8-K) */}
    <KiCadNet name={"Net__D8_K_"} connectsTo={[".D8 > .pin1", ".R21 > .pin1"]}/>
    {/* KiCad net: Net-(N33-S) */}
    <KiCadNet name={"Net__N33_S_"} connectsTo={[".N41 > .pin3", ".N33 > .pin2", ".N42 > .pin3", ".N34 > .pin3"]}/>
    {/* KiCad net: Net-(P27-D) */}
    <KiCadNet name={"Net__P27_D_"} connectsTo={[".TP69 > .pin1", ".P27 > .pin3"]}/>
    {/* KiCad net: FAB */}
    <KiCadNet name={"FAB"} connectsTo={[".N54 > .pin1", ".P55 > .pin1", ".P33 > .pin1", ".P31 > .pin1", ".R41 > .pin1", ".N34 > .pin1", ".N31 > .pin1", ".N53 > .pin1", ".TP120 > .pin1", ".P42 > .pin1"]}/>
    {/* KiCad net: Net-(N51-S) */}
    <KiCadNet name={"Net__N51_S_"} connectsTo={[".N54 > .pin3", ".N55 > .pin3", ".N51 > .pin2"]}/>
    {/* KiCad net: Net-(N30-D) */}
    <KiCadNet name={"Net__N30_D_"} connectsTo={[".P56 > .pin1", ".N33 > .pin3", ".P41 > .pin3", ".N56 > .pin1", ".P42 > .pin3", ".N30 > .pin3"]}/>
    {/* KiCad net: Net-(N68-S) */}
    <KiCadNet name={"Net__N68_S_"} connectsTo={[".N69 > .pin3", ".N68 > .pin2"]}/>
    {/* KiCad net: Net-(P26-G) */}
    <KiCadNet name={"Net__P26_G_"} connectsTo={[".TP44 > .pin1", ".P26 > .pin1"]}/>
    {/* KiCad net: B0NQ */}
    <KiCadNet name={"B0NQ"} connectsTo={[".R1 > .pin1", ".N1 > .pin3", ".P1 > .pin3", ".R3 > .pin2"]}/>
    {/* KiCad net: B0R */}
    <KiCadNet name={"B0R"} connectsTo={[".R1 > .pin2", ".P2 > .pin1", ".TP2 > .pin1", ".N2 > .pin1"]}/>
    {/* KiCad net: Net-(N15-S) */}
    <KiCadNet name={"Net__N15_S_"} connectsTo={[".N16 > .pin3", ".N15 > .pin2"]}/>
    {/* KiCad net: FACi */}
    <KiCadNet name={"FACi"} connectsTo={[".TP119 > .pin1", ".P43 > .pin1", ".R40 > .pin1", ".N42 > .pin1", ".P54 > .pin1", ".N51 > .pin1", ".N32 > .pin1", ".P34 > .pin1"]}/>
    {/* KiCad net: Net-(P74-D) */}
    <KiCadNet name={"Net__P74_D_"} connectsTo={[".P75 > .pin2", ".P74 > .pin3"]}/>
    {/* KiCad net: Net-(P65-D) */}
    <KiCadNet name={"Net__P65_D_"} connectsTo={[".P66 > .pin2", ".P65 > .pin3"]}/>
    {/* KiCad net: Net-(P24-G) */}
    <KiCadNet name={"Net__P24_G_"} connectsTo={[".P24 > .pin1", ".R17 > .pin1", ".TP32 > .pin1"]}/>
    {/* KiCad net: Net-(P42-S) */}
    <KiCadNet name={"Net__P42_S_"} connectsTo={[".P43 > .pin3", ".P42 > .pin2"]}/>
    {/* KiCad net: Net-(N60-G) */}
    <KiCadNet name={"Net__N60_G_"} connectsTo={[".N60 > .pin1", ".P63 > .pin3", ".N63 > .pin3", ".P59 > .pin1"]}/>
    {/* KiCad net: Net-(N46-G) */}
    <KiCadNet name={"Net__N46_G_"} connectsTo={[".TP103 > .pin1", ".N46 > .pin1", ".P46 > .pin1", ".P47 > .pin1", ".N49 > .pin1", ".R39 > .pin1"]}/>
    {/* KiCad net: B0Q */}
    <KiCadNet name={"B0Q"} connectsTo={[".P2 > .pin3", ".R2 > .pin1", ".N2 > .pin3", ".P3 > .pin1", ".N3 > .pin1"]}/>
    {/* KiCad net: Net-(D12-K) */}
    <KiCadNet name={"Net__D12_K_"} connectsTo={[".D12 > .pin1", ".R26 > .pin1"]}/>
    {/* KiCad net: Net-(D12-A) */}
    <KiCadNet name={"Net__D12_A_"} connectsTo={[".D12 > .pin2", ".TP42 > .pin1"]}/>
    {/* KiCad net: Net-(N37-G) */}
    <KiCadNet name={"Net__N37_G_"} connectsTo={[".N38 > .pin3", ".P38 > .pin3", ".R32 > .pin2", ".N39 > .pin3", ".P37 > .pin1", ".N37 > .pin1"]}/>
    {/* KiCad net: Net-(N61-G) */}
    <KiCadNet name={"Net__N61_G_"} connectsTo={[".N61 > .pin1", ".TP125 > .pin1", ".P60 > .pin1", ".P63 > .pin1", ".R46 > .pin1", ".N63 > .pin1"]}/>
    {/* KiCad net: Net-(N59-S) */}
    <KiCadNet name={"Net__N59_S_"} connectsTo={[".N61 > .pin3", ".N59 > .pin2"]}/>
    {/* KiCad net: Net-(R27-Pad2) */}
    <KiCadNet name={"Net__R27_Pad2_"} connectsTo={[".TP50 > .pin1", ".R27 > .pin2"]}/>
    {/* KiCad net: Net-(P30-D) */}
    <KiCadNet name={"Net__P30_D_"} connectsTo={[".P33 > .pin3", ".P31 > .pin2", ".P30 > .pin3", ".P34 > .pin2"]}/>
    {/* KiCad net: Net-(N27-S) */}
    <KiCadNet name={"Net__N27_S_"} connectsTo={[".N27 > .pin2", ".TP72 > .pin1"]}/>
    {/* KiCad net: Net-(N27-D) */}
    <KiCadNet name={"Net__N27_D_"} connectsTo={[".N27 > .pin3", ".TP71 > .pin1"]}/>
    {/* KiCad net: Net-(R28-Pad2) */}
    <KiCadNet name={"Net__R28_Pad2_"} connectsTo={[".TP52 > .pin1", ".R28 > .pin2"]}/>
    {/* KiCad net: Net-(N46-S) */}
    <KiCadNet name={"Net__N46_S_"} connectsTo={[".N46 > .pin2", ".N47 > .pin3"]}/>
    {/* KiCad net: Net-(N45-S) */}
    <KiCadNet name={"Net__N45_S_"} connectsTo={[".N46 > .pin3", ".N45 > .pin2"]}/>
    {/* KiCad net: Net-(P31-D) */}
    <KiCadNet name={"Net__P31_D_"} connectsTo={[".P31 > .pin3", ".P32 > .pin2"]}/>
    {/* KiCad net: Net-(N24-G) */}
    <KiCadNet name={"Net__N24_G_"} connectsTo={[".TP34 > .pin1", ".P25 > .pin2", ".P23 > .pin1", ".N24 > .pin1", ".N25 > .pin2", ".R23 > .pin1"]}/>
    {/* KiCad net: Net-(P26-S) */}
    <KiCadNet name={"Net__P26_S_"} connectsTo={[".TP43 > .pin1", ".P26 > .pin2"]}/>
    {/* KiCad net: Net-(N59-G) */}
    <KiCadNet name={"Net__N59_G_"} connectsTo={[".P62 > .pin1", ".N62 > .pin1", ".R47 > .pin1", ".P61 > .pin1", ".TP124 > .pin1", ".N59 > .pin1"]}/>
    {/* KiCad net: Net-(N15-G) */}
    <KiCadNet name={"Net__N15_G_"} connectsTo={[".P15 > .pin1", ".TP14 > .pin1", ".N15 > .pin1", ".R8 > .pin2"]}/>
    {/* KiCad net: Net-(D1-K) */}
    <KiCadNet name={"Net__D1_K_"} connectsTo={[".D1 > .pin1", ".R3 > .pin1"]}/>
    {/* KiCad net: Net-(P29-D) */}
    <KiCadNet name={"Net__P29_D_"} connectsTo={[".TP81 > .pin1", ".P29 > .pin3"]}/>
    {/* KiCad net: FACis */}
    <KiCadNet name={"FACis"} connectsTo={[".P69 > .pin1", ".R48 > .pin1", ".P70 > .pin1", ".N65 > .pin1", ".N77 > .pin1", ".P74 > .pin1", ".TP129 > .pin1", ".N72 > .pin1"]}/>
    {/* KiCad net: Net-(N11-D) */}
    <KiCadNet name={"Net__N11_D_"} connectsTo={[".P12 > .pin1", ".N12 > .pin1", ".N11 > .pin3", ".P11 > .pin3"]}/>
    {/* KiCad net: Net-(N36-G) */}
    <KiCadNet name={"Net__N36_G_"} connectsTo={[".N40 > .pin1", ".N36 > .pin1", ".P40 > .pin1", ".TP110 > .pin1", ".R35 > .pin1", ".P35 > .pin1"]}/>
    {/* KiCad net: Net-(N39-S) */}
    <KiCadNet name={"Net__N39_S_"} connectsTo={[".N40 > .pin3", ".N39 > .pin2"]}/>
    {/* KiCad net: Net-(N3-D) */}
    <KiCadNet name={"Net__N3_D_"} connectsTo={[".TP3 > .pin1", ".P3 > .pin3", ".N3 > .pin3"]}/>
    {/* KiCad net: Net-(P29-S) */}
    <KiCadNet name={"Net__P29_S_"} connectsTo={[".TP80 > .pin1", ".P29 > .pin2"]}/>
    {/* KiCad net: Net-(N29-G) */}
    <KiCadNet name={"Net__N29_G_"} connectsTo={[".N29 > .pin1", ".TP82 > .pin1"]}/>
    {/* KiCad net: Net-(N29-S) */}
    <KiCadNet name={"Net__N29_S_"} connectsTo={[".N29 > .pin2", ".TP84 > .pin1"]}/>
    {/* KiCad net: Net-(N29-D) */}
    <KiCadNet name={"Net__N29_D_"} connectsTo={[".N29 > .pin3", ".TP83 > .pin1"]}/>
    {/* KiCad net: Net-(D15-A) */}
    <KiCadNet name={"Net__D15_A_"} connectsTo={[".R32 > .pin1", ".D15 > .pin2"]}/>
    {/* KiCad net: Net-(N35-S) */}
    <KiCadNet name={"Net__N35_S_"} connectsTo={[".N36 > .pin3", ".N35 > .pin2"]}/>
    {/* KiCad net: Net-(P27-G) */}
    <KiCadNet name={"Net__P27_G_"} connectsTo={[".TP67 > .pin1", ".P27 > .pin1"]}/>
    {/* KiCad net: Net-(D16-A) */}
    <KiCadNet name={"Net__D16_A_"} connectsTo={[".D16 > .pin2", ".N43 > .pin1", ".N50 > .pin1", ".P51 > .pin3", ".N48 > .pin3", ".P48 > .pin1", ".TP104 > .pin1", ".N44 > .pin3", ".P50 > .pin1"]}/>
    {/* KiCad net: Net-(N22-G) */}
    <KiCadNet name={"Net__N22_G_"} connectsTo={[".P25 > .pin1", ".P23 > .pin2", ".R22 > .pin1", ".N22 > .pin1", ".P22 > .pin1", ".TP29 > .pin1"]}/>
    {/* KiCad net: Net-(N24-D) */}
    <KiCadNet name={"Net__N24_D_"} connectsTo={[".P25 > .pin3", ".P23 > .pin3", ".TP37 > .pin1", ".R21 > .pin2", ".N24 > .pin3", ".N25 > .pin3"]}/>
    {/* KiCad net: Net-(D14-A) */}
    <KiCadNet name={"Net__D14_A_"} connectsTo={[".D14 > .pin2", ".R31 > .pin1"]}/>
    {/* KiCad net: Net-(P37-S) */}
    <KiCadNet name={"Net__P37_S_"} connectsTo={[".P40 > .pin3", ".P39 > .pin3", ".P37 > .pin2"]}/>
    {/* KiCad net: Net-(D7-K) */}
    <KiCadNet name={"Net__D7_K_"} connectsTo={[".R19 > .pin1", ".D7 > .pin1"]}/>
    {/* KiCad net: Net-(D17-K) */}
    <KiCadNet name={"Net__D17_K_"} connectsTo={[".R43 > .pin1", ".D17 > .pin1"]}/>
    {/* KiCad net: Net-(D21-K) */}
    <KiCadNet name={"Net__D21_K_"} connectsTo={[".D21 > .pin1", ".R52 > .pin1"]}/>
    {/* KiCad net: Net-(N49-S) */}
    <KiCadNet name={"Net__N49_S_"} connectsTo={[".N50 > .pin3", ".N49 > .pin2"]}/>
    {/* KiCad net: Net-(R28-Pad1) */}
    <KiCadNet name={"Net__R28_Pad1_"} connectsTo={[".R28 > .pin1", ".TP51 > .pin1"]}/>
    {/* KiCad net: Net-(N48-S) */}
    <KiCadNet name={"Net__N48_S_"} connectsTo={[".N49 > .pin3", ".N48 > .pin2"]}/>
    {/* KiCad net: Net-(P26-D) */}
    <KiCadNet name={"Net__P26_D_"} connectsTo={[".P26 > .pin3", ".TP45 > .pin1"]}/>
    {/* KiCad net: Net-(P28-G) */}
    <KiCadNet name={"Net__P28_G_"} connectsTo={[".TP73 > .pin1", ".P28 > .pin1"]}/>
    {/* KiCad net: Net-(D6-K) */}
    <KiCadNet name={"Net__D6_K_"} connectsTo={[".R14 > .pin1", ".D6 > .pin1"]}/>
    {/* KiCad net: Net-(R29-Pad1) */}
    <KiCadNet name={"Net__R29_Pad1_"} connectsTo={[".TP53 > .pin1", ".R29 > .pin1"]}/>
    {/* KiCad net: Net-(D19-K) */}
    <KiCadNet name={"Net__D19_K_"} connectsTo={[".R45 > .pin1", ".D19 > .pin1"]}/>
    {/* KiCad net: Net-(P28-S) */}
    <KiCadNet name={"Net__P28_S_"} connectsTo={[".TP74 > .pin1", ".P28 > .pin2"]}/>
    {/* KiCad net: Net-(P29-G) */}
    <KiCadNet name={"Net__P29_G_"} connectsTo={[".TP79 > .pin1", ".P29 > .pin1"]}/>
    {/* KiCad net: Net-(P27-S) */}
    <KiCadNet name={"Net__P27_S_"} connectsTo={[".TP68 > .pin1", ".P27 > .pin2"]}/>
    {/* KiCad net: Net-(D5-K) */}
    <KiCadNet name={"Net__D5_K_"} connectsTo={[".R10 > .pin1", ".D5 > .pin1"]}/>
    {/* KiCad net: Net-(N71-S) */}
    <KiCadNet name={"Net__N71_S_"} connectsTo={[".N71 > .pin2", ".N72 > .pin3"]}/>
    {/* KiCad net: Net-(R27-Pad1) */}
    <KiCadNet name={"Net__R27_Pad1_"} connectsTo={[".R27 > .pin1", ".TP49 > .pin1"]}/>
    {/* KiCad net: Net-(D13-K) */}
    <KiCadNet name={"Net__D13_K_"} connectsTo={[".R30 > .pin1", ".D13 > .pin1"]}/>
    {/* KiCad net: Net-(N14-S) */}
    <KiCadNet name={"Net__N14_S_"} connectsTo={[".N14 > .pin2", ".N15 > .pin3"]}/>
    {/* KiCad net: Net-(N45-G) */}
    <KiCadNet name={"Net__N45_G_"} connectsTo={[".R37 > .pin1", ".P44 > .pin1", ".N45 > .pin1", ".TP113 > .pin1"]}/>
    {/* KiCad net: Net-(D4-K) */}
    <KiCadNet name={"Net__D4_K_"} connectsTo={[".R6 > .pin1", ".D4 > .pin1"]}/>
    {/* KiCad net: Net-(N22-D) */}
    <KiCadNet name={"Net__N22_D_"} connectsTo={[".N24 > .pin2", ".N22 > .pin3", ".N25 > .pin1", ".P22 > .pin3"]}/>
    {/* KiCad net: Net-(P73-D) */}
    <KiCadNet name={"Net__P73_D_"} connectsTo={[".P74 > .pin2", ".P73 > .pin3"]}/>
    {/* KiCad net: Net-(R29-Pad2) */}
    <KiCadNet name={"Net__R29_Pad2_"} connectsTo={[".TP54 > .pin1", ".R29 > .pin2"]}/>
    {/* KiCad net: Net-(N31-S) */}
    <KiCadNet name={"Net__N31_S_"} connectsTo={[".N31 > .pin2", ".N32 > .pin3"]}/>
    {/* KiCad net: Net-(N30-S) */}
    <KiCadNet name={"Net__N30_S_"} connectsTo={[".N31 > .pin3", ".N30 > .pin2"]}/>
    {/* KiCad net: Net-(P28-D) */}
    <KiCadNet name={"Net__P28_D_"} connectsTo={[".P28 > .pin3", ".TP75 > .pin1"]}/>
    {/* KiCad net: Net-(D9-K) */}
    <KiCadNet name={"Net__D9_K_"} connectsTo={[".R20 > .pin1", ".D9 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
