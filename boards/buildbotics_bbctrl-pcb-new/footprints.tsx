// Buildbotics controller
// Source: https://github.com/buildbotics/bbctrl-pcb-new
// Commit: 1a2f36ddc4797ac05e45405fb5664ff1f7ca7974; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
// D11: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="0.762mm" height="1.1176mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="0.762mm" height="1.1176mm" ccwRotation={90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// R8: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// J11: SERIAL; Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_J11 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -6.85 }, { "x": 1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -6.85 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// D18: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// TP5: Vs; Project_Footprints_Library:test_point
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="Vs" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// R46: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// R43: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="180" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R43" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R75: 130; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R64: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R64 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C59: .22uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C37: 10pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Q10: FDC5614P; Project_Footprints_Library:FDC5614P
export const Footprint_Q10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35255mm" pcbY="0.950001mm" layer="top" width="0.5588mm" height="1.0033mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.35255mm" pcbY="0mm" layer="top" width="0.5588mm" height="1.0033mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.35255mm" pcbY="-0.950001mm" layer="top" width="0.5588mm" height="1.0033mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.35255mm" pcbY="-0.950001mm" layer="top" width="0.5588mm" height="1.0033mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.35255mm" pcbY="0mm" layer="top" width="0.5588mm" height="1.0033mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.35255mm" pcbY="0.950001mm" layer="top" width="0.5588mm" height="1.0033mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8509, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8509, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8509, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": 1.5494 }, { "x": -0.8509, "y": -1.5494 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": 0.696 }, { "x": -0.8509, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -0.254 }, { "x": -0.8509, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -1.204 }, { "x": -0.8509, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -1.5494 }, { "x": 0.8509, "y": -1.5494 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 1.5494 }, { "x": -0.8509, "y": 1.5494 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 1.204 }, { "x": 0.8509, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 0.254 }, { "x": 0.8509, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -0.254 }, { "x": 1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -0.696 }, { "x": 0.8509, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -1.5494 }, { "x": 0.8509, "y": 1.5494 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8509, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.254 }, { "x": 0.8509, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.254 }, { "x": 1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8509, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.5494 }, { "x": 0.289882, "y": 1.455212 }, { "x": 0.246588, "y": 1.370243 }, { "x": 0.179157, "y": 1.302812 }, { "x": 0.094188, "y": 1.259518 }, { "x": 0, "y": 1.2446 }, { "x": -0.094188, "y": 1.259518 }, { "x": -0.179157, "y": 1.302812 }, { "x": -0.246588, "y": 1.370243 }, { "x": -0.289882, "y": 1.455212 }, { "x": -0.3048, "y": 1.5494 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1082, "y": 1.4834 }, { "x": -1.1049, "y": 1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1082, "y": -1.4834 }, { "x": -2.1082, "y": 1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1082, "y": -1.4834 }, { "x": -1.1049, "y": -1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1049, "y": 1.8034 }, { "x": 1.1049, "y": 1.8034 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1049, "y": 1.4834 }, { "x": -1.1049, "y": 1.8034 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.1049, "y": -1.8034 }, { "x": -1.1049, "y": -1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1049, "y": 1.8034 }, { "x": 1.1049, "y": 1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1049, "y": -1.4834 }, { "x": 1.1049, "y": -1.8034 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.1049, "y": -1.8034 }, { "x": -1.1049, "y": -1.8034 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1082, "y": 1.4834 }, { "x": 1.1049, "y": 1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1082, "y": 1.4834 }, { "x": 2.1082, "y": -1.4834 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1082, "y": -1.4834 }, { "x": 1.1049, "y": -1.4834 }]} layer="top"/>
      </footprint>);
// C82: 130pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C82 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R29: 8.06k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R87: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R87 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R5: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// Q2: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// J12: I2C; Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_J12 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-7.41} anchorAlignment="center" text="I2C" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="J12" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -6.85 }, { "x": 1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -6.85 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// C88: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C88 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R33: 47k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="47k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// TP24: Vin; Project_Footprints_Library:test_point
export const Footprint_TP24 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="Vin" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP24" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// TP12: test; Project_Footprints_Library:test_point
export const Footprint_TP12 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP12" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// Q15: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// R67: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R67 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R67" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C61: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C61 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C96: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C96 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R66: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R66 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R66" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C15: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// U20: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// U9: DRV8711DCP; Project_Footprints_Library:DRV8711DCP
export const Footprint_U9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-2.949999mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.949999mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.949999mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.949999mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.949999mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.949999mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.949999mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.949999mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.949999mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.949999mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.949999mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.949999mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.949999mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.949999mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.949999mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.949999mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-2.949999mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-2.949999mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-2.949999mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="2.950002mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="2.950002mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="2.950002mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.950002mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.950002mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="2.950002mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="2.950002mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="2.950002mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="2.950002mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="2.950002mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="2.950002mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="2.950002mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="2.950002mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="2.950002mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="2.950002mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="2.950002mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="2.950002mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="2.950002mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="2.950002mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.6mm" height="9.700001mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3.200001, "y": 4.625 }, { "x": -2.250031, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -2.250031, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.124998 }, { "x": -2.250031, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -2.250031, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.624997 }, { "x": -2.250031, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -2.250031, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.124995 }, { "x": -2.250031, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -2.250031, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.624993 }, { "x": -2.250031, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -2.250031, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.124997 }, { "x": -2.250031, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -2.250031, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.624995 }, { "x": -2.250031, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -2.250031, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.124994 }, { "x": -2.250031, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -2.250031, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.624992 }, { "x": -2.250031, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -2.250031, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.124996 }, { "x": -2.250031, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -2.250031, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.375006 }, { "x": -2.250031, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -2.250031, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.875007 }, { "x": -2.250031, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -2.250031, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.375004 }, { "x": -2.250031, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -2.250031, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.875005 }, { "x": -2.250031, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -2.250031, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.375007 }, { "x": -2.250031, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -2.250031, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.875003 }, { "x": -2.250031, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -2.250031, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.375005 }, { "x": -2.250031, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -2.250031, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.875006 }, { "x": -2.250031, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -2.250031, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.375008 }, { "x": -2.250031, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -2.250031, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": 4.649975 }, { "x": -2.240021, "y": 4.709975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250026, "y": 4.649975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250021, "y": -4.690024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250021, "y": -4.690024 }, { "x": -2.230021, "y": -4.740024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.240021, "y": 4.709975 }, { "x": -2.220021, "y": 4.759975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.230021, "y": -4.740024 }, { "x": -2.200021, "y": -4.780023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.220021, "y": 4.759975 }, { "x": -2.190021, "y": 4.799975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.200021, "y": -4.780023 }, { "x": -2.160021, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.190021, "y": 4.799975 }, { "x": -2.130021, "y": 4.829975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.160021, "y": -4.820023 }, { "x": -2.110021, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.130021, "y": 4.829975 }, { "x": -2.080021, "y": 4.849975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.110021, "y": -4.840023 }, { "x": -2.050031, "y": -4.850021 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.080021, "y": 4.849975 }, { "x": -2.050021, "y": 4.84997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050031, "y": -4.850021 }, { "x": 2.04997, "y": -4.850031 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050021, "y": 4.84997 }, { "x": 2.049981, "y": 4.84996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.04997, "y": -4.850031 }, { "x": 2.069978, "y": -4.850023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.049981, "y": 4.84996 }, { "x": 2.109978, "y": 4.839975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.069978, "y": -4.850023 }, { "x": 2.109978, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": 4.839975 }, { "x": 2.169978, "y": 4.809975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": -4.840023 }, { "x": 2.159978, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.159978, "y": -4.820023 }, { "x": 2.189978, "y": -4.790023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.169978, "y": 4.809975 }, { "x": 2.209978, "y": 4.769975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.189978, "y": -4.790023 }, { "x": 2.209978, "y": -4.760024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": 4.769975 }, { "x": 2.239978, "y": 4.719975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": -4.760024 }, { "x": 2.239978, "y": -4.710024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": 4.719975 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": -4.710024 }, { "x": 2.249965, "y": -4.650036 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249965, "y": -4.650036 }, { "x": 2.249975, "y": 4.649965 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249975, "y": 4.649965 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.625 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.375 }, { "x": 3.200001, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.124998 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.874999 }, { "x": 3.200001, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.624997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.374997 }, { "x": 3.200001, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.124995 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.874996 }, { "x": 3.200001, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.624993 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.374994 }, { "x": 3.200001, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.124997 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.874998 }, { "x": 3.200001, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.624995 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.374996 }, { "x": 3.200001, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.124994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.874994 }, { "x": 3.200001, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.624992 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.374993 }, { "x": 3.200001, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.124996 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.125004 }, { "x": 3.200001, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.375006 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.625005 }, { "x": 3.200001, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.875007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.125007 }, { "x": 3.200001, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.375004 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.625003 }, { "x": 3.200001, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.875005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.125005 }, { "x": 3.200001, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.375007 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.625006 }, { "x": 3.200001, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.875003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.125003 }, { "x": 3.200001, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.375005 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.625004 }, { "x": 3.200001, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.875006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.125006 }, { "x": 3.200001, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.375008 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.625007 }, { "x": 3.200001, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 4.375 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.874999 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.374997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.874996 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.374994 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.874998 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.374996 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.874994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.374993 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.125004 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.625005 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.125007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.625003 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.125005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.625006 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.125003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.625004 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.125006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.625007 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.852386, "y": 4.149976 }, { "x": -1.837703, "y": 4.242681 }, { "x": -1.795091, "y": 4.326311 }, { "x": -1.728722, "y": 4.39268 }, { "x": -1.645092, "y": 4.435292 }, { "x": -1.552387, "y": 4.449975 }, { "x": -1.459682, "y": 4.435292 }, { "x": -1.376052, "y": 4.39268 }, { "x": -1.309683, "y": 4.326311 }, { "x": -1.267071, "y": 4.242681 }, { "x": -1.252388, "y": 4.149976 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.252388, "y": 4.149976 }, { "x": -1.267071, "y": 4.057271 }, { "x": -1.309683, "y": 3.973641 }, { "x": -1.376052, "y": 3.907272 }, { "x": -1.459682, "y": 3.86466 }, { "x": -1.552387, "y": 3.849977 }, { "x": -1.645092, "y": 3.86466 }, { "x": -1.728722, "y": 3.907272 }, { "x": -1.795091, "y": 3.973641 }, { "x": -1.837703, "y": 4.057271 }, { "x": -1.852386, "y": 4.149976 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.9, "y": 5.150002 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": -3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": 3.9, "y": -5.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": -5.15 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
      </footprint>);
// Q22: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C87: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C87 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text=".1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C87" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R54: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// C94: 1uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C94 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1uF 100V" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C94" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP21: test; Project_Footprints_Library:test_point
export const Footprint_TP21 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP21" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// C28: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// D9: RB521S30T1G; Project_Footprints_Library:RB521S30T1G
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.8509, "y": 0.1778 }, { "x": -0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -0.1778 }, { "x": -0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.4445 }, { "x": -0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.22225 }, { "x": -0.42545, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.1778 }, { "x": -0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.1778 }, { "x": -0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.22225 }, { "x": -0.42545, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.4445 }, { "x": 0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.4445 }, { "x": -0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.1778 }, { "x": 0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.1778 }, { "x": 0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.4445 }, { "x": 0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 0.1778 }, { "x": 0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -0.1778 }, { "x": 0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.3, "y": 0.7 }, { "x": -1.3, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.3, "y": -0.7 }, { "x": 1.2, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": 0.7 }, { "x": -1.3, "y": 0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": -0.7 }, { "x": 1.2, "y": 0.7 }]} layer="top"/>
      </footprint>);
// C33: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C6: 10n; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// D3: MBR0580; Diode_SMD:D_SOD-123
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="1.2mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="1.2mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": 2.35, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": 1.15 }, { "x": 2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": -1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
      </footprint>);
// TP19: test; Project_Footprints_Library:test_point
export const Footprint_TP19 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP19" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// TP16: test; Project_Footprints_Library:test_point
export const Footprint_TP16 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP16" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// C43: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C24: 68nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C64: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C64 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C97: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C97 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C58: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C58 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// C19: 10uF 63V; Capacitor_SMD:C_1210_3225Metric_Pad1.33x2.70mm_HandSolder
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.325mm" height="2.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.325mm" height="2.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.48, "y": 1.6 }, { "x": 2.48, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.48, "y": -1.6 }, { "x": -2.48, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": 1.6 }, { "x": 2.48, "y": -1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": -1.6 }, { "x": -2.48, "y": -1.6 }]} layer="top"/>
      </footprint>);
// C9: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C23: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C69: 130pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// U25: ZXTR2012Z-7; Project_Footprints_Library:ZXTR2012Z7
export const Footprint_U25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="-1.017mm" layer="top" width="1.73mm" height="0.58mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.132mm" layer="top" width="1.5mm" height="0.76mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.5mm" pcbY="-1.017mm" layer="top" width="1.73mm" height="0.58mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="1.133mm" layer="top" width="3.03mm" height="1.933mm" ccwRotation={90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -2.25, "y": 1.25 }, { "x": 2.25, "y": 1.25 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": -2.25, "y": -1.25 }, { "x": -2.25, "y": 1.25 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 2.25, "y": 1.25 }, { "x": 2.25, "y": -1.25 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 2.25, "y": -1.25 }, { "x": -2.25, "y": -1.25 }]} strokeWidth={0.2}/>

<courtyardoutline outline={[{ "x": -3.25, "y": 3.647 }, { "x": 3.25, "y": 3.647 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.25, "y": -2.883 }, { "x": -3.25, "y": 3.647 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.25, "y": 3.647 }, { "x": 3.25, "y": -2.883 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.25, "y": -2.883 }, { "x": -3.25, "y": -2.883 }]} layer="top"/>
      </footprint>);
// Q23: 2N7002K; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// U16: ISL83485IBZ; Project_Footprints_Library:ISL83485IBZ
export const Footprint_U16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.4638mm" pcbY="1.905mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4638mm" pcbY="0.635mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.4638mm" pcbY="-0.635mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.4638mm" pcbY="-1.905mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.4638mm" pcbY="-1.905mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="2.4638mm" pcbY="-0.635mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.4638mm" pcbY="0.635mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.4638mm" pcbY="1.905mm" layer="top" width="1.9812mm" height="0.5588mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3.0988, "y": 2.159 }, { "x": -3.0988, "y": 1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": 1.651 }, { "x": -1.9939, "y": 1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": 0.889 }, { "x": -3.0988, "y": 0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": 0.381 }, { "x": -1.9939, "y": 0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -0.381 }, { "x": -3.0988, "y": -0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -0.889 }, { "x": -1.9939, "y": -0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -1.651 }, { "x": -3.0988, "y": -2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -2.159 }, { "x": -1.9939, "y": -2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 2.5019 }, { "x": -1.9939, "y": -2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 2.159 }, { "x": -3.0988, "y": 2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 1.651 }, { "x": -1.9939, "y": 2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 0.889 }, { "x": -3.0988, "y": 0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 0.381 }, { "x": -1.9939, "y": 0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -0.381 }, { "x": -3.0988, "y": -0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -0.889 }, { "x": -1.9939, "y": -0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -1.651 }, { "x": -3.0988, "y": -1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -2.159 }, { "x": -1.9939, "y": -1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -2.5019 }, { "x": 1.9939, "y": -2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 2.5019 }, { "x": -1.9939, "y": 2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 2.159 }, { "x": 1.9939, "y": 1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 1.651 }, { "x": 3.0988, "y": 1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 0.889 }, { "x": 1.9939, "y": 0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 0.381 }, { "x": 3.0988, "y": 0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -0.381 }, { "x": 1.9939, "y": -0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -0.889 }, { "x": 3.0988, "y": -0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -1.651 }, { "x": 1.9939, "y": -2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -2.159 }, { "x": 3.0988, "y": -2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -2.5019 }, { "x": 1.9939, "y": 2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 2.159 }, { "x": 1.9939, "y": 2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 1.651 }, { "x": 3.0988, "y": 2.159 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 0.889 }, { "x": 1.9939, "y": 0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 0.381 }, { "x": 3.0988, "y": 0.889 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -0.381 }, { "x": 1.9939, "y": -0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -0.889 }, { "x": 3.0988, "y": -0.381 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -1.651 }, { "x": 1.9939, "y": -1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -2.159 }, { "x": 3.0988, "y": -1.651 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 2.5019 }, { "x": 0.289882, "y": 2.407712 }, { "x": 0.246588, "y": 2.322743 }, { "x": 0.179157, "y": 2.255312 }, { "x": 0.094188, "y": 2.212018 }, { "x": 0, "y": 2.1971 }, { "x": -0.094188, "y": 2.212018 }, { "x": -0.179157, "y": 2.255312 }, { "x": -0.246588, "y": 2.322743 }, { "x": -0.289882, "y": 2.407712 }, { "x": -0.3048, "y": 2.5019 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.6129} pcbY={2.4257} anchorAlignment="center" text="*" font="tscircuit2024" fontSize={1}/>


<courtyardoutline outline={[{ "x": -3.7084, "y": 2.4384 }, { "x": -2.2479, "y": 2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.7084, "y": -2.4384 }, { "x": -3.7084, "y": 2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.7084, "y": -2.4384 }, { "x": -2.2479, "y": -2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2479, "y": 2.7559 }, { "x": 2.2479, "y": 2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2479, "y": 2.4384 }, { "x": -2.2479, "y": 2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2479, "y": -2.7559 }, { "x": -2.2479, "y": -2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": 2.7559 }, { "x": 2.2479, "y": 2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": 2.4384 }, { "x": 3.7084, "y": 2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": -2.4384 }, { "x": 2.2479, "y": -2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": -2.7559 }, { "x": -2.2479, "y": -2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7084, "y": 2.4384 }, { "x": 3.7084, "y": -2.4384 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7084, "y": -2.4384 }, { "x": 2.2479, "y": -2.4384 }]} layer="top"/>
      </footprint>);
// C54: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R85: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R85 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C83: 130pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C83 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C90: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C90 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C10: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C29: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// U6: L7987; Project_Footprints_Library:L7987
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.921mm" pcbY="2.274999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.921mm" pcbY="1.625001mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.921mm" pcbY="0.974999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.921mm" pcbY="0.325001mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.921mm" pcbY="-0.324998mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.921mm" pcbY="-0.974999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.921mm" pcbY="-1.624998mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.921mm" pcbY="-2.274999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="2.921mm" pcbY="-2.274999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.921mm" pcbY="-1.625001mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="2.921mm" pcbY="-0.974999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="2.921mm" pcbY="-0.325001mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.921mm" pcbY="0.324998mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="2.921mm" pcbY="0.974999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2.921mm" pcbY="1.624998mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.921mm" pcbY="2.274999mm" layer="top" width="0.3556mm" height="1.4732mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.2004mm" height="3.2004mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -3.302, "y": 2.4274 }, { "x": -3.302, "y": 2.1226 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 2.1226 }, { "x": -2.2479, "y": 2.1226 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 1.777401 }, { "x": -3.302, "y": 1.472601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 1.472601 }, { "x": -2.2479, "y": 1.472601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 1.127401 }, { "x": -3.302, "y": 0.822601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 0.822601 }, { "x": -2.2479, "y": 0.822601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 0.477401 }, { "x": -3.302, "y": 0.172601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": 0.172601 }, { "x": -2.2479, "y": 0.172601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -0.172599 }, { "x": -3.302, "y": -0.477399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -0.477399 }, { "x": -2.2479, "y": -0.477399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -0.822599 }, { "x": -3.302, "y": -1.127399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -1.127399 }, { "x": -2.2479, "y": -1.127399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -1.472599 }, { "x": -3.302, "y": -1.777399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -1.777399 }, { "x": -2.2479, "y": -1.777399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -2.122599 }, { "x": -3.302, "y": -2.427399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.302, "y": -2.427399 }, { "x": -2.2479, "y": -2.427399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 2.5527 }, { "x": -2.2479, "y": -2.5527 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 2.4274 }, { "x": -3.302, "y": 2.4274 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 2.1226 }, { "x": -2.2479, "y": 2.4274 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 1.777401 }, { "x": -3.302, "y": 1.777401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 1.472601 }, { "x": -2.2479, "y": 1.777401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 1.127401 }, { "x": -3.302, "y": 1.127401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 0.822601 }, { "x": -2.2479, "y": 1.127401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 0.477401 }, { "x": -3.302, "y": 0.477401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": 0.172601 }, { "x": -2.2479, "y": 0.477401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -0.172599 }, { "x": -3.302, "y": -0.172599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -0.477399 }, { "x": -2.2479, "y": -0.172599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -0.822599 }, { "x": -3.302, "y": -0.822599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -1.127399 }, { "x": -2.2479, "y": -0.822599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -1.472599 }, { "x": -3.302, "y": -1.472599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -1.777399 }, { "x": -2.2479, "y": -1.472599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -2.122599 }, { "x": -3.302, "y": -2.122599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -2.427399 }, { "x": -2.2479, "y": -2.122599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2479, "y": -2.5527 }, { "x": 2.2479, "y": -2.5527 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 2.5527 }, { "x": -2.2479, "y": 2.5527 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 2.427399 }, { "x": 2.2479, "y": 2.122599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 2.122599 }, { "x": 3.302, "y": 2.122599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 1.777399 }, { "x": 2.2479, "y": 1.472599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 1.472599 }, { "x": 3.302, "y": 1.472599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 1.127399 }, { "x": 2.2479, "y": 0.822599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 0.822599 }, { "x": 3.302, "y": 0.822599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 0.477399 }, { "x": 2.2479, "y": 0.172599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": 0.172599 }, { "x": 3.302, "y": 0.172599 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -0.172601 }, { "x": 2.2479, "y": -0.477401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -0.477401 }, { "x": 3.302, "y": -0.477401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -0.822601 }, { "x": 2.2479, "y": -1.127401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -1.127401 }, { "x": 3.302, "y": -1.127401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -1.472601 }, { "x": 2.2479, "y": -1.777401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -1.777401 }, { "x": 3.302, "y": -1.777401 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -2.1226 }, { "x": 2.2479, "y": -2.4274 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -2.4274 }, { "x": 3.302, "y": -2.4274 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2479, "y": -2.5527 }, { "x": 2.2479, "y": 2.5527 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 2.427399 }, { "x": 2.2479, "y": 2.427399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 2.122599 }, { "x": 3.302, "y": 2.427399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 1.777399 }, { "x": 2.2479, "y": 1.777399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 1.472599 }, { "x": 3.302, "y": 1.777399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 1.127399 }, { "x": 2.2479, "y": 1.127399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 0.822599 }, { "x": 3.302, "y": 1.127399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 0.477399 }, { "x": 2.2479, "y": 0.477399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": 0.172599 }, { "x": 3.302, "y": 0.477399 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -0.172601 }, { "x": 2.2479, "y": -0.172601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -0.477401 }, { "x": 3.302, "y": -0.172601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -0.822601 }, { "x": 2.2479, "y": -0.822601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -1.127401 }, { "x": 3.302, "y": -0.822601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -1.472601 }, { "x": 2.2479, "y": -1.472601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -1.777401 }, { "x": 3.302, "y": -1.472601 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -2.1226 }, { "x": 2.2479, "y": -2.1226 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.302, "y": -2.4274 }, { "x": 3.302, "y": -2.1226 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 2.5527 }, { "x": 0.289882, "y": 2.458512 }, { "x": 0.246588, "y": 2.373543 }, { "x": 0.179157, "y": 2.306112 }, { "x": 0.094188, "y": 2.262818 }, { "x": 0, "y": 2.2479 }, { "x": -0.094188, "y": 2.262818 }, { "x": -0.179157, "y": 2.306112 }, { "x": -0.246588, "y": 2.373543 }, { "x": -0.289882, "y": 2.458512 }, { "x": -0.3048, "y": 2.5527 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.9116, "y": 2.7068 }, { "x": -2.5019, "y": 2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9116, "y": -2.7068 }, { "x": -3.9116, "y": 2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9116, "y": -2.7068 }, { "x": -2.5019, "y": -2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5019, "y": 2.8067 }, { "x": 2.5019, "y": 2.8067 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5019, "y": 2.7068 }, { "x": -2.5019, "y": 2.8067 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.5019, "y": -2.8067 }, { "x": -2.5019, "y": -2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5019, "y": 2.8067 }, { "x": 2.5019, "y": 2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5019, "y": 2.7068 }, { "x": 3.9116, "y": 2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5019, "y": -2.7068 }, { "x": 2.5019, "y": -2.8067 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5019, "y": -2.8067 }, { "x": -2.5019, "y": -2.8067 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9116, "y": 2.7068 }, { "x": 3.9116, "y": -2.7068 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9116, "y": -2.7068 }, { "x": 2.5019, "y": -2.7068 }]} layer="top"/>
      </footprint>);
// D12: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// D17: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// TP20: test; Project_Footprints_Library:test_point
export const Footprint_TP20 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP20" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// C12: 1uF 100V; Capacitor_SMD:C_1210_3225Metric_Pad1.33x2.70mm_HandSolder
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.325mm" height="2.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.325mm" height="2.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.48, "y": 1.6 }, { "x": 2.48, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.48, "y": -1.6 }, { "x": -2.48, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": 1.6 }, { "x": 2.48, "y": -1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": -1.6 }, { "x": -2.48, "y": -1.6 }]} layer="top"/>
      </footprint>);
// C72: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C72 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// D7: RB521S30T1G; Project_Footprints_Library:RB521S30T1G
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.8509, "y": 0.1778 }, { "x": -0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -0.1778 }, { "x": -0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.4445 }, { "x": -0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.22225 }, { "x": -0.42545, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.1778 }, { "x": -0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.1778 }, { "x": -0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.22225 }, { "x": -0.42545, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.4445 }, { "x": 0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.4445 }, { "x": -0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.1778 }, { "x": 0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.1778 }, { "x": 0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.4445 }, { "x": 0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 0.1778 }, { "x": 0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -0.1778 }, { "x": 0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.3, "y": 0.7 }, { "x": -1.3, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.3, "y": -0.7 }, { "x": 1.2, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": 0.7 }, { "x": -1.3, "y": 0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": -0.7 }, { "x": 1.2, "y": 0.7 }]} layer="top"/>
      </footprint>);
// R22: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C62: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C62 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP3: TP_VDD; Project_Footprints_Library:test_point
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_VDD" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// TP10: TP_3.3V; Project_Footprints_Library:test_point
export const Footprint_TP10 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_3.3V" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP10" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// C27: 47uF; Capacitor_SMD:C_1210_3225Metric_Pad1.33x2.70mm_HandSolder
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.7mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.7mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.48, "y": 1.6 }, { "x": 2.48, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.48, "y": -1.6 }, { "x": -2.48, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": 1.6 }, { "x": 2.48, "y": -1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": -1.6 }, { "x": -2.48, "y": -1.6 }]} layer="top"/>
      </footprint>);
// R58: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R58 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// D16: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// C38: .22uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R71: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C55: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C55 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// J10: RPI; Connector_PinHeader_2.54mm:PinHeader_2x20_P2.54mm_Vertical
export const Footprint_J10 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin8"]} pcbX="2.54mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin10"]} pcbX="2.54mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin12"]} pcbX="2.54mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-15.24mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin14"]} pcbX="2.54mm" pcbY="-15.24mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-17.78mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin16"]} pcbX="2.54mm" pcbY="-17.78mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="0mm" pcbY="-20.32mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin18"]} pcbX="2.54mm" pcbY="-20.32mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin19"]} pcbX="0mm" pcbY="-22.86mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin20"]} pcbX="2.54mm" pcbY="-22.86mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin21"]} pcbX="0mm" pcbY="-25.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin22"]} pcbX="2.54mm" pcbY="-25.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin23"]} pcbX="0mm" pcbY="-27.94mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin24"]} pcbX="2.54mm" pcbY="-27.94mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin25"]} pcbX="0mm" pcbY="-30.48mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin26"]} pcbX="2.54mm" pcbY="-30.48mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin27"]} pcbX="0mm" pcbY="-33.02mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin28"]} pcbX="2.54mm" pcbY="-33.02mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin29"]} pcbX="0mm" pcbY="-35.56mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin30"]} pcbX="2.54mm" pcbY="-35.56mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin31"]} pcbX="0mm" pcbY="-38.1mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin32"]} pcbX="2.54mm" pcbY="-38.1mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="-40.64mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin34"]} pcbX="2.54mm" pcbY="-40.64mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin35"]} pcbX="0mm" pcbY="-43.18mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin36"]} pcbX="2.54mm" pcbY="-43.18mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin37"]} pcbX="0mm" pcbY="-45.72mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin38"]} pcbX="2.54mm" pcbY="-45.72mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-48.26mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin40"]} pcbX="2.54mm" pcbY="-48.26mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>








<fabricationnotepath route={[{ "x": -1.27, "y": 0 }, { "x": 0, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -49.53 }, { "x": -1.27, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.27 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": 3.81, "y": -49.53 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": -49.53 }, { "x": -1.27, "y": -49.53 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.27} pcbY={-50.59} anchorAlignment="center" text="RPI" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={1.27} pcbY={-24.13} anchorAlignment="center" text="J10" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -50.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -50.05 }, { "x": 4.35, "y": -50.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": -50.05 }, { "x": 4.35, "y": 1.8 }]} layer="top"/>
      </footprint>);
// TP4: TP_SenseIn; Project_Footprints_Library:test_point
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_SenseIn" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// U4: TSC2012IDT; Project_Footprints_Library:TSC2012IDT
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.72415mm" pcbY="1.905mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.72415mm" pcbY="0.635mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.72415mm" pcbY="-0.635mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.72415mm" pcbY="-1.905mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.72415mm" pcbY="-1.905mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.72415mm" pcbY="-0.635mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.72415mm" pcbY="0.635mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.72415mm" pcbY="1.905mm" layer="top" width="0.5334mm" height="1.4605mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.0988, "y": 2.1463 }, { "x": -3.0988, "y": 1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": 1.6637 }, { "x": -1.9939, "y": 1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": 0.8763 }, { "x": -3.0988, "y": 0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": 0.3937 }, { "x": -1.9939, "y": 0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -0.3937 }, { "x": -3.0988, "y": -0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -0.8763 }, { "x": -1.9939, "y": -0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -1.6637 }, { "x": -3.0988, "y": -2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.0988, "y": -2.1463 }, { "x": -1.9939, "y": -2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 2.5019 }, { "x": -1.9939, "y": -2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 2.1463 }, { "x": -3.0988, "y": 2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 1.6637 }, { "x": -1.9939, "y": 2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 0.8763 }, { "x": -3.0988, "y": 0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": 0.3937 }, { "x": -1.9939, "y": 0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -0.3937 }, { "x": -3.0988, "y": -0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -0.8763 }, { "x": -1.9939, "y": -0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -1.6637 }, { "x": -3.0988, "y": -1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -2.1463 }, { "x": -1.9939, "y": -1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9939, "y": -2.5019 }, { "x": 1.9939, "y": -2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 2.5019 }, { "x": -1.9939, "y": 2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 2.1463 }, { "x": 1.9939, "y": 1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 1.6637 }, { "x": 3.0988, "y": 1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 0.8763 }, { "x": 1.9939, "y": 0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": 0.3937 }, { "x": 3.0988, "y": 0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -0.3937 }, { "x": 1.9939, "y": -0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -0.8763 }, { "x": 3.0988, "y": -0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -1.6637 }, { "x": 1.9939, "y": -2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -2.1463 }, { "x": 3.0988, "y": -2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9939, "y": -2.5019 }, { "x": 1.9939, "y": 2.5019 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 2.1463 }, { "x": 1.9939, "y": 2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 1.6637 }, { "x": 3.0988, "y": 2.1463 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 0.8763 }, { "x": 1.9939, "y": 0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": 0.3937 }, { "x": 3.0988, "y": 0.8763 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -0.3937 }, { "x": 1.9939, "y": -0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -0.8763 }, { "x": 3.0988, "y": -0.3937 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -1.6637 }, { "x": 1.9939, "y": -1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.0988, "y": -2.1463 }, { "x": 3.0988, "y": -1.6637 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 2.5019 }, { "x": 0.289882, "y": 2.407712 }, { "x": 0.246588, "y": 2.322743 }, { "x": 0.179157, "y": 2.255312 }, { "x": 0.094188, "y": 2.212018 }, { "x": 0, "y": 2.1971 }, { "x": -0.094188, "y": 2.212018 }, { "x": -0.179157, "y": 2.255312 }, { "x": -0.246588, "y": 2.322743 }, { "x": -0.289882, "y": 2.407712 }, { "x": -0.3048, "y": 2.5019 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.7084, "y": 2.4257 }, { "x": -2.2479, "y": 2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.7084, "y": -2.4257 }, { "x": -3.7084, "y": 2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.7084, "y": -2.4257 }, { "x": -2.2479, "y": -2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2479, "y": 2.7559 }, { "x": 2.2479, "y": 2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2479, "y": 2.4257 }, { "x": -2.2479, "y": 2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2479, "y": -2.7559 }, { "x": -2.2479, "y": -2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": 2.7559 }, { "x": 2.2479, "y": 2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": -2.4257 }, { "x": 2.2479, "y": -2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2479, "y": -2.7559 }, { "x": -2.2479, "y": -2.7559 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7084, "y": 2.4257 }, { "x": 2.2479, "y": 2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7084, "y": 2.4257 }, { "x": 3.7084, "y": -2.4257 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7084, "y": -2.4257 }, { "x": 2.2479, "y": -2.4257 }]} layer="top"/>
      </footprint>);
// D10: RB521S30T1G; Project_Footprints_Library:RB521S30T1G
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.8509, "y": 0.1778 }, { "x": -0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -0.1778 }, { "x": -0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.4445 }, { "x": -0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.22225 }, { "x": -0.42545, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.1778 }, { "x": -0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.1778 }, { "x": -0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.22225 }, { "x": -0.42545, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.4445 }, { "x": 0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.4445 }, { "x": -0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.1778 }, { "x": 0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.1778 }, { "x": 0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.4445 }, { "x": 0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 0.1778 }, { "x": 0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -0.1778 }, { "x": 0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.3, "y": 0.7 }, { "x": -1.3, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.3, "y": -0.7 }, { "x": 1.2, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": 0.7 }, { "x": -1.3, "y": 0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": -0.7 }, { "x": 1.2, "y": 0.7 }]} layer="top"/>
      </footprint>);
// R69: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C73: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C73 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C86: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C86 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C66: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C66 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// J4: Conn_02x03_Odd_Even; Connector_PinHeader_2.54mm:PinHeader_2x03_P2.54mm_Vertical
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>








<fabricationnotepath route={[{ "x": -1.27, "y": 0 }, { "x": 0, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.27 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": 3.81, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -6.85 }, { "x": 4.35, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": -6.85 }, { "x": 4.35, "y": 1.8 }]} layer="top"/>
      </footprint>);
// Q13: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// TP23: 12V; Connector_PinHeader_2.54mm:PinHeader_1x01_P2.54mm_Vertical
export const Footprint_TP23 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.27 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.27 }, { "x": -1.27, "y": -1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.33} anchorAlignment="center" text="12V" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.8 }, { "x": 1.8, "y": -1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -1.8 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// C78: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C78 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C51: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R44: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// U8: LM74801QDRRRQ1; Project_Footprints_Library:LM74800QDRRRQ1
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.39mm" pcbY="1.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.39mm" pcbY="0.750001mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.39mm" pcbY="0.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.39mm" pcbY="-0.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.39mm" pcbY="-0.750001mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.39mm" pcbY="-1.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.39mm" pcbY="-1.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.39mm" pcbY="-0.750001mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.39mm" pcbY="-0.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.39mm" pcbY="0.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.39mm" pcbY="0.750001mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="1.39mm" pcbY="1.25mm" layer="top" width="0.249999mm" height="0.619999mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="0mm" layer="top" width="2.5mm" height="1.3mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -1.5 }, { "x": 1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": -1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.124999, "y": 1.3 }, { "x": -1.201536, "y": 1.284776 }, { "x": -1.26642, "y": 1.241421 }, { "x": -1.309775, "y": 1.176537 }, { "x": -1.324999, "y": 1.1 }, { "x": -1.309775, "y": 1.023463 }, { "x": -1.26642, "y": 0.958579 }, { "x": -1.201536, "y": 0.915224 }, { "x": -1.124999, "y": 0.9 }, { "x": -1.048462, "y": 0.915224 }, { "x": -0.983578, "y": 0.958579 }, { "x": -0.940223, "y": 1.023463 }, { "x": -0.924999, "y": 1.1 }, { "x": -0.940223, "y": 1.176537 }, { "x": -0.983578, "y": 1.241421 }, { "x": -1.048462, "y": 1.284776 }, { "x": -1.124999, "y": 1.3 }]} strokeWidth={0.1}/>

      </footprint>);
// Q24: 2N7002K; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// R3: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// C63: 10n; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C63 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R21: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q7: 2N7002K; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// C84: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C84 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C2: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.5} pcbY={-6.25} anchorAlignment="center" text="100uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={2.5} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// C79: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C79 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text=".1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C79" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// J6: Conn_02x08_Odd_Even; Connector_PinHeader_2.54mm:PinHeader_2x08_P2.54mm_Vertical
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="2.54mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin8"]} pcbX="2.54mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin10"]} pcbX="2.54mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin12"]} pcbX="2.54mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-15.24mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin14"]} pcbX="2.54mm" pcbY="-15.24mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-17.78mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin16"]} pcbX="2.54mm" pcbY="-17.78mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>








<fabricationnotepath route={[{ "x": -1.27, "y": 0 }, { "x": 0, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -19.05 }, { "x": -1.27, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.27 }, { "x": 3.81, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": 1.27 }, { "x": 3.81, "y": -19.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.81, "y": -19.05 }, { "x": -1.27, "y": -19.05 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -19.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -19.55 }, { "x": 4.35, "y": -19.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.35, "y": -19.55 }, { "x": 4.35, "y": 1.8 }]} layer="top"/>
      </footprint>);
// C26: 1.5nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C44: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C44 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.5} pcbY={-6.25} anchorAlignment="center" text="100uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={2.5} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// C41: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C32: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C20: 1uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Q9: 2N7002K; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// U13: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// TP2: TP_HGATE; Connector_PinHeader_1.00mm:PinHeader_1x01_P1.00mm_Vertical
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.5mm" rectPadWidth="0.85mm" rectPadHeight="0.85mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>







<fabricationnotepath route={[{ "x": -0.635, "y": 0.1825 }, { "x": -0.3175, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": -0.5 }, { "x": -0.635, "y": 0.1825 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3175, "y": 0.5 }, { "x": 0.635, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 0.5 }, { "x": 0.635, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": -0.5 }, { "x": -0.635, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.4} pcbY={-2.2} anchorAlignment="center" text="TP_HGATE" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.15, "y": 1 }, { "x": -1.15, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.15, "y": -1 }, { "x": 1.15, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.15, "y": 1 }, { "x": -1.15, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.15, "y": -1 }, { "x": 1.15, "y": 1 }]} layer="top"/>
      </footprint>);
// C74: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C74 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R30: 402; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C89: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C89 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R42: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="2.4k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R42" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q5: BSC040N08NS5ATMA1; Project_Footprints_Library:INFINEON_PG-TDSON-8-5
export const Footprint_Q5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="2.9mm" pcbY="-1.905mm" layer="top" width="0.85mm" height="0.5mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.9mm" pcbY="-0.635mm" layer="top" width="0.85mm" height="0.5mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="2.9mm" pcbY="0.635mm" layer="top" width="0.85mm" height="0.5mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="2.9mm" pcbY="1.905mm" layer="top" width="0.85mm" height="0.5mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.925mm" pcbY="1.905mm" layer="top" width="0.8mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.65mm" pcbY="0mm" layer="top" width="3.75mm" height="4.41mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.925mm" pcbY="0.635mm" layer="top" width="0.8mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.925mm" pcbY="-0.635mm" layer="top" width="0.8mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.925mm" pcbY="-1.905mm" layer="top" width="0.8mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -3.075, "y": 2.575 }, { "x": 3.075, "y": 2.575 }]} strokeWidth={0.254}/>
<fabricationnotepath route={[{ "x": -3.075, "y": -2.575 }, { "x": -3.075, "y": 2.575 }]} strokeWidth={0.254}/>
<fabricationnotepath route={[{ "x": 3.075, "y": 2.575 }, { "x": 3.075, "y": -2.575 }]} strokeWidth={0.254}/>
<fabricationnotepath route={[{ "x": 3.075, "y": -2.575 }, { "x": -3.075, "y": -2.575 }]} strokeWidth={0.254}/>
<fabricationnotetext pcbX={-1.00308} pcbY={-0.03194} anchorAlignment="center" text="Q5" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// TP11: TP_5V; Project_Footprints_Library:test_point
export const Footprint_TP11 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_5V" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP11" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// Z1: DDZ6V2BQ-7; Project_Footprints_Library:SOD3716X145N
export const Footprint_Z1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7mm" pcbY="0mm" layer="top" width="1.2mm" height="0.75mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7mm" pcbY="0mm" layer="top" width="1.2mm" height="0.75mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.35, "y": 0.775 }, { "x": 1.35, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.35, "y": 0.175 }, { "x": -0.75, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.35, "y": -0.775 }, { "x": -1.35, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.35, "y": 0.775 }, { "x": 1.35, "y": -0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.35, "y": -0.775 }, { "x": -1.35, "y": -0.775 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.55, "y": 1.675 }, { "x": 2.55, "y": 1.675 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.55, "y": -1.675 }, { "x": -2.55, "y": 1.675 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.55, "y": 1.675 }, { "x": 2.55, "y": -1.675 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.55, "y": -1.675 }, { "x": -2.55, "y": -1.675 }]} layer="top"/>
      </footprint>);
// R84: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R84 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U7: AZ1117IH-3.3TRG1; Project_Footprints_Library:SOT230P700X180-4N
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.1mm" pcbY="2.3mm" layer="top" width="1.85mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.1mm" pcbY="0mm" layer="top" width="1.85mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.1mm" pcbY="-2.3mm" layer="top" width="1.85mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="3.1mm" pcbY="0mm" layer="top" width="1.85mm" height="3.2mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -1.75, "y": 3.25 }, { "x": 1.75, "y": 3.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.75, "y": 0.95 }, { "x": 0.55, "y": 3.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.75, "y": -3.25 }, { "x": -1.75, "y": 3.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.75, "y": 3.25 }, { "x": 1.75, "y": -3.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -3.25 }, { "x": -1.75, "y": -3.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={1.27}/>

<courtyardoutline outline={[{ "x": -4.275, "y": 3.6 }, { "x": 4.275, "y": 3.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.275, "y": -3.6 }, { "x": -4.275, "y": 3.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.275, "y": 3.6 }, { "x": 4.275, "y": -3.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.275, "y": -3.6 }, { "x": -4.275, "y": -3.6 }]} layer="top"/>
      </footprint>);
// C35: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// L2: L_Coupled_1243; Project_Footprints_Library:SRF2012-121YA
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.925mm" pcbY="0.425mm" layer="top" width="0.75mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.925mm" pcbY="0.425mm" layer="top" width="0.75mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.925mm" pcbY="-0.425mm" layer="top" width="0.75mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.925mm" pcbY="-0.425mm" layer="top" width="0.75mm" height="0.4mm" shape="rect"/>


      </footprint>);
// R7: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// TP14: TP_VIN; Project_Footprints_Library:test_point
export const Footprint_TP14 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_VIN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP14" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// U22: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R18: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R79: 100k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R79 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// TP18: test; Project_Footprints_Library:test_point
export const Footprint_TP18 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP18" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// R4: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U23: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R39: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="180" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R39" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// X1: ABLS-16.000MHZ-B4-T; Project_Footprints_Library:ABLS-16.000MHZ-B4-T
export const Footprint_X1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-5.0038mm" pcbY="0mm" layer="top" width="1.2192mm" height="4.318mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="5.0038mm" pcbY="0mm" layer="top" width="1.2192mm" height="4.318mm" ccwRotation={90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -3.3528, "y": 2.3495 }, { "x": 3.3528, "y": 2.3495 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3528, "y": 1.8415 }, { "x": 3.3528, "y": 1.8415 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.3528, "y": -1.8415 }, { "x": -3.3528, "y": -1.8415 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.3528, "y": -2.3495 }, { "x": -3.3528, "y": -2.3495 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }, { "x": -6.5278, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3528, "y": -1.8415 }, { "x": -3.452497, "y": -1.838799 }, { "x": -3.551901, "y": -1.830705 }, { "x": -3.650722, "y": -1.817241 }, { "x": -3.748668, "y": -1.798447 }, { "x": -3.845453, "y": -1.774377 }, { "x": -3.940794, "y": -1.745103 }, { "x": -4.034409, "y": -1.710711 }, { "x": -4.126026, "y": -1.6713 }, { "x": -4.215374, "y": -1.626987 }, { "x": -4.302192, "y": -1.577902 }, { "x": -4.386226, "y": -1.524189 }, { "x": -4.467228, "y": -1.466005 }, { "x": -4.544962, "y": -1.403521 }, { "x": -4.619199, "y": -1.336921 }, { "x": -4.689721, "y": -1.266399 }, { "x": -4.756321, "y": -1.192162 }, { "x": -4.818805, "y": -1.114428 }, { "x": -4.876989, "y": -1.033426 }, { "x": -4.930702, "y": -0.949392 }, { "x": -4.979787, "y": -0.862574 }, { "x": -5.0241, "y": -0.773226 }, { "x": -5.063511, "y": -0.681609 }, { "x": -5.097903, "y": -0.587994 }, { "x": -5.127177, "y": -0.492653 }, { "x": -5.151247, "y": -0.395868 }, { "x": -5.170041, "y": -0.297922 }, { "x": -5.183505, "y": -0.199101 }, { "x": -5.191599, "y": -0.099697 }, { "x": -5.1943, "y": 0 }, { "x": -5.191599, "y": 0.099697 }, { "x": -5.183505, "y": 0.199101 }, { "x": -5.170041, "y": 0.297922 }, { "x": -5.151247, "y": 0.395868 }, { "x": -5.127177, "y": 0.492653 }, { "x": -5.097903, "y": 0.587994 }, { "x": -5.063511, "y": 0.681609 }, { "x": -5.0241, "y": 0.773226 }, { "x": -4.979787, "y": 0.862574 }, { "x": -4.930702, "y": 0.949392 }, { "x": -4.876989, "y": 1.033426 }, { "x": -4.818805, "y": 1.114428 }, { "x": -4.756321, "y": 1.192162 }, { "x": -4.689721, "y": 1.266399 }, { "x": -4.619199, "y": 1.336921 }, { "x": -4.544962, "y": 1.403521 }, { "x": -4.467228, "y": 1.466005 }, { "x": -4.386226, "y": 1.524189 }, { "x": -4.302192, "y": 1.577902 }, { "x": -4.215374, "y": 1.626987 }, { "x": -4.126026, "y": 1.6713 }, { "x": -4.034409, "y": 1.710711 }, { "x": -3.940794, "y": 1.745103 }, { "x": -3.845453, "y": 1.774377 }, { "x": -3.748668, "y": 1.798447 }, { "x": -3.650722, "y": 1.817241 }, { "x": -3.551901, "y": 1.830705 }, { "x": -3.452497, "y": 1.838799 }, { "x": -3.3528, "y": 1.8415 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.3528, "y": -2.3495 }, { "x": -3.452516, "y": -2.347383 }, { "x": -3.552052, "y": -2.341036 }, { "x": -3.651228, "y": -2.33047 }, { "x": -3.749867, "y": -2.315705 }, { "x": -3.847791, "y": -2.296766 }, { "x": -3.944822, "y": -2.273689 }, { "x": -4.040787, "y": -2.246514 }, { "x": -4.135512, "y": -2.215291 }, { "x": -4.228826, "y": -2.180075 }, { "x": -4.320562, "y": -2.140931 }, { "x": -4.410554, "y": -2.097929 }, { "x": -4.498639, "y": -2.051147 }, { "x": -4.58466, "y": -2.000668 }, { "x": -4.668461, "y": -1.946583 }, { "x": -4.749891, "y": -1.888991 }, { "x": -4.828803, "y": -1.827995 }, { "x": -4.905055, "y": -1.763705 }, { "x": -4.97851, "y": -1.696236 }, { "x": -5.049036, "y": -1.62571 }, { "x": -5.116505, "y": -1.552255 }, { "x": -5.180795, "y": -1.476003 }, { "x": -5.241791, "y": -1.397091 }, { "x": -5.299383, "y": -1.315661 }, { "x": -5.353468, "y": -1.23186 }, { "x": -5.403947, "y": -1.145839 }, { "x": -5.450729, "y": -1.057754 }, { "x": -5.493731, "y": -0.967762 }, { "x": -5.532875, "y": -0.876026 }, { "x": -5.568091, "y": -0.782712 }, { "x": -5.599314, "y": -0.687987 }, { "x": -5.626489, "y": -0.592022 }, { "x": -5.649566, "y": -0.494991 }, { "x": -5.668505, "y": -0.397067 }, { "x": -5.68327, "y": -0.298428 }, { "x": -5.693836, "y": -0.199252 }, { "x": -5.700183, "y": -0.099716 }, { "x": -5.7023, "y": 0 }, { "x": -5.700183, "y": 0.099716 }, { "x": -5.693836, "y": 0.199252 }, { "x": -5.68327, "y": 0.298428 }, { "x": -5.668505, "y": 0.397067 }, { "x": -5.649566, "y": 0.494991 }, { "x": -5.626489, "y": 0.592022 }, { "x": -5.599314, "y": 0.687987 }, { "x": -5.568091, "y": 0.782712 }, { "x": -5.532875, "y": 0.876026 }, { "x": -5.493731, "y": 0.967762 }, { "x": -5.450729, "y": 1.057754 }, { "x": -5.403947, "y": 1.145839 }, { "x": -5.353468, "y": 1.23186 }, { "x": -5.299383, "y": 1.315661 }, { "x": -5.241791, "y": 1.397091 }, { "x": -5.180795, "y": 1.476003 }, { "x": -5.116505, "y": 1.552255 }, { "x": -5.049036, "y": 1.62571 }, { "x": -4.97851, "y": 1.696236 }, { "x": -4.905055, "y": 1.763705 }, { "x": -4.828803, "y": 1.827995 }, { "x": -4.749891, "y": 1.888991 }, { "x": -4.668461, "y": 1.946583 }, { "x": -4.58466, "y": 2.000668 }, { "x": -4.498639, "y": 2.051147 }, { "x": -4.410554, "y": 2.097929 }, { "x": -4.320562, "y": 2.140931 }, { "x": -4.228826, "y": 2.180075 }, { "x": -4.135512, "y": 2.215291 }, { "x": -4.040787, "y": 2.246514 }, { "x": -3.944822, "y": 2.273689 }, { "x": -3.847791, "y": 2.296766 }, { "x": -3.749867, "y": 2.315705 }, { "x": -3.651228, "y": 2.33047 }, { "x": -3.552052, "y": 2.341036 }, { "x": -3.452516, "y": 2.347383 }, { "x": -3.3528, "y": 2.3495 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.3528, "y": 2.3495 }, { "x": 3.452516, "y": 2.347383 }, { "x": 3.552052, "y": 2.341036 }, { "x": 3.651228, "y": 2.33047 }, { "x": 3.749867, "y": 2.315705 }, { "x": 3.847791, "y": 2.296766 }, { "x": 3.944822, "y": 2.273689 }, { "x": 4.040787, "y": 2.246514 }, { "x": 4.135512, "y": 2.215291 }, { "x": 4.228826, "y": 2.180075 }, { "x": 4.320562, "y": 2.140931 }, { "x": 4.410554, "y": 2.097929 }, { "x": 4.498639, "y": 2.051147 }, { "x": 4.58466, "y": 2.000668 }, { "x": 4.668461, "y": 1.946583 }, { "x": 4.749891, "y": 1.888991 }, { "x": 4.828803, "y": 1.827995 }, { "x": 4.905055, "y": 1.763705 }, { "x": 4.97851, "y": 1.696236 }, { "x": 5.049036, "y": 1.62571 }, { "x": 5.116505, "y": 1.552255 }, { "x": 5.180795, "y": 1.476003 }, { "x": 5.241791, "y": 1.397091 }, { "x": 5.299383, "y": 1.315661 }, { "x": 5.353468, "y": 1.23186 }, { "x": 5.403947, "y": 1.145839 }, { "x": 5.450729, "y": 1.057754 }, { "x": 5.493731, "y": 0.967762 }, { "x": 5.532875, "y": 0.876026 }, { "x": 5.568091, "y": 0.782712 }, { "x": 5.599314, "y": 0.687987 }, { "x": 5.626489, "y": 0.592022 }, { "x": 5.649566, "y": 0.494991 }, { "x": 5.668505, "y": 0.397067 }, { "x": 5.68327, "y": 0.298428 }, { "x": 5.693836, "y": 0.199252 }, { "x": 5.700183, "y": 0.099716 }, { "x": 5.7023, "y": 0 }, { "x": 5.700183, "y": -0.099716 }, { "x": 5.693836, "y": -0.199252 }, { "x": 5.68327, "y": -0.298428 }, { "x": 5.668505, "y": -0.397067 }, { "x": 5.649566, "y": -0.494991 }, { "x": 5.626489, "y": -0.592022 }, { "x": 5.599314, "y": -0.687987 }, { "x": 5.568091, "y": -0.782712 }, { "x": 5.532875, "y": -0.876026 }, { "x": 5.493731, "y": -0.967762 }, { "x": 5.450729, "y": -1.057754 }, { "x": 5.403947, "y": -1.145839 }, { "x": 5.353468, "y": -1.23186 }, { "x": 5.299383, "y": -1.315661 }, { "x": 5.241791, "y": -1.397091 }, { "x": 5.180795, "y": -1.476003 }, { "x": 5.116505, "y": -1.552255 }, { "x": 5.049036, "y": -1.62571 }, { "x": 4.97851, "y": -1.696236 }, { "x": 4.905055, "y": -1.763705 }, { "x": 4.828803, "y": -1.827995 }, { "x": 4.749891, "y": -1.888991 }, { "x": 4.668461, "y": -1.946583 }, { "x": 4.58466, "y": -2.000668 }, { "x": 4.498639, "y": -2.051147 }, { "x": 4.410554, "y": -2.097929 }, { "x": 4.320562, "y": -2.140931 }, { "x": 4.228826, "y": -2.180075 }, { "x": 4.135512, "y": -2.215291 }, { "x": 4.040787, "y": -2.246514 }, { "x": 3.944822, "y": -2.273689 }, { "x": 3.847791, "y": -2.296766 }, { "x": 3.749867, "y": -2.315705 }, { "x": 3.651228, "y": -2.33047 }, { "x": 3.552052, "y": -2.341036 }, { "x": 3.452516, "y": -2.347383 }, { "x": 3.3528, "y": -2.3495 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.3528, "y": 1.8415 }, { "x": 3.452497, "y": 1.838799 }, { "x": 3.551901, "y": 1.830705 }, { "x": 3.650722, "y": 1.817241 }, { "x": 3.748668, "y": 1.798447 }, { "x": 3.845453, "y": 1.774377 }, { "x": 3.940794, "y": 1.745103 }, { "x": 4.034409, "y": 1.710711 }, { "x": 4.126026, "y": 1.6713 }, { "x": 4.215374, "y": 1.626987 }, { "x": 4.302192, "y": 1.577902 }, { "x": 4.386226, "y": 1.524189 }, { "x": 4.467228, "y": 1.466005 }, { "x": 4.544962, "y": 1.403521 }, { "x": 4.619199, "y": 1.336921 }, { "x": 4.689721, "y": 1.266399 }, { "x": 4.756321, "y": 1.192162 }, { "x": 4.818805, "y": 1.114428 }, { "x": 4.876989, "y": 1.033426 }, { "x": 4.930702, "y": 0.949392 }, { "x": 4.979787, "y": 0.862574 }, { "x": 5.0241, "y": 0.773226 }, { "x": 5.063511, "y": 0.681609 }, { "x": 5.097903, "y": 0.587994 }, { "x": 5.127177, "y": 0.492653 }, { "x": 5.151247, "y": 0.395868 }, { "x": 5.170041, "y": 0.297922 }, { "x": 5.183505, "y": 0.199101 }, { "x": 5.191599, "y": 0.099697 }, { "x": 5.1943, "y": 0 }, { "x": 5.191599, "y": -0.099697 }, { "x": 5.183505, "y": -0.199101 }, { "x": 5.170041, "y": -0.297922 }, { "x": 5.151247, "y": -0.395868 }, { "x": 5.127177, "y": -0.492653 }, { "x": 5.097903, "y": -0.587994 }, { "x": 5.063511, "y": -0.681609 }, { "x": 5.0241, "y": -0.773226 }, { "x": 4.979787, "y": -0.862574 }, { "x": 4.930702, "y": -0.949392 }, { "x": 4.876989, "y": -1.033426 }, { "x": 4.818805, "y": -1.114428 }, { "x": 4.756321, "y": -1.192162 }, { "x": 4.689721, "y": -1.266399 }, { "x": 4.619199, "y": -1.336921 }, { "x": 4.544962, "y": -1.403521 }, { "x": 4.467228, "y": -1.466005 }, { "x": 4.386226, "y": -1.524189 }, { "x": 4.302192, "y": -1.577902 }, { "x": 4.215374, "y": -1.626987 }, { "x": 4.126026, "y": -1.6713 }, { "x": 4.034409, "y": -1.710711 }, { "x": 3.940794, "y": -1.745103 }, { "x": 3.845453, "y": -1.774377 }, { "x": 3.748668, "y": -1.798447 }, { "x": 3.650722, "y": -1.817241 }, { "x": 3.551901, "y": -1.830705 }, { "x": 3.452497, "y": -1.838799 }, { "x": 3.3528, "y": -1.8415 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -7.4168, "y": 2.6035 }, { "x": 7.4168, "y": 2.6035 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7.4168, "y": -2.6035 }, { "x": -7.4168, "y": 2.6035 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.4168, "y": 2.6035 }, { "x": 7.4168, "y": -2.6035 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.4168, "y": -2.6035 }, { "x": -7.4168, "y": -2.6035 }]} layer="top"/>
      </footprint>);
// C68: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C68 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// R41: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R23: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C91: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C91 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text=".1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C91" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C31: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R49: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="75" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R49" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R40: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C46: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C46 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={-3.75} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C46" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// J2: 39-30-0060; Project_Footprints_Library:Molex-39-30-0060-MFG
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <hole pcbX="-4.2mm" pcbY="0.2mm" diameter="3mm"/>
<hole pcbX="4.2mm" pcbY="0.2mm" diameter="3mm"/>
<platedhole portHints={["pin1"]} pcbX="4.2mm" pcbY="7.5mm" holeShape="circle" padShape="rect" holeDiameter="1.8mm" rectPadWidth="2.75mm" rectPadHeight="2.75mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="7.5mm" outerDiameter="2.75mm" holeDiameter="1.8mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-4.2mm" pcbY="7.5mm" outerDiameter="2.75mm" holeDiameter="1.8mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="4.2mm" pcbY="13mm" outerDiameter="2.75mm" holeDiameter="1.8mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="13mm" outerDiameter="2.75mm" holeDiameter="1.8mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="-4.2mm" pcbY="13mm" outerDiameter="2.75mm" holeDiameter="1.8mm" shape="circle"/>








<fabricationnotepath route={[{ "x": -7.09, "y": 6.59 }, { "x": 7.09, "y": 6.59 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -7.09, "y": -6.59 }, { "x": -7.09, "y": 6.59 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 7.09, "y": 6.59 }, { "x": 7.09, "y": -6.59 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 7.09, "y": -6.59 }, { "x": -7.09, "y": -6.59 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -7.115, "y": 14.4 }, { "x": -7.115, "y": -6.615 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7.115, "y": -6.615 }, { "x": 7.115, "y": -6.615 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.115, "y": 14.4 }, { "x": -7.115, "y": 14.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.115, "y": 14.4 }, { "x": 7.115, "y": 14.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.115, "y": -6.615 }, { "x": 7.115, "y": 14.4 }]} layer="top"/>
      </footprint>);
// C30: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C56: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C56 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// C81: 130pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C81 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R34: 20k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="20k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R34" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q8: NTD5867NLT4G; Project_Footprints_Library:On_Semiconductor-NTD5867NLT4G-Manufacturer_Recommended
export const Footprint_Q8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-4.400001mm" pcbY="2.290001mm" layer="top" width="2.999999mm" height="1.599999mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-4.400001mm" pcbY="-2.290001mm" layer="top" width="2.999999mm" height="1.599999mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="2.8mm" pcbY="0.000001mm" layer="top" width="6.2mm" height="5.800001mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -1.600002, "y": 3.270001 }, { "x": 4.495, "y": 3.270001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.600002, "y": -3.269999 }, { "x": -1.600002, "y": 3.270001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.600002, "y": -3.269999 }, { "x": 4.495, "y": -3.269999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4.495, "y": -3.269999 }, { "x": 4.495, "y": 3.270001 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -5.925001, "y": 3.295001 }, { "x": -5.925001, "y": -3.295001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.925001, "y": -3.295001 }, { "x": 5.925001, "y": -3.295001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.925001, "y": 3.295001 }, { "x": -5.925001, "y": 3.295001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.925001, "y": 3.295001 }, { "x": 5.925001, "y": 3.295001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.925001, "y": -3.295001 }, { "x": 5.925001, "y": 3.295001 }]} layer="top"/>
      </footprint>);
// R55: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C67: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C67 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// R82: 2.1k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R82 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U27: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R74: 750; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R74 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R6: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R28: 402k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R25: 5.1; Resistor_THT:R_Axial_Power_L25.0mm_W9.0mm_P30.48mm
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.4mm" holeDiameter="1.2mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="30.48mm" pcbY="0mm" outerHeight="2.4mm" outerWidth="2.4mm" holeHeight="1.2mm" holeWidth="1.2mm" shape="pill" pcbRotation="360deg"/>






<fabricationnotepath route={[{ "x": 0, "y": 0 }, { "x": 2.74, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.74, "y": 4.5 }, { "x": 2.74, "y": -4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.74, "y": -4.5 }, { "x": 27.74, "y": -4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 27.74, "y": 4.5 }, { "x": 2.74, "y": 4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 27.74, "y": -4.5 }, { "x": 27.74, "y": 4.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 30.48, "y": 0 }, { "x": 27.74, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={15.24} pcbY={-5.62} anchorAlignment="center" text="5.1" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={15.24} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.45, "y": 4.75 }, { "x": -1.45, "y": -4.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.45, "y": -4.75 }, { "x": 31.94, "y": -4.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 31.94, "y": 4.75 }, { "x": -1.45, "y": 4.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 31.94, "y": -4.75 }, { "x": 31.94, "y": 4.75 }]} layer="top"/>
      </footprint>);
// TP1: TP_DGATE; Project_Footprints_Library:test_point
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_DGATE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// TP8: TP_GATE; Project_Footprints_Library:test_point
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_GATE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// REF**: MountingHole_3.2mm_M3; MountingHole:MountingHole_3.2mm_M3
export const Footprint_REF__ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// C16: .22uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// D1: 5.0SMDJ48CA; Project_Footprints_Library:DIONM7959X262N
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.5mm" pcbY="0mm" layer="top" width="2.2mm" height="3.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.5mm" pcbY="0mm" layer="top" width="2.2mm" height="3.15mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.97, "y": 2.952 }, { "x": 3.97, "y": 2.952 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.97, "y": -2.952 }, { "x": -3.97, "y": 2.952 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.97, "y": 2.952 }, { "x": 3.97, "y": -2.952 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.97, "y": -2.952 }, { "x": -3.97, "y": -2.952 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4.85, "y": 3.36 }, { "x": 4.85, "y": 3.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.85, "y": -3.36 }, { "x": -4.85, "y": 3.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.85, "y": 3.36 }, { "x": 4.85, "y": -3.36 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.85, "y": -3.36 }, { "x": -4.85, "y": -3.36 }]} layer="top"/>
      </footprint>);
// R24: 37.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R80: 100k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R80 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q14: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// R27: 16.2K; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// J5: DB25_Male; Project_Footprints_Library:182025113R161
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin26"]} pcbX="-6.9mm" pcbY="-1.51mm" outerDiameter="4.77mm" holeDiameter="3.18mm" shape="circle"/>
<platedhole portHints={["pin26"]} pcbX="40.14mm" pcbY="-1.51mm" outerDiameter="4.77mm" holeDiameter="3.18mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.77mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="5.54mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="8.31mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="11.08mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="13.85mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="16.62mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="19.39mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="22.16mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="24.93mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="27.7mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="30.47mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="33.24mm" pcbY="-0.09mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="1.385mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="4.155mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="6.925mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="9.695mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="12.465mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="15.235mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="18.005mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="20.775mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin22"]} pcbX="23.545mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin23"]} pcbX="26.315mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin24"]} pcbX="29.085mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>
<platedhole portHints={["pin25"]} pcbX="31.855mm" pcbY="-2.93mm" outerDiameter="1.83mm" holeDiameter="1.22mm" shape="circle"/>











<fabricationnotepath route={[{ "x": -9.9, "y": 1.41 }, { "x": -9.9, "y": -11.01 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": -9.9, "y": -11.01 }, { "x": 43.14, "y": -11.01 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": -2.86, "y": -17.1 }, { "x": -2.86, "y": -11.01 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 36.1, "y": -11.01 }, { "x": 36.1, "y": -17.1 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 36.1, "y": -17.1 }, { "x": -2.86, "y": -17.1 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 43.14, "y": 1.41 }, { "x": -9.9, "y": 1.41 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 43.14, "y": -11.01 }, { "x": 43.14, "y": 1.41 }]} strokeWidth={0.2}/>

<courtyardoutline outline={[{ "x": -9.95, "y": -16.9 }, { "x": 43.2, "y": -16.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.9, "y": 1.5 }, { "x": -9.95, "y": -16.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 43.2, "y": 1.45 }, { "x": -9.9, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 43.2, "y": -16.95 }, { "x": 43.2, "y": 1.45 }]} layer="top"/>
      </footprint>);
// C70: 130pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="130pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C70" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// J13: LCD; Connector_PinHeader_2.54mm:PinHeader_1x04_P2.54mm_Vertical
export const Footprint_J13 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -8.89 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -8.89 }, { "x": -1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-9.95} anchorAlignment="center" text="LCD" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -9.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -9.4 }, { "x": 1.8, "y": -9.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -9.4 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// C95: .22uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C95 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R90: 1.82k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R90 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R1: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C52: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R11: 2.49k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R61: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R61 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R73: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R73 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R57: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U2: ATtiny1616-S; Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-4.65mm" pcbY="5.715mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-4.65mm" pcbY="4.445mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-4.65mm" pcbY="3.175mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-4.65mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-4.65mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-4.65mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-4.65mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-4.65mm" pcbY="-3.175mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-4.65mm" pcbY="-4.445mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-4.65mm" pcbY="-5.715mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="4.65mm" pcbY="-5.715mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="4.65mm" pcbY="-4.445mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="4.65mm" pcbY="-3.175mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="4.65mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="4.65mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="4.65mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="4.65mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="4.65mm" pcbY="3.175mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="4.65mm" pcbY="4.445mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="4.65mm" pcbY="5.715mm" layer="top" cornerRadius="0.075mm" width="2.05mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -3.75, "y": 5.4 }, { "x": -2.75, "y": 6.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.75, "y": -6.4 }, { "x": -3.75, "y": 5.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.75, "y": 6.4 }, { "x": 3.75, "y": 6.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.75, "y": 6.4 }, { "x": 3.75, "y": -6.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.75, "y": -6.4 }, { "x": -3.75, "y": -6.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -5.93, "y": 6.65 }, { "x": -5.93, "y": -6.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.93, "y": -6.65 }, { "x": 5.93, "y": -6.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.93, "y": 6.65 }, { "x": -5.93, "y": 6.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.93, "y": -6.65 }, { "x": 5.93, "y": 6.65 }]} layer="top"/>
      </footprint>);
// D6: STPS3L60U; Diode_SMD:D_2010_5025Metric
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.25mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.35mm" height="2.65mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.25mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.35mm" height="2.65mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -2.5, "y": 0.625 }, { "x": -2.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -1.25 }, { "x": 2.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.875, "y": 1.25 }, { "x": -2.5, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 1.25 }, { "x": -1.875, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -1.25 }, { "x": 2.5, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.28} anchorAlignment="center" text="STPS3L60U" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D6" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.18, "y": 1.58 }, { "x": 3.18, "y": 1.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.18, "y": -1.58 }, { "x": -3.18, "y": 1.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.18, "y": 1.58 }, { "x": 3.18, "y": -1.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.18, "y": -1.58 }, { "x": -3.18, "y": -1.58 }]} layer="top"/>
      </footprint>);
// C40: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Q19: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// REF**: MountingHole_3.2mm_M3; MountingHole:MountingHole_3.2mm_M3
export const Footprint_REF___ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// REF**: MountingHole_3.2mm_M3; MountingHole:MountingHole_3.2mm_M3
export const Footprint_REF____ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// C4: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// R14: 100k .5%; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// J8: 43045-0402; Project_Footprints_Library:CON_430450402_MOL
export const Footprint_J8 = () => (<footprint originalLayer="top">
        <hole pcbX="-1.5mm" pcbY="-4.319999mm" diameter="2.999999mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.02mm" rectPadWidth="1.52mm" rectPadHeight="1.52mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-2.999999mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-2.999999mm" pcbY="0mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>









<fabricationnotepath route={[{ "x": -6.574988, "y": 3.320001 }, { "x": -6.574988, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -6.574988, "y": -8.92 }, { "x": 3.574991, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": 3.320001 }, { "x": -6.574988, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": -8.92 }, { "x": 3.574991, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.828991, "y": 0 }, { "x": 5.352991, "y": 0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": 0.635 }, { "x": 5.352991, "y": -0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": -0.635 }, { "x": 3.828991, "y": 0 }]} strokeWidth={0.127}/>

<courtyardoutline outline={[{ "x": -6.6, "y": 4.590001 }, { "x": -6.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.6, "y": -10.19 }, { "x": 3.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": 4.590001 }, { "x": -6.6, "y": 4.590001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": -10.19 }, { "x": 3.6, "y": 4.590001 }]} layer="top"/>
      </footprint>);
// U26: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R53: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U21: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R81: 1k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R81 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U19: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R86: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R86 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q17: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C57: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C57 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// R32: 100k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q16: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C93: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C93 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text=".1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C93" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R13: .002; Project_Footprints_Library:2512_Sense
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.15mm" pcbY="0mm" layer="top" cornerRadius="0.121094mm" width="4mm" height="3.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.15mm" pcbY="0mm" layer="top" cornerRadius="0.121094mm" width="4mm" height="3.1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.55, "y": 2.1 }, { "x": 3.55, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.55, "y": -2.1 }, { "x": -3.55, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.55, "y": 2.1 }, { "x": 3.55, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.55, "y": -2.1 }, { "x": -3.55, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.1} pcbY={-3.7} anchorAlignment="center" text=".002" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={-5.4} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -4.45, "y": 2.48 }, { "x": 4.45, "y": 2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.45, "y": -2.48 }, { "x": -4.45, "y": 2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.45, "y": 2.48 }, { "x": 4.45, "y": -2.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.45, "y": -2.48 }, { "x": -4.45, "y": -2.48 }]} layer="top"/>
      </footprint>);
// R10: 4.53k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C85: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C85 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Z4: 12V; Package_TO_SOT_SMD:SOT-23
export const Footprint_Z4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="12V" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Z4" font="tscircuit2024" fontSize={0.32}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// R52: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// D4: MBR0580; Diode_SMD:D_SOD-123
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="1.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": 2.35, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": 1.15 }, { "x": 2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": -1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R38: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="2.4k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R38" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q6: BSC040N08NS5ATMA1; Project_Footprints_Library:INFINEON_PG-TDSON-8-5
export const Footprint_Q6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="2.9mm" pcbY="-1.905mm" layer="top" width="0.85mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.9mm" pcbY="-0.635mm" layer="top" width="0.85mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="2.9mm" pcbY="0.635mm" layer="top" width="0.85mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="2.9mm" pcbY="1.905mm" layer="top" width="0.85mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.925mm" pcbY="1.905mm" layer="top" width="0.8mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.65mm" pcbY="0mm" layer="top" width="3.75mm" height="4.41mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.925mm" pcbY="0.635mm" layer="top" width="0.8mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.925mm" pcbY="-0.635mm" layer="top" width="0.8mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.925mm" pcbY="-1.905mm" layer="top" width="0.8mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -3.075, "y": 2.575 }, { "x": 3.075, "y": 2.575 }]} strokeWidth={0.254}/>
<fabricationnotepath route={[{ "x": -3.075, "y": -2.575 }, { "x": -3.075, "y": 2.575 }]} strokeWidth={0.254}/>
<fabricationnotepath route={[{ "x": 3.075, "y": 2.575 }, { "x": 3.075, "y": -2.575 }]} strokeWidth={0.254}/>
<fabricationnotepath route={[{ "x": 3.075, "y": -2.575 }, { "x": -3.075, "y": -2.575 }]} strokeWidth={0.254}/>
<fabricationnotetext pcbX={-1.00308} pcbY={-0.03194} anchorAlignment="center" text="Q6" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// U10: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// C76: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C76 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Q18: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C18: 47n; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// J9: 43045-0402; Project_Footprints_Library:CON_430450402_MOL
export const Footprint_J9 = () => (<footprint originalLayer="top">
        <hole pcbX="-1.5mm" pcbY="-4.319999mm" diameter="2.999999mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.02mm" rectPadWidth="1.52mm" rectPadHeight="1.52mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-2.999999mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-2.999999mm" pcbY="0mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>









<fabricationnotepath route={[{ "x": -6.574988, "y": 3.320001 }, { "x": -6.574988, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -6.574988, "y": -8.92 }, { "x": 3.574991, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": 3.320001 }, { "x": -6.574988, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": -8.92 }, { "x": 3.574991, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.828991, "y": 0 }, { "x": 5.352991, "y": 0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": 0.635 }, { "x": 5.352991, "y": -0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": -0.635 }, { "x": 3.828991, "y": 0 }]} strokeWidth={0.127}/>

<courtyardoutline outline={[{ "x": -6.6, "y": 4.590001 }, { "x": -6.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.6, "y": -10.19 }, { "x": 3.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": 4.590001 }, { "x": -6.6, "y": 4.590001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": -10.19 }, { "x": 3.6, "y": 4.590001 }]} layer="top"/>
      </footprint>);
// U1: DRV8711DCP; Project_Footprints_Library:DRV8711DCP
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-2.949999mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.949999mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.949999mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.949999mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.949999mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.949999mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.949999mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.949999mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.949999mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.949999mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.949999mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.949999mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.949999mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.949999mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.949999mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.949999mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-2.949999mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-2.949999mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-2.949999mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="2.950002mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="2.950002mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="2.950002mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.950002mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.950002mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="2.950002mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="2.950002mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="2.950002mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="2.950002mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="2.950002mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="2.950002mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="2.950002mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="2.950002mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="2.950002mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="2.950002mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="2.950002mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="2.950002mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="2.950002mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="2.950002mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.6mm" height="9.700001mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3.200001, "y": 4.625 }, { "x": -2.250031, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -2.250031, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.124998 }, { "x": -2.250031, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -2.250031, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.624997 }, { "x": -2.250031, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -2.250031, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.124995 }, { "x": -2.250031, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -2.250031, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.624993 }, { "x": -2.250031, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -2.250031, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.124997 }, { "x": -2.250031, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -2.250031, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.624995 }, { "x": -2.250031, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -2.250031, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.124994 }, { "x": -2.250031, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -2.250031, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.624992 }, { "x": -2.250031, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -2.250031, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.124996 }, { "x": -2.250031, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -2.250031, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.375006 }, { "x": -2.250031, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -2.250031, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.875007 }, { "x": -2.250031, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -2.250031, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.375004 }, { "x": -2.250031, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -2.250031, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.875005 }, { "x": -2.250031, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -2.250031, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.375007 }, { "x": -2.250031, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -2.250031, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.875003 }, { "x": -2.250031, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -2.250031, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.375005 }, { "x": -2.250031, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -2.250031, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.875006 }, { "x": -2.250031, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -2.250031, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.375008 }, { "x": -2.250031, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -2.250031, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": 4.649975 }, { "x": -2.240021, "y": 4.709975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250026, "y": 4.649975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250021, "y": -4.690024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250021, "y": -4.690024 }, { "x": -2.230021, "y": -4.740024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.240021, "y": 4.709975 }, { "x": -2.220021, "y": 4.759975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.230021, "y": -4.740024 }, { "x": -2.200021, "y": -4.780023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.220021, "y": 4.759975 }, { "x": -2.190021, "y": 4.799975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.200021, "y": -4.780023 }, { "x": -2.160021, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.190021, "y": 4.799975 }, { "x": -2.130021, "y": 4.829975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.160021, "y": -4.820023 }, { "x": -2.110021, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.130021, "y": 4.829975 }, { "x": -2.080021, "y": 4.849975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.110021, "y": -4.840023 }, { "x": -2.050031, "y": -4.850021 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.080021, "y": 4.849975 }, { "x": -2.050021, "y": 4.84997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050031, "y": -4.850021 }, { "x": 2.04997, "y": -4.850031 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050021, "y": 4.84997 }, { "x": 2.049981, "y": 4.84996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.04997, "y": -4.850031 }, { "x": 2.069978, "y": -4.850023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.049981, "y": 4.84996 }, { "x": 2.109978, "y": 4.839975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.069978, "y": -4.850023 }, { "x": 2.109978, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": 4.839975 }, { "x": 2.169978, "y": 4.809975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": -4.840023 }, { "x": 2.159978, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.159978, "y": -4.820023 }, { "x": 2.189978, "y": -4.790023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.169978, "y": 4.809975 }, { "x": 2.209978, "y": 4.769975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.189978, "y": -4.790023 }, { "x": 2.209978, "y": -4.760024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": 4.769975 }, { "x": 2.239978, "y": 4.719975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": -4.760024 }, { "x": 2.239978, "y": -4.710024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": 4.719975 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": -4.710024 }, { "x": 2.249965, "y": -4.650036 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249965, "y": -4.650036 }, { "x": 2.249975, "y": 4.649965 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249975, "y": 4.649965 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.625 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.375 }, { "x": 3.200001, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.124998 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.874999 }, { "x": 3.200001, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.624997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.374997 }, { "x": 3.200001, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.124995 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.874996 }, { "x": 3.200001, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.624993 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.374994 }, { "x": 3.200001, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.124997 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.874998 }, { "x": 3.200001, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.624995 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.374996 }, { "x": 3.200001, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.124994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.874994 }, { "x": 3.200001, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.624992 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.374993 }, { "x": 3.200001, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.124996 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.125004 }, { "x": 3.200001, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.375006 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.625005 }, { "x": 3.200001, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.875007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.125007 }, { "x": 3.200001, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.375004 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.625003 }, { "x": 3.200001, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.875005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.125005 }, { "x": 3.200001, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.375007 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.625006 }, { "x": 3.200001, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.875003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.125003 }, { "x": 3.200001, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.375005 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.625004 }, { "x": 3.200001, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.875006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.125006 }, { "x": 3.200001, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.375008 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.625007 }, { "x": 3.200001, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 4.375 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.874999 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.374997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.874996 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.374994 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.874998 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.374996 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.874994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.374993 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.125004 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.625005 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.125007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.625003 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.125005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.625006 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.125003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.625004 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.125006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.625007 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.852386, "y": 4.149976 }, { "x": -1.837703, "y": 4.242681 }, { "x": -1.795091, "y": 4.326311 }, { "x": -1.728722, "y": 4.39268 }, { "x": -1.645092, "y": 4.435292 }, { "x": -1.552387, "y": 4.449975 }, { "x": -1.459682, "y": 4.435292 }, { "x": -1.376052, "y": 4.39268 }, { "x": -1.309683, "y": 4.326311 }, { "x": -1.267071, "y": 4.242681 }, { "x": -1.252388, "y": 4.149976 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.252388, "y": 4.149976 }, { "x": -1.267071, "y": 4.057271 }, { "x": -1.309683, "y": 3.973641 }, { "x": -1.376052, "y": 3.907272 }, { "x": -1.459682, "y": 3.86466 }, { "x": -1.552387, "y": 3.849977 }, { "x": -1.645092, "y": 3.86466 }, { "x": -1.728722, "y": 3.907272 }, { "x": -1.795091, "y": 3.973641 }, { "x": -1.837703, "y": 4.057271 }, { "x": -1.852386, "y": 4.149976 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.9, "y": 5.150002 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": -3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": 3.9, "y": -5.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": -5.15 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
      </footprint>);
// U24: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// U15: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// U18: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// C53: 10n; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Q21: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C75: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C21: 1uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP13: TP_GND; Project_Footprints_Library:test_point
export const Footprint_TP13 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_GND" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// J3: ENABLE; Connector_PinHeader_2.54mm:PinHeader_1x02_P2.54mm_Vertical
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -3.81 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -3.81 }, { "x": -1.27, "y": -3.81 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -4.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -4.35 }, { "x": 1.8, "y": -4.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -4.35 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// R26: 49.9k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R77: 10; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// TP6: TP_PGOOD; Project_Footprints_Library:test_point
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="TP_PGOOD" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP6" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// R47: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="75" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R47" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R12: 100; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R68: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R68 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C17: 47nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Z2: DDZ6V2BQ-7; Project_Footprints_Library:SOD3716X145N
export const Footprint_Z2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7mm" pcbY="0mm" layer="top" width="0.75mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7mm" pcbY="0mm" layer="top" width="0.75mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.35, "y": 0.775 }, { "x": 1.35, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.35, "y": 0.175 }, { "x": -0.75, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.35, "y": -0.775 }, { "x": -1.35, "y": 0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.35, "y": 0.775 }, { "x": 1.35, "y": -0.775 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.35, "y": -0.775 }, { "x": -1.35, "y": -0.775 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.55, "y": 1.675 }, { "x": 2.55, "y": 1.675 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.55, "y": -1.675 }, { "x": -2.55, "y": 1.675 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.55, "y": 1.675 }, { "x": 2.55, "y": -1.675 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.55, "y": -1.675 }, { "x": -2.55, "y": -1.675 }]} layer="top"/>
      </footprint>);
// J7: 43045-0402; Project_Footprints_Library:CON_430450402_MOL
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <hole pcbX="-1.5mm" pcbY="-4.319999mm" diameter="2.999999mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.02mm" rectPadWidth="1.52mm" rectPadHeight="1.52mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-2.999999mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-2.999999mm" pcbY="0mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>









<fabricationnotepath route={[{ "x": -6.574988, "y": 3.320001 }, { "x": -6.574988, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -6.574988, "y": -8.92 }, { "x": 3.574991, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": 3.320001 }, { "x": -6.574988, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": -8.92 }, { "x": 3.574991, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.828991, "y": 0 }, { "x": 5.352991, "y": 0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": 0.635 }, { "x": 5.352991, "y": -0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": -0.635 }, { "x": 3.828991, "y": 0 }]} strokeWidth={0.127}/>

<courtyardoutline outline={[{ "x": -6.6, "y": 4.590001 }, { "x": -6.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.6, "y": -10.19 }, { "x": 3.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": 4.590001 }, { "x": -6.6, "y": 4.590001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": -10.19 }, { "x": 3.6, "y": 4.590001 }]} layer="top"/>
      </footprint>);
// C71: .22uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R51: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="180" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R51" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U5: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R91: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R91 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R91" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// D8: RB521S30T1G; Project_Footprints_Library:RB521S30T1G
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.8001mm" pcbY="0mm" layer="top" width="0.508mm" height="0.3556mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.8509, "y": 0.1778 }, { "x": -0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8509, "y": -0.1778 }, { "x": -0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.4445 }, { "x": -0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.22225 }, { "x": -0.42545, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": 0.1778 }, { "x": -0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.1778 }, { "x": -0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.22225 }, { "x": -0.42545, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6477, "y": -0.4445 }, { "x": 0.6477, "y": -0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.4445 }, { "x": -0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": 0.1778 }, { "x": 0.6477, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.1778 }, { "x": 0.8509, "y": -0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6477, "y": -0.4445 }, { "x": 0.6477, "y": 0.4445 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": 0.1778 }, { "x": 0.6477, "y": 0.1778 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8509, "y": -0.1778 }, { "x": 0.8509, "y": 0.1778 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.3, "y": 0.7 }, { "x": -1.3, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.3, "y": -0.7 }, { "x": 1.2, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": 0.7 }, { "x": -1.3, "y": 0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.2, "y": -0.7 }, { "x": 1.2, "y": 0.7 }]} layer="top"/>
      </footprint>);
// C34: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R19: 4.99k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U3: ATxmega256A3U-AU; Package_QFP:TQFP-64_14x14mm_P0.8mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-7.7mm" pcbY="6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-7.7mm" pcbY="5.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-7.7mm" pcbY="4.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-7.7mm" pcbY="3.6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-7.7mm" pcbY="2.8mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-7.7mm" pcbY="2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-7.7mm" pcbY="1.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-7.7mm" pcbY="0.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-7.7mm" pcbY="-0.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7.7mm" pcbY="-1.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.7mm" pcbY="-2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-7.7mm" pcbY="-2.8mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-7.7mm" pcbY="-3.6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-7.7mm" pcbY="-4.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-7.7mm" pcbY="-5.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-7.7mm" pcbY="-6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-6mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-5.2mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.4mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-3.6mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-2.8mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-2mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-1.2mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.4mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="0.4mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.2mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="2mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="2.8mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="3.6mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="4.4mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="5.2mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="6mm" pcbY="-7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="7.7mm" pcbY="-6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="7.7mm" pcbY="-5.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="7.7mm" pcbY="-4.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="7.7mm" pcbY="-3.6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="7.7mm" pcbY="-2.8mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="7.7mm" pcbY="-2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="7.7mm" pcbY="-1.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="7.7mm" pcbY="-0.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="7.7mm" pcbY="0.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="7.7mm" pcbY="1.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="7.7mm" pcbY="2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="7.7mm" pcbY="2.8mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="7.7mm" pcbY="3.6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="7.7mm" pcbY="4.4mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="7.7mm" pcbY="5.2mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="7.7mm" pcbY="6mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="6mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="5.2mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="4.4mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="3.6mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="2.8mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="2mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="1.2mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="0.4mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="-0.4mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="-1.2mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin59"]} pcbX="-2mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin60"]} pcbX="-2.8mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin61"]} pcbX="-3.6mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin62"]} pcbX="-4.4mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin63"]} pcbX="-5.2mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin64"]} pcbX="-6mm" pcbY="7.7mm" layer="top" width="1.5mm" height="0.55mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -7, "y": 6 }, { "x": -6, "y": 7 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -7, "y": -7 }, { "x": -7, "y": 6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -6, "y": 7 }, { "x": 7, "y": 7 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 7, "y": 7 }, { "x": 7, "y": -7 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 7, "y": -7 }, { "x": -7, "y": -7 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-9.45} anchorAlignment="center" text="ATxmega256A3U-AU" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -8.7, "y": 8.7 }, { "x": -8.7, "y": -8.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.7, "y": 8.7 }, { "x": 8.7, "y": 8.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.7, "y": -8.7 }, { "x": 8.7, "y": -8.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.7, "y": 8.7 }, { "x": 8.7, "y": -8.7 }]} layer="top"/>
      </footprint>);
// R50: 2.4k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="2.4k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R50" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C77: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R78: 10; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R78 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R37: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R70: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R45: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="75" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R45" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C45: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C45 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// C47: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C47 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// J15: Conn_01x03; Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_J15 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-7.41} anchorAlignment="center" text="Conn_01x03" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="J15" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -6.85 }, { "x": 1.8, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -6.85 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// R16: 2.49k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// D14: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// R48: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="75" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R48" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R76: 750; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R76 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q11: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// R20: 10k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C8: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R31: 2k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// U14: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R60: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// C7: .22uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C3: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.5} pcbY={-6.25} anchorAlignment="center" text="100uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={2.5} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// TP9: TP_FB; Connector_PinHeader_1.00mm:PinHeader_1x01_P1.00mm_Vertical
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.5mm" rectPadWidth="0.85mm" rectPadHeight="0.85mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>







<fabricationnotepath route={[{ "x": -0.635, "y": 0.1825 }, { "x": -0.3175, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": -0.5 }, { "x": -0.635, "y": 0.1825 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3175, "y": 0.5 }, { "x": 0.635, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 0.5 }, { "x": 0.635, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": -0.5 }, { "x": -0.635, "y": -0.5 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.15, "y": 1 }, { "x": -1.15, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.15, "y": -1 }, { "x": 1.15, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.15, "y": 1 }, { "x": -1.15, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.15, "y": -1 }, { "x": 1.15, "y": 1 }]} layer="top"/>
      </footprint>);
// R63: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R63 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R17: 24.9k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C11: .68uF; Capacitor_SMD:C_1206_3216Metric_Pad1.33x1.80mm_HandSolder
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.48, "y": 1.15 }, { "x": 2.48, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.48, "y": -1.15 }, { "x": -2.48, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": 1.15 }, { "x": 2.48, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": -1.15 }, { "x": -2.48, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C25: 330pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C1: 1nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP17: test; Project_Footprints_Library:test_point
export const Footprint_TP17 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP17" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// J1: 43045-0402; Project_Footprints_Library:CON_430450402_MOL
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <hole pcbX="-1.5mm" pcbY="-4.319999mm" diameter="2.999999mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.02mm" rectPadWidth="1.52mm" rectPadHeight="1.52mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-2.999999mm" pcbY="2.999999mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-2.999999mm" pcbY="0mm" outerDiameter="1.52mm" holeDiameter="1.02mm" shape="circle"/>









<fabricationnotepath route={[{ "x": -6.574988, "y": 3.320001 }, { "x": -6.574988, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -6.574988, "y": -8.92 }, { "x": 3.574991, "y": -8.92 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": 3.320001 }, { "x": -6.574988, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.574991, "y": -8.92 }, { "x": 3.574991, "y": 3.320001 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.828991, "y": 0 }, { "x": 5.352991, "y": 0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": 0.635 }, { "x": 5.352991, "y": -0.635 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.352991, "y": -0.635 }, { "x": 3.828991, "y": 0 }]} strokeWidth={0.127}/>

<courtyardoutline outline={[{ "x": -6.6, "y": 4.590001 }, { "x": -6.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.6, "y": -10.19 }, { "x": 3.6, "y": -10.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": 4.590001 }, { "x": -6.6, "y": 4.590001 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.6, "y": -10.19 }, { "x": 3.6, "y": 4.590001 }]} layer="top"/>
      </footprint>);
// R56: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R15: 4.53k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C49: .22uF 100V; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Q12: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// R2: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R72: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R72 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q20: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C5: 22uF; Capacitor_THT:CP_Radial_D5.0mm_P2.00mm
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.8mm" rectPadWidth="1.6mm" rectPadHeight="1.6mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.6mm" holeDiameter="0.8mm" shape="circle"/>
























































































































<fabricationnotepath route={[{ "x": -1.133605, "y": 1.0875 }, { "x": -0.633605, "y": 1.0875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.883605, "y": 1.3375 }, { "x": -0.883605, "y": 0.8375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 0 }, { "x": -1.309699, "y": -0.956709 }, { "x": -0.767767, "y": -1.767767 }, { "x": 0.043291, "y": -2.309699 }, { "x": 1, "y": -2.5 }, { "x": 1.956709, "y": -2.309699 }, { "x": 2.767767, "y": -1.767767 }, { "x": 3.309699, "y": -0.956709 }, { "x": 3.5, "y": 0 }, { "x": 3.309699, "y": 0.956709 }, { "x": 2.767767, "y": 1.767767 }, { "x": 1.956709, "y": 2.309699 }, { "x": 1, "y": 2.5 }, { "x": 0.043291, "y": 2.309699 }, { "x": -0.767767, "y": 1.767767 }, { "x": -1.309699, "y": 0.956709 }, { "x": -1.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1} pcbY={-3.75} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={1} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={1} pcbY={0} radius={2.75} layer="top"/>
      </footprint>);
// D20: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// C13: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text=".1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R65: 75; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R65 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// REF**: MountingHole_3.2mm_M3; MountingHole:MountingHole_3.2mm_M3
export const Footprint_REF_____ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// Q3: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C98: 10uF; Capacitor_SMD:C_1206_3216Metric_Pad1.33x1.80mm_HandSolder
export const Footprint_C98 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5625mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C98" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.48, "y": 1.15 }, { "x": 2.48, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.48, "y": -1.15 }, { "x": -2.48, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": 1.15 }, { "x": 2.48, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.48, "y": -1.15 }, { "x": -2.48, "y": -1.15 }]} layer="top"/>
      </footprint>);
// Q4: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// C92: .1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C92 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP7: TP_GATE; Connector_PinHeader_1.00mm:PinHeader_1x01_P1.00mm_Vertical
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.5mm" rectPadWidth="0.85mm" rectPadHeight="0.85mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>







<fabricationnotepath route={[{ "x": -0.635, "y": 0.1825 }, { "x": -0.3175, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": -0.5 }, { "x": -0.635, "y": 0.1825 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3175, "y": 0.5 }, { "x": 0.635, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 0.5 }, { "x": 0.635, "y": -0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": -0.5 }, { "x": -0.635, "y": -0.5 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.15, "y": 1 }, { "x": -1.15, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.15, "y": -1 }, { "x": 1.15, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.15, "y": 1 }, { "x": -1.15, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.15, "y": -1 }, { "x": 1.15, "y": 1 }]} layer="top"/>
      </footprint>);
// C48: .22uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C22: 33nF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C36: 10pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C60: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// D19: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// U12: DRV8711DCP; Project_Footprints_Library:DRV8711DCP
export const Footprint_U12 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-2.949999mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.949999mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.949999mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.949999mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.949999mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.949999mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.949999mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.949999mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.949999mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.949999mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.949999mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.949999mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.949999mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.949999mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.949999mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.949999mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-2.949999mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-2.949999mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-2.949999mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="2.950002mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="2.950002mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="2.950002mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.950002mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.950002mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="2.950002mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="2.950002mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="2.950002mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="2.950002mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="2.950002mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="2.950002mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="2.950002mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="2.950002mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="2.950002mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="2.950002mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="2.950002mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="2.950002mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="2.950002mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="2.950002mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.6mm" height="9.700001mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3.200001, "y": 4.625 }, { "x": -2.250031, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -2.250031, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.124998 }, { "x": -2.250031, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -2.250031, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.624997 }, { "x": -2.250031, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -2.250031, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.124995 }, { "x": -2.250031, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -2.250031, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.624993 }, { "x": -2.250031, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -2.250031, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.124997 }, { "x": -2.250031, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -2.250031, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.624995 }, { "x": -2.250031, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -2.250031, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.124994 }, { "x": -2.250031, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -2.250031, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.624992 }, { "x": -2.250031, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -2.250031, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.124996 }, { "x": -2.250031, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -2.250031, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.375006 }, { "x": -2.250031, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -2.250031, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.875007 }, { "x": -2.250031, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -2.250031, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.375004 }, { "x": -2.250031, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -2.250031, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.875005 }, { "x": -2.250031, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -2.250031, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.375007 }, { "x": -2.250031, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -2.250031, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.875003 }, { "x": -2.250031, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -2.250031, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.375005 }, { "x": -2.250031, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -2.250031, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.875006 }, { "x": -2.250031, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -2.250031, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.375008 }, { "x": -2.250031, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -2.250031, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": 4.649975 }, { "x": -2.240021, "y": 4.709975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250026, "y": 4.649975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250021, "y": -4.690024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250021, "y": -4.690024 }, { "x": -2.230021, "y": -4.740024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.240021, "y": 4.709975 }, { "x": -2.220021, "y": 4.759975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.230021, "y": -4.740024 }, { "x": -2.200021, "y": -4.780023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.220021, "y": 4.759975 }, { "x": -2.190021, "y": 4.799975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.200021, "y": -4.780023 }, { "x": -2.160021, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.190021, "y": 4.799975 }, { "x": -2.130021, "y": 4.829975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.160021, "y": -4.820023 }, { "x": -2.110021, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.130021, "y": 4.829975 }, { "x": -2.080021, "y": 4.849975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.110021, "y": -4.840023 }, { "x": -2.050031, "y": -4.850021 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.080021, "y": 4.849975 }, { "x": -2.050021, "y": 4.84997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050031, "y": -4.850021 }, { "x": 2.04997, "y": -4.850031 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050021, "y": 4.84997 }, { "x": 2.049981, "y": 4.84996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.04997, "y": -4.850031 }, { "x": 2.069978, "y": -4.850023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.049981, "y": 4.84996 }, { "x": 2.109978, "y": 4.839975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.069978, "y": -4.850023 }, { "x": 2.109978, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": 4.839975 }, { "x": 2.169978, "y": 4.809975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": -4.840023 }, { "x": 2.159978, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.159978, "y": -4.820023 }, { "x": 2.189978, "y": -4.790023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.169978, "y": 4.809975 }, { "x": 2.209978, "y": 4.769975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.189978, "y": -4.790023 }, { "x": 2.209978, "y": -4.760024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": 4.769975 }, { "x": 2.239978, "y": 4.719975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": -4.760024 }, { "x": 2.239978, "y": -4.710024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": 4.719975 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": -4.710024 }, { "x": 2.249965, "y": -4.650036 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249965, "y": -4.650036 }, { "x": 2.249975, "y": 4.649965 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249975, "y": 4.649965 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.625 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.375 }, { "x": 3.200001, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.124998 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.874999 }, { "x": 3.200001, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.624997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.374997 }, { "x": 3.200001, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.124995 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.874996 }, { "x": 3.200001, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.624993 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.374994 }, { "x": 3.200001, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.124997 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.874998 }, { "x": 3.200001, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.624995 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.374996 }, { "x": 3.200001, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.124994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.874994 }, { "x": 3.200001, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.624992 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.374993 }, { "x": 3.200001, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.124996 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.125004 }, { "x": 3.200001, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.375006 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.625005 }, { "x": 3.200001, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.875007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.125007 }, { "x": 3.200001, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.375004 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.625003 }, { "x": 3.200001, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.875005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.125005 }, { "x": 3.200001, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.375007 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.625006 }, { "x": 3.200001, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.875003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.125003 }, { "x": 3.200001, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.375005 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.625004 }, { "x": 3.200001, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.875006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.125006 }, { "x": 3.200001, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.375008 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.625007 }, { "x": 3.200001, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 4.375 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.874999 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.374997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.874996 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.374994 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.874998 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.374996 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.874994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.374993 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.125004 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.625005 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.125007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.625003 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.125005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.625006 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.125003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.625004 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.125006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.625007 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.852386, "y": 4.149976 }, { "x": -1.837703, "y": 4.242681 }, { "x": -1.795091, "y": 4.326311 }, { "x": -1.728722, "y": 4.39268 }, { "x": -1.645092, "y": 4.435292 }, { "x": -1.552387, "y": 4.449975 }, { "x": -1.459682, "y": 4.435292 }, { "x": -1.376052, "y": 4.39268 }, { "x": -1.309683, "y": 4.326311 }, { "x": -1.267071, "y": 4.242681 }, { "x": -1.252388, "y": 4.149976 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.252388, "y": 4.149976 }, { "x": -1.267071, "y": 4.057271 }, { "x": -1.309683, "y": 3.973641 }, { "x": -1.376052, "y": 3.907272 }, { "x": -1.459682, "y": 3.86466 }, { "x": -1.552387, "y": 3.849977 }, { "x": -1.645092, "y": 3.86466 }, { "x": -1.728722, "y": 3.907272 }, { "x": -1.795091, "y": 3.973641 }, { "x": -1.837703, "y": 4.057271 }, { "x": -1.852386, "y": 4.149976 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.9, "y": 5.150002 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": -3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": 3.9, "y": -5.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": -5.15 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
      </footprint>);
// U11: DRV8711DCP; Project_Footprints_Library:DRV8711DCP
export const Footprint_U11 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.35mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="-0.05mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="0mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="0.65mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-0.650001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.25mm" pcbY="-1.950001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="4.550001mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="1.95mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-3.25mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<platedhole portHints={["pin39"]} pcbX="1.3mm" pcbY="-4.55mm" outerDiameter="0.499999mm" holeDiameter="0.2032mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-2.949999mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.949999mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.949999mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.949999mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.949999mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.949999mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.949999mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.949999mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.949999mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.949999mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.949999mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.949999mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.949999mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.949999mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.949999mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.949999mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-2.949999mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-2.949999mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-2.949999mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="2.950002mm" pcbY="-4.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="2.950002mm" pcbY="-4mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="2.950002mm" pcbY="-3.499998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.950002mm" pcbY="-2.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.950002mm" pcbY="-2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="2.950002mm" pcbY="-1.999999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="2.950002mm" pcbY="-1.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="2.950002mm" pcbY="-0.999998mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="2.950002mm" pcbY="-0.499999mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="2.950002mm" pcbY="0mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="2.950002mm" pcbY="0.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="2.950002mm" pcbY="1.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="2.950002mm" pcbY="1.500002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="2.950002mm" pcbY="2.000001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="2.950002mm" pcbY="2.5mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="2.950002mm" pcbY="3.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="2.950002mm" pcbY="3.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="2.950002mm" pcbY="4.000002mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="2.950002mm" pcbY="4.500001mm" layer="top" width="1.4mm" height="0.299999mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.6mm" height="9.700001mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3.200001, "y": 4.625 }, { "x": -2.250031, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.375 }, { "x": -2.250031, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 4.124998 }, { "x": -2.250031, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.874999 }, { "x": -2.250031, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.624997 }, { "x": -2.250031, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.374997 }, { "x": -2.250031, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 3.124995 }, { "x": -2.250031, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.874996 }, { "x": -2.250031, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.624993 }, { "x": -2.250031, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.374994 }, { "x": -2.250031, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 2.124997 }, { "x": -2.250031, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.874998 }, { "x": -2.250031, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.624995 }, { "x": -2.250031, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.374996 }, { "x": -2.250031, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 1.124994 }, { "x": -2.250031, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.874994 }, { "x": -2.250031, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.624992 }, { "x": -2.250031, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.374993 }, { "x": -2.250031, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": 0.124996 }, { "x": -2.250031, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.125004 }, { "x": -2.250031, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.375006 }, { "x": -2.250031, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.625005 }, { "x": -2.250031, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -0.875007 }, { "x": -2.250031, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.125007 }, { "x": -2.250031, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.375004 }, { "x": -2.250031, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.625003 }, { "x": -2.250031, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -1.875005 }, { "x": -2.250031, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.125005 }, { "x": -2.250031, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.375007 }, { "x": -2.250031, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.625006 }, { "x": -2.250031, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -2.875003 }, { "x": -2.250031, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.125003 }, { "x": -2.250031, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.375005 }, { "x": -2.250031, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.625004 }, { "x": -2.250031, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -3.875006 }, { "x": -2.250031, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.125006 }, { "x": -2.250031, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.375008 }, { "x": -2.250031, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.200001, "y": -4.625007 }, { "x": -2.250031, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": 4.649975 }, { "x": -2.240021, "y": 4.709975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250026, "y": 4.649975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250026, "y": -4.650026 }, { "x": -2.250021, "y": -4.690024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.250021, "y": -4.690024 }, { "x": -2.230021, "y": -4.740024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.240021, "y": 4.709975 }, { "x": -2.220021, "y": 4.759975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.230021, "y": -4.740024 }, { "x": -2.200021, "y": -4.780023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.220021, "y": 4.759975 }, { "x": -2.190021, "y": 4.799975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.200021, "y": -4.780023 }, { "x": -2.160021, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.190021, "y": 4.799975 }, { "x": -2.130021, "y": 4.829975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.160021, "y": -4.820023 }, { "x": -2.110021, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.130021, "y": 4.829975 }, { "x": -2.080021, "y": 4.849975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.110021, "y": -4.840023 }, { "x": -2.050031, "y": -4.850021 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.080021, "y": 4.849975 }, { "x": -2.050021, "y": 4.84997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050031, "y": -4.850021 }, { "x": 2.04997, "y": -4.850031 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.050021, "y": 4.84997 }, { "x": 2.049981, "y": 4.84996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.04997, "y": -4.850031 }, { "x": 2.069978, "y": -4.850023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.049981, "y": 4.84996 }, { "x": 2.109978, "y": 4.839975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.069978, "y": -4.850023 }, { "x": 2.109978, "y": -4.840023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": 4.839975 }, { "x": 2.169978, "y": 4.809975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.109978, "y": -4.840023 }, { "x": 2.159978, "y": -4.820023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.159978, "y": -4.820023 }, { "x": 2.189978, "y": -4.790023 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.169978, "y": 4.809975 }, { "x": 2.209978, "y": 4.769975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.189978, "y": -4.790023 }, { "x": 2.209978, "y": -4.760024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": 4.769975 }, { "x": 2.239978, "y": 4.719975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.209978, "y": -4.760024 }, { "x": 2.239978, "y": -4.710024 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": 4.719975 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.239978, "y": -4.710024 }, { "x": 2.249965, "y": -4.650036 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249965, "y": -4.650036 }, { "x": 2.249975, "y": 4.649965 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.249975, "y": 4.649965 }, { "x": 2.249978, "y": 4.669975 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.625 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.375 }, { "x": 3.200001, "y": 4.375 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 4.124998 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.874999 }, { "x": 3.200001, "y": 3.874999 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.624997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.374997 }, { "x": 3.200001, "y": 3.374997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 3.124995 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.874996 }, { "x": 3.200001, "y": 2.874996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.624993 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.374994 }, { "x": 3.200001, "y": 2.374994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 2.124997 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.874998 }, { "x": 3.200001, "y": 1.874998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.624995 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.374996 }, { "x": 3.200001, "y": 1.374996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 1.124994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.874994 }, { "x": 3.200001, "y": 0.874994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.624992 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.374993 }, { "x": 3.200001, "y": 0.374993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": 0.124996 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.125004 }, { "x": 3.200001, "y": -0.125004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.375006 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.625005 }, { "x": 3.200001, "y": -0.625005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -0.875007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.125007 }, { "x": 3.200001, "y": -1.125007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.375004 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.625003 }, { "x": 3.200001, "y": -1.625003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -1.875005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.125005 }, { "x": 3.200001, "y": -2.125005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.375007 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.625006 }, { "x": 3.200001, "y": -2.625006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -2.875003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.125003 }, { "x": 3.200001, "y": -3.125003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.375005 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.625004 }, { "x": 3.200001, "y": -3.625004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -3.875006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.125006 }, { "x": 3.200001, "y": -4.125006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.375008 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.250031, "y": -4.625007 }, { "x": 3.200001, "y": -4.625007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 4.375 }, { "x": 3.200001, "y": 4.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.874999 }, { "x": 3.200001, "y": 4.124998 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 3.374997 }, { "x": 3.200001, "y": 3.624997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.874996 }, { "x": 3.200001, "y": 3.124995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 2.374994 }, { "x": 3.200001, "y": 2.624993 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.874998 }, { "x": 3.200001, "y": 2.124997 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 1.374996 }, { "x": 3.200001, "y": 1.624995 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.874994 }, { "x": 3.200001, "y": 1.124994 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": 0.374993 }, { "x": 3.200001, "y": 0.624992 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.125004 }, { "x": 3.200001, "y": 0.124996 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -0.625005 }, { "x": 3.200001, "y": -0.375006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.125007 }, { "x": 3.200001, "y": -0.875007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -1.625003 }, { "x": 3.200001, "y": -1.375004 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.125005 }, { "x": 3.200001, "y": -1.875005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -2.625006 }, { "x": 3.200001, "y": -2.375007 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.125003 }, { "x": 3.200001, "y": -2.875003 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -3.625004 }, { "x": 3.200001, "y": -3.375005 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.125006 }, { "x": 3.200001, "y": -3.875006 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.200001, "y": -4.625007 }, { "x": 3.200001, "y": -4.375008 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.852386, "y": 4.149976 }, { "x": -1.837703, "y": 4.242681 }, { "x": -1.795091, "y": 4.326311 }, { "x": -1.728722, "y": 4.39268 }, { "x": -1.645092, "y": 4.435292 }, { "x": -1.552387, "y": 4.449975 }, { "x": -1.459682, "y": 4.435292 }, { "x": -1.376052, "y": 4.39268 }, { "x": -1.309683, "y": 4.326311 }, { "x": -1.267071, "y": 4.242681 }, { "x": -1.252388, "y": 4.149976 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.252388, "y": 4.149976 }, { "x": -1.267071, "y": 4.057271 }, { "x": -1.309683, "y": 3.973641 }, { "x": -1.376052, "y": 3.907272 }, { "x": -1.459682, "y": 3.86466 }, { "x": -1.552387, "y": 3.849977 }, { "x": -1.645092, "y": 3.86466 }, { "x": -1.728722, "y": 3.907272 }, { "x": -1.795091, "y": 3.973641 }, { "x": -1.837703, "y": 4.057271 }, { "x": -1.852386, "y": 4.149976 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.9, "y": 5.150002 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": -3.9, "y": 5.150002 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -5.15 }, { "x": 3.9, "y": -5.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": -5.15 }, { "x": 3.9, "y": 5.150002 }]} layer="top"/>
      </footprint>);
// U17: SN74AHC1G125DBVR; Project_Footprints_Library:SN74AHC1G125DBVR
export const Footprint_U17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1938mm" pcbY="0mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1938mm" pcbY="-0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1938mm" pcbY="0.950001mm" layer="top" width="1.4732mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.4986, "y": 1.204 }, { "x": -1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.696 }, { "x": -0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 0.254 }, { "x": -1.4986, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.254 }, { "x": -0.8763, "y": -0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -0.696 }, { "x": -1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.204 }, { "x": -0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.524 }, { "x": -0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 1.204 }, { "x": -1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.696 }, { "x": -0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": 0.254 }, { "x": -1.4986, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.254 }, { "x": -0.8763, "y": 0.254 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -0.696 }, { "x": -1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.204 }, { "x": -0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8763, "y": -1.524 }, { "x": 0.8763, "y": -1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.524 }, { "x": -0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 1.204 }, { "x": 0.8763, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": 0.696 }, { "x": 1.4986, "y": 0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -0.696 }, { "x": 0.8763, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.204 }, { "x": 1.4986, "y": -1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8763, "y": -1.524 }, { "x": 0.8763, "y": 1.524 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.204 }, { "x": 0.8763, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 0.696 }, { "x": 1.4986, "y": 1.204 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -0.696 }, { "x": 0.8763, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": -1.204 }, { "x": 1.4986, "y": -0.696 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.524 }, { "x": 0.289882, "y": 1.429812 }, { "x": 0.246588, "y": 1.344843 }, { "x": 0.179157, "y": 1.277412 }, { "x": 0.094188, "y": 1.234118 }, { "x": 0, "y": 1.2192 }, { "x": -0.094188, "y": 1.234118 }, { "x": -0.179157, "y": 1.277412 }, { "x": -0.246588, "y": 1.344843 }, { "x": -0.289882, "y": 1.429812 }, { "x": -0.3048, "y": 1.524 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.1844, "y": 1.778 }, { "x": 2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1844, "y": -1.778 }, { "x": -2.1844, "y": 1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": 1.778 }, { "x": 2.1844, "y": -1.778 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1844, "y": -1.778 }, { "x": -2.1844, "y": -1.778 }]} layer="top"/>
      </footprint>);
// R36: 422; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// Q1: DMTH6010LPD-13; Project_Footprints_Library:ON_Semiconductor-506BT-02_2013-E-MFG
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.795mm" layer="top" width="1mm" height="0.75mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 2.28, "y": 3.295 }, { "x": 1.529999, "y": 3.295 }, { "x": 1.529999, "y": 2.735 }, { "x": 0.95, "y": 2.735 }, { "x": 0.95, "y": 3.295 }, { "x": 0.2, "y": 3.295 }, { "x": 0.2, "y": -1.545 }, { "x": 2.775, "y": -1.545 }, { "x": 2.775, "y": -0.145 }, { "x": 2.28, "y": -0.145 }, { "x": 2.28, "y": 0.755 }, { "x": 2.775, "y": 0.755 }, { "x": 2.775, "y": 2.155 }, { "x": 2.28, "y": 2.155 }, { "x": 2.28, "y": 3.295 }]}/>
<smtpad portHints={["pin6"]} layer="top" shape="polygon" points={[{ "x": -2.28, "y": 3.295 }, { "x": -2.28, "y": 2.155 }, { "x": -2.775, "y": 2.155 }, { "x": -2.775, "y": 0.755 }, { "x": -2.28, "y": 0.755 }, { "x": -2.28, "y": -0.145 }, { "x": -2.775, "y": -0.145 }, { "x": -2.775, "y": -1.545 }, { "x": -0.2, "y": -1.545 }, { "x": -0.2, "y": 3.295 }, { "x": -0.95, "y": 3.295 }, { "x": -0.95, "y": 2.735 }, { "x": -1.529999, "y": 2.735 }, { "x": -1.529999, "y": 3.295 }, { "x": -2.28, "y": 3.295 }]}/>


<fabricationnotepath route={[{ "x": -2.55, "y": 3.05 }, { "x": 2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.55, "y": -3.05 }, { "x": -2.55, "y": 3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": 3.05 }, { "x": 2.55, "y": -3.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.55, "y": -3.05 }, { "x": -2.55, "y": -3.05 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -2.800001, "y": 3.32 }, { "x": -2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.800001, "y": -3.32 }, { "x": 2.800001, "y": -3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": -2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": 3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.800001, "y": -3.32 }, { "x": 2.800001, "y": 3.32 }]} layer="top"/>
      </footprint>);
// R35: 1.96k; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.4mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// TP15: Prog; Project_Footprints_Library:test_point
export const Footprint_TP15 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="Prog" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP15" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
// C14: 130pF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.175mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R62: .05; Resistor_SMD:R_2512_6332Metric_Pad1.40x3.35mm_HandSolder
export const Footprint_R62 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.05mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="3.35mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -3.15, "y": 1.6 }, { "x": 3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.15, "y": -1.6 }, { "x": -3.15, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": 1.6 }, { "x": 3.15, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.15, "y": -1.6 }, { "x": -3.15, "y": -1.6 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -4, "y": 1.92 }, { "x": 4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4, "y": -1.92 }, { "x": -4, "y": 1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": 1.92 }, { "x": 4, "y": -1.92 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4, "y": -1.92 }, { "x": -4, "y": -1.92 }]} layer="top"/>
      </footprint>);
// C39: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C42: 10n; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C65: 100uF; Capacitor_THT:CP_Radial_D10.0mm_P5.00mm
export const Footprint_C65 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="2mm" rectPadHeight="2mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1mm" shape="circle"/>

































































































































































































<fabricationnotepath route={[{ "x": -1.788861, "y": 2.1875 }, { "x": -0.788861, "y": 2.1875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.288861, "y": 2.6875 }, { "x": -1.288861, "y": 1.6875 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 7.5, "y": 0 }, { "x": 7.119398, "y": 1.913417 }, { "x": 6.035534, "y": 3.535534 }, { "x": 4.413417, "y": 4.619398 }, { "x": 2.5, "y": 5 }, { "x": 0.586583, "y": 4.619398 }, { "x": -1.035534, "y": 3.535534 }, { "x": -2.119398, "y": 1.913417 }, { "x": -2.5, "y": 0 }, { "x": -2.119398, "y": -1.913417 }, { "x": -1.035534, "y": -3.535534 }, { "x": 0.586583, "y": -4.619398 }, { "x": 2.5, "y": -5 }, { "x": 4.413417, "y": -4.619398 }, { "x": 6.035534, "y": -3.535534 }, { "x": 7.119398, "y": -1.913417 }, { "x": 7.5, "y": 0 }]} strokeWidth={0.1}/>

<courtyardcircle pcbX={2.5} pcbY={0} radius={5.25} layer="top"/>
      </footprint>);
// R59: 180; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// J14: PROG; Connector_PinHeader_2.54mm:PinHeader_1x04_P2.54mm_Vertical
export const Footprint_J14 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -8.89 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -8.89 }, { "x": -1.27, "y": -8.89 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-9.95} anchorAlignment="center" text="PROG" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-3.81} anchorAlignment="center" text="J14" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -9.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -9.4 }, { "x": 1.8, "y": -9.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -9.4 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// L1: 3.3uH; Project_Footprints_Library:NRS5040T3R3NMGJ
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.8mm" pcbY="0mm" layer="top" width="1.5mm" height="4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.8mm" pcbY="0mm" layer="top" width="1.5mm" height="4mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -2.45, "y": 2.45 }, { "x": 2.45, "y": 2.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": -2.45 }, { "x": -2.45, "y": 2.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.45, "y": 2.45 }, { "x": 2.45, "y": -2.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.45, "y": -2.45 }, { "x": -2.45, "y": -2.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={1.27}/>

<courtyardoutline outline={[{ "x": -3.55, "y": 3.45 }, { "x": 3.55, "y": 3.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -3.45 }, { "x": -3.55, "y": 3.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 3.45 }, { "x": 3.55, "y": -3.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -3.45 }, { "x": -3.55, "y": -3.45 }]} layer="top"/>
      </footprint>);
// D2: MBR0580; Diode_SMD:D_SOD-123
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.65mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="1.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.4, "y": 0.9 }, { "x": 1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -0.9 }, { "x": -1.4, "y": 0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": 0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": -0.35, "y": -0.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0 }, { "x": 0.25, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.4 }, { "x": 0.25, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0 }, { "x": 0.75, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.4 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 0.9 }, { "x": 1.4, "y": -0.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -0.9 }, { "x": -1.4, "y": -0.9 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.35, "y": 1.15 }, { "x": 2.35, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": 1.15 }, { "x": 2.35, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.35, "y": -1.15 }, { "x": -2.35, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R9: 100k .5%; Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.85, "y": 0.95 }, { "x": 1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.85, "y": -0.95 }, { "x": -1.85, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": 0.95 }, { "x": 1.85, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.85, "y": -0.95 }, { "x": -1.85, "y": -0.95 }]} layer="top"/>
      </footprint>);
// D13: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// C50: 1uF; Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder
export const Footprint_C50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0375mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1.175mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 0.98 }, { "x": 1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -0.98 }, { "x": -1.88, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 0.98 }, { "x": 1.88, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -0.98 }, { "x": -1.88, "y": -0.98 }]} layer="top"/>
      </footprint>);
// D15: CDBW46-G; Project_Footprints_Library:CDBW46-G
export const Footprint_D15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.7526mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.762mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.9558, "y": 0.3556 }, { "x": -1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.9558, "y": -0.3556 }, { "x": -1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.9017 }, { "x": -1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.45085 }, { "x": -0.94615, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": 0.3556 }, { "x": -1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.3556 }, { "x": -1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.45085 }, { "x": -0.94615, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.397, "y": -0.9017 }, { "x": 1.397, "y": -0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.9017 }, { "x": -1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": 0.3556 }, { "x": 1.397, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.3556 }, { "x": 1.9558, "y": -0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.397, "y": -0.9017 }, { "x": 1.397, "y": 0.9017 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": 0.3556 }, { "x": 1.397, "y": 0.3556 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.9558, "y": -0.3556 }, { "x": 1.9558, "y": 0.3556 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.8, "y": 1.15 }, { "x": -1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": 1.125 }, { "x": -2.8, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.8, "y": -1.15 }, { "x": -2.8, "y": 1.125 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": 1.1557 }, { "x": 1.651, "y": 1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.651, "y": -1.1557 }, { "x": -2.8, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 1.1557 }, { "x": 1.651, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": 0.635 }, { "x": 2.5654, "y": 0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -0.635 }, { "x": 1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.651, "y": -1.1557 }, { "x": -1.651, "y": -1.1557 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": 0.635 }, { "x": 2.5654, "y": -0.635 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.5654, "y": -0.635 }, { "x": 1.651, "y": -0.635 }]} layer="top"/>
      </footprint>);
// U29: LM358; Package_SO:SOIC-8_3.9x4.9mm_P1.27mm
export const Footprint_U29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.475mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.475mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.475mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.475mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.475mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="2.475mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.475mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.475mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="1.95mm" height="0.6mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -1.95, "y": 1.475 }, { "x": -0.975, "y": 2.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.95, "y": -2.45 }, { "x": -1.95, "y": 1.475 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.975, "y": 2.45 }, { "x": 1.95, "y": 2.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.95, "y": 2.45 }, { "x": 1.95, "y": -2.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.95, "y": -2.45 }, { "x": -1.95, "y": -2.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.4} anchorAlignment="center" text="LM358" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U29" font="tscircuit2024" fontSize={0.98}/>

<courtyardoutline outline={[{ "x": -3.7, "y": 2.7 }, { "x": -3.7, "y": -2.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.7, "y": -2.7 }, { "x": 3.7, "y": -2.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7, "y": 2.7 }, { "x": -3.7, "y": 2.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.7, "y": -2.7 }, { "x": 3.7, "y": 2.7 }]} layer="top"/>
      </footprint>);
// TP22: test; Project_Footprints_Library:test_point
export const Footprint_TP22 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-0.03mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>





<fabricationnotepath route={[{ "x": -1.27, "y": 1.24 }, { "x": 0.635, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.3 }, { "x": -1.27, "y": 1.24 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.24 }, { "x": 1.27, "y": 0.605 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.605 }, { "x": 1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.3 }, { "x": -1.27, "y": -1.3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.5} pcbY={-2.9} anchorAlignment="center" text="test" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.1} pcbY={3.1} anchorAlignment="center" text="TP22" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.77 }, { "x": 1.75, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.78 }, { "x": -1.8, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.77 }, { "x": 1.75, "y": -1.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.78 }, { "x": -1.8, "y": -1.78 }]} layer="top"/>
      </footprint>);
