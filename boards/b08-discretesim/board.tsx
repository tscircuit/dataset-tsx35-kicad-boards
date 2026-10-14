import { KiCadSchematic, KiCadNet } from './schematic'
// discretesim test board
// Source: https://github.com/cnlohr/discretesim
// Commit: f7a169ee07b18b6c857d23582474b8ba20185436; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_TP39, Footprint_P36, Footprint_TP87, Footprint_N58, Footprint_TP6, Footprint_TP93, Footprint_N10, Footprint_P14, Footprint_D2, Footprint_TP10, Footprint_N70, Footprint_R36, Footprint_R34, Footprint_TP59, Footprint_TP11, Footprint_TP88, Footprint_P64, Footprint_TP63, Footprint_R13, Footprint_P13, Footprint_TP25, Footprint_D18, Footprint_P20, Footprint_TP22, Footprint_D10, Footprint_N17, Footprint_P8, Footprint_TP85, Footprint_TP1, Footprint_R51, Footprint_TP114, Footprint_P49, Footprint_P71, Footprint_P52, Footprint_TP127, Footprint_N23, Footprint_TP28, Footprint_TP70, Footprint_N26, Footprint_N19, Footprint_D20, Footprint_N20, Footprint_N52, Footprint_TP107, Footprint_TP65, Footprint_P58, Footprint_N76, Footprint_TP109, Footprint_TP131, Footprint_D11, Footprint_N6, Footprint_N74, Footprint_N28, Footprint_R11, Footprint_TP99, Footprint_N4, Footprint_P57, Footprint_TP15, Footprint_TP133, Footprint_N13, Footprint_D3, Footprint_TP35, Footprint_P45, Footprint_N64, Footprint_N18, Footprint_D8, Footprint_R9, Footprint_N41, Footprint_TP69, Footprint_R50, Footprint_TP118, Footprint_TP117, Footprint_N54, Footprint_TP115, Footprint_P56, Footprint_P68, Footprint_TP64, Footprint_N69, Footprint_P5, Footprint_TP44, Footprint_R1, Footprint_N16, Footprint_TP119, Footprint_P75, Footprint_P6, Footprint_TP61, Footprint_TP7, Footprint_P66, Footprint_P24, Footprint_P43, Footprint_N60, Footprint_P55, Footprint_TP30, Footprint_TP103, Footprint_TP86, Footprint_TP21, Footprint_TP23, Footprint_P2, Footprint_D12, Footprint_TP46, Footprint_P16, Footprint_TP122, Footprint_R49, Footprint_N38, Footprint_TP20, Footprint_TP91, Footprint_N61, Footprint_TP40, Footprint_TP50, Footprint_P33, Footprint_R5, Footprint_N27, Footprint_TP71, Footprint_TP135, Footprint_TP52, Footprint_N46, Footprint_R2, Footprint_P31, Footprint_TP34, Footprint_TP8, Footprint_TP43, Footprint_P62, Footprint_R16, Footprint_R40, Footprint_P15, Footprint_N57, Footprint_R7, Footprint_N33, Footprint_D1, Footprint_TP81, Footprint_R33, Footprint_P69, Footprint_TP125, Footprint_P12, Footprint_N40, Footprint_R24, Footprint_P46, Footprint_N75, Footprint_R48, Footprint_TP96, Footprint_N66, Footprint_TP3, Footprint_TP80, Footprint_TP100, Footprint_TP111, Footprint_TP13, Footprint_N42, Footprint_N29, Footprint_P70, Footprint_N8, Footprint_N65, Footprint_P38, Footprint_TP126, Footprint_TP94, Footprint_N77, Footprint_R32, Footprint_N36, Footprint_TP67, Footprint_D16, Footprint_P25, Footprint_TP98, Footprint_D14, Footprint_P17, Footprint_P40, Footprint_TP55, Footprint_N68, Footprint_P47, Footprint_TP48, Footprint_R19, Footprint_N73, Footprint_TP14, Footprint_TP26, Footprint_N7, Footprint_TP66, Footprint_N1, Footprint_TP9, Footprint_P60, Footprint_TP58, Footprint_R43, Footprint_TP110, Footprint_TP132, Footprint_TP24, Footprint_D21, Footprint_N43, Footprint_R17, Footprint_TP19, Footprint_N62, Footprint_P23, Footprint_TP31, Footprint_N50, Footprint_TP5, Footprint_TP16, Footprint_R52, Footprint_R28, Footprint_TP37, Footprint_TP12, Footprint_N49, Footprint_P26, Footprint_P72, Footprint_R18, Footprint_TP73, Footprint_P32, Footprint_P51, Footprint_R47, Footprint_TP2, Footprint_TP105, Footprint_R15, Footprint_TP116, Footprint_R14, Footprint_TP90, Footprint_P41, Footprint_N2, Footprint_P30, Footprint_R41, Footprint_P54, Footprint_N12, Footprint_TP53, Footprint_N47, Footprint_TP72, Footprint_N48, Footprint_R45, Footprint_TP33, Footprint_P48, Footprint_TP74, Footprint_P63, Footprint_TP106, Footprint_N56, Footprint_D17, Footprint_TP108, Footprint_TP79, Footprint_P7, Footprint_TP27, Footprint_TP77, Footprint_TP68, Footprint_R10, Footprint_N71, Footprint_TP83, Footprint_R39, Footprint_N21, Footprint_R27, Footprint_N55, Footprint_R30, Footprint_N14, Footprint_P67, Footprint_TP49, Footprint_P21, Footprint_P29, Footprint_TP84, Footprint_R46, Footprint_TP97, Footprint_R37, Footprint_R6, Footprint_P44, Footprint_TP104, Footprint_P77, Footprint_P27, Footprint_TP102, Footprint_R21, Footprint_N24, Footprint_R26, Footprint_R22, Footprint_N11, Footprint_N22, Footprint_N45, Footprint_N25, Footprint_N15, Footprint_R42, Footprint_N34, Footprint_P61, Footprint_TP130, Footprint_TP42, Footprint_R44, Footprint_P10, Footprint_P74, Footprint_R35, Footprint_P1, Footprint_R12, Footprint_R4, Footprint_TP54, Footprint_R31, Footprint_P73, Footprint_P9, Footprint_TP134, Footprint_TP62, Footprint_N51, Footprint_P22, Footprint_D13, Footprint_P3, Footprint_D7, Footprint_P18, Footprint_D19, Footprint_N63, Footprint_TP29, Footprint_TP51, Footprint_P53, Footprint_N39, Footprint_TP47, Footprint_TP41, Footprint_TP4, Footprint_R23, Footprint_P19, Footprint_P11, Footprint_R29, Footprint_TP60, Footprint_N31, Footprint_TP92, Footprint_TP18, Footprint_N53, Footprint_TP101, Footprint_D6, Footprint_P35, Footprint_P76, Footprint_P65, Footprint_P28, Footprint_P39, Footprint_D4, Footprint_TP56, Footprint_P37, Footprint_TP128, Footprint_N44, Footprint_TP36, Footprint_R25, Footprint_N35, Footprint_N32, Footprint_TP120, Footprint_N3, Footprint_TP112, Footprint_TP129, Footprint_TP45, Footprint_R8, Footprint_TP89, Footprint_P59, Footprint_TP57, Footprint_TP17, Footprint_TP82, Footprint_D5, Footprint_TP76, Footprint_N67, Footprint_P4, Footprint_P42, Footprint_TP32, Footprint_TP78, Footprint_TP113, Footprint_P34, Footprint_R20, Footprint_N37, Footprint_N9, Footprint_TP124, Footprint_D15, Footprint_N30, Footprint_R38, Footprint_TP75, Footprint_R3, Footprint_TP121, Footprint_TP123, Footprint_N72, Footprint_TP95, Footprint_TP38, Footprint_N5, Footprint_D9, Footprint_N59, Footprint_P50 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={99.65999999999825} height={73.5} thickness={1.6} layers={2} outline={[{ "x": 44.36999999999999, "y": 35.750000000000796 }, { "x": -46.63000000000001, "y": 36.750000000000796 }, { "x": -46.87773800622458, "y": 36.7397533883463 }, { "x": -47.123783704334926, "y": 36.70908374178953 }, { "x": -47.36645635439839, "y": 36.6582005649066 }, { "x": -47.60409825779777, "y": 36.5874514410446 }, { "x": -47.835086080982514, "y": 36.497319657977265 }, { "x": -48.05784194447183, "y": 36.3884209065627 }, { "x": -48.2708442013608, "y": 36.2614990749547 }, { "x": -48.4726378317013, "y": 36.11742116709745 }, { "x": -48.66184438175376, "y": 35.95717138021531 }, { "x": -48.83717138021453, "y": 35.78184438175454 }, { "x": -48.99742116709666, "y": 35.592637831702085 }, { "x": -49.14149907495392, "y": 35.39084420136158 }, { "x": -49.268420906561914, "y": 35.17784194447262 }, { "x": -49.377319657976486, "y": 34.95508608098329 }, { "x": -49.46745144104383, "y": 34.72409825779856 }, { "x": -49.53820056490582, "y": 34.48645635439917 }, { "x": -49.589083741788755, "y": 34.24378370433571 }, { "x": -49.61975338834553, "y": 33.99773800622536 }, { "x": -49.630000000000024, "y": 33.750000000000796 }, { "x": -49.83000000000001, "y": -32.36999999999921 }, { "x": -49.81975338834555, "y": -32.6177380062238 }, { "x": -49.789083741788815, "y": -32.86378370433417 }, { "x": -49.73820056490591, "y": -33.106456354397665 }, { "x": -49.66745144104394, "y": -33.344098257797086 }, { "x": -49.57731965797662, "y": -33.57508608098186 }, { "x": -49.468420906562066, "y": -33.7978419444712 }, { "x": -49.34149907495408, "y": -34.010844201360214 }, { "x": -49.19742116709683, "y": -34.21263783170075 }, { "x": -49.037171380214694, "y": -34.401844381753236 }, { "x": -48.861844381753926, "y": -34.577171380214025 }, { "x": -48.67263783170146, "y": -34.7374211670962 }, { "x": -48.47084420136094, "y": -34.88149907495347 }, { "x": -48.25784194447196, "y": -35.0084209065615 }, { "x": -48.03508608098262, "y": -35.11731965797608 }, { "x": -47.80409825779786, "y": -35.20745144104343 }, { "x": -47.566456354398454, "y": -35.27820056490545 }, { "x": -47.32378370433497, "y": -35.32908374178838 }, { "x": -47.07773800622461, "y": -35.359753388345155 }, { "x": -46.83000000000001, "y": -35.36999999999965 }, { "x": 46.829999999999984, "y": -36.749999999999204 }, { "x": 47.07773800622451, "y": -36.739753388344724 }, { "x": 47.3237837043348, "y": -36.709083741787964 }, { "x": 47.5664563543982, "y": -36.65820056490503 }, { "x": 47.80409825779755, "y": -36.58745144104303 }, { "x": 48.035086080982225, "y": -36.49731965797568 }, { "x": 48.25784194447148, "y": -36.38842090656111 }, { "x": 48.47084420136038, "y": -36.26149907495309 }, { "x": 48.67263783170081, "y": -36.11742116709583 }, { "x": 48.86184438175319, "y": -35.957171380213666 }, { "x": 49.03717138021388, "y": -35.78184438175289 }, { "x": 49.197421167095925, "y": -35.592637831700415 }, { "x": 49.34149907495306, "y": -35.3908442013599 }, { "x": 49.46842090656095, "y": -35.17784194447091 }, { "x": 49.57731965797542, "y": -34.9550860809816 }, { "x": 49.667451441042616, "y": -34.724098257796854 }, { "x": 49.73820056490449, "y": -34.48645635439749 }, { "x": 49.78908374178728, "y": -34.24378370433405 }, { "x": 49.8197533883439, "y": -33.99773800622373 }, { "x": 49.829999999998236, "y": -33.749999999999204 }, { "x": 47.36999999999999, "y": 32.750000000000796 }, { "x": 47.35975338834555, "y": 32.99773800622543 }, { "x": 47.329083741788835, "y": 33.24378370433584 }, { "x": 47.27820056490596, "y": 33.48645635439938 }, { "x": 47.207451441044, "y": 33.72409825779884 }, { "x": 47.117319657976694, "y": 33.95508608098366 }, { "x": 47.008420906562165, "y": 34.177841944473066 }, { "x": 46.88149907495418, "y": 34.390844201362114 }, { "x": 46.73742116709694, "y": 34.59263783170271 }, { "x": 46.57717138021481, "y": 34.781844381755256 }, { "x": 46.401844381754046, "y": 34.95717138021611 }, { "x": 46.212637831701585, "y": 35.117421167098335 }, { "x": 46.01084420136107, "y": 35.26149907495568 }, { "x": 45.79784194447208, "y": 35.388420906563766 }, { "x": 45.57508608098273, "y": 35.497319657978416 }, { "x": 45.34409825779795, "y": 35.587451441045836 }, { "x": 45.10645635439853, "y": 35.658200564907915 }, { "x": 44.86378370433502, "y": 35.70908374179092 }, { "x": 44.61773800622463, "y": 35.739753388347765 }, { "x": 44.36999999999999, "y": 35.75000000000232 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* Original KiCad copper zones, clipped to the board, in ascending priority. */}
    <copperpour name="GND_top_0_0" connectsTo="net.GND" layer="top" clearance={0.24} useThermalReliefs coveredWithSolderMask />
    <copperpour name="GND_bottom_0_0" connectsTo="net.GND" layer="bottom" clearance={0.24} useThermalReliefs coveredWithSolderMask />
    <copperpour name="FAB_top_1_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":6.510485,"y":-24.965846},{"x":6.28,"y":-24.919},{"x":6.049515,"y":-24.965846},{"x":6.205,"y":-25.385485},{"x":6.355,"y":-25.385485}]} />
    <copperpour name="VDD_bottom_2_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.524515,"y":11.765},{"x":-39.524515,"y":11.915},{"x":-39.944154,"y":12.070485},{"x":-39.991,"y":11.84},{"x":-39.944154,"y":11.609515}]} />
    <copperpour name="GND_top_3_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":2.060485,"y":-26.844154},{"x":1.905,"y":-26.424515},{"x":1.755,"y":-26.424515},{"x":1.599515,"y":-26.844154},{"x":1.83,"y":-26.891}]} />
    <copperpour name="VDD_bottom_4_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.249,"y":11.84},{"x":-38.295846,"y":12.070485},{"x":-38.715485,"y":11.915},{"x":-38.715485,"y":11.765},{"x":-38.295846,"y":11.609515}]} />
    <copperpour name="VDD_top_5_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.594605,"y":9.909441},{"x":-36.789619,"y":10.040924},{"x":-37.020485,"y":10.085846},{"x":-37.036974,"y":9.638373},{"x":-36.898328,"y":9.581126}]} />
    <copperpour name="GND_bottom_6_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.974143,"y":18.627329},{"x":-41.974893,"y":18.777326},{"x":-42.394154,"y":18.930485},{"x":-42.440999,"y":18.699995},{"x":-42.394154,"y":18.469515}]} />
    <copperpour name="Net__D13_A__top_7_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-19.549441,"y":-25.125395},{"x":-19.679291,"y":-24.929296},{"x":-19.875395,"y":-24.799441},{"x":-20.063168,"y":-25.204743},{"x":-19.957483,"y":-25.311189}]} />
    <copperpour name="GND_bottom_8_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.939001,"y":18.707505},{"x":-40.985846,"y":18.937985},{"x":-41.405857,"y":18.780171},{"x":-41.405107,"y":18.630174},{"x":-40.985846,"y":18.477015}]} />
    <copperpour name="VDD_top_9_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.331787,"y":10.151103},{"x":-36.389872,"y":10.2894},{"x":-36.835846,"y":10.270485},{"x":-36.790921,"y":10.039613},{"x":-36.659441,"y":9.844605}]} />
    <copperpour name="Net__N19_G__bottom_10_0" connectsTo="net.Net__N19_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-25.042162,"y":14.714977},{"x":-24.889515,"y":15.134154},{"x":-25.120006,"y":15.180999},{"x":-25.350485,"y":15.134154},{"x":-25.192158,"y":14.714062}]} />
    <copperpour name="FACi_top_11_0" connectsTo="net.FACi" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":4.250374,"y":-25.210927},{"x":4.445395,"y":-25.079441},{"x":4.145157,"y":-24.750308},{"x":4.00608,"y":-24.806501},{"x":4.019515,"y":-25.255846}]} />
    <copperpour name="GND_bottom_12_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.269001,"y":10.660006},{"x":-38.315846,"y":10.890485},{"x":-38.735935,"y":10.732177},{"x":-38.735026,"y":10.582181},{"x":-38.315846,"y":10.429515}]} />
    <copperpour name="FAA_top_13_0" connectsTo="net.FAA" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":5.665395,"y":-21.530559},{"x":5.470374,"y":-21.399073},{"x":5.239515,"y":-21.354154},{"x":5.226264,"y":-21.803611},{"x":5.365366,"y":-21.85974}]} />
    <copperpour name="GND_bottom_14_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.454065,"y":10.577823},{"x":-39.454974,"y":10.727819},{"x":-39.874154,"y":10.880485},{"x":-39.920999,"y":10.649994},{"x":-39.874154,"y":10.419515}]} />
    <copperpour name="VDD_top_15_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.269001,"y":31.079656},{"x":-22.315846,"y":31.310152},{"x":-22.734637,"y":31.159833},{"x":-22.736303,"y":31.009844},{"x":-22.315846,"y":30.849182}]} />
    <copperpour name="VDD_bottom_16_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.244956,"y":11.772296},{"x":-41.244083,"y":11.922292},{"x":-41.664154,"y":12.080485},{"x":-41.710999,"y":11.850005},{"x":-41.664154,"y":11.619515}]} />
    <copperpour name="GND_top_17_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-5.384408,"y":10.913431},{"x":-5.439414,"y":11.052982},{"x":-5.890846,"y":11.042985},{"x":-5.84593,"y":10.812134},{"x":-5.714441,"y":10.617105}]} />
    <copperpour name="VDD_bottom_18_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.989001,"y":11.839995},{"x":-40.035846,"y":12.070485},{"x":-40.455044,"y":11.917704},{"x":-40.455917,"y":11.767708},{"x":-40.035846,"y":11.609515}]} />
    <copperpour name="Net__N20_D__top_19_0" connectsTo="net.Net__N20_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-5.519605,"y":11.901941},{"x":-5.714601,"y":12.033416},{"x":-5.945485,"y":12.078346},{"x":-5.969798,"y":11.635745},{"x":-5.832298,"y":11.575797}]} />
    <copperpour name="VDD_bottom_20_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.709001,"y":11.850006},{"x":-41.755846,"y":12.080485},{"x":-42.175937,"y":11.92216},{"x":-42.175023,"y":11.772164},{"x":-41.755846,"y":11.619515}]} />
    <copperpour name="GND_top_21_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.03928,"y":6.079307},{"x":-40.909441,"y":6.275395},{"x":-41.323215,"y":6.456997},{"x":-41.427286,"y":6.348973},{"x":-41.235395,"y":5.949441}]} />
    <copperpour name="VDD_bottom_22_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.884063,"y":11.76784},{"x":-42.884977,"y":11.917836},{"x":-43.304154,"y":12.070485},{"x":-43.350999,"y":11.839994},{"x":-43.304154,"y":11.609515}]} />
    <copperpour name="GND_top_23_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.563595,"y":18.991517},{"x":-40.671839,"y":19.09536},{"x":-41.070559,"y":18.902895},{"x":-40.940692,"y":18.706779},{"x":-40.744605,"y":18.576941}]} />
    <copperpour name="GND_bottom_24_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.329626,"y":25.426573},{"x":-7.134605,"y":25.558059},{"x":-7.434964,"y":25.887163},{"x":-7.574026,"y":25.830934},{"x":-7.560485,"y":25.381654}]} />
    <copperpour name="VDD_top_25_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":8.600485,"y":-25.564154},{"x":8.455492,"y":-25.146269},{"x":8.305532,"y":-25.142882},{"x":8.139515,"y":-25.564154},{"x":8.369978,"y":-25.610999}]} />
    <copperpour name="GND_bottom_26_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.015974,"y":27.324066},{"x":-8.029515,"y":27.773346},{"x":-8.260374,"y":27.728427},{"x":-8.455395,"y":27.596941},{"x":-8.155036,"y":27.267837}]} />
    <copperpour name="GND_top_27_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.065299,"y":18.986315},{"x":-42.174169,"y":19.0895},{"x":-42.570559,"y":18.895395},{"x":-42.440687,"y":18.699275},{"x":-42.244605,"y":18.569441}]} />
    <copperpour name="VDD_bottom_28_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.724605,"y":14.479441},{"x":-20.919609,"y":14.61092},{"x":-21.150485,"y":14.655846},{"x":-21.171247,"y":14.21102},{"x":-21.033219,"y":14.152298}]} />
    <copperpour name="GND_top_29_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.526141,"y":18.984945},{"x":-37.635318,"y":19.087806},{"x":-38.030559,"y":18.892895},{"x":-37.900685,"y":18.696773},{"x":-37.704605,"y":18.566941}]} />
    <copperpour name="Net__D13_A__bottom_30_0" connectsTo="net.Net__D13_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-18.009441,"y":-24.435395},{"x":-18.139302,"y":-24.239285},{"x":-18.335395,"y":-24.109441},{"x":-18.518916,"y":-24.520602},{"x":-18.41161,"y":-24.625413}]} />
    <copperpour name="GND_top_31_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.867695,"y":25.334236},{"x":-7.199441,"y":25.622895},{"x":-7.330936,"y":25.427851},{"x":-7.375846,"y":25.197015},{"x":-6.920364,"y":25.193787}]} />
    <copperpour name="FAA_bottom_32_0" connectsTo="net.FAA" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":5.927337,"y":-21.285276},{"x":5.868162,"y":-21.147442},{"x":5.424154,"y":-21.169515},{"x":5.469082,"y":-21.400394},{"x":5.600559,"y":-21.595395}]} />
    <copperpour name="FAA_top_33_0" connectsTo="net.FAA" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":9.604617,"y":-20.314435},{"x":9.542199,"y":-20.178039},{"x":9.104154,"y":-20.209515},{"x":9.149091,"y":-20.440416},{"x":9.280559,"y":-20.635395}]} />
    <copperpour name="Net__N35_D__bottom_34_0" connectsTo="net.Net__N35_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.749284,"y":-17.220697},{"x":-42.619441,"y":-17.024605},{"x":-43.031024,"y":-16.841393},{"x":-43.135716,"y":-16.948816},{"x":-42.945395,"y":-17.350559}]} />
    <copperpour name="Net__N35_S__top_35_0" connectsTo="net.Net__N35_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.094154,"y":-18.750485},{"x":-41.139088,"y":-18.519592},{"x":-41.270559,"y":-18.324605},{"x":-41.595609,"y":-18.64153},{"x":-41.53439,"y":-18.778469}]} />
    <copperpour name="Net__N35_D__bottom_36_0" connectsTo="net.Net__N35_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.544284,"y":-16.341184},{"x":-43.734605,"y":-15.939441},{"x":-43.930716,"y":-16.069303},{"x":-44.060559,"y":-16.265395},{"x":-43.648976,"y":-16.448607}]} />
    <copperpour name="Net__D13_A__top_37_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.584605,"y":-23.050559},{"x":-17.779644,"y":-22.919066},{"x":-18.010485,"y":-22.874154},{"x":-18.039283,"y":-23.318578},{"x":-17.899151,"y":-23.372083}]} />
    <copperpour name="FACi_bottom_38_0" connectsTo="net.FACi" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":8.630485,"y":-18.975846},{"x":8.400014,"y":-18.929001},{"x":8.169515,"y":-18.975846},{"x":8.318311,"y":-19.394381},{"x":8.468295,"y":-19.396539}]} />
    <copperpour name="Net__D16_A__top_39_0" connectsTo="net.Net__D16_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-21.540147,"y":-23.4265},{"x":-21.549399,"y":-23.276787},{"x":-21.964154,"y":-23.129515},{"x":-22.010998,"y":-23.360061},{"x":-21.964154,"y":-23.590485}]} />
    <copperpour name="FACi_bottom_40_0" connectsTo="net.FACi" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":8.610485,"y":-20.274154},{"x":8.461689,"y":-19.855619},{"x":8.311705,"y":-19.853461},{"x":8.149515,"y":-20.274154},{"x":8.379986,"y":-20.320999}]} />
    <copperpour name="VDD_top_41_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.827554,"y":14.150336},{"x":-20.689515,"y":14.564154},{"x":-20.920037,"y":14.610999},{"x":-21.150485,"y":14.564154},{"x":-20.977446,"y":14.144665}]} />
    <copperpour name="GND_bottom_42_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":5.225846,"y":-25.730485},{"x":5.18093,"y":-25.499634},{"x":5.049441,"y":-25.304605},{"x":4.719359,"y":-25.600715},{"x":4.774298,"y":-25.740292}]} />
    <copperpour name="Net__N46_G__top_43_0" connectsTo="net.Net__N46_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.729018,"y":-20.010184},{"x":-17.775846,"y":-19.779515},{"x":-18.177951,"y":-19.928453},{"x":-18.205594,"y":-20.075883},{"x":-17.775846,"y":-20.240485}]} />
    <copperpour name="GND_bottom_44_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.473206,"y":18.640874},{"x":-40.475901,"y":18.790848},{"x":-40.894154,"y":18.937985},{"x":-40.940999,"y":18.707483},{"x":-40.894154,"y":18.477015}]} />
    <copperpour name="GND_top_45_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.874154,"y":10.419515},{"x":-39.919002,"y":10.649956},{"x":-40.050559,"y":10.845395},{"x":-40.34826,"y":10.555892},{"x":-40.35497,"y":10.406043}]} />
    <copperpour name="GND_bottom_46_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.269001,"y":18.737517},{"x":-39.315846,"y":18.967985},{"x":-39.736794,"y":18.804126},{"x":-39.734099,"y":18.654152},{"x":-39.315846,"y":18.507015}]} />
    <copperpour name="Net__D13_A__top_47_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.909515,"y":-24.194154},{"x":-18.064867,"y":-23.806102},{"x":-18.204999,"y":-23.752597},{"x":-18.370485,"y":-24.194154},{"x":-18.140356,"y":-24.240934}]} />
    <copperpour name="Net__N19_G__bottom_48_0" connectsTo="net.Net__N19_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.919001,"y":11.619979},{"x":-22.965846,"y":11.850485},{"x":-23.383842,"y":11.704851},{"x":-23.387021,"y":11.554885},{"x":-22.965846,"y":11.389515}]} />
    <copperpour name="VDD_top_49_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.660833,"y":11.810005},{"x":-44.659167,"y":11.959995},{"x":-45.064154,"y":12.120485},{"x":-45.110999,"y":11.890011},{"x":-45.064154,"y":11.659515}]} />
    <copperpour name="FACi_bottom_50_0" connectsTo="net.FACi" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":4.711015,"y":-25.110935},{"x":4.656577,"y":-24.971162},{"x":4.204154,"y":-24.979515},{"x":4.249069,"y":-25.210362},{"x":4.380559,"y":-25.405395}]} />
    <copperpour name="Net__N33_S__top_51_0" connectsTo="net.Net__N33_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":7.590559,"y":-21.295395},{"x":7.460701,"y":-21.099288},{"x":7.264605,"y":-20.969441},{"x":7.091552,"y":-21.367386},{"x":7.19845,"y":-21.472613}]} />
    <copperpour name="VDD_bottom_52_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-13.129085,"y":-10.615402},{"x":-13.084154,"y":-10.384515},{"x":-13.525909,"y":-10.358861},{"x":-13.58632,"y":-10.496159},{"x":-13.260559,"y":-10.810395}]} />
    <copperpour name="Net__N35_G__top_53_0" connectsTo="net.Net__N35_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.035345,"y":-15.747799},{"x":-40.129515,"y":-15.354154},{"x":-40.360558,"y":-15.399171},{"x":-40.490559,"y":-15.595395},{"x":-40.159761,"y":-15.831589}]} />
    <copperpour name="Net__N52_S__bottom_54_0" connectsTo="net.Net__N52_S_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.131451,"y":-22.767125},{"x":2.800559,"y":-22.474605},{"x":2.669067,"y":-22.669642},{"x":2.624154,"y":-22.900485},{"x":3.077604,"y":-22.907127}]} />
    <copperpour name="Net__N22_D__top_55_0" connectsTo="net.Net__N22_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.6054,"y":27.796941},{"x":-6.800595,"y":27.928479},{"x":-7.03128,"y":27.881654},{"x":-6.96841,"y":27.482309},{"x":-6.821454,"y":27.452249}]} />
    <copperpour name="VDD_bottom_56_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.64674,"y":11.801809},{"x":-44.64248,"y":11.951748},{"x":-45.064154,"y":12.120485},{"x":-45.110999,"y":11.890028},{"x":-45.064154,"y":11.659515}]} />
    <copperpour name="GND_top_57_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.673007,"y":-26.282737},{"x":-20.644556,"y":-26.135461},{"x":-20.989441,"y":-25.924605},{"x":-21.120981,"y":-26.119811},{"x":-21.074154,"y":-26.350485}]} />
    <copperpour name="VDD_bottom_58_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.349001,"y":11.839972},{"x":-43.395846,"y":12.070485},{"x":-43.81326,"y":11.928191},{"x":-43.81752,"y":11.778252},{"x":-43.395846,"y":11.609515}]} />
    <copperpour name="GND_top_59_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.830777,"y":11.256149},{"x":-8.912717,"y":11.38179},{"x":-9.310846,"y":11.292985},{"x":-9.265837,"y":11.061954},{"x":-9.069605,"y":10.931941}]} />
    <copperpour name="GND_bottom_60_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.806804,"y":18.648945},{"x":-38.802427,"y":18.79888},{"x":-39.224154,"y":18.967985},{"x":-39.270999,"y":18.737529},{"x":-39.224154,"y":18.507015}]} />
    <copperpour name="GND_top_61_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.279441,"y":26.792105},{"x":-9.409434,"y":26.988324},{"x":-9.640485,"y":27.033346},{"x":-9.737733,"y":26.643182},{"x":-9.614127,"y":26.558203}]} />
    <copperpour name="GND_bottom_62_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.899001,"y":18.697471},{"x":-37.945846,"y":18.927985},{"x":-38.363196,"y":18.786055},{"x":-38.367573,"y":18.63612},{"x":-37.945846,"y":18.467015}]} />
    <copperpour name="GND_top_63_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.872045,"y":31.369065},{"x":-41.995592,"y":31.45413},{"x":-42.330559,"y":31.220395},{"x":-42.200567,"y":31.024177},{"x":-41.969515,"y":30.979154}]} />
    <copperpour name="Net__P47_D__bottom_64_0" connectsTo="net.Net__P47_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-16.569268,"y":-22.24068},{"x":-16.439441,"y":-22.044605},{"x":-16.860097,"y":-21.868128},{"x":-16.96219,"y":-21.978023},{"x":-16.765395,"y":-22.370559}]} />
    <copperpour name="VDD_top_65_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.395518,"y":29.54913},{"x":-38.479515,"y":29.950846},{"x":-38.710535,"y":29.905844},{"x":-38.840559,"y":29.709605},{"x":-38.522194,"y":29.468798}]} />
    <copperpour name="Net__P47_D__bottom_66_0" connectsTo="net.Net__P47_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.304683,"y":-21.455104},{"x":-17.501478,"y":-21.062568},{"x":-17.697605,"y":-21.192447},{"x":-17.827432,"y":-21.388522},{"x":-17.406776,"y":-21.564999}]} />
    <copperpour name="VDD_top_67_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.252559,"y":28.154659},{"x":-22.199515,"y":28.549154},{"x":-22.430222,"y":28.595974},{"x":-22.625395,"y":28.464441},{"x":-22.398796,"y":28.121278}]} />
    <copperpour name="Net__N35_D__bottom_68_0" connectsTo="net.Net__N35_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.929063,"y":-16.070348},{"x":-43.884154,"y":-15.839515},{"x":-44.340427,"y":-15.837624},{"x":-44.392634,"y":-15.978246},{"x":-44.060559,"y":-16.265395}]} />
    <copperpour name="GND_top_69_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":5.709298,"y":-23.789517},{"x":5.743382,"y":-23.643442},{"x":5.400559,"y":-23.414605},{"x":5.269027,"y":-23.609773},{"x":5.315846,"y":-23.840485}]} />
    <copperpour name="GND_bottom_70_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-18.799001,"y":-24.219963},{"x":-18.845846,"y":-23.989515},{"x":-19.26813,"y":-24.162503},{"x":-19.262509,"y":-24.312396},{"x":-18.845846,"y":-24.450485}]} />
    <copperpour name="FAB_top_71_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.944622,"y":-23.353605},{"x":3.822892,"y":-23.265959},{"x":3.479441,"y":-23.494605},{"x":3.609416,"y":-23.690811},{"x":3.840485,"y":-23.735846}]} />
    <copperpour name="GND_bottom_72_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.73187,"y":-24.367497},{"x":-20.737491,"y":-24.217604},{"x":-21.154154,"y":-24.079515},{"x":-21.200999,"y":-24.310037},{"x":-21.154154,"y":-24.540485}]} />
    <copperpour name="GND_top_73_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.933235,"y":19.071394},{"x":-39.054363,"y":19.15987},{"x":-39.400559,"y":18.932895},{"x":-39.270589,"y":18.736693},{"x":-39.039515,"y":18.691654}]} />
    <copperpour name="GND_bottom_74_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":2.292659,"y":-26.798363},{"x":2.240488,"y":-26.657728},{"x":1.784154,"y":-26.659515},{"x":1.829063,"y":-26.890347},{"x":1.960559,"y":-27.085395}]} />
    <copperpour name="Net__N14_D__top_75_0" connectsTo="net.Net__N14_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.119406,"y":27.254196},{"x":-22.989441,"y":27.450395},{"x":-23.338016,"y":27.675912},{"x":-23.458616,"y":27.586718},{"x":-23.350485,"y":27.209154}]} />
    <copperpour name="Net__N46_G__bottom_76_0" connectsTo="net.Net__N46_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-15.399515,"y":-26.414154},{"x":-15.574006,"y":-25.991659},{"x":-15.723881,"y":-25.997761},{"x":-15.860485,"y":-26.414154},{"x":-15.62996,"y":-26.460999}]} />
    <copperpour name="GND_top_77_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.340989,"y":-25.570145},{"x":3.294154,"y":-25.339515},{"x":2.887918,"y":-25.427755},{"x":2.866108,"y":-25.57616},{"x":3.209441,"y":-25.765395}]} />
    <copperpour name="Net__N22_D__bottom_78_0" connectsTo="net.Net__N22_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.800118,"y":27.926765},{"x":-6.670236,"y":28.122895},{"x":-7.061285,"y":28.320721},{"x":-7.171572,"y":28.219051},{"x":-6.99619,"y":27.796941}]} />
    <copperpour name="VDD_top_79_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.49806,"y":26.002599},{"x":-22.53502,"y":26.147974},{"x":-22.924154,"y":26.190485},{"x":-22.970969,"y":25.959754},{"x":-22.839441,"y":25.764605}]} />
    <copperpour name="Net__N22_D__bottom_80_0" connectsTo="net.Net__N22_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.619223,"y":28.925949},{"x":-7.794605,"y":29.348059},{"x":-7.990677,"y":29.218235},{"x":-8.120559,"y":29.022105},{"x":-7.72951,"y":28.824279}]} />
    <copperpour name="GND_top_81_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.199441,"y":25.232105},{"x":-7.329401,"y":25.4283},{"x":-7.560485,"y":25.473346},{"x":-7.670345,"y":25.097827},{"x":-7.550244,"y":25.007962}]} />
    <copperpour name="GND_bottom_82_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.019441,"y":28.454171},{"x":-38.889441,"y":28.650395},{"x":-39.220504,"y":28.886434},{"x":-39.344865,"y":28.802563},{"x":-39.250485,"y":28.409154}]} />
    <copperpour name="Net__D13_A__top_83_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.679594,"y":-24.782516},{"x":-23.589515,"y":-24.375846},{"x":-23.820141,"y":-24.329011},{"x":-24.015395,"y":-24.460559},{"x":-23.828086,"y":-24.803729}]} />
    <copperpour name="VDD_bottom_84_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.635319,"y":-26.64983},{"x":3.605414,"y":-26.502842},{"x":3.205846,"y":-26.439515},{"x":3.159021,"y":-26.670199},{"x":3.290559,"y":-26.865395}]} />
    <copperpour name="GND_top_85_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.974154,"y":28.224515},{"x":-39.019205,"y":28.455606},{"x":-39.215395,"y":28.585559},{"x":-39.437306,"y":28.231166},{"x":-39.346364,"y":28.111878}]} />
    <copperpour name="VDD_bottom_86_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":8.370979,"y":-25.609801},{"x":8.239441,"y":-25.414605},{"x":7.894681,"y":-25.63017},{"x":7.924586,"y":-25.777158},{"x":8.324154,"y":-25.840485}]} />
    <copperpour name="Net__N35_D__top_87_0" connectsTo="net.Net__N35_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.879054,"y":-17.919679},{"x":-38.010559,"y":-17.724605},{"x":-38.365493,"y":-17.927942},{"x":-38.317255,"y":-18.069973},{"x":-37.925846,"y":-18.150485}]} />
    <copperpour name="FAA_bottom_88_0" connectsTo="net.FAA" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":9.195846,"y":-20.670485},{"x":9.150835,"y":-20.439452},{"x":8.954605,"y":-20.309441},{"x":8.716278,"y":-20.635106},{"x":8.798617,"y":-20.760486}]} />
    <copperpour name="Net__N19_G__top_89_0" connectsTo="net.Net__N19_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-24.989441,"y":14.984605},{"x":-25.119506,"y":15.180869},{"x":-25.350485,"y":15.225846},{"x":-25.416172,"y":14.810874},{"x":-25.285779,"y":14.736729}]} />
    <copperpour name="GND_bottom_90_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.878795,"y":5.632611},{"x":-40.809515,"y":6.034154},{"x":-41.040186,"y":6.080982},{"x":-41.235395,"y":5.949441},{"x":-41.026166,"y":5.604655}]} />
    <copperpour name="FAB_top_91_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":6.280788,"y":-24.920615},{"x":6.325846,"y":-24.689515},{"x":5.95771,"y":-24.573496},{"x":5.865455,"y":-24.691772},{"x":6.084605,"y":-25.050559}]} />
    <copperpour name="Net__N21_G__bottom_92_0" connectsTo="net.Net__N21_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.419605,"y":13.711941},{"x":-7.614797,"y":13.843478},{"x":-7.845485,"y":13.796654},{"x":-7.784197,"y":13.39808},{"x":-7.637351,"y":13.367487}]} />
    <copperpour name="GND_top_93_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.924605,"y":-25.989441},{"x":-21.101761,"y":-25.647198},{"x":-21.25067,"y":-25.665248},{"x":-21.350485,"y":-26.074154},{"x":-21.11988,"y":-26.120992}]} />
    <copperpour name="Net__N36_G__bottom_94_0" connectsTo="net.Net__N36_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.499515,"y":-19.574154},{"x":-42.568988,"y":-19.172561},{"x":-42.71637,"y":-19.144668},{"x":-42.925395,"y":-19.489441},{"x":-42.730185,"y":-19.620982}]} />
    <copperpour name="Net__D8_K__top_95_0" connectsTo="net.Net__D8_K_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-10.724888,"y":25.458441},{"x":-10.707362,"y":25.607412},{"x":-11.049441,"y":25.782895},{"x":-11.180993,"y":25.587616},{"x":-11.134154,"y":25.357015}]} />
    <copperpour name="Net__N36_G__bottom_96_0" connectsTo="net.Net__N36_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.794605,"y":-15.840559},{"x":-41.989815,"y":-15.709018},{"x":-42.220485,"y":-15.755846},{"x":-42.151012,"y":-16.157439},{"x":-42.00363,"y":-16.185332}]} />
    <copperpour name="GND_top_97_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":5.649816,"y":-25.444837},{"x":5.608926,"y":-25.300519},{"x":5.225846,"y":-25.269515},{"x":5.179038,"y":-25.500272},{"x":5.310559,"y":-25.695395}]} />
    <copperpour name="VDD_bottom_98_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-15.089515,"y":-12.129154},{"x":-15.160063,"y":-11.727285},{"x":-15.307512,"y":-11.699739},{"x":-15.515395,"y":-12.044441},{"x":-15.320183,"y":-12.175982}]} />
    <copperpour name="Net__N36_G__top_99_0" connectsTo="net.Net__N36_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.527468,"y":-14.320974},{"x":-40.544661,"y":-14.171964},{"x":-40.954154,"y":-14.069515},{"x":-41.000993,"y":-14.300114},{"x":-40.869441,"y":-14.495395}]} />
    <copperpour name="Net__D16_A__bottom_100_0" connectsTo="net.Net__D16_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-26.015591,"y":-24.436895},{"x":-26.097383,"y":-24.311157},{"x":-26.495846,"y":-24.399515},{"x":-26.450838,"y":-24.630545},{"x":-26.254605,"y":-24.760559}]} />
    <copperpour name="VDD_top_101_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.194979,"y":18.357483},{"x":-44.444605,"y":18.648059},{"x":-44.640875,"y":18.517983},{"x":-44.685846,"y":18.287015},{"x":-44.267477,"y":18.226166}]} />
    <copperpour name="VDD_bottom_102_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-14.876399,"y":-12.34587},{"x":-14.845241,"y":-12.199143},{"x":-15.189441,"y":-11.979605},{"x":-15.320978,"y":-12.174793},{"x":-15.274154,"y":-12.405485}]} />
    <copperpour name="FAB_top_103_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.485395,"y":-20.249441},{"x":3.232284,"y":-19.910637},{"x":3.088194,"y":-19.952323},{"x":3.059515,"y":-20.334154},{"x":3.290277,"y":-20.38096}]} />
    <copperpour name="VDD_bottom_104_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-11.999022,"y":-12.880207},{"x":-12.045846,"y":-12.649515},{"x":-12.443601,"y":-12.70913},{"x":-12.474759,"y":-12.855857},{"x":-12.130559,"y":-13.075395}]} />
    <copperpour name="VDD_top_105_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.506211,"y":19.959104},{"x":-39.589515,"y":20.350672},{"x":-39.8206,"y":20.305625},{"x":-39.950559,"y":20.109431},{"x":-39.62619,"y":19.869076}]} />
    <copperpour name="Net__N23_G__bottom_106_0" connectsTo="net.Net__N23_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.382901,"y":0.327451},{"x":-40.622105,"y":0.650559},{"x":-40.818338,"y":0.520544},{"x":-40.863346,"y":0.289515},{"x":-40.46454,"y":0.201613}]} />
    <copperpour name="Net__N35_D__top_107_0" connectsTo="net.Net__N35_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.339163,"y":-16.985951},{"x":-42.433147,"y":-16.869044},{"x":-42.795846,"y":-16.989515},{"x":-42.750779,"y":-17.220626},{"x":-42.554605,"y":-17.350559}]} />
    <copperpour name="GND_bottom_108_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-10.389441,"y":-12.170395},{"x":-10.519433,"y":-11.974177},{"x":-10.750485,"y":-11.929154},{"x":-10.848048,"y":-12.318959},{"x":-10.724526,"y":-12.404061}]} />
    <copperpour name="Net__N37_G__top_109_0" connectsTo="net.Net__N37_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.509042,"y":-18.949716},{"x":-40.640559,"y":-18.754605},{"x":-40.978828,"y":-19.01069},{"x":-40.936214,"y":-19.154508},{"x":-40.555846,"y":-19.180485}]} />
    <copperpour name="Net__N35_G__bottom_110_0" connectsTo="net.Net__N35_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.401916,"y":-17.146814},{"x":-41.527819,"y":-17.065276},{"x":-41.850559,"y":-17.304605},{"x":-41.720543,"y":-17.500839},{"x":-41.489515,"y":-17.545846}]} />
    <copperpour name="Net__D16_A__top_111_0" connectsTo="net.Net__D16_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-26.254605,"y":-24.760559},{"x":-26.449898,"y":-24.629006},{"x":-26.680485,"y":-24.675846},{"x":-26.572464,"y":-25.086554},{"x":-26.423256,"y":-25.101937}]} />
    <copperpour name="Net__N35_G__bottom_112_0" connectsTo="net.Net__N35_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.229441,"y":-15.595395},{"x":-40.359457,"y":-15.399161},{"x":-40.590485,"y":-15.354154},{"x":-40.678084,"y":-15.753186},{"x":-40.552181,"y":-15.834724}]} />
    <copperpour name="FAB_top_113_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":4.018879,"y":-23.927085},{"x":3.805395,"y":-23.559441},{"x":3.609226,"y":-23.689368},{"x":3.564154,"y":-23.920485},{"x":3.923999,"y":-24.043265}]} />
    <copperpour name="VDD_bottom_114_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.452352,"y":1.230735},{"x":-44.479362,"y":1.378282},{"x":-44.881654,"y":1.450485},{"x":-44.928483,"y":1.21982},{"x":-44.796941,"y":1.024605}]} />
    <copperpour name="Net__N14_D__top_115_0" connectsTo="net.Net__N14_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.493166,"y":27.244441},{"x":-20.688461,"y":27.375994},{"x":-20.919046,"y":27.329154},{"x":-20.809947,"y":26.918215},{"x":-20.660703,"y":26.903182}]} />
    <copperpour name="VDD_bottom_116_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.266517,"y":1.89018},{"x":-41.398059,"y":2.085395},{"x":-41.742648,"y":1.879265},{"x":-41.715638,"y":1.731718},{"x":-41.313346,"y":1.659515}]} />
    <copperpour name="Net__N14_D__top_117_0" connectsTo="net.Net__N14_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.458076,"y":27.420846},{"x":-20.567175,"y":27.831786},{"x":-20.716419,"y":27.846817},{"x":-20.883956,"y":27.505559},{"x":-20.688661,"y":27.374006}]} />
    <copperpour name="Net__N18_G__bottom_118_0" connectsTo="net.Net__N18_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.907614,"y":14.567146},{"x":-23.849515,"y":14.964154},{"x":-24.080211,"y":15.010977},{"x":-24.275395,"y":14.879441},{"x":-24.054232,"y":14.535476}]} />
    <copperpour name="Net__D13_A__top_119_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.819367,"y":-24.330773},{"x":-23.689441,"y":-24.134605},{"x":-24.057735,"y":-23.921542},{"x":-24.173758,"y":-24.016614},{"x":-24.050485,"y":-24.375846}]} />
    <copperpour name="Net__N35_G__bottom_120_0" connectsTo="net.Net__N35_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.129515,"y":-15.354154},{"x":-40.187524,"y":-14.957189},{"x":-40.334135,"y":-14.925489},{"x":-40.555395,"y":-15.269441},{"x":-40.360211,"y":-15.400977}]} />
    <copperpour name="GND_top_121_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-46.451687,"y":30.801545},{"x":-46.495172,"y":30.945102},{"x":-46.874154,"y":30.968538},{"x":-46.920957,"y":30.737764},{"x":-46.789441,"y":30.542658}]} />
    <copperpour name="GND_bottom_122_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.974821,"y":27.178342},{"x":-9.05599,"y":27.304483},{"x":-9.455846,"y":27.217985},{"x":-9.41084,"y":26.986959},{"x":-9.214605,"y":26.856941}]} />
    <copperpour name="GND_top_123_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-46.919043,"y":30.738342},{"x":-47.050559,"y":30.933448},{"x":-47.388313,"y":30.674562},{"x":-47.344828,"y":30.531005},{"x":-46.965846,"y":30.507568}]} />
    <copperpour name="GND_bottom_124_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.214154,"y":27.497015},{"x":-8.25916,"y":27.728041},{"x":-8.455395,"y":27.858059},{"x":-8.695179,"y":27.536658},{"x":-8.61401,"y":27.410517}]} />
    <copperpour name="GND_top_125_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-10.062271,"y":-12.091921},{"x":-10.04869,"y":-11.942538},{"x":-10.389441,"y":-11.779605},{"x":-10.520995,"y":-11.97491},{"x":-10.474154,"y":-12.205485}]} />
    <copperpour name="Net__N36_G__bottom_126_0" connectsTo="net.Net__N36_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.869441,"y":-14.495395},{"x":-40.999426,"y":-14.299182},{"x":-41.230485,"y":-14.254154},{"x":-41.330875,"y":-14.640727},{"x":-41.208113,"y":-14.726922}]} />
    <copperpour name="VDD_top_127_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.019488,"y":19.955454},{"x":-38.089515,"y":20.358135},{"x":-38.320566,"y":20.313112},{"x":-38.450559,"y":20.116894},{"x":-38.14305,"y":19.87041}]} />
    <copperpour name="Net__N36_G__bottom_128_0" connectsTo="net.Net__N36_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.659125,"y":-15.369273},{"x":-41.781887,"y":-15.283078},{"x":-42.120559,"y":-15.514605},{"x":-41.990574,"y":-15.710818},{"x":-41.759515,"y":-15.755846}]} />
    <copperpour name="GND_top_129_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.273811,"y":-15.258784},{"x":-39.369906,"y":-15.143607},{"x":-39.725846,"y":-15.269515},{"x":-39.680767,"y":-15.50064},{"x":-39.484605,"y":-15.630559}]} />
    <copperpour name="VDD_bottom_130_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.799441,"y":30.064605},{"x":-40.929465,"y":30.260844},{"x":-41.160485,"y":30.305846},{"x":-41.244528,"y":29.904163},{"x":-41.117862,"y":29.823817}]} />
    <copperpour name="Net__N35_D__top_131_0" connectsTo="net.Net__N35_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.57246,"y":-15.761349},{"x":-43.687264,"y":-15.664809},{"x":-44.060559,"y":-15.874605},{"x":-43.930643,"y":-16.070765},{"x":-43.699515,"y":-16.115846}]} />
    <copperpour name="VDD_bottom_132_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.445472,"y":27.730837},{"x":-42.572138,"y":27.811183},{"x":-42.890559,"y":27.570395},{"x":-42.760535,"y":27.374156},{"x":-42.529515,"y":27.329154}]} />
    <copperpour name="VDD_top_133_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-24.629004,"y":25.889915},{"x":-24.675846,"y":26.120485},{"x":-25.0882,"y":26.004652},{"x":-25.101043,"y":25.855204},{"x":-24.760559,"y":25.694605}]} />
    <copperpour name="FAB_bottom_134_0" connectsTo="net.FAB" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":6.753631,"y":-24.888192},{"x":6.72006,"y":-24.741998},{"x":6.325846,"y":-24.689515},{"x":6.279026,"y":-24.920223},{"x":6.410559,"y":-25.115395}]} />
    <copperpour name="FACi_top_135_0" connectsTo="net.FACi" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":8.575395,"y":-20.450559},{"x":8.380307,"y":-20.319049},{"x":8.149515,"y":-20.365846},{"x":8.16513,"y":-20.740495},{"x":8.307847,"y":-20.786668}]} />
    <copperpour name="Net__D13_A__bottom_136_0" connectsTo="net.Net__D13_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-19.206537,"y":-24.897082},{"x":-19.240456,"y":-24.750969},{"x":-19.634154,"y":-24.699515},{"x":-19.680974,"y":-24.930226},{"x":-19.549441,"y":-25.125395}]} />
    <copperpour name="Net__N18_G__top_137_0" connectsTo="net.Net__N18_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.884605,"y":15.140559},{"x":-24.042013,"y":15.480669},{"x":-24.191545,"y":15.468835},{"x":-24.310485,"y":15.055846},{"x":-24.079922,"y":15.009004}]} />
    <copperpour name="Net__N20_D__bottom_138_0" connectsTo="net.Net__N20_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.844812,"y":12.14241},{"x":-6.820456,"y":12.290419},{"x":-7.164441,"y":12.487895},{"x":-7.295986,"y":12.292662},{"x":-7.249154,"y":12.062015}]} />
    <copperpour name="VDD_top_139_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.478321,"y":19.956029},{"x":-36.539515,"y":20.365846},{"x":-36.770544,"y":20.320838},{"x":-36.900559,"y":20.124605},{"x":-36.604125,"y":19.874338}]} />
    <copperpour name="Net__N20_D__bottom_140_0" connectsTo="net.Net__N20_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-5.714014,"y":12.032338},{"x":-5.760846,"y":12.262985},{"x":-6.165188,"y":12.18259},{"x":-6.189544,"y":12.034581},{"x":-5.845559,"y":11.837105}]} />
    <copperpour name="VDD_top_141_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.639003,"y":18.517575},{"x":-44.770559,"y":18.712895},{"x":-45.110455,"y":18.557267},{"x":-45.099186,"y":18.407692},{"x":-44.685846,"y":18.287015}]} />
    <copperpour name="Net__N22_D__bottom_142_0" connectsTo="net.Net__N22_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-4.909028,"y":27.477269},{"x":-4.955846,"y":27.707985},{"x":-5.348338,"y":27.658917},{"x":-5.383067,"y":27.512994},{"x":-5.040559,"y":27.282105}]} />
    <copperpour name="Net__N37_G__top_143_0" connectsTo="net.Net__N37_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.21011,"y":-18.496806},{"x":-37.277733,"y":-18.362913},{"x":-37.705846,"y":-18.409515},{"x":-37.660892,"y":-18.64045},{"x":-37.464605,"y":-18.770559}]} />
    <copperpour name="Net__N22_D__bottom_144_0" connectsTo="net.Net__N22_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.362457,"y":27.746083},{"x":-6.327728,"y":27.892006},{"x":-6.670236,"y":28.122895},{"x":-6.801767,"y":27.927731},{"x":-6.754949,"y":27.697015}]} />
    <copperpour name="FAB_top_145_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":2.260949,"y":-24.379687},{"x":2.129441,"y":-24.184605},{"x":1.793851,"y":-24.454805},{"x":1.840844,"y":-24.597254},{"x":2.214154,"y":-24.610485}]} />
    <copperpour name="Net__N33_S__bottom_146_0" connectsTo="net.Net__N33_S_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":7.060485,"y":-23.694154},{"x":7.011677,"y":-23.301794},{"x":6.865775,"y":-23.266976},{"x":6.634605,"y":-23.609441},{"x":6.829768,"y":-23.740972}]} />
    <copperpour name="VDD_top_147_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.759001,"y":27.375014},{"x":-42.890559,"y":27.570395},{"x":-43.216916,"y":27.358337},{"x":-43.214773,"y":27.208353},{"x":-42.805846,"y":27.144515}]} />
    <copperpour name="Net__N33_S__bottom_148_0" connectsTo="net.Net__N33_S_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":7.655395,"y":-21.230559},{"x":7.460232,"y":-21.099028},{"x":7.229515,"y":-21.145846},{"x":7.278323,"y":-21.538206},{"x":7.424225,"y":-21.573024}]} />
    <copperpour name="X_top_149_0" connectsTo="net.X" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.659253,"y":-22.021092},{"x":3.524746,"y":-21.954701},{"x":3.255192,"y":-22.210356},{"x":3.385309,"y":-22.406647},{"x":3.616236,"y":-22.451597}]} />
    <copperpour name="FACi_bottom_150_0" connectsTo="net.FACi" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":1.390519,"y":-23.260854},{"x":1.520559,"y":-23.064605},{"x":1.210751,"y":-22.820979},{"x":1.082596,"y":-22.898929},{"x":1.159515,"y":-23.305846}]} />
    <copperpour name="X_top_151_0" connectsTo="net.X" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.51631,"y":-22.601146},{"x":3.386193,"y":-22.404855},{"x":3.155266,"y":-22.359905},{"x":3.112249,"y":-22.79041},{"x":3.246756,"y":-22.856801}]} />
    <copperpour name="GND_bottom_152_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.285333,"y":11.165253},{"x":-6.529605,"y":11.473059},{"x":-6.725856,"y":11.343015},{"x":-6.770846,"y":11.112015},{"x":-6.362722,"y":11.036758}]} />
    <copperpour name="Net__N21_G__top_153_0" connectsTo="net.Net__N21_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.855416,"y":11.433661},{"x":-7.954407,"y":11.546359},{"x":-8.300846,"y":11.412985},{"x":-8.255751,"y":11.181841},{"x":-8.059605,"y":11.051941}]} />
    <copperpour name="GND_bottom_154_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-5.844144,"y":10.811985},{"x":-5.799154,"y":11.042985},{"x":-6.207278,"y":11.118242},{"x":-6.284667,"y":10.989747},{"x":-6.040395,"y":10.681941}]} />
    <copperpour name="Net__N52_S__top_155_0" connectsTo="net.Net__N52_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":2.670439,"y":-22.670898},{"x":2.800559,"y":-22.474605},{"x":2.532832,"y":-22.218451},{"x":2.398061,"y":-22.284305},{"x":2.439515,"y":-22.715846}]} />
    <copperpour name="Net__N35_S__bottom_156_0" connectsTo="net.Net__N35_S_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.953728,"y":-18.955858},{"x":-40.909515,"y":-18.565846},{"x":-41.140242,"y":-18.51903},{"x":-41.335395,"y":-18.650559},{"x":-41.099248,"y":-18.992238}]} />
    <copperpour name="Net__D8_K__top_157_0" connectsTo="net.Net__D8_K_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.168987,"y":29.453806},{"x":-9.303913,"y":29.519342},{"x":-9.570559,"y":29.262895},{"x":-9.440436,"y":29.066601},{"x":-9.209515,"y":29.021654}]} />
    <copperpour name="Net__N35_S__bottom_158_0" connectsTo="net.Net__N35_S_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.564605,"y":-19.909441},{"x":-40.800752,"y":-19.567762},{"x":-40.946272,"y":-19.604142},{"x":-40.990485,"y":-19.994154},{"x":-40.759758,"y":-20.04097}]} />
    <copperpour name="Net__N18_G__top_159_0" connectsTo="net.Net__N18_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-24.099056,"y":13.440327},{"x":-24.230559,"y":13.635395},{"x":-24.564728,"y":13.358154},{"x":-24.515562,"y":13.21644},{"x":-24.145846,"y":13.209515}]} />
    <copperpour name="GND_bottom_160_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.679637,"y":-25.239488},{"x":3.559331,"y":-25.149898},{"x":3.209441,"y":-25.374605},{"x":3.339403,"y":-25.570802},{"x":3.570485,"y":-25.615846}]} />
    <copperpour name="VDD_top_161_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.988478,"y":19.925687},{"x":-41.039515,"y":20.343458},{"x":-41.270518,"y":20.298466},{"x":-41.400559,"y":20.102217},{"x":-41.116721,"y":19.847881}]} />
    <copperpour name="VDD_bottom_162_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.568379,"y":29.45277},{"x":-38.479515,"y":29.859154},{"x":-38.710144,"y":29.905989},{"x":-38.905395,"y":29.774441},{"x":-38.716813,"y":29.431163}]} />
    <copperpour name="VDD_top_163_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.901649,"y":2.188013},{"x":-41.013663,"y":2.287776},{"x":-41.398059,"y":2.085395},{"x":-41.268165,"y":1.889254},{"x":-41.037015,"y":1.844154}]} />
    <copperpour name="Net__N46_G__bottom_164_0" connectsTo="net.Net__N46_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.289109,"y":-20.183411},{"x":-17.534605,"y":-19.879441},{"x":-17.73086,"y":-20.009492},{"x":-17.775846,"y":-20.240485},{"x":-17.365418,"y":-20.31255}]} />
    <copperpour name="GND_top_165_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-28.019057,"y":-27.910332},{"x":-28.065846,"y":-27.679515},{"x":-28.43447,"y":-27.684546},{"x":-28.484289,"y":-27.826032},{"x":-28.150559,"y":-28.105395}]} />
    <copperpour name="VDD_bottom_166_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-12.927727,"y":-14.600219},{"x":-13.056922,"y":-14.524003},{"x":-13.360559,"y":-14.769605},{"x":-13.230508,"y":-14.965861},{"x":-12.999515,"y":-15.010846}]} />
    <copperpour name="Net__N24_D__top_167_0" connectsTo="net.Net__N24_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.099011,"y":26.217646},{"x":-6.145846,"y":26.447985},{"x":-6.57282,"y":26.357556},{"x":-6.550899,"y":26.209167},{"x":-6.230559,"y":26.022105}]} />
    <copperpour name="VDD_bottom_168_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-11.869441,"y":-13.075395},{"x":-11.999492,"y":-12.879139},{"x":-12.230485,"y":-12.834154},{"x":-12.302273,"y":-13.244781},{"x":-12.173078,"y":-13.320997}]} />
    <copperpour name="VDD_top_169_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.796941,"y":1.024605},{"x":-44.92683,"y":1.220741},{"x":-45.157985,"y":1.265846},{"x":-45.295514,"y":0.924809},{"x":-45.18425,"y":0.824209}]} />
    <copperpour name="Net__N18_G__bottom_170_0" connectsTo="net.Net__N18_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.789202,"y":12.679399},{"x":-22.744154,"y":12.910485},{"x":-23.118535,"y":13.021303},{"x":-23.208771,"y":12.901481},{"x":-22.985395,"y":12.549441}]} />
    <copperpour name="Net__N39_G__top_171_0" connectsTo="net.Net__N39_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-35.494154,"y":-18.400485},{"x":-35.539259,"y":-18.169329},{"x":-35.735395,"y":-18.039441},{"x":-35.93567,"y":-18.426928},{"x":-35.835018,"y":-18.538145}]} />
    <copperpour name="VDD_bottom_172_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.286438,"y":27.364985},{"x":-42.307052,"y":27.513561},{"x":-42.714154,"y":27.605485},{"x":-42.76099,"y":27.374863},{"x":-42.629441,"y":27.179605}]} />
    <copperpour name="Net__N46_G__top_173_0" connectsTo="net.Net__N46_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-15.584154,"y":-26.690485},{"x":-15.629096,"y":-26.459573},{"x":-15.825395,"y":-26.329441},{"x":-16.083183,"y":-26.591061},{"x":-16.019132,"y":-26.726699}]} />
    <copperpour name="FACi_bottom_174_0" connectsTo="net.FACi" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":8.817897,"y":-19.152886},{"x":8.595395,"y":-18.799441},{"x":8.399204,"y":-18.929396},{"x":8.354154,"y":-19.160485},{"x":8.727239,"y":-19.27239}]} />
    <copperpour name="VDD_top_175_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.974605,"y":10.890559},{"x":-24.257188,"y":11.223613},{"x":-24.398321,"y":11.172805},{"x":-24.400485,"y":10.805846},{"x":-24.169662,"y":10.75906}]} />
    <copperpour name="X_bottom_176_0" connectsTo="net.X" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":2.410503,"y":-25.930863},{"x":2.540559,"y":-25.734605},{"x":2.239167,"y":-25.488296},{"x":2.1096,"y":-25.563877},{"x":2.179515,"y":-25.975846}]} />
    <copperpour name="FAB_top_177_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":6.280824,"y":-24.920565},{"x":6.325846,"y":-24.689515},{"x":5.96317,"y":-24.564743},{"x":5.878294,"y":-24.68842},{"x":6.084605,"y":-25.050559}]} />
    <copperpour name="VDD_bottom_178_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.696577,"y":10.748426},{"x":-23.716705,"y":10.897068},{"x":-24.124154,"y":10.990485},{"x":-24.17099,"y":10.759866},{"x":-24.039441,"y":10.564605}]} />
    <copperpour name="Net__N19_G__top_179_0" connectsTo="net.Net__N19_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.447955,"y":11.570591},{"x":-22.463658,"y":11.719766},{"x":-22.874154,"y":11.850485},{"x":-22.920994,"y":11.619896},{"x":-22.789441,"y":11.424605}]} />
    <copperpour name="GND_bottom_180_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.746697,"y":30.887968},{"x":-41.72658,"y":31.036612},{"x":-42.069441,"y":31.220395},{"x":-42.20099,"y":31.025134},{"x":-42.154154,"y":30.794515}]} />
    <copperpour name="Net__N36_G__top_181_0" connectsTo="net.Net__N36_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.279426,"y":-19.586055},{"x":-42.27684,"y":-19.436078},{"x":-42.684154,"y":-19.389515},{"x":-42.730999,"y":-19.619983},{"x":-42.599441,"y":-19.815395}]} />
    <copperpour name="Net__N24_D__bottom_182_0" connectsTo="net.Net__N24_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-5.629226,"y":26.267123},{"x":-5.668385,"y":26.41192},{"x":-6.054154,"y":26.447985},{"x":-6.100965,"y":26.217239},{"x":-5.969441,"y":26.022105}]} />
    <copperpour name="VDD_top_183_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.489893,"y":19.947357},{"x":-42.569515,"y":20.335846},{"x":-42.800598,"y":20.290801},{"x":-42.930559,"y":20.094605},{"x":-42.610108,"y":19.857644}]} />
    <copperpour name="Net__N24_D__bottom_184_0" connectsTo="net.Net__N24_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-4.509035,"y":26.647761},{"x":-4.640559,"y":26.842895},{"x":-4.980774,"y":26.597877},{"x":-4.941615,"y":26.45308},{"x":-4.555846,"y":26.417015}]} />
    <copperpour name="Net__N20_D__top_185_0" connectsTo="net.Net__N20_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.149821,"y":12.212321},{"x":-9.182227,"y":12.358778},{"x":-9.496941,"y":12.537895},{"x":-9.628476,"y":12.342284},{"x":-9.581654,"y":12.112015}]} />
    <copperpour name="GND_bottom_186_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-14.065862,"y":-14.853871},{"x":-14.284605,"y":-14.494441},{"x":-14.480787,"y":-14.624384},{"x":-14.525846,"y":-14.855485},{"x":-14.158308,"y":-14.971997}]} />
    <copperpour name="FACi_top_187_0" connectsTo="net.FACi" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":4.583452,"y":-25.578086},{"x":4.480485,"y":-25.164154},{"x":4.249776,"y":-25.209026},{"x":4.119441,"y":-25.405395},{"x":4.437294,"y":-25.611815}]} />
    <copperpour name="FAB_bottom_188_0" connectsTo="net.FAB" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.584601,"y":-20.750235},{"x":3.520485,"y":-20.334154},{"x":3.28951,"y":-20.379129},{"x":3.159441,"y":-20.575395},{"x":3.453904,"y":-20.823845}]} />
    <copperpour name="Net__N19_G__top_189_0" connectsTo="net.Net__N19_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.874154,"y":11.389515},{"x":-22.919135,"y":11.620501},{"x":-23.115395,"y":11.750559},{"x":-23.31339,"y":11.393647},{"x":-23.238235,"y":11.263834}]} />
    <copperpour name="FAB_bottom_190_0" connectsTo="net.FAB" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.78049,"y":-21.250871},{"x":3.910559,"y":-21.054605},{"x":3.616096,"y":-20.806155},{"x":3.485399,"y":-20.879765},{"x":3.549515,"y":-21.295846}]} />
    <copperpour name="GND_top_191_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.471743,"y":15.107571},{"x":-8.478258,"y":15.257429},{"x":-8.889154,"y":15.392985},{"x":-8.935999,"y":15.162457},{"x":-8.804441,"y":14.967105}]} />
    <copperpour name="VDD_bottom_192_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-44.291781,"y":18.837706},{"x":-44.409534,"y":18.930626},{"x":-44.770559,"y":18.712895},{"x":-44.640619,"y":18.516715},{"x":-44.409515,"y":18.471654}]} />
    <copperpour name="FAB_top_193_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":4.116476,"y":-21.613411},{"x":4.010485,"y":-21.204154},{"x":3.779784,"y":-21.249024},{"x":3.649441,"y":-21.445395},{"x":3.970049,"y":-21.64595}]} />
    <copperpour name="Net__N36_G__bottom_194_0" connectsTo="net.Net__N36_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.729039,"y":-19.620273},{"x":-42.775846,"y":-19.389515},{"x":-43.158819,"y":-19.42032},{"x":-43.199777,"y":-19.564619},{"x":-42.860559,"y":-19.815395}]} />
    <copperpour name="X_top_195_0" connectsTo="net.X" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":2.707217,"y":-26.332471},{"x":2.640485,"y":-25.884154},{"x":2.409955,"y":-25.929002},{"x":2.279441,"y":-26.125395},{"x":2.557371,"y":-26.339231}]} />
    <copperpour name="Net__N37_G__bottom_196_0" connectsTo="net.Net__N37_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.659006,"y":-18.639892},{"x":-37.790559,"y":-18.444605},{"x":-38.132217,"y":-18.615922},{"x":-38.115996,"y":-18.765041},{"x":-37.705846,"y":-18.870485}]} />
    <copperpour name="GND_top_197_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.846886,"y":10.7975},{"x":-37.88564,"y":10.942406},{"x":-38.315846,"y":10.890485},{"x":-38.270966,"y":10.659742},{"x":-38.074605,"y":10.529441}]} />
    <copperpour name="Net__N37_G__bottom_198_0" connectsTo="net.Net__N37_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.037783,"y":-18.974078},{"x":-40.054004,"y":-18.824959},{"x":-40.464154,"y":-18.719515},{"x":-40.510994,"y":-18.950108},{"x":-40.379441,"y":-19.145395}]} />
    <copperpour name="Net__N52_S__top_199_0" connectsTo="net.Net__N52_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.355846,"y":-24.940485},{"x":3.310858,"y":-24.709488},{"x":3.114605,"y":-24.579441},{"x":2.886537,"y":-24.875614},{"x":2.963465,"y":-25.004385}]} />
    <copperpour name="Net__N17_G__bottom_200_0" connectsTo="net.Net__N17_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.950629,"y":14.023888},{"x":-23.082314,"y":14.095716},{"x":-23.370559,"y":13.845395},{"x":-23.240478,"y":13.649123},{"x":-23.009515,"y":13.604154}]} />
    <copperpour name="Net__N35_S__top_201_0" connectsTo="net.Net__N35_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.759043,"y":-20.040289},{"x":-40.805846,"y":-19.809515},{"x":-41.168296,"y":-19.83821},{"x":-41.211704,"y":-19.98179},{"x":-40.890559,"y":-20.235395}]} />
    <copperpour name="Net__N17_G__bottom_202_0" connectsTo="net.Net__N17_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.389441,"y":14.774605},{"x":-22.519522,"y":14.970877},{"x":-22.750485,"y":15.015846},{"x":-22.809371,"y":14.596112},{"x":-22.677686,"y":14.524284}]} />
    <copperpour name="VDD_top_203_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.80237,"y":11.81039},{"x":-37.817631,"y":11.95961},{"x":-38.204154,"y":12.070485},{"x":-38.250994,"y":11.839899},{"x":-38.119441,"y":11.644605}]} />
    <copperpour name="X_bottom_204_0" connectsTo="net.X" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":1.516622,"y":-21.933757},{"x":1.558978,"y":-21.789862},{"x":1.220559,"y":-21.534605},{"x":1.089041,"y":-21.729718},{"x":1.135846,"y":-21.960485}]} />
    <copperpour name="VDD_top_205_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":3.426736,"y":-26.314224},{"x":3.293263,"y":-26.245777},{"x":3.029441,"y":-26.474605},{"x":3.159544,"y":-26.670889},{"x":3.390485,"y":-26.715846}]} />
    <copperpour name="X_bottom_206_0" connectsTo="net.X" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.38671,"y":-22.406033},{"x":3.339905,"y":-22.175266},{"x":2.959129,"y":-22.201995},{"x":2.916773,"y":-22.345889},{"x":3.255192,"y":-22.601146}]} />
    <copperpour name="Net__N35_G__top_207_0" connectsTo="net.Net__N35_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.494847,"y":-17.883477},{"x":-41.489515,"y":-17.545846},{"x":-41.720353,"y":-17.499065},{"x":-41.915395,"y":-17.630559},{"x":-41.635155,"y":-17.936521}]} />
    <copperpour name="Net__N21_G__bottom_208_0" connectsTo="net.Net__N21_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.024515,"y":11.228346},{"x":-8.050638,"y":11.608794},{"x":-8.194471,"y":11.651357},{"x":-8.450395,"y":11.313059},{"x":-8.255283,"y":11.181542}]} />
    <copperpour name="FACi_top_209_0" connectsTo="net.FACi" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":8.595395,"y":-18.799441},{"x":8.444822,"y":-18.48984},{"x":8.295178,"y":-18.50016},{"x":8.169515,"y":-18.884154},{"x":8.400068,"y":-18.930997}]} />
    <copperpour name="VDD_bottom_210_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.897737,"y":11.52476},{"x":-38.019515,"y":11.885846},{"x":-38.250629,"y":11.840776},{"x":-38.380559,"y":11.644605},{"x":-38.014233,"y":11.430269}]} />
    <copperpour name="VDD_top_211_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-12.825017,"y":-15.131546},{"x":-13.034605,"y":-14.834441},{"x":-13.230846,"y":-14.964467},{"x":-13.275846,"y":-15.195485},{"x":-12.904985,"y":-15.258452}]} />
    <copperpour name="VDD_bottom_212_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.789371,"y":10.039224},{"x":-36.659441,"y":10.235395},{"x":-37.025767,"y":10.449731},{"x":-37.142263,"y":10.35524},{"x":-37.020485,"y":9.994154}]} />
    <copperpour name="Net__N17_G__top_213_0" connectsTo="net.Net__N17_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.799429,"y":13.493251},{"x":-22.829677,"y":13.640168},{"x":-23.109441,"y":13.845395},{"x":-23.240979,"y":13.649799},{"x":-23.194154,"y":13.419515}]} />
    <copperpour name="GND_bottom_214_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.470559,"y":-25.765395},{"x":3.340632,"y":-25.569226},{"x":3.109515,"y":-25.524154},{"x":2.986762,"y":-25.884033},{"x":3.102951,"y":-25.978902}]} />
    <copperpour name="Net__N22_D__top_215_0" connectsTo="net.Net__N22_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-4.864154,"y":27.247015},{"x":-4.909093,"y":27.477919},{"x":-5.105395,"y":27.608059},{"x":-5.331429,"y":27.365597},{"x":-5.26857,"y":27.229403}]} />
    <copperpour name="Net__D16_A__bottom_216_0" connectsTo="net.Net__D16_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.009005,"y":-23.360098},{"x":-22.055846,"y":-23.129515},{"x":-22.466951,"y":-23.239391},{"x":-22.481731,"y":-23.38866},{"x":-22.140559,"y":-23.555395}]} />
    <copperpour name="VDD_top_217_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.484774,"y":27.707979},{"x":-42.615227,"y":27.78202},{"x":-42.890559,"y":27.570395},{"x":-42.760493,"y":27.374131},{"x":-42.529515,"y":27.329154}]} />
    <copperpour name="Net__D13_A__bottom_218_0" connectsTo="net.Net__D13_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-21.769005,"y":-24.530097},{"x":-21.815846,"y":-24.299515},{"x":-22.227092,"y":-24.41005},{"x":-22.241657,"y":-24.559341},{"x":-21.900559,"y":-24.725395}]} />
    <copperpour name="VDD_top_219_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.682059,"y":30.613235},{"x":-40.817942,"y":30.676764},{"x":-41.060559,"y":30.455395},{"x":-40.930423,"y":30.259095},{"x":-40.699515,"y":30.214154}]} />
    <copperpour name="Net__D13_A__bottom_220_0" connectsTo="net.Net__D13_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.362908,"y":-24.44995},{"x":-23.348343,"y":-24.300659},{"x":-23.689441,"y":-24.134605},{"x":-23.820995,"y":-24.329903},{"x":-23.774154,"y":-24.560485}]} />
    <copperpour name="Net__N23_G__top_221_0" connectsTo="net.Net__N23_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.816537,"y":0.519732},{"x":-40.771654,"y":0.750485},{"x":-41.124458,"y":0.876477},{"x":-41.164726,"y":0.731984},{"x":-41.012895,"y":0.389441}]} />
    <copperpour name="Net__N45_G__bottom_222_0" connectsTo="net.Net__N45_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.119365,"y":-22.220771},{"x":-22.989441,"y":-22.024605},{"x":-23.358811,"y":-21.812242},{"x":-23.474574,"y":-21.90763},{"x":-23.350485,"y":-22.265846}]} />
    <copperpour name="Net__N24_D__top_223_0" connectsTo="net.Net__N24_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-4.075203,"y":26.928896},{"x":-4.225199,"y":26.927922},{"x":-4.555846,"y":26.877985},{"x":-4.509994,"y":26.646501},{"x":-4.314605,"y":26.516941}]} />
    <copperpour name="VDD_bottom_224_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.856431,"y":20.187095},{"x":-37.857178,"y":20.337092},{"x":-38.189441,"y":20.507684},{"x":-38.320999,"y":20.312285},{"x":-38.274154,"y":20.081804}]} />
    <copperpour name="Net__P47_D__top_225_0" connectsTo="net.Net__P47_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-16.339515,"y":-22.285846},{"x":-16.569305,"y":-22.239282},{"x":-16.765395,"y":-22.370559},{"x":-16.616722,"y":-22.636882},{"x":-16.509,"y":-22.741263}]} />
    <copperpour name="VDD_bottom_226_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.806431,"y":20.172418},{"x":-40.807178,"y":20.322415},{"x":-41.139441,"y":20.493007},{"x":-41.270999,"y":20.297608},{"x":-41.224154,"y":20.067127}]} />
    <copperpour name="GND_top_227_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-10.474154,"y":-12.205485},{"x":-10.51908,"y":-11.974611},{"x":-10.715395,"y":-11.844441},{"x":-10.939222,"y":-12.070927},{"x":-10.880776,"y":-12.209072}]} />
    <copperpour name="VDD_bottom_228_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.336431,"y":20.164806},{"x":-42.337178,"y":20.314803},{"x":-42.669441,"y":20.485395},{"x":-42.800999,"y":20.289996},{"x":-42.754154,"y":20.059515}]} />
    <copperpour name="FACi_top_229_0" connectsTo="net.FACi" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":1.604507,"y":-20.633751},{"x":1.525492,"y":-20.50625},{"x":1.164154,"y":-20.559515},{"x":1.20915,"y":-20.790526},{"x":1.405395,"y":-20.920559}]} />
    <copperpour name="VDD_bottom_230_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.356431,"y":20.179632},{"x":-39.357178,"y":20.329629},{"x":-39.689441,"y":20.500221},{"x":-39.820999,"y":20.304822},{"x":-39.774154,"y":20.074341}]} />
    <copperpour name="GND_top_231_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-14.128148,"y":-10.433566},{"x":-14.221853,"y":-10.316436},{"x":-14.545846,"y":-10.404515},{"x":-14.50078,"y":-10.635624},{"x":-14.304605,"y":-10.765559}]} />
    <copperpour name="FAB_bottom_232_0" connectsTo="net.FAB" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":8.525846,"y":-24.120485},{"x":8.480763,"y":-23.889354},{"x":8.284605,"y":-23.759441},{"x":8.075737,"y":-24.134144},{"x":8.172689,"y":-24.248601}]} />
    <copperpour name="VDD_top_233_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-21.850834,"y":31.000005},{"x":-21.849167,"y":31.149995},{"x":-22.139441,"y":31.275062},{"x":-22.270999,"y":31.079678},{"x":-22.224154,"y":30.849182}]} />
    <copperpour name="Net__N39_G__bottom_234_0" connectsTo="net.Net__N39_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-35.344605,"y":-18.039441},{"x":-35.611126,"y":-17.703132},{"x":-35.753946,"y":-17.748987},{"x":-35.770485,"y":-18.124154},{"x":-35.539695,"y":-18.170952}]} />
    <copperpour name="Net__N22_D__top_235_0" connectsTo="net.Net__N22_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.989002,"y":29.21756},{"x":-8.120559,"y":29.412895},{"x":-8.404564,"y":29.26736},{"x":-8.395434,"y":29.11764},{"x":-8.035846,"y":28.987015}]} />
    <copperpour name="Net__N39_G__bottom_236_0" connectsTo="net.Net__N39_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.286054,"y":-15.601013},{"x":-36.269515,"y":-15.225846},{"x":-36.500305,"y":-15.179048},{"x":-36.695395,"y":-15.310559},{"x":-36.428874,"y":-15.646868}]} />
    <copperpour name="GND_top_237_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.942159,"y":27.994757},{"x":-8.057842,"y":28.090242},{"x":-8.390559,"y":27.922895},{"x":-8.260636,"y":27.726729},{"x":-8.029515,"y":27.681654}]} />
    <copperpour name="VDD_bottom_238_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.769001,"y":20.320004},{"x":-36.900559,"y":20.515395},{"x":-37.23263,"y":20.340199},{"x":-37.231884,"y":20.190201},{"x":-36.815846,"y":20.089515}]} />
    <copperpour name="VDD_top_239_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-14.953827,"y":-11.984102},{"x":-15.046174,"y":-11.865899},{"x":-15.365846,"y":-11.944515},{"x":-15.320788,"y":-12.175615},{"x":-15.124605,"y":-12.305559}]} />
    <copperpour name="VDD_bottom_240_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.819001,"y":20.30483},{"x":-39.950559,"y":20.500221},{"x":-40.28263,"y":20.325024},{"x":-40.281883,"y":20.175027},{"x":-39.865846,"y":20.074341}]} />
    <copperpour name="GND_top_241_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.546495,"y":10.823907},{"x":-39.633506,"y":10.946092},{"x":-39.965846,"y":10.880485},{"x":-39.920814,"y":10.64942},{"x":-39.724605,"y":10.519441}]} />
    <copperpour name="VDD_bottom_242_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.269001,"y":20.297616},{"x":-41.400559,"y":20.493007},{"x":-41.73263,"y":20.31781},{"x":-41.731883,"y":20.167813},{"x":-41.315846,"y":20.067127}]} />
    <copperpour name="Net__N22_D__top_243_0" connectsTo="net.Net__N22_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.57031,"y":27.973346},{"x":-6.646522,"y":28.30747},{"x":-6.793478,"y":28.33753},{"x":-6.99619,"y":28.058059},{"x":-6.800995,"y":27.926521}]} />
    <copperpour name="VDD_bottom_244_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-38.319001,"y":20.312293},{"x":-38.450559,"y":20.507684},{"x":-38.78263,"y":20.332487},{"x":-38.781883,"y":20.18249},{"x":-38.365846,"y":20.081804}]} />
    <copperpour name="VDD_top_245_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-39.581616,"y":11.810471},{"x":-39.598385,"y":11.959529},{"x":-39.944154,"y":12.070485},{"x":-39.990993,"y":11.839889},{"x":-39.859441,"y":11.644605}]} />
    <copperpour name="GND_bottom_246_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-8.739605,"y":15.031941},{"x":-8.93492,"y":15.163496},{"x":-9.165485,"y":15.116654},{"x":-9.047162,"y":14.70379},{"x":-8.897647,"y":14.691756}]} />
    <copperpour name="VDD_top_247_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-11.59225,"y":-12.857869},{"x":-11.62775,"y":-12.712131},{"x":-11.954154,"y":-12.649515},{"x":-12.000971,"y":-12.880236},{"x":-11.869441,"y":-13.075395}]} />
    <copperpour name="GND_bottom_248_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.034515,"y":11.108346},{"x":-9.152838,"y":11.52121},{"x":-9.302353,"y":11.533244},{"x":-9.460395,"y":11.193059},{"x":-9.26508,"y":11.061504}]} />
    <copperpour name="VDD_top_249_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.303463,"y":11.810286},{"x":-41.316538,"y":11.959714},{"x":-41.664154,"y":12.080485},{"x":-41.710996,"y":11.849913},{"x":-41.579441,"y":11.654605}]} />
    <copperpour name="FAB_bottom_250_0" connectsTo="net.FAB" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.655846,"y":-23.920485},{"x":3.61089,"y":-23.689545},{"x":3.414605,"y":-23.559441},{"x":3.160729,"y":-23.835399},{"x":3.228996,"y":-23.968964}]} />
    <copperpour name="Net__N35_G__top_251_0" connectsTo="net.Net__N35_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-40.122013,"y":-15.066666},{"x":-40.257988,"y":-15.003335},{"x":-40.490559,"y":-15.204605},{"x":-40.360422,"y":-15.400906},{"x":-40.129515,"y":-15.445846}]} />
    <copperpour name="FAB_bottom_252_0" connectsTo="net.FAB" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":2.709271,"y":-24.234601},{"x":2.641004,"y":-24.101036},{"x":2.214154,"y":-24.149515},{"x":2.25911,"y":-24.380455},{"x":2.455395,"y":-24.510559}]} />
    <copperpour name="Net__N33_S__top_253_0" connectsTo="net.Net__N33_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":7.093053,"y":-23.386302},{"x":6.943297,"y":-23.377771},{"x":6.699441,"y":-23.544605},{"x":6.830056,"y":-23.739002},{"x":7.060485,"y":-23.785846}]} />
    <copperpour name="Net__D13_A__bottom_254_0" connectsTo="net.Net__D13_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.106368,"y":-21.654244},{"x":-20.36057,"y":-21.379441},{"x":-20.556856,"y":-21.509548},{"x":-20.601811,"y":-21.740485},{"x":-20.174298,"y":-21.787981}]} />
    <copperpour name="VDD_top_255_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-12.934605,"y":-10.745559},{"x":-13.129773,"y":-10.614027},{"x":-13.360485,"y":-10.660846},{"x":-13.293031,"y":-10.982928},{"x":-13.14697,"y":-11.017072}]} />
    <copperpour name="Net__D13_A__bottom_256_0" connectsTo="net.Net__D13_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.779109,"y":-22.920452},{"x":-17.734154,"y":-22.689515},{"x":-18.161667,"y":-22.642019},{"x":-18.229597,"y":-22.775756},{"x":-17.975395,"y":-23.050559}]} />
    <copperpour name="Net__N18_G__top_257_0" connectsTo="net.Net__N18_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.842537,"y":14.692768},{"x":-23.849515,"y":15.055846},{"x":-24.080436,"y":15.010899},{"x":-24.210559,"y":14.814605},{"x":-23.977463,"y":14.627232}]} />
    <copperpour name="Net__D8_K__bottom_258_0" connectsTo="net.Net__D8_K_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.309441,"y":28.872105},{"x":-9.439553,"y":29.068394},{"x":-9.670485,"y":29.113346},{"x":-9.715513,"y":28.68418},{"x":-9.581349,"y":28.617098}]} />
    <copperpour name="Net__D16_A__top_259_0" connectsTo="net.Net__D16_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-18.360154,"y":-25.960988},{"x":-18.314154,"y":-25.729515},{"x":-18.582291,"y":-25.623486},{"x":-18.730492,"y":-25.600329},{"x":-18.590485,"y":-26.005846}]} />
    <copperpour name="Net__D8_K__bottom_260_0" connectsTo="net.Net__D8_K_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-10.904487,"y":25.97082},{"x":-11.038651,"y":26.037902},{"x":-11.310559,"y":25.782895},{"x":-11.180447,"y":25.586606},{"x":-10.949515,"y":25.541654}]} />
    <copperpour name="GND_top_261_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.004605,"y":30.894441},{"x":-42.19987,"y":31.025991},{"x":-42.430485,"y":30.979154},{"x":-42.324359,"y":30.654784},{"x":-42.175641,"y":30.635216}]} />
    <copperpour name="GND_bottom_262_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.758431,"y":-25.788533},{"x":3.805865,"y":-25.646231},{"x":3.470559,"y":-25.374605},{"x":3.339052,"y":-25.569684},{"x":3.385846,"y":-25.800485}]} />
    <copperpour name="Net__N39_G__top_263_0" connectsTo="net.Net__N39_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-36.499862,"y":-15.18099},{"x":-36.545846,"y":-14.949515},{"x":-36.832691,"y":-14.95549},{"x":-36.981255,"y":-14.976192},{"x":-36.695395,"y":-15.310559}]} />
    <copperpour name="Net__D16_A__bottom_264_0" connectsTo="net.Net__D16_A_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-18.164605,"y":-26.090559},{"x":-18.359684,"y":-25.959052},{"x":-18.590485,"y":-26.005846},{"x":-18.578533,"y":-26.378431},{"x":-18.436231,"y":-26.425865}]} />
    <copperpour name="Net__N18_G__top_265_0" connectsTo="net.Net__N18_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.415904,"y":12.575233},{"x":-22.404098,"y":12.724767},{"x":-22.659441,"y":12.875395},{"x":-22.790996,"y":12.680078},{"x":-22.744154,"y":12.449515}]} />
    <copperpour name="GND_bottom_266_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-14.082275,"y":-10.854778},{"x":-14.034412,"y":-10.712619},{"x":-14.369441,"y":-10.439605},{"x":-14.500947,"y":-10.634681},{"x":-14.454154,"y":-10.865485}]} />
    <copperpour name="GND_top_267_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-14.249515,"y":-14.579154},{"x":-14.355658,"y":-14.259913},{"x":-14.504342,"y":-14.240088},{"x":-14.675395,"y":-14.494441},{"x":-14.480132,"y":-14.625991}]} />
    <copperpour name="GND_bottom_268_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-10.519053,"y":-11.975319},{"x":-10.565846,"y":-11.744515},{"x":-10.937725,"y":-11.755222},{"x":-10.985588,"y":-11.897381},{"x":-10.650559,"y":-12.170395}]} />
    <copperpour name="Net__N20_D__top_269_0" connectsTo="net.Net__N20_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.294024,"y":12.292716},{"x":-7.164441,"y":12.487895},{"x":-7.55478,"y":12.718874},{"x":-7.522374,"y":12.572417},{"x":-7.525485,"y":12.246654}]} />
    <copperpour name="VDD_bottom_270_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.754154,"y":20.059515},{"x":-42.799062,"y":20.290345},{"x":-42.995395,"y":20.420559},{"x":-43.244077,"y":20.154145},{"x":-43.192318,"y":20.013358}]} />
    <copperpour name="GND_top_271_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-21.004605,"y":-24.179441},{"x":-21.125,"y":-23.895},{"x":-21.275,"y":-23.895},{"x":-21.395395,"y":-24.179441},{"x":-21.2,"y":-24.311}]} />
    <copperpour name="VDD_bottom_272_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.074605,"y":30.949108},{"x":-22.269936,"y":31.080664},{"x":-22.500485,"y":31.033821},{"x":-22.374788,"y":30.619488},{"x":-22.225099,"y":30.609849}]} />
    <copperpour name="FACi_top_273_0" connectsTo="net.FACi" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":1.711623,"y":-23.072839},{"x":1.81809,"y":-22.967178},{"x":1.344154,"y":-23.029515},{"x":1.389296,"y":-23.259291},{"x":1.585395,"y":-23.390559}]} />
    <copperpour name="VDD_bottom_274_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.199515,"y":28.640846},{"x":-22.325212,"y":29.055179},{"x":-22.474901,"y":29.064818},{"x":-22.625395,"y":28.725559},{"x":-22.430064,"y":28.594003}]} />
    <copperpour name="Net__N20_D__top_275_0" connectsTo="net.Net__N20_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-5.201616,"y":12.072425},{"x":-5.350257,"y":12.092564},{"x":-5.669154,"y":12.262985},{"x":-5.715134,"y":12.03151},{"x":-5.584441,"y":11.837105}]} />
    <copperpour name="GND_bottom_276_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.069605,"y":10.931941},{"x":-9.264937,"y":11.063497},{"x":-9.495485,"y":11.016654},{"x":-9.369396,"y":10.602245},{"x":-9.219699,"y":10.592732}]} />
    <copperpour name="GND_top_277_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-18.669441,"y":-24.024605},{"x":-18.891016,"y":-23.815568},{"x":-19.028983,"y":-23.874434},{"x":-19.030485,"y":-24.174154},{"x":-18.799608,"y":-24.220919}]} />
    <copperpour name="GND_bottom_278_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":5.315846,"y":-23.840485},{"x":5.270749,"y":-23.609338},{"x":5.074605,"y":-23.479441},{"x":4.871206,"y":-23.862333},{"x":4.970536,"y":-23.974733}]} />
    <copperpour name="Net__N21_G__top_279_0" connectsTo="net.Net__N21_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-7.615444,"y":13.841604},{"x":-7.569154,"y":14.072985},{"x":-7.936185,"y":14.042546},{"x":-8.070588,"y":14.109147},{"x":-7.810395,"y":13.711941}]} />
    <copperpour name="GND_bottom_280_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.869515,"y":17.273346},{"x":-43.876115,"y":17.642875},{"x":-44.017789,"y":17.692153},{"x":-44.295395,"y":17.358059},{"x":-44.100328,"y":17.226556}]} />
    <copperpour name="Net__N17_G__top_281_0" connectsTo="net.Net__N17_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.109441,"y":13.454605},{"x":-23.239183,"y":13.650575},{"x":-23.470485,"y":13.604154},{"x":-23.453734,"y":13.345478},{"x":-23.367341,"y":13.222855}]} />
    <copperpour name="GND_bottom_282_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.264605,"y":18.936941},{"x":-43.459672,"y":19.068444},{"x":-43.690485,"y":19.021654},{"x":-43.683885,"y":18.652125},{"x":-43.542211,"y":18.602847}]} />
    <copperpour name="VDD_top_283_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.990436,"y":11.810613},{"x":-43.009564,"y":11.959387},{"x":-43.304154,"y":12.070485},{"x":-43.350991,"y":11.839873},{"x":-43.219441,"y":11.644605}]} />
    <copperpour name="Net__N35_D__bottom_284_0" connectsTo="net.Net__N35_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-37.465474,"y":-18.145359},{"x":-37.415688,"y":-18.003862},{"x":-37.749441,"y":-17.724605},{"x":-37.880943,"y":-17.919669},{"x":-37.834154,"y":-18.150485}]} />
    <copperpour name="FAB_top_285_0" connectsTo="net.FAB" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":8.868077,"y":-23.974975},{"x":8.871921,"y":-23.825025},{"x":8.610559,"y":-23.694605},{"x":8.479001,"y":-23.889975},{"x":8.610559,"y":-24.085395}]} />
    <copperpour name="FACi_bottom_286_0" connectsTo="net.FACi" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":1.210943,"y":-20.789669},{"x":1.079441,"y":-20.594605},{"x":0.745688,"y":-20.873862},{"x":0.795474,"y":-21.015359},{"x":1.164154,"y":-21.020485}]} />
    <copperpour name="Net__N36_G__top_287_0" connectsTo="net.Net__N36_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-41.615,"y":-15.785},{"x":-41.615,"y":-15.635},{"x":-41.859441,"y":-15.514605},{"x":-41.991,"y":-15.71},{"x":-41.859441,"y":-15.905395}]} />
    <copperpour name="Net__N20_D__bottom_288_0" connectsTo="net.Net__N20_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-9.626599,"y":12.342069},{"x":-9.581654,"y":12.572985},{"x":-10.01527,"y":12.611285},{"x":-10.080039,"y":12.475989},{"x":-9.822895,"y":12.211941}]} />
    <copperpour name="Net__N45_G__top_289_0" connectsTo="net.Net__N45_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.845582,"y":-22.402003},{"x":-22.924605,"y":-22.089441},{"x":-23.120695,"y":-22.220718},{"x":-23.165846,"y":-22.450485},{"x":-22.737734,"y":-22.506255}]} />
    <copperpour name="Net__N14_D__bottom_290_0" connectsTo="net.Net__N14_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.651104,"y":27.203051},{"x":-22.658498,"y":27.352867},{"x":-23.074154,"y":27.485485},{"x":-23.120998,"y":27.254951},{"x":-22.989441,"y":27.059605}]} />
    <copperpour name="X_top_291_0" connectsTo="net.X" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":1.090164,"y":-21.730986},{"x":0.959441,"y":-21.534605},{"x":0.749349,"y":-21.719888},{"x":0.60139,"y":-21.744547},{"x":0.959441,"y":-21.925395}]} />
    <copperpour name="Net__N14_D__bottom_292_0" connectsTo="net.Net__N14_D_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.687563,"y":27.375049},{"x":-20.81912,"y":27.570395},{"x":-21.157457,"y":27.426949},{"x":-21.150063,"y":27.277133},{"x":-20.734407,"y":27.144515}]} />
    <copperpour name="Net__N17_G__top_293_0" connectsTo="net.Net__N17_G_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.339074,"y":14.674382},{"x":-22.289515,"y":14.924154},{"x":-22.520325,"y":14.970945},{"x":-22.650559,"y":14.774605},{"x":-22.480926,"y":14.62562}]} />
    <copperpour name="X_bottom_294_0" connectsTo="net.X" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.854581,"y":-22.45819},{"x":3.847343,"y":-22.308366},{"x":3.431597,"y":-22.175266},{"x":3.384753,"y":-22.405799},{"x":3.51631,"y":-22.601146}]} />
    <copperpour name="X_top_295_0" connectsTo="net.X" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":6.861139,"y":-22.044447},{"x":6.966685,"y":-21.937865},{"x":6.564154,"y":-22.019515},{"x":6.60929,"y":-22.249297},{"x":6.840485,"y":-22.295846}]} />
    <copperpour name="X_bottom_296_0" connectsTo="net.X" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":6.610998,"y":-22.249952},{"x":6.479441,"y":-22.054605},{"x":6.14117,"y":-22.197561},{"x":6.148408,"y":-22.347385},{"x":6.564154,"y":-22.480485}]} />
    <copperpour name="Net__D13_A__top_297_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-21.756524,"y":-24.83783},{"x":-21.574605,"y":-24.660559},{"x":-21.77099,"y":-24.529864},{"x":-21.965395,"y":-24.660559},{"x":-21.776948,"y":-24.986432}]} />
    <copperpour name="GND_bottom_298_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.047257,"y":18.839072},{"x":-42.996412,"y":18.980192},{"x":-43.329441,"y":19.262895},{"x":-43.46094,"y":19.067838},{"x":-43.414154,"y":18.837015}]} />
    <copperpour name="GND_top_299_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-6.494515,"y":11.388346},{"x":-6.533804,"y":11.552705},{"x":-6.566225,"y":11.699159},{"x":-6.855559,"y":11.537895},{"x":-6.725976,"y":11.342284}]} />
    <copperpour name="GND_bottom_300_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-42.43906,"y":18.699662},{"x":-42.485846,"y":18.930485},{"x":-42.852743,"y":18.928428},{"x":-42.903588,"y":18.787308},{"x":-42.570559,"y":18.504605}]} />
    <copperpour name="GND_top_301_0" connectsTo="net.GND" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-43.229515,"y":19.113346},{"x":-43.280543,"y":19.309203},{"x":-43.419456,"y":19.365797},{"x":-43.590559,"y":19.262895},{"x":-43.460377,"y":19.066574}]} />
    <copperpour name="GND_bottom_302_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.924605,"y":-25.989441},{"x":-21.065637,"y":-25.651433},{"x":-21.21549,"y":-25.658056},{"x":-21.350485,"y":-26.074154},{"x":-21.119956,"y":-26.120999}]} />
    <copperpour name="VDD_top_303_0" connectsTo="net.VDD" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.982732,"y":10.751553},{"x":-23.872511,"y":10.853295},{"x":-24.039441,"y":10.955395},{"x":-24.170678,"y":10.760734},{"x":-23.974605,"y":10.629441}]} />
    <copperpour name="GND_bottom_304_0" connectsTo="net.GND" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-21.10451,"y":-24.771944},{"x":-20.969515,"y":-24.355846},{"x":-21.200044,"y":-24.309001},{"x":-21.395395,"y":-24.440559},{"x":-21.254363,"y":-24.778567}]} />
    <copperpour name="Net__N33_S__top_305_0" connectsTo="net.Net__N33_S_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":6.918066,"y":-23.820709},{"x":7.067823,"y":-23.829239},{"x":7.060485,"y":-23.694154},{"x":6.830056,"y":-23.739002},{"x":6.960559,"y":-23.935395}]} />
    <copperpour name="Net__N52_S__bottom_306_0" connectsTo="net.Net__N52_S_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":3.703692,"y":-24.450193},{"x":3.602217,"y":-24.339727},{"x":3.264154,"y":-24.479515},{"x":3.309264,"y":-24.710676},{"x":3.505395,"y":-24.840559}]} />
    <copperpour name="Net__P47_D__top_307_0" connectsTo="net.Net__P47_D_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-17.740546,"y":-21.132102},{"x":-17.927358,"y":-21.238973},{"x":-17.649166,"y":-21.251054}]} />
    <copperpour name="VDD_bottom_308_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-24.161564,"y":25.834687},{"x":-24.167884,"y":25.984553},{"x":-24.584154,"y":26.120485},{"x":-24.630999,"y":25.889958},{"x":-24.499441,"y":25.694605}]} />
    <copperpour name="Net__D13_A__top_309_0" connectsTo="net.Net__D13_A_" layer="top" clearance={0.135} coveredWithSolderMask outline={[{"x":-20.628048,"y":-21.530829},{"x":-20.482781,"y":-21.49345},{"x":-20.78645,"y":-21.555846}]} />
    <copperpour name="VDD_bottom_310_0" connectsTo="net.VDD" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-22.969001,"y":25.960042},{"x":-23.100559,"y":26.155395},{"x":-23.438436,"y":26.015313},{"x":-23.432116,"y":25.865447},{"x":-23.015846,"y":25.729515}]} />
    <copperpour name="Net__N18_G__bottom_311_0" connectsTo="net.Net__N18_G_" layer="bottom" clearance={0.135} coveredWithSolderMask outline={[{"x":-23.775761,"y":13.499521},{"x":-23.63881,"y":13.560712},{"x":-24.054154,"y":13.670485},{"x":-24.100407,"y":13.440913},{"x":-23.969441,"y":13.244605}]} />
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
