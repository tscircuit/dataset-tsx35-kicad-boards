import { KiCadSchematic, KiCadNet } from './schematic'
// Kintex PCIe board
// Source: https://github.com/piotr-binkowski/kintex-pcie-board
// Commit: 056792c009a8920d4ef11e76ba3284ee58376078; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
import { Footprint_R16, Footprint_R10, Footprint_J4, Footprint_JP2, Footprint_R24, Footprint_R14, Footprint_D13, Footprint_U6, Footprint_D10, Footprint_J3, Footprint_R15, Footprint_U7, Footprint_U1, Footprint_J5, Footprint_J1, Footprint_D3, Footprint_R23, Footprint_D7, Footprint_C3, Footprint_C5, Footprint_C22, Footprint_H2, Footprint_C17, Footprint_R3, Footprint_U8, Footprint_C50, Footprint_R9, Footprint_C141, Footprint_U3, Footprint_U9, Footprint_R25, Footprint_C23, Footprint_C1, Footprint_R2, Footprint_D8, Footprint_R21, Footprint_D6, Footprint_R4, Footprint_C140, Footprint_D9, Footprint_R5, Footprint_R13, Footprint_H1, Footprint_J7, Footprint_D11, Footprint_D2, Footprint_J6, Footprint_R22, Footprint_Q3, Footprint_U2, Footprint_D12, Footprint_D1, Footprint_D14, Footprint_C49, Footprint_C142, Footprint_C6, Footprint_R17, Footprint_C15, Footprint_C60, Footprint_C143, Footprint_C13, Footprint_C103, Footprint_NT4, Footprint_C102, Footprint_R19, Footprint_C53, Footprint_C113, Footprint_R12, Footprint_C24, Footprint_C101, Footprint_R30, Footprint_C29, Footprint_C56, Footprint_C41, Footprint_C120, Footprint_C44, Footprint_FB1, Footprint_C30, Footprint_NT3, Footprint_NT2, Footprint_C32, Footprint_R27, Footprint_C26, Footprint_C18, Footprint_U5, Footprint_C104, Footprint_C7, Footprint_C114, Footprint_C10, Footprint_C66, Footprint_C112, Footprint_NT7, Footprint_C14, Footprint_C51, Footprint_C9, Footprint_C34, Footprint_C40, Footprint_C63, Footprint_C39, Footprint_R26, Footprint_C38, Footprint_C12, Footprint_C8, Footprint_C107, Footprint_C54, Footprint_NT6, Footprint_C65, Footprint_Q2, Footprint_NT5, Footprint_NT1, Footprint_R1, Footprint_C11, Footprint_C2, Footprint_C111, Footprint_C16, Footprint_R7, Footprint_C21, Footprint_C131, Footprint_C61, Footprint_C36, Footprint_C55, Footprint_Q1, Footprint_C130, Footprint_C106, Footprint_C59, Footprint_C105, Footprint_R33, Footprint_R20, Footprint_C25, Footprint_C35, Footprint_C19, Footprint_C110, Footprint_C43, Footprint_R11, Footprint_C121, Footprint_R8, Footprint_C4, Footprint_R28, Footprint_C46, Footprint_C27, Footprint_C64, Footprint_C37, Footprint_C52, Footprint_C108, Footprint_C57, Footprint_U4, Footprint_R29, Footprint_C58, Footprint_NT8, Footprint_C31, Footprint_C100, Footprint_C47, Footprint_C48, Footprint_R32, Footprint_C62, Footprint_C42, Footprint_C115, Footprint_C28, Footprint_C109, Footprint_C33, Footprint_R6, Footprint_FB2, Footprint_C45, Footprint_R31, Footprint_C20, Footprint_R18 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={72.50000000000097} height={75.20000000000003} thickness={1.599998} layers={8} outline={[{ "x": -21.90000000000048, "y": -33.40000000000002 }, { "x": -23.750000000000483, "y": -31.600000000000023 }, { "x": -36.25000000000048, "y": -31.600000000000023 }, { "x": -36.25000000000048, "y": 29.399999999999977 }, { "x": -36.24270219237903, "y": 29.641513981925335 }, { "x": -36.220835449847655, "y": 29.882146704206804 }, { "x": -36.18447956175687, "y": 30.12102012437459 }, { "x": -36.13376718676368, "y": 30.357262619459775 }, { "x": -36.06888336877469, "y": 30.59001216645116 }, { "x": -35.99006486174114, "y": 30.818419487722892 }, { "x": -35.89759926576963, "y": 31.04165114995555 }, { "x": -35.79182397770082, "y": 31.258892605243176 }, { "x": -35.673124959985294, "y": 31.46935116328939 }, { "x": -35.54193533234877, "y": 31.67225888384756 }, { "x": -35.39873379138567, "y": 31.866875378850736 }, { "x": -35.24404286384761, "y": 32.05249051400662 }, { "x": -35.07842700000047, "y": 32.22842699999997 }, { "x": -34.90249051400712, "y": 32.39404286384711 }, { "x": -34.716875378851235, "y": 32.548733791385175 }, { "x": -34.52225888384807, "y": 32.69193533234828 }, { "x": -34.319351163289895, "y": 32.823124959984796 }, { "x": -34.108892605243675, "y": 32.94182397770033 }, { "x": -33.891651149956054, "y": 33.047599265769136 }, { "x": -33.66841948772339, "y": 33.14006486174065 }, { "x": -33.440012166451666, "y": 33.21888336877421 }, { "x": -33.20726261946028, "y": 33.2837671867632 }, { "x": -32.971020124375094, "y": 33.33447956175639 }, { "x": -32.73214670420732, "y": 33.37083544984718 }, { "x": -32.49151398192585, "y": 33.39270219237854 }, { "x": -32.25000000000048, "y": 33.400000000000006 }, { "x": 32.24999999999952, "y": 33.39999999999998 }, { "x": 32.49151398192491, "y": 33.39270219237857 }, { "x": 32.73214670420643, "y": 33.37083544984725 }, { "x": 32.97102012437425, "y": 33.33447956175651 }, { "x": 33.207262619459485, "y": 33.283767186763356 }, { "x": 33.44001216645091, "y": 33.21888336877441 }, { "x": 33.66841948772269, "y": 33.14006486174088 }, { "x": 33.89165114995539, "y": 33.04759926576939 }, { "x": 34.10889260524307, "y": 32.94182397770061 }, { "x": 34.31935116328934, "y": 32.823124959985094 }, { "x": 34.522258883847556, "y": 32.691935332348585 }, { "x": 34.71687537885077, "y": 32.548733791385494 }, { "x": 34.902490514006715, "y": 32.39404286384743 }, { "x": 35.078427000000104, "y": 32.22842700000028 }, { "x": 35.2440428638473, "y": 32.052490514006934 }, { "x": 35.39873379138541, "y": 31.866875378851034 }, { "x": 35.541935332348544, "y": 31.672258883847853 }, { "x": 35.6731249599851, "y": 31.46935116328966 }, { "x": 35.79182397770067, "y": 31.258892605243425 }, { "x": 35.897599265769514, "y": 31.041651149955776 }, { "x": 35.99006486174105, "y": 30.818419487723084 }, { "x": 36.068883368774635, "y": 30.59001216645133 }, { "x": 36.133767186763635, "y": 30.357262619459917 }, { "x": 36.184479561756845, "y": 30.121020124374695 }, { "x": 36.22083544984764, "y": 29.882146704206882 }, { "x": 36.24270219237903, "y": 29.64151398192537 }, { "x": 36.25000000000048, "y": 29.399999999999977 }, { "x": 36.24999999999952, "y": -31.600000000000023 }, { "x": 31.249999999999517, "y": -31.600000000000023 }, { "x": 29.399999999999523, "y": -33.40000000000002 }, { "x": 29.399999999999523, "y": -41.300000000000026 }, { "x": 28.899999999999523, "y": -41.800000000000026 }, { "x": -8.30000000000048, "y": -41.800000000000026 }, { "x": -8.80000000000048, "y": -41.300000000000026 }, { "x": -8.80000000000048, "y": -34.35000000000002 }, { "x": -8.818253983617623, "y": -34.164664194085205 }, { "x": -8.872314444115048, "y": -33.986450739254224 }, { "x": -8.960103868313283, "y": -33.82220827863296 }, { "x": -9.078248557873295, "y": -33.678248557874824 }, { "x": -9.222208278631598, "y": -33.560103868315025 }, { "x": -9.386450739252993, "y": -33.47231444411703 }, { "x": -9.56466419408406, "y": -33.41825398361988 }, { "x": -9.749999999998906, "y": -33.400000000003004 }, { "x": -9.935335805913752, "y": -33.41825398361988 }, { "x": -10.113549260744819, "y": -33.47231444411703 }, { "x": -10.277791721366214, "y": -33.560103868315025 }, { "x": -10.421751442124517, "y": -33.678248557874824 }, { "x": -10.539896131684529, "y": -33.82220827863296 }, { "x": -10.627685555882763, "y": -33.986450739254224 }, { "x": -10.681746016380188, "y": -34.164664194085205 }, { "x": -10.699999999997331, "y": -34.35000000000002 }, { "x": -10.700000000000486, "y": -41.300000000000026 }, { "x": -11.200000000000486, "y": -41.800000000000026 }, { "x": -21.40000000000048, "y": -41.800000000000026 }, { "x": -21.90000000000048, "y": -41.300000000000026 }, { "x": -21.90000000000048, "y": -33.40000000000002 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* R16: 3K */}
    <resistor name={"R16"} pcbX={-31.25} pcbY={-19.35} pcbRotation={0} resistance={"3kohm"} footprint={<Footprint_R16 />} schX={18.800000000000004} schY={13.700000000000003} schRotation={90} schSheetName={"Overview"}/>

    {/* R10: 4K7 */}
    <resistor name={"R10"} pcbX={-23.75} pcbY={3.4} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R10 />} schX={0.7999999999999972} schY={-9.599999999999998} schRotation={180} schSheetName={"Overview"}/>

    {/* J4: B2B_RX */}
    <chip name={"J4"} pcbX={3.24} pcbY={31.375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"B2B_RX"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* JP2: JTAG */}
    <chip name={"JP2"} pcbX={19.4} pcbY={20.15} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"JTAG"} footprint={<Footprint_JP2 />} noSchematicRepresentation={true}/>

    {/* R24: 3K */}
    <resistor name={"R24"} pcbX={-25.95} pcbY={-22.6} pcbRotation={180} resistance={"3kohm"} footprint={<Footprint_R24 />} schX={-30.400000000000002} schY={4.700000000000003} schRotation={90} schSheetName={"Overview"}/>

    {/* R14: 3K */}
    <resistor name={"R14"} pcbX={-26.85} pcbY={-20.4} pcbRotation={0} resistance={"3kohm"} footprint={<Footprint_R14 />} schX={16.699999999999996} schY={18.900000000000002} schRotation={90} schSheetName={"Overview"}/>

    {/* D13: RLED */}
    <chip name={"D13"} pcbX={-11.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D13 />} noSchematicRepresentation={true}/>

    {/* U6: TPD4E02B04DQAR */}
    <chip name={"U6"} pcbX={11.25} pcbY={24.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"TPD4E02B04DQAR"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* D10: RLED */}
    <chip name={"D10"} pcbX={-17.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D10 />} noSchematicRepresentation={true}/>

    {/* J3: B2B_TX */}
    <chip name={"J3"} pcbX={15.05} pcbY={31.375} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"B2B_TX"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* R15: 15K */}
    <resistor name={"R15"} pcbX={-29.26} pcbY={-19.35} pcbRotation={0} resistance={"15kohm"} footprint={<Footprint_R15 />} schX={18.800000000000004} schY={14.300000000000002} schRotation={90} schSheetName={"Overview"}/>

    {/* U7: TPD4E02B04DQAR */}
    <chip name={"U7"} pcbX={-0.75} pcbY={24.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"] }} displayName={"TPD4E02B04DQAR"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* U1: XC7K160T-FFG676 */}
    <chip name={"U1"} pcbX={3.75} pcbY={-2.1} pcbRotation={180} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A3"], "pin4": ["A4"], "pin5": ["A5"], "pin6": ["A6"], "pin7": ["A7"], "pin8": ["A8"], "pin9": ["A9"], "pin10": ["A10"], "pin11": ["A11"], "pin12": ["A12"], "pin13": ["A13"], "pin14": ["A14"], "pin15": ["A15"], "pin16": ["A16"], "pin17": ["A17"], "pin18": ["A18"], "pin19": ["A19"], "pin20": ["A20"], "pin21": ["A21"], "pin22": ["A22"], "pin23": ["A23"], "pin24": ["A24"], "pin25": ["A25"], "pin26": ["A26"], "pin27": ["AA1"], "pin28": ["AA2"], "pin29": ["AA3"], "pin30": ["AA4"], "pin31": ["AA5"], "pin32": ["AA6"], "pin33": ["AA7"], "pin34": ["AA8"], "pin35": ["AA9"], "pin36": ["AA10"], "pin37": ["AA11"], "pin38": ["AA12"], "pin39": ["AA13"], "pin40": ["AA14"], "pin41": ["AA15"], "pin42": ["AA16"], "pin43": ["AA17"], "pin44": ["AA18"], "pin45": ["AA19"], "pin46": ["AA20"], "pin47": ["AA21"], "pin48": ["AA22"], "pin49": ["AA23"], "pin50": ["AA24"], "pin51": ["AA25"], "pin52": ["AA26"], "pin53": ["AB1"], "pin54": ["AB2"], "pin55": ["AB3"], "pin56": ["AB4"], "pin57": ["AB5"], "pin58": ["AB6"], "pin59": ["AB7"], "pin60": ["AB8"], "pin61": ["AB9"], "pin62": ["AB10"], "pin63": ["AB11"], "pin64": ["AB12"], "pin65": ["AB13"], "pin66": ["AB14"], "pin67": ["AB15"], "pin68": ["AB16"], "pin69": ["AB17"], "pin70": ["AB18"], "pin71": ["AB19"], "pin72": ["AB20"], "pin73": ["AB21"], "pin74": ["AB22"], "pin75": ["AB23"], "pin76": ["AB24"], "pin77": ["AB25"], "pin78": ["AB26"], "pin79": ["AC1"], "pin80": ["AC2"], "pin81": ["AC3"], "pin82": ["AC4"], "pin83": ["AC5"], "pin84": ["AC6"], "pin85": ["AC7"], "pin86": ["AC8"], "pin87": ["AC9"], "pin88": ["AC10"], "pin89": ["AC11"], "pin90": ["AC12"], "pin91": ["AC13"], "pin92": ["AC14"], "pin93": ["AC15"], "pin94": ["AC16"], "pin95": ["AC17"], "pin96": ["AC18"], "pin97": ["AC19"], "pin98": ["AC20"], "pin99": ["AC21"], "pin100": ["AC22"], "pin101": ["AC23"], "pin102": ["AC24"], "pin103": ["AC25"], "pin104": ["AC26"], "pin105": ["AD1"], "pin106": ["AD2"], "pin107": ["AD3"], "pin108": ["AD4"], "pin109": ["AD5"], "pin110": ["AD6"], "pin111": ["AD7"], "pin112": ["AD8"], "pin113": ["AD9"], "pin114": ["AD10"], "pin115": ["AD11"], "pin116": ["AD12"], "pin117": ["AD13"], "pin118": ["AD14"], "pin119": ["AD15"], "pin120": ["AD16"], "pin121": ["AD17"], "pin122": ["AD18"], "pin123": ["AD19"], "pin124": ["AD20"], "pin125": ["AD21"], "pin126": ["AD22"], "pin127": ["AD23"], "pin128": ["AD24"], "pin129": ["AD25"], "pin130": ["AD26"], "pin131": ["AE1"], "pin132": ["AE2"], "pin133": ["AE3"], "pin134": ["AE4"], "pin135": ["AE5"], "pin136": ["AE6"], "pin137": ["AE7"], "pin138": ["AE8"], "pin139": ["AE9"], "pin140": ["AE10"], "pin141": ["AE11"], "pin142": ["AE12"], "pin143": ["AE13"], "pin144": ["AE14"], "pin145": ["AE15"], "pin146": ["AE16"], "pin147": ["AE17"], "pin148": ["AE18"], "pin149": ["AE19"], "pin150": ["AE20"], "pin151": ["AE21"], "pin152": ["AE22"], "pin153": ["AE23"], "pin154": ["AE24"], "pin155": ["AE25"], "pin156": ["AE26"], "pin157": ["AF1"], "pin158": ["AF2"], "pin159": ["AF3"], "pin160": ["AF4"], "pin161": ["AF5"], "pin162": ["AF6"], "pin163": ["AF7"], "pin164": ["AF8"], "pin165": ["AF9"], "pin166": ["AF10"], "pin167": ["AF11"], "pin168": ["AF12"], "pin169": ["AF13"], "pin170": ["AF14"], "pin171": ["AF15"], "pin172": ["AF16"], "pin173": ["AF17"], "pin174": ["AF18"], "pin175": ["AF19"], "pin176": ["AF20"], "pin177": ["AF21"], "pin178": ["AF22"], "pin179": ["AF23"], "pin180": ["AF24"], "pin181": ["AF25"], "pin182": ["AF26"], "pin183": ["B1"], "pin184": ["B2"], "pin185": ["B3"], "pin186": ["B4"], "pin187": ["B5"], "pin188": ["B6"], "pin189": ["B7"], "pin190": ["B8"], "pin191": ["B9"], "pin192": ["B10"], "pin193": ["B11"], "pin194": ["B12"], "pin195": ["B13"], "pin196": ["B14"], "pin197": ["B15"], "pin198": ["B16"], "pin199": ["B17"], "pin200": ["B18"], "pin201": ["B19"], "pin202": ["B20"], "pin203": ["B21"], "pin204": ["B22"], "pin205": ["B23"], "pin206": ["B24"], "pin207": ["B25"], "pin208": ["B26"], "pin209": ["C1"], "pin210": ["C2"], "pin211": ["C3"], "pin212": ["C4"], "pin213": ["C5"], "pin214": ["C6"], "pin215": ["C7"], "pin216": ["C8"], "pin217": ["C9"], "pin218": ["C10"], "pin219": ["C11"], "pin220": ["C12"], "pin221": ["C13"], "pin222": ["C14"], "pin223": ["C15"], "pin224": ["C16"], "pin225": ["C17"], "pin226": ["C18"], "pin227": ["C19"], "pin228": ["C20"], "pin229": ["C21"], "pin230": ["C22"], "pin231": ["C23"], "pin232": ["C24"], "pin233": ["C25"], "pin234": ["C26"], "pin235": ["D1"], "pin236": ["D2"], "pin237": ["D3"], "pin238": ["D4"], "pin239": ["D5"], "pin240": ["D6"], "pin241": ["D7"], "pin242": ["D8"], "pin243": ["D9"], "pin244": ["D10"], "pin245": ["D11"], "pin246": ["D12"], "pin247": ["D13"], "pin248": ["D14"], "pin249": ["D15"], "pin250": ["D16"], "pin251": ["D17"], "pin252": ["D18"], "pin253": ["D19"], "pin254": ["D20"], "pin255": ["D21"], "pin256": ["D22"], "pin257": ["D23"], "pin258": ["D24"], "pin259": ["D25"], "pin260": ["D26"], "pin261": ["E1"], "pin262": ["E2"], "pin263": ["E3"], "pin264": ["E4"], "pin265": ["E5"], "pin266": ["E6"], "pin267": ["E7"], "pin268": ["E8"], "pin269": ["E9"], "pin270": ["E10"], "pin271": ["E11"], "pin272": ["E12"], "pin273": ["E13"], "pin274": ["E14"], "pin275": ["E15"], "pin276": ["E16"], "pin277": ["E17"], "pin278": ["E18"], "pin279": ["E19"], "pin280": ["E20"], "pin281": ["E21"], "pin282": ["E22"], "pin283": ["E23"], "pin284": ["E24"], "pin285": ["E25"], "pin286": ["E26"], "pin287": ["F1"], "pin288": ["F2"], "pin289": ["F3"], "pin290": ["F4"], "pin291": ["F5"], "pin292": ["F6"], "pin293": ["F7"], "pin294": ["F8"], "pin295": ["F9"], "pin296": ["F10"], "pin297": ["F11"], "pin298": ["F12"], "pin299": ["F13"], "pin300": ["F14"], "pin301": ["F15"], "pin302": ["F16"], "pin303": ["F17"], "pin304": ["F18"], "pin305": ["F19"], "pin306": ["F20"], "pin307": ["F21"], "pin308": ["F22"], "pin309": ["F23"], "pin310": ["F24"], "pin311": ["F25"], "pin312": ["F26"], "pin313": ["G1"], "pin314": ["G2"], "pin315": ["G3"], "pin316": ["G4"], "pin317": ["G5"], "pin318": ["G6"], "pin319": ["G7"], "pin320": ["G8"], "pin321": ["G9"], "pin322": ["G10"], "pin323": ["G11"], "pin324": ["G12"], "pin325": ["G13"], "pin326": ["G14"], "pin327": ["G15"], "pin328": ["G16"], "pin329": ["G17"], "pin330": ["G18"], "pin331": ["G19"], "pin332": ["G20"], "pin333": ["G21"], "pin334": ["G22"], "pin335": ["G23"], "pin336": ["G24"], "pin337": ["G25"], "pin338": ["G26"], "pin339": ["H1"], "pin340": ["H2"], "pin341": ["H3"], "pin342": ["H4"], "pin343": ["H5"], "pin344": ["H6"], "pin345": ["H7"], "pin346": ["H8"], "pin347": ["H9"], "pin348": ["H10"], "pin349": ["H11"], "pin350": ["H12"], "pin351": ["H13"], "pin352": ["H14"], "pin353": ["H15"], "pin354": ["H16"], "pin355": ["H17"], "pin356": ["H18"], "pin357": ["H19"], "pin358": ["H20"], "pin359": ["H21"], "pin360": ["H22"], "pin361": ["H23"], "pin362": ["H24"], "pin363": ["H25"], "pin364": ["H26"], "pin365": ["J1"], "pin366": ["J2"], "pin367": ["J3"], "pin368": ["J4"], "pin369": ["J5"], "pin370": ["J6"], "pin371": ["J7"], "pin372": ["J8"], "pin373": ["J9"], "pin374": ["J10"], "pin375": ["J11"], "pin376": ["J12"], "pin377": ["J13"], "pin378": ["J14"], "pin379": ["J15"], "pin380": ["J16"], "pin381": ["J17"], "pin382": ["J18"], "pin383": ["J19"], "pin384": ["J20"], "pin385": ["J21"], "pin386": ["J22"], "pin387": ["J23"], "pin388": ["J24"], "pin389": ["J25"], "pin390": ["J26"], "pin391": ["K1"], "pin392": ["K2"], "pin393": ["K3"], "pin394": ["K4"], "pin395": ["K5"], "pin396": ["K6"], "pin397": ["K7"], "pin398": ["K8"], "pin399": ["K9"], "pin400": ["K10"], "pin401": ["K11"], "pin402": ["K12"], "pin403": ["K13"], "pin404": ["K14"], "pin405": ["K15"], "pin406": ["K16"], "pin407": ["K17"], "pin408": ["K18"], "pin409": ["K19"], "pin410": ["K20"], "pin411": ["K21"], "pin412": ["K22"], "pin413": ["K23"], "pin414": ["K24"], "pin415": ["K25"], "pin416": ["K26"], "pin417": ["L1"], "pin418": ["L2"], "pin419": ["L3"], "pin420": ["L4"], "pin421": ["L5"], "pin422": ["L6"], "pin423": ["L7"], "pin424": ["L8"], "pin425": ["L9"], "pin426": ["L10"], "pin427": ["L11"], "pin428": ["L12"], "pin429": ["L13"], "pin430": ["L14"], "pin431": ["L15"], "pin432": ["L16"], "pin433": ["L17"], "pin434": ["L18"], "pin435": ["L19"], "pin436": ["L20"], "pin437": ["L21"], "pin438": ["L22"], "pin439": ["L23"], "pin440": ["L24"], "pin441": ["L25"], "pin442": ["L26"], "pin443": ["M1"], "pin444": ["M2"], "pin445": ["M3"], "pin446": ["M4"], "pin447": ["M5"], "pin448": ["M6"], "pin449": ["M7"], "pin450": ["M8"], "pin451": ["M9"], "pin452": ["M10"], "pin453": ["M11"], "pin454": ["M12"], "pin455": ["M13"], "pin456": ["M14"], "pin457": ["M15"], "pin458": ["M16"], "pin459": ["M17"], "pin460": ["M18"], "pin461": ["M19"], "pin462": ["M20"], "pin463": ["M21"], "pin464": ["M22"], "pin465": ["M23"], "pin466": ["M24"], "pin467": ["M25"], "pin468": ["M26"], "pin469": ["N1"], "pin470": ["N2"], "pin471": ["N3"], "pin472": ["N4"], "pin473": ["N5"], "pin474": ["N6"], "pin475": ["N7"], "pin476": ["N8"], "pin477": ["N9"], "pin478": ["N10"], "pin479": ["N11"], "pin480": ["N12"], "pin481": ["N13"], "pin482": ["N14"], "pin483": ["N15"], "pin484": ["N16"], "pin485": ["N17"], "pin486": ["N18"], "pin487": ["N19"], "pin488": ["N20"], "pin489": ["N21"], "pin490": ["N22"], "pin491": ["N23"], "pin492": ["N24"], "pin493": ["N25"], "pin494": ["N26"], "pin495": ["P1"], "pin496": ["P2"], "pin497": ["P3"], "pin498": ["P4"], "pin499": ["P5"], "pin500": ["P6"], "pin501": ["P7"], "pin502": ["P8"], "pin503": ["P9"], "pin504": ["P10"], "pin505": ["P11"], "pin506": ["P12"], "pin507": ["P13"], "pin508": ["P14"], "pin509": ["P15"], "pin510": ["P16"], "pin511": ["P17"], "pin512": ["P18"], "pin513": ["P19"], "pin514": ["P20"], "pin515": ["P21"], "pin516": ["P22"], "pin517": ["P23"], "pin518": ["P24"], "pin519": ["P25"], "pin520": ["P26"], "pin521": ["R1"], "pin522": ["R2"], "pin523": ["R3"], "pin524": ["R4"], "pin525": ["R5"], "pin526": ["R6"], "pin527": ["R7"], "pin528": ["R8"], "pin529": ["R9"], "pin530": ["R10"], "pin531": ["R11"], "pin532": ["R12"], "pin533": ["R13"], "pin534": ["R14"], "pin535": ["R15"], "pin536": ["R16"], "pin537": ["R17"], "pin538": ["R18"], "pin539": ["R19"], "pin540": ["R20"], "pin541": ["R21"], "pin542": ["R22"], "pin543": ["R23"], "pin544": ["R24"], "pin545": ["R25"], "pin546": ["R26"], "pin547": ["T1"], "pin548": ["T2"], "pin549": ["T3"], "pin550": ["T4"], "pin551": ["T5"], "pin552": ["T6"], "pin553": ["T7"], "pin554": ["T8"], "pin555": ["T9"], "pin556": ["T10"], "pin557": ["T11"], "pin558": ["T12"], "pin559": ["T13"], "pin560": ["T14"], "pin561": ["T15"], "pin562": ["T16"], "pin563": ["T17"], "pin564": ["T18"], "pin565": ["T19"], "pin566": ["T20"], "pin567": ["T21"], "pin568": ["T22"], "pin569": ["T23"], "pin570": ["T24"], "pin571": ["T25"], "pin572": ["T26"], "pin573": ["U1"], "pin574": ["U2"], "pin575": ["U3"], "pin576": ["U4"], "pin577": ["U5"], "pin578": ["U6"], "pin579": ["U7"], "pin580": ["U8"], "pin581": ["U9"], "pin582": ["U10"], "pin583": ["U11"], "pin584": ["U12"], "pin585": ["U13"], "pin586": ["U14"], "pin587": ["U15"], "pin588": ["U16"], "pin589": ["U17"], "pin590": ["U18"], "pin591": ["U19"], "pin592": ["U20"], "pin593": ["U21"], "pin594": ["U22"], "pin595": ["U23"], "pin596": ["U24"], "pin597": ["U25"], "pin598": ["U26"], "pin599": ["V1"], "pin600": ["V2"], "pin601": ["V3"], "pin602": ["V4"], "pin603": ["V5"], "pin604": ["V6"], "pin605": ["V7"], "pin606": ["V8"], "pin607": ["V9"], "pin608": ["V10"], "pin609": ["V11"], "pin610": ["V12"], "pin611": ["V13"], "pin612": ["V14"], "pin613": ["V15"], "pin614": ["V16"], "pin615": ["V17"], "pin616": ["V18"], "pin617": ["V19"], "pin618": ["V20"], "pin619": ["V21"], "pin620": ["V22"], "pin621": ["V23"], "pin622": ["V24"], "pin623": ["V25"], "pin624": ["V26"], "pin625": ["W1"], "pin626": ["W2"], "pin627": ["W3"], "pin628": ["W4"], "pin629": ["W5"], "pin630": ["W6"], "pin631": ["W7"], "pin632": ["W8"], "pin633": ["W9"], "pin634": ["W10"], "pin635": ["W11"], "pin636": ["W12"], "pin637": ["W13"], "pin638": ["W14"], "pin639": ["W15"], "pin640": ["W16"], "pin641": ["W17"], "pin642": ["W18"], "pin643": ["W19"], "pin644": ["W20"], "pin645": ["W21"], "pin646": ["W22"], "pin647": ["W23"], "pin648": ["W24"], "pin649": ["W25"], "pin650": ["W26"], "pin651": ["Y1"], "pin652": ["Y2"], "pin653": ["Y3"], "pin654": ["Y4"], "pin655": ["Y5"], "pin656": ["Y6"], "pin657": ["Y7"], "pin658": ["Y8"], "pin659": ["Y9"], "pin660": ["Y10"], "pin661": ["Y11"], "pin662": ["Y12"], "pin663": ["Y13"], "pin664": ["Y14"], "pin665": ["Y15"], "pin666": ["Y16"], "pin667": ["Y17"], "pin668": ["Y18"], "pin669": ["Y19"], "pin670": ["Y20"], "pin671": ["Y21"], "pin672": ["Y22"], "pin673": ["Y23"], "pin674": ["Y24"], "pin675": ["Y25"], "pin676": ["Y26"] }} displayName={"XC7K160T-FFG676"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* J5: UART */}
    <chip name={"J5"} pcbX={-26.75} pcbY={7.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"UART"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* J1: Bus_PCI_Express_x8 */}
    <chip name={"J1"} pcbX={-21.25} pcbY={-38.35} pcbRotation={0} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A3"], "pin4": ["A4"], "pin5": ["A5"], "pin6": ["A6"], "pin7": ["A7"], "pin8": ["A8"], "pin9": ["A9"], "pin10": ["A10"], "pin11": ["A11"], "pin12": ["A12"], "pin13": ["A13"], "pin14": ["A14"], "pin15": ["A15"], "pin16": ["A16"], "pin17": ["A17"], "pin18": ["A18"], "pin19": ["A19"], "pin20": ["A20"], "pin21": ["A21"], "pin22": ["A22"], "pin23": ["A23"], "pin24": ["A24"], "pin25": ["A25"], "pin26": ["A26"], "pin27": ["A27"], "pin28": ["A28"], "pin29": ["A29"], "pin30": ["A30"], "pin31": ["A31"], "pin32": ["A32"], "pin33": ["A33"], "pin34": ["A34"], "pin35": ["A35"], "pin36": ["A36"], "pin37": ["A37"], "pin38": ["A38"], "pin39": ["A39"], "pin40": ["A40"], "pin41": ["A41"], "pin42": ["A42"], "pin43": ["A43"], "pin44": ["A44"], "pin45": ["A45"], "pin46": ["A46"], "pin47": ["A47"], "pin48": ["A48"], "pin49": ["A49"], "pin50": ["B1"], "pin51": ["B2"], "pin52": ["B3"], "pin53": ["B4"], "pin54": ["B5"], "pin55": ["B6"], "pin56": ["B7"], "pin57": ["B8"], "pin58": ["B9"], "pin59": ["B10"], "pin60": ["B11"], "pin61": ["B12"], "pin62": ["B13"], "pin63": ["B14"], "pin64": ["B15"], "pin65": ["B16"], "pin66": ["B17"], "pin67": ["B18"], "pin68": ["B19"], "pin69": ["B20"], "pin70": ["B21"], "pin71": ["B22"], "pin72": ["B23"], "pin73": ["B24"], "pin74": ["B25"], "pin75": ["B26"], "pin76": ["B27"], "pin77": ["B28"], "pin78": ["B29"], "pin79": ["B30"], "pin80": ["B31"], "pin81": ["B32"], "pin82": ["B33"], "pin83": ["B34"], "pin84": ["B35"], "pin85": ["B36"], "pin86": ["B37"], "pin87": ["B38"], "pin88": ["B39"], "pin89": ["B40"], "pin90": ["B41"], "pin91": ["B42"], "pin92": ["B43"], "pin93": ["B44"], "pin94": ["B45"], "pin95": ["B46"], "pin96": ["B47"], "pin97": ["B48"], "pin98": ["B49"] }} displayName={"Bus_PCI_Express_x8"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* D3: GLED */}
    <chip name={"D3"} pcbX={-33.75} pcbY={-21.85} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"GLED"} footprint={<Footprint_D3 />} noSchematicRepresentation={true}/>

    {/* R23: 15K */}
    <resistor name={"R23"} pcbX={-27.95} pcbY={-22.6} pcbRotation={180} resistance={"15kohm"} footprint={<Footprint_R23 />} schX={-30.400000000000002} schY={5.300000000000001} schRotation={90} schSheetName={"Overview"}/>

    {/* D7: RLED */}
    <chip name={"D7"} pcbX={-23.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D7 />} noSchematicRepresentation={true}/>

    {/* C3: 4.7nF */}
    <capacitor name={"C3"} pcbX={-26.85} pcbY={-17.8} pcbRotation={90} capacitance={"4.7nF"} footprint={<Footprint_C3 />} schX={24.199999999999996} schY={11.400000000000002} schRotation={90} schSheetName={"Overview"}/>

    {/* C5: 22uF */}
    <capacitor name={"C5"} pcbX={-21.52} pcbY={-8.04} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C5 />} schX={11.699999999999996} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C22: 22uF */}
    <capacitor name={"C22"} pcbX={-26.45} pcbY={-3} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C22 />} schX={11.699999999999996} schY={11.800000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* H2: MountingHole */}
    <chip name={"H2"} pcbX={32.25} pcbY={29.4} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H2 />} noSchematicRepresentation={true}/>

    {/* C17: 1uF */}
    <capacitor name={"C17"} pcbX={-29.45} pcbY={-6.3} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C17 />} schX={25.4} schY={12.200000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* R3: 4K7 */}
    <resistor name={"R3"} pcbX={-12.75} pcbY={-3.6} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R3 />} schX={1} schY={-17.8} schRotation={0} schSheetName={"Overview"}/>

    {/* U8: MPM54304GMN-0000 */}
    <chip name={"U8"} pcbX={-15} pcbY={-22.6} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"] }} displayName={"MPM54304GMN-0000"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* C50: 100nF */}
    <capacitor name={"C50"} pcbX={16.25} pcbY={15.9} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C50 />} schX={-3.400000000000002} schY={19.300000000000004} schRotation={0} schSheetName={"Overview"}/>

    {/* R9: 4K7 */}
    <resistor name={"R9"} pcbX={-23.75} pcbY={8.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R9 />} schX={1.3999999999999986} schY={-9.399999999999995} schRotation={180} schSheetName={"Overview"}/>

    {/* C141: 100nF */}
    <capacitor name={"C141"} pcbX={11.25} pcbY={15.4} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C141 />} schX={-22.700000000000003} schY={17.5} schRotation={0} schSheetName={"Overview"}/>

    {/* U3: W25Q128JVS */}
    <chip name={"U3"} pcbX={-16.25} pcbY={-9.6} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} displayName={"W25Q128JVS"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* U9: MPM3683GQN-7-P */}
    <chip name={"U9"} pcbX={-27.25} pcbY={-11.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"] }} displayName={"MPM3683GQN-7-P"} footprint={<Footprint_U9 />} noSchematicRepresentation={true}/>

    {/* R25: 4K7 */}
    <resistor name={"R25"} pcbX={-34.5} pcbY={4.65} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R25 />} schX={-27.3} schY={5.600000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* C23: 22uF */}
    <capacitor name={"C23"} pcbX={-26.45} pcbY={-6.4} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C23 />} schX={12.5} schY={11.800000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C1: 1uF */}
    <capacitor name={"C1"} pcbX={-13.85} pcbY={-18} pcbRotation={180} capacitance={"1uF"} footprint={<Footprint_C1 />} schX={22} schY={16.400000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* R2: 4K7 */}
    <resistor name={"R2"} pcbX={-12.75} pcbY={-2.1} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R2 />} schX={0.29999999999999716} schY={-17.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* D8: RLED */}
    <chip name={"D8"} pcbX={-21.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D8 />} noSchematicRepresentation={true}/>

    {/* R21: 4K7 */}
    <resistor name={"R21"} pcbX={-32.75} pcbY={4.65} pcbRotation={90} resistance={"4.7kohm"} footprint={<Footprint_R21 />} schX={-28.6} schY={2.5000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* D6: GLED */}
    <chip name={"D6"} pcbX={-34.5} pcbY={0.15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"GLED"} footprint={<Footprint_D6 />} noSchematicRepresentation={true}/>

    {/* R4: 4K7 */}
    <resistor name={"R4"} pcbX={-12.75} pcbY={-0.6} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R4 />} schX={0.29999999999999716} schY={-17.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* C140: 100nF */}
    <capacitor name={"C140"} pcbX={10.25} pcbY={15.4} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C140 />} schX={-23.400000000000002} schY={17.700000000000003} schRotation={0} schSheetName={"Overview"}/>

    {/* D9: RLED */}
    <chip name={"D9"} pcbX={-19.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D9 />} noSchematicRepresentation={true}/>

    {/* R5: 4K7 */}
    <resistor name={"R5"} pcbX={-11.75} pcbY={-10.1} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R5 />} schX={6.100000000000001} schY={-11.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* R13: 15K */}
    <resistor name={"R13"} pcbX={-24.55} pcbY={-20.4} pcbRotation={0} resistance={"15kohm"} footprint={<Footprint_R13 />} schX={16.699999999999996} schY={19.500000000000004} schRotation={90} schSheetName={"Overview"}/>

    {/* H1: MountingHole */}
    <chip name={"H1"} pcbX={-32.25} pcbY={29.4} pcbRotation={0} pinLabels={{}} displayName={"MountingHole"} footprint={<Footprint_H1 />} noSchematicRepresentation={true}/>

    {/* J7: 1V_EN */}
    <chip name={"J7"} pcbX={-30} pcbY={-25.07} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"1V_EN"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* D11: RLED */}
    <chip name={"D11"} pcbX={-15.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D11 />} noSchematicRepresentation={true}/>

    {/* D2: GLED */}
    <chip name={"D2"} pcbX={-32.75} pcbY={0.15} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"GLED"} footprint={<Footprint_D2 />} noSchematicRepresentation={true}/>

    {/* J6: I2C_LINK */}
    <chip name={"J6"} pcbX={-26.275} pcbY={-25.075} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"] }} displayName={"I2C_LINK"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* R22: 4K7 */}
    <resistor name={"R22"} pcbX={-33.75} pcbY={-24.6} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R22 />} schX={-28.6} schY={-0.5999999999999979} schRotation={-90} schSheetName={"Overview"}/>

    {/* Q3: BSS138 */}
    <chip name={"Q3"} pcbX={-33.75} pcbY={-27.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS138"} footprint={<Footprint_Q3 />} noSchematicRepresentation={true}/>

    {/* U2: MT47H64M8SH */}
    <chip name={"U2"} pcbX={27.25} pcbY={6.4} pcbRotation={0} pinLabels={{ "pin1": ["A1"], "pin2": ["A2"], "pin3": ["A3"], "pin4": ["A7"], "pin5": ["A8"], "pin6": ["A9"], "pin7": ["B1"], "pin8": ["B2"], "pin9": ["B3"], "pin10": ["B7"], "pin11": ["B8"], "pin12": ["B9"], "pin13": ["C1"], "pin14": ["C2"], "pin15": ["C3"], "pin16": ["C7"], "pin17": ["C8"], "pin18": ["C9"], "pin19": ["D1"], "pin20": ["D2"], "pin21": ["D3"], "pin22": ["D7"], "pin23": ["D8"], "pin24": ["D9"], "pin25": ["E1"], "pin26": ["E2"], "pin27": ["E3"], "pin28": ["E7"], "pin29": ["E8"], "pin30": ["E9"], "pin31": ["F2"], "pin32": ["F3"], "pin33": ["F7"], "pin34": ["F8"], "pin35": ["F9"], "pin36": ["G1"], "pin37": ["G2"], "pin38": ["G3"], "pin39": ["G7"], "pin40": ["G8"], "pin41": ["H2"], "pin42": ["H3"], "pin43": ["H7"], "pin44": ["H8"], "pin45": ["H9"], "pin46": ["J1"], "pin47": ["J2"], "pin48": ["J3"], "pin49": ["J7"], "pin50": ["J8"], "pin51": ["K2"], "pin52": ["K3"], "pin53": ["K7"], "pin54": ["K8"], "pin55": ["K9"], "pin56": ["L1"], "pin57": ["L2"], "pin58": ["L3"], "pin59": ["L7"], "pin60": ["L8"] }} displayName={"MT47H64M8SH"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* D12: RLED */}
    <chip name={"D12"} pcbX={-13.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D12 />} noSchematicRepresentation={true}/>

    {/* D1: GLED */}
    <chip name={"D1"} pcbX={-33.75} pcbY={-18.1} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"GLED"} footprint={<Footprint_D1 />} noSchematicRepresentation={true}/>

    {/* D14: RLED */}
    <chip name={"D14"} pcbX={-9.25} pcbY={30.4} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"RLED"} footprint={<Footprint_D14 />} noSchematicRepresentation={true}/>

    {/* C49: 100nF */}
    <capacitor name={"C49"} pcbX={-12.35} pcbY={-13.6} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C49 />} schX={-3.6000000000000014} schY={-8.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* C142: 100nF */}
    <capacitor name={"C142"} pcbX={8.25} pcbY={15.4} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C142 />} schX={-23.400000000000002} schY={17.1} schRotation={0} schSheetName={"Overview"}/>

    {/* C6: 22uF */}
    <capacitor name={"C6"} pcbX={-21.05} pcbY={-13.5} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C6 />} schX={12.5} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* R17: 15K */}
    <resistor name={"R17"} pcbX={-28.75} pcbY={-16.6} pcbRotation={180} resistance={"15kohm"} footprint={<Footprint_R17 />} schX={24.4} schY={13.000000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* C15: 22uF */}
    <capacitor name={"C15"} pcbX={-7.05} pcbY={-20.2} pcbRotation={45} capacitance={"22uF"} footprint={<Footprint_C15 />} schX={13.100000000000001} schY={16.900000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C60: 100nF */}
    <capacitor name={"C60"} pcbX={33.25} pcbY={2.4} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C60 />} schX={18.599999999999994} schY={-21.400000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* C143: 100nF */}
    <capacitor name={"C143"} pcbX={7.25} pcbY={15.4} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C143 />} schX={-22.700000000000003} schY={16.900000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* C13: 22uF */}
    <capacitor name={"C13"} pcbX={-20.35} pcbY={-27.4} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C13 />} schX={11.699999999999996} schY={19.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C103: 100nF */}
    <capacitor name={"C103"} pcbX={1.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C103 />} schX={27.699999999999996} schY={-14.2} schRotation={0} schSheetName={"Overview"}/>

    {/* NT4: NetTie_2 */}
    <chip name={"NT4"} pcbX={-4.25} pcbY={5.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT4 />} noSchematicRepresentation={true}/>

    {/* C102: 100nF */}
    <capacitor name={"C102"} pcbX={0.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C102 />} schX={27} schY={-13.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* R19: 2K */}
    <resistor name={"R19"} pcbX={28.55} pcbY={7.8} pcbRotation={0} resistance={"2kohm"} footprint={<Footprint_R19 />} schX={-5.600000000000001} schY={10.100000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C53: 100nF */}
    <capacitor name={"C53"} pcbX={29.95} pcbY={11.1} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C53 />} schX={5.799999999999997} schY={14.600000000000001} schRotation={0} schSheetName={"Overview"}/>

    {/* C113: 100nF */}
    <capacitor name={"C113"} pcbX={23.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C113 />} schX={27.699999999999996} schY={-16.2} schRotation={0} schSheetName={"Overview"}/>

    {/* R12: 3K */}
    <resistor name={"R12"} pcbX={-24.65} pcbY={-16.8} pcbRotation={-90} resistance={"3kohm"} footprint={<Footprint_R12 />} schX={17.9} schY={12.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C24: 22uF */}
    <capacitor name={"C24"} pcbX={-16.05} pcbY={-21.7} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C24 />} schX={13.299999999999997} schY={11.800000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C101: 100nF */}
    <capacitor name={"C101"} pcbX={-3.25} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C101 />} schX={27.699999999999996} schY={-13.8} schRotation={0} schSheetName={"Overview"}/>

    {/* R30: 4K7 */}
    <resistor name={"R30"} pcbX={-15.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R30 />} schX={-22.6} schY={4.800000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* C29: 47uF */}
    <capacitor name={"C29"} pcbX={3.05} pcbY={6.3} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C29 />} schX={11.699999999999996} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C56: 100nF */}
    <capacitor name={"C56"} pcbX={31.25} pcbY={8.8} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C56 />} schX={5.799999999999997} schY={13.400000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* C41: 47uF */}
    <capacitor name={"C41"} pcbX={-7.75} pcbY={9.9} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C41 />} schX={14.899999999999991} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C120: 100nF */}
    <capacitor name={"C120"} pcbX={4.25} pcbY={-18.1} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C120 />} schX={21.099999999999994} schY={-11.8} schRotation={0} schSheetName={"Overview"}/>

    {/* C44: 100uF */}
    <capacitor name={"C44"} pcbX={-6.85} pcbY={-5.4} pcbRotation={180} capacitance={"100uF"} footprint={<Footprint_C44 />} schX={19} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* FB1: 600R@100MHz */}
    <chip name={"FB1"} pcbX={1.25} pcbY={-5.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"600R@100MHz"} footprint={<Footprint_FB1 />} noSchematicRepresentation={true}/>

    {/* C30: 4.7uF */}
    <capacitor name={"C30"} pcbX={3.25} pcbY={-0.1} pcbRotation={-90} capacitance={"4.7uF"} footprint={<Footprint_C30 />} schX={11.799999999999997} schY={9.400000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* NT3: NetTie_2 */}
    <chip name={"NT3"} pcbX={-2.25} pcbY={9.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT3 />} noSchematicRepresentation={true}/>

    {/* NT2: NetTie_2 */}
    <chip name={"NT2"} pcbX={4.25} pcbY={1.9} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT2 />} noSchematicRepresentation={true}/>

    {/* C32: 4.7uF */}
    <capacitor name={"C32"} pcbX={4.25} pcbY={-0.1} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C32 />} schX={12.699999999999996} schY={9.400000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* R27: 4K7 */}
    <resistor name={"R27"} pcbX={-21.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R27 />} schX={-25} schY={2.5000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C26: 22uF */}
    <capacitor name={"C26"} pcbX={-16.95} pcbY={-28.9} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C26 />} schX={14.099999999999994} schY={11.800000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C18: 100nF */}
    <capacitor name={"C18"} pcbX={6.05} pcbY={-3.1} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C18 />} schX={14.399999999999999} schY={21.000000000000004} schRotation={90} schSheetName={"Overview"}/>

    {/* U5: OB3225125MLDB6SI-00 */}
    <chip name={"U5"} pcbX={16.25} pcbY={15.9} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"OB3225125MLDB6SI-00"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C104: 100nF */}
    <capacitor name={"C104"} pcbX={4.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C104 />} schX={27} schY={-14.399999999999995} schRotation={0} schSheetName={"Overview"}/>

    {/* C7: 22uF */}
    <capacitor name={"C7"} pcbX={-21.05} pcbY={-13.5} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C7 />} schX={13.299999999999997} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C114: 100nF */}
    <capacitor name={"C114"} pcbX={26.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C114 />} schX={27} schY={-16.399999999999995} schRotation={0} schSheetName={"Overview"}/>

    {/* C10: 22uF */}
    <capacitor name={"C10"} pcbX={-10.85} pcbY={-4.4} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C10 />} schX={15.700000000000003} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C66: 4.7uF */}
    <capacitor name={"C66"} pcbX={14.25} pcbY={0.85} pcbRotation={-90} capacitance={"4.7uF"} footprint={<Footprint_C66 />} schX={19} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C112: 100nF */}
    <capacitor name={"C112"} pcbX={22.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C112 />} schX={27} schY={-15.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* NT7: NetTie_2 */}
    <chip name={"NT7"} pcbX={15.896447} pcbY={-15.953553} pcbRotation={45} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT7 />} noSchematicRepresentation={true}/>

    {/* C14: 22uF */}
    <capacitor name={"C14"} pcbX={-11.45} pcbY={-28.9} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C14 />} schX={13.100000000000001} schY={19.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C51: 100nF */}
    <capacitor name={"C51"} pcbX={24.85} pcbY={10.4} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C51 />} schX={5.799999999999997} schY={15.400000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* C9: 22uF */}
    <capacitor name={"C9"} pcbX={-15.75} pcbY={-7} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C9 />} schX={14.899999999999991} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C34: 47uF */}
    <capacitor name={"C34"} pcbX={11.75} pcbY={8.5} pcbRotation={90} capacitance={"47uF"} footprint={<Footprint_C34 />} schX={14.099999999999994} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C40: 47uF */}
    <capacitor name={"C40"} pcbX={-6.75} pcbY={-13.1} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C40 />} schX={14.099999999999994} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C63: 47uF */}
    <capacitor name={"C63"} pcbX={34.25} pcbY={11.6} pcbRotation={-90} capacitance={"47uF"} footprint={<Footprint_C63 />} schX={15.700000000000003} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C39: 47uF */}
    <capacitor name={"C39"} pcbX={-6.25} pcbY={-9.6} pcbRotation={-90} capacitance={"47uF"} footprint={<Footprint_C39 />} schX={13.299999999999997} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* R26: 4K7 */}
    <resistor name={"R26"} pcbX={-23.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R26 />} schX={-25} schY={4.800000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* C38: 47uF */}
    <capacitor name={"C38"} pcbX={7.15} pcbY={-10.1} pcbRotation={180} capacitance={"47uF"} footprint={<Footprint_C38 />} schX={12.5} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C12: 22uF */}
    <capacitor name={"C12"} pcbX={-19.05} pcbY={-18.9} pcbRotation={-135} capacitance={"22uF"} footprint={<Footprint_C12 />} schX={10.899999999999999} schY={16.900000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C8: 22uF */}
    <capacitor name={"C8"} pcbX={-18.15} pcbY={-7} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C8 />} schX={14.099999999999994} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C107: 100nF */}
    <capacitor name={"C107"} pcbX={9.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C107 />} schX={27.699999999999996} schY={-14.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* C54: 100nF */}
    <capacitor name={"C54"} pcbX={26.15} pcbY={8.8} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C54 />} schX={5.799999999999997} schY={14.200000000000003} schRotation={0} schSheetName={"Overview"}/>

    {/* NT6: NetTie_2 */}
    <chip name={"NT6"} pcbX={7.75} pcbY={-14.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT6 />} noSchematicRepresentation={true}/>

    {/* C65: 4.7uF */}
    <capacitor name={"C65"} pcbX={9.25} pcbY={-1.1} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C65 />} schX={18.200000000000003} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* Q2: BSS138 */}
    <chip name={"Q2"} pcbX={-33.25} pcbY={-5.6} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS138"} footprint={<Footprint_Q2 />} noSchematicRepresentation={true}/>

    {/* NT5: NetTie_2 */}
    <chip name={"NT5"} pcbX={-3.25} pcbY={7.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT5 />} noSchematicRepresentation={true}/>

    {/* NT1: NetTie_2 */}
    <chip name={"NT1"} pcbX={3.25} pcbY={1.9} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT1 />} noSchematicRepresentation={true}/>

    {/* R1: 100R */}
    <resistor name={"R1"} pcbX={11.75} pcbY={-2.87} pcbRotation={180} resistance={"100ohm"} footprint={<Footprint_R1 />} schX={27.999999999999993} schY={-0.9999999999999964} schRotation={-90} schSheetName={"Overview"}/>

    {/* C11: 22uF */}
    <capacitor name={"C11"} pcbX={-20.35} pcbY={-27.4} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C11 />} schX={10.899999999999999} schY={19.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C2: 4.7nF */}
    <capacitor name={"C2"} pcbX={-22.45} pcbY={-16.8} pcbRotation={90} capacitance={"4.7nF"} footprint={<Footprint_C2 />} schX={17.1} schY={13.3} schRotation={-90} schSheetName={"Overview"}/>

    {/* C111: 100nF */}
    <capacitor name={"C111"} pcbX={19.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C111 />} schX={27.699999999999996} schY={-15.799999999999994} schRotation={0} schSheetName={"Overview"}/>

    {/* C16: 22uF */}
    <capacitor name={"C16"} pcbX={-13.95} pcbY={-28.9} pcbRotation={-90} capacitance={"22uF"} footprint={<Footprint_C16 />} schX={13.899999999999999} schY={19.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* R7: 4K7 */}
    <resistor name={"R7"} pcbX={-17.05} pcbY={-1.1} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R7 />} schX={-1.5000000000000036} schY={-11.599999999999998} schRotation={180} schSheetName={"Overview"}/>

    {/* C21: 4.7uF */}
    <capacitor name={"C21"} pcbX={11.75} pcbY={-7.9} pcbRotation={0} capacitance={"4.7uF"} footprint={<Footprint_C21 />} schX={11.699999999999996} schY={16.900000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C131: 100nF */}
    <capacitor name={"C131"} pcbX={30.25} pcbY={-2.1} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C131 />} schX={21.199999999999996} schY={-19.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* C61: 100nF */}
    <capacitor name={"C61"} pcbX={28.55} pcbY={9.8} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C61 />} schX={-5.900000000000002} schY={10.100000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C36: 47uF */}
    <capacitor name={"C36"} pcbX={-3.55} pcbY={2.9} pcbRotation={180} capacitance={"47uF"} footprint={<Footprint_C36 />} schX={10.899999999999999} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C55: 100nF */}
    <capacitor name={"C55"} pcbX={30.95} pcbY={7.2} pcbRotation={0} capacitance={"100nF"} footprint={<Footprint_C55 />} schX={5.799999999999997} schY={13.800000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* Q1: BSS138 */}
    <chip name={"Q1"} pcbX={-32.25} pcbY={-21.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"] }} displayName={"BSS138"} footprint={<Footprint_Q1 />} noSchematicRepresentation={true}/>

    {/* C130: 100nF */}
    <capacitor name={"C130"} pcbX={30.25} pcbY={-1.1} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C130 />} schX={20.6} schY={-19.799999999999994} schRotation={0} schSheetName={"Overview"}/>

    {/* C106: 100nF */}
    <capacitor name={"C106"} pcbX={8.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C106 />} schX={27} schY={-14.799999999999994} schRotation={0} schSheetName={"Overview"}/>

    {/* C59: 100nF */}
    <capacitor name={"C59"} pcbX={24.05} pcbY={7.6} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C59 />} schX={5.799999999999997} schY={12.200000000000001} schRotation={0} schSheetName={"Overview"}/>

    {/* C105: 100nF */}
    <capacitor name={"C105"} pcbX={5.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C105 />} schX={27.699999999999996} schY={-14.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* R33: 4K7 */}
    <resistor name={"R33"} pcbX={-9.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R33 />} schX={-22.6} schY={-3.6999999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* R20: 4K7 */}
    <resistor name={"R20"} pcbX={-34.85} pcbY={-21.1} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R20 />} schX={-28.6} schY={5.600000000000001} schRotation={-90} schSheetName={"Overview"}/>

    {/* C25: 4.7uF */}
    <capacitor name={"C25"} pcbX={13.75} pcbY={-6.9} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C25 />} schX={13.899999999999999} schY={16.900000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C35: 47uF */}
    <capacitor name={"C35"} pcbX={2.35} pcbY={9.9} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C35 />} schX={14.899999999999991} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C19: 1uF */}
    <capacitor name={"C19"} pcbX={3.25} pcbY={-7.1} pcbRotation={90} capacitance={"1uF"} footprint={<Footprint_C19 />} schX={15.399999999999999} schY={21.000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* C110: 100nF */}
    <capacitor name={"C110"} pcbX={18.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C110 />} schX={27} schY={-15.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* C43: 100uF */}
    <capacitor name={"C43"} pcbX={-4.55} pcbY={-1.2} pcbRotation={90} capacitance={"100uF"} footprint={<Footprint_C43 />} schX={18.200000000000003} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* R11: 2K */}
    <resistor name={"R11"} pcbX={-23.55} pcbY={-16.8} pcbRotation={90} resistance={"2kohm"} footprint={<Footprint_R11 />} schX={17.9} schY={13.3} schRotation={-90} schSheetName={"Overview"}/>

    {/* C121: 100nF */}
    <capacitor name={"C121"} pcbX={4.25} pcbY={-19.1} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C121 />} schX={21.699999999999996} schY={-11.999999999999996} schRotation={0} schSheetName={"Overview"}/>

    {/* R8: 4K7 */}
    <resistor name={"R8"} pcbX={-15.75} pcbY={-11.4} pcbRotation={180} resistance={"4.7kohm"} footprint={<Footprint_R8 />} schX={-0.9000000000000021} schY={-11.8} schRotation={180} schSheetName={"Overview"}/>

    {/* C4: 22uF */}
    <capacitor name={"C4"} pcbX={-21.52} pcbY={-8.04} pcbRotation={90} capacitance={"22uF"} footprint={<Footprint_C4 />} schX={10.899999999999999} schY={14.200000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* R28: 4K7 */}
    <resistor name={"R28"} pcbX={-19.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R28 />} schX={-25} schY={-0.5999999999999979} schRotation={-90} schSheetName={"Overview"}/>

    {/* C46: 4.7uF */}
    <capacitor name={"C46"} pcbX={5.25} pcbY={0.9} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C46 />} schX={20.6} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C27: 4.7uF */}
    <capacitor name={"C27"} pcbX={3.75} pcbY={-2.5} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C27 />} schX={10.899999999999999} schY={9.400000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* C64: 4.7uF */}
    <capacitor name={"C64"} pcbX={9.25} pcbY={0.9} pcbRotation={90} capacitance={"4.7uF"} footprint={<Footprint_C64 />} schX={17.39999999999999} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C37: 47uF */}
    <capacitor name={"C37"} pcbX={3.25} pcbY={-13.1} pcbRotation={0} capacitance={"47uF"} footprint={<Footprint_C37 />} schX={11.699999999999996} schY={4.700000000000003} schRotation={-90} schSheetName={"Overview"}/>

    {/* C52: 100nF */}
    <capacitor name={"C52"} pcbX={30.45} pcbY={4} pcbRotation={-90} capacitance={"100nF"} footprint={<Footprint_C52 />} schX={5.799999999999997} schY={15.000000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* C108: 100nF */}
    <capacitor name={"C108"} pcbX={14.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C108 />} schX={27} schY={-15.2} schRotation={0} schSheetName={"Overview"}/>

    {/* C57: 100nF */}
    <capacitor name={"C57"} pcbX={24.05} pcbY={3.5} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C57 />} schX={5.799999999999997} schY={13.000000000000002} schRotation={0} schSheetName={"Overview"}/>

    {/* U4: OB3225125MLDB6SI-00 */}
    <chip name={"U4"} pcbX={33.25} pcbY={2.4} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"] }} displayName={"OB3225125MLDB6SI-00"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* R29: 4K7 */}
    <resistor name={"R29"} pcbX={-17.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R29 />} schX={-25} schY={-3.6999999999999993} schRotation={-90} schSheetName={"Overview"}/>

    {/* C58: 100nF */}
    <capacitor name={"C58"} pcbX={23.05} pcbY={9.3} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C58 />} schX={5.799999999999997} schY={12.600000000000003} schRotation={0} schSheetName={"Overview"}/>

    {/* NT8: NetTie_2 */}
    <chip name={"NT8"} pcbX={6.75} pcbY={-16.35} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"NetTie_2"} footprint={<Footprint_NT8 />} noSchematicRepresentation={true}/>

    {/* C31: 47uF */}
    <capacitor name={"C31"} pcbX={7.75} pcbY={3.5} pcbRotation={45} capacitance={"47uF"} footprint={<Footprint_C31 />} schX={12.5} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C100: 100nF */}
    <capacitor name={"C100"} pcbX={-4.25} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C100 />} schX={27} schY={-13.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* C47: 4.7uF */}
    <capacitor name={"C47"} pcbX={3.75} pcbY={-4.6} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C47 />} schX={21.4} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C48: 4.7uF */}
    <capacitor name={"C48"} pcbX={9.75} pcbY={-5.6} pcbRotation={0} capacitance={"4.7uF"} footprint={<Footprint_C48 />} schX={22.199999999999996} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* R32: 4K7 */}
    <resistor name={"R32"} pcbX={-11.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R32 />} schX={-22.6} schY={-0.5999999999999979} schRotation={-90} schSheetName={"Overview"}/>

    {/* C62: 100nF */}
    <capacitor name={"C62"} pcbX={27.55} pcbY={10.8} pcbRotation={180} capacitance={"100nF"} footprint={<Footprint_C62 />} schX={-5.900000000000002} schY={10.700000000000003} schRotation={90} schSheetName={"Overview"}/>

    {/* C42: 100uF */}
    <capacitor name={"C42"} pcbX={-10.85} pcbY={-9.2} pcbRotation={-90} capacitance={"100uF"} footprint={<Footprint_C42 />} schX={17.39999999999999} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C115: 100nF */}
    <capacitor name={"C115"} pcbX={27.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C115 />} schX={27.699999999999996} schY={-16.599999999999998} schRotation={0} schSheetName={"Overview"}/>

    {/* C28: 47uF */}
    <capacitor name={"C28"} pcbX={6.25} pcbY={7.9} pcbRotation={-45} capacitance={"47uF"} footprint={<Footprint_C28 />} schX={10.899999999999999} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C109: 100nF */}
    <capacitor name={"C109"} pcbX={15.75} pcbY={-33.1} pcbRotation={90} capacitance={"100nF"} footprint={<Footprint_C109 />} schX={27.699999999999996} schY={-15.399999999999995} schRotation={0} schSheetName={"Overview"}/>

    {/* C33: 47uF */}
    <capacitor name={"C33"} pcbX={16.15} pcbY={9.4} pcbRotation={45} capacitance={"47uF"} footprint={<Footprint_C33 />} schX={13.299999999999997} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* R6: 4K7 */}
    <resistor name={"R6"} pcbX={-15.95} pcbY={-1.1} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R6 />} schX={-5.700000000000003} schY={-11.2} schRotation={0} schSheetName={"Overview"}/>

    {/* FB2: 600R@100MHz */}
    <chip name={"FB2"} pcbX={1.25} pcbY={-8.6} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} displayName={"600R@100MHz"} footprint={<Footprint_FB2 />} noSchematicRepresentation={true}/>

    {/* C45: 4.7uF */}
    <capacitor name={"C45"} pcbX={7.75} pcbY={-4.7} pcbRotation={180} capacitance={"4.7uF"} footprint={<Footprint_C45 />} schX={19.799999999999997} schY={7.0000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* R31: 4K7 */}
    <resistor name={"R31"} pcbX={-13.25} pcbY={27.4} pcbRotation={-90} resistance={"4.7kohm"} footprint={<Footprint_R31 />} schX={-22.6} schY={2.5000000000000036} schRotation={-90} schSheetName={"Overview"}/>

    {/* C20: 22uF */}
    <capacitor name={"C20"} pcbX={-26.45} pcbY={-4.7} pcbRotation={180} capacitance={"22uF"} footprint={<Footprint_C20 />} schX={10.899999999999999} schY={11.800000000000002} schRotation={-90} schSheetName={"Overview"}/>

    {/* R18: 2K */}
    <resistor name={"R18"} pcbX={28.55} pcbY={8.8} pcbRotation={180} resistance={"2kohm"} footprint={<Footprint_R18 />} schX={-5.600000000000001} schY={11.000000000000004} schRotation={-90} schSheetName={"Overview"}/>

    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".R16 > .pin1", ".JP2 > .pin6", ".R24 > .pin1", ".R14 > .pin1", ".U6 > .pin3", ".U6 > .pin8", ".U7 > .pin3", ".U7 > .pin8", ".U1 > .pin1", ".U1 > .pin2", ".U1 > .pin5", ".U1 > .pin6", ".U1 > .pin7", ".U1 > .pin16", ".U1 > .pin26", ".U1 > .pin32", ".U1 > .pin42", ".U1 > .pin52", ".U1 > .pin55", ".U1 > .pin65", ".U1 > .pin75", ".U1 > .pin88", ".U1 > .pin98", ".U1 > .pin111", ".U1 > .pin121", ".U1 > .pin134", ".U1 > .pin144", ".U1 > .pin154", ".U1 > .pin157", ".U1 > .pin167", ".U1 > .pin177", ".U1 > .pin186", ".U1 > .pin189", ".U1 > .pin195", ".U1 > .pin205", ".U1 > .pin209", ".U1 > .pin213", ".U1 > .pin215", ".U1 > .pin218", ".U1 > .pin228", ".U1 > .pin238", ".U1 > .pin241", ".U1 > .pin251", ".U1 > .pin261", ".U1 > .pin262", ".U1 > .pin265", ".U1 > .pin267", ".U1 > .pin268", ".U1 > .pin274", ".U1 > .pin284", ".U1 > .pin289", ".U1 > .pin290", ".U1 > .pin293", ".U1 > .pin297", ".U1 > .pin307", ".U1 > .pin313", ".U1 > .pin317", ".U1 > .pin320", ".U1 > .pin330", ".U1 > .pin342", ".U1 > .pin345", ".U1 > .pin353", ".U1 > .pin363", ".U1 > .pin365", ".U1 > .pin366", ".U1 > .pin369", ".U1 > .pin376", ".U1 > .pin386", ".U1 > .pin393", ".U1 > .pin394", ".U1 > .pin397", ".U1 > .pin399", ".U1 > .pin401", ".U1 > .pin403", ".U1 > .pin409", ".U1 > .pin417", ".U1 > .pin421", ".U1 > .pin426", ".U1 > .pin428", ".U1 > .pin430", ".U1 > .pin432", ".U1 > .pin442", ".U1 > .pin446", ".U1 > .pin449", ".U1 > .pin451", ".U1 > .pin455", ".U1 > .pin457", ".U1 > .pin465", ".U1 > .pin469", ".U1 > .pin470", ".U1 > .pin473", ".U1 > .pin475", ".U1 > .pin478", ".U1 > .pin482", ".U1 > .pin488", ".U1 > .pin497", ".U1 > .pin498", ".U1 > .pin499", ".U1 > .pin503", ".U1 > .pin507", ".U1 > .pin509", ".U1 > .pin511", ".U1 > .pin521", ".U1 > .pin522", ".U1 > .pin525", ".U1 > .pin528", ".U1 > .pin530", ".U1 > .pin534", ".U1 > .pin544", ".U1 > .pin547", ".U1 > .pin548", ".U1 > .pin549", ".U1 > .pin550", ".U1 > .pin555", ".U1 > .pin557", ".U1 > .pin559", ".U1 > .pin561", ".U1 > .pin567", ".U1 > .pin580", ".U1 > .pin582", ".U1 > .pin584", ".U1 > .pin586", ".U1 > .pin590", ".U1 > .pin603", ".U1 > .pin613", ".U1 > .pin623", ".U1 > .pin626", ".U1 > .pin636", ".U1 > .pin646", ".U1 > .pin659", ".U1 > .pin669", ".J5 > .pin3", ".J1 > .pin4", ".J1 > .pin12", ".J1 > .pin15", ".J1 > .pin18", ".J1 > .pin20", ".J1 > .pin23", ".J1 > .pin24", ".J1 > .pin27", ".J1 > .pin28", ".J1 > .pin31", ".J1 > .pin34", ".J1 > .pin37", ".J1 > .pin38", ".J1 > .pin41", ".J1 > .pin42", ".J1 > .pin45", ".J1 > .pin46", ".J1 > .pin49", ".J1 > .pin53", ".J1 > .pin56", ".J1 > .pin62", ".J1 > .pin65", ".J1 > .pin67", ".J1 > .pin70", ".J1 > .pin71", ".J1 > .pin74", ".J1 > .pin75", ".J1 > .pin78", ".J1 > .pin81", ".J1 > .pin84", ".J1 > .pin85", ".J1 > .pin88", ".J1 > .pin89", ".J1 > .pin92", ".J1 > .pin93", ".J1 > .pin96", ".J1 > .pin98", ".C3 > .pin1", ".C5 > .pin2", ".C22 > .pin2", ".C17 > .pin2", ".U8 > .pin2", ".U8 > .pin5", ".U8 > .pin7", ".U8 > .pin10", ".U8 > .pin13", ".U8 > .pin16", ".U8 > .pin20", ".U8 > .pin21", ".U8 > .pin27", ".U8 > .pin33", ".C50 > .pin2", ".U3 > .pin4", ".U9 > .pin10", ".U9 > .pin12", ".U9 > .pin18", ".U9 > .pin21", ".R25 > .pin2", ".C23 > .pin2", ".C1 > .pin2", ".Q3 > .pin2", ".U2 > .pin3", ".U2 > .pin4", ".U2 > .pin8", ".U2 > .pin11", ".U2 > .pin20", ".U2 > .pin23", ".U2 > .pin27", ".U2 > .pin28", ".U2 > .pin40", ".U2 > .pin46", ".U2 > .pin55", ".C49 > .pin2", ".C6 > .pin2", ".R17 > .pin2", ".C15 > .pin2", ".C60 > .pin2", ".C13 > .pin2", ".R19 > .pin2", ".C53 > .pin2", ".C24 > .pin2", ".R30 > .pin2", ".C29 > .pin2", ".C56 > .pin2", ".C41 > .pin2", ".C44 > .pin2", ".FB1 > .pin2", ".C30 > .pin2", ".C32 > .pin2", ".R27 > .pin2", ".C26 > .pin2", ".U5 > .pin3", ".C7 > .pin2", ".C10 > .pin2", ".C66 > .pin2", ".C14 > .pin2", ".C51 > .pin2", ".C9 > .pin2", ".C34 > .pin2", ".C40 > .pin2", ".C63 > .pin2", ".C39 > .pin2", ".R26 > .pin2", ".C38 > .pin2", ".C12 > .pin2", ".C8 > .pin2", ".C54 > .pin2", ".C65 > .pin2", ".Q2 > .pin2", ".NT5 > .pin2", ".NT1 > .pin1", ".C11 > .pin2", ".C16 > .pin2", ".C21 > .pin2", ".C61 > .pin2", ".C36 > .pin2", ".C55 > .pin2", ".Q1 > .pin2", ".C59 > .pin2", ".R33 > .pin2", ".C25 > .pin2", ".C35 > .pin2", ".C43 > .pin2", ".C4 > .pin2", ".R28 > .pin2", ".C46 > .pin2", ".C27 > .pin2", ".C64 > .pin2", ".C37 > .pin2", ".C52 > .pin2", ".C57 > .pin2", ".U4 > .pin3", ".R29 > .pin2", ".C58 > .pin2", ".NT8 > .pin2", ".C31 > .pin2", ".C47 > .pin2", ".C48 > .pin2", ".R32 > .pin2", ".C42 > .pin2", ".C28 > .pin2", ".C33 > .pin2", ".C45 > .pin2", ".R31 > .pin2", ".C20 > .pin2"]}/>
    {/* KiCad net: /1V_EN */}
    <KiCadNet name={"_1V_EN"} connectsTo={[".R16 > .pin2", ".R15 > .pin1", ".U9 > .pin3", ".J7 > .pin1"]}/>
    {/* KiCad net: +3V3 */}
    <KiCadNet name={"_3V3"} connectsTo={[".R10 > .pin1", ".JP2 > .pin1", ".U1 > .pin11", ".U1 > .pin21", ".U1 > .pin47", ".U1 > .pin103", ".U1 > .pin126", ".U1 > .pin182", ".U1 > .pin190", ".U1 > .pin200", ".U1 > .pin223", ".U1 > .pin233", ".U1 > .pin246", ".U1 > .pin256", ".U1 > .pin269", ".U1 > .pin279", ".U1 > .pin302", ".U1 > .pin312", ".U1 > .pin325", ".U1 > .pin335", ".U1 > .pin348", ".U1 > .pin358", ".U1 > .pin381", ".U1 > .pin414", ".U1 > .pin423", ".U1 > .pin437", ".U1 > .pin460", ".U1 > .pin493", ".U1 > .pin501", ".U1 > .pin516", ".U1 > .pin539", ".U1 > .pin551", ".U1 > .pin552", ".U1 > .pin562", ".U1 > .pin572", ".U1 > .pin595", ".U1 > .pin618", ".U1 > .pin674", ".R3 > .pin2", ".U8 > .pin8", ".U8 > .pin9", ".R9 > .pin1", ".U3 > .pin8", ".R2 > .pin2", ".R4 > .pin2", ".R5 > .pin1", ".C49 > .pin1", ".C13 > .pin1", ".NT4 > .pin2", ".C41 > .pin1", ".C40 > .pin1", ".C39 > .pin1", ".C38 > .pin1", ".C11 > .pin1", ".R7 > .pin1", ".C36 > .pin1", ".R8 > .pin1", ".C37 > .pin1", ".R6 > .pin1"]}/>
    {/* KiCad net: /UART_RX */}
    <KiCadNet name={"_UART_RX"} connectsTo={[".R10 > .pin2", ".U1 > .pin338", ".J5 > .pin2"]}/>
    {/* KiCad net: /B2B_RXC_N */}
    <KiCadNet name={"_B2B_RXC_N"} connectsTo={[".J4 > .pin1", ".U7 > .pin5", ".U7 > .pin6", ".U1 > .pin89"]}/>
    {/* KiCad net: /B2B_RXC_P */}
    <KiCadNet name={"_B2B_RXC_P"} connectsTo={[".J4 > .pin2", ".U7 > .pin4", ".U7 > .pin7", ".U1 > .pin63"]}/>
    {/* KiCad net: /B2B_RXD_N */}
    <KiCadNet name={"_B2B_RXD_N"} connectsTo={[".J4 > .pin3", ".U7 > .pin2", ".U7 > .pin9", ".U1 > .pin117"]}/>
    {/* KiCad net: /B2B_RXD_P */}
    <KiCadNet name={"_B2B_RXD_P"} connectsTo={[".J4 > .pin4", ".U7 > .pin1", ".U7 > .pin10", ".U1 > .pin91"]}/>
    {/* KiCad net: /TCK */}
    <KiCadNet name={"_TCK"} connectsTo={[".JP2 > .pin2", ".U1 > .pin424"]}/>
    {/* KiCad net: /TMS */}
    <KiCadNet name={"_TMS"} connectsTo={[".JP2 > .pin3", ".U1 > .pin476"]}/>
    {/* KiCad net: /TDO */}
    <KiCadNet name={"_TDO"} connectsTo={[".JP2 > .pin4", ".U1 > .pin527"]}/>
    {/* KiCad net: /TDI */}
    <KiCadNet name={"_TDI"} connectsTo={[".JP2 > .pin5", ".U1 > .pin526"]}/>
    {/* KiCad net: /MPM_PG */}
    <KiCadNet name={"_MPM_PG"} connectsTo={[".R24 > .pin2", ".R23 > .pin1", ".U8 > .pin26", ".Q1 > .pin1"]}/>
    {/* KiCad net: /1V_PG */}
    <KiCadNet name={"_1V_PG"} connectsTo={[".R14 > .pin2", ".U8 > .pin19", ".U9 > .pin4", ".R13 > .pin1", ".Q2 > .pin1"]}/>
    {/* KiCad net: Net-(D13-Pad1) */}
    <KiCadNet name={"Net__D13_Pad1_"} connectsTo={[".D13 > .pin1", ".R32 > .pin1"]}/>
    {/* KiCad net: /LED6 */}
    <KiCadNet name={"_LED6"} connectsTo={[".D13 > .pin2", ".U1 > .pin152"]}/>
    {/* KiCad net: /B2B_TXC_P */}
    <KiCadNet name={"_B2B_TXC_P"} connectsTo={[".U6 > .pin1", ".U6 > .pin10", ".J3 > .pin4", ".C143 > .pin2"]}/>
    {/* KiCad net: /B2B_TXC_N */}
    <KiCadNet name={"_B2B_TXC_N"} connectsTo={[".U6 > .pin2", ".U6 > .pin9", ".J3 > .pin3", ".C142 > .pin2"]}/>
    {/* KiCad net: /B2B_TXD_P */}
    <KiCadNet name={"_B2B_TXD_P"} connectsTo={[".U6 > .pin4", ".U6 > .pin7", ".J3 > .pin2", ".C140 > .pin2"]}/>
    {/* KiCad net: /B2B_TXD_N */}
    <KiCadNet name={"_B2B_TXD_N"} connectsTo={[".U6 > .pin5", ".U6 > .pin6", ".J3 > .pin1", ".C141 > .pin2"]}/>
    {/* KiCad net: Net-(D10-Pad1) */}
    <KiCadNet name={"Net__D10_Pad1_"} connectsTo={[".D10 > .pin1", ".R29 > .pin1"]}/>
    {/* KiCad net: /LED3 */}
    <KiCadNet name={"_LED3"} connectsTo={[".D10 > .pin2", ".U1 > .pin180"]}/>
    {/* KiCad net: +12V */}
    <KiCadNet name={"_12V"} connectsTo={[".R15 > .pin2", ".J1 > .pin2", ".J1 > .pin3", ".J1 > .pin50", ".J1 > .pin51", ".J1 > .pin52", ".D3 > .pin2", ".R23 > .pin2", ".C22 > .pin1", ".U8 > .pin28", ".U8 > .pin29", ".U9 > .pin5", ".U9 > .pin8", ".U9 > .pin9", ".U9 > .pin27", ".C23 > .pin1", ".D6 > .pin2", ".R13 > .pin2", ".D2 > .pin2", ".D1 > .pin2", ".C24 > .pin1", ".C26 > .pin1", ".C20 > .pin1"]}/>
    {/* KiCad net: PCIE_TX0_N */}
    <KiCadNet name={"PCIE_TX0_N"} connectsTo={[".U1 > .pin3", ".C101 > .pin2"]}/>
    {/* KiCad net: PCIE_TX0_P */}
    <KiCadNet name={"PCIE_TX0_P"} connectsTo={[".U1 > .pin4", ".C100 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadA8) */}
    <KiCadNet name={"unconnected__U1_PadA8_"} connectsTo={[".U1 > .pin8"]}/>
    {/* KiCad net: unconnected-(U1-PadA9) */}
    <KiCadNet name={"unconnected__U1_PadA9_"} connectsTo={[".U1 > .pin9"]}/>
    {/* KiCad net: unconnected-(U1-PadA10) */}
    <KiCadNet name={"unconnected__U1_PadA10_"} connectsTo={[".U1 > .pin10"]}/>
    {/* KiCad net: unconnected-(U1-PadA12) */}
    <KiCadNet name={"unconnected__U1_PadA12_"} connectsTo={[".U1 > .pin12"]}/>
    {/* KiCad net: unconnected-(U1-PadA13) */}
    <KiCadNet name={"unconnected__U1_PadA13_"} connectsTo={[".U1 > .pin13"]}/>
    {/* KiCad net: unconnected-(U1-PadA14) */}
    <KiCadNet name={"unconnected__U1_PadA14_"} connectsTo={[".U1 > .pin14"]}/>
    {/* KiCad net: unconnected-(U1-PadA15) */}
    <KiCadNet name={"unconnected__U1_PadA15_"} connectsTo={[".U1 > .pin15"]}/>
    {/* KiCad net: unconnected-(U1-PadA17) */}
    <KiCadNet name={"unconnected__U1_PadA17_"} connectsTo={[".U1 > .pin17"]}/>
    {/* KiCad net: unconnected-(U1-PadA18) */}
    <KiCadNet name={"unconnected__U1_PadA18_"} connectsTo={[".U1 > .pin18"]}/>
    {/* KiCad net: unconnected-(U1-PadA19) */}
    <KiCadNet name={"unconnected__U1_PadA19_"} connectsTo={[".U1 > .pin19"]}/>
    {/* KiCad net: unconnected-(U1-PadA20) */}
    <KiCadNet name={"unconnected__U1_PadA20_"} connectsTo={[".U1 > .pin20"]}/>
    {/* KiCad net: /SPI_D3 */}
    <KiCadNet name={"_SPI_D3"} connectsTo={[".U1 > .pin22", ".U3 > .pin7", ".R8 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadA23) */}
    <KiCadNet name={"unconnected__U1_PadA23_"} connectsTo={[".U1 > .pin23"]}/>
    {/* KiCad net: unconnected-(U1-PadA24) */}
    <KiCadNet name={"unconnected__U1_PadA24_"} connectsTo={[".U1 > .pin24"]}/>
    {/* KiCad net: /SPI_D1 */}
    <KiCadNet name={"_SPI_D1"} connectsTo={[".U1 > .pin25", ".U3 > .pin2"]}/>
    {/* KiCad net: +1V8 */}
    <KiCadNet name={"_1V8"} connectsTo={[".U1 > .pin27", ".U1 > .pin37", ".U1 > .pin60", ".U1 > .pin70", ".U1 > .pin83", ".U1 > .pin93", ".U1 > .pin106", ".U1 > .pin116", ".U1 > .pin139", ".U1 > .pin149", ".U1 > .pin162", ".U1 > .pin172", ".U1 > .pin427", ".U1 > .pin452", ".U1 > .pin474", ".U1 > .pin502", ".U1 > .pin504", ".U1 > .pin529", ".U1 > .pin554", ".U1 > .pin556", ".U1 > .pin575", ".U1 > .pin583", ".U1 > .pin608", ".U1 > .pin631", ".U1 > .pin641", ".U1 > .pin654", ".U1 > .pin664", ".U8 > .pin14", ".U8 > .pin15", ".C50 > .pin1", ".U2 > .pin1", ".U2 > .pin6", ".U2 > .pin13", ".U2 > .pin15", ".U2 > .pin16", ".U2 > .pin18", ".U2 > .pin25", ".U2 > .pin30", ".U2 > .pin45", ".U2 > .pin56", ".C60 > .pin1", ".C53 > .pin1", ".C29 > .pin1", ".C56 > .pin1", ".NT3 > .pin2", ".U5 > .pin1", ".U5 > .pin6", ".C66 > .pin1", ".C14 > .pin1", ".C51 > .pin1", ".C34 > .pin1", ".C63 > .pin1", ".C54 > .pin1", ".C65 > .pin1", ".C16 > .pin1", ".C55 > .pin1", ".C59 > .pin1", ".C35 > .pin1", ".C64 > .pin1", ".C52 > .pin1", ".C57 > .pin1", ".U4 > .pin1", ".U4 > .pin6", ".C58 > .pin1", ".C31 > .pin1", ".C62 > .pin2", ".C28 > .pin1", ".C33 > .pin1", ".FB2 > .pin2", ".R18 > .pin1"]}/>
    {/* KiCad net: DDR_BA0 */}
    <KiCadNet name={"DDR_BA0"} connectsTo={[".U1 > .pin28", ".U2 > .pin37"]}/>
    {/* KiCad net: DDR_A5 */}
    <KiCadNet name={"DDR_A5"} connectsTo={[".U1 > .pin29", ".U2 > .pin48"]}/>
    {/* KiCad net: DDR_CAS */}
    <KiCadNet name={"DDR_CAS"} connectsTo={[".U1 > .pin30", ".U2 > .pin39"]}/>
    {/* KiCad net: DDR_A0 */}
    <KiCadNet name={"DDR_A0"} connectsTo={[".U1 > .pin31", ".U2 > .pin44"]}/>
    {/* KiCad net: unconnected-(U1-PadAA7) */}
    <KiCadNet name={"unconnected__U1_PadAA7_"} connectsTo={[".U1 > .pin33"]}/>
    {/* KiCad net: unconnected-(U1-PadAA8) */}
    <KiCadNet name={"unconnected__U1_PadAA8_"} connectsTo={[".U1 > .pin34"]}/>
    {/* KiCad net: unconnected-(U1-PadAA9) */}
    <KiCadNet name={"unconnected__U1_PadAA9_"} connectsTo={[".U1 > .pin35"]}/>
    {/* KiCad net: unconnected-(U1-PadAA10) */}
    <KiCadNet name={"unconnected__U1_PadAA10_"} connectsTo={[".U1 > .pin36"]}/>
    {/* KiCad net: unconnected-(U1-PadAA12) */}
    <KiCadNet name={"unconnected__U1_PadAA12_"} connectsTo={[".U1 > .pin38"]}/>
    {/* KiCad net: unconnected-(U1-PadAA13) */}
    <KiCadNet name={"unconnected__U1_PadAA13_"} connectsTo={[".U1 > .pin39"]}/>
    {/* KiCad net: unconnected-(U1-PadAA14) */}
    <KiCadNet name={"unconnected__U1_PadAA14_"} connectsTo={[".U1 > .pin40"]}/>
    {/* KiCad net: unconnected-(U1-PadAA15) */}
    <KiCadNet name={"unconnected__U1_PadAA15_"} connectsTo={[".U1 > .pin41"]}/>
    {/* KiCad net: unconnected-(U1-PadAA17) */}
    <KiCadNet name={"unconnected__U1_PadAA17_"} connectsTo={[".U1 > .pin43"]}/>
    {/* KiCad net: unconnected-(U1-PadAA18) */}
    <KiCadNet name={"unconnected__U1_PadAA18_"} connectsTo={[".U1 > .pin44"]}/>
    {/* KiCad net: unconnected-(U1-PadAA19) */}
    <KiCadNet name={"unconnected__U1_PadAA19_"} connectsTo={[".U1 > .pin45"]}/>
    {/* KiCad net: unconnected-(U1-PadAA20) */}
    <KiCadNet name={"unconnected__U1_PadAA20_"} connectsTo={[".U1 > .pin46"]}/>
    {/* KiCad net: unconnected-(U1-PadAA22) */}
    <KiCadNet name={"unconnected__U1_PadAA22_"} connectsTo={[".U1 > .pin48"]}/>
    {/* KiCad net: unconnected-(U1-PadAA23) */}
    <KiCadNet name={"unconnected__U1_PadAA23_"} connectsTo={[".U1 > .pin49"]}/>
    {/* KiCad net: unconnected-(U1-PadAA24) */}
    <KiCadNet name={"unconnected__U1_PadAA24_"} connectsTo={[".U1 > .pin50"]}/>
    {/* KiCad net: unconnected-(U1-PadAA25) */}
    <KiCadNet name={"unconnected__U1_PadAA25_"} connectsTo={[".U1 > .pin51"]}/>
    {/* KiCad net: DDR_WE */}
    <KiCadNet name={"DDR_WE"} connectsTo={[".U1 > .pin53", ".U2 > .pin32"]}/>
    {/* KiCad net: DDR_CKE */}
    <KiCadNet name={"DDR_CKE"} connectsTo={[".U1 > .pin54", ".U2 > .pin31"]}/>
    {/* KiCad net: DDR_ODT */}
    <KiCadNet name={"DDR_ODT"} connectsTo={[".U1 > .pin56", ".U2 > .pin35"]}/>
    {/* KiCad net: unconnected-(U1-PadAB5) */}
    <KiCadNet name={"unconnected__U1_PadAB5_"} connectsTo={[".U1 > .pin57"]}/>
    {/* KiCad net: unconnected-(U1-PadAB6) */}
    <KiCadNet name={"unconnected__U1_PadAB6_"} connectsTo={[".U1 > .pin58"]}/>
    {/* KiCad net: /B2B_TXD_C_P */}
    <KiCadNet name={"_B2B_TXD_C_P"} connectsTo={[".U1 > .pin59", ".C140 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadAB9) */}
    <KiCadNet name={"unconnected__U1_PadAB9_"} connectsTo={[".U1 > .pin61"]}/>
    {/* KiCad net: unconnected-(U1-PadAB10) */}
    <KiCadNet name={"unconnected__U1_PadAB10_"} connectsTo={[".U1 > .pin62"]}/>
    {/* KiCad net: unconnected-(U1-PadAB12) */}
    <KiCadNet name={"unconnected__U1_PadAB12_"} connectsTo={[".U1 > .pin64"]}/>
    {/* KiCad net: unconnected-(U1-PadAB14) */}
    <KiCadNet name={"unconnected__U1_PadAB14_"} connectsTo={[".U1 > .pin66"]}/>
    {/* KiCad net: unconnected-(U1-PadAB15) */}
    <KiCadNet name={"unconnected__U1_PadAB15_"} connectsTo={[".U1 > .pin67"]}/>
    {/* KiCad net: unconnected-(U1-PadAB16) */}
    <KiCadNet name={"unconnected__U1_PadAB16_"} connectsTo={[".U1 > .pin68"]}/>
    {/* KiCad net: unconnected-(U1-PadAB17) */}
    <KiCadNet name={"unconnected__U1_PadAB17_"} connectsTo={[".U1 > .pin69"]}/>
    {/* KiCad net: unconnected-(U1-PadAB19) */}
    <KiCadNet name={"unconnected__U1_PadAB19_"} connectsTo={[".U1 > .pin71"]}/>
    {/* KiCad net: unconnected-(U1-PadAB20) */}
    <KiCadNet name={"unconnected__U1_PadAB20_"} connectsTo={[".U1 > .pin72"]}/>
    {/* KiCad net: unconnected-(U1-PadAB21) */}
    <KiCadNet name={"unconnected__U1_PadAB21_"} connectsTo={[".U1 > .pin73"]}/>
    {/* KiCad net: unconnected-(U1-PadAB22) */}
    <KiCadNet name={"unconnected__U1_PadAB22_"} connectsTo={[".U1 > .pin74"]}/>
    {/* KiCad net: unconnected-(U1-PadAB24) */}
    <KiCadNet name={"unconnected__U1_PadAB24_"} connectsTo={[".U1 > .pin76"]}/>
    {/* KiCad net: unconnected-(U1-PadAB25) */}
    <KiCadNet name={"unconnected__U1_PadAB25_"} connectsTo={[".U1 > .pin77"]}/>
    {/* KiCad net: unconnected-(U1-PadAB26) */}
    <KiCadNet name={"unconnected__U1_PadAB26_"} connectsTo={[".U1 > .pin78"]}/>
    {/* KiCad net: DDR_BA1 */}
    <KiCadNet name={"DDR_BA1"} connectsTo={[".U1 > .pin79", ".U2 > .pin38"]}/>
    {/* KiCad net: DDR_A1 */}
    <KiCadNet name={"DDR_A1"} connectsTo={[".U1 > .pin80", ".U2 > .pin42"]}/>
    {/* KiCad net: /DDR_125_N */}
    <KiCadNet name={"_DDR_125_N"} connectsTo={[".U1 > .pin81", ".U5 > .pin4"]}/>
    {/* KiCad net: /DDR_125_P */}
    <KiCadNet name={"_DDR_125_P"} connectsTo={[".U1 > .pin82", ".U5 > .pin5"]}/>
    {/* KiCad net: unconnected-(U1-PadAC6) */}
    <KiCadNet name={"unconnected__U1_PadAC6_"} connectsTo={[".U1 > .pin84"]}/>
    {/* KiCad net: /B2B_TXD_C_N */}
    <KiCadNet name={"_B2B_TXD_C_N"} connectsTo={[".U1 > .pin85", ".C141 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadAC8) */}
    <KiCadNet name={"unconnected__U1_PadAC8_"} connectsTo={[".U1 > .pin86"]}/>
    {/* KiCad net: /B2B_TXC_C_P */}
    <KiCadNet name={"_B2B_TXC_C_P"} connectsTo={[".U1 > .pin87", ".C143 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadAC12) */}
    <KiCadNet name={"unconnected__U1_PadAC12_"} connectsTo={[".U1 > .pin90"]}/>
    {/* KiCad net: unconnected-(U1-PadAC14) */}
    <KiCadNet name={"unconnected__U1_PadAC14_"} connectsTo={[".U1 > .pin92"]}/>
    {/* KiCad net: unconnected-(U1-PadAC16) */}
    <KiCadNet name={"unconnected__U1_PadAC16_"} connectsTo={[".U1 > .pin94"]}/>
    {/* KiCad net: unconnected-(U1-PadAC17) */}
    <KiCadNet name={"unconnected__U1_PadAC17_"} connectsTo={[".U1 > .pin95"]}/>
    {/* KiCad net: unconnected-(U1-PadAC18) */}
    <KiCadNet name={"unconnected__U1_PadAC18_"} connectsTo={[".U1 > .pin96"]}/>
    {/* KiCad net: unconnected-(U1-PadAC19) */}
    <KiCadNet name={"unconnected__U1_PadAC19_"} connectsTo={[".U1 > .pin97"]}/>
    {/* KiCad net: unconnected-(U1-PadAC21) */}
    <KiCadNet name={"unconnected__U1_PadAC21_"} connectsTo={[".U1 > .pin99"]}/>
    {/* KiCad net: unconnected-(U1-PadAC22) */}
    <KiCadNet name={"unconnected__U1_PadAC22_"} connectsTo={[".U1 > .pin100"]}/>
    {/* KiCad net: unconnected-(U1-PadAC23) */}
    <KiCadNet name={"unconnected__U1_PadAC23_"} connectsTo={[".U1 > .pin101"]}/>
    {/* KiCad net: unconnected-(U1-PadAC24) */}
    <KiCadNet name={"unconnected__U1_PadAC24_"} connectsTo={[".U1 > .pin102"]}/>
    {/* KiCad net: unconnected-(U1-PadAC26) */}
    <KiCadNet name={"unconnected__U1_PadAC26_"} connectsTo={[".U1 > .pin104"]}/>
    {/* KiCad net: DDR_DQ4 */}
    <KiCadNet name={"DDR_DQ4"} connectsTo={[".U1 > .pin105", ".U2 > .pin19"]}/>
    {/* KiCad net: DDR_DQ2 */}
    <KiCadNet name={"DDR_DQ2"} connectsTo={[".U1 > .pin107", ".U2 > .pin22"]}/>
    {/* KiCad net: DDR_DQ3 */}
    <KiCadNet name={"DDR_DQ3"} connectsTo={[".U1 > .pin108", ".U2 > .pin21"]}/>
    {/* KiCad net: unconnected-(U1-PadAD5) */}
    <KiCadNet name={"unconnected__U1_PadAD5_"} connectsTo={[".U1 > .pin109"]}/>
    {/* KiCad net: unconnected-(U1-PadAD6) */}
    <KiCadNet name={"unconnected__U1_PadAD6_"} connectsTo={[".U1 > .pin110"]}/>
    {/* KiCad net: unconnected-(U1-PadAD8) */}
    <KiCadNet name={"unconnected__U1_PadAD8_"} connectsTo={[".U1 > .pin112"]}/>
    {/* KiCad net: /B2B_TXC_C_N */}
    <KiCadNet name={"_B2B_TXC_C_N"} connectsTo={[".U1 > .pin113", ".C142 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadAD10) */}
    <KiCadNet name={"unconnected__U1_PadAD10_"} connectsTo={[".U1 > .pin114"]}/>
    {/* KiCad net: unconnected-(U1-PadAD11) */}
    <KiCadNet name={"unconnected__U1_PadAD11_"} connectsTo={[".U1 > .pin115"]}/>
    {/* KiCad net: unconnected-(U1-PadAD14) */}
    <KiCadNet name={"unconnected__U1_PadAD14_"} connectsTo={[".U1 > .pin118"]}/>
    {/* KiCad net: unconnected-(U1-PadAD15) */}
    <KiCadNet name={"unconnected__U1_PadAD15_"} connectsTo={[".U1 > .pin119"]}/>
    {/* KiCad net: unconnected-(U1-PadAD16) */}
    <KiCadNet name={"unconnected__U1_PadAD16_"} connectsTo={[".U1 > .pin120"]}/>
    {/* KiCad net: unconnected-(U1-PadAD18) */}
    <KiCadNet name={"unconnected__U1_PadAD18_"} connectsTo={[".U1 > .pin122"]}/>
    {/* KiCad net: unconnected-(U1-PadAD19) */}
    <KiCadNet name={"unconnected__U1_PadAD19_"} connectsTo={[".U1 > .pin123"]}/>
    {/* KiCad net: unconnected-(U1-PadAD20) */}
    <KiCadNet name={"unconnected__U1_PadAD20_"} connectsTo={[".U1 > .pin124"]}/>
    {/* KiCad net: unconnected-(U1-PadAD21) */}
    <KiCadNet name={"unconnected__U1_PadAD21_"} connectsTo={[".U1 > .pin125"]}/>
    {/* KiCad net: unconnected-(U1-PadAD23) */}
    <KiCadNet name={"unconnected__U1_PadAD23_"} connectsTo={[".U1 > .pin127"]}/>
    {/* KiCad net: /LED2 */}
    <KiCadNet name={"_LED2"} connectsTo={[".U1 > .pin128", ".D9 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadAD25) */}
    <KiCadNet name={"unconnected__U1_PadAD25_"} connectsTo={[".U1 > .pin129"]}/>
    {/* KiCad net: unconnected-(U1-PadAD26) */}
    <KiCadNet name={"unconnected__U1_PadAD26_"} connectsTo={[".U1 > .pin130"]}/>
    {/* KiCad net: DDR_DQ1 */}
    <KiCadNet name={"DDR_DQ1"} connectsTo={[".U1 > .pin131", ".U2 > .pin14"]}/>
    {/* KiCad net: DDR_DQ6 */}
    <KiCadNet name={"DDR_DQ6"} connectsTo={[".U1 > .pin132", ".U2 > .pin7"]}/>
    {/* KiCad net: DDR_DM */}
    <KiCadNet name={"DDR_DM"} connectsTo={[".U1 > .pin133", ".U2 > .pin9"]}/>
    {/* KiCad net: DDR_DQ0 */}
    <KiCadNet name={"DDR_DQ0"} connectsTo={[".U1 > .pin135", ".U2 > .pin17"]}/>
    {/* KiCad net: DDR_DQ7 */}
    <KiCadNet name={"DDR_DQ7"} connectsTo={[".U1 > .pin136", ".U2 > .pin12"]}/>
    {/* KiCad net: unconnected-(U1-PadAE7) */}
    <KiCadNet name={"unconnected__U1_PadAE7_"} connectsTo={[".U1 > .pin137"]}/>
    {/* KiCad net: unconnected-(U1-PadAE8) */}
    <KiCadNet name={"unconnected__U1_PadAE8_"} connectsTo={[".U1 > .pin138"]}/>
    {/* KiCad net: unconnected-(U1-PadAE10) */}
    <KiCadNet name={"unconnected__U1_PadAE10_"} connectsTo={[".U1 > .pin140"]}/>
    {/* KiCad net: unconnected-(U1-PadAE11) */}
    <KiCadNet name={"unconnected__U1_PadAE11_"} connectsTo={[".U1 > .pin141"]}/>
    {/* KiCad net: unconnected-(U1-PadAE12) */}
    <KiCadNet name={"unconnected__U1_PadAE12_"} connectsTo={[".U1 > .pin142"]}/>
    {/* KiCad net: unconnected-(U1-PadAE13) */}
    <KiCadNet name={"unconnected__U1_PadAE13_"} connectsTo={[".U1 > .pin143"]}/>
    {/* KiCad net: unconnected-(U1-PadAE15) */}
    <KiCadNet name={"unconnected__U1_PadAE15_"} connectsTo={[".U1 > .pin145"]}/>
    {/* KiCad net: unconnected-(U1-PadAE16) */}
    <KiCadNet name={"unconnected__U1_PadAE16_"} connectsTo={[".U1 > .pin146"]}/>
    {/* KiCad net: unconnected-(U1-PadAE17) */}
    <KiCadNet name={"unconnected__U1_PadAE17_"} connectsTo={[".U1 > .pin147"]}/>
    {/* KiCad net: unconnected-(U1-PadAE18) */}
    <KiCadNet name={"unconnected__U1_PadAE18_"} connectsTo={[".U1 > .pin148"]}/>
    {/* KiCad net: unconnected-(U1-PadAE20) */}
    <KiCadNet name={"unconnected__U1_PadAE20_"} connectsTo={[".U1 > .pin150"]}/>
    {/* KiCad net: unconnected-(U1-PadAE21) */}
    <KiCadNet name={"unconnected__U1_PadAE21_"} connectsTo={[".U1 > .pin151"]}/>
    {/* KiCad net: /LED4 */}
    <KiCadNet name={"_LED4"} connectsTo={[".U1 > .pin153", ".D11 > .pin2"]}/>
    {/* KiCad net: /LED0 */}
    <KiCadNet name={"_LED0"} connectsTo={[".U1 > .pin155", ".D7 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadAE26) */}
    <KiCadNet name={"unconnected__U1_PadAE26_"} connectsTo={[".U1 > .pin156"]}/>
    {/* KiCad net: unconnected-(U1-PadAF2) */}
    <KiCadNet name={"unconnected__U1_PadAF2_"} connectsTo={[".U1 > .pin158"]}/>
    {/* KiCad net: DDR_DQ5 */}
    <KiCadNet name={"DDR_DQ5"} connectsTo={[".U1 > .pin159", ".U2 > .pin24"]}/>
    {/* KiCad net: DDR_DQS_N */}
    <KiCadNet name={"DDR_DQS_N"} connectsTo={[".U1 > .pin160", ".U2 > .pin5"]}/>
    {/* KiCad net: DDR_DQS_P */}
    <KiCadNet name={"DDR_DQS_P"} connectsTo={[".U1 > .pin161", ".U2 > .pin10"]}/>
    {/* KiCad net: unconnected-(U1-PadAF7) */}
    <KiCadNet name={"unconnected__U1_PadAF7_"} connectsTo={[".U1 > .pin163"]}/>
    {/* KiCad net: unconnected-(U1-PadAF8) */}
    <KiCadNet name={"unconnected__U1_PadAF8_"} connectsTo={[".U1 > .pin164"]}/>
    {/* KiCad net: unconnected-(U1-PadAF9) */}
    <KiCadNet name={"unconnected__U1_PadAF9_"} connectsTo={[".U1 > .pin165"]}/>
    {/* KiCad net: unconnected-(U1-PadAF10) */}
    <KiCadNet name={"unconnected__U1_PadAF10_"} connectsTo={[".U1 > .pin166"]}/>
    {/* KiCad net: unconnected-(U1-PadAF12) */}
    <KiCadNet name={"unconnected__U1_PadAF12_"} connectsTo={[".U1 > .pin168"]}/>
    {/* KiCad net: unconnected-(U1-PadAF13) */}
    <KiCadNet name={"unconnected__U1_PadAF13_"} connectsTo={[".U1 > .pin169"]}/>
    {/* KiCad net: unconnected-(U1-PadAF14) */}
    <KiCadNet name={"unconnected__U1_PadAF14_"} connectsTo={[".U1 > .pin170"]}/>
    {/* KiCad net: unconnected-(U1-PadAF15) */}
    <KiCadNet name={"unconnected__U1_PadAF15_"} connectsTo={[".U1 > .pin171"]}/>
    {/* KiCad net: unconnected-(U1-PadAF17) */}
    <KiCadNet name={"unconnected__U1_PadAF17_"} connectsTo={[".U1 > .pin173"]}/>
    {/* KiCad net: unconnected-(U1-PadAF18) */}
    <KiCadNet name={"unconnected__U1_PadAF18_"} connectsTo={[".U1 > .pin174"]}/>
    {/* KiCad net: unconnected-(U1-PadAF19) */}
    <KiCadNet name={"unconnected__U1_PadAF19_"} connectsTo={[".U1 > .pin175"]}/>
    {/* KiCad net: unconnected-(U1-PadAF20) */}
    <KiCadNet name={"unconnected__U1_PadAF20_"} connectsTo={[".U1 > .pin176"]}/>
    {/* KiCad net: /LED7 */}
    <KiCadNet name={"_LED7"} connectsTo={[".U1 > .pin178", ".D14 > .pin2"]}/>
    {/* KiCad net: /LED5 */}
    <KiCadNet name={"_LED5"} connectsTo={[".U1 > .pin179", ".D12 > .pin2"]}/>
    {/* KiCad net: /LED1 */}
    <KiCadNet name={"_LED1"} connectsTo={[".U1 > .pin181", ".D8 > .pin2"]}/>
    {/* KiCad net: PCIE_TX1_N */}
    <KiCadNet name={"PCIE_TX1_N"} connectsTo={[".U1 > .pin183", ".C103 > .pin2"]}/>
    {/* KiCad net: PCIE_TX1_P */}
    <KiCadNet name={"PCIE_TX1_P"} connectsTo={[".U1 > .pin184", ".C102 > .pin2"]}/>
    {/* KiCad net: /MGTAVTT */}
    <KiCadNet name={"_MGTAVTT"} connectsTo={[".U1 > .pin185", ".U1 > .pin210", ".U1 > .pin237", ".U1 > .pin314", ".U1 > .pin341", ".U1 > .pin418", ".U1 > .pin445", ".U1 > .pin447", ".U8 > .pin22", ".U8 > .pin23", ".C15 > .pin1", ".NT7 > .pin2", ".R1 > .pin1", ".C25 > .pin1"]}/>
    {/* KiCad net: PCIE_RX0_N */}
    <KiCadNet name={"PCIE_RX0_N"} connectsTo={[".U1 > .pin187", ".J1 > .pin64"]}/>
    {/* KiCad net: PCIE_RX0_P */}
    <KiCadNet name={"PCIE_RX0_P"} connectsTo={[".U1 > .pin188", ".J1 > .pin63"]}/>
    {/* KiCad net: unconnected-(U1-PadB9) */}
    <KiCadNet name={"unconnected__U1_PadB9_"} connectsTo={[".U1 > .pin191"]}/>
    {/* KiCad net: unconnected-(U1-PadB10) */}
    <KiCadNet name={"unconnected__U1_PadB10_"} connectsTo={[".U1 > .pin192"]}/>
    {/* KiCad net: unconnected-(U1-PadB11) */}
    <KiCadNet name={"unconnected__U1_PadB11_"} connectsTo={[".U1 > .pin193"]}/>
    {/* KiCad net: unconnected-(U1-PadB12) */}
    <KiCadNet name={"unconnected__U1_PadB12_"} connectsTo={[".U1 > .pin194"]}/>
    {/* KiCad net: unconnected-(U1-PadB14) */}
    <KiCadNet name={"unconnected__U1_PadB14_"} connectsTo={[".U1 > .pin196"]}/>
    {/* KiCad net: unconnected-(U1-PadB15) */}
    <KiCadNet name={"unconnected__U1_PadB15_"} connectsTo={[".U1 > .pin197"]}/>
    {/* KiCad net: unconnected-(U1-PadB16) */}
    <KiCadNet name={"unconnected__U1_PadB16_"} connectsTo={[".U1 > .pin198"]}/>
    {/* KiCad net: unconnected-(U1-PadB17) */}
    <KiCadNet name={"unconnected__U1_PadB17_"} connectsTo={[".U1 > .pin199"]}/>
    {/* KiCad net: unconnected-(U1-PadB19) */}
    <KiCadNet name={"unconnected__U1_PadB19_"} connectsTo={[".U1 > .pin201"]}/>
    {/* KiCad net: unconnected-(U1-PadB20) */}
    <KiCadNet name={"unconnected__U1_PadB20_"} connectsTo={[".U1 > .pin202"]}/>
    {/* KiCad net: unconnected-(U1-PadB21) */}
    <KiCadNet name={"unconnected__U1_PadB21_"} connectsTo={[".U1 > .pin203"]}/>
    {/* KiCad net: /SPI_D2 */}
    <KiCadNet name={"_SPI_D2"} connectsTo={[".U1 > .pin204", ".U3 > .pin3", ".R7 > .pin2"]}/>
    {/* KiCad net: /SPI_D0 */}
    <KiCadNet name={"_SPI_D0"} connectsTo={[".U1 > .pin206", ".U3 > .pin5"]}/>
    {/* KiCad net: Net-(R5-Pad2) */}
    <KiCadNet name={"Net__R5_Pad2_"} connectsTo={[".U1 > .pin207", ".R5 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadB26) */}
    <KiCadNet name={"unconnected__U1_PadB26_"} connectsTo={[".U1 > .pin208"]}/>
    {/* KiCad net: PCIE_RX1_N */}
    <KiCadNet name={"PCIE_RX1_N"} connectsTo={[".U1 > .pin211", ".J1 > .pin69"]}/>
    {/* KiCad net: PCIE_RX1_P */}
    <KiCadNet name={"PCIE_RX1_P"} connectsTo={[".U1 > .pin212", ".J1 > .pin68"]}/>
    {/* KiCad net: /MGTAVCC */}
    <KiCadNet name={"_MGTAVCC"} connectsTo={[".U1 > .pin214", ".U1 > .pin266", ".U1 > .pin318", ".U1 > .pin370", ".U1 > .pin422", ".U8 > .pin1", ".U8 > .pin32", ".C12 > .pin1", ".NT6 > .pin2", ".C21 > .pin1"]}/>
    {/* KiCad net: /SPI_CLK */}
    <KiCadNet name={"_SPI_CLK"} connectsTo={[".U1 > .pin216", ".U3 > .pin6"]}/>
    {/* KiCad net: unconnected-(U1-PadC9) */}
    <KiCadNet name={"unconnected__U1_PadC9_"} connectsTo={[".U1 > .pin217"]}/>
    {/* KiCad net: unconnected-(U1-PadC11) */}
    <KiCadNet name={"unconnected__U1_PadC11_"} connectsTo={[".U1 > .pin219"]}/>
    {/* KiCad net: unconnected-(U1-PadC12) */}
    <KiCadNet name={"unconnected__U1_PadC12_"} connectsTo={[".U1 > .pin220"]}/>
    {/* KiCad net: unconnected-(U1-PadC13) */}
    <KiCadNet name={"unconnected__U1_PadC13_"} connectsTo={[".U1 > .pin221"]}/>
    {/* KiCad net: unconnected-(U1-PadC14) */}
    <KiCadNet name={"unconnected__U1_PadC14_"} connectsTo={[".U1 > .pin222"]}/>
    {/* KiCad net: unconnected-(U1-PadC16) */}
    <KiCadNet name={"unconnected__U1_PadC16_"} connectsTo={[".U1 > .pin224"]}/>
    {/* KiCad net: unconnected-(U1-PadC17) */}
    <KiCadNet name={"unconnected__U1_PadC17_"} connectsTo={[".U1 > .pin225"]}/>
    {/* KiCad net: unconnected-(U1-PadC18) */}
    <KiCadNet name={"unconnected__U1_PadC18_"} connectsTo={[".U1 > .pin226"]}/>
    {/* KiCad net: unconnected-(U1-PadC19) */}
    <KiCadNet name={"unconnected__U1_PadC19_"} connectsTo={[".U1 > .pin227"]}/>
    {/* KiCad net: unconnected-(U1-PadC21) */}
    <KiCadNet name={"unconnected__U1_PadC21_"} connectsTo={[".U1 > .pin229"]}/>
    {/* KiCad net: unconnected-(U1-PadC22) */}
    <KiCadNet name={"unconnected__U1_PadC22_"} connectsTo={[".U1 > .pin230"]}/>
    {/* KiCad net: /SPI_CS */}
    <KiCadNet name={"_SPI_CS"} connectsTo={[".U1 > .pin231", ".U3 > .pin1", ".R6 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadC24) */}
    <KiCadNet name={"unconnected__U1_PadC24_"} connectsTo={[".U1 > .pin232"]}/>
    {/* KiCad net: unconnected-(U1-PadC26) */}
    <KiCadNet name={"unconnected__U1_PadC26_"} connectsTo={[".U1 > .pin234"]}/>
    {/* KiCad net: PCIE_TX2_N */}
    <KiCadNet name={"PCIE_TX2_N"} connectsTo={[".U1 > .pin235", ".C105 > .pin2"]}/>
    {/* KiCad net: PCIE_TX2_P */}
    <KiCadNet name={"PCIE_TX2_P"} connectsTo={[".U1 > .pin236", ".C104 > .pin2"]}/>
    {/* KiCad net: REFCLK_N */}
    <KiCadNet name={"REFCLK_N"} connectsTo={[".U1 > .pin239", ".C121 > .pin1"]}/>
    {/* KiCad net: REFCLK_P */}
    <KiCadNet name={"REFCLK_P"} connectsTo={[".U1 > .pin240", ".C120 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadD8) */}
    <KiCadNet name={"unconnected__U1_PadD8_"} connectsTo={[".U1 > .pin242"]}/>
    {/* KiCad net: unconnected-(U1-PadD9) */}
    <KiCadNet name={"unconnected__U1_PadD9_"} connectsTo={[".U1 > .pin243"]}/>
    {/* KiCad net: unconnected-(U1-PadD10) */}
    <KiCadNet name={"unconnected__U1_PadD10_"} connectsTo={[".U1 > .pin244"]}/>
    {/* KiCad net: unconnected-(U1-PadD11) */}
    <KiCadNet name={"unconnected__U1_PadD11_"} connectsTo={[".U1 > .pin245"]}/>
    {/* KiCad net: unconnected-(U1-PadD13) */}
    <KiCadNet name={"unconnected__U1_PadD13_"} connectsTo={[".U1 > .pin247"]}/>
    {/* KiCad net: unconnected-(U1-PadD14) */}
    <KiCadNet name={"unconnected__U1_PadD14_"} connectsTo={[".U1 > .pin248"]}/>
    {/* KiCad net: unconnected-(U1-PadD15) */}
    <KiCadNet name={"unconnected__U1_PadD15_"} connectsTo={[".U1 > .pin249"]}/>
    {/* KiCad net: unconnected-(U1-PadD16) */}
    <KiCadNet name={"unconnected__U1_PadD16_"} connectsTo={[".U1 > .pin250"]}/>
    {/* KiCad net: unconnected-(U1-PadD18) */}
    <KiCadNet name={"unconnected__U1_PadD18_"} connectsTo={[".U1 > .pin252"]}/>
    {/* KiCad net: unconnected-(U1-PadD19) */}
    <KiCadNet name={"unconnected__U1_PadD19_"} connectsTo={[".U1 > .pin253"]}/>
    {/* KiCad net: unconnected-(U1-PadD20) */}
    <KiCadNet name={"unconnected__U1_PadD20_"} connectsTo={[".U1 > .pin254"]}/>
    {/* KiCad net: unconnected-(U1-PadD21) */}
    <KiCadNet name={"unconnected__U1_PadD21_"} connectsTo={[".U1 > .pin255"]}/>
    {/* KiCad net: unconnected-(U1-PadD23) */}
    <KiCadNet name={"unconnected__U1_PadD23_"} connectsTo={[".U1 > .pin257"]}/>
    {/* KiCad net: unconnected-(U1-PadD24) */}
    <KiCadNet name={"unconnected__U1_PadD24_"} connectsTo={[".U1 > .pin258"]}/>
    {/* KiCad net: unconnected-(U1-PadD25) */}
    <KiCadNet name={"unconnected__U1_PadD25_"} connectsTo={[".U1 > .pin259"]}/>
    {/* KiCad net: unconnected-(U1-PadD26) */}
    <KiCadNet name={"unconnected__U1_PadD26_"} connectsTo={[".U1 > .pin260"]}/>
    {/* KiCad net: PCIE_RX2_N */}
    <KiCadNet name={"PCIE_RX2_N"} connectsTo={[".U1 > .pin263", ".J1 > .pin73"]}/>
    {/* KiCad net: PCIE_RX2_P */}
    <KiCadNet name={"PCIE_RX2_P"} connectsTo={[".U1 > .pin264", ".J1 > .pin72"]}/>
    {/* KiCad net: unconnected-(U1-PadE10) */}
    <KiCadNet name={"unconnected__U1_PadE10_"} connectsTo={[".U1 > .pin270"]}/>
    {/* KiCad net: unconnected-(U1-PadE11) */}
    <KiCadNet name={"unconnected__U1_PadE11_"} connectsTo={[".U1 > .pin271"]}/>
    {/* KiCad net: unconnected-(U1-PadE12) */}
    <KiCadNet name={"unconnected__U1_PadE12_"} connectsTo={[".U1 > .pin272"]}/>
    {/* KiCad net: unconnected-(U1-PadE13) */}
    <KiCadNet name={"unconnected__U1_PadE13_"} connectsTo={[".U1 > .pin273"]}/>
    {/* KiCad net: unconnected-(U1-PadE15) */}
    <KiCadNet name={"unconnected__U1_PadE15_"} connectsTo={[".U1 > .pin275"]}/>
    {/* KiCad net: unconnected-(U1-PadE16) */}
    <KiCadNet name={"unconnected__U1_PadE16_"} connectsTo={[".U1 > .pin276"]}/>
    {/* KiCad net: unconnected-(U1-PadE17) */}
    <KiCadNet name={"unconnected__U1_PadE17_"} connectsTo={[".U1 > .pin277"]}/>
    {/* KiCad net: unconnected-(U1-PadE18) */}
    <KiCadNet name={"unconnected__U1_PadE18_"} connectsTo={[".U1 > .pin278"]}/>
    {/* KiCad net: unconnected-(U1-PadE20) */}
    <KiCadNet name={"unconnected__U1_PadE20_"} connectsTo={[".U1 > .pin280"]}/>
    {/* KiCad net: unconnected-(U1-PadE21) */}
    <KiCadNet name={"unconnected__U1_PadE21_"} connectsTo={[".U1 > .pin281"]}/>
    {/* KiCad net: unconnected-(U1-PadE22) */}
    <KiCadNet name={"unconnected__U1_PadE22_"} connectsTo={[".U1 > .pin282"]}/>
    {/* KiCad net: unconnected-(U1-PadE23) */}
    <KiCadNet name={"unconnected__U1_PadE23_"} connectsTo={[".U1 > .pin283"]}/>
    {/* KiCad net: unconnected-(U1-PadE25) */}
    <KiCadNet name={"unconnected__U1_PadE25_"} connectsTo={[".U1 > .pin285"]}/>
    {/* KiCad net: unconnected-(U1-PadE26) */}
    <KiCadNet name={"unconnected__U1_PadE26_"} connectsTo={[".U1 > .pin286"]}/>
    {/* KiCad net: PCIE_TX3_N */}
    <KiCadNet name={"PCIE_TX3_N"} connectsTo={[".U1 > .pin287", ".C107 > .pin2"]}/>
    {/* KiCad net: PCIE_TX3_P */}
    <KiCadNet name={"PCIE_TX3_P"} connectsTo={[".U1 > .pin288", ".C106 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadF5) */}
    <KiCadNet name={"unconnected__U1_PadF5_"} connectsTo={[".U1 > .pin291"]}/>
    {/* KiCad net: unconnected-(U1-PadF6) */}
    <KiCadNet name={"unconnected__U1_PadF6_"} connectsTo={[".U1 > .pin292"]}/>
    {/* KiCad net: unconnected-(U1-PadF8) */}
    <KiCadNet name={"unconnected__U1_PadF8_"} connectsTo={[".U1 > .pin294"]}/>
    {/* KiCad net: unconnected-(U1-PadF9) */}
    <KiCadNet name={"unconnected__U1_PadF9_"} connectsTo={[".U1 > .pin295"]}/>
    {/* KiCad net: unconnected-(U1-PadF10) */}
    <KiCadNet name={"unconnected__U1_PadF10_"} connectsTo={[".U1 > .pin296"]}/>
    {/* KiCad net: unconnected-(U1-PadF12) */}
    <KiCadNet name={"unconnected__U1_PadF12_"} connectsTo={[".U1 > .pin298"]}/>
    {/* KiCad net: unconnected-(U1-PadF13) */}
    <KiCadNet name={"unconnected__U1_PadF13_"} connectsTo={[".U1 > .pin299"]}/>
    {/* KiCad net: unconnected-(U1-PadF14) */}
    <KiCadNet name={"unconnected__U1_PadF14_"} connectsTo={[".U1 > .pin300"]}/>
    {/* KiCad net: unconnected-(U1-PadF15) */}
    <KiCadNet name={"unconnected__U1_PadF15_"} connectsTo={[".U1 > .pin301"]}/>
    {/* KiCad net: unconnected-(U1-PadF17) */}
    <KiCadNet name={"unconnected__U1_PadF17_"} connectsTo={[".U1 > .pin303"]}/>
    {/* KiCad net: unconnected-(U1-PadF18) */}
    <KiCadNet name={"unconnected__U1_PadF18_"} connectsTo={[".U1 > .pin304"]}/>
    {/* KiCad net: unconnected-(U1-PadF19) */}
    <KiCadNet name={"unconnected__U1_PadF19_"} connectsTo={[".U1 > .pin305"]}/>
    {/* KiCad net: unconnected-(U1-PadF20) */}
    <KiCadNet name={"unconnected__U1_PadF20_"} connectsTo={[".U1 > .pin306"]}/>
    {/* KiCad net: unconnected-(U1-PadF22) */}
    <KiCadNet name={"unconnected__U1_PadF22_"} connectsTo={[".U1 > .pin308"]}/>
    {/* KiCad net: unconnected-(U1-PadF23) */}
    <KiCadNet name={"unconnected__U1_PadF23_"} connectsTo={[".U1 > .pin309"]}/>
    {/* KiCad net: unconnected-(U1-PadF24) */}
    <KiCadNet name={"unconnected__U1_PadF24_"} connectsTo={[".U1 > .pin310"]}/>
    {/* KiCad net: unconnected-(U1-PadF25) */}
    <KiCadNet name={"unconnected__U1_PadF25_"} connectsTo={[".U1 > .pin311"]}/>
    {/* KiCad net: PCIE_RX3_N */}
    <KiCadNet name={"PCIE_RX3_N"} connectsTo={[".U1 > .pin315", ".J1 > .pin77"]}/>
    {/* KiCad net: PCIE_RX3_P */}
    <KiCadNet name={"PCIE_RX3_P"} connectsTo={[".U1 > .pin316", ".J1 > .pin76"]}/>
    {/* KiCad net: /INIT */}
    <KiCadNet name={"_INIT"} connectsTo={[".U1 > .pin319", ".R3 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadG9) */}
    <KiCadNet name={"unconnected__U1_PadG9_"} connectsTo={[".U1 > .pin321"]}/>
    {/* KiCad net: unconnected-(U1-PadG10) */}
    <KiCadNet name={"unconnected__U1_PadG10_"} connectsTo={[".U1 > .pin322"]}/>
    {/* KiCad net: unconnected-(U1-PadG11) */}
    <KiCadNet name={"unconnected__U1_PadG11_"} connectsTo={[".U1 > .pin323"]}/>
    {/* KiCad net: unconnected-(U1-PadG12) */}
    <KiCadNet name={"unconnected__U1_PadG12_"} connectsTo={[".U1 > .pin324"]}/>
    {/* KiCad net: unconnected-(U1-PadG14) */}
    <KiCadNet name={"unconnected__U1_PadG14_"} connectsTo={[".U1 > .pin326"]}/>
    {/* KiCad net: unconnected-(U1-PadG15) */}
    <KiCadNet name={"unconnected__U1_PadG15_"} connectsTo={[".U1 > .pin327"]}/>
    {/* KiCad net: unconnected-(U1-PadG16) */}
    <KiCadNet name={"unconnected__U1_PadG16_"} connectsTo={[".U1 > .pin328"]}/>
    {/* KiCad net: unconnected-(U1-PadG17) */}
    <KiCadNet name={"unconnected__U1_PadG17_"} connectsTo={[".U1 > .pin329"]}/>
    {/* KiCad net: unconnected-(U1-PadG19) */}
    <KiCadNet name={"unconnected__U1_PadG19_"} connectsTo={[".U1 > .pin331"]}/>
    {/* KiCad net: unconnected-(U1-PadG20) */}
    <KiCadNet name={"unconnected__U1_PadG20_"} connectsTo={[".U1 > .pin332"]}/>
    {/* KiCad net: unconnected-(U1-PadG21) */}
    <KiCadNet name={"unconnected__U1_PadG21_"} connectsTo={[".U1 > .pin333"]}/>
    {/* KiCad net: unconnected-(U1-PadG22) */}
    <KiCadNet name={"unconnected__U1_PadG22_"} connectsTo={[".U1 > .pin334"]}/>
    {/* KiCad net: unconnected-(U1-PadG24) */}
    <KiCadNet name={"unconnected__U1_PadG24_"} connectsTo={[".U1 > .pin336"]}/>
    {/* KiCad net: unconnected-(U1-PadG25) */}
    <KiCadNet name={"unconnected__U1_PadG25_"} connectsTo={[".U1 > .pin337"]}/>
    {/* KiCad net: PCIE_TX4_N */}
    <KiCadNet name={"PCIE_TX4_N"} connectsTo={[".U1 > .pin339", ".C109 > .pin2"]}/>
    {/* KiCad net: PCIE_TX4_P */}
    <KiCadNet name={"PCIE_TX4_P"} connectsTo={[".U1 > .pin340", ".C108 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadH5) */}
    <KiCadNet name={"unconnected__U1_PadH5_"} connectsTo={[".U1 > .pin343"]}/>
    {/* KiCad net: unconnected-(U1-PadH6) */}
    <KiCadNet name={"unconnected__U1_PadH6_"} connectsTo={[".U1 > .pin344"]}/>
    {/* KiCad net: unconnected-(U1-PadH8) */}
    <KiCadNet name={"unconnected__U1_PadH8_"} connectsTo={[".U1 > .pin346"]}/>
    {/* KiCad net: unconnected-(U1-PadH9) */}
    <KiCadNet name={"unconnected__U1_PadH9_"} connectsTo={[".U1 > .pin347"]}/>
    {/* KiCad net: unconnected-(U1-PadH11) */}
    <KiCadNet name={"unconnected__U1_PadH11_"} connectsTo={[".U1 > .pin349"]}/>
    {/* KiCad net: unconnected-(U1-PadH12) */}
    <KiCadNet name={"unconnected__U1_PadH12_"} connectsTo={[".U1 > .pin350"]}/>
    {/* KiCad net: unconnected-(U1-PadH13) */}
    <KiCadNet name={"unconnected__U1_PadH13_"} connectsTo={[".U1 > .pin351"]}/>
    {/* KiCad net: unconnected-(U1-PadH14) */}
    <KiCadNet name={"unconnected__U1_PadH14_"} connectsTo={[".U1 > .pin352"]}/>
    {/* KiCad net: unconnected-(U1-PadH16) */}
    <KiCadNet name={"unconnected__U1_PadH16_"} connectsTo={[".U1 > .pin354"]}/>
    {/* KiCad net: unconnected-(U1-PadH17) */}
    <KiCadNet name={"unconnected__U1_PadH17_"} connectsTo={[".U1 > .pin355"]}/>
    {/* KiCad net: unconnected-(U1-PadH18) */}
    <KiCadNet name={"unconnected__U1_PadH18_"} connectsTo={[".U1 > .pin356"]}/>
    {/* KiCad net: unconnected-(U1-PadH19) */}
    <KiCadNet name={"unconnected__U1_PadH19_"} connectsTo={[".U1 > .pin357"]}/>
    {/* KiCad net: unconnected-(U1-PadH21) */}
    <KiCadNet name={"unconnected__U1_PadH21_"} connectsTo={[".U1 > .pin359"]}/>
    {/* KiCad net: unconnected-(U1-PadH22) */}
    <KiCadNet name={"unconnected__U1_PadH22_"} connectsTo={[".U1 > .pin360"]}/>
    {/* KiCad net: unconnected-(U1-PadH23) */}
    <KiCadNet name={"unconnected__U1_PadH23_"} connectsTo={[".U1 > .pin361"]}/>
    {/* KiCad net: unconnected-(U1-PadH24) */}
    <KiCadNet name={"unconnected__U1_PadH24_"} connectsTo={[".U1 > .pin362"]}/>
    {/* KiCad net: /UART_TX */}
    <KiCadNet name={"_UART_TX"} connectsTo={[".U1 > .pin364", ".J5 > .pin1", ".R9 > .pin2"]}/>
    {/* KiCad net: PCIE_RX4_N */}
    <KiCadNet name={"PCIE_RX4_N"} connectsTo={[".U1 > .pin367", ".J1 > .pin83"]}/>
    {/* KiCad net: PCIE_RX4_P */}
    <KiCadNet name={"PCIE_RX4_P"} connectsTo={[".U1 > .pin368", ".J1 > .pin82"]}/>
    {/* KiCad net: /DONE */}
    <KiCadNet name={"_DONE"} connectsTo={[".U1 > .pin371", ".R2 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadJ8) */}
    <KiCadNet name={"unconnected__U1_PadJ8_"} connectsTo={[".U1 > .pin372"]}/>
    {/* KiCad net: +1V0 */}
    <KiCadNet name={"_1V0"} connectsTo={[".U1 > .pin373", ".U1 > .pin398", ".U1 > .pin400", ".U1 > .pin402", ".U1 > .pin404", ".U1 > .pin425", ".U1 > .pin429", ".U1 > .pin431", ".U1 > .pin450", ".U1 > .pin456", ".U1 > .pin477", ".U1 > .pin481", ".U1 > .pin483", ".U1 > .pin508", ".U1 > .pin533", ".U1 > .pin535", ".U1 > .pin558", ".U1 > .pin560", ".U1 > .pin585", ".U1 > .pin587", ".C5 > .pin1", ".U9 > .pin1", ".U9 > .pin6", ".C6 > .pin1", ".C44 > .pin1", ".C30 > .pin1", ".NT2 > .pin2", ".C32 > .pin1", ".C7 > .pin1", ".C10 > .pin1", ".C9 > .pin1", ".C8 > .pin1", ".C43 > .pin1", ".C4 > .pin1", ".C46 > .pin1", ".C27 > .pin1", ".C47 > .pin1", ".C48 > .pin1", ".C42 > .pin1", ".C45 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadJ10) */}
    <KiCadNet name={"unconnected__U1_PadJ10_"} connectsTo={[".U1 > .pin374"]}/>
    {/* KiCad net: unconnected-(U1-PadJ11) */}
    <KiCadNet name={"unconnected__U1_PadJ11_"} connectsTo={[".U1 > .pin375"]}/>
    {/* KiCad net: unconnected-(U1-PadJ13) */}
    <KiCadNet name={"unconnected__U1_PadJ13_"} connectsTo={[".U1 > .pin377"]}/>
    {/* KiCad net: unconnected-(U1-PadJ14) */}
    <KiCadNet name={"unconnected__U1_PadJ14_"} connectsTo={[".U1 > .pin378"]}/>
    {/* KiCad net: unconnected-(U1-PadJ15) */}
    <KiCadNet name={"unconnected__U1_PadJ15_"} connectsTo={[".U1 > .pin379"]}/>
    {/* KiCad net: unconnected-(U1-PadJ16) */}
    <KiCadNet name={"unconnected__U1_PadJ16_"} connectsTo={[".U1 > .pin380"]}/>
    {/* KiCad net: unconnected-(U1-PadJ18) */}
    <KiCadNet name={"unconnected__U1_PadJ18_"} connectsTo={[".U1 > .pin382"]}/>
    {/* KiCad net: unconnected-(U1-PadJ19) */}
    <KiCadNet name={"unconnected__U1_PadJ19_"} connectsTo={[".U1 > .pin383"]}/>
    {/* KiCad net: unconnected-(U1-PadJ20) */}
    <KiCadNet name={"unconnected__U1_PadJ20_"} connectsTo={[".U1 > .pin384"]}/>
    {/* KiCad net: unconnected-(U1-PadJ21) */}
    <KiCadNet name={"unconnected__U1_PadJ21_"} connectsTo={[".U1 > .pin385"]}/>
    {/* KiCad net: unconnected-(U1-PadJ23) */}
    <KiCadNet name={"unconnected__U1_PadJ23_"} connectsTo={[".U1 > .pin387"]}/>
    {/* KiCad net: unconnected-(U1-PadJ24) */}
    <KiCadNet name={"unconnected__U1_PadJ24_"} connectsTo={[".U1 > .pin388"]}/>
    {/* KiCad net: unconnected-(U1-PadJ25) */}
    <KiCadNet name={"unconnected__U1_PadJ25_"} connectsTo={[".U1 > .pin389"]}/>
    {/* KiCad net: unconnected-(U1-PadJ26) */}
    <KiCadNet name={"unconnected__U1_PadJ26_"} connectsTo={[".U1 > .pin390"]}/>
    {/* KiCad net: PCIE_TX5_N */}
    <KiCadNet name={"PCIE_TX5_N"} connectsTo={[".U1 > .pin391", ".C111 > .pin2"]}/>
    {/* KiCad net: PCIE_TX5_P */}
    <KiCadNet name={"PCIE_TX5_P"} connectsTo={[".U1 > .pin392", ".C110 > .pin2"]}/>
    {/* KiCad net: /GTX_125_N */}
    <KiCadNet name={"_GTX_125_N"} connectsTo={[".U1 > .pin395", ".C130 > .pin2"]}/>
    {/* KiCad net: /GTX_125_P */}
    <KiCadNet name={"_GTX_125_P"} connectsTo={[".U1 > .pin396", ".C131 > .pin2"]}/>
    {/* KiCad net: unconnected-(U1-PadK15) */}
    <KiCadNet name={"unconnected__U1_PadK15_"} connectsTo={[".U1 > .pin405"]}/>
    {/* KiCad net: unconnected-(U1-PadK16) */}
    <KiCadNet name={"unconnected__U1_PadK16_"} connectsTo={[".U1 > .pin406"]}/>
    {/* KiCad net: unconnected-(U1-PadK17) */}
    <KiCadNet name={"unconnected__U1_PadK17_"} connectsTo={[".U1 > .pin407"]}/>
    {/* KiCad net: unconnected-(U1-PadK18) */}
    <KiCadNet name={"unconnected__U1_PadK18_"} connectsTo={[".U1 > .pin408"]}/>
    {/* KiCad net: unconnected-(U1-PadK20) */}
    <KiCadNet name={"unconnected__U1_PadK20_"} connectsTo={[".U1 > .pin410"]}/>
    {/* KiCad net: unconnected-(U1-PadK21) */}
    <KiCadNet name={"unconnected__U1_PadK21_"} connectsTo={[".U1 > .pin411"]}/>
    {/* KiCad net: unconnected-(U1-PadK22) */}
    <KiCadNet name={"unconnected__U1_PadK22_"} connectsTo={[".U1 > .pin412"]}/>
    {/* KiCad net: unconnected-(U1-PadK23) */}
    <KiCadNet name={"unconnected__U1_PadK23_"} connectsTo={[".U1 > .pin413"]}/>
    {/* KiCad net: unconnected-(U1-PadK25) */}
    <KiCadNet name={"unconnected__U1_PadK25_"} connectsTo={[".U1 > .pin415"]}/>
    {/* KiCad net: unconnected-(U1-PadK26) */}
    <KiCadNet name={"unconnected__U1_PadK26_"} connectsTo={[".U1 > .pin416"]}/>
    {/* KiCad net: PCIE_RX5_N */}
    <KiCadNet name={"PCIE_RX5_N"} connectsTo={[".U1 > .pin419", ".J1 > .pin87"]}/>
    {/* KiCad net: PCIE_RX5_P */}
    <KiCadNet name={"PCIE_RX5_P"} connectsTo={[".U1 > .pin420", ".J1 > .pin86"]}/>
    {/* KiCad net: unconnected-(U1-PadL17) */}
    <KiCadNet name={"unconnected__U1_PadL17_"} connectsTo={[".U1 > .pin433"]}/>
    {/* KiCad net: unconnected-(U1-PadL18) */}
    <KiCadNet name={"unconnected__U1_PadL18_"} connectsTo={[".U1 > .pin434"]}/>
    {/* KiCad net: unconnected-(U1-PadL19) */}
    <KiCadNet name={"unconnected__U1_PadL19_"} connectsTo={[".U1 > .pin435"]}/>
    {/* KiCad net: unconnected-(U1-PadL20) */}
    <KiCadNet name={"unconnected__U1_PadL20_"} connectsTo={[".U1 > .pin436"]}/>
    {/* KiCad net: unconnected-(U1-PadL22) */}
    <KiCadNet name={"unconnected__U1_PadL22_"} connectsTo={[".U1 > .pin438"]}/>
    {/* KiCad net: unconnected-(U1-PadL23) */}
    <KiCadNet name={"unconnected__U1_PadL23_"} connectsTo={[".U1 > .pin439"]}/>
    {/* KiCad net: unconnected-(U1-PadL24) */}
    <KiCadNet name={"unconnected__U1_PadL24_"} connectsTo={[".U1 > .pin440"]}/>
    {/* KiCad net: unconnected-(U1-PadL25) */}
    <KiCadNet name={"unconnected__U1_PadL25_"} connectsTo={[".U1 > .pin441"]}/>
    {/* KiCad net: PCIE_TX6_N */}
    <KiCadNet name={"PCIE_TX6_N"} connectsTo={[".U1 > .pin443", ".C113 > .pin2"]}/>
    {/* KiCad net: PCIE_TX6_P */}
    <KiCadNet name={"PCIE_TX6_P"} connectsTo={[".U1 > .pin444", ".C112 > .pin2"]}/>
    {/* KiCad net: Net-(R1-Pad2) */}
    <KiCadNet name={"Net__R1_Pad2_"} connectsTo={[".U1 > .pin448", ".R1 > .pin2"]}/>
    {/* KiCad net: GNDA */}
    <KiCadNet name={"GNDA"} connectsTo={[".U1 > .pin453", ".U1 > .pin479", ".U1 > .pin480", ".U1 > .pin505", ".U1 > .pin506", ".U1 > .pin531", ".U1 > .pin532", ".FB1 > .pin1", ".C18 > .pin1", ".C19 > .pin2"]}/>
    {/* KiCad net: VDDA */}
    <KiCadNet name={"VDDA"} connectsTo={[".U1 > .pin454", ".C18 > .pin2", ".C19 > .pin1", ".FB2 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadM16) */}
    <KiCadNet name={"unconnected__U1_PadM16_"} connectsTo={[".U1 > .pin458"]}/>
    {/* KiCad net: unconnected-(U1-PadM17) */}
    <KiCadNet name={"unconnected__U1_PadM17_"} connectsTo={[".U1 > .pin459"]}/>
    {/* KiCad net: unconnected-(U1-PadM19) */}
    <KiCadNet name={"unconnected__U1_PadM19_"} connectsTo={[".U1 > .pin461"]}/>
    {/* KiCad net: unconnected-(U1-PadM20) */}
    <KiCadNet name={"unconnected__U1_PadM20_"} connectsTo={[".U1 > .pin462"]}/>
    {/* KiCad net: unconnected-(U1-PadM21) */}
    <KiCadNet name={"unconnected__U1_PadM21_"} connectsTo={[".U1 > .pin463"]}/>
    {/* KiCad net: unconnected-(U1-PadM22) */}
    <KiCadNet name={"unconnected__U1_PadM22_"} connectsTo={[".U1 > .pin464"]}/>
    {/* KiCad net: unconnected-(U1-PadM24) */}
    <KiCadNet name={"unconnected__U1_PadM24_"} connectsTo={[".U1 > .pin466"]}/>
    {/* KiCad net: unconnected-(U1-PadM25) */}
    <KiCadNet name={"unconnected__U1_PadM25_"} connectsTo={[".U1 > .pin467"]}/>
    {/* KiCad net: unconnected-(U1-PadM26) */}
    <KiCadNet name={"unconnected__U1_PadM26_"} connectsTo={[".U1 > .pin468"]}/>
    {/* KiCad net: PCIE_RX6_N */}
    <KiCadNet name={"PCIE_RX6_N"} connectsTo={[".U1 > .pin471", ".J1 > .pin91"]}/>
    {/* KiCad net: PCIE_RX6_P */}
    <KiCadNet name={"PCIE_RX6_P"} connectsTo={[".U1 > .pin472", ".J1 > .pin90"]}/>
    {/* KiCad net: unconnected-(U1-PadN16) */}
    <KiCadNet name={"unconnected__U1_PadN16_"} connectsTo={[".U1 > .pin484"]}/>
    {/* KiCad net: unconnected-(U1-PadN17) */}
    <KiCadNet name={"unconnected__U1_PadN17_"} connectsTo={[".U1 > .pin485"]}/>
    {/* KiCad net: unconnected-(U1-PadN18) */}
    <KiCadNet name={"unconnected__U1_PadN18_"} connectsTo={[".U1 > .pin486"]}/>
    {/* KiCad net: unconnected-(U1-PadN19) */}
    <KiCadNet name={"unconnected__U1_PadN19_"} connectsTo={[".U1 > .pin487"]}/>
    {/* KiCad net: unconnected-(U1-PadN21) */}
    <KiCadNet name={"unconnected__U1_PadN21_"} connectsTo={[".U1 > .pin489"]}/>
    {/* KiCad net: unconnected-(U1-PadN22) */}
    <KiCadNet name={"unconnected__U1_PadN22_"} connectsTo={[".U1 > .pin490"]}/>
    {/* KiCad net: unconnected-(U1-PadN23) */}
    <KiCadNet name={"unconnected__U1_PadN23_"} connectsTo={[".U1 > .pin491"]}/>
    {/* KiCad net: unconnected-(U1-PadN24) */}
    <KiCadNet name={"unconnected__U1_PadN24_"} connectsTo={[".U1 > .pin492"]}/>
    {/* KiCad net: unconnected-(U1-PadN26) */}
    <KiCadNet name={"unconnected__U1_PadN26_"} connectsTo={[".U1 > .pin494"]}/>
    {/* KiCad net: PCIE_TX7_N */}
    <KiCadNet name={"PCIE_TX7_N"} connectsTo={[".U1 > .pin495", ".C115 > .pin2"]}/>
    {/* KiCad net: PCIE_TX7_P */}
    <KiCadNet name={"PCIE_TX7_P"} connectsTo={[".U1 > .pin496", ".C114 > .pin2"]}/>
    {/* KiCad net: /PROGRAM */}
    <KiCadNet name={"_PROGRAM"} connectsTo={[".U1 > .pin500", ".R4 > .pin1"]}/>
    {/* KiCad net: unconnected-(U1-PadP16) */}
    <KiCadNet name={"unconnected__U1_PadP16_"} connectsTo={[".U1 > .pin510"]}/>
    {/* KiCad net: unconnected-(U1-PadP18) */}
    <KiCadNet name={"unconnected__U1_PadP18_"} connectsTo={[".U1 > .pin512"]}/>
    {/* KiCad net: unconnected-(U1-PadP19) */}
    <KiCadNet name={"unconnected__U1_PadP19_"} connectsTo={[".U1 > .pin513"]}/>
    {/* KiCad net: unconnected-(U1-PadP20) */}
    <KiCadNet name={"unconnected__U1_PadP20_"} connectsTo={[".U1 > .pin514"]}/>
    {/* KiCad net: unconnected-(U1-PadP21) */}
    <KiCadNet name={"unconnected__U1_PadP21_"} connectsTo={[".U1 > .pin515"]}/>
    {/* KiCad net: unconnected-(U1-PadP23) */}
    <KiCadNet name={"unconnected__U1_PadP23_"} connectsTo={[".U1 > .pin517"]}/>
    {/* KiCad net: unconnected-(U1-PadP24) */}
    <KiCadNet name={"unconnected__U1_PadP24_"} connectsTo={[".U1 > .pin518"]}/>
    {/* KiCad net: unconnected-(U1-PadP25) */}
    <KiCadNet name={"unconnected__U1_PadP25_"} connectsTo={[".U1 > .pin519"]}/>
    {/* KiCad net: unconnected-(U1-PadP26) */}
    <KiCadNet name={"unconnected__U1_PadP26_"} connectsTo={[".U1 > .pin520"]}/>
    {/* KiCad net: PCIE_RX7_N */}
    <KiCadNet name={"PCIE_RX7_N"} connectsTo={[".U1 > .pin523", ".J1 > .pin95"]}/>
    {/* KiCad net: PCIE_RX7_P */}
    <KiCadNet name={"PCIE_RX7_P"} connectsTo={[".U1 > .pin524", ".J1 > .pin94"]}/>
    {/* KiCad net: unconnected-(U1-PadR16) */}
    <KiCadNet name={"unconnected__U1_PadR16_"} connectsTo={[".U1 > .pin536"]}/>
    {/* KiCad net: unconnected-(U1-PadR17) */}
    <KiCadNet name={"unconnected__U1_PadR17_"} connectsTo={[".U1 > .pin537"]}/>
    {/* KiCad net: unconnected-(U1-PadR18) */}
    <KiCadNet name={"unconnected__U1_PadR18_"} connectsTo={[".U1 > .pin538"]}/>
    {/* KiCad net: unconnected-(U1-PadR20) */}
    <KiCadNet name={"unconnected__U1_PadR20_"} connectsTo={[".U1 > .pin540"]}/>
    {/* KiCad net: unconnected-(U1-PadR21) */}
    <KiCadNet name={"unconnected__U1_PadR21_"} connectsTo={[".U1 > .pin541"]}/>
    {/* KiCad net: unconnected-(U1-PadR22) */}
    <KiCadNet name={"unconnected__U1_PadR22_"} connectsTo={[".U1 > .pin542"]}/>
    {/* KiCad net: unconnected-(U1-PadR23) */}
    <KiCadNet name={"unconnected__U1_PadR23_"} connectsTo={[".U1 > .pin543"]}/>
    {/* KiCad net: unconnected-(U1-PadR25) */}
    <KiCadNet name={"unconnected__U1_PadR25_"} connectsTo={[".U1 > .pin545"]}/>
    {/* KiCad net: unconnected-(U1-PadR26) */}
    <KiCadNet name={"unconnected__U1_PadR26_"} connectsTo={[".U1 > .pin546"]}/>
    {/* KiCad net: unconnected-(U1-PadT7) */}
    <KiCadNet name={"unconnected__U1_PadT7_"} connectsTo={[".U1 > .pin553"]}/>
    {/* KiCad net: unconnected-(U1-PadT17) */}
    <KiCadNet name={"unconnected__U1_PadT17_"} connectsTo={[".U1 > .pin563"]}/>
    {/* KiCad net: unconnected-(U1-PadT18) */}
    <KiCadNet name={"unconnected__U1_PadT18_"} connectsTo={[".U1 > .pin564"]}/>
    {/* KiCad net: unconnected-(U1-PadT19) */}
    <KiCadNet name={"unconnected__U1_PadT19_"} connectsTo={[".U1 > .pin565"]}/>
    {/* KiCad net: unconnected-(U1-PadT20) */}
    <KiCadNet name={"unconnected__U1_PadT20_"} connectsTo={[".U1 > .pin566"]}/>
    {/* KiCad net: unconnected-(U1-PadT22) */}
    <KiCadNet name={"unconnected__U1_PadT22_"} connectsTo={[".U1 > .pin568"]}/>
    {/* KiCad net: unconnected-(U1-PadT23) */}
    <KiCadNet name={"unconnected__U1_PadT23_"} connectsTo={[".U1 > .pin569"]}/>
    {/* KiCad net: unconnected-(U1-PadT24) */}
    <KiCadNet name={"unconnected__U1_PadT24_"} connectsTo={[".U1 > .pin570"]}/>
    {/* KiCad net: unconnected-(U1-PadT25) */}
    <KiCadNet name={"unconnected__U1_PadT25_"} connectsTo={[".U1 > .pin571"]}/>
    {/* KiCad net: DDR_RAS */}
    <KiCadNet name={"DDR_RAS"} connectsTo={[".U1 > .pin573", ".U2 > .pin33"]}/>
    {/* KiCad net: unconnected-(U1-PadU2) */}
    <KiCadNet name={"unconnected__U1_PadU2_"} connectsTo={[".U1 > .pin574"]}/>
    {/* KiCad net: unconnected-(U1-PadU4) */}
    <KiCadNet name={"unconnected__U1_PadU4_"} connectsTo={[".U1 > .pin576"]}/>
    {/* KiCad net: DDR_A13 */}
    <KiCadNet name={"DDR_A13"} connectsTo={[".U1 > .pin577", ".U2 > .pin60"]}/>
    {/* KiCad net: unconnected-(U1-PadU6) */}
    <KiCadNet name={"unconnected__U1_PadU6_"} connectsTo={[".U1 > .pin578"]}/>
    {/* KiCad net: unconnected-(U1-PadU7) */}
    <KiCadNet name={"unconnected__U1_PadU7_"} connectsTo={[".U1 > .pin579"]}/>
    {/* KiCad net: unconnected-(U1-PadU9) */}
    <KiCadNet name={"unconnected__U1_PadU9_"} connectsTo={[".U1 > .pin581"]}/>
    {/* KiCad net: unconnected-(U1-PadU16) */}
    <KiCadNet name={"unconnected__U1_PadU16_"} connectsTo={[".U1 > .pin588"]}/>
    {/* KiCad net: unconnected-(U1-PadU17) */}
    <KiCadNet name={"unconnected__U1_PadU17_"} connectsTo={[".U1 > .pin589"]}/>
    {/* KiCad net: unconnected-(U1-PadU19) */}
    <KiCadNet name={"unconnected__U1_PadU19_"} connectsTo={[".U1 > .pin591"]}/>
    {/* KiCad net: unconnected-(U1-PadU20) */}
    <KiCadNet name={"unconnected__U1_PadU20_"} connectsTo={[".U1 > .pin592"]}/>
    {/* KiCad net: unconnected-(U1-PadU21) */}
    <KiCadNet name={"unconnected__U1_PadU21_"} connectsTo={[".U1 > .pin593"]}/>
    {/* KiCad net: unconnected-(U1-PadU22) */}
    <KiCadNet name={"unconnected__U1_PadU22_"} connectsTo={[".U1 > .pin594"]}/>
    {/* KiCad net: unconnected-(U1-PadU24) */}
    <KiCadNet name={"unconnected__U1_PadU24_"} connectsTo={[".U1 > .pin596"]}/>
    {/* KiCad net: unconnected-(U1-PadU25) */}
    <KiCadNet name={"unconnected__U1_PadU25_"} connectsTo={[".U1 > .pin597"]}/>
    {/* KiCad net: unconnected-(U1-PadU26) */}
    <KiCadNet name={"unconnected__U1_PadU26_"} connectsTo={[".U1 > .pin598"]}/>
    {/* KiCad net: DDR_A11 */}
    <KiCadNet name={"DDR_A11"} connectsTo={[".U1 > .pin599", ".U2 > .pin53"]}/>
    {/* KiCad net: DDR_A8 */}
    <KiCadNet name={"DDR_A8"} connectsTo={[".U1 > .pin600", ".U2 > .pin54"]}/>
    {/* KiCad net: DDR_A12 */}
    <KiCadNet name={"DDR_A12"} connectsTo={[".U1 > .pin601", ".U2 > .pin57"]}/>
    {/* KiCad net: DDR_A4 */}
    <KiCadNet name={"DDR_A4"} connectsTo={[".U1 > .pin602", ".U2 > .pin50"]}/>
    {/* KiCad net: DDR_A6 */}
    <KiCadNet name={"DDR_A6"} connectsTo={[".U1 > .pin604", ".U2 > .pin49"]}/>
    {/* KiCad net: unconnected-(U1-PadV7) */}
    <KiCadNet name={"unconnected__U1_PadV7_"} connectsTo={[".U1 > .pin605"]}/>
    {/* KiCad net: unconnected-(U1-PadV8) */}
    <KiCadNet name={"unconnected__U1_PadV8_"} connectsTo={[".U1 > .pin606"]}/>
    {/* KiCad net: unconnected-(U1-PadV9) */}
    <KiCadNet name={"unconnected__U1_PadV9_"} connectsTo={[".U1 > .pin607"]}/>
    {/* KiCad net: unconnected-(U1-PadV11) */}
    <KiCadNet name={"unconnected__U1_PadV11_"} connectsTo={[".U1 > .pin609"]}/>
    {/* KiCad net: unconnected-(U1-PadV12) */}
    <KiCadNet name={"unconnected__U1_PadV12_"} connectsTo={[".U1 > .pin610"]}/>
    {/* KiCad net: unconnected-(U1-PadV13) */}
    <KiCadNet name={"unconnected__U1_PadV13_"} connectsTo={[".U1 > .pin611"]}/>
    {/* KiCad net: unconnected-(U1-PadV14) */}
    <KiCadNet name={"unconnected__U1_PadV14_"} connectsTo={[".U1 > .pin612"]}/>
    {/* KiCad net: unconnected-(U1-PadV16) */}
    <KiCadNet name={"unconnected__U1_PadV16_"} connectsTo={[".U1 > .pin614"]}/>
    {/* KiCad net: unconnected-(U1-PadV17) */}
    <KiCadNet name={"unconnected__U1_PadV17_"} connectsTo={[".U1 > .pin615"]}/>
    {/* KiCad net: unconnected-(U1-PadV18) */}
    <KiCadNet name={"unconnected__U1_PadV18_"} connectsTo={[".U1 > .pin616"]}/>
    {/* KiCad net: unconnected-(U1-PadV19) */}
    <KiCadNet name={"unconnected__U1_PadV19_"} connectsTo={[".U1 > .pin617"]}/>
    {/* KiCad net: unconnected-(U1-PadV21) */}
    <KiCadNet name={"unconnected__U1_PadV21_"} connectsTo={[".U1 > .pin619"]}/>
    {/* KiCad net: unconnected-(U1-PadV22) */}
    <KiCadNet name={"unconnected__U1_PadV22_"} connectsTo={[".U1 > .pin620"]}/>
    {/* KiCad net: unconnected-(U1-PadV23) */}
    <KiCadNet name={"unconnected__U1_PadV23_"} connectsTo={[".U1 > .pin621"]}/>
    {/* KiCad net: unconnected-(U1-PadV24) */}
    <KiCadNet name={"unconnected__U1_PadV24_"} connectsTo={[".U1 > .pin622"]}/>
    {/* KiCad net: unconnected-(U1-PadV26) */}
    <KiCadNet name={"unconnected__U1_PadV26_"} connectsTo={[".U1 > .pin624"]}/>
    {/* KiCad net: DDR_A7 */}
    <KiCadNet name={"DDR_A7"} connectsTo={[".U1 > .pin625", ".U2 > .pin51"]}/>
    {/* KiCad net: DDR_A2 */}
    <KiCadNet name={"DDR_A2"} connectsTo={[".U1 > .pin627", ".U2 > .pin43"]}/>
    {/* KiCad net: unconnected-(U1-PadW4) */}
    <KiCadNet name={"unconnected__U1_PadW4_"} connectsTo={[".U1 > .pin628"]}/>
    {/* KiCad net: DDR_CK_N */}
    <KiCadNet name={"DDR_CK_N"} connectsTo={[".U1 > .pin629", ".U2 > .pin34"]}/>
    {/* KiCad net: DDR_CK_P */}
    <KiCadNet name={"DDR_CK_P"} connectsTo={[".U1 > .pin630", ".U2 > .pin29"]}/>
    {/* KiCad net: unconnected-(U1-PadW8) */}
    <KiCadNet name={"unconnected__U1_PadW8_"} connectsTo={[".U1 > .pin632"]}/>
    {/* KiCad net: unconnected-(U1-PadW9) */}
    <KiCadNet name={"unconnected__U1_PadW9_"} connectsTo={[".U1 > .pin633"]}/>
    {/* KiCad net: unconnected-(U1-PadW10) */}
    <KiCadNet name={"unconnected__U1_PadW10_"} connectsTo={[".U1 > .pin634"]}/>
    {/* KiCad net: unconnected-(U1-PadW11) */}
    <KiCadNet name={"unconnected__U1_PadW11_"} connectsTo={[".U1 > .pin635"]}/>
    {/* KiCad net: unconnected-(U1-PadW13) */}
    <KiCadNet name={"unconnected__U1_PadW13_"} connectsTo={[".U1 > .pin637"]}/>
    {/* KiCad net: unconnected-(U1-PadW14) */}
    <KiCadNet name={"unconnected__U1_PadW14_"} connectsTo={[".U1 > .pin638"]}/>
    {/* KiCad net: unconnected-(U1-PadW15) */}
    <KiCadNet name={"unconnected__U1_PadW15_"} connectsTo={[".U1 > .pin639"]}/>
    {/* KiCad net: unconnected-(U1-PadW16) */}
    <KiCadNet name={"unconnected__U1_PadW16_"} connectsTo={[".U1 > .pin640"]}/>
    {/* KiCad net: unconnected-(U1-PadW18) */}
    <KiCadNet name={"unconnected__U1_PadW18_"} connectsTo={[".U1 > .pin642"]}/>
    {/* KiCad net: unconnected-(U1-PadW19) */}
    <KiCadNet name={"unconnected__U1_PadW19_"} connectsTo={[".U1 > .pin643"]}/>
    {/* KiCad net: unconnected-(U1-PadW20) */}
    <KiCadNet name={"unconnected__U1_PadW20_"} connectsTo={[".U1 > .pin644"]}/>
    {/* KiCad net: unconnected-(U1-PadW21) */}
    <KiCadNet name={"unconnected__U1_PadW21_"} connectsTo={[".U1 > .pin645"]}/>
    {/* KiCad net: unconnected-(U1-PadW23) */}
    <KiCadNet name={"unconnected__U1_PadW23_"} connectsTo={[".U1 > .pin647"]}/>
    {/* KiCad net: unconnected-(U1-PadW24) */}
    <KiCadNet name={"unconnected__U1_PadW24_"} connectsTo={[".U1 > .pin648"]}/>
    {/* KiCad net: unconnected-(U1-PadW25) */}
    <KiCadNet name={"unconnected__U1_PadW25_"} connectsTo={[".U1 > .pin649"]}/>
    {/* KiCad net: unconnected-(U1-PadW26) */}
    <KiCadNet name={"unconnected__U1_PadW26_"} connectsTo={[".U1 > .pin650"]}/>
    {/* KiCad net: DDR_A10 */}
    <KiCadNet name={"DDR_A10"} connectsTo={[".U1 > .pin651", ".U2 > .pin41"]}/>
    {/* KiCad net: DDR_A3 */}
    <KiCadNet name={"DDR_A3"} connectsTo={[".U1 > .pin652", ".U2 > .pin47"]}/>
    {/* KiCad net: DDR_A9 */}
    <KiCadNet name={"DDR_A9"} connectsTo={[".U1 > .pin653", ".U2 > .pin52"]}/>
    {/* KiCad net: unconnected-(U1-PadY5) */}
    <KiCadNet name={"unconnected__U1_PadY5_"} connectsTo={[".U1 > .pin655"]}/>
    {/* KiCad net: unconnected-(U1-PadY6) */}
    <KiCadNet name={"unconnected__U1_PadY6_"} connectsTo={[".U1 > .pin656"]}/>
    {/* KiCad net: unconnected-(U1-PadY7) */}
    <KiCadNet name={"unconnected__U1_PadY7_"} connectsTo={[".U1 > .pin657"]}/>
    {/* KiCad net: unconnected-(U1-PadY8) */}
    <KiCadNet name={"unconnected__U1_PadY8_"} connectsTo={[".U1 > .pin658"]}/>
    {/* KiCad net: unconnected-(U1-PadY10) */}
    <KiCadNet name={"unconnected__U1_PadY10_"} connectsTo={[".U1 > .pin660"]}/>
    {/* KiCad net: unconnected-(U1-PadY11) */}
    <KiCadNet name={"unconnected__U1_PadY11_"} connectsTo={[".U1 > .pin661"]}/>
    {/* KiCad net: unconnected-(U1-PadY12) */}
    <KiCadNet name={"unconnected__U1_PadY12_"} connectsTo={[".U1 > .pin662"]}/>
    {/* KiCad net: unconnected-(U1-PadY13) */}
    <KiCadNet name={"unconnected__U1_PadY13_"} connectsTo={[".U1 > .pin663"]}/>
    {/* KiCad net: unconnected-(U1-PadY15) */}
    <KiCadNet name={"unconnected__U1_PadY15_"} connectsTo={[".U1 > .pin665"]}/>
    {/* KiCad net: unconnected-(U1-PadY16) */}
    <KiCadNet name={"unconnected__U1_PadY16_"} connectsTo={[".U1 > .pin666"]}/>
    {/* KiCad net: unconnected-(U1-PadY17) */}
    <KiCadNet name={"unconnected__U1_PadY17_"} connectsTo={[".U1 > .pin667"]}/>
    {/* KiCad net: unconnected-(U1-PadY18) */}
    <KiCadNet name={"unconnected__U1_PadY18_"} connectsTo={[".U1 > .pin668"]}/>
    {/* KiCad net: unconnected-(U1-PadY20) */}
    <KiCadNet name={"unconnected__U1_PadY20_"} connectsTo={[".U1 > .pin670"]}/>
    {/* KiCad net: unconnected-(U1-PadY21) */}
    <KiCadNet name={"unconnected__U1_PadY21_"} connectsTo={[".U1 > .pin671"]}/>
    {/* KiCad net: unconnected-(U1-PadY22) */}
    <KiCadNet name={"unconnected__U1_PadY22_"} connectsTo={[".U1 > .pin672"]}/>
    {/* KiCad net: unconnected-(U1-PadY23) */}
    <KiCadNet name={"unconnected__U1_PadY23_"} connectsTo={[".U1 > .pin673"]}/>
    {/* KiCad net: unconnected-(U1-PadY25) */}
    <KiCadNet name={"unconnected__U1_PadY25_"} connectsTo={[".U1 > .pin675"]}/>
    {/* KiCad net: unconnected-(U1-PadY26) */}
    <KiCadNet name={"unconnected__U1_PadY26_"} connectsTo={[".U1 > .pin676"]}/>
    {/* KiCad net: Net-(J1-PadA1) */}
    <KiCadNet name={"Net__J1_PadA1_"} connectsTo={[".J1 > .pin1", ".J1 > .pin97"]}/>
    {/* KiCad net: unconnected-(J1-PadA5) */}
    <KiCadNet name={"unconnected__J1_PadA5_"} connectsTo={[".J1 > .pin5"]}/>
    {/* KiCad net: unconnected-(J1-PadA6) */}
    <KiCadNet name={"unconnected__J1_PadA6_"} connectsTo={[".J1 > .pin6"]}/>
    {/* KiCad net: unconnected-(J1-PadA7) */}
    <KiCadNet name={"unconnected__J1_PadA7_"} connectsTo={[".J1 > .pin7"]}/>
    {/* KiCad net: unconnected-(J1-PadA8) */}
    <KiCadNet name={"unconnected__J1_PadA8_"} connectsTo={[".J1 > .pin8"]}/>
    {/* KiCad net: /3V3 PCIE */}
    <KiCadNet name={"_3V3_PCIE"} connectsTo={[".J1 > .pin9", ".J1 > .pin10", ".J1 > .pin57"]}/>
    {/* KiCad net: /PERST */}
    <KiCadNet name={"_PERST"} connectsTo={[".J1 > .pin11", ".J7 > .pin2", ".Q3 > .pin1"]}/>
    {/* KiCad net: /REFCLK_C_P */}
    <KiCadNet name={"_REFCLK_C_P"} connectsTo={[".J1 > .pin13", ".C120 > .pin2"]}/>
    {/* KiCad net: /REFCLK_C_N */}
    <KiCadNet name={"_REFCLK_C_N"} connectsTo={[".J1 > .pin14", ".C121 > .pin2"]}/>
    {/* KiCad net: /PCIE_TX0_C_P */}
    <KiCadNet name={"_PCIE_TX0_C_P"} connectsTo={[".J1 > .pin16", ".C100 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX0_C_N */}
    <KiCadNet name={"_PCIE_TX0_C_N"} connectsTo={[".J1 > .pin17", ".C101 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1-PadA19) */}
    <KiCadNet name={"unconnected__J1_PadA19_"} connectsTo={[".J1 > .pin19"]}/>
    {/* KiCad net: /PCIE_TX1_C_P */}
    <KiCadNet name={"_PCIE_TX1_C_P"} connectsTo={[".J1 > .pin21", ".C102 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX1_C_N */}
    <KiCadNet name={"_PCIE_TX1_C_N"} connectsTo={[".J1 > .pin22", ".C103 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX2_C_P */}
    <KiCadNet name={"_PCIE_TX2_C_P"} connectsTo={[".J1 > .pin25", ".C104 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX2_C_N */}
    <KiCadNet name={"_PCIE_TX2_C_N"} connectsTo={[".J1 > .pin26", ".C105 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX3_C_P */}
    <KiCadNet name={"_PCIE_TX3_C_P"} connectsTo={[".J1 > .pin29", ".C106 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX3_C_N */}
    <KiCadNet name={"_PCIE_TX3_C_N"} connectsTo={[".J1 > .pin30", ".C107 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1-PadA32) */}
    <KiCadNet name={"unconnected__J1_PadA32_"} connectsTo={[".J1 > .pin32"]}/>
    {/* KiCad net: unconnected-(J1-PadA33) */}
    <KiCadNet name={"unconnected__J1_PadA33_"} connectsTo={[".J1 > .pin33"]}/>
    {/* KiCad net: /PCIE_TX4_C_P */}
    <KiCadNet name={"_PCIE_TX4_C_P"} connectsTo={[".J1 > .pin35", ".C108 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX4_C_N */}
    <KiCadNet name={"_PCIE_TX4_C_N"} connectsTo={[".J1 > .pin36", ".C109 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX5_C_P */}
    <KiCadNet name={"_PCIE_TX5_C_P"} connectsTo={[".J1 > .pin39", ".C110 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX5_C_N */}
    <KiCadNet name={"_PCIE_TX5_C_N"} connectsTo={[".J1 > .pin40", ".C111 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX6_C_P */}
    <KiCadNet name={"_PCIE_TX6_C_P"} connectsTo={[".J1 > .pin43", ".C112 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX6_C_N */}
    <KiCadNet name={"_PCIE_TX6_C_N"} connectsTo={[".J1 > .pin44", ".C113 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX7_C_P */}
    <KiCadNet name={"_PCIE_TX7_C_P"} connectsTo={[".J1 > .pin47", ".C114 > .pin1"]}/>
    {/* KiCad net: /PCIE_TX7_C_N */}
    <KiCadNet name={"_PCIE_TX7_C_N"} connectsTo={[".J1 > .pin48", ".C115 > .pin1"]}/>
    {/* KiCad net: /PCIE_SCK */}
    <KiCadNet name={"_PCIE_SCK"} connectsTo={[".J1 > .pin54", ".J6 > .pin3"]}/>
    {/* KiCad net: /PCIE_SDA */}
    <KiCadNet name={"_PCIE_SDA"} connectsTo={[".J1 > .pin55", ".J6 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1-PadB9) */}
    <KiCadNet name={"unconnected__J1_PadB9_"} connectsTo={[".J1 > .pin58"]}/>
    {/* KiCad net: /3V3 AUX */}
    <KiCadNet name={"_3V3_AUX"} connectsTo={[".J1 > .pin59"]}/>
    {/* KiCad net: unconnected-(J1-PadB11) */}
    <KiCadNet name={"unconnected__J1_PadB11_"} connectsTo={[".J1 > .pin60"]}/>
    {/* KiCad net: unconnected-(J1-PadB12) */}
    <KiCadNet name={"unconnected__J1_PadB12_"} connectsTo={[".J1 > .pin61"]}/>
    {/* KiCad net: unconnected-(J1-PadB17) */}
    <KiCadNet name={"unconnected__J1_PadB17_"} connectsTo={[".J1 > .pin66"]}/>
    {/* KiCad net: unconnected-(J1-PadB30) */}
    <KiCadNet name={"unconnected__J1_PadB30_"} connectsTo={[".J1 > .pin79"]}/>
    {/* KiCad net: unconnected-(J1-PadB31) */}
    <KiCadNet name={"unconnected__J1_PadB31_"} connectsTo={[".J1 > .pin80"]}/>
    {/* KiCad net: Net-(D3-Pad1) */}
    <KiCadNet name={"Net__D3_Pad1_"} connectsTo={[".D3 > .pin1", ".R22 > .pin1"]}/>
    {/* KiCad net: Net-(D7-Pad1) */}
    <KiCadNet name={"Net__D7_Pad1_"} connectsTo={[".D7 > .pin1", ".R26 > .pin1"]}/>
    {/* KiCad net: Net-(U9-Pad24) */}
    <KiCadNet name={"Net__U9_Pad24_"} connectsTo={[".C3 > .pin2", ".U9 > .pin24"]}/>
    {/* KiCad net: Net-(U9-Pad13) */}
    <KiCadNet name={"Net__U9_Pad13_"} connectsTo={[".C17 > .pin1", ".U9 > .pin13"]}/>
    {/* KiCad net: /MPM_SDA */}
    <KiCadNet name={"_MPM_SDA"} connectsTo={[".U8 > .pin3", ".J6 > .pin2"]}/>
    {/* KiCad net: /MPM_SCK */}
    <KiCadNet name={"_MPM_SCK"} connectsTo={[".U8 > .pin4", ".J6 > .pin1"]}/>
    {/* KiCad net: Net-(U8-Pad6) */}
    <KiCadNet name={"Net__U8_Pad6_"} connectsTo={[".U8 > .pin6", ".NT4 > .pin1"]}/>
    {/* KiCad net: unconnected-(U8-Pad11) */}
    <KiCadNet name={"unconnected__U8_Pad11_"} connectsTo={[".U8 > .pin11"]}/>
    {/* KiCad net: unconnected-(U8-Pad12) */}
    <KiCadNet name={"unconnected__U8_Pad12_"} connectsTo={[".U8 > .pin12"]}/>
    {/* KiCad net: Net-(U8-Pad17) */}
    <KiCadNet name={"Net__U8_Pad17_"} connectsTo={[".U8 > .pin17", ".NT5 > .pin1"]}/>
    {/* KiCad net: Net-(U8-Pad18) */}
    <KiCadNet name={"Net__U8_Pad18_"} connectsTo={[".U8 > .pin18", ".NT3 > .pin1"]}/>
    {/* KiCad net: Net-(U8-Pad24) */}
    <KiCadNet name={"Net__U8_Pad24_"} connectsTo={[".U8 > .pin24", ".NT7 > .pin1"]}/>
    {/* KiCad net: Net-(U8-Pad25) */}
    <KiCadNet name={"Net__U8_Pad25_"} connectsTo={[".U8 > .pin25", ".C1 > .pin1"]}/>
    {/* KiCad net: Net-(U8-Pad30) */}
    <KiCadNet name={"Net__U8_Pad30_"} connectsTo={[".U8 > .pin30", ".NT8 > .pin1"]}/>
    {/* KiCad net: Net-(U8-Pad31) */}
    <KiCadNet name={"Net__U8_Pad31_"} connectsTo={[".U8 > .pin31", ".NT6 > .pin1"]}/>
    {/* KiCad net: /SW */}
    <KiCadNet name={"_SW"} connectsTo={[".U9 > .pin14", ".U9 > .pin16", ".U9 > .pin19", ".U9 > .pin28"]}/>
    {/* KiCad net: unconnected-(U9-Pad17) */}
    <KiCadNet name={"unconnected__U9_Pad17_"} connectsTo={[".U9 > .pin17"]}/>
    {/* KiCad net: Net-(U9-Pad22) */}
    <KiCadNet name={"Net__U9_Pad22_"} connectsTo={[".U9 > .pin22", ".R17 > .pin1"]}/>
    {/* KiCad net: unconnected-(U9-Pad23) */}
    <KiCadNet name={"unconnected__U9_Pad23_"} connectsTo={[".U9 > .pin23"]}/>
    {/* KiCad net: /VSENSE_N */}
    <KiCadNet name={"_VSENSE_N"} connectsTo={[".U9 > .pin25", ".R12 > .pin2", ".NT1 > .pin2"]}/>
    {/* KiCad net: /FB */}
    <KiCadNet name={"_FB"} connectsTo={[".U9 > .pin26", ".R12 > .pin1", ".C2 > .pin2", ".R11 > .pin2"]}/>
    {/* KiCad net: Net-(D6-Pad1) */}
    <KiCadNet name={"Net__D6_Pad1_"} connectsTo={[".R25 > .pin1", ".D6 > .pin1"]}/>
    {/* KiCad net: Net-(D8-Pad1) */}
    <KiCadNet name={"Net__D8_Pad1_"} connectsTo={[".D8 > .pin1", ".R27 > .pin1"]}/>
    {/* KiCad net: Net-(D2-Pad1) */}
    <KiCadNet name={"Net__D2_Pad1_"} connectsTo={[".R21 > .pin1", ".D2 > .pin1"]}/>
    {/* KiCad net: Net-(Q2-Pad3) */}
    <KiCadNet name={"Net__Q2_Pad3_"} connectsTo={[".R21 > .pin2", ".Q2 > .pin3"]}/>
    {/* KiCad net: Net-(D9-Pad1) */}
    <KiCadNet name={"Net__D9_Pad1_"} connectsTo={[".D9 > .pin1", ".R28 > .pin1"]}/>
    {/* KiCad net: Net-(D11-Pad1) */}
    <KiCadNet name={"Net__D11_Pad1_"} connectsTo={[".D11 > .pin1", ".R30 > .pin1"]}/>
    {/* KiCad net: Net-(Q3-Pad3) */}
    <KiCadNet name={"Net__Q3_Pad3_"} connectsTo={[".R22 > .pin2", ".Q3 > .pin3"]}/>
    {/* KiCad net: unconnected-(U2-PadA2) */}
    <KiCadNet name={"unconnected__U2_PadA2_"} connectsTo={[".U2 > .pin2"]}/>
    {/* KiCad net: Net-(U2-PadE2) */}
    <KiCadNet name={"Net__U2_PadE2_"} connectsTo={[".U2 > .pin26", ".R19 > .pin1", ".C61 > .pin1", ".C62 > .pin1", ".R18 > .pin2"]}/>
    {/* KiCad net: unconnected-(U2-PadG1) */}
    <KiCadNet name={"unconnected__U2_PadG1_"} connectsTo={[".U2 > .pin36"]}/>
    {/* KiCad net: unconnected-(U2-PadL3) */}
    <KiCadNet name={"unconnected__U2_PadL3_"} connectsTo={[".U2 > .pin58"]}/>
    {/* KiCad net: unconnected-(U2-PadL7) */}
    <KiCadNet name={"unconnected__U2_PadL7_"} connectsTo={[".U2 > .pin59"]}/>
    {/* KiCad net: Net-(D12-Pad1) */}
    <KiCadNet name={"Net__D12_Pad1_"} connectsTo={[".D12 > .pin1", ".R31 > .pin1"]}/>
    {/* KiCad net: Net-(D1-Pad1) */}
    <KiCadNet name={"Net__D1_Pad1_"} connectsTo={[".D1 > .pin1", ".R20 > .pin1"]}/>
    {/* KiCad net: Net-(D14-Pad1) */}
    <KiCadNet name={"Net__D14_Pad1_"} connectsTo={[".D14 > .pin1", ".R33 > .pin1"]}/>
    {/* KiCad net: /VSENSE_P */}
    <KiCadNet name={"_VSENSE_P"} connectsTo={[".NT2 > .pin1", ".C2 > .pin1", ".R11 > .pin1"]}/>
    {/* KiCad net: unconnected-(U5-Pad2) */}
    <KiCadNet name={"unconnected__U5_Pad2_"} connectsTo={[".U5 > .pin2"]}/>
    {/* KiCad net: /GTX_125_C_P */}
    <KiCadNet name={"_GTX_125_C_P"} connectsTo={[".C131 > .pin1", ".U4 > .pin4"]}/>
    {/* KiCad net: Net-(Q1-Pad3) */}
    <KiCadNet name={"Net__Q1_Pad3_"} connectsTo={[".Q1 > .pin3", ".R20 > .pin2"]}/>
    {/* KiCad net: /GTX_125_C_N */}
    <KiCadNet name={"_GTX_125_C_N"} connectsTo={[".C130 > .pin1", ".U4 > .pin5"]}/>
    {/* KiCad net: unconnected-(U4-Pad2) */}
    <KiCadNet name={"unconnected__U4_Pad2_"} connectsTo={[".U4 > .pin2"]}/>
    <KiCadSchematic /></board>);
}
