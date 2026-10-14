import { KiCadSchematic, KiCadNet } from './schematic'
// HackRF Pro
// Source: https://github.com/greatscottgadgets/hackrf-pro
// Commit: 359b98f2451395408bc25dae64efa9fc518e93d0; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_D6, Footprint_D4, Footprint_D8, Footprint_D5, Footprint_D2, Footprint_D7, Footprint_C1, Footprint_C3, Footprint_C5, Footprint_C7, Footprint_C8, Footprint_C9, Footprint_C10, Footprint_C11, Footprint_C12, Footprint_C13, Footprint_C14, Footprint_C15, Footprint_C16, Footprint_C17, Footprint_C18, Footprint_C19, Footprint_C20, Footprint_C21, Footprint_C22, Footprint_C23, Footprint_C24, Footprint_C25, Footprint_C26, Footprint_C27, Footprint_C28, Footprint_C29, Footprint_C30, Footprint_C31, Footprint_C34, Footprint_C35, Footprint_C36, Footprint_C37, Footprint_C41, Footprint_C42, Footprint_C46, Footprint_C49, Footprint_C50, Footprint_C53, Footprint_C55, Footprint_C57, Footprint_C58, Footprint_C59, Footprint_C60, Footprint_C62, Footprint_C63, Footprint_C64, Footprint_C65, Footprint_C66, Footprint_C67, Footprint_C70, Footprint_C71, Footprint_C73, Footprint_C75, Footprint_C77, Footprint_C79, Footprint_C82, Footprint_C83, Footprint_C84, Footprint_C85, Footprint_C86, Footprint_C87, Footprint_C88, Footprint_C89, Footprint_C90, Footprint_C92, Footprint_C93, Footprint_C94, Footprint_C97, Footprint_C98, Footprint_C99, Footprint_C100, Footprint_C102, Footprint_C104, Footprint_C105, Footprint_C106, Footprint_C111, Footprint_C113, Footprint_C115, Footprint_C116, Footprint_C118, Footprint_C119, Footprint_C120, Footprint_C121, Footprint_C122, Footprint_C123, Footprint_C125, Footprint_C126, Footprint_C127, Footprint_C128, Footprint_C129, Footprint_C130, Footprint_C131, Footprint_C132, Footprint_C133, Footprint_C134, Footprint_C135, Footprint_C136, Footprint_C137, Footprint_C138, Footprint_C143, Footprint_C144, Footprint_C145, Footprint_C146, Footprint_C157, Footprint_C158, Footprint_C160, Footprint_C161, Footprint_C164, Footprint_C171, Footprint_D1, Footprint_D3, Footprint_D9, Footprint_TP6, Footprint_L1, Footprint_L2, Footprint_L3, Footprint_L7, Footprint_L9, Footprint_L10, Footprint_L11, Footprint_L13, Footprint_P2, Footprint_P3, Footprint_P1, Footprint_P20, Footprint_P22, Footprint_P26, Footprint_P28, Footprint_Q3, Footprint_Q5, Footprint_R1, Footprint_R2, Footprint_R3, Footprint_R4, Footprint_R5, Footprint_R7, Footprint_R8, Footprint_R9, Footprint_R10, Footprint_R11, Footprint_R13, Footprint_R14, Footprint_R15, Footprint_R16, Footprint_R17, Footprint_R18, Footprint_R19, Footprint_R25, Footprint_R26, Footprint_R27, Footprint_R28, Footprint_R30, Footprint_R31, Footprint_R33, Footprint_R34, Footprint_R36, Footprint_R37, Footprint_R46, Footprint_R47, Footprint_R48, Footprint_R49, Footprint_R51, Footprint_R52, Footprint_R54, Footprint_R55, Footprint_R56, Footprint_R59, Footprint_R62, Footprint_R63, Footprint_R64, Footprint_R65, Footprint_R66, Footprint_R67, Footprint_R68, Footprint_R69, Footprint_R72, Footprint_R73, Footprint_R74, Footprint_R75, Footprint_R76, Footprint_R85, Footprint_R93, Footprint_R104, Footprint_R105, Footprint_SW1, Footprint_SW2, Footprint_T1, Footprint_T2, Footprint_T3, Footprint_T4, Footprint_U1, Footprint_U2, Footprint_U4, Footprint_U5, Footprint_U6, Footprint_U7, Footprint_U9, Footprint_U10, Footprint_U11, Footprint_U12, Footprint_U14, Footprint_U15, Footprint_U17, Footprint_U18, Footprint_U19, Footprint_U20, Footprint_U21, Footprint_U23, Footprint_X2, Footprint_X3, Footprint_R122, Footprint_R133, Footprint_L32, Footprint_R83, Footprint_C199, Footprint_R102, Footprint_D12, Footprint_C124, Footprint_R94, Footprint_C203, Footprint_Q1, Footprint_R50, Footprint_C114, Footprint_FB8, Footprint_U31, Footprint_R136, Footprint_U39, Footprint_U16, Footprint_C195, Footprint_R128, Footprint_R157, Footprint_C159, Footprint_R61, Footprint_C168, Footprint_RN4, Footprint_RN6, Footprint_FL1, Footprint_FB5, Footprint_R70, Footprint_C178, Footprint_R96, Footprint_H3, Footprint_U40, Footprint_U24, Footprint_C197, Footprint_C48, Footprint_U37, Footprint_R20, Footprint_L29, Footprint_R6, Footprint_R87, Footprint_C179, Footprint_D10, Footprint_C184, Footprint_U38, Footprint_R120, Footprint_C74, Footprint_C210, Footprint_C56, Footprint_C177, Footprint_RN2, Footprint_RN1, Footprint_U28, Footprint_C170, Footprint_R22, Footprint_R116, Footprint_R152, Footprint_FB6, Footprint_C153, Footprint_C80, Footprint_U3, Footprint_R89, Footprint_FID4, Footprint_H2, Footprint_H7, Footprint_C52, Footprint_Q9, Footprint_L18, Footprint_C200, Footprint_C185, Footprint_R29, Footprint_C76, Footprint_C72, Footprint_L16, Footprint_R110, Footprint_C139, Footprint_C110, Footprint_R106, Footprint_L28, Footprint_C109, Footprint_R151, Footprint_R21, Footprint_L14, Footprint_RN5, Footprint_L31, Footprint_C196, Footprint_Q6, Footprint_L4, Footprint_C166, Footprint_C142, Footprint_L17, Footprint_L33, Footprint_C68, Footprint_C190, Footprint_JP1, Footprint_R153, Footprint_U22, Footprint_C186, Footprint_R100, Footprint_R91, Footprint_R23, Footprint_R129, Footprint_C188, Footprint_C96, Footprint_U13, Footprint_FB3, Footprint_RN3, Footprint_FL3, Footprint_R111, Footprint_J3, Footprint_C167, Footprint_C212, Footprint_R71, Footprint_C108, Footprint_R92, Footprint_C148, Footprint_D18, Footprint_R78, Footprint_C69, Footprint_R86, Footprint_D16, Footprint_R121, Footprint_C33, Footprint_R24, Footprint_R32, Footprint_C39, Footprint_C141, Footprint_FID1, Footprint_C204, Footprint_C91, Footprint_R149, Footprint_C202, Footprint_FB2, Footprint_R123, Footprint_R135, Footprint_U34, Footprint_C189, Footprint_R107, Footprint_C101, Footprint_C207, Footprint_J1, Footprint_U35, Footprint_L19, Footprint_C117, Footprint_C187, Footprint_R137, Footprint_C155, Footprint_R97, Footprint_R142, Footprint_D13, Footprint_X1, Footprint_H5, Footprint_C61, Footprint_D17, Footprint_R140, Footprint_C181, Footprint_C51, Footprint_L6, Footprint_C107, Footprint_R60, Footprint_R35, Footprint_C176, Footprint_C81, Footprint_L21, Footprint_C180, Footprint_R44, Footprint_R154, Footprint_R146, Footprint_L27, Footprint_D15, Footprint_R53, Footprint_C6, Footprint_R150, Footprint_U27, Footprint_C174, Footprint_R147, Footprint_C156, Footprint_C95, Footprint_C152, Footprint_R156, Footprint_FB1, Footprint_C201, Footprint_R138, Footprint_R45, Footprint_L12, Footprint_C193, Footprint_R126, Footprint_C149, Footprint_R113, Footprint_C4, Footprint_R112, Footprint_H8, Footprint_C206, Footprint_L22, Footprint_C45, Footprint_R38, Footprint_R108, Footprint_R127, Footprint_C205, Footprint_U8, Footprint_R58, Footprint_R80, Footprint_C198, Footprint_R109, Footprint_Q4, Footprint_R131, Footprint_C32, Footprint_R125, Footprint_R88, Footprint_R117, Footprint_R132, Footprint_L23, Footprint_C154, Footprint_R130, Footprint_C47, Footprint_C103, Footprint_FB4, Footprint_R141, Footprint_H4, Footprint_R114, Footprint_H6, Footprint_U33, Footprint_R134, Footprint_C140, Footprint_R77, Footprint_Q10, Footprint_C208, Footprint_R43, Footprint_R57, Footprint_U36, Footprint_C151, Footprint_C192, Footprint_R119, Footprint_R98, Footprint_R145, Footprint_R143, Footprint_U30, Footprint_C191, Footprint_C78, Footprint_R99, Footprint_L34, Footprint_C150, Footprint_L24, Footprint_C182, Footprint_C211, Footprint_C162, Footprint_R90, Footprint_Q7, Footprint_R139, Footprint_C172, Footprint_L26, Footprint_C43, Footprint_C147, Footprint_D14, Footprint_R148, Footprint_R41, Footprint_C175, Footprint_L15, Footprint_R79, Footprint_C2, Footprint_R155, Footprint_C169, Footprint_R12, Footprint_R42, Footprint_R81, Footprint_RN7, Footprint_H1, Footprint_L30, Footprint_R115, Footprint_RN8, Footprint_C173, Footprint_C112, Footprint_FL2, Footprint_C44, Footprint_C54, Footprint_C183, Footprint_C163, Footprint_L8, Footprint_R95, Footprint_R103, Footprint_R101, Footprint_U32, Footprint_R144, Footprint_FID3, Footprint_D11, Footprint_R82, Footprint_R118, Footprint_U26, Footprint_R124, Footprint_C209, Footprint_FID2, Footprint_FB7, Footprint_C165, Footprint_C194, Footprint_L5, Footprint_U25, Footprint_R84, Footprint_R40, Footprint_R39, Footprint_C40, Footprint_TP54, Footprint_TP16, Footprint_TP21, Footprint_TP36, Footprint_TP2, Footprint_TP1, Footprint_TP60, Footprint_TP58, Footprint_TP12, Footprint_TP65, Footprint_TP10, Footprint_TP22, Footprint_TP57, Footprint_TP51, Footprint_TP38, Footprint_TP19, Footprint_TP59, Footprint_TP31, Footprint_TP45, Footprint_TP23, Footprint_TP4, Footprint_TP49, Footprint_TP13, Footprint_TP41, Footprint_TP7, Footprint_TP3, Footprint_TP18, Footprint_TP34, Footprint_TP32, Footprint_TP30, Footprint_TP20, Footprint_TP9, Footprint_TP61, Footprint_TP24, Footprint_TP17, Footprint_TP39, Footprint_TP8, Footprint_TP48, Footprint_TP27, Footprint_TP66, Footprint_TP15, Footprint_TP56, Footprint_TP33, Footprint_TP37, Footprint_TP50, Footprint_TP11, Footprint_TP42, Footprint_TP14, Footprint_TP52, Footprint_TP63, Footprint_TP35, Footprint_TP46, Footprint_TP43, Footprint_TP53, Footprint_TP26, Footprint_TP28, Footprint_TP47, Footprint_TP62, Footprint_TP64, Footprint_TP55, Footprint_TP40, Footprint_TP29, Footprint_TP5, Footprint_TP44, Footprint_TP25 } from './footprints';
export default function Board({ routingDisabled = false }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={120.00000000002082} height={75.00000000000242} thickness={1.5848} layers={6} outline={[{ "x": 58.49999999999258, "y": -22.199999999999022 }, { "x": 58.49999999999258, "y": -28.799999999999045 }, { "x": 58.50180687864983, "y": -28.873601497105028 }, { "x": 58.50722302862977, "y": -28.947025679130547 }, { "x": 58.51623540199975, "y": -29.020095661428087 }, { "x": 58.528822287241326, "y": -29.092635412645194 }, { "x": 58.54495336155483, "y": -29.1644701787979 }, { "x": 58.56458976390954, "y": -29.235426904266944 }, { "x": 58.587684188662905, "y": -29.305334648702257 }, { "x": 58.61418099952354, "y": -29.374024998831942 }, { "x": 58.6440163635836, "y": -29.441332474182957 }, { "x": 58.67711840509705, "y": -29.507094925736737 }, { "x": 58.71340737863423, "y": -29.571153926558964 }, { "x": 58.7527958611947, "y": -29.633355153462503 }, { "x": 58.795188962816354, "y": -29.693548758784175 }, { "x": 58.840484555172594, "y": -29.751589731379596 }, { "x": 58.88857351760768, "y": -29.807338245966406 }, { "x": 58.93934000001704, "y": -29.86065999997456 }, { "x": 59.560659999992595, "y": -30.43933999999902 }, { "x": 59.61142648240133, "y": -30.49266175400936 }, { "x": 59.65951544483579, "y": -30.548410268598246 }, { "x": 59.704811037191405, "y": -30.6064512411956 }, { "x": 59.747204138812435, "y": -30.66664484651912 }, { "x": 59.786592621372336, "y": -30.728846073424393 }, { "x": 59.82288159490892, "y": -30.792905074248267 }, { "x": 59.855983636421826, "y": -30.85866752580364 }, { "x": 59.885819000481376, "y": -30.925975001156132 }, { "x": 59.912315811341585, "y": -30.99466535128721 }, { "x": 59.935410236094526, "y": -31.064573095723887 }, { "x": 59.95504663844889, "y": -31.13552982119421 }, { "x": 59.97117771276211, "y": -31.207364587348167 }, { "x": 59.98376459800346, "y": -31.279904338566496 }, { "x": 59.99277697137333, "y": -31.3529743208652 }, { "x": 59.99819312135318, "y": -31.426398502891914 }, { "x": 60.0000000000104, "y": -31.499999999999034 }, { "x": 59.99999999999258, "y": -33.499999999999034 }, { "x": 59.99270219237127, "y": -33.7415139819245 }, { "x": 59.970835449840024, "y": -33.98214670420606 }, { "x": 59.934479561749356, "y": -34.22102012437395 }, { "x": 59.88376718675627, "y": -34.45726261945924 }, { "x": 59.81888336876739, "y": -34.69001216645074 }, { "x": 59.74006486173391, "y": -34.91841948772259 }, { "x": 59.647599265762466, "y": -35.14165114995538 }, { "x": 59.541823977693724, "y": -35.35889260524314 }, { "x": 59.423124959978225, "y": -35.56935116328947 }, { "x": 59.29193533234172, "y": -35.77225888384777 }, { "x": 59.148733791378646, "y": -35.96687537885106 }, { "x": 58.994042863840576, "y": -36.15249051400704 }, { "x": 58.82842699999341, "y": -36.32842700000052 }, { "x": 58.65249051400005, "y": -36.49404286384777 }, { "x": 58.46687537884415, "y": -36.64873379138592 }, { "x": 58.27225888384092, "y": -36.79193533234911 }, { "x": 58.069351163282704, "y": -36.92312495998573 }, { "x": 57.858892605236434, "y": -37.04182397770131 }, { "x": 57.64165114994873, "y": -37.1475992657702 }, { "x": 57.418419487715994, "y": -37.24006486174176 }, { "x": 57.190012166444205, "y": -37.318883368775346 }, { "x": 56.957262619452734, "y": -37.38376718676437 }, { "x": 56.72102012436747, "y": -37.4344795617576 }, { "x": 56.48214670419958, "y": -37.47083544984838 }, { "x": 56.24151398191805, "y": -37.49270219237974 }, { "x": 55.99999999999258, "y": -37.500000000001194 }, { "x": -56.00000000000742, "y": -37.499999999999034 }, { "x": -56.24151398193278, "y": -37.49270219237761 }, { "x": -56.48214670421425, "y": -37.47083544984628 }, { "x": -56.721020124382036, "y": -37.43447956175552 }, { "x": -56.95726261946723, "y": -37.383767186762356 }, { "x": -57.19001216645862, "y": -37.318883368773385 }, { "x": -57.418419487730354, "y": -37.240064861739825 }, { "x": -57.64165114996302, "y": -37.14759926576832 }, { "x": -57.858892605250645, "y": -37.04182397769952 }, { "x": -58.069351163296865, "y": -36.923124959983994 }, { "x": -58.27225888385504, "y": -36.79193533234749 }, { "x": -58.466875378858205, "y": -36.64873379138439 }, { "x": -58.65249051401408, "y": -36.49404286384632 }, { "x": -58.82842700000742, "y": -36.32842699999915 }, { "x": -58.99404286385456, "y": -36.15249051400582 }, { "x": -59.14873379139261, "y": -35.96687537884992 }, { "x": -59.291935332355685, "y": -35.77225888384672 }, { "x": -59.42312495999219, "y": -35.56935116328853 }, { "x": -59.54182397770769, "y": -35.35889260524232 }, { "x": -59.64759926577647, "y": -35.14165114995467 }, { "x": -59.740064861747946, "y": -34.91841948772199 }, { "x": -59.81888336878146, "y": -34.69001216645026 }, { "x": -59.883767186770406, "y": -34.457262619458845 }, { "x": -59.934479561763546, "y": -34.221020124373666 }, { "x": -59.97083544985428, "y": -33.98214670420586 }, { "x": -59.99270219238559, "y": -33.741513981924385 }, { "x": -60.00000000000699, "y": -33.499999999999034 }, { "x": -60.00000000000742, "y": -29.499999999999034 }, { "x": -59.99819312135171, "y": -29.42639850289217 }, { "x": -59.99277697137336, "y": -29.352974320865655 }, { "x": -59.98376459800499, "y": -29.279904338567064 }, { "x": -59.9711777127651, "y": -29.20736458734882 }, { "x": -59.95504663845331, "y": -29.135529821194837 }, { "x": -59.93541023610036, "y": -29.064573095724455 }, { "x": -59.91231581134878, "y": -28.994665351287637 }, { "x": -59.885819000489924, "y": -28.92597500115636 }, { "x": -59.85598363643168, "y": -28.85866752580361 }, { "x": -59.822881594920034, "y": -28.792905074247955 }, { "x": -59.78659262138467, "y": -28.72884607342374 }, { "x": -59.74720413882597, "y": -28.66664484651804 }, { "x": -59.70481103720609, "y": -28.606451241194094 }, { "x": -59.65951544485158, "y": -28.548410268596285 }, { "x": -59.61142648241815, "y": -28.49266175400686 }, { "x": -59.56066000001044, "y": -28.439339999996008 }, { "x": -58.93934000000742, "y": -27.86065999999903 }, { "x": -58.88857351760024, "y": -27.807338245988092 }, { "x": -58.84048455516732, "y": -27.751589731398667 }, { "x": -58.79518896281329, "y": -27.69354875880086 }, { "x": -58.75279586119387, "y": -27.63335515347697 }, { "x": -58.71340737863557, "y": -27.571153926571412 }, { "x": -58.677118405100586, "y": -27.50709492574734 }, { "x": -58.64401636358927, "y": -27.44133247419188 }, { "x": -58.61418099953132, "y": -27.37402499883936 }, { "x": -58.587684188672704, "y": -27.30533464870831 }, { "x": -58.564589763921326, "y": -27.235426904271776 }, { "x": -58.544953361568524, "y": -27.16447017880165 }, { "x": -58.52882228725684, "y": -27.09263541264798 }, { "x": -58.51623540201699, "y": -27.020095661430048 }, { "x": -58.5072230286486, "y": -26.94702567913177 }, { "x": -58.501806878670195, "y": -26.873601497105597 }, { "x": -58.500000000014374, "y": -26.799999999999045 }, { "x": -58.50000000000742, "y": -20.199999999999022 }, { "x": -58.501806878664006, "y": -20.126398502892414 }, { "x": -58.50722302864316, "y": -20.052974320866213 }, { "x": -58.51623540201225, "y": -19.979904338567934 }, { "x": -58.52882228725278, "y": -19.90736458735003 }, { "x": -58.54495336156512, "y": -19.835529821196417 }, { "x": -58.56458976391855, "y": -19.764573095726377 }, { "x": -58.58768418867051, "y": -19.694665351289956 }, { "x": -58.61418099952968, "y": -19.62597500115902 }, { "x": -58.64401636358815, "y": -19.55866752580664 }, { "x": -58.677118405099954, "y": -19.492905074251325 }, { "x": -58.713407378635395, "y": -19.428846073427422 }, { "x": -58.7527958611941, "y": -19.366644846522007 }, { "x": -58.79518896281392, "y": -19.306451241198317 }, { "x": -58.84048455516831, "y": -19.24841026860068 }, { "x": -58.88857351760155, "y": -19.192661754011425 }, { "x": -58.93934000000902, "y": -19.13934000000063 }, { "x": -59.56066000000742, "y": -18.560659999999046 }, { "x": -59.61142648241536, "y": -18.50733824598845 }, { "x": -59.65951544484904, "y": -18.451589731399338 }, { "x": -59.70481103720383, "y": -18.393548758801757 }, { "x": -59.747204138824, "y": -18.333355153478067 }, { "x": -59.78659262138302, "y": -18.27115392657265 }, { "x": -59.82288159491872, "y": -18.207094925748663 }, { "x": -59.85598363643072, "y": -18.141332474193234 }, { "x": -59.885819000489334, "y": -18.074024998840684 }, { "x": -59.912315811348584, "y": -18.005334648709606 }, { "x": -59.93541023610057, "y": -17.93542690427296 }, { "x": -59.95504663845395, "y": -17.86447017880272 }, { "x": -59.97117771276618, "y": -17.792635412648906 }, { "x": -59.98376459800653, "y": -17.720095661430776 }, { "x": -59.99277697137538, "y": -17.64702567913227 }, { "x": -59.99819312135421, "y": -17.57360149710584 }, { "x": -60.00000000001042, "y": -17.499999999999034 }, { "x": -60.00000000000742, "y": 33.500000000000966 }, { "x": -59.992702192385984, "y": 33.74151398192633 }, { "x": -59.97083544985464, "y": 33.98214670420781 }, { "x": -59.93447956176387, "y": 34.2210201243756 }, { "x": -59.8837671867707, "y": 34.45726261946079 }, { "x": -59.81888336878172, "y": 34.69001216645218 }, { "x": -59.74006486174818, "y": 34.91841948772391 }, { "x": -59.64759926577668, "y": 35.14165114995657 }, { "x": -59.54182397770788, "y": 35.35889260524421 }, { "x": -59.42312495999235, "y": 35.569351163290435 }, { "x": -59.29193533235583, "y": 35.77225888384861 }, { "x": -59.14873379139273, "y": 35.96687537885178 }, { "x": -58.994042863854666, "y": 36.15249051400767 }, { "x": -58.82842700000751, "y": 36.328427000001014 }, { "x": -58.65249051401416, "y": 36.49404286384815 }, { "x": -58.46687537885827, "y": 36.648733791386206 }, { "x": -58.27225888385509, "y": 36.7919353323493 }, { "x": -58.06935116329691, "y": 36.92312495998581 }, { "x": -57.85889260525068, "y": 37.04182397770133 }, { "x": -57.641651149963046, "y": 37.147599265770125 }, { "x": -57.418419487730375, "y": 37.240064861741615 }, { "x": -57.19001216645864, "y": 37.31888336877515 }, { "x": -56.957262619467244, "y": 37.38376718676412 }, { "x": -56.72102012438205, "y": 37.434479561757286 }, { "x": -56.48214670421426, "y": 37.47083544984804 }, { "x": -56.24151398193278, "y": 37.49270219237937 }, { "x": -56.00000000000742, "y": 37.500000000000796 }, { "x": -52.00000000000742, "y": 37.500000000000966 }, { "x": -51.80396567273648, "y": 37.490369588685994 }, { "x": -51.60981925239963, "y": 37.461570808137964 }, { "x": -51.4194304787101, "y": 37.4138810068838 }, { "x": -51.23463290312097, "y": 37.3477594646525 }, { "x": -51.057206230688806, "y": 37.26384296925191 }, { "x": -50.88885918050849, "y": 37.16293968394241 }, { "x": -50.731213029782964, "y": 37.04602136436806 }, { "x": -50.58578600000783, "y": 36.91421400000077 }, { "x": -50.45397863564061, "y": 36.76878697022559 }, { "x": -50.337060316066314, "y": 36.61114081950002 }, { "x": -50.23615703075687, "y": 36.442793769319664 }, { "x": -50.152240535356356, "y": 36.26536709688747 }, { "x": -50.086118993125126, "y": 36.080569521298315 }, { "x": -50.03842919187103, "y": 35.89018074760877 }, { "x": -50.00963041132307, "y": 35.69603432727192 }, { "x": -50.00000000000817, "y": 35.500000000000966 }, { "x": -50.00000000000742, "y": 16.000000000000966 }, { "x": -49.99518479434997, "y": 15.901982836365491 }, { "x": -49.98078540407599, "y": 15.804909626197059 }, { "x": -49.956940503448934, "y": 15.709715239352292 }, { "x": -49.92387973233329, "y": 15.617316451557713 }, { "x": -49.88192148463301, "y": 15.528603115341625 }, { "x": -49.83146984197826, "y": 15.44442959025146 }, { "x": -49.773010682191085, "y": 15.365606514888697 }, { "x": -49.70710700000744, "y": 15.292893000001143 }, { "x": -49.63439348511983, "y": 15.22698931781754 }, { "x": -49.55557040975704, "y": 15.168530158030407 }, { "x": -49.47139688466683, "y": 15.118078515375714 }, { "x": -49.382683548450714, "y": 15.076120267675492 }, { "x": -49.29028476065612, "y": 15.04305949655992 }, { "x": -49.19509037381134, "y": 15.019214595932922 }, { "x": -49.09801716364289, "y": 15.004815205659 }, { "x": -49.00000000000742, "y": 15.00000000000162 }, { "x": 36.99999999999258, "y": 15.000000000000966 }, { "x": 37.0980171636281, "y": 15.004815205658318 }, { "x": 37.195090373796575, "y": 15.019214595932226 }, { "x": 37.29028476064141, "y": 15.043059496559223 }, { "x": 37.382683548436034, "y": 15.07612026767481 }, { "x": 37.471396884652194, "y": 15.11807851537506 }, { "x": 37.555570409742415, "y": 15.168530158029782 }, { "x": 37.63439348510522, "y": 15.226989317816972 }, { "x": 37.707106999992845, "y": 15.292893000000632 }, { "x": 37.773010682176476, "y": 15.365606514888256 }, { "x": 37.83146984196364, "y": 15.444429590251076 }, { "x": 37.881921484618346, "y": 15.528603115341312 }, { "x": 37.92387973231857, "y": 15.617316451557471 }, { "x": 37.95694050343411, "y": 15.709715239352121 }, { "x": 37.980785404061095, "y": 15.80490962619696 }, { "x": 37.99518479433496, "y": 15.901982836365448 }, { "x": 37.99999999999227, "y": 16.000000000000966 }, { "x": 37.99999999999258, "y": 35.500000000000966 }, { "x": 38.00963041130754, "y": 35.696034327271946 }, { "x": 38.038429191855556, "y": 35.89018074760884 }, { "x": 38.08611899310972, "y": 36.080569521298415 }, { "x": 38.15224053534101, "y": 36.26536709688759 }, { "x": 38.236157030741566, "y": 36.44279376931979 }, { "x": 38.337060316051065, "y": 36.611140819500164 }, { "x": 38.45397863562542, "y": 36.76878697022575 }, { "x": 38.58578599999268, "y": 36.91421400000094 }, { "x": 38.73121302976787, "y": 37.04602136436823 }, { "x": 38.88885918049343, "y": 37.1629396839426 }, { "x": 39.057206230673785, "y": 37.26384296925211 }, { "x": 39.23463290310599, "y": 37.3477594646527 }, { "x": 39.41943047869515, "y": 37.41388100688401 }, { "x": 39.60981925238471, "y": 37.46157080813819 }, { "x": 39.8039656727216, "y": 37.490369588686235 }, { "x": 39.99999999999258, "y": 37.50000000000122 }, { "x": 55.99999999999258, "y": 37.500000000000966 }, { "x": 56.24151398191793, "y": 37.492702192379554 }, { "x": 56.48214670419941, "y": 37.47083544984824 }, { "x": 56.721020124367186, "y": 37.434479561757485 }, { "x": 56.95726261945239, "y": 37.38376718676433 }, { "x": 57.19001216644378, "y": 37.31888336877536 }, { "x": 57.41841948771551, "y": 37.24006486174183 }, { "x": 57.64165114994816, "y": 37.14759926577034 }, { "x": 57.85889260523578, "y": 37.04182397770154 }, { "x": 58.06935116328199, "y": 36.92312495998601 }, { "x": 58.27225888384018, "y": 36.791935332349496 }, { "x": 58.466875378843326, "y": 36.64873379138639 }, { "x": 58.6524905139992, "y": 36.49404286384832 }, { "x": 58.82842699999253, "y": 36.328427000001156 }, { "x": 58.99404286383967, "y": 36.152490514007795 }, { "x": 59.14873379137768, "y": 35.96687537885188 }, { "x": 59.291935332340756, "y": 35.77225888384869 }, { "x": 59.42312495997723, "y": 35.569351163290506 }, { "x": 59.5418239776927, "y": 35.358892605244264 }, { "x": 59.64759926576147, "y": 35.141651149956616 }, { "x": 59.74006486173292, "y": 34.91841948772394 }, { "x": 59.81888336876639, "y": 34.69001216645219 }, { "x": 59.88376718675531, "y": 34.45726261946079 }, { "x": 59.93447956174842, "y": 34.2210201243756 }, { "x": 59.970835449839115, "y": 33.98214670420781 }, { "x": 59.99270219237039, "y": 33.74151398192633 }, { "x": 59.99999999999176, "y": 33.500000000000966 }, { "x": 59.99999999999258, "y": -1.4999999999990337 }, { "x": 59.998193121336556, "y": -1.573601497105642 }, { "x": 59.99277697135787, "y": -1.6470256791318718 }, { "x": 59.98376459798908, "y": -1.7200956614301788 }, { "x": 59.971177712748755, "y": -1.79263541264811 }, { "x": 59.9550466384365, "y": -1.8644701788017244 }, { "x": 59.935410236083044, "y": -1.9354269042717078 }, { "x": 59.91231581133093, "y": -2.0053346487080717 }, { "x": 59.885819000471486, "y": -2.074024998838894 }, { "x": 59.855983636412645, "y": -2.1413324741911026 }, { "x": 59.822881594900394, "y": -2.207094925746162 }, { "x": 59.78659262136438, "y": -2.271153926569724 }, { "x": 59.74720413880502, "y": -2.333355153474713 }, { "x": 59.70481103718447, "y": -2.393548758797891 }, { "x": 59.65951544482928, "y": -2.4515897313948756 }, { "x": 59.61142648239519, "y": -2.5073382459833624 }, { "x": 59.560659999986825, "y": -2.560659999993277 }, { "x": 58.93933999999257, "y": -3.139339999999038 }, { "x": 58.88857351758503, "y": -3.1926617540098334 }, { "x": 58.84048455515173, "y": -3.248410268599116 }, { "x": 58.79518896279731, "y": -3.306451241196811 }, { "x": 58.7527958611775, "y": -3.366644846520586 }, { "x": 58.713407378618854, "y": -3.4288460734260866 }, { "x": 58.67711840508349, "y": -3.4929050742501033 }, { "x": 58.64401636357181, "y": -3.5586675258055607 }, { "x": 58.61418099951348, "y": -3.625975001158082 }, { "x": 58.58768418865452, "y": -3.6946653512891316 }, { "x": 58.564589763902774, "y": -3.764573095725723 }, { "x": 58.54495336154963, "y": -3.835529821195877 }, { "x": 58.5288222872376, "y": -3.907364587349633 }, { "x": 58.51623540199745, "y": -3.97990433856765 }, { "x": 58.507223028628744, "y": -4.052974320866042 }, { "x": 58.50180687865006, "y": -4.126398502892329 }, { "x": 58.499999999993946, "y": -4.199999999999022 }, { "x": 58.49999999999258, "y": -10.799999999999045 }, { "x": 58.50180687864881, "y": -10.873601497105483 }, { "x": 58.50722302862775, "y": -10.947025679131542 }, { "x": 58.516235401996795, "y": -11.02009566142965 }, { "x": 58.5288222872374, "y": -11.092635412647354 }, { "x": 58.54495336154997, "y": -11.164470178800741 }, { "x": 58.56458976390374, "y": -11.235426904270497 }, { "x": 58.5876841886562, "y": -11.305334648706577 }, { "x": 58.61418099951601, "y": -11.374024998837086 }, { "x": 58.64401636357522, "y": -11.441332474188954 }, { "x": 58.67711840508787, "y": -11.507094925743644 }, { "x": 58.71340737862428, "y": -11.571153926566808 }, { "x": 58.75279586118404, "y": -11.633355153471342 }, { "x": 58.795188962804986, "y": -11.693548758794037 }, { "x": 58.84048455516057, "y": -11.75158973139051 }, { "x": 58.88857351759506, "y": -11.807338245978457 }, { "x": 58.93934000000385, "y": -11.860659999987746 }, { "x": 59.560659999992595, "y": -12.43933999999902 }, { "x": 59.61142648240124, "y": -12.49266175400939 }, { "x": 59.65951544483565, "y": -12.548410268598303 }, { "x": 59.70481103719118, "y": -12.606451241195685 }, { "x": 59.747204138812094, "y": -12.666644846519205 }, { "x": 59.78659262137191, "y": -12.728846073424506 }, { "x": 59.82288159490841, "y": -12.792905074248381 }, { "x": 59.85598363642123, "y": -12.858667525803753 }, { "x": 59.885819000480666, "y": -12.925975001156246 }, { "x": 59.91231581134076, "y": -12.994665351287352 }, { "x": 59.93541023609362, "y": -13.064573095724029 }, { "x": 59.95504663844787, "y": -13.135529821194325 }, { "x": 59.971177712761005, "y": -13.20736458734828 }, { "x": 59.98376459800224, "y": -13.279904338566581 }, { "x": 59.992776971371995, "y": -13.352974320865258 }, { "x": 59.99819312135173, "y": -13.426398502891942 }, { "x": 60.00000000000887, "y": -13.499999999999034 }, { "x": 59.99999999999258, "y": -19.499999999999034 }, { "x": 59.99819312133735, "y": -19.573601497106097 }, { "x": 59.99277697135949, "y": -19.64702567913281 }, { "x": 59.98376459799155, "y": -19.720095661431657 }, { "x": 59.97117771275208, "y": -19.792635412650156 }, { "x": 59.955046638440706, "y": -19.864470178804424 }, { "x": 59.93541023608813, "y": -19.93542690427512 }, { "x": 59.912315811336924, "y": -20.00533464871222 }, { "x": 59.88581900047839, "y": -20.07402499884384 }, { "x": 59.85598363642043, "y": -20.14133247419693 }, { "x": 59.82288159490906, "y": -20.207094925752926 }, { "x": 59.786592621373956, "y": -20.271153926577483 }, { "x": 59.747204138815476, "y": -20.333355153483524 }, { "x": 59.70481103719581, "y": -20.39354875880784 }, { "x": 59.659515444841475, "y": -20.451589731406045 }, { "x": 59.61142648240818, "y": -20.50733824599581 }, { "x": 59.56066000000061, "y": -20.56066000000706 }, { "x": 58.93933999999257, "y": -21.139339999999038 }, { "x": 58.88857351758389, "y": -21.192661754009038 }, { "x": 58.840484555149544, "y": -21.248410268597695 }, { "x": 58.795188962794214, "y": -21.306451241194935 }, { "x": 58.75279586117361, "y": -21.366644846518398 }, { "x": 58.71340737861428, "y": -21.428846073423728 }, { "x": 58.677118405078375, "y": -21.492905074247687 }, { "x": 58.64401636356632, "y": -21.558667525803173 }, { "x": 58.614180999507795, "y": -21.625975001155837 }, { "x": 58.58768418864881, "y": -21.694665351287085 }, { "x": 58.5645897638972, "y": -21.764573095723932 }, { "x": 58.54495336154437, "y": -21.8355298211944 }, { "x": 58.528822287232856, "y": -21.907364587348468 }, { "x": 58.516235401993384, "y": -21.979904338566826 }, { "x": 58.50722302862559, "y": -22.05297432086553 }, { "x": 58.501806878647955, "y": -22.1263985028921 }, { "x": 58.49999999999309, "y": -22.199999999999022 }]} routingDisabled={routingDisabled} routeRemaining={true} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    <copperpour connectsTo="net.GND" layer="top" useThermalReliefs coveredWithSolderMask />
    <copperpour connectsTo="net.GND" layer="bottom" useThermalReliefs coveredWithSolderMask />
    {/* D6: LED */}
    <chip name={"D6"} pcbX={-58.73} pcbY={-11.338} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"LED"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* D4: LED */}
    <chip name={"D4"} pcbX={-58.73} pcbY={-2.194} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"LED"} footprint={<Footprint_D4 />} noSchematicRepresentation={true}/>

    {/* D8: LED */}
    <chip name={"D8"} pcbX={-58.73} pcbY={6.95} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"LED"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* D5: LED */}
    <chip name={"D5"} pcbX={-58.73} pcbY={-6.766} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D5 />} noSchematicRepresentation={true}/>

    {/* D2: LED */}
    <chip name={"D2"} pcbX={-58.73} pcbY={2.378} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"LED"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* D7: LED */}
    <chip name={"D7"} pcbX={-58.73} pcbY={19.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"LED"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* C1: 1 uF */}
    <capacitor name={"C1"} pcbX={-36.6} pcbY={-8.5} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C1 />} schX={-4.3999999999999995} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C3: 1 uF */}
    <capacitor name={"C3"} pcbX={-35.4} pcbY={-8.5} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C3 />} schX={-3.4000000000000004} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C5: 1 uF */}
    <capacitor name={"C5"} pcbX={-35.8} pcbY={-0.9} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C5 />} schX={-2.3999999999999986} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C7: 1 uF */}
    <capacitor name={"C7"} pcbX={-25.35} pcbY={-4.3} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C7 />} schX={-7.499999999999999} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C8: 1 uF */}
    <capacitor name={"C8"} pcbX={-30.25} pcbY={-11.85} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C8 />} schX={-8.5} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C9: 3.3 nF */}
    <capacitor name={"C9"} pcbX={-33.15} pcbY={-11.85} pcbRotation={0} capacitance={"3.3nF"} footprint={<Footprint_C9 />} schX={-8.299999999999999} schY={5.000000000000001} schRotation={90} schSheetName={"Mixer"}/>

    {/* C10: 1 uF */}
    <capacitor name={"C10"} pcbX={-30.2} pcbY={-15.3} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C10 />} schX={-0.4499999999999993} schY={-4.300000000000001} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* C11: 3.3 nF */}
    <capacitor name={"C11"} pcbX={-30.2} pcbY={-14.2} pcbRotation={180} capacitance={"3.3nF"} footprint={<Footprint_C11 />} schX={-5.65} schY={1} schRotation={90} schSheetName={"Image Reject Filters"}/>

    {/* C12: 330 pF */}
    <capacitor name={"C12"} pcbX={-38.3} pcbY={-1.2} pcbRotation={180} capacitance={"330pF"} footprint={<Footprint_C12 />} schX={-1.5} schY={5.800000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C13: 330 pF */}
    <capacitor name={"C13"} pcbX={-39.4} pcbY={-0.1} pcbRotation={90} capacitance={"330pF"} footprint={<Footprint_C13 />} schX={-2.5999999999999996} schY={5.800000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C14: 8.2 pF */}
    <capacitor name={"C14"} pcbX={-36.9} pcbY={-1.2} pcbRotation={0} capacitance={"8.2pF"} footprint={<Footprint_C14 />} schX={-3.999999999999999} schY={5.800000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C15: 180 pF */}
    <capacitor name={"C15"} pcbX={-37.2} pcbY={-0.1} pcbRotation={90} capacitance={"180pF"} footprint={<Footprint_C15 />} schX={-5.1} schY={5.800000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C16: 3.3 nF */}
    <capacitor name={"C16"} pcbX={-25.35} pcbY={-7.1} pcbRotation={90} capacitance={"3.3nF"} footprint={<Footprint_C16 />} schX={1.200000000000001} schY={-3.5} schRotation={90} schSheetName={"Mixer"}/>

    {/* C17: 1 uF */}
    <capacitor name={"C17"} pcbX={-26.3} pcbY={-13.949999} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C17 />} schX={7.100000000000001} schY={-1.5500000000000007} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C18: 3.3 nF */}
    <capacitor name={"C18"} pcbX={-24.2} pcbY={-27.3} pcbRotation={90} capacitance={"3.3nF"} footprint={<Footprint_C18 />} schX={3.1000000000000014} schY={4.45} schRotation={90} schSheetName={"IF Transceiver"}/>

    {/* C19: 3.3 nF */}
    <capacitor name={"C19"} pcbX={-31.6} pcbY={-23.3} pcbRotation={180} capacitance={"3.3nF"} footprint={<Footprint_C19 />} schX={3.6500000000000004} schY={3.7} schRotation={90} schSheetName={"Image Reject Filters"}/>

    {/* C20: 3.3 nF */}
    <capacitor name={"C20"} pcbX={-24.1} pcbY={-13.949999} pcbRotation={90} capacitance={"3.3nF"} footprint={<Footprint_C20 />} schX={7.400000000000002} schY={1.9500000000000002} schRotation={90} schSheetName={"IF Transceiver"}/>

    {/* C21: 1 uF */}
    <capacitor name={"C21"} pcbX={-25.2} pcbY={-27.3} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C21 />} schX={6.100000000000001} schY={-1.5500000000000007} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C22: 1 uF */}
    <capacitor name={"C22"} pcbX={-48.7} pcbY={-14.4} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C22 />} schX={6.85} schY={-3.0000000000000018} schRotation={-90} schSheetName={"Power"}/>

    {/* C23: 1 uF */}
    <capacitor name={"C23"} pcbX={-46.1} pcbY={-12.2} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C23 />} schX={8.85} schY={-3.0000000000000018} schRotation={-90} schSheetName={"Power"}/>

    {/* C24: 1 uF */}
    <capacitor name={"C24"} pcbX={-6.15} pcbY={-27.55} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C24 />} schX={-4.549999999999999} schY={-5.85} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* C25: 1 uF */}
    <capacitor name={"C25"} pcbX={-32.3} pcbY={-9.7} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C25 />} schX={-6.699999999999999} schY={3.700000000000001} schRotation={90} schSheetName={"Mixer"}/>

    {/* C26: 1 uF */}
    <capacitor name={"C26"} pcbX={-34.7} pcbY={-30.6} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C26 />} schX={-3.549999999999999} schY={-5.85} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* C27: 1 uF */}
    <capacitor name={"C27"} pcbX={-26.7} pcbY={-30.6} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C27 />} schX={-2.55} schY={-5.85} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* C28: 1 uF */}
    <capacitor name={"C28"} pcbX={-32.3} pcbY={-10.6} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C28 />} schX={-6.8} schY={3.1000000000000005} schRotation={180} schSheetName={"Mixer"}/>

    {/* C29: 3.3 nF */}
    <capacitor name={"C29"} pcbX={-31.6} pcbY={-22.25} pcbRotation={180} capacitance={"3.3nF"} footprint={<Footprint_C29 />} schX={4.749999999999998} schY={3.7} schRotation={90} schSheetName={"Image Reject Filters"}/>

    {/* C30: 1 uF */}
    <capacitor name={"C30"} pcbX={-30.7} pcbY={-30.6} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C30 />} schX={-1.549999999999999} schY={-5.85} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* C31: 1 uF */}
    <capacitor name={"C31"} pcbX={-31.6} pcbY={-24.35} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C31 />} schX={0.5499999999999989} schY={-4.300000000000001} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* C34: 33 pF */}
    <capacitor name={"C34"} pcbX={-30.3} pcbY={-0.5} pcbRotation={90} capacitance={"33pF"} footprint={<Footprint_C34 />} schX={-4.699999999999999} schY={-1.4999999999999982} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C35: 33 pF */}
    <capacitor name={"C35"} pcbX={-31.2} pcbY={-0.5} pcbRotation={90} capacitance={"33pF"} footprint={<Footprint_C35 />} schX={-5.6} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C36: 33 pF */}
    <capacitor name={"C36"} pcbX={-32.1} pcbY={-0.5} pcbRotation={90} capacitance={"33pF"} footprint={<Footprint_C36 />} schX={-6.099999999999999} schY={-1.4999999999999982} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C37: 33 pF */}
    <capacitor name={"C37"} pcbX={-33} pcbY={-0.9} pcbRotation={90} capacitance={"33pF"} footprint={<Footprint_C37 />} schX={-6.999999999999999} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C41: 1 uF */}
    <capacitor name={"C41"} pcbX={-29.85} pcbY={-9.35} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C41 />} schX={-1.3999999999999986} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C42: 1 uF */}
    <capacitor name={"C42"} pcbX={-28.55} pcbY={-1} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C42 />} schX={-0.40000000000000036} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C46: 1 uF */}
    <capacitor name={"C46"} pcbX={-26.35} pcbY={-5.35} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C46 />} schX={0.8000000000000007} schY={-1.4999999999999982} schRotation={90} schSheetName={"Mixer"}/>

    {/* C49: 1 uF */}
    <capacitor name={"C49"} pcbX={-27.65} pcbY={-3.9} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C49 />} schX={0} schY={0.20000000000000107} schRotation={90} schSheetName={"Mixer"}/>

    {/* C50: 1 uF */}
    <capacitor name={"C50"} pcbX={-36.9} pcbY={-25.75} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C50 />} schX={-5.1000000000000005} schY={3.8000000000000007} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C53: 1 uF */}
    <capacitor name={"C53"} pcbX={-42.75} pcbY={-31} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C53 />} schX={-0.5999999999999996} schY={3.3000000000000007} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C55: 3.3 nF */}
    <capacitor name={"C55"} pcbX={-38.75} pcbY={-24.55} pcbRotation={0} capacitance={"3.3nF"} footprint={<Footprint_C55 />} schX={-3.4000000000000004} schY={0.3000000000000007} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C57: 3.3 nF */}
    <capacitor name={"C57"} pcbX={-38.75} pcbY={-23.5} pcbRotation={0} capacitance={"3.3nF"} footprint={<Footprint_C57 />} schX={-4.500000000000001} schY={0.3000000000000007} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C58: 1 uF */}
    <capacitor name={"C58"} pcbX={-43.55} pcbY={-25.4} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C58 />} schX={1.9000000000000004} schY={3.8000000000000007} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C59: 1 uF */}
    <capacitor name={"C59"} pcbX={-38.3} pcbY={-20.5} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C59 />} schX={-7.1000000000000005} schY={-2.8999999999999986} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C60: 1 uF */}
    <capacitor name={"C60"} pcbX={-38.75} pcbY={-22.45} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C60 />} schX={-8.7} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C62: 1 uF */}
    <capacitor name={"C62"} pcbX={-44.4} pcbY={-20.5} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C62 />} schX={-3.0999999999999996} schY={-2.8999999999999986} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C63: 3.3 nF */}
    <capacitor name={"C63"} pcbX={-42.55} pcbY={-23.3} pcbRotation={180} capacitance={"3.3nF"} footprint={<Footprint_C63 />} schX={-0.5} schY={-1.299999999999999} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C64: 1 uF */}
    <capacitor name={"C64"} pcbX={-48.55} pcbY={-23.4} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C64 />} schX={6.6999999999999975} schY={-0.6999999999999993} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C65: 3.3 nF */}
    <capacitor name={"C65"} pcbX={-42.55} pcbY={-22.25} pcbRotation={180} capacitance={"3.3nF"} footprint={<Footprint_C65 />} schX={0.5999999999999996} schY={-1.299999999999999} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C66: 1 uF */}
    <capacitor name={"C66"} pcbX={-42.55} pcbY={-24.35} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C66 />} schX={-7.7} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C67: 33 pF */}
    <capacitor name={"C67"} pcbX={-39.3} pcbY={-4.65} pcbRotation={90} capacitance={"33pF"} footprint={<Footprint_C67 />} schX={-1.5999999999999979} schY={-1.0999999999999996} schRotation={0} schSheetName={"Mixer"}/>

    {/* C70: 100 pF */}
    <capacitor name={"C70"} pcbX={-38.95} pcbY={-3.25} pcbRotation={90} capacitance={"100pF"} footprint={<Footprint_C70 />} schX={-1.299999999999999} schY={-1.4999999999999982} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C71: 1 uF */}
    <capacitor name={"C71"} pcbX={-15} pcbY={-7.5} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C71 />} schX={-9.9} schY={2.1999999999999993} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C73: 1 uF */}
    <capacitor name={"C73"} pcbX={-11.9} pcbY={-7.5} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C73 />} schX={-8.9} schY={2.1999999999999993} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C75: 1 uF */}
    <capacitor name={"C75"} pcbX={-9.9} pcbY={-7.5} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C75 />} schX={-7.8999999999999995} schY={2.1999999999999993} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C77: 1 uF */}
    <capacitor name={"C77"} pcbX={-13.6} pcbY={1.5} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C77 />} schX={-6.8999999999999995} schY={2.1999999999999993} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C79: 1 uF */}
    <capacitor name={"C79"} pcbX={-17.1} pcbY={-0.8} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C79 />} schX={-5.8999999999999995} schY={2.1999999999999993} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C82: 1 uF */}
    <capacitor name={"C82"} pcbX={-17.1} pcbY={-2.95} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C82 />} schX={-4.8999999999999995} schY={2.1999999999999993} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C83: 1 uF */}
    <capacitor name={"C83"} pcbX={-17.4} pcbY={-4.6} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C83 />} schX={-4.8999999999999995} schY={-1.200000000000001} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C84: 1 uF */}
    <capacitor name={"C84"} pcbX={-20.2} pcbY={-20.8} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C84 />} schX={-8.1} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C85: 1 uF */}
    <capacitor name={"C85"} pcbX={-20.55} pcbY={-23.4} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C85 />} schX={-7.199999999999999} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C86: 1 uF */}
    <capacitor name={"C86"} pcbX={-18.45} pcbY={-28.15} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C86 />} schX={-6.3} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C87: 1 uF */}
    <capacitor name={"C87"} pcbX={-16.45} pcbY={-28.15} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C87 />} schX={-5.3999999999999995} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C88: 1 uF */}
    <capacitor name={"C88"} pcbX={-14.95} pcbY={-28.15} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C88 />} schX={1.7763568394002505e-15} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C89: 1 uF */}
    <capacitor name={"C89"} pcbX={-11.2} pcbY={-26.2} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C89 />} schX={-4.499999999999999} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C90: 1 uF */}
    <capacitor name={"C90"} pcbX={-11.2} pcbY={-23.45} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C90 />} schX={-3.5999999999999996} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C92: 1 uF */}
    <capacitor name={"C92"} pcbX={-14.05} pcbY={-18.45} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C92 />} schX={-2.6999999999999993} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C93: 1 uF */}
    <capacitor name={"C93"} pcbX={-14.85} pcbY={-18.45} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C93 />} schX={-1.799999999999999} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C94: 1 uF */}
    <capacitor name={"C94"} pcbX={-17.85} pcbY={-18.8} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C94 />} schX={-0.8999999999999986} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C97: 1 uF */}
    <capacitor name={"C97"} pcbX={-17.4} pcbY={-6.11} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C97 />} schX={-3.8} schY={-5.199999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C98: 1 uF */}
    <capacitor name={"C98"} pcbX={-17.1} pcbY={-7.2} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C98 />} schX={-4.8} schY={-5.199999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C99: 22 pF */}
    <capacitor name={"C99"} pcbX={-20.55} pcbY={-22} pcbRotation={180} capacitance={"22pF"} footprint={<Footprint_C99 />} schX={-2.6999999999999993} schY={2.05} schRotation={180} schSheetName={"IF Transceiver"}/>

    {/* C100: 1 uF */}
    <capacitor name={"C100"} pcbX={-16.1} pcbY={-7.8} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C100 />} schX={-5.8} schY={-5.199999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C102: 22 pF */}
    <capacitor name={"C102"} pcbX={-20.55} pcbY={-22.7} pcbRotation={180} capacitance={"22pF"} footprint={<Footprint_C102 />} schX={-2.6999999999999993} schY={3.05} schRotation={0} schSheetName={"IF Transceiver"}/>

    {/* C104: 4.3 pF */}
    <capacitor name={"C104"} pcbX={-20.55} pcbY={-24.5} pcbRotation={180} capacitance={"4.3pF"} footprint={<Footprint_C104 />} schX={-2.6999999999999993} schY={4.25} schRotation={180} schSheetName={"IF Transceiver"}/>

    {/* C105: 10 uF */}
    <capacitor name={"C105"} pcbX={-36} pcbY={8.8} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C105 />} schX={-1.0500000000000007} schY={-5.299999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C106: 1 uF */}
    <capacitor name={"C106"} pcbX={-10.85} pcbY={-21.6} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C106 />} schX={-3.6999999999999993} schY={-1.4499999999999993} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C111: 4.3 pF */}
    <capacitor name={"C111"} pcbX={-20.55} pcbY={-25.2} pcbRotation={180} capacitance={"4.3pF"} footprint={<Footprint_C111 />} schX={-2.6999999999999993} schY={5.25} schRotation={180} schSheetName={"IF Transceiver"}/>

    {/* C113: 1 uF */}
    <capacitor name={"C113"} pcbX={2.6} pcbY={-28.2} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C113 />} schX={-4.550000000000001} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C115: 22 pF */}
    <capacitor name={"C115"} pcbX={-9} pcbY={-24.25} pcbRotation={180} capacitance={"22pF"} footprint={<Footprint_C115 />} schX={-2.299999999999999} schY={-1.049999999999999} schRotation={180} schSheetName={"IF Transceiver"}/>

    {/* C116: 47 pF */}
    <capacitor name={"C116"} pcbX={-9} pcbY={-23.55} pcbRotation={0} capacitance={"47pF"} footprint={<Footprint_C116 />} schX={-2.5999999999999996} schY={-1.4499999999999993} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* C118: 18 pF */}
    <capacitor name={"C118"} pcbX={44.2} pcbY={-13.7} pcbRotation={-90} capacitance={"18pF"} footprint={<Footprint_C118 />} schX={-5.549999999999999} schY={2.1999999999999993} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C119: 1 uF */}
    <capacitor name={"C119"} pcbX={7.4} pcbY={-23} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C119 />} schX={-3.5500000000000007} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C120: 1 uF */}
    <capacitor name={"C120"} pcbX={8.8} pcbY={-24.5} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C120 />} schX={-2.5500000000000007} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C121: 1 uF */}
    <capacitor name={"C121"} pcbX={2.15} pcbY={-26.35} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C121 />} schX={-1.5500000000000007} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C122: 1 uF */}
    <capacitor name={"C122"} pcbX={4.6} pcbY={-23} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C122 />} schX={-0.5500000000000007} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C123: 1 uF */}
    <capacitor name={"C123"} pcbX={-8.1} pcbY={-3.5} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C123 />} schX={-9.9} schY={3.999999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C125: 33 pF */}
    <capacitor name={"C125"} pcbX={42.4} pcbY={24.6} pcbRotation={0} capacitance={"33pF"} footprint={<Footprint_C125 />} schX={0.25} schY={5.699999999999999} schRotation={180} schSheetName={"Power"}/>

    {/* C126: 10 uF */}
    <capacitor name={"C126"} pcbX={43.2} pcbY={27.4} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C126 />} schX={1.75} schY={5.8999999999999995} schRotation={-90} schSheetName={"Power"}/>

    {/* C127: 10 uF */}
    <capacitor name={"C127"} pcbX={41.2} pcbY={27.4} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C127 />} schX={2.75} schY={5.8999999999999995} schRotation={-90} schSheetName={"Power"}/>

    {/* C128: 1 uF */}
    <capacitor name={"C128"} pcbX={25.6} pcbY={-5} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C128 />} schX={-13.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C129: 1 uF */}
    <capacitor name={"C129"} pcbX={24.5} pcbY={-10.3} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C129 />} schX={-12.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C130: 1 uF */}
    <capacitor name={"C130"} pcbX={24.5} pcbY={-15.2} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C130 />} schX={-11.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C131: 1 uF */}
    <capacitor name={"C131"} pcbX={39.5} pcbY={-10.7} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C131 />} schX={-10.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C132: 1 uF */}
    <capacitor name={"C132"} pcbX={39.5} pcbY={-7} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C132 />} schX={-9.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C133: 1 uF */}
    <capacitor name={"C133"} pcbX={31.7} pcbY={-5} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C133 />} schX={-8.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C134: 1 uF */}
    <capacitor name={"C134"} pcbX={25.9} pcbY={-20} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C134 />} schX={-7.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C135: 1 uF */}
    <capacitor name={"C135"} pcbX={31.8} pcbY={-20} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C135 />} schX={-6.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C136: 1 uF */}
    <capacitor name={"C136"} pcbX={40.4} pcbY={-13.3} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C136 />} schX={2.6500000000000004} schY={9.4} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C137: 1 uF */}
    <capacitor name={"C137"} pcbX={38.1} pcbY={-20} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C137 />} schX={-5.749999999999998} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C138: 1 uF */}
    <capacitor name={"C138"} pcbX={39.5} pcbY={-15.5} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C138 />} schX={-4.75} schY={8.6} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C143: 22 uF */}
    <capacitor name={"C143"} pcbX={45.7} pcbY={22.2} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C143 />} schX={-3.8500000000000005} schY={4.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C144: 1 uF */}
    <capacitor name={"C144"} pcbX={41.1} pcbY={-22.8} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C144 />} schX={11.449999999999998} schY={9} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C145: 10 uF */}
    <capacitor name={"C145"} pcbX={49.8} pcbY={27.4} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C145 />} schX={1.75} schY={2.299999999999999} schRotation={90} schSheetName={"Power"}/>

    {/* C146: 10 uF */}
    <capacitor name={"C146"} pcbX={51.8} pcbY={27.4} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C146 />} schX={2.75} schY={2.299999999999999} schRotation={90} schSheetName={"Power"}/>

    {/* C157: 18 pF */}
    <capacitor name={"C157"} pcbX={39.7} pcbY={-3.8} pcbRotation={-90} capacitance={"18pF"} footprint={<Footprint_C157 />} schX={-4.550000000000001} schY={-9} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C158: 18 pF */}
    <capacitor name={"C158"} pcbX={34.5} pcbY={-3.8} pcbRotation={90} capacitance={"18pF"} footprint={<Footprint_C158 />} schX={-2.9499999999999993} schY={-9} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C160: 1 uF */}
    <capacitor name={"C160"} pcbX={-43.7} pcbY={-16.3} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C160 />} schX={-3.200000000000001} schY={-1.799999999999999} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C161: 1 uF */}
    <capacitor name={"C161"} pcbX={-40.45} pcbY={-20.75} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C161 />} schX={-4.7} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C164: 18 pF */}
    <capacitor name={"C164"} pcbX={44.2} pcbY={-11.5} pcbRotation={90} capacitance={"18pF"} footprint={<Footprint_C164 />} schX={-4.550000000000001} schY={2.1999999999999993} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C171: 1 uF */}
    <capacitor name={"C171"} pcbX={-50.5} pcbY={-31.7} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C171 />} schX={7.700000000000001} schY={3.8000000000000007} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* D1: TVS */}
    <chip name={"D1"} pcbX={-53.5} pcbY={-23.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"TVS"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* D3: TVS */}
    <chip name={"D3"} pcbX={52.9} pcbY={-27.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"TVS"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* D9: TVS */}
    <chip name={"D9"} pcbX={55.5} pcbY={-14} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"TVS"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* TP6: TestPoint */}
    <chip name={"TP6"} pcbX={8.9} pcbY={-3} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP6 />} noSchematicRepresentation={true}/>

    {/* L1: DNP */}
    <chip name={"L1"} pcbX={-34} pcbY={-8.2} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_L1 />} noSchematicRepresentation={true}/>

    {/* L2: 100 uH */}
    <inductor name={"L2"} pcbX={-30.45} pcbY={-2.25} pcbRotation={180} inductance={"100uH"} footprint={<Footprint_L2 />} schX={3.5} schY={5.800000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* L3: 56 nH */}
    <inductor name={"L3"} pcbX={-31.05} pcbY={-4.5} pcbRotation={-90} inductance={"56nH"} footprint={<Footprint_L3 />} schX={3.5} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* L7: DNP */}
    <chip name={"L7"} pcbX={-21.6} pcbY={-22.35} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_L7 />} noSchematicRepresentation={true}/>

    {/* L9: 10 nH */}
    <inductor name={"L9"} pcbX={-21.6} pcbY={-24.85} pcbRotation={90} inductance={"10nH"} footprint={<Footprint_L9 />} schX={-2.1999999999999993} schY={4.75} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* L10: 4.7 uH */}
    <inductor name={"L10"} pcbX={43.1} pcbY={31.8} pcbRotation={180} inductance={"4.7uH"} footprint={<Footprint_L10 />} schX={1.25} schY={5.399999999999999} schRotation={90} schSheetName={"Power"}/>

    {/* L11: 4.7 uH */}
    <inductor name={"L11"} pcbX={50} pcbY={31.8} pcbRotation={180} inductance={"4.7uH"} footprint={<Footprint_L11 />} schX={1.25} schY={3.1999999999999993} schRotation={90} schSheetName={"Power"}/>

    {/* L13: 2.2 uH */}
    <inductor name={"L13"} pcbX={-50.55} pcbY={-24.25} pcbRotation={90} inductance={"2.2uH"} footprint={<Footprint_L13 />} schX={6.999999999999998} schY={0.20000000000000107} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* P2: SMA */}
    <chip name={"P2"} pcbX={58.5} pcbY={-7.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SMA"} footprint={<Footprint_P2 />} noSchematicRepresentation={true}/>

    {/* P3: SMA */}
    <chip name={"P3"} pcbX={-58.5} pcbY={-23.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SMA"} footprint={<Footprint_P3 />} noSchematicRepresentation={true}/>

    {/* P1: SMA */}
    <chip name={"P1"} pcbX={58.5} pcbY={-25.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SMA"} footprint={<Footprint_P1 />} noSchematicRepresentation={true}/>

    {/* P20: HEADER_2x11 */}
    <chip name={"P20"} pcbX={53.03} pcbY={-18.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"] }} displayName={"HEADER_2x11"} footprint={<Footprint_P20 />} noSchematicRepresentation={true}/>

    {/* P22: HEADER_2x13 */}
    <chip name={"P22"} pcbX={47.95} pcbY={-26.07} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"] }} displayName={"HEADER_2x13"} footprint={<Footprint_P22 />} noSchematicRepresentation={true}/>

    {/* P26: LPC_JTAG */}
    <chip name={"P26"} pcbX={40.55} pcbY={11.125} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"LPC_JTAG"} footprint={<Footprint_P26 />} noSchematicRepresentation={true}/>

    {/* P28: HEADER_2x11 */}
    <chip name={"P28"} pcbX={4.77} pcbY={-18.45} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"] }} displayName={"HEADER_2x11"} footprint={<Footprint_P28 />} noSchematicRepresentation={true}/>

    {/* Q3: PMOS */}
    <chip name={"Q3"} pcbX={-41} pcbY={7.3} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"PMOS"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* Q5: PMOS */}
    <chip name={"Q5"} pcbX={40.7625} pcbY={20.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"PMOS"} footprint={<Footprint_Q5 />} noSchematicRepresentation={true}/>

    {/* R1: 470 */}
    <resistor name={"R1"} pcbX={-38.3} pcbY={-0.5} pcbRotation={0} resistance={"470ohm"} footprint={<Footprint_R1 />} schX={-2} schY={6.200000000000001} schRotation={180} schSheetName={"Mixer"}/>

    {/* R2: 470 */}
    <resistor name={"R2"} pcbX={-38.3} pcbY={0.2} pcbRotation={180} resistance={"470ohm"} footprint={<Footprint_R2 />} schX={-3.0999999999999996} schY={6.200000000000001} schRotation={180} schSheetName={"Mixer"}/>

    {/* R3: 22.6k */}
    <resistor name={"R3"} pcbX={-36.5} pcbY={-0.1} pcbRotation={90} resistance={"22.6kohm"} footprint={<Footprint_R3 />} schX={-5.1} schY={5.1000000000000005} schRotation={90} schSheetName={"Mixer"}/>

    {/* R4: 51k */}
    <resistor name={"R4"} pcbX={-34.6} pcbY={-0.9} pcbRotation={-90} resistance={"51kohm"} footprint={<Footprint_R4 />} schX={-0.7999999999999989} schY={1.9000000000000004} schRotation={180} schSheetName={"Mixer"}/>

    {/* R5: 10k */}
    <resistor name={"R5"} pcbX={-29.45} pcbY={-0.45} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R5 />} schX={-5.1} schY={1.9000000000000004} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R7: 10k */}
    <resistor name={"R7"} pcbX={-53.3} pcbY={7} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R7 />} schX={-13.15} schY={-8.3} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R8: 0 */}
    <resistor name={"R8"} pcbX={-20.6} pcbY={-10.45} pcbRotation={-90} resistance={"0ohm"} footprint={<Footprint_R8 />} schX={-2.0999999999999996} schY={-5.5} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* R9: 0 */}
    <resistor name={"R9"} pcbX={-19.6} pcbY={-10.45} pcbRotation={-90} resistance={"0ohm"} footprint={<Footprint_R9 />} schX={-2.0999999999999996} schY={-4.700000000000001} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* R10: 0 */}
    <resistor name={"R10"} pcbX={-17.3} pcbY={-12.05} pcbRotation={-90} resistance={"0ohm"} footprint={<Footprint_R10 />} schX={-2.0999999999999996} schY={-3.9000000000000004} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* R11: 22.6k */}
    <resistor name={"R11"} pcbX={-43.9} pcbY={9.85} pcbRotation={0} resistance={"22.6kohm"} footprint={<Footprint_R11 />} schX={-3.25} schY={-5.4} schRotation={-90} schSheetName={"Power"}/>

    {/* R13: 0 */}
    <resistor name={"R13"} pcbX={-16.3} pcbY={-12.05} pcbRotation={-90} resistance={"0ohm"} footprint={<Footprint_R13 />} schX={-2.0999999999999996} schY={-3.1000000000000014} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* R14: DNP */}
    <chip name={"R14"} pcbX={-16.3} pcbY={-14.36} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R14 />} noSchematicRepresentation={true}/>

    {/* R15: DNP */}
    <chip name={"R15"} pcbX={-17.3} pcbY={-14.36} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R15 />} noSchematicRepresentation={true}/>

    {/* R16: DNP */}
    <chip name={"R16"} pcbX={-19.6} pcbY={-12.76} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R16 />} noSchematicRepresentation={true}/>

    {/* R17: DNP */}
    <chip name={"R17"} pcbX={-20.6} pcbY={-12.76} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R17 />} noSchematicRepresentation={true}/>

    {/* R18: 22.6k */}
    <resistor name={"R18"} pcbX={-56.7} pcbY={4} pcbRotation={0} resistance={"22.6kohm"} footprint={<Footprint_R18 />} schX={-8.65} schY={1.5999999999999996} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R19: 33 */}
    <resistor name={"R19"} pcbX={-51.6} pcbY={19.6} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R19 />} schX={-13.55} schY={-5.899999999999999} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* R25: 750 */}
    <resistor name={"R25"} pcbX={-11.8} pcbY={-27.8} pcbRotation={180} resistance={"750ohm"} footprint={<Footprint_R25 />} schX={-0.8999999999999986} schY={0.9500000000000002} schRotation={0} schSheetName={"IF Transceiver"}/>

    {/* R26: 1.2k */}
    <resistor name={"R26"} pcbX={-12.85} pcbY={-28.15} pcbRotation={90} resistance={"1.2kohm"} footprint={<Footprint_R26 />} schX={-1.299999999999999} schY={0.6500000000000004} schRotation={90} schSheetName={"IF Transceiver"}/>

    {/* R27: 1.8k */}
    <resistor name={"R27"} pcbX={17.85} pcbY={-22.65} pcbRotation={0} resistance={"1.8kohm"} footprint={<Footprint_R27 />} schX={-7.050000000000001} schY={-2.5999999999999996} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* R28: 1.8k */}
    <resistor name={"R28"} pcbX={17.85} pcbY={-23.65} pcbRotation={0} resistance={"1.8kohm"} footprint={<Footprint_R28 />} schX={-6.250000000000001} schY={-2.5999999999999996} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* R30: 33 */}
    <resistor name={"R30"} pcbX={-52.2} pcbY={7} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R30 />} schX={-13.55} schY={-7.899999999999999} schRotation={0} schSheetName={"Microcontroller"}/>

    {/* R31: 33 */}
    <resistor name={"R31"} pcbX={5} pcbY={-21.8} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R31 />} schX={0.9499999999999993} schY={2.1000000000000014} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R33: 10 */}
    <resistor name={"R33"} pcbX={15.2} pcbY={-29.9} pcbRotation={-90} resistance={"10ohm"} footprint={<Footprint_R33 />} schX={-6.050000000000001} schY={6.000000000000001} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R34: 33 */}
    <resistor name={"R34"} pcbX={2.45} pcbY={-23} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R34 />} schX={0.9499999999999993} schY={-4.300000000000001} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R36: 10k */}
    <resistor name={"R36"} pcbX={-44.85} pcbY={-31.1} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R36 />} schX={4.499999999999998} schY={4.300000000000001} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R37: 10k */}
    <resistor name={"R37"} pcbX={41.5} pcbY={-3.9} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R37 />} schX={-2.25} schY={0.09999999999999964} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R46: 180k */}
    <resistor name={"R46"} pcbX={42.2} pcbY={22.7} pcbRotation={180} resistance={"180kohm"} footprint={<Footprint_R46 />} schX={-0.6499999999999986} schY={6.199999999999999} schRotation={180} schSheetName={"Power"}/>

    {/* R47: 180k */}
    <resistor name={"R47"} pcbX={42.2} pcbY={23.7} pcbRotation={0} resistance={"180kohm"} footprint={<Footprint_R47 />} schX={0.25} schY={6.199999999999999} schRotation={180} schSheetName={"Power"}/>

    {/* R48: 10k */}
    <resistor name={"R48"} pcbX={45.4} pcbY={-15.38} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R48 />} schX={4.950000000000001} schY={-4.5} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R49: 10k */}
    <resistor name={"R49"} pcbX={-52.6} pcbY={19.6} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R49 />} schX={-13.15} schY={-5.5} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R51: 4.7k */}
    <resistor name={"R51"} pcbX={40.2} pcbY={22.9} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R51 />} schX={-1.4499999999999993} schY={3.3999999999999995} schRotation={-90} schSheetName={"Power"}/>

    {/* R52: 10k */}
    <resistor name={"R52"} pcbX={50.2} pcbY={23} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R52 />} schX={-2.0500000000000007} schY={4.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* R54: 4.7k */}
    <resistor name={"R54"} pcbX={46.3} pcbY={30.7} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R54 />} schX={-1.4499999999999993} schY={5.299999999999999} schRotation={90} schSheetName={"Power"}/>

    {/* R55: 180k */}
    <resistor name={"R55"} pcbX={50.2} pcbY={25} pcbRotation={180} resistance={"180kohm"} footprint={<Footprint_R55 />} schX={-0.6499999999999986} schY={2.5999999999999988} schRotation={0} schSheetName={"Power"}/>

    {/* R56: 820k */}
    <resistor name={"R56"} pcbX={50.2} pcbY={24} pcbRotation={0} resistance={"820kohm"} footprint={<Footprint_R56 />} schX={0.45000000000000107} schY={2.5999999999999988} schRotation={180} schSheetName={"Power"}/>

    {/* R59: 10k */}
    <resistor name={"R59"} pcbX={35.6} pcbY={-21} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R59 />} schX={-1.549999999999999} schY={2.8000000000000007} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R62: 10k */}
    <resistor name={"R62"} pcbX={46.5} pcbY={18.3} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R62 />} schX={5.450000000000001} schY={-2.700000000000001} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R63: 10k */}
    <resistor name={"R63"} pcbX={36.1} pcbY={7.5} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R63 />} schX={5.250000000000002} schY={-0.29999999999999893} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R64: 10k */}
    <resistor name={"R64"} pcbX={29.4} pcbY={-4.5} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R64 />} schX={6.149999999999997} schY={-0.29999999999999893} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R65: 18k */}
    <resistor name={"R65"} pcbX={46.51} pcbY={17.3} pcbRotation={180} resistance={"18kohm"} footprint={<Footprint_R65 />} schX={5.450000000000001} schY={-3.3000000000000007} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R66: 10k */}
    <resistor name={"R66"} pcbX={36.1} pcbY={6.5} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R66 />} schX={7.049999999999999} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R67: 10k */}
    <resistor name={"R67"} pcbX={25.6} pcbY={-4} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R67 />} schX={-8.75} schY={-9.399999999999999} schRotation={0} schSheetName={"Microcontroller"}/>

    {/* R68: 10k */}
    <resistor name={"R68"} pcbX={25.6} pcbY={-3} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R68 />} schX={-8.75} schY={-8.599999999999998} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* R69: 12k */}
    <resistor name={"R69"} pcbX={31.9} pcbY={-4.1} pcbRotation={180} resistance={"12kohm"} footprint={<Footprint_R69 />} schX={4.15} schY={-3} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* R72: 470 */}
    <resistor name={"R72"} pcbX={-56.7} pcbY={-1.8} pcbRotation={0} resistance={"470ohm"} footprint={<Footprint_R72 />} schX={-13.049999999999999} schY={-2} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R73: 3k */}
    <resistor name={"R73"} pcbX={-56.7} pcbY={-5.2} pcbRotation={0} resistance={"3kohm"} footprint={<Footprint_R73 />} schX={-11.05} schY={-2} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R74: 4.7k */}
    <resistor name={"R74"} pcbX={-56.7} pcbY={-9.8} pcbRotation={0} resistance={"4.7kohm"} footprint={<Footprint_R74 />} schX={-8.55} schY={-2} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R75: 10k */}
    <resistor name={"R75"} pcbX={-56.7} pcbY={19.8} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R75 />} schX={-12.95} schY={1.5999999999999996} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R76: 4.7k */}
    <resistor name={"R76"} pcbX={-56.7} pcbY={7.4} pcbRotation={0} resistance={"4.7kohm"} footprint={<Footprint_R76 />} schX={-10.649999999999999} schY={1.5999999999999996} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R85: 10k */}
    <resistor name={"R85"} pcbX={9.3} pcbY={-27.75} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R85 />} schX={-8.05} schY={-0.8999999999999986} schRotation={0} schSheetName={"Clock Generator"}/>

    {/* R93: 10k */}
    <resistor name={"R93"} pcbX={31.8} pcbY={-21} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R93 />} schX={-8.75} schY={-7.800000000000001} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* R104: 10k */}
    <resistor name={"R104"} pcbX={5.4} pcbY={-29.7} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R104 />} schX={-5.45} schY={-2.5999999999999996} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* R105: 10k */}
    <resistor name={"R105"} pcbX={9.3} pcbY={-26.8} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R105 />} schX={-4.65} schY={-2.5999999999999996} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* SW1: SWITCH */}
    <chip name={"SW1"} pcbX={-57.3} pcbY={10.85} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["SH"] }} displayName={"SWITCH"} footprint={<Footprint_SW1 />} noSchematicRepresentation={true}/>

    {/* SW2: SWITCH */}
    <chip name={"SW2"} pcbX={-57.3} pcbY={23.85} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["SH"] }} displayName={"SWITCH"} footprint={<Footprint_SW2 />} noSchematicRepresentation={true}/>

    {/* T1: RF_BALUN */}
    <chip name={"T1"} pcbX={-34} pcbY={-9.9} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"RF_BALUN"} footprint={<Footprint_T1 />} noSchematicRepresentation={true}/>

    {/* T2: RF_BALUN */}
    <chip name={"T2"} pcbX={-28} pcbY={-5.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"RF_BALUN"} footprint={<Footprint_T2 />} noSchematicRepresentation={true}/>

    {/* T3: IF_BALUN */}
    <chip name={"T3"} pcbX={-22.35} pcbY={-22.35} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"IF_BALUN"} footprint={<Footprint_T3 />} noSchematicRepresentation={true}/>

    {/* T4: IF_BALUN */}
    <chip name={"T4"} pcbX={-22.35} pcbY={-24.85} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"IF_BALUN"} footprint={<Footprint_T4 />} noSchematicRepresentation={true}/>

    {/* U1: MXD8546F */}
    <chip name={"U1"} pcbX={-32.5} pcbY={-14.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"] }} displayName={"MXD8546F"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* U2: MXD8546F */}
    <chip name={"U2"} pcbX={-24.7} pcbY={-25} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"] }} displayName={"MXD8546F"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* U4: RFFC5072 */}
    <chip name={"U4"} pcbX={-35.5} pcbY={-4.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} displayName={"RFFC5072"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* U5: FM8625H */}
    <chip name={"U5"} pcbX={-25.15} pcbY={-5.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"FM8625H"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* U6: FM8625H */}
    <chip name={"U6"} pcbX={-31.7} pcbY={-11.8} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"FM8625H"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* U7: FM8625H */}
    <chip name={"U7"} pcbX={-25.2} pcbY={-13.35} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"FM8625H"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* U9: MXD8638C */}
    <chip name={"U9"} pcbX={-33} pcbY={-23.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"MXD8638C"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* U10: 74LVC1G86 */}
    <chip name={"U10"} pcbX={-24.7} pcbY={-30.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74LVC1G86"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* U11: 74LVC1G86 */}
    <chip name={"U11"} pcbX={-32.7} pcbY={-30.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74LVC1G86"} footprint={<Footprint_U11 />} noSchematicRepresentation={true}/>

    {/* U12: MXD8638C */}
    <chip name={"U12"} pcbX={-37.35} pcbY={-23.4} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"MXD8638C"} footprint={<Footprint_U12 />} noSchematicRepresentation={true}/>

    {/* U14: MXD8638C */}
    <chip name={"U14"} pcbX={-43.95} pcbY={-23.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"MXD8638C"} footprint={<Footprint_U14 />} noSchematicRepresentation={true}/>

    {/* U15: TVS_USB */}
    <chip name={"U15"} pcbX={50.5} pcbY={12.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"TVS_USB"} footprint={<Footprint_U15 />} noSchematicRepresentation={true}/>

    {/* U17: MAX2831 */}
    <chip name={"U17"} pcbX={-15.7} pcbY={-23.3} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"] }} displayName={"MAX2831"} footprint={<Footprint_U17 />} noSchematicRepresentation={true}/>

    {/* U18: MAX5865 */}
    <chip name={"U18"} pcbX={-12.6} pcbY={-3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"] }} displayName={"MAX5865"} footprint={<Footprint_U18 />} noSchematicRepresentation={true}/>

    {/* U19: SI5351C */}
    <chip name={"U19"} pcbX={5.7} pcbY={-26.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"] }} displayName={"SI5351C"} footprint={<Footprint_U19 />} noSchematicRepresentation={true}/>

    {/* U20: W25Q32 */}
    <chip name={"U20"} pcbX={43.7} pcbY={-19.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"W25Q32"} footprint={<Footprint_U20 />} noSchematicRepresentation={true}/>

    {/* U21: TPS62410 */}
    <chip name={"U21"} pcbX={46.5} pcbY={27.4} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"] }} displayName={"TPS62410"} footprint={<Footprint_U21 />} noSchematicRepresentation={true}/>

    {/* U23: LPC4330FET180 */}
    <chip name={"U23"} pcbX={32} pcbY={-12.5} pcbRotation={-90} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A3"], "pin4": ["A4"], "pin5": ["A5"], "pin6": ["A6"], "pin7": ["A7"], "pin8": ["A8"], "pin9": ["A9"], "pin10": ["A10"], "pin11": ["A11"], "pin12": ["A12"], "pin13": ["A13"], "pin14": ["A14"], "pin15": ["B1"], "pin16": ["B2"], "pin17": ["B3"], "pin18": ["B4"], "pin19": ["B5"], "pin20": ["B6"], "pin21": ["B7"], "pin22": ["B8"], "pin23": ["B9"], "pin24": ["B10"], "pin25": ["B11"], "pin26": ["B12"], "pin27": ["B13"], "pin28": ["B14"], "pin29": ["C1"], "pin30": ["C2"], "pin31": ["C3"], "pin32": ["C4"], "pin33": ["C5"], "pin34": ["C6"], "pin35": ["C7"], "pin36": ["C8"], "pin37": ["C9"], "pin38": ["C10"], "pin39": ["C11"], "pin40": ["C12"], "pin41": ["C13"], "pin42": ["C14"], "pin43": ["D1"], "pin44": ["D2"], "pin45": ["D3"], "pin46": ["D4"], "pin47": ["D5"], "pin48": ["D6"], "pin49": ["D7"], "pin50": ["D8"], "pin51": ["D9"], "pin52": ["D10"], "pin53": ["D11"], "pin54": ["D12"], "pin55": ["D13"], "pin56": ["D14"], "pin57": ["E1"], "pin58": ["E2"], "pin59": ["E3"], "pin60": ["E4"], "pin61": ["E5"], "pin62": ["E6"], "pin63": ["E7"], "pin64": ["E8"], "pin65": ["E9"], "pin66": ["E10"], "pin67": ["E11"], "pin68": ["E12"], "pin69": ["E13"], "pin70": ["E14"], "pin71": ["F1"], "pin72": ["F2"], "pin73": ["F3"], "pin74": ["F4"], "pin75": ["F5"], "pin76": ["F10"], "pin77": ["F11"], "pin78": ["F12"], "pin79": ["F13"], "pin80": ["F14"], "pin81": ["G1"], "pin82": ["G2"], "pin83": ["G3"], "pin84": ["G4"], "pin85": ["G5"], "pin86": ["G10"], "pin87": ["G11"], "pin88": ["G12"], "pin89": ["G13"], "pin90": ["G14"], "pin91": ["H1"], "pin92": ["H2"], "pin93": ["H3"], "pin94": ["H4"], "pin95": ["H5"], "pin96": ["H10"], "pin97": ["H11"], "pin98": ["H12"], "pin99": ["H13"], "pin100": ["H14"], "pin101": ["J1"], "pin102": ["J2"], "pin103": ["J3"], "pin104": ["J4"], "pin105": ["J5"], "pin106": ["J10"], "pin107": ["J11"], "pin108": ["J12"], "pin109": ["J13"], "pin110": ["J14"], "pin111": ["K1"], "pin112": ["K2"], "pin113": ["K3"], "pin114": ["K4"], "pin115": ["K5"], "pin116": ["K6"], "pin117": ["K7"], "pin118": ["K8"], "pin119": ["K9"], "pin120": ["K10"], "pin121": ["K11"], "pin122": ["K12"], "pin123": ["K13"], "pin124": ["K14"], "pin125": ["L1"], "pin126": ["L2"], "pin127": ["L3"], "pin128": ["L4"], "pin129": ["L5"], "pin130": ["L6"], "pin131": ["L7"], "pin132": ["L8"], "pin133": ["L9"], "pin134": ["L10"], "pin135": ["L11"], "pin136": ["L12"], "pin137": ["L13"], "pin138": ["L14"], "pin139": ["M1"], "pin140": ["M2"], "pin141": ["M3"], "pin142": ["M4"], "pin143": ["M5"], "pin144": ["M6"], "pin145": ["M7"], "pin146": ["M8"], "pin147": ["M9"], "pin148": ["M10"], "pin149": ["M11"], "pin150": ["M12"], "pin151": ["M13"], "pin152": ["M14"], "pin153": ["N1"], "pin154": ["N2"], "pin155": ["N3"], "pin156": ["N4"], "pin157": ["N5"], "pin158": ["N6"], "pin159": ["N7"], "pin160": ["N8"], "pin161": ["N9"], "pin162": ["N10"], "pin163": ["N11"], "pin164": ["N12"], "pin165": ["N13"], "pin166": ["N14"], "pin167": ["P1"], "pin168": ["P2"], "pin169": ["P3"], "pin170": ["P4"], "pin171": ["P5"], "pin172": ["P6"], "pin173": ["P7"], "pin174": ["P8"], "pin175": ["P9"], "pin176": ["P10"], "pin177": ["P11"], "pin178": ["P12"], "pin179": ["P13"], "pin180": ["P14"] }} displayName={"LPC4330FET180"} footprint={<Footprint_U23 />} noSchematicRepresentation={true}/>

    {/* X2: MCU_XTAL */}
    <chip name={"X2"} pcbX={37.1} pcbY={-3.7} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"MCU_XTAL"} footprint={<Footprint_X2 />} noSchematicRepresentation={true}/>

    {/* X3: RTC_XTAL */}
    <chip name={"X3"} pcbX={42.5} pcbY={-12.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RTC_XTAL"} footprint={<Footprint_X3 />} noSchematicRepresentation={true}/>

    {/* R122: 4.7k */}
    <resistor name={"R122"} pcbX={-17.4} pcbY={-5.3} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R122 />} schX={-4.5} schY={-1.200000000000001} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* R133: 1k */}
    <resistor name={"R133"} pcbX={-44.2} pcbY={-8.7} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R133 />} schX={6.699999999999999} schY={0.6000000000000005} schRotation={90} schSheetName={"Mixer"}/>

    {/* L32: 56 nH */}
    <inductor name={"L32"} pcbX={-37.7} pcbY={-27.95} pcbRotation={180} inductance={"56nH"} footprint={<Footprint_L32 />} schX={-4} schY={4.1000000000000005} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* R83: 33k */}
    <resistor name={"R83"} pcbX={57.45} pcbY={28.5} pcbRotation={0} resistance={"33kohm"} footprint={<Footprint_R83 />} schX={-8.149999999999999} schY={1.4999999999999991} schRotation={0} schSheetName={"Power"}/>

    {/* C199: 1 uF */}
    <capacitor name={"C199"} pcbX={7.2} pcbY={-29.7} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C199 />} schX={1.5500000000000007} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* R102: 330 */}
    <resistor name={"R102"} pcbX={-9.5} pcbY={-12.2} pcbRotation={0} resistance={"330ohm"} footprint={<Footprint_R102 />} schX={0.3000000000000007} schY={1.6999999999999993} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* D12: D */}
    <chip name={"D12"} pcbX={49.7} pcbY={20.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"D"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* C124: 1 uF */}
    <capacitor name={"C124"} pcbX={-56.7} pcbY={-8.4} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C124 />} schX={-10.649999999999999} schY={4.2} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R94: 1k */}
    <resistor name={"R94"} pcbX={-9.9} pcbY={-31.1} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R94 />} schX={-5.6499999999999995} schY={1.0500000000000007} schRotation={0} schSheetName={"Switch Control"}/>

    {/* C203: 1 uF */}
    <capacitor name={"C203"} pcbX={-29.8} pcbY={-6.95} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C203 />} schX={2.0000000000000018} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* Q1: NMOS/PMOS */}
    <chip name={"Q1"} pcbX={-45.35} pcbY={-26.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"NMOS/PMOS"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* R50: 10k */}
    <resistor name={"R50"} pcbX={-56.7} pcbY={20.8} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R50 />} schX={-13.35} schY={1.5999999999999996} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* C114: 0.3 pF */}
    <capacitor name={"C114"} pcbX={-29.65} pcbY={-5.2} pcbRotation={90} capacitance={"0.3pF"} footprint={<Footprint_C114 />} schX={0.3000000000000007} schY={2.1000000000000014} schRotation={180} schSheetName={"Mixer"}/>

    {/* FB8: Ferrite */}
    <chip name={"FB8"} pcbX={21.8} pcbY={7.1} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB8 />} noSchematicRepresentation={true}/>

    {/* U31: 74LVC1G3157 */}
    <chip name={"U31"} pcbX={13} pcbY={-23.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"74LVC1G3157"} footprint={<Footprint_U31 />} noSchematicRepresentation={true}/>

    {/* R136: 220 */}
    <resistor name={"R136"} pcbX={-43.15} pcbY={-1.35} pcbRotation={-90} resistance={"220ohm"} footprint={<Footprint_R136 />} schX={2.8000000000000007} schY={-0.6999999999999993} schRotation={90} schSheetName={"Mixer"}/>

    {/* U39: 74LVC1G08 */}
    <chip name={"U39"} pcbX={-20.3} pcbY={-30.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74LVC1G08"} footprint={<Footprint_U39 />} noSchematicRepresentation={true}/>

    {/* U16: ICE40UP5K */}
    <chip name={"U16"} pcbX={15.4} pcbY={4.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"] }} displayName={"ICE40UP5K"} footprint={<Footprint_U16 />} noSchematicRepresentation={true}/>

    {/* C195: 1 uF */}
    <capacitor name={"C195"} pcbX={-43.15} pcbY={-2.75} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C195 />} schX={2.8000000000000007} schY={-0.09999999999999964} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R128: 220 */}
    <resistor name={"R128"} pcbX={-43.7} pcbY={-17.7} pcbRotation={90} resistance={"220ohm"} footprint={<Footprint_R128 />} schX={-4.500000000000001} schY={-1.799999999999999} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R157: 330 */}
    <resistor name={"R157"} pcbX={46.1} pcbY={0.25} pcbRotation={0} resistance={"330ohm"} footprint={<Footprint_R157 />} schX={3.25} schY={1.3499999999999996} schRotation={-90} schSheetName={"USB"}/>

    {/* C159: 1 uF */}
    <capacitor name={"C159"} pcbX={-13.85} pcbY={-16.35} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C159 />} schX={8.9} schY={-3.6000000000000014} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* R61: 22.6k */}
    <resistor name={"R61"} pcbX={25.3} pcbY={3.7} pcbRotation={90} resistance={"22.6kohm"} footprint={<Footprint_R61 />} schX={5.85} schY={5.1} schRotation={-90} schSheetName={"Power"}/>

    {/* C168: 1 uF */}
    <capacitor name={"C168"} pcbX={1} pcbY={-29.2} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C168 />} schX={0.5499999999999989} schY={-6} schRotation={90} schSheetName={"Clock Generator"}/>

    {/* RN4: 100 */}
    <chip name={"RN4"} pcbX={-7.2} pcbY={1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN4 />} noSchematicRepresentation={true}/>

    {/* RN6: 100 */}
    <chip name={"RN6"} pcbX={14.1} pcbY={-2.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN6 />} noSchematicRepresentation={true}/>

    {/* FL1: CommonModeChoke */}
    <chip name={"FL1"} pcbX={47.6} pcbY={13.5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"CommonModeChoke"} footprint={<Footprint_FL1 />} noSchematicRepresentation={true}/>

    {/* FB5: Ferrite */}
    <chip name={"FB5"} pcbX={-24} pcbY={7.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB5 />} noSchematicRepresentation={true}/>

    {/* R70: 820k */}
    <resistor name={"R70"} pcbX={39.2} pcbY={16.8} pcbRotation={90} resistance={"820kohm"} footprint={<Footprint_R70 />} schX={-6.45} schY={1.6999999999999993} schRotation={-90} schSheetName={"Power"}/>

    {/* C178: 1 uF */}
    <capacitor name={"C178"} pcbX={15.49} pcbY={8.93} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C178 />} schX={7.7499999999999964} schY={-2.1000000000000014} schRotation={-90} schSheetName={"FPGA"}/>

    {/* R96: 1k */}
    <resistor name={"R96"} pcbX={-3.9} pcbY={-28.6} pcbRotation={-90} resistance={"1kohm"} footprint={<Footprint_R96 />} schX={-5.6499999999999995} schY={-2.3499999999999996} schRotation={0} schSheetName={"Switch Control"}/>

    {/* H3: MountingHole_Pad */}
    <chip name={"H3"} pcbX={56} pcbY={-33.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H3 />} noSchematicRepresentation={true}/>

    {/* U40: BGB741L7ESD */}
    <chip name={"U40"} pcbX={-40.1} pcbY={-27.5} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"] }} displayName={"BGB741L7ESD"} footprint={<Footprint_U40 />} noSchematicRepresentation={true}/>

    {/* U24: AP22652 */}
    <chip name={"U24"} pcbX={-48.2} pcbY={-30.8} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"AP22652"} footprint={<Footprint_U24 />} noSchematicRepresentation={true}/>

    {/* C197: 10 uF */}
    <capacitor name={"C197"} pcbX={8.3} pcbY={3.1} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C197 />} schX={9.75} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* C48: 1 uF */}
    <capacitor name={"C48"} pcbX={-10.85} pcbY={-25.15} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C48 />} schX={0.9000000000000004} schY={-5.25} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* U37: 74LVC1G3157 */}
    <chip name={"U37"} pcbX={9.3} pcbY={-30.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"74LVC1G3157"} footprint={<Footprint_U37 />} noSchematicRepresentation={true}/>

    {/* R20: 180k */}
    <resistor name={"R20"} pcbX={-47.25} pcbY={-28.1} pcbRotation={90} resistance={"180kohm"} footprint={<Footprint_R20 />} schX={6.4} schY={3.8000000000000007} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* L29: 100 uH */}
    <inductor name={"L29"} pcbX={-30.45} pcbY={-8.15} pcbRotation={180} inductance={"100uH"} footprint={<Footprint_L29 />} schX={0} schY={5.800000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R6: 100 */}
    <resistor name={"R6"} pcbX={22.5} pcbY={-21.5} pcbRotation={180} resistance={"100ohm"} footprint={<Footprint_R6 />} schX={-2.3500000000000014} schY={2.4000000000000004} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* R87: 33k */}
    <resistor name={"R87"} pcbX={57.45} pcbY={29.2} pcbRotation={180} resistance={"33kohm"} footprint={<Footprint_R87 />} schX={-8.55} schY={1.1999999999999993} schRotation={-90} schSheetName={"Power"}/>

    {/* C179: 1 uF */}
    <capacitor name={"C179"} pcbX={14.71} pcbY={-0.73} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C179 />} schX={8.749999999999996} schY={-2.1000000000000014} schRotation={-90} schSheetName={"FPGA"}/>

    {/* D10: Schottky */}
    <chip name={"D10"} pcbX={-50.5} pcbY={-30.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Schottky"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* C184: 10 uF */}
    <capacitor name={"C184"} pcbX={27.1} pcbY={12.2} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C184 />} schX={4.050000000000001} schY={-1.8000000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* U38: BGB741L7ESD */}
    <chip name={"U38"} pcbX={-43.4} pcbY={-6.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"] }} displayName={"BGB741L7ESD"} footprint={<Footprint_U38 />} noSchematicRepresentation={true}/>

    {/* R120: 10k */}
    <resistor name={"R120"} pcbX={-39.55} pcbY={-2.05} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R120 />} schX={-4.3999999999999995} schY={1.9000000000000004} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C74: 180 pF */}
    <capacitor name={"C74"} pcbX={-10.2} pcbY={-11.5} pcbRotation={180} capacitance={"180pF"} footprint={<Footprint_C74 />} schX={-0.1999999999999993} schY={1.299999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C210: 1 uF */}
    <capacitor name={"C210"} pcbX={-41.35} pcbY={-29.6} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C210 />} schX={0.6999999999999993} schY={3.4000000000000004} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C56: 1.8 pF */}
    <capacitor name={"C56"} pcbX={-30.1} pcbY={-20.1} pcbRotation={-90} capacitance={"1.8pF"} footprint={<Footprint_C56 />} schX={0.6500000000000004} schY={2.3000000000000007} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* C177: 1 uF */}
    <capacitor name={"C177"} pcbX={19.9} pcbY={7.1} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C177 />} schX={2.1499999999999986} schY={-2.1999999999999993} schRotation={-90} schSheetName={"FPGA"}/>

    {/* RN2: 100 */}
    <chip name={"RN2"} pcbX={11.95} pcbY={11.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN2 />} noSchematicRepresentation={true}/>

    {/* RN1: 100 */}
    <chip name={"RN1"} pcbX={18.1} pcbY={10.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN1 />} noSchematicRepresentation={true}/>

    {/* U28: AP22652 */}
    <chip name={"U28"} pcbX={40.36} pcbY={-32.45} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"AP22652"} footprint={<Footprint_U28 />} noSchematicRepresentation={true}/>

    {/* C170: 10 uF */}
    <capacitor name={"C170"} pcbX={-26.5} pcbY={7.2} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C170 />} schX={-1.1500000000000004} schY={-1.8000000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* R22: 33k */}
    <resistor name={"R22"} pcbX={56.45} pcbY={21.65} pcbRotation={-90} resistance={"33kohm"} footprint={<Footprint_R22 />} schX={-5.65} schY={4.1} schRotation={-90} schSheetName={"Power"}/>

    {/* R116: 470 */}
    <resistor name={"R116"} pcbX={-41.7} pcbY={-30.65} pcbRotation={-90} resistance={"470ohm"} footprint={<Footprint_R116 />} schX={0.8999999999999986} schY={4.9} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R152: 3 */}
    <resistor name={"R152"} pcbX={-36.9} pcbY={-26.45} pcbRotation={180} resistance={"3ohm"} footprint={<Footprint_R152 />} schX={-4.500000000000001} schY={3.8000000000000007} schRotation={180} schSheetName={"RF Front End"}/>

    {/* FB6: Ferrite */}
    <chip name={"FB6"} pcbX={16} pcbY={11.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB6 />} noSchematicRepresentation={true}/>

    {/* C153: 100 nF */}
    <capacitor name={"C153"} pcbX={-39.4} pcbY={9.85} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C153 />} schX={-2.25} schY={-5.4} schRotation={90} schSheetName={"Power"}/>

    {/* C80: 1 uF */}
    <capacitor name={"C80"} pcbX={-53.6} pcbY={19.6} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C80 />} schX={-13.649999999999999} schY={4.2} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* U3: GT4227 */}
    <chip name={"U3"} pcbX={-6.6} pcbY={-16.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"GT4227"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* R89: 18.7k */}
    <resistor name={"R89"} pcbX={57.6} pcbY={22.2} pcbRotation={-90} resistance={"18.7kohm"} footprint={<Footprint_R89 />} schX={-9.35} schY={3.5999999999999996} schRotation={-90} schSheetName={"Power"}/>

    {/* FID4: Fiducial_1mm_Mask2mm */}
    <chip name={"FID4"} pcbX={51} pcbY={35.5} pcbRotation={0} pinLabels={{}} displayName={"Fiducial_1mm_Mask2mm"} footprint={<Footprint_FID4 />} noSchematicRepresentation={true}/>

    {/* H2: MountingHole_Pad */}
    <chip name={"H2"} pcbX={-56} pcbY={-33.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* H7: MountingHole_Pad */}
    <chip name={"H7"} pcbX={57.5} pcbY={5.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H7 />} noSchematicRepresentation={true}/>

    {/* C52: 1 uF */}
    <capacitor name={"C52"} pcbX={-40.65} pcbY={-26.35} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C52 />} schX={-3.700000000000001} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* Q9: 2PNP */}
    <chip name={"Q9"} pcbX={55.1} pcbY={25.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"2PNP"} footprint={<Footprint_Q9 />} noSchematicRepresentation={true}/>

    {/* L18: 1.6 nH */}
    <inductor name={"L18"} pcbX={-36.75} pcbY={-18} pcbRotation={180} inductance={"1.6nH"} footprint={<Footprint_L18 />} schX={-0.3500000000000014} schY={0.09999999999999964} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* C200: 10 uF */}
    <capacitor name={"C200"} pcbX={-48.4} pcbY={-19.7} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C200 />} schX={-1.700000000000001} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C185: 1 uF */}
    <capacitor name={"C185"} pcbX={9.7} pcbY={7.95} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C185 />} schX={8.749999999999996} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* R29: 100 */}
    <resistor name={"R29"} pcbX={-47.4} pcbY={-26.4} pcbRotation={-90} resistance={"100ohm"} footprint={<Footprint_R29 />} schX={5.299999999999999} schY={-2.3999999999999986} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C76: 180 pF */}
    <capacitor name={"C76"} pcbX={-10.2} pcbY={-16} pcbRotation={180} capacitance={"180pF"} footprint={<Footprint_C76 />} schX={1.5999999999999996} schY={1.299999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C72: 1 uF */}
    <capacitor name={"C72"} pcbX={-4.6} pcbY={-21} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C72 />} schX={9.9} schY={-3.6000000000000014} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* L16: 1.8 nH */}
    <inductor name={"L16"} pcbX={-35.7} pcbY={-16.25} pcbRotation={90} inductance={"1.8nH"} footprint={<Footprint_L16 />} schX={-1.549999999999999} schY={0.09999999999999964} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* R110: 330 */}
    <resistor name={"R110"} pcbX={-3.9} pcbY={-12.2} pcbRotation={0} resistance={"330ohm"} footprint={<Footprint_R110 />} schX={0.3000000000000007} schY={4.799999999999999} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* C139: 1 uF */}
    <capacitor name={"C139"} pcbX={-46.1} pcbY={-17.7} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C139 />} schX={-4.300000000000001} schY={-3.299999999999999} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C110: 1 uF */}
    <capacitor name={"C110"} pcbX={-56.7} pcbY={-3.8} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C110 />} schX={-11.649999999999999} schY={4.2} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R106: 4.7k */}
    <resistor name={"R106"} pcbX={45.05} pcbY={0.6} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R106 />} schX={1.950000000000001} schY={2.55} schRotation={180} schSheetName={"USB"}/>

    {/* L28: 18 nH */}
    <inductor name={"L28"} pcbX={-44.2} pcbY={-8} pcbRotation={0} inductance={"18nH"} footprint={<Footprint_L28 />} schX={7.600000000000001} schY={0.6000000000000005} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C109: 33 pF */}
    <capacitor name={"C109"} pcbX={-33.9} pcbY={-0.9} pcbRotation={90} capacitance={"33pF"} footprint={<Footprint_C109 />} schX={-4.199999999999999} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R151: 1k */}
    <resistor name={"R151"} pcbX={-40} pcbY={-3.6} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R151 />} schX={-2.5} schY={-1.4999999999999982} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R21: 100 */}
    <resistor name={"R21"} pcbX={22.8} pcbY={2.6} pcbRotation={-90} resistance={"100ohm"} footprint={<Footprint_R21 />} schX={-10.750000000000002} schY={-6.200000000000001} schRotation={180} schSheetName={"FPGA"}/>

    {/* L14: 5.6 nH */}
    <inductor name={"L14"} pcbX={-29.4} pcbY={-19.4} pcbRotation={90} inductance={"5.6nH"} footprint={<Footprint_L14 />} schX={-0.15000000000000036} schY={2.7} schRotation={180} schSheetName={"Image Reject Filters"}/>

    {/* RN5: 100 */}
    <chip name={"RN5"} pcbX={-5.3} pcbY={-1.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN5 />} noSchematicRepresentation={true}/>

    {/* L31: 56 nH */}
    <inductor name={"L31"} pcbX={-42.75} pcbY={-26.5} pcbRotation={0} inductance={"56nH"} footprint={<Footprint_L31 />} schX={-1.7763568394002505e-15} schY={4.1000000000000005} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C196: 1 uF */}
    <capacitor name={"C196"} pcbX={19.3} pcbY={8.75} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C196 />} schX={9.75} schY={-2.1000000000000014} schRotation={-90} schSheetName={"FPGA"}/>

    {/* Q6: PMOS */}
    <chip name={"Q6"} pcbX={27.7} pcbY={4.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"PMOS"} footprint={<Footprint_Q6 />} noSchematicRepresentation={true}/>

    {/* L4: 100 uH */}
    <inductor name={"L4"} pcbX={-42.9} pcbY={-29.1} pcbRotation={90} inductance={"100uH"} footprint={<Footprint_L4 />} schX={-1.7763568394002505e-15} schY={4.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C166: 10 uF */}
    <capacitor name={"C166"} pcbX={8.7} pcbY={-13.2} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C166 />} schX={0.05000000000000071} schY={0.2999999999999998} schRotation={-90} schSheetName={"Power"}/>

    {/* C142: 1 uF */}
    <capacitor name={"C142"} pcbX={-8.25} pcbY={-16.35} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C142 />} schX={6.9} schY={-3.6000000000000014} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* L17: 1.8 nH */}
    <inductor name={"L17"} pcbX={-35} pcbY={-19.05} pcbRotation={-90} inductance={"1.8nH"} footprint={<Footprint_L17 />} schX={0.8499999999999996} schY={0.09999999999999964} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* L33: 100 uH */}
    <inductor name={"L33"} pcbX={-41.95} pcbY={-2.6} pcbRotation={90} inductance={"100uH"} footprint={<Footprint_L33 />} schX={3.5} schY={1.4000000000000012} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C68: 1 uF */}
    <capacitor name={"C68"} pcbX={-45.35} pcbY={-23.4} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C68 />} schX={4.9} schY={-0.6999999999999993} schRotation={180} schSheetName={"RF Front End"}/>

    {/* C190: 1 uF */}
    <capacitor name={"C190"} pcbX={-46.95} pcbY={-5.55} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C190 />} schX={8} schY={1.9000000000000004} schRotation={-90} schSheetName={"Mixer"}/>

    {/* JP1: SolderJumper_2_Bridged */}
    <chip name={"JP1"} pcbX={23.45} pcbY={-34} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"SolderJumper_2_Bridged"} footprint={<Footprint_JP1 />} noSchematicRepresentation={true}/>

    {/* R153: 1k */}
    <resistor name={"R153"} pcbX={-42.75} pcbY={-27.2} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R153 />} schX={0.8999999999999986} schY={4.1000000000000005} schRotation={90} schSheetName={"RF Front End"}/>

    {/* U22: LDO_2V5 */}
    <chip name={"U22"} pcbX={21.7} pcbY={12} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"LDO_2V5"} footprint={<Footprint_U22 />} noSchematicRepresentation={true}/>

    {/* C186: 10 uF */}
    <capacitor name={"C186"} pcbX={-3.6} pcbY={-4.1} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C186 />} schX={-7.8999999999999995} schY={3.999999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* R100: 10k */}
    <resistor name={"R100"} pcbX={37.6} pcbY={-33.4} pcbRotation={180} resistance={"10kohm"} footprint={<Footprint_R100 />} schX={-9.35} schY={-2.5} schRotation={90} schSheetName={"Power"}/>

    {/* R91: 18.7k */}
    <resistor name={"R91"} pcbX={42.3} pcbY={18.3} pcbRotation={0} resistance={"18.7kohm"} footprint={<Footprint_R91 />} schX={-9.35} schY={0.2999999999999998} schRotation={-90} schSheetName={"Power"}/>

    {/* R23: 33 */}
    <resistor name={"R23"} pcbX={2.1} pcbY={-25.15} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R23 />} schX={0.9499999999999993} schY={-2.6999999999999975} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R129: 1k */}
    <resistor name={"R129"} pcbX={-43.7} pcbY={-19.1} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R129 />} schX={-4.500000000000001} schY={-2.599999999999998} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C188: 0.3 pF */}
    <capacitor name={"C188"} pcbX={-44.2} pcbY={-9.4} pcbRotation={180} capacitance={"0.3pF"} footprint={<Footprint_C188 />} schX={8.3} schY={-0.29999999999999893} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C96: 1.6 pF */}
    <capacitor name={"C96"} pcbX={-33.95} pcbY={-18.7} pcbRotation={0} capacitance={"1.6pF"} footprint={<Footprint_C96 />} schX={1.4499999999999993} schY={0.5} schRotation={0} schSheetName={"Image Reject Filters"}/>

    {/* U13: 74LVC1G86 */}
    <chip name={"U13"} pcbX={-38.6} pcbY={-30.4} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74LVC1G86"} footprint={<Footprint_U13 />} noSchematicRepresentation={true}/>

    {/* FB3: Ferrite */}
    <chip name={"FB3"} pcbX={-38.5} pcbY={7.8} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB3 />} noSchematicRepresentation={true}/>

    {/* RN3: 100 */}
    <chip name={"RN3"} pcbX={10.45} pcbY={9.3} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN3 />} noSchematicRepresentation={true}/>

    {/* FL3: BPF */}
    <chip name={"FL3"} pcbX={-25.2} pcbY={-21.1} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"BPF"} footprint={<Footprint_FL3 />} noSchematicRepresentation={true}/>

    {/* R111: 330 */}
    <resistor name={"R111"} pcbX={-5.3} pcbY={-12.2} pcbRotation={180} resistance={"330ohm"} footprint={<Footprint_R111 />} schX={0.3000000000000007} schY={3.999999999999999} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* J3: RF_SHIELD_FRAME */}
    <chip name={"J3"} pcbX={-27} pcbY={-14.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"RF_SHIELD_FRAME"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* C167: 10 uF */}
    <capacitor name={"C167"} pcbX={8.7} pcbY={-18.2} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C167 />} schX={1.4499999999999993} schY={0.2999999999999998} schRotation={-90} schSheetName={"Power"}/>

    {/* C212: 1 uF */}
    <capacitor name={"C212"} pcbX={-22.3} pcbY={-31.25} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C212 />} schX={0.4499999999999993} schY={-5.85} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* R71: 5.1k */}
    <resistor name={"R71"} pcbX={29.4} pcbY={7.4} pcbRotation={90} resistance={"5.1kohm"} footprint={<Footprint_R71 />} schX={6.85} schY={4.299999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C108: 180 pF */}
    <capacitor name={"C108"} pcbX={-4.6} pcbY={-11.5} pcbRotation={180} capacitance={"180pF"} footprint={<Footprint_C108 />} schX={-0.1999999999999993} schY={4.399999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* R92: 4.7k */}
    <resistor name={"R92"} pcbX={-7.55} pcbY={-27.55} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R92 />} schX={-5.249999999999999} schY={2.95} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* C148: 1 uF */}
    <capacitor name={"C148"} pcbX={13.92} pcbY={8.93} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C148 />} schX={3.7499999999999964} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* D18: TVS */}
    <chip name={"D18"} pcbX={50.5} pcbY={16.7} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"TVS"} footprint={<Footprint_D18 />} noSchematicRepresentation={true}/>

    {/* R78: 2.2k */}
    <resistor name={"R78"} pcbX={41.75} pcbY={16.1} pcbRotation={-90} resistance={"2.2kohm"} footprint={<Footprint_R78 />} schX={-7.55} schY={0.2999999999999998} schRotation={0} schSheetName={"Power"}/>

    {/* C69: 1 uF */}
    <capacitor name={"C69"} pcbX={-46.35} pcbY={-24.75} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C69 />} schX={5.6} schY={-3} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* R86: 33k */}
    <resistor name={"R86"} pcbX={57.45} pcbY={26.35} pcbRotation={180} resistance={"33kohm"} footprint={<Footprint_R86 />} schX={-8.55} schY={4.499999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* D16: 5.6 V */}
    <chip name={"D16"} pcbX={57.8} pcbY={23.7} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.6 V"} footprint={<Footprint_D16 />} noSchematicRepresentation={true}/>

    {/* R121: 12k */}
    <resistor name={"R121"} pcbX={-18.45} pcbY={-6} pcbRotation={90} resistance={"12kohm"} footprint={<Footprint_R121 />} schX={-4.5} schY={-0.6000000000000014} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C33: 1 uF */}
    <capacitor name={"C33"} pcbX={38.1} pcbY={-31.9} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C33 />} schX={-8.85} schY={-2.5} schRotation={-90} schSheetName={"Power"}/>

    {/* R24: 1k */}
    <resistor name={"R24"} pcbX={-7.55} pcbY={-26.85} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R24 />} schX={-5.6499999999999995} schY={3.3500000000000005} schRotation={0} schSheetName={"Switch Control"}/>

    {/* R32: 33 */}
    <resistor name={"R32"} pcbX={0.8} pcbY={-27.5} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R32 />} schX={0.9499999999999993} schY={-1.8999999999999986} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* C39: 1 uF */}
    <capacitor name={"C39"} pcbX={12.9} pcbY={-30.65} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C39 />} schX={-7.550000000000001} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C141: 1 uF */}
    <capacitor name={"C141"} pcbX={-6.7} pcbY={-9.6} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C141 />} schX={5.9} schY={-3.6000000000000014} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* FID1: Fiducial_1mm_Mask2mm */}
    <chip name={"FID1"} pcbX={-51.5} pcbY={31.5} pcbRotation={0} pinLabels={{}} displayName={"Fiducial_1mm_Mask2mm"} footprint={<Footprint_FID1 />} noSchematicRepresentation={true}/>

    {/* C204: 10 uF */}
    <capacitor name={"C204"} pcbX={-23.1} pcbY={0.5} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C204 />} schX={0.29999999999999893} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C91: 1.6 pF */}
    <capacitor name={"C91"} pcbX={-34.65} pcbY={-16.6} pcbRotation={180} capacitance={"1.6pF"} footprint={<Footprint_C91 />} schX={-2.1500000000000004} schY={0.5} schRotation={0} schSheetName={"Image Reject Filters"}/>

    {/* R149: 0 */}
    <resistor name={"R149"} pcbX={-7.6} pcbY={-24.25} pcbRotation={0} resistance={"0ohm"} footprint={<Footprint_R149 />} schX={-1.6999999999999993} schY={-1.049999999999999} schRotation={0} schSheetName={"IF Transceiver"}/>

    {/* C202: 1 uF */}
    <capacitor name={"C202"} pcbX={-29.8} pcbY={-3.45} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C202 />} schX={5.5} schY={5.200000000000001} schRotation={90} schSheetName={"Mixer"}/>

    {/* FB2: Ferrite */}
    <chip name={"FB2"} pcbX={8.7} pcbY={-15.7} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB2 />} noSchematicRepresentation={true}/>

    {/* R123: 10 */}
    <resistor name={"R123"} pcbX={-44.55} pcbY={-2.75} pcbRotation={90} resistance={"10ohm"} footprint={<Footprint_R123 />} schX={1.799999999999999} schY={-0.3999999999999986} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R135: 12k */}
    <resistor name={"R135"} pcbX={-42.25} pcbY={-7.25} pcbRotation={90} resistance={"12kohm"} footprint={<Footprint_R135 />} schX={4.1} schY={1.700000000000001} schRotation={90} schSheetName={"Mixer"}/>

    {/* U34: GT4227 */}
    <chip name={"U34"} pcbX={-12.7} pcbY={-11.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"GT4227"} footprint={<Footprint_U34 />} noSchematicRepresentation={true}/>

    {/* C189: 1 uF */}
    <capacitor name={"C189"} pcbX={-37.9} pcbY={-14.2} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C189 />} schX={8.600000000000001} schY={0.3000000000000016} schRotation={180} schSheetName={"Mixer"}/>

    {/* R107: 4.7k */}
    <resistor name={"R107"} pcbX={41.5} pcbY={-2.9} pcbRotation={0} resistance={"4.7kohm"} footprint={<Footprint_R107 />} schX={-1.9499999999999993} schY={-2.1999999999999993} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* C101: 0.7 pF */}
    <capacitor name={"C101"} pcbX={-36.4} pcbY={-16.95} pcbRotation={-90} capacitance={"0.7pF"} footprint={<Footprint_C101 />} schX={-0.9500000000000011} schY={0.5} schRotation={0} schSheetName={"Image Reject Filters"}/>

    {/* C207: 1 uF */}
    <capacitor name={"C207"} pcbX={-35.2} pcbY={-26.55} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C207 />} schX={-3.3000000000000007} schY={3.4000000000000004} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* J1: USB_C */}
    <chip name={"J1"} pcbX={57.35} pcbY={13.5} pcbRotation={90} pinLabels={{ "pin1": ["A1"], "pin2": ["A4"], "pin3": ["A5"], "pin4": ["A6"], "pin5": ["A7"], "pin6": ["A8"], "pin7": ["A9"], "pin8": ["A12"], "pin9": ["B1"], "pin10": ["B4"], "pin11": ["B5"], "pin12": ["B6"], "pin13": ["B7"], "pin14": ["B8"], "pin15": ["B9"], "pin16": ["B12"], "pin17": ["S1"] }} displayName={"USB_C"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* U35: GT4227 */}
    <chip name={"U35"} pcbX={-12.2} pcbY={-16.75} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"GT4227"} footprint={<Footprint_U35 />} noSchematicRepresentation={true}/>

    {/* L19: 47 uH */}
    <inductor name={"L19"} pcbX={-50.1} pcbY={-27.4} pcbRotation={90} inductance={"47uH"} footprint={<Footprint_L19 />} schX={6.999999999999998} schY={1} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C117: 10 uF */}
    <capacitor name={"C117"} pcbX={14.2} pcbY={11.6} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C117 />} schX={6.350000000000001} schY={-2.1999999999999993} schRotation={-90} schSheetName={"FPGA"}/>

    {/* C187: 1 uF */}
    <capacitor name={"C187"} pcbX={-8.7} pcbY={2.5} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C187 />} schX={-8.9} schY={3.999999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* R137: 470 */}
    <resistor name={"R137"} pcbX={-43.15} pcbY={-4.15} pcbRotation={-90} resistance={"470ohm"} footprint={<Footprint_R137 />} schX={2.6000000000000014} schY={1.4000000000000012} schRotation={90} schSheetName={"Mixer"}/>

    {/* C155: 100 nF */}
    <capacitor name={"C155"} pcbX={4} pcbY={-29.2} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C155 />} schX={-4.050000000000001} schY={0.3000000000000016} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R97: 4.7k */}
    <resistor name={"R97"} pcbX={-4.6} pcbY={-28.6} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R97 />} schX={-5.249999999999999} schY={-2.75} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* R142: 33 */}
    <resistor name={"R142"} pcbX={-31.2} pcbY={-6.95} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R142 />} schX={1} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* D13: 0 */}
    <chip name={"D13"} pcbX={44.6} pcbY={20.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"0"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* X1: TCXO */}
    <chip name={"X1"} pcbX={2.6} pcbY={-31.2} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"TCXO"} footprint={<Footprint_X1 />} noSchematicRepresentation={true}/>

    {/* H5: MountingHole_Pad */}
    <chip name={"H5"} pcbX={-56} pcbY={-16} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H5 />} noSchematicRepresentation={true}/>

    {/* C61: 0.7 pF */}
    <capacitor name={"C61"} pcbX={-32.2} pcbY={-19.4} pcbRotation={90} capacitance={"0.7pF"} footprint={<Footprint_C61 />} schX={2.25} schY={2.3000000000000007} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* D17: 5.6 V */}
    <chip name={"D17"} pcbX={40.6} pcbY={18.3} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"5.6 V"} footprint={<Footprint_D17 />} noSchematicRepresentation={true}/>

    {/* R140: 100 */}
    <resistor name={"R140"} pcbX={24.55} pcbY={-6.9} pcbRotation={90} resistance={"100ohm"} footprint={<Footprint_R140 />} schX={-1.75} schY={7} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* C181: 10 uF */}
    <capacitor name={"C181"} pcbX={25.6} pcbY={9.4} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C181 />} schX={7.85} schY={5.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C51: 0.7 pF */}
    <capacitor name={"C51"} pcbX={-30.8} pcbY={-17.3} pcbRotation={90} capacitance={"0.7pF"} footprint={<Footprint_C51 />} schX={-2.5500000000000007} schY={2.3000000000000007} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* L6: 5.6 nH */}
    <inductor name={"L6"} pcbX={-31.75} pcbY={-4.5} pcbRotation={-90} inductance={"5.6nH"} footprint={<Footprint_L6 />} schX={4.600000000000001} schY={4.6000000000000005} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C107: 180 pF */}
    <capacitor name={"C107"} pcbX={-4.6} pcbY={-16} pcbRotation={180} capacitance={"180pF"} footprint={<Footprint_C107 />} schX={1.5999999999999996} schY={4.399999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* R60: 5.1k */}
    <resistor name={"R60"} pcbX={-41.25} pcbY={9.85} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R60 />} schX={-2.25} schY={-6.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* R35: 1k */}
    <resistor name={"R35"} pcbX={-48.45} pcbY={-26.45} pcbRotation={90} resistance={"1kohm"} footprint={<Footprint_R35 />} schX={6.6} schY={1.4000000000000004} schRotation={0} schSheetName={"RF Front End"}/>

    {/* C176: 1 uF */}
    <capacitor name={"C176"} pcbX={16.4} pcbY={8.93} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C176 />} schX={4.349999999999998} schY={-2.1999999999999993} schRotation={-90} schSheetName={"FPGA"}/>

    {/* C81: 1 uF */}
    <capacitor name={"C81"} pcbX={-56.7} pcbY={0.7} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C81 />} schX={-12.649999999999999} schY={4.2} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* L21: 100 uH */}
    <inductor name={"L21"} pcbX={-3.75} pcbY={-14.1} pcbRotation={-90} inductance={"100uH"} footprint={<Footprint_L21 />} schX={1.0999999999999996} schY={4.799999999999999} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* C180: 100 nF */}
    <capacitor name={"C180"} pcbX={30.3} pcbY={4.8} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C180 />} schX={6.85} schY={5.1} schRotation={90} schSheetName={"Power"}/>

    {/* R44: 10k */}
    <resistor name={"R44"} pcbX={21.5} pcbY={2.8} pcbRotation={0} resistance={"10kohm"} footprint={<Footprint_R44 />} schX={-5.850000000000001} schY={-8.6} schRotation={0} schSheetName={"FPGA"}/>

    {/* R154: 1k */}
    <resistor name={"R154"} pcbX={-37.7} pcbY={-27.25} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R154 />} schX={-3.0999999999999996} schY={4.1000000000000005} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R146: 220 */}
    <resistor name={"R146"} pcbX={-33.8} pcbY={-26.55} pcbRotation={180} resistance={"220ohm"} footprint={<Footprint_R146 />} schX={-3.3000000000000007} schY={2.8} schRotation={90} schSheetName={"RF Front End"}/>

    {/* L27: 100 uH */}
    <inductor name={"L27"} pcbX={-45.75} pcbY={-6.8} pcbRotation={-90} inductance={"100uH"} footprint={<Footprint_L27 />} schX={7.600000000000001} schY={1.4000000000000012} schRotation={-90} schSheetName={"Mixer"}/>

    {/* D15: Schottky */}
    <chip name={"D15"} pcbX={-46.35} pcbY={-23.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Schottky"} footprint={<Footprint_D15 />} noSchematicRepresentation={true}/>

    {/* R53: 1.8k */}
    <resistor name={"R53"} pcbX={31.8} pcbY={9.8} pcbRotation={-90} resistance={"1.8kohm"} footprint={<Footprint_R53 />} schX={5.85} schY={3.499999999999999} schRotation={0} schSheetName={"Power"}/>

    {/* C6: 3.3 nF */}
    <capacitor name={"C6"} pcbX={-36.65} pcbY={-30.8} pcbRotation={90} capacitance={"3.3nF"} footprint={<Footprint_C6 />} schX={-8} schY={5.4} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R150: 0 */}
    <resistor name={"R150"} pcbX={-40} pcbY={-4.65} pcbRotation={90} resistance={"0ohm"} footprint={<Footprint_R150 />} schX={-2.1999999999999993} schY={-1.0999999999999996} schRotation={0} schSheetName={"Mixer"}/>

    {/* U27: 74LVC1G32 */}
    <chip name={"U27"} pcbX={-28.7} pcbY={-30.3} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74LVC1G32"} footprint={<Footprint_U27 />} noSchematicRepresentation={true}/>

    {/* C174: 1 uF */}
    <capacitor name={"C174"} pcbX={10.1} pcbY={2.2} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C174 />} schX={6.75} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* R147: 220 */}
    <resistor name={"R147"} pcbX={-28.55} pcbY={-2.4} pcbRotation={90} resistance={"220ohm"} footprint={<Footprint_R147 />} schX={5.5} schY={4.6000000000000005} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C156: 1 uF */}
    <capacitor name={"C156"} pcbX={-12.3} pcbY={-9.6} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C156 />} schX={7.9} schY={-3.6000000000000014} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C95: 1 uF */}
    <capacitor name={"C95"} pcbX={-44.85} pcbY={-27.9} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C95 />} schX={-6.7} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C152: 330 pF */}
    <capacitor name={"C152"} pcbX={45.4} pcbY={1.65} pcbRotation={0} capacitance={"330pF"} footprint={<Footprint_C152 />} schX={1.450000000000001} schY={1.3499999999999996} schRotation={-90} schSheetName={"USB"}/>

    {/* R156: 330 */}
    <resistor name={"R156"} pcbX={43.3} pcbY={0.25} pcbRotation={180} resistance={"330ohm"} footprint={<Footprint_R156 />} schX={2.450000000000001} schY={1.3499999999999996} schRotation={-90} schSheetName={"USB"}/>

    {/* FB1: Ferrite */}
    <chip name={"FB1"} pcbX={48.2} pcbY={23.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* C201: 10 uF */}
    <capacitor name={"C201"} pcbX={-22.1} pcbY={-17} pcbRotation={90} capacitance={"10uF"} footprint={<Footprint_C201 />} schX={-0.7000000000000011} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* R138: 1k */}
    <resistor name={"R138"} pcbX={-44.2} pcbY={-3.8} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R138 />} schX={2.6000000000000014} schY={0.6000000000000005} schRotation={90} schSheetName={"Mixer"}/>

    {/* R45: 1.8k */}
    <resistor name={"R45"} pcbX={15.9} pcbY={-1.7} pcbRotation={-90} resistance={"1.8kohm"} footprint={<Footprint_R45 />} schX={-3.650000000000002} schY={-8.6} schRotation={0} schSheetName={"FPGA"}/>

    {/* L12: 56 nH */}
    <inductor name={"L12"} pcbX={-43} pcbY={-19.1} pcbRotation={-90} inductance={"56nH"} footprint={<Footprint_L12 />} schX={-3.5999999999999996} schY={-2.599999999999998} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C193: 1 uF */}
    <capacitor name={"C193"} pcbX={-42.25} pcbY={-5.85} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C193 />} schX={0.6000000000000014} schY={-6.199999999999999} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R126: 4.7k */}
    <resistor name={"R126"} pcbX={-48.45} pcbY={-28.1} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R126 />} schX={8.499999999999998} schY={1.9000000000000004} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C149: 1 uF */}
    <capacitor name={"C149"} pcbX={20.23} pcbY={5.95} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C149 />} schX={4.75} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* R113: 10k */}
    <resistor name={"R113"} pcbX={-13.75} pcbY={-14.7} pcbRotation={90} resistance={"10kohm"} footprint={<Footprint_R113 />} schX={-2.9000000000000004} schY={5.299999999999999} schRotation={-90} schSheetName={"ADC, DAC"}/>

    {/* C4: 3.3 nF */}
    <capacitor name={"C4"} pcbX={-41.65} pcbY={-17.55} pcbRotation={180} capacitance={"3.3nF"} footprint={<Footprint_C4 />} schX={-6.4} schY={-1.3999999999999986} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R112: 330 */}
    <resistor name={"R112"} pcbX={-10.9} pcbY={-12.2} pcbRotation={180} resistance={"330ohm"} footprint={<Footprint_R112 />} schX={0.3000000000000007} schY={0.8999999999999986} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* H8: MountingHole_Pad */}
    <chip name={"H8"} pcbX={-49} pcbY={10.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H8 />} noSchematicRepresentation={true}/>

    {/* C206: 1 uF */}
    <capacitor name={"C206"} pcbX={-39.2} pcbY={-32.15} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C206 />} schX={-2.700000000000001} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* L22: 100 uH */}
    <inductor name={"L22"} pcbX={-5.45} pcbY={-14.1} pcbRotation={-90} inductance={"100uH"} footprint={<Footprint_L22 />} schX={1.0999999999999996} schY={3.999999999999999} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* C45: 2.2 nF */}
    <capacitor name={"C45"} pcbX={-11.8} pcbY={-28.5} pcbRotation={180} capacitance={"2.2nF"} footprint={<Footprint_C45 />} schX={-1.299999999999999} schY={0.05000000000000071} schRotation={90} schSheetName={"IF Transceiver"}/>

    {/* R38: 180k */}
    <resistor name={"R38"} pcbX={40.9} pcbY={-8.3} pcbRotation={180} resistance={"180kohm"} footprint={<Footprint_R38 />} schX={5.749999999999998} schY={-6.600000000000001} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R108: 33 */}
    <resistor name={"R108"} pcbX={15.2} pcbY={-28.5} pcbRotation={90} resistance={"33ohm"} footprint={<Footprint_R108 />} schX={7.25} schY={0.5000000000000009} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R127: 100 */}
    <resistor name={"R127"} pcbX={19.3} pcbY={-13.7} pcbRotation={0} resistance={"100ohm"} footprint={<Footprint_R127 />} schX={6.149999999999997} schY={2} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* C205: 1 uF */}
    <capacitor name={"C205"} pcbX={19.55} pcbY={-0.4} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C205 />} schX={10.75} schY={-2.1000000000000014} schRotation={-90} schSheetName={"FPGA"}/>

    {/* U8: GT4227 */}
    <chip name={"U8"} pcbX={-7.1} pcbY={-11.25} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"GT4227"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* R58: 820k */}
    <resistor name={"R58"} pcbX={56.6} pcbY={23.3} pcbRotation={-90} resistance={"820kohm"} footprint={<Footprint_R58 />} schX={-6.45} schY={4.999999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* R80: 5.1k */}
    <resistor name={"R80"} pcbX={42.3} pcbY={17.3} pcbRotation={0} resistance={"5.1kohm"} footprint={<Footprint_R80 />} schX={-7.949999999999999} schY={0} schRotation={-90} schSheetName={"Power"}/>

    {/* C198: 0.7 pF */}
    <capacitor name={"C198"} pcbX={-31.75} pcbY={-5.9} pcbRotation={-90} capacitance={"0.7pF"} footprint={<Footprint_C198 />} schX={1} schY={4.6000000000000005} schRotation={90} schSheetName={"Mixer"}/>

    {/* R109: 4.7k */}
    <resistor name={"R109"} pcbX={-20.4} pcbY={-26.7} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R109 />} schX={-7.799999999999999} schY={-2.1500000000000004} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* Q4: PMOS */}
    <chip name={"Q4"} pcbX={54.0375} pcbY={22.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"PMOS"} footprint={<Footprint_Q4 />} noSchematicRepresentation={true}/>

    {/* R131: 220 */}
    <resistor name={"R131"} pcbX={-46.1} pcbY={-16.3} pcbRotation={-90} resistance={"220ohm"} footprint={<Footprint_R131 />} schX={-4.300000000000001} schY={-3.9000000000000004} schRotation={90} schSheetName={"RF Front End"}/>

    {/* C32: 1 uF */}
    <capacitor name={"C32"} pcbX={43.1} pcbY={-31.2} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C32 />} schX={-5.35} schY={-3.5} schRotation={-90} schSheetName={"Power"}/>

    {/* R125: 12k */}
    <resistor name={"R125"} pcbX={-56.7} pcbY={-0.6} pcbRotation={0} resistance={"12kohm"} footprint={<Footprint_R125 />} schX={-13.45} schY={-2} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R88: 18.7k */}
    <resistor name={"R88"} pcbX={57.7} pcbY={24.8} pcbRotation={0} resistance={"18.7kohm"} footprint={<Footprint_R88 />} schX={-9.35} schY={5.1} schRotation={-90} schSheetName={"Power"}/>

    {/* R117: 470 */}
    <resistor name={"R117"} pcbX={-36.3} pcbY={-28.95} pcbRotation={0} resistance={"470ohm"} footprint={<Footprint_R117 />} schX={-3.0999999999999996} schY={4.9} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R132: 470 */}
    <resistor name={"R132"} pcbX={-46.95} pcbY={-6.95} pcbRotation={90} resistance={"470ohm"} footprint={<Footprint_R132 />} schX={6.699999999999999} schY={1.4000000000000012} schRotation={90} schSheetName={"Mixer"}/>

    {/* L23: 100 uH */}
    <inductor name={"L23"} pcbX={-9.35} pcbY={-14.1} pcbRotation={-90} inductance={"100uH"} footprint={<Footprint_L23 />} schX={1.0999999999999996} schY={1.6999999999999993} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* C154: 10 uF */}
    <capacitor name={"C154"} pcbX={-36} pcbY={6.8} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C154 />} schX={0.05000000000000071} schY={-5.299999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* R130: 220 */}
    <resistor name={"R130"} pcbX={-46.95} pcbY={-8.35} pcbRotation={-90} resistance={"220ohm"} footprint={<Footprint_R130 />} schX={6.900000000000002} schY={-0.6999999999999993} schRotation={90} schSheetName={"Mixer"}/>

    {/* C47: 68 pF */}
    <capacitor name={"C47"} pcbX={-10.85} pcbY={-22.3} pcbRotation={180} capacitance={"68pF"} footprint={<Footprint_C47 />} schX={-0.5} schY={0.6500000000000004} schRotation={90} schSheetName={"IF Transceiver"}/>

    {/* C103: 0.7 pF */}
    <capacitor name={"C103"} pcbX={-36.05} pcbY={-18.7} pcbRotation={0} capacitance={"0.7pF"} footprint={<Footprint_C103 />} schX={0.25} schY={0.5} schRotation={0} schSheetName={"Image Reject Filters"}/>

    {/* FB4: Ferrite */}
    <chip name={"FB4"} pcbX={28.2} pcbY={7.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB4 />} noSchematicRepresentation={true}/>

    {/* R141: 100 */}
    <resistor name={"R141"} pcbX={19.3} pcbY={-14.4} pcbRotation={180} resistance={"100ohm"} footprint={<Footprint_R141 />} schX={-1.75} schY={6.7} schRotation={180} schSheetName={"Microcontroller"}/>

    {/* H4: MountingHole_Pad */}
    <chip name={"H4"} pcbX={56} pcbY={33.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H4 />} noSchematicRepresentation={true}/>

    {/* R114: 1k */}
    <resistor name={"R114"} pcbX={-39.25} pcbY={-26.35} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R114 />} schX={-0.5} schY={5.2} schRotation={90} schSheetName={"RF Front End"}/>

    {/* H6: MountingHole_Pad */}
    <chip name={"H6"} pcbX={49} pcbY={-34.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H6 />} noSchematicRepresentation={true}/>

    {/* U33: 74HC4051 */}
    <chip name={"U33"} pcbX={12.8} pcbY={-27.8} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"] }} displayName={"74HC4051"} footprint={<Footprint_U33 />} noSchematicRepresentation={true}/>

    {/* R134: 180 */}
    <resistor name={"R134"} pcbX={-44.55} pcbY={-5.55} pcbRotation={-90} resistance={"180ohm"} footprint={<Footprint_R134 />} schX={5.100000000000001} schY={-1.0999999999999996} schRotation={180} schSheetName={"Mixer"}/>

    {/* C140: 1 uF */}
    <capacitor name={"C140"} pcbX={-18} pcbY={6.3} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C140 />} schX={-9.65} schY={4.2} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R77: 2.2k */}
    <resistor name={"R77"} pcbX={44.7} pcbY={17.1} pcbRotation={-90} resistance={"2.2kohm"} footprint={<Footprint_R77 />} schX={-7.55} schY={3.5999999999999996} schRotation={0} schSheetName={"Power"}/>

    {/* Q10: 2NPN */}
    <chip name={"Q10"} pcbX={55.1} pcbY={28.5} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"2NPN"} footprint={<Footprint_Q10 />} noSchematicRepresentation={true}/>

    {/* C208: 1 uF */}
    <capacitor name={"C208"} pcbX={-33.55} pcbY={-28.05} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C208 />} schX={-4.400000000000001} schY={4.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* R43: 220 */}
    <resistor name={"R43"} pcbX={-30.35} pcbY={-5.9} pcbRotation={90} resistance={"220ohm"} footprint={<Footprint_R43 />} schX={0.3000000000000007} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R57: 33k */}
    <resistor name={"R57"} pcbX={40.9} pcbY={22.9} pcbRotation={90} resistance={"33kohm"} footprint={<Footprint_R57 />} schX={-5.65} schY={0.5999999999999996} schRotation={-90} schSheetName={"Power"}/>

    {/* U36: 74LVC1G86 */}
    <chip name={"U36"} pcbX={-4.6} pcbY={-19.25} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"] }} displayName={"74LVC1G86"} footprint={<Footprint_U36 />} noSchematicRepresentation={true}/>

    {/* C151: 330 pF */}
    <capacitor name={"C151"} pcbX={44} pcbY={1.65} pcbRotation={180} capacitance={"330pF"} footprint={<Footprint_C151 />} schX={0.34999999999999964} schY={1.3499999999999996} schRotation={-90} schSheetName={"USB"}/>

    {/* C192: 1 uF */}
    <capacitor name={"C192"} pcbX={-44.55} pcbY={-6.95} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C192 />} schX={5.699999999999999} schY={-1.0999999999999996} schRotation={180} schSheetName={"Mixer"}/>

    {/* R119: DNP */}
    <chip name={"R119"} pcbX={-20.1} pcbY={-11.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R119 />} noSchematicRepresentation={true}/>

    {/* R98: 1k */}
    <resistor name={"R98"} pcbX={-30.1} pcbY={-32.1} pcbRotation={0} resistance={"1kohm"} footprint={<Footprint_R98 />} schX={-5.6499999999999995} schY={-0.75} schRotation={0} schSheetName={"Switch Control"}/>

    {/* R145: 100 */}
    <resistor name={"R145"} pcbX={21.1} pcbY={-0.2} pcbRotation={90} resistance={"100ohm"} footprint={<Footprint_R145 />} schX={-7.050000000000001} schY={-6.600000000000003} schRotation={90} schSheetName={"FPGA"}/>

    {/* R143: 100 */}
    <resistor name={"R143"} pcbX={-28.55} pcbY={-7.3} pcbRotation={90} resistance={"100ohm"} footprint={<Footprint_R143 />} schX={2.0000000000000018} schY={4.6000000000000005} schRotation={90} schSheetName={"Mixer"}/>

    {/* U30: 74LVC1G3157 */}
    <chip name={"U30"} pcbX={13} pcbY={-20.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"74LVC1G3157"} footprint={<Footprint_U30 />} noSchematicRepresentation={true}/>

    {/* C191: 1 uF */}
    <capacitor name={"C191"} pcbX={-45.6} pcbY={-8.7} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C191 />} schX={6.900000000000002} schY={-0.09999999999999964} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C78: 1 uF */}
    <capacitor name={"C78"} pcbX={-39.4} pcbY={-28.65} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C78 />} schX={-2.0999999999999996} schY={2.4000000000000004} schRotation={180} schSheetName={"RF Front End"}/>

    {/* R99: 4.7k */}
    <resistor name={"R99"} pcbX={-28.7} pcbY={-32.1} pcbRotation={0} resistance={"4.7kohm"} footprint={<Footprint_R99 />} schX={-5.249999999999999} schY={-1.1500000000000004} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* L34: 33 nH */}
    <inductor name={"L34"} pcbX={-44.2} pcbY={-4.5} pcbRotation={180} inductance={"33nH"} footprint={<Footprint_L34 />} schX={3.5} schY={0.6000000000000005} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C150: 1 uF */}
    <capacitor name={"C150"} pcbX={12.11} pcbY={-0.38} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C150 />} schX={5.75} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* L24: 100 uH */}
    <inductor name={"L24"} pcbX={-11.05} pcbY={-14.1} pcbRotation={-90} inductance={"100uH"} footprint={<Footprint_L24 />} schX={1.0999999999999996} schY={0.8999999999999986} schRotation={0} schSheetName={"ADC, DAC"}/>

    {/* C182: 10 uF */}
    <capacitor name={"C182"} pcbX={25.6} pcbY={7.4} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C182 />} schX={8.950000000000001} schY={5.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C211: 1 uF */}
    <capacitor name={"C211"} pcbX={-44.55} pcbY={-1.35} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C211 />} schX={2.6999999999999993} schY={-2.1999999999999993} schRotation={90} schSheetName={"Mixer"}/>

    {/* C162: 1 uF */}
    <capacitor name={"C162"} pcbX={-56.7} pcbY={5.4} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C162 />} schX={-8.65} schY={4.2} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* R90: 18.7k */}
    <resistor name={"R90"} pcbX={40.3} pcbY={16.8} pcbRotation={90} resistance={"18.7kohm"} footprint={<Footprint_R90 />} schX={-9.35} schY={1.799999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* Q7: 2NPN */}
    <chip name={"Q7"} pcbX={31.5} pcbY={7.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"2NPN"} footprint={<Footprint_Q7 />} noSchematicRepresentation={true}/>

    {/* R139: 33 */}
    <resistor name={"R139"} pcbX={9.75} pcbY={-22.9} pcbRotation={-90} resistance={"33ohm"} footprint={<Footprint_R139 />} schX={0.9499999999999993} schY={-0.29999999999999893} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* C172: 10 uF */}
    <capacitor name={"C172"} pcbX={32.1} pcbY={12.2} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C172 />} schX={2.6500000000000004} schY={-1.8000000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* L26: 100 uH */}
    <inductor name={"L26"} pcbX={-44.9} pcbY={-17.15} pcbRotation={-90} inductance={"100uH"} footprint={<Footprint_L26 />} schX={-3.5999999999999996} schY={-1.799999999999999} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* C43: 1 uF */}
    <capacitor name={"C43"} pcbX={15.1} pcbY={-23.3} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C43 />} schX={-5.550000000000002} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* C147: 22 uF */}
    <capacitor name={"C147"} pcbX={45.7} pcbY={24.2} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C147 />} schX={-2.9499999999999993} schY={4.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* D14: PIN */}
    <chip name={"D14"} pcbX={-47.15} pcbY={-23.75} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"PIN"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* R148: 100 */}
    <resistor name={"R148"} pcbX={-7.6} pcbY={-23.55} pcbRotation={180} resistance={"100ohm"} footprint={<Footprint_R148 />} schX={-1.4000000000000004} schY={-1.4499999999999993} schRotation={-90} schSheetName={"IF Transceiver"}/>

    {/* R41: 33 */}
    <resistor name={"R41"} pcbX={6.9} pcbY={-21.8} pcbRotation={180} resistance={"33ohm"} footprint={<Footprint_R41 />} schX={0.9499999999999993} schY={1.3000000000000007} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* C175: 10 uF */}
    <capacitor name={"C175"} pcbX={21.7} pcbY={8.9} pcbRotation={180} capacitance={"10uF"} footprint={<Footprint_C175 />} schX={8.85} schY={-0.09999999999999964} schRotation={-90} schSheetName={"Power"}/>

    {/* L15: 4.7 nH */}
    <inductor name={"L15"} pcbX={-31.15} pcbY={-19.75} pcbRotation={0} inductance={"4.7nH"} footprint={<Footprint_L15 />} schX={1.4499999999999993} schY={2.7} schRotation={180} schSheetName={"Image Reject Filters"}/>

    {/* R79: 5.1k */}
    <resistor name={"R79"} pcbX={44.2} pcbY={18.3} pcbRotation={180} resistance={"5.1kohm"} footprint={<Footprint_R79 />} schX={-7.949999999999999} schY={3.3} schRotation={-90} schSheetName={"Power"}/>

    {/* C2: 1 uF */}
    <capacitor name={"C2"} pcbX={-46.05} pcbY={-31.3} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C2 />} schX={-5.7} schY={-5.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* R155: 10 */}
    <resistor name={"R155"} pcbX={-43.15} pcbY={-9.05} pcbRotation={-90} resistance={"10ohm"} footprint={<Footprint_R155 />} schX={8} schY={0.3000000000000016} schRotation={0} schSheetName={"Mixer"}/>

    {/* C169: 10 uF */}
    <capacitor name={"C169"} pcbX={-21.5} pcbY={7.2} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C169 />} schX={-2.549999999999999} schY={-1.8000000000000007} schRotation={-90} schSheetName={"Power"}/>

    {/* R12: 33 */}
    <resistor name={"R12"} pcbX={6.2} pcbY={-21.1} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R12 />} schX={0.9499999999999993} schY={0.5000000000000009} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R42: 220 */}
    <resistor name={"R42"} pcbX={-41} pcbY={-30.65} pcbRotation={90} resistance={"220ohm"} footprint={<Footprint_R42 />} schX={0.6999999999999993} schY={2.8} schRotation={90} schSheetName={"RF Front End"}/>

    {/* R81: 33k */}
    <resistor name={"R81"} pcbX={57.45} pcbY={25.65} pcbRotation={0} resistance={"33kohm"} footprint={<Footprint_R81 />} schX={-8.149999999999999} schY={4.799999999999999} schRotation={0} schSheetName={"Power"}/>

    {/* RN7: 100 */}
    <chip name={"RN7"} pcbX={18.9} pcbY={-1.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN7 />} noSchematicRepresentation={true}/>

    {/* H1: MountingHole_Pad */}
    <chip name={"H1"} pcbX={-56} pcbY={33.5} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"MountingHole_Pad"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* L30: 56 nH */}
    <inductor name={"L30"} pcbX={-31.05} pcbY={-5.9} pcbRotation={90} inductance={"56nH"} footprint={<Footprint_L30 />} schX={0} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* R115: 470 */}
    <resistor name={"R115"} pcbX={-40.8} pcbY={-28.65} pcbRotation={0} resistance={"470ohm"} footprint={<Footprint_R115 />} schX={-1.5} schY={2.4000000000000004} schRotation={180} schSheetName={"RF Front End"}/>

    {/* RN8: 100 */}
    <chip name={"RN8"} pcbX={22} pcbY={5} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"100"} footprint={<Footprint_RN8 />} noSchematicRepresentation={true}/>

    {/* C173: 1 uF */}
    <capacitor name={"C173"} pcbX={19.5} pcbY={12.5} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C173 />} schX={6.85} schY={-0.09999999999999964} schRotation={-90} schSheetName={"Power"}/>

    {/* C112: 100 pF */}
    <capacitor name={"C112"} pcbX={-49} pcbY={-25.4} pcbRotation={180} capacitance={"100pF"} footprint={<Footprint_C112 />} schX={6.200000000000001} schY={1} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* FL2: BPF */}
    <chip name={"FL2"} pcbX={-28.1} pcbY={-25.75} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"BPF"} footprint={<Footprint_FL2 />} noSchematicRepresentation={true}/>

    {/* C44: 100 pF */}
    <capacitor name={"C44"} pcbX={-13.55} pcbY={-28.15} pcbRotation={90} capacitance={"100pF"} footprint={<Footprint_C44 />} schX={-2.299999999999999} schY={0.6500000000000004} schRotation={90} schSheetName={"IF Transceiver"}/>

    {/* C54: 1.8 pF */}
    <capacitor name={"C54"} pcbX={-29.05} pcbY={-18.35} pcbRotation={0} capacitance={"1.8pF"} footprint={<Footprint_C54 />} schX={-0.9500000000000011} schY={2.3000000000000007} schRotation={-90} schSheetName={"Image Reject Filters"}/>

    {/* C183: 1 uF */}
    <capacitor name={"C183"} pcbX={21.1} pcbY={1.2} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C183 />} schX={7.7499999999999964} schY={-6.200000000000001} schRotation={-90} schSheetName={"FPGA"}/>

    {/* C163: 10 uF */}
    <capacitor name={"C163"} pcbX={-43.9} pcbY={7.6} pcbRotation={-90} capacitance={"10uF"} footprint={<Footprint_C163 />} schX={-4.05} schY={-5.299999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* L8: 4.7 nH */}
    <inductor name={"L8"} pcbX={-29.75} pcbY={-17.65} pcbRotation={180} inductance={"4.7nH"} footprint={<Footprint_L8 />} schX={-1.75} schY={2.7} schRotation={180} schSheetName={"Image Reject Filters"}/>

    {/* R95: 4.7k */}
    <resistor name={"R95"} pcbX={-9.2} pcbY={-31.1} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R95 />} schX={-5.249999999999999} schY={0.6500000000000004} schRotation={-90} schSheetName={"Switch Control"}/>

    {/* R103: 4.7k */}
    <resistor name={"R103"} pcbX={44.35} pcbY={0.6} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R103 />} schX={1.950000000000001} schY={1.75} schRotation={180} schSheetName={"USB"}/>

    {/* R101: 100k */}
    <resistor name={"R101"} pcbX={43.1} pcbY={-32.5} pcbRotation={0} resistance={"100kohm"} footprint={<Footprint_R101 />} schX={-6.55} schY={-3.5} schRotation={-90} schSheetName={"Power"}/>

    {/* U32: LDO_2V5 */}
    <chip name={"U32"} pcbX={-48.7} pcbY={-12.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"LDO_2V5"} footprint={<Footprint_U32 />} noSchematicRepresentation={true}/>

    {/* R144: 1k */}
    <resistor name={"R144"} pcbX={-31.2} pcbY={-3.45} pcbRotation={180} resistance={"1kohm"} footprint={<Footprint_R144 />} schX={4.600000000000001} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* FID3: Fiducial_1mm_Mask2mm */}
    <chip name={"FID3"} pcbX={52} pcbY={-30.5} pcbRotation={0} pinLabels={{}} displayName={"Fiducial_1mm_Mask2mm"} footprint={<Footprint_FID3 />} noSchematicRepresentation={true}/>

    {/* D11: 6.2 V */}
    <chip name={"D11"} pcbX={48.55} pcbY={19.1} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"6.2 V"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* R82: 18k */}
    <resistor name={"R82"} pcbX={41.5} pcbY={-4.9} pcbRotation={180} resistance={"18kohm"} footprint={<Footprint_R82 />} schX={-2.25} schY={-0.5} schRotation={90} schSheetName={"Microcontroller"}/>

    {/* R118: DNP */}
    <chip name={"R118"} pcbX={-16.8} pcbY={-13.2} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"DNP"} footprint={<Footprint_R118 />} noSchematicRepresentation={true}/>

    {/* U26: 74HC00 */}
    <chip name={"U26"} pcbX={-6.8} pcbY={-30} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"] }} displayName={"74HC00"} footprint={<Footprint_U26 />} noSchematicRepresentation={true}/>

    {/* R124: 220 */}
    <resistor name={"R124"} pcbX={-30.35} pcbY={-4.5} pcbRotation={-90} resistance={"220ohm"} footprint={<Footprint_R124 />} schX={3.8000000000000007} schY={5.200000000000001} schRotation={-90} schSheetName={"Mixer"}/>

    {/* C209: 0.3 pF */}
    <capacitor name={"C209"} pcbX={-36.4} pcbY={-24.95} pcbRotation={0} capacitance={"0.3pF"} footprint={<Footprint_C209 />} schX={-5.4} schY={3.500000000000001} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* FID2: Fiducial_1mm_Mask2mm */}
    <chip name={"FID2"} pcbX={-52} pcbY={-35.5} pcbRotation={0} pinLabels={{}} displayName={"Fiducial_1mm_Mask2mm"} footprint={<Footprint_FID2 />} noSchematicRepresentation={true}/>

    {/* FB7: Ferrite */}
    <chip name={"FB7"} pcbX={29.6} pcbY={12.2} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"Ferrite"} footprint={<Footprint_FB7 />} noSchematicRepresentation={true}/>

    {/* C165: 10 uF */}
    <capacitor name={"C165"} pcbX={27.6} pcbY={1.8} pcbRotation={0} capacitance={"10uF"} footprint={<Footprint_C165 />} schX={5.049999999999999} schY={5.199999999999999} schRotation={-90} schSheetName={"Power"}/>

    {/* C194: 1 uF */}
    <capacitor name={"C194"} pcbX={-42.1} pcbY={-4.5} pcbRotation={0} capacitance={"1uF"} footprint={<Footprint_C194 />} schX={4.200000000000001} schY={-0.1999999999999993} schRotation={-90} schSheetName={"Mixer"}/>

    {/* L5: 100 uH */}
    <inductor name={"L5"} pcbX={-35.45} pcbY={-27.75} pcbRotation={180} inductance={"100uH"} footprint={<Footprint_L5 />} schX={-4} schY={4.9} schRotation={-90} schSheetName={"RF Front End"}/>

    {/* U25: TRF37C73 */}
    <chip name={"U25"} pcbX={-41.05} pcbY={-19.15} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} displayName={"TRF37C73"} footprint={<Footprint_U25 />} noSchematicRepresentation={true}/>

    {/* R84: 33 */}
    <resistor name={"R84"} pcbX={2.1} pcbY={-24.35} pcbRotation={0} resistance={"33ohm"} footprint={<Footprint_R84 />} schX={0.9499999999999993} schY={-3.5} schRotation={180} schSheetName={"Clock Generator"}/>

    {/* R40: 10k */}
    <resistor name={"R40"} pcbX={16.9} pcbY={-1.7} pcbRotation={-90} resistance={"10kohm"} footprint={<Footprint_R40 />} schX={-6.850000000000001} schY={-8.6} schRotation={180} schSheetName={"FPGA"}/>

    {/* R39: 37.4k */}
    <resistor name={"R39"} pcbX={40.9} pcbY={-9.3} pcbRotation={0} resistance={"37.4kohm"} footprint={<Footprint_R39 />} schX={5.749999999999998} schY={-7.399999999999999} schRotation={-90} schSheetName={"Microcontroller"}/>

    {/* C40: 1 uF */}
    <capacitor name={"C40"} pcbX={15.1} pcbY={-21.3} pcbRotation={-90} capacitance={"1uF"} footprint={<Footprint_C40 />} schX={-6.550000000000001} schY={-6} schRotation={-90} schSheetName={"Clock Generator"}/>

    {/* TP54: TestPoint */}
    <chip name={"TP54"} pcbX={-7.6} pcbY={-16.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP54 />} noSchematicRepresentation={true}/>

    {/* TP16: TestPoint */}
    <chip name={"TP16"} pcbX={10.6} pcbY={-17.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP16 />} noSchematicRepresentation={true}/>

    {/* TP21: TestPoint */}
    <chip name={"TP21"} pcbX={40.7} pcbY={20.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP21 />} noSchematicRepresentation={true}/>

    {/* TP36: TestPoint */}
    <chip name={"TP36"} pcbX={32.4} pcbY={-7.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP36 />} noSchematicRepresentation={true}/>

    {/* TP2: TestPoint */}
    <chip name={"TP2"} pcbX={25.2} pcbY={7.4} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* TP1: TestPoint */}
    <chip name={"TP1"} pcbX={22.6} pcbY={12.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* TP60: TestPoint */}
    <chip name={"TP60"} pcbX={-8.8} pcbY={-20.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP60 />} noSchematicRepresentation={true}/>

    {/* TP58: TestPoint */}
    <chip name={"TP58"} pcbX={-17.7} pcbY={-14.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP58 />} noSchematicRepresentation={true}/>

    {/* TP12: TestPoint */}
    <chip name={"TP12"} pcbX={-57.2} pcbY={-2.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP12 />} noSchematicRepresentation={true}/>

    {/* TP65: TestPoint */}
    <chip name={"TP65"} pcbX={11.5} pcbY={1.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP65 />} noSchematicRepresentation={true}/>

    {/* TP10: TestPoint */}
    <chip name={"TP10"} pcbX={-55.8} pcbY={3.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP10 />} noSchematicRepresentation={true}/>

    {/* TP22: TestPoint */}
    <chip name={"TP22"} pcbX={28.3} pcbY={13.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP22 />} noSchematicRepresentation={true}/>

    {/* TP57: TestPoint */}
    <chip name={"TP57"} pcbX={-21} pcbY={-12.5} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP57 />} noSchematicRepresentation={true}/>

    {/* TP51: TestPoint */}
    <chip name={"TP51"} pcbX={-15.3} pcbY={6.02} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP51 />} noSchematicRepresentation={true}/>

    {/* TP38: TestPoint */}
    <chip name={"TP38"} pcbX={-29.1} pcbY={-15.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP38 />} noSchematicRepresentation={true}/>

    {/* TP19: TestPoint */}
    <chip name={"TP19"} pcbX={50.8} pcbY={28.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP19 />} noSchematicRepresentation={true}/>

    {/* TP59: TestPoint */}
    <chip name={"TP59"} pcbX={-15.9} pcbY={-12.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP59 />} noSchematicRepresentation={true}/>

    {/* TP31: TestPoint */}
    <chip name={"TP31"} pcbX={-55.5} pcbY={12.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP31 />} noSchematicRepresentation={true}/>

    {/* TP45: TestPoint */}
    <chip name={"TP45"} pcbX={-31.8} pcbY={-35.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP45 />} noSchematicRepresentation={true}/>

    {/* TP23: TestPoint */}
    <chip name={"TP23"} pcbX={46.5} pcbY={31.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP23 />} noSchematicRepresentation={true}/>

    {/* TP4: TestPoint */}
    <chip name={"TP4"} pcbX={-36.3} pcbY={4.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* TP49: TestPoint */}
    <chip name={"TP49"} pcbX={20.8} pcbY={4.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP49 />} noSchematicRepresentation={true}/>

    {/* TP13: TestPoint */}
    <chip name={"TP13"} pcbX={-55.8} pcbY={-5.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP13 />} noSchematicRepresentation={true}/>

    {/* TP41: TestPoint */}
    <chip name={"TP41"} pcbX={-43.5} pcbY={-22} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP41 />} noSchematicRepresentation={true}/>

    {/* TP7: TestPoint */}
    <chip name={"TP7"} pcbX={-55.8} pcbY={20.4} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP7 />} noSchematicRepresentation={true}/>

    {/* TP3: TestPoint */}
    <chip name={"TP3"} pcbX={-44.4} pcbY={-11.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* TP18: TestPoint */}
    <chip name={"TP18"} pcbX={42.2} pcbY={28.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP18 />} noSchematicRepresentation={true}/>

    {/* TP34: TestPoint */}
    <chip name={"TP34"} pcbX={-41.5} pcbY={-3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP34 />} noSchematicRepresentation={true}/>

    {/* TP32: TestPoint */}
    <chip name={"TP32"} pcbX={24.1} pcbY={-17.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP32 />} noSchematicRepresentation={true}/>

    {/* TP30: TestPoint */}
    <chip name={"TP30"} pcbX={-55.5} pcbY={25.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP30 />} noSchematicRepresentation={true}/>

    {/* TP20: TestPoint */}
    <chip name={"TP20"} pcbX={55.2} pcbY={21.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP20 />} noSchematicRepresentation={true}/>

    {/* TP9: TestPoint */}
    <chip name={"TP9"} pcbX={-55.8} pcbY={6.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP9 />} noSchematicRepresentation={true}/>

    {/* TP61: TestPoint */}
    <chip name={"TP61"} pcbX={-6.2} pcbY={-20.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP61 />} noSchematicRepresentation={true}/>

    {/* TP24: TestPoint */}
    <chip name={"TP24"} pcbX={27.2} pcbY={-5.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP24 />} noSchematicRepresentation={true}/>

    {/* TP17: TestPoint */}
    <chip name={"TP17"} pcbX={41.9} pcbY={-31.8} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP17 />} noSchematicRepresentation={true}/>

    {/* TP39: TestPoint */}
    <chip name={"TP39"} pcbX={-24.6} pcbY={-27} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP39 />} noSchematicRepresentation={true}/>

    {/* TP8: TestPoint */}
    <chip name={"TP8"} pcbX={-57.2} pcbY={17.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP8 />} noSchematicRepresentation={true}/>

    {/* TP48: TestPoint */}
    <chip name={"TP48"} pcbX={26.3} pcbY={-0.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP48 />} noSchematicRepresentation={true}/>

    {/* TP27: TestPoint */}
    <chip name={"TP27"} pcbX={38} pcbY={8.5} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP27 />} noSchematicRepresentation={true}/>

    {/* TP66: TestPoint */}
    <chip name={"TP66"} pcbX={-39} pcbY={-10} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP66 />} noSchematicRepresentation={true}/>

    {/* TP15: TestPoint */}
    <chip name={"TP15"} pcbX={-25.2} pcbY={6.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP15 />} noSchematicRepresentation={true}/>

    {/* TP56: TestPoint */}
    <chip name={"TP56"} pcbX={-19.2} pcbY={-10.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP56 />} noSchematicRepresentation={true}/>

    {/* TP33: TestPoint */}
    <chip name={"TP33"} pcbX={-5.7} pcbY={-24.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP33 />} noSchematicRepresentation={true}/>

    {/* TP37: TestPoint */}
    <chip name={"TP37"} pcbX={-23.8} pcbY={-31.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP37 />} noSchematicRepresentation={true}/>

    {/* TP50: TestPoint */}
    <chip name={"TP50"} pcbX={24.4} pcbY={-2.8} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP50 />} noSchematicRepresentation={true}/>

    {/* TP11: TestPoint */}
    <chip name={"TP11"} pcbX={-55.8} pcbY={0.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP11 />} noSchematicRepresentation={true}/>

    {/* TP42: TestPoint */}
    <chip name={"TP42"} pcbX={-41.95} pcbY={-16} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP42 />} noSchematicRepresentation={true}/>

    {/* TP14: TestPoint */}
    <chip name={"TP14"} pcbX={-55.8} pcbY={-10.5} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP14 />} noSchematicRepresentation={true}/>

    {/* TP52: TestPoint */}
    <chip name={"TP52"} pcbX={-21.8} pcbY={-28.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP52 />} noSchematicRepresentation={true}/>

    {/* TP63: TestPoint */}
    <chip name={"TP63"} pcbX={-11.4} pcbY={-19.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP63 />} noSchematicRepresentation={true}/>

    {/* TP35: TestPoint */}
    <chip name={"TP35"} pcbX={-24.55} pcbY={-13.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP35 />} noSchematicRepresentation={true}/>

    {/* TP46: TestPoint */}
    <chip name={"TP46"} pcbX={-4.4} pcbY={-28.6} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP46 />} noSchematicRepresentation={true}/>

    {/* TP43: TestPoint */}
    <chip name={"TP43"} pcbX={22.4} pcbY={-32} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP43 />} noSchematicRepresentation={true}/>

    {/* TP53: TestPoint */}
    <chip name={"TP53"} pcbX={20.4} pcbY={-2.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP53 />} noSchematicRepresentation={true}/>

    {/* TP26: TestPoint */}
    <chip name={"TP26"} pcbX={30.9} pcbY={-0.1} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP26 />} noSchematicRepresentation={true}/>

    {/* TP28: TestPoint */}
    <chip name={"TP28"} pcbX={30.8} pcbY={3.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP28 />} noSchematicRepresentation={true}/>

    {/* TP47: TestPoint */}
    <chip name={"TP47"} pcbX={-50.55} pcbY={-30.15} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP47 />} noSchematicRepresentation={true}/>

    {/* TP62: TestPoint */}
    <chip name={"TP62"} pcbX={-12.7} pcbY={-16.9} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP62 />} noSchematicRepresentation={true}/>

    {/* TP64: TestPoint */}
    <chip name={"TP64"} pcbX={46.2} pcbY={-22.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP64 />} noSchematicRepresentation={true}/>

    {/* TP55: TestPoint */}
    <chip name={"TP55"} pcbX={-14.2} pcbY={-9.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP55 />} noSchematicRepresentation={true}/>

    {/* TP40: TestPoint */}
    <chip name={"TP40"} pcbX={-33.2} pcbY={-23.2} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP40 />} noSchematicRepresentation={true}/>

    {/* TP29: TestPoint */}
    <chip name={"TP29"} pcbX={11.8} pcbY={7.7} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP29 />} noSchematicRepresentation={true}/>

    {/* TP5: TestPoint */}
    <chip name={"TP5"} pcbX={28.5} pcbY={-8.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP5 />} noSchematicRepresentation={true}/>

    {/* TP44: TestPoint */}
    <chip name={"TP44"} pcbX={-2.9} pcbY={-31.3} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP44 />} noSchematicRepresentation={true}/>

    {/* TP25: TestPoint */}
    <chip name={"TP25"} pcbX={32.8} pcbY={-11} pcbRotation={180} pinLabels={{ "pin1": ["1"] }} displayName={"TestPoint"} footprint={<Footprint_TP25 />} noSchematicRepresentation={true}/>

    {/* KiCad net: unconnected-(D6-A1-Pad1) */}
    <KiCadNet name={"unconnected__D6_A1_Pad1_"} connectsTo={[".D6 > .pin1"]}/>
    {/* KiCad net: unconnected-(D6-K1-Pad2) */}
    <KiCadNet name={"unconnected__D6_K1_Pad2_"} connectsTo={[".D6 > .pin2"]}/>
    {/* KiCad net: Net-(D6-A2) */}
    <KiCadNet name={"Net__D6_A2_"} connectsTo={[".D6 > .pin3", ".R74 > .pin1", ".TP14 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/~{LED3} */}
    <KiCadNet name={"_Microcontroller___LED3_"} connectsTo={[".D6 > .pin4", ".U23 > .pin79"]}/>
    {/* KiCad net: Net-(D4-A1) */}
    <KiCadNet name={"Net__D4_A1_"} connectsTo={[".D4 > .pin1", ".R72 > .pin1", ".TP12 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/~{LED1} */}
    <KiCadNet name={"_Microcontroller___LED1_"} connectsTo={[".D4 > .pin2", ".D4 > .pin4", ".U23 > .pin45"]}/>
    {/* KiCad net: Net-(D4-A2) */}
    <KiCadNet name={"Net__D4_A2_"} connectsTo={[".D4 > .pin3", ".R125 > .pin1", ".TP11 > .pin1"]}/>
    {/* KiCad net: Net-(D8-A1) */}
    <KiCadNet name={"Net__D8_A1_"} connectsTo={[".D8 > .pin1", ".R76 > .pin1", ".TP9 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".D8 > .pin2", ".D2 > .pin1", ".C1 > .pin2", ".C3 > .pin2", ".C5 > .pin2", ".C7 > .pin2", ".C8 > .pin2", ".C9 > .pin1", ".C10 > .pin2", ".C11 > .pin1", ".C12 > .pin2", ".C13 > .pin2", ".C16 > .pin1", ".C17 > .pin2", ".C18 > .pin1", ".C19 > .pin1", ".C20 > .pin1", ".C21 > .pin2", ".C22 > .pin2", ".C23 > .pin2", ".C24 > .pin2", ".C25 > .pin2", ".C26 > .pin2", ".C27 > .pin2", ".C29 > .pin1", ".C30 > .pin2", ".C31 > .pin2", ".C34 > .pin2", ".C35 > .pin2", ".C36 > .pin2", ".C37 > .pin2", ".C41 > .pin2", ".C42 > .pin2", ".C49 > .pin1", ".C53 > .pin2", ".C55 > .pin1", ".C57 > .pin1", ".C60 > .pin2", ".C63 > .pin1", ".C65 > .pin1", ".C66 > .pin2", ".C70 > .pin2", ".C71 > .pin2", ".C73 > .pin2", ".C75 > .pin2", ".C77 > .pin2", ".C79 > .pin2", ".C82 > .pin2", ".C83 > .pin2", ".C84 > .pin2", ".C85 > .pin2", ".C86 > .pin2", ".C87 > .pin2", ".C88 > .pin2", ".C89 > .pin2", ".C90 > .pin2", ".C92 > .pin2", ".C93 > .pin2", ".C94 > .pin2", ".C97 > .pin2", ".C98 > .pin2", ".C100 > .pin2", ".C105 > .pin2", ".C106 > .pin2", ".C113 > .pin2", ".C116 > .pin2", ".C118 > .pin2", ".C119 > .pin2", ".C120 > .pin2", ".C121 > .pin2", ".C122 > .pin2", ".C123 > .pin2", ".C126 > .pin2", ".C127 > .pin2", ".C128 > .pin2", ".C129 > .pin2", ".C130 > .pin2", ".C131 > .pin2", ".C132 > .pin2", ".C133 > .pin2", ".C134 > .pin2", ".C135 > .pin2", ".C136 > .pin2", ".C137 > .pin2", ".C138 > .pin2", ".C143 > .pin2", ".C144 > .pin2", ".C145 > .pin1", ".C146 > .pin1", ".C157 > .pin2", ".C158 > .pin2", ".C160 > .pin2", ".C161 > .pin2", ".C164 > .pin2", ".C171 > .pin2", ".D1 > .pin2", ".D3 > .pin2", ".D9 > .pin2", ".TP6 > .pin1", ".P2 > .pin2", ".P3 > .pin2", ".P1 > .pin2", ".P20 > .pin13", ".P20 > .pin15", ".P20 > .pin19", ".P22 > .pin4", ".P22 > .pin10", ".P22 > .pin18", ".P26 > .pin3", ".P26 > .pin5", ".P26 > .pin9", ".P28 > .pin2", ".P28 > .pin12", ".R4 > .pin1", ".R7 > .pin2", ".R14 > .pin2", ".R15 > .pin2", ".R16 > .pin2", ".R17 > .pin2", ".R46 > .pin1", ".R51 > .pin2", ".R54 > .pin1", ".R55 > .pin1", ".R65 > .pin1", ".R68 > .pin2", ".R69 > .pin2", ".R85 > .pin1", ".R93 > .pin2", ".SW1 > .pin3", ".SW2 > .pin2", ".SW2 > .pin3", ".T3 > .pin1", ".T4 > .pin1", ".U1 > .pin4", ".U1 > .pin6", ".U1 > .pin10", ".U1 > .pin12", ".U1 > .pin13", ".U2 > .pin4", ".U2 > .pin6", ".U2 > .pin10", ".U2 > .pin12", ".U2 > .pin13", ".U4 > .pin12", ".U4 > .pin33", ".U5 > .pin2", ".U6 > .pin2", ".U7 > .pin2", ".U9 > .pin6", ".U9 > .pin9", ".U10 > .pin3", ".U11 > .pin3", ".U12 > .pin6", ".U12 > .pin9", ".U14 > .pin6", ".U14 > .pin9", ".U15 > .pin3", ".U15 > .pin8", ".U17 > .pin2", ".U17 > .pin26", ".U17 > .pin31", ".U17 > .pin47", ".U17 > .pin49", ".U18 > .pin5", ".U18 > .pin7", ".U18 > .pin12", ".U18 > .pin17", ".U18 > .pin37", ".U18 > .pin42", ".U18 > .pin49", ".U19 > .pin21", ".U20 > .pin4", ".U21 > .pin8", ".U21 > .pin11", ".U23 > .pin3", ".U23 > .pin49", ".U23 > .pin62", ".U23 > .pin63", ".U23 > .pin65", ".U23 > .pin71", ".U23 > .pin76", ".U23 > .pin83", ".U23 > .pin116", ".U23 > .pin119", ".X2 > .pin2", ".X2 > .pin4", ".R122 > .pin2", ".C199 > .pin2", ".C124 > .pin2", ".Q1 > .pin1", ".U31 > .pin2", ".R136 > .pin1", ".U39 > .pin3", ".U16 > .pin49", ".R157 > .pin2", ".C159 > .pin2", ".C168 > .pin1", ".C178 > .pin2", ".H3 > .pin1", ".U40 > .pin7", ".U24 > .pin2", ".C197 > .pin2", ".C48 > .pin2", ".U37 > .pin2", ".R20 > .pin2", ".C179 > .pin2", ".C184 > .pin2", ".U38 > .pin7", ".C56 > .pin2", ".C177 > .pin2", ".U28 > .pin2", ".C170 > .pin2", ".R22 > .pin2", ".C80 > .pin2", ".U3 > .pin3", ".R89 > .pin2", ".H2 > .pin1", ".H7 > .pin1", ".C52 > .pin2", ".L18 > .pin2", ".C200 > .pin2", ".C185 > .pin2", ".C72 > .pin2", ".L16 > .pin2", ".C110 > .pin2", ".C109 > .pin2", ".R151 > .pin2", ".C196 > .pin2", ".C166 > .pin2", ".C142 > .pin2", ".L17 > .pin2", ".C190 > .pin2", ".U22 > .pin1", ".C186 > .pin2", ".R91 > .pin2", ".C188 > .pin2", ".U13 > .pin3", ".FL3 > .pin2", ".FL3 > .pin4", ".J3 > .pin1", ".C167 > .pin2", ".C212 > .pin2", ".R92 > .pin2", ".C148 > .pin2", ".D18 > .pin2", ".C69 > .pin2", ".C33 > .pin2", ".C39 > .pin2", ".C141 > .pin2", ".C204 > .pin2", ".U34 > .pin3", ".R107 > .pin2", ".J1 > .pin1", ".J1 > .pin8", ".J1 > .pin9", ".J1 > .pin16", ".J1 > .pin17", ".U35 > .pin3", ".C117 > .pin2", ".C187 > .pin2", ".R97 > .pin2", ".X1 > .pin2", ".H5 > .pin1", ".C61 > .pin2", ".C181 > .pin2", ".C51 > .pin2", ".C176 > .pin2", ".C81 > .pin2", ".R146 > .pin1", ".C6 > .pin1", ".U27 > .pin3", ".C174 > .pin2", ".R147 > .pin2", ".C156 > .pin2", ".C95 > .pin2", ".C152 > .pin2", ".R156 > .pin2", ".C201 > .pin2", ".C193 > .pin2", ".R126 > .pin1", ".C149 > .pin2", ".R113 > .pin2", ".C4 > .pin1", ".H8 > .pin1", ".C206 > .pin2", ".C45 > .pin1", ".C205 > .pin2", ".U8 > .pin3", ".R80 > .pin2", ".R109 > .pin2", ".R131 > .pin1", ".C32 > .pin2", ".C154 > .pin2", ".R130 > .pin1", ".C47 > .pin1", ".H4 > .pin1", ".H6 > .pin1", ".U33 > .pin6", ".U33 > .pin7", ".U33 > .pin8", ".C140 > .pin2", ".Q10 > .pin1", ".Q10 > .pin4", ".C208 > .pin2", ".R57 > .pin2", ".U36 > .pin3", ".C151 > .pin2", ".R143 > .pin1", ".U30 > .pin2", ".R99 > .pin2", ".C150 > .pin2", ".C182 > .pin2", ".C162 > .pin2", ".Q7 > .pin1", ".C172 > .pin2", ".C43 > .pin2", ".C147 > .pin2", ".D14 > .pin2", ".R148 > .pin2", ".C175 > .pin2", ".R79 > .pin2", ".C2 > .pin2", ".C169 > .pin2", ".R42 > .pin1", ".H1 > .pin1", ".C173 > .pin2", ".FL2 > .pin2", ".FL2 > .pin4", ".C44 > .pin1", ".C54 > .pin2", ".C183 > .pin2", ".C163 > .pin2", ".R95 > .pin2", ".R101 > .pin2", ".U32 > .pin1", ".D11 > .pin2", ".R82 > .pin1", ".U26 > .pin7", ".C209 > .pin2", ".C165 > .pin2", ".C194 > .pin2", ".U25 > .pin3", ".U25 > .pin4", ".U25 > .pin6", ".U25 > .pin8", ".U25 > .pin9", ".R40 > .pin2", ".R39 > .pin2", ".C40 > .pin2", ".TP23 > .pin1"]}/>
    {/* KiCad net: unconnected-(D8-A2-Pad3) */}
    <KiCadNet name={"unconnected__D8_A2_Pad3_"} connectsTo={[".D8 > .pin3"]}/>
    {/* KiCad net: unconnected-(D8-K2-Pad4) */}
    <KiCadNet name={"unconnected__D8_K2_Pad4_"} connectsTo={[".D8 > .pin4"]}/>
    {/* KiCad net: /Microcontroller/~{LED2} */}
    <KiCadNet name={"_Microcontroller___LED2_"} connectsTo={[".D5 > .pin1", ".U23 > .pin2"]}/>
    {/* KiCad net: Net-(D5-A) */}
    <KiCadNet name={"Net__D5_A_"} connectsTo={[".D5 > .pin2", ".R73 > .pin1", ".TP13 > .pin1"]}/>
    {/* KiCad net: Net-(D2-A) */}
    <KiCadNet name={"Net__D2_A_"} connectsTo={[".D2 > .pin2", ".R18 > .pin1", ".TP10 > .pin1"]}/>
    {/* KiCad net: Net-(D7-A1) */}
    <KiCadNet name={"Net__D7_A1_"} connectsTo={[".D7 > .pin1", ".R75 > .pin1", ".TP8 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/~{LED4} */}
    <KiCadNet name={"_Microcontroller___LED4_"} connectsTo={[".D7 > .pin2", ".D7 > .pin4", ".U23 > .pin103"]}/>
    {/* KiCad net: Net-(D7-A2) */}
    <KiCadNet name={"Net__D7_A2_"} connectsTo={[".D7 > .pin3", ".R50 > .pin1", ".TP7 > .pin1"]}/>
    {/* KiCad net: VAA */}
    <KiCadNet name={"VAA"} connectsTo={[".C1 > .pin1", ".C3 > .pin1", ".C5 > .pin1", ".C22 > .pin1", ".C41 > .pin1", ".C42 > .pin1", ".C71 > .pin1", ".C73 > .pin1", ".C75 > .pin1", ".C77 > .pin1", ".C79 > .pin1", ".C82 > .pin1", ".C84 > .pin1", ".C85 > .pin1", ".C86 > .pin1", ".C87 > .pin1", ".C88 > .pin1", ".C89 > .pin1", ".C90 > .pin1", ".C92 > .pin1", ".C93 > .pin1", ".C94 > .pin1", ".C105 > .pin1", ".C160 > .pin1", ".C161 > .pin1", ".L2 > .pin1", ".R5 > .pin1", ".R18 > .pin2", ".R36 > .pin2", ".U4 > .pin5", ".U4 > .pin19", ".U4 > .pin22", ".U17 > .pin1", ".U17 > .pin7", ".U17 > .pin13", ".U17 > .pin17", ".U17 > .pin20", ".U17 > .pin25", ".U17 > .pin27", ".U17 > .pin30", ".U17 > .pin39", ".U17 > .pin41", ".U17 > .pin46", ".U18 > .pin2", ".U18 > .pin8", ".U18 > .pin11", ".U18 > .pin33", ".U18 > .pin39", ".U18 > .pin43", ".U39 > .pin5", ".R128 > .pin2", ".C159 > .pin1", ".U40 > .pin1", ".U24 > .pin1", ".C48 > .pin1", ".L29 > .pin1", ".U38 > .pin1", ".R120 > .pin1", ".U3 > .pin9", ".C52 > .pin1", ".C200 > .pin1", ".C72 > .pin1", ".C142 > .pin1", ".C190 > .pin1", ".U13 > .pin1", ".U13 > .pin5", ".FB3 > .pin2", ".C212 > .pin1", ".R121 > .pin1", ".C141 > .pin1", ".C204 > .pin1", ".R135 > .pin2", ".U34 > .pin9", ".U35 > .pin9", ".L27 > .pin1", ".C156 > .pin1", ".C201 > .pin1", ".C193 > .pin1", ".C206 > .pin1", ".U8 > .pin9", ".R117 > .pin2", ".R132 > .pin2", ".C154 > .pin1", ".R114 > .pin2", ".C208 > .pin1", ".U36 > .pin1", ".U36 > .pin5", ".C162 > .pin1", ".L26 > .pin1", ".C2 > .pin1", ".U32 > .pin3", ".L5 > .pin1", ".U25 > .pin1", ".TP4 > .pin1"]}/>
    {/* KiCad net: 2V5RF */}
    <KiCadNet name={"_2V5RF"} connectsTo={[".C7 > .pin1", ".C8 > .pin1", ".C10 > .pin1", ".C17 > .pin1", ".C21 > .pin1", ".C23 > .pin1", ".C24 > .pin1", ".C26 > .pin1", ".C27 > .pin1", ".C30 > .pin1", ".C31 > .pin1", ".C60 > .pin1", ".C66 > .pin1", ".U1 > .pin1", ".U2 > .pin1", ".U5 > .pin4", ".U6 > .pin4", ".U7 > .pin4", ".U9 > .pin7", ".U10 > .pin5", ".U11 > .pin5", ".U12 > .pin7", ".U14 > .pin7", ".Q1 > .pin4", ".U27 > .pin5", ".C95 > .pin1", ".U32 > .pin2", ".U26 > .pin1", ".U26 > .pin4", ".U26 > .pin14", ".TP3 > .pin1"]}/>
    {/* KiCad net: /IF Transceiver/RX_EN */}
    <KiCadNet name={"_IF_Transceiver_RX_EN"} connectsTo={[".C9 > .pin2", ".C16 > .pin2", ".C20 > .pin2", ".U5 > .pin6", ".U6 > .pin6", ".U7 > .pin6", ".U10 > .pin1", ".U11 > .pin1", ".Q1 > .pin2", ".Q1 > .pin5", ".U26 > .pin3", ".U26 > .pin9", ".TP35 > .pin1"]}/>
    {/* KiCad net: /Image Reject Filters/RX_XOR_LPF */}
    <KiCadNet name={"_Image_Reject_Filters_RX_XOR_LPF"} connectsTo={[".C11 > .pin2", ".U1 > .pin3", ".U11 > .pin4", ".TP38 > .pin1"]}/>
    {/* KiCad net: Net-(U4-LFILT3) */}
    <KiCadNet name={"Net__U4_LFILT3_"} connectsTo={[".C12 > .pin1", ".R1 > .pin2", ".U4 > .pin8"]}/>
    {/* KiCad net: Net-(C13-Pad1) */}
    <KiCadNet name={"Net__C13_Pad1_"} connectsTo={[".C13 > .pin1", ".R1 > .pin1", ".R2 > .pin2"]}/>
    {/* KiCad net: Net-(U4-LFILT2) */}
    <KiCadNet name={"Net__U4_LFILT2_"} connectsTo={[".C14 > .pin1", ".C15 > .pin1", ".R2 > .pin1", ".U4 > .pin7"]}/>
    {/* KiCad net: Net-(U4-LFILT1) */}
    <KiCadNet name={"Net__U4_LFILT1_"} connectsTo={[".C14 > .pin2", ".R3 > .pin1", ".U4 > .pin6"]}/>
    {/* KiCad net: Net-(C15-Pad2) */}
    <KiCadNet name={"Net__C15_Pad2_"} connectsTo={[".C15 > .pin2", ".R3 > .pin2"]}/>
    {/* KiCad net: /IF Transceiver/RX_XOR_MIX */}
    <KiCadNet name={"_IF_Transceiver_RX_XOR_MIX"} connectsTo={[".C18 > .pin2", ".U2 > .pin3", ".U10 > .pin4", ".TP39 > .pin1"]}/>
    {/* KiCad net: /Image Reject Filters/LPF_OR_MIX_BYPASS */}
    <KiCadNet name={"_Image_Reject_Filters_LPF_OR_MIX_BYPASS"} connectsTo={[".C19 > .pin2", ".U9 > .pin8", ".U27 > .pin4", ".TP40 > .pin1"]}/>
    {/* KiCad net: Net-(T1-S2) */}
    <KiCadNet name={"Net__T1_S2_"} connectsTo={[".C25 > .pin1", ".T1 > .pin2"]}/>
    {/* KiCad net: Net-(T1-S1) */}
    <KiCadNet name={"Net__T1_S1_"} connectsTo={[".C28 > .pin1", ".T1 > .pin1"]}/>
    {/* KiCad net: /Mixer/MIX_IN */}
    <KiCadNet name={"_Mixer_MIX_IN"} connectsTo={[".C28 > .pin2", ".U6 > .pin5"]}/>
    {/* KiCad net: /Image Reject Filters/MIX_EN */}
    <KiCadNet name={"_Image_Reject_Filters_MIX_EN"} connectsTo={[".C29 > .pin2", ".U9 > .pin1", ".U10 > .pin2", ".U39 > .pin1", ".U26 > .pin6", ".TP37 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/MIXER.~{RESET} */}
    <KiCadNet name={"_Microcontroller_MIXER___RESET_"} connectsTo={[".C34 > .pin1", ".R5 > .pin2", ".U4 > .pin29", ".U23 > .pin160"]}/>
    {/* KiCad net: /Microcontroller/MIXER.~{EN} */}
    <KiCadNet name={"_Microcontroller_MIXER___EN_"} connectsTo={[".C35 > .pin1", ".U4 > .pin30", ".U23 > .pin159"]}/>
    {/* KiCad net: /Microcontroller/MIXER.SCLK */}
    <KiCadNet name={"_Microcontroller_MIXER_SCLK"} connectsTo={[".C36 > .pin1", ".U4 > .pin31", ".U23 > .pin131"]}/>
    {/* KiCad net: /Microcontroller/MIXER.SDATA */}
    <KiCadNet name={"_Microcontroller_MIXER_SDATA"} connectsTo={[".C37 > .pin1", ".U4 > .pin32", ".U23 > .pin144"]}/>
    {/* KiCad net: /Mixer/MIX_OUT */}
    <KiCadNet name={"_Mixer_MIX_OUT"} connectsTo={[".C46 > .pin1", ".U5 > .pin5"]}/>
    {/* KiCad net: Net-(T2-S1) */}
    <KiCadNet name={"Net__T2_S1_"} connectsTo={[".C46 > .pin2", ".T2 > .pin1"]}/>
    {/* KiCad net: Net-(T2-S2) */}
    <KiCadNet name={"Net__T2_S2_"} connectsTo={[".C49 > .pin2", ".T2 > .pin2"]}/>
    {/* KiCad net: /RF Front End/RX_AMP_OUT */}
    <KiCadNet name={"_RF_Front_End_RX_AMP_OUT"} connectsTo={[".C50 > .pin1", ".U12 > .pin3", ".C209 > .pin1"]}/>
    {/* KiCad net: Net-(C50-Pad2) */}
    <KiCadNet name={"Net__C50_Pad2_"} connectsTo={[".C50 > .pin2", ".R152 > .pin1"]}/>
    {/* KiCad net: Net-(U40-BIAS) */}
    <KiCadNet name={"Net__U40_BIAS_"} connectsTo={[".C53 > .pin1", ".U40 > .pin2", ".R116 > .pin2", ".L4 > .pin1"]}/>
    {/* KiCad net: /RF Front End/~{TX_AMP_EN} */}
    <KiCadNet name={"_RF_Front_End___TX_AMP_EN_"} connectsTo={[".C55 > .pin2", ".C63 > .pin2", ".U12 > .pin1", ".U14 > .pin8", ".C4 > .pin2", ".U26 > .pin11", ".U25 > .pin5", ".TP42 > .pin1"]}/>
    {/* KiCad net: /RF Front End/~{RX_AMP_EN} */}
    <KiCadNet name={"_RF_Front_End___RX_AMP_EN_"} connectsTo={[".C57 > .pin2", ".C65 > .pin2", ".U12 > .pin8", ".U14 > .pin1", ".U13 > .pin2", ".C6 > .pin2", ".U26 > .pin8", ".TP41 > .pin1"]}/>
    {/* KiCad net: /RF Front End/RX_AMP_IN */}
    <KiCadNet name={"_RF_Front_End_RX_AMP_IN"} connectsTo={[".C58 > .pin1", ".U14 > .pin5"]}/>
    {/* KiCad net: Net-(U40-RFIN) */}
    <KiCadNet name={"Net__U40_RFIN_"} connectsTo={[".C58 > .pin2", ".U40 > .pin3", ".L31 > .pin2", ".R153 > .pin1", ".R115 > .pin1"]}/>
    {/* KiCad net: /RF Front End/TX_AMP_IN */}
    <KiCadNet name={"_RF_Front_End_TX_AMP_IN"} connectsTo={[".C59 > .pin1", ".U12 > .pin5"]}/>
    {/* KiCad net: Net-(U25-RFIN) */}
    <KiCadNet name={"Net__U25_RFIN_"} connectsTo={[".C59 > .pin2", ".U25 > .pin2"]}/>
    {/* KiCad net: Net-(U25-RFOUT) */}
    <KiCadNet name={"Net__U25_RFOUT_"} connectsTo={[".C62 > .pin1", ".R129 > .pin1", ".L12 > .pin2", ".U25 > .pin7"]}/>
    {/* KiCad net: /RF Front End/TX_AMP_OUT */}
    <KiCadNet name={"_RF_Front_End_TX_AMP_OUT"} connectsTo={[".C62 > .pin2", ".U14 > .pin3"]}/>
    {/* KiCad net: Net-(D14-K) */}
    <KiCadNet name={"Net__D14_K_"} connectsTo={[".C64 > .pin1", ".C68 > .pin2", ".D15 > .pin2", ".D14 > .pin1"]}/>
    {/* KiCad net: Net-(D1-A1) */}
    <KiCadNet name={"Net__D1_A1_"} connectsTo={[".C64 > .pin2", ".D1 > .pin1", ".L13 > .pin2", ".P3 > .pin1"]}/>
    {/* KiCad net: Net-(C67-Pad1) */}
    <KiCadNet name={"Net__C67_Pad1_"} connectsTo={[".C67 > .pin1", ".R150 > .pin1"]}/>
    {/* KiCad net: /Mixer/REF_IN */}
    <KiCadNet name={"_Mixer_REF_IN"} connectsTo={[".C67 > .pin2", ".C70 > .pin1", ".U4 > .pin10"]}/>
    {/* KiCad net: Net-(U18-REFIN) */}
    <KiCadNet name={"Net__U18_REFIN_"} connectsTo={[".C83 > .pin1", ".U18 > .pin46", ".R122 > .pin1", ".R121 > .pin2"]}/>
    {/* KiCad net: /ADC, DAC/COM */}
    <KiCadNet name={"_ADC__DAC_COM"} connectsTo={[".C97 > .pin1", ".U18 > .pin47"]}/>
    {/* KiCad net: /ADC, DAC/REFN */}
    <KiCadNet name={"_ADC__DAC_REFN"} connectsTo={[".C98 > .pin1", ".U18 > .pin48"]}/>
    {/* KiCad net: /IF Transceiver/RXIF+ */}
    <KiCadNet name={"_IF_Transceiver_RXIF_"} connectsTo={[".C99 > .pin1", ".U17 > .pin4"]}/>
    {/* KiCad net: /IF Transceiver/RXIF_BALUN- */}
    <KiCadNet name={"_IF_Transceiver_RXIF_BALUN_"} connectsTo={[".C99 > .pin2", ".L7 > .pin2", ".T3 > .pin4"]}/>
    {/* KiCad net: /ADC, DAC/REFP */}
    <KiCadNet name={"_ADC__DAC_REFP"} connectsTo={[".C100 > .pin1", ".U18 > .pin1"]}/>
    {/* KiCad net: /IF Transceiver/RXIF- */}
    <KiCadNet name={"_IF_Transceiver_RXIF__"} connectsTo={[".C102 > .pin1", ".U17 > .pin5"]}/>
    {/* KiCad net: /IF Transceiver/RXIF_BALUN+ */}
    <KiCadNet name={"_IF_Transceiver_RXIF_BALUN__"} connectsTo={[".C102 > .pin2", ".L7 > .pin1", ".T3 > .pin3"]}/>
    {/* KiCad net: /IF Transceiver/TXIF+ */}
    <KiCadNet name={"_IF_Transceiver_TXIF_"} connectsTo={[".C104 > .pin1", ".U17 > .pin9"]}/>
    {/* KiCad net: /IF Transceiver/TXIF_BALUN- */}
    <KiCadNet name={"_IF_Transceiver_TXIF_BALUN_"} connectsTo={[".C104 > .pin2", ".L9 > .pin2", ".T4 > .pin4"]}/>
    {/* KiCad net: Net-(U17-BYPASS) */}
    <KiCadNet name={"Net__U17_BYPASS_"} connectsTo={[".C106 > .pin1", ".U17 > .pin33"]}/>
    {/* KiCad net: /IF Transceiver/TXIF- */}
    <KiCadNet name={"_IF_Transceiver_TXIF__"} connectsTo={[".C111 > .pin1", ".U17 > .pin10"]}/>
    {/* KiCad net: /IF Transceiver/TXIF_BALUN+ */}
    <KiCadNet name={"_IF_Transceiver_TXIF_BALUN__"} connectsTo={[".C111 > .pin2", ".L9 > .pin1", ".T4 > .pin3"]}/>
    {/* KiCad net: 3V3CLK */}
    <KiCadNet name={"_3V3CLK"} connectsTo={[".C113 > .pin1", ".C119 > .pin1", ".C120 > .pin1", ".C121 > .pin1", ".C122 > .pin1", ".R104 > .pin1", ".R105 > .pin1", ".U19 > .pin10", ".U19 > .pin11", ".U19 > .pin14", ".U19 > .pin18", ".U19 > .pin20", ".C199 > .pin1", ".C168 > .pin2", ".U37 > .pin5", ".C167 > .pin1", ".FB2 > .pin2", ".X1 > .pin4", ".TP16 > .pin1"]}/>
    {/* KiCad net: Net-(C115-Pad1) */}
    <KiCadNet name={"Net__C115_Pad1_"} connectsTo={[".C115 > .pin1", ".R149 > .pin1"]}/>
    {/* KiCad net: /IF Transceiver/XTAL */}
    <KiCadNet name={"_IF_Transceiver_XTAL"} connectsTo={[".C115 > .pin2", ".C116 > .pin1", ".U17 > .pin28"]}/>
    {/* KiCad net: /Microcontroller/RTCX1 */}
    <KiCadNet name={"_Microcontroller_RTCX1"} connectsTo={[".C118 > .pin1", ".U23 > .pin8", ".X3 > .pin2"]}/>
    {/* KiCad net: 3V3FPGA */}
    <KiCadNet name={"_3V3FPGA"} connectsTo={[".C123 > .pin1", ".R76 > .pin2", ".U18 > .pin18", ".U16 > .pin1", ".U16 > .pin22", ".U16 > .pin33", ".C197 > .pin1", ".C185 > .pin1", ".C166 > .pin1", ".U22 > .pin3", ".C186 > .pin1", ".C148 > .pin1", ".FB2 > .pin1", ".C187 > .pin1", ".C181 > .pin1", ".R44 > .pin2", ".C174 > .pin1", ".R45 > .pin2", ".C149 > .pin1", ".FB4 > .pin2", ".C140 > .pin1", ".C150 > .pin1", ".C182 > .pin1", ".C173 > .pin1", ".C183 > .pin1", ".TP2 > .pin1"]}/>
    {/* KiCad net: +1V2 */}
    <KiCadNet name={"_1V2"} connectsTo={[".C125 > .pin1", ".C126 > .pin1", ".C127 > .pin1", ".L10 > .pin2", ".R47 > .pin1", ".R53 > .pin1", ".C172 > .pin1", ".FB7 > .pin1", ".TP18 > .pin1"]}/>
    {/* KiCad net: Net-(U21-ADJ2) */}
    <KiCadNet name={"Net__U21_ADJ2_"} connectsTo={[".C125 > .pin2", ".R46 > .pin2", ".R47 > .pin2", ".U21 > .pin1"]}/>
    {/* KiCad net: VCC */}
    <KiCadNet name={"VCC"} connectsTo={[".C128 > .pin1", ".C129 > .pin1", ".C130 > .pin1", ".C131 > .pin1", ".C132 > .pin1", ".C133 > .pin1", ".C134 > .pin1", ".C135 > .pin1", ".C137 > .pin1", ".C138 > .pin1", ".C144 > .pin1", ".C145 > .pin2", ".C146 > .pin2", ".L11 > .pin1", ".P26 > .pin1", ".R27 > .pin1", ".R28 > .pin1", ".R48 > .pin1", ".R56 > .pin1", ".R59 > .pin1", ".R63 > .pin2", ".R64 > .pin2", ".R66 > .pin1", ".R67 > .pin2", ".U20 > .pin8", ".U21 > .pin4", ".U23 > .pin6", ".U23 > .pin50", ".U23 > .pin59", ".U23 > .pin64", ".U23 > .pin73", ".U23 > .pin86", ".U23 > .pin95", ".U23 > .pin96", ".U23 > .pin118", ".U31 > .pin5", ".R61 > .pin1", ".FB5 > .pin1", ".U28 > .pin1", ".Q6 > .pin2", ".R100 > .pin2", ".C33 > .pin1", ".C39 > .pin1", ".R38 > .pin1", ".U33 > .pin16", ".U30 > .pin5", ".C43 > .pin1", ".C169 > .pin1", ".C165 > .pin1", ".C40 > .pin1", ".TP19 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/VBAT */}
    <KiCadNet name={"_Microcontroller_VBAT"} connectsTo={[".C136 > .pin1", ".P20 > .pin1", ".U23 > .pin23"]}/>
    {/* KiCad net: Net-(D11-K) */}
    <KiCadNet name={"Net__D11_K_"} connectsTo={[".C143 > .pin1", ".D12 > .pin1", ".D13 > .pin1", ".FB1 > .pin2", ".D11 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/XTAL1 */}
    <KiCadNet name={"_Microcontroller_XTAL1"} connectsTo={[".C157 > .pin1", ".U23 > .pin29", ".X2 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/XTAL2 */}
    <KiCadNet name={"_Microcontroller_XTAL2"} connectsTo={[".C158 > .pin1", ".U23 > .pin43", ".X2 > .pin3"]}/>
    {/* KiCad net: /Microcontroller/RTCX2 */}
    <KiCadNet name={"_Microcontroller_RTCX2"} connectsTo={[".C164 > .pin1", ".U23 > .pin21", ".X3 > .pin1"]}/>
    {/* KiCad net: Net-(D10-A) */}
    <KiCadNet name={"Net__D10_A_"} connectsTo={[".C171 > .pin1", ".U24 > .pin6", ".D10 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/P1 */}
    <KiCadNet name={"_Clock_Generator_P1"} connectsTo={[".D3 > .pin1", ".P1 > .pin1", ".R33 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/P2 */}
    <KiCadNet name={"_Clock_Generator_P2"} connectsTo={[".D9 > .pin1", ".P2 > .pin1", ".P22 > .pin1", ".R108 > .pin1"]}/>
    {/* KiCad net: /Mixer/MIX_IN+ */}
    <KiCadNet name={"_Mixer_MIX_IN_"} connectsTo={[".L1 > .pin1", ".T1 > .pin4", ".U4 > .pin23"]}/>
    {/* KiCad net: /Mixer/MIX_IN- */}
    <KiCadNet name={"_Mixer_MIX_IN__"} connectsTo={[".L1 > .pin2", ".T1 > .pin3", ".U4 > .pin24"]}/>
    {/* KiCad net: Net-(C202-Pad2) */}
    <KiCadNet name={"Net__C202_Pad2_"} connectsTo={[".L2 > .pin2", ".L3 > .pin1", ".C202 > .pin2", ".R144 > .pin1", ".R124 > .pin1"]}/>
    {/* KiCad net: /Mixer/MIX_OUT+ */}
    <KiCadNet name={"_Mixer_MIX_OUT_"} connectsTo={[".L3 > .pin2", ".T2 > .pin3", ".U4 > .pin28", ".C114 > .pin2", ".L6 > .pin2", ".R124 > .pin2"]}/>
    {/* KiCad net: Net-(U21-SW2) */}
    <KiCadNet name={"Net__U21_SW2_"} connectsTo={[".L10 > .pin1", ".U21 > .pin10"]}/>
    {/* KiCad net: Net-(U21-SW1) */}
    <KiCadNet name={"Net__U21_SW1_"} connectsTo={[".L11 > .pin2", ".U21 > .pin6"]}/>
    {/* KiCad net: Net-(C112-Pad2) */}
    <KiCadNet name={"Net__C112_Pad2_"} connectsTo={[".L13 > .pin1", ".L19 > .pin2", ".C112 > .pin2"]}/>
    {/* KiCad net: /Microcontroller/PB_5 */}
    <KiCadNet name={"_Microcontroller_PB_5"} connectsTo={[".P20 > .pin2", ".U23 > .pin11"]}/>
    {/* KiCad net: 3V3AUX */}
    <KiCadNet name={"_3V3AUX"} connectsTo={[".P20 > .pin3", ".P22 > .pin11", ".P28 > .pin1", ".U28 > .pin6", ".C32 > .pin1", ".TP17 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/WAKEUP */}
    <KiCadNet name={"_Microcontroller_WAKEUP"} connectsTo={[".P20 > .pin4", ".R48 > .pin2", ".U23 > .pin9"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_8 */}
    <KiCadNet name={"_Microcontroller_GPIO3_8"} connectsTo={[".P20 > .pin5", ".U23 > .pin28"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_9 */}
    <KiCadNet name={"_Microcontroller_GPIO3_9"} connectsTo={[".P20 > .pin6", ".U23 > .pin41"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_10 */}
    <KiCadNet name={"_Microcontroller_GPIO3_10"} connectsTo={[".P20 > .pin7", ".U23 > .pin14"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_11 */}
    <KiCadNet name={"_Microcontroller_GPIO3_11"} connectsTo={[".P20 > .pin8", ".U23 > .pin40"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_12 */}
    <KiCadNet name={"_Microcontroller_GPIO3_12"} connectsTo={[".P20 > .pin9", ".U23 > .pin34"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_13 */}
    <KiCadNet name={"_Microcontroller_GPIO3_13"} connectsTo={[".P20 > .pin10", ".U23 > .pin7"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_14 */}
    <KiCadNet name={"_Microcontroller_GPIO3_14"} connectsTo={[".P20 > .pin11", ".U23 > .pin75"]}/>
    {/* KiCad net: /Microcontroller/GPIO3_15 */}
    <KiCadNet name={"_Microcontroller_GPIO3_15"} connectsTo={[".P20 > .pin12", ".U23 > .pin47"]}/>
    {/* KiCad net: /Microcontroller/ADC0_6 */}
    <KiCadNet name={"_Microcontroller_ADC0_6"} connectsTo={[".P20 > .pin14", ".U23 > .pin4", ".U23 > .pin48"]}/>
    {/* KiCad net: /Microcontroller/ADC0_2 */}
    <KiCadNet name={"_Microcontroller_ADC0_2"} connectsTo={[".P20 > .pin16", ".U23 > .pin17", ".U23 > .pin30"]}/>
    {/* KiCad net: /Microcontroller/VBUSCTRL */}
    <KiCadNet name={"_Microcontroller_VBUSCTRL"} connectsTo={[".P20 > .pin17", ".R37 > .pin2"]}/>
    {/* KiCad net: /Microcontroller/ADC0_5 */}
    <KiCadNet name={"_Microcontroller_ADC0_5"} connectsTo={[".P20 > .pin18", ".U23 > .pin1", ".U23 > .pin31"]}/>
    {/* KiCad net: /Microcontroller/ADC0_0 */}
    <KiCadNet name={"_Microcontroller_ADC0_0"} connectsTo={[".P20 > .pin20", ".U23 > .pin20", ".U23 > .pin33"]}/>
    {/* KiCad net: /Power/VBUS */}
    <KiCadNet name={"_Power_VBUS"} connectsTo={[".P20 > .pin21", ".Q9 > .pin1", ".D18 > .pin1", ".J1 > .pin2", ".J1 > .pin7", ".J1 > .pin10", ".J1 > .pin15", ".R58 > .pin1", ".Q4 > .pin2", ".R88 > .pin1", ".TP20 > .pin1"]}/>
    {/* KiCad net: /Power/VIN */}
    <KiCadNet name={"_Power_VIN"} connectsTo={[".P20 > .pin22", ".Q5 > .pin2", ".R70 > .pin1", ".Q9 > .pin4", ".R90 > .pin1", ".TP21 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/P22_CLKIN */}
    <KiCadNet name={"_Clock_Generator_P22_CLKIN"} connectsTo={[".P22 > .pin2", ".U37 > .pin1", ".U33 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/~{RESET} */}
    <KiCadNet name={"_Microcontroller___RESET_"} connectsTo={[".P22 > .pin3", ".P26 > .pin10", ".R19 > .pin1", ".U23 > .pin35"]}/>
    {/* KiCad net: /Microcontroller/I2C1_SCL */}
    <KiCadNet name={"_Microcontroller_I2C1_SCL"} connectsTo={[".P22 > .pin5", ".U23 > .pin133"]}/>
    {/* KiCad net: /Microcontroller/I2C1_SDA */}
    <KiCadNet name={"_Microcontroller_I2C1_SDA"} connectsTo={[".P22 > .pin6", ".U23 > .pin87"]}/>
    {/* KiCad net: /Microcontroller/PB_1 */}
    <KiCadNet name={"_Microcontroller_PB_1"} connectsTo={[".P22 > .pin7", ".U23 > .pin13"]}/>
    {/* KiCad net: /Microcontroller/PB_3 */}
    <KiCadNet name={"_Microcontroller_PB_3"} connectsTo={[".P22 > .pin8", ".U23 > .pin12"]}/>
    {/* KiCad net: /Microcontroller/PA_4 */}
    <KiCadNet name={"_Microcontroller_PA_4"} connectsTo={[".P22 > .pin9", ".U23 > .pin68"]}/>
    {/* KiCad net: /Microcontroller/PA_3 */}
    <KiCadNet name={"_Microcontroller_PA_3"} connectsTo={[".P22 > .pin12", ".U23 > .pin66"]}/>
    {/* KiCad net: /Microcontroller/I2S0_TX_SDA */}
    <KiCadNet name={"_Microcontroller_I2S0_TX_SDA"} connectsTo={[".P22 > .pin13", ".U23 > .pin51"]}/>
    {/* KiCad net: /Microcontroller/PB_0 */}
    <KiCadNet name={"_Microcontroller_PB_0"} connectsTo={[".P22 > .pin14", ".U23 > .pin56"]}/>
    {/* KiCad net: /Microcontroller/I2S0_RX_WS */}
    <KiCadNet name={"_Microcontroller_I2S0_RX_WS"} connectsTo={[".P22 > .pin15", ".U23 > .pin52"]}/>
    {/* KiCad net: /Microcontroller/I2S0_TX_SCK */}
    <KiCadNet name={"_Microcontroller_I2S0_TX_SCK"} connectsTo={[".P22 > .pin16", ".U23 > .pin54"]}/>
    {/* KiCad net: /Microcontroller/I2S0_TX_MCLK */}
    <KiCadNet name={"_Microcontroller_I2S0_TX_MCLK"} connectsTo={[".P22 > .pin17", ".U23 > .pin176"]}/>
    {/* KiCad net: /Microcontroller/U0_RXD */}
    <KiCadNet name={"_Microcontroller_U0_RXD"} connectsTo={[".P22 > .pin19", ".U23 > .pin151"]}/>
    {/* KiCad net: /Microcontroller/U0_TXD */}
    <KiCadNet name={"_Microcontroller_U0_TXD"} connectsTo={[".P22 > .pin20", ".U23 > .pin166"]}/>
    {/* KiCad net: /Microcontroller/P2_9 */}
    <KiCadNet name={"_Microcontroller_P2_9"} connectsTo={[".P22 > .pin21", ".R93 > .pin1", ".U23 > .pin90"]}/>
    {/* KiCad net: /Microcontroller/P2_13 */}
    <KiCadNet name={"_Microcontroller_P2_13"} connectsTo={[".P22 > .pin22", ".U23 > .pin70"]}/>
    {/* KiCad net: /Microcontroller/P2_8 */}
    <KiCadNet name={"_Microcontroller_P2_8"} connectsTo={[".P22 > .pin23", ".R30 > .pin1", ".U23 > .pin100"]}/>
    {/* KiCad net: SDA */}
    <KiCadNet name={"SDA"} connectsTo={[".P22 > .pin24", ".R27 > .pin2", ".U19 > .pin5", ".U23 > .pin124"]}/>
    {/* KiCad net: /Clock Generator/AUX_CLK2 */}
    <KiCadNet name={"_Clock_Generator_AUX_CLK2"} connectsTo={[".P22 > .pin25", ".R34 > .pin1", ".U33 > .pin4"]}/>
    {/* KiCad net: SCL */}
    <KiCadNet name={"SCL"} connectsTo={[".P22 > .pin26", ".R28 > .pin2", ".U19 > .pin4", ".U23 > .pin123"]}/>
    {/* KiCad net: /Microcontroller/TMS */}
    <KiCadNet name={"_Microcontroller_TMS"} connectsTo={[".P26 > .pin2", ".U23 > .pin115", ".TP26 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/TCK */}
    <KiCadNet name={"_Microcontroller_TCK"} connectsTo={[".P26 > .pin4", ".R66 > .pin2", ".U23 > .pin85", ".TP25 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/TDO */}
    <KiCadNet name={"_Microcontroller_TDO"} connectsTo={[".P26 > .pin6", ".R63 > .pin1", ".U23 > .pin105", ".TP27 > .pin1"]}/>
    {/* KiCad net: unconnected-(P26-Pin_7-Pad7) */}
    <KiCadNet name={"unconnected__P26_Pin_7_Pad7_"} connectsTo={[".P26 > .pin7"]}/>
    {/* KiCad net: /Microcontroller/TDI */}
    <KiCadNet name={"_Microcontroller_TDI"} connectsTo={[".P26 > .pin8", ".U23 > .pin94", ".TP28 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/SD_CD */}
    <KiCadNet name={"_Microcontroller_SD_CD"} connectsTo={[".P28 > .pin3", ".U23 > .pin132"]}/>
    {/* KiCad net: /Microcontroller/SD_DAT3 */}
    <KiCadNet name={"_Microcontroller_SD_DAT3"} connectsTo={[".P28 > .pin4", ".U23 > .pin173"]}/>
    {/* KiCad net: /Microcontroller/SD_DAT2 */}
    <KiCadNet name={"_Microcontroller_SD_DAT2"} connectsTo={[".P28 > .pin5", ".U23 > .pin174"]}/>
    {/* KiCad net: /Microcontroller/SD_DAT1 */}
    <KiCadNet name={"_Microcontroller_SD_DAT1"} connectsTo={[".P28 > .pin6", ".U23 > .pin158"]}/>
    {/* KiCad net: /Microcontroller/SD_DAT0 */}
    <KiCadNet name={"_Microcontroller_SD_DAT0"} connectsTo={[".P28 > .pin7", ".U23 > .pin157"]}/>
    {/* KiCad net: /Microcontroller/SD_VOLT0 */}
    <KiCadNet name={"_Microcontroller_SD_VOLT0"} connectsTo={[".P28 > .pin8", ".U23 > .pin143"]}/>
    {/* KiCad net: /Microcontroller/SD_CMD */}
    <KiCadNet name={"_Microcontroller_SD_CMD"} connectsTo={[".P28 > .pin9", ".U23 > .pin169"]}/>
    {/* KiCad net: /Microcontroller/SD_POW */}
    <KiCadNet name={"_Microcontroller_SD_POW"} connectsTo={[".P28 > .pin10", ".U23 > .pin155"]}/>
    {/* KiCad net: /Microcontroller/SD_CLK */}
    <KiCadNet name={"_Microcontroller_SD_CLK"} connectsTo={[".P28 > .pin11", ".U23 > .pin142"]}/>
    {/* KiCad net: /Microcontroller/P5_6 */}
    <KiCadNet name={"_Microcontroller_P5_6"} connectsTo={[".P28 > .pin13", ".U23 > .pin149"]}/>
    {/* KiCad net: /Microcontroller/P5_7 */}
    <KiCadNet name={"_Microcontroller_P5_7"} connectsTo={[".P28 > .pin14", ".U23 > .pin163"]}/>
    {/* KiCad net: /Clock Generator/TRIGGER.OUT */}
    <KiCadNet name={"_Clock_Generator_TRIGGER_OUT"} connectsTo={[".P28 > .pin15", ".U16 > .pin2", ".R6 > .pin2", ".U33 > .pin12", ".U30 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/TRIGGER.IN */}
    <KiCadNet name={"_Clock_Generator_TRIGGER_IN"} connectsTo={[".P28 > .pin16", ".U16 > .pin48", ".R127 > .pin1", ".U33 > .pin13", ".U30 > .pin3"]}/>
    {/* KiCad net: /Microcontroller/CPLD_TCK */}
    <KiCadNet name={"_Microcontroller_CPLD_TCK"} connectsTo={[".P28 > .pin17", ".U23 > .pin180"]}/>
    {/* KiCad net: /Microcontroller/PE_0 */}
    <KiCadNet name={"_Microcontroller_PE_0"} connectsTo={[".P28 > .pin18", ".U23 > .pin164"]}/>
    {/* KiCad net: /Microcontroller/I2S0_RX_SDA */}
    <KiCadNet name={"_Microcontroller_I2S0_RX_SDA"} connectsTo={[".P28 > .pin19", ".U23 > .pin121"]}/>
    {/* KiCad net: /Microcontroller/P9_1 */}
    <KiCadNet name={"_Microcontroller_P9_1"} connectsTo={[".P28 > .pin20", ".U23 > .pin170"]}/>
    {/* KiCad net: /Microcontroller/P5_3 */}
    <KiCadNet name={"_Microcontroller_P5_3"} connectsTo={[".P28 > .pin21", ".U23 > .pin172"]}/>
    {/* KiCad net: /Microcontroller/P1_7 */}
    <KiCadNet name={"_Microcontroller_P1_7"} connectsTo={[".P28 > .pin22", ".U23 > .pin156"]}/>
    {/* KiCad net: Net-(Q3-G) */}
    <KiCadNet name={"Net__Q3_G_"} connectsTo={[".Q3 > .pin1", ".R11 > .pin2", ".C153 > .pin1", ".R60 > .pin1"]}/>
    {/* KiCad net: 3V3LED */}
    <KiCadNet name={"_3V3LED"} connectsTo={[".Q3 > .pin2", ".R11 > .pin1", ".R49 > .pin1", ".R72 > .pin2", ".R73 > .pin2", ".R74 > .pin2", ".R75 > .pin2", ".SW1 > .pin2", ".C124 > .pin1", ".R50 > .pin2", ".FB5 > .pin2", ".C170 > .pin1", ".C80 > .pin1", ".C110 > .pin1", ".C81 > .pin1", ".R125 > .pin2", ".C163 > .pin1", ".TP15 > .pin1"]}/>
    {/* KiCad net: Net-(Q3-D) */}
    <KiCadNet name={"Net__Q3_D_"} connectsTo={[".Q3 > .pin3", ".C153 > .pin2", ".FB3 > .pin1"]}/>
    {/* KiCad net: Net-(Q5-G) */}
    <KiCadNet name={"Net__Q5_G_"} connectsTo={[".Q5 > .pin1", ".R70 > .pin2", ".Q9 > .pin3", ".R57 > .pin1"]}/>
    {/* KiCad net: Net-(D13-A) */}
    <KiCadNet name={"Net__D13_A_"} connectsTo={[".Q5 > .pin3", ".D13 > .pin2"]}/>
    {/* KiCad net: Net-(U4-REXT) */}
    <KiCadNet name={"Net__U4_REXT_"} connectsTo={[".R4 > .pin2", ".U4 > .pin4"]}/>
    {/* KiCad net: Net-(R30-Pad2) */}
    <KiCadNet name={"Net__R30_Pad2_"} connectsTo={[".R7 > .pin1", ".R30 > .pin2", ".SW1 > .pin1", ".TP31 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/QD+ */}
    <KiCadNet name={"_ADC__DAC_QD_"} connectsTo={[".R8 > .pin1", ".U18 > .pin40"]}/>
    {/* KiCad net: /ADC, DAC/TXBB.I+ */}
    <KiCadNet name={"_ADC__DAC_TXBB_I_"} connectsTo={[".R8 > .pin2", ".R17 > .pin1", ".U17 > .pin45", ".R119 > .pin2", ".TP57 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/QD- */}
    <KiCadNet name={"_ADC__DAC_QD__"} connectsTo={[".R9 > .pin1", ".U18 > .pin41"]}/>
    {/* KiCad net: /ADC, DAC/TXBB.I- */}
    <KiCadNet name={"_ADC__DAC_TXBB_I__"} connectsTo={[".R9 > .pin2", ".R16 > .pin1", ".U17 > .pin44", ".R119 > .pin1", ".TP56 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/ID- */}
    <KiCadNet name={"_ADC__DAC_ID_"} connectsTo={[".R10 > .pin1", ".U18 > .pin44"]}/>
    {/* KiCad net: /ADC, DAC/TXBB.Q+ */}
    <KiCadNet name={"_ADC__DAC_TXBB_Q_"} connectsTo={[".R10 > .pin2", ".R15 > .pin1", ".U17 > .pin43", ".R118 > .pin2", ".TP58 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/ID+ */}
    <KiCadNet name={"_ADC__DAC_ID__"} connectsTo={[".R13 > .pin1", ".U18 > .pin45"]}/>
    {/* KiCad net: /ADC, DAC/TXBB.Q- */}
    <KiCadNet name={"_ADC__DAC_TXBB_Q__"} connectsTo={[".R13 > .pin2", ".R14 > .pin1", ".U17 > .pin42", ".R118 > .pin1", ".TP59 > .pin1"]}/>
    {/* KiCad net: Net-(R19-Pad2) */}
    <KiCadNet name={"Net__R19_Pad2_"} connectsTo={[".R19 > .pin2", ".R49 > .pin2", ".SW2 > .pin1", ".TP30 > .pin1"]}/>
    {/* KiCad net: /IF Transceiver/TUNE */}
    <KiCadNet name={"_IF_Transceiver_TUNE"} connectsTo={[".R25 > .pin1", ".U17 > .pin32", ".C47 > .pin2"]}/>
    {/* KiCad net: /IF Transceiver/CPOUT */}
    <KiCadNet name={"_IF_Transceiver_CPOUT"} connectsTo={[".R25 > .pin2", ".R26 > .pin2", ".U17 > .pin24", ".C44 > .pin2"]}/>
    {/* KiCad net: Net-(C45-Pad2) */}
    <KiCadNet name={"Net__C45_Pad2_"} connectsTo={[".R26 > .pin1", ".C45 > .pin2"]}/>
    {/* KiCad net: /ADC, DAC/AFE_CLK */}
    <KiCadNet name={"_ADC__DAC_AFE_CLK"} connectsTo={[".R31 > .pin1", ".U18 > .pin6", ".U16 > .pin35", ".TP29 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/CLK0 */}
    <KiCadNet name={"_Clock_Generator_CLK0"} connectsTo={[".R31 > .pin2", ".U19 > .pin13"]}/>
    {/* KiCad net: Net-(U33-A) */}
    <KiCadNet name={"Net__U33_A_"} connectsTo={[".R33 > .pin1", ".U33 > .pin3"]}/>
    {/* KiCad net: /Clock Generator/CLK7 */}
    <KiCadNet name={"_Clock_Generator_CLK7"} connectsTo={[".R34 > .pin2", ".U19 > .pin15"]}/>
    {/* KiCad net: /Microcontroller/~{BIAS_EN} */}
    <KiCadNet name={"_Microcontroller___BIAS_EN_"} connectsTo={[".R36 > .pin1", ".U23 > .pin55", ".U24 > .pin3"]}/>
    {/* KiCad net: Net-(U23-P4_3) */}
    <KiCadNet name={"Net__U23_P4_3_"} connectsTo={[".R37 > .pin1", ".U23 > .pin16", ".R82 > .pin2"]}/>
    {/* KiCad net: /Microcontroller/MODE */}
    <KiCadNet name={"_Microcontroller_MODE"} connectsTo={[".R51 > .pin1", ".U21 > .pin2", ".U23 > .pin102"]}/>
    {/* KiCad net: +5V */}
    <KiCadNet name={"_5V"} connectsTo={[".R52 > .pin1", ".U21 > .pin3", ".FB1 > .pin1", ".C147 > .pin1"]}/>
    {/* KiCad net: Net-(U21-EN1) */}
    <KiCadNet name={"Net__U21_EN1_"} connectsTo={[".R52 > .pin2", ".U21 > .pin7"]}/>
    {/* KiCad net: /Microcontroller/1V2_EN */}
    <KiCadNet name={"_Microcontroller_1V2_EN"} connectsTo={[".R54 > .pin2", ".U21 > .pin9", ".U23 > .pin101"]}/>
    {/* KiCad net: Net-(U21-DEF_1) */}
    <KiCadNet name={"Net__U21_DEF_1_"} connectsTo={[".R55 > .pin2", ".R56 > .pin2", ".U21 > .pin5"]}/>
    {/* KiCad net: /Microcontroller/ISP */}
    <KiCadNet name={"_Microcontroller_ISP"} connectsTo={[".R59 > .pin2", ".U23 > .pin88"]}/>
    {/* KiCad net: /Microcontroller/USB0_VBUS */}
    <KiCadNet name={"_Microcontroller_USB0_VBUS"} connectsTo={[".R62 > .pin1", ".R65 > .pin2", ".U23 > .pin57"]}/>
    {/* KiCad net: /Microcontroller/VBUS_SAFE */}
    <KiCadNet name={"_Microcontroller_VBUS_SAFE"} connectsTo={[".R62 > .pin2", ".D12 > .pin2", ".Q4 > .pin3"]}/>
    {/* KiCad net: /Microcontroller/DBGEN */}
    <KiCadNet name={"_Microcontroller_DBGEN"} connectsTo={[".R64 > .pin1", ".U23 > .pin114", ".TP24 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/P1_1 */}
    <KiCadNet name={"_Microcontroller_P1_1"} connectsTo={[".R67 > .pin1", ".U23 > .pin153"]}/>
    {/* KiCad net: /Microcontroller/P1_2 */}
    <KiCadNet name={"_Microcontroller_P1_2"} connectsTo={[".R68 > .pin1", ".U23 > .pin154"]}/>
    {/* KiCad net: /Microcontroller/RREF */}
    <KiCadNet name={"_Microcontroller_RREF"} connectsTo={[".R69 > .pin1", ".U23 > .pin81"]}/>
    {/* KiCad net: /Clock Generator/CLKIN */}
    <KiCadNet name={"_Clock_Generator_CLKIN"} connectsTo={[".R85 > .pin2", ".U19 > .pin6", ".U37 > .pin4"]}/>
    {/* KiCad net: /Clock Generator/INTR */}
    <KiCadNet name={"_Clock_Generator_INTR"} connectsTo={[".R104 > .pin2", ".U19 > .pin3"]}/>
    {/* KiCad net: /Clock Generator/OEB */}
    <KiCadNet name={"_Clock_Generator_OEB"} connectsTo={[".R105 > .pin2", ".U19 > .pin7"]}/>
    {/* KiCad net: /Mixer/MIX_OUT- */}
    <KiCadNet name={"_Mixer_MIX_OUT__"} connectsTo={[".T2 > .pin4", ".U4 > .pin27", ".C114 > .pin1", ".C198 > .pin1", ".R43 > .pin2", ".L30 > .pin2"]}/>
    {/* KiCad net: /IF Transceiver/RXIF */}
    <KiCadNet name={"_IF_Transceiver_RXIF"} connectsTo={[".T3 > .pin2", ".U2 > .pin7"]}/>
    {/* KiCad net: /IF Transceiver/TXIF */}
    <KiCadNet name={"_IF_Transceiver_TXIF"} connectsTo={[".T4 > .pin2", ".U2 > .pin5"]}/>
    {/* KiCad net: unconnected-(U1-N{slash}C-Pad2) */}
    <KiCadNet name={"unconnected__U1_N_slash_C_Pad2_"} connectsTo={[".U1 > .pin2"]}/>
    {/* KiCad net: /Image Reject Filters/RX_MIX_IN */}
    <KiCadNet name={"_Image_Reject_Filters_RX_MIX_IN"} connectsTo={[".U1 > .pin5", ".U6 > .pin1"]}/>
    {/* KiCad net: /Image Reject Filters/TX_MIX_OUT */}
    <KiCadNet name={"_Image_Reject_Filters_TX_MIX_OUT"} connectsTo={[".U1 > .pin7", ".C189 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-N{slash}C-Pad8) */}
    <KiCadNet name={"unconnected__U1_N_slash_C_Pad8_"} connectsTo={[".U1 > .pin8"]}/>
    {/* KiCad net: Net-(U1-RF4) */}
    <KiCadNet name={"Net__U1_RF4_"} connectsTo={[".U1 > .pin9", ".C91 > .pin1"]}/>
    {/* KiCad net: Net-(U1-RF3) */}
    <KiCadNet name={"Net__U1_RF3_"} connectsTo={[".U1 > .pin11", ".C51 > .pin1", ".L8 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-N{slash}C-Pad2) */}
    <KiCadNet name={"unconnected__U2_N_slash_C_Pad2_"} connectsTo={[".U2 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-N{slash}C-Pad8) */}
    <KiCadNet name={"unconnected__U2_N_slash_C_Pad8_"} connectsTo={[".U2 > .pin8"]}/>
    {/* KiCad net: Net-(FL3-IN) */}
    <KiCadNet name={"Net__FL3_IN_"} connectsTo={[".U2 > .pin9", ".FL3 > .pin1"]}/>
    {/* KiCad net: Net-(FL2-IN) */}
    <KiCadNet name={"Net__FL2_IN_"} connectsTo={[".U2 > .pin11", ".FL2 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/MIXER.ENBL */}
    <KiCadNet name={"_Microcontroller_MIXER_ENBL"} connectsTo={[".U4 > .pin1", ".U23 > .pin167", ".C109 > .pin1"]}/>
    {/* KiCad net: unconnected-(U4-EXT_LO-Pad2) */}
    <KiCadNet name={"unconnected__U4_EXT_LO_Pad2_"} connectsTo={[".U4 > .pin2"]}/>
    {/* KiCad net: unconnected-(U4-EXT_LO_DEC-Pad3) */}
    <KiCadNet name={"unconnected__U4_EXT_LO_DEC_Pad3_"} connectsTo={[".U4 > .pin3"]}/>
    {/* KiCad net: Net-(U4-MODE{slash}GPO6) */}
    <KiCadNet name={"Net__U4_MODE_slash_GPO6_"} connectsTo={[".U4 > .pin9", ".R120 > .pin2"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad11) */}
    <KiCadNet name={"unconnected__U4_NC_Pad11_"} connectsTo={[".U4 > .pin11"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad13) */}
    <KiCadNet name={"unconnected__U4_NC_Pad13_"} connectsTo={[".U4 > .pin13"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad14) */}
    <KiCadNet name={"unconnected__U4_NC_Pad14_"} connectsTo={[".U4 > .pin14"]}/>
    {/* KiCad net: unconnected-(U4-GPO1{slash}ADD1-Pad15) */}
    <KiCadNet name={"unconnected__U4_GPO1_slash_ADD1_Pad15_"} connectsTo={[".U4 > .pin15"]}/>
    {/* KiCad net: unconnected-(U4-GPO2{slash}ADD2-Pad16) */}
    <KiCadNet name={"unconnected__U4_GPO2_slash_ADD2_Pad16_"} connectsTo={[".U4 > .pin16"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad17) */}
    <KiCadNet name={"unconnected__U4_NC_Pad17_"} connectsTo={[".U4 > .pin17"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad18) */}
    <KiCadNet name={"unconnected__U4_NC_Pad18_"} connectsTo={[".U4 > .pin18"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad20) */}
    <KiCadNet name={"unconnected__U4_NC_Pad20_"} connectsTo={[".U4 > .pin20"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad21) */}
    <KiCadNet name={"unconnected__U4_NC_Pad21_"} connectsTo={[".U4 > .pin21"]}/>
    {/* KiCad net: unconnected-(U4-GPO3{slash}FM-Pad25) */}
    <KiCadNet name={"unconnected__U4_GPO3_slash_FM_Pad25_"} connectsTo={[".U4 > .pin25"]}/>
    {/* KiCad net: /Microcontroller/MIXER.LD */}
    <KiCadNet name={"_Microcontroller_MIXER_LD"} connectsTo={[".U4 > .pin26", ".U23 > .pin145"]}/>
    {/* KiCad net: /IF Transceiver/RX_MIX_OUT */}
    <KiCadNet name={"_IF_Transceiver_RX_MIX_OUT"} connectsTo={[".U5 > .pin1", ".U7 > .pin1"]}/>
    {/* KiCad net: Net-(U5-RF1) */}
    <KiCadNet name={"Net__U5_RF1_"} connectsTo={[".U5 > .pin3", ".C211 > .pin1"]}/>
    {/* KiCad net: /IF Transceiver/TX_MIX_IN */}
    <KiCadNet name={"_IF_Transceiver_TX_MIX_IN"} connectsTo={[".U6 > .pin3", ".U7 > .pin3"]}/>
    {/* KiCad net: /IF Transceiver/IF */}
    <KiCadNet name={"_IF_Transceiver_IF"} connectsTo={[".U7 > .pin5", ".FL3 > .pin3"]}/>
    {/* KiCad net: Net-(U9-RF3) */}
    <KiCadNet name={"Net__U9_RF3_"} connectsTo={[".U9 > .pin2", ".C61 > .pin1", ".L15 > .pin1"]}/>
    {/* KiCad net: Net-(U9-RF1) */}
    <KiCadNet name={"Net__U9_RF1_"} connectsTo={[".U9 > .pin3", ".C96 > .pin2"]}/>
    {/* KiCad net: /Image Reject Filters/RF */}
    <KiCadNet name={"_Image_Reject_Filters_RF"} connectsTo={[".U9 > .pin4", ".U12 > .pin4"]}/>
    {/* KiCad net: /IF Transceiver/MIX_BYPASS */}
    <KiCadNet name={"_IF_Transceiver_MIX_BYPASS"} connectsTo={[".U9 > .pin5", ".FL2 > .pin3"]}/>
    {/* KiCad net: Net-(R98-Pad2) */}
    <KiCadNet name={"Net__R98_Pad2_"} connectsTo={[".U11 > .pin2", ".U27 > .pin2", ".R98 > .pin2", ".R99 > .pin1"]}/>
    {/* KiCad net: /RF Front End/AMP_BYPASS */}
    <KiCadNet name={"_RF_Front_End_AMP_BYPASS"} connectsTo={[".U12 > .pin2", ".U14 > .pin2"]}/>
    {/* KiCad net: Net-(U14-ANT) */}
    <KiCadNet name={"Net__U14_ANT_"} connectsTo={[".U14 > .pin4", ".C68 > .pin1"]}/>
    {/* KiCad net: /USB/CC1 */}
    <KiCadNet name={"_USB_CC1"} connectsTo={[".U15 > .pin1", ".U15 > .pin10", ".R106 > .pin2", ".J1 > .pin3", ".C152 > .pin1"]}/>
    {/* KiCad net: /USB/CC2 */}
    <KiCadNet name={"_USB_CC2"} connectsTo={[".U15 > .pin2", ".U15 > .pin9", ".J1 > .pin11", ".C151 > .pin1", ".R103 > .pin2"]}/>
    {/* KiCad net: /USB/D+ */}
    <KiCadNet name={"_USB_D_"} connectsTo={[".U15 > .pin4", ".U15 > .pin7", ".FL1 > .pin4", ".J1 > .pin4", ".J1 > .pin12"]}/>
    {/* KiCad net: /USB/D- */}
    <KiCadNet name={"_USB_D__"} connectsTo={[".U15 > .pin5", ".U15 > .pin6", ".FL1 > .pin2", ".J1 > .pin5", ".J1 > .pin13"]}/>
    {/* KiCad net: unconnected-(U17-B6-Pad3) */}
    <KiCadNet name={"unconnected__U17_B6_Pad3_"} connectsTo={[".U17 > .pin3"]}/>
    {/* KiCad net: unconnected-(U17-B7-Pad6) */}
    <KiCadNet name={"unconnected__U17_B7_Pad6_"} connectsTo={[".U17 > .pin6"]}/>
    {/* KiCad net: unconnected-(U17-B3-Pad8) */}
    <KiCadNet name={"unconnected__U17_B3_Pad8_"} connectsTo={[".U17 > .pin8"]}/>
    {/* KiCad net: unconnected-(U17-B2-Pad11) */}
    <KiCadNet name={"unconnected__U17_B2_Pad11_"} connectsTo={[".U17 > .pin11"]}/>
    {/* KiCad net: /IF Transceiver/XCVR.~{SHDN} */}
    <KiCadNet name={"_IF_Transceiver_XCVR___SHDN_"} connectsTo={[".U17 > .pin12", ".U23 > .pin150", ".R109 > .pin1"]}/>
    {/* KiCad net: unconnected-(U17-B5-Pad14) */}
    <KiCadNet name={"unconnected__U17_B5_Pad14_"} connectsTo={[".U17 > .pin14"]}/>
    {/* KiCad net: /IF Transceiver/XCVR.~{CS} */}
    <KiCadNet name={"_IF_Transceiver_XCVR___CS_"} connectsTo={[".U17 > .pin15", ".U23 > .pin135"]}/>
    {/* KiCad net: /IF Transceiver/XCVR.RSSI */}
    <KiCadNet name={"_IF_Transceiver_XCVR_RSSI"} connectsTo={[".U17 > .pin16", ".U23 > .pin32"]}/>
    {/* KiCad net: SSP1_SCK */}
    <KiCadNet name={"SSP1_SCK"} connectsTo={[".U17 > .pin18", ".U18 > .pin35", ".U16 > .pin15", ".R141 > .pin2", ".TP51 > .pin1"]}/>
    {/* KiCad net: SSP1_COPI */}
    <KiCadNet name={"SSP1_COPI"} connectsTo={[".U17 > .pin19", ".U18 > .pin34", ".U16 > .pin17", ".R140 > .pin2", ".TP52 > .pin1"]}/>
    {/* KiCad net: unconnected-(U17-CLOCKOUT-Pad21) */}
    <KiCadNet name={"unconnected__U17_CLOCKOUT_Pad21_"} connectsTo={[".U17 > .pin21"]}/>
    {/* KiCad net: /IF Transceiver/XCVR.LD */}
    <KiCadNet name={"_IF_Transceiver_XCVR_LD"} connectsTo={[".U17 > .pin22", ".U23 > .pin147"]}/>
    {/* KiCad net: unconnected-(U17-B1-Pad23) */}
    <KiCadNet name={"unconnected__U17_B1_Pad23_"} connectsTo={[".U17 > .pin23"]}/>
    {/* KiCad net: unconnected-(U17-CTUNE-Pad29) */}
    <KiCadNet name={"unconnected__U17_CTUNE_Pad29_"} connectsTo={[".U17 > .pin29"]}/>
    {/* KiCad net: unconnected-(U17-B4-Pad34) */}
    <KiCadNet name={"unconnected__U17_B4_Pad34_"} connectsTo={[".U17 > .pin34"]}/>
    {/* KiCad net: /ADC, DAC/RXBB.Q- */}
    <KiCadNet name={"_ADC__DAC_RXBB_Q_"} connectsTo={[".U17 > .pin35", ".U3 > .pin2", ".TP61 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/RXBB.Q+ */}
    <KiCadNet name={"_ADC__DAC_RXBB_Q__"} connectsTo={[".U17 > .pin36", ".U3 > .pin1", ".TP60 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/RXBB.I- */}
    <KiCadNet name={"_ADC__DAC_RXBB_I_"} connectsTo={[".U17 > .pin37", ".U35 > .pin2", ".TP63 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/RXBB.I+ */}
    <KiCadNet name={"_ADC__DAC_RXBB_I__"} connectsTo={[".U17 > .pin38", ".U35 > .pin1", ".TP62 > .pin1"]}/>
    {/* KiCad net: /IF Transceiver/XCVR.RXHP */}
    <KiCadNet name={"_IF_Transceiver_XCVR_RXHP"} connectsTo={[".U17 > .pin40", ".U23 > .pin179"]}/>
    {/* KiCad net: /IF Transceiver/XCVR.RXTX */}
    <KiCadNet name={"_IF_Transceiver_XCVR_RXTX"} connectsTo={[".U17 > .pin48", ".U23 > .pin136"]}/>
    {/* KiCad net: /ADC, DAC/IA+ */}
    <KiCadNet name={"_ADC__DAC_IA_"} connectsTo={[".U18 > .pin3", ".U34 > .pin2"]}/>
    {/* KiCad net: /ADC, DAC/IA- */}
    <KiCadNet name={"_ADC__DAC_IA__"} connectsTo={[".U18 > .pin4", ".U34 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/QA- */}
    <KiCadNet name={"_ADC__DAC_QA_"} connectsTo={[".U18 > .pin9", ".U8 > .pin2"]}/>
    {/* KiCad net: /ADC, DAC/QA+ */}
    <KiCadNet name={"_ADC__DAC_QA__"} connectsTo={[".U18 > .pin10", ".U8 > .pin1"]}/>
    {/* KiCad net: /ADC, DAC/DA0 */}
    <KiCadNet name={"_ADC__DAC_DA0"} connectsTo={[".U18 > .pin13", ".RN5 > .pin8"]}/>
    {/* KiCad net: /ADC, DAC/DA1 */}
    <KiCadNet name={"_ADC__DAC_DA1"} connectsTo={[".U18 > .pin14", ".RN5 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/DA2 */}
    <KiCadNet name={"_ADC__DAC_DA2"} connectsTo={[".U18 > .pin15", ".RN5 > .pin6"]}/>
    {/* KiCad net: /ADC, DAC/DA3 */}
    <KiCadNet name={"_ADC__DAC_DA3"} connectsTo={[".U18 > .pin16", ".RN5 > .pin5"]}/>
    {/* KiCad net: /ADC, DAC/DA4 */}
    <KiCadNet name={"_ADC__DAC_DA4"} connectsTo={[".U18 > .pin19", ".RN4 > .pin8"]}/>
    {/* KiCad net: /ADC, DAC/DA5 */}
    <KiCadNet name={"_ADC__DAC_DA5"} connectsTo={[".U18 > .pin20", ".RN4 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/DA6 */}
    <KiCadNet name={"_ADC__DAC_DA6"} connectsTo={[".U18 > .pin21", ".RN4 > .pin6"]}/>
    {/* KiCad net: /ADC, DAC/DA7 */}
    <KiCadNet name={"_ADC__DAC_DA7"} connectsTo={[".U18 > .pin22", ".RN4 > .pin5"]}/>
    {/* KiCad net: /ADC, DAC/DD0 */}
    <KiCadNet name={"_ADC__DAC_DD0"} connectsTo={[".U18 > .pin23", ".RN3 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/DD1 */}
    <KiCadNet name={"_ADC__DAC_DD1"} connectsTo={[".U18 > .pin24", ".RN3 > .pin6"]}/>
    {/* KiCad net: /ADC, DAC/DD2 */}
    <KiCadNet name={"_ADC__DAC_DD2"} connectsTo={[".U18 > .pin25", ".RN3 > .pin5"]}/>
    {/* KiCad net: /ADC, DAC/DD3 */}
    <KiCadNet name={"_ADC__DAC_DD3"} connectsTo={[".U18 > .pin26", ".RN2 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/DD4 */}
    <KiCadNet name={"_ADC__DAC_DD4"} connectsTo={[".U18 > .pin27", ".RN2 > .pin6"]}/>
    {/* KiCad net: /ADC, DAC/DD5 */}
    <KiCadNet name={"_ADC__DAC_DD5"} connectsTo={[".U18 > .pin28", ".RN2 > .pin5"]}/>
    {/* KiCad net: /ADC, DAC/DD6 */}
    <KiCadNet name={"_ADC__DAC_DD6"} connectsTo={[".U18 > .pin29", ".RN1 > .pin8"]}/>
    {/* KiCad net: /ADC, DAC/DD7 */}
    <KiCadNet name={"_ADC__DAC_DD7"} connectsTo={[".U18 > .pin30", ".RN1 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/DD8 */}
    <KiCadNet name={"_ADC__DAC_DD8"} connectsTo={[".U18 > .pin31", ".RN1 > .pin6"]}/>
    {/* KiCad net: /ADC, DAC/DD9 */}
    <KiCadNet name={"_ADC__DAC_DD9"} connectsTo={[".U18 > .pin32", ".RN1 > .pin5"]}/>
    {/* KiCad net: CS_AD */}
    <KiCadNet name={"CS_AD"} connectsTo={[".U18 > .pin36", ".U23 > .pin178"]}/>
    {/* KiCad net: unconnected-(U18-NC-Pad38) */}
    <KiCadNet name={"unconnected__U18_NC_Pad38_"} connectsTo={[".U18 > .pin38"]}/>
    {/* KiCad net: /Clock Generator/XA */}
    <KiCadNet name={"_Clock_Generator_XA"} connectsTo={[".U19 > .pin1", ".C155 > .pin1"]}/>
    {/* KiCad net: unconnected-(U19-XB-Pad2) */}
    <KiCadNet name={"unconnected__U19_XB_Pad2_"} connectsTo={[".U19 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/CLK3 */}
    <KiCadNet name={"_Clock_Generator_CLK3"} connectsTo={[".U19 > .pin8", ".U31 > .pin3"]}/>
    {/* KiCad net: /Clock Generator/CLK2 */}
    <KiCadNet name={"_Clock_Generator_CLK2"} connectsTo={[".U19 > .pin9", ".R139 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/CLK1 */}
    <KiCadNet name={"_Clock_Generator_CLK1"} connectsTo={[".U19 > .pin12", ".R41 > .pin2", ".R12 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/CLK6 */}
    <KiCadNet name={"_Clock_Generator_CLK6"} connectsTo={[".U19 > .pin16", ".R84 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/CLK5 */}
    <KiCadNet name={"_Clock_Generator_CLK5"} connectsTo={[".U19 > .pin17", ".R23 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/CLK4 */}
    <KiCadNet name={"_Clock_Generator_CLK4"} connectsTo={[".U19 > .pin19", ".R32 > .pin2"]}/>
    {/* KiCad net: /Microcontroller/SPIFI_~{CS} */}
    <KiCadNet name={"_Microcontroller_SPIFI___CS_"} connectsTo={[".U20 > .pin1", ".U23 > .pin37", ".TP64 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/SPIFI_CIPO */}
    <KiCadNet name={"_Microcontroller_SPIFI_CIPO"} connectsTo={[".U20 > .pin2", ".U23 > .pin26"]}/>
    {/* KiCad net: /Microcontroller/SPIFI_SIO2 */}
    <KiCadNet name={"_Microcontroller_SPIFI_SIO2"} connectsTo={[".U20 > .pin3", ".U23 > .pin39"]}/>
    {/* KiCad net: /Microcontroller/SPIFI_COPI */}
    <KiCadNet name={"_Microcontroller_SPIFI_COPI"} connectsTo={[".U20 > .pin5", ".U23 > .pin38"]}/>
    {/* KiCad net: /Microcontroller/SPIFI_SCK */}
    <KiCadNet name={"_Microcontroller_SPIFI_SCK"} connectsTo={[".U20 > .pin6", ".U23 > .pin27"]}/>
    {/* KiCad net: /Microcontroller/SPIFI_SIO3 */}
    <KiCadNet name={"_Microcontroller_SPIFI_SIO3"} connectsTo={[".U20 > .pin7", ".U23 > .pin42"]}/>
    {/* KiCad net: /Microcontroller/ADC0_4 */}
    <KiCadNet name={"_Microcontroller_ADC0_4"} connectsTo={[".U23 > .pin5", ".R157 > .pin1", ".R106 > .pin1"]}/>
    {/* KiCad net: unconnected-(U23-RTC_ALARM-PadA10) */}
    <KiCadNet name={"unconnected__U23_RTC_ALARM_PadA10_"} connectsTo={[".U23 > .pin10"]}/>
    {/* KiCad net: Net-(U23-P4_6) */}
    <KiCadNet name={"Net__U23_P4_6_"} connectsTo={[".U23 > .pin15", ".R107 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/ADC0_3 */}
    <KiCadNet name={"_Microcontroller_ADC0_3"} connectsTo={[".U23 > .pin18", ".R38 > .pin2", ".R39 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/ADC0_7 */}
    <KiCadNet name={"_Microcontroller_ADC0_7"} connectsTo={[".U23 > .pin19", ".R156 > .pin1", ".R103 > .pin1"]}/>
    {/* KiCad net: unconnected-(U23-NC-PadB8) */}
    <KiCadNet name={"unconnected__U23_NC_PadB8_"} connectsTo={[".U23 > .pin22"]}/>
    {/* KiCad net: unconnected-(U23-PB_4-PadB10) */}
    <KiCadNet name={"unconnected__U23_PB_4_PadB10_"} connectsTo={[".U23 > .pin24"]}/>
    {/* KiCad net: unconnected-(U23-PB_2-PadB11) */}
    <KiCadNet name={"unconnected__U23_PB_2_PadB11_"} connectsTo={[".U23 > .pin25"]}/>
    {/* KiCad net: unconnected-(U23-WAKEUP1-PadC8) */}
    <KiCadNet name={"unconnected__U23_WAKEUP1_PadC8_"} connectsTo={[".U23 > .pin36"]}/>
    {/* KiCad net: unconnected-(U23-P4_8-PadD2) */}
    <KiCadNet name={"unconnected__U23_P4_8_PadD2_"} connectsTo={[".U23 > .pin44"]}/>
    {/* KiCad net: unconnected-(U23-P4_0-PadD4) */}
    <KiCadNet name={"unconnected__U23_P4_0_PadD4_"} connectsTo={[".U23 > .pin46"]}/>
    {/* KiCad net: unconnected-(U23-USB1_DP-PadD11) */}
    <KiCadNet name={"unconnected__U23_USB1_DP_PadD11_"} connectsTo={[".U23 > .pin53"]}/>
    {/* KiCad net: /Microcontroller/USB_DATA.D+ */}
    <KiCadNet name={"_Microcontroller_USB_DATA_D_"} connectsTo={[".U23 > .pin58", ".FL1 > .pin3"]}/>
    {/* KiCad net: /FPGA/SGPIO8 */}
    <KiCadNet name={"_FPGA_SGPIO8"} connectsTo={[".U23 > .pin60", ".RN8 > .pin6"]}/>
    {/* KiCad net: unconnected-(U23-WAKEUP2-PadE5) */}
    <KiCadNet name={"unconnected__U23_WAKEUP2_PadE5_"} connectsTo={[".U23 > .pin61"]}/>
    {/* KiCad net: unconnected-(U23-USB1_DM-PadE11) */}
    <KiCadNet name={"unconnected__U23_USB1_DM_PadE11_"} connectsTo={[".U23 > .pin67"]}/>
    {/* KiCad net: /Microcontroller/~{BIAS_OC} */}
    <KiCadNet name={"_Microcontroller___BIAS_OC_"} connectsTo={[".U23 > .pin69", ".U24 > .pin4"]}/>
    {/* KiCad net: /Microcontroller/USB_DATA.D- */}
    <KiCadNet name={"_Microcontroller_USB_DATA_D__"} connectsTo={[".U23 > .pin72", ".FL1 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/MCU_CLK */}
    <KiCadNet name={"_Clock_Generator_MCU_CLK"} connectsTo={[".U23 > .pin74", ".R139 > .pin1", ".TP36 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/~{3V3AUX_OC} */}
    <KiCadNet name={"_Microcontroller___3V3AUX_OC_"} connectsTo={[".U23 > .pin77", ".U28 > .pin4"]}/>
    {/* KiCad net: /Clock Generator/P1_CTRL1 */}
    <KiCadNet name={"_Clock_Generator_P1_CTRL1"} connectsTo={[".U23 > .pin78", ".U33 > .pin10"]}/>
    {/* KiCad net: /Clock Generator/P1_CTRL0 */}
    <KiCadNet name={"_Clock_Generator_P1_CTRL0"} connectsTo={[".U23 > .pin80", ".U33 > .pin11"]}/>
    {/* KiCad net: unconnected-(U23-USB0_ID-PadG2) */}
    <KiCadNet name={"unconnected__U23_USB0_ID_PadG2_"} connectsTo={[".U23 > .pin82"]}/>
    {/* KiCad net: !VAA_ENABLE */}
    <KiCadNet name={"_VAA_ENABLE"} connectsTo={[".U23 > .pin84", ".R60 > .pin2"]}/>
    {/* KiCad net: unconnected-(U23-P6_10-PadG13) */}
    <KiCadNet name={"unconnected__U23_P6_10_PadG13_"} connectsTo={[".U23 > .pin89"]}/>
    {/* KiCad net: /Microcontroller/~{VIN_IN_EN} */}
    <KiCadNet name={"_Microcontroller___VIN_IN_EN_"} connectsTo={[".U23 > .pin91", ".R78 > .pin2"]}/>
    {/* KiCad net: /Microcontroller/~{VBUS_IN_EN} */}
    <KiCadNet name={"_Microcontroller___VBUS_IN_EN_"} connectsTo={[".U23 > .pin92", ".R77 > .pin2"]}/>
    {/* KiCad net: unconnected-(U23-P8_3-PadH3) */}
    <KiCadNet name={"unconnected__U23_P8_3_PadH3_"} connectsTo={[".U23 > .pin93"]}/>
    {/* KiCad net: /Microcontroller/~{3V3AUX_EN} */}
    <KiCadNet name={"_Microcontroller___3V3AUX_EN_"} connectsTo={[".U23 > .pin97", ".U28 > .pin3", ".R100 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/LPF_EN */}
    <KiCadNet name={"_Microcontroller_LPF_EN"} connectsTo={[".U23 > .pin98", ".R98 > .pin1", ".TP45 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/P1_CTRL2 */}
    <KiCadNet name={"_Clock_Generator_P1_CTRL2"} connectsTo={[".U23 > .pin99", ".U33 > .pin9"]}/>
    {/* KiCad net: /FPGA/SGPIO10 */}
    <KiCadNet name={"_FPGA_SGPIO10"} connectsTo={[".U23 > .pin104", ".RN8 > .pin8"]}/>
    {/* KiCad net: /Clock Generator/CLKIN_CTRL */}
    <KiCadNet name={"_Clock_Generator_CLKIN_CTRL"} connectsTo={[".U23 > .pin106", ".U37 > .pin6"]}/>
    {/* KiCad net: /Clock Generator/P2_CTRL1 */}
    <KiCadNet name={"_Clock_Generator_P2_CTRL1"} connectsTo={[".U23 > .pin107", ".U31 > .pin6"]}/>
    {/* KiCad net: /Clock Generator/P2_5 */}
    <KiCadNet name={"_Clock_Generator_P2_5"} connectsTo={[".U23 > .pin108", ".U33 > .pin5"]}/>
    {/* KiCad net: /Microcontroller/RF_AMP_EN */}
    <KiCadNet name={"_Microcontroller_RF_AMP_EN"} connectsTo={[".U23 > .pin109", ".R96 > .pin1", ".TP46 > .pin1"]}/>
    {/* KiCad net: Net-(U23-P2_6) */}
    <KiCadNet name={"Net__U23_P2_6_"} connectsTo={[".U23 > .pin110", ".R6 > .pin1"]}/>
    {/* KiCad net: unconnected-(U23-P8_8-PadK1) */}
    <KiCadNet name={"unconnected__U23_P8_8_PadK1_"} connectsTo={[".U23 > .pin111"]}/>
    {/* KiCad net: /FPGA/SGPIO1 */}
    <KiCadNet name={"_FPGA_SGPIO1"} connectsTo={[".U23 > .pin112", ".RN8 > .pin5"]}/>
    {/* KiCad net: /FPGA/SGPIO0 */}
    <KiCadNet name={"_FPGA_SGPIO0"} connectsTo={[".U23 > .pin113", ".RN8 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/AA_EN */}
    <KiCadNet name={"_ADC__DAC_AA_EN"} connectsTo={[".U23 > .pin117", ".U34 > .pin10", ".U8 > .pin10", ".U36 > .pin2", ".TP55 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/P2_CTRL0 */}
    <KiCadNet name={"_Clock_Generator_P2_CTRL0"} connectsTo={[".U23 > .pin120", ".U30 > .pin6"]}/>
    {/* KiCad net: /FPGA/SGPIO5 */}
    <KiCadNet name={"_FPGA_SGPIO5"} connectsTo={[".U23 > .pin122", ".RN6 > .pin5"]}/>
    {/* KiCad net: /FPGA/SGPIO7 */}
    <KiCadNet name={"_FPGA_SGPIO7"} connectsTo={[".U23 > .pin125", ".R21 > .pin2"]}/>
    {/* KiCad net: unconnected-(U23-P5_0-PadL2) */}
    <KiCadNet name={"unconnected__U23_P5_0_PadL2_"} connectsTo={[".U23 > .pin126"]}/>
    {/* KiCad net: /FPGA/FPGA_CONFIG.CDONE */}
    <KiCadNet name={"_FPGA_FPGA_CONFIG_CDONE"} connectsTo={[".U23 > .pin127", ".U16 > .pin7", ".R45 > .pin1", ".TP48 > .pin1"]}/>
    {/* KiCad net: /Microcontroller/~{TRST} */}
    <KiCadNet name={"_Microcontroller___TRST_"} connectsTo={[".U23 > .pin128", ".TP5 > .pin1"]}/>
    {/* KiCad net: /FPGA/SGPIO3 */}
    <KiCadNet name={"_FPGA_SGPIO3"} connectsTo={[".U23 > .pin129", ".RN7 > .pin8"]}/>
    {/* KiCad net: /FPGA/SGPIO11 */}
    <KiCadNet name={"_FPGA_SGPIO11"} connectsTo={[".U23 > .pin130", ".RN7 > .pin7"]}/>
    {/* KiCad net: unconnected-(U23-PA_0-PadL10) */}
    <KiCadNet name={"unconnected__U23_PA_0_PadL10_"} connectsTo={[".U23 > .pin134"]}/>
    {/* KiCad net: /FPGA/SGPIO6 */}
    <KiCadNet name={"_FPGA_SGPIO6"} connectsTo={[".U23 > .pin137", ".RN6 > .pin6"]}/>
    {/* KiCad net: Net-(JP1-A) */}
    <KiCadNet name={"Net__JP1_A_"} connectsTo={[".U23 > .pin138", ".JP1 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_CONFIG.~{SPI_CS} */}
    <KiCadNet name={"_FPGA_FPGA_CONFIG___SPI_CS_"} connectsTo={[".U23 > .pin139", ".U16 > .pin16", ".R44 > .pin1", ".TP49 > .pin1"]}/>
    {/* KiCad net: SSP1_CIPO */}
    <KiCadNet name={"SSP1_CIPO"} connectsTo={[".U23 > .pin140", ".R145 > .pin1", ".TP53 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_CONFIG.~{CRESET} */}
    <KiCadNet name={"_FPGA_FPGA_CONFIG___CRESET_"} connectsTo={[".U23 > .pin141", ".U16 > .pin8", ".R40 > .pin1", ".TP50 > .pin1"]}/>
    {/* KiCad net: /FPGA/SGPIO4 */}
    <KiCadNet name={"_FPGA_SGPIO4"} connectsTo={[".U23 > .pin146", ".RN7 > .pin5"]}/>
    {/* KiCad net: unconnected-(U23-P6_0-PadM10) */}
    <KiCadNet name={"unconnected__U23_P6_0_PadM10_"} connectsTo={[".U23 > .pin148"]}/>
    {/* KiCad net: /Clock Generator/SCT_CLK */}
    <KiCadNet name={"_Clock_Generator_SCT_CLK"} connectsTo={[".U23 > .pin152", ".R41 > .pin1", ".TP32 > .pin1"]}/>
    {/* KiCad net: Net-(U23-P1_19) */}
    <KiCadNet name={"Net__U23_P1_19_"} connectsTo={[".U23 > .pin161", ".R141 > .pin1"]}/>
    {/* KiCad net: /FPGA/SGPIO12 */}
    <KiCadNet name={"_FPGA_SGPIO12"} connectsTo={[".U23 > .pin162", ".RN6 > .pin8"]}/>
    {/* KiCad net: /Microcontroller/~{MIX_EN} */}
    <KiCadNet name={"_Microcontroller___MIX_EN_"} connectsTo={[".U23 > .pin165", ".R94 > .pin1", ".TP44 > .pin1"]}/>
    {/* KiCad net: Net-(U23-P1_4) */}
    <KiCadNet name={"Net__U23_P1_4_"} connectsTo={[".U23 > .pin168", ".R140 > .pin1"]}/>
    {/* KiCad net: /FPGA/SGPIO9 */}
    <KiCadNet name={"_FPGA_SGPIO9"} connectsTo={[".U23 > .pin171", ".RN7 > .pin6"]}/>
    {/* KiCad net: Net-(U23-PD_12) */}
    <KiCadNet name={"Net__U23_PD_12_"} connectsTo={[".U23 > .pin175", ".R127 > .pin2"]}/>
    {/* KiCad net: /FPGA/SGPIO2 */}
    <KiCadNet name={"_FPGA_SGPIO2"} connectsTo={[".U23 > .pin177", ".RN6 > .pin7"]}/>
    {/* KiCad net: Net-(U38-RFOUT) */}
    <KiCadNet name={"Net__U38_RFOUT_"} connectsTo={[".R133 > .pin1", ".U38 > .pin4", ".L28 > .pin2", ".C192 > .pin1", ".R155 > .pin1"]}/>
    {/* KiCad net: Net-(C191-Pad1) */}
    <KiCadNet name={"Net__C191_Pad1_"} connectsTo={[".R133 > .pin2", ".L28 > .pin1", ".L27 > .pin2", ".R132 > .pin1", ".C191 > .pin1"]}/>
    {/* KiCad net: Net-(C207-Pad1) */}
    <KiCadNet name={"Net__C207_Pad1_"} connectsTo={[".L32 > .pin1", ".C207 > .pin1", ".R154 > .pin2", ".R117 > .pin1", ".L5 > .pin2"]}/>
    {/* KiCad net: Net-(U40-RFOUT) */}
    <KiCadNet name={"Net__U40_RFOUT_"} connectsTo={[".L32 > .pin2", ".U40 > .pin4", ".R152 > .pin2", ".R154 > .pin1", ".C78 > .pin1"]}/>
    {/* KiCad net: Net-(Q9B-B2) */}
    <KiCadNet name={"Net__Q9B_B2_"} connectsTo={[".R83 > .pin1", ".Q9 > .pin5"]}/>
    {/* KiCad net: Net-(D17-K) */}
    <KiCadNet name={"Net__D17_K_"} connectsTo={[".R83 > .pin2", ".R87 > .pin1", ".D17 > .pin1", ".R90 > .pin2"]}/>
    {/* KiCad net: Net-(U34-D2+) */}
    <KiCadNet name={"Net__U34_D2__"} connectsTo={[".R102 > .pin1", ".C74 > .pin1", ".U34 > .pin7"]}/>
    {/* KiCad net: Net-(L23-Pad1) */}
    <KiCadNet name={"Net__L23_Pad1_"} connectsTo={[".R102 > .pin2", ".L23 > .pin1"]}/>
    {/* KiCad net: Net-(R94-Pad2) */}
    <KiCadNet name={"Net__R94_Pad2_"} connectsTo={[".R94 > .pin2", ".U27 > .pin1", ".R95 > .pin1", ".U26 > .pin5"]}/>
    {/* KiCad net: Net-(C203-Pad1) */}
    <KiCadNet name={"Net__C203_Pad1_"} connectsTo={[".C203 > .pin1", ".L29 > .pin2", ".R142 > .pin1", ".R43 > .pin1", ".L30 > .pin1"]}/>
    {/* KiCad net: Net-(C203-Pad2) */}
    <KiCadNet name={"Net__C203_Pad2_"} connectsTo={[".C203 > .pin2", ".R143 > .pin2"]}/>
    {/* KiCad net: Net-(Q1B-D) */}
    <KiCadNet name={"Net__Q1B_D_"} connectsTo={[".Q1 > .pin3", ".R29 > .pin2"]}/>
    {/* KiCad net: Net-(D15-K) */}
    <KiCadNet name={"Net__D15_K_"} connectsTo={[".Q1 > .pin6", ".R29 > .pin1", ".C69 > .pin1", ".D15 > .pin1"]}/>
    {/* KiCad net: +2V5 */}
    <KiCadNet name={"_2V5"} connectsTo={[".FB8 > .pin1", ".U22 > .pin2", ".C175 > .pin1", ".TP1 > .pin1"]}/>
    {/* KiCad net: 2V5FPGA */}
    <KiCadNet name={"_2V5FPGA"} connectsTo={[".FB8 > .pin2", ".U16 > .pin24", ".C177 > .pin1"]}/>
    {/* KiCad net: Net-(U30-Pad4) */}
    <KiCadNet name={"Net__U30_Pad4_"} connectsTo={[".U31 > .pin1", ".U30 > .pin4"]}/>
    {/* KiCad net: Net-(R108-Pad2) */}
    <KiCadNet name={"Net__R108_Pad2_"} connectsTo={[".U31 > .pin4", ".R108 > .pin2"]}/>
    {/* KiCad net: Net-(C195-Pad2) */}
    <KiCadNet name={"Net__C195_Pad2_"} connectsTo={[".R136 > .pin2", ".C195 > .pin2"]}/>
    {/* KiCad net: /Microcontroller/TX_EN */}
    <KiCadNet name={"_Microcontroller_TX_EN"} connectsTo={[".U39 > .pin2", ".JP1 > .pin2", ".R24 > .pin1", ".TP43 > .pin1"]}/>
    {/* KiCad net: /Mixer/TX_MIX_EN */}
    <KiCadNet name={"_Mixer_TX_MIX_EN"} connectsTo={[".U39 > .pin4", ".U38 > .pin5", ".TP66 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO5 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO5"} connectsTo={[".U16 > .pin3", ".RN6 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO6 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO6"} connectsTo={[".U16 > .pin4", ".RN6 > .pin3"]}/>
    {/* KiCad net: 1V2FPGA */}
    <KiCadNet name={"_1V2FPGA"} connectsTo={[".U16 > .pin5", ".U16 > .pin30", ".C178 > .pin1", ".C179 > .pin1", ".C184 > .pin1", ".FB6 > .pin2", ".C196 > .pin1", ".C117 > .pin1", ".C205 > .pin1", ".FB7 > .pin2", ".TP22 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO2 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO2"} connectsTo={[".U16 > .pin6", ".RN6 > .pin2"]}/>
    {/* KiCad net: /FPGA/Q_INVERT */}
    <KiCadNet name={"_FPGA_Q_INVERT"} connectsTo={[".U16 > .pin9", ".RN6 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO4 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO4"} connectsTo={[".U16 > .pin10", ".RN7 > .pin4"]}/>
    {/* KiCad net: /FPGA/CAPTURE_EN */}
    <KiCadNet name={"_FPGA_CAPTURE_EN"} connectsTo={[".U16 > .pin11", ".RN7 > .pin3"]}/>
    {/* KiCad net: /FPGA/DIRECTION */}
    <KiCadNet name={"_FPGA_DIRECTION"} connectsTo={[".U16 > .pin12", ".RN7 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO3 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO3"} connectsTo={[".U16 > .pin13", ".RN7 > .pin1"]}/>
    {/* KiCad net: Net-(U16B-IOB_32a_SPI_SO) */}
    <KiCadNet name={"Net__U16B_IOB_32a_SPI_SO_"} connectsTo={[".U16 > .pin14", ".R145 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO7 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO7"} connectsTo={[".U16 > .pin18", ".R21 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO1 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO1"} connectsTo={[".U16 > .pin19", ".RN8 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO8 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO8"} connectsTo={[".U16 > .pin20", ".RN8 > .pin3"]}/>
    {/* KiCad net: /FPGA/FPGA_SGPIO0 */}
    <KiCadNet name={"_FPGA_FPGA_SGPIO0"} connectsTo={[".U16 > .pin21", ".RN8 > .pin2"]}/>
    {/* KiCad net: /FPGA/DISABLE */}
    <KiCadNet name={"_FPGA_DISABLE"} connectsTo={[".U16 > .pin23", ".RN8 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_DD9 */}
    <KiCadNet name={"_FPGA_FPGA_DD9"} connectsTo={[".U16 > .pin25", ".RN1 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_DD8 */}
    <KiCadNet name={"_FPGA_FPGA_DD8"} connectsTo={[".U16 > .pin26", ".RN1 > .pin3"]}/>
    {/* KiCad net: /FPGA/FPGA_DD7 */}
    <KiCadNet name={"_FPGA_FPGA_DD7"} connectsTo={[".U16 > .pin27", ".RN1 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_DD6 */}
    <KiCadNet name={"_FPGA_FPGA_DD6"} connectsTo={[".U16 > .pin28", ".RN1 > .pin1"]}/>
    {/* KiCad net: /FPGA/VCCPLL */}
    <KiCadNet name={"_FPGA_VCCPLL"} connectsTo={[".U16 > .pin29", ".FB6 > .pin1", ".C176 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_DD5 */}
    <KiCadNet name={"_FPGA_FPGA_DD5"} connectsTo={[".U16 > .pin31", ".RN2 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_DD4 */}
    <KiCadNet name={"_FPGA_FPGA_DD4"} connectsTo={[".U16 > .pin32", ".RN2 > .pin3"]}/>
    {/* KiCad net: /FPGA/FPGA_DD3 */}
    <KiCadNet name={"_FPGA_FPGA_DD3"} connectsTo={[".U16 > .pin34", ".RN2 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_DD2 */}
    <KiCadNet name={"_FPGA_FPGA_DD2"} connectsTo={[".U16 > .pin36", ".RN3 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_DD1 */}
    <KiCadNet name={"_FPGA_FPGA_DD1"} connectsTo={[".U16 > .pin37", ".RN3 > .pin3"]}/>
    {/* KiCad net: /FPGA/FPGA_DD0 */}
    <KiCadNet name={"_FPGA_FPGA_DD0"} connectsTo={[".U16 > .pin38", ".RN3 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_DA7 */}
    <KiCadNet name={"_FPGA_FPGA_DA7"} connectsTo={[".U16 > .pin39", ".RN4 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_DA6 */}
    <KiCadNet name={"_FPGA_FPGA_DA6"} connectsTo={[".U16 > .pin40", ".RN4 > .pin3"]}/>
    {/* KiCad net: /FPGA/FPGA_DA5 */}
    <KiCadNet name={"_FPGA_FPGA_DA5"} connectsTo={[".U16 > .pin41", ".RN4 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_DA4 */}
    <KiCadNet name={"_FPGA_FPGA_DA4"} connectsTo={[".U16 > .pin42", ".RN4 > .pin1"]}/>
    {/* KiCad net: /FPGA/FPGA_DA3 */}
    <KiCadNet name={"_FPGA_FPGA_DA3"} connectsTo={[".U16 > .pin43", ".RN5 > .pin4"]}/>
    {/* KiCad net: /FPGA/FPGA_DA2 */}
    <KiCadNet name={"_FPGA_FPGA_DA2"} connectsTo={[".U16 > .pin44", ".RN5 > .pin3"]}/>
    {/* KiCad net: /FPGA/FPGA_DA1 */}
    <KiCadNet name={"_FPGA_FPGA_DA1"} connectsTo={[".U16 > .pin45", ".RN5 > .pin2"]}/>
    {/* KiCad net: /FPGA/FPGA_DA0 */}
    <KiCadNet name={"_FPGA_FPGA_DA0"} connectsTo={[".U16 > .pin46", ".RN5 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/FPGA_CLK */}
    <KiCadNet name={"_Clock_Generator_FPGA_CLK"} connectsTo={[".U16 > .pin47", ".R12 > .pin1", ".TP65 > .pin1"]}/>
    {/* KiCad net: Net-(C195-Pad1) */}
    <KiCadNet name={"Net__C195_Pad1_"} connectsTo={[".C195 > .pin1", ".L33 > .pin2", ".R137 > .pin1", ".R138 > .pin2", ".L34 > .pin1"]}/>
    {/* KiCad net: Net-(C139-Pad1) */}
    <KiCadNet name={"Net__C139_Pad1_"} connectsTo={[".R128 > .pin1", ".C139 > .pin1", ".R129 > .pin2", ".L12 > .pin1", ".L26 > .pin2"]}/>
    {/* KiCad net: Net-(Q6-G) */}
    <KiCadNet name={"Net__Q6_G_"} connectsTo={[".R61 > .pin2", ".Q6 > .pin1", ".R71 > .pin1", ".C180 > .pin1"]}/>
    {/* KiCad net: Net-(R96-Pad2) */}
    <KiCadNet name={"Net__R96_Pad2_"} connectsTo={[".R96 > .pin2", ".R97 > .pin1", ".U26 > .pin10", ".U26 > .pin13"]}/>
    {/* KiCad net: /RF Front End/RX_AMP_EN */}
    <KiCadNet name={"_RF_Front_End_RX_AMP_EN"} connectsTo={[".U40 > .pin5", ".U13 > .pin4"]}/>
    {/* KiCad net: Net-(U40-ADJ) */}
    <KiCadNet name={"Net__U40_ADJ_"} connectsTo={[".U40 > .pin6", ".R114 > .pin1"]}/>
    {/* KiCad net: Net-(U24-ILIM) */}
    <KiCadNet name={"Net__U24_ILIM_"} connectsTo={[".U24 > .pin5", ".R20 > .pin1"]}/>
    {/* KiCad net: /Clock Generator/P1_CLKIN */}
    <KiCadNet name={"_Clock_Generator_P1_CLKIN"} connectsTo={[".U37 > .pin3", ".U33 > .pin15"]}/>
    {/* KiCad net: Net-(Q10B-C2) */}
    <KiCadNet name={"Net__Q10B_C2_"} connectsTo={[".R87 > .pin2", ".Q10 > .pin3"]}/>
    {/* KiCad net: /RF Front End/BIAS */}
    <KiCadNet name={"_RF_Front_End_BIAS"} connectsTo={[".D10 > .pin1", ".L19 > .pin1", ".R35 > .pin1", ".R126 > .pin2", ".TP47 > .pin1"]}/>
    {/* KiCad net: Net-(U38-BIAS) */}
    <KiCadNet name={"Net__U38_BIAS_"} connectsTo={[".U38 > .pin2", ".L33 > .pin1", ".R137 > .pin2", ".C194 > .pin1"]}/>
    {/* KiCad net: Net-(U38-RFIN) */}
    <KiCadNet name={"Net__U38_RFIN_"} connectsTo={[".U38 > .pin3", ".R123 > .pin1", ".R138 > .pin1", ".R134 > .pin1", ".L34 > .pin2"]}/>
    {/* KiCad net: Net-(U38-ADJ) */}
    <KiCadNet name={"Net__U38_ADJ_"} connectsTo={[".U38 > .pin6", ".R135 > .pin1"]}/>
    {/* KiCad net: Net-(U34-D2-) */}
    <KiCadNet name={"Net__U34_D2___"} connectsTo={[".C74 > .pin2", ".U34 > .pin6", ".R112 > .pin1"]}/>
    {/* KiCad net: Net-(C210-Pad1) */}
    <KiCadNet name={"Net__C210_Pad1_"} connectsTo={[".C210 > .pin1", ".R116 > .pin1", ".L31 > .pin1", ".L4 > .pin2", ".R153 > .pin2"]}/>
    {/* KiCad net: Net-(C210-Pad2) */}
    <KiCadNet name={"Net__C210_Pad2_"} connectsTo={[".C210 > .pin2", ".R42 > .pin2"]}/>
    {/* KiCad net: Net-(C56-Pad1) */}
    <KiCadNet name={"Net__C56_Pad1_"} connectsTo={[".C56 > .pin1", ".L14 > .pin1", ".L15 > .pin2"]}/>
    {/* KiCad net: unconnected-(RN2-R1.1-Pad1) */}
    <KiCadNet name={"unconnected__RN2_R1_1_Pad1_"} connectsTo={[".RN2 > .pin1"]}/>
    {/* KiCad net: unconnected-(RN2-R1.2-Pad8) */}
    <KiCadNet name={"unconnected__RN2_R1_2_Pad8_"} connectsTo={[".RN2 > .pin8"]}/>
    {/* KiCad net: Net-(U28-ILIM) */}
    <KiCadNet name={"Net__U28_ILIM_"} connectsTo={[".U28 > .pin5", ".R101 > .pin1"]}/>
    {/* KiCad net: Net-(Q4-G) */}
    <KiCadNet name={"Net__Q4_G_"} connectsTo={[".R22 > .pin1", ".Q9 > .pin6", ".R58 > .pin2", ".Q4 > .pin1"]}/>
    {/* KiCad net: Net-(U3-D1-) */}
    <KiCadNet name={"Net__U3_D1__"} connectsTo={[".U3 > .pin4", ".C107 > .pin1", ".L21 > .pin2"]}/>
    {/* KiCad net: Net-(U3-D1+) */}
    <KiCadNet name={"Net__U3_D1___"} connectsTo={[".U3 > .pin5", ".C107 > .pin2", ".L22 > .pin2"]}/>
    {/* KiCad net: /ADC, DAC/AA_BYPASS_Q+ */}
    <KiCadNet name={"_ADC__DAC_AA_BYPASS_Q_"} connectsTo={[".U3 > .pin6", ".U8 > .pin5"]}/>
    {/* KiCad net: /ADC, DAC/AA_BYPASS_Q- */}
    <KiCadNet name={"_ADC__DAC_AA_BYPASS_Q__"} connectsTo={[".U3 > .pin7", ".U8 > .pin4"]}/>
    {/* KiCad net: /ADC, DAC/~{BB_EN} */}
    <KiCadNet name={"_ADC__DAC___BB_EN_"} connectsTo={[".U3 > .pin8", ".U34 > .pin8", ".U35 > .pin8", ".R113 > .pin1", ".U8 > .pin8"]}/>
    {/* KiCad net: /ADC, DAC/~{AA_EN} */}
    <KiCadNet name={"_ADC__DAC___AA_EN_"} connectsTo={[".U3 > .pin10", ".U35 > .pin10", ".U36 > .pin4", ".TP54 > .pin1"]}/>
    {/* KiCad net: Net-(D16-A) */}
    <KiCadNet name={"Net__D16_A_"} connectsTo={[".R89 > .pin1", ".D16 > .pin2"]}/>
    {/* KiCad net: Net-(Q9A-B1) */}
    <KiCadNet name={"Net__Q9A_B1_"} connectsTo={[".Q9 > .pin2", ".R81 > .pin1"]}/>
    {/* KiCad net: Net-(C101-Pad2) */}
    <KiCadNet name={"Net__C101_Pad2_"} connectsTo={[".L18 > .pin1", ".C101 > .pin2", ".C103 > .pin1"]}/>
    {/* KiCad net: Net-(U35-D1-) */}
    <KiCadNet name={"Net__U35_D1__"} connectsTo={[".C76 > .pin1", ".U35 > .pin4", ".L23 > .pin2"]}/>
    {/* KiCad net: Net-(U35-D1+) */}
    <KiCadNet name={"Net__U35_D1___"} connectsTo={[".C76 > .pin2", ".U35 > .pin5", ".L24 > .pin2"]}/>
    {/* KiCad net: Net-(C101-Pad1) */}
    <KiCadNet name={"Net__C101_Pad1_"} connectsTo={[".L16 > .pin1", ".C91 > .pin2", ".C101 > .pin1"]}/>
    {/* KiCad net: Net-(U8-D2+) */}
    <KiCadNet name={"Net__U8_D2__"} connectsTo={[".R110 > .pin1", ".C108 > .pin1", ".U8 > .pin7"]}/>
    {/* KiCad net: Net-(L21-Pad1) */}
    <KiCadNet name={"Net__L21_Pad1_"} connectsTo={[".R110 > .pin2", ".L21 > .pin1"]}/>
    {/* KiCad net: Net-(C139-Pad2) */}
    <KiCadNet name={"Net__C139_Pad2_"} connectsTo={[".C139 > .pin2", ".R131 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/MIX_CLK */}
    <KiCadNet name={"_Clock_Generator_MIX_CLK"} connectsTo={[".R151 > .pin1", ".R23 > .pin1", ".R150 > .pin2", ".TP34 > .pin1"]}/>
    {/* KiCad net: Net-(C54-Pad1) */}
    <KiCadNet name={"Net__C54_Pad1_"} connectsTo={[".L14 > .pin2", ".C54 > .pin1", ".L8 > .pin1"]}/>
    {/* KiCad net: Net-(Q6-D) */}
    <KiCadNet name={"Net__Q6_D_"} connectsTo={[".Q6 > .pin3", ".C180 > .pin2", ".FB4 > .pin1"]}/>
    {/* KiCad net: Net-(C103-Pad2) */}
    <KiCadNet name={"Net__C103_Pad2_"} connectsTo={[".L17 > .pin1", ".C96 > .pin1", ".C103 > .pin2"]}/>
    {/* KiCad net: Net-(D17-A) */}
    <KiCadNet name={"Net__D17_A_"} connectsTo={[".R91 > .pin1", ".D17 > .pin2"]}/>
    {/* KiCad net: Net-(C188-Pad1) */}
    <KiCadNet name={"Net__C188_Pad1_"} connectsTo={[".C188 > .pin1", ".C189 > .pin2", ".R155 > .pin2"]}/>
    {/* KiCad net: unconnected-(RN3-R1.1-Pad1) */}
    <KiCadNet name={"unconnected__RN3_R1_1_Pad1_"} connectsTo={[".RN3 > .pin1"]}/>
    {/* KiCad net: unconnected-(RN3-R1.2-Pad8) */}
    <KiCadNet name={"unconnected__RN3_R1_2_Pad8_"} connectsTo={[".RN3 > .pin8"]}/>
    {/* KiCad net: Net-(U8-D2-) */}
    <KiCadNet name={"Net__U8_D2___"} connectsTo={[".R111 > .pin1", ".C108 > .pin2", ".U8 > .pin6"]}/>
    {/* KiCad net: Net-(L22-Pad1) */}
    <KiCadNet name={"Net__L22_Pad1_"} connectsTo={[".R111 > .pin2", ".L22 > .pin1"]}/>
    {/* KiCad net: Net-(Q7A-C1) */}
    <KiCadNet name={"Net__Q7A_C1_"} connectsTo={[".R71 > .pin2", ".Q7 > .pin6"]}/>
    {/* KiCad net: Net-(R24-Pad2) */}
    <KiCadNet name={"Net__R24_Pad2_"} connectsTo={[".R92 > .pin1", ".R24 > .pin2", ".U26 > .pin2", ".U26 > .pin12"]}/>
    {/* KiCad net: Net-(Q10B-B2) */}
    <KiCadNet name={"Net__Q10B_B2_"} connectsTo={[".R78 > .pin1", ".R80 > .pin1", ".Q10 > .pin5"]}/>
    {/* KiCad net: Net-(D16-K) */}
    <KiCadNet name={"Net__D16_K_"} connectsTo={[".R86 > .pin1", ".D16 > .pin1", ".R88 > .pin2", ".R81 > .pin2"]}/>
    {/* KiCad net: Net-(Q10A-C1) */}
    <KiCadNet name={"Net__Q10A_C1_"} connectsTo={[".R86 > .pin2", ".Q10 > .pin6"]}/>
    {/* KiCad net: /Clock Generator/XCVR_CLK */}
    <KiCadNet name={"_Clock_Generator_XCVR_CLK"} connectsTo={[".R32 > .pin1", ".R149 > .pin2", ".R148 > .pin1", ".TP33 > .pin1"]}/>
    {/* KiCad net: Net-(C202-Pad1) */}
    <KiCadNet name={"Net__C202_Pad1_"} connectsTo={[".C202 > .pin1", ".R147 > .pin1"]}/>
    {/* KiCad net: Net-(C211-Pad2) */}
    <KiCadNet name={"Net__C211_Pad2_"} connectsTo={[".R123 > .pin2", ".C211 > .pin2"]}/>
    {/* KiCad net: /ADC, DAC/AA_BYPASS_I+ */}
    <KiCadNet name={"_ADC__DAC_AA_BYPASS_I_"} connectsTo={[".U34 > .pin4", ".U35 > .pin7"]}/>
    {/* KiCad net: /ADC, DAC/AA_BYPASS_I- */}
    <KiCadNet name={"_ADC__DAC_AA_BYPASS_I__"} connectsTo={[".U34 > .pin5", ".U35 > .pin6"]}/>
    {/* KiCad net: Net-(C207-Pad2) */}
    <KiCadNet name={"Net__C207_Pad2_"} connectsTo={[".C207 > .pin2", ".R146 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1-SBU1-PadA8) */}
    <KiCadNet name={"unconnected__J1_SBU1_PadA8_"} connectsTo={[".J1 > .pin6"]}/>
    {/* KiCad net: unconnected-(J1-SBU2-PadB8) */}
    <KiCadNet name={"unconnected__J1_SBU2_PadB8_"} connectsTo={[".J1 > .pin14"]}/>
    {/* KiCad net: Net-(X1-OUT) */}
    <KiCadNet name={"Net__X1_OUT_"} connectsTo={[".C155 > .pin2", ".X1 > .pin3"]}/>
    {/* KiCad net: Net-(C198-Pad2) */}
    <KiCadNet name={"Net__C198_Pad2_"} connectsTo={[".R142 > .pin2", ".C198 > .pin2"]}/>
    {/* KiCad net: unconnected-(X1-NC-Pad1) */}
    <KiCadNet name={"unconnected__X1_NC_Pad1_"} connectsTo={[".X1 > .pin1"]}/>
    {/* KiCad net: Net-(L6-Pad1) */}
    <KiCadNet name={"Net__L6_Pad1_"} connectsTo={[".L6 > .pin1", ".R144 > .pin2"]}/>
    {/* KiCad net: Net-(C112-Pad1) */}
    <KiCadNet name={"Net__C112_Pad1_"} connectsTo={[".R35 > .pin2", ".C112 > .pin1"]}/>
    {/* KiCad net: Net-(Q7A-B1) */}
    <KiCadNet name={"Net__Q7A_B1_"} connectsTo={[".R53 > .pin2", ".Q7 > .pin2"]}/>
    {/* KiCad net: Net-(L24-Pad1) */}
    <KiCadNet name={"Net__L24_Pad1_"} connectsTo={[".R112 > .pin2", ".L24 > .pin1"]}/>
    {/* KiCad net: Net-(C191-Pad2) */}
    <KiCadNet name={"Net__C191_Pad2_"} connectsTo={[".R130 > .pin2", ".C191 > .pin2"]}/>
    {/* KiCad net: unconnected-(U33-A6-Pad2) */}
    <KiCadNet name={"unconnected__U33_A6_Pad2_"} connectsTo={[".U33 > .pin2"]}/>
    {/* KiCad net: /Clock Generator/AUX_CLK1 */}
    <KiCadNet name={"_Clock_Generator_AUX_CLK1"} connectsTo={[".U33 > .pin14", ".R84 > .pin1"]}/>
    {/* KiCad net: Net-(C192-Pad2) */}
    <KiCadNet name={"Net__C192_Pad2_"} connectsTo={[".R134 > .pin2", ".C192 > .pin2"]}/>
    {/* KiCad net: Net-(Q10A-B1) */}
    <KiCadNet name={"Net__Q10A_B1_"} connectsTo={[".R77 > .pin1", ".Q10 > .pin2", ".R79 > .pin1"]}/>
    {/* KiCad net: Net-(C78-Pad2) */}
    <KiCadNet name={"Net__C78_Pad2_"} connectsTo={[".C78 > .pin2", ".R115 > .pin2"]}/>
    {/* KiCad net: unconnected-(Q7B-C2-Pad3) */}
    <KiCadNet name={"unconnected__Q7B_C2_Pad3_"} connectsTo={[".Q7 > .pin3"]}/>
    {/* KiCad net: unconnected-(Q7B-E2-Pad4) */}
    <KiCadNet name={"unconnected__Q7B_E2_Pad4_"} connectsTo={[".Q7 > .pin4"]}/>
    {/* KiCad net: unconnected-(Q7B-B2-Pad5) */}
    <KiCadNet name={"unconnected__Q7B_B2_Pad5_"} connectsTo={[".Q7 > .pin5"]}/>
    <KiCadSchematic /></board>);
}
