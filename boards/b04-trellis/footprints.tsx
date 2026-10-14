// Trellis Core
// Source: https://github.com/protolux-electronics/trellis_core
// Commit: db4fe71623c14bcea47d7457d0db4c99d3899124; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// C7: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C33: 10p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C28: 2u2; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="2u2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C2: 10p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C41: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C41" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R23: 22R; Resistor_SMD:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="22R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R25: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// U6: SN74AHC1G08; Package_TO_SOT_SMD:Texas_R-PDSO-G5_DCK-5
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.675, "y": 1 }, { "x": -0.175, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1 }, { "x": 0.675, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1 }, { "x": -0.675, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.675, "y": 0.5 }, { "x": -0.675, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": -1 }, { "x": -0.675, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="SN74AHC1G08" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.25 }, { "x": 1.8, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 1.25 }, { "x": -1.8, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -1.25 }, { "x": 1.8, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.25 }, { "x": 1.8, "y": -1.25 }]} layer="top"/>
      </footprint>);
// C10: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C20: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R17: 51k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="51k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C44: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R18: 51k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="51k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R1: 100k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// SW1: SW_Push; Button_Switch_SMD:SW_Push_SPST_NO_Alps_SKRK
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.1mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.1mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.95, "y": -1.45 }, { "x": -1.95, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.95, "y": -1.45 }, { "x": -1.95, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.95, "y": 1.45 }, { "x": 1.95, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.95, "y": 1.45 }, { "x": 1.95, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.5} anchorAlignment="center" text="SW_Push" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="SW1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -2.75, "y": -1.7 }, { "x": -2.75, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": -1.7 }, { "x": -2.75, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": 1.7 }, { "x": 2.75, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": 1.7 }, { "x": 2.75, "y": -1.7 }]} layer="top"/>
      </footprint>);
// R11: 100k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R20: 51k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="51k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R15: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// F1: 1A; Fuse:Fuse_1206_3216Metric
export const Footprint_F1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.75mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.75mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.83} anchorAlignment="center" text="1A" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="F1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 2.28, "y": 1.13 }, { "x": 2.28, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.28, "y": 1.13 }, { "x": 2.28, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.28, "y": -1.13 }, { "x": -2.28, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.28, "y": -1.13 }, { "x": -2.28, "y": 1.13 }]} layer="top"/>
      </footprint>);
// C40: 2u2; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="2u2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C40" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C23: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// H2: MountingHole_2.7mm_M2.5_DIN965; MountingHole:MountingHole_2.7mm_M2.5_DIN965
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.7mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="MountingHole_2.7mm_M2.5_DIN965" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.6} layer="top"/>
      </footprint>);
// C27: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C5: 22u; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="22u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C14: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C34: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C36: 18p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="18p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R22: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C17: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U5: ZDSD08GLGEAG; Package_LGA:LGA-8_8x6mm_P1.27mm
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.75mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.75mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.75mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.75mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="3.75mm" pcbY="-1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.75mm" pcbY="-0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="3.75mm" pcbY="0.635mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.75mm" pcbY="1.905mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -4, "y": 2 }, { "x": -4, "y": -3 }, { "x": 4, "y": -3 }, { "x": 4, "y": 3 }, { "x": -3, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.95} anchorAlignment="center" text="ZDSD08GLGEAG" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -4.25, "y": -3.25 }, { "x": -4.25, "y": -2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.25, "y": -3.25 }, { "x": -4.25, "y": -3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.6, "y": -2.46 }, { "x": -4.6, "y": 2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.25, "y": -2.46 }, { "x": -4.6, "y": -2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.25, "y": -2.46 }, { "x": 4.25, "y": -3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.6, "y": -2.46 }, { "x": 4.25, "y": -2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.6, "y": 2.46 }, { "x": -4.25, "y": 2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.25, "y": 2.46 }, { "x": -4.25, "y": 3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.25, "y": 2.46 }, { "x": 4.6, "y": 2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.6, "y": 2.46 }, { "x": 4.6, "y": -2.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.25, "y": 3.25 }, { "x": 4.25, "y": 3.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.25, "y": 3.25 }, { "x": 4.25, "y": 2.46 }]} layer="top"/>
      </footprint>);
// C31: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// Y1: 24MHz; Crystal:Crystal_SMD_2520-4Pin_2.5x2.0mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.875mm" pcbY="-0.7mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.875mm" pcbY="-0.7mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.875mm" pcbY="0.7mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.875mm" pcbY="0.7mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.25, "y": 1 }, { "x": -1.25, "y": -0.5 }, { "x": -0.75, "y": -1 }, { "x": 1.25, "y": -1 }, { "x": 1.25, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.2} anchorAlignment="center" text="24MHz" font="tscircuit2024" fontSize={0.5}/>

<courtyardrect pcbX={0} pcbY={0} width={3.5} height={3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C30: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C25: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R19: 51k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="51k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C11: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C6: 22u; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="22u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// U3: T113-S3; gworkman_mpu:T113-S3
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-7.6625mm" pcbY="6.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-7.6625mm" pcbY="5.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-7.6625mm" pcbY="5.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-7.6625mm" pcbY="5mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-7.6625mm" pcbY="4.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-7.6625mm" pcbY="4.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-7.6625mm" pcbY="3.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-7.6625mm" pcbY="3.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-7.6625mm" pcbY="3mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7.6625mm" pcbY="2.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.6625mm" pcbY="2.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-7.6625mm" pcbY="1.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-7.6625mm" pcbY="1.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-7.6625mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-7.6625mm" pcbY="0.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-7.6625mm" pcbY="0.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-7.6625mm" pcbY="-0.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-7.6625mm" pcbY="-0.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-7.6625mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-7.6625mm" pcbY="-1.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-7.6625mm" pcbY="-1.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-7.6625mm" pcbY="-2.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-7.6625mm" pcbY="-2.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-7.6625mm" pcbY="-3mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-7.6625mm" pcbY="-3.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="-7.6625mm" pcbY="-3.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="-7.6625mm" pcbY="-4.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="-7.6625mm" pcbY="-4.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-7.6625mm" pcbY="-5mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-7.6625mm" pcbY="-5.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-7.6625mm" pcbY="-5.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-7.6625mm" pcbY="-6.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-6.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="-5.8mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="-5.4mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="-5mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="-4.6mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="-4.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="-3.8mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="-3.4mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-3mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="-2.6mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="-2.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="-1.8mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="-1.4mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="-1mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="-0.6mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="-0.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="0.6mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="1mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="1.4mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="1.8mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="2.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="2.6mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="3mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="3.4mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="3.8mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin59"]} pcbX="4.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin60"]} pcbX="4.6mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin61"]} pcbX="5mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin62"]} pcbX="5.4mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin63"]} pcbX="5.8mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin64"]} pcbX="6.2mm" pcbY="-7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin65"]} pcbX="7.6625mm" pcbY="-6.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin66"]} pcbX="7.6625mm" pcbY="-5.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin67"]} pcbX="7.6625mm" pcbY="-5.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin68"]} pcbX="7.6625mm" pcbY="-5mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin69"]} pcbX="7.6625mm" pcbY="-4.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin70"]} pcbX="7.6625mm" pcbY="-4.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin71"]} pcbX="7.6625mm" pcbY="-3.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin72"]} pcbX="7.6625mm" pcbY="-3.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin73"]} pcbX="7.6625mm" pcbY="-3mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin74"]} pcbX="7.6625mm" pcbY="-2.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin75"]} pcbX="7.6625mm" pcbY="-2.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin76"]} pcbX="7.6625mm" pcbY="-1.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin77"]} pcbX="7.6625mm" pcbY="-1.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin78"]} pcbX="7.6625mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin79"]} pcbX="7.6625mm" pcbY="-0.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin80"]} pcbX="7.6625mm" pcbY="-0.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin81"]} pcbX="7.6625mm" pcbY="0.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin82"]} pcbX="7.6625mm" pcbY="0.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin83"]} pcbX="7.6625mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin84"]} pcbX="7.6625mm" pcbY="1.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin85"]} pcbX="7.6625mm" pcbY="1.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin86"]} pcbX="7.6625mm" pcbY="2.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin87"]} pcbX="7.6625mm" pcbY="2.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin88"]} pcbX="7.6625mm" pcbY="3mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin89"]} pcbX="7.6625mm" pcbY="3.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin90"]} pcbX="7.6625mm" pcbY="3.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin91"]} pcbX="7.6625mm" pcbY="4.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin92"]} pcbX="7.6625mm" pcbY="4.6mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin93"]} pcbX="7.6625mm" pcbY="5mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin94"]} pcbX="7.6625mm" pcbY="5.4mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin95"]} pcbX="7.6625mm" pcbY="5.8mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin96"]} pcbX="7.6625mm" pcbY="6.2mm" layer="top" cornerRadius="0.03125mm" width="1.475mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin97"]} pcbX="6.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin98"]} pcbX="5.8mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin99"]} pcbX="5.4mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin100"]} pcbX="5mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin101"]} pcbX="4.6mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin102"]} pcbX="4.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin103"]} pcbX="3.8mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin104"]} pcbX="3.4mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin105"]} pcbX="3mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin106"]} pcbX="2.6mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin107"]} pcbX="2.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin108"]} pcbX="1.8mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin109"]} pcbX="1.4mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin110"]} pcbX="1mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin111"]} pcbX="0.6mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin112"]} pcbX="0.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin113"]} pcbX="-0.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin114"]} pcbX="-0.6mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin115"]} pcbX="-1mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin116"]} pcbX="-1.4mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin117"]} pcbX="-1.8mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin118"]} pcbX="-2.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin119"]} pcbX="-2.6mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin120"]} pcbX="-3mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin121"]} pcbX="-3.4mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin122"]} pcbX="-3.8mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin123"]} pcbX="-4.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin124"]} pcbX="-4.6mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin125"]} pcbX="-5mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin126"]} pcbX="-5.4mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin127"]} pcbX="-5.8mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin128"]} pcbX="-6.2mm" pcbY="7.6625mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin129"]} pcbX="0mm" pcbY="0mm" layer="top" width="5.72mm" height="5.72mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 7, "y": -7 }, { "x": -7, "y": -7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 7, "y": 7 }, { "x": 7, "y": -7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6, "y": 7 }, { "x": 7, "y": 7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -7, "y": -7 }, { "x": -7, "y": 6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -7, "y": 6 }, { "x": -6, "y": 7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-9.35} anchorAlignment="center" text="T113-S3" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 8.65, "y": -6.58 }, { "x": 8.65, "y": 0 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.65, "y": 6.58 }, { "x": 8.65, "y": 0 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.25, "y": -7.25 }, { "x": 7.25, "y": -6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.25, "y": -6.58 }, { "x": 8.65, "y": -6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.25, "y": 6.58 }, { "x": 8.65, "y": 6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.25, "y": 7.25 }, { "x": 7.25, "y": 6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.58, "y": -8.65 }, { "x": 6.58, "y": -7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.58, "y": -7.25 }, { "x": 7.25, "y": -7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.58, "y": 7.25 }, { "x": 7.25, "y": 7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.58, "y": 8.65 }, { "x": 6.58, "y": 7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": -8.65 }, { "x": 6.58, "y": -8.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": -8.65 }, { "x": -6.58, "y": -8.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": 8.65 }, { "x": 6.58, "y": 8.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": 8.65 }, { "x": -6.58, "y": 8.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.58, "y": -8.65 }, { "x": -6.58, "y": -7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.58, "y": -7.25 }, { "x": -7.25, "y": -7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.58, "y": 7.25 }, { "x": -7.25, "y": 7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.58, "y": 8.65 }, { "x": -6.58, "y": 7.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7.25, "y": -7.25 }, { "x": -7.25, "y": -6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7.25, "y": -6.58 }, { "x": -8.65, "y": -6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7.25, "y": 6.58 }, { "x": -8.65, "y": 6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -7.25, "y": 7.25 }, { "x": -7.25, "y": 6.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.65, "y": -6.58 }, { "x": -8.65, "y": 0 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.65, "y": 6.58 }, { "x": -8.65, "y": 0 }]} layer="top"/>
      </footprint>);
// U2: TLV62569PDDCR; Package_TO_SOT_SMD:SOT-23-6
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="TLV62569PDDCR" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.5 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.5 }, { "x": 1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.5 }, { "x": 2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.5 }, { "x": 2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 1.5 }]} layer="top"/>
      </footprint>);
// C24: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// D1: RED; LED_SMD:LED_0805_2012Metric
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.3 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": 0.6 }, { "x": -1, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": -0.7, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="RED" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C37: 18p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="18p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R12: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// H1: MountingHole_2.7mm_M2.5_DIN965; MountingHole:MountingHole_2.7mm_M2.5_DIN965
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.7mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="MountingHole_2.7mm_M2.5_DIN965" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.6} layer="top"/>
      </footprint>);
// R5: 51k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="51k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// J1: USB_C_Receptacle_USB2.0_14P; Connector_USB:USB_C_Receptacle_G-Switch_GT-USB-7010ASV
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <hole pcbX="-2.89mm" pcbY="2.605mm" diameter="0.65mm"/>
<hole pcbX="2.89mm" pcbY="2.605mm" diameter="0.65mm"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="3.125mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="-1.075mm" outerHeight="1.8mm" outerWidth="1mm" holeHeight="1.4mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="3.125mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="-1.075mm" outerHeight="1.8mm" outerWidth="1mm" holeHeight="1.4mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<smtpad portHints={["pin1"]} pcbX="-3.2mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="1.25mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.4mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="3.2mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="3.2mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="2.4mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="1.75mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="0.75mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.75mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="3.725mm" layer="top" width="0.3mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.4mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-3.2mm" pcbY="3.725mm" layer="top" width="0.6mm" height="1.24mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -4.47, "y": 3.675 }, { "x": -4.47, "y": -3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": 3.675 }, { "x": 4.47, "y": 3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": -3.675 }, { "x": 4.47, "y": -3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4.47, "y": -3.675 }, { "x": 4.47, "y": 3.675 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-5} anchorAlignment="center" text="USB_C_Receptacle_USB2.0_14P" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -5.32, "y": 4.85 }, { "x": 5.32, "y": 4.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": -4.18 }, { "x": -5.32, "y": 4.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.32, "y": 4.85 }, { "x": 5.32, "y": -4.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.32, "y": -4.18 }, { "x": -5.32, "y": -4.18 }]} layer="top"/>
      </footprint>);
// C22: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// U1: TLV62569PDDCR; Package_TO_SOT_SMD:SOT-23-6
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="TLV62569PDDCR" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.5 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.5 }, { "x": 1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.5 }, { "x": 2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.5 }, { "x": 2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 1.5 }]} layer="top"/>
      </footprint>);
// R2: 453k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="453k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C4: 10p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C15: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C19: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R13: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C38: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C8: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// H3: MountingHole_2.7mm_M2.5_DIN965; MountingHole:MountingHole_2.7mm_M2.5_DIN965
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.7mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="MountingHole_2.7mm_M2.5_DIN965" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.6} layer="top"/>
      </footprint>);
// SW2: SW_Push; Button_Switch_SMD:SW_Push_SPST_NO_Alps_SKRK
export const Footprint_SW2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.1mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.1mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="2mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.95, "y": -1.45 }, { "x": -1.95, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.95, "y": -1.45 }, { "x": -1.95, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.95, "y": 1.45 }, { "x": 1.95, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.95, "y": 1.45 }, { "x": 1.95, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.5} anchorAlignment="center" text="SW_Push" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="SW2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -2.75, "y": -1.7 }, { "x": -2.75, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": -1.7 }, { "x": -2.75, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": 1.7 }, { "x": 2.75, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": 1.7 }, { "x": 2.75, "y": -1.7 }]} layer="top"/>
      </footprint>);
// C35: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R4: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// kibuzzard-68FD2BE5: G***; kibuzzard-68FD2BE5
export const Footprint_kibuzzard_68FD2BE5 = () => (<footprint originalLayer="top">
        










      </footprint>);
// L1: 2u2; Inductor_SMD:L_Wuerth_MAPI-2510
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.975mm" pcbY="0mm" layer="top" cornerRadius="0.10625mm" width="2.3mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.975mm" pcbY="0mm" layer="top" cornerRadius="0.10625mm" width="2.3mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.95} anchorAlignment="center" text="2u2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={2.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": 1.65, "y": 1.4 }, { "x": 1.65, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": 1.4 }, { "x": 1.65, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": 1.4 }, { "x": -0.3, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.4 }, { "x": -0.3, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": 1.25 }, { "x": 0.3, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": 1.25 }, { "x": 0.3, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": -1.25 }, { "x": -0.3, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": -1.25 }, { "x": -0.3, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.4 }, { "x": 0.3, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": -1.4 }, { "x": 0.3, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": -1.4 }, { "x": -1.65, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": -1.4 }, { "x": -1.65, "y": 1.4 }]} layer="top"/>
      </footprint>);
// R6: 100k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R16: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R24: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// Y2: 32.768kHz; Crystal:Crystal_SMD_3215-2Pin_3.2x1.5mm
export const Footprint_Y2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="1.25mm" pcbY="0mm" layer="top" width="1mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.25mm" pcbY="0mm" layer="top" width="1mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.75 }, { "x": 1.6, "y": -0.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.75 }, { "x": 1.6, "y": -0.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.75 }, { "x": 1.6, "y": 0.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.75 }, { "x": -1.6, "y": -0.75 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="32.768kHz" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="Y2" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 2, "y": 1.15 }, { "x": 2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": -1.15 }, { "x": 2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": 1.15 }, { "x": 2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": 1.15 }, { "x": -2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C42: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C39: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C9: 2u2; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="2u2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C3: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R14: 5k1; Resistor_SMD:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5k1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C43: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C13: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C29: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C16: 2u2; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="2u2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C18: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R3: 100k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C32: 10p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C21: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R10: 240R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="240R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C26: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R9: TODO; Resistor_SMD:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="TODO" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R7: 100k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// H4: MountingHole_2.7mm_M2.5_DIN965; MountingHole:MountingHole_2.7mm_M2.5_DIN965
export const Footprint_H4 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.7mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="MountingHole_2.7mm_M2.5_DIN965" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H4" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.6} layer="top"/>
      </footprint>);
// R8: TODO; Resistor_SMD:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="TODO" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// U4: USBLC6-2SC6; Package_TO_SOT_SMD:SOT-23-6
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.45 }, { "x": 0.8, "y": -1.45 }, { "x": 0.8, "y": 1.45 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="USBLC6-2SC6" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 1.05, "y": 1.7 }, { "x": 1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.7 }, { "x": 1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.5 }, { "x": 2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": 1.5 }, { "x": 2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": 1.5 }, { "x": -1.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.5 }, { "x": -1.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.5 }, { "x": 1.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.5 }, { "x": 1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.5 }, { "x": -2.05, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.5 }, { "x": -2.05, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.05, "y": -1.7 }, { "x": -1.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.05, "y": -1.7 }, { "x": -1.05, "y": -1.5 }]} layer="top"/>
      </footprint>);
// R21: 51k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="51k" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// L2: 2u2; Inductor_SMD:L_Wuerth_MAPI-2510
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.975mm" pcbY="0mm" layer="top" cornerRadius="0.10625mm" width="2.3mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.975mm" pcbY="0mm" layer="top" cornerRadius="0.10625mm" width="2.3mm" height="0.85mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.95} anchorAlignment="center" text="2u2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={2.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": 1.65, "y": 1.4 }, { "x": 1.65, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": 1.4 }, { "x": 1.65, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": 1.4 }, { "x": -0.3, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.4 }, { "x": -0.3, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": 1.25 }, { "x": 0.3, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": 1.25 }, { "x": 0.3, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": -1.25 }, { "x": -0.3, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": -1.25 }, { "x": -0.3, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.4 }, { "x": 0.3, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.3, "y": -1.4 }, { "x": 0.3, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.3, "y": -1.4 }, { "x": -1.65, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": -1.4 }, { "x": -1.65, "y": 1.4 }]} layer="top"/>
      </footprint>);
// C1: 10u; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C12: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
