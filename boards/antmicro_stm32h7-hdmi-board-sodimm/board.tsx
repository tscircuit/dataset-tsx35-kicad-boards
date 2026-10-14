import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro STM32H7 HDMI SO-DIMM board
// Source: https://github.com/antmicro/stm32h7-hdmi-board-sodimm
// Commit: 27e3ac9968983f236155c288ded30beb1a2d24a1; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_C21, Footprint_C3, Footprint_C20, Footprint_C11, Footprint_R1, Footprint_C6, Footprint_C24, Footprint_C18, Footprint_C66, Footprint_U1, Footprint_C65, Footprint_R6, Footprint_C19, Footprint_C13, Footprint_C27, Footprint_TP1, Footprint_C5, Footprint_C30, Footprint_U4, Footprint_R9, Footprint_C7, Footprint_C32, Footprint_C2, Footprint_U2, Footprint_C15, Footprint_C31, Footprint_R10, Footprint_R8, Footprint_J1, Footprint_TP2, Footprint_TP4, Footprint_R4, Footprint_R3, Footprint_C25, Footprint_C29, Footprint_C10, Footprint_R2, Footprint_C8, Footprint_R5, Footprint_C22, Footprint_C26, Footprint_C23, Footprint_U3, Footprint_C17, Footprint_C1, Footprint_C14, Footprint_U10, Footprint_C12, Footprint_TP3, Footprint_C28, Footprint_C16, Footprint_R7, Footprint_C4, Footprint_C9, Footprint_C38, Footprint_C42, Footprint_C35, Footprint_C60, Footprint_C59, Footprint_U5, Footprint_C50, Footprint_C46, Footprint_C57, Footprint_C51, Footprint_C33, Footprint_C52, Footprint_U6, Footprint_C40, Footprint_C48, Footprint_U8, Footprint_C39, Footprint_C64, Footprint_C36, Footprint_C45, Footprint_C43, Footprint_C53, Footprint_C34, Footprint_C55, Footprint_C54, Footprint_C41, Footprint_C56, Footprint_C61, Footprint_C37, Footprint_C58, Footprint_U7, Footprint_C47, Footprint_C62, Footprint_C49, Footprint_C63, Footprint_C44 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={67.6} height={31.75} thickness={0.968} layers={6} outline={[{ "x": -33.80000000000001, "y": 13.875 }, { "x": 33.79999999999998, "y": 13.875 }, { "x": 33.79999999999998, "y": 4.125 }, { "x": 33.558926639489215, "y": 4.110417748196269 }, { "x": 33.32136867142461, "y": 4.0668836348524025 }, { "x": 33.0907902259145, "y": 3.995032485371226 }, { "x": 32.87055365591189, "y": 3.8959120513068797 }, { "x": 32.663870506536966, "y": 3.7709677317878203 }, { "x": 32.47375468351754, "y": 3.6220214963427253 }, { "x": 32.30297850365679, "y": 3.451245316482087 }, { "x": 32.15403226821155, "y": 3.261129493462775 }, { "x": 32.02908794869231, "y": 3.0544463440879355 }, { "x": 31.929967514627833, "y": 2.83420977408538 }, { "x": 31.858116365146486, "y": 2.6036313285753323 }, { "x": 31.81458225180245, "y": 2.366073360510754 }, { "x": 31.799999999998533, "y": 2.125 }, { "x": 31.81458225180245, "y": 1.8839266394892462 }, { "x": 31.858116365146486, "y": 1.6463686714246677 }, { "x": 31.929967514627833, "y": 1.4157902259146198 }, { "x": 32.02908794869231, "y": 1.1955536559120645 }, { "x": 32.15403226821155, "y": 0.988870506537225 }, { "x": 32.30297850365679, "y": 0.7987546835179131 }, { "x": 32.47375468351754, "y": 0.6279785036572747 }, { "x": 32.663870506536966, "y": 0.4790322682121797 }, { "x": 32.87055365591189, "y": 0.3540879486931203 }, { "x": 33.0907902259145, "y": 0.254967514628774 }, { "x": 33.32136867142461, "y": 0.18311636514759755 }, { "x": 33.558926639489215, "y": 0.13958225180373063 }, { "x": 33.79999999999998, "y": 0.125 }, { "x": 33.79999999999998, "y": -13.875 }, { "x": 33.79999999999998, "y": -17.875 }, { "x": -4.050000000000011, "y": -17.875 }, { "x": -4.050000000000011, "y": -14.075000000000003 }, { "x": -4.25, "y": -13.875 }, { "x": -5.350000000000023, "y": -13.875 }, { "x": -5.550000000000011, "y": -14.075000000000003 }, { "x": -5.550000000000011, "y": -17.875 }, { "x": -33.80000000000001, "y": -17.875 }, { "x": -33.80000000000001, "y": -13.875 }, { "x": -33.80000000000001, "y": 0.125 }, { "x": -33.55892663948937, "y": 0.13958225180388695 }, { "x": -33.32136867142489, "y": 0.18311636514789598 }, { "x": -33.090790225914944, "y": 0.2549675146291719 }, { "x": -32.870553655912474, "y": 0.35408794869357507 }, { "x": -32.663870506537705, "y": 0.4790322682126913 }, { "x": -32.47375468351842, "y": 0.6279785036578005 }, { "x": -32.30297850365781, "y": 0.7987546835184105 }, { "x": -32.1540322682127, "y": 0.9888705065376939 }, { "x": -32.029087948693586, "y": 1.1955536559124624 }, { "x": -31.929967514629183, "y": 1.4157902259149324 }, { "x": -31.858116365147907, "y": 1.6463686714248809 }, { "x": -31.8145822518039, "y": 1.88392663948936 }, { "x": -31.80000000000001, "y": 2.125 }, { "x": -31.8145822518039, "y": 2.36607336051064 }, { "x": -31.858116365147907, "y": 2.603631328575119 }, { "x": -31.929967514629183, "y": 2.8342097740850676 }, { "x": -32.029087948693586, "y": 3.0544463440875376 }, { "x": -32.1540322682127, "y": 3.261129493462306 }, { "x": -32.30297850365781, "y": 3.4512453164815895 }, { "x": -32.47375468351842, "y": 3.6220214963421995 }, { "x": -32.663870506537705, "y": 3.7709677317873087 }, { "x": -32.870553655912474, "y": 3.895912051306425 }, { "x": -33.090790225914944, "y": 3.995032485370828 }, { "x": -33.32136867142489, "y": 4.066883634852104 }, { "x": -33.55892663948937, "y": 4.110417748196113 }, { "x": -33.80000000000001, "y": 4.125 }, { "x": -33.80000000000001, "y": 13.875 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* C21: C_100n_0402 */}
    <chip name={"C21"} pcbX={14.8} pcbY={12.455} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C21 />} noSchematicRepresentation={true}/>

    {/* C3: C_100n_0402 */}
    <chip name={"C3"} pcbX={-16.97} pcbY={-2.715} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C3 />} noSchematicRepresentation={true}/>

    {/* C20: C_100n_0402 */}
    <chip name={"C20"} pcbX={14.8} pcbY={1.845} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C20 />} noSchematicRepresentation={true}/>

    {/* C11: C_100n_0402 */}
    <chip name={"C11"} pcbX={-2} pcbY={-1.395} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C11 />} noSchematicRepresentation={true}/>

    {/* R1: 4x10R_0201_array */}
    <chip name={"R1"} pcbX={-28.46} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R1 />} noSchematicRepresentation={true}/>

    {/* C6: C_100n_0402 */}
    <chip name={"C6"} pcbX={-32} pcbY={-0.645} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C6 />} noSchematicRepresentation={true}/>

    {/* C24: C_1u_0402 */}
    <chip name={"C24"} pcbX={-0.24} pcbY={10.325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C24 />} noSchematicRepresentation={true}/>

    {/* C18: C_100n_0402 */}
    <chip name={"C18"} pcbX={14.8} pcbY={-6.995} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C18 />} noSchematicRepresentation={true}/>

    {/* C66: C_10u_0402 */}
    <chip name={"C66"} pcbX={30.86} pcbY={-0.665} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CC0402MRX5R5BB106"} displayName={"C_10u_0402"} footprint={<Footprint_C66 />} noSchematicRepresentation={true}/>

    {/* U1: IS42S86400F-7TL */}
    <chip name={"U1"} pcbX={-24.5} pcbY={1.805} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U1 />} noSchematicRepresentation={true}/>

    {/* C65: C_100n_0402 */}
    <chip name={"C65"} pcbX={32.3} pcbY={-8.175} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C65 />} noSchematicRepresentation={true}/>

    {/* R6: 4x10R_0201_array */}
    <chip name={"R6"} pcbX={11.25} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R6 />} noSchematicRepresentation={true}/>

    {/* C19: C_100n_0402 */}
    <chip name={"C19"} pcbX={14.8} pcbY={-2.735} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C19 />} noSchematicRepresentation={true}/>

    {/* C13: C_100n_0402 */}
    <chip name={"C13"} pcbX={-1.95} pcbY={12.405} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C13 />} noSchematicRepresentation={true}/>

    {/* C27: C_100n_0402 */}
    <chip name={"C27"} pcbX={29.9} pcbY={-2.645} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C27 />} noSchematicRepresentation={true}/>

    {/* TP1: TP_1mm_SMD */}
    <chip name={"TP1"} pcbX={30.225} pcbY={-12.995} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP1 />} noSchematicRepresentation={true}/>

    {/* C5: C_100n_0402 */}
    <chip name={"C5"} pcbX={-17} pcbY={12.395} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C5 />} noSchematicRepresentation={true}/>

    {/* C30: C_100n_0402 */}
    <chip name={"C30"} pcbX={14.8} pcbY={-0.535} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C30 />} noSchematicRepresentation={true}/>

    {/* U4: IS42S86400F-7TL */}
    <chip name={"U4"} pcbX={22.35} pcbY={1.805} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U4 />} noSchematicRepresentation={true}/>

    {/* R9: R_10k_0402 */}
    <chip name={"R9"} pcbX={32.31} pcbY={-9.745} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R9 />} noSchematicRepresentation={true}/>

    {/* C7: C_100n_0402 */}
    <chip name={"C7"} pcbX={-32} pcbY={-4.095} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C7 />} noSchematicRepresentation={true}/>

    {/* C32: C_1u_0402 */}
    <chip name={"C32"} pcbX={14.79} pcbY={7.725} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C32 />} noSchematicRepresentation={true}/>

    {/* C2: C_100n_0402 */}
    <chip name={"C2"} pcbX={-16.95} pcbY={-7.095} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* U2: IS42S86400F-7TL */}
    <chip name={"U2"} pcbX={-9.5} pcbY={1.805} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U2 />} noSchematicRepresentation={true}/>

    {/* C15: C_100n_0402 */}
    <chip name={"C15"} pcbX={-17} pcbY={-0.295} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C15 />} noSchematicRepresentation={true}/>

    {/* C31: C_100n_0402 */}
    <chip name={"C31"} pcbX={14.81} pcbY={-4.955} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C31 />} noSchematicRepresentation={true}/>

    {/* R10: R_10k_0402 */}
    <chip name={"R10"} pcbX={30.325} pcbY={-9.745} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-1002GLF"} displayName={"R_10k_0402"} footprint={<Footprint_R10 />} noSchematicRepresentation={true}/>

    {/* R8: 4x10R_0201_array */}
    <chip name={"R8"} pcbX={26.6} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R8 />} noSchematicRepresentation={true}/>

    {/* J1: PCB-Edge_SODIMM_144_SDR */}
    <chip name={"J1"} pcbX={-33.8} pcbY={-17.875} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"], "pin55": ["55"], "pin56": ["56"], "pin57": ["57"], "pin58": ["58"], "pin59": ["59"], "pin60": ["60"], "pin61": ["61"], "pin62": ["62"], "pin63": ["63"], "pin64": ["64"], "pin65": ["65"], "pin66": ["66"], "pin67": ["67"], "pin68": ["68"], "pin69": ["69"], "pin70": ["70"], "pin71": ["71"], "pin72": ["72"], "pin73": ["73"], "pin74": ["74"], "pin75": ["75"], "pin76": ["76"], "pin77": ["77"], "pin78": ["78"], "pin79": ["79"], "pin80": ["80"], "pin81": ["81"], "pin82": ["82"], "pin83": ["83"], "pin84": ["84"], "pin85": ["85"], "pin86": ["86"], "pin87": ["87"], "pin88": ["88"], "pin89": ["89"], "pin90": ["90"], "pin91": ["91"], "pin92": ["92"], "pin93": ["93"], "pin94": ["94"], "pin95": ["95"], "pin96": ["96"], "pin97": ["97"], "pin98": ["98"], "pin99": ["99"], "pin100": ["100"], "pin101": ["101"], "pin102": ["102"], "pin103": ["103"], "pin104": ["104"], "pin105": ["105"], "pin106": ["106"], "pin107": ["107"], "pin108": ["108"], "pin109": ["109"], "pin110": ["110"], "pin111": ["111"], "pin112": ["112"], "pin113": ["113"], "pin114": ["114"], "pin115": ["115"], "pin116": ["116"], "pin117": ["117"], "pin118": ["118"], "pin119": ["119"], "pin120": ["120"], "pin121": ["121"], "pin122": ["122"], "pin123": ["123"], "pin124": ["124"], "pin125": ["125"], "pin126": ["126"], "pin127": ["127"], "pin128": ["128"], "pin129": ["129"], "pin130": ["130"], "pin131": ["131"], "pin132": ["132"], "pin133": ["133"], "pin134": ["134"], "pin135": ["135"], "pin136": ["136"], "pin137": ["137"], "pin138": ["138"], "pin139": ["139"], "pin140": ["140"], "pin141": ["141"], "pin142": ["142"], "pin143": ["143"], "pin144": ["144"] }} displayName={"PCB-Edge_SODIMM_144_SDR"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* TP2: TP_1mm_SMD */}
    <chip name={"TP2"} pcbX={29.945} pcbY={6.15} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP2 />} noSchematicRepresentation={true}/>

    {/* TP4: TP_1mm_SMD */}
    <chip name={"TP4"} pcbX={28.47} pcbY={-13.015} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP4 />} noSchematicRepresentation={true}/>

    {/* R4: 4x10R_0201_array */}
    <chip name={"R4"} pcbX={-10.9} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* R3: 4x10R_0201_array */}
    <chip name={"R3"} pcbX={-14.9} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* C25: C_100n_0402 */}
    <chip name={"C25"} pcbX={29.9} pcbY={-8.095} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C25 />} noSchematicRepresentation={true}/>

    {/* C29: C_100n_0402 */}
    <chip name={"C29"} pcbX={29.9} pcbY={12.455} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C29 />} noSchematicRepresentation={true}/>

    {/* C10: C_100n_0402 */}
    <chip name={"C10"} pcbX={-2} pcbY={-7.095} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C10 />} noSchematicRepresentation={true}/>

    {/* R2: 4x10R_0201_array */}
    <chip name={"R2"} pcbX={-24.49} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* C8: C_1u_0402 */}
    <chip name={"C8"} pcbX={-16.99} pcbY={7.525} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C8 />} noSchematicRepresentation={true}/>

    {/* R5: 4x10R_0201_array */}
    <chip name={"R5"} pcbX={7.3} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R5 />} noSchematicRepresentation={true}/>

    {/* C22: C_100n_0402 */}
    <chip name={"C22"} pcbX={-0.3} pcbY={-0.695} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C22 />} noSchematicRepresentation={true}/>

    {/* C26: C_100n_0402 */}
    <chip name={"C26"} pcbX={29.9} pcbY={-6.045} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C26 />} noSchematicRepresentation={true}/>

    {/* C23: C_100n_0402 */}
    <chip name={"C23"} pcbX={-0.24} pcbY={-5.755} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C23 />} noSchematicRepresentation={true}/>

    {/* U3: IS42S86400F-7TL */}
    <chip name={"U3"} pcbX={7.25} pcbY={1.805} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U3 />} noSchematicRepresentation={true}/>

    {/* C17: C_100n_0402 */}
    <chip name={"C17"} pcbX={14.8} pcbY={-9.105} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C17 />} noSchematicRepresentation={true}/>

    {/* C1: C_100n_0402 */}
    <chip name={"C1"} pcbX={-16.95} pcbY={-9.125} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* C14: C_100n_0402 */}
    <chip name={"C14"} pcbX={-16.95} pcbY={-4.945} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C14 />} noSchematicRepresentation={true}/>

    {/* U10: 24AA024_TDFN */}
    <chip name={"U10"} pcbX={32.05} pcbY={-4.845} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"] }} manufacturerPartNumber={"24AA024T-I/MNY"} displayName={"24AA024_TDFN"} footprint={<Footprint_U10 />} noSchematicRepresentation={true}/>

    {/* C12: C_100n_0402 */}
    <chip name={"C12"} pcbX={-2} pcbY={2.305} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C12 />} noSchematicRepresentation={true}/>

    {/* TP3: TP_1mm_SMD */}
    <chip name={"TP3"} pcbX={29.925} pcbY={4.755} pcbRotation={0} pinLabels={{ "pin1": ["1"] }} displayName={"TP_1mm_SMD"} footprint={<Footprint_TP3 />} noSchematicRepresentation={true}/>

    {/* C28: C_100n_0402 */}
    <chip name={"C28"} pcbX={29.85} pcbY={1.275} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C28 />} noSchematicRepresentation={true}/>

    {/* C16: C_1u_0402 */}
    <chip name={"C16"} pcbX={-1.98} pcbY={10.325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C16 />} noSchematicRepresentation={true}/>

    {/* R7: 4x10R_0201_array */}
    <chip name={"R7"} pcbX={22.5} pcbY={-12.895} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"] }} manufacturerPartNumber={"EXB-18V100JX"} displayName={"4x10R_0201_array"} footprint={<Footprint_R7 />} noSchematicRepresentation={true}/>

    {/* C4: C_100n_0402 */}
    <chip name={"C4"} pcbX={-17} pcbY={2.255} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C4 />} noSchematicRepresentation={true}/>

    {/* C9: C_100n_0402 */}
    <chip name={"C9"} pcbX={-2} pcbY={-9.115} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C9 />} noSchematicRepresentation={true}/>

    {/* C38: C_100n_0402 */}
    <chip name={"C38"} pcbX={-17} pcbY={-0.295} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C38 />} noSchematicRepresentation={true}/>

    {/* C42: C_100n_0402 */}
    <chip name={"C42"} pcbX={-16.95} pcbY={-7.095} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C42 />} noSchematicRepresentation={true}/>

    {/* C35: C_100n_0402 */}
    <chip name={"C35"} pcbX={-31.72} pcbY={-4.095} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C35 />} noSchematicRepresentation={true}/>

    {/* C60: C_100n_0402 */}
    <chip name={"C60"} pcbX={14.8} pcbY={1.845} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C60 />} noSchematicRepresentation={true}/>

    {/* C59: C_100n_0402 */}
    <chip name={"C59"} pcbX={14.8} pcbY={-2.735} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C59 />} noSchematicRepresentation={true}/>

    {/* U5: IS42S86400F-7TL */}
    <chip name={"U5"} pcbX={-24.5} pcbY={1.805} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U5 />} noSchematicRepresentation={true}/>

    {/* C50: C_100n_0402 */}
    <chip name={"C50"} pcbX={-0.24} pcbY={-5.755} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C50 />} noSchematicRepresentation={true}/>

    {/* C46: C_100n_0402 */}
    <chip name={"C46"} pcbX={-2} pcbY={2.305} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C46 />} noSchematicRepresentation={true}/>

    {/* C57: C_100n_0402 */}
    <chip name={"C57"} pcbX={14.8} pcbY={-9.105} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C57 />} noSchematicRepresentation={true}/>

    {/* C51: C_100n_0402 */}
    <chip name={"C51"} pcbX={-0.25} pcbY={-3.745} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C51 />} noSchematicRepresentation={true}/>

    {/* C33: C_100n_0402 */}
    <chip name={"C33"} pcbX={-31.72} pcbY={-9.245} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C33 />} noSchematicRepresentation={true}/>

    {/* C52: C_100n_0402 */}
    <chip name={"C52"} pcbX={-0.3} pcbY={-0.695} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C52 />} noSchematicRepresentation={true}/>

    {/* U6: IS42S86400F-7TL */}
    <chip name={"U6"} pcbX={-9.5} pcbY={1.805} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U6 />} noSchematicRepresentation={true}/>

    {/* C40: C_1u_0402 */}
    <chip name={"C40"} pcbX={-16.99} pcbY={7.525} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C40 />} noSchematicRepresentation={true}/>

    {/* C48: C_1u_0402 */}
    <chip name={"C48"} pcbX={-1.98} pcbY={10.325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C48 />} noSchematicRepresentation={true}/>

    {/* U8: IS42S86400F-7TL */}
    <chip name={"U8"} pcbX={22.35} pcbY={1.805} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U8 />} noSchematicRepresentation={true}/>

    {/* C39: C_100n_0402 */}
    <chip name={"C39"} pcbX={-16.95} pcbY={-4.945} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C39 />} noSchematicRepresentation={true}/>

    {/* C64: C_1u_0402 */}
    <chip name={"C64"} pcbX={14.78} pcbY={7.725} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C64 />} noSchematicRepresentation={true}/>

    {/* C36: C_100n_0402 */}
    <chip name={"C36"} pcbX={-31.72} pcbY={-0.975} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C36 />} noSchematicRepresentation={true}/>

    {/* C45: C_100n_0402 */}
    <chip name={"C45"} pcbX={-17} pcbY={12.395} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C45 />} noSchematicRepresentation={true}/>

    {/* C43: C_100n_0402 */}
    <chip name={"C43"} pcbX={-16.97} pcbY={-2.715} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C43 />} noSchematicRepresentation={true}/>

    {/* C53: C_100n_0402 */}
    <chip name={"C53"} pcbX={-0.34} pcbY={12.405} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C53 />} noSchematicRepresentation={true}/>

    {/* C34: C_100n_0402 */}
    <chip name={"C34"} pcbX={-31.72} pcbY={-7.205} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C34 />} noSchematicRepresentation={true}/>

    {/* C55: C_100n_0402 */}
    <chip name={"C55"} pcbX={14.81} pcbY={-4.955} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C55 />} noSchematicRepresentation={true}/>

    {/* C54: C_100n_0402 */}
    <chip name={"C54"} pcbX={14.8} pcbY={-0.535} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C54 />} noSchematicRepresentation={true}/>

    {/* C41: C_100n_0402 */}
    <chip name={"C41"} pcbX={-16.95} pcbY={-9.125} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C41 />} noSchematicRepresentation={true}/>

    {/* C56: C_1u_0402 */}
    <chip name={"C56"} pcbX={-0.24} pcbY={10.325} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"C1005X6S1A105K050BC"} displayName={"C_1u_0402"} footprint={<Footprint_C56 />} noSchematicRepresentation={true}/>

    {/* C61: C_100n_0402 */}
    <chip name={"C61"} pcbX={14.8} pcbY={12.455} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C61 />} noSchematicRepresentation={true}/>

    {/* C37: C_100n_0402 */}
    <chip name={"C37"} pcbX={-32} pcbY={12.405} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C37 />} noSchematicRepresentation={true}/>

    {/* C58: C_100n_0402 */}
    <chip name={"C58"} pcbX={14.8} pcbY={-6.995} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C58 />} noSchematicRepresentation={true}/>

    {/* U7: IS42S86400F-7TL */}
    <chip name={"U7"} pcbX={7.25} pcbY={1.805} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"], "pin3": ["3"], "pin4": ["4"], "pin5": ["5"], "pin6": ["6"], "pin7": ["7"], "pin8": ["8"], "pin9": ["9"], "pin10": ["10"], "pin11": ["11"], "pin12": ["12"], "pin13": ["13"], "pin14": ["14"], "pin15": ["15"], "pin16": ["16"], "pin17": ["17"], "pin18": ["18"], "pin19": ["19"], "pin20": ["20"], "pin21": ["21"], "pin22": ["22"], "pin23": ["23"], "pin24": ["24"], "pin25": ["25"], "pin26": ["26"], "pin27": ["27"], "pin28": ["28"], "pin29": ["29"], "pin30": ["30"], "pin31": ["31"], "pin32": ["32"], "pin33": ["33"], "pin34": ["34"], "pin35": ["35"], "pin36": ["36"], "pin37": ["37"], "pin38": ["38"], "pin39": ["39"], "pin40": ["40"], "pin41": ["41"], "pin42": ["42"], "pin43": ["43"], "pin44": ["44"], "pin45": ["45"], "pin46": ["46"], "pin47": ["47"], "pin48": ["48"], "pin49": ["49"], "pin50": ["50"], "pin51": ["51"], "pin52": ["52"], "pin53": ["53"], "pin54": ["54"] }} manufacturerPartNumber={"IS42S86400F-7TL"} displayName={"IS42S86400F-7TL"} footprint={<Footprint_U7 />} noSchematicRepresentation={true}/>

    {/* C47: C_100n_0402 */}
    <chip name={"C47"} pcbX={-1.99} pcbY={-3.725} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C47 />} noSchematicRepresentation={true}/>

    {/* C62: C_100n_0402 */}
    <chip name={"C62"} pcbX={29.85} pcbY={1.275} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C62 />} noSchematicRepresentation={true}/>

    {/* C49: C_100n_0402 */}
    <chip name={"C49"} pcbX={-0.24} pcbY={-8.115} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C49 />} noSchematicRepresentation={true}/>

    {/* C63: C_100n_0402 */}
    <chip name={"C63"} pcbX={29.9} pcbY={-6.045} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C63 />} noSchematicRepresentation={true}/>

    {/* C44: C_100n_0402 */}
    <chip name={"C44"} pcbX={-17} pcbY={2.255} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C44 />} noSchematicRepresentation={true}/>

    {/* KiCad net: +3.3V */}
    <KiCadNet name={"_3_3V"} connectsTo={[".C21 > .pin1", ".C3 > .pin1", ".C20 > .pin1", ".C11 > .pin1", ".C6 > .pin1", ".C24 > .pin1", ".C18 > .pin1", ".C66 > .pin1", ".U1 > .pin1", ".U1 > .pin3", ".U1 > .pin9", ".U1 > .pin14", ".U1 > .pin27", ".U1 > .pin43", ".U1 > .pin49", ".C65 > .pin1", ".C19 > .pin1", ".C13 > .pin1", ".C27 > .pin1", ".C5 > .pin1", ".C30 > .pin1", ".U4 > .pin1", ".U4 > .pin3", ".U4 > .pin9", ".U4 > .pin14", ".U4 > .pin27", ".U4 > .pin43", ".U4 > .pin49", ".R9 > .pin2", ".C7 > .pin1", ".C32 > .pin1", ".C2 > .pin1", ".U2 > .pin1", ".U2 > .pin3", ".U2 > .pin9", ".U2 > .pin14", ".U2 > .pin27", ".U2 > .pin43", ".U2 > .pin49", ".C15 > .pin1", ".C31 > .pin1", ".R10 > .pin2", ".J1 > .pin11", ".J1 > .pin12", ".J1 > .pin27", ".J1 > .pin28", ".J1 > .pin45", ".J1 > .pin46", ".J1 > .pin63", ".J1 > .pin64", ".J1 > .pin81", ".J1 > .pin82", ".J1 > .pin101", ".J1 > .pin102", ".J1 > .pin113", ".J1 > .pin114", ".J1 > .pin129", ".J1 > .pin130", ".J1 > .pin143", ".J1 > .pin144", ".TP2 > .pin1", ".C25 > .pin1", ".C29 > .pin1", ".C10 > .pin1", ".C8 > .pin1", ".C22 > .pin1", ".C26 > .pin1", ".C23 > .pin1", ".U3 > .pin1", ".U3 > .pin3", ".U3 > .pin9", ".U3 > .pin14", ".U3 > .pin27", ".U3 > .pin43", ".U3 > .pin49", ".C17 > .pin1", ".C1 > .pin1", ".C14 > .pin1", ".U10 > .pin8", ".C12 > .pin1", ".C28 > .pin1", ".C16 > .pin1", ".C4 > .pin1", ".C9 > .pin1", ".C38 > .pin1", ".C42 > .pin1", ".C35 > .pin1", ".C60 > .pin1", ".C59 > .pin1", ".U5 > .pin1", ".U5 > .pin3", ".U5 > .pin9", ".U5 > .pin14", ".U5 > .pin27", ".U5 > .pin43", ".U5 > .pin49", ".C50 > .pin1", ".C46 > .pin1", ".C57 > .pin1", ".C51 > .pin1", ".C33 > .pin1", ".C52 > .pin1", ".U6 > .pin1", ".U6 > .pin3", ".U6 > .pin9", ".U6 > .pin14", ".U6 > .pin27", ".U6 > .pin43", ".U6 > .pin49", ".C40 > .pin1", ".C48 > .pin1", ".U8 > .pin1", ".U8 > .pin3", ".U8 > .pin9", ".U8 > .pin14", ".U8 > .pin27", ".U8 > .pin43", ".U8 > .pin49", ".C39 > .pin1", ".C64 > .pin1", ".C36 > .pin1", ".C45 > .pin1", ".C43 > .pin1", ".C53 > .pin1", ".C34 > .pin1", ".C55 > .pin1", ".C54 > .pin1", ".C41 > .pin1", ".C56 > .pin1", ".C61 > .pin1", ".C37 > .pin1", ".C58 > .pin1", ".U7 > .pin1", ".U7 > .pin3", ".U7 > .pin9", ".U7 > .pin14", ".U7 > .pin27", ".U7 > .pin43", ".U7 > .pin49", ".C47 > .pin1", ".C62 > .pin1", ".C49 > .pin1", ".C63 > .pin1", ".C44 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".C21 > .pin2", ".C3 > .pin2", ".C20 > .pin2", ".C11 > .pin2", ".C6 > .pin2", ".C24 > .pin2", ".C18 > .pin2", ".C66 > .pin2", ".U1 > .pin6", ".U1 > .pin12", ".U1 > .pin28", ".U1 > .pin41", ".U1 > .pin46", ".U1 > .pin52", ".U1 > .pin54", ".C65 > .pin2", ".C19 > .pin2", ".C13 > .pin2", ".C27 > .pin2", ".C5 > .pin2", ".C30 > .pin2", ".U4 > .pin6", ".U4 > .pin12", ".U4 > .pin28", ".U4 > .pin41", ".U4 > .pin46", ".U4 > .pin52", ".U4 > .pin54", ".C7 > .pin2", ".C32 > .pin2", ".C2 > .pin2", ".U2 > .pin6", ".U2 > .pin12", ".U2 > .pin28", ".U2 > .pin41", ".U2 > .pin46", ".U2 > .pin52", ".U2 > .pin54", ".C15 > .pin2", ".C31 > .pin2", ".J1 > .pin1", ".J1 > .pin2", ".J1 > .pin21", ".J1 > .pin22", ".J1 > .pin35", ".J1 > .pin36", ".J1 > .pin55", ".J1 > .pin56", ".J1 > .pin75", ".J1 > .pin76", ".J1 > .pin91", ".J1 > .pin92", ".J1 > .pin107", ".J1 > .pin108", ".J1 > .pin119", ".J1 > .pin120", ".J1 > .pin139", ".J1 > .pin140", ".C25 > .pin2", ".C29 > .pin2", ".C10 > .pin2", ".C8 > .pin2", ".C22 > .pin2", ".C26 > .pin2", ".C23 > .pin2", ".U3 > .pin6", ".U3 > .pin12", ".U3 > .pin28", ".U3 > .pin41", ".U3 > .pin46", ".U3 > .pin52", ".U3 > .pin54", ".C17 > .pin2", ".C1 > .pin2", ".C14 > .pin2", ".U10 > .pin1", ".U10 > .pin2", ".U10 > .pin3", ".U10 > .pin4", ".U10 > .pin7", ".U10 > .pin9", ".C12 > .pin2", ".TP3 > .pin1", ".C28 > .pin2", ".C16 > .pin2", ".C4 > .pin2", ".C9 > .pin2", ".C38 > .pin2", ".C42 > .pin2", ".C35 > .pin2", ".C60 > .pin2", ".C59 > .pin2", ".U5 > .pin6", ".U5 > .pin12", ".U5 > .pin28", ".U5 > .pin41", ".U5 > .pin46", ".U5 > .pin52", ".U5 > .pin54", ".C50 > .pin2", ".C46 > .pin2", ".C57 > .pin2", ".C51 > .pin2", ".C33 > .pin2", ".C52 > .pin2", ".U6 > .pin6", ".U6 > .pin12", ".U6 > .pin28", ".U6 > .pin41", ".U6 > .pin46", ".U6 > .pin52", ".U6 > .pin54", ".C40 > .pin2", ".C48 > .pin2", ".U8 > .pin6", ".U8 > .pin12", ".U8 > .pin28", ".U8 > .pin41", ".U8 > .pin46", ".U8 > .pin52", ".U8 > .pin54", ".C39 > .pin2", ".C64 > .pin2", ".C36 > .pin2", ".C45 > .pin2", ".C43 > .pin2", ".C53 > .pin2", ".C34 > .pin2", ".C55 > .pin2", ".C54 > .pin2", ".C41 > .pin2", ".C56 > .pin2", ".C61 > .pin2", ".C37 > .pin2", ".C58 > .pin2", ".U7 > .pin6", ".U7 > .pin12", ".U7 > .pin28", ".U7 > .pin41", ".U7 > .pin46", ".U7 > .pin52", ".U7 > .pin54", ".C47 > .pin2", ".C62 > .pin2", ".C49 > .pin2", ".C63 > .pin2", ".C44 > .pin2"]}/>
    {/* KiCad net: Net-(J1C-DQ0) */}
    <KiCadNet name={"Net__J1C_DQ0_"} connectsTo={[".R1 > .pin1", ".J1 > .pin3"]}/>
    {/* KiCad net: Net-(J1C-DQ1) */}
    <KiCadNet name={"Net__J1C_DQ1_"} connectsTo={[".R1 > .pin2", ".J1 > .pin5"]}/>
    {/* KiCad net: Net-(J1C-DQ2) */}
    <KiCadNet name={"Net__J1C_DQ2_"} connectsTo={[".R1 > .pin3", ".J1 > .pin7"]}/>
    {/* KiCad net: Net-(J1C-DQ3) */}
    <KiCadNet name={"Net__J1C_DQ3_"} connectsTo={[".R1 > .pin4", ".J1 > .pin9"]}/>
    {/* KiCad net: /SODIMM/D0.D3 */}
    <KiCadNet name={"_SODIMM_D0_D3"} connectsTo={[".R1 > .pin5", ".U1 > .pin44", ".U5 > .pin11"]}/>
    {/* KiCad net: /SODIMM/D0.D2 */}
    <KiCadNet name={"_SODIMM_D0_D2"} connectsTo={[".R1 > .pin6", ".U1 > .pin47", ".U5 > .pin8"]}/>
    {/* KiCad net: /SODIMM/D0.D1 */}
    <KiCadNet name={"_SODIMM_D0_D1"} connectsTo={[".R1 > .pin7", ".U1 > .pin50", ".U5 > .pin5"]}/>
    {/* KiCad net: /SODIMM/D0.D0 */}
    <KiCadNet name={"_SODIMM_D0_D0"} connectsTo={[".R1 > .pin8", ".U1 > .pin53", ".U5 > .pin2"]}/>
    {/* KiCad net: /SODIMM/D0.D7 */}
    <KiCadNet name={"_SODIMM_D0_D7"} connectsTo={[".U1 > .pin2", ".R2 > .pin5", ".U5 > .pin53"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad4) */}
    <KiCadNet name={"unconnected__U1_NC_Pad4_"} connectsTo={[".U1 > .pin4"]}/>
    {/* KiCad net: /SODIMM/D0.D6 */}
    <KiCadNet name={"_SODIMM_D0_D6"} connectsTo={[".U1 > .pin5", ".R2 > .pin6", ".U5 > .pin50"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad7) */}
    <KiCadNet name={"unconnected__U1_NC_Pad7_"} connectsTo={[".U1 > .pin7"]}/>
    {/* KiCad net: /SODIMM/D0.D5 */}
    <KiCadNet name={"_SODIMM_D0_D5"} connectsTo={[".U1 > .pin8", ".R2 > .pin7", ".U5 > .pin47"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad10) */}
    <KiCadNet name={"unconnected__U1_NC_Pad10_"} connectsTo={[".U1 > .pin10"]}/>
    {/* KiCad net: /SODIMM/D0.D4 */}
    <KiCadNet name={"_SODIMM_D0_D4"} connectsTo={[".U1 > .pin11", ".R2 > .pin8", ".U5 > .pin44"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad13) */}
    <KiCadNet name={"unconnected__U1_NC_Pad13_"} connectsTo={[".U1 > .pin13"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad15) */}
    <KiCadNet name={"unconnected__U1_NC_Pad15_"} connectsTo={[".U1 > .pin15"]}/>
    {/* KiCad net: /WE */}
    <KiCadNet name={"_WE"} connectsTo={[".U1 > .pin16", ".U4 > .pin16", ".U2 > .pin16", ".J1 > .pin67", ".U3 > .pin16", ".U5 > .pin16", ".U6 > .pin16", ".U8 > .pin16", ".U7 > .pin16"]}/>
    {/* KiCad net: /CAS */}
    <KiCadNet name={"_CAS"} connectsTo={[".U1 > .pin17", ".U4 > .pin17", ".U2 > .pin17", ".J1 > .pin66", ".U3 > .pin17", ".U5 > .pin17", ".U6 > .pin17", ".U8 > .pin17", ".U7 > .pin17"]}/>
    {/* KiCad net: /RAS */}
    <KiCadNet name={"_RAS"} connectsTo={[".U1 > .pin18", ".U4 > .pin18", ".U2 > .pin18", ".J1 > .pin65", ".U3 > .pin18", ".U5 > .pin18", ".U6 > .pin18", ".U8 > .pin18", ".U7 > .pin18"]}/>
    {/* KiCad net: /S0 */}
    <KiCadNet name={"_S0"} connectsTo={[".U1 > .pin19", ".U4 > .pin19", ".U2 > .pin19", ".J1 > .pin69", ".U3 > .pin19"]}/>
    {/* KiCad net: /BA0 */}
    <KiCadNet name={"_BA0"} connectsTo={[".U1 > .pin20", ".U4 > .pin20", ".U2 > .pin20", ".J1 > .pin106", ".U3 > .pin20", ".U5 > .pin20", ".U6 > .pin20", ".U8 > .pin20", ".U7 > .pin20"]}/>
    {/* KiCad net: /BA1 */}
    <KiCadNet name={"_BA1"} connectsTo={[".U1 > .pin21", ".U4 > .pin21", ".U2 > .pin21", ".J1 > .pin110", ".U3 > .pin21", ".U5 > .pin21", ".U6 > .pin21", ".U8 > .pin21", ".U7 > .pin21"]}/>
    {/* KiCad net: /SDR/A10 */}
    <KiCadNet name={"_SDR_A10"} connectsTo={[".U1 > .pin22", ".U4 > .pin22", ".U2 > .pin22", ".J1 > .pin111", ".U3 > .pin22", ".U5 > .pin22", ".U6 > .pin22", ".U8 > .pin22", ".U7 > .pin22"]}/>
    {/* KiCad net: /SDR/A0 */}
    <KiCadNet name={"_SDR_A0"} connectsTo={[".U1 > .pin23", ".U4 > .pin23", ".U2 > .pin23", ".J1 > .pin29", ".U3 > .pin23", ".U5 > .pin23", ".U6 > .pin23", ".U8 > .pin23", ".U7 > .pin23"]}/>
    {/* KiCad net: /SDR/A1 */}
    <KiCadNet name={"_SDR_A1"} connectsTo={[".U1 > .pin24", ".U4 > .pin24", ".U2 > .pin24", ".J1 > .pin31", ".U3 > .pin24", ".U5 > .pin24", ".U6 > .pin24", ".U8 > .pin24", ".U7 > .pin24"]}/>
    {/* KiCad net: /SDR/A2 */}
    <KiCadNet name={"_SDR_A2"} connectsTo={[".U1 > .pin25", ".U4 > .pin25", ".U2 > .pin25", ".J1 > .pin33", ".U3 > .pin25", ".U5 > .pin25", ".U6 > .pin25", ".U8 > .pin25", ".U7 > .pin25"]}/>
    {/* KiCad net: /SDR/A3 */}
    <KiCadNet name={"_SDR_A3"} connectsTo={[".U1 > .pin26", ".U4 > .pin26", ".U2 > .pin26", ".J1 > .pin30", ".U3 > .pin26", ".U5 > .pin26", ".U6 > .pin26", ".U8 > .pin26", ".U7 > .pin26"]}/>
    {/* KiCad net: /SDR/A4 */}
    <KiCadNet name={"_SDR_A4"} connectsTo={[".U1 > .pin29", ".U4 > .pin29", ".U2 > .pin29", ".J1 > .pin32", ".U3 > .pin29", ".U5 > .pin29", ".U6 > .pin29", ".U8 > .pin29", ".U7 > .pin29"]}/>
    {/* KiCad net: /SDR/A5 */}
    <KiCadNet name={"_SDR_A5"} connectsTo={[".U1 > .pin30", ".U4 > .pin30", ".U2 > .pin30", ".J1 > .pin34", ".U3 > .pin30", ".U5 > .pin30", ".U6 > .pin30", ".U8 > .pin30", ".U7 > .pin30"]}/>
    {/* KiCad net: /SDR/A6 */}
    <KiCadNet name={"_SDR_A6"} connectsTo={[".U1 > .pin31", ".U4 > .pin31", ".U2 > .pin31", ".J1 > .pin103", ".U3 > .pin31", ".U5 > .pin31", ".U6 > .pin31", ".U8 > .pin31", ".U7 > .pin31"]}/>
    {/* KiCad net: /SDR/A7 */}
    <KiCadNet name={"_SDR_A7"} connectsTo={[".U1 > .pin32", ".U4 > .pin32", ".U2 > .pin32", ".J1 > .pin104", ".U3 > .pin32", ".U5 > .pin32", ".U6 > .pin32", ".U8 > .pin32", ".U7 > .pin32"]}/>
    {/* KiCad net: /SDR/A8 */}
    <KiCadNet name={"_SDR_A8"} connectsTo={[".U1 > .pin33", ".U4 > .pin33", ".U2 > .pin33", ".J1 > .pin105", ".U3 > .pin33", ".U5 > .pin33", ".U6 > .pin33", ".U8 > .pin33", ".U7 > .pin33"]}/>
    {/* KiCad net: /SDR/A9 */}
    <KiCadNet name={"_SDR_A9"} connectsTo={[".U1 > .pin34", ".U4 > .pin34", ".U2 > .pin34", ".J1 > .pin109", ".U3 > .pin34", ".U5 > .pin34", ".U6 > .pin34", ".U8 > .pin34", ".U7 > .pin34"]}/>
    {/* KiCad net: /SDR/A11 */}
    <KiCadNet name={"_SDR_A11"} connectsTo={[".U1 > .pin35", ".U4 > .pin35", ".U2 > .pin35", ".J1 > .pin112", ".U3 > .pin35", ".U5 > .pin35", ".U6 > .pin35", ".U8 > .pin35", ".U7 > .pin35"]}/>
    {/* KiCad net: /SDR/A12 */}
    <KiCadNet name={"_SDR_A12"} connectsTo={[".U1 > .pin36", ".U4 > .pin36", ".U2 > .pin36", ".J1 > .pin70", ".U3 > .pin36", ".U5 > .pin36", ".U6 > .pin36", ".U8 > .pin36", ".U7 > .pin36"]}/>
    {/* KiCad net: /CKE0 */}
    <KiCadNet name={"_CKE0"} connectsTo={[".U1 > .pin37", ".U4 > .pin37", ".U2 > .pin37", ".J1 > .pin62", ".U3 > .pin37"]}/>
    {/* KiCad net: /CLK0 */}
    <KiCadNet name={"_CLK0"} connectsTo={[".U1 > .pin38", ".U4 > .pin38", ".U2 > .pin38", ".J1 > .pin61", ".U3 > .pin38"]}/>
    {/* KiCad net: /DQMB0 */}
    <KiCadNet name={"_DQMB0"} connectsTo={[".U1 > .pin39", ".J1 > .pin23", ".U5 > .pin39"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad40) */}
    <KiCadNet name={"unconnected__U1_NC_Pad40_"} connectsTo={[".U1 > .pin40"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad42) */}
    <KiCadNet name={"unconnected__U1_NC_Pad42_"} connectsTo={[".U1 > .pin42"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad45) */}
    <KiCadNet name={"unconnected__U1_NC_Pad45_"} connectsTo={[".U1 > .pin45"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad48) */}
    <KiCadNet name={"unconnected__U1_NC_Pad48_"} connectsTo={[".U1 > .pin48"]}/>
    {/* KiCad net: unconnected-(U1-NC-Pad51) */}
    <KiCadNet name={"unconnected__U1_NC_Pad51_"} connectsTo={[".U1 > .pin51"]}/>
    {/* KiCad net: Net-(J1C-DQ20) */}
    <KiCadNet name={"Net__J1C_DQ20_"} connectsTo={[".R6 > .pin1", ".J1 > .pin93"]}/>
    {/* KiCad net: Net-(J1C-DQ21) */}
    <KiCadNet name={"Net__J1C_DQ21_"} connectsTo={[".R6 > .pin2", ".J1 > .pin95"]}/>
    {/* KiCad net: Net-(J1C-DQ22) */}
    <KiCadNet name={"Net__J1C_DQ22_"} connectsTo={[".R6 > .pin3", ".J1 > .pin97"]}/>
    {/* KiCad net: Net-(J1C-DQ23) */}
    <KiCadNet name={"Net__J1C_DQ23_"} connectsTo={[".R6 > .pin4", ".J1 > .pin99"]}/>
    {/* KiCad net: /SODIMM/D2.D7 */}
    <KiCadNet name={"_SODIMM_D2_D7"} connectsTo={[".R6 > .pin5", ".U3 > .pin2", ".U7 > .pin53"]}/>
    {/* KiCad net: /SODIMM/D2.D6 */}
    <KiCadNet name={"_SODIMM_D2_D6"} connectsTo={[".R6 > .pin6", ".U3 > .pin5", ".U7 > .pin50"]}/>
    {/* KiCad net: /SODIMM/D2.D5 */}
    <KiCadNet name={"_SODIMM_D2_D5"} connectsTo={[".R6 > .pin7", ".U3 > .pin8", ".U7 > .pin47"]}/>
    {/* KiCad net: /SODIMM/D2.D4 */}
    <KiCadNet name={"_SODIMM_D2_D4"} connectsTo={[".R6 > .pin8", ".U3 > .pin11", ".U7 > .pin44"]}/>
    {/* KiCad net: /EEPROM/EEPROM.SCL */}
    <KiCadNet name={"_EEPROM_EEPROM_SCL"} connectsTo={[".TP1 > .pin1", ".R9 > .pin1", ".J1 > .pin142", ".U10 > .pin6"]}/>
    {/* KiCad net: /SODIMM/D3.D7 */}
    <KiCadNet name={"_SODIMM_D3_D7"} connectsTo={[".U4 > .pin2", ".R8 > .pin5", ".U8 > .pin53"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad4) */}
    <KiCadNet name={"unconnected__U4_NC_Pad4_"} connectsTo={[".U4 > .pin4"]}/>
    {/* KiCad net: /SODIMM/D3.D6 */}
    <KiCadNet name={"_SODIMM_D3_D6"} connectsTo={[".U4 > .pin5", ".R8 > .pin6", ".U8 > .pin50"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad7) */}
    <KiCadNet name={"unconnected__U4_NC_Pad7_"} connectsTo={[".U4 > .pin7"]}/>
    {/* KiCad net: /SODIMM/D3.D5 */}
    <KiCadNet name={"_SODIMM_D3_D5"} connectsTo={[".U4 > .pin8", ".R8 > .pin7", ".U8 > .pin47"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad10) */}
    <KiCadNet name={"unconnected__U4_NC_Pad10_"} connectsTo={[".U4 > .pin10"]}/>
    {/* KiCad net: /SODIMM/D3.D4 */}
    <KiCadNet name={"_SODIMM_D3_D4"} connectsTo={[".U4 > .pin11", ".R8 > .pin8", ".U8 > .pin44"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad13) */}
    <KiCadNet name={"unconnected__U4_NC_Pad13_"} connectsTo={[".U4 > .pin13"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad15) */}
    <KiCadNet name={"unconnected__U4_NC_Pad15_"} connectsTo={[".U4 > .pin15"]}/>
    {/* KiCad net: /DQMB3 */}
    <KiCadNet name={"_DQMB3"} connectsTo={[".U4 > .pin39", ".J1 > .pin117", ".U8 > .pin39"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad40) */}
    <KiCadNet name={"unconnected__U4_NC_Pad40_"} connectsTo={[".U4 > .pin40"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad42) */}
    <KiCadNet name={"unconnected__U4_NC_Pad42_"} connectsTo={[".U4 > .pin42"]}/>
    {/* KiCad net: /SODIMM/D3.D3 */}
    <KiCadNet name={"_SODIMM_D3_D3"} connectsTo={[".U4 > .pin44", ".R7 > .pin5", ".U8 > .pin11"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad45) */}
    <KiCadNet name={"unconnected__U4_NC_Pad45_"} connectsTo={[".U4 > .pin45"]}/>
    {/* KiCad net: /SODIMM/D3.D2 */}
    <KiCadNet name={"_SODIMM_D3_D2"} connectsTo={[".U4 > .pin47", ".R7 > .pin6", ".U8 > .pin8"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad48) */}
    <KiCadNet name={"unconnected__U4_NC_Pad48_"} connectsTo={[".U4 > .pin48"]}/>
    {/* KiCad net: /SODIMM/D3.D1 */}
    <KiCadNet name={"_SODIMM_D3_D1"} connectsTo={[".U4 > .pin50", ".R7 > .pin7", ".U8 > .pin5"]}/>
    {/* KiCad net: unconnected-(U4-NC-Pad51) */}
    <KiCadNet name={"unconnected__U4_NC_Pad51_"} connectsTo={[".U4 > .pin51"]}/>
    {/* KiCad net: /SODIMM/D3.D0 */}
    <KiCadNet name={"_SODIMM_D3_D0"} connectsTo={[".U4 > .pin53", ".R7 > .pin8", ".U8 > .pin2"]}/>
    {/* KiCad net: /SODIMM/D1.D7 */}
    <KiCadNet name={"_SODIMM_D1_D7"} connectsTo={[".U2 > .pin2", ".R4 > .pin5", ".U6 > .pin53"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad4) */}
    <KiCadNet name={"unconnected__U2_NC_Pad4_"} connectsTo={[".U2 > .pin4"]}/>
    {/* KiCad net: /SODIMM/D1.D6 */}
    <KiCadNet name={"_SODIMM_D1_D6"} connectsTo={[".U2 > .pin5", ".R4 > .pin6", ".U6 > .pin50"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad7) */}
    <KiCadNet name={"unconnected__U2_NC_Pad7_"} connectsTo={[".U2 > .pin7"]}/>
    {/* KiCad net: /SODIMM/D1.D5 */}
    <KiCadNet name={"_SODIMM_D1_D5"} connectsTo={[".U2 > .pin8", ".R4 > .pin7", ".U6 > .pin47"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad10) */}
    <KiCadNet name={"unconnected__U2_NC_Pad10_"} connectsTo={[".U2 > .pin10"]}/>
    {/* KiCad net: /SODIMM/D1.D4 */}
    <KiCadNet name={"_SODIMM_D1_D4"} connectsTo={[".U2 > .pin11", ".R4 > .pin8", ".U6 > .pin44"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad13) */}
    <KiCadNet name={"unconnected__U2_NC_Pad13_"} connectsTo={[".U2 > .pin13"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad15) */}
    <KiCadNet name={"unconnected__U2_NC_Pad15_"} connectsTo={[".U2 > .pin15"]}/>
    {/* KiCad net: /DQMB1 */}
    <KiCadNet name={"_DQMB1"} connectsTo={[".U2 > .pin39", ".J1 > .pin25", ".U6 > .pin39"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad40) */}
    <KiCadNet name={"unconnected__U2_NC_Pad40_"} connectsTo={[".U2 > .pin40"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad42) */}
    <KiCadNet name={"unconnected__U2_NC_Pad42_"} connectsTo={[".U2 > .pin42"]}/>
    {/* KiCad net: /SODIMM/D1.D3 */}
    <KiCadNet name={"_SODIMM_D1_D3"} connectsTo={[".U2 > .pin44", ".R3 > .pin5", ".U6 > .pin11"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad45) */}
    <KiCadNet name={"unconnected__U2_NC_Pad45_"} connectsTo={[".U2 > .pin45"]}/>
    {/* KiCad net: /SODIMM/D1.D2 */}
    <KiCadNet name={"_SODIMM_D1_D2"} connectsTo={[".U2 > .pin47", ".R3 > .pin6", ".U6 > .pin8"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad48) */}
    <KiCadNet name={"unconnected__U2_NC_Pad48_"} connectsTo={[".U2 > .pin48"]}/>
    {/* KiCad net: /SODIMM/D1.D1 */}
    <KiCadNet name={"_SODIMM_D1_D1"} connectsTo={[".U2 > .pin50", ".R3 > .pin7", ".U6 > .pin5"]}/>
    {/* KiCad net: unconnected-(U2-NC-Pad51) */}
    <KiCadNet name={"unconnected__U2_NC_Pad51_"} connectsTo={[".U2 > .pin51"]}/>
    {/* KiCad net: /SODIMM/D1.D0 */}
    <KiCadNet name={"_SODIMM_D1_D0"} connectsTo={[".U2 > .pin53", ".R3 > .pin8", ".U6 > .pin2"]}/>
    {/* KiCad net: /EEPROM/EEPROM.SDA */}
    <KiCadNet name={"_EEPROM_EEPROM_SDA"} connectsTo={[".R10 > .pin1", ".J1 > .pin141", ".TP4 > .pin1", ".U10 > .pin5"]}/>
    {/* KiCad net: Net-(J1C-DQ28) */}
    <KiCadNet name={"Net__J1C_DQ28_"} connectsTo={[".R8 > .pin1", ".J1 > .pin131"]}/>
    {/* KiCad net: Net-(J1C-DQ29) */}
    <KiCadNet name={"Net__J1C_DQ29_"} connectsTo={[".R8 > .pin2", ".J1 > .pin133"]}/>
    {/* KiCad net: Net-(J1C-DQ30) */}
    <KiCadNet name={"Net__J1C_DQ30_"} connectsTo={[".R8 > .pin3", ".J1 > .pin135"]}/>
    {/* KiCad net: Net-(J1C-DQ31) */}
    <KiCadNet name={"Net__J1C_DQ31_"} connectsTo={[".R8 > .pin4", ".J1 > .pin137"]}/>
    {/* KiCad net: unconnected-(J1D-DQ32-Pad4) */}
    <KiCadNet name={"unconnected__J1D_DQ32_Pad4_"} connectsTo={[".J1 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1D-DQ33-Pad6) */}
    <KiCadNet name={"unconnected__J1D_DQ33_Pad6_"} connectsTo={[".J1 > .pin6"]}/>
    {/* KiCad net: unconnected-(J1D-DQ34-Pad8) */}
    <KiCadNet name={"unconnected__J1D_DQ34_Pad8_"} connectsTo={[".J1 > .pin8"]}/>
    {/* KiCad net: unconnected-(J1D-DQ35-Pad10) */}
    <KiCadNet name={"unconnected__J1D_DQ35_Pad10_"} connectsTo={[".J1 > .pin10"]}/>
    {/* KiCad net: Net-(J1C-DQ4) */}
    <KiCadNet name={"Net__J1C_DQ4_"} connectsTo={[".J1 > .pin13", ".R2 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1D-DQ36-Pad14) */}
    <KiCadNet name={"unconnected__J1D_DQ36_Pad14_"} connectsTo={[".J1 > .pin14"]}/>
    {/* KiCad net: Net-(J1C-DQ5) */}
    <KiCadNet name={"Net__J1C_DQ5_"} connectsTo={[".J1 > .pin15", ".R2 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1D-DQ37-Pad16) */}
    <KiCadNet name={"unconnected__J1D_DQ37_Pad16_"} connectsTo={[".J1 > .pin16"]}/>
    {/* KiCad net: Net-(J1C-DQ6) */}
    <KiCadNet name={"Net__J1C_DQ6_"} connectsTo={[".J1 > .pin17", ".R2 > .pin3"]}/>
    {/* KiCad net: unconnected-(J1D-DQ38-Pad18) */}
    <KiCadNet name={"unconnected__J1D_DQ38_Pad18_"} connectsTo={[".J1 > .pin18"]}/>
    {/* KiCad net: Net-(J1C-DQ7) */}
    <KiCadNet name={"Net__J1C_DQ7_"} connectsTo={[".J1 > .pin19", ".R2 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1D-DQ39-Pad20) */}
    <KiCadNet name={"unconnected__J1D_DQ39_Pad20_"} connectsTo={[".J1 > .pin20"]}/>
    {/* KiCad net: unconnected-(J1D-DQMB4-Pad24) */}
    <KiCadNet name={"unconnected__J1D_DQMB4_Pad24_"} connectsTo={[".J1 > .pin24"]}/>
    {/* KiCad net: unconnected-(J1D-DQMB5-Pad26) */}
    <KiCadNet name={"unconnected__J1D_DQMB5_Pad26_"} connectsTo={[".J1 > .pin26"]}/>
    {/* KiCad net: Net-(J1C-DQ8) */}
    <KiCadNet name={"Net__J1C_DQ8_"} connectsTo={[".J1 > .pin37", ".R3 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1D-DQ40-Pad38) */}
    <KiCadNet name={"unconnected__J1D_DQ40_Pad38_"} connectsTo={[".J1 > .pin38"]}/>
    {/* KiCad net: Net-(J1C-DQ9) */}
    <KiCadNet name={"Net__J1C_DQ9_"} connectsTo={[".J1 > .pin39", ".R3 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1D-DQ41-Pad40) */}
    <KiCadNet name={"unconnected__J1D_DQ41_Pad40_"} connectsTo={[".J1 > .pin40"]}/>
    {/* KiCad net: Net-(J1C-DQ10) */}
    <KiCadNet name={"Net__J1C_DQ10_"} connectsTo={[".J1 > .pin41", ".R3 > .pin3"]}/>
    {/* KiCad net: unconnected-(J1D-DQ42-Pad42) */}
    <KiCadNet name={"unconnected__J1D_DQ42_Pad42_"} connectsTo={[".J1 > .pin42"]}/>
    {/* KiCad net: Net-(J1C-DQ11) */}
    <KiCadNet name={"Net__J1C_DQ11_"} connectsTo={[".J1 > .pin43", ".R3 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1D-DQ43-Pad44) */}
    <KiCadNet name={"unconnected__J1D_DQ43_Pad44_"} connectsTo={[".J1 > .pin44"]}/>
    {/* KiCad net: Net-(J1C-DQ12) */}
    <KiCadNet name={"Net__J1C_DQ12_"} connectsTo={[".J1 > .pin47", ".R4 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1D-DQ44-Pad48) */}
    <KiCadNet name={"unconnected__J1D_DQ44_Pad48_"} connectsTo={[".J1 > .pin48"]}/>
    {/* KiCad net: Net-(J1C-DQ13) */}
    <KiCadNet name={"Net__J1C_DQ13_"} connectsTo={[".J1 > .pin49", ".R4 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1D-DQ45-Pad50) */}
    <KiCadNet name={"unconnected__J1D_DQ45_Pad50_"} connectsTo={[".J1 > .pin50"]}/>
    {/* KiCad net: Net-(J1C-DQ14) */}
    <KiCadNet name={"Net__J1C_DQ14_"} connectsTo={[".J1 > .pin51", ".R4 > .pin3"]}/>
    {/* KiCad net: unconnected-(J1D-DQ46-Pad52) */}
    <KiCadNet name={"unconnected__J1D_DQ46_Pad52_"} connectsTo={[".J1 > .pin52"]}/>
    {/* KiCad net: Net-(J1C-DQ15) */}
    <KiCadNet name={"Net__J1C_DQ15_"} connectsTo={[".J1 > .pin53", ".R4 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1D-DQ47-Pad54) */}
    <KiCadNet name={"unconnected__J1D_DQ47_Pad54_"} connectsTo={[".J1 > .pin54"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad57) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad57_"} connectsTo={[".J1 > .pin57"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad58) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad58_"} connectsTo={[".J1 > .pin58"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad59) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad59_"} connectsTo={[".J1 > .pin59"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad60) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad60_"} connectsTo={[".J1 > .pin60"]}/>
    {/* KiCad net: /CKE1 */}
    <KiCadNet name={"_CKE1"} connectsTo={[".J1 > .pin68", ".U5 > .pin37", ".U6 > .pin37", ".U8 > .pin37", ".U7 > .pin37"]}/>
    {/* KiCad net: /S1 */}
    <KiCadNet name={"_S1"} connectsTo={[".J1 > .pin71", ".U5 > .pin19", ".U6 > .pin19", ".U8 > .pin19", ".U7 > .pin19"]}/>
    {/* KiCad net: unconnected-(J1B-A13-Pad72) */}
    <KiCadNet name={"unconnected__J1B_A13_Pad72_"} connectsTo={[".J1 > .pin72"]}/>
    {/* KiCad net: unconnected-(J1B-NU-Pad73) */}
    <KiCadNet name={"unconnected__J1B_NU_Pad73_"} connectsTo={[".J1 > .pin73"]}/>
    {/* KiCad net: /CLK1 */}
    <KiCadNet name={"_CLK1"} connectsTo={[".J1 > .pin74", ".U5 > .pin38", ".U6 > .pin38", ".U8 > .pin38", ".U7 > .pin38"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad77) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad77_"} connectsTo={[".J1 > .pin77"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad78) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad78_"} connectsTo={[".J1 > .pin78"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad79) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad79_"} connectsTo={[".J1 > .pin79"]}/>
    {/* KiCad net: unconnected-(J1B-NC-Pad80) */}
    <KiCadNet name={"unconnected__J1B_NC_Pad80_"} connectsTo={[".J1 > .pin80"]}/>
    {/* KiCad net: Net-(J1C-DQ16) */}
    <KiCadNet name={"Net__J1C_DQ16_"} connectsTo={[".J1 > .pin83", ".R5 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1D-DQ48-Pad84) */}
    <KiCadNet name={"unconnected__J1D_DQ48_Pad84_"} connectsTo={[".J1 > .pin84"]}/>
    {/* KiCad net: Net-(J1C-DQ17) */}
    <KiCadNet name={"Net__J1C_DQ17_"} connectsTo={[".J1 > .pin85", ".R5 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1D-DQ49-Pad86) */}
    <KiCadNet name={"unconnected__J1D_DQ49_Pad86_"} connectsTo={[".J1 > .pin86"]}/>
    {/* KiCad net: Net-(J1C-DQ18) */}
    <KiCadNet name={"Net__J1C_DQ18_"} connectsTo={[".J1 > .pin87", ".R5 > .pin3"]}/>
    {/* KiCad net: unconnected-(J1D-DQ50-Pad88) */}
    <KiCadNet name={"unconnected__J1D_DQ50_Pad88_"} connectsTo={[".J1 > .pin88"]}/>
    {/* KiCad net: Net-(J1C-DQ19) */}
    <KiCadNet name={"Net__J1C_DQ19_"} connectsTo={[".J1 > .pin89", ".R5 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1D-DQ51-Pad90) */}
    <KiCadNet name={"unconnected__J1D_DQ51_Pad90_"} connectsTo={[".J1 > .pin90"]}/>
    {/* KiCad net: unconnected-(J1D-DQ52-Pad94) */}
    <KiCadNet name={"unconnected__J1D_DQ52_Pad94_"} connectsTo={[".J1 > .pin94"]}/>
    {/* KiCad net: unconnected-(J1D-DQ53-Pad96) */}
    <KiCadNet name={"unconnected__J1D_DQ53_Pad96_"} connectsTo={[".J1 > .pin96"]}/>
    {/* KiCad net: unconnected-(J1D-DQ54-Pad98) */}
    <KiCadNet name={"unconnected__J1D_DQ54_Pad98_"} connectsTo={[".J1 > .pin98"]}/>
    {/* KiCad net: unconnected-(J1D-DQ55-Pad100) */}
    <KiCadNet name={"unconnected__J1D_DQ55_Pad100_"} connectsTo={[".J1 > .pin100"]}/>
    {/* KiCad net: /DQMB2 */}
    <KiCadNet name={"_DQMB2"} connectsTo={[".J1 > .pin115", ".U3 > .pin39", ".U7 > .pin39"]}/>
    {/* KiCad net: unconnected-(J1D-DQMB6-Pad116) */}
    <KiCadNet name={"unconnected__J1D_DQMB6_Pad116_"} connectsTo={[".J1 > .pin116"]}/>
    {/* KiCad net: unconnected-(J1D-DQMB7-Pad118) */}
    <KiCadNet name={"unconnected__J1D_DQMB7_Pad118_"} connectsTo={[".J1 > .pin118"]}/>
    {/* KiCad net: Net-(J1C-DQ24) */}
    <KiCadNet name={"Net__J1C_DQ24_"} connectsTo={[".J1 > .pin121", ".R7 > .pin1"]}/>
    {/* KiCad net: unconnected-(J1D-DQ56-Pad122) */}
    <KiCadNet name={"unconnected__J1D_DQ56_Pad122_"} connectsTo={[".J1 > .pin122"]}/>
    {/* KiCad net: Net-(J1C-DQ25) */}
    <KiCadNet name={"Net__J1C_DQ25_"} connectsTo={[".J1 > .pin123", ".R7 > .pin2"]}/>
    {/* KiCad net: unconnected-(J1D-DQ57-Pad124) */}
    <KiCadNet name={"unconnected__J1D_DQ57_Pad124_"} connectsTo={[".J1 > .pin124"]}/>
    {/* KiCad net: Net-(J1C-DQ26) */}
    <KiCadNet name={"Net__J1C_DQ26_"} connectsTo={[".J1 > .pin125", ".R7 > .pin3"]}/>
    {/* KiCad net: unconnected-(J1D-DQ58-Pad126) */}
    <KiCadNet name={"unconnected__J1D_DQ58_Pad126_"} connectsTo={[".J1 > .pin126"]}/>
    {/* KiCad net: Net-(J1C-DQ27) */}
    <KiCadNet name={"Net__J1C_DQ27_"} connectsTo={[".J1 > .pin127", ".R7 > .pin4"]}/>
    {/* KiCad net: unconnected-(J1D-DQ59-Pad128) */}
    <KiCadNet name={"unconnected__J1D_DQ59_Pad128_"} connectsTo={[".J1 > .pin128"]}/>
    {/* KiCad net: unconnected-(J1D-DQ60-Pad132) */}
    <KiCadNet name={"unconnected__J1D_DQ60_Pad132_"} connectsTo={[".J1 > .pin132"]}/>
    {/* KiCad net: unconnected-(J1D-DQ61-Pad134) */}
    <KiCadNet name={"unconnected__J1D_DQ61_Pad134_"} connectsTo={[".J1 > .pin134"]}/>
    {/* KiCad net: unconnected-(J1D-DQ62-Pad136) */}
    <KiCadNet name={"unconnected__J1D_DQ62_Pad136_"} connectsTo={[".J1 > .pin136"]}/>
    {/* KiCad net: unconnected-(J1D-DQ63-Pad138) */}
    <KiCadNet name={"unconnected__J1D_DQ63_Pad138_"} connectsTo={[".J1 > .pin138"]}/>
    {/* KiCad net: /SODIMM/D2.D3 */}
    <KiCadNet name={"_SODIMM_D2_D3"} connectsTo={[".R5 > .pin5", ".U3 > .pin44", ".U7 > .pin11"]}/>
    {/* KiCad net: /SODIMM/D2.D2 */}
    <KiCadNet name={"_SODIMM_D2_D2"} connectsTo={[".R5 > .pin6", ".U3 > .pin47", ".U7 > .pin8"]}/>
    {/* KiCad net: /SODIMM/D2.D1 */}
    <KiCadNet name={"_SODIMM_D2_D1"} connectsTo={[".R5 > .pin7", ".U3 > .pin50", ".U7 > .pin5"]}/>
    {/* KiCad net: /SODIMM/D2.D0 */}
    <KiCadNet name={"_SODIMM_D2_D0"} connectsTo={[".R5 > .pin8", ".U3 > .pin53", ".U7 > .pin2"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad4) */}
    <KiCadNet name={"unconnected__U3_NC_Pad4_"} connectsTo={[".U3 > .pin4"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad7) */}
    <KiCadNet name={"unconnected__U3_NC_Pad7_"} connectsTo={[".U3 > .pin7"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad10) */}
    <KiCadNet name={"unconnected__U3_NC_Pad10_"} connectsTo={[".U3 > .pin10"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad13) */}
    <KiCadNet name={"unconnected__U3_NC_Pad13_"} connectsTo={[".U3 > .pin13"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad15) */}
    <KiCadNet name={"unconnected__U3_NC_Pad15_"} connectsTo={[".U3 > .pin15"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad40) */}
    <KiCadNet name={"unconnected__U3_NC_Pad40_"} connectsTo={[".U3 > .pin40"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad42) */}
    <KiCadNet name={"unconnected__U3_NC_Pad42_"} connectsTo={[".U3 > .pin42"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad45) */}
    <KiCadNet name={"unconnected__U3_NC_Pad45_"} connectsTo={[".U3 > .pin45"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad48) */}
    <KiCadNet name={"unconnected__U3_NC_Pad48_"} connectsTo={[".U3 > .pin48"]}/>
    {/* KiCad net: unconnected-(U3-NC-Pad51) */}
    <KiCadNet name={"unconnected__U3_NC_Pad51_"} connectsTo={[".U3 > .pin51"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad4) */}
    <KiCadNet name={"unconnected__U5_NC_Pad4_"} connectsTo={[".U5 > .pin4"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad7) */}
    <KiCadNet name={"unconnected__U5_NC_Pad7_"} connectsTo={[".U5 > .pin7"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad10) */}
    <KiCadNet name={"unconnected__U5_NC_Pad10_"} connectsTo={[".U5 > .pin10"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad13) */}
    <KiCadNet name={"unconnected__U5_NC_Pad13_"} connectsTo={[".U5 > .pin13"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad15) */}
    <KiCadNet name={"unconnected__U5_NC_Pad15_"} connectsTo={[".U5 > .pin15"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad40) */}
    <KiCadNet name={"unconnected__U5_NC_Pad40_"} connectsTo={[".U5 > .pin40"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad42) */}
    <KiCadNet name={"unconnected__U5_NC_Pad42_"} connectsTo={[".U5 > .pin42"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad45) */}
    <KiCadNet name={"unconnected__U5_NC_Pad45_"} connectsTo={[".U5 > .pin45"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad48) */}
    <KiCadNet name={"unconnected__U5_NC_Pad48_"} connectsTo={[".U5 > .pin48"]}/>
    {/* KiCad net: unconnected-(U5-NC-Pad51) */}
    <KiCadNet name={"unconnected__U5_NC_Pad51_"} connectsTo={[".U5 > .pin51"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad4) */}
    <KiCadNet name={"unconnected__U6_NC_Pad4_"} connectsTo={[".U6 > .pin4"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad7) */}
    <KiCadNet name={"unconnected__U6_NC_Pad7_"} connectsTo={[".U6 > .pin7"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad10) */}
    <KiCadNet name={"unconnected__U6_NC_Pad10_"} connectsTo={[".U6 > .pin10"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad13) */}
    <KiCadNet name={"unconnected__U6_NC_Pad13_"} connectsTo={[".U6 > .pin13"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad15) */}
    <KiCadNet name={"unconnected__U6_NC_Pad15_"} connectsTo={[".U6 > .pin15"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad40) */}
    <KiCadNet name={"unconnected__U6_NC_Pad40_"} connectsTo={[".U6 > .pin40"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad42) */}
    <KiCadNet name={"unconnected__U6_NC_Pad42_"} connectsTo={[".U6 > .pin42"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad45) */}
    <KiCadNet name={"unconnected__U6_NC_Pad45_"} connectsTo={[".U6 > .pin45"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad48) */}
    <KiCadNet name={"unconnected__U6_NC_Pad48_"} connectsTo={[".U6 > .pin48"]}/>
    {/* KiCad net: unconnected-(U6-NC-Pad51) */}
    <KiCadNet name={"unconnected__U6_NC_Pad51_"} connectsTo={[".U6 > .pin51"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad4) */}
    <KiCadNet name={"unconnected__U8_NC_Pad4_"} connectsTo={[".U8 > .pin4"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad7) */}
    <KiCadNet name={"unconnected__U8_NC_Pad7_"} connectsTo={[".U8 > .pin7"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad10) */}
    <KiCadNet name={"unconnected__U8_NC_Pad10_"} connectsTo={[".U8 > .pin10"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad13) */}
    <KiCadNet name={"unconnected__U8_NC_Pad13_"} connectsTo={[".U8 > .pin13"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad15) */}
    <KiCadNet name={"unconnected__U8_NC_Pad15_"} connectsTo={[".U8 > .pin15"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad40) */}
    <KiCadNet name={"unconnected__U8_NC_Pad40_"} connectsTo={[".U8 > .pin40"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad42) */}
    <KiCadNet name={"unconnected__U8_NC_Pad42_"} connectsTo={[".U8 > .pin42"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad45) */}
    <KiCadNet name={"unconnected__U8_NC_Pad45_"} connectsTo={[".U8 > .pin45"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad48) */}
    <KiCadNet name={"unconnected__U8_NC_Pad48_"} connectsTo={[".U8 > .pin48"]}/>
    {/* KiCad net: unconnected-(U8-NC-Pad51) */}
    <KiCadNet name={"unconnected__U8_NC_Pad51_"} connectsTo={[".U8 > .pin51"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad4) */}
    <KiCadNet name={"unconnected__U7_NC_Pad4_"} connectsTo={[".U7 > .pin4"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad7) */}
    <KiCadNet name={"unconnected__U7_NC_Pad7_"} connectsTo={[".U7 > .pin7"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad10) */}
    <KiCadNet name={"unconnected__U7_NC_Pad10_"} connectsTo={[".U7 > .pin10"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad13) */}
    <KiCadNet name={"unconnected__U7_NC_Pad13_"} connectsTo={[".U7 > .pin13"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad15) */}
    <KiCadNet name={"unconnected__U7_NC_Pad15_"} connectsTo={[".U7 > .pin15"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad40) */}
    <KiCadNet name={"unconnected__U7_NC_Pad40_"} connectsTo={[".U7 > .pin40"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad42) */}
    <KiCadNet name={"unconnected__U7_NC_Pad42_"} connectsTo={[".U7 > .pin42"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad45) */}
    <KiCadNet name={"unconnected__U7_NC_Pad45_"} connectsTo={[".U7 > .pin45"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad48) */}
    <KiCadNet name={"unconnected__U7_NC_Pad48_"} connectsTo={[".U7 > .pin48"]}/>
    {/* KiCad net: unconnected-(U7-NC-Pad51) */}
    <KiCadNet name={"unconnected__U7_NC_Pad51_"} connectsTo={[".U7 > .pin51"]}/>
    <KiCadSchematic /></board>);
}
