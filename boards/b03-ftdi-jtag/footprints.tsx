// FTDI JTAG programmer
// Source: https://github.com/anthony-bernaert/ftdi-jtag-programmer
// Commit: c33005ef528526c137ba8fd1e9cf4e8ceab63a1f; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// D19: LED; LED_SMD:LED_0603_1608Metric
export const Footprint_D19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="LED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D19" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP1: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={1.45} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// D5: CUS520,H3F; Diode_SMD:D_SOD-323
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.9, "y": 0.7 }, { "x": 0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.7 }, { "x": -0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.35 }, { "x": -0.3, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": -0.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": 0.2, "y": 0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0.35 }, { "x": 0.2, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0 }, { "x": 0.45, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": -0.35 }, { "x": -0.3, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.7 }, { "x": 0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.7 }, { "x": -0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={3.4} pcbY={0.05} anchorAlignment="center" text="CUS520,H3F" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={-1.7} pcbY={0.15} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": -1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": 1.6, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": 0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C29: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.65} pcbY={-0.1} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C8: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// D6: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4.050545} pcbY={-0.1} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// R8: 2.2K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.010347} pcbY={-0.876559} anchorAlignment="center" text="2.2K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R28: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D18: CUS520,H3F; Diode_SMD:D_SOD-323
export const Footprint_D18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.9, "y": 0.7 }, { "x": 0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.7 }, { "x": -0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.35 }, { "x": -0.3, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": -0.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": 0.2, "y": 0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0.35 }, { "x": 0.2, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0 }, { "x": 0.45, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": -0.35 }, { "x": -0.3, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.7 }, { "x": 0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.7 }, { "x": -0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.5} pcbY={1.5} anchorAlignment="center" text="CUS520,H3F" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={2.3} anchorAlignment="center" text="D18" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": -1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": 1.6, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": 0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R20: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.9} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C23: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C16: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R17: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP5: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-0.1} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// H4: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H4 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.2} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H4" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// R18: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.9} pcbY={0} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D10: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4.2} pcbY={0} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// D12: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4} pcbY={0} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// U3: 93LC56B; Package_TO_SOT_SMD:SOT-23-6
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.360858} pcbY={-0.034047} anchorAlignment="center" text="93LC56B" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// C33: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.3} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// J3: Conn_01x06; Connector_PinSocket_2.54mm:PinSocket_1x06_P2.54mm_Vertical
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -13.97 }, { "x": -1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.27 }, { "x": 1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.635 }, { "x": 1.27, "y": -13.97 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -13.97 }, { "x": -1.27, "y": -13.97 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-14.7} anchorAlignment="center" text="Conn_01x06" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={-0.4} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": 1.75, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -14.45 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.8 }, { "x": 1.75, "y": -14.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -14.45 }, { "x": -1.8, "y": -14.45 }]} layer="top"/>
      </footprint>);
// C11: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.1} pcbY={0} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R7: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.426179} pcbY={-0.009505} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R21: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.4} pcbY={0} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R6: 12K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.1} pcbY={-0.85} anchorAlignment="center" text="12K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U7: 74LVC3G17; Package_SO:VSSOP-8_3.0x3.0mm_P0.65mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.2mm" pcbY="0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.2mm" pcbY="0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.2mm" pcbY="-0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.2mm" pcbY="-0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.2mm" pcbY="-0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.2mm" pcbY="-0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.2mm" pcbY="0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.2mm" pcbY="0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.05} pcbY={-2} anchorAlignment="center" text="74LVC3G17" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -3.48, "y": 1.75 }, { "x": 3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.48, "y": -1.75 }, { "x": -3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": 1.75 }, { "x": 3.48, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": -1.75 }, { "x": -3.48, "y": -1.75 }]} layer="top"/>
      </footprint>);
// C9: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.308584} pcbY={-1.7} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R3: 10R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.65} pcbY={-0.05} anchorAlignment="center" text="10R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP7: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.45} anchorAlignment="center" text="TP7" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// FB1: BLM18AG601SN1D; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.1} pcbY={-0.8} anchorAlignment="center" text="BLM18AG601SN1D" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB1" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R16: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.8} pcbY={-0.05} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R19: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R11: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.999455} pcbY={0} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// Y1: RH100-12.000-10-3030-TR; Crystal:Crystal_SMD_3225-4Pin_3.2x2.5mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.85mm" layer="top" width="1.2mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="-0.85mm" layer="top" width="1.2mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.85mm" layer="top" width="1.2mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1mm" pcbY="0.85mm" layer="top" width="1.2mm" height="1.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.25 }, { "x": -0.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.1} pcbY={0.7} anchorAlignment="center" text="RH100-12.000-10-3030-TR" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Y1" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -2.1, "y": 1.7 }, { "x": -2.1, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1, "y": -1.7 }, { "x": 2.1, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1, "y": 1.7 }, { "x": -2.1, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1, "y": -1.7 }, { "x": 2.1, "y": 1.7 }]} layer="top"/>
      </footprint>);
// R15: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.4} pcbY={-0.4} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C4: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.124513} pcbY={-0.068623} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R1: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="0R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R2: 10R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.65} pcbY={0.05} anchorAlignment="center" text="10R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U6: 74LVC3G17; Package_SO:VSSOP-8_3.0x3.0mm_P0.65mm
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.2mm" pcbY="0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.2mm" pcbY="0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.2mm" pcbY="-0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.2mm" pcbY="-0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.2mm" pcbY="-0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.2mm" pcbY="-0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.2mm" pcbY="0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.2mm" pcbY="0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.45} pcbY={-2.05} anchorAlignment="center" text="74LVC3G17" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -3.48, "y": 1.75 }, { "x": 3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.48, "y": -1.75 }, { "x": -3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": 1.75 }, { "x": 3.48, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": -1.75 }, { "x": -3.48, "y": -1.75 }]} layer="top"/>
      </footprint>);
// R27: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// FB2: BLM18AG601SN1D; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.2} pcbY={1} anchorAlignment="center" text="BLM18AG601SN1D" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB2" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C13: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.8} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C5: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.4} pcbY={-0.5} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C7: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// F1: 0805L075SLYR; Fuse:Fuse_0805_2012Metric
export const Footprint_F1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="0.975mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="0.975mm" height="1.4mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": -1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="0805L075SLYR" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="F1" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C18: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.9} pcbY={0} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C2: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.1} pcbY={-0.9} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP3: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0.1} pcbY={0} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// R24: 5K1; Resistor_SMD:R_0603_1608Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="5K1" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// H1: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.2} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// C17: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.2} pcbY={-1} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C27: 10n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.25} pcbY={-0.019783} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// J5: Conn_01x03; Connector_PinSocket_2.54mm:PinSocket_1x03_P2.54mm_Vertical
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.27 }, { "x": 1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.635 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.9} pcbY={-3.04} anchorAlignment="center" text="Conn_01x03" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": 1.75, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -6.85 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.8 }, { "x": 1.75, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -6.85 }, { "x": -1.8, "y": -6.85 }]} layer="top"/>
      </footprint>);
// R13: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.949455} pcbY={0} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C22: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D13: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4} pcbY={0.05} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// TP4: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={-0.3} pcbY={-0.006683} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// C25: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// Q1: BSS123; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="BSS123" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={0.32}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// D2: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={0.2} pcbY={-1.1} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// C21: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.525} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U5: 74LVC3G17; Package_SO:VSSOP-8_3.0x3.0mm_P0.65mm
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.2mm" pcbY="0.975mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.2mm" pcbY="0.325mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.2mm" pcbY="-0.325mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.2mm" pcbY="-0.975mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.2mm" pcbY="-0.975mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.2mm" pcbY="-0.325mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.2mm" pcbY="0.325mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.2mm" pcbY="0.975mm" layer="top" width="0.45mm" height="1.45mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.05} pcbY={1.65} anchorAlignment="center" text="74LVC3G17" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -3.48, "y": 1.75 }, { "x": 3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.48, "y": -1.75 }, { "x": -3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": 1.75 }, { "x": 3.48, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": -1.75 }, { "x": -3.48, "y": -1.75 }]} layer="top"/>
      </footprint>);
// J4: Conn_01x06; Connector_PinSocket_2.54mm:PinSocket_1x06_P2.54mm_Vertical
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -13.97 }, { "x": -1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.635, "y": 1.27 }, { "x": 1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.635 }, { "x": 1.27, "y": -13.97 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -13.97 }, { "x": -1.27, "y": -13.97 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-14.85} anchorAlignment="center" text="Conn_01x06" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0.15} pcbY={-0.35} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": 1.75, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -14.45 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.8 }, { "x": 1.75, "y": -14.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -14.45 }, { "x": -1.8, "y": -14.45 }]} layer="top"/>
      </footprint>);
// C6: 10n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={1.35} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R12: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.000545} pcbY={-0.05} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R5: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U4: 74LVC3G17; Package_SO:VSSOP-8_3.0x3.0mm_P0.65mm
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.2mm" pcbY="0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.2mm" pcbY="0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.2mm" pcbY="-0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.2mm" pcbY="-0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.2mm" pcbY="-0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.2mm" pcbY="-0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.2mm" pcbY="0.325mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.2mm" pcbY="0.975mm" layer="top" width="1.45mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": -1.5, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-3.4} pcbY={1.15} anchorAlignment="center" text="74LVC3G17" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -3.48, "y": 1.75 }, { "x": 3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.48, "y": -1.75 }, { "x": -3.48, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": 1.75 }, { "x": 3.48, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.48, "y": -1.75 }, { "x": -3.48, "y": -1.75 }]} layer="top"/>
      </footprint>);
// D8: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4.1} pcbY={-0.05} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// C1: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={1.3} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R23: 5K1; Resistor_SMD:R_0603_1608Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="5K1" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D11: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4} pcbY={0} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// C26: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U2: FT2232HL; Package_QFP:LQFP-64_10x10mm_P0.5mm
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-5.675mm" pcbY="3.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-5.675mm" pcbY="3.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-5.675mm" pcbY="2.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-5.675mm" pcbY="2.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-5.675mm" pcbY="1.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-5.675mm" pcbY="1.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-5.675mm" pcbY="0.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-5.675mm" pcbY="0.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-5.675mm" pcbY="-0.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.675mm" pcbY="-0.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-5.675mm" pcbY="-1.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-5.675mm" pcbY="-1.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-5.675mm" pcbY="-2.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-5.675mm" pcbY="-2.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.675mm" pcbY="-3.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.675mm" pcbY="-3.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-3.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-2.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-2.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-1.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-1.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-0.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="0.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="0.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="1.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="2.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.25mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.75mm" pcbY="-5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="5.675mm" pcbY="-3.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="5.675mm" pcbY="-3.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="5.675mm" pcbY="-2.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="5.675mm" pcbY="-2.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="5.675mm" pcbY="-1.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="5.675mm" pcbY="-1.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="5.675mm" pcbY="-0.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="5.675mm" pcbY="-0.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="5.675mm" pcbY="0.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="5.675mm" pcbY="0.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="5.675mm" pcbY="1.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="5.675mm" pcbY="1.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="5.675mm" pcbY="2.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="5.675mm" pcbY="2.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="5.675mm" pcbY="3.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="5.675mm" pcbY="3.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="3.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="3.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="2.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="2.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="1.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="1.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="0.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="0.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="-0.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="-0.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin59"]} pcbX="-1.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin60"]} pcbX="-1.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin61"]} pcbX="-2.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin62"]} pcbX="-2.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin63"]} pcbX="-3.25mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin64"]} pcbX="-3.75mm" pcbY="5.675mm" layer="top" cornerRadius="0.0375mm" width="1.55mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -5, "y": 4 }, { "x": -4, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5, "y": -5 }, { "x": -5, "y": 4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4, "y": 5 }, { "x": 5, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": 5 }, { "x": 5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": -5 }, { "x": -5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.075} anchorAlignment="center" text="FT2232HL" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -6.7, "y": 4.15 }, { "x": -6.7, "y": 0 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.7, "y": -4.15 }, { "x": -6.7, "y": 0 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.25, "y": 5.25 }, { "x": -5.25, "y": 4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.25, "y": 4.15 }, { "x": -6.7, "y": 4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.25, "y": -4.15 }, { "x": -6.7, "y": -4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.25, "y": -5.25 }, { "x": -5.25, "y": -4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.15, "y": 6.7 }, { "x": -4.15, "y": 5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.15, "y": 5.25 }, { "x": -5.25, "y": 5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.15, "y": -5.25 }, { "x": -5.25, "y": -5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.15, "y": -6.7 }, { "x": -4.15, "y": -5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": 6.7 }, { "x": -4.15, "y": 6.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": 6.7 }, { "x": 4.15, "y": 6.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": -6.7 }, { "x": -4.15, "y": -6.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0, "y": -6.7 }, { "x": 4.15, "y": -6.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.15, "y": 6.7 }, { "x": 4.15, "y": 5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.15, "y": 5.25 }, { "x": 5.25, "y": 5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.15, "y": -5.25 }, { "x": 5.25, "y": -5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.15, "y": -6.7 }, { "x": 4.15, "y": -5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.25, "y": 5.25 }, { "x": 5.25, "y": 4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.25, "y": 4.15 }, { "x": 6.7, "y": 4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.25, "y": -4.15 }, { "x": 6.7, "y": -4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.25, "y": -5.25 }, { "x": 5.25, "y": -4.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.7, "y": 4.15 }, { "x": 6.7, "y": 0 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.7, "y": -4.15 }, { "x": 6.7, "y": 0 }]} layer="top"/>
      </footprint>);
// H2: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.2} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// R14: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-0.9} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C15: 10p; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.3} pcbY={0} anchorAlignment="center" text="10p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// Q2: BSS123; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.475mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="BSS123" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={0.32}/>

<courtyardoutline outline={[{ "x": -1.92, "y": 1.7 }, { "x": -1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.92, "y": -1.7 }, { "x": 1.92, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": 1.7 }, { "x": -1.92, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.92, "y": -1.7 }, { "x": 1.92, "y": 1.7 }]} layer="top"/>
      </footprint>);
// TP14: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={1.45} anchorAlignment="center" text="TP14" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// C10: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.9} pcbY={0.05} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D4: CUS520,H3F; Diode_SMD:D_SOD-323
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.9, "y": 0.7 }, { "x": 0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.7 }, { "x": -0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.35 }, { "x": -0.3, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": -0.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": 0.2, "y": 0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0.35 }, { "x": 0.2, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0 }, { "x": 0.45, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": -0.35 }, { "x": -0.3, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.7 }, { "x": 0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.7 }, { "x": -0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.1} pcbY={-1.9} anchorAlignment="center" text="CUS520,H3F" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={1.85} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": -1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": 1.6, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": 0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C12: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.05} pcbY={0.975} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R26: 100R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R25: 100R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D16: CUS520,H3F; Diode_SMD:D_SOD-323
export const Footprint_D16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.6mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.6mm" height="0.45mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.9, "y": 0.7 }, { "x": 0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.7 }, { "x": -0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.35 }, { "x": -0.3, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": -0.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": 0.2, "y": 0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0.35 }, { "x": 0.2, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0 }, { "x": 0.45, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": -0.35 }, { "x": -0.3, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.7 }, { "x": 0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.7 }, { "x": -0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.15} anchorAlignment="center" text="CUS520,H3F" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={-2.4} pcbY={-0.15} anchorAlignment="center" text="D16" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": -1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": 1.6, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": 0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
      </footprint>);
// D7: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={3.950545} pcbY={0} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// R22: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1} anchorAlignment="center" text="0R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C14: 10p; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.6} pcbY={0} anchorAlignment="center" text="10p" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U1: LP2985-3.3; Package_TO_SOT_SMD:SOT-23-5
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.25} pcbY={0.9} anchorAlignment="center" text="LP2985-3.3" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// D20: LED; LED_SMD:LED_0603_1608Metric
export const Footprint_D20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="LED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D20" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C28: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.917937} pcbY={0.005564} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D3: LED; LED_SMD:LED_0603_1608Metric
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.75} pcbY={-0.05} anchorAlignment="center" text="LED" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D9: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.94mm" height="0.97mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-4.2} pcbY={-0.05} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// C3: 10n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="10n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C31: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.4} pcbY={0.05} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R9: 100R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0.85} anchorAlignment="center" text="100R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C32: 4.7u; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-2.6} pcbY={0} anchorAlignment="center" text="4.7u" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// D15: CUS520,H3F; Diode_SMD:D_SOD-323
export const Footprint_D15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.9, "y": 0.7 }, { "x": 0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.7 }, { "x": -0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.35 }, { "x": -0.3, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": -0.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": 0.2, "y": 0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0.35 }, { "x": 0.2, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0 }, { "x": 0.45, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": -0.35 }, { "x": -0.3, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.7 }, { "x": 0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.7 }, { "x": -0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.5} pcbY={0} anchorAlignment="center" text="CUS520,H3F" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0.3} pcbY={1.5} anchorAlignment="center" text="D15" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": -1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": 1.6, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": 0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
      </footprint>);
// C30: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.05} pcbY={1.030217} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D1: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={2.1726} pcbY={-1.2248} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// J2: 878325623; 878325623:CONN_87832-5623_MOL
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <hole pcbX="-5mm" pcbY="0mm" diameter="1.0414mm"/>
<hole pcbX="5mm" pcbY="0mm" diameter="1.0414mm"/>
<smtpad portHints={["pin1"]} pcbX="-6.000001mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-6.000001mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-4mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-4mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.000001mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.000001mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="2.000001mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="2.000001mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="4mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="4mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="6.000001mm" pcbY="-2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="6.000001mm" pcbY="2.130001mm" layer="top" width="0.9906mm" height="2.0066mm" shape="rect"/>




















<fabricationnotepath route={[{ "x": -8.3312, "y": 3.1496 }, { "x": -8.3312, "y": -3.1496 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -8.3312, "y": -3.1496 }, { "x": 8.3312, "y": -3.1496 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 8.3312, "y": 3.1496 }, { "x": -8.3312, "y": 3.1496 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 8.3312, "y": -3.1496 }, { "x": 8.3312, "y": 3.1496 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -5.619001, "y": -4.034999 }, { "x": -5.648003, "y": -3.889197 }, { "x": -5.730593, "y": -3.765591 }, { "x": -5.854199, "y": -3.683001 }, { "x": -6.000001, "y": -3.653999 }, { "x": -6.145803, "y": -3.683001 }, { "x": -6.269409, "y": -3.765591 }, { "x": -6.351999, "y": -3.889197 }, { "x": -6.381001, "y": -4.034999 }, { "x": -6.351999, "y": -4.180801 }, { "x": -6.269409, "y": -4.304407 }, { "x": -6.145803, "y": -4.386997 }, { "x": -6.000001, "y": -4.415999 }, { "x": -5.854199, "y": -4.386997 }, { "x": -5.730593, "y": -4.304407 }, { "x": -5.648003, "y": -4.180801 }, { "x": -5.619001, "y": -4.034999 }]} strokeWidth={0.508}/>
<fabricationnotetext pcbX={-5.45} pcbY={-2.1} anchorAlignment="center" text="878325623" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={6.45} pcbY={-1.8} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -8.5852, "y": 3.4036 }, { "x": -8.5852, "y": -3.4036 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.5852, "y": -3.4036 }, { "x": 8.5852, "y": -3.4036 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.5852, "y": 3.4036 }, { "x": -8.5852, "y": 3.4036 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.5852, "y": -3.4036 }, { "x": 8.5852, "y": 3.4036 }]} layer="top"/>
      </footprint>);
// C24: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2} pcbY={0.006005} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// J6: USB_C_Receptacle_USB2.0; Connector_USB:USB_C_Receptacle_GCT_USB4105-xx-A_16P_TopMnt_Horizontal
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <hole pcbX="-2.89mm" pcbY="2.605mm" diameter="0.65mm"/>
<hole pcbX="2.89mm" pcbY="2.605mm" diameter="0.65mm"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="3.105mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="-1.075mm" outerHeight="1.8mm" outerWidth="1mm" holeHeight="1.4mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="3.105mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="-1.075mm" outerHeight="1.8mm" outerWidth="1mm" holeHeight="1.4mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<smtpad portHints={["pin1"]} pcbX="-3.2mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.25mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.4mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.2mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="3.2mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.4mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.75mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.75mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.75mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="3.68mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.4mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-3.2mm" pcbY="3.68mm" layer="top" width="0.6mm" height="1.15mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={-5} anchorAlignment="center" text="USB_C_Receptacle_USB2.0" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={8.94} height={7.35} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0.29} width={10.64} height={8.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D14: PGB1010603MR; PGB1010603MR:DIOC1608X36N
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.97mm" height="0.94mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.83, "y": 0.42 }, { "x": 0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.83, "y": -0.42 }, { "x": -0.83, "y": 0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": 0.42 }, { "x": 0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0.83, "y": -0.42 }, { "x": -0.83, "y": -0.42 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-3.95} pcbY={0.000545} anchorAlignment="center" text="PGB1010603MR" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.485, "y": 0.72 }, { "x": -1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.485, "y": -0.72 }, { "x": 1.485, "y": -0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": 0.72 }, { "x": -1.485, "y": 0.72 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.485, "y": -0.72 }, { "x": 1.485, "y": 0.72 }]} layer="top"/>
      </footprint>);
// FB3: BLM18AG601SN1D; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.4} pcbY={4} anchorAlignment="center" text="BLM18AG601SN1D" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB3" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// H3: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.2} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// D17: CUS520,H3F; Diode_SMD:D_SOD-323
export const Footprint_D17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0mm" layer="top" cornerRadius="0.05625mm" width="0.45mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.9, "y": 0.7 }, { "x": 0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9, "y": -0.7 }, { "x": -0.9, "y": 0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0.35 }, { "x": -0.3, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": -0.5, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": 0 }, { "x": 0.2, "y": 0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0.35 }, { "x": 0.2, "y": -0.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": 0 }, { "x": 0.45, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.2, "y": -0.35 }, { "x": -0.3, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": 0.7 }, { "x": 0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9, "y": -0.7 }, { "x": -0.9, "y": -0.7 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.35} pcbY={-1.1} anchorAlignment="center" text="CUS520,H3F" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="D17" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": -1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 0.95 }, { "x": 1.6, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.6, "y": 0.95 }, { "x": 1.6, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R10: 150R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.000545} pcbY={-0.95} anchorAlignment="center" text="150R" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R4: 15K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.4} pcbY={0} anchorAlignment="center" text="15K" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP6: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={-0.65} pcbY={-0.132423} anchorAlignment="center" text="TP6" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="top"/>
      </footprint>);
// C19: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C20: 100n; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U8: LP2985-2.5; Package_TO_SOT_SMD:SOT-23-5
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.330217} pcbY={2} anchorAlignment="center" text="LP2985-2.5" font="tscircuit2024" fontSize={0.5}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// TP9: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP10: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP10" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP8: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP13: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP13" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP2: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP15: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP15" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// REF**: OSHW-Logo_11.4x12mm_SilkScreen; Symbol:OSHW-Logo_11.4x12mm_SilkScreen
export const Footprint_REF__ = () => (<footprint originalLayer="bottom">
        

















      </footprint>);
// TP16: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP16" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP11: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP11" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
// TP12: TestPoint; TestPoint:TestPoint_Pad_D1.0mm
export const Footprint_TP12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={1.55} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-1.45} anchorAlignment="center" text="TP12" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={1} layer="bottom"/>
      </footprint>);
