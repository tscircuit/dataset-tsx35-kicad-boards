import { KiCadSchematic, KiCadNet } from './schematic';
// Antmicro ECP5 DC-SCM
// Source: https://github.com/antmicro/ecp5-dc-scm
// Commit: 0019313fd2e214f618788e5e61636a4a023ee361; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_R79, Footprint_R95, Footprint_C110, Footprint_U15, Footprint_C111, Footprint_U11, Footprint_C240, Footprint_C201, Footprint_C199, Footprint_R80, Footprint_R78, Footprint_C197, Footprint_C202, Footprint_C198, Footprint_C200, Footprint_C78, Footprint_R99, Footprint_R98, Footprint_R89, Footprint_C109, Footprint_C108, Footprint_C107, Footprint_C106, Footprint_L1, Footprint_D7, Footprint_D8, Footprint_D9, Footprint_D10, Footprint_D11, Footprint_D12, Footprint_R94, Footprint_R101, Footprint_D13, Footprint_TP7, Footprint_U12, Footprint_U10, Footprint_U7, Footprint_C55, Footprint_R57, Footprint_C196, Footprint_D3, Footprint_D4, Footprint_D5, Footprint_Q1, Footprint_Q2, Footprint_Q3, Footprint_R69, Footprint_R70, Footprint_R71, Footprint_U21, Footprint_R10, Footprint_R7, Footprint_R6, Footprint_R5, Footprint_U1, Footprint_C20, Footprint_C26, Footprint_R4, Footprint_R3, Footprint_R2, Footprint_R1, Footprint_R13, Footprint_R48, Footprint_U9, Footprint_R77, Footprint_C41, Footprint_C38, Footprint_R17, Footprint_R18, Footprint_C36, Footprint_C32, Footprint_R19, Footprint_C40, Footprint_C31, Footprint_C42, Footprint_R20, Footprint_C37, Footprint_C35, Footprint_C33, Footprint_J2, Footprint_D1, Footprint_U4, Footprint_U5, Footprint_J1, Footprint_U3, Footprint_U2, Footprint_R126, Footprint_R127, Footprint_R128, Footprint_R129, Footprint_D14, Footprint_C39, Footprint_TP1, Footprint_C241, Footprint_R140, Footprint_TP8, Footprint_TP9, Footprint_TP10, Footprint_TP11, Footprint_R96, Footprint_C104, Footprint_C102, Footprint_R90, Footprint_R97, Footprint_C105, Footprint_R91, Footprint_R137, Footprint_R138, Footprint_R139, Footprint_C95, Footprint_R85, Footprint_D6, Footprint_R120, Footprint_R142, Footprint_L5, Footprint_L6, Footprint_U18, Footprint_U19, Footprint_U20, Footprint_R119, Footprint_R118, Footprint_R121, Footprint_R117, Footprint_R116, Footprint_R115, Footprint_R114, Footprint_U17, Footprint_R143, Footprint_C113, Footprint_C115, Footprint_C130, Footprint_C131, Footprint_C128, Footprint_C125, Footprint_C126, Footprint_C124, Footprint_C123, Footprint_C120, Footprint_C121, Footprint_C119, Footprint_C118, Footprint_C116, Footprint_C117, Footprint_C114, Footprint_R145, Footprint_L3, Footprint_R141, Footprint_C122, Footprint_C127, Footprint_C132, Footprint_R123, Footprint_L7, Footprint_L4, Footprint_R100, Footprint_R93, Footprint_J7, Footprint_R75, Footprint_C56, Footprint_U8, Footprint_TP2, Footprint_TP3, Footprint_TP6, Footprint_TP12, Footprint_C100, Footprint_R88, Footprint_C96, Footprint_C97, Footprint_C248, Footprint_SW1, Footprint_R86, Footprint_R87, Footprint_L2, Footprint_C129, Footprint_C101, Footprint_C260, Footprint_C261, Footprint_C59, Footprint_C112, Footprint_Y4, Footprint_TP15, Footprint_TP14, Footprint_TP13, Footprint_J5, Footprint_J6, Footprint_C262, Footprint_R8, Footprint_TP16, Footprint_R144, Footprint_U16, Footprint_U6, Footprint_R9, Footprint_J8, Footprint_J18, Footprint_Y2, Footprint_Y3, Footprint_Q17, Footprint_D15, Footprint_R130, Footprint_F1, Footprint_TP4, Footprint_TP5, Footprint_C34, Footprint_N1, Footprint_N2, Footprint_Y5, Footprint_U14, Footprint_J4, Footprint_J9, Footprint_H2, Footprint_U13, Footprint_J3, Footprint_H1, Footprint_R45, Footprint_D2, Footprint_Y1, Footprint_R11, Footprint_Q11, Footprint_Q12, Footprint_Q13, Footprint_Q14, Footprint_Q15, Footprint_R104, Footprint_R105, Footprint_R107, Footprint_R108, Footprint_R109, Footprint_R110, Footprint_R111, Footprint_R112, Footprint_R113, Footprint_R106, Footprint_R15, Footprint_R47, Footprint_R132, Footprint_C49, Footprint_R68, Footprint_R66, Footprint_R64, Footprint_R63, Footprint_R61, Footprint_C50, Footprint_C48, Footprint_C51, Footprint_C52, Footprint_C53, Footprint_C64, Footprint_C67, Footprint_C72, Footprint_C79, Footprint_C80, Footprint_C81, Footprint_C82, Footprint_C83, Footprint_C84, Footprint_C85, Footprint_C86, Footprint_C88, Footprint_C89, Footprint_C92, Footprint_C94, Footprint_R76, Footprint_R81, Footprint_R82, Footprint_C133, Footprint_C134, Footprint_C136, Footprint_C137, Footprint_C138, Footprint_C143, Footprint_C145, Footprint_C147, Footprint_C148, Footprint_C150, Footprint_C152, Footprint_C154, Footprint_C157, Footprint_C155, Footprint_C156, Footprint_C160, Footprint_C158, Footprint_C159, Footprint_C163, Footprint_C161, Footprint_C162, Footprint_C164, Footprint_C165, Footprint_C166, Footprint_C167, Footprint_C168, Footprint_C169, Footprint_C170, Footprint_C171, Footprint_C172, Footprint_C173, Footprint_C174, Footprint_C175, Footprint_C176, Footprint_C177, Footprint_C178, Footprint_C179, Footprint_C181, Footprint_C182, Footprint_C183, Footprint_C184, Footprint_C185, Footprint_C186, Footprint_C187, Footprint_C188, Footprint_C189, Footprint_C190, Footprint_C191, Footprint_C192, Footprint_C193, Footprint_C203, Footprint_C204, Footprint_C206, Footprint_C207, Footprint_C209, Footprint_C210, Footprint_C211, Footprint_C212, Footprint_C213, Footprint_C214, Footprint_C215, Footprint_C218, Footprint_C219, Footprint_C220, Footprint_C221, Footprint_C222, Footprint_C223, Footprint_C224, Footprint_C225, Footprint_C226, Footprint_C228, Footprint_C229, Footprint_C230, Footprint_C231, Footprint_C232, Footprint_C233, Footprint_C234, Footprint_C235, Footprint_C236, Footprint_C237, Footprint_C238, Footprint_C239, Footprint_FB4, Footprint_FB5, Footprint_FB6, Footprint_FB7, Footprint_FB8, Footprint_C139, Footprint_C140, Footprint_C141, Footprint_C142, Footprint_C144, Footprint_C146, Footprint_C149, Footprint_C151, Footprint_C194, Footprint_C180, Footprint_C153, Footprint_C135, Footprint_C195, Footprint_C22, Footprint_C21, Footprint_C19, Footprint_C18, Footprint_C17, Footprint_C16, Footprint_C15, Footprint_C14, Footprint_C13, Footprint_C12, Footprint_C10, Footprint_C8, Footprint_C7, Footprint_C6, Footprint_C3, Footprint_C2, Footprint_FB2, Footprint_FB1, Footprint_C25, Footprint_C24, Footprint_C23, Footprint_C1, Footprint_C47, Footprint_C69, Footprint_C76, Footprint_C70, Footprint_C77, Footprint_C29, Footprint_C30, Footprint_R83, Footprint_C43, Footprint_C44, Footprint_C45, Footprint_R21, Footprint_R23, Footprint_R25, Footprint_R27, Footprint_R29, Footprint_R31, Footprint_R33, Footprint_R35, Footprint_R37, Footprint_R39, Footprint_R41, Footprint_R43, Footprint_C46, Footprint_R24, Footprint_R28, Footprint_R32, Footprint_R36, Footprint_R40, Footprint_R44, Footprint_R22, Footprint_R26, Footprint_R30, Footprint_R34, Footprint_R38, Footprint_R42, Footprint_C208, Footprint_R131, Footprint_R124, Footprint_R125, Footprint_R136, Footprint_R133, Footprint_R134, Footprint_R135, Footprint_R49, Footprint_R50, Footprint_R51, Footprint_R52, Footprint_R53, Footprint_R54, Footprint_R55, Footprint_R56, Footprint_C242, Footprint_C243, Footprint_C244, Footprint_C245, Footprint_C246, Footprint_C247, Footprint_R67, Footprint_R62, Footprint_Q16, Footprint_C205, Footprint_C27, Footprint_C28, Footprint_R12, Footprint_R16, Footprint_C54, Footprint_C60, Footprint_R74, Footprint_C73, Footprint_C75, Footprint_C66, Footprint_C63, Footprint_C61, Footprint_C65, Footprint_C71, Footprint_C68, Footprint_C62, Footprint_R103, Footprint_C90, Footprint_C87, Footprint_Q10, Footprint_C93, Footprint_C216, Footprint_C217, Footprint_R65, Footprint_R102, Footprint_R59, Footprint_C98, Footprint_C99, Footprint_FB9, Footprint_R149, Footprint_R148, Footprint_R147, Footprint_FB10, Footprint_R146, Footprint_C257, Footprint_R150, Footprint_R151, Footprint_C255, Footprint_C254, Footprint_C259, Footprint_C253, Footprint_C258, Footprint_C252, Footprint_C249, Footprint_C251, Footprint_C250, Footprint_C227, Footprint_C256, Footprint_C74, Footprint_C91, Footprint_C57, Footprint_C58, Footprint_FB3, Footprint_R60, Footprint_R14, Footprint_C11, Footprint_C9, Footprint_C5, Footprint_C4 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={90} height={120.4} thickness={1.62} layers={8} outline={[{ "x": -34.19999999999999, "y": -59.39999999999999 }, { "x": -34.89999999999999, "y": -60.2 }, { "x": -43.8, "y": -60.2 }, { "x": -44.99999999999999, "y": -58.2 }, { "x": -44.99999999999999, "y": 60.20000000000001 }, { "x": -8.780000000000001, "y": 60.20000000000001 }, { "x": -8.780000000000001, "y": 57.41000000000001 }, { "x": -8.77523296804695, "y": 57.312963000545444 }, { "x": -8.760977589588563, "y": 57.216860513367465 }, { "x": -8.737371152057463, "y": 57.12261806028035 }, { "x": -8.70464099892348, "y": 57.03114324990825 }, { "x": -8.663102340246184, "y": 56.94331703689598 }, { "x": -8.613155217022154, "y": 56.85998523781285 }, { "x": -8.55528064856172, "y": 56.78195038545633 }, { "x": -8.490035999998469, "y": 56.70996400000294 }, { "x": -8.41804961454477, "y": 56.64471935144003 }, { "x": -8.340014762187963, "y": 56.58684478297998 }, { "x": -8.256682963104595, "y": 56.53689765975635 }, { "x": -8.168856750092118, "y": 56.495359001079485 }, { "x": -8.077381939719857, "y": 56.462628847945936 }, { "x": -7.9831394866326235, "y": 56.4390224104153 }, { "x": -7.88703699945458, "y": 56.42476703195738 }, { "x": -7.789999999999992, "y": 56.4200000000048 }, { "x": -5.1499999999999915, "y": 56.42000000000001 }, { "x": -5.1499999999999915, "y": 41.41000000000001 }, { "x": -5.145232968047296, "y": 41.31296300054508 }, { "x": -5.130977589589222, "y": 41.21686051336671 }, { "x": -5.107371152058391, "y": 41.12261806027918 }, { "x": -5.074640998924622, "y": 41.031143249906634 }, { "x": -5.03310234024751, "y": 40.9433170368939 }, { "x": -4.983155217023594, "y": 40.85998523781031 }, { "x": -4.925280648563231, "y": 40.7819503854533 }, { "x": -4.860035999999994, "y": 40.709963999999445 }, { "x": -4.788049614546267, "y": 40.644719351436066 }, { "x": -4.710014762189374, "y": 40.58684478297555 }, { "x": -4.626682963105878, "y": 40.536897659751475 }, { "x": -4.538856750093217, "y": 40.49535900107418 }, { "x": -4.447381939720742, "y": 40.46262884794022 }, { "x": -4.353139486633253, "y": 40.43902241040922 }, { "x": -4.257036999454911, "y": 40.42476703195095 }, { "x": -4.159999999999997, "y": 40.41999999999807 }, { "x": 4.02000000000001, "y": 40.42 }, { "x": 4.117036999454854, "y": 40.42476703195251 }, { "x": 4.213139486633153, "y": 40.43902241041046 }, { "x": 4.307381939720614, "y": 40.46262884794119 }, { "x": 4.398856750093074, "y": 40.4953590010749 }, { "x": 4.4866829631057215, "y": 40.536897659752 }, { "x": 4.570014762189189, "y": 40.586844782975945 }, { "x": 4.648049614546039, "y": 40.64471935143635 }, { "x": 4.720035999999723, "y": 40.70996399999966 }, { "x": 4.785280648562875, "y": 40.78195038545347 }, { "x": 4.84315521702311, "y": 40.85998523781046 }, { "x": 4.893102340246855, "y": 40.943317036894044 }, { "x": 4.934640998923754, "y": 41.031143249906776 }, { "x": 4.967371152057268, "y": 41.12261806027931 }, { "x": 4.9909775895878, "y": 41.216860513366825 }, { "x": 5.005232968045519, "y": 41.31296300054517 }, { "x": 5.009999999997817, "y": 41.41000000000001 }, { "x": 5.010000000000005, "y": 56.42000000000001 }, { "x": 7.650000000000006, "y": 56.42000000000001 }, { "x": 7.7470369994550055, "y": 56.42476703195267 }, { "x": 7.843139486633447, "y": 56.43902241041071 }, { "x": 7.937381939721064, "y": 56.46262884794151 }, { "x": 8.028856750093695, "y": 56.495359001075244 }, { "x": 8.116682963106527, "y": 56.53689765975234 }, { "x": 8.200014762190207, "y": 56.58684478297623 }, { "x": 8.278049614547314, "y": 56.64471935143658 }, { "x": 8.350036000001296, "y": 56.7099639999998 }, { "x": 8.415280648564789, "y": 56.78195038545353 }, { "x": 8.473155217025422, "y": 56.85998523781042 }, { "x": 8.523102340249622, "y": 56.94331703689392 }, { "x": 8.564640998927032, "y": 57.0311432499066 }, { "x": 8.597371152061115, "y": 57.12261806027911 }, { "x": 8.620977589592258, "y": 57.21686051336663 }, { "x": 8.635232968050659, "y": 57.31296300054503 }, { "x": 8.640000000003681, "y": 57.41000000000001 }, { "x": 8.64, "y": 60.20000000000001 }, { "x": 45, "y": 60.20000000000001 }, { "x": 45, "y": -58.2 }, { "x": 43.900000000000006, "y": -60.2 }, { "x": 35.099999999999994, "y": -60.2 }, { "x": 34.30000000000001, "y": -59.39999999999999 }, { "x": 34.289901000000015, "y": -54.18499999999999 }, { "x": 34.28749276472456, "y": -54.13598176812029 }, { "x": 34.28029151517714, "y": -54.08743561833775 }, { "x": 34.268366602852666, "y": -54.03982907341158 }, { "x": 34.25183287038925, "y": -53.99362060725461 }, { "x": 34.23084954557859, "y": -53.94925522960894 }, { "x": 34.20561870792554, "y": -53.90716020038839 }, { "x": 34.176383342525526, "y": -53.86774091496004 }, { "x": 34.14342500000123, "y": -53.831376999991974 }, { "x": 34.1070610850347, "y": -53.798418657466 }, { "x": 34.06764179960771, "y": -53.76918329206417 }, { "x": 34.02554677038833, "y": -53.74395245440918 }, { "x": 33.98118139274362, "y": -53.72296912959645 }, { "x": 33.93497292658739, "y": -53.70643539713093 }, { "x": 33.88736638166179, "y": -53.69451048480424 }, { "x": 33.838820231879595, "y": -53.687309235254574 }, { "x": 33.78980200000001, "y": -53.68490099997685 }, { "x": 32.28999999999999, "y": -53.68490099999998 }, { "x": 32.24098176812268, "y": -53.687309235277596 }, { "x": 32.19243561834273, "y": -53.69451048482695 }, { "x": 32.144829073419345, "y": -53.70643539715307 }, { "x": 32.09862060726525, "y": -53.72296912961785 }, { "x": 32.05425522962261, "y": -53.74395245442962 }, { "x": 32.01216020040519, "y": -53.76918329208344 }, { "x": 31.972740914980022, "y": -53.79841865748391 }, { "x": 31.93637700001517, "y": -53.831377000008374 }, { "x": 31.90341865749241, "y": -53.86774091497476 }, { "x": 31.87418329209376, "y": -53.907160200401265 }, { "x": 31.8489524544419, "y": -53.94925522961985 }, { "x": 31.82796912963218, "y": -53.99362060726348 }, { "x": 31.81143539716956, "y": -54.03982907341832 }, { "x": 31.799510484845626, "y": -54.08743561834227 }, { "x": 31.792309235298546, "y": -54.13598176812256 }, { "x": 31.789901000023207, "y": -54.18499999999999 }, { "x": 31.80000000000001, "y": -59.39999999999999 }, { "x": 31, "y": -60.2 }, { "x": 14.200000000000003, "y": -60.2 }, { "x": 13.400000000000006, "y": -59.39999999999999 }, { "x": 13.430008, "y": -54.39024499999998 }, { "x": 13.409114816753217, "y": -54.151434822719224 }, { "x": 13.347070095813564, "y": -53.91988077183139 }, { "x": 13.245759034630652, "y": -53.70261850000067 }, { "x": 13.108259918532667, "y": -53.50624941141665 }, { "x": 12.938750588584313, "y": -53.33674008146836 }, { "x": 12.74238150000022, "y": -53.199240965370464 }, { "x": 12.525119228169459, "y": -53.097929904187666 }, { "x": 12.293565177281593, "y": -53.03588518324814 }, { "x": 12.054755000000824, "y": -53.01499200000144 }, { "x": 11.815944822720056, "y": -53.03588518324814 }, { "x": 11.58439077183219, "y": -53.097929904187666 }, { "x": 11.367128500001428, "y": -53.199240965370464 }, { "x": 11.170759411417336, "y": -53.33674008146836 }, { "x": 11.001250081468982, "y": -53.50624941141665 }, { "x": 10.863750965370997, "y": -53.70261850000067 }, { "x": 10.762439904188085, "y": -53.91988077183139 }, { "x": 10.700395183248432, "y": -54.151434822719224 }, { "x": 10.679502000001648, "y": -54.39024499999998 }, { "x": 10.700000000000003, "y": -59.39999999999999 }, { "x": 9.900000000000006, "y": -60.2 }, { "x": 1.5, "y": -60.2 }, { "x": 0.7000000000000028, "y": -59.39999999999999 }, { "x": 0.7199999999999989, "y": -53.94499999999998 }, { "x": 0.7022263843730343, "y": -53.76454145213525 }, { "x": 0.6495885675730619, "y": -53.59101782506265 }, { "x": 0.5641093913800717, "y": -53.43109753445741 }, { "x": 0.44907377259791303, "y": -53.29092622740312 }, { "x": 0.3089024655436532, "y": -53.175890608620946 }, { "x": 0.1489821749384106, "y": -53.090411432427956 }, { "x": -0.024541452134187125, "y": -53.037773615627955 }, { "x": -0.20499999999890406, "y": -53.02000000000096 }, { "x": -0.385458547863621, "y": -53.037773615627955 }, { "x": -0.5589821749362187, "y": -53.090411432427956 }, { "x": -0.7189024655414613, "y": -53.175890608620946 }, { "x": -0.8590737725957212, "y": -53.29092622740312 }, { "x": -0.9741093913778798, "y": -53.43109753445741 }, { "x": -1.05958856757087, "y": -53.59101782506265 }, { "x": -1.1122263843708424, "y": -53.76454145213525 }, { "x": -1.129999999997807, "y": -53.94499999999998 }, { "x": -1.0999999999999943, "y": -59.39999999999999 }, { "x": -1.8999999999999915, "y": -60.2 }, { "x": -18.69999999999999, "y": -60.2 }, { "x": -19.5, "y": -59.39999999999999 }, { "x": -19.485, "y": -54.144999999999996 }, { "x": -19.506616559546316, "y": -53.92552338773167 }, { "x": -19.570635525924757, "y": -53.71448113858891 }, { "x": -19.67459668615963, "y": -53.5199834878524 }, { "x": -19.814504871165212, "y": -53.34950487116443 }, { "x": -19.984983487853142, "y": -53.209596686158804 }, { "x": -20.179481138589622, "y": -53.10563552592386 }, { "x": -20.390523387732358, "y": -53.041616559545346 }, { "x": -20.61000000000068, "y": -53.01999999999897 }, { "x": -20.829476612269005, "y": -53.041616559545346 }, { "x": -21.04051886141174, "y": -53.10563552592386 }, { "x": -21.23501651214822, "y": -53.209596686158804 }, { "x": -21.40549512883615, "y": -53.34950487116443 }, { "x": -21.54540331384173, "y": -53.5199834878524 }, { "x": -21.649364474076606, "y": -53.71448113858891 }, { "x": -21.713383440455047, "y": -53.92552338773167 }, { "x": -21.735000000001364, "y": -54.144999999999996 }, { "x": -21.69999999999999, "y": -59.39999999999999 }, { "x": -22.5, "y": -60.2 }, { "x": -30.89999999999999, "y": -60.2 }, { "x": -31.69999999999999, "y": -59.39999999999999 }, { "x": -31.689999999999998, "y": -54.18499999999999 }, { "x": -31.692408143383886, "y": -54.13598170110676 }, { "x": -31.699609314118035, "y": -54.08743547652644 }, { "x": -31.711534161290118, "y": -54.03982885092806 }, { "x": -31.728067842597255, "y": -53.99362030016765 }, { "x": -31.749051130335403, "y": -53.94925483593427 }, { "x": -31.774281944842585, "y": -53.90715972006264 }, { "x": -31.803517300628116, "y": -53.86774034978559 }, { "x": -31.836475646445635, "y": -53.831376353554205 }, { "x": -31.872839576773885, "y": -53.79841793502381 }, { "x": -31.91225888859222, "y": -53.76918250041591 }, { "x": -31.95435395401259, "y": -53.74395160173596 }, { "x": -31.998719376287966, "y": -53.72296822528524 }, { "x": -32.04492789398776, "y": -53.706434451580165 }, { "x": -32.092534495741305, "y": -53.69450950921454 }, { "x": -32.14108070592215, "y": -53.68730824140805 }, { "x": -32.19009899999999, "y": -53.68490000000783 }, { "x": -33.69070099999999, "y": -53.68570099999998 }, { "x": -33.73971923187925, "y": -53.68810923527478 }, { "x": -33.78826538166139, "y": -53.69531048482169 }, { "x": -33.83587192658716, "y": -53.70723539714585 }, { "x": -33.88208039274372, "y": -53.72376912960907 }, { "x": -33.92644577038888, "y": -53.744752454419725 }, { "x": -33.96854079960883, "y": -53.769983292072865 }, { "x": -34.00796008503643, "y": -53.79921865747308 }, { "x": -34.0443240000036, "y": -53.83217699999766 }, { "x": -34.07728234252852, "y": -53.868540914964555 }, { "x": -34.10651770792907, "y": -53.90796020039191 }, { "x": -34.131748545582596, "y": -53.95005522961161 }, { "x": -34.15273187039365, "y": -53.9944206072566 }, { "x": -34.16926560285728, "y": -54.040629073413 }, { "x": -34.181190515181854, "y": -54.08823561833866 }, { "x": -34.18839176472919, "y": -54.13678176812074 }, { "x": -34.19080000000443, "y": -54.185799999999986 }, { "x": -34.19999999999999, "y": -59.39999999999999 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* R79: R_10k_0402 */}
    <chip name={"R79"} pcbX={-33.7} pcbY={-5.57} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R79 />} noSchematicRepresentation={true}/>

    {/* R95: R_49R9_0402 */}
    <chip name={"R95"} pcbX={-30.65} pcbY={57.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-49R9GLF"} displayName={"R_49R9_0402"} footprint={<Footprint_R95 />} noSchematicRepresentation={true}/>

    {/* C110: C_47u_0603 */}
    <chip name={"C110"} pcbX={-28.25} pcbY={50.45} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C110 />} noSchematicRepresentation={true}/>

    {/* U15: TPS54561QDPRRQ1 */}
    <chip name={"U15"} pcbX={-26.3} pcbY={54.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} manufacturerPartNumber={"TPS54561QDPRRQ1"} displayName={"TPS54561QDPRRQ1"} footprint={<Footprint_U15 />} noSchematicRepresentation={true}/>

    {/* C111: C_47u_0603 */}
    <chip name={"C111"} pcbX={-26.75} pcbY={50.45} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C111 />} noSchematicRepresentation={true}/>

    {/* U11: TPS51200DRCT */}
    <chip name={"U11"} pcbX={-31.278} pcbY={-1.804} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} manufacturerPartNumber={"TPS51200DRCT"} displayName={"TPS51200DRCT"} footprint={<Footprint_U11 />} noSchematicRepresentation={true}/>

    {/* C240: C_100n_0402 */}
    <chip name={"C240"} pcbX={-32.716} pcbY={-5.57} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C240 />} noSchematicRepresentation={true}/>

    {/* C201: C_100n_0402 */}
    <chip name={"C201"} pcbX={-29.78} pcbY={1.18} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C201 />} noSchematicRepresentation={true}/>

    {/* C199: C_10u_0402 */}
    <chip name={"C199"} pcbX={-30.748} pcbY={-5.57} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C199 />} noSchematicRepresentation={true}/>

    {/* R80: R_10k_0402 */}
    <chip name={"R80"} pcbX={-33.2} pcbY={1.03} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R80 />} noSchematicRepresentation={true}/>

    {/* R78: R_10k_0402 */}
    <chip name={"R78"} pcbX={-34.68} pcbY={-2.94} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R78 />} noSchematicRepresentation={true}/>

    {/* C197: C_10u_0402 */}
    <chip name={"C197"} pcbX={-28.78} pcbY={-5.57} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C197 />} noSchematicRepresentation={true}/>

    {/* C202: C_100n_0402 */}
    <chip name={"C202"} pcbX={-31.732} pcbY={-5.57} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C202 />} noSchematicRepresentation={true}/>

    {/* C198: C_10u_0402 */}
    <chip name={"C198"} pcbX={-29.764} pcbY={-5.57} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C198 />} noSchematicRepresentation={true}/>

    {/* C200: C_100n_0402 */}
    <chip name={"C200"} pcbX={-29.78} pcbY={2.18} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C200 />} noSchematicRepresentation={true}/>

    {/* C78: C_10u_0402 */}
    <chip name={"C78"} pcbX={-33.7} pcbY={-0.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C78 />} noSchematicRepresentation={true}/>

    {/* R99: R_470k_0402 */}
    <chip name={"R99"} pcbX={-13.8} pcbY={40.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4703GLF"} displayName={"R_470k_0402"} footprint={<Footprint_R99 />} noSchematicRepresentation={true}/>

    {/* R98: R_10k_0402 */}
    <chip name={"R98"} pcbX={-13.3} pcbY={42.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R98 />} noSchematicRepresentation={true}/>

    {/* R89: R_47k_0402 */}
    <chip name={"R89"} pcbX={-10.9} pcbY={57.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R89 />} noSchematicRepresentation={true}/>

    {/* C109: C_47u_1210 */}
    <chip name={"C109"} pcbX={-13.1} pcbY={44.85} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1210C476K8RACTU"} displayName={"C_47u_1210"} footprint={<Footprint_C109 />} noSchematicRepresentation={true}/>

    {/* C108: C_750p_0402 */}
    <chip name={"C108"} pcbX={-14.8} pcbY={41.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C751J5GACTU"} displayName={"C_750p_0402"} footprint={<Footprint_C108 />} noSchematicRepresentation={true}/>

    {/* C107: C_180p_0402 */}
    <chip name={"C107"} pcbX={-12.3} pcbY={41.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"04025A181JAT2A"} displayName={"C_180p_0402"} footprint={<Footprint_C107 />} noSchematicRepresentation={true}/>

    {/* C106: C_1n8_0402 */}
    <chip name={"C106"} pcbX={-10.8} pcbY={40.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"0402B182K500CT"} displayName={"C_1n8_0402"} footprint={<Footprint_C106 />} noSchematicRepresentation={true}/>

    {/* L1: XAL5030-801 */}
    <chip name={"L1"} pcbX={-18.6} pcbY={43.85} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"XAL5030-801MEC"} displayName={"XAL5030-801"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* D7: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D7"} pcbX={-39.6} pcbY={33.208334} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* D8: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D8"} pcbX={-39.6} pcbY={34.85} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* D9: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D9"} pcbX={-39.6} pcbY={25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* D10: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D10"} pcbX={-39.6} pcbY={26.64167} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* D11: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D11"} pcbX={-39.6} pcbY={28.283336} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* D12: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D12"} pcbX={-39.6} pcbY={29.925002} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* R94: R_0R_1206 */}
    <chip name={"R94"} pcbX={-25.85} pcbY={47.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"MCMR12X000_PTL"} displayName={"R_0R_1206"} footprint={<Footprint_R94 />} noSchematicRepresentation={true}/>

    {/* R101: R_10k_0402 */}
    <chip name={"R101"} pcbX={-19.1} pcbY={40.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R101 />} noSchematicRepresentation={true}/>

    {/* D13: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D13"} pcbX={-39.6} pcbY={31.566668} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* TP7: TP_1mm_SMD */}
    <chip name={"TP7"} pcbX={-17.5} pcbY={40.2} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* U12: LM3881MME_NOPB */}
    <chip name={"U12"} pcbX={-28.15} pcbY={42.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"LM3881MME/NOPB"} displayName={"LM3881MME_NOPB"} footprint={<Footprint_U12 />} noSchematicRepresentation={true}/>

    {/* U10: AS4C256M16D3 */}
    <chip name={"U10"} pcbX={-21.6} pcbY={-4.25} pcbRotation={180} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A3"], "pin4": ["A7"], "pin5": ["A8"], "pin6": ["A9"], "pin7": ["B1"], "pin8": ["B2"], "pin9": ["B3"], "pin10": ["B7"], "pin11": ["B8"], "pin12": ["B9"], "pin13": ["C1"], "pin14": ["C2"], "pin15": ["C3"], "pin16": ["C7"], "pin17": ["C8"], "pin18": ["C9"], "pin19": ["D1"], "pin20": ["D2"], "pin21": ["D3"], "pin22": ["D7"], "pin23": ["D8"], "pin24": ["D9"], "pin25": ["E1"], "pin26": ["E2"], "pin27": ["E3"], "pin28": ["E7"], "pin29": ["E8"], "pin30": ["E9"], "pin31": ["F1"], "pin32": ["F2"], "pin33": ["F3"], "pin34": ["F7"], "pin35": ["F8"], "pin36": ["F9"], "pin37": ["G1"], "pin38": ["G2"], "pin39": ["G3"], "pin40": ["G7"], "pin41": ["G8"], "pin42": ["G9"], "pin43": ["H1"], "pin44": ["H2"], "pin45": ["H3"], "pin46": ["H7"], "pin47": ["H8"], "pin48": ["H9"], "pin49": ["J1"], "pin50": ["J2"], "pin51": ["J3"], "pin52": ["J7"], "pin53": ["J8"], "pin54": ["J9"], "pin55": ["K1"], "pin56": ["K2"], "pin57": ["K3"], "pin58": ["K7"], "pin59": ["K8"], "pin60": ["K9"], "pin61": ["L1"], "pin62": ["L2"], "pin63": ["L3"], "pin64": ["L7"], "pin65": ["L8"], "pin66": ["L9"], "pin67": ["M1"], "pin68": ["M2"], "pin69": ["M3"], "pin70": ["M7"], "pin71": ["M8"], "pin72": ["M9"], "pin73": ["N1"], "pin74": ["N2"], "pin75": ["N3"], "pin76": ["N7"], "pin77": ["N8"], "pin78": ["N9"], "pin79": ["P1"], "pin80": ["P2"], "pin81": ["P3"], "pin82": ["P7"], "pin83": ["P8"], "pin84": ["P9"], "pin85": ["R1"], "pin86": ["R2"], "pin87": ["R3"], "pin88": ["R7"], "pin89": ["R8"], "pin90": ["R9"], "pin91": ["T1"], "pin92": ["T2"], "pin93": ["T3"], "pin94": ["T7"], "pin95": ["T8"], "pin96": ["T9"] }} manufacturerPartNumber={"AS4C256M16D3"} displayName={"AS4C256M16D3"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* U7: NVT2008BQ,115 */}
    <chip name={"U7"} pcbX={-14.2} pcbY={-26.25} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"] }} manufacturerPartNumber={"NVT2008BQ,115"} displayName={"NVT2008BQ,115"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* C55: C_100n_0402 */}
    <chip name={"C55"} pcbX={-17.7} pcbY={-21.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C55 />} noSchematicRepresentation={true}/>

    {/* R57: R_200k_0402 */}
    <chip name={"R57"} pcbX={-18.85} pcbY={-21.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2003GLF"} displayName={"R_200k_0402"} footprint={<Footprint_R57 />} noSchematicRepresentation={true}/>

    {/* C196: C_1n_0402 */}
    <chip name={"C196"} pcbX={-33.68} pcbY={-2.94} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C196 />} noSchematicRepresentation={true}/>

    {/* D3: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D3"} pcbX={34.061} pcbY={57.622} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* D4: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D4"} pcbX={36.061} pcbY={57.622} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* D5: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D5"} pcbX={38.111} pcbY={57.622} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* Q1: 2N7002_SOT-23-3 */}
    <chip name={"Q1"} pcbX={15.175} pcbY={50.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002_SOT-23-3"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* Q2: 2N7002_SOT-23-3 */}
    <chip name={"Q2"} pcbX={15.175} pcbY={46.625} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002_SOT-23-3"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* Q3: 2N7002_SOT-23-3 */}
    <chip name={"Q3"} pcbX={19.1} pcbY={46.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002_SOT-23-3"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* R69: R_1k1_0402 */}
    <chip name={"R69"} pcbX={33} pcbY={54.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1101GLF"} displayName={"R_1k1_0402"} footprint={<Footprint_R69 />} noSchematicRepresentation={true}/>

    {/* R70: R_1k1_0402 */}
    <chip name={"R70"} pcbX={35.05} pcbY={54.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1101GLF"} displayName={"R_1k1_0402"} footprint={<Footprint_R70 />} noSchematicRepresentation={true}/>

    {/* R71: R_1k1_0402 */}
    <chip name={"R71"} pcbX={37.1} pcbY={54.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1101GLF"} displayName={"R_1k1_0402"} footprint={<Footprint_R71 />} noSchematicRepresentation={true}/>

    {/* U21: ECP5UM5G_85_CABGA756 */}
    <chip name={"U21"} pcbX={-0.7} pcbY={-1.45} pcbRotation={0} pinLabels={{ "pin1": ["A2"], "pin2": ["A3"], "pin3": ["A4"], "pin4": ["A5"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A10"], "pin9": ["A11"], "pin10": ["A13"], "pin11": ["A14"], "pin12": ["A15"], "pin13": ["A16"], "pin14": ["A17"], "pin15": ["A18"], "pin16": ["A19"], "pin17": ["A20"], "pin18": ["A22"], "pin19": ["A23"], "pin20": ["A24"], "pin21": ["A25"], "pin22": ["A26"], "pin23": ["A28"], "pin24": ["A29"], "pin25": ["A30"], "pin26": ["A31"], "pin27": ["AA10"], "pin28": ["AA11"], "pin29": ["AA12"], "pin30": ["AA13"], "pin31": ["AA14"], "pin32": ["AA15"], "pin33": ["AA16"], "pin34": ["AA17"], "pin35": ["AA18"], "pin36": ["AA19"], "pin37": ["AA20"], "pin38": ["AA21"], "pin39": ["AA22"], "pin40": ["AA23"], "pin41": ["AB1"], "pin42": ["AB2"], "pin43": ["AB3"], "pin44": ["AB4"], "pin45": ["AB5"], "pin46": ["AB6"], "pin47": ["AB7"], "pin48": ["AB10"], "pin49": ["AB11"], "pin50": ["AB12"], "pin51": ["AB13"], "pin52": ["AB14"], "pin53": ["AB15"], "pin54": ["AB16"], "pin55": ["AB17"], "pin56": ["AB18"], "pin57": ["AB19"], "pin58": ["AB20"], "pin59": ["AB21"], "pin60": ["AB22"], "pin61": ["AB23"], "pin62": ["AB26"], "pin63": ["AB27"], "pin64": ["AB28"], "pin65": ["AB29"], "pin66": ["AB30"], "pin67": ["AB31"], "pin68": ["AB32"], "pin69": ["AC1"], "pin70": ["AC2"], "pin71": ["AC3"], "pin72": ["AC4"], "pin73": ["AC5"], "pin74": ["AC6"], "pin75": ["AC7"], "pin76": ["AC10"], "pin77": ["AC11"], "pin78": ["AC12"], "pin79": ["AC13"], "pin80": ["AC14"], "pin81": ["AC15"], "pin82": ["AC16"], "pin83": ["AC17"], "pin84": ["AC18"], "pin85": ["AC19"], "pin86": ["AC20"], "pin87": ["AC21"], "pin88": ["AC22"], "pin89": ["AC23"], "pin90": ["AC26"], "pin91": ["AC27"], "pin92": ["AC28"], "pin93": ["AC29"], "pin94": ["AC30"], "pin95": ["AC31"], "pin96": ["AC32"], "pin97": ["AD1"], "pin98": ["AD2"], "pin99": ["AD3"], "pin100": ["AD4"], "pin101": ["AD5"], "pin102": ["AD6"], "pin103": ["AD7"], "pin104": ["AD26"], "pin105": ["AD27"], "pin106": ["AD28"], "pin107": ["AD29"], "pin108": ["AD30"], "pin109": ["AD31"], "pin110": ["AD32"], "pin111": ["AE1"], "pin112": ["AE2"], "pin113": ["AE3"], "pin114": ["AE4"], "pin115": ["AE5"], "pin116": ["AE6"], "pin117": ["AE7"], "pin118": ["AE26"], "pin119": ["AE27"], "pin120": ["AE28"], "pin121": ["AE29"], "pin122": ["AE30"], "pin123": ["AE31"], "pin124": ["AE32"], "pin125": ["AF11"], "pin126": ["AF12"], "pin127": ["AF14"], "pin128": ["AF15"], "pin129": ["AF16"], "pin130": ["AF17"], "pin131": ["AF19"], "pin132": ["AF20"], "pin133": ["AF22"], "pin134": ["AF23"], "pin135": ["AG1"], "pin136": ["AG2"], "pin137": ["AG3"], "pin138": ["AG4"], "pin139": ["AG5"], "pin140": ["AG9"], "pin141": ["AG11"], "pin142": ["AG12"], "pin143": ["AG14"], "pin144": ["AG15"], "pin145": ["AG16"], "pin146": ["AG17"], "pin147": ["AG19"], "pin148": ["AG20"], "pin149": ["AG22"], "pin150": ["AG23"], "pin151": ["AG24"], "pin152": ["AG28"], "pin153": ["AG29"], "pin154": ["AG30"], "pin155": ["AG31"], "pin156": ["AG32"], "pin157": ["AH1"], "pin158": ["AH2"], "pin159": ["AH3"], "pin160": ["AH4"], "pin161": ["AH5"], "pin162": ["AH7"], "pin163": ["AH8"], "pin164": ["AH9"], "pin165": ["AH11"], "pin166": ["AH12"], "pin167": ["AH14"], "pin168": ["AH15"], "pin169": ["AH16"], "pin170": ["AH17"], "pin171": ["AH19"], "pin172": ["AH20"], "pin173": ["AH22"], "pin174": ["AH23"], "pin175": ["AH24"], "pin176": ["AH25"], "pin177": ["AH26"], "pin178": ["AH28"], "pin179": ["AH29"], "pin180": ["AH30"], "pin181": ["AH31"], "pin182": ["AH32"], "pin183": ["AJ1"], "pin184": ["AJ2"], "pin185": ["AJ3"], "pin186": ["AJ4"], "pin187": ["AJ5"], "pin188": ["AJ7"], "pin189": ["AJ8"], "pin190": ["AJ9"], "pin191": ["AJ10"], "pin192": ["AJ11"], "pin193": ["AJ12"], "pin194": ["AJ13"], "pin195": ["AJ14"], "pin196": ["AJ15"], "pin197": ["AJ16"], "pin198": ["AJ17"], "pin199": ["AJ18"], "pin200": ["AJ19"], "pin201": ["AJ20"], "pin202": ["AJ21"], "pin203": ["AJ22"], "pin204": ["AJ23"], "pin205": ["AJ24"], "pin206": ["AJ25"], "pin207": ["AJ26"], "pin208": ["AJ28"], "pin209": ["AJ29"], "pin210": ["AJ30"], "pin211": ["AJ31"], "pin212": ["AJ32"], "pin213": ["AK1"], "pin214": ["AK2"], "pin215": ["AK3"], "pin216": ["AK4"], "pin217": ["AK5"], "pin218": ["AK7"], "pin219": ["AK8"], "pin220": ["AK9"], "pin221": ["AK10"], "pin222": ["AK11"], "pin223": ["AK12"], "pin224": ["AK13"], "pin225": ["AK14"], "pin226": ["AK15"], "pin227": ["AK16"], "pin228": ["AK17"], "pin229": ["AK18"], "pin230": ["AK19"], "pin231": ["AK20"], "pin232": ["AK21"], "pin233": ["AK22"], "pin234": ["AK23"], "pin235": ["AK24"], "pin236": ["AK25"], "pin237": ["AK26"], "pin238": ["AK28"], "pin239": ["AK29"], "pin240": ["AK30"], "pin241": ["AK31"], "pin242": ["AK32"], "pin243": ["AL1"], "pin244": ["AL2"], "pin245": ["AL3"], "pin246": ["AL4"], "pin247": ["AL5"], "pin248": ["AL7"], "pin249": ["AL8"], "pin250": ["AL9"], "pin251": ["AL11"], "pin252": ["AL12"], "pin253": ["AL14"], "pin254": ["AL15"], "pin255": ["AL17"], "pin256": ["AL18"], "pin257": ["AL20"], "pin258": ["AL21"], "pin259": ["AL23"], "pin260": ["AL24"], "pin261": ["AL26"], "pin262": ["AL28"], "pin263": ["AL29"], "pin264": ["AL30"], "pin265": ["AL31"], "pin266": ["AL32"], "pin267": ["AM2"], "pin268": ["AM3"], "pin269": ["AM4"], "pin270": ["AM5"], "pin271": ["AM7"], "pin272": ["AM8"], "pin273": ["AM9"], "pin274": ["AM11"], "pin275": ["AM12"], "pin276": ["AM14"], "pin277": ["AM15"], "pin278": ["AM17"], "pin279": ["AM18"], "pin280": ["AM20"], "pin281": ["AM21"], "pin282": ["AM23"], "pin283": ["AM24"], "pin284": ["AM26"], "pin285": ["AM28"], "pin286": ["AM29"], "pin287": ["AM30"], "pin288": ["AM31"], "pin289": ["B1"], "pin290": ["B2"], "pin291": ["B3"], "pin292": ["B4"], "pin293": ["B5"], "pin294": ["B7"], "pin295": ["B8"], "pin296": ["B9"], "pin297": ["B10"], "pin298": ["B11"], "pin299": ["B13"], "pin300": ["B14"], "pin301": ["B15"], "pin302": ["B16"], "pin303": ["B17"], "pin304": ["B18"], "pin305": ["B19"], "pin306": ["B20"], "pin307": ["B22"], "pin308": ["B23"], "pin309": ["B24"], "pin310": ["B25"], "pin311": ["B26"], "pin312": ["B28"], "pin313": ["B29"], "pin314": ["B30"], "pin315": ["B31"], "pin316": ["B32"], "pin317": ["C1"], "pin318": ["C2"], "pin319": ["C3"], "pin320": ["C4"], "pin321": ["C5"], "pin322": ["C7"], "pin323": ["C8"], "pin324": ["C9"], "pin325": ["C10"], "pin326": ["C11"], "pin327": ["C13"], "pin328": ["C14"], "pin329": ["C15"], "pin330": ["C16"], "pin331": ["C17"], "pin332": ["C18"], "pin333": ["C19"], "pin334": ["C20"], "pin335": ["C22"], "pin336": ["C23"], "pin337": ["C24"], "pin338": ["C25"], "pin339": ["C26"], "pin340": ["C28"], "pin341": ["C29"], "pin342": ["C30"], "pin343": ["C31"], "pin344": ["C32"], "pin345": ["D1"], "pin346": ["D2"], "pin347": ["D3"], "pin348": ["D4"], "pin349": ["D5"], "pin350": ["D7"], "pin351": ["D8"], "pin352": ["D9"], "pin353": ["D10"], "pin354": ["D11"], "pin355": ["D13"], "pin356": ["D14"], "pin357": ["D15"], "pin358": ["D16"], "pin359": ["D17"], "pin360": ["D18"], "pin361": ["D19"], "pin362": ["D20"], "pin363": ["D22"], "pin364": ["D23"], "pin365": ["D24"], "pin366": ["D25"], "pin367": ["D26"], "pin368": ["D28"], "pin369": ["D29"], "pin370": ["D30"], "pin371": ["D31"], "pin372": ["D32"], "pin373": ["E1"], "pin374": ["E2"], "pin375": ["E3"], "pin376": ["E4"], "pin377": ["E5"], "pin378": ["E7"], "pin379": ["E8"], "pin380": ["E9"], "pin381": ["E10"], "pin382": ["E11"], "pin383": ["E13"], "pin384": ["E14"], "pin385": ["E15"], "pin386": ["E16"], "pin387": ["E17"], "pin388": ["E18"], "pin389": ["E19"], "pin390": ["E20"], "pin391": ["E22"], "pin392": ["E23"], "pin393": ["E24"], "pin394": ["E25"], "pin395": ["E26"], "pin396": ["E28"], "pin397": ["E29"], "pin398": ["E30"], "pin399": ["E31"], "pin400": ["E32"], "pin401": ["F1"], "pin402": ["F2"], "pin403": ["F3"], "pin404": ["F4"], "pin405": ["F5"], "pin406": ["F8"], "pin407": ["F9"], "pin408": ["F10"], "pin409": ["F11"], "pin410": ["F13"], "pin411": ["F14"], "pin412": ["F15"], "pin413": ["F16"], "pin414": ["F17"], "pin415": ["F18"], "pin416": ["F19"], "pin417": ["F20"], "pin418": ["F22"], "pin419": ["F23"], "pin420": ["F24"], "pin421": ["F25"], "pin422": ["F28"], "pin423": ["F29"], "pin424": ["F30"], "pin425": ["F31"], "pin426": ["F32"], "pin427": ["G9"], "pin428": ["G10"], "pin429": ["G11"], "pin430": ["G14"], "pin431": ["G15"], "pin432": ["G16"], "pin433": ["G17"], "pin434": ["G18"], "pin435": ["G19"], "pin436": ["G22"], "pin437": ["G23"], "pin438": ["G24"], "pin439": ["H1"], "pin440": ["H2"], "pin441": ["H3"], "pin442": ["H4"], "pin443": ["H5"], "pin444": ["H6"], "pin445": ["H27"], "pin446": ["H28"], "pin447": ["H29"], "pin448": ["H30"], "pin449": ["H31"], "pin450": ["H32"], "pin451": ["J1"], "pin452": ["J2"], "pin453": ["J3"], "pin454": ["J4"], "pin455": ["J5"], "pin456": ["J6"], "pin457": ["J7"], "pin458": ["J26"], "pin459": ["J27"], "pin460": ["J28"], "pin461": ["J29"], "pin462": ["J30"], "pin463": ["J31"], "pin464": ["J32"], "pin465": ["K1"], "pin466": ["K2"], "pin467": ["K3"], "pin468": ["K4"], "pin469": ["K5"], "pin470": ["K6"], "pin471": ["K7"], "pin472": ["K10"], "pin473": ["K11"], "pin474": ["K12"], "pin475": ["K13"], "pin476": ["K14"], "pin477": ["K15"], "pin478": ["K16"], "pin479": ["K17"], "pin480": ["K18"], "pin481": ["K19"], "pin482": ["K20"], "pin483": ["K21"], "pin484": ["K22"], "pin485": ["K23"], "pin486": ["K26"], "pin487": ["K27"], "pin488": ["K28"], "pin489": ["K29"], "pin490": ["K30"], "pin491": ["K31"], "pin492": ["K32"], "pin493": ["L1"], "pin494": ["L2"], "pin495": ["L3"], "pin496": ["L4"], "pin497": ["L5"], "pin498": ["L6"], "pin499": ["L7"], "pin500": ["L10"], "pin501": ["L11"], "pin502": ["L12"], "pin503": ["L13"], "pin504": ["L14"], "pin505": ["L15"], "pin506": ["L16"], "pin507": ["L17"], "pin508": ["L18"], "pin509": ["L19"], "pin510": ["L20"], "pin511": ["L21"], "pin512": ["L22"], "pin513": ["L23"], "pin514": ["L26"], "pin515": ["L27"], "pin516": ["L28"], "pin517": ["L29"], "pin518": ["L30"], "pin519": ["L31"], "pin520": ["L32"], "pin521": ["M10"], "pin522": ["M11"], "pin523": ["M12"], "pin524": ["M13"], "pin525": ["M14"], "pin526": ["M15"], "pin527": ["M16"], "pin528": ["M17"], "pin529": ["M18"], "pin530": ["M19"], "pin531": ["M20"], "pin532": ["M21"], "pin533": ["M22"], "pin534": ["M23"], "pin535": ["N1"], "pin536": ["N2"], "pin537": ["N3"], "pin538": ["N4"], "pin539": ["N5"], "pin540": ["N6"], "pin541": ["N7"], "pin542": ["N10"], "pin543": ["N11"], "pin544": ["N12"], "pin545": ["N13"], "pin546": ["N14"], "pin547": ["N15"], "pin548": ["N16"], "pin549": ["N17"], "pin550": ["N18"], "pin551": ["N19"], "pin552": ["N20"], "pin553": ["N21"], "pin554": ["N22"], "pin555": ["N23"], "pin556": ["N26"], "pin557": ["N27"], "pin558": ["N28"], "pin559": ["N29"], "pin560": ["N30"], "pin561": ["N31"], "pin562": ["N32"], "pin563": ["P1"], "pin564": ["P2"], "pin565": ["P3"], "pin566": ["P4"], "pin567": ["P5"], "pin568": ["P6"], "pin569": ["P7"], "pin570": ["P10"], "pin571": ["P11"], "pin572": ["P12"], "pin573": ["P13"], "pin574": ["P14"], "pin575": ["P15"], "pin576": ["P16"], "pin577": ["P17"], "pin578": ["P18"], "pin579": ["P19"], "pin580": ["P20"], "pin581": ["P21"], "pin582": ["P22"], "pin583": ["P23"], "pin584": ["P26"], "pin585": ["P27"], "pin586": ["P28"], "pin587": ["P29"], "pin588": ["P30"], "pin589": ["P31"], "pin590": ["P32"], "pin591": ["R1"], "pin592": ["R2"], "pin593": ["R3"], "pin594": ["R4"], "pin595": ["R5"], "pin596": ["R6"], "pin597": ["R7"], "pin598": ["R10"], "pin599": ["R11"], "pin600": ["R12"], "pin601": ["R13"], "pin602": ["R14"], "pin603": ["R15"], "pin604": ["R16"], "pin605": ["R17"], "pin606": ["R18"], "pin607": ["R19"], "pin608": ["R20"], "pin609": ["R21"], "pin610": ["R22"], "pin611": ["R23"], "pin612": ["R26"], "pin613": ["R27"], "pin614": ["R28"], "pin615": ["R29"], "pin616": ["R30"], "pin617": ["R31"], "pin618": ["R32"], "pin619": ["T1"], "pin620": ["T2"], "pin621": ["T3"], "pin622": ["T4"], "pin623": ["T5"], "pin624": ["T6"], "pin625": ["T7"], "pin626": ["T10"], "pin627": ["T11"], "pin628": ["T12"], "pin629": ["T13"], "pin630": ["T14"], "pin631": ["T15"], "pin632": ["T16"], "pin633": ["T17"], "pin634": ["T18"], "pin635": ["T19"], "pin636": ["T20"], "pin637": ["T21"], "pin638": ["T22"], "pin639": ["T23"], "pin640": ["T26"], "pin641": ["T27"], "pin642": ["T28"], "pin643": ["T29"], "pin644": ["T30"], "pin645": ["T31"], "pin646": ["T32"], "pin647": ["U1"], "pin648": ["U2"], "pin649": ["U3"], "pin650": ["U4"], "pin651": ["U5"], "pin652": ["U6"], "pin653": ["U7"], "pin654": ["U10"], "pin655": ["U11"], "pin656": ["U12"], "pin657": ["U13"], "pin658": ["U14"], "pin659": ["U15"], "pin660": ["U16"], "pin661": ["U17"], "pin662": ["U18"], "pin663": ["U19"], "pin664": ["U20"], "pin665": ["U21"], "pin666": ["U22"], "pin667": ["U23"], "pin668": ["U26"], "pin669": ["U27"], "pin670": ["U28"], "pin671": ["U29"], "pin672": ["U30"], "pin673": ["U31"], "pin674": ["U32"], "pin675": ["V1"], "pin676": ["V2"], "pin677": ["V3"], "pin678": ["V4"], "pin679": ["V5"], "pin680": ["V6"], "pin681": ["V7"], "pin682": ["V10"], "pin683": ["V11"], "pin684": ["V12"], "pin685": ["V13"], "pin686": ["V14"], "pin687": ["V15"], "pin688": ["V16"], "pin689": ["V17"], "pin690": ["V18"], "pin691": ["V19"], "pin692": ["V20"], "pin693": ["V21"], "pin694": ["V22"], "pin695": ["V23"], "pin696": ["V26"], "pin697": ["V27"], "pin698": ["V28"], "pin699": ["V29"], "pin700": ["V30"], "pin701": ["V31"], "pin702": ["V32"], "pin703": ["W1"], "pin704": ["W2"], "pin705": ["W3"], "pin706": ["W4"], "pin707": ["W5"], "pin708": ["W6"], "pin709": ["W10"], "pin710": ["W11"], "pin711": ["W12"], "pin712": ["W13"], "pin713": ["W14"], "pin714": ["W15"], "pin715": ["W16"], "pin716": ["W17"], "pin717": ["W18"], "pin718": ["W19"], "pin719": ["W20"], "pin720": ["W21"], "pin721": ["W22"], "pin722": ["W23"], "pin723": ["W27"], "pin724": ["W28"], "pin725": ["W29"], "pin726": ["W30"], "pin727": ["W31"], "pin728": ["W32"], "pin729": ["Y1"], "pin730": ["Y2"], "pin731": ["Y3"], "pin732": ["Y4"], "pin733": ["Y5"], "pin734": ["Y6"], "pin735": ["Y7"], "pin736": ["Y10"], "pin737": ["Y11"], "pin738": ["Y12"], "pin739": ["Y13"], "pin740": ["Y14"], "pin741": ["Y15"], "pin742": ["Y16"], "pin743": ["Y17"], "pin744": ["Y18"], "pin745": ["Y19"], "pin746": ["Y20"], "pin747": ["Y21"], "pin748": ["Y22"], "pin749": ["Y23"], "pin750": ["Y26"], "pin751": ["Y27"], "pin752": ["Y28"], "pin753": ["Y29"], "pin754": ["Y30"], "pin755": ["Y31"], "pin756": ["Y32"] }} manufacturerPartNumber={"LFE5UM5G-85F-8BG756C"} displayName={"ECP5UM5G_85_CABGA756"} footprint={<Footprint_U21 />} noSchematicRepresentation={true}/>

    {/* R10: R_10k2_0402 */}
    <chip name={"R10"} pcbX={3.85} pcbY={19.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R7: R_10k2_0402 */}
    <chip name={"R7"} pcbX={3.85} pcbY={21.95} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* R6: R_10k2_0402 */}
    <chip name={"R6"} pcbX={0.9} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* R5: R_10k2_0402 */}
    <chip name={"R5"} pcbX={-0.1} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* U1: KSZ9031RNXCA */}
    <chip name={"U1"} pcbX={-1.9} pcbY={22.65} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"] }} manufacturerPartNumber={"KSZ9031RNXCA"} displayName={"KSZ9031RNXCA"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* C20: C_10n_0402 */}
    <chip name={"C20"} pcbX={6.15} pcbY={21.47} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* C26: C_10n_0402 */}
    <chip name={"C26"} pcbX={25.9} pcbY={-0.585} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* R4: R_10k2_0402 */}
    <chip name={"R4"} pcbX={-4.1} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* R3: R_10k2_0402 */}
    <chip name={"R3"} pcbX={-3.1} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* R2: R_10k2_0402 */}
    <chip name={"R2"} pcbX={-2.1} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* R1: R_10k2_0402 */}
    <chip name={"R1"} pcbX={-1.1} pcbY={15.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* R13: R_12k1_0402 */}
    <chip name={"R13"} pcbX={3.85} pcbY={25.35} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1212GLF"} displayName={"R_12k1_0402"} footprint={<Footprint_R13 />} noSchematicRepresentation={true}/>

    {/* R48: R_4k7_0402 */}
    <chip name={"R48"} pcbX={3.85} pcbY={22.95} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R48 />} noSchematicRepresentation={true}/>

    {/* U9: USB3300-EZK-TR */}
    <chip name={"U9"} pcbX={19.934} pcbY={3.306} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} manufacturerPartNumber={"USB3300-EZK-TR"} displayName={"USB3300-EZK-TR"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* R77: R_12k_0402 */}
    <chip name={"R77"} pcbX={24.2} pcbY={5.45} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1202GLF"} displayName={"R_12k_0402"} footprint={<Footprint_R77 />} noSchematicRepresentation={true}/>

    {/* C41: C_10u_0402 */}
    <chip name={"C41"} pcbX={30.6} pcbY={-35.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C41 />} noSchematicRepresentation={true}/>

    {/* C38: C_100n_0402 */}
    <chip name={"C38"} pcbX={31.425} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C38 />} noSchematicRepresentation={true}/>

    {/* R17: R_10k_0402 */}
    <chip name={"R17"} pcbX={21} pcbY={-35.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* R18: R_330R_0402 */}
    <chip name={"R18"} pcbX={38.1} pcbY={-48.65} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3300GLF"} displayName={"R_330R_0402"} footprint={<Footprint_R18 />} noSchematicRepresentation={true}/>

    {/* C36: C_100n_0402 */}
    <chip name={"C36"} pcbX={25.465} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C36 />} noSchematicRepresentation={true}/>

    {/* C32: C_100n_0402 */}
    <chip name={"C32"} pcbX={24.465} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C32 />} noSchematicRepresentation={true}/>

    {/* R19: R_10k_0402 */}
    <chip name={"R19"} pcbX={22} pcbY={-35.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R19 />} noSchematicRepresentation={true}/>

    {/* C40: C_10u_0402 */}
    <chip name={"C40"} pcbX={15.95} pcbY={-35.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C40 />} noSchematicRepresentation={true}/>

    {/* C31: C_100n_0402 */}
    <chip name={"C31"} pcbX={21.475} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C31 />} noSchematicRepresentation={true}/>

    {/* C42: C_10u_0402 */}
    <chip name={"C42"} pcbX={29.6} pcbY={-35.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C42 />} noSchematicRepresentation={true}/>

    {/* R20: R_10k_0402 */}
    <chip name={"R20"} pcbX={23} pcbY={-35.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R20 />} noSchematicRepresentation={true}/>

    {/* C37: C_100n_0402 */}
    <chip name={"C37"} pcbX={28.435} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C37 />} noSchematicRepresentation={true}/>

    {/* C35: C_100n_0402 */}
    <chip name={"C35"} pcbX={22.475} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C35 />} noSchematicRepresentation={true}/>

    {/* C33: C_100n_0402 */}
    <chip name={"C33"} pcbX={27.435} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C33 />} noSchematicRepresentation={true}/>

    {/* J2: Bus_M.2_1-2199230-6 */}
    <chip name={"J2"} pcbX={24.445} pcbY={-42.0145} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["MP1"], "pin77": ["MP2"] }} manufacturerPartNumber={"1-2199230-6"} displayName={"Bus_M.2_1-2199230-6"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* D1: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D1"} pcbX={35.8} pcbY={-49.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* U4: W25Q32JVSSIQ */}
    <chip name={"U4"} pcbX={-36.855} pcbY={-15.01} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"W25Q32JVSSIQ"} displayName={"W25Q32JVSSIQ"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* U5: W25Q32JVSSIQ */}
    <chip name={"U5"} pcbX={-36.855} pcbY={-23.91} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"W25Q32JVSSIQ"} displayName={"W25Q32JVSSIQ"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* J1: L834-1G1T-S7 */}
    <chip name={"J1"} pcbX={-5.145} pcbY={38.255} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["SH"] }} manufacturerPartNumber={"L834-1G1T-S7"} displayName={"L834-1G1T-S7"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* U3: W25Q32JVSSIQ */}
    <chip name={"U3"} pcbX={-25.605} pcbY={-15.01} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"W25Q32JVSSIQ"} displayName={"W25Q32JVSSIQ"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* U2: W25Q32JVSSIQ */}
    <chip name={"U2"} pcbX={-25.605} pcbY={-23.91} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"W25Q32JVSSIQ"} displayName={"W25Q32JVSSIQ"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* R126: R_10k_0402 */}
    <chip name={"R126"} pcbX={-29.125} pcbY={-46.26} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R126 />} noSchematicRepresentation={true}/>

    {/* R127: R_10k_0402 */}
    <chip name={"R127"} pcbX={-31.33} pcbY={-41.92} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R127 />} noSchematicRepresentation={true}/>

    {/* R128: R_22R_0402 */}
    <chip name={"R128"} pcbX={-29.11} pcbY={-45.06} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-22R0GLF"} displayName={"R_22R_0402"} footprint={<Footprint_R128 />} noSchematicRepresentation={true}/>

    {/* R129: R_1k_0402 */}
    <chip name={"R129"} pcbX={-33.32} pcbY={-41.92} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R129 />} noSchematicRepresentation={true}/>

    {/* D14: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D14"} pcbX={-31.79} pcbY={-43.23} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* C39: C_10u_0402 */}
    <chip name={"C39"} pcbX={32.05} pcbY={-35.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C39 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_1mm_SMD */}
    <chip name={"TP1"} pcbX={10.170001} pcbY={-43.6492} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* C241: C_100n_0402 */}
    <chip name={"C241"} pcbX={-19} pcbY={6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C241 />} noSchematicRepresentation={true}/>

    {/* R140: R_0R_0603 */}
    <chip name={"R140"} pcbX={-15.6} pcbY={40.095} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R140 />} noSchematicRepresentation={true}/>

    {/* TP8: TP_1mm_SMD */}
    <chip name={"TP8"} pcbX={-28.1} pcbY={26.5} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP9: TP_1mm_SMD */}
    <chip name={"TP9"} pcbX={18.1} pcbY={42.1492} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* TP10: TP_1mm_SMD */}
    <chip name={"TP10"} pcbX={-30.46} pcbY={26.82} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* TP11: TP_1mm_SMD */}
    <chip name={"TP11"} pcbX={-32.9} pcbY={26.8} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* R96: R_53k6_0402 */}
    <chip name={"R96"} pcbX={-28.7} pcbY={57.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-5362GLF"} displayName={"R_53k6_0402"} footprint={<Footprint_R96 />} noSchematicRepresentation={true}/>

    {/* C104: C_47p_0402 */}
    <chip name={"C104"} pcbX={-31.1} pcbY={55.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C470J5GACTU"} displayName={"C_47p_0402"} footprint={<Footprint_C104 />} noSchematicRepresentation={true}/>

    {/* C102: C_4n7_0402 */}
    <chip name={"C102"} pcbX={-31.1} pcbY={56.75} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CGA2B3X7S2A472K050BB"} displayName={"C_4n7_0402"} footprint={<Footprint_C102 />} noSchematicRepresentation={true}/>

    {/* R90: R_16k9_0402 */}
    <chip name={"R90"} pcbX={-29.55} pcbY={56.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1692GLF"} displayName={"R_16k9_0402"} footprint={<Footprint_R90 />} noSchematicRepresentation={true}/>

    {/* R97: R_10k2_0402 */}
    <chip name={"R97"} pcbX={-27.955} pcbY={56.845} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R97 />} noSchematicRepresentation={true}/>

    {/* C105: C_100n_0402 */}
    <chip name={"C105"} pcbX={-23.1} pcbY={52.15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C105 />} noSchematicRepresentation={true}/>

    {/* R91: R_243k_0402 */}
    <chip name={"R91"} pcbX={-24.77} pcbY={56.795} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2433GLF"} displayName={"R_243k_0402"} footprint={<Footprint_R91 />} noSchematicRepresentation={true}/>

    {/* R137: R_0R_0402 */}
    <chip name={"R137"} pcbX={-32.4} pcbY={41.35} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R137 />} noSchematicRepresentation={true}/>

    {/* R138: R_0R_0402 */}
    <chip name={"R138"} pcbX={-32.4} pcbY={42.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R138 />} noSchematicRepresentation={true}/>

    {/* R139: R_0R_0402 */}
    <chip name={"R139"} pcbX={-32.4} pcbY={43.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R139 />} noSchematicRepresentation={true}/>

    {/* C95: C_10n_0402 */}
    <chip name={"C95"} pcbX={-28.86} pcbY={45.46} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C95 />} noSchematicRepresentation={true}/>

    {/* R85: R_100k_0402 */}
    <chip name={"R85"} pcbX={-25.86} pcbY={45.46} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R85 />} noSchematicRepresentation={true}/>

    {/* D6: PDS760 */}
    <chip name={"D6"} pcbX={-35.85} pcbY={58.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"PDS760-13"} displayName={"PDS760"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* R120: R_66k5_0402 */}
    <chip name={"R120"} pcbX={-32.45} pcbY={30.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-6652GLF"} displayName={"R_66k5_0402"} footprint={<Footprint_R120 />} noSchematicRepresentation={true}/>

    {/* R142: R_0R_0603 */}
    <chip name={"R142"} pcbX={16.389056} pcbY={34.406896} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R142 />} noSchematicRepresentation={true}/>

    {/* L5: IHLP1212AEERR47M11 */}
    <chip name={"L5"} pcbX={-25.85} pcbY={37.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"IHLP1212AEERR47M11"} displayName={"IHLP1212AEERR47M11"} footprint={<Footprint_L5 />} noSchematicRepresentation={true}/>

    {/* L6: IHLP1212AEERR47M11 */}
    <chip name={"L6"} pcbX={-31.9} pcbY={37.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"IHLP1212AEERR47M11"} displayName={"IHLP1212AEERR47M11"} footprint={<Footprint_L6 />} noSchematicRepresentation={true}/>

    {/* U18: TPS62823DLCT */}
    <chip name={"U18"} pcbX={12.889056} pcbY={35.456896} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"TPS62823DLCT"} displayName={"TPS62823DLCT"} footprint={<Footprint_U18 />} noSchematicRepresentation={true}/>

    {/* U19: TPS62823DLCT */}
    <chip name={"U19"} pcbX={-27.95} pcbY={32.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"TPS62823DLCT"} displayName={"TPS62823DLCT"} footprint={<Footprint_U19 />} noSchematicRepresentation={true}/>

    {/* U20: TPS62823DLCT */}
    <chip name={"U20"} pcbX={-34.05} pcbY={32.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"TPS62823DLCT"} displayName={"TPS62823DLCT"} footprint={<Footprint_U20 />} noSchematicRepresentation={true}/>

    {/* R119: R_100k_0402 */}
    <chip name={"R119"} pcbX={-28.35} pcbY={30.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R119 />} noSchematicRepresentation={true}/>

    {/* R118: R_124k_0402 */}
    <chip name={"R118"} pcbX={-26.35} pcbY={30.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1243GLF"} displayName={"R_124k_0402"} footprint={<Footprint_R118 />} noSchematicRepresentation={true}/>

    {/* R121: R_100k_0402 */}
    <chip name={"R121"} pcbX={-34.515} pcbY={30.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R121 />} noSchematicRepresentation={true}/>

    {/* R117: R_100k_0402 */}
    <chip name={"R117"} pcbX={12.424056} pcbY={32.906896} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R117 />} noSchematicRepresentation={true}/>

    {/* R116: R_200k_0402 */}
    <chip name={"R116"} pcbX={14.489056} pcbY={32.906896} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2003GLF"} displayName={"R_200k_0402"} footprint={<Footprint_R116 />} noSchematicRepresentation={true}/>

    {/* R115: R_100k_0402 */}
    <chip name={"R115"} pcbX={-22.465} pcbY={30.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R115 />} noSchematicRepresentation={true}/>

    {/* R114: R_453k_0402 */}
    <chip name={"R114"} pcbX={-20.5} pcbY={30.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4533GLF"} displayName={"R_453k_0402"} footprint={<Footprint_R114 />} noSchematicRepresentation={true}/>

    {/* U17: TPS62823DLCT */}
    <chip name={"U17"} pcbX={-22} pcbY={32.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"TPS62823DLCT"} displayName={"TPS62823DLCT"} footprint={<Footprint_U17 />} noSchematicRepresentation={true}/>

    {/* R143: R_0R_0603 */}
    <chip name={"R143"} pcbX={-24.45} pcbY={31.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R143 />} noSchematicRepresentation={true}/>

    {/* C113: C_10u_0402 */}
    <chip name={"C113"} pcbX={-15.75} pcbY={35.155} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C113 />} noSchematicRepresentation={true}/>

    {/* C115: C_10u_0402 */}
    <chip name={"C115"} pcbX={13.139056} pcbY={37.685} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C115 />} noSchematicRepresentation={true}/>

    {/* C130: C_10u_0402 */}
    <chip name={"C130"} pcbX={-25.05} pcbY={34} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C130 />} noSchematicRepresentation={true}/>

    {/* C131: C_10u_0402 */}
    <chip name={"C131"} pcbX={-31.05} pcbY={34} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C131 />} noSchematicRepresentation={true}/>

    {/* C128: C_10u_0402 */}
    <chip name={"C128"} pcbX={-19.05} pcbY={34} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C128 />} noSchematicRepresentation={true}/>

    {/* C125: C_10u_0402 */}
    <chip name={"C125"} pcbX={-25.05} pcbY={35.175} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C125 />} noSchematicRepresentation={true}/>

    {/* C126: C_10u_0402 */}
    <chip name={"C126"} pcbX={-31.06} pcbY={35.155} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C126 />} noSchematicRepresentation={true}/>

    {/* C124: C_10u_0402 */}
    <chip name={"C124"} pcbX={15.439056} pcbY={37.685} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C124 />} noSchematicRepresentation={true}/>

    {/* C123: C_10u_0402 */}
    <chip name={"C123"} pcbX={-19.06} pcbY={35.155} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C123 />} noSchematicRepresentation={true}/>

    {/* C120: C_120p_0402 */}
    <chip name={"C120"} pcbX={-26.35} pcbY={29.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C121J5GACTU"} displayName={"C_120p_0402"} footprint={<Footprint_C120 />} noSchematicRepresentation={true}/>

    {/* C121: C_120p_0402 */}
    <chip name={"C121"} pcbX={-32.45} pcbY={29.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C121J5GACTU"} displayName={"C_120p_0402"} footprint={<Footprint_C121 />} noSchematicRepresentation={true}/>

    {/* C119: C_120p_0402 */}
    <chip name={"C119"} pcbX={14.489056} pcbY={31.856896} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C121J5GACTU"} displayName={"C_120p_0402"} footprint={<Footprint_C119 />} noSchematicRepresentation={true}/>

    {/* C118: C_120p_0402 */}
    <chip name={"C118"} pcbX={-20.5} pcbY={29.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C121J5GACTU"} displayName={"C_120p_0402"} footprint={<Footprint_C118 />} noSchematicRepresentation={true}/>

    {/* C116: C_10u_0402 */}
    <chip name={"C116"} pcbX={-27.7} pcbY={35.165} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C116 />} noSchematicRepresentation={true}/>

    {/* C117: C_10u_0402 */}
    <chip name={"C117"} pcbX={-33.8} pcbY={35.155} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C117 />} noSchematicRepresentation={true}/>

    {/* C114: C_10u_0402 */}
    <chip name={"C114"} pcbX={-21.76} pcbY={35.155} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C114 />} noSchematicRepresentation={true}/>

    {/* R145: R_0R_0603 */}
    <chip name={"R145"} pcbX={-12.5} pcbY={31.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R145 />} noSchematicRepresentation={true}/>

    {/* L3: IHLP1212AEERR47M11 */}
    <chip name={"L3"} pcbX={-19.85} pcbY={37.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"IHLP1212AEERR47M11"} displayName={"IHLP1212AEERR47M11"} footprint={<Footprint_L3 />} noSchematicRepresentation={true}/>

    {/* R141: R_0R_0603 */}
    <chip name={"R141"} pcbX={-18.5} pcbY={31.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R141 />} noSchematicRepresentation={true}/>

    {/* C122: C_120p_0402 */}
    <chip name={"C122"} pcbX={-14.45} pcbY={29.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0402C121J5GACTU"} displayName={"C_120p_0402"} footprint={<Footprint_C122 />} noSchematicRepresentation={true}/>

    {/* C127: C_10u_0402 */}
    <chip name={"C127"} pcbX={-13.05} pcbY={35.135} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C127 />} noSchematicRepresentation={true}/>

    {/* C132: C_10u_0402 */}
    <chip name={"C132"} pcbX={-13.05} pcbY={34} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C132 />} noSchematicRepresentation={true}/>

    {/* R123: R_100k_0402 */}
    <chip name={"R123"} pcbX={-16.465} pcbY={30.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R123 />} noSchematicRepresentation={true}/>

    {/* L7: IHLP1212AEERR47M11 */}
    <chip name={"L7"} pcbX={-13.85} pcbY={37.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"IHLP1212AEERR47M11"} displayName={"IHLP1212AEERR47M11"} footprint={<Footprint_L7 />} noSchematicRepresentation={true}/>

    {/* L4: IHLP1212AEERR47M11 */}
    <chip name={"L4"} pcbX={15.039056} pcbY={40.056896} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"IHLP1212AEERR47M11"} displayName={"IHLP1212AEERR47M11"} footprint={<Footprint_L4 />} noSchematicRepresentation={true}/>

    {/* R100: R_10k_0402 */}
    <chip name={"R100"} pcbX={-11.35} pcbY={42.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R100 />} noSchematicRepresentation={true}/>

    {/* R93: R_4k7_0402 */}
    <chip name={"R93"} pcbX={-12.3} pcbY={40.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R93 />} noSchematicRepresentation={true}/>

    {/* J7: PinHeader_1x6_P2.54mm_Drill1.1mm */}
    <chip name={"J7"} pcbX={-40.569} pcbY={14.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} manufacturerPartNumber={"61300611121"} displayName={"PinHeader_1x6_P2.54mm_Drill1.1mm"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* R75: R_12k_0402 */}
    <chip name={"R75"} pcbX={22.125} pcbY={-11.425} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1202GLF"} displayName={"R_12k_0402"} footprint={<Footprint_R75 />} noSchematicRepresentation={true}/>

    {/* C56: C_10n_0402 */}
    <chip name={"C56"} pcbX={23.14} pcbY={-14.64} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C56 />} noSchematicRepresentation={true}/>

    {/* U8: USB3300-EZK-TR */}
    <chip name={"U8"} pcbX={19.855} pcbY={-7.51} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} manufacturerPartNumber={"USB3300-EZK-TR"} displayName={"USB3300-EZK-TR"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_1mm_SMD */}
    <chip name={"TP2"} pcbX={10.170001} pcbY={-39.764201} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* TP3: TP_1mm_SMD */}
    <chip name={"TP3"} pcbX={10.170001} pcbY={-41.706701} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* TP6: TP_1mm_SMD */}
    <chip name={"TP6"} pcbX={-19} pcbY={49.4992} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* TP12: TP_1mm_SMD */}
    <chip name={"TP12"} pcbX={-21.15} pcbY={49.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* C100: C_100n_0402 */}
    <chip name={"C100"} pcbX={-11.95} pcbY={57.365} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C100 />} noSchematicRepresentation={true}/>

    {/* R88: R_10R_0603 */}
    <chip name={"R88"} pcbX={-13.15} pcbY={57.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-FX-10R0ELF"} displayName={"R_10R_0603"} footprint={<Footprint_R88 />} noSchematicRepresentation={true}/>

    {/* C96: C_10u_0805 */}
    <chip name={"C96"} pcbX={-15.79} pcbY={56.805} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"160R15X106KV4E"} displayName={"C_10u_0805"} footprint={<Footprint_C96 />} noSchematicRepresentation={true}/>

    {/* C97: C_10u_0805 */}
    <chip name={"C97"} pcbX={-15.79} pcbY={58.855} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"160R15X106KV4E"} displayName={"C_10u_0805"} footprint={<Footprint_C97 />} noSchematicRepresentation={true}/>

    {/* C248: C_100n_0402 */}
    <chip name={"C248"} pcbX={-17.7} pcbY={-23.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C248 />} noSchematicRepresentation={true}/>

    {/* SW1: SW_B3U-1000P_SMD */}
    <chip name={"SW1"} pcbX={-33.45} pcbY={24.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"B3U-1000P"} displayName={"SW_B3U-1000P_SMD"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* R86: R_100k_0402 */}
    <chip name={"R86"} pcbX={-26.86} pcbY={45.46} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R86 />} noSchematicRepresentation={true}/>

    {/* R87: R_100k_0402 */}
    <chip name={"R87"} pcbX={-27.86} pcbY={45.46} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R87 />} noSchematicRepresentation={true}/>

    {/* L2: WE_7447798720 */}
    <chip name={"L2"} pcbX={-34.35} pcbY={49.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"7447798720"} displayName={"WE_7447798720"} footprint={<Footprint_L2 />} noSchematicRepresentation={true}/>

    {/* C129: C_10u_0402 */}
    <chip name={"C129"} pcbX={15.439056} pcbY={36.506896} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C129 />} noSchematicRepresentation={true}/>

    {/* C101: C_10u_25V_0603 */}
    <chip name={"C101"} pcbX={-20.25} pcbY={52.52} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1608X5R1E106M080AC"} displayName={"C_10u_25V_0603"} footprint={<Footprint_C101 />} noSchematicRepresentation={true}/>

    {/* C260: C_10u_25V_0603 */}
    <chip name={"C260"} pcbX={-21.75} pcbY={52.52} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1608X5R1E106M080AC"} displayName={"C_10u_25V_0603"} footprint={<Footprint_C260 />} noSchematicRepresentation={true}/>

    {/* C261: C_10u_25V_0603 */}
    <chip name={"C261"} pcbX={-18.75} pcbY={52.52} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1608X5R1E106M080AC"} displayName={"C_10u_25V_0603"} footprint={<Footprint_C261 />} noSchematicRepresentation={true}/>

    {/* C59: C_10n_0402 */}
    <chip name={"C59"} pcbX={-23.21} pcbY={55.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C59 />} noSchematicRepresentation={true}/>

    {/* C112: C_47u_0603 */}
    <chip name={"C112"} pcbX={-25.2} pcbY={50.45} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C112 />} noSchematicRepresentation={true}/>

    {/* Y4: Oscillator_12MHz_ASFLMB */}
    <chip name={"Y4"} pcbX={39.531} pcbY={31.645} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ASFLMB-12.000MHZ-LC-T"} displayName={"Oscillator_12MHz_ASFLMB"} footprint={<Footprint_Y4 />} noSchematicRepresentation={true}/>

    {/* TP15: TP_1mm_SMD */}
    <chip name={"TP15"} pcbX={32.65} pcbY={22.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* TP14: TP_1mm_SMD */}
    <chip name={"TP14"} pcbX={35.8492} pcbY={34.425} pcbRotation={-90} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* TP13: TP_1mm_SMD */}
    <chip name={"TP13"} pcbX={19.85} pcbY={52.2492} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* J5: SFF-TA-1002-4C+ */}
    <chip name={"J5"} pcbX={-0.21} pcbY={-58.245} pcbRotation={0} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A3"], "pin4": ["A4"], "pin5": ["A5"], "pin6": ["A6"], "pin7": ["A7"], "pin8": ["A8"], "pin9": ["A9"], "pin10": ["A10"], "pin11": ["A11"], "pin12": ["A12"], "pin13": ["A13"], "pin14": ["A14"], "pin15": ["A15"], "pin16": ["A16"], "pin17": ["A17"], "pin18": ["A18"], "pin19": ["A19"], "pin20": ["A20"], "pin21": ["A21"], "pin22": ["A22"], "pin23": ["A23"], "pin24": ["A24"], "pin25": ["A25"], "pin26": ["A26"], "pin27": ["A27"], "pin28": ["A28"], "pin29": ["A29"], "pin30": ["A30"], "pin31": ["A31"], "pin32": ["A32"], "pin33": ["A33"], "pin34": ["A34"], "pin35": ["A35"], "pin36": ["A36"], "pin37": ["A37"], "pin38": ["A38"], "pin39": ["A39"], "pin40": ["A40"], "pin41": ["A41"], "pin42": ["A42"], "pin43": ["A43"], "pin44": ["A44"], "pin45": ["A45"], "pin46": ["A46"], "pin47": ["A47"], "pin48": ["A48"], "pin49": ["A49"], "pin50": ["A50"], "pin51": ["A51"], "pin52": ["A52"], "pin53": ["A53"], "pin54": ["A54"], "pin55": ["A55"], "pin56": ["A56"], "pin57": ["A57"], "pin58": ["A58"], "pin59": ["A59"], "pin60": ["A60"], "pin61": ["A61"], "pin62": ["A62"], "pin63": ["A63"], "pin64": ["A64"], "pin65": ["A65"], "pin66": ["A66"], "pin67": ["A67"], "pin68": ["A68"], "pin69": ["A69"], "pin70": ["A70"], "pin71": ["B1"], "pin72": ["B2"], "pin73": ["B3"], "pin74": ["B4"], "pin75": ["B5"], "pin76": ["B6"], "pin77": ["B7"], "pin78": ["B8"], "pin79": ["B9"], "pin80": ["B10"], "pin81": ["B11"], "pin82": ["B12"], "pin83": ["B13"], "pin84": ["B14"], "pin85": ["B15"], "pin86": ["B16"], "pin87": ["B17"], "pin88": ["B18"], "pin89": ["B19"], "pin90": ["B20"], "pin91": ["B21"], "pin92": ["B22"], "pin93": ["B23"], "pin94": ["B24"], "pin95": ["B25"], "pin96": ["B26"], "pin97": ["B27"], "pin98": ["B28"], "pin99": ["B29"], "pin100": ["B30"], "pin101": ["B31"], "pin102": ["B32"], "pin103": ["B33"], "pin104": ["B34"], "pin105": ["B35"], "pin106": ["B36"], "pin107": ["B37"], "pin108": ["B38"], "pin109": ["B39"], "pin110": ["B40"], "pin111": ["B41"], "pin112": ["B42"], "pin113": ["B43"], "pin114": ["B44"], "pin115": ["B45"], "pin116": ["B46"], "pin117": ["B47"], "pin118": ["B48"], "pin119": ["B49"], "pin120": ["B50"], "pin121": ["B51"], "pin122": ["B52"], "pin123": ["B53"], "pin124": ["B54"], "pin125": ["B55"], "pin126": ["B56"], "pin127": ["B57"], "pin128": ["B58"], "pin129": ["B59"], "pin130": ["B60"], "pin131": ["B61"], "pin132": ["B62"], "pin133": ["B63"], "pin134": ["B64"], "pin135": ["B65"], "pin136": ["B66"], "pin137": ["B67"], "pin138": ["B68"], "pin139": ["B69"], "pin140": ["B70"], "pin141": ["OA1"], "pin142": ["OA2"], "pin143": ["OA3"], "pin144": ["OA4"], "pin145": ["OA5"], "pin146": ["OA6"], "pin147": ["OA7"], "pin148": ["OA8"], "pin149": ["OA9"], "pin150": ["OA10"], "pin151": ["OA11"], "pin152": ["OA12"], "pin153": ["OA13"], "pin154": ["OA14"], "pin155": ["OB1"], "pin156": ["OB2"], "pin157": ["OB3"], "pin158": ["OB4"], "pin159": ["OB5"], "pin160": ["OB6"], "pin161": ["OB7"], "pin162": ["OB8"], "pin163": ["OB9"], "pin164": ["OB10"], "pin165": ["OB11"], "pin166": ["OB12"], "pin167": ["OB13"], "pin168": ["OB14"] }} manufacturerPartNumber={"SFF-TA-1002-4C+"} displayName={"SFF-TA-1002-4C+"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* J6: USB-Micro-B_Amphenol_10118192-0001LF */}
    <chip name={"J6"} pcbX={21.14} pcbY={57.031} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["SH"] }} manufacturerPartNumber={"10118192-0001LF"} displayName={"USB-Micro-B_Amphenol_10118192-0001LF"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* C262: C_10u_0402 */}
    <chip name={"C262"} pcbX={-26.82} pcbY={40.03} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C262 />} noSchematicRepresentation={true}/>

    {/* R8: R_100k_0402 */}
    <chip name={"R8"} pcbX={-24.86} pcbY={45.46} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1003GLF"} displayName={"R_100k_0402"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* TP16: TP_1mm_SMD */}
    <chip name={"TP16"} pcbX={-22.075} pcbY={12.875} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* R144: R_0R_0603 */}
    <chip name={"R144"} pcbX={-30.55} pcbY={31.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0603-J/-000ELF"} displayName={"R_0R_0603"} footprint={<Footprint_R144 />} noSchematicRepresentation={true}/>

    {/* U16: TPS62823DLCT */}
    <chip name={"U16"} pcbX={-16} pcbY={32.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"TPS62823DLCT"} displayName={"TPS62823DLCT"} footprint={<Footprint_U16 />} noSchematicRepresentation={true}/>

    {/* U6: MTFC16GAPALNA-AIT */}
    <chip name={"U6"} pcbX={-16.9} pcbY={21.05} pcbRotation={90} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A9"], "pin4": ["A10"], "pin5": ["B1"], "pin6": ["B10"], "pin7": ["D2"], "pin8": ["D3"], "pin9": ["D4"], "pin10": ["D5"], "pin11": ["D6"], "pin12": ["D7"], "pin13": ["D8"], "pin14": ["D9"], "pin15": ["E2"], "pin16": ["E3"], "pin17": ["E4"], "pin18": ["E5"], "pin19": ["E6"], "pin20": ["E7"], "pin21": ["E8"], "pin22": ["E9"], "pin23": ["F2"], "pin24": ["F3"], "pin25": ["F4"], "pin26": ["F5"], "pin27": ["F6"], "pin28": ["F7"], "pin29": ["F8"], "pin30": ["F9"], "pin31": ["G2"], "pin32": ["G3"], "pin33": ["G4"], "pin34": ["G5"], "pin35": ["G6"], "pin36": ["G7"], "pin37": ["G8"], "pin38": ["G9"], "pin39": ["H2"], "pin40": ["H3"], "pin41": ["H4"], "pin42": ["H5"], "pin43": ["H6"], "pin44": ["H7"], "pin45": ["H8"], "pin46": ["H9"], "pin47": ["J2"], "pin48": ["J3"], "pin49": ["J4"], "pin50": ["J5"], "pin51": ["J6"], "pin52": ["J7"], "pin53": ["J8"], "pin54": ["J9"], "pin55": ["K2"], "pin56": ["K3"], "pin57": ["K4"], "pin58": ["K5"], "pin59": ["K6"], "pin60": ["K7"], "pin61": ["K8"], "pin62": ["K9"], "pin63": ["L2"], "pin64": ["L3"], "pin65": ["L4"], "pin66": ["L5"], "pin67": ["L6"], "pin68": ["L7"], "pin69": ["L8"], "pin70": ["L9"], "pin71": ["M2"], "pin72": ["M3"], "pin73": ["M4"], "pin74": ["M5"], "pin75": ["M6"], "pin76": ["M7"], "pin77": ["M8"], "pin78": ["M9"], "pin79": ["N2"], "pin80": ["N3"], "pin81": ["N4"], "pin82": ["N5"], "pin83": ["N6"], "pin84": ["N7"], "pin85": ["N8"], "pin86": ["N9"], "pin87": ["P2"], "pin88": ["P3"], "pin89": ["P4"], "pin90": ["P5"], "pin91": ["P6"], "pin92": ["P7"], "pin93": ["P8"], "pin94": ["P9"], "pin95": ["T1"], "pin96": ["T10"], "pin97": ["U1"], "pin98": ["U2"], "pin99": ["U9"], "pin100": ["U10"] }} manufacturerPartNumber={"MTFC16GAPALNA-AIT"} displayName={"MTFC16GAPALNA-AIT"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* R9: R_2k2_0402 */}
    <chip name={"R9"} pcbX={1.9} pcbY={15.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2201GLF"} displayName={"R_2k2_0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* J8: Molex_Pico-Lock_1x2_504050-0291 */}
    <chip name={"J8"} pcbX={-38.83} pcbY={-44.54} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["SH"] }} manufacturerPartNumber={"504050-0291"} displayName={"Molex_Pico-Lock_1x2_504050-0291"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* J18: Molex_Pico-Lock_1x2_504050-0291 */}
    <chip name={"J18"} pcbX={37.9} pcbY={-29.38} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["SH"] }} manufacturerPartNumber={"504050-0291"} displayName={"Molex_Pico-Lock_1x2_504050-0291"} footprint={<Footprint_J18 />} noSchematicRepresentation={true}/>

    {/* Y2: Oscillator_24MHz_ASEMB */}
    <chip name={"Y2"} pcbX={25.44} pcbY={2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ASEMB-24.000MHZ-LC-T"} displayName={"Oscillator_24MHz_ASEMB"} footprint={<Footprint_Y2 />} noSchematicRepresentation={true}/>

    {/* Y3: Oscillator_24MHz_ASEMB */}
    <chip name={"Y3"} pcbX={20.54} pcbY={-14.08} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ASEMB-24.000MHZ-LC-T"} displayName={"Oscillator_24MHz_ASEMB"} footprint={<Footprint_Y3 />} noSchematicRepresentation={true}/>

    {/* Q17: 2N7002 */}
    <chip name={"Q17"} pcbX={-32.21} pcbY={-46.01} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q17 />} noSchematicRepresentation={true}/>

    {/* D15: LED_G_0603_LG_L29K-G2J1-24-Z */}
    <chip name={"D15"} pcbX={-31.78} pcbY={-48.77} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"LG L29K-G2J1-24-Z"} displayName={"LED_G_0603_LG_L29K-G2J1-24-Z"} footprint={<Footprint_D15 />} noSchematicRepresentation={true}/>

    {/* R130: R_1k_0402 */}
    <chip name={"R130"} pcbX={-34.27} pcbY={-48.77} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R130 />} noSchematicRepresentation={true}/>

    {/* F1: 0466003.NR */}
    <chip name={"F1"} pcbX={-20.41} pcbY={54.975} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"0466003.NR"} displayName={"0466003.NR"} footprint={<Footprint_F1 />} noSchematicRepresentation={true}/>

    {/* TP4: RCW-0C */}
    <chip name={"TP4"} pcbX={-19.07} pcbY={58.26} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"RCW-0C"} displayName={"RCW-0C"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* TP5: RCW-0C */}
    <chip name={"TP5"} pcbX={-21.5} pcbY={58.26} pcbRotation={90} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"RCW-0C"} displayName={"RCW-0C"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* C34: C_100n_0402 */}
    <chip name={"C34"} pcbX={30.445} pcbY={-49.225} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C34 />} noSchematicRepresentation={true}/>

    {/* N1: antmicro_logo */}
    <chip name={"N1"} pcbX={-12.3} pcbY={-35.5} pcbRotation={0} pinLabels={{}} displayName={"antmicro_logo"} footprint={<Footprint_N1 />} noSchematicRepresentation={true}/>

    {/* N2: oshw_logo */}
    <chip name={"N2"} pcbX={-4.5} pcbY={-28.2} pcbRotation={0} pinLabels={{}} displayName={"oshw_logo"} footprint={<Footprint_N2 />} noSchematicRepresentation={true}/>

    {/* Y5: Oscillator_25MHz_ESC_2016MV */}
    <chip name={"Y5"} pcbX={6.637} pcbY={23.734} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ECS-2016MV-250-CN-TR"} displayName={"Oscillator_25MHz_ESC_2016MV"} footprint={<Footprint_Y5 />} noSchematicRepresentation={true}/>

    {/* U14: FT4232H_VQFN */}
    <chip name={"U14"} pcbX={31.65} pcbY={29.08} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"] }} manufacturerPartNumber={"FT4232H-56Q-REEL"} displayName={"FT4232H_VQFN"} footprint={<Footprint_U14 />} noSchematicRepresentation={true}/>

    {/* J4: PinSocket_2x6_P2.54mm_Drill1.02mm_PMOD */}
    <chip name={"J4"} pcbX={-40.5} pcbY={18.345} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"] }} manufacturerPartNumber={"M20-7830642"} displayName={"PinSocket_2x6_P2.54mm_Drill1.02mm_PMOD"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* J9: PinHeader_2x7_P2mm_Drill1mm_Shrouded */}
    <chip name={"J9"} pcbX={37.54} pcbY={50.535} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"] }} manufacturerPartNumber={"0878311420"} displayName={"PinHeader_2x7_P2mm_Drill1mm_Shrouded"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* H2: Spacer_Drill3.7mm_H4mm_9774040151R */}
    <chip name={"H2"} pcbX={-31.289} pcbY={6.674} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"9774040151R"} displayName={"Spacer_Drill3.7mm_H4mm_9774040151R"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* U13: LM21212-2 */}
    <chip name={"U13"} pcbX={-14.16} pcbY={51.645} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"] }} manufacturerPartNumber={"LM21212MH-2/NOPB"} displayName={"LM21212-2"} footprint={<Footprint_U13 />} noSchematicRepresentation={true}/>

    {/* J3: Plug_Molex_SlimStack_2x25_529910508 */}
    <chip name={"J3"} pcbX={-31.00532} pcbY={-37.2802} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"] }} manufacturerPartNumber={"529910508"} displayName={"Plug_Molex_SlimStack_2x25_529910508"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* H1: Spacer_Drill3.7mm_H2.5mm_9774025151R */}
    <chip name={"H1"} pcbX={24.411} pcbY={37.605} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} manufacturerPartNumber={"9774025151R"} displayName={"Spacer_Drill3.7mm_H2.5mm_9774025151R"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* R45: R_316k_0402 */}
    <chip name={"R45"} pcbX={-14.4} pcbY={30.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3163GLF"} displayName={"R_316k_0402"} footprint={<Footprint_R45 />} noSchematicRepresentation={true}/>

    {/* D2: SP3011-06UTG */}
    <chip name={"D2"} pcbX={32.43} pcbY={43.87} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"] }} manufacturerPartNumber={"SP3011-06UTG"} displayName={"SP3011-06UTG"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* Y1: Oscillator_100MHz_ECS_3225MV */}
    <chip name={"Y1"} pcbX={-16.7} pcbY={5.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} manufacturerPartNumber={"ECS-3225MVQ-1000CN-TR"} displayName={"Oscillator_100MHz_ECS_3225MV"} footprint={<Footprint_Y1 />} noSchematicRepresentation={true}/>

    {/* R11: R_10k2_0402 */}
    <chip name={"R11"} pcbX={-9.5} pcbY={29.35} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R11 />} noSchematicRepresentation={true}/>

    {/* Q11: 2N7002 */}
    <chip name={"Q11"} pcbX={-37.85} pcbY={34.05} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q11 />} noSchematicRepresentation={true}/>

    {/* Q12: 2N7002 */}
    <chip name={"Q12"} pcbX={-33.9} pcbY={25.8} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q12 />} noSchematicRepresentation={true}/>

    {/* Q13: 2N7002 */}
    <chip name={"Q13"} pcbX={-37.85} pcbY={25.85} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q13 />} noSchematicRepresentation={true}/>

    {/* Q14: 2N7002 */}
    <chip name={"Q14"} pcbX={-33.9} pcbY={29.95} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q14 />} noSchematicRepresentation={true}/>

    {/* Q15: 2N7002 */}
    <chip name={"Q15"} pcbX={-29.95} pcbY={25.8} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q15 />} noSchematicRepresentation={true}/>

    {/* R104: R_10k_0402 */}
    <chip name={"R104"} pcbX={-15.95} pcbY={31.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R104 />} noSchematicRepresentation={true}/>

    {/* R105: R_10k_0402 */}
    <chip name={"R105"} pcbX={12.809056} pcbY={29.606896} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R105 />} noSchematicRepresentation={true}/>

    {/* R107: R_1k_0402 */}
    <chip name={"R107"} pcbX={-40.85} pcbY={32.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R107 />} noSchematicRepresentation={true}/>

    {/* R108: R_1k_0402 */}
    <chip name={"R108"} pcbX={-40.85} pcbY={34.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R108 />} noSchematicRepresentation={true}/>

    {/* R109: R_1k_0402 */}
    <chip name={"R109"} pcbX={-40.85} pcbY={24.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R109 />} noSchematicRepresentation={true}/>

    {/* R110: R_1k_0402 */}
    <chip name={"R110"} pcbX={-40.85} pcbY={25.8} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R110 />} noSchematicRepresentation={true}/>

    {/* R111: R_1k_0402 */}
    <chip name={"R111"} pcbX={-40.85} pcbY={27.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R111 />} noSchematicRepresentation={true}/>

    {/* R112: R_1k_0402 */}
    <chip name={"R112"} pcbX={-40.85} pcbY={29.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R112 />} noSchematicRepresentation={true}/>

    {/* R113: R_1k_0402 */}
    <chip name={"R113"} pcbX={-40.85} pcbY={30.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R113 />} noSchematicRepresentation={true}/>

    {/* R106: R_10k_0402 */}
    <chip name={"R106"} pcbX={-30.9} pcbY={31.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R106 />} noSchematicRepresentation={true}/>

    {/* R15: R_1k_0402 */}
    <chip name={"R15"} pcbX={-8.05} pcbY={31.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* R47: R_0R_0402 */}
    <chip name={"R47"} pcbX={10.6} pcbY={-17.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R47 />} noSchematicRepresentation={true}/>

    {/* R132: R_0R_0402 */}
    <chip name={"R132"} pcbX={-18.7} pcbY={-16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R132 />} noSchematicRepresentation={true}/>

    {/* C49: C_22u_0603 */}
    <chip name={"C49"} pcbX={-16.4} pcbY={20.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J226MEA0D"} displayName={"C_22u_0603"} footprint={<Footprint_C49 />} noSchematicRepresentation={true}/>

    {/* R68: R_47k_0402 */}
    <chip name={"R68"} pcbX={-16.4} pcbY={23.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R68 />} noSchematicRepresentation={true}/>

    {/* R66: R_47k_0402 */}
    <chip name={"R66"} pcbX={-16.4} pcbY={22.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R66 />} noSchematicRepresentation={true}/>

    {/* R64: R_47k_0402 */}
    <chip name={"R64"} pcbX={-10.55} pcbY={18.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R64 />} noSchematicRepresentation={true}/>

    {/* R63: R_47k_0402 */}
    <chip name={"R63"} pcbX={-16.5} pcbY={18.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R63 />} noSchematicRepresentation={true}/>

    {/* R61: R_47k_0402 */}
    <chip name={"R61"} pcbX={-16.5} pcbY={17.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R61 />} noSchematicRepresentation={true}/>

    {/* C50: C_22u_0603 */}
    <chip name={"C50"} pcbX={-14.3} pcbY={20.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J226MEA0D"} displayName={"C_22u_0603"} footprint={<Footprint_C50 />} noSchematicRepresentation={true}/>

    {/* C48: C_22u_0603 */}
    <chip name={"C48"} pcbX={-19.2} pcbY={16.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J226MEA0D"} displayName={"C_22u_0603"} footprint={<Footprint_C48 />} noSchematicRepresentation={true}/>

    {/* C51: C_100n_0402 */}
    <chip name={"C51"} pcbX={-19.3} pcbY={23.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C51 />} noSchematicRepresentation={true}/>

    {/* C52: C_100n_0402 */}
    <chip name={"C52"} pcbX={-19.3} pcbY={21.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C52 />} noSchematicRepresentation={true}/>

    {/* C53: C_4u7_0402 */}
    <chip name={"C53"} pcbX={-21.79} pcbY={18.88} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C53 />} noSchematicRepresentation={true}/>

    {/* C64: C_100n_0402 */}
    <chip name={"C64"} pcbX={18.255} pcbY={0.765} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C64 />} noSchematicRepresentation={true}/>

    {/* C67: C_100n_0402 */}
    <chip name={"C67"} pcbX={23.525} pcbY={0.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C67 />} noSchematicRepresentation={true}/>

    {/* C72: C_4u7_0402 */}
    <chip name={"C72"} pcbX={17.25} pcbY={0.765} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C72 />} noSchematicRepresentation={true}/>

    {/* C79: C_4u7_0402 */}
    <chip name={"C79"} pcbX={-27.1} pcbY={-5.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C79 />} noSchematicRepresentation={true}/>

    {/* C80: C_470n_0402 */}
    <chip name={"C80"} pcbX={-19.2} pcbY={-10.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C80 />} noSchematicRepresentation={true}/>

    {/* C81: C_470n_0402 */}
    <chip name={"C81"} pcbX={-26.05} pcbY={-7.65} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C81 />} noSchematicRepresentation={true}/>

    {/* C82: C_470n_0402 */}
    <chip name={"C82"} pcbX={-26.06} pcbY={-9.62} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C82 />} noSchematicRepresentation={true}/>

    {/* C83: C_470n_0402 */}
    <chip name={"C83"} pcbX={-19.2} pcbY={-9.15} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C83 />} noSchematicRepresentation={true}/>

    {/* C84: C_470n_0402 */}
    <chip name={"C84"} pcbX={-17.25} pcbY={-8.15} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C84 />} noSchematicRepresentation={true}/>

    {/* C85: C_470n_0402 */}
    <chip name={"C85"} pcbX={-20.3} pcbY={-2.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C85 />} noSchematicRepresentation={true}/>

    {/* C86: C_470n_0402 */}
    <chip name={"C86"} pcbX={-19.2} pcbY={-8.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C86 />} noSchematicRepresentation={true}/>

    {/* C88: C_100n_0402 */}
    <chip name={"C88"} pcbX={-17.35} pcbY={-2.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C88 />} noSchematicRepresentation={true}/>

    {/* C89: C_470n_0402 */}
    <chip name={"C89"} pcbX={-16.65} pcbY={-0.295} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C89 />} noSchematicRepresentation={true}/>

    {/* C92: C_470n_0402 */}
    <chip name={"C92"} pcbX={-24.81} pcbY={-11.445} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C92 />} noSchematicRepresentation={true}/>

    {/* C94: C_100n_0402 */}
    <chip name={"C94"} pcbX={-24.46} pcbY={-5.995} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C94 />} noSchematicRepresentation={true}/>

    {/* R76: R_1k_0402 */}
    <chip name={"R76"} pcbX={20.125} pcbY={7.675} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R76 />} noSchematicRepresentation={true}/>

    {/* R81: R_240R_0402 */}
    <chip name={"R81"} pcbX={-26.485} pcbY={-4.095} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-2400GLF"} displayName={"R_240R_0402"} footprint={<Footprint_R81 />} noSchematicRepresentation={true}/>

    {/* R82: R_51R_0402 */}
    <chip name={"R82"} pcbX={-24.01} pcbY={-4.495} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R82 />} noSchematicRepresentation={true}/>

    {/* C133: C_47u_0603 */}
    <chip name={"C133"} pcbX={-5.45} pcbY={-13.45} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C133 />} noSchematicRepresentation={true}/>

    {/* C134: C_4u7_0402 */}
    <chip name={"C134"} pcbX={-8.25} pcbY={-11.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C134 />} noSchematicRepresentation={true}/>

    {/* C136: C_470n_0402 */}
    <chip name={"C136"} pcbX={-8.25} pcbY={-10.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C136 />} noSchematicRepresentation={true}/>

    {/* C137: C_100n_0402 */}
    <chip name={"C137"} pcbX={-2.765} pcbY={-10.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C137 />} noSchematicRepresentation={true}/>

    {/* C138: C_10n_0402 */}
    <chip name={"C138"} pcbX={-6.7} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C138 />} noSchematicRepresentation={true}/>

    {/* C143: C_10n_0402 */}
    <chip name={"C143"} pcbX={-4.2} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C143 />} noSchematicRepresentation={true}/>

    {/* C145: C_10n_0402 */}
    <chip name={"C145"} pcbX={-7.7} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C145 />} noSchematicRepresentation={true}/>

    {/* C147: C_10n_0402 */}
    <chip name={"C147"} pcbX={-1.55} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C147 />} noSchematicRepresentation={true}/>

    {/* C148: C_1n_0402 */}
    <chip name={"C148"} pcbX={-2.75} pcbY={-11.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C148 />} noSchematicRepresentation={true}/>

    {/* C150: C_1n_0402 */}
    <chip name={"C150"} pcbX={1.45} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C150 />} noSchematicRepresentation={true}/>

    {/* C152: C_1n_0402 */}
    <chip name={"C152"} pcbX={2.45} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C152 />} noSchematicRepresentation={true}/>

    {/* C154: C_47u_0603 */}
    <chip name={"C154"} pcbX={-0.7} pcbY={-1.845} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C154 />} noSchematicRepresentation={true}/>

    {/* C157: C_47u_0603 */}
    <chip name={"C157"} pcbX={4.3} pcbY={-13.45} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C157 />} noSchematicRepresentation={true}/>

    {/* C155: C_47u_0603 */}
    <chip name={"C155"} pcbX={7.3} pcbY={-13.45} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM188R60J476ME15D"} displayName={"C_47u_0603"} footprint={<Footprint_C155 />} noSchematicRepresentation={true}/>

    {/* C156: C_4u7_0402 */}
    <chip name={"C156"} pcbX={-8.7} pcbY={-8.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C156 />} noSchematicRepresentation={true}/>

    {/* C160: C_4u7_0402 */}
    <chip name={"C160"} pcbX={3} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C160 />} noSchematicRepresentation={true}/>

    {/* C158: C_4u7_0402 */}
    <chip name={"C158"} pcbX={5.6} pcbY={-13.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C158 />} noSchematicRepresentation={true}/>

    {/* C159: C_4u7_0402 */}
    <chip name={"C159"} pcbX={7.65} pcbY={-7.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C159 />} noSchematicRepresentation={true}/>

    {/* C163: C_470n_0402 */}
    <chip name={"C163"} pcbX={1.95} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C163 />} noSchematicRepresentation={true}/>

    {/* C161: C_470n_0402 */}
    <chip name={"C161"} pcbX={-7.5} pcbY={1.964286} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C161 />} noSchematicRepresentation={true}/>

    {/* C162: C_470n_0402 */}
    <chip name={"C162"} pcbX={2.1} pcbY={-2.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C162 />} noSchematicRepresentation={true}/>

    {/* C164: C_470n_0402 */}
    <chip name={"C164"} pcbX={-4.35} pcbY={5.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C164 />} noSchematicRepresentation={true}/>

    {/* C165: C_470n_0402 */}
    <chip name={"C165"} pcbX={2.05} pcbY={-1.35} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C165 />} noSchematicRepresentation={true}/>

    {/* C166: C_470n_0402 */}
    <chip name={"C166"} pcbX={7.35} pcbY={-10.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C166 />} noSchematicRepresentation={true}/>

    {/* C167: C_470n_0402 */}
    <chip name={"C167"} pcbX={2.85} pcbY={5.35} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C167 />} noSchematicRepresentation={true}/>

    {/* C168: C_470n_0402 */}
    <chip name={"C168"} pcbX={2} pcbY={0.25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C168 />} noSchematicRepresentation={true}/>

    {/* C169: C_100n_0402 */}
    <chip name={"C169"} pcbX={2.85} pcbY={-10.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C169 />} noSchematicRepresentation={true}/>

    {/* C170: C_470n_0402 */}
    <chip name={"C170"} pcbX={6.1} pcbY={2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C170 />} noSchematicRepresentation={true}/>

    {/* C171: C_470n_0402 */}
    <chip name={"C171"} pcbX={3.25} pcbY={2.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C171 />} noSchematicRepresentation={true}/>

    {/* C172: C_10n_0402 */}
    <chip name={"C172"} pcbX={-0.1} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C172 />} noSchematicRepresentation={true}/>

    {/* C173: C_470n_0402 */}
    <chip name={"C173"} pcbX={6.15} pcbY={-3.625} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C173 />} noSchematicRepresentation={true}/>

    {/* C174: C_470n_0402 */}
    <chip name={"C174"} pcbX={1.75} pcbY={-4.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C174 />} noSchematicRepresentation={true}/>

    {/* C175: C_10n_0402 */}
    <chip name={"C175"} pcbX={0.925} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C175 />} noSchematicRepresentation={true}/>

    {/* C176: C_470n_0402 */}
    <chip name={"C176"} pcbX={3.615} pcbY={-6.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C176 />} noSchematicRepresentation={true}/>

    {/* C177: C_470n_0402 */}
    <chip name={"C177"} pcbX={3.3} pcbY={-4.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C177 />} noSchematicRepresentation={true}/>

    {/* C178: C_1n_0402 */}
    <chip name={"C178"} pcbX={-0.25} pcbY={-11.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C178 />} noSchematicRepresentation={true}/>

    {/* C179: C_470n_0402 */}
    <chip name={"C179"} pcbX={-5.6} pcbY={-5.85} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C179 />} noSchematicRepresentation={true}/>

    {/* C181: C_470n_0402 */}
    <chip name={"C181"} pcbX={-4.6} pcbY={-5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C181 />} noSchematicRepresentation={true}/>

    {/* C182: C_470n_0402 */}
    <chip name={"C182"} pcbX={-7.5} pcbY={-4.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C182 />} noSchematicRepresentation={true}/>

    {/* C183: C_470n_0402 */}
    <chip name={"C183"} pcbX={-1.5} pcbY={-4.965} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C183 />} noSchematicRepresentation={true}/>

    {/* C184: C_470n_0402 */}
    <chip name={"C184"} pcbX={-2.15} pcbY={-13.135} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C184 />} noSchematicRepresentation={true}/>

    {/* C185: C_470n_0402 */}
    <chip name={"C185"} pcbX={0.1} pcbY={-4.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C185 />} noSchematicRepresentation={true}/>

    {/* C186: C_470n_0402 */}
    <chip name={"C186"} pcbX={-1.125} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C186 />} noSchematicRepresentation={true}/>

    {/* C187: C_470n_0402 */}
    <chip name={"C187"} pcbX={-3.1} pcbY={-4.965} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C187 />} noSchematicRepresentation={true}/>

    {/* C188: C_470n_0402 */}
    <chip name={"C188"} pcbX={-3.7} pcbY={-3.05} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C188 />} noSchematicRepresentation={true}/>

    {/* C189: C_470n_0402 */}
    <chip name={"C189"} pcbX={-3.7} pcbY={-1.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C189 />} noSchematicRepresentation={true}/>

    {/* C190: C_470n_0402 */}
    <chip name={"C190"} pcbX={-3.7} pcbY={0.15} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C190 />} noSchematicRepresentation={true}/>

    {/* C191: C_470n_0402 */}
    <chip name={"C191"} pcbX={-3.15} pcbY={2.05} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C191 />} noSchematicRepresentation={true}/>

    {/* C192: C_470n_0402 */}
    <chip name={"C192"} pcbX={-1.55} pcbY={2.05} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C192 />} noSchematicRepresentation={true}/>

    {/* C193: C_470n_0402 */}
    <chip name={"C193"} pcbX={-4.6} pcbY={2.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C193 />} noSchematicRepresentation={true}/>

    {/* C203: C_4u7_0402 */}
    <chip name={"C203"} pcbX={-5.85} pcbY={4.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C203 />} noSchematicRepresentation={true}/>

    {/* C204: C_470n_0402 */}
    <chip name={"C204"} pcbX={-0.7} pcbY={3.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C204 />} noSchematicRepresentation={true}/>

    {/* C206: C_470n_0402 */}
    <chip name={"C206"} pcbX={-2.35} pcbY={5.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C206 />} noSchematicRepresentation={true}/>

    {/* C207: C_470n_0402 */}
    <chip name={"C207"} pcbX={-5.85} pcbY={5.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C207 />} noSchematicRepresentation={true}/>

    {/* C209: C_4u7_0402 */}
    <chip name={"C209"} pcbX={4.45} pcbY={4.15} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C209 />} noSchematicRepresentation={true}/>

    {/* C210: C_470n_0402 */}
    <chip name={"C210"} pcbX={6.15} pcbY={-5.675} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C210 />} noSchematicRepresentation={true}/>

    {/* C211: C_470n_0402 */}
    <chip name={"C211"} pcbX={0.85} pcbY={3.95} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C211 />} noSchematicRepresentation={true}/>

    {/* C212: C_470n_0402 */}
    <chip name={"C212"} pcbX={6.15} pcbY={-6.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C212 />} noSchematicRepresentation={true}/>

    {/* C213: C_470n_0402 */}
    <chip name={"C213"} pcbX={0.85} pcbY={5.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C213 />} noSchematicRepresentation={true}/>

    {/* C214: C_470n_0402 */}
    <chip name={"C214"} pcbX={4.45} pcbY={5.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C214 />} noSchematicRepresentation={true}/>

    {/* C215: C_470n_0402 */}
    <chip name={"C215"} pcbX={1.85} pcbY={5.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C215 />} noSchematicRepresentation={true}/>

    {/* C218: C_470n_0402 */}
    <chip name={"C218"} pcbX={-7.5} pcbY={-6.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C218 />} noSchematicRepresentation={true}/>

    {/* C219: C_4u7_0402 */}
    <chip name={"C219"} pcbX={6.1} pcbY={0.95} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C219 />} noSchematicRepresentation={true}/>

    {/* C220: C_470n_0402 */}
    <chip name={"C220"} pcbX={-7.5} pcbY={-7.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C220 />} noSchematicRepresentation={true}/>

    {/* C221: C_470n_0402 */}
    <chip name={"C221"} pcbX={4.1} pcbY={-2.65} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C221 />} noSchematicRepresentation={true}/>

    {/* C222: C_470n_0402 */}
    <chip name={"C222"} pcbX={4.05} pcbY={-0.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C222 />} noSchematicRepresentation={true}/>

    {/* C223: C_470n_0402 */}
    <chip name={"C223"} pcbX={4} pcbY={0.95} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C223 />} noSchematicRepresentation={true}/>

    {/* C224: C_470n_0402 */}
    <chip name={"C224"} pcbX={5.4} pcbY={3.05} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C224 />} noSchematicRepresentation={true}/>

    {/* C225: C_4u7_0402 */}
    <chip name={"C225"} pcbX={6.15} pcbY={-0.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C225 />} noSchematicRepresentation={true}/>

    {/* C226: C_470n_0402 */}
    <chip name={"C226"} pcbX={6.15} pcbY={-4.65} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C226 />} noSchematicRepresentation={true}/>

    {/* C228: C_470n_0402 */}
    <chip name={"C228"} pcbX={6.15} pcbY={-2.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C228 />} noSchematicRepresentation={true}/>

    {/* C229: C_470n_0402 */}
    <chip name={"C229"} pcbX={6.15} pcbY={-1.575} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C229 />} noSchematicRepresentation={true}/>

    {/* C230: C_4u7_0402 */}
    <chip name={"C230"} pcbX={-7.5} pcbY={-2.17857} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C230 />} noSchematicRepresentation={true}/>

    {/* C231: C_470n_0402 */}
    <chip name={"C231"} pcbX={-7.5} pcbY={-3.214284} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C231 />} noSchematicRepresentation={true}/>

    {/* C232: C_470n_0402 */}
    <chip name={"C232"} pcbX={-5.6} pcbY={-3.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C232 />} noSchematicRepresentation={true}/>

    {/* C233: C_470n_0402 */}
    <chip name={"C233"} pcbX={-25.65} pcbY={2.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C233 />} noSchematicRepresentation={true}/>

    {/* C234: C_470n_0402 */}
    <chip name={"C234"} pcbX={-7.5} pcbY={-5.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C234 />} noSchematicRepresentation={true}/>

    {/* C235: C_4u7_0402 */}
    <chip name={"C235"} pcbX={-0.7} pcbY={5.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C235 />} noSchematicRepresentation={true}/>

    {/* C236: C_470n_0402 */}
    <chip name={"C236"} pcbX={-7.5} pcbY={3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C236 />} noSchematicRepresentation={true}/>

    {/* C237: C_470n_0402 */}
    <chip name={"C237"} pcbX={-7.5} pcbY={-0.107142} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C237 />} noSchematicRepresentation={true}/>

    {/* C238: C_470n_0402 */}
    <chip name={"C238"} pcbX={-7.5} pcbY={0.928572} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C238 />} noSchematicRepresentation={true}/>

    {/* C239: C_470n_0402 */}
    <chip name={"C239"} pcbX={-7.5} pcbY={-1.142856} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C239 />} noSchematicRepresentation={true}/>

    {/* FB4: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB4"} pcbX={-6.34} pcbY={-9.895} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB4 />} noSchematicRepresentation={true}/>

    {/* FB5: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB5"} pcbX={-5.3} pcbY={-7.975} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB5 />} noSchematicRepresentation={true}/>

    {/* FB6: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB6"} pcbX={5.6} pcbY={-8} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB6 />} noSchematicRepresentation={true}/>

    {/* FB7: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB7"} pcbX={6.1} pcbY={-10.05} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB7 />} noSchematicRepresentation={true}/>

    {/* FB8: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB8"} pcbX={8.7} pcbY={-13.45} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB8 />} noSchematicRepresentation={true}/>

    {/* C139: C_100n_0402 */}
    <chip name={"C139"} pcbX={0.45} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C139 />} noSchematicRepresentation={true}/>

    {/* C140: C_100n_0402 */}
    <chip name={"C140"} pcbX={-2.55} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C140 />} noSchematicRepresentation={true}/>

    {/* C141: C_100n_0402 */}
    <chip name={"C141"} pcbX={3.45} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C141 />} noSchematicRepresentation={true}/>

    {/* C142: C_100n_0402 */}
    <chip name={"C142"} pcbX={2.85} pcbY={-11.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C142 />} noSchematicRepresentation={true}/>

    {/* C144: C_10n_0402 */}
    <chip name={"C144"} pcbX={-3.55} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C144 />} noSchematicRepresentation={true}/>

    {/* C146: C_10n_0402 */}
    <chip name={"C146"} pcbX={-0.55} pcbY={-8.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C146 />} noSchematicRepresentation={true}/>

    {/* C149: C_1n_0402 */}
    <chip name={"C149"} pcbX={-4.65} pcbY={-9.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C149 />} noSchematicRepresentation={true}/>

    {/* C151: C_1n_0402 */}
    <chip name={"C151"} pcbX={4.85} pcbY={-9.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C151 />} noSchematicRepresentation={true}/>

    {/* C194: C_470n_0402 */}
    <chip name={"C194"} pcbX={1.65} pcbY={2.05} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C194 />} noSchematicRepresentation={true}/>

    {/* C180: C_1n_0402 */}
    <chip name={"C180"} pcbX={-0.25} pcbY={-10.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C180 />} noSchematicRepresentation={true}/>

    {/* C153: C_1n_0402 */}
    <chip name={"C153"} pcbX={-8.235} pcbY={-9.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM1555C1H102JA01D"} displayName={"C_1n_0402"} footprint={<Footprint_C153 />} noSchematicRepresentation={true}/>

    {/* C135: C_470n_0402 */}
    <chip name={"C135"} pcbX={-3.175} pcbY={-13.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C135 />} noSchematicRepresentation={true}/>

    {/* C195: C_470n_0402 */}
    <chip name={"C195"} pcbX={0.05} pcbY={2.05} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C195 />} noSchematicRepresentation={true}/>

    {/* C22: C_4u7_0402 */}
    <chip name={"C22"} pcbX={3.85} pcbY={24.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* C21: C_10n_0402 */}
    <chip name={"C21"} pcbX={-0.7} pcbY={25.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* C19: C_470n_0402 */}
    <chip name={"C19"} pcbX={-3.15} pcbY={25.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C19 />} noSchematicRepresentation={true}/>

    {/* C18: C_4u7_0402 */}
    <chip name={"C18"} pcbX={-3.15} pcbY={28.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* C17: C_10n_0402 */}
    <chip name={"C17"} pcbX={0.95} pcbY={18.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* C16: C_10n_0402 */}
    <chip name={"C16"} pcbX={0.85} pcbY={25.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* C15: C_10n_0402 */}
    <chip name={"C15"} pcbX={-2.08} pcbY={19.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* C14: C_10n_0402 */}
    <chip name={"C14"} pcbX={3.85} pcbY={21.35} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* C13: C_10n_0402 */}
    <chip name={"C13"} pcbX={0.85} pcbY={28.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C13 />} noSchematicRepresentation={true}/>

    {/* C12: C_10n_0402 */}
    <chip name={"C12"} pcbX={-5} pcbY={24.95} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* C10: C_4u7_0402 */}
    <chip name={"C10"} pcbX={-4.65} pcbY={28.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* C8: C_470n_0402 */}
    <chip name={"C8"} pcbX={1.2} pcbY={21.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* C7: C_10n_0402 */}
    <chip name={"C7"} pcbX={-4.1} pcbY={19.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* C6: C_4u7_0402 */}
    <chip name={"C6"} pcbX={-0.06} pcbY={19.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* C3: C_470n_0402 */}
    <chip name={"C3"} pcbX={-1.07} pcbY={18.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* C2: C_470n_0402 */}
    <chip name={"C2"} pcbX={3.85} pcbY={20.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* FB2: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB2"} pcbX={-1.9} pcbY={28.85} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB2 />} noSchematicRepresentation={true}/>

    {/* FB1: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB1"} pcbX={-7} pcbY={27.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* C25: C_10n_0402 */}
    <chip name={"C25"} pcbX={3.85} pcbY={23.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* C24: C_100n_0402 */}
    <chip name={"C24"} pcbX={1.2} pcbY={23.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* C23: C_10n_0402 */}
    <chip name={"C23"} pcbX={-0.65} pcbY={28.55} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C23 />} noSchematicRepresentation={true}/>

    {/* C1: C_4u7_0402 */}
    <chip name={"C1"} pcbX={-3.09} pcbY={18.8} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* C47: C_100n_0402 */}
    <chip name={"C47"} pcbX={3.85} pcbY={22.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C47 />} noSchematicRepresentation={true}/>

    {/* C69: C_100n_0402 */}
    <chip name={"C69"} pcbX={24.55} pcbY={5.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C69 />} noSchematicRepresentation={true}/>

    {/* C76: C_100n_0402 */}
    <chip name={"C76"} pcbX={16.45} pcbY={3.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C76 />} noSchematicRepresentation={true}/>

    {/* C70: C_4u7_0402 */}
    <chip name={"C70"} pcbX={24.55} pcbY={2.566667} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C70 />} noSchematicRepresentation={true}/>

    {/* C77: C_4u7_0402 */}
    <chip name={"C77"} pcbX={24.55} pcbY={1.558334} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C77 />} noSchematicRepresentation={true}/>

    {/* C29: C_100n_0402 */}
    <chip name={"C29"} pcbX={-10.1} pcbY={36.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C29 />} noSchematicRepresentation={true}/>

    {/* C30: C_100n_0402 */}
    <chip name={"C30"} pcbX={-10.1} pcbY={35.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C30 />} noSchematicRepresentation={true}/>

    {/* R83: R_51R_0402 */}
    <chip name={"R83"} pcbX={-24.01} pcbY={-3.495} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-51R0GLF"} displayName={"R_51R_0402"} footprint={<Footprint_R83 />} noSchematicRepresentation={true}/>

    {/* C43: C_470n_0402 */}
    <chip name={"C43"} pcbX={-21.95} pcbY={-19.665} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C43 />} noSchematicRepresentation={true}/>

    {/* C44: C_470n_0402 */}
    <chip name={"C44"} pcbX={-22.5} pcbY={-11.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C44 />} noSchematicRepresentation={true}/>

    {/* C45: C_470n_0402 */}
    <chip name={"C45"} pcbX={-33.7} pcbY={-11.55} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C45 />} noSchematicRepresentation={true}/>

    {/* R21: R_4k7_0402 */}
    <chip name={"R21"} pcbX={-26.125} pcbY={-28.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R21 />} noSchematicRepresentation={true}/>

    {/* R23: R_4k7_0402 */}
    <chip name={"R23"} pcbX={-37.375} pcbY={-19.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R23 />} noSchematicRepresentation={true}/>

    {/* R25: R_1k_0402 */}
    <chip name={"R25"} pcbX={-24.125} pcbY={-28.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R25 />} noSchematicRepresentation={true}/>

    {/* R27: R_1k_0402 */}
    <chip name={"R27"} pcbX={-35.375} pcbY={-19.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R27 />} noSchematicRepresentation={true}/>

    {/* R29: R_10k_0402 */}
    <chip name={"R29"} pcbX={-23.125} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R29 />} noSchematicRepresentation={true}/>

    {/* R31: R_10k_0402 */}
    <chip name={"R31"} pcbX={-34.375} pcbY={-19.735} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R31 />} noSchematicRepresentation={true}/>

    {/* R33: R_10k_0402 */}
    <chip name={"R33"} pcbX={-28.125} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R33 />} noSchematicRepresentation={true}/>

    {/* R35: R_10k_0402 */}
    <chip name={"R35"} pcbX={-39.375} pcbY={-19.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R35 />} noSchematicRepresentation={true}/>

    {/* R37: R_10k_0402 */}
    <chip name={"R37"} pcbX={-25.125} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R37 />} noSchematicRepresentation={true}/>

    {/* R39: R_10k_0402 */}
    <chip name={"R39"} pcbX={-36.375} pcbY={-19.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R39 />} noSchematicRepresentation={true}/>

    {/* R41: R_10k_0402 */}
    <chip name={"R41"} pcbX={-27.125} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R41 />} noSchematicRepresentation={true}/>

    {/* R43: R_10k_0402 */}
    <chip name={"R43"} pcbX={-38.375} pcbY={-19.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R43 />} noSchematicRepresentation={true}/>

    {/* C46: C_470n_0402 */}
    <chip name={"C46"} pcbX={-33.2} pcbY={-19.715} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C46 />} noSchematicRepresentation={true}/>

    {/* R24: R_4k7_0402 */}
    <chip name={"R24"} pcbX={-37.375} pcbY={-28.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R24 />} noSchematicRepresentation={true}/>

    {/* R28: R_1k_0402 */}
    <chip name={"R28"} pcbX={-35.375} pcbY={-28.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R28 />} noSchematicRepresentation={true}/>

    {/* R32: R_10k_0402 */}
    <chip name={"R32"} pcbX={-34.375} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R32 />} noSchematicRepresentation={true}/>

    {/* R36: R_10k_0402 */}
    <chip name={"R36"} pcbX={-39.375} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R36 />} noSchematicRepresentation={true}/>

    {/* R40: R_10k_0402 */}
    <chip name={"R40"} pcbX={-36.375} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R40 />} noSchematicRepresentation={true}/>

    {/* R44: R_10k_0402 */}
    <chip name={"R44"} pcbX={-38.375} pcbY={-28.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R44 />} noSchematicRepresentation={true}/>

    {/* R22: R_4k7_0402 */}
    <chip name={"R22"} pcbX={-26.125} pcbY={-19.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R22 />} noSchematicRepresentation={true}/>

    {/* R26: R_1k_0402 */}
    <chip name={"R26"} pcbX={-24.125} pcbY={-19.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R26 />} noSchematicRepresentation={true}/>

    {/* R30: R_10k_0402 */}
    <chip name={"R30"} pcbX={-23.125} pcbY={-19.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R30 />} noSchematicRepresentation={true}/>

    {/* R34: R_10k_0402 */}
    <chip name={"R34"} pcbX={-28.125} pcbY={-19.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R34 />} noSchematicRepresentation={true}/>

    {/* R38: R_10k_0402 */}
    <chip name={"R38"} pcbX={-25.125} pcbY={-19.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R38 />} noSchematicRepresentation={true}/>

    {/* R42: R_10k_0402 */}
    <chip name={"R42"} pcbX={-27.125} pcbY={-19.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R42 />} noSchematicRepresentation={true}/>

    {/* C208: C_100n_0402 */}
    <chip name={"C208"} pcbX={-19.25} pcbY={-13.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C208 />} noSchematicRepresentation={true}/>

    {/* R131: R_10k_0402 */}
    <chip name={"R131"} pcbX={-20.35} pcbY={-13.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R131 />} noSchematicRepresentation={true}/>

    {/* R124: 8x51R_0602_array */}
    <chip name={"R124"} pcbX={-20.36} pcbY={2.8} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} manufacturerPartNumber={"EXB2HV510JV"} displayName={"8x51R_0602_array"} footprint={<Footprint_R124 />} noSchematicRepresentation={true}/>

    {/* R125: 8x51R_0602_array */}
    <chip name={"R125"} pcbX={-26.16} pcbY={-0.695} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} manufacturerPartNumber={"EXB2HV510JV"} displayName={"8x51R_0602_array"} footprint={<Footprint_R125 />} noSchematicRepresentation={true}/>

    {/* R136: 8x51R_0602_array */}
    <chip name={"R136"} pcbX={-20.33} pcbY={-5.495} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"] }} manufacturerPartNumber={"EXB2HV510JV"} displayName={"8x51R_0602_array"} footprint={<Footprint_R136 />} noSchematicRepresentation={true}/>

    {/* R133: R_0R_0402 */}
    <chip name={"R133"} pcbX={-17.65} pcbY={-16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R133 />} noSchematicRepresentation={true}/>

    {/* R134: R_0R_0402 */}
    <chip name={"R134"} pcbX={-15.55} pcbY={-16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R134 />} noSchematicRepresentation={true}/>

    {/* R135: R_0R_0402 */}
    <chip name={"R135"} pcbX={-16.6} pcbY={-16.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"ERJ2GE0R00X"} displayName={"R_0R_0402"} footprint={<Footprint_R135 />} noSchematicRepresentation={true}/>

    {/* R49: R_357k_0402 */}
    <chip name={"R49"} pcbX={-14.451} pcbY={-23.9942} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R49 />} noSchematicRepresentation={true}/>

    {/* R50: R_357k_0402 */}
    <chip name={"R50"} pcbX={-14.451} pcbY={-22.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R50 />} noSchematicRepresentation={true}/>

    {/* R51: R_357k_0402 */}
    <chip name={"R51"} pcbX={-14.451} pcbY={-25.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R51 />} noSchematicRepresentation={true}/>

    {/* R52: R_357k_0402 */}
    <chip name={"R52"} pcbX={-14.451} pcbY={-24.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R52 />} noSchematicRepresentation={true}/>

    {/* R53: R_357k_0402 */}
    <chip name={"R53"} pcbX={-14.451} pcbY={-27.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R53 />} noSchematicRepresentation={true}/>

    {/* R54: R_357k_0402 */}
    <chip name={"R54"} pcbX={-14.451} pcbY={-26.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R54 />} noSchematicRepresentation={true}/>

    {/* R55: R_357k_0402 */}
    <chip name={"R55"} pcbX={-14.451} pcbY={-29.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R55 />} noSchematicRepresentation={true}/>

    {/* R56: R_357k_0402 */}
    <chip name={"R56"} pcbX={-14.451} pcbY={-28.9742} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-3573GLF"} displayName={"R_357k_0402"} footprint={<Footprint_R56 />} noSchematicRepresentation={true}/>

    {/* C242: C_100n_0402 */}
    <chip name={"C242"} pcbX={-19.3} pcbY={24.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C242 />} noSchematicRepresentation={true}/>

    {/* C243: C_100n_0402 */}
    <chip name={"C243"} pcbX={-19.3} pcbY={22.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C243 />} noSchematicRepresentation={true}/>

    {/* C244: C_100n_0402 */}
    <chip name={"C244"} pcbX={-19.3} pcbY={20.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C244 />} noSchematicRepresentation={true}/>

    {/* C245: C_100n_0402 */}
    <chip name={"C245"} pcbX={-19.3} pcbY={19.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C245 />} noSchematicRepresentation={true}/>

    {/* C246: C_100n_0402 */}
    <chip name={"C246"} pcbX={-19.3} pcbY={18.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C246 />} noSchematicRepresentation={true}/>

    {/* C247: C_100n_0402 */}
    <chip name={"C247"} pcbX={-19.3} pcbY={17.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C247 />} noSchematicRepresentation={true}/>

    {/* R67: R_47k_0402 */}
    <chip name={"R67"} pcbX={-10.525} pcbY={24.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R67 />} noSchematicRepresentation={true}/>

    {/* R62: R_47k_0402 */}
    <chip name={"R62"} pcbX={-10.55} pcbY={17.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R62 />} noSchematicRepresentation={true}/>

    {/* Q16: 2N7002 */}
    <chip name={"Q16"} pcbX={-37.85} pcbY={30} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q16 />} noSchematicRepresentation={true}/>

    {/* C205: C_470n_0402 */}
    <chip name={"C205"} pcbX={-3.35} pcbY={5.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C205 />} noSchematicRepresentation={true}/>

    {/* C27: C_100n_0402 */}
    <chip name={"C27"} pcbX={9.2} pcbY={35.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* C28: C_100n_0402 */}
    <chip name={"C28"} pcbX={9.2} pcbY={36.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C28 />} noSchematicRepresentation={true}/>

    {/* R12: R_10k2_0402 */}
    <chip name={"R12"} pcbX={-7.55} pcbY={29.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1022GLF"} displayName={"R_10k2_0402"} footprint={<Footprint_R12 />} noSchematicRepresentation={true}/>

    {/* R16: R_1k_0402 */}
    <chip name={"R16"} pcbX={-9.05} pcbY={31.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* C54: C_100n_0402 */}
    <chip name={"C54"} pcbX={-21.79} pcbY={21.15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C54 />} noSchematicRepresentation={true}/>

    {/* C60: C_100n_0402 */}
    <chip name={"C60"} pcbX={23.5} pcbY={-5.5} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C60 />} noSchematicRepresentation={true}/>

    {/* R74: R_1k_0402 */}
    <chip name={"R74"} pcbX={22.325} pcbY={-5.525} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R74 />} noSchematicRepresentation={true}/>

    {/* C73: C_100n_0402 */}
    <chip name={"C73"} pcbX={21.525} pcbY={-11.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C73 />} noSchematicRepresentation={true}/>

    {/* C75: C_4u7_0402 */}
    <chip name={"C75"} pcbX={17.425} pcbY={-11.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C75 />} noSchematicRepresentation={true}/>

    {/* C66: C_4u7_0402 */}
    <chip name={"C66"} pcbX={19.575} pcbY={-11.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C66 />} noSchematicRepresentation={true}/>

    {/* C63: C_100n_0402 */}
    <chip name={"C63"} pcbX={17.415} pcbY={-9.07} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C63 />} noSchematicRepresentation={true}/>

    {/* C61: C_100n_0402 */}
    <chip name={"C61"} pcbX={17.35} pcbY={-3.35} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C61 />} noSchematicRepresentation={true}/>

    {/* C65: C_100n_0402 */}
    <chip name={"C65"} pcbX={22.1} pcbY={-10.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C65 />} noSchematicRepresentation={true}/>

    {/* C71: C_100n_0402 */}
    <chip name={"C71"} pcbX={18.1} pcbY={-5.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C71 />} noSchematicRepresentation={true}/>

    {/* C68: C_4u7_0402 */}
    <chip name={"C68"} pcbX={17.415} pcbY={-10.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C68 />} noSchematicRepresentation={true}/>

    {/* C62: C_100n_0402 */}
    <chip name={"C62"} pcbX={17.85} pcbY={6.65} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C62 />} noSchematicRepresentation={true}/>

    {/* R103: R_10k_0402 */}
    <chip name={"R103"} pcbX={-22.05} pcbY={31.55} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R103 />} noSchematicRepresentation={true}/>

    {/* C90: C_470n_0402 */}
    <chip name={"C90"} pcbX={-16.235} pcbY={2.18} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C90 />} noSchematicRepresentation={true}/>

    {/* C87: C_470n_0402 */}
    <chip name={"C87"} pcbX={-26.05} pcbY={-5.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C87 />} noSchematicRepresentation={true}/>

    {/* Q10: 2N7002 */}
    <chip name={"Q10"} pcbX={-33.9} pcbY={34.05} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} manufacturerPartNumber={"2N7002"} displayName={"2N7002"} footprint={<Footprint_Q10 />} noSchematicRepresentation={true}/>

    {/* C93: C_100n_0402 */}
    <chip name={"C93"} pcbX={-22.45} pcbY={-1.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C93 />} noSchematicRepresentation={true}/>

    {/* C216: C_100n_0402 */}
    <chip name={"C216"} pcbX={-13.4} pcbY={-3.05} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C216 />} noSchematicRepresentation={true}/>

    {/* C217: C_100n_0402 */}
    <chip name={"C217"} pcbX={-11.5} pcbY={-3.85} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C217 />} noSchematicRepresentation={true}/>

    {/* R65: R_47k_0402 */}
    <chip name={"R65"} pcbX={-10.525} pcbY={23.025} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R65 />} noSchematicRepresentation={true}/>

    {/* R102: R_10k_0402 */}
    <chip name={"R102"} pcbX={-27.45} pcbY={25.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R102 />} noSchematicRepresentation={true}/>

    {/* R59: R_47k_0402 */}
    <chip name={"R59"} pcbX={-10.55} pcbY={19.95} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R59 />} noSchematicRepresentation={true}/>

    {/* C98: C_100n_0402 */}
    <chip name={"C98"} pcbX={35.7} pcbY={35.46} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C98 />} noSchematicRepresentation={true}/>

    {/* C99: C_4u7_0402 */}
    <chip name={"C99"} pcbX={33.55} pcbY={35.425} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C99 />} noSchematicRepresentation={true}/>

    {/* FB9: FB_600Z_0.3A_Murata-BLM15AG_0402 */}
    <chip name={"FB9"} pcbX={31.3} pcbY={35.425} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM15AG601SN1D"} displayName={"FB_600Z_0.3A_Murata-BLM15AG_0402"} footprint={<Footprint_FB9 />} noSchematicRepresentation={true}/>

    {/* R149: R_12k_0402 */}
    <chip name={"R149"} pcbX={32} pcbY={32.775} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1202GLF"} displayName={"R_12k_0402"} footprint={<Footprint_R149 />} noSchematicRepresentation={true}/>

    {/* R148: R_1k_0402 */}
    <chip name={"R148"} pcbX={28} pcbY={32.775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1001GLF"} displayName={"R_1k_0402"} footprint={<Footprint_R148 />} noSchematicRepresentation={true}/>

    {/* R147: R_10k_0402 */}
    <chip name={"R147"} pcbX={29} pcbY={32.775} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R147 />} noSchematicRepresentation={true}/>

    {/* FB10: FB_600Z_0.3A_Murata-BLM15AG_0402 */}
    <chip name={"FB10"} pcbX={32.4} pcbY={35.425} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM15AG601SN1D"} displayName={"FB_600Z_0.3A_Murata-BLM15AG_0402"} footprint={<Footprint_FB10 />} noSchematicRepresentation={true}/>

    {/* R146: R_4k7_0402 */}
    <chip name={"R146"} pcbX={29.75} pcbY={35.425} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R146 />} noSchematicRepresentation={true}/>

    {/* C257: C_3u3_0603 */}
    <chip name={"C257"} pcbX={35} pcbY={25.325} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C0603C335M9PACTU"} displayName={"C_3u3_0603"} footprint={<Footprint_C257 />} noSchematicRepresentation={true}/>

    {/* R150: R_4k7_0402 */}
    <chip name={"R150"} pcbX={34.65} pcbY={35.46} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4701GLF"} displayName={"R_4k7_0402"} footprint={<Footprint_R150 />} noSchematicRepresentation={true}/>

    {/* R151: R_10k_0402 */}
    <chip name={"R151"} pcbX={35.35} pcbY={30.725} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R151 />} noSchematicRepresentation={true}/>

    {/* C255: C_100n_0402 */}
    <chip name={"C255"} pcbX={29.8} pcbY={25.175} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C255 />} noSchematicRepresentation={true}/>

    {/* C254: C_100n_0402 */}
    <chip name={"C254"} pcbX={32.4} pcbY={25.225} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C254 />} noSchematicRepresentation={true}/>

    {/* C259: C_100n_0402 */}
    <chip name={"C259"} pcbX={35} pcbY={32.775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C259 />} noSchematicRepresentation={true}/>

    {/* C253: C_100n_0402 */}
    <chip name={"C253"} pcbX={26.8} pcbY={30.575} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C253 />} noSchematicRepresentation={true}/>

    {/* C258: C_100n_0402 */}
    <chip name={"C258"} pcbX={35.315} pcbY={26.575} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C258 />} noSchematicRepresentation={true}/>

    {/* C252: C_4u7_0402 */}
    <chip name={"C252"} pcbX={34} pcbY={32.775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C252 />} noSchematicRepresentation={true}/>

    {/* C249: C_100n_0402 */}
    <chip name={"C249"} pcbX={33} pcbY={32.775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C249 />} noSchematicRepresentation={true}/>

    {/* C251: C_100n_0402 */}
    <chip name={"C251"} pcbX={39.575} pcbY={31.675} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C251 />} noSchematicRepresentation={true}/>

    {/* C250: C_4u7_0402 */}
    <chip name={"C250"} pcbX={30} pcbY={32.775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61A475MEAAD"} displayName={"C_4u7_0402"} footprint={<Footprint_C250 />} noSchematicRepresentation={true}/>

    {/* C227: C_100n_0402 */}
    <chip name={"C227"} pcbX={31} pcbY={32.775} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C227 />} noSchematicRepresentation={true}/>

    {/* C256: C_100n_0402 */}
    <chip name={"C256"} pcbX={35.315} pcbY={29.325} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C256 />} noSchematicRepresentation={true}/>

    {/* C74: C_100n_0402 */}
    <chip name={"C74"} pcbX={24.55} pcbY={3.575} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C74 />} noSchematicRepresentation={true}/>

    {/* C91: C_470n_0402 */}
    <chip name={"C91"} pcbX={-23.385} pcbY={-5.995} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C91 />} noSchematicRepresentation={true}/>

    {/* C57: C_100n_0402 */}
    <chip name={"C57"} pcbX={-7.42} pcbY={-19.37} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C57 />} noSchematicRepresentation={true}/>

    {/* C58: C_100n_0402 */}
    <chip name={"C58"} pcbX={-8.39} pcbY={-19.37} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C58 />} noSchematicRepresentation={true}/>

    {/* FB3: FB_120Z_2A_Murata-BLM18PG_0603 */}
    <chip name={"FB3"} pcbX={3.65} pcbY={26.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"BLM18PG121SN1D"} displayName={"FB_120Z_2A_Murata-BLM18PG_0603"} footprint={<Footprint_FB3 />} noSchematicRepresentation={true}/>

    {/* R60: R_47k_0402 */}
    <chip name={"R60"} pcbX={-10.55} pcbY={20.975} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-4702GLF"} displayName={"R_47k_0402"} footprint={<Footprint_R60 />} noSchematicRepresentation={true}/>

    {/* R14: R_22R_0402 */}
    <chip name={"R14"} pcbX={-10.535} pcbY={22} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-22R0GLF"} displayName={"R_22R_0402"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* C11: C_10n_0402 */}
    <chip name={"C11"} pcbX={-7.8} pcbY={23.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* C9: C_10n_0402 */}
    <chip name={"C9"} pcbX={-5} pcbY={22.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* C5: C_10n_0402 */}
    <chip name={"C5"} pcbX={-7.8} pcbY={24.95} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R71H103KA88D"} displayName={"C_10n_0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* C4: C_470n_0402 */}
    <chip name={"C4"} pcbX={-5} pcbY={21.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X5R1E474M050BB"} displayName={"C_470n_0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* KiCad net: VCC1V35 */}
    <KiCadNet name={"VCC1V35"} connectsTo={[".R79 > .pin1", ".U11 > .pin2", ".C240 > .pin2", ".C202 > .pin2", ".U10 > .pin1", ".U10 > .pin5", ".U10 > .pin8", ".U10 > .pin13", ".U10 > .pin18", ".U10 > .pin20", ".U10 > .pin24", ".U10 > .pin30", ".U10 > .pin31", ".U10 > .pin40", ".U10 > .pin44", ".U10 > .pin48", ".U10 > .pin56", ".U10 > .pin59", ".U10 > .pin73", ".U10 > .pin78", ".U10 > .pin85", ".U10 > .pin90", ".U21 > .pin27", ".U21 > .pin654", ".U21 > .pin682", ".U21 > .pin709", ".R143 > .pin1", ".C79 > .pin2", ".C80 > .pin2", ".C81 > .pin2", ".C82 > .pin2", ".C83 > .pin2", ".C84 > .pin2", ".C85 > .pin2", ".C86 > .pin2", ".C89 > .pin2", ".C92 > .pin2", ".C230 > .pin1", ".C231 > .pin2", ".C232 > .pin1", ".C233 > .pin1", ".C234 > .pin1", ".C90 > .pin2", ".C87 > .pin2", ".C91 > .pin2"]}/>
    {/* KiCad net: Net-(U11-REFIN) */}
    <KiCadNet name={"Net__U11_REFIN_"} connectsTo={[".R79 > .pin2", ".U11 > .pin1", ".R78 > .pin1", ".C196 > .pin2"]}/>
    {/* KiCad net: Net-(C110-Pad2) */}
    <KiCadNet name={"Net__C110_Pad2_"} connectsTo={[".R95 > .pin1", ".C110 > .pin2", ".C111 > .pin2", ".R94 > .pin2", ".L2 > .pin2", ".C112 > .pin2"]}/>
    {/* KiCad net: Net-(R95-Pad2) */}
    <KiCadNet name={"Net__R95_Pad2_"} connectsTo={[".R95 > .pin2", ".R96 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C110 > .pin1", ".U15 > .pin8", ".U15 > .pin11", ".C111 > .pin1", ".U11 > .pin4", ".U11 > .pin8", ".U11 > .pin11", ".C240 > .pin1", ".C201 > .pin1", ".C199 > .pin1", ".R78 > .pin2", ".C197 > .pin1", ".C202 > .pin1", ".C198 > .pin1", ".C200 > .pin1", ".C78 > .pin1", ".R89 > .pin2", ".C109 > .pin1", ".U12 > .pin3", ".U12 > .pin4", ".U10 > .pin6", ".U10 > .pin7", ".U10 > .pin9", ".U10 > .pin12", ".U10 > .pin19", ".U10 > .pin23", ".U10 > .pin25", ".U10 > .pin26", ".U10 > .pin29", ".U10 > .pin36", ".U10 > .pin37", ".U10 > .pin41", ".U10 > .pin42", ".U10 > .pin50", ".U10 > .pin53", ".U10 > .pin67", ".U10 > .pin72", ".U10 > .pin79", ".U10 > .pin84", ".U10 > .pin91", ".U10 > .pin96", ".U7 > .pin1", ".C55 > .pin1", ".C196 > .pin1", ".Q1 > .pin2", ".Q2 > .pin2", ".Q3 > .pin2", ".U21 > .pin28", ".U21 > .pin39", ".U21 > .pin49", ".U21 > .pin50", ".U21 > .pin51", ".U21 > .pin52", ".U21 > .pin53", ".U21 > .pin54", ".U21 > .pin55", ".U21 > .pin56", ".U21 > .pin57", ".U21 > .pin58", ".U21 > .pin59", ".U21 > .pin60", ".U21 > .pin78", ".U21 > .pin87", ".U21 > .pin98", ".U21 > .pin101", ".U21 > .pin106", ".U21 > .pin109", ".U21 > .pin125", ".U21 > .pin126", ".U21 > .pin127", ".U21 > .pin128", ".U21 > .pin129", ".U21 > .pin130", ".U21 > .pin131", ".U21 > .pin132", ".U21 > .pin134", ".U21 > .pin141", ".U21 > .pin143", ".U21 > .pin144", ".U21 > .pin145", ".U21 > .pin146", ".U21 > .pin148", ".U21 > .pin150", ".U21 > .pin158", ".U21 > .pin161", ".U21 > .pin162", ".U21 > .pin163", ".U21 > .pin165", ".U21 > .pin167", ".U21 > .pin168", ".U21 > .pin169", ".U21 > .pin170", ".U21 > .pin172", ".U21 > .pin174", ".U21 > .pin175", ".U21 > .pin176", ".U21 > .pin177", ".U21 > .pin179", ".U21 > .pin181", ".U21 > .pin188", ".U21 > .pin189", ".U21 > .pin192", ".U21 > .pin195", ".U21 > .pin198", ".U21 > .pin201", ".U21 > .pin204", ".U21 > .pin207", ".U21 > .pin218", ".U21 > .pin219", ".U21 > .pin222", ".U21 > .pin225", ".U21 > .pin228", ".U21 > .pin231", ".U21 > .pin234", ".U21 > .pin237", ".U21 > .pin244", ".U21 > .pin247", ".U21 > .pin248", ".U21 > .pin249", ".U21 > .pin250", ".U21 > .pin251", ".U21 > .pin252", ".U21 > .pin253", ".U21 > .pin254", ".U21 > .pin255", ".U21 > .pin256", ".U21 > .pin257", ".U21 > .pin258", ".U21 > .pin259", ".U21 > .pin260", ".U21 > .pin261", ".U21 > .pin263", ".U21 > .pin265", ".U21 > .pin271", ".U21 > .pin284", ".U21 > .pin290", ".U21 > .pin293", ".U21 > .pin296", ".U21 > .pin299", ".U21 > .pin301", ".U21 > .pin304", ".U21 > .pin306", ".U21 > .pin309", ".U21 > .pin312", ".U21 > .pin315", ".U21 > .pin342", ".U21 > .pin374", ".U21 > .pin377", ".U21 > .pin380", ".U21 > .pin383", ".U21 > .pin385", ".U21 > .pin388", ".U21 > .pin390", ".U21 > .pin393", ".U21 > .pin396", ".U21 > .pin399", ".U21 > .pin452", ".U21 > .pin455", ".U21 > .pin460", ".U21 > .pin463", ".U21 > .pin472", ".U21 > .pin473", ".U21 > .pin484", ".U21 > .pin485", ".U21 > .pin500", ".U21 > .pin501", ".U21 > .pin502", ".U21 > .pin503", ".U21 > .pin504", ".U21 > .pin505", ".U21 > .pin506", ".U21 > .pin507", ".U21 > .pin508", ".U21 > .pin509", ".U21 > .pin510", ".U21 > .pin511", ".U21 > .pin512", ".U21 > .pin513", ".U21 > .pin522", ".U21 > .pin533", ".U21 > .pin536", ".U21 > .pin539", ".U21 > .pin543", ".U21 > .pin545", ".U21 > .pin546", ".U21 > .pin547", ".U21 > .pin548", ".U21 > .pin549", ".U21 > .pin550", ".U21 > .pin551", ".U21 > .pin552", ".U21 > .pin554", ".U21 > .pin558", ".U21 > .pin561", ".U21 > .pin571", ".U21 > .pin573", ".U21 > .pin574", ".U21 > .pin575", ".U21 > .pin576", ".U21 > .pin577", ".U21 > .pin578", ".U21 > .pin579", ".U21 > .pin580", ".U21 > .pin582", ".U21 > .pin592", ".U21 > .pin595", ".U21 > .pin599", ".U21 > .pin601", ".U21 > .pin602", ".U21 > .pin603", ".U21 > .pin604", ".U21 > .pin605", ".U21 > .pin606", ".U21 > .pin607", ".U21 > .pin608", ".U21 > .pin610", ".U21 > .pin614", ".U21 > .pin617", ".U21 > .pin627", ".U21 > .pin629", ".U21 > .pin630", ".U21 > .pin631", ".U21 > .pin632", ".U21 > .pin633", ".U21 > .pin634", ".U21 > .pin635", ".U21 > .pin636", ".U21 > .pin638", ".U21 > .pin655", ".U21 > .pin657", ".U21 > .pin658", ".U21 > .pin659", ".U21 > .pin660", ".U21 > .pin661", ".U21 > .pin662", ".U21 > .pin663", ".U21 > .pin664", ".U21 > .pin666", ".U21 > .pin676", ".U21 > .pin679", ".U21 > .pin683", ".U21 > .pin685", ".U21 > .pin686", ".U21 > .pin687", ".U21 > .pin688", ".U21 > .pin689", ".U21 > .pin690", ".U21 > .pin691", ".U21 > .pin692", ".U21 > .pin694", ".U21 > .pin698", ".U21 > .pin701", ".U21 > .pin710", ".U21 > .pin712", ".U21 > .pin713", ".U21 > .pin714", ".U21 > .pin715", ".U21 > .pin716", ".U21 > .pin717", ".U21 > .pin718", ".U21 > .pin719", ".U21 > .pin721", ".U21 > .pin730", ".U21 > .pin737", ".U21 > .pin739", ".U21 > .pin740", ".U21 > .pin741", ".U21 > .pin742", ".U21 > .pin743", ".U21 > .pin744", ".U21 > .pin745", ".U21 > .pin746", ".U21 > .pin748", ".U21 > .pin755", ".U1 > .pin29", ".U1 > .pin49", ".C20 > .pin1", ".C26 > .pin1", ".R13 > .pin1", ".U9 > .pin1", ".U9 > .pin2", ".U9 > .pin33", ".R77 > .pin1", ".C41 > .pin1", ".C40 > .pin1", ".C42 > .pin1", ".J2 > .pin1", ".J2 > .pin3", ".J2 > .pin9", ".J2 > .pin15", ".J2 > .pin21", ".J2 > .pin27", ".J2 > .pin33", ".J2 > .pin39", ".J2 > .pin45", ".J2 > .pin51", ".J2 > .pin57", ".J2 > .pin71", ".J2 > .pin73", ".J2 > .pin75", ".J2 > .pin76", ".J2 > .pin77", ".U4 > .pin4", ".U5 > .pin4", ".J1 > .pin17", ".U3 > .pin4", ".U2 > .pin4", ".C39 > .pin1", ".C241 > .pin1", ".C104 > .pin1", ".C102 > .pin1", ".R97 > .pin2", ".R91 > .pin1", ".C95 > .pin1", ".D6 > .pin2", ".U18 > .pin3", ".U18 > .pin5", ".U19 > .pin3", ".U19 > .pin5", ".U20 > .pin3", ".U20 > .pin5", ".R119 > .pin2", ".R121 > .pin1", ".R117 > .pin2", ".R115 > .pin2", ".U17 > .pin3", ".U17 > .pin5", ".C113 > .pin1", ".C115 > .pin1", ".C130 > .pin1", ".C131 > .pin1", ".C128 > .pin1", ".C125 > .pin1", ".C126 > .pin1", ".C124 > .pin1", ".C123 > .pin1", ".C116 > .pin1", ".C117 > .pin1", ".C114 > .pin2", ".C127 > .pin1", ".C132 > .pin1", ".R123 > .pin2", ".R100 > .pin2", ".J7 > .pin6", ".R75 > .pin1", ".C56 > .pin1", ".U8 > .pin1", ".U8 > .pin2", ".U8 > .pin33", ".C100 > .pin1", ".C96 > .pin1", ".C97 > .pin1", ".C248 > .pin1", ".SW1 > .pin2", ".C129 > .pin1", ".C101 > .pin1", ".C260 > .pin1", ".C261 > .pin1", ".C59 > .pin1", ".C112 > .pin1", ".Y4 > .pin2", ".J5 > .pin13", ".J5 > .pin16", ".J5 > .pin19", ".J5 > .pin22", ".J5 > .pin33", ".J5 > .pin42", ".J5 > .pin58", ".J5 > .pin61", ".J5 > .pin64", ".J5 > .pin67", ".J5 > .pin70", ".J5 > .pin80", ".J5 > .pin87", ".J5 > .pin96", ".J5 > .pin103", ".J5 > .pin108", ".J5 > .pin119", ".J5 > .pin122", ".J5 > .pin125", ".J5 > .pin128", ".J5 > .pin131", ".J5 > .pin134", ".J5 > .pin137", ".J5 > .pin140", ".J5 > .pin143", ".J5 > .pin144", ".J5 > .pin153", ".J5 > .pin158", ".J5 > .pin161", ".J5 > .pin164", ".J6 > .pin5", ".J6 > .pin6", ".C262 > .pin1", ".U16 > .pin3", ".U16 > .pin5", ".U6 > .pin31", ".U6 > .pin32", ".U6 > .pin33", ".U6 > .pin34", ".U6 > .pin35", ".U6 > .pin36", ".U6 > .pin37", ".U6 > .pin38", ".U6 > .pin39", ".U6 > .pin46", ".U6 > .pin50", ".U6 > .pin64", ".U6 > .pin69", ".U6 > .pin73", ".U6 > .pin76", ".U6 > .pin87", ".U6 > .pin94", ".J8 > .pin2", ".J8 > .pin3", ".J18 > .pin2", ".J18 > .pin3", ".Y2 > .pin2", ".Y3 > .pin2", ".Q17 > .pin2", ".TP5 > .pin1", ".Y5 > .pin2", ".U14 > .pin10", ".U14 > .pin21", ".U14 > .pin41", ".U14 > .pin45", ".U14 > .pin57", ".J4 > .pin5", ".J4 > .pin11", ".J9 > .pin1", ".J9 > .pin3", ".J9 > .pin5", ".J9 > .pin7", ".J9 > .pin9", ".J9 > .pin11", ".J9 > .pin13", ".U13 > .pin8", ".U13 > .pin9", ".U13 > .pin10", ".U13 > .pin20", ".U13 > .pin21", ".J3 > .pin2", ".J3 > .pin4", ".D2 > .pin5", ".D2 > .pin10", ".Y1 > .pin2", ".Q11 > .pin2", ".Q12 > .pin2", ".Q13 > .pin2", ".Q14 > .pin2", ".Q15 > .pin2", ".C49 > .pin1", ".C50 > .pin1", ".C48 > .pin1", ".C51 > .pin1", ".C52 > .pin1", ".C53 > .pin1", ".C64 > .pin2", ".C67 > .pin2", ".C72 > .pin1", ".C79 > .pin1", ".C80 > .pin1", ".C81 > .pin1", ".C82 > .pin1", ".C83 > .pin1", ".C84 > .pin1", ".C85 > .pin1", ".C86 > .pin1", ".C88 > .pin1", ".C89 > .pin1", ".C92 > .pin1", ".C94 > .pin2", ".R81 > .pin2", ".C133 > .pin1", ".C134 > .pin1", ".C136 > .pin1", ".C137 > .pin1", ".C138 > .pin1", ".C143 > .pin1", ".C145 > .pin1", ".C147 > .pin1", ".C148 > .pin1", ".C150 > .pin1", ".C152 > .pin1", ".C154 > .pin2", ".C157 > .pin1", ".C155 > .pin1", ".C156 > .pin2", ".C160 > .pin1", ".C158 > .pin1", ".C159 > .pin2", ".C163 > .pin1", ".C161 > .pin1", ".C162 > .pin2", ".C164 > .pin1", ".C165 > .pin2", ".C166 > .pin1", ".C167 > .pin1", ".C168 > .pin2", ".C169 > .pin1", ".C170 > .pin1", ".C171 > .pin2", ".C172 > .pin1", ".C173 > .pin1", ".C174 > .pin2", ".C175 > .pin1", ".C176 > .pin1", ".C177 > .pin2", ".C178 > .pin1", ".C179 > .pin1", ".C181 > .pin2", ".C182 > .pin1", ".C183 > .pin2", ".C184 > .pin1", ".C185 > .pin2", ".C186 > .pin1", ".C187 > .pin2", ".C188 > .pin2", ".C189 > .pin2", ".C190 > .pin2", ".C191 > .pin2", ".C192 > .pin2", ".C193 > .pin2", ".C203 > .pin2", ".C204 > .pin2", ".C206 > .pin2", ".C207 > .pin2", ".C209 > .pin2", ".C210 > .pin2", ".C211 > .pin2", ".C212 > .pin2", ".C213 > .pin2", ".C214 > .pin2", ".C215 > .pin2", ".C218 > .pin2", ".C219 > .pin2", ".C220 > .pin2", ".C221 > .pin2", ".C222 > .pin2", ".C223 > .pin2", ".C224 > .pin2", ".C225 > .pin2", ".C226 > .pin2", ".C228 > .pin2", ".C229 > .pin2", ".C230 > .pin2", ".C231 > .pin1", ".C232 > .pin2", ".C233 > .pin2", ".C234 > .pin2", ".C235 > .pin2", ".C236 > .pin2", ".C237 > .pin2", ".C238 > .pin2", ".C239 > .pin2", ".C139 > .pin1", ".C140 > .pin1", ".C141 > .pin1", ".C142 > .pin1", ".C144 > .pin1", ".C146 > .pin1", ".C149 > .pin1", ".C151 > .pin1", ".C194 > .pin2", ".C180 > .pin1", ".C153 > .pin1", ".C135 > .pin1", ".C195 > .pin2", ".C22 > .pin1", ".C21 > .pin1", ".C19 > .pin1", ".C18 > .pin1", ".C17 > .pin1", ".C16 > .pin1", ".C15 > .pin1", ".C14 > .pin1", ".C13 > .pin1", ".C12 > .pin1", ".C10 > .pin1", ".C8 > .pin1", ".C7 > .pin1", ".C6 > .pin1", ".C3 > .pin1", ".C2 > .pin1", ".C25 > .pin1", ".C24 > .pin1", ".C23 > .pin1", ".C1 > .pin1", ".C47 > .pin2", ".C69 > .pin2", ".C76 > .pin1", ".C70 > .pin2", ".C77 > .pin1", ".C29 > .pin1", ".C30 > .pin1", ".C43 > .pin1", ".C44 > .pin1", ".C45 > .pin1", ".C46 > .pin1", ".C208 > .pin1", ".C242 > .pin1", ".C243 > .pin1", ".C244 > .pin1", ".C245 > .pin1", ".C246 > .pin1", ".C247 > .pin1", ".Q16 > .pin2", ".C205 > .pin2", ".C27 > .pin1", ".C28 > .pin1", ".C54 > .pin1", ".C60 > .pin2", ".C73 > .pin1", ".C75 > .pin1", ".C66 > .pin1", ".C63 > .pin2", ".C61 > .pin2", ".C65 > .pin2", ".C71 > .pin2", ".C68 > .pin1", ".C62 > .pin2", ".C90 > .pin1", ".C87 > .pin1", ".Q10 > .pin2", ".C93 > .pin1", ".C216 > .pin1", ".C217 > .pin1", ".C98 > .pin1", ".C99 > .pin1", ".R149 > .pin2", ".R147 > .pin2", ".C257 > .pin1", ".R151 > .pin2", ".C255 > .pin1", ".C254 > .pin1", ".C259 > .pin1", ".C253 > .pin1", ".C258 > .pin1", ".C252 > .pin1", ".C249 > .pin1", ".C251 > .pin1", ".C250 > .pin1", ".C227 > .pin1", ".C256 > .pin1", ".C74 > .pin2", ".C91 > .pin1", ".C11 > .pin1", ".C9 > .pin1", ".C5 > .pin1", ".C4 > .pin1"]}/>
    {/* KiCad net: Net-(U15-BOOT) */}
    <KiCadNet name={"Net__U15_BOOT_"} connectsTo={[".U15 > .pin1", ".C105 > .pin1"]}/>
    {/* KiCad net: VCC12V */}
    <KiCadNet name={"VCC12V"} connectsTo={[".U15 > .pin2", ".C101 > .pin2", ".C260 > .pin2", ".C261 > .pin2", ".F1 > .pin2"]}/>
    {/* KiCad net: Net-(U15-EN) */}
    <KiCadNet name={"Net__U15_EN_"} connectsTo={[".U15 > .pin3", ".TP6 > .pin1"]}/>
    {/* KiCad net: Net-(U15-SS{slash}TR) */}
    <KiCadNet name={"Net__U15_SS_slash_TR_"} connectsTo={[".U15 > .pin4", ".C59 > .pin2"]}/>
    {/* KiCad net: Net-(U15-RT{slash}CLK) */}
    <KiCadNet name={"Net__U15_RT_slash_CLK_"} connectsTo={[".U15 > .pin5", ".R91 > .pin2"]}/>
    {/* KiCad net: Net-(U15-FB) */}
    <KiCadNet name={"Net__U15_FB_"} connectsTo={[".U15 > .pin6", ".R96 > .pin2", ".R97 > .pin1"]}/>
    {/* KiCad net: Net-(U15-COMP) */}
    <KiCadNet name={"Net__U15_COMP_"} connectsTo={[".U15 > .pin7", ".C104 > .pin2", ".R90 > .pin1"]}/>
    {/* KiCad net: Net-(D6-C) */}
    <KiCadNet name={"Net__D6_C_"} connectsTo={[".U15 > .pin9", ".C105 > .pin2", ".D6 > .pin1", ".L2 > .pin1"]}/>
    {/* KiCad net: /Power supply/5V0_PG */}
    <KiCadNet name={"_Power_supply_5V0_PG"} connectsTo={[".U15 > .pin10", ".U12 > .pin2", ".TP12 > .pin1", ".C262 > .pin2", ".R8 > .pin2", ".Q12 > .pin1"]}/>
    {/* KiCad net: /DDR3/DDR3_VTT */}
    <KiCadNet name={"_DDR3_DDR3_VTT"} connectsTo={[".U11 > .pin3", ".U11 > .pin5", ".C199 > .pin2", ".C197 > .pin2", ".C198 > .pin2", ".R124 > .pin9", ".R124 > .pin10", ".R124 > .pin11", ".R124 > .pin12", ".R124 > .pin13", ".R124 > .pin14", ".R124 > .pin15", ".R124 > .pin16", ".R125 > .pin9", ".R125 > .pin10", ".R125 > .pin11", ".R125 > .pin12", ".R125 > .pin13", ".R125 > .pin14", ".R125 > .pin15", ".R125 > .pin16", ".R136 > .pin9", ".R136 > .pin10", ".R136 > .pin11", ".R136 > .pin12", ".R136 > .pin13", ".R136 > .pin14", ".R136 > .pin15", ".R136 > .pin16"]}/>
    {/* KiCad net: DDR3_VREF */}
    <KiCadNet name={"DDR3_VREF"} connectsTo={[".U11 > .pin6", ".C201 > .pin2", ".C200 > .pin2", ".U10 > .pin43", ".U10 > .pin71", ".U21 > .pin678", ".C88 > .pin2", ".C93 > .pin2", ".C216 > .pin2", ".C217 > .pin2"]}/>
    {/* KiCad net: DDR3_VTT_EN */}
    <KiCadNet name={"DDR3_VTT_EN"} connectsTo={[".U11 > .pin7"]}/>
    {/* KiCad net: Net-(U11-PGOOD) */}
    <KiCadNet name={"Net__U11_PGOOD_"} connectsTo={[".U11 > .pin9", ".R80 > .pin2"]}/>
    {/* KiCad net: VCC3V3 */}
    <KiCadNet name={"VCC3V3"} connectsTo={[".U11 > .pin10", ".R80 > .pin1", ".C78 > .pin2", ".D7 > .pin1", ".D8 > .pin1", ".D9 > .pin1", ".D10 > .pin1", ".D11 > .pin1", ".D12 > .pin1", ".D13 > .pin1", ".R69 > .pin2", ".R70 > .pin2", ".R71 > .pin2", ".U21 > .pin40", ".U21 > .pin48", ".U21 > .pin61", ".U21 > .pin76", ".U21 > .pin89", ".U21 > .pin474", ".U21 > .pin476", ".U21 > .pin477", ".U21 > .pin478", ".U21 > .pin479", ".U21 > .pin480", ".U21 > .pin481", ".U21 > .pin483", ".U21 > .pin521", ".U21 > .pin570", ".U21 > .pin598", ".U21 > .pin626", ".U21 > .pin667", ".U21 > .pin695", ".U21 > .pin722", ".R10 > .pin2", ".R7 > .pin2", ".R6 > .pin2", ".R5 > .pin2", ".U1 > .pin16", ".U1 > .pin34", ".U1 > .pin40", ".C20 > .pin2", ".C26 > .pin2", ".R4 > .pin2", ".R3 > .pin2", ".R2 > .pin2", ".R1 > .pin2", ".R48 > .pin1", ".U9 > .pin6", ".U9 > .pin16", ".U9 > .pin25", ".U9 > .pin30", ".U9 > .pin31", ".C41 > .pin2", ".R17 > .pin1", ".R18 > .pin2", ".R19 > .pin1", ".C40 > .pin2", ".C42 > .pin2", ".J2 > .pin2", ".J2 > .pin4", ".J2 > .pin12", ".J2 > .pin14", ".J2 > .pin16", ".J2 > .pin18", ".J2 > .pin70", ".J2 > .pin72", ".J2 > .pin74", ".U4 > .pin8", ".U5 > .pin8", ".J1 > .pin14", ".J1 > .pin16", ".U3 > .pin8", ".U2 > .pin8", ".R126 > .pin2", ".R127 > .pin2", ".R129 > .pin1", ".C39 > .pin2", ".C241 > .pin2", ".R141 > .pin1", ".J7 > .pin1", ".C56 > .pin2", ".U8 > .pin6", ".U8 > .pin16", ".U8 > .pin25", ".U8 > .pin30", ".U8 > .pin31", ".Y4 > .pin1", ".Y4 > .pin4", ".U6 > .pin23", ".U6 > .pin24", ".U6 > .pin25", ".U6 > .pin26", ".U6 > .pin27", ".U6 > .pin28", ".U6 > .pin29", ".U6 > .pin30", ".U6 > .pin40", ".U6 > .pin45", ".U6 > .pin63", ".U6 > .pin65", ".U6 > .pin68", ".U6 > .pin70", ".U6 > .pin88", ".U6 > .pin93", ".R9 > .pin1", ".Y2 > .pin1", ".Y2 > .pin4", ".Y3 > .pin1", ".Y3 > .pin4", ".R130 > .pin1", ".Y5 > .pin1", ".Y5 > .pin4", ".U14 > .pin16", ".U14 > .pin36", ".U14 > .pin44", ".U14 > .pin50", ".J4 > .pin6", ".J4 > .pin12", ".J9 > .pin2", ".J3 > .pin1", ".J3 > .pin3", ".Y1 > .pin1", ".Y1 > .pin4", ".R11 > .pin2", ".C49 > .pin2", ".R68 > .pin1", ".R66 > .pin1", ".R64 > .pin1", ".R63 > .pin1", ".R61 > .pin1", ".C50 > .pin2", ".C48 > .pin2", ".C51 > .pin2", ".C52 > .pin2", ".C64 > .pin1", ".C67 > .pin1", ".C72 > .pin2", ".C203 > .pin1", ".C204 > .pin1", ".C206 > .pin1", ".C207 > .pin1", ".C209 > .pin1", ".C210 > .pin1", ".C211 > .pin1", ".C212 > .pin1", ".C213 > .pin1", ".C214 > .pin1", ".C215 > .pin1", ".C218 > .pin1", ".C220 > .pin1", ".C225 > .pin1", ".C226 > .pin1", ".C228 > .pin1", ".C229 > .pin1", ".C235 > .pin1", ".C236 > .pin1", ".C237 > .pin1", ".C238 > .pin1", ".C239 > .pin1", ".C17 > .pin2", ".C14 > .pin2", ".C8 > .pin2", ".C6 > .pin2", ".FB1 > .pin1", ".C69 > .pin1", ".C43 > .pin2", ".C44 > .pin2", ".C45 > .pin2", ".R21 > .pin1", ".R23 > .pin1", ".R25 > .pin1", ".R27 > .pin1", ".R29 > .pin2", ".R31 > .pin2", ".R33 > .pin2", ".R35 > .pin2", ".R37 > .pin2", ".R39 > .pin2", ".R41 > .pin2", ".R43 > .pin2", ".C46 > .pin2", ".R24 > .pin1", ".R28 > .pin1", ".R32 > .pin2", ".R36 > .pin2", ".R40 > .pin2", ".R44 > .pin2", ".R22 > .pin1", ".R26 > .pin1", ".R30 > .pin2", ".R34 > .pin2", ".R38 > .pin2", ".R42 > .pin2", ".R131 > .pin2", ".R49 > .pin1", ".R50 > .pin1", ".R51 > .pin1", ".R52 > .pin1", ".R53 > .pin1", ".R54 > .pin1", ".R55 > .pin1", ".R56 > .pin1", ".C242 > .pin2", ".C243 > .pin2", ".C244 > .pin2", ".C245 > .pin2", ".C246 > .pin2", ".C247 > .pin2", ".R67 > .pin1", ".R62 > .pin1", ".C205 > .pin1", ".R12 > .pin2", ".C60 > .pin1", ".C63 > .pin1", ".C61 > .pin1", ".C65 > .pin1", ".C68 > .pin2", ".C62 > .pin1", ".R65 > .pin1", ".R102 > .pin1", ".R59 > .pin1", ".FB9 > .pin1", ".R148 > .pin1", ".FB10 > .pin1", ".C254 > .pin2", ".C253 > .pin2", ".C258 > .pin2", ".C251 > .pin2", ".C256 > .pin2", ".R60 > .pin1", ".C11 > .pin2"]}/>
    {/* KiCad net: Net-(C108-Pad1) */}
    <KiCadNet name={"Net__C108_Pad1_"} connectsTo={[".R99 > .pin1", ".C108 > .pin1"]}/>
    {/* KiCad net: Net-(U13-FB) */}
    <KiCadNet name={"Net__U13_FB_"} connectsTo={[".R99 > .pin2", ".R98 > .pin2", ".C107 > .pin2", ".R100 > .pin1", ".R93 > .pin2", ".U13 > .pin19"]}/>
    {/* KiCad net: Net-(C108-Pad2) */}
    <KiCadNet name={"Net__C108_Pad2_"} connectsTo={[".R98 > .pin1", ".C109 > .pin2", ".C108 > .pin2", ".L1 > .pin2", ".TP7 > .pin1", ".R140 > .pin2"]}/>
    {/* KiCad net: Net-(U13-FADJ) */}
    <KiCadNet name={"Net__U13_FADJ_"} connectsTo={[".R89 > .pin1", ".U13 > .pin1"]}/>
    {/* KiCad net: Net-(U13-COMP) */}
    <KiCadNet name={"Net__U13_COMP_"} connectsTo={[".C107 > .pin1", ".C106 > .pin1", ".U13 > .pin18"]}/>
    {/* KiCad net: Net-(C106-Pad2) */}
    <KiCadNet name={"Net__C106_Pad2_"} connectsTo={[".C106 > .pin2", ".R93 > .pin1"]}/>
    {/* KiCad net: Net-(L1-Pad1) */}
    <KiCadNet name={"Net__L1_Pad1_"} connectsTo={[".L1 > .pin1", ".U13 > .pin11", ".U13 > .pin12", ".U13 > .pin13", ".U13 > .pin14", ".U13 > .pin15", ".U13 > .pin16"]}/>
    {/* KiCad net: Net-(D7-A) */}
    <KiCadNet name={"Net__D7_A_"} connectsTo={[".D7 > .pin2", ".R107 > .pin2"]}/>
    {/* KiCad net: Net-(D8-A) */}
    <KiCadNet name={"Net__D8_A_"} connectsTo={[".D8 > .pin2", ".R108 > .pin2"]}/>
    {/* KiCad net: Net-(D9-A) */}
    <KiCadNet name={"Net__D9_A_"} connectsTo={[".D9 > .pin2", ".R109 > .pin2"]}/>
    {/* KiCad net: Net-(D10-A) */}
    <KiCadNet name={"Net__D10_A_"} connectsTo={[".D10 > .pin2", ".R110 > .pin2"]}/>
    {/* KiCad net: Net-(D11-A) */}
    <KiCadNet name={"Net__D11_A_"} connectsTo={[".D11 > .pin2", ".R111 > .pin2"]}/>
    {/* KiCad net: Net-(D12-A) */}
    <KiCadNet name={"Net__D12_A_"} connectsTo={[".D12 > .pin2", ".R112 > .pin2"]}/>
    {/* KiCad net: VCC5V0 */}
    <KiCadNet name={"VCC5V0"} connectsTo={[".R94 > .pin1", ".R101 > .pin1", ".U12 > .pin1", ".R85 > .pin1", ".U18 > .pin7", ".U19 > .pin7", ".U20 > .pin7", ".U17 > .pin7", ".C113 > .pin2", ".C115 > .pin2", ".C116 > .pin2", ".C117 > .pin2", ".C114 > .pin1", ".R88 > .pin1", ".C96 > .pin2", ".C97 > .pin2", ".R86 > .pin1", ".R87 > .pin1", ".R8 > .pin1", ".U16 > .pin7", ".U13 > .pin5", ".U13 > .pin6", ".U13 > .pin7", ".R104 > .pin1", ".R105 > .pin1", ".R106 > .pin1", ".R76 > .pin1", ".R74 > .pin1", ".R103 > .pin1"]}/>
    {/* KiCad net: /Power supply/1V2_PG */}
    <KiCadNet name={"_Power_supply_1V2_PG"} connectsTo={[".R101 > .pin2", ".U13 > .pin17", ".Q10 > .pin1"]}/>
    {/* KiCad net: Net-(D13-A) */}
    <KiCadNet name={"Net__D13_A_"} connectsTo={[".D13 > .pin2", ".R113 > .pin2"]}/>
    {/* KiCad net: Net-(U12-TADJ) */}
    <KiCadNet name={"Net__U12_TADJ_"} connectsTo={[".U12 > .pin5", ".C95 > .pin2"]}/>
    {/* KiCad net: Net-(U12-FLAG3) */}
    <KiCadNet name={"Net__U12_FLAG3_"} connectsTo={[".U12 > .pin6", ".R139 > .pin1", ".R87 > .pin2"]}/>
    {/* KiCad net: Net-(U12-FLAG2) */}
    <KiCadNet name={"Net__U12_FLAG2_"} connectsTo={[".U12 > .pin7", ".R138 > .pin1", ".R86 > .pin2"]}/>
    {/* KiCad net: Net-(U12-FLAG1) */}
    <KiCadNet name={"Net__U12_FLAG1_"} connectsTo={[".U12 > .pin8", ".R137 > .pin1", ".R85 > .pin2"]}/>
    {/* KiCad net: DDR3_DQ13 */}
    <KiCadNet name={"DDR3_DQ13"} connectsTo={[".U10 > .pin2", ".U21 > .pin69"]}/>
    {/* KiCad net: DDR3_DQ15 */}
    <KiCadNet name={"DDR3_DQ15"} connectsTo={[".U10 > .pin3", ".U21 > .pin97"]}/>
    {/* KiCad net: DDR3_DQ12 */}
    <KiCadNet name={"DDR3_DQ12"} connectsTo={[".U10 > .pin4", ".U21 > .pin44"]}/>
    {/* KiCad net: DDR3_DQS1- */}
    <KiCadNet name={"DDR3_DQS1_"} connectsTo={[".U10 > .pin10", ".U21 > .pin42"]}/>
    {/* KiCad net: DDR3_DQ14 */}
    <KiCadNet name={"DDR3_DQ14"} connectsTo={[".U10 > .pin11", ".U21 > .pin112"]}/>
    {/* KiCad net: DDR3_DQ11 */}
    <KiCadNet name={"DDR3_DQ11"} connectsTo={[".U10 > .pin14", ".U21 > .pin41"]}/>
    {/* KiCad net: DDR3_DQ9 */}
    <KiCadNet name={"DDR3_DQ9"} connectsTo={[".U10 > .pin15", ".U21 > .pin111"]}/>
    {/* KiCad net: DDR3_DQS1+ */}
    <KiCadNet name={"DDR3_DQS1__"} connectsTo={[".U10 > .pin16", ".U21 > .pin71"]}/>
    {/* KiCad net: DDR3_DQ10 */}
    <KiCadNet name={"DDR3_DQ10"} connectsTo={[".U10 > .pin17", ".U21 > .pin99"]}/>
    {/* KiCad net: DDR3_DM1 */}
    <KiCadNet name={"DDR3_DM1"} connectsTo={[".U10 > .pin21", ".U21 > .pin70"]}/>
    {/* KiCad net: DDR3_DQ8 */}
    <KiCadNet name={"DDR3_DQ8"} connectsTo={[".U10 > .pin22", ".U21 > .pin113"]}/>
    {/* KiCad net: DDR3_DQ0 */}
    <KiCadNet name={"DDR3_DQ0"} connectsTo={[".U10 > .pin27", ".U21 > .pin74"]}/>
    {/* KiCad net: DDR3_DM0 */}
    <KiCadNet name={"DDR3_DM0"} connectsTo={[".U10 > .pin28", ".U21 > .pin103"]}/>
    {/* KiCad net: DDR3_DQ2 */}
    <KiCadNet name={"DDR3_DQ2"} connectsTo={[".U10 > .pin32", ".U21 > .pin732"]}/>
    {/* KiCad net: DDR3_DQS0+ */}
    <KiCadNet name={"DDR3_DQS0_"} connectsTo={[".U10 > .pin33", ".U21 > .pin45"]}/>
    {/* KiCad net: DDR3_DQ1 */}
    <KiCadNet name={"DDR3_DQ1"} connectsTo={[".U10 > .pin34", ".U21 > .pin102"]}/>
    {/* KiCad net: DDR3_DQ3 */}
    <KiCadNet name={"DDR3_DQ3"} connectsTo={[".U10 > .pin35", ".U21 > .pin115"]}/>
    {/* KiCad net: DDR3_DQ6 */}
    <KiCadNet name={"DDR3_DQ6"} connectsTo={[".U10 > .pin38", ".U21 > .pin734"]}/>
    {/* KiCad net: DDR3_DQS0- */}
    <KiCadNet name={"DDR3_DQS0__"} connectsTo={[".U10 > .pin39", ".U21 > .pin46"]}/>
    {/* KiCad net: DDR3_DQ4 */}
    <KiCadNet name={"DDR3_DQ4"} connectsTo={[".U10 > .pin45", ".U21 > .pin47"]}/>
    {/* KiCad net: DDR3_DQ7 */}
    <KiCadNet name={"DDR3_DQ7"} connectsTo={[".U10 > .pin46", ".U21 > .pin735"]}/>
    {/* KiCad net: DDR3_DQ5 */}
    <KiCadNet name={"DDR3_DQ5"} connectsTo={[".U10 > .pin47", ".U21 > .pin733"]}/>
    {/* KiCad net: unconnected-(U10-NC{slash}ODT1-PadJ1) */}
    <KiCadNet name={"NC_U10_J1"} connectsTo={[".U10 > .pin49"]}/>
    {/* KiCad net: DDR3_RAS */}
    <KiCadNet name={"DDR3_RAS"} connectsTo={[".U10 > .pin51", ".U21 > .pin43", ".R136 > .pin4"]}/>
    {/* KiCad net: DDR3_CLK+ */}
    <KiCadNet name={"DDR3_CLK_"} connectsTo={[".U10 > .pin52", ".U21 > .pin567", ".R82 > .pin1"]}/>
    {/* KiCad net: unconnected-(U10-NC{slash}CKE1-PadJ9) */}
    <KiCadNet name={"NC_U10_J9"} connectsTo={[".U10 > .pin54"]}/>
    {/* KiCad net: DDR3_ODT */}
    <KiCadNet name={"DDR3_ODT"} connectsTo={[".U10 > .pin55", ".U21 > .pin100", ".R136 > .pin8"]}/>
    {/* KiCad net: DDR3_CAS */}
    <KiCadNet name={"DDR3_CAS"} connectsTo={[".U10 > .pin57", ".U21 > .pin704", ".R136 > .pin5"]}/>
    {/* KiCad net: DDR3_CLK- */}
    <KiCadNet name={"DDR3_CLK__"} connectsTo={[".U10 > .pin58", ".U21 > .pin566", ".R83 > .pin2"]}/>
    {/* KiCad net: DDR3_CKE */}
    <KiCadNet name={"DDR3_CKE"} connectsTo={[".U10 > .pin60", ".U21 > .pin729", ".R125 > .pin8"]}/>
    {/* KiCad net: unconnected-(U10-NC{slash}~{CS1}-PadL1) */}
    <KiCadNet name={"NC_U10_L1"} connectsTo={[".U10 > .pin61"]}/>
    {/* KiCad net: DDR3_CS */}
    <KiCadNet name={"DDR3_CS"} connectsTo={[".U10 > .pin62", ".U21 > .pin591", ".R136 > .pin6"]}/>
    {/* KiCad net: DDR3_WE */}
    <KiCadNet name={"DDR3_WE"} connectsTo={[".U10 > .pin63", ".U21 > .pin73", ".R136 > .pin3"]}/>
    {/* KiCad net: DDR3_A10 */}
    <KiCadNet name={"DDR3_A10"} connectsTo={[".U10 > .pin64", ".U21 > .pin650", ".R125 > .pin7"]}/>
    {/* KiCad net: Net-(U10-ZQ) */}
    <KiCadNet name={"Net__U10_ZQ_"} connectsTo={[".U10 > .pin65", ".R81 > .pin1"]}/>
    {/* KiCad net: unconnected-(U10-NC{slash}ZQ1-PadL9) */}
    <KiCadNet name={"NC_U10_L9"} connectsTo={[".U10 > .pin66"]}/>
    {/* KiCad net: DDR3_BA0 */}
    <KiCadNet name={"DDR3_BA0"} connectsTo={[".U10 > .pin68", ".U21 > .pin75", ".R136 > .pin7"]}/>
    {/* KiCad net: DDR3_BA2 */}
    <KiCadNet name={"DDR3_BA2"} connectsTo={[".U10 > .pin69", ".U21 > .pin707", ".R136 > .pin2"]}/>
    {/* KiCad net: unconnected-(U10-NC{slash}A15-PadM7) */}
    <KiCadNet name={"NC_U10_M7"} connectsTo={[".U10 > .pin70"]}/>
    {/* KiCad net: DDR3_A3 */}
    <KiCadNet name={"DDR3_A3"} connectsTo={[".U10 > .pin74", ".U21 > .pin116", ".R124 > .pin2"]}/>
    {/* KiCad net: DDR3_A0 */}
    <KiCadNet name={"DDR3_A0"} connectsTo={[".U10 > .pin75", ".U21 > .pin706", ".R136 > .pin1"]}/>
    {/* KiCad net: DDR3_A12 */}
    <KiCadNet name={"DDR3_A12"} connectsTo={[".U10 > .pin76", ".U21 > .pin623", ".R125 > .pin5"]}/>
    {/* KiCad net: DDR3_BA1 */}
    <KiCadNet name={"DDR3_BA1"} connectsTo={[".U10 > .pin77", ".U21 > .pin680", ".R125 > .pin6"]}/>
    {/* KiCad net: DDR3_A5 */}
    <KiCadNet name={"DDR3_A5"} connectsTo={[".U10 > .pin80", ".U21 > .pin114", ".R124 > .pin4"]}/>
    {/* KiCad net: DDR3_A2 */}
    <KiCadNet name={"DDR3_A2"} connectsTo={[".U10 > .pin81", ".U21 > .pin653", ".R124 > .pin3"]}/>
    {/* KiCad net: DDR3_A1 */}
    <KiCadNet name={"DDR3_A1"} connectsTo={[".U10 > .pin82", ".U21 > .pin681", ".R125 > .pin4"]}/>
    {/* KiCad net: DDR3_A4 */}
    <KiCadNet name={"DDR3_A4"} connectsTo={[".U10 > .pin83", ".U21 > .pin596", ".R125 > .pin3"]}/>
    {/* KiCad net: DDR3_A7 */}
    <KiCadNet name={"DDR3_A7"} connectsTo={[".U10 > .pin86", ".U21 > .pin651", ".R124 > .pin1"]}/>
    {/* KiCad net: DDR3_A9 */}
    <KiCadNet name={"DDR3_A9"} connectsTo={[".U10 > .pin87", ".U21 > .pin594", ".R124 > .pin5"]}/>
    {/* KiCad net: DDR3_A11 */}
    <KiCadNet name={"DDR3_A11"} connectsTo={[".U10 > .pin88", ".U21 > .pin624", ".R124 > .pin7"]}/>
    {/* KiCad net: DDR3_A6 */}
    <KiCadNet name={"DDR3_A6"} connectsTo={[".U10 > .pin89", ".U21 > .pin652", ".R125 > .pin2"]}/>
    {/* KiCad net: DDR3_RESET */}
    <KiCadNet name={"DDR3_RESET"} connectsTo={[".U10 > .pin92", ".U21 > .pin620"]}/>
    {/* KiCad net: DDR3_A13 */}
    <KiCadNet name={"DDR3_A13"} connectsTo={[".U10 > .pin93", ".U21 > .pin622", ".R124 > .pin6"]}/>
    {/* KiCad net: DDR3_A14 */}
    <KiCadNet name={"DDR3_A14"} connectsTo={[".U10 > .pin94", ".U21 > .pin625", ".R124 > .pin8"]}/>
    {/* KiCad net: DDR3_A8 */}
    <KiCadNet name={"DDR3_A8"} connectsTo={[".U10 > .pin95", ".U21 > .pin597", ".R125 > .pin1"]}/>
    {/* KiCad net: VCC1V0 */}
    <KiCadNet name={"VCC1V0"} connectsTo={[".U7 > .pin2", ".C248 > .pin2", ".R144 > .pin1"]}/>
    {/* KiCad net: I3C[0]_SCL_1V0 */}
    <KiCadNet name={"I3C_0__SCL_1V0"} connectsTo={[".U7 > .pin3", ".J5 > .pin145"]}/>
    {/* KiCad net: I3C[0]_SDA_1V0 */}
    <KiCadNet name={"I3C_0__SDA_1V0"} connectsTo={[".U7 > .pin4", ".J5 > .pin146"]}/>
    {/* KiCad net: I3C[1]_SCL_1V0 */}
    <KiCadNet name={"I3C_1__SCL_1V0"} connectsTo={[".U7 > .pin5", ".J5 > .pin147"]}/>
    {/* KiCad net: I3C[1]_SDA_1V0 */}
    <KiCadNet name={"I3C_1__SDA_1V0"} connectsTo={[".U7 > .pin6", ".J5 > .pin148"]}/>
    {/* KiCad net: I3C[2]_SCL_1V0 */}
    <KiCadNet name={"I3C_2__SCL_1V0"} connectsTo={[".U7 > .pin7", ".J5 > .pin149"]}/>
    {/* KiCad net: I3C[2]_SDA_1V0 */}
    <KiCadNet name={"I3C_2__SDA_1V0"} connectsTo={[".U7 > .pin8", ".J5 > .pin150"]}/>
    {/* KiCad net: I3C[3]_SCL_1V0 */}
    <KiCadNet name={"I3C_3__SCL_1V0"} connectsTo={[".U7 > .pin9", ".J5 > .pin151"]}/>
    {/* KiCad net: I3C[3]_SDA_1V0 */}
    <KiCadNet name={"I3C_3__SDA_1V0"} connectsTo={[".U7 > .pin10", ".J5 > .pin152"]}/>
    {/* KiCad net: I3C[3]_SDA_3V3 */}
    <KiCadNet name={"I3C_3__SDA_3V3"} connectsTo={[".U7 > .pin11", ".U21 > .pin334", ".R55 > .pin2"]}/>
    {/* KiCad net: I3C[3]_SCL_3V3 */}
    <KiCadNet name={"I3C_3__SCL_3V3"} connectsTo={[".U7 > .pin12", ".U21 > .pin362", ".R56 > .pin2"]}/>
    {/* KiCad net: I3C[2]_SDA_3V3 */}
    <KiCadNet name={"I3C_2__SDA_3V3"} connectsTo={[".U7 > .pin13", ".U21 > .pin416", ".R53 > .pin2"]}/>
    {/* KiCad net: I3C[2]_SCL_3V3 */}
    <KiCadNet name={"I3C_2__SCL_3V3"} connectsTo={[".U7 > .pin14", ".U21 > .pin389", ".R54 > .pin2"]}/>
    {/* KiCad net: I3C[1]_SDA_3V3 */}
    <KiCadNet name={"I3C_1__SDA_3V3"} connectsTo={[".U7 > .pin15", ".U21 > .pin361", ".R51 > .pin2"]}/>
    {/* KiCad net: I3C[1]_SCL_3V3 */}
    <KiCadNet name={"I3C_1__SCL_3V3"} connectsTo={[".U7 > .pin16", ".U21 > .pin417", ".R52 > .pin2"]}/>
    {/* KiCad net: I3C[0]_SDA_3V3 */}
    <KiCadNet name={"I3C_0__SDA_3V3"} connectsTo={[".U7 > .pin17", ".U21 > .pin333", ".R49 > .pin2"]}/>
    {/* KiCad net: I3C[0]_SCL_3V3 */}
    <KiCadNet name={"I3C_0__SCL_3V3"} connectsTo={[".U7 > .pin18", ".U21 > .pin17", ".R50 > .pin2"]}/>
    {/* KiCad net: Net-(U7-EN) */}
    <KiCadNet name={"Net__U7_EN_"} connectsTo={[".U7 > .pin19", ".U7 > .pin20", ".C55 > .pin2", ".R57 > .pin2"]}/>
    {/* KiCad net: unconnected-(U7-EP-Pad21) */}
    <KiCadNet name={"NC_U7_21"} connectsTo={[".U7 > .pin21"]}/>
    {/* KiCad net: 1V0_PG */}
    <KiCadNet name={"_1V0_PG"} connectsTo={[".R57 > .pin1", ".U20 > .pin8", ".Q11 > .pin1", ".R102 > .pin2"]}/>
    {/* KiCad net: Net-(D3-C) */}
    <KiCadNet name={"Net__D3_C_"} connectsTo={[".D3 > .pin1", ".Q1 > .pin3"]}/>
    {/* KiCad net: Net-(D3-A) */}
    <KiCadNet name={"Net__D3_A_"} connectsTo={[".D3 > .pin2", ".R69 > .pin1"]}/>
    {/* KiCad net: Net-(D4-C) */}
    <KiCadNet name={"Net__D4_C_"} connectsTo={[".D4 > .pin1", ".Q2 > .pin3"]}/>
    {/* KiCad net: Net-(D4-A) */}
    <KiCadNet name={"Net__D4_A_"} connectsTo={[".D4 > .pin2", ".R70 > .pin1"]}/>
    {/* KiCad net: Net-(D5-C) */}
    <KiCadNet name={"Net__D5_C_"} connectsTo={[".D5 > .pin1", ".Q3 > .pin3"]}/>
    {/* KiCad net: Net-(D5-A) */}
    <KiCadNet name={"Net__D5_A_"} connectsTo={[".D5 > .pin2", ".R71 > .pin1"]}/>
    {/* KiCad net: USR_LED0 */}
    <KiCadNet name={"USR_LED0"} connectsTo={[".Q1 > .pin1", ".U21 > .pin305"]}/>
    {/* KiCad net: USR_LED1 */}
    <KiCadNet name={"USR_LED1"} connectsTo={[".Q2 > .pin1", ".U21 > .pin335"]}/>
    {/* KiCad net: USR_LED2 */}
    <KiCadNet name={"USR_LED2"} connectsTo={[".Q3 > .pin1", ".U21 > .pin18"]}/>
    {/* KiCad net: PIRQ# */}
    <KiCadNet name={"PIRQ_"} connectsTo={[".U21 > .pin1", ".J4 > .pin7"]}/>
    {/* KiCad net: RST */}
    <KiCadNet name={"RST"} connectsTo={[".U21 > .pin2", ".J4 > .pin8"]}/>
    {/* KiCad net: GPIO */}
    <KiCadNet name={"GPIO"} connectsTo={[".U21 > .pin3", ".J4 > .pin9"]}/>
    {/* KiCad net: PP */}
    <KiCadNet name={"PP"} connectsTo={[".U21 > .pin4", ".J4 > .pin10"]}/>
    {/* KiCad net: unconnected-(U21B-PT13B-PadA7) */}
    <KiCadNet name={"NC_U21_A7"} connectsTo={[".U21 > .pin5"]}/>
    {/* KiCad net: RGMII_TXD1 */}
    <KiCadNet name={"RGMII_TXD1"} connectsTo={[".U21 > .pin6", ".U1 > .pin20"]}/>
    {/* KiCad net: unconnected-(U21B-PT24B-PadA9) */}
    <KiCadNet name={"NC_U21_A9"} connectsTo={[".U21 > .pin7"]}/>
    {/* KiCad net: unconnected-(U21B-PT31B-PadA10) */}
    <KiCadNet name={"NC_U21_A10"} connectsTo={[".U21 > .pin8"]}/>
    {/* KiCad net: unconnected-(U21B-PT38B-PadA11) */}
    <KiCadNet name={"NC_U21_A11"} connectsTo={[".U21 > .pin9"]}/>
    {/* KiCad net: unconnected-(U21B-PT42B-PadA13) */}
    <KiCadNet name={"NC_U21_A13"} connectsTo={[".U21 > .pin10"]}/>
    {/* KiCad net: RGMII_TXD0 */}
    <KiCadNet name={"RGMII_TXD0"} connectsTo={[".U21 > .pin11", ".U1 > .pin19"]}/>
    {/* KiCad net: unconnected-(U21B-PT54B-PadA15) */}
    <KiCadNet name={"NC_U21_A15"} connectsTo={[".U21 > .pin12"]}/>
    {/* KiCad net: RGMII_RXD0 */}
    <KiCadNet name={"RGMII_RXD0"} connectsTo={[".U21 > .pin13", ".U1 > .pin32", ".R1 > .pin1"]}/>
    {/* KiCad net: RGMII_RX_CLK */}
    <KiCadNet name={"RGMII_RX_CLK"} connectsTo={[".U21 > .pin14", ".R6 > .pin1", ".U1 > .pin35"]}/>
    {/* KiCad net: unconnected-(U21C-PT71A-PadA18) */}
    <KiCadNet name={"NC_U21_A18"} connectsTo={[".U21 > .pin15"]}/>
    {/* KiCad net: ETH_INT_N */}
    <KiCadNet name={"ETH_INT_N"} connectsTo={[".U21 > .pin16", ".R10 > .pin1", ".U1 > .pin38"]}/>
    {/* KiCad net: I2C[12]_SDA */}
    <KiCadNet name={"I2C_12__SDA"} connectsTo={[".U21 > .pin19", ".J5 > .pin41"]}/>
    {/* KiCad net: I2C[12]_SCL */}
    <KiCadNet name={"I2C_12__SCL"} connectsTo={[".U21 > .pin20", ".J5 > .pin40"]}/>
    {/* KiCad net: I2C[11]_SDA */}
    <KiCadNet name={"I2C_11__SDA"} connectsTo={[".U21 > .pin21", ".J5 > .pin39"]}/>
    {/* KiCad net: I2C[11]_SCL */}
    <KiCadNet name={"I2C_11__SCL"} connectsTo={[".U21 > .pin22", ".J5 > .pin38"]}/>
    {/* KiCad net: I2C[7]_SCL */}
    <KiCadNet name={"I2C_7__SCL"} connectsTo={[".U21 > .pin23", ".J5 > .pin25"]}/>
    {/* KiCad net: I2C[6]_SDA */}
    <KiCadNet name={"I2C_6__SDA"} connectsTo={[".U21 > .pin24", ".J5 > .pin24"]}/>
    {/* KiCad net: I2C[6]_SCL */}
    <KiCadNet name={"I2C_6__SCL"} connectsTo={[".U21 > .pin25", ".J5 > .pin23"]}/>
    {/* KiCad net: I2C[5]_SCL */}
    <KiCadNet name={"I2C_5__SCL"} connectsTo={[".U21 > .pin26", ".J5 > .pin11"]}/>
    {/* KiCad net: VCC1V2 */}
    <KiCadNet name={"VCC1V2"} connectsTo={[".U21 > .pin29", ".U21 > .pin30", ".U21 > .pin31", ".U21 > .pin32", ".U21 > .pin33", ".U21 > .pin34", ".U21 > .pin35", ".U21 > .pin36", ".U21 > .pin37", ".U21 > .pin38", ".U21 > .pin523", ".U21 > .pin524", ".U21 > .pin525", ".U21 > .pin526", ".U21 > .pin527", ".U21 > .pin528", ".U21 > .pin529", ".U21 > .pin530", ".U21 > .pin531", ".U21 > .pin532", ".U21 > .pin544", ".U21 > .pin553", ".U21 > .pin572", ".U21 > .pin581", ".U21 > .pin600", ".U21 > .pin609", ".U21 > .pin628", ".U21 > .pin637", ".U21 > .pin656", ".U21 > .pin665", ".U21 > .pin684", ".U21 > .pin693", ".U21 > .pin711", ".U21 > .pin720", ".U21 > .pin738", ".U21 > .pin747", ".U1 > .pin14", ".U1 > .pin18", ".U1 > .pin23", ".U1 > .pin26", ".U1 > .pin30", ".U1 > .pin39", ".R140 > .pin1", ".C154 > .pin1", ".C156 > .pin1", ".C159 > .pin1", ".C162 > .pin1", ".C165 > .pin1", ".C168 > .pin1", ".C171 > .pin1", ".C174 > .pin1", ".C177 > .pin1", ".C181 > .pin1", ".C183 > .pin1", ".C185 > .pin1", ".C187 > .pin1", ".C188 > .pin1", ".C189 > .pin1", ".C190 > .pin1", ".C191 > .pin1", ".C192 > .pin1", ".C193 > .pin1", ".FB4 > .pin1", ".FB5 > .pin1", ".FB6 > .pin1", ".FB7 > .pin2", ".C194 > .pin1", ".C195 > .pin1", ".C15 > .pin2", ".C12 > .pin2", ".C7 > .pin2", ".C3 > .pin2", ".C2 > .pin2", ".FB2 > .pin2", ".C1 > .pin2", ".FB3 > .pin2", ".C9 > .pin2", ".C5 > .pin2", ".C4 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21E-PR74C-PadAB26) */}
    <KiCadNet name={"NC_U21_AB26"} connectsTo={[".U21 > .pin62"]}/>
    {/* KiCad net: HPM_FW_RECOVERY */}
    <KiCadNet name={"HPM_FW_RECOVERY"} connectsTo={[".U21 > .pin63", ".J5 > .pin43"]}/>
    {/* KiCad net: HPM_STBY_RDY */}
    <KiCadNet name={"HPM_STBY_RDY"} connectsTo={[".U21 > .pin64", ".J5 > .pin44"]}/>
    {/* KiCad net: HPM_STBY_EN */}
    <KiCadNet name={"HPM_STBY_EN"} connectsTo={[".U21 > .pin65", ".J5 > .pin45"]}/>
    {/* KiCad net: ULPI2_D7 */}
    <KiCadNet name={"ULPI2_D7"} connectsTo={[".U21 > .pin66", ".U8 > .pin17"]}/>
    {/* KiCad net: ULPI2_D5 */}
    <KiCadNet name={"ULPI2_D5"} connectsTo={[".U21 > .pin67", ".U8 > .pin19"]}/>
    {/* KiCad net: ULPI2_D6 */}
    <KiCadNet name={"ULPI2_D6"} connectsTo={[".U21 > .pin68", ".U8 > .pin18"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAC4) */}
    <KiCadNet name={"NC_U21_AC4"} connectsTo={[".U21 > .pin72"]}/>
    {/* KiCad net: /FPGA power supply/VCCAUX */}
    <KiCadNet name={"_FPGA_power_supply_VCCAUX"} connectsTo={[".U21 > .pin77", ".U21 > .pin88", ".U21 > .pin196", ".U21 > .pin197", ".U21 > .pin205", ".U21 > .pin206", ".U21 > .pin475", ".U21 > .pin482", ".U21 > .pin542", ".U21 > .pin555", ".U21 > .pin736", ".U21 > .pin749", ".C155 > .pin2", ".C158 > .pin2", ".C161 > .pin2", ".C164 > .pin2", ".C167 > .pin2", ".C170 > .pin2", ".C173 > .pin2", ".C176 > .pin2", ".C179 > .pin2", ".C182 > .pin2", ".C184 > .pin2", ".C186 > .pin2", ".FB8 > .pin1"]}/>
    {/* KiCad net: /FPGA power supply/VCCHTX0 */}
    <KiCadNet name={"_FPGA_power_supply_VCCHTX0"} connectsTo={[".U21 > .pin79", ".U21 > .pin83", ".FB5 > .pin2", ".C139 > .pin2", ".C144 > .pin2", ".C149 > .pin2"]}/>
    {/* KiCad net: /FPGA power supply/VCCA0 */}
    <KiCadNet name={"_FPGA_power_supply_VCCA0"} connectsTo={[".U21 > .pin80", ".U21 > .pin84", ".U21 > .pin140", ".U21 > .pin142", ".U21 > .pin164", ".U21 > .pin166", ".U21 > .pin190", ".U21 > .pin191", ".U21 > .pin193", ".U21 > .pin194", ".C133 > .pin2", ".C134 > .pin2", ".C136 > .pin2", ".C137 > .pin2", ".C138 > .pin2", ".C143 > .pin2", ".C145 > .pin2", ".C148 > .pin2", ".C150 > .pin2", ".FB4 > .pin2", ".C140 > .pin2", ".C153 > .pin2", ".C135 > .pin2"]}/>
    {/* KiCad net: /FPGA power supply/VCCA1 */}
    <KiCadNet name={"_FPGA_power_supply_VCCA1"} connectsTo={[".U21 > .pin81", ".U21 > .pin85", ".U21 > .pin133", ".U21 > .pin147", ".U21 > .pin149", ".U21 > .pin171", ".U21 > .pin173", ".U21 > .pin199", ".U21 > .pin200", ".U21 > .pin202", ".U21 > .pin203", ".C147 > .pin2", ".C152 > .pin2", ".C157 > .pin2", ".C160 > .pin2", ".C163 > .pin2", ".C166 > .pin2", ".C169 > .pin2", ".C172 > .pin2", ".C175 > .pin2", ".C178 > .pin2", ".FB7 > .pin1", ".C142 > .pin2", ".C180 > .pin2"]}/>
    {/* KiCad net: /FPGA power supply/VCCHTX1 */}
    <KiCadNet name={"_FPGA_power_supply_VCCHTX1"} connectsTo={[".U21 > .pin82", ".U21 > .pin86", ".FB6 > .pin2", ".C141 > .pin2", ".C146 > .pin2", ".C151 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21E-PR77C-PadAC26) */}
    <KiCadNet name={"NC_U21_AC26"} connectsTo={[".U21 > .pin90"]}/>
    {/* KiCad net: unconnected-(U21E-PR74D-PadAC27) */}
    <KiCadNet name={"NC_U21_AC27"} connectsTo={[".U21 > .pin91"]}/>
    {/* KiCad net: unconnected-(U21E-PR83C-PadAC28) */}
    <KiCadNet name={"NC_U21_AC28"} connectsTo={[".U21 > .pin92"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAC29) */}
    <KiCadNet name={"NC_U21_AC29"} connectsTo={[".U21 > .pin93"]}/>
    {/* KiCad net: unconnected-(U21E-PR89A-PadAC30) */}
    <KiCadNet name={"NC_U21_AC30"} connectsTo={[".U21 > .pin94"]}/>
    {/* KiCad net: ULPI2_D3 */}
    <KiCadNet name={"ULPI2_D3"} connectsTo={[".U21 > .pin95", ".U8 > .pin21"]}/>
    {/* KiCad net: ULPI2_D4 */}
    <KiCadNet name={"ULPI2_D4"} connectsTo={[".U21 > .pin96", ".U8 > .pin20"]}/>
    {/* KiCad net: unconnected-(U21E-PR77D-PadAD26) */}
    <KiCadNet name={"NC_U21_AD26"} connectsTo={[".U21 > .pin104"]}/>
    {/* KiCad net: unconnected-(U21E-PR80A-PadAD27) */}
    <KiCadNet name={"NC_U21_AD27"} connectsTo={[".U21 > .pin105"]}/>
    {/* KiCad net: unconnected-(U21E-PR83D-PadAD29) */}
    <KiCadNet name={"NC_U21_AD29"} connectsTo={[".U21 > .pin107"]}/>
    {/* KiCad net: unconnected-(U21E-PR86C-PadAD30) */}
    <KiCadNet name={"NC_U21_AD30"} connectsTo={[".U21 > .pin108"]}/>
    {/* KiCad net: ULPI2_D2 */}
    <KiCadNet name={"ULPI2_D2"} connectsTo={[".U21 > .pin110", ".U8 > .pin22"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAE7) */}
    <KiCadNet name={"NC_U21_AE7"} connectsTo={[".U21 > .pin117"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAE26) */}
    <KiCadNet name={"NC_U21_AE26"} connectsTo={[".U21 > .pin118"]}/>
    {/* KiCad net: unconnected-(U21E-PR80B-PadAE27) */}
    <KiCadNet name={"NC_U21_AE27"} connectsTo={[".U21 > .pin119"]}/>
    {/* KiCad net: unconnected-(U21E-PR80C-PadAE28) */}
    <KiCadNet name={"NC_U21_AE28"} connectsTo={[".U21 > .pin120"]}/>
    {/* KiCad net: unconnected-(U21E-PR80D-PadAE29) */}
    <KiCadNet name={"NC_U21_AE29"} connectsTo={[".U21 > .pin121"]}/>
    {/* KiCad net: unconnected-(U21E-PR86D-PadAE30) */}
    <KiCadNet name={"NC_U21_AE30"} connectsTo={[".U21 > .pin122"]}/>
    {/* KiCad net: ULPI2_D1 */}
    <KiCadNet name={"ULPI2_D1"} connectsTo={[".U21 > .pin123", ".U8 > .pin23"]}/>
    {/* KiCad net: ULPI2_D0 */}
    <KiCadNet name={"ULPI2_D0"} connectsTo={[".U21 > .pin124", ".U8 > .pin24"]}/>
    {/* KiCad net: Net-(U21I-PB4A) */}
    <KiCadNet name={"Net__U21I_PB4A_"} connectsTo={[".U21 > .pin135", ".R132 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAG2) */}
    <KiCadNet name={"NC_U21_AG2"} connectsTo={[".U21 > .pin136"]}/>
    {/* KiCad net: ROT_QSPI_CS_N */}
    <KiCadNet name={"ROT_QSPI_CS_N"} connectsTo={[".U21 > .pin137", ".J3 > .pin43"]}/>
    {/* KiCad net: INIT_N */}
    <KiCadNet name={"INIT_N"} connectsTo={[".U21 > .pin138", ".R127 > .pin1", ".D14 > .pin1", ".J3 > .pin42"]}/>
    {/* KiCad net: JTAG_TDO */}
    <KiCadNet name={"JTAG_TDO"} connectsTo={[".U21 > .pin139", ".J5 > .pin37", ".U14 > .pin14", ".J9 > .pin8", ".D2 > .pin2", ".D2 > .pin13"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAG24) */}
    <KiCadNet name={"NC_U21_AG24"} connectsTo={[".U21 > .pin151"]}/>
    {/* KiCad net: QSPI1_D0 */}
    <KiCadNet name={"QSPI1_D0"} connectsTo={[".U21 > .pin152", ".J5 > .pin115"]}/>
    {/* KiCad net: QSPI1_D1 */}
    <KiCadNet name={"QSPI1_D1"} connectsTo={[".U21 > .pin153", ".J5 > .pin116"]}/>
    {/* KiCad net: QSPI1_D2 */}
    <KiCadNet name={"QSPI1_D2"} connectsTo={[".U21 > .pin154", ".J5 > .pin117"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadAG31) */}
    <KiCadNet name={"NC_U21_AG31"} connectsTo={[".U21 > .pin155"]}/>
    {/* KiCad net: QSPI1_D3 */}
    <KiCadNet name={"QSPI1_D3"} connectsTo={[".U21 > .pin156", ".J5 > .pin118"]}/>
    {/* KiCad net: Net-(U21I-PB4B) */}
    <KiCadNet name={"Net__U21I_PB4B_"} connectsTo={[".U21 > .pin157", ".R133 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21I-PB13B-PadAH3) */}
    <KiCadNet name={"NC_U21_AH3"} connectsTo={[".U21 > .pin159"]}/>
    {/* KiCad net: PROGRAM_N */}
    <KiCadNet name={"PROGRAM_N"} connectsTo={[".U21 > .pin160", ".SW1 > .pin1", ".J3 > .pin40", ".C208 > .pin2", ".R131 > .pin1"]}/>
    {/* KiCad net: NCSI_TXD1 */}
    <KiCadNet name={"NCSI_TXD1"} connectsTo={[".U21 > .pin178", ".J5 > .pin92"]}/>
    {/* KiCad net: NCSI_RXER */}
    <KiCadNet name={"NCSI_RXER"} connectsTo={[".U21 > .pin180", ".J5 > .pin93"]}/>
    {/* KiCad net: SGPIO_INTR_N */}
    <KiCadNet name={"SGPIO_INTR_N"} connectsTo={[".U21 > .pin182", ".J5 > .pin110"]}/>
    {/* KiCad net: Net-(U21I-PB6A) */}
    <KiCadNet name={"Net__U21I_PB6A_"} connectsTo={[".U21 > .pin183", ".R135 > .pin2"]}/>
    {/* KiCad net: ROT_QSPI_DQ1 */}
    <KiCadNet name={"ROT_QSPI_DQ1"} connectsTo={[".U21 > .pin184", ".J3 > .pin36"]}/>
    {/* KiCad net: unconnected-(U21I-PB15A-PadAJ3) */}
    <KiCadNet name={"NC_U21_AJ3"} connectsTo={[".U21 > .pin185"]}/>
    {/* KiCad net: DONE */}
    <KiCadNet name={"DONE"} connectsTo={[".U21 > .pin186", ".R126 > .pin1", ".R128 > .pin2"]}/>
    {/* KiCad net: JTAG_TDI */}
    <KiCadNet name={"JTAG_TDI"} connectsTo={[".U21 > .pin187", ".J5 > .pin36", ".U14 > .pin13", ".J9 > .pin10", ".D2 > .pin1", ".D2 > .pin14"]}/>
    {/* KiCad net: NCSI_CLK */}
    <KiCadNet name={"NCSI_CLK"} connectsTo={[".U21 > .pin208", ".J5 > .pin88"]}/>
    {/* KiCad net: NCSI_RXD0 */}
    <KiCadNet name={"NCSI_RXD0"} connectsTo={[".U21 > .pin209", ".J5 > .pin94"]}/>
    {/* KiCad net: SGPIO1_DO */}
    <KiCadNet name={"SGPIO1_DO"} connectsTo={[".U21 > .pin210", ".J5 > .pin104"]}/>
    {/* KiCad net: QSPI1_CLK */}
    <KiCadNet name={"QSPI1_CLK"} connectsTo={[".U21 > .pin211", ".J5 > .pin113"]}/>
    {/* KiCad net: SGPIO_RESET_N */}
    <KiCadNet name={"SGPIO_RESET_N"} connectsTo={[".U21 > .pin212", ".J5 > .pin109"]}/>
    {/* KiCad net: Net-(U21I-PB6B) */}
    <KiCadNet name={"Net__U21I_PB6B_"} connectsTo={[".U21 > .pin213", ".R134 > .pin2"]}/>
    {/* KiCad net: ROT_QSPI_DQ0 */}
    <KiCadNet name={"ROT_QSPI_DQ0"} connectsTo={[".U21 > .pin214", ".J3 > .pin38"]}/>
    {/* KiCad net: VIRTUAL_RESEAT */}
    <KiCadNet name={"VIRTUAL_RESEAT"} connectsTo={[".U21 > .pin215", ".J5 > .pin154"]}/>
    {/* KiCad net: unconnected-(U21I-CFG_2-PadAK4) */}
    <KiCadNet name={"NC_U21_AK4"} connectsTo={[".U21 > .pin216"]}/>
    {/* KiCad net: JTAG_TCK */}
    <KiCadNet name={"JTAG_TCK"} connectsTo={[".U21 > .pin217", ".J5 > .pin34", ".U14 > .pin12", ".J9 > .pin6", ".D2 > .pin6", ".D2 > .pin9"]}/>
    {/* KiCad net: /FPGA banks/PCIE_BMC_TX_C_DP */}
    <KiCadNet name={"_FPGA_banks_PCIE_BMC_TX_C_DP"} connectsTo={[".U21 > .pin220", ".C58 > .pin2"]}/>
    {/* KiCad net: /FPGA banks/PCIE_BMC_TX_C_DN */}
    <KiCadNet name={"_FPGA_banks_PCIE_BMC_TX_C_DN"} connectsTo={[".U21 > .pin221", ".C57 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21K-HDTXP0_D0CH1-PadAK12) */}
    <KiCadNet name={"NC_U21_AK12"} connectsTo={[".U21 > .pin223"]}/>
    {/* KiCad net: unconnected-(U21K-HDTXN0_D0CH1-PadAK13) */}
    <KiCadNet name={"NC_U21_AK13"} connectsTo={[".U21 > .pin224"]}/>
    {/* KiCad net: unconnected-(U21A-RESERVED-PadAK15) */}
    <KiCadNet name={"NC_U21_AK15"} connectsTo={[".U21 > .pin226"]}/>
    {/* KiCad net: unconnected-(U21A-RESERVED-PadAK16) */}
    <KiCadNet name={"NC_U21_AK16"} connectsTo={[".U21 > .pin227"]}/>
    {/* KiCad net: unconnected-(U21L-HDTXP0_D1CH0-PadAK18) */}
    <KiCadNet name={"NC_U21_AK18"} connectsTo={[".U21 > .pin229"]}/>
    {/* KiCad net: unconnected-(U21L-HDTXN0_D1CH0-PadAK19) */}
    <KiCadNet name={"NC_U21_AK19"} connectsTo={[".U21 > .pin230"]}/>
    {/* KiCad net: unconnected-(U21L-HDTXP0_D1CH1-PadAK21) */}
    <KiCadNet name={"NC_U21_AK21"} connectsTo={[".U21 > .pin232"]}/>
    {/* KiCad net: unconnected-(U21L-HDTXN0_D1CH1-PadAK22) */}
    <KiCadNet name={"NC_U21_AK22"} connectsTo={[".U21 > .pin233"]}/>
    {/* KiCad net: unconnected-(U21A-RESERVED-PadAK24) */}
    <KiCadNet name={"NC_U21_AK24"} connectsTo={[".U21 > .pin235"]}/>
    {/* KiCad net: unconnected-(U21A-RESERVED-PadAK25) */}
    <KiCadNet name={"NC_U21_AK25"} connectsTo={[".U21 > .pin236"]}/>
    {/* KiCad net: NCSI_CRS_DV */}
    <KiCadNet name={"NCSI_CRS_DV"} connectsTo={[".U21 > .pin238", ".J5 > .pin89"]}/>
    {/* KiCad net: NCSI_RXD1 */}
    <KiCadNet name={"NCSI_RXD1"} connectsTo={[".U21 > .pin239", ".J5 > .pin95"]}/>
    {/* KiCad net: SGPIO0_CLK */}
    <KiCadNet name={"SGPIO0_CLK"} connectsTo={[".U21 > .pin240", ".J5 > .pin100", ".R47 > .pin2"]}/>
    {/* KiCad net: SGPIO1_DI */}
    <KiCadNet name={"SGPIO1_DI"} connectsTo={[".U21 > .pin241", ".J5 > .pin106"]}/>
    {/* KiCad net: QSPI1_CS0_N */}
    <KiCadNet name={"QSPI1_CS0_N"} connectsTo={[".U21 > .pin242", ".J5 > .pin114"]}/>
    {/* KiCad net: ROT_QSPI_DQ3 */}
    <KiCadNet name={"ROT_QSPI_DQ3"} connectsTo={[".U21 > .pin243", ".J3 > .pin32"]}/>
    {/* KiCad net: PRSNT0_N */}
    <KiCadNet name={"PRSNT0_N"} connectsTo={[".U21 > .pin245", ".R19 > .pin2", ".J2 > .pin50", ".TP3 > .pin1", ".J5 > .pin157"]}/>
    {/* KiCad net: unconnected-(U21I-CFG_1-PadAL4) */}
    <KiCadNet name={"NC_U21_AL4"} connectsTo={[".U21 > .pin246"]}/>
    {/* KiCad net: NCSI_TXEN */}
    <KiCadNet name={"NCSI_TXEN"} connectsTo={[".U21 > .pin262", ".J5 > .pin90"]}/>
    {/* KiCad net: SGPIO0_LD */}
    <KiCadNet name={"SGPIO0_LD"} connectsTo={[".U21 > .pin264", ".J5 > .pin102"]}/>
    {/* KiCad net: SGPIO1_LD */}
    <KiCadNet name={"SGPIO1_LD"} connectsTo={[".U21 > .pin266", ".J5 > .pin107"]}/>
    {/* KiCad net: ROT_QSPI_DQ2 */}
    <KiCadNet name={"ROT_QSPI_DQ2"} connectsTo={[".U21 > .pin267", ".J3 > .pin34"]}/>
    {/* KiCad net: ROT_QSPI_SCK */}
    <KiCadNet name={"ROT_QSPI_SCK"} connectsTo={[".U21 > .pin268", ".J3 > .pin30"]}/>
    {/* KiCad net: unconnected-(U21I-CFG_0-PadAM4) */}
    <KiCadNet name={"NC_U21_AM4"} connectsTo={[".U21 > .pin269"]}/>
    {/* KiCad net: JTAG_TMS */}
    <KiCadNet name={"JTAG_TMS"} connectsTo={[".U21 > .pin270", ".J5 > .pin35", ".U14 > .pin15", ".J9 > .pin4", ".D2 > .pin7", ".D2 > .pin8"]}/>
    {/* KiCad net: PCIE_BMC_RX_DP */}
    <KiCadNet name={"PCIE_BMC_RX_DP"} connectsTo={[".U21 > .pin272", ".J5 > .pin20"]}/>
    {/* KiCad net: PCIE_BMC_RX_DN */}
    <KiCadNet name={"PCIE_BMC_RX_DN"} connectsTo={[".U21 > .pin273", ".J5 > .pin21"]}/>
    {/* KiCad net: unconnected-(U21K-HDRXP0_D0CH1-PadAM11) */}
    <KiCadNet name={"NC_U21_AM11"} connectsTo={[".U21 > .pin274"]}/>
    {/* KiCad net: unconnected-(U21K-HDRXN0_D0CH1-PadAM12) */}
    <KiCadNet name={"NC_U21_AM12"} connectsTo={[".U21 > .pin275"]}/>
    {/* KiCad net: CLK_100M_PCIE_DP */}
    <KiCadNet name={"CLK_100M_PCIE_DP"} connectsTo={[".U21 > .pin276", ".J5 > .pin14"]}/>
    {/* KiCad net: CLK_100M_PCIE_DN */}
    <KiCadNet name={"CLK_100M_PCIE_DN"} connectsTo={[".U21 > .pin277", ".J5 > .pin15"]}/>
    {/* KiCad net: unconnected-(U21L-HDRXP0_D1CH0-PadAM17) */}
    <KiCadNet name={"NC_U21_AM17"} connectsTo={[".U21 > .pin278"]}/>
    {/* KiCad net: unconnected-(U21L-HDRXN0_D1CH0-PadAM18) */}
    <KiCadNet name={"NC_U21_AM18"} connectsTo={[".U21 > .pin279"]}/>
    {/* KiCad net: unconnected-(U21L-HDRXP0_D1CH1-PadAM20) */}
    <KiCadNet name={"NC_U21_AM20"} connectsTo={[".U21 > .pin280"]}/>
    {/* KiCad net: unconnected-(U21L-HDRXN0_D1CH1-PadAM21) */}
    <KiCadNet name={"NC_U21_AM21"} connectsTo={[".U21 > .pin281"]}/>
    {/* KiCad net: unconnected-(U21L-REFCLKP_D1-PadAM23) */}
    <KiCadNet name={"NC_U21_AM23"} connectsTo={[".U21 > .pin282"]}/>
    {/* KiCad net: unconnected-(U21L-REFCLKN_D1-PadAM24) */}
    <KiCadNet name={"NC_U21_AM24"} connectsTo={[".U21 > .pin283"]}/>
    {/* KiCad net: NCSI_TXD0 */}
    <KiCadNet name={"NCSI_TXD0"} connectsTo={[".U21 > .pin285", ".J5 > .pin91"]}/>
    {/* KiCad net: SGPIO0_DO */}
    <KiCadNet name={"SGPIO0_DO"} connectsTo={[".U21 > .pin286", ".J5 > .pin99"]}/>
    {/* KiCad net: SGPIO0_DI */}
    <KiCadNet name={"SGPIO0_DI"} connectsTo={[".U21 > .pin287", ".J5 > .pin101"]}/>
    {/* KiCad net: SGPIO1_CLK */}
    <KiCadNet name={"SGPIO1_CLK"} connectsTo={[".U21 > .pin288", ".J5 > .pin105", ".R47 > .pin1"]}/>
    {/* KiCad net: ROT_GPIO1 */}
    <KiCadNet name={"ROT_GPIO1"} connectsTo={[".U21 > .pin289", ".J3 > .pin5"]}/>
    {/* KiCad net: unconnected-(U21B-PT4A-PadB3) */}
    <KiCadNet name={"NC_U21_B3"} connectsTo={[".U21 > .pin291"]}/>
    {/* KiCad net: unconnected-(U21B-PT4B-PadB4) */}
    <KiCadNet name={"NC_U21_B4"} connectsTo={[".U21 > .pin292"]}/>
    {/* KiCad net: unconnected-(U21B-PT13A-PadB7) */}
    <KiCadNet name={"NC_U21_B7"} connectsTo={[".U21 > .pin294"]}/>
    {/* KiCad net: RGMII_TXD2 */}
    <KiCadNet name={"RGMII_TXD2"} connectsTo={[".U21 > .pin295", ".U1 > .pin21"]}/>
    {/* KiCad net: unconnected-(U21B-PT31A-PadB10) */}
    <KiCadNet name={"NC_U21_B10"} connectsTo={[".U21 > .pin297"]}/>
    {/* KiCad net: unconnected-(U21B-PT38A-PadB11) */}
    <KiCadNet name={"NC_U21_B11"} connectsTo={[".U21 > .pin298"]}/>
    {/* KiCad net: unconnected-(U21B-PT49A-PadB14) */}
    <KiCadNet name={"NC_U21_B14"} connectsTo={[".U21 > .pin300"]}/>
    {/* KiCad net: ETH_MDC */}
    <KiCadNet name={"ETH_MDC"} connectsTo={[".U21 > .pin302", ".U1 > .pin36"]}/>
    {/* KiCad net: RGMII_REF_CLK */}
    <KiCadNet name={"RGMII_REF_CLK"} connectsTo={[".U21 > .pin303", ".R7 > .pin1", ".U1 > .pin41"]}/>
    {/* KiCad net: I2C[10]_SDA */}
    <KiCadNet name={"I2C_10__SDA"} connectsTo={[".U21 > .pin307", ".J5 > .pin32"]}/>
    {/* KiCad net: I2C[10]_SCL */}
    <KiCadNet name={"I2C_10__SCL"} connectsTo={[".U21 > .pin308", ".J5 > .pin31"]}/>
    {/* KiCad net: I2C[8]_SCL */}
    <KiCadNet name={"I2C_8__SCL"} connectsTo={[".U21 > .pin310", ".J5 > .pin27"]}/>
    {/* KiCad net: I2C[8]_SDA */}
    <KiCadNet name={"I2C_8__SDA"} connectsTo={[".U21 > .pin311", ".J5 > .pin28"]}/>
    {/* KiCad net: I2C[4]_SDA */}
    <KiCadNet name={"I2C_4__SDA"} connectsTo={[".U21 > .pin313", ".J5 > .pin10"]}/>
    {/* KiCad net: I2C[5]_SDA */}
    <KiCadNet name={"I2C_5__SDA"} connectsTo={[".U21 > .pin314", ".J5 > .pin12"]}/>
    {/* KiCad net: unconnected-(U21D-PR17A-PadB32) */}
    <KiCadNet name={"NC_U21_B32"} connectsTo={[".U21 > .pin316"]}/>
    {/* KiCad net: ROT_RDY\ROT_GPIO0 */}
    <KiCadNet name={"ROT_RDY_ROT_GPIO0"} connectsTo={[".U21 > .pin317", ".J3 > .pin44"]}/>
    {/* KiCad net: ROT_GPIO2 */}
    <KiCadNet name={"ROT_GPIO2"} connectsTo={[".U21 > .pin318", ".J3 > .pin6"]}/>
    {/* KiCad net: unconnected-(U21H-PL11D-PadC3) */}
    <KiCadNet name={"NC_U21_C3"} connectsTo={[".U21 > .pin319"]}/>
    {/* KiCad net: unconnected-(U21H-PL11C-PadC4) */}
    <KiCadNet name={"NC_U21_C4"} connectsTo={[".U21 > .pin320"]}/>
    {/* KiCad net: unconnected-(U21H-PL11A-PadC5) */}
    <KiCadNet name={"NC_U21_C5"} connectsTo={[".U21 > .pin321"]}/>
    {/* KiCad net: unconnected-(U21B-PT11B-PadC7) */}
    <KiCadNet name={"NC_U21_C7"} connectsTo={[".U21 > .pin322"]}/>
    {/* KiCad net: RGMII_RXD3 */}
    <KiCadNet name={"RGMII_RXD3"} connectsTo={[".U21 > .pin323", ".U1 > .pin27", ".R4 > .pin1"]}/>
    {/* KiCad net: unconnected-(U21B-PT24A-PadC9) */}
    <KiCadNet name={"NC_U21_C9"} connectsTo={[".U21 > .pin324"]}/>
    {/* KiCad net: unconnected-(U21B-PT29B-PadC10) */}
    <KiCadNet name={"NC_U21_C10"} connectsTo={[".U21 > .pin325"]}/>
    {/* KiCad net: unconnected-(U21B-PT36B-PadC11) */}
    <KiCadNet name={"NC_U21_C11"} connectsTo={[".U21 > .pin326"]}/>
    {/* KiCad net: unconnected-(U21B-PT42A-PadC13) */}
    <KiCadNet name={"NC_U21_C13"} connectsTo={[".U21 > .pin327"]}/>
    {/* KiCad net: unconnected-(U21B-PT47B-PadC14) */}
    <KiCadNet name={"NC_U21_C14"} connectsTo={[".U21 > .pin328"]}/>
    {/* KiCad net: unconnected-(U21B-PT54A-PadC15) */}
    <KiCadNet name={"NC_U21_C15"} connectsTo={[".U21 > .pin329"]}/>
    {/* KiCad net: RGMII_RX_DV */}
    <KiCadNet name={"RGMII_RX_DV"} connectsTo={[".U21 > .pin330", ".R5 > .pin1", ".U1 > .pin33"]}/>
    {/* KiCad net: RGMII_TX_CLK */}
    <KiCadNet name={"RGMII_TX_CLK"} connectsTo={[".U21 > .pin331", ".U1 > .pin24"]}/>
    {/* KiCad net: unconnected-(U21C-PT71B-PadC18) */}
    <KiCadNet name={"NC_U21_C18"} connectsTo={[".U21 > .pin332"]}/>
    {/* KiCad net: I2C[9]_SCL */}
    <KiCadNet name={"I2C_9__SCL"} connectsTo={[".U21 > .pin336", ".J5 > .pin29"]}/>
    {/* KiCad net: I2C[9]_SDA */}
    <KiCadNet name={"I2C_9__SDA"} connectsTo={[".U21 > .pin337", ".J5 > .pin30"]}/>
    {/* KiCad net: I2C[7]_SDA */}
    <KiCadNet name={"I2C_7__SDA"} connectsTo={[".U21 > .pin338", ".J5 > .pin26"]}/>
    {/* KiCad net: I2C[4]_SCL */}
    <KiCadNet name={"I2C_4__SCL"} connectsTo={[".U21 > .pin339", ".J5 > .pin9"]}/>
    {/* KiCad net: unconnected-(U21D-PR11A-PadC28) */}
    <KiCadNet name={"NC_U21_C28"} connectsTo={[".U21 > .pin340"]}/>
    {/* KiCad net: unconnected-(U21D-PR11C-PadC29) */}
    <KiCadNet name={"NC_U21_C29"} connectsTo={[".U21 > .pin341"]}/>
    {/* KiCad net: unconnected-(U21D-PR17B-PadC31) */}
    <KiCadNet name={"NC_U21_C31"} connectsTo={[".U21 > .pin343"]}/>
    {/* KiCad net: unconnected-(U21D-PR20C-PadC32) */}
    <KiCadNet name={"NC_U21_C32"} connectsTo={[".U21 > .pin344"]}/>
    {/* KiCad net: ROT_MISO */}
    <KiCadNet name={"ROT_MISO"} connectsTo={[".U21 > .pin345", ".J3 > .pin47"]}/>
    {/* KiCad net: ROT_SS */}
    <KiCadNet name={"ROT_SS"} connectsTo={[".U21 > .pin346", ".J3 > .pin45"]}/>
    {/* KiCad net: unconnected-(U21H-PL17C-PadD3) */}
    <KiCadNet name={"NC_U21_D3"} connectsTo={[".U21 > .pin347"]}/>
    {/* KiCad net: unconnected-(U21H-PL14A-PadD4) */}
    <KiCadNet name={"NC_U21_D4"} connectsTo={[".U21 > .pin348"]}/>
    {/* KiCad net: unconnected-(U21H-PL11B-PadD5) */}
    <KiCadNet name={"NC_U21_D5"} connectsTo={[".U21 > .pin349"]}/>
    {/* KiCad net: unconnected-(U21B-PT11A-PadD7) */}
    <KiCadNet name={"NC_U21_D7"} connectsTo={[".U21 > .pin350"]}/>
    {/* KiCad net: RGMII_TXD3 */}
    <KiCadNet name={"RGMII_TXD3"} connectsTo={[".U21 > .pin351", ".U1 > .pin22"]}/>
    {/* KiCad net: unconnected-(U21B-PT22B-PadD9) */}
    <KiCadNet name={"NC_U21_D9"} connectsTo={[".U21 > .pin352"]}/>
    {/* KiCad net: unconnected-(U21B-PT29A-PadD10) */}
    <KiCadNet name={"NC_U21_D10"} connectsTo={[".U21 > .pin353"]}/>
    {/* KiCad net: unconnected-(U21B-PT36A-PadD11) */}
    <KiCadNet name={"NC_U21_D11"} connectsTo={[".U21 > .pin354"]}/>
    {/* KiCad net: unconnected-(U21B-PT40B-PadD13) */}
    <KiCadNet name={"NC_U21_D13"} connectsTo={[".U21 > .pin355"]}/>
    {/* KiCad net: unconnected-(U21B-PT47A-PadD14) */}
    <KiCadNet name={"NC_U21_D14"} connectsTo={[".U21 > .pin356"]}/>
    {/* KiCad net: RGMII_TX_EN */}
    <KiCadNet name={"RGMII_TX_EN"} connectsTo={[".U21 > .pin357", ".U1 > .pin25"]}/>
    {/* KiCad net: RGMII_RXD1 */}
    <KiCadNet name={"RGMII_RXD1"} connectsTo={[".U21 > .pin358", ".U1 > .pin31", ".R2 > .pin1"]}/>
    {/* KiCad net: ETH_MDIO */}
    <KiCadNet name={"ETH_MDIO"} connectsTo={[".U21 > .pin359", ".U1 > .pin37", ".R9 > .pin2"]}/>
    {/* KiCad net: ETH_~{RESET} */}
    <KiCadNet name={"ETH___RESET_"} connectsTo={[".U21 > .pin360", ".U1 > .pin42", ".R48 > .pin2", ".C47 > .pin1"]}/>
    {/* KiCad net: I2C[2]_SCL */}
    <KiCadNet name={"I2C_2__SCL"} connectsTo={[".U21 > .pin363", ".J5 > .pin5"]}/>
    {/* KiCad net: I2C[2]_SDA */}
    <KiCadNet name={"I2C_2__SDA"} connectsTo={[".U21 > .pin364", ".J5 > .pin6"]}/>
    {/* KiCad net: I2C[3]_SDA */}
    <KiCadNet name={"I2C_3__SDA"} connectsTo={[".U21 > .pin365", ".J5 > .pin8"]}/>
    {/* KiCad net: I2C[3]_SCL */}
    <KiCadNet name={"I2C_3__SCL"} connectsTo={[".U21 > .pin366", ".J5 > .pin7"]}/>
    {/* KiCad net: I2C[0]_SDA */}
    <KiCadNet name={"I2C_0__SDA"} connectsTo={[".U21 > .pin367", ".J5 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21D-PR11B-PadD28) */}
    <KiCadNet name={"NC_U21_D28"} connectsTo={[".U21 > .pin368"]}/>
    {/* KiCad net: unconnected-(U21D-PR14A-PadD29) */}
    <KiCadNet name={"NC_U21_D29"} connectsTo={[".U21 > .pin369"]}/>
    {/* KiCad net: unconnected-(U21D-PR17C-PadD30) */}
    <KiCadNet name={"NC_U21_D30"} connectsTo={[".U21 > .pin370"]}/>
    {/* KiCad net: unconnected-(U21D-PR17D-PadD31) */}
    <KiCadNet name={"NC_U21_D31"} connectsTo={[".U21 > .pin371"]}/>
    {/* KiCad net: unconnected-(U21D-PR20D-PadD32) */}
    <KiCadNet name={"NC_U21_D32"} connectsTo={[".U21 > .pin372"]}/>
    {/* KiCad net: ROT_SCLK */}
    <KiCadNet name={"ROT_SCLK"} connectsTo={[".U21 > .pin373", ".J3 > .pin50"]}/>
    {/* KiCad net: ROT_MOSI */}
    <KiCadNet name={"ROT_MOSI"} connectsTo={[".U21 > .pin375", ".J3 > .pin49"]}/>
    {/* KiCad net: unconnected-(U21H-PL14B-PadE4) */}
    <KiCadNet name={"NC_U21_E4"} connectsTo={[".U21 > .pin376"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadE7) */}
    <KiCadNet name={"NC_U21_E7"} connectsTo={[".U21 > .pin378"]}/>
    {/* KiCad net: unconnected-(U21B-PT15B-PadE8) */}
    <KiCadNet name={"NC_U21_E8"} connectsTo={[".U21 > .pin379"]}/>
    {/* KiCad net: unconnected-(U21B-PT27B-PadE10) */}
    <KiCadNet name={"NC_U21_E10"} connectsTo={[".U21 > .pin381"]}/>
    {/* KiCad net: unconnected-(U21B-PT33B-PadE11) */}
    <KiCadNet name={"NC_U21_E11"} connectsTo={[".U21 > .pin382"]}/>
    {/* KiCad net: unconnected-(U21B-PT45B-PadE14) */}
    <KiCadNet name={"NC_U21_E14"} connectsTo={[".U21 > .pin384"]}/>
    {/* KiCad net: RGMII_RXD2 */}
    <KiCadNet name={"RGMII_RXD2"} connectsTo={[".U21 > .pin386", ".U1 > .pin28", ".R3 > .pin1"]}/>
    {/* KiCad net: unconnected-(U21C-PT69A-PadE17) */}
    <KiCadNet name={"NC_U21_E17"} connectsTo={[".U21 > .pin387"]}/>
    {/* KiCad net: I2C[1]_SCL */}
    <KiCadNet name={"I2C_1__SCL"} connectsTo={[".U21 > .pin391", ".J5 > .pin3"]}/>
    {/* KiCad net: I2C[1]_SDA */}
    <KiCadNet name={"I2C_1__SDA"} connectsTo={[".U21 > .pin392", ".J5 > .pin4"]}/>
    {/* KiCad net: I2C[0]_SCL */}
    <KiCadNet name={"I2C_0__SCL"} connectsTo={[".U21 > .pin394", ".J5 > .pin1"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadE26) */}
    <KiCadNet name={"NC_U21_E26"} connectsTo={[".U21 > .pin395"]}/>
    {/* KiCad net: unconnected-(U21D-PR14B-PadE29) */}
    <KiCadNet name={"NC_U21_E29"} connectsTo={[".U21 > .pin397"]}/>
    {/* KiCad net: unconnected-(U21D-PR20B-PadE30) */}
    <KiCadNet name={"NC_U21_E30"} connectsTo={[".U21 > .pin398"]}/>
    {/* KiCad net: unconnected-(U21D-PR23B-PadE32) */}
    <KiCadNet name={"NC_U21_E32"} connectsTo={[".U21 > .pin400"]}/>
    {/* KiCad net: ROT_TX */}
    <KiCadNet name={"ROT_TX"} connectsTo={[".U21 > .pin401", ".J3 > .pin46"]}/>
    {/* KiCad net: ROT_RX */}
    <KiCadNet name={"ROT_RX"} connectsTo={[".U21 > .pin402", ".J3 > .pin48"]}/>
    {/* KiCad net: unconnected-(U21H-PL20A-PadF3) */}
    <KiCadNet name={"NC_U21_F3"} connectsTo={[".U21 > .pin403"]}/>
    {/* KiCad net: unconnected-(U21H-PL14C-PadF4) */}
    <KiCadNet name={"NC_U21_F4"} connectsTo={[".U21 > .pin404"]}/>
    {/* KiCad net: unconnected-(U21H-PL14D-PadF5) */}
    <KiCadNet name={"NC_U21_F5"} connectsTo={[".U21 > .pin405"]}/>
    {/* KiCad net: unconnected-(U21B-PT15A-PadF8) */}
    <KiCadNet name={"NC_U21_F8"} connectsTo={[".U21 > .pin406"]}/>
    {/* KiCad net: unconnected-(U21B-PT22A-PadF9) */}
    <KiCadNet name={"NC_U21_F9"} connectsTo={[".U21 > .pin407"]}/>
    {/* KiCad net: unconnected-(U21B-PT27A-PadF10) */}
    <KiCadNet name={"NC_U21_F10"} connectsTo={[".U21 > .pin408"]}/>
    {/* KiCad net: unconnected-(U21B-PT33A-PadF11) */}
    <KiCadNet name={"NC_U21_F11"} connectsTo={[".U21 > .pin409"]}/>
    {/* KiCad net: unconnected-(U21B-PT40A-PadF13) */}
    <KiCadNet name={"NC_U21_F13"} connectsTo={[".U21 > .pin410"]}/>
    {/* KiCad net: unconnected-(U21B-PT45A-PadF14) */}
    <KiCadNet name={"NC_U21_F14"} connectsTo={[".U21 > .pin411"]}/>
    {/* KiCad net: unconnected-(U21B-PT51A-PadF15) */}
    <KiCadNet name={"NC_U21_F15"} connectsTo={[".U21 > .pin412"]}/>
    {/* KiCad net: unconnected-(U21B-PT56A-PadF16) */}
    <KiCadNet name={"NC_U21_F16"} connectsTo={[".U21 > .pin413"]}/>
    {/* KiCad net: unconnected-(U21C-PT69B-PadF17) */}
    <KiCadNet name={"NC_U21_F17"} connectsTo={[".U21 > .pin414"]}/>
    {/* KiCad net: unconnected-(U21C-PT74B-PadF18) */}
    <KiCadNet name={"NC_U21_F18"} connectsTo={[".U21 > .pin415"]}/>
    {/* KiCad net: UART1_SCM_TX */}
    <KiCadNet name={"UART1_SCM_TX"} connectsTo={[".U21 > .pin418", ".J5 > .pin159"]}/>
    {/* KiCad net: UART1_SCM_RX */}
    <KiCadNet name={"UART1_SCM_RX"} connectsTo={[".U21 > .pin419", ".J5 > .pin160"]}/>
    {/* KiCad net: UART0_SCM_TX */}
    <KiCadNet name={"UART0_SCM_TX"} connectsTo={[".U21 > .pin420", ".J5 > .pin162"]}/>
    {/* KiCad net: UART0_SCM_RX */}
    <KiCadNet name={"UART0_SCM_RX"} connectsTo={[".U21 > .pin421", ".J5 > .pin163"]}/>
    {/* KiCad net: unconnected-(U21D-PR14D-PadF28) */}
    <KiCadNet name={"NC_U21_F28"} connectsTo={[".U21 > .pin422"]}/>
    {/* KiCad net: unconnected-(U21D-PR14C-PadF29) */}
    <KiCadNet name={"NC_U21_F29"} connectsTo={[".U21 > .pin423"]}/>
    {/* KiCad net: unconnected-(U21D-PR20A-PadF30) */}
    <KiCadNet name={"NC_U21_F30"} connectsTo={[".U21 > .pin424"]}/>
    {/* KiCad net: unconnected-(U21D-PR23A-PadF31) */}
    <KiCadNet name={"NC_U21_F31"} connectsTo={[".U21 > .pin425"]}/>
    {/* KiCad net: unconnected-(U21D-PR23C-PadF32) */}
    <KiCadNet name={"NC_U21_F32"} connectsTo={[".U21 > .pin426"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG9) */}
    <KiCadNet name={"NC_U21_G9"} connectsTo={[".U21 > .pin427"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG10) */}
    <KiCadNet name={"NC_U21_G10"} connectsTo={[".U21 > .pin428"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG11) */}
    <KiCadNet name={"NC_U21_G11"} connectsTo={[".U21 > .pin429"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG14) */}
    <KiCadNet name={"NC_U21_G14"} connectsTo={[".U21 > .pin430"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG15) */}
    <KiCadNet name={"NC_U21_G15"} connectsTo={[".U21 > .pin431"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG16) */}
    <KiCadNet name={"NC_U21_G16"} connectsTo={[".U21 > .pin432"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG17) */}
    <KiCadNet name={"NC_U21_G17"} connectsTo={[".U21 > .pin433"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG18) */}
    <KiCadNet name={"NC_U21_G18"} connectsTo={[".U21 > .pin434"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG19) */}
    <KiCadNet name={"NC_U21_G19"} connectsTo={[".U21 > .pin435"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG22) */}
    <KiCadNet name={"NC_U21_G22"} connectsTo={[".U21 > .pin436"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG23) */}
    <KiCadNet name={"NC_U21_G23"} connectsTo={[".U21 > .pin437"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadG24) */}
    <KiCadNet name={"NC_U21_G24"} connectsTo={[".U21 > .pin438"]}/>
    {/* KiCad net: unconnected-(U21H-PL23D-PadH1) */}
    <KiCadNet name={"NC_U21_H1"} connectsTo={[".U21 > .pin439"]}/>
    {/* KiCad net: unconnected-(U21H-PL26A-PadH2) */}
    <KiCadNet name={"NC_U21_H2"} connectsTo={[".U21 > .pin440"]}/>
    {/* KiCad net: unconnected-(U21H-PL26B-PadH3) */}
    <KiCadNet name={"NC_U21_H3"} connectsTo={[".U21 > .pin441"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadH4) */}
    <KiCadNet name={"NC_U21_H4"} connectsTo={[".U21 > .pin442"]}/>
    {/* KiCad net: unconnected-(U21H-PL35B-PadH5) */}
    <KiCadNet name={"NC_U21_H5"} connectsTo={[".U21 > .pin443"]}/>
    {/* KiCad net: unconnected-(U21H-PL35A-PadH6) */}
    <KiCadNet name={"NC_U21_H6"} connectsTo={[".U21 > .pin444"]}/>
    {/* KiCad net: unconnected-(U21D-PR35A-PadH27) */}
    <KiCadNet name={"NC_U21_H27"} connectsTo={[".U21 > .pin445"]}/>
    {/* KiCad net: unconnected-(U21D-PR35B-PadH28) */}
    <KiCadNet name={"NC_U21_H28"} connectsTo={[".U21 > .pin446"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadH29) */}
    <KiCadNet name={"NC_U21_H29"} connectsTo={[".U21 > .pin447"]}/>
    {/* KiCad net: ESPI_RESET_N */}
    <KiCadNet name={"ESPI_RESET_N"} connectsTo={[".U21 > .pin448", ".J5 > .pin74"]}/>
    {/* KiCad net: ESPI_IO3 */}
    <KiCadNet name={"ESPI_IO3"} connectsTo={[".U21 > .pin449", ".J5 > .pin78"]}/>
    {/* KiCad net: ESPI_CS1_N */}
    <KiCadNet name={"ESPI_CS1_N"} connectsTo={[".U21 > .pin450", ".J5 > .pin79"]}/>
    {/* KiCad net: unconnected-(U21H-PL29B-PadJ1) */}
    <KiCadNet name={"NC_U21_J1"} connectsTo={[".U21 > .pin451"]}/>
    {/* KiCad net: unconnected-(U21H-PL26C-PadJ3) */}
    <KiCadNet name={"NC_U21_J3"} connectsTo={[".U21 > .pin453"]}/>
    {/* KiCad net: unconnected-(U21H-PL32C-PadJ4) */}
    <KiCadNet name={"NC_U21_J4"} connectsTo={[".U21 > .pin454"]}/>
    {/* KiCad net: MMC_DAT7 */}
    <KiCadNet name={"MMC_DAT7"} connectsTo={[".U21 > .pin456", ".U6 > .pin62", ".R68 > .pin2"]}/>
    {/* KiCad net: MMC_CMD */}
    <KiCadNet name={"MMC_CMD"} connectsTo={[".U21 > .pin457", ".U6 > .pin90", ".R60 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21D-PR35C-PadJ26) */}
    <KiCadNet name={"NC_U21_J26"} connectsTo={[".U21 > .pin458"]}/>
    {/* KiCad net: unconnected-(U21D-PR35D-PadJ27) */}
    <KiCadNet name={"NC_U21_J27"} connectsTo={[".U21 > .pin459"]}/>
    {/* KiCad net: unconnected-(U21D-PR32C-PadJ29) */}
    <KiCadNet name={"NC_U21_J29"} connectsTo={[".U21 > .pin461"]}/>
    {/* KiCad net: unconnected-(U21D-PR26C-PadJ30) */}
    <KiCadNet name={"NC_U21_J30"} connectsTo={[".U21 > .pin462"]}/>
    {/* KiCad net: ESPI_IO2 */}
    <KiCadNet name={"ESPI_IO2"} connectsTo={[".U21 > .pin464", ".J5 > .pin77"]}/>
    {/* KiCad net: unconnected-(U21H-PL29C-PadK1) */}
    <KiCadNet name={"NC_U21_K1"} connectsTo={[".U21 > .pin465"]}/>
    {/* KiCad net: unconnected-(U21H-PL29A-PadK2) */}
    <KiCadNet name={"NC_U21_K2"} connectsTo={[".U21 > .pin466"]}/>
    {/* KiCad net: unconnected-(U21H-PL26D-PadK3) */}
    <KiCadNet name={"NC_U21_K3"} connectsTo={[".U21 > .pin467"]}/>
    {/* KiCad net: unconnected-(U21H-PL32D-PadK4) */}
    <KiCadNet name={"NC_U21_K4"} connectsTo={[".U21 > .pin468"]}/>
    {/* KiCad net: MMC_DAT5 */}
    <KiCadNet name={"MMC_DAT5"} connectsTo={[".U21 > .pin469", ".U6 > .pin61", ".R66 > .pin2"]}/>
    {/* KiCad net: MMC_DAT6 */}
    <KiCadNet name={"MMC_DAT6"} connectsTo={[".U21 > .pin470", ".U6 > .pin86", ".R67 > .pin2"]}/>
    {/* KiCad net: MMC_DAT4 */}
    <KiCadNet name={"MMC_DAT4"} connectsTo={[".U21 > .pin471", ".U6 > .pin85", ".R65 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21D-PR38B-PadK26) */}
    <KiCadNet name={"NC_U21_K26"} connectsTo={[".U21 > .pin486"]}/>
    {/* KiCad net: unconnected-(U21D-PR38A-PadK27) */}
    <KiCadNet name={"NC_U21_K27"} connectsTo={[".U21 > .pin487"]}/>
    {/* KiCad net: unconnected-(U21D-PR38C-PadK28) */}
    <KiCadNet name={"NC_U21_K28"} connectsTo={[".U21 > .pin488"]}/>
    {/* KiCad net: unconnected-(U21D-PR32D-PadK29) */}
    <KiCadNet name={"NC_U21_K29"} connectsTo={[".U21 > .pin489"]}/>
    {/* KiCad net: ESPI_ALERT_N */}
    <KiCadNet name={"ESPI_ALERT_N"} connectsTo={[".U21 > .pin490", ".J5 > .pin73"]}/>
    {/* KiCad net: ESPI_IO1 */}
    <KiCadNet name={"ESPI_IO1"} connectsTo={[".U21 > .pin491", ".J5 > .pin76"]}/>
    {/* KiCad net: ESPI_IO0 */}
    <KiCadNet name={"ESPI_IO0"} connectsTo={[".U21 > .pin492", ".J5 > .pin75"]}/>
    {/* KiCad net: unconnected-(U21H-PL29D-PadL1) */}
    <KiCadNet name={"NC_U21_L1"} connectsTo={[".U21 > .pin493"]}/>
    {/* KiCad net: unconnected-(U21H-PL32A-PadL2) */}
    <KiCadNet name={"NC_U21_L2"} connectsTo={[".U21 > .pin494"]}/>
    {/* KiCad net: MMC_RSTN */}
    <KiCadNet name={"MMC_RSTN"} connectsTo={[".U21 > .pin495", ".U6 > .pin74", ".R59 > .pin2"]}/>
    {/* KiCad net: MMC_DAT3 */}
    <KiCadNet name={"MMC_DAT3"} connectsTo={[".U21 > .pin496", ".U6 > .pin80", ".R64 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadL5) */}
    <KiCadNet name={"NC_U21_L5"} connectsTo={[".U21 > .pin497"]}/>
    {/* KiCad net: unconnected-(U21H-PL41D-PadL6) */}
    <KiCadNet name={"NC_U21_L6"} connectsTo={[".U21 > .pin498"]}/>
    {/* KiCad net: MMC_DAT1 */}
    <KiCadNet name={"MMC_DAT1"} connectsTo={[".U21 > .pin499", ".U6 > .pin79", ".R62 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21D-PR41C-PadL26) */}
    <KiCadNet name={"NC_U21_L26"} connectsTo={[".U21 > .pin514"]}/>
    {/* KiCad net: unconnected-(U21D-PR41D-PadL27) */}
    <KiCadNet name={"NC_U21_L27"} connectsTo={[".U21 > .pin515"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadL28) */}
    <KiCadNet name={"NC_U21_L28"} connectsTo={[".U21 > .pin516"]}/>
    {/* KiCad net: unconnected-(U21D-PR38D-PadL29) */}
    <KiCadNet name={"NC_U21_L29"} connectsTo={[".U21 > .pin517"]}/>
    {/* KiCad net: unconnected-(U21D-PR32B-PadL30) */}
    <KiCadNet name={"NC_U21_L30"} connectsTo={[".U21 > .pin518"]}/>
    {/* KiCad net: ESPI_CLK */}
    <KiCadNet name={"ESPI_CLK"} connectsTo={[".U21 > .pin519", ".J5 > .pin71"]}/>
    {/* KiCad net: ESPI_CS0_N */}
    <KiCadNet name={"ESPI_CS0_N"} connectsTo={[".U21 > .pin520", ".J5 > .pin72"]}/>
    {/* KiCad net: VCC1V8 */}
    <KiCadNet name={"VCC1V8"} connectsTo={[".U21 > .pin534", ".U21 > .pin583", ".U21 > .pin611", ".U21 > .pin639", ".R20 > .pin2", ".R142 > .pin1", ".C219 > .pin1", ".C221 > .pin1", ".C222 > .pin1", ".C223 > .pin1", ".C224 > .pin1"]}/>
    {/* KiCad net: unconnected-(U21G-PL62A-PadN1) */}
    <KiCadNet name={"NC_U21_N1"} connectsTo={[".U21 > .pin535"]}/>
    {/* KiCad net: MMC_DAT2 */}
    <KiCadNet name={"MMC_DAT2"} connectsTo={[".U21 > .pin537", ".U6 > .pin56", ".R63 > .pin2"]}/>
    {/* KiCad net: MMC_DAT0 */}
    <KiCadNet name={"MMC_DAT0"} connectsTo={[".U21 > .pin538", ".U6 > .pin55", ".R61 > .pin2"]}/>
    {/* KiCad net: GCLK100 */}
    <KiCadNet name={"GCLK100"} connectsTo={[".U21 > .pin540", ".Y1 > .pin3"]}/>
    {/* KiCad net: unconnected-(U21H-PL44B-PadN7) */}
    <KiCadNet name={"NC_U21_N7"} connectsTo={[".U21 > .pin541"]}/>
    {/* KiCad net: unconnected-(U21D-PR44B-PadN26) */}
    <KiCadNet name={"NC_U21_N26"} connectsTo={[".U21 > .pin556"]}/>
    {/* KiCad net: unconnected-(U21D-PR44A-PadN27) */}
    <KiCadNet name={"NC_U21_N27"} connectsTo={[".U21 > .pin557"]}/>
    {/* KiCad net: unconnected-(U21D-PR41B-PadN29) */}
    <KiCadNet name={"NC_U21_N29"} connectsTo={[".U21 > .pin559"]}/>
    {/* KiCad net: unconnected-(U21D-PR41A-PadN30) */}
    <KiCadNet name={"NC_U21_N30"} connectsTo={[".U21 > .pin560"]}/>
    {/* KiCad net: ULPI1_NXT */}
    <KiCadNet name={"ULPI1_NXT"} connectsTo={[".U21 > .pin562", ".U9 > .pin11"]}/>
    {/* KiCad net: unconnected-(U21G-PL62B-PadP1) */}
    <KiCadNet name={"NC_U21_P1"} connectsTo={[".U21 > .pin563"]}/>
    {/* KiCad net: unconnected-(U21G-PL59A-PadP2) */}
    <KiCadNet name={"NC_U21_P2"} connectsTo={[".U21 > .pin564"]}/>
    {/* KiCad net: unconnected-(U21G-PL59B-PadP3) */}
    <KiCadNet name={"NC_U21_P3"} connectsTo={[".U21 > .pin565"]}/>
    {/* KiCad net: MMC_CLK */}
    <KiCadNet name={"MMC_CLK"} connectsTo={[".U21 > .pin568", ".R14 > .pin2"]}/>
    {/* KiCad net: unconnected-(U21H-PL44D-PadP7) */}
    <KiCadNet name={"NC_U21_P7"} connectsTo={[".U21 > .pin569"]}/>
    {/* KiCad net: unconnected-(U21D-PR44D-PadP26) */}
    <KiCadNet name={"NC_U21_P26"} connectsTo={[".U21 > .pin584"]}/>
    {/* KiCad net: unconnected-(U21D-PR44C-PadP27) */}
    <KiCadNet name={"NC_U21_P27"} connectsTo={[".U21 > .pin585"]}/>
    {/* KiCad net: ULPI1_CLKO */}
    <KiCadNet name={"ULPI1_CLKO"} connectsTo={[".U21 > .pin586", ".U9 > .pin14"]}/>
    {/* KiCad net: unconnected-(U21E-PR47B-PadP29) */}
    <KiCadNet name={"NC_U21_P29"} connectsTo={[".U21 > .pin587"]}/>
    {/* KiCad net: ULPI1_RESET */}
    <KiCadNet name={"ULPI1_RESET"} connectsTo={[".U21 > .pin588", ".U9 > .pin9"]}/>
    {/* KiCad net: ULPI1_DIR */}
    <KiCadNet name={"ULPI1_DIR"} connectsTo={[".U21 > .pin589", ".U9 > .pin12"]}/>
    {/* KiCad net: ULPI1_STP */}
    <KiCadNet name={"ULPI1_STP"} connectsTo={[".U21 > .pin590", ".U9 > .pin13"]}/>
    {/* KiCad net: unconnected-(U21G-PL59C-PadR3) */}
    <KiCadNet name={"NC_U21_R3"} connectsTo={[".U21 > .pin593"]}/>
    {/* KiCad net: ULPI2_CLKO */}
    <KiCadNet name={"ULPI2_CLKO"} connectsTo={[".U21 > .pin612", ".U8 > .pin14"]}/>
    {/* KiCad net: PRSNT1_N */}
    <KiCadNet name={"PRSNT1_N"} connectsTo={[".U21 > .pin613", ".J5 > .pin57"]}/>
    {/* KiCad net: IRQ_N */}
    <KiCadNet name={"IRQ_N"} connectsTo={[".U21 > .pin615", ".J5 > .pin56"]}/>
    {/* KiCad net: unconnected-(U21E-PR59C-PadR30) */}
    <KiCadNet name={"NC_U21_R30"} connectsTo={[".U21 > .pin616"]}/>
    {/* KiCad net: ULPI1_D7 */}
    <KiCadNet name={"ULPI1_D7"} connectsTo={[".U21 > .pin618", ".U9 > .pin17"]}/>
    {/* KiCad net: unconnected-(U21G-PL68A-PadT1) */}
    <KiCadNet name={"NC_U21_T1"} connectsTo={[".U21 > .pin619"]}/>
    {/* KiCad net: unconnected-(U21G-PL59D-PadT3) */}
    <KiCadNet name={"NC_U21_T3"} connectsTo={[".U21 > .pin621"]}/>
    {/* KiCad net: unconnected-(U21E-PR47D-PadT26) */}
    <KiCadNet name={"NC_U21_T26"} connectsTo={[".U21 > .pin640"]}/>
    {/* KiCad net: DBP_PREQ_N */}
    <KiCadNet name={"DBP_PREQ_N"} connectsTo={[".U21 > .pin641", ".J5 > .pin49"]}/>
    {/* KiCad net: SPARE0 */}
    <KiCadNet name={"SPARE0"} connectsTo={[".U21 > .pin642", ".J5 > .pin55"]}/>
    {/* KiCad net: CHASI# */}
    <KiCadNet name={"CHASI_"} connectsTo={[".U21 > .pin643", ".J5 > .pin54"]}/>
    {/* KiCad net: unconnected-(U21E-PR59D-PadT30) */}
    <KiCadNet name={"NC_U21_T30"} connectsTo={[".U21 > .pin644"]}/>
    {/* KiCad net: ULPI1_D5 */}
    <KiCadNet name={"ULPI1_D5"} connectsTo={[".U21 > .pin645", ".U9 > .pin19"]}/>
    {/* KiCad net: ULPI1_D6 */}
    <KiCadNet name={"ULPI1_D6"} connectsTo={[".U21 > .pin646", ".U9 > .pin18"]}/>
    {/* KiCad net: unconnected-(U21G-PL68B-PadU1) */}
    <KiCadNet name={"NC_U21_U1"} connectsTo={[".U21 > .pin647"]}/>
    {/* KiCad net: unconnected-(U21G-PL62C-PadU2) */}
    <KiCadNet name={"NC_U21_U2"} connectsTo={[".U21 > .pin648"]}/>
    {/* KiCad net: unconnected-(U21G-PL62D-PadU3) */}
    <KiCadNet name={"NC_U21_U3"} connectsTo={[".U21 > .pin649"]}/>
    {/* KiCad net: SYS_PWRBTN_N */}
    <KiCadNet name={"SYS_PWRBTN_N"} connectsTo={[".U21 > .pin668", ".J5 > .pin47"]}/>
    {/* KiCad net: SYS_PWROK */}
    <KiCadNet name={"SYS_PWROK"} connectsTo={[".U21 > .pin669", ".J5 > .pin48"]}/>
    {/* KiCad net: RoT_CPU_RST_N */}
    <KiCadNet name={"RoT_CPU_RST_N"} connectsTo={[".U21 > .pin670", ".J5 > .pin53"]}/>
    {/* KiCad net: SPARE1 */}
    <KiCadNet name={"SPARE1"} connectsTo={[".U21 > .pin671", ".J5 > .pin52"]}/>
    {/* KiCad net: unconnected-(U21E-PR62D-PadU30) */}
    <KiCadNet name={"NC_U21_U30"} connectsTo={[".U21 > .pin672"]}/>
    {/* KiCad net: ULPI1_D3 */}
    <KiCadNet name={"ULPI1_D3"} connectsTo={[".U21 > .pin673", ".U9 > .pin21"]}/>
    {/* KiCad net: ULPI1_D4 */}
    <KiCadNet name={"ULPI1_D4"} connectsTo={[".U21 > .pin674", ".U9 > .pin20"]}/>
    {/* KiCad net: unconnected-(U21G-PL68C-PadV1) */}
    <KiCadNet name={"NC_U21_V1"} connectsTo={[".U21 > .pin675"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadV3) */}
    <KiCadNet name={"NC_U21_V3"} connectsTo={[".U21 > .pin677"]}/>
    {/* KiCad net: unconnected-(U21E-PR56D-PadV26) */}
    <KiCadNet name={"NC_U21_V26"} connectsTo={[".U21 > .pin696"]}/>
    {/* KiCad net: unconnected-(U21E-PR56C-PadV27) */}
    <KiCadNet name={"NC_U21_V27"} connectsTo={[".U21 > .pin697"]}/>
    {/* KiCad net: RST_PLTRST_BUF_N */}
    <KiCadNet name={"RST_PLTRST_BUF_N"} connectsTo={[".U21 > .pin699", ".J5 > .pin51"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadV30) */}
    <KiCadNet name={"NC_U21_V30"} connectsTo={[".U21 > .pin700"]}/>
    {/* KiCad net: ULPI1_D2 */}
    <KiCadNet name={"ULPI1_D2"} connectsTo={[".U21 > .pin702", ".U9 > .pin22"]}/>
    {/* KiCad net: unconnected-(U21G-PL68D-PadW1) */}
    <KiCadNet name={"NC_U21_W1"} connectsTo={[".U21 > .pin703"]}/>
    {/* KiCad net: unconnected-(U21G-PL65C-PadW3) */}
    <KiCadNet name={"NC_U21_W3"} connectsTo={[".U21 > .pin705"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadW6) */}
    <KiCadNet name={"NC_U21_W6"} connectsTo={[".U21 > .pin708"]}/>
    {/* KiCad net: unconnected-(U21A-NC-PadW27) */}
    <KiCadNet name={"NC_U21_W27"} connectsTo={[".U21 > .pin723"]}/>
    {/* KiCad net: unconnected-(U21E-PR71D-PadW28) */}
    <KiCadNet name={"NC_U21_W28"} connectsTo={[".U21 > .pin724"]}/>
    {/* KiCad net: unconnected-(U21E-PR74B-PadW29) */}
    <KiCadNet name={"NC_U21_W29"} connectsTo={[".U21 > .pin725"]}/>
    {/* KiCad net: DBP_PRDY_N */}
    <KiCadNet name={"DBP_PRDY_N"} connectsTo={[".U21 > .pin726", ".J5 > .pin50"]}/>
    {/* KiCad net: ULPI1_D0 */}
    <KiCadNet name={"ULPI1_D0"} connectsTo={[".U21 > .pin727", ".U9 > .pin24"]}/>
    {/* KiCad net: ULPI1_D1 */}
    <KiCadNet name={"ULPI1_D1"} connectsTo={[".U21 > .pin728", ".U9 > .pin23"]}/>
    {/* KiCad net: unconnected-(U21G-PL65D-PadY3) */}
    <KiCadNet name={"NC_U21_Y3"} connectsTo={[".U21 > .pin731"]}/>
    {/* KiCad net: unconnected-(U21E-PR71A-PadY26) */}
    <KiCadNet name={"NC_U21_Y26"} connectsTo={[".U21 > .pin750"]}/>
    {/* KiCad net: HPM_STBY_RST_N */}
    <KiCadNet name={"HPM_STBY_RST_N"} connectsTo={[".U21 > .pin751", ".J5 > .pin46"]}/>
    {/* KiCad net: ULPI2_STP */}
    <KiCadNet name={"ULPI2_STP"} connectsTo={[".U21 > .pin752", ".U8 > .pin13"]}/>
    {/* KiCad net: ULPI_DIR */}
    <KiCadNet name={"ULPI_DIR"} connectsTo={[".U21 > .pin753", ".U8 > .pin12"]}/>
    {/* KiCad net: ULPI2_NXT */}
    <KiCadNet name={"ULPI2_NXT"} connectsTo={[".U21 > .pin754", ".U8 > .pin11"]}/>
    {/* KiCad net: ULPI2_RESET */}
    <KiCadNet name={"ULPI2_RESET"} connectsTo={[".U21 > .pin756", ".U8 > .pin9"]}/>
    {/* KiCad net: /Ethernet/AVDDH */}
    <KiCadNet name={"_Ethernet_AVDDH"} connectsTo={[".U1 > .pin1", ".U1 > .pin12", ".C16 > .pin2", ".C13 > .pin2", ".C10 > .pin2", ".FB1 > .pin2"]}/>
    {/* KiCad net: /Ethernet/ETH1_P */}
    <KiCadNet name={"_Ethernet_ETH1_P"} connectsTo={[".U1 > .pin2", ".J1 > .pin11"]}/>
    {/* KiCad net: /Ethernet/ETH1_N */}
    <KiCadNet name={"_Ethernet_ETH1_N"} connectsTo={[".U1 > .pin3", ".J1 > .pin10"]}/>
    {/* KiCad net: /Ethernet/AVDDL */}
    <KiCadNet name={"_Ethernet_AVDDL"} connectsTo={[".U1 > .pin4", ".U1 > .pin9", ".C21 > .pin2", ".C19 > .pin2", ".C18 > .pin2", ".FB2 > .pin1", ".C23 > .pin2"]}/>
    {/* KiCad net: /Ethernet/ETH2_P */}
    <KiCadNet name={"_Ethernet_ETH2_P"} connectsTo={[".U1 > .pin5", ".J1 > .pin4"]}/>
    {/* KiCad net: /Ethernet/ETH2_N */}
    <KiCadNet name={"_Ethernet_ETH2_N"} connectsTo={[".U1 > .pin6", ".J1 > .pin5"]}/>
    {/* KiCad net: /Ethernet/ETH3_P */}
    <KiCadNet name={"_Ethernet_ETH3_P"} connectsTo={[".U1 > .pin7", ".J1 > .pin3"]}/>
    {/* KiCad net: /Ethernet/ETH3_N */}
    <KiCadNet name={"_Ethernet_ETH3_N"} connectsTo={[".U1 > .pin8", ".J1 > .pin2"]}/>
    {/* KiCad net: /Ethernet/ETH4_P */}
    <KiCadNet name={"_Ethernet_ETH4_P"} connectsTo={[".U1 > .pin10", ".J1 > .pin8"]}/>
    {/* KiCad net: /Ethernet/ETH4_N */}
    <KiCadNet name={"_Ethernet_ETH4_N"} connectsTo={[".U1 > .pin11", ".J1 > .pin9"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad13) */}
    <KiCadNet name={"NC_U1_13"} connectsTo={[".U1 > .pin13"]}/>
    {/* KiCad net: /Ethernet/ETH_LED2 */}
    <KiCadNet name={"_Ethernet_ETH_LED2"} connectsTo={[".U1 > .pin15", ".R15 > .pin2", ".R12 > .pin1"]}/>
    {/* KiCad net: /Ethernet/ETH_LED1 */}
    <KiCadNet name={"_Ethernet_ETH_LED1"} connectsTo={[".U1 > .pin17", ".R11 > .pin1", ".R16 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-LDO_O-Pad43) */}
    <KiCadNet name={"NC_U1_43"} connectsTo={[".U1 > .pin43"]}/>
    {/* KiCad net: /Ethernet/AVDDL_PLL */}
    <KiCadNet name={"_Ethernet_AVDDL_PLL"} connectsTo={[".U1 > .pin44", ".C22 > .pin2", ".C25 > .pin2", ".C24 > .pin2", ".FB3 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-XO-Pad45) */}
    <KiCadNet name={"NC_U1_45"} connectsTo={[".U1 > .pin45"]}/>
    {/* KiCad net: /Ethernet/PHY_CLK */}
    <KiCadNet name={"_Ethernet_PHY_CLK"} connectsTo={[".U1 > .pin46", ".Y5 > .pin3"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad47) */}
    <KiCadNet name={"NC_U1_47"} connectsTo={[".U1 > .pin47"]}/>
    {/* KiCad net: Net-(U1-ISET) */}
    <KiCadNet name={"Net__U1_ISET_"} connectsTo={[".U1 > .pin48", ".R13 > .pin2"]}/>
    {/* KiCad net: unconnected-(U9-CPEN-Pad3) */}
    <KiCadNet name={"NC_U9_3"} connectsTo={[".U9 > .pin3"]}/>
    {/* KiCad net: Net-(U9-VBUS) */}
    <KiCadNet name={"Net__U9_VBUS_"} connectsTo={[".U9 > .pin4", ".R76 > .pin2"]}/>
    {/* KiCad net: unconnected-(U9-ID-Pad5) */}
    <KiCadNet name={"NC_U9_5"} connectsTo={[".U9 > .pin5"]}/>
    {/* KiCad net: USB1_DP */}
    <KiCadNet name={"USB1_DP"} connectsTo={[".U9 > .pin7", ".J5 > .pin123"]}/>
    {/* KiCad net: USB1_DN */}
    <KiCadNet name={"USB1_DN"} connectsTo={[".U9 > .pin8", ".J5 > .pin124"]}/>
    {/* KiCad net: unconnected-(U9-EXTVBUS-Pad10) */}
    <KiCadNet name={"NC_U9_10"} connectsTo={[".U9 > .pin10"]}/>
    {/* KiCad net: Net-(C76-Pad2) */}
    <KiCadNet name={"Net__C76_Pad2_"} connectsTo={[".U9 > .pin15", ".U9 > .pin26", ".C76 > .pin2", ".C77 > .pin2"]}/>
    {/* KiCad net: unconnected-(U9-XO-Pad27) */}
    <KiCadNet name={"NC_U9_27"} connectsTo={[".U9 > .pin27"]}/>
    {/* KiCad net: /Interfaces/USB1_CLK */}
    <KiCadNet name={"_Interfaces_USB1_CLK"} connectsTo={[".U9 > .pin28", ".Y2 > .pin3"]}/>
    {/* KiCad net: Net-(U9-VDDA1.8) */}
    <KiCadNet name={"Net__U9_VDDA1_8_"} connectsTo={[".U9 > .pin29", ".C70 > .pin1", ".C74 > .pin1"]}/>
    {/* KiCad net: Net-(U9-RBIAS) */}
    <KiCadNet name={"Net__U9_RBIAS_"} connectsTo={[".U9 > .pin32", ".R77 > .pin2"]}/>
    {/* KiCad net: Net-(J2-PET3_N) */}
    <KiCadNet name={"Net__J2_PET3_N_"} connectsTo={[".C38 > .pin1", ".J2 > .pin11"]}/>
    {/* KiCad net: PCIE_HPM_TX3_N */}
    <KiCadNet name={"PCIE_HPM_TX3_N"} connectsTo={[".C38 > .pin2", ".J5 > .pin139"]}/>
    {/* KiCad net: Net-(J2-~{CLKREQ}) */}
    <KiCadNet name={"Net__J2___CLKREQ__"} connectsTo={[".R17 > .pin2", ".J2 > .pin52", ".TP2 > .pin1"]}/>
    {/* KiCad net: Net-(D1-A) */}
    <KiCadNet name={"Net__D1_A_"} connectsTo={[".R18 > .pin1", ".D1 > .pin2"]}/>
    {/* KiCad net: Net-(J2-PET1_N) */}
    <KiCadNet name={"Net__J2_PET1_N_"} connectsTo={[".C36 > .pin1", ".J2 > .pin35"]}/>
    {/* KiCad net: PCIE_HPM_TX1_N */}
    <KiCadNet name={"PCIE_HPM_TX1_N"} connectsTo={[".C36 > .pin2", ".J5 > .pin133"]}/>
    {/* KiCad net: Net-(J2-PET1_P) */}
    <KiCadNet name={"Net__J2_PET1_P_"} connectsTo={[".C32 > .pin1", ".J2 > .pin37"]}/>
    {/* KiCad net: PCIE_HPM_TX1_P */}
    <KiCadNet name={"PCIE_HPM_TX1_P"} connectsTo={[".C32 > .pin2", ".J5 > .pin132"]}/>
    {/* KiCad net: Net-(J2-PET0_P) */}
    <KiCadNet name={"Net__J2_PET0_P_"} connectsTo={[".C31 > .pin1", ".J2 > .pin49"]}/>
    {/* KiCad net: PCIE_HPM_TX0_P */}
    <KiCadNet name={"PCIE_HPM_TX0_P"} connectsTo={[".C31 > .pin2", ".J5 > .pin129"]}/>
    {/* KiCad net: Net-(J2-ALERT) */}
    <KiCadNet name={"Net__J2_ALERT_"} connectsTo={[".R20 > .pin1", ".J2 > .pin44"]}/>
    {/* KiCad net: Net-(J2-PET2_N) */}
    <KiCadNet name={"Net__J2_PET2_N_"} connectsTo={[".C37 > .pin1", ".J2 > .pin23"]}/>
    {/* KiCad net: PCIE_HPM_TX2_N */}
    <KiCadNet name={"PCIE_HPM_TX2_N"} connectsTo={[".C37 > .pin2", ".J5 > .pin136"]}/>
    {/* KiCad net: Net-(J2-PET0_N) */}
    <KiCadNet name={"Net__J2_PET0_N_"} connectsTo={[".C35 > .pin1", ".J2 > .pin47"]}/>
    {/* KiCad net: PCIE_HPM_TX0_N */}
    <KiCadNet name={"PCIE_HPM_TX0_N"} connectsTo={[".C35 > .pin2", ".J5 > .pin130"]}/>
    {/* KiCad net: Net-(J2-PET2_P) */}
    <KiCadNet name={"Net__J2_PET2_P_"} connectsTo={[".C33 > .pin1", ".J2 > .pin25"]}/>
    {/* KiCad net: PCIE_HPM_TX2_P */}
    <KiCadNet name={"PCIE_HPM_TX2_P"} connectsTo={[".C33 > .pin2", ".J5 > .pin135"]}/>
    {/* KiCad net: PCIE_HPM_RX3_N */}
    <KiCadNet name={"PCIE_HPM_RX3_N"} connectsTo={[".J2 > .pin5", ".J5 > .pin69"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad6) */}
    <KiCadNet name={"NC_J2_6"} connectsTo={[".J2 > .pin6"]}/>
    {/* KiCad net: PCIE_HPM_RX3_P */}
    <KiCadNet name={"PCIE_HPM_RX3_P"} connectsTo={[".J2 > .pin7", ".J5 > .pin68"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad8) */}
    <KiCadNet name={"NC_J2_8"} connectsTo={[".J2 > .pin8"]}/>
    {/* KiCad net: Net-(D1-C) */}
    <KiCadNet name={"Net__D1_C_"} connectsTo={[".J2 > .pin10", ".D1 > .pin1"]}/>
    {/* KiCad net: Net-(J2-PET3_P) */}
    <KiCadNet name={"Net__J2_PET3_P_"} connectsTo={[".J2 > .pin13", ".C34 > .pin1"]}/>
    {/* KiCad net: PCIE_HPM_RX2_N */}
    <KiCadNet name={"PCIE_HPM_RX2_N"} connectsTo={[".J2 > .pin17", ".J5 > .pin66"]}/>
    {/* KiCad net: PCIE_HPM_RX2_P */}
    <KiCadNet name={"PCIE_HPM_RX2_P"} connectsTo={[".J2 > .pin19", ".J5 > .pin65"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad20) */}
    <KiCadNet name={"NC_J2_20"} connectsTo={[".J2 > .pin20"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad22) */}
    <KiCadNet name={"NC_J2_22"} connectsTo={[".J2 > .pin22"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad24) */}
    <KiCadNet name={"NC_J2_24"} connectsTo={[".J2 > .pin24"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad26) */}
    <KiCadNet name={"NC_J2_26"} connectsTo={[".J2 > .pin26"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad28) */}
    <KiCadNet name={"NC_J2_28"} connectsTo={[".J2 > .pin28"]}/>
    {/* KiCad net: PCIE_HPM_RX1_N */}
    <KiCadNet name={"PCIE_HPM_RX1_N"} connectsTo={[".J2 > .pin29", ".J5 > .pin63"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad30) */}
    <KiCadNet name={"NC_J2_30"} connectsTo={[".J2 > .pin30"]}/>
    {/* KiCad net: PCIE_HPM_RX1_P */}
    <KiCadNet name={"PCIE_HPM_RX1_P"} connectsTo={[".J2 > .pin31", ".J5 > .pin62"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad32) */}
    <KiCadNet name={"NC_J2_32"} connectsTo={[".J2 > .pin32"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad34) */}
    <KiCadNet name={"NC_J2_34"} connectsTo={[".J2 > .pin34"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad36) */}
    <KiCadNet name={"NC_J2_36"} connectsTo={[".J2 > .pin36"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad38) */}
    <KiCadNet name={"NC_J2_38"} connectsTo={[".J2 > .pin38"]}/>
    {/* KiCad net: unconnected-(J2-SMB_CLK-Pad40) */}
    <KiCadNet name={"NC_J2_40"} connectsTo={[".J2 > .pin40"]}/>
    {/* KiCad net: PCIE_HPM_RX0_N */}
    <KiCadNet name={"PCIE_HPM_RX0_N"} connectsTo={[".J2 > .pin41", ".J5 > .pin60"]}/>
    {/* KiCad net: unconnected-(J2-SMB_DATA-Pad42) */}
    <KiCadNet name={"NC_J2_42"} connectsTo={[".J2 > .pin42"]}/>
    {/* KiCad net: PCIE_HPM_RX0_P */}
    <KiCadNet name={"PCIE_HPM_RX0_P"} connectsTo={[".J2 > .pin43", ".J5 > .pin59"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad46) */}
    <KiCadNet name={"NC_J2_46"} connectsTo={[".J2 > .pin46"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad48) */}
    <KiCadNet name={"NC_J2_48"} connectsTo={[".J2 > .pin48"]}/>
    {/* KiCad net: CLK_PCIE_x4_DN */}
    <KiCadNet name={"CLK_PCIE_x4_DN"} connectsTo={[".J2 > .pin53", ".J5 > .pin127"]}/>
    {/* KiCad net: Net-(J2-~{PEWAKE}) */}
    <KiCadNet name={"Net__J2___PEWAKE__"} connectsTo={[".J2 > .pin54", ".TP1 > .pin1"]}/>
    {/* KiCad net: CLK_PCIE_x4_DP */}
    <KiCadNet name={"CLK_PCIE_x4_DP"} connectsTo={[".J2 > .pin55", ".J5 > .pin126"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad56) */}
    <KiCadNet name={"NC_J2_56"} connectsTo={[".J2 > .pin56"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad58) */}
    <KiCadNet name={"NC_J2_58"} connectsTo={[".J2 > .pin58"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad67) */}
    <KiCadNet name={"NC_J2_67"} connectsTo={[".J2 > .pin67"]}/>
    {/* KiCad net: unconnected-(J2-SUSCLK-Pad68) */}
    <KiCadNet name={"NC_J2_68"} connectsTo={[".J2 > .pin68"]}/>
    {/* KiCad net: unconnected-(J2-NC-Pad69) */}
    <KiCadNet name={"NC_J2_69"} connectsTo={[".J2 > .pin69"]}/>
    {/* KiCad net: QSPIA2_CS_N */}
    <KiCadNet name={"QSPIA2_CS_N"} connectsTo={[".U4 > .pin1", ".J3 > .pin13", ".R23 > .pin2"]}/>
    {/* KiCad net: QSPIA2_D1 */}
    <KiCadNet name={"QSPIA2_D1"} connectsTo={[".U4 > .pin2", ".J3 > .pin11", ".R43 > .pin1"]}/>
    {/* KiCad net: QSPIA2_D2 */}
    <KiCadNet name={"QSPIA2_D2"} connectsTo={[".U4 > .pin3", ".J3 > .pin9", ".R35 > .pin1"]}/>
    {/* KiCad net: QSPIA2_D0 */}
    <KiCadNet name={"QSPIA2_D0"} connectsTo={[".U4 > .pin5", ".J3 > .pin19", ".R31 > .pin1"]}/>
    {/* KiCad net: QSPIA_CLK */}
    <KiCadNet name={"QSPIA_CLK"} connectsTo={[".U4 > .pin6", ".U5 > .pin6", ".J3 > .pin17", ".R27 > .pin2", ".R28 > .pin2"]}/>
    {/* KiCad net: QSPIA2_D3 */}
    <KiCadNet name={"QSPIA2_D3"} connectsTo={[".U4 > .pin7", ".J3 > .pin15", ".R39 > .pin1"]}/>
    {/* KiCad net: QSPIA1_CS_N */}
    <KiCadNet name={"QSPIA1_CS_N"} connectsTo={[".U5 > .pin1", ".J3 > .pin12", ".R24 > .pin2"]}/>
    {/* KiCad net: QSPIA1_D1 */}
    <KiCadNet name={"QSPIA1_D1"} connectsTo={[".U5 > .pin2", ".J3 > .pin10", ".R44 > .pin1"]}/>
    {/* KiCad net: QSPIA1_D2 */}
    <KiCadNet name={"QSPIA1_D2"} connectsTo={[".U5 > .pin3", ".J3 > .pin8", ".R36 > .pin1"]}/>
    {/* KiCad net: QSPIA1_D0 */}
    <KiCadNet name={"QSPIA1_D0"} connectsTo={[".U5 > .pin5", ".J3 > .pin16", ".R32 > .pin1"]}/>
    {/* KiCad net: QSPIA1_D3 */}
    <KiCadNet name={"QSPIA1_D3"} connectsTo={[".U5 > .pin7", ".J3 > .pin14", ".R40 > .pin1"]}/>
    {/* KiCad net: Net-(J1-TRCT3) */}
    <KiCadNet name={"Net__J1_TRCT3_"} connectsTo={[".J1 > .pin1", ".C29 > .pin2"]}/>
    {/* KiCad net: Net-(J1-TRCT2) */}
    <KiCadNet name={"Net__J1_TRCT2_"} connectsTo={[".J1 > .pin6", ".C28 > .pin2"]}/>
    {/* KiCad net: Net-(J1-TRCT4) */}
    <KiCadNet name={"Net__J1_TRCT4_"} connectsTo={[".J1 > .pin7", ".C30 > .pin2"]}/>
    {/* KiCad net: Net-(J1-TRCT1) */}
    <KiCadNet name={"Net__J1_TRCT1_"} connectsTo={[".J1 > .pin12", ".C27 > .pin2"]}/>
    {/* KiCad net: Net-(J1-Pad13) */}
    <KiCadNet name={"Net__J1_Pad13_"} connectsTo={[".J1 > .pin13", ".R16 > .pin1"]}/>
    {/* KiCad net: Net-(J1-Pad15) */}
    <KiCadNet name={"Net__J1_Pad15_"} connectsTo={[".J1 > .pin15", ".R15 > .pin1"]}/>
    {/* KiCad net: QSPIB1_CS_N */}
    <KiCadNet name={"QSPIB1_CS_N"} connectsTo={[".U3 > .pin1", ".J3 > .pin25", ".R22 > .pin2"]}/>
    {/* KiCad net: QSPIB1_D1 */}
    <KiCadNet name={"QSPIB1_D1"} connectsTo={[".U3 > .pin2", ".J3 > .pin23", ".R42 > .pin1"]}/>
    {/* KiCad net: QSPIB1_D2 */}
    <KiCadNet name={"QSPIB1_D2"} connectsTo={[".U3 > .pin3", ".J3 > .pin21", ".R34 > .pin1"]}/>
    {/* KiCad net: QSPIB1_D0 */}
    <KiCadNet name={"QSPIB1_D0"} connectsTo={[".U3 > .pin5", ".J3 > .pin29", ".R30 > .pin1"]}/>
    {/* KiCad net: QSPIB_CLK */}
    <KiCadNet name={"QSPIB_CLK"} connectsTo={[".U3 > .pin6", ".U2 > .pin6", ".J3 > .pin39", ".R25 > .pin2", ".R26 > .pin2"]}/>
    {/* KiCad net: QSPIB1_D3 */}
    <KiCadNet name={"QSPIB1_D3"} connectsTo={[".U3 > .pin7", ".J3 > .pin27", ".R38 > .pin1"]}/>
    {/* KiCad net: QSPIB2_CS_N */}
    <KiCadNet name={"QSPIB2_CS_N"} connectsTo={[".U2 > .pin1", ".J3 > .pin35", ".R21 > .pin2"]}/>
    {/* KiCad net: QSPIB2_D1 */}
    <KiCadNet name={"QSPIB2_D1"} connectsTo={[".U2 > .pin2", ".J3 > .pin33", ".R41 > .pin1"]}/>
    {/* KiCad net: QSPIB2_D2 */}
    <KiCadNet name={"QSPIB2_D2"} connectsTo={[".U2 > .pin3", ".J3 > .pin31", ".R33 > .pin1"]}/>
    {/* KiCad net: QSPIB2_D0 */}
    <KiCadNet name={"QSPIB2_D0"} connectsTo={[".U2 > .pin5", ".J3 > .pin41", ".R29 > .pin1"]}/>
    {/* KiCad net: QSPIB2_D3 */}
    <KiCadNet name={"QSPIB2_D3"} connectsTo={[".U2 > .pin7", ".J3 > .pin37", ".R37 > .pin1"]}/>
    {/* KiCad net: Net-(Q17-G) */}
    <KiCadNet name={"Net__Q17_G_"} connectsTo={[".R128 > .pin1", ".Q17 > .pin1"]}/>
    {/* KiCad net: Net-(D14-A) */}
    <KiCadNet name={"Net__D14_A_"} connectsTo={[".R129 > .pin2", ".D14 > .pin2"]}/>
    {/* KiCad net: Net-(C118-Pad2) */}
    <KiCadNet name={"Net__C118_Pad2_"} connectsTo={[".TP8 > .pin1", ".R114 > .pin1", ".C128 > .pin2", ".C123 > .pin2", ".C118 > .pin2", ".L3 > .pin2", ".R141 > .pin2"]}/>
    {/* KiCad net: Net-(C119-Pad2) */}
    <KiCadNet name={"Net__C119_Pad2_"} connectsTo={[".TP9 > .pin1", ".R142 > .pin2", ".R116 > .pin1", ".C124 > .pin2", ".C119 > .pin2", ".L4 > .pin2", ".C129 > .pin2"]}/>
    {/* KiCad net: Net-(C120-Pad2) */}
    <KiCadNet name={"Net__C120_Pad2_"} connectsTo={[".TP10 > .pin1", ".L5 > .pin2", ".R118 > .pin1", ".R143 > .pin2", ".C130 > .pin2", ".C125 > .pin2", ".C120 > .pin2"]}/>
    {/* KiCad net: Net-(C121-Pad2) */}
    <KiCadNet name={"Net__C121_Pad2_"} connectsTo={[".TP11 > .pin1", ".R120 > .pin2", ".L6 > .pin2", ".C131 > .pin2", ".C126 > .pin2", ".C121 > .pin2", ".R144 > .pin2"]}/>
    {/* KiCad net: Net-(C102-Pad2) */}
    <KiCadNet name={"Net__C102_Pad2_"} connectsTo={[".C102 > .pin2", ".R90 > .pin2"]}/>
    {/* KiCad net: /Power supply/VCCA0_EN */}
    <KiCadNet name={"_Power_supply_VCCA0_EN"} connectsTo={[".R137 > .pin2", ".U20 > .pin1", ".U13 > .pin3"]}/>
    {/* KiCad net: /Power supply/VCCIO_EN */}
    <KiCadNet name={"_Power_supply_VCCIO_EN"} connectsTo={[".R138 > .pin2", ".U18 > .pin1", ".U19 > .pin1", ".U17 > .pin1"]}/>
    {/* KiCad net: /Power supply/VCCAUX_EN */}
    <KiCadNet name={"_Power_supply_VCCAUX_EN"} connectsTo={[".R139 > .pin2", ".U16 > .pin1"]}/>
    {/* KiCad net: Net-(U20-FB) */}
    <KiCadNet name={"Net__U20_FB_"} connectsTo={[".R120 > .pin1", ".U20 > .pin2", ".R121 > .pin2", ".C121 > .pin1"]}/>
    {/* KiCad net: Net-(U19-SW) */}
    <KiCadNet name={"Net__U19_SW_"} connectsTo={[".L5 > .pin1", ".U19 > .pin6"]}/>
    {/* KiCad net: Net-(U20-SW) */}
    <KiCadNet name={"Net__U20_SW_"} connectsTo={[".L6 > .pin1", ".U20 > .pin6"]}/>
    {/* KiCad net: Net-(U18-FB) */}
    <KiCadNet name={"Net__U18_FB_"} connectsTo={[".U18 > .pin2", ".R117 > .pin1", ".R116 > .pin2", ".C119 > .pin1"]}/>
    {/* KiCad net: unconnected-(U18-NC-Pad4) */}
    <KiCadNet name={"NC_U18_4"} connectsTo={[".U18 > .pin4"]}/>
    {/* KiCad net: Net-(U18-SW) */}
    <KiCadNet name={"Net__U18_SW_"} connectsTo={[".U18 > .pin6", ".L4 > .pin1"]}/>
    {/* KiCad net: /Power supply/1V8_PG */}
    <KiCadNet name={"_Power_supply_1V8_PG"} connectsTo={[".U18 > .pin8", ".Q15 > .pin1", ".R105 > .pin2"]}/>
    {/* KiCad net: Net-(U19-FB) */}
    <KiCadNet name={"Net__U19_FB_"} connectsTo={[".U19 > .pin2", ".R119 > .pin1", ".R118 > .pin2", ".C120 > .pin1"]}/>
    {/* KiCad net: unconnected-(U19-NC-Pad4) */}
    <KiCadNet name={"NC_U19_4"} connectsTo={[".U19 > .pin4"]}/>
    {/* KiCad net: /Power supply/1V35_PG */}
    <KiCadNet name={"_Power_supply_1V35_PG"} connectsTo={[".U19 > .pin8", ".R106 > .pin2", ".Q16 > .pin1"]}/>
    {/* KiCad net: unconnected-(U20-NC-Pad4) */}
    <KiCadNet name={"NC_U20_4"} connectsTo={[".U20 > .pin4"]}/>
    {/* KiCad net: Net-(U17-FB) */}
    <KiCadNet name={"Net__U17_FB_"} connectsTo={[".R115 > .pin1", ".R114 > .pin2", ".U17 > .pin2", ".C118 > .pin1"]}/>
    {/* KiCad net: unconnected-(U17-NC-Pad4) */}
    <KiCadNet name={"NC_U17_4"} connectsTo={[".U17 > .pin4"]}/>
    {/* KiCad net: Net-(U17-SW) */}
    <KiCadNet name={"Net__U17_SW_"} connectsTo={[".U17 > .pin6", ".L3 > .pin1"]}/>
    {/* KiCad net: /Power supply/3V3_PG */}
    <KiCadNet name={"_Power_supply_3V3_PG"} connectsTo={[".U17 > .pin8", ".Q13 > .pin1", ".R103 > .pin2"]}/>
    {/* KiCad net: VCC2V5 */}
    <KiCadNet name={"VCC2V5"} connectsTo={[".R145 > .pin1", ".FB8 > .pin2"]}/>
    {/* KiCad net: Net-(C122-Pad2) */}
    <KiCadNet name={"Net__C122_Pad2_"} connectsTo={[".R145 > .pin2", ".C122 > .pin2", ".C127 > .pin2", ".C132 > .pin2", ".L7 > .pin2", ".R45 > .pin2"]}/>
    {/* KiCad net: Net-(U16-FB) */}
    <KiCadNet name={"Net__U16_FB_"} connectsTo={[".C122 > .pin1", ".R123 > .pin1", ".U16 > .pin2", ".R45 > .pin1"]}/>
    {/* KiCad net: Net-(U16-SW) */}
    <KiCadNet name={"Net__U16_SW_"} connectsTo={[".L7 > .pin1", ".U16 > .pin6"]}/>
    {/* KiCad net: SPI0_MOSI */}
    <KiCadNet name={"SPI0_MOSI"} connectsTo={[".J7 > .pin2", ".J5 > .pin167", ".J4 > .pin2", ".R134 > .pin1"]}/>
    {/* KiCad net: SPI0_MISO */}
    <KiCadNet name={"SPI0_MISO"} connectsTo={[".J7 > .pin3", ".J5 > .pin168", ".J4 > .pin3", ".R135 > .pin1"]}/>
    {/* KiCad net: SPI0_CLK */}
    <KiCadNet name={"SPI0_CLK"} connectsTo={[".J7 > .pin4", ".J5 > .pin165", ".J4 > .pin4", ".R132 > .pin1"]}/>
    {/* KiCad net: SPI0_CS_N */}
    <KiCadNet name={"SPI0_CS_N"} connectsTo={[".J7 > .pin5", ".J5 > .pin166", ".J4 > .pin1", ".R133 > .pin1"]}/>
    {/* KiCad net: Net-(U8-RBIAS) */}
    <KiCadNet name={"Net__U8_RBIAS_"} connectsTo={[".R75 > .pin2", ".U8 > .pin32"]}/>
    {/* KiCad net: unconnected-(U8-CPEN-Pad3) */}
    <KiCadNet name={"NC_U8_3"} connectsTo={[".U8 > .pin3"]}/>
    {/* KiCad net: Net-(U8-VBUS) */}
    <KiCadNet name={"Net__U8_VBUS_"} connectsTo={[".U8 > .pin4", ".R74 > .pin2"]}/>
    {/* KiCad net: unconnected-(U8-ID-Pad5) */}
    <KiCadNet name={"NC_U8_5"} connectsTo={[".U8 > .pin5"]}/>
    {/* KiCad net: USB2_DP */}
    <KiCadNet name={"USB2_DP"} connectsTo={[".U8 > .pin7", ".J5 > .pin120"]}/>
    {/* KiCad net: USB2_DN */}
    <KiCadNet name={"USB2_DN"} connectsTo={[".U8 > .pin8", ".J5 > .pin121"]}/>
    {/* KiCad net: unconnected-(U8-EXTVBUS-Pad10) */}
    <KiCadNet name={"NC_U8_10"} connectsTo={[".U8 > .pin10"]}/>
    {/* KiCad net: Net-(C71-Pad1) */}
    <KiCadNet name={"Net__C71_Pad1_"} connectsTo={[".U8 > .pin15", ".U8 > .pin26", ".C75 > .pin2", ".C71 > .pin1"]}/>
    {/* KiCad net: unconnected-(U8-XO-Pad27) */}
    <KiCadNet name={"NC_U8_27"} connectsTo={[".U8 > .pin27"]}/>
    {/* KiCad net: /Interfaces/USB2_CLK */}
    <KiCadNet name={"_Interfaces_USB2_CLK"} connectsTo={[".U8 > .pin28", ".Y3 > .pin3"]}/>
    {/* KiCad net: Net-(U8-VDDA1.8) */}
    <KiCadNet name={"Net__U8_VDDA1_8_"} connectsTo={[".U8 > .pin29", ".C73 > .pin2", ".C66 > .pin2"]}/>
    {/* KiCad net: Net-(U13-AVIN) */}
    <KiCadNet name={"Net__U13_AVIN_"} connectsTo={[".C100 > .pin2", ".R88 > .pin2", ".U13 > .pin4"]}/>
    {/* KiCad net: /Interfaces/FTDI_CLK */}
    <KiCadNet name={"_Interfaces_FTDI_CLK"} connectsTo={[".Y4 > .pin3", ".U14 > .pin3"]}/>
    {/* KiCad net: Net-(U14-~{SUSPEND}) */}
    <KiCadNet name={"Net__U14___SUSPEND__"} connectsTo={[".TP15 > .pin1", ".U14 > .pin30"]}/>
    {/* KiCad net: Net-(U14-~{PWR_{EN}}) */}
    <KiCadNet name={"Net__U14___PWR__EN___"} connectsTo={[".TP14 > .pin1", ".U14 > .pin54"]}/>
    {/* KiCad net: Net-(J6-ID) */}
    <KiCadNet name={"Net__J6_ID_"} connectsTo={[".TP13 > .pin1", ".J6 > .pin4"]}/>
    {/* KiCad net: PCIE_BMC_TX_DP */}
    <KiCadNet name={"PCIE_BMC_TX_DP"} connectsTo={[".J5 > .pin17", ".C58 > .pin1"]}/>
    {/* KiCad net: PCIE_BMC_TX_DN */}
    <KiCadNet name={"PCIE_BMC_TX_DN"} connectsTo={[".J5 > .pin18", ".C57 > .pin1"]}/>
    {/* KiCad net: QSPI0_CLK */}
    <KiCadNet name={"QSPI0_CLK"} connectsTo={[".J5 > .pin81", ".J3 > .pin18"]}/>
    {/* KiCad net: QSPI0_CS0_N */}
    <KiCadNet name={"QSPI0_CS0_N"} connectsTo={[".J5 > .pin82", ".J3 > .pin20"]}/>
    {/* KiCad net: QSPI0_D0 */}
    <KiCadNet name={"QSPI0_D0"} connectsTo={[".J5 > .pin83", ".J3 > .pin22"]}/>
    {/* KiCad net: QSPI0_D1 */}
    <KiCadNet name={"QSPI0_D1"} connectsTo={[".J5 > .pin84", ".J3 > .pin24"]}/>
    {/* KiCad net: QSPI0_D2 */}
    <KiCadNet name={"QSPI0_D2"} connectsTo={[".J5 > .pin85", ".J3 > .pin26"]}/>
    {/* KiCad net: QSPI0_D3 */}
    <KiCadNet name={"QSPI0_D3"} connectsTo={[".J5 > .pin86", ".J3 > .pin28"]}/>
    {/* KiCad net: unconnected-(J5-PadB27) */}
    <KiCadNet name={"NC_J5_B27"} connectsTo={[".J5 > .pin97"]}/>
    {/* KiCad net: unconnected-(J5-PadB28) */}
    <KiCadNet name={"NC_J5_B28"} connectsTo={[".J5 > .pin98"]}/>
    {/* KiCad net: 3V0_BAT */}
    <KiCadNet name={"_3V0_BAT"} connectsTo={[".J5 > .pin111", ".J18 > .pin1"]}/>
    {/* KiCad net: QSPI0_CS1_N */}
    <KiCadNet name={"QSPI0_CS1_N"} connectsTo={[".J5 > .pin112", ".J3 > .pin7"]}/>
    {/* KiCad net: PCIE_HPM_TX3_P */}
    <KiCadNet name={"PCIE_HPM_TX3_P"} connectsTo={[".J5 > .pin138", ".C34 > .pin2"]}/>
    {/* KiCad net: P12V_AUX */}
    <KiCadNet name={"P12V_AUX"} connectsTo={[".J5 > .pin141", ".J5 > .pin142", ".J5 > .pin155", ".J5 > .pin156", ".J8 > .pin1", ".F1 > .pin1", ".TP4 > .pin1"]}/>
    {/* KiCad net: VBUS */}
    <KiCadNet name={"VBUS"} connectsTo={[".J6 > .pin1", ".C98 > .pin2", ".C99 > .pin2", ".R146 > .pin1", ".R150 > .pin1"]}/>
    {/* KiCad net: DBG_USB_D_N */}
    <KiCadNet name={"DBG_USB_D_N"} connectsTo={[".J6 > .pin2", ".U14 > .pin7"]}/>
    {/* KiCad net: DBG_USB_D_P */}
    <KiCadNet name={"DBG_USB_D_P"} connectsTo={[".J6 > .pin3", ".U14 > .pin8"]}/>
    {/* KiCad net: Net-(U6-DS) */}
    <KiCadNet name={"Net__U6_DS_"} connectsTo={[".TP16 > .pin1", ".U6 > .pin58"]}/>
    {/* KiCad net: unconnected-(U16-NC-Pad4) */}
    <KiCadNet name={"NC_U16_4"} connectsTo={[".U16 > .pin4"]}/>
    {/* KiCad net: /Power supply/2V5_PG */}
    <KiCadNet name={"_Power_supply_2V5_PG"} connectsTo={[".U16 > .pin8", ".Q14 > .pin1", ".R104 > .pin2"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadA1) */}
    <KiCadNet name={"NC_U6_A1"} connectsTo={[".U6 > .pin1"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadA2) */}
    <KiCadNet name={"NC_U6_A2"} connectsTo={[".U6 > .pin2"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadA9) */}
    <KiCadNet name={"NC_U6_A9"} connectsTo={[".U6 > .pin3"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadA10) */}
    <KiCadNet name={"NC_U6_A10"} connectsTo={[".U6 > .pin4"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadB1) */}
    <KiCadNet name={"NC_U6_B1"} connectsTo={[".U6 > .pin5"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadB10) */}
    <KiCadNet name={"NC_U6_B10"} connectsTo={[".U6 > .pin6"]}/>
    {/* KiCad net: unconnected-(U6-VSF1-PadD2) */}
    <KiCadNet name={"NC_U6_D2"} connectsTo={[".U6 > .pin7"]}/>
    {/* KiCad net: unconnected-(U6-VSF2-PadD3) */}
    <KiCadNet name={"NC_U6_D3"} connectsTo={[".U6 > .pin8"]}/>
    {/* KiCad net: unconnected-(U6-VSF3-PadD4) */}
    <KiCadNet name={"NC_U6_D4"} connectsTo={[".U6 > .pin9"]}/>
    {/* KiCad net: unconnected-(U6-VSF4-PadD5) */}
    <KiCadNet name={"NC_U6_D5"} connectsTo={[".U6 > .pin10"]}/>
    {/* KiCad net: unconnected-(U6-VSF5-PadD6) */}
    <KiCadNet name={"NC_U6_D6"} connectsTo={[".U6 > .pin11"]}/>
    {/* KiCad net: unconnected-(U6-VSF6-PadD7) */}
    <KiCadNet name={"NC_U6_D7"} connectsTo={[".U6 > .pin12"]}/>
    {/* KiCad net: unconnected-(U6-VSF7-PadD8) */}
    <KiCadNet name={"NC_U6_D8"} connectsTo={[".U6 > .pin13"]}/>
    {/* KiCad net: unconnected-(U6-VSF8-PadD9) */}
    <KiCadNet name={"NC_U6_D9"} connectsTo={[".U6 > .pin14"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE2) */}
    <KiCadNet name={"NC_U6_E2"} connectsTo={[".U6 > .pin15"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE3) */}
    <KiCadNet name={"NC_U6_E3"} connectsTo={[".U6 > .pin16"]}/>
    {/* KiCad net: Net-(U6-VDDIM) */}
    <KiCadNet name={"Net__U6_VDDIM_"} connectsTo={[".U6 > .pin17", ".C53 > .pin2", ".C54 > .pin2"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE5) */}
    <KiCadNet name={"NC_U6_E5"} connectsTo={[".U6 > .pin18"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE6) */}
    <KiCadNet name={"NC_U6_E6"} connectsTo={[".U6 > .pin19"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE7) */}
    <KiCadNet name={"NC_U6_E7"} connectsTo={[".U6 > .pin20"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE8) */}
    <KiCadNet name={"NC_U6_E8"} connectsTo={[".U6 > .pin21"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadE9) */}
    <KiCadNet name={"NC_U6_E9"} connectsTo={[".U6 > .pin22"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadH4) */}
    <KiCadNet name={"NC_U6_H4"} connectsTo={[".U6 > .pin41"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadH5) */}
    <KiCadNet name={"NC_U6_H5"} connectsTo={[".U6 > .pin42"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadH6) */}
    <KiCadNet name={"NC_U6_H6"} connectsTo={[".U6 > .pin43"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadH7) */}
    <KiCadNet name={"NC_U6_H7"} connectsTo={[".U6 > .pin44"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ2) */}
    <KiCadNet name={"NC_U6_J2"} connectsTo={[".U6 > .pin47"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ3) */}
    <KiCadNet name={"NC_U6_J3"} connectsTo={[".U6 > .pin48"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ4) */}
    <KiCadNet name={"NC_U6_J4"} connectsTo={[".U6 > .pin49"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ6) */}
    <KiCadNet name={"NC_U6_J6"} connectsTo={[".U6 > .pin51"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ7) */}
    <KiCadNet name={"NC_U6_J7"} connectsTo={[".U6 > .pin52"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ8) */}
    <KiCadNet name={"NC_U6_J8"} connectsTo={[".U6 > .pin53"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadJ9) */}
    <KiCadNet name={"NC_U6_J9"} connectsTo={[".U6 > .pin54"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadK4) */}
    <KiCadNet name={"NC_U6_K4"} connectsTo={[".U6 > .pin57"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadK6) */}
    <KiCadNet name={"NC_U6_K6"} connectsTo={[".U6 > .pin59"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadK7) */}
    <KiCadNet name={"NC_U6_K7"} connectsTo={[".U6 > .pin60"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadL5) */}
    <KiCadNet name={"NC_U6_L5"} connectsTo={[".U6 > .pin66"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadL6) */}
    <KiCadNet name={"NC_U6_L6"} connectsTo={[".U6 > .pin67"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadM2) */}
    <KiCadNet name={"NC_U6_M2"} connectsTo={[".U6 > .pin71"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadM3) */}
    <KiCadNet name={"NC_U6_M3"} connectsTo={[".U6 > .pin72"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadM6) */}
    <KiCadNet name={"NC_U6_M6"} connectsTo={[".U6 > .pin75"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadM8) */}
    <KiCadNet name={"NC_U6_M8"} connectsTo={[".U6 > .pin77"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadM9) */}
    <KiCadNet name={"NC_U6_M9"} connectsTo={[".U6 > .pin78"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadN4) */}
    <KiCadNet name={"NC_U6_N4"} connectsTo={[".U6 > .pin81"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadN5) */}
    <KiCadNet name={"NC_U6_N5"} connectsTo={[".U6 > .pin82"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadN6) */}
    <KiCadNet name={"NC_U6_N6"} connectsTo={[".U6 > .pin83"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadN7) */}
    <KiCadNet name={"NC_U6_N7"} connectsTo={[".U6 > .pin84"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadP4) */}
    <KiCadNet name={"NC_U6_P4"} connectsTo={[".U6 > .pin89"]}/>
    {/* KiCad net: Net-(U6-CLK) */}
    <KiCadNet name={"Net__U6_CLK_"} connectsTo={[".U6 > .pin91", ".R14 > .pin1"]}/>
    {/* KiCad net: unconnected-(U6-RFU-PadP7) */}
    <KiCadNet name={"NC_U6_P7"} connectsTo={[".U6 > .pin92"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadT1) */}
    <KiCadNet name={"NC_U6_T1"} connectsTo={[".U6 > .pin95"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadT10) */}
    <KiCadNet name={"NC_U6_T10"} connectsTo={[".U6 > .pin96"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadU1) */}
    <KiCadNet name={"NC_U6_U1"} connectsTo={[".U6 > .pin97"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadU2) */}
    <KiCadNet name={"NC_U6_U2"} connectsTo={[".U6 > .pin98"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadU9) */}
    <KiCadNet name={"NC_U6_U9"} connectsTo={[".U6 > .pin99"]}/>
    {/* KiCad net: unconnected-(U6-NC-PadU10) */}
    <KiCadNet name={"NC_U6_U10"} connectsTo={[".U6 > .pin100"]}/>
    {/* KiCad net: Net-(D15-C) */}
    <KiCadNet name={"Net__D15_C_"} connectsTo={[".Q17 > .pin3", ".D15 > .pin1"]}/>
    {/* KiCad net: Net-(D15-A) */}
    <KiCadNet name={"Net__D15_A_"} connectsTo={[".D15 > .pin2", ".R130 > .pin2"]}/>
    {/* KiCad net: unconnected-(U14-EECS-Pad1) */}
    <KiCadNet name={"NC_U14_1"} connectsTo={[".U14 > .pin1"]}/>
    {/* KiCad net: VREGOUT */}
    <KiCadNet name={"VREGOUT"} connectsTo={[".U14 > .pin2", ".U14 > .pin31", ".U14 > .pin43", ".C257 > .pin2", ".C255 > .pin2", ".C259 > .pin2"]}/>
    {/* KiCad net: unconnected-(U14-OSCO-Pad4) */}
    <KiCadNet name={"NC_U14_4"} connectsTo={[".U14 > .pin4"]}/>
    {/* KiCad net: Net-(U14-V_{PHY}) */}
    <KiCadNet name={"Net__U14_V__PHY__"} connectsTo={[".U14 > .pin5", ".FB10 > .pin2", ".C252 > .pin2", ".C249 > .pin2"]}/>
    {/* KiCad net: Net-(U14-REF) */}
    <KiCadNet name={"Net__U14_REF_"} connectsTo={[".U14 > .pin6", ".R149 > .pin1"]}/>
    {/* KiCad net: Net-(U14-V_{PLL}) */}
    <KiCadNet name={"Net__U14_V__PLL__"} connectsTo={[".U14 > .pin9", ".FB9 > .pin2", ".C250 > .pin2", ".C227 > .pin2"]}/>
    {/* KiCad net: Net-(U14-~{RESET}) */}
    <KiCadNet name={"Net__U14___RESET__"} connectsTo={[".U14 > .pin11", ".R148 > .pin2", ".R147 > .pin1", ".R146 > .pin2"]}/>
    {/* KiCad net: unconnected-(U14-ADBUS4-Pad17) */}
    <KiCadNet name={"NC_U14_17"} connectsTo={[".U14 > .pin17"]}/>
    {/* KiCad net: unconnected-(U14-ADBUS5-Pad18) */}
    <KiCadNet name={"NC_U14_18"} connectsTo={[".U14 > .pin18"]}/>
    {/* KiCad net: unconnected-(U14-ADBUS6-Pad19) */}
    <KiCadNet name={"NC_U14_19"} connectsTo={[".U14 > .pin19"]}/>
    {/* KiCad net: unconnected-(U14-ADBUS7-Pad20) */}
    <KiCadNet name={"NC_U14_20"} connectsTo={[".U14 > .pin20"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS0-Pad22) */}
    <KiCadNet name={"NC_U14_22"} connectsTo={[".U14 > .pin22"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS1-Pad23) */}
    <KiCadNet name={"NC_U14_23"} connectsTo={[".U14 > .pin23"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS2-Pad24) */}
    <KiCadNet name={"NC_U14_24"} connectsTo={[".U14 > .pin24"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS3-Pad25) */}
    <KiCadNet name={"NC_U14_25"} connectsTo={[".U14 > .pin25"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS4-Pad26) */}
    <KiCadNet name={"NC_U14_26"} connectsTo={[".U14 > .pin26"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS5-Pad27) */}
    <KiCadNet name={"NC_U14_27"} connectsTo={[".U14 > .pin27"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS6-Pad28) */}
    <KiCadNet name={"NC_U14_28"} connectsTo={[".U14 > .pin28"]}/>
    {/* KiCad net: unconnected-(U14-BDBUS7-Pad29) */}
    <KiCadNet name={"NC_U14_29"} connectsTo={[".U14 > .pin29"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS0-Pad32) */}
    <KiCadNet name={"NC_U14_32"} connectsTo={[".U14 > .pin32"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS1-Pad33) */}
    <KiCadNet name={"NC_U14_33"} connectsTo={[".U14 > .pin33"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS2-Pad34) */}
    <KiCadNet name={"NC_U14_34"} connectsTo={[".U14 > .pin34"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS3-Pad35) */}
    <KiCadNet name={"NC_U14_35"} connectsTo={[".U14 > .pin35"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS4-Pad37) */}
    <KiCadNet name={"NC_U14_37"} connectsTo={[".U14 > .pin37"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS5-Pad38) */}
    <KiCadNet name={"NC_U14_38"} connectsTo={[".U14 > .pin38"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS6-Pad39) */}
    <KiCadNet name={"NC_U14_39"} connectsTo={[".U14 > .pin39"]}/>
    {/* KiCad net: unconnected-(U14-CDBUS7-Pad40) */}
    <KiCadNet name={"NC_U14_40"} connectsTo={[".U14 > .pin40"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS0-Pad42) */}
    <KiCadNet name={"NC_U14_42"} connectsTo={[".U14 > .pin42"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS1-Pad46) */}
    <KiCadNet name={"NC_U14_46"} connectsTo={[".U14 > .pin46"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS2-Pad47) */}
    <KiCadNet name={"NC_U14_47"} connectsTo={[".U14 > .pin47"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS3-Pad48) */}
    <KiCadNet name={"NC_U14_48"} connectsTo={[".U14 > .pin48"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS4-Pad49) */}
    <KiCadNet name={"NC_U14_49"} connectsTo={[".U14 > .pin49"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS5-Pad51) */}
    <KiCadNet name={"NC_U14_51"} connectsTo={[".U14 > .pin51"]}/>
    {/* KiCad net: unconnected-(U14-DDBUS6-Pad52) */}
    <KiCadNet name={"NC_U14_52"} connectsTo={[".U14 > .pin52"]}/>
    {/* KiCad net: Net-(U14-DDBUS7) */}
    <KiCadNet name={"Net__U14_DDBUS7_"} connectsTo={[".U14 > .pin53", ".R150 > .pin2", ".R151 > .pin1"]}/>
    {/* KiCad net: unconnected-(U14-EEDATA-Pad55) */}
    <KiCadNet name={"NC_U14_55"} connectsTo={[".U14 > .pin55"]}/>
    {/* KiCad net: unconnected-(U14-EECLK-Pad56) */}
    <KiCadNet name={"NC_U14_56"} connectsTo={[".U14 > .pin56"]}/>
    {/* KiCad net: unconnected-(J9-Pad12) */}
    <KiCadNet name={"NC_J9_12"} connectsTo={[".J9 > .pin12"]}/>
    {/* KiCad net: unconnected-(J9-Pad14) */}
    <KiCadNet name={"NC_J9_14"} connectsTo={[".J9 > .pin14"]}/>
    {/* KiCad net: unconnected-(H2-Pad1) */}
    <KiCadNet name={"NC_H2_1"} connectsTo={[".H2 > .pin1"]}/>
    {/* KiCad net: unconnected-(U13-SS-Pad2) */}
    <KiCadNet name={"NC_U13_2"} connectsTo={[".U13 > .pin2"]}/>
    {/* KiCad net: unconnected-(H1-Pad1) */}
    <KiCadNet name={"NC_H1_1"} connectsTo={[".H1 > .pin1"]}/>
    {/* KiCad net: unconnected-(D2-Pad12) */}
    <KiCadNet name={"unconnected__D2_Pad12_"} connectsTo={[".D2 > .pin3", ".D2 > .pin12"]}/>
    {/* KiCad net: unconnected-(D2-Pad11) */}
    <KiCadNet name={"unconnected__D2_Pad11_"} connectsTo={[".D2 > .pin4", ".D2 > .pin11"]}/>
    {/* KiCad net: Net-(Q11-D) */}
    <KiCadNet name={"Net__Q11_D_"} connectsTo={[".Q11 > .pin3", ".R108 > .pin1"]}/>
    {/* KiCad net: Net-(Q12-D) */}
    <KiCadNet name={"Net__Q12_D_"} connectsTo={[".Q12 > .pin3", ".R109 > .pin1"]}/>
    {/* KiCad net: Net-(Q13-D) */}
    <KiCadNet name={"Net__Q13_D_"} connectsTo={[".Q13 > .pin3", ".R110 > .pin1"]}/>
    {/* KiCad net: Net-(Q14-D) */}
    <KiCadNet name={"Net__Q14_D_"} connectsTo={[".Q14 > .pin3", ".R111 > .pin1"]}/>
    {/* KiCad net: Net-(Q15-D) */}
    <KiCadNet name={"Net__Q15_D_"} connectsTo={[".Q15 > .pin3", ".R112 > .pin1"]}/>
    {/* KiCad net: Net-(Q10-D) */}
    <KiCadNet name={"Net__Q10_D_"} connectsTo={[".R107 > .pin1", ".Q10 > .pin3"]}/>
    {/* KiCad net: Net-(Q16-D) */}
    <KiCadNet name={"Net__Q16_D_"} connectsTo={[".R113 > .pin1", ".Q16 > .pin3"]}/>
    {/* KiCad net: Net-(C94-Pad1) */}
    <KiCadNet name={"Net__C94_Pad1_"} connectsTo={[".C94 > .pin1", ".R82 > .pin2", ".R83 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
