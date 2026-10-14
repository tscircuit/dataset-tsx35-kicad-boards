// RP2040 development board
// Source: https://github.com/acornitum/fucked-up-rp2040-devboard
// Commit: d94328619f4fcaef2f2d62aa42c62c789a463d56; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// C10: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// REF**: MountingHole_3.2mm_M3; MountingHole:MountingHole_3.2mm_M3
export const Footprint_REF__ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.2} anchorAlignment="center" text="MountingHole_3.2mm_M3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="REF**" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// R7: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// SW1: SW_Push; Button_Switch_SMD:SW_Push_1P1T_XKB_TS-1187A
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3mm" pcbY="1.875mm" layer="top" width="1mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="3mm" pcbY="1.875mm" layer="top" width="1mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3mm" pcbY="-1.875mm" layer="top" width="1mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3mm" pcbY="-1.875mm" layer="top" width="1mm" height="0.75mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 2.9, "y": -2.1 }, { "x": 2.9, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.9, "y": 2.1 }, { "x": 2.9, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.4, "y": -1.4 }, { "x": 1.4, "y": -2.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.4, "y": -1.25 }, { "x": 2.4, "y": -1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.4, "y": 1.4 }, { "x": 2.4, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -2.4 }, { "x": 1.25, "y": -2.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 2.4 }, { "x": 2.4, "y": 1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 2.4 }, { "x": 1.4, "y": 2.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -2.4 }, { "x": -1.4, "y": -2.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -2.4 }, { "x": -2.4, "y": -1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": 2.4 }, { "x": -1.25, "y": 2.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.4, "y": -1.4 }, { "x": -2.4, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.4, "y": 1.25 }, { "x": -2.4, "y": 1.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.4, "y": 1.4 }, { "x": -1.4, "y": 2.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.9, "y": -2.1 }, { "x": -2.9, "y": -1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.9, "y": 2.1 }, { "x": -2.9, "y": 1.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.7, "y": -2.1 }, { "x": 2.2, "y": -1.6 }, { "x": 3.25, "y": -1.6 }, { "x": 3.25, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.7, "y": 2.1 }, { "x": 2.2, "y": 1.6 }, { "x": 3.25, "y": 1.6 }, { "x": 3.25, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.7, "y": -2.1 }, { "x": -2.2, "y": -1.6 }, { "x": -3.25, "y": -1.6 }, { "x": -3.25, "y": -2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.7, "y": 2.1 }, { "x": -2.2, "y": 1.6 }, { "x": -3.25, "y": 1.6 }, { "x": -3.25, "y": 2.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.85, "y": 1.85 }, { "x": 1.85, "y": 0.85 }, { "x": 1.85, "y": -0.85 }, { "x": 0.85, "y": -1.85 }, { "x": -0.85, "y": -1.85 }, { "x": -1.85, "y": -0.85 }, { "x": -1.85, "y": 0.85 }, { "x": -0.85, "y": 1.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": 2.55 }, { "x": 1.25, "y": 2.55 }, { "x": 1.25, "y": 1.975 }, { "x": 1.575, "y": 1.975 }, { "x": 1.975, "y": 1.575 }, { "x": 1.975, "y": 1.25 }, { "x": 2.55, "y": 1.25 }, { "x": 2.55, "y": -1.25 }, { "x": 1.975, "y": -1.25 }, { "x": 1.975, "y": -1.575 }, { "x": 1.575, "y": -1.975 }, { "x": 1.25, "y": -1.975 }, { "x": 1.25, "y": -2.55 }, { "x": -1.25, "y": -2.55 }, { "x": -1.25, "y": -1.975 }, { "x": -1.575, "y": -1.975 }, { "x": -1.975, "y": -1.575 }, { "x": -1.975, "y": -1.25 }, { "x": -2.55, "y": -1.25 }, { "x": -2.55, "y": 1.25 }, { "x": -1.975, "y": 1.25 }, { "x": -1.975, "y": 1.575 }, { "x": -1.575, "y": 1.975 }, { "x": -1.25, "y": 1.975 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.75} anchorAlignment="center" text="SW_Push" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={3.75} anchorAlignment="center" text="SW1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 3.75, "y": -2.8 }, { "x": -3.75, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.75, "y": 2.8 }, { "x": 3.75, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.75, "y": -2.8 }, { "x": -3.75, "y": 2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.75, "y": 2.8 }, { "x": 3.75, "y": 2.8 }]} layer="top"/>
      </footprint>);
// C4: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R6: 330; Resistor_SMD:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C2: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U1: RP2040; Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP3.2x3.2mm
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.4375mm" pcbY="2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.4375mm" pcbY="2.199999mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.4375mm" pcbY="1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.4375mm" pcbY="1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.4375mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.4375mm" pcbY="0.600001mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.4375mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.4375mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.4375mm" pcbY="-0.600001mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.4375mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.4375mm" pcbY="-1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.4375mm" pcbY="-1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.4375mm" pcbY="-2.199999mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.4375mm" pcbY="-2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.199999mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-1.8mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-1.4mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-1mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.600001mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-0.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="0.2mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="0.600001mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="1mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.4mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.8mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="2.199999mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="2.6mm" pcbY="-3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="3.4375mm" pcbY="-2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="3.4375mm" pcbY="-2.199999mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.4375mm" pcbY="-1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.4375mm" pcbY="-1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.4375mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="3.4375mm" pcbY="-0.600001mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="3.4375mm" pcbY="-0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="3.4375mm" pcbY="0.2mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="3.4375mm" pcbY="0.600001mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="3.4375mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="3.4375mm" pcbY="1.4mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="3.4375mm" pcbY="1.8mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="3.4375mm" pcbY="2.199999mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="3.4375mm" pcbY="2.6mm" layer="top" cornerRadius="0.025mm" width="0.875mm" height="0.2mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="2.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="2.199999mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="1.8mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="1.4mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="1mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="0.600001mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="-0.2mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-0.600001mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="-1mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="-1.4mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="-1.8mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="-2.199999mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="-2.6mm" pcbY="3.4375mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.875mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.2mm" height="3.2mm" ccwRotation={360} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 3.5, "y": -3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.83} anchorAlignment="center" text="RP2040" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 4.13, "y": -4.13 }, { "x": 4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": -4.13 }, { "x": 4.13, "y": -4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.13, "y": 4.13 }, { "x": -4.13, "y": 4.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.13, "y": 4.13 }, { "x": -4.13, "y": -4.13 }]} layer="top"/>
      </footprint>);
// J6: Conn_01x20; Connector_PinHeader_2.54mm:PinHeader_1x20_P2.54mm_Vertical
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-15.24mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin8"]} pcbX="0mm" pcbY="-17.78mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-20.32mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin10"]} pcbX="0mm" pcbY="-22.86mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-25.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin12"]} pcbX="0mm" pcbY="-27.94mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-30.48mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin14"]} pcbX="0mm" pcbY="-33.02mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-35.56mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin16"]} pcbX="0mm" pcbY="-38.1mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="0mm" pcbY="-40.64mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin18"]} pcbX="0mm" pcbY="-43.18mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin19"]} pcbX="0mm" pcbY="-45.72mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin20"]} pcbX="0mm" pcbY="-48.26mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>


<fabricationnotepath route={[{ "x": -1.27, "y": -49.53 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -49.53 }, { "x": -1.27, "y": -49.53 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -49.53 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-50.59} anchorAlignment="center" text="Conn_01x20" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-24.13} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.8, "y": -50.05 }, { "x": 1.8, "y": -50.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -50.05 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -50.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// C5: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C1: 1u; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1u" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// R3: 1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R5: 1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C15: 15p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="15p" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// D7: S-LMBR340FT1G; Diode_SMD:D_SOD-123F
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.1mm" height="1.1mm" shape="rect"/>
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
<fabricationnotetext pcbX={0} pcbY={-2.1} anchorAlignment="center" text="S-LMBR340FT1G" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.127} pcbY={1.905} anchorAlignment="center" text="D7" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.2, "y": 1.15 }, { "x": 2.2, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": 1.15 }, { "x": 2.2, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.2, "y": -1.15 }, { "x": -2.2, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C13: 1u; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1u" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// J1: USB_C_Receptacle_USB2.0_16P; Connector_USB:USB_C_Receptacle_HCTL_HC-TYPE-C-16P-01A
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <hole pcbX="-2.89mm" pcbY="2.605mm" diameter="0.65mm"/>
<hole pcbX="2.89mm" pcbY="2.605mm" diameter="0.65mm"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="3.105mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="-1.075mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="3.105mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="-1.075mm" outerHeight="1.6mm" outerWidth="1mm" holeHeight="1.2mm" holeWidth="0.6mm" shape="pill" pcbRotation="0deg"/>
<smtpad portHints={["pin1"]} pcbX="-3.2mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.25mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.4mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.2mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="3.2mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.4mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.75mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.75mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.75mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="3.745mm" layer="top" cornerRadius="0.0375mm" width="1.3mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.4mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-3.2mm" pcbY="3.745mm" layer="top" cornerRadius="0.075mm" width="1.3mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 4.47, "y": 3.675 }, { "x": 4.47, "y": -3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": 3.675 }, { "x": 4.47, "y": 3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": 3.675 }, { "x": -4.47, "y": -3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.2, "y": 2.675 }, { "x": -2.2, "y": 3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.2, "y": 2.675 }, { "x": -4.2, "y": 3.675 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.47, "y": -3.675 }, { "x": 4.47, "y": -3.675 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-5} anchorAlignment="center" text="USB_C_Receptacle_USB2.0_16P" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.435} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 5.32, "y": 4.9 }, { "x": 5.32, "y": -4.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": 4.9 }, { "x": 5.32, "y": 4.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": 4.9 }, { "x": -5.32, "y": -4.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.32, "y": -4.18 }, { "x": 5.32, "y": -4.18 }]} layer="top"/>
      </footprint>);
// C9: 1u; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1u" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R1: 27.4; Resistor_SMD:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="27.4" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R4: DNF; Resistor_SMD:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="DNF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C11: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// U3: W25Q64JVZPIQ; Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.6625mm" pcbY="1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.6625mm" pcbY="0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.6625mm" pcbY="-0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.6625mm" pcbY="-1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.6625mm" pcbY="-1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="2.6625mm" pcbY="-0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.6625mm" pcbY="0.635mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.6625mm" pcbY="1.905mm" layer="top" cornerRadius="0.0625mm" width="0.775mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.4mm" height="4mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -3, "y": 1.5 }, { "x": -2, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": -2.5 }, { "x": -3, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": 2.5 }, { "x": 3, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": 2.5 }, { "x": 3, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": -2.5 }, { "x": -3, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.45} anchorAlignment="center" text="W25Q64JVZPIQ" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.3, "y": 2.75 }, { "x": -3.3, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.3, "y": -2.75 }, { "x": 3.3, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3, "y": 2.75 }, { "x": -3.3, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.3, "y": -2.75 }, { "x": 3.3, "y": 2.75 }]} layer="top"/>
      </footprint>);
// J2: Conn_01x20; Connector_PinHeader_2.54mm:PinHeader_1x20_P2.54mm_Vertical
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.7mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin7"]} pcbX="0mm" pcbY="-15.24mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin8"]} pcbX="0mm" pcbY="-17.78mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin9"]} pcbX="0mm" pcbY="-20.32mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin10"]} pcbX="0mm" pcbY="-22.86mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-25.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin12"]} pcbX="0mm" pcbY="-27.94mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin13"]} pcbX="0mm" pcbY="-30.48mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin14"]} pcbX="0mm" pcbY="-33.02mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin15"]} pcbX="0mm" pcbY="-35.56mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin16"]} pcbX="0mm" pcbY="-38.1mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="0mm" pcbY="-40.64mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin18"]} pcbX="0mm" pcbY="-43.18mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin19"]} pcbX="0mm" pcbY="-45.72mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin20"]} pcbX="0mm" pcbY="-48.26mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>


<fabricationnotepath route={[{ "x": -1.27, "y": -49.53 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -49.53 }, { "x": -1.27, "y": -49.53 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -49.53 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-50.59} anchorAlignment="center" text="Conn_01x20" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-24.13} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.8, "y": -50.05 }, { "x": 1.8, "y": -50.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -50.05 }, { "x": 1.8, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 1.8 }, { "x": -1.8, "y": -50.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 1.8 }, { "x": -1.8, "y": 1.8 }]} layer="top"/>
      </footprint>);
// C8: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// D5: LED; LED_SMD:LED_0805_2012Metric
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.121875mm" width="1.4mm" height="0.975mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": -0.6 }, { "x": 1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.6 }, { "x": 1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.3 }, { "x": -1, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": 0.6 }, { "x": -1, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.6 }, { "x": -0.7, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.65} anchorAlignment="center" text="LED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.68, "y": -0.95 }, { "x": -1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": -0.95 }, { "x": -1.68, "y": -0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.68, "y": 0.95 }, { "x": 1.68, "y": 0.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.68, "y": 0.95 }, { "x": 1.68, "y": -0.95 }]} layer="top"/>
      </footprint>);
// R2: 27.4; Resistor_SMD:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.509999mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="27.4" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// Y1: Crystal_GND23; Crystal:Crystal_SMD_Abracon_ABM8G-4Pin_3.2x2.5mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="-0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1mm" pcbY="0.85mm" layer="top" width="1.4mm" height="1.2mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.05 }, { "x": -1.4, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.25 }, { "x": -0.600001, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.05 }, { "x": -1.6, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": 1.25 }, { "x": 1.4, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.4, "y": -1.25 }, { "x": -1.6, "y": -1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": 1.25 }, { "x": 1.6, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.4, "y": -1.25 }, { "x": -1.4, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.05 }, { "x": 1.6, "y": -1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.05 }, { "x": 1.4, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.450001} anchorAlignment="center" text="Crystal_GND23" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Y1" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -2.1, "y": 1.7 }, { "x": -2.1, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.1, "y": -1.7 }, { "x": 2.1, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1, "y": 1.7 }, { "x": -2.1, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.1, "y": -1.7 }, { "x": 2.1, "y": 1.7 }]} layer="top"/>
      </footprint>);
// U2: XC6206PxxxMR; Package_TO_SOT_SMD:SOT-23-3
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="XC6206PxxxMR" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
      </footprint>);
// C14: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C12: 1u; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1u" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R8: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C3: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={360} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C6: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C7: 100n; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C17: 10u; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// C16: 15p; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="15p" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
      </footprint>);
// REF**: MountingHole_3.2mm_M3; MountingHole:MountingHole_3.2mm_M3
export const Footprint_REF___ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.2} anchorAlignment="center" text="MountingHole_3.2mm_M3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="REF**" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// MX2: MX-NoLED; Button_Switch_Keyboard:SW_Cherry_MX_1.00u_Plate
export const Footprint_MX2 = () => (<footprint originalLayer="bottom">
        <hole pcbX="-2.54mm" pcbY="5.08mm" diameter="4mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.2mm" holeDiameter="1.5mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-6.35mm" pcbY="2.54mm" outerDiameter="2.2mm" holeDiameter="1.5mm" shape="circle"/>




<fabricationnotepath route={[{ "x": 3.81, "y": -1.27 }, { "x": -8.89, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 3.81, "y": 11.43 }, { "x": 3.81, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -8.89, "y": -1.27 }, { "x": -8.89, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -8.89, "y": 11.43 }, { "x": 3.81, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.54} pcbY={12.954} anchorAlignment="center" text="MX-NoLED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-2.54} pcbY={-2.794} anchorAlignment="center" text="MX2" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": 4.06, "y": -1.52 }, { "x": -9.14, "y": -1.52 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 4.06, "y": 11.68 }, { "x": 4.06, "y": -1.52 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.14, "y": -1.52 }, { "x": -9.14, "y": 11.68 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.14, "y": 11.68 }, { "x": 4.06, "y": 11.68 }]} layer="bottom"/>
      </footprint>);
// MX3: MX-NoLED; Button_Switch_Keyboard:SW_Cherry_MX_1.00u_Plate
export const Footprint_MX3 = () => (<footprint originalLayer="bottom">
        <hole pcbX="-2.54mm" pcbY="5.08mm" diameter="4mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.2mm" holeDiameter="1.5mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-6.35mm" pcbY="2.54mm" outerDiameter="2.2mm" holeDiameter="1.5mm" shape="circle"/>




<fabricationnotepath route={[{ "x": 3.81, "y": -1.27 }, { "x": -8.89, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 3.81, "y": 11.43 }, { "x": 3.81, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -8.89, "y": -1.27 }, { "x": -8.89, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -8.89, "y": 11.43 }, { "x": 3.81, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.54} pcbY={12.954} anchorAlignment="center" text="MX-NoLED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-2.54} pcbY={-2.794} anchorAlignment="center" text="MX3" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": 4.06, "y": -1.52 }, { "x": -9.14, "y": -1.52 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 4.06, "y": 11.68 }, { "x": 4.06, "y": -1.52 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.14, "y": -1.52 }, { "x": -9.14, "y": 11.68 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.14, "y": 11.68 }, { "x": 4.06, "y": 11.68 }]} layer="bottom"/>
      </footprint>);
// MX1: MX-NoLED; Button_Switch_Keyboard:SW_Cherry_MX_1.00u_Plate
export const Footprint_MX1 = () => (<footprint originalLayer="bottom">
        <hole pcbX="-2.54mm" pcbY="5.08mm" diameter="4mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.2mm" holeDiameter="1.5mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-6.35mm" pcbY="2.54mm" outerDiameter="2.2mm" holeDiameter="1.5mm" shape="circle"/>




<fabricationnotepath route={[{ "x": 3.81, "y": -1.27 }, { "x": -8.89, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 3.81, "y": 11.43 }, { "x": 3.81, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -8.89, "y": -1.27 }, { "x": -8.89, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -8.89, "y": 11.43 }, { "x": 3.81, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.54} pcbY={12.954} anchorAlignment="center" text="MX-NoLED" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-2.54} pcbY={-2.794} anchorAlignment="center" text="MX1" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": 4.06, "y": -1.52 }, { "x": -9.14, "y": -1.52 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 4.06, "y": 11.68 }, { "x": 4.06, "y": -1.52 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.14, "y": -1.52 }, { "x": -9.14, "y": 11.68 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.14, "y": 11.68 }, { "x": 4.06, "y": 11.68 }]} layer="bottom"/>
      </footprint>);
