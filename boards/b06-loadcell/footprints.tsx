// Ender-3 load-cell bed-levelling sensor
// Source: https://github.com/jujojujo2003/Ender-3-3DPrinter-Load-Cell-Bed-Leveling-Sensor
// Commit: eae5c6f3e67d0b7f83a500bfb3d1aef38cb69b0b; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
// C22: 10nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C9: 12pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="12pF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C3: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C28: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R12: 5.1k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R8: 1k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C26: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C6: 10uf; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uf" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R6: 27; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="27" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C2: 10uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R1: 100k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C16: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R7: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// USB1: ~; USB4145-03-0170-C_REVA2:GCT_USB4145-03-0170-C_REVA2
export const Footprint_USB1 = () => (<footprint originalLayer="top">
        <hole pcbX="-4mm" pcbY="0mm" diameter="0.71mm"/>
<hole pcbX="4mm" pcbY="0mm" diameter="0.71mm"/>
<platedhole portHints={["pin17"]} pcbX="-4mm" pcbY="1.43mm" outerHeight="1.1mm" outerWidth="1.6mm" holeHeight="0.6mm" holeWidth="1.1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin18"]} pcbX="4mm" pcbY="1.43mm" outerHeight="1.1mm" outerWidth="1.6mm" holeHeight="0.6mm" holeWidth="1.1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin19"]} pcbX="-4mm" pcbY="-1.43mm" outerHeight="1.1mm" outerWidth="1.6mm" holeHeight="0.6mm" holeWidth="1.1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin20"]} pcbX="4mm" pcbY="-1.43mm" outerHeight="1.1mm" outerWidth="1.6mm" holeHeight="0.6mm" holeWidth="1.1mm" shape="pill" pcbRotation="0deg"/>
<smtpad portHints={["pin1"]} pcbX="-2.75mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.25mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.75mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.75mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.25mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.75mm" pcbY="1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="2.75mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.25mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.75mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.25mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.25mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-0.75mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-1.25mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.75mm" pcbY="-1.485mm" layer="top" width="1.15mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -4.47, "y": 1.58 }, { "x": 4.47, "y": 1.58 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": -1.58 }, { "x": -4.47, "y": 1.58 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4.47, "y": 1.58 }, { "x": 4.47, "y": -1.58 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4.47, "y": -1.58 }, { "x": -4.47, "y": -1.58 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.75, "y": 2.56 }, { "x": -2.711732, "y": 2.567612 }, { "x": -2.679289, "y": 2.589289 }, { "x": -2.657612, "y": 2.621732 }, { "x": -2.65, "y": 2.66 }, { "x": -2.657612, "y": 2.698268 }, { "x": -2.679289, "y": 2.730711 }, { "x": -2.711732, "y": 2.752388 }, { "x": -2.75, "y": 2.76 }, { "x": -2.788268, "y": 2.752388 }, { "x": -2.820711, "y": 2.730711 }, { "x": -2.842388, "y": 2.698268 }, { "x": -2.85, "y": 2.66 }, { "x": -2.842388, "y": 2.621732 }, { "x": -2.820711, "y": 2.589289 }, { "x": -2.788268, "y": 2.567612 }, { "x": -2.75, "y": 2.56 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={12.065} pcbY={-3.175} anchorAlignment="center" text="~" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -5.05, "y": 2.31 }, { "x": -5.05, "y": -2.31 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.05, "y": -2.31 }, { "x": 5.05, "y": -2.31 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.05, "y": 2.31 }, { "x": -5.05, "y": 2.31 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.05, "y": -2.31 }, { "x": 5.05, "y": 2.31 }]} layer="top"/>
      </footprint>);
// C4: 4.7nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="4.7nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C13: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// H1: MountingHole; MountingHole:MountingHole_3.5mm
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.5mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={0.5}/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.75} layer="top"/>
      </footprint>);
// C17: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C25: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R11: 5.1k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C24: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R5: 27; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="27" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R2: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U1: ADS1235IRHBR; ADS1235IRHBR:VQFN32_5X5_TEX
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.4511mm" pcbY="1.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4511mm" pcbY="1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.4511mm" pcbY="0.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.4511mm" pcbY="0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.4511mm" pcbY="-0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.4511mm" pcbY="-0.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.4511mm" pcbY="-1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.4511mm" pcbY="-1.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.75mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.25mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.75mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.25mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.25mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.75mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.25mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1.75mm" pcbY="-2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.4511mm" pcbY="-1.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.4511mm" pcbY="-1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.4511mm" pcbY="-0.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.4511mm" pcbY="-0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.4511mm" pcbY="0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.4511mm" pcbY="0.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.4511mm" pcbY="1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.4511mm" pcbY="1.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.75mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.25mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.75mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.25mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.25mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.75mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.25mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.75mm" pcbY="2.4511mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.556mm" height="3.556mm" ccwRotation={-180} shape="rotated_rect"/>











<fabricationnotepath route={[{ "x": -2.54, "y": 2.54 }, { "x": -2.54, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 1.905 }, { "x": -2.54, "y": 1.6002 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 1.397 }, { "x": -2.54, "y": 1.0922 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 1.27 }, { "x": -1.27, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 0.9144 }, { "x": -2.54, "y": 0.6096 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 0.4064 }, { "x": -2.54, "y": 0.1016 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -0.1016 }, { "x": -2.54, "y": -0.4064 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -0.6096 }, { "x": -2.54, "y": -0.9144 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -1.0922 }, { "x": -2.54, "y": -1.397 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -1.6002 }, { "x": -2.54, "y": -1.905 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -2.54 }, { "x": 2.54, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -1.905, "y": -2.54 }, { "x": -1.6002, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -1.6002, "y": 2.54 }, { "x": -1.905, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -2.54 }, { "x": -1.0922, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -1.0922, "y": 2.54 }, { "x": -1.397, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -0.9144, "y": -2.54 }, { "x": -0.6096, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -0.6096, "y": 2.54 }, { "x": -0.9144, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -0.4064, "y": -2.54 }, { "x": -0.1016, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -0.1016, "y": 2.54 }, { "x": -0.4064, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 0.1016, "y": -2.54 }, { "x": 0.4064, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 0.4064, "y": 2.54 }, { "x": 0.1016, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 0.6096, "y": -2.54 }, { "x": 0.9144, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 0.9144, "y": 2.54 }, { "x": 0.6096, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 1.0922, "y": -2.54 }, { "x": 1.397, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 2.54 }, { "x": 1.0922, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 1.6002, "y": -2.54 }, { "x": 1.905, "y": -2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 1.905, "y": 2.54 }, { "x": 1.6002, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": 2.54 }, { "x": -2.54, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": 1.6002 }, { "x": 2.54, "y": 1.905 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": 1.0922 }, { "x": 2.54, "y": 1.397 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": 0.6096 }, { "x": 2.54, "y": 0.9144 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": 0.1016 }, { "x": 2.54, "y": 0.4064 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -0.4064 }, { "x": 2.54, "y": -0.1016 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -0.9144 }, { "x": 2.54, "y": -0.6096 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -1.397 }, { "x": 2.54, "y": -1.0922 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -1.905 }, { "x": 2.54, "y": -1.6002 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -2.54 }, { "x": 2.54, "y": 2.54 }]} strokeWidth={0.1524}/>
<fabricationnotetext pcbX={7.1628} pcbY={0} anchorAlignment="center" text="ADS1235IRHBR" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={-2.6162} pcbY={1.3716} anchorAlignment="center" text="*" font="tscircuit2024" fontSize={0.5}/>


      </footprint>);
// C7: 10uf; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uf" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C21: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={3} pcbY={0} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// CRYSTAL1: 12Mhz; ABM3B-12.000MHZ-12-N2Y-T:XTAL_ABM3B-12.000MHZ-12-N2Y-T
export const Footprint_CRYSTAL1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.2mm" pcbY="2mm" layer="top" width="1.8mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.2mm" pcbY="-2mm" layer="top" width="1.8mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.2mm" pcbY="-2mm" layer="top" width="1.8mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.2mm" pcbY="2mm" layer="top" width="1.8mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -1.6, "y": 2.5 }, { "x": -1.6, "y": -2.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 2.5 }, { "x": 1.6, "y": 2.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 2.5 }, { "x": 1.6, "y": -2.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -2.5 }, { "x": -1.6, "y": -2.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -2.55, "y": 2.1 }, { "x": -2.588268, "y": 2.092388 }, { "x": -2.620711, "y": 2.070711 }, { "x": -2.642388, "y": 2.038268 }, { "x": -2.65, "y": 2 }, { "x": -2.642388, "y": 1.961732 }, { "x": -2.620711, "y": 1.929289 }, { "x": -2.588268, "y": 1.907612 }, { "x": -2.55, "y": 1.9 }, { "x": -2.511732, "y": 1.907612 }, { "x": -2.479289, "y": 1.929289 }, { "x": -2.457612, "y": 1.961732 }, { "x": -2.45, "y": 2 }, { "x": -2.457612, "y": 2.038268 }, { "x": -2.479289, "y": 2.070711 }, { "x": -2.511732, "y": 2.092388 }, { "x": -2.55, "y": 2.1 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={16.365} pcbY={-3.985} anchorAlignment="center" text="12Mhz" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 3.15 }, { "x": -2.05, "y": -3.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 3.15 }, { "x": 2.05, "y": 3.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 3.15 }, { "x": 2.05, "y": -3.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -3.15 }, { "x": -2.05, "y": -3.15 }]} layer="top"/>
      </footprint>);
// C8: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R10: 10K; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R13: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// BLT-CONN1: 532610571; MolexPicoBlade:MOLEX_532610571
export const Footprint_BLT_CONN1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.5mm" pcbY="2.4mm" layer="top" width="0.8mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.25mm" pcbY="2.4mm" layer="top" width="0.8mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="2.4mm" layer="top" width="0.8mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.25mm" pcbY="2.4mm" layer="top" width="0.8mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.5mm" pcbY="2.4mm" layer="top" width="0.8mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-5.05mm" pcbY="-0.5mm" layer="top" width="2.1mm" height="3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="5.05mm" pcbY="-0.5mm" layer="top" width="2.1mm" height="3mm" ccwRotation={-180} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -5.7, "y": 2.6 }, { "x": 5.7, "y": 2.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -5.7, "y": -2.6 }, { "x": -5.7, "y": 2.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -2.865, "y": 4.615 }, { "x": -2.265, "y": 4.615 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -2.565, "y": 4.115 }, { "x": -2.865, "y": 4.615 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -2.265, "y": 4.615 }, { "x": -2.565, "y": 4.115 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.7, "y": 2.6 }, { "x": 5.7, "y": -2.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.7, "y": -2.6 }, { "x": -5.7, "y": -2.6 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={3.025} pcbY={-4.965} anchorAlignment="center" text="532610571" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -6.97, "y": -3.87 }, { "x": -6.97, "y": 3.87 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.97, "y": 3.87 }, { "x": -6.97, "y": 3.87 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.97, "y": 3.87 }, { "x": 6.97, "y": -3.87 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.97, "y": -3.87 }, { "x": -6.97, "y": -3.87 }]} layer="top"/>
      </footprint>);
// C11: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C14: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// H3: MountingHole; MountingHole:MountingHole_3.5mm
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.5mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={0.5}/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.75} layer="top"/>
      </footprint>);
// C27: 10nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// 3VREG1: AP2112K-3.3; Package_TO_SOT_SMD:SOT-23-5
export const Footprint__3VREG1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="AP2112K-3.3" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="3VREG1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// C12: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// FLASH1: W25Q128JVS; Package_SO:SOIC-8_5.23x5.23mm_P1.27mm
export const Footprint_FLASH1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.6mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.6mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="3.6mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.6mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="1.6mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.615, "y": 1.615 }, { "x": -1.615, "y": 2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.615, "y": -2.615 }, { "x": -2.615, "y": 1.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.615, "y": 2.615 }, { "x": 2.615, "y": 2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.615, "y": 2.615 }, { "x": 2.615, "y": -2.615 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.615, "y": -2.615 }, { "x": -2.615, "y": -2.615 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.56} anchorAlignment="center" text="W25Q128JVS" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FLASH1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -4.65, "y": 2.86 }, { "x": -4.65, "y": -2.86 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.65, "y": -2.86 }, { "x": 4.65, "y": -2.86 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.65, "y": 2.86 }, { "x": -4.65, "y": 2.86 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.65, "y": -2.86 }, { "x": 4.65, "y": 2.86 }]} layer="top"/>
      </footprint>);
// C5: 10uf; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uf" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R3: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R9: 1k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C1: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C23: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1nF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R4: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// LED1: WS2812B; LED_SMD:LED_WS2812B_PLCC4_5.0x5.0mm_P3.2mm
export const Footprint_LED1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.45mm" pcbY="1.65mm" layer="top" width="1.5mm" height="0.9mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.45mm" pcbY="-1.65mm" layer="top" width="1.5mm" height="0.9mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="2.45mm" pcbY="-1.65mm" layer="top" width="1.5mm" height="0.9mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="2.45mm" pcbY="1.65mm" layer="top" width="1.5mm" height="0.9mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -2.5, "y": 2.5 }, { "x": -2.5, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -2.5 }, { "x": 2.5, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 2.5 }, { "x": -2.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -1.5 }, { "x": 1.5, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -2.5 }, { "x": 2.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2, "y": 0 }, { "x": 1.847759, "y": 0.765367 }, { "x": 1.414214, "y": 1.414214 }, { "x": 0.765367, "y": 1.847759 }, { "x": 0, "y": 2 }, { "x": -0.765367, "y": 1.847759 }, { "x": -1.414214, "y": 1.414214 }, { "x": -1.847759, "y": 0.765367 }, { "x": -2, "y": 0 }, { "x": -1.847759, "y": -0.765367 }, { "x": -1.414214, "y": -1.414214 }, { "x": -0.765367, "y": -1.847759 }, { "x": 0, "y": -2 }, { "x": 0.765367, "y": -1.847759 }, { "x": 1.414214, "y": -1.414214 }, { "x": 1.847759, "y": -0.765367 }, { "x": 2, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="center" text="WS2812B" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="LED1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -3.45, "y": 2.75 }, { "x": -3.45, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.45, "y": -2.75 }, { "x": 3.45, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.45, "y": 2.75 }, { "x": -3.45, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.45, "y": -2.75 }, { "x": 3.45, "y": 2.75 }]} layer="top"/>
      </footprint>);
// SWD1: ~; Connector_JST:JST_SH_SM03B-SRSS-TB_1x03-1MP_P1.00mm_Horizontal
export const Footprint_SWD1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="2mm" layer="top" cornerRadius="0.075mm" width="1.55mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="2mm" layer="top" cornerRadius="0.075mm" width="1.55mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1mm" pcbY="2mm" layer="top" cornerRadius="0.075mm" width="1.55mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.3mm" pcbY="-1.875mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="2.3mm" pcbY="-1.875mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -2.5, "y": 1.675 }, { "x": -2.5, "y": -2.575 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 1.675 }, { "x": 2.5, "y": 1.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -2.575 }, { "x": 2.5, "y": -2.575 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 1.675 }, { "x": -1, "y": 0.967893 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.967893 }, { "x": -0.5, "y": 1.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 1.675 }, { "x": 2.5, "y": -2.575 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.98} anchorAlignment="center" text="~" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="SWD1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.4, "y": 3.28 }, { "x": -3.4, "y": -3.28 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.4, "y": -3.28 }, { "x": 3.4, "y": -3.28 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.4, "y": 3.28 }, { "x": -3.4, "y": 3.28 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.4, "y": -3.28 }, { "x": 3.4, "y": 3.28 }]} layer="top"/>
      </footprint>);
// H4: MountingHole; MountingHole:MountingHole_3.5mm
export const Footprint_H4 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.5mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H4" font="tscircuit2024" fontSize={0.5}/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.75} layer="top"/>
      </footprint>);
// C20: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Boot1: PTS645SK50SMTR92LFS; PushButton:SW_PTS645SK50SMTR92LFS
export const Footprint_Boot1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.975mm" pcbY="2.25mm" layer="top" width="1.55mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="3.975mm" pcbY="2.25mm" layer="top" width="1.55mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.975mm" pcbY="-2.25mm" layer="top" width="1.55mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="3.975mm" pcbY="-2.25mm" layer="top" width="1.55mm" height="1.3mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -3, "y": 3 }, { "x": 3, "y": 3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3, "y": -3 }, { "x": -3, "y": 3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3, "y": 3 }, { "x": 3, "y": -3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3, "y": -3 }, { "x": -3, "y": -3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -2.209888, "y": 2.257 }, { "x": -2.221924, "y": 2.317507 }, { "x": -2.256198, "y": 2.368802 }, { "x": -2.307493, "y": 2.403076 }, { "x": -2.368, "y": 2.415112 }, { "x": -2.428507, "y": 2.403076 }, { "x": -2.479802, "y": 2.368802 }, { "x": -2.514076, "y": 2.317507 }, { "x": -2.526112, "y": 2.257 }, { "x": -2.514076, "y": 2.196493 }, { "x": -2.479802, "y": 2.145198 }, { "x": -2.428507, "y": 2.110924 }, { "x": -2.368, "y": 2.098888 }, { "x": -2.307493, "y": 2.110924 }, { "x": -2.256198, "y": 2.145198 }, { "x": -2.221924, "y": 2.196493 }, { "x": -2.209888, "y": 2.257 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={15.23461} pcbY={-4.368615} anchorAlignment="center" text="PTS645SK50SMTR92LFS" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -5, "y": 3.25 }, { "x": 5, "y": 3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5, "y": -3.25 }, { "x": -5, "y": 3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": 3.25 }, { "x": 5, "y": -3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": -3.25 }, { "x": -5, "y": -3.25 }]} layer="top"/>
      </footprint>);
// RP2040: RP2040; Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP3.2x3.2mm
export const Footprint_RP2040 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.4375mm" pcbY="2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.4375mm" pcbY="2.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.4375mm" pcbY="1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.4375mm" pcbY="1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.4375mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.4375mm" pcbY="0.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.4375mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.4375mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.4375mm" pcbY="-0.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.4375mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.4375mm" pcbY="-1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.4375mm" pcbY="-1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.4375mm" pcbY="-2.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.4375mm" pcbY="-2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-1.8mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-1.4mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-1mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-0.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="0.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="0.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="1mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="1.4mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="1.8mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="2.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="2.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="3.4375mm" pcbY="-2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="3.4375mm" pcbY="-2.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="3.4375mm" pcbY="-1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="3.4375mm" pcbY="-1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="3.4375mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="3.4375mm" pcbY="-0.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="3.4375mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="3.4375mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="3.4375mm" pcbY="0.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="3.4375mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="3.4375mm" pcbY="1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="3.4375mm" pcbY="1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="3.4375mm" pcbY="2.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="3.4375mm" pcbY="2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="2.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="2.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="1.8mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="1.4mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="1mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="0.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="0.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="-0.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="-0.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="-1mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin53"]} pcbX="-1.4mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin54"]} pcbX="-1.8mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin55"]} pcbX="-2.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin56"]} pcbX="-2.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" shape="rect"/>
<smtpad portHints={["pin57"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.2mm" height="3.2mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": -3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.82} anchorAlignment="center" text="RP2040" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="RP2040" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -4.12, "y": 4.12 }, { "x": -4.12, "y": -4.12 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.12, "y": -4.12 }, { "x": 4.12, "y": -4.12 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.12, "y": 4.12 }, { "x": -4.12, "y": 4.12 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.12, "y": -4.12 }, { "x": 4.12, "y": 4.12 }]} layer="top"/>
      </footprint>);
// H2: MountingHole; MountingHole:MountingHole_3.5mm
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.5mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={0.5}/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.75} layer="top"/>
      </footprint>);
// LOADCELL1: B4B-XH-A; Connector_JST:JST_XH_B4B-XH-A_1x04_P2.50mm_Vertical
export const Footprint_LOADCELL1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.95mm" rectPadWidth="1.7mm" rectPadHeight="1.95mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="7.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
























<fabricationnotepath route={[{ "x": -2.45, "y": 2.35 }, { "x": -2.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": -3.4 }, { "x": 9.95, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.625, "y": 2.35 }, { "x": 0, "y": 1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.35 }, { "x": 0.625, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.95, "y": 2.35 }, { "x": -2.45, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.95, "y": -3.4 }, { "x": 9.95, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={3.75} pcbY={-4.6} anchorAlignment="center" text="B4B-XH-A" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={3.75} pcbY={-2.7} anchorAlignment="center" text="LOADCELL1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -2.95, "y": 2.85 }, { "x": -2.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -3.9 }, { "x": 10.45, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 10.45, "y": 2.85 }, { "x": -2.95, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 10.45, "y": -3.9 }, { "x": 10.45, "y": 2.85 }]} layer="top"/>
      </footprint>);
// C19: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C10: 12pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="12pF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C15: 0.1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C18: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={3} pcbY={0} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
