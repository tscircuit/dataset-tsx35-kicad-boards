// Bitaxe Ultra (fork)
// Source: https://github.com/BastelPichi/bitaxe
// Commit: 0c3e71fd54fc0edef4c19c06d2320ef5468adc6a; license: CERN-OHL-S-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// C43: 10uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// C19: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// D1: SS310; Diode_SMD:D_SMA
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.5mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.5mm" height="1.8mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -2.3, "y": -1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": 0.79908 }, { "x": -0.64944, "y": -0.80112 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": -1.55114, "y": -0.00102 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": 0.50118, "y": 0.79908 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.00102 }, { "x": 0.50118, "y": -0.75032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.50118, "y": -0.00102 }, { "x": 1.4994, "y": -0.00102 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.50118, "y": -0.75032 }, { "x": 0.50118, "y": 0.79908 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": 2.3, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.3, "y": -1.5 }, { "x": -2.3, "y": -1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.6} anchorAlignment="center" text="SS310" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.5, "y": 1.75 }, { "x": 3.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": -1.75 }, { "x": -3.5, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 1.75 }, { "x": 3.5, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.5, "y": -1.75 }, { "x": -3.5, "y": -1.75 }]} layer="top"/>
      </footprint>);
// U8: INA260; Package_SO:TSSOP-16_4.4x5mm_P0.65mm
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.8625mm" pcbY="2.275mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.8625mm" pcbY="1.625mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.8625mm" pcbY="0.975mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.8625mm" pcbY="0.325mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.8625mm" pcbY="-0.325mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.8625mm" pcbY="-0.975mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.8625mm" pcbY="-1.625mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.8625mm" pcbY="-2.275mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="2.8625mm" pcbY="-2.275mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="2.8625mm" pcbY="-1.625mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="2.8625mm" pcbY="-0.975mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="2.8625mm" pcbY="-0.325mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="2.8625mm" pcbY="0.325mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="2.8625mm" pcbY="0.975mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="2.8625mm" pcbY="1.625mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="2.8625mm" pcbY="2.275mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>





<fabricationnotetext pcbX={0} pcbY={-3.45} anchorAlignment="center" text="INA260" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.85, "y": 2.75 }, { "x": -3.85, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.85, "y": -2.75 }, { "x": 3.85, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.85, "y": 2.75 }, { "x": -3.85, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.85, "y": -2.75 }, { "x": 3.85, "y": 2.75 }]} layer="top"/>
      </footprint>);
// C7: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// FID2: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID2 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID2" font="tscircuit2024" fontSize={0.4}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// FID4: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID4 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID4" font="tscircuit2024" fontSize={0.4}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// R13: 1.33k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1.33k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// FID3: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID3 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID3" font="tscircuit2024" fontSize={0.4}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// R6: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C1: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP38: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP38" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// Q4: 2N7002K; Package_TO_SOT_SMD:SOT-323_SC-70
export const Footprint_Q4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0.65mm" layer="top" width="0.7mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1mm" pcbY="-0.65mm" layer="top" width="0.7mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1mm" pcbY="0mm" layer="top" width="0.7mm" height="0.45mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -0.68, "y": 0.6 }, { "x": -0.68, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.18, "y": 1.1 }, { "x": -0.68, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.67, "y": 1.1 }, { "x": -0.18, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.67, "y": 1.1 }, { "x": 0.67, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.67, "y": -1.1 }, { "x": -0.68, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.05} pcbY={-2.05} anchorAlignment="center" text="2N7002K" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Q4" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 1.3 }, { "x": 1.7, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -1.3 }, { "x": -1.7, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 1.3 }, { "x": 1.7, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -1.3 }, { "x": -1.7, "y": -1.3 }]} layer="top"/>
      </footprint>);
// C41: 1.5nF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1.5nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C41" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP19: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP19" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// R8: 1M; Resistor_SMD:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1M" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C3: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// H6: MountingHole; MountingHole:MountingHole_3.5mm
export const Footprint_H6 = () => (<footprint originalLayer="top">
        <hole pcbX="0.054mm" pcbY="-0.074mm" diameter="3mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.3} pcbY={0} anchorAlignment="center" text="H6" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.75} layer="top"/>
      </footprint>);
// R5: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C38: 1uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP35: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP35" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP5: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C25: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C45: 470pF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="470pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C45" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// Y1: 32.768kHz; bitaxe:SC32S-7PF20PPM
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.4224mm" pcbY="0mm" layer="top" width="1.1684mm" height="1.6002mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.4224mm" pcbY="0mm" layer="top" width="1.1684mm" height="1.6002mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.651, "y": 0.8001 }, { "x": -1.651, "y": -0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.651, "y": 0.8001 }, { "x": -1.651, "y": -0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.651, "y": -0.8001 }, { "x": -0.8382, "y": -0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.651, "y": -0.8001 }, { "x": 1.651, "y": -0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8382, "y": 0.8001 }, { "x": -1.651, "y": 0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8382, "y": -0.8001 }, { "x": -0.8382, "y": 0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8382, "y": 0.8001 }, { "x": 0.8382, "y": -0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8382, "y": -0.8001 }, { "x": 1.651, "y": -0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.651, "y": 0.8001 }, { "x": -1.651, "y": 0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.651, "y": 0.8001 }, { "x": 0.8382, "y": 0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.651, "y": -0.8001 }, { "x": 1.651, "y": 0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.651, "y": -0.8001 }, { "x": 1.651, "y": 0.8001 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.3716, "y": 0 }, { "x": -1.3658, "y": -0.02916 }, { "x": -1.349282, "y": -0.053882 }, { "x": -1.32456, "y": -0.0704 }, { "x": -1.2954, "y": -0.0762 }, { "x": -1.26624, "y": -0.0704 }, { "x": -1.241518, "y": -0.053882 }, { "x": -1.225, "y": -0.02916 }, { "x": -1.2192, "y": 0 }, { "x": -1.225, "y": 0.02916 }, { "x": -1.241518, "y": 0.053882 }, { "x": -1.26624, "y": 0.0704 }, { "x": -1.2954, "y": 0.0762 }, { "x": -1.32456, "y": 0.0704 }, { "x": -1.349282, "y": 0.053882 }, { "x": -1.3658, "y": 0.02916 }, { "x": -1.3716, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-0.12} pcbY={4.36} anchorAlignment="center" text="32.768kHz" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={-0.0006} pcbY={-0.0059} width={4.5212} height={2.1082} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP16: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP16" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP15: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP15" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// U5: MCP1824T-1802E; Package_TO_SOT_SMD:SOT-23-5
export const Footprint_U5 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="MCP1824T-1802E" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// C51: 10uF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C51" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// TP8: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP23: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP23" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// U6: MCP1824T-0802E; Package_TO_SOT_SMD:SOT-23-5
export const Footprint_U6 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="center" text="MCP1824T-0802E" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="top"/>
      </footprint>);
// H5: MountingHole; MountingHole:MountingHole_3.5mm
export const Footprint_H5 = () => (<footprint originalLayer="top">
        <hole pcbX="0.07mm" pcbY="0.01mm" diameter="3mm"/>
<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="center" text="MountingHole" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0.3} pcbY={0} anchorAlignment="center" text="H5" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.75} layer="top"/>
      </footprint>);
// TP1: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C4: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP43: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP43" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// U7: EMC2101; Package_SO:TSSOP-8_3x3mm_P0.65mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.15mm" pcbY="0.975mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.15mm" pcbY="0.325mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.15mm" pcbY="-0.325mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.15mm" pcbY="-0.975mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.15mm" pcbY="-0.975mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.15mm" pcbY="-0.325mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.15mm" pcbY="0.325mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.15mm" pcbY="0.975mm" layer="top" width="0.4mm" height="1.1mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotetext pcbX={0} pcbY={-2.55} anchorAlignment="center" text="EMC2101" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={0.6}/>

<courtyardoutline outline={[{ "x": -2.95, "y": 1.8 }, { "x": -2.95, "y": -1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 1.8 }, { "x": 2.95, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -1.8 }, { "x": 2.95, "y": -1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.95, "y": 1.8 }, { "x": 2.95, "y": -1.8 }]} layer="top"/>
      </footprint>);
// C12: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C52: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C52" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R1: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// H7: MountingHole_Pad; MountingHole:MountingHole_3mm_Pad_Via
export const Footprint_H7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={4} anchorAlignment="center" text="H7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="center" text="MountingHole_Pad" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H7" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C30: 6.8pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="6.8pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// FID1: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID1 = () => (<footprint originalLayer="top">
        <smtpad pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID1" font="tscircuit2024" fontSize={0.4}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// U2: TXB0104RGYR; bitaxe:TXB0104
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin16"]} pcbX="-0.5mm" pcbY="0.5mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="0.5mm" pcbY="0.5mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="0.5mm" pcbY="-0.5mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="-0.5mm" pcbY="-0.5mm" outerDiameter="0.5mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-1.685mm" pcbY="-0.75mm" layer="top" cornerRadius="0.0039mm" width="0.26mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1mm" pcbY="-1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.5mm" pcbY="-1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.5mm" pcbY="-1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1mm" pcbY="-1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.685mm" pcbY="-0.75mm" layer="top" cornerRadius="0.0039mm" width="0.26mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.685mm" pcbY="0.75mm" layer="top" cornerRadius="0.0039mm" width="0.26mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1mm" pcbY="1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.5mm" pcbY="1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.5mm" pcbY="1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-1mm" pcbY="1.685mm" layer="top" cornerRadius="0.0039mm" width="0.9mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.685mm" pcbY="0.75mm" layer="top" cornerRadius="0.0039mm" width="0.26mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="0mm" pcbY="0mm" layer="top" width="2.05mm" height="2.05mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -2.685, "y": -0.65 }, { "x": -2.723268, "y": -0.657612 }, { "x": -2.755711, "y": -0.679289 }, { "x": -2.777388, "y": -0.711732 }, { "x": -2.785, "y": -0.75 }, { "x": -2.777388, "y": -0.788268 }, { "x": -2.755711, "y": -0.820711 }, { "x": -2.723268, "y": -0.842388 }, { "x": -2.685, "y": -0.85 }, { "x": -2.646732, "y": -0.842388 }, { "x": -2.614289, "y": -0.820711 }, { "x": -2.592612, "y": -0.788268 }, { "x": -2.585, "y": -0.75 }, { "x": -2.592612, "y": -0.711732 }, { "x": -2.614289, "y": -0.679289 }, { "x": -2.646732, "y": -0.657612 }, { "x": -2.685, "y": -0.65 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={8.168} pcbY={-3.008} anchorAlignment="center" text="TXB0104RGYR" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.385, "y": 2.385 }, { "x": 2.385, "y": 2.385 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.385, "y": -2.385 }, { "x": -2.385, "y": 2.385 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.385, "y": -2.385 }, { "x": 2.385, "y": -2.385 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.385, "y": -2.385 }, { "x": 2.385, "y": 2.385 }]} layer="top"/>
      </footprint>);
// R10: 3.83k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="3.83k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// TP42: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP42" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP17: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP17" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// L1: 150nH; bitaxe:FP1005R1-R15-R
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-4.16mm" pcbY="0mm" layer="top" width="3.1mm" height="2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="4.16mm" pcbY="0mm" layer="top" width="3.1mm" height="2mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotetext pcbX={7.11} pcbY={-4.39} anchorAlignment="center" text="150nH" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-3.12} pcbY={-4.43} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// R15: 3.32k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="3.32k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C15: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R16: 80.6k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="80.6k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// H9: MountingHole_Pad; MountingHole:MountingHole_3mm_Pad_Via
export const Footprint_H9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={4} anchorAlignment="center" text="H9" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="center" text="MountingHole_Pad" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H9" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C16: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C49: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C49" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C18: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP18: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP18" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C40: 180pF; Capacitor_SMD:C_0805_2012Metric
export const Footprint_C40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="180pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C40" font="tscircuit2024" fontSize={0.5}/>

<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// U10: DS4432U+; Package_SO:TSSOP-8_3x3mm_P0.65mm
export const Footprint_U10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.15mm" pcbY="0.975mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.15mm" pcbY="0.325mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.15mm" pcbY="-0.325mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.15mm" pcbY="-0.975mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.15mm" pcbY="-0.975mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="2.15mm" pcbY="-0.325mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.15mm" pcbY="0.325mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.15mm" pcbY="0.975mm" layer="top" width="1.1mm" height="0.4mm" shape="rect"/>





<fabricationnotetext pcbX={0} pcbY={-2.55} anchorAlignment="center" text="DS4432U+" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U10" font="tscircuit2024" fontSize={0.6}/>

<courtyardoutline outline={[{ "x": -2.95, "y": 1.8 }, { "x": -2.95, "y": -1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": 1.8 }, { "x": 2.95, "y": 1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -1.8 }, { "x": 2.95, "y": -1.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.95, "y": 1.8 }, { "x": 2.95, "y": -1.8 }]} layer="top"/>
      </footprint>);
// TP36: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP36" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C39: 3.3nF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="3.3nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP44: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP44" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// H10: MountingHole_Pad; MountingHole:MountingHole_3mm_Pad_Via
export const Footprint_H10 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={4} anchorAlignment="center" text="H10" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="center" text="MountingHole_Pad" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H10" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C31: 6.8pF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="6.8pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C35: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C10: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C11: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R14: 4.99k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4.99k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C14: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C13: 330uF; Capacitor_Tantalum_SMD:CP_EIA-7343-31_Kemet-D_Pad2.25x2.55mm_HandSolder
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.55mm" height="2.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.2mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="2.55mm" height="2.25mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -3.65, "y": 1.15 }, { "x": -3.65, "y": -2.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.65, "y": -2.15 }, { "x": 3.65, "y": -2.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.65, "y": 2.15 }, { "x": -3.65, "y": 1.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.65, "y": 2.15 }, { "x": -2.65, "y": 2.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.65, "y": -2.15 }, { "x": 3.65, "y": 2.15 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.1} anchorAlignment="center" text="330uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -4.58, "y": 2.4 }, { "x": 4.58, "y": 2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.58, "y": -2.4 }, { "x": -4.58, "y": 2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.58, "y": 2.4 }, { "x": 4.58, "y": -2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.58, "y": -2.4 }, { "x": -4.58, "y": -2.4 }]} layer="top"/>
      </footprint>);
// Q2: CSD17311Q5; bitaxe:CSD17311Q5
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="2.7525mm" pcbY="-1.93mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.7525mm" pcbY="-0.6317mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="2.7525mm" pcbY="0.6317mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="2.7525mm" pcbY="1.93mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 1.8475, "y": 2.28 }, { "x": 1.8475, "y": -2.28 }, { "x": -3.1525, "y": -2.28 }, { "x": -3.1525, "y": -1.618 }, { "x": -2.4725, "y": -1.618 }, { "x": -2.4725, "y": -0.9847 }, { "x": -3.1525, "y": -0.9847 }, { "x": -3.1525, "y": -0.3197 }, { "x": -2.4725, "y": -0.3197 }, { "x": -2.4725, "y": 0.3136 }, { "x": -3.1525, "y": 0.3136 }, { "x": -3.1525, "y": 0.9786 }, { "x": -2.4725, "y": 0.9786 }, { "x": -2.4725, "y": 1.6119 }, { "x": -3.1525, "y": 1.6119 }, { "x": -3.1525, "y": 2.28 }]}/>


<fabricationnotetext pcbX={9.34} pcbY={1.74} anchorAlignment="center" text="CSD17311Q5" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={6.7} pcbY={0.18} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// C33: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R2: 5.6k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.6k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// TP3: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP41: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP41" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C44: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U9: TPS40305; bitaxe:TPS40305
export const Footprint_U9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin11"]} pcbX="-0.575mm" pcbY="0mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="0.95mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0mm" pcbY="-0.95mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="0.575mm" pcbY="0mm" outerDiameter="0.4mm" holeDiameter="0.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-1.4mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.4mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.4mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.4mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.4mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.4mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.4mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.4mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.4mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.4mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.24mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} layer="top" shape="polygon" points={[{ "x": -0.825, "y": 0 }, { "x": -0.825, "y": 1.2 }, { "x": -0.375, "y": 1.2 }, { "x": -0.375, "y": 1.7 }, { "x": -0.125, "y": 1.7 }, { "x": -0.125, "y": 1.2 }, { "x": 0.125, "y": 1.2 }, { "x": 0.125, "y": 1.7 }, { "x": 0.375, "y": 1.7 }, { "x": 0.375, "y": 1.2 }, { "x": 0.825, "y": 1.2 }, { "x": 0.825, "y": -1.2 }, { "x": 0.375, "y": -1.2 }, { "x": 0.375, "y": -1.7 }, { "x": 0.125, "y": -1.7 }, { "x": 0.125, "y": -1.2 }, { "x": -0.125, "y": -1.2 }, { "x": -0.125, "y": -1.7 }, { "x": -0.375, "y": -1.7 }, { "x": -0.375, "y": -1.2 }, { "x": -0.825, "y": -1.2 }]}/>


<fabricationnotetext pcbX={4.73} pcbY={-2.76} anchorAlignment="center" text="TPS40305" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={3.04} pcbY={-4.22} anchorAlignment="center" text="U9" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// TP34: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP34" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP46: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP46" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// H8: MountingHole_Pad; MountingHole:MountingHole_3mm_Pad_Via
export const Footprint_H8 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="-1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="-2.25mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="1.59099mm" pcbY="-1.59099mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<platedhole portHints={["pin1"]} pcbX="2.25mm" pcbY="0mm" outerDiameter="0.8mm" holeDiameter="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="center" text="MountingHole_Pad" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H8" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C22: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP10: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP10" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C21: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C6: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C46: 220uF; bitaxe:CAP_2R5TPE220MAFB
export const Footprint_C46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="0mm" layer="top" width="1.6mm" height="2.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5mm" pcbY="0mm" layer="top" width="1.6mm" height="2.7mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotetext pcbX={4.3588} pcbY={-2.3064} anchorAlignment="center" text="220uF" font="tscircuit2024" fontSize={0.64}/>


<courtyardoutline outline={[{ "x": -2.55, "y": 1.65 }, { "x": -2.55, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.55, "y": -1.65 }, { "x": 2.55, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.55, "y": 1.65 }, { "x": -2.55, "y": 1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.55, "y": -1.65 }, { "x": 2.55, "y": 1.65 }]} layer="top"/>
      </footprint>);
// Q1: CSD17311Q5; bitaxe:CSD17311Q5
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="2.7525mm" pcbY="-1.93mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.7525mm" pcbY="-0.6317mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="2.7525mm" pcbY="0.6317mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="2.7525mm" pcbY="1.93mm" layer="top" width="0.7mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} layer="top" shape="polygon" points={[{ "x": 1.8475, "y": 2.28 }, { "x": 1.8475, "y": -2.28 }, { "x": -3.1525, "y": -2.28 }, { "x": -3.1525, "y": -1.618 }, { "x": -2.4725, "y": -1.618 }, { "x": -2.4725, "y": -0.9847 }, { "x": -3.1525, "y": -0.9847 }, { "x": -3.1525, "y": -0.3197 }, { "x": -2.4725, "y": -0.3197 }, { "x": -2.4725, "y": 0.3136 }, { "x": -3.1525, "y": 0.3136 }, { "x": -3.1525, "y": 0.9786 }, { "x": -2.4725, "y": 0.9786 }, { "x": -2.4725, "y": 1.6119 }, { "x": -3.1525, "y": 1.6119 }, { "x": -3.1525, "y": 2.28 }]}/>


<fabricationnotetext pcbX={9.34} pcbY={1.74} anchorAlignment="center" text="CSD17311Q5" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={6.7} pcbY={0.18} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// C42: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP7: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP7" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C34: 47uF; Capacitor_SMD:C_1210_3225Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="2.7mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="2.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="center" text="47uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.6 }, { "x": 2.3, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.6 }, { "x": -2.3, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.6 }, { "x": 2.3, "y": -1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.6 }, { "x": -2.3, "y": -1.6 }]} layer="top"/>
      </footprint>);
// TP40: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP40" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP4: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// U1: 25MHz; bitaxe:O 25,0-JO32-B-1V3-1-T1-LF
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.15mm" pcbY="-0.95mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.15mm" pcbY="-0.95mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.15mm" pcbY="0.95mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.15mm" pcbY="0.95mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0.65} pcbY={4.29} anchorAlignment="center" text="25MHz" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={5.36} pcbY={2.32} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// TP13: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP13" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// R12: 4.12k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4.12k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R4: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C2: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// R7: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C23: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP6: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP6" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C5: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP9: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// R9: 10k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C17: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C8: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C29: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP14: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP14" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP45: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP45" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// R3: 5.1k; Resistor_SMD:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.26}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C27: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// TP22: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP22" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// TP2: TestPoint; TestPoint:TestPoint_Pad_D1.5mm
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>

<fabricationnotetext pcbX={0} pcbY={-1.75} anchorAlignment="center" text="TestPoint" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.65} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={1}/>

<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="top"/>
      </footprint>);
// C20: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C47: 100uF; Capacitor_SMD:C_1206_3216Metric
export const Footprint_C47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 0.8 }, { "x": 1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -0.8 }, { "x": -1.6, "y": 0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -0.8 }, { "x": -1.6, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.85} anchorAlignment="center" text="100uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C47" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.15 }, { "x": 2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.15 }, { "x": -2.3, "y": 1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.15 }, { "x": 2.3, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.15 }, { "x": -2.3, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C24: 1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// C36: 47uF; Capacitor_SMD:C_1210_3225Metric
export const Footprint_C36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="2.7mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="2.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="center" text="47uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.6 }, { "x": 2.3, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.6 }, { "x": -2.3, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.6 }, { "x": 2.3, "y": -1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.6 }, { "x": -2.3, "y": -1.6 }]} layer="top"/>
      </footprint>);
// C9: 0.1uF; Capacitor_SMD:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="0.1uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// U11: RT9080-33GJ5; bitaxe:RT9080-33GJ5
export const Footprint_U11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.37795mm" pcbY="0.9398mm" layer="top" width="0.9525mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.37795mm" pcbY="0mm" layer="top" width="0.9525mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.37795mm" pcbY="-0.9398mm" layer="top" width="0.9525mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.37795mm" pcbY="-0.9398mm" layer="top" width="0.9525mm" height="0.5588mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.37795mm" pcbY="0.9398mm" layer="top" width="0.9525mm" height="0.5588mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -0.9017, "y": 0.6604 }, { "x": -0.9017, "y": 1.2192 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9017, "y": -0.2794 }, { "x": -0.9017, "y": 0.2794 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.9017, "y": -1.2192 }, { "x": -0.9017, "y": -0.6604 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9017, "y": 1.2192 }, { "x": 0.9017, "y": 0.6604 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.9017, "y": -0.6604 }, { "x": 0.9017, "y": -1.2192 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={1.96} pcbY={4.77} anchorAlignment="center" text="RT9080-33GJ5" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={0} width={4.02} height={3.6} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C37: 47uF; Capacitor_SMD:C_1210_3225Metric
export const Footprint_C37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="2.7mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.475mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.15mm" height="2.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="center" text="47uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": -2.3, "y": 1.6 }, { "x": 2.3, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.3, "y": -1.6 }, { "x": -2.3, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": 1.6 }, { "x": 2.3, "y": -1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.3, "y": -1.6 }, { "x": -2.3, "y": -1.6 }]} layer="top"/>
      </footprint>);
// J4: Conn_01x04; bitaxe:470531000
export const Footprint_J4 = () => (<footprint originalLayer="bottom">
        <hole pcbX="5.08mm" pcbY="-2.160001mm" diameter="1.2954mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.5748mm" holeDiameter="1.0668mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.5748mm" holeDiameter="1.0668mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.5748mm" holeDiameter="1.0668mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="1.5748mm" holeDiameter="1.0668mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -1.2954, "y": 3.302 }, { "x": 8.9154, "y": 3.302 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.2954, "y": -2.54 }, { "x": -1.2954, "y": 3.302 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 8.9154, "y": 3.302 }, { "x": 8.9154, "y": -2.54 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 8.9154, "y": -2.54 }, { "x": -1.2954, "y": -2.54 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={2.27} pcbY={-7.55} anchorAlignment="center" text="Conn_01x04" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="*" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={3.8206} pcbY={0.238851} width={10.7188} height={6.617701} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// J9: Conn_01x04; Connector_PinSocket_2.54mm:PinSocket_1x04_P2.54mm_Vertical_SMD_Pin1Right
export const Footprint_J9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="1.65mm" pcbY="-3.81mm" layer="bottom" width="1.9mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.65mm" pcbY="-1.27mm" layer="bottom" width="1.9mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.65mm" pcbY="1.27mm" layer="bottom" width="1.9mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.65mm" pcbY="3.81mm" layer="bottom" width="1.9mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.27, "y": 4.11 }, { "x": -2.27, "y": 3.51 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.27, "y": 3.51 }, { "x": -1.27, "y": 3.51 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.27, "y": -0.97 }, { "x": -2.27, "y": -1.57 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.27, "y": -1.57 }, { "x": -1.27, "y": -1.57 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.27, "y": 5.18 }, { "x": -1.27, "y": -5.18 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.27, "y": 4.11 }, { "x": -2.27, "y": 4.11 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.27, "y": -0.97 }, { "x": -2.27, "y": -0.97 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.27, "y": -5.18 }, { "x": 0.635, "y": -5.18 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.635, "y": -5.18 }, { "x": 1.27, "y": -4.545 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": 5.18 }, { "x": -1.27, "y": 5.18 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.97 }, { "x": 2.27, "y": 0.97 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": -4.11 }, { "x": 2.27, "y": -4.11 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": -4.545 }, { "x": 1.27, "y": 5.18 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.27, "y": 1.57 }, { "x": 1.27, "y": 1.57 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.27, "y": 0.97 }, { "x": 2.27, "y": 1.57 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.27, "y": -3.51 }, { "x": 1.27, "y": -3.51 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.27, "y": -4.11 }, { "x": 2.27, "y": -3.51 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={6.68} anchorAlignment="center" text="Conn_01x04" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J9" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -3.1, "y": 5.7 }, { "x": -3.1, "y": -5.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.1, "y": -5.7 }, { "x": 3.1, "y": -5.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": 5.7 }, { "x": -3.1, "y": 5.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": -5.7 }, { "x": 3.1, "y": 5.7 }]} layer="bottom"/>
      </footprint>);
// FID7: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID7 = () => (<footprint originalLayer="bottom">
        <smtpad pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID7" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="bottom"/>
      </footprint>);
// J7: Conn_01x02; Connector_PinHeader_2.54mm:PinHeader_1x02_P2.54mm_Vertical
export const Footprint_J7 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 3.81 }, { "x": -1.27, "y": -0.635 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.27, "y": -0.635 }, { "x": -0.635, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.635, "y": -1.27 }, { "x": 1.27, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": 3.81 }, { "x": -1.27, "y": 3.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.27 }, { "x": 1.27, "y": 3.81 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={4.87} anchorAlignment="center" text="Conn_01x02" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.27} anchorAlignment="center" text="J7" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.8, "y": 4.35 }, { "x": 1.8, "y": 4.35 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.8 }, { "x": -1.8, "y": 4.35 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 4.35 }, { "x": 1.8, "y": -1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -1.8 }, { "x": -1.8, "y": -1.8 }]} layer="bottom"/>
      </footprint>);
// J3: Conn_01x05; Connector_PinHeader_2.54mm:PinHeader_1x05_P2.54mm_Vertical
export const Footprint_J3 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="2.54mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="5.08mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="7.62mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="10.16mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>






<fabricationnotepath route={[{ "x": -1.27, "y": 11.43 }, { "x": -1.27, "y": -0.635 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.27, "y": -0.635 }, { "x": -0.635, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.635, "y": -1.27 }, { "x": 1.27, "y": -1.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": 11.43 }, { "x": -1.27, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.27, "y": -1.27 }, { "x": 1.27, "y": 11.43 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={12.49} anchorAlignment="center" text="Conn_01x05" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={5.08} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.8, "y": 11.95 }, { "x": 1.8, "y": 11.95 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.8 }, { "x": -1.8, "y": 11.95 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.8, "y": 11.95 }, { "x": 1.8, "y": -1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -1.8 }, { "x": -1.8, "y": -1.8 }]} layer="bottom"/>
      </footprint>);
// J8: USB_C_Receptacle_USB2.0; Connector_USB:USB_C_Receptacle_GCT_USB4105-xx-A_16P_TopMnt_Horizontal
export const Footprint_J8 = () => (<footprint originalLayer="bottom">
        <hole pcbX="-2.89mm" pcbY="-2.605mm" diameter="0.65mm"/>
<hole pcbX="2.89mm" pcbY="-2.605mm" diameter="0.65mm"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="1.075mm" outerHeight="1.8mm" outerWidth="1mm" holeHeight="1.4mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="-4.32mm" pcbY="-3.105mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="1.075mm" outerHeight="1.8mm" outerWidth="1mm" holeHeight="1.4mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="4.32mm" pcbY="-3.105mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<smtpad portHints={["pin1"]} pcbX="-3.2mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.25mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.25mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.25mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.4mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.2mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="3.2mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.4mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.75mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.75mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.75mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.4mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-3.2mm" pcbY="-3.68mm" layer="bottom" width="1.15mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={5} anchorAlignment="center" text="USB_C_Receptacle_USB2.0" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J8" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3.1} anchorAlignment="center" text="PCB Edge" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={7.35} height={8.94} strokeWidth={0.1} isFilled={false} hasStroke={true} layer="bottom"/>
<courtyardrect pcbX={0} pcbY={-0.29} width={10.64} height={8.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// U12: ESP32-S3-WROOM-1; bitaxe:ESP32-S3-WROOM-1
export const Footprint_U12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-8.75mm" pcbY="-8.26mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-8.75mm" pcbY="-6.99mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-8.75mm" pcbY="-5.72mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-8.75mm" pcbY="-4.45mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-8.75mm" pcbY="-3.18mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-8.75mm" pcbY="-1.91mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-8.75mm" pcbY="-0.64mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-8.75mm" pcbY="0.63mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.75mm" pcbY="1.9mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-8.75mm" pcbY="3.17mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-8.75mm" pcbY="4.44mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-8.75mm" pcbY="5.71mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-8.75mm" pcbY="6.98mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-8.75mm" pcbY="8.25mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-6.985mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.715mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-4.445mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.175mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-1.905mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.635mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0.635mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="1.905mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="3.175mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="4.445mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="5.715mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="6.985mm" pcbY="9.5mm" layer="bottom" width="1.5mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="8.75mm" pcbY="8.25mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="8.75mm" pcbY="6.98mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="8.75mm" pcbY="5.71mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="8.75mm" pcbY="4.44mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="8.75mm" pcbY="3.17mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="8.75mm" pcbY="1.9mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="8.75mm" pcbY="0.63mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="8.75mm" pcbY="-0.64mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="8.75mm" pcbY="-1.91mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="8.75mm" pcbY="-3.18mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="8.75mm" pcbY="-4.45mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="8.75mm" pcbY="-5.72mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="8.75mm" pcbY="-6.99mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="8.75mm" pcbY="-8.26mm" layer="bottom" width="0.9mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-2.9mm" pcbY="0.86mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-2.9mm" pcbY="-0.54mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-2.9mm" pcbY="-1.94mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-1.5mm" pcbY="0.86mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-1.5mm" pcbY="-0.54mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-1.5mm" pcbY="-1.94mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-0.1mm" pcbY="0.86mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-0.1mm" pcbY="-0.54mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-0.1mm" pcbY="-1.94mm" layer="bottom" width="0.9mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -9, "y": -15.75 }, { "x": -9, "y": -9 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 9, "y": -9.81 }, { "x": -9, "y": -9.81 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 9, "y": -15.75 }, { "x": 9, "y": -9 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={12} anchorAlignment="center" text="ESP32-S3-WROOM-1" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-12.75} anchorAlignment="center" text="Antenna Area" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U12" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.8, "y": 10.55 }, { "x": 9.8, "y": 10.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -9.8, "y": -16.05 }, { "x": -9.8, "y": 10.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 9.8, "y": -16.05 }, { "x": -9.8, "y": -16.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 9.8, "y": -16.05 }, { "x": 9.8, "y": 10.55 }]} layer="bottom"/>
      </footprint>);
// J5: TC2030-IDC; bitaxe:Tag-Connect_TC2030-IDC-NL_2x03_P1.27mm_Vertical
export const Footprint_J5 = () => (<footprint originalLayer="bottom">
        <hole pcbX="-2.54mm" pcbY="0mm" diameter="0.9906mm"/>
<hole pcbX="2.54mm" pcbY="1.016mm" diameter="0.9906mm"/>
<hole pcbX="2.54mm" pcbY="-1.016mm" diameter="0.9906mm"/>
<smtpad portHints={["pin1"]} pcbX="-1.27mm" pcbY="0.635mm" layer="bottom" radius="0.3937mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-1.27mm" pcbY="-0.635mm" layer="bottom" radius="0.3937mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0.635mm" layer="bottom" radius="0.3937mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-0.635mm" layer="bottom" radius="0.3937mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="1.27mm" pcbY="0.635mm" layer="bottom" radius="0.3937mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="1.27mm" pcbY="-0.635mm" layer="bottom" radius="0.3937mm" shape="circle"/>


<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="center" text="TC2030-IDC" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 2 }, { "x": -3.5, "y": -2 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.5, "y": -2 }, { "x": 3.5, "y": -2 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 2 }, { "x": -3.5, "y": 2 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.5, "y": -2 }, { "x": 3.5, "y": 2 }]} layer="bottom"/>
      </footprint>);
// G***: LOGO; bitaxe:logo
export const Footprint_G___ = () => (<footprint originalLayer="bottom">
        
      </footprint>);
// G***: LOGO; bitaxe:logo-fcu
export const Footprint_G____ = () => (<footprint originalLayer="bottom"/>);
// FID8: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID8 = () => (<footprint originalLayer="bottom">
        <smtpad pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID8" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="bottom"/>
      </footprint>);
// U14: BM1366_mode1; bitaxe:BM1366
export const Footprint_U14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.916mm" pcbY="-3.263mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.916mm" pcbY="-2.761mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.916mm" pcbY="-2.259mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.916mm" pcbY="-1.757mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.916mm" pcbY="-1.255mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.916mm" pcbY="-0.753mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.916mm" pcbY="-0.251mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.916mm" pcbY="0.251mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.916mm" pcbY="0.753mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.916mm" pcbY="1.255mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.916mm" pcbY="1.757mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.916mm" pcbY="2.259mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-2.916mm" pcbY="2.761mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-2.916mm" pcbY="3.263mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2.916mm" pcbY="3.25mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.916mm" pcbY="2.75mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.916mm" pcbY="2.25mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.916mm" pcbY="1.75mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.916mm" pcbY="1.25mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.916mm" pcbY="0.753mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.916mm" pcbY="0.25mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.916mm" pcbY="-0.251mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.916mm" pcbY="-0.753mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.916mm" pcbY="-1.255mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="2.916mm" pcbY="-1.757mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="2.916mm" pcbY="-2.25mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="2.916mm" pcbY="-2.761mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="2.916mm" pcbY="-3.25mm" layer="bottom" width="0.792mm" height="0.221mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="0mm" pcbY="-2.468mm" layer="bottom" width="4.277mm" height="1.81mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="0mm" pcbY="1.108mm" layer="bottom" width="4.277mm" height="4.53mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0.07} pcbY={4.58} anchorAlignment="center" text="BM1366_mode1" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0.09} pcbY={6.49} anchorAlignment="center" text="U14" font="tscircuit2024" fontSize={1} layer="bottom"/>
      </footprint>);
// C28: 220uF; Capacitor_SMD:CP_Elec_6.3x7.7
export const Footprint_C28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.6mm" height="3.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.6mm" height="3.5mm" ccwRotation={90} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -3.3, "y": 2.3 }, { "x": -2.3, "y": 3.3 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.3, "y": -2.3 }, { "x": -3.3, "y": 2.3 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.3, "y": -2.3 }, { "x": -2.3, "y": -3.3 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.704838, "y": -1.33 }, { "x": -2.074838, "y": -1.33 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.389838, "y": -1.645 }, { "x": -2.389838, "y": -1.015 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.3, "y": 3.3 }, { "x": 3.3, "y": 3.3 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.3, "y": -3.3 }, { "x": 3.3, "y": -3.3 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 3.3, "y": -3.3 }, { "x": 3.3, "y": 3.3 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0, "y": 3.15 }, { "x": -1.205453, "y": 2.910221 }, { "x": -2.227386, "y": 2.227386 }, { "x": -2.910221, "y": 1.205453 }, { "x": -3.15, "y": 0 }, { "x": -2.910221, "y": -1.205453 }, { "x": -2.227386, "y": -2.227386 }, { "x": -1.205453, "y": -2.910221 }, { "x": 0, "y": -3.15 }, { "x": 1.205453, "y": -2.910221 }, { "x": 2.227386, "y": -2.227386 }, { "x": 2.910221, "y": -1.205453 }, { "x": 3.15, "y": 0 }, { "x": 2.910221, "y": 1.205453 }, { "x": 2.227386, "y": 2.227386 }, { "x": 1.205453, "y": 2.910221 }, { "x": 0, "y": 3.15 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={4.35} anchorAlignment="center" text="220uF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -4.7, "y": 1.05 }, { "x": -3.55, "y": 1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -4.7, "y": -1.05 }, { "x": -4.7, "y": 1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 2.4 }, { "x": -2.4, "y": 3.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 1.05 }, { "x": -3.55, "y": 2.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -1.05 }, { "x": -4.7, "y": -1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -2.4 }, { "x": -3.55, "y": -1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -2.4 }, { "x": -2.4, "y": -3.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.4, "y": 3.55 }, { "x": 3.55, "y": 3.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.4, "y": -3.55 }, { "x": 3.55, "y": -3.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 1.05 }, { "x": 3.55, "y": 3.55 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -1.05 }, { "x": 4.7, "y": -1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -3.55 }, { "x": 3.55, "y": -1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 4.7, "y": 1.05 }, { "x": 3.55, "y": 1.05 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 4.7, "y": -1.05 }, { "x": 4.7, "y": 1.05 }]} layer="bottom"/>
      </footprint>);
// J1: 54-00164; bitaxe:BarrelJack_Wuerth_694106106102_2.0x5.5mm
export const Footprint_J1 = () => (<footprint originalLayer="bottom">
        <hole pcbX="0mm" pcbY="3.075mm" diameter="1.6mm"/>
<hole pcbX="0mm" pcbY="-1.425mm" diameter="1.8mm"/>
<smtpad portHints={["pin1"]} pcbX="-5.5mm" pcbY="3.075mm" layer="bottom" cornerRadius="0.125mm" width="2mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-5.5mm" pcbY="-3.075mm" layer="bottom" cornerRadius="0.125mm" width="2mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="5.5mm" pcbY="3.075mm" layer="bottom" cornerRadius="0.125mm" width="2mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="5.5mm" pcbY="-3.075mm" layer="bottom" cornerRadius="0.125mm" width="2mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -5.2, "y": -4.075 }, { "x": -4.5, "y": -4.075 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.2, "y": -5.925 }, { "x": -5.2, "y": -4.075 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.5, "y": 8.075 }, { "x": 4.5, "y": 8.075 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.5, "y": -2.5 }, { "x": -4.5, "y": 8.075 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.5, "y": -3.66 }, { "x": -3.6, "y": -3.08 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.5, "y": -4.075 }, { "x": -4.5, "y": -3.66 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.6, "y": -3.08 }, { "x": -4.5, "y": -2.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.7, "y": -5.925 }, { "x": -5.2, "y": -5.925 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.7, "y": -6.625 }, { "x": 1.7, "y": -5.925 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.5, "y": 8.075 }, { "x": 4.5, "y": -6.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.5, "y": -6.625 }, { "x": 1.7, "y": -6.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0.05} pcbY={9.605} anchorAlignment="center" text="54-00164" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.01} pcbY={0.655} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -7, "y": 1.57 }, { "x": -7, "y": 4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -7, "y": -4.58 }, { "x": -7, "y": -1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5.8, "y": -4.58 }, { "x": -7, "y": -4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5.8, "y": -7.13 }, { "x": -5.8, "y": -4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5.8, "y": -7.13 }, { "x": 5, "y": -7.13 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5, "y": 8.58 }, { "x": -5, "y": 4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5, "y": 4.58 }, { "x": -7, "y": 4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5, "y": 1.57 }, { "x": -7, "y": 1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5, "y": -1.57 }, { "x": -7, "y": -1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -5, "y": -1.57 }, { "x": -5, "y": 1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5, "y": 8.58 }, { "x": -5, "y": 8.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5, "y": 4.58 }, { "x": 5, "y": 8.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5, "y": 1.57 }, { "x": 7, "y": 1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5, "y": -1.57 }, { "x": 5, "y": 1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5, "y": -4.58 }, { "x": 7, "y": -4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5, "y": -7.13 }, { "x": 5, "y": -4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 7, "y": 4.58 }, { "x": 5, "y": 4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 7, "y": 1.57 }, { "x": 7, "y": 4.58 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 7, "y": -1.57 }, { "x": 5, "y": -1.57 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 7, "y": -4.58 }, { "x": 7, "y": -1.57 }]} layer="bottom"/>
      </footprint>);
// SW1: GT-TC029B-H025-L1N; bitaxe:SW_CS1213AGF260_CRS
export const Footprint_SW1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.06mm" pcbY="0mm" layer="bottom" width="0.9mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.05mm" pcbY="0mm" layer="bottom" width="0.9mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.905, "y": 1.397 }, { "x": 1.905, "y": 1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.905, "y": -1.397 }, { "x": -1.905, "y": 1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.905, "y": 1.397 }, { "x": 1.905, "y": -1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.905, "y": -1.397 }, { "x": -1.905, "y": -1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotetext pcbX={-0.13} pcbY={-3.27} anchorAlignment="center" text="GT-TC029B-H025-L1N" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0.13} pcbY={3.53} anchorAlignment="center" text="SW1" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.667, "y": 1.016 }, { "x": -2.667, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.667, "y": 1.016 }, { "x": -2.159, "y": 1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.667, "y": -1.016 }, { "x": -2.159, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.159, "y": 1.651 }, { "x": -2.159, "y": 1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.159, "y": -1.016 }, { "x": -2.159, "y": -1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.159, "y": -1.651 }, { "x": 2.159, "y": -1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.159, "y": 1.651 }, { "x": -2.159, "y": 1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.159, "y": 1.016 }, { "x": 2.159, "y": 1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.159, "y": -1.651 }, { "x": 2.159, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.667, "y": 1.016 }, { "x": 2.159, "y": 1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.667, "y": -1.016 }, { "x": 2.159, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.667, "y": -1.016 }, { "x": 2.667, "y": 1.016 }]} layer="bottom"/>
      </footprint>);
// U3: ~; bitaxe:polarity
export const Footprint_U3 = () => (<footprint originalLayer="bottom">
        





<fabricationnotetext pcbX={-0.525} pcbY={13.18} anchorAlignment="center" text="~" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.525} pcbY={11.445} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={1} layer="bottom"/>


      </footprint>);
// FID5: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID5 = () => (<footprint originalLayer="bottom">
        <smtpad pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID5" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="bottom"/>
      </footprint>);
// J2: Conn_01x02; bitaxe:JST_XH_B2B-XH-A_1x02_P2.50mm_Vertical
export const Footprint_J2 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="2mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" outerHeight="2mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="360deg"/>









<fabricationnotepath route={[{ "x": -2.45, "y": 3.4 }, { "x": 4.95, "y": 3.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.45, "y": -2.35 }, { "x": -2.45, "y": 3.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.625, "y": -2.35 }, { "x": 0, "y": -1.35 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0, "y": -1.35 }, { "x": 0.625, "y": -2.35 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.95, "y": 3.4 }, { "x": 4.95, "y": -2.35 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.95, "y": -2.35 }, { "x": -2.45, "y": -2.35 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={1.25} pcbY={4.6} anchorAlignment="center" text="Conn_01x02" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={1.25} pcbY={2.7} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.95, "y": 3.9 }, { "x": 5.45, "y": 3.9 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.95, "y": -2.85 }, { "x": -2.95, "y": 3.9 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5.45, "y": 3.9 }, { "x": 5.45, "y": -2.85 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 5.45, "y": -2.85 }, { "x": -2.95, "y": -2.85 }]} layer="bottom"/>
      </footprint>);
// SW2: GT-TC029B-H025-L1N; bitaxe:SW_CS1213AGF260_CRS
export const Footprint_SW2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.06mm" pcbY="0mm" layer="bottom" width="0.9mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.05mm" pcbY="0mm" layer="bottom" width="0.9mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": -1.905, "y": 1.397 }, { "x": 1.905, "y": 1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.905, "y": -1.397 }, { "x": -1.905, "y": 1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.905, "y": 1.397 }, { "x": 1.905, "y": -1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.905, "y": -1.397 }, { "x": -1.905, "y": -1.397 }]} strokeWidth={0.0254} layer="bottom"/>
<fabricationnotetext pcbX={-0.13} pcbY={-3.27} anchorAlignment="center" text="GT-TC029B-H025-L1N" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0.13} pcbY={3.53} anchorAlignment="center" text="SW2" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -2.667, "y": 1.016 }, { "x": -2.667, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.667, "y": 1.016 }, { "x": -2.159, "y": 1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.667, "y": -1.016 }, { "x": -2.159, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.159, "y": 1.651 }, { "x": -2.159, "y": 1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.159, "y": -1.016 }, { "x": -2.159, "y": -1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.159, "y": -1.651 }, { "x": 2.159, "y": -1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.159, "y": 1.651 }, { "x": -2.159, "y": 1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.159, "y": 1.016 }, { "x": 2.159, "y": 1.651 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.159, "y": -1.651 }, { "x": 2.159, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.667, "y": 1.016 }, { "x": 2.159, "y": 1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.667, "y": -1.016 }, { "x": 2.159, "y": -1.016 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.667, "y": -1.016 }, { "x": 2.667, "y": 1.016 }]} layer="bottom"/>
      </footprint>);
// FID6: Fiducial; Fiducial:Fiducial_1mm_Mask2mm
export const Footprint_FID6 = () => (<footprint originalLayer="bottom">
        <smtpad pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
<fabricationnotepath route={[{ "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="Fiducial" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FID6" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={1.25} layer="bottom"/>
      </footprint>);
