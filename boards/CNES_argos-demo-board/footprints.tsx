// Argos demo board
// Source: https://github.com/CNES/argos-demo-board
// Commit: 1eccb3f20cb9004c046dba82b72bf85c500efcaa; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// H4: 3610213126S; Project_library:H_Wurth_WE-SHC-SMT-FRAME_36103255S
export const Footprint_H4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-12.75mm" pcbY="11.6mm" layer="top" width="1mm" height="3.3mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-12.75mm" pcbY="6.25mm" layer="top" width="1mm" height="2.6mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-12.75mm" pcbY="0mm" layer="top" width="1mm" height="5.1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-12.75mm" pcbY="-6.25mm" layer="top" width="1mm" height="2.6mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-12.75mm" pcbY="-11.6mm" layer="top" width="1mm" height="3.3mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-11.6mm" pcbY="12.75mm" layer="top" width="3.3mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-11.6mm" pcbY="-12.75mm" layer="top" width="3.3mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-6.25mm" pcbY="12.75mm" layer="top" width="2.6mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-6.25mm" pcbY="-12.75mm" layer="top" width="2.6mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="12.75mm" layer="top" width="5.1mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="-12.75mm" layer="top" width="5.1mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="6.25mm" pcbY="12.75mm" layer="top" width="2.6mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="6.25mm" pcbY="-12.75mm" layer="top" width="2.6mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="11.6mm" pcbY="12.75mm" layer="top" width="3.3mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="11.6mm" pcbY="-12.75mm" layer="top" width="3.3mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="12.75mm" pcbY="11.6mm" layer="top" width="1mm" height="3.3mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="12.75mm" pcbY="6.25mm" layer="top" width="1mm" height="2.6mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="12.75mm" pcbY="0mm" layer="top" width="1mm" height="5.1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="12.75mm" pcbY="-6.25mm" layer="top" width="1mm" height="2.6mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="12.75mm" pcbY="-11.6mm" layer="top" width="1mm" height="3.3mm" shape="rect"/>
















<fabricationnoterect pcbX={0} pcbY={0} width={25.4} height={25.4} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={27} height={27} layer="top" pcbRotation="0deg"/>
      </footprint>);
// F2: 1206L035/16YR; Fuse:Fuse_1206_3216Metric
export const Footprint_F2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.25mm" height="1.75mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.25mm" height="1.75mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.28, "y": 1.13 }, { "x": 2.28, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.28, "y": -1.13 }, { "x": -2.28, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.28, "y": 1.13 }, { "x": 2.28, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.28, "y": -1.13 }, { "x": -2.28, "y": -1.13 }]} layer="top"/>
      </footprint>);
// R9: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R20: 36.5K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R8: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C4: 3.6pF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R29: 10R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D3: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R24: 5.1K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J2: 60312002114503; Connector_Coaxial:SMA_Wurth_60312002114503_Vertical
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.05mm" holeDiameter="1.5mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-2.54mm" pcbY="2.54mm" outerDiameter="2.25mm" holeDiameter="1.7mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-2.54mm" pcbY="-2.54mm" outerDiameter="2.25mm" holeDiameter="1.7mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="2.54mm" outerDiameter="2.25mm" holeDiameter="1.7mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="2.25mm" holeDiameter="1.7mm" shape="circle"/>




<fabricationnotepath route={[{ "x": -3.5, "y": 3.5 }, { "x": -3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": 3.5 }, { "x": 3.5, "y": 3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.5, "y": 3.5 }, { "x": 3.5, "y": -3.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.175, "y": 0 }, { "x": 2.933318, "y": 1.21502 }, { "x": 2.245064, "y": 2.245064 }, { "x": 1.21502, "y": 2.933318 }, { "x": 0, "y": 3.175 }, { "x": -1.21502, "y": 2.933318 }, { "x": -2.245064, "y": 2.245064 }, { "x": -2.933318, "y": 1.21502 }, { "x": -3.175, "y": 0 }, { "x": -2.933318, "y": -1.21502 }, { "x": -2.245064, "y": -2.245064 }, { "x": -1.21502, "y": -2.933318 }, { "x": 0, "y": -3.175 }, { "x": 1.21502, "y": -2.933318 }, { "x": 2.245064, "y": -2.245064 }, { "x": 2.933318, "y": -1.21502 }, { "x": 3.175, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -4.17, "y": 4.17 }, { "x": -4.17, "y": -4.17 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.17, "y": 4.17 }, { "x": 4.17, "y": 4.17 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.17, "y": -4.17 }, { "x": -4.17, "y": -4.17 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.17, "y": -4.17 }, { "x": 4.17, "y": 4.17 }]} layer="top"/>
      </footprint>);
// H2: M3; MountingHole:MountingHole_3.2mm_M3_DIN965_Pad
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// R26: 27R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// SW1: PTS647; Button_Switch_SMD:SW_SPST_PTS647_Sx38
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.625mm" pcbY="1.6mm" layer="top" cornerRadius="0.125mm" width="1.55mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="2.625mm" pcbY="1.6mm" layer="top" cornerRadius="0.125mm" width="1.55mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.625mm" pcbY="-1.6mm" layer="top" cornerRadius="0.125mm" width="1.55mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.625mm" pcbY="-1.6mm" layer="top" cornerRadius="0.125mm" width="1.55mm" height="1mm" shape="rect"/>








<fabricationnotepath route={[{ "x": 1.15, "y": 0 }, { "x": 1.062461, "y": 0.440086 }, { "x": 0.813173, "y": 0.813173 }, { "x": 0.440086, "y": 1.062461 }, { "x": 0, "y": 1.15 }, { "x": -0.440086, "y": 1.062461 }, { "x": -0.813173, "y": 0.813173 }, { "x": -1.062461, "y": 0.440086 }, { "x": -1.15, "y": 0 }, { "x": -1.062461, "y": -0.440086 }, { "x": -0.813173, "y": -0.813173 }, { "x": -0.440086, "y": -1.062461 }, { "x": 0, "y": -1.15 }, { "x": 0.440086, "y": -1.062461 }, { "x": 0.813173, "y": -0.813173 }, { "x": 1.062461, "y": -0.440086 }, { "x": 1.15, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={4.5} height={4.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={7.3} height={5.4} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R2: 150K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C6: NC; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// H5: M3; MountingHole:MountingHole_3.2mm_M3_DIN965_Pad
export const Footprint_H5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H5" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// C1: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// J3: B4B-XH-A; Connector_JST:JST_XH_B4B-XH-A_1x04_P2.50mm_Vertical
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.95mm" rectPadWidth="1.7mm" rectPadHeight="1.95mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin4"]} pcbX="7.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="360deg"/>
























<fabricationnotepath route={[{ "x": -2.45, "y": -3.4 }, { "x": 9.95, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.95, "y": -3.4 }, { "x": 9.95, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.35 }, { "x": 0.625, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": 2.35 }, { "x": -2.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.625, "y": 2.35 }, { "x": 0, "y": 1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.95, "y": 2.35 }, { "x": -2.45, "y": 2.35 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.95, "y": -3.9 }, { "x": 10.45, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 10.45, "y": -3.9 }, { "x": 10.45, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 2.85 }, { "x": -2.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 10.45, "y": 2.85 }, { "x": -2.95, "y": 2.85 }]} layer="top"/>
      </footprint>);
// C14: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// L4: 744232090; Inductor_SMD:L_CommonMode_Wurth_WE-CNSW-1206
export const Footprint_L4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35mm" pcbY="0.5mm" layer="top" cornerRadius="0.06mm" width="0.6mm" height="1.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.35mm" pcbY="0.5mm" layer="top" cornerRadius="0.06mm" width="0.6mm" height="1.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.35mm" pcbY="-0.5mm" layer="top" cornerRadius="0.06mm" width="0.6mm" height="1.1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.35mm" pcbY="-0.5mm" layer="top" cornerRadius="0.06mm" width="0.6mm" height="1.1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.1, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.3 }, { "x": -1.1, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.3 }]} strokeWidth={0.1}/>

<courtyardrect pcbX={0} pcbY={0} width={4.3} height={2.1} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// Q2: BSN20; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.93, "y": -0.55 }, { "x": 0.9, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.93, "y": 0.55 }, { "x": 1.93, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -1.7 }, { "x": -0.9, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.55 }, { "x": 0.9, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.55 }, { "x": 1.93, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 1.7 }, { "x": 0.9, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.7 }, { "x": -0.9, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.5 }, { "x": -1.93, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.5 }, { "x": -0.9, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.7 }, { "x": 0.9, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.93, "y": -1.5 }, { "x": -1.93, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.93, "y": 1.5 }, { "x": -0.9, "y": 1.5 }]} layer="top"/>
      </footprint>);
// D5: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// Q1: BSN20; Package_TO_SOT_SMD:SOT-23
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="1.475mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.65, "y": -1.45 }, { "x": -0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.45 }, { "x": 0.65, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.325, "y": 1.45 }, { "x": 0.65, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -1.45 }, { "x": -0.65, "y": 1.125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 1.125 }, { "x": -0.325, "y": 1.45 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.93, "y": -0.55 }, { "x": 0.9, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.93, "y": 0.55 }, { "x": 1.93, "y": -0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -1.7 }, { "x": -0.9, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.55 }, { "x": 0.9, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.55 }, { "x": 1.93, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 1.7 }, { "x": 0.9, "y": 0.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.7 }, { "x": -0.9, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.5 }, { "x": -1.93, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.5 }, { "x": -0.9, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.7 }, { "x": 0.9, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.93, "y": -1.5 }, { "x": -1.93, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.93, "y": 1.5 }, { "x": -0.9, "y": 1.5 }]} layer="top"/>
      </footprint>);
// C8: 22uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C7: 10uF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R16: 470R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C16: 4.7uF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C10: 22uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// R32: 270R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// J6: B6B-XH-A; Connector_JST:JST_XH_B6B-XH-A_1x06_P2.50mm_Vertical
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.95mm" rectPadWidth="1.7mm" rectPadHeight="1.95mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="7.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin5"]} pcbX="10mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin6"]} pcbX="12.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
























<fabricationnotepath route={[{ "x": 14.95, "y": 2.35 }, { "x": -2.45, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.625, "y": 2.35 }, { "x": 0, "y": 1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": 2.35 }, { "x": -2.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.35 }, { "x": 0.625, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 14.95, "y": -3.4 }, { "x": 14.95, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": -3.4 }, { "x": 14.95, "y": -3.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 15.45, "y": 2.85 }, { "x": -2.95, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 2.85 }, { "x": -2.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 15.45, "y": -3.9 }, { "x": 15.45, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -3.9 }, { "x": 15.45, "y": -3.9 }]} layer="top"/>
      </footprint>);
// FB2: BLM18KG601SN1D; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R3: 150k; Resistor_SMD:R_0603_1608Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J4: JTAG 10-PINS; Project_library:SAMTEC_FTSH-105-XX-X-DV
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.54mm" pcbY="-2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.54mm" pcbY="2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.27mm" pcbY="-2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.27mm" pcbY="2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0mm" pcbY="2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.27mm" pcbY="-2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.27mm" pcbY="2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="2.54mm" pcbY="-2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.54mm" pcbY="2.035mm" layer="top" width="0.74mm" height="2.79mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 3.175, "y": -1.715 }, { "x": 3.175, "y": 1.715 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.175, "y": 1.715 }, { "x": -3.175, "y": 1.715 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.175, "y": -1.715 }, { "x": 3.175, "y": -1.715 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.175, "y": -1.715 }, { "x": -3.175, "y": 1.715 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.89, "y": -2.035 }, { "x": -3.882388, "y": -2.073268 }, { "x": -3.860711, "y": -2.105711 }, { "x": -3.828268, "y": -2.127388 }, { "x": -3.79, "y": -2.135 }, { "x": -3.751732, "y": -2.127388 }, { "x": -3.719289, "y": -2.105711 }, { "x": -3.697612, "y": -2.073268 }, { "x": -3.69, "y": -2.035 }, { "x": -3.697612, "y": -1.996732 }, { "x": -3.719289, "y": -1.964289 }, { "x": -3.751732, "y": -1.942612 }, { "x": -3.79, "y": -1.935 }, { "x": -3.828268, "y": -1.942612 }, { "x": -3.860711, "y": -1.964289 }, { "x": -3.882388, "y": -1.996732 }, { "x": -3.89, "y": -2.035 }]} strokeWidth={0.2}/>

<courtyardoutline outline={[{ "x": 3.425, "y": -3.68 }, { "x": -3.425, "y": -3.68 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.425, "y": 3.68 }, { "x": 3.425, "y": -3.68 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.425, "y": -3.68 }, { "x": -3.425, "y": 3.68 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.425, "y": 3.68 }, { "x": 3.425, "y": 3.68 }]} layer="top"/>
      </footprint>);
// L3: 2.2uH; Inductor_SMD:L_1008_2520Metric
export const Footprint_L3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.075mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.2mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.075mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.2mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.25, "y": 1 }, { "x": 1.25, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": 1 }, { "x": 1.25, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1 }, { "x": -1.25, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1 }, { "x": -1.25, "y": 1 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.95, "y": 1.35 }, { "x": 1.95, "y": -1.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": 1.35 }, { "x": 1.95, "y": 1.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.95, "y": -1.35 }, { "x": -1.95, "y": -1.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": -1.35 }, { "x": -1.95, "y": 1.35 }]} layer="top"/>
      </footprint>);
// C13: 47pF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R25: NC; Resistor_SMD:R_0603_1608Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C3: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R5: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R7: 10K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R4: 100k; Resistor_SMD:R_0603_1608Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R23: 5.1K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C9: 10uF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R6: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R18: 270R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D2: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J8: USB4085-GF-A; Project_library:CONN16_USB4085-GF-A_GCT
export const Footprint_J8 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0.850001mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="1.699999mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.55mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="3.400001mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="4.250002mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="5.1mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="5.950001mm" pcbY="0mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="5.950001mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="5.1mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="4.250002mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="3.400001mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="2.55mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="1.699999mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="0.850001mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="0mm" pcbY="-1.35mm" outerDiameter="0.6604mm" holeDiameter="0.4064mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="-1.35mm" pcbY="-0.980001mm" outerHeight="1.1176mm" outerWidth="2.6162mm" holeHeight="0.6096mm" holeWidth="2.1082mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin17"]} pcbX="-1.349985mm" pcbY="-4.365mm" outerHeight="1.1176mm" outerWidth="1.905mm" holeHeight="0.6096mm" holeWidth="1.397mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin17"]} pcbX="7.299985mm" pcbY="-0.98mm" outerHeight="1.1176mm" outerWidth="2.6162mm" holeHeight="0.6096mm" holeWidth="2.1082mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin17"]} pcbX="7.299985mm" pcbY="-4.365mm" outerHeight="1.1176mm" outerWidth="1.905mm" holeHeight="0.6096mm" holeWidth="1.397mm" shape="pill" pcbRotation="90deg"/>










<fabricationnotepath route={[{ "x": -1.4954, "y": 0.86 }, { "x": -1.4954, "y": -8.614199 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4954, "y": -8.614199 }, { "x": 7.4454, "y": -8.614199 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 7.4454, "y": 0.86 }, { "x": -1.4954, "y": 0.86 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 7.4454, "y": -8.614199 }, { "x": 7.4454, "y": 0.86 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.381, "y": 1.905 }, { "x": 0.351998, "y": 2.050802 }, { "x": 0.269408, "y": 2.174408 }, { "x": 0.145802, "y": 2.256998 }, { "x": 0, "y": 2.286 }, { "x": -0.145802, "y": 2.256998 }, { "x": -0.269408, "y": 2.174408 }, { "x": -0.351998, "y": 2.050802 }, { "x": -0.381, "y": 1.905 }, { "x": -0.351998, "y": 1.759198 }, { "x": -0.269408, "y": 1.635592 }, { "x": -0.145802, "y": 1.553002 }, { "x": 0, "y": 1.524 }, { "x": 0.145802, "y": 1.553002 }, { "x": 0.269408, "y": 1.635592 }, { "x": 0.351998, "y": 1.759198 }, { "x": 0.381, "y": 1.905 }]} strokeWidth={0.508}/>

<courtyardoutline outline={[{ "x": -2.037312, "y": -3.193419 }, { "x": -2.037312, "y": -5.536582 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.037312, "y": -5.536582 }, { "x": -1.66973, "y": -5.536581 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.008582, "y": 0.561679 }, { "x": -2.008582, "y": -2.521681 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.008582, "y": -2.521681 }, { "x": -1.66973, "y": -2.521681 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.66973, "y": -2.521681 }, { "x": -1.66973, "y": -3.193419 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.66973, "y": -3.193419 }, { "x": -2.037312, "y": -3.193419 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.66973, "y": -5.536581 }, { "x": -1.66973, "y": -8.798929 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.66973, "y": -8.798929 }, { "x": 7.619729, "y": -8.798931 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.669729, "y": 1.04473 }, { "x": -1.669729, "y": 0.561679 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.669729, "y": 0.561679 }, { "x": -2.008582, "y": 0.561679 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.619729, "y": -5.536581 }, { "x": 7.987313, "y": -5.536581 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.619729, "y": -8.798931 }, { "x": 7.619729, "y": -5.536581 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.61973, "y": 0.56168 }, { "x": 7.619731, "y": 1.04473 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.61973, "y": -2.52168 }, { "x": 7.958567, "y": -2.52168 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.61973, "y": -3.193419 }, { "x": 7.61973, "y": -2.52168 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.619731, "y": 1.04473 }, { "x": -1.669729, "y": 1.04473 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.958567, "y": 0.56168 }, { "x": 7.61973, "y": 0.56168 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.958567, "y": -2.52168 }, { "x": 7.958567, "y": 0.56168 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.987313, "y": -3.193419 }, { "x": 7.61973, "y": -3.193419 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.987313, "y": -5.536581 }, { "x": 7.987313, "y": -3.193419 }]} layer="top"/>
      </footprint>);
// C5: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J5: B4B-XH-A; Connector_JST:JST_XH_B4B-XH-A_1x04_P2.50mm_Vertical
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.95mm" rectPadWidth="1.7mm" rectPadHeight="1.95mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin3"]} pcbX="5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin4"]} pcbX="7.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="0deg"/>
























<fabricationnotepath route={[{ "x": 9.95, "y": 2.35 }, { "x": -2.45, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.625, "y": 2.35 }, { "x": 0, "y": 1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": 2.35 }, { "x": -2.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.35 }, { "x": 0.625, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.95, "y": -3.4 }, { "x": 9.95, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": -3.4 }, { "x": 9.95, "y": -3.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 10.45, "y": 2.85 }, { "x": -2.95, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 2.85 }, { "x": -2.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 10.45, "y": -3.9 }, { "x": 10.45, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -3.9 }, { "x": 10.45, "y": -3.9 }]} layer="top"/>
      </footprint>);
// R1: 1.2M; Resistor_SMD:R_0603_1608Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U6: FT231XQ; Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.9375mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.9375mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.9375mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.9375mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.9375mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-1mm" pcbY="-1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.5mm" pcbY="-1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="-1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0.5mm" pcbY="-1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="1mm" pcbY="-1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="1.9375mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="1.9375mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="1.9375mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="1.9375mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="1.9375mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="1mm" pcbY="1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="0.5mm" pcbY="1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="0mm" pcbY="1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-0.5mm" pcbY="1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-1mm" pcbY="1.9375mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.825mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" layer="top" width="2.5mm" height="2.5mm" shape="rect"/>









<fabricationnotepath route={[{ "x": -2, "y": 1 }, { "x": -2, "y": -2 }, { "x": 2, "y": -2 }, { "x": 2, "y": 2 }, { "x": -1, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -2.6, "y": 1.38 }, { "x": -2.25, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.6, "y": -1.38 }, { "x": -2.6, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": 2.25 }, { "x": -1.38, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": 1.38 }, { "x": -2.25, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": -1.38 }, { "x": -2.6, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.25, "y": -2.25 }, { "x": -2.25, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.38, "y": 2.6 }, { "x": 1.38, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.38, "y": 2.25 }, { "x": -1.38, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.38, "y": -2.25 }, { "x": -2.25, "y": -2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.38, "y": -2.6 }, { "x": -1.38, "y": -2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.38, "y": 2.6 }, { "x": 1.38, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.38, "y": 2.25 }, { "x": 2.25, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.38, "y": -2.25 }, { "x": 1.38, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.38, "y": -2.6 }, { "x": -1.38, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.25, "y": 2.25 }, { "x": 2.25, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.25, "y": 1.38 }, { "x": 2.6, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.25, "y": -1.38 }, { "x": 2.25, "y": -2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.25, "y": -2.25 }, { "x": 1.38, "y": -2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.6, "y": 1.38 }, { "x": 2.6, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.6, "y": -1.38 }, { "x": 2.25, "y": -1.38 }]} layer="top"/>
      </footprint>);
// C11: 10nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// L1: 18nH; Inductor_SMD:L_0603_1608Metric
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R34: 10k; Resistor_SMD:R_0603_1608Metric
export const Footprint_R34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R14: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R31: 270R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// FB1: BLM18KG601SN1D; Inductor_SMD:L_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// J1: B2B-XH-A; Connector_JST:JST_XH_B2B-XH-A_1x02_P2.50mm_Vertical
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="2mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="2mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="0deg"/>
























<fabricationnotepath route={[{ "x": 4.95, "y": 2.35 }, { "x": -2.45, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.625, "y": 2.35 }, { "x": 0, "y": 1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": 2.35 }, { "x": -2.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.35 }, { "x": 0.625, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 4.95, "y": -3.4 }, { "x": 4.95, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": -3.4 }, { "x": 4.95, "y": -3.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 5.45, "y": 2.85 }, { "x": -2.95, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 2.85 }, { "x": -2.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.45, "y": -3.9 }, { "x": 5.45, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -3.9 }, { "x": 5.45, "y": -3.9 }]} layer="top"/>
      </footprint>);
// R27: 27R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D7: SMAJ15CA; Diode_SMD:D_SMA
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="2.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.8mm" height="2.5mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -2.3, "y": -1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": -1.5 }, { "x": -2.3, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.50118, "y": -0.75032 }, { "x": 0.50118, "y": 0.79908 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": 0.50118, "y": -0.75032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": -1.55114, "y": -0.00102 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": 0.50118, "y": 0.79908 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.50118, "y": -0.00102 }, { "x": 1.4994, "y": -0.00102 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": 0.79908 }, { "x": -0.64944, "y": -0.80112 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": 2.3, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -3.5, "y": -1.75 }, { "x": -3.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.5, "y": -1.75 }, { "x": -3.5, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 1.75 }, { "x": 3.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 1.75 }, { "x": 3.5, "y": -1.75 }]} layer="top"/>
      </footprint>);
// R21: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C2: 4.7uF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// H1: M3; MountingHole:MountingHole_3.2mm_M3_DIN965_Pad
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// R33: 10R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R17: 270R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R19: 270R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// F1: 1206L035/16YR; Fuse:Fuse_1206_3216Metric
export const Footprint_F1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.75mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.75mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 2.28, "y": 1.13 }, { "x": 2.28, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.28, "y": 1.13 }, { "x": 2.28, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.28, "y": -1.13 }, { "x": -2.28, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.28, "y": -1.13 }, { "x": -2.28, "y": 1.13 }]} layer="top"/>
      </footprint>);
// C12: 47pF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// R11: 10k; Resistor_SMD:R_0603_1608Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R28: 10R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D1: SMAJ15CA; Diode_SMD:D_SMA
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.5mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.5mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 2.3, "y": -1.5 }, { "x": -2.3, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": 2.3, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.50118, "y": -0.75032 }, { "x": 0.50118, "y": 0.79908 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.50118, "y": -0.00102 }, { "x": 1.4994, "y": -0.00102 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": 0.50118, "y": -0.75032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": 0.50118, "y": 0.79908 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": -1.55114, "y": -0.00102 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": 0.79908 }, { "x": -0.64944, "y": -0.80112 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.3, "y": -1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 3.5, "y": -1.75 }, { "x": -3.5, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 1.75 }, { "x": 3.5, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": -1.75 }, { "x": -3.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 1.75 }, { "x": 3.5, "y": 1.75 }]} layer="top"/>
      </footprint>);
// R13: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R10: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R22: 0R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R30: 10R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// U1: Argos SMD module; Project_library:SMD ARGOS
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin36"]} pcbX="-10mm" pcbY="-8.1mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-10mm" pcbY="-6.075mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-10mm" pcbY="-4.05mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-10mm" pcbY="-2.025mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-10mm" pcbY="0mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-10mm" pcbY="2.025mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-10mm" pcbY="4.05mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-10mm" pcbY="6.075mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-10mm" pcbY="8.1mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.1mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-6.075mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-4.05mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.025mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="2.025mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="4.05mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="6.075mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="8.1mm" pcbY="10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="10mm" pcbY="8.1mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="10mm" pcbY="6.075mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="10mm" pcbY="4.05mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="10mm" pcbY="2.025mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="10mm" pcbY="0mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="10mm" pcbY="-2.025mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="10mm" pcbY="-4.05mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="10mm" pcbY="-6.075mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="10mm" pcbY="-8.1mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="8.1mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="6.075mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="4.05mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.025mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="0mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-2.025mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-4.05mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="-6.075mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="-8.1mm" pcbY="-10mm" layer="top" width="1.27mm" height="1.27mm" ccwRotation={-90} shape="rotated_rect"/>


      </footprint>);
// L2: 2.2uH; Inductor_SMD:L_1008_2520Metric
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.075mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.2mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.075mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.2mm" height="1.25mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.25, "y": 1 }, { "x": 1.25, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": 1 }, { "x": 1.25, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1 }, { "x": -1.25, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1 }, { "x": -1.25, "y": 1 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.95, "y": 1.35 }, { "x": 1.95, "y": -1.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": 1.35 }, { "x": 1.95, "y": 1.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.95, "y": -1.35 }, { "x": -1.95, "y": -1.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": -1.35 }, { "x": -1.95, "y": 1.35 }]} layer="top"/>
      </footprint>);
// R15: 470R; Resistor_SMD:R_0603_1608Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// D8: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U2: LTC4365DDB; Package_DFN_QFN:DFN-8-1EP_2x3mm_P0.5mm_EP0.61x2.2mm
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.94mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.94mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.94mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.94mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.94mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.94mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.94mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.94mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.87mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" width="2.2mm" height="0.61mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": 1 }, { "x": -1, "y": -1.5 }, { "x": 1, "y": -1.5 }, { "x": 1, "y": 1.5 }, { "x": -0.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={0.75}/>

<courtyardoutline outline={[{ "x": 1.25, "y": 1.75 }, { "x": 1.25, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.25, "y": 1.75 }, { "x": 1.25, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.63, "y": 1.13 }, { "x": 1.63, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.25, "y": 1.13 }, { "x": 1.63, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.25, "y": 1.13 }, { "x": -1.25, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.63, "y": 1.13 }, { "x": -1.25, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.63, "y": -1.13 }, { "x": 1.25, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.25, "y": -1.13 }, { "x": 1.25, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.25, "y": -1.13 }, { "x": -1.63, "y": -1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.63, "y": -1.13 }, { "x": -1.63, "y": 1.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.25, "y": -1.75 }, { "x": -1.25, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.25, "y": -1.75 }, { "x": -1.25, "y": -1.13 }]} layer="top"/>
      </footprint>);
// D9: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U3: TPS63900; Package_SON:WSON-10-1EP_2.5x2.5mm_P0.5mm_EP1.2x2mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.2125mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.2125mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.2125mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.2125mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.2125mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="1.2125mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="1.2125mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="1.2125mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="1.2125mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="1.2125mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0mm" layer="top" width="1.2mm" height="2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.25, "y": 0.625 }, { "x": -1.25, "y": -1.25 }, { "x": 1.25, "y": -1.25 }, { "x": 1.25, "y": 1.25 }, { "x": -0.625, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.62}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 1.38 }, { "x": -1.5, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -1.38 }, { "x": -1.88, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.38 }, { "x": -1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.38 }, { "x": -1.88, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.38 }, { "x": 1.88, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.38 }, { "x": 1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 1.38 }, { "x": 1.88, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -1.38 }, { "x": 1.5, "y": -1.38 }]} layer="top"/>
      </footprint>);
// D4: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// U5: 82400102; Package_TO_SOT_SMD:SOT-23-6
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.1375mm" pcbY="0.95mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.325mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.8, "y": -1.45 }, { "x": -0.8, "y": 1.05 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.4, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.4}/>

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
// U4: TPS63900; Package_SON:WSON-10-1EP_2.5x2.5mm_P0.5mm_EP1.2x2mm
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.2125mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.2125mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.2125mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.2125mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.2125mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="1.2125mm" pcbY="-1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="1.2125mm" pcbY="-0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="1.2125mm" pcbY="0mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="1.2125mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="1.2125mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.825mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0mm" layer="top" width="1.2mm" height="2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.25, "y": 0.625 }, { "x": -1.25, "y": -1.25 }, { "x": 1.25, "y": -1.25 }, { "x": 1.25, "y": 1.25 }, { "x": -0.625, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={0.62}/>

<courtyardoutline outline={[{ "x": -1.88, "y": 1.38 }, { "x": -1.5, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.88, "y": -1.38 }, { "x": -1.88, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.38 }, { "x": -1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.38 }, { "x": -1.88, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.5 }, { "x": -1.5, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.5 }, { "x": 1.5, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": 1.38 }, { "x": 1.88, "y": 1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.38 }, { "x": 1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": 1.38 }, { "x": 1.88, "y": -1.38 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.88, "y": -1.38 }, { "x": 1.5, "y": -1.38 }]} layer="top"/>
      </footprint>);
// J7: B3B-XH-A; Connector_JST:JST_XH_B3B-XH-A_1x03_P2.50mm_Vertical
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.95mm" rectPadWidth="1.7mm" rectPadHeight="1.95mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="5mm" pcbY="0mm" outerHeight="1.95mm" outerWidth="1.7mm" holeHeight="0.95mm" holeWidth="0.95mm" shape="pill" pcbRotation="360deg"/>
























<fabricationnotepath route={[{ "x": -2.45, "y": -3.4 }, { "x": 7.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 7.45, "y": -3.4 }, { "x": 7.45, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.35 }, { "x": 0.625, "y": 2.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.45, "y": 2.35 }, { "x": -2.45, "y": -3.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.625, "y": 2.35 }, { "x": 0, "y": 1.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 7.45, "y": 2.35 }, { "x": -2.45, "y": 2.35 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -2.95, "y": -3.9 }, { "x": 7.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.95, "y": -3.9 }, { "x": 7.95, "y": 2.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 2.85 }, { "x": -2.95, "y": -3.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 7.95, "y": 2.85 }, { "x": -2.95, "y": 2.85 }]} layer="top"/>
      </footprint>);
// R12: 36.5K; Resistor_SMD:R_0603_1608Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// JP1: 42375-1246; Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_JP1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.77, "y": -6.85 }, { "x": 1.77, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.77, "y": 1.77 }, { "x": -1.77, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.77, "y": -6.85 }, { "x": 1.77, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.77, "y": 1.77 }, { "x": -1.77, "y": -6.85 }]} layer="top"/>
      </footprint>);
// D6: LED_Small; LED_SMD:LED_0603_1608Metric
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// C15: 100nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// H3: M3; MountingHole:MountingHole_3.2mm_M3_DIN965_Pad
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="5.6mm" holeDiameter="3.2mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// G***: LOGO; LOGO
export const Footprint_G___ = () => (<footprint originalLayer="bottom">
        





      </footprint>);
