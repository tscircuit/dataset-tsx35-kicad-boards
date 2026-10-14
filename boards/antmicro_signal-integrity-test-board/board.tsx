import { KiCadSchematic, KiCadNet } from './schematic'
// Antmicro signal-integrity test board
// Source: https://github.com/antmicro/signal-integrity-test-board
// Commit: de0b5922c372481bb146cbd1d0a9f3b7e97c124a; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import { Footprint_J17, Footprint_J8, Footprint_J20, Footprint_J14, Footprint_J9, Footprint_J3, Footprint_J18, Footprint_C2, Footprint_R2, Footprint_C1, Footprint_J10, Footprint_J11, Footprint_J13, Footprint_J15, Footprint_R4, Footprint_J1, Footprint_J2, Footprint_J12, Footprint_J19, Footprint_J5, Footprint_J6, Footprint_J16, Footprint_J4, Footprint_J21, Footprint_J22, Footprint_G___, Footprint_J7, Footprint_R3 } from './footprints';
export default function Board({ routingDisabled = true }: {
    routingDisabled?: boolean;
} = {}) {
    return (<board width={50} height={100} thickness={1.6} layers={4} outline={[{ "x": -25, "y": 50 }, { "x": 25, "y": 50 }, { "x": 25, "y": -50 }, { "x": -25, "y": -50 }, { "x": -25, "y": 50 }]} routingDisabled={routingDisabled} schAutoLayoutEnabled={false} schMaxTraceDistance={1} schTraceAutoLabelEnabled={true}>
    {/* J17: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J17"} pcbX={27.68} pcbY={-35.6155} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J17 />} noSchematicRepresentation={true}/>

    {/* J8: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J8"} pcbX={27.68} pcbY={15.9995} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J8 />} noSchematicRepresentation={true}/>

    {/* J20: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J20"} pcbX={27.78} pcbY={-25.6155} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J20 />} noSchematicRepresentation={true}/>

    {/* J14: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J14"} pcbX={27.68} pcbY={-15.3005} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J14 />} noSchematicRepresentation={true}/>

    {/* J9: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J9"} pcbX={-27.63} pcbY={6.000501} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J9 />} noSchematicRepresentation={true}/>

    {/* J3: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J3"} pcbX={27.63} pcbY={35.9995} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J3 />} noSchematicRepresentation={true}/>

    {/* J18: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J18"} pcbX={27.68} pcbY={-45.6155} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J18 />} noSchematicRepresentation={true}/>

    {/* C2: C_100n_0402 */}
    <chip name={"C2"} pcbX={-6.61} pcbY={-44.415} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C2 />} noSchematicRepresentation={true}/>

    {/* R2: R_50R_0402 */}
    <chip name={"R2"} pcbX={-17.55} pcbY={45.992501} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0402-FX-50R0GLF"} displayName={"R_50R_0402"} footprint={<Footprint_R2 />} noSchematicRepresentation={true}/>

    {/* C1: C_100n_0402 */}
    <chip name={"C1"} pcbX={7.62} pcbY={-44.345} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"GRM155R61H104KE14D"} displayName={"C_100n_0402"} footprint={<Footprint_C1 />} noSchematicRepresentation={true}/>

    {/* J10: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J10"} pcbX={27.68} pcbY={5.9995} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J10 />} noSchematicRepresentation={true}/>

    {/* J11: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J11"} pcbX={-27.63} pcbY={-3.999499} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J11 />} noSchematicRepresentation={true}/>

    {/* J13: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J13"} pcbX={27.68} pcbY={-4.0005} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J13 />} noSchematicRepresentation={true}/>

    {/* J15: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J15"} pcbX={-27.63} pcbY={-35.614499} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J15 />} noSchematicRepresentation={true}/>

    {/* R4: R_0R_0201 */}
    <chip name={"R4"} pcbX={-2.856} pcbY={2.899999} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0201-FX-0R00GLF"} displayName={"R_0R_0201"} footprint={<Footprint_R4 />} noSchematicRepresentation={true}/>

    {/* J1: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J1"} pcbX={-27.68} pcbY={26.000501} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J1 />} noSchematicRepresentation={true}/>

    {/* J2: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J2"} pcbX={27.63} pcbY={25.9995} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J2 />} noSchematicRepresentation={true}/>

    {/* J12: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J12"} pcbX={-27.63} pcbY={-15.299499} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J12 />} noSchematicRepresentation={true}/>

    {/* J19: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J19"} pcbX={-27.63} pcbY={-25.614499} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J19 />} noSchematicRepresentation={true}/>

    {/* J5: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J5"} pcbX={27.63} pcbY={45.9995} pcbRotation={-90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J5 />} noSchematicRepresentation={true}/>

    {/* J6: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J6"} pcbX={-27.68} pcbY={46.000501} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J6 />} noSchematicRepresentation={true}/>

    {/* J16: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J16"} pcbX={-27.63} pcbY={-45.614499} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J16 />} noSchematicRepresentation={true}/>

    {/* J4: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J4"} pcbX={-27.68} pcbY={36.000501} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J4 />} noSchematicRepresentation={true}/>

    {/* J21: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J21"} pcbX={-4.9995} pcbY={52.78} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J21 />} noSchematicRepresentation={true}/>

    {/* J22: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J22"} pcbX={5.0505} pcbY={52.73} pcbRotation={0} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J22 />} noSchematicRepresentation={true}/>

    {/* G***: LOGO */}
    <chip name={"G___"} pcbX={7.399} pcbY={0.018} pcbRotation={0} pinLabels={{}} displayName={"LOGO"} footprint={<Footprint_G___ />} noSchematicRepresentation={true}/>

    {/* J7: Conn_SMA_RF2-143-T-17-50-G */}
    <chip name={"J7"} pcbX={-27.63} pcbY={16.000501} pcbRotation={90} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"RF2-143-T-17-50-G"} displayName={"Conn_SMA_RF2-143-T-17-50-G"} footprint={<Footprint_J7 />} noSchematicRepresentation={true}/>

    {/* R3: R_0R_0201 */}
    <chip name={"R3"} pcbX={9.744001} pcbY={13.007499} pcbRotation={180} pinLabels={{ "pin1": ["1"], "pin2": ["2"] }} manufacturerPartNumber={"CR0201-FX-0R00GLF"} displayName={"R_0R_0201"} footprint={<Footprint_R3 />} noSchematicRepresentation={true}/>

    {/* KiCad net: Net-(J15-Pad1) */}
    <KiCadNet name={"Net__J15_Pad1_"} connectsTo={[".J17 > .pin1", ".J15 > .pin1"]}/>
    {/* KiCad net: GND */}
    <KiCadNet name={"GND"} connectsTo={[".J17 > .pin2", ".J8 > .pin2", ".J20 > .pin1", ".J20 > .pin2", ".J14 > .pin2", ".J9 > .pin2", ".J3 > .pin2", ".J18 > .pin2", ".C2 > .pin1", ".C2 > .pin2", ".R2 > .pin2", ".C1 > .pin1", ".C1 > .pin2", ".J10 > .pin2", ".J11 > .pin2", ".J13 > .pin2", ".J15 > .pin2", ".R4 > .pin1", ".J1 > .pin2", ".J2 > .pin2", ".J12 > .pin2", ".J19 > .pin1", ".J19 > .pin2", ".J5 > .pin2", ".J6 > .pin2", ".J16 > .pin2", ".J4 > .pin1", ".J4 > .pin2", ".J21 > .pin2", ".J22 > .pin2", ".J7 > .pin2", ".R3 > .pin1"]}/>
    {/* KiCad net: Net-(J7-Pad1) */}
    <KiCadNet name={"Net__J7_Pad1_"} connectsTo={[".J8 > .pin1", ".J7 > .pin1", ".R3 > .pin2"]}/>
    {/* KiCad net: /DIFF_N */}
    <KiCadNet name={"_DIFF_N"} connectsTo={[".J14 > .pin1", ".J12 > .pin1"]}/>
    {/* KiCad net: Net-(J10-Pad1) */}
    <KiCadNet name={"Net__J10_Pad1_"} connectsTo={[".J9 > .pin1", ".J10 > .pin1", ".R4 > .pin2"]}/>
    {/* KiCad net: unconnected-(J3-Pad1) */}
    <KiCadNet name={"unconnected__J3_Pad1_"} connectsTo={[".J3 > .pin1"]}/>
    {/* KiCad net: Net-(J16-Pad1) */}
    <KiCadNet name={"Net__J16_Pad1_"} connectsTo={[".J18 > .pin1", ".J16 > .pin1"]}/>
    {/* KiCad net: Net-(J6-Pad1) */}
    <KiCadNet name={"Net__J6_Pad1_"} connectsTo={[".R2 > .pin1", ".J6 > .pin1"]}/>
    {/* KiCad net: /DIFF_P */}
    <KiCadNet name={"_DIFF_P"} connectsTo={[".J11 > .pin1", ".J13 > .pin1"]}/>
    {/* KiCad net: Net-(J1-Pad1) */}
    <KiCadNet name={"Net__J1_Pad1_"} connectsTo={[".J1 > .pin1", ".J2 > .pin1"]}/>
    {/* KiCad net: Net-(AE1-Pad1) */}
    <KiCadNet name={"Net__AE1_Pad1_"} connectsTo={[".J5 > .pin1"]}/>
    {/* KiCad net: unconnected-(J21-Pad1) */}
    <KiCadNet name={"unconnected__J21_Pad1_"} connectsTo={[".J21 > .pin1"]}/>
    {/* KiCad net: unconnected-(J22-Pad1) */}
    <KiCadNet name={"unconnected__J22_Pad1_"} connectsTo={[".J22 > .pin1"]}/>
    <KiCadSchematic /></board>);
}
