// Antmicro CM4 baseboard LVDS adapter
// Source: https://github.com/antmicro/cm4-baseboard-lvds-adapter
// Commit: 4af945ed558e58e4b8aea6fe909fc33d78b63f6f; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// R21: R_1k5_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R1: R_470R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R46: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D11: LED_G_0603_KP-1608ZGC; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R3: R_100R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J1: Plug_Molex_SlimStack_2x20_556500488; antmicro-footprints:Conn_Plug_Molex_SlimStack_2x20_556500488
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-4.745mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-4.745mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-4.245mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-4.245mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.745mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.745mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.245mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.245mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.745mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.745mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.245mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.245mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-1.745mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.745mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-1.245mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-1.245mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-0.745mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-0.745mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-0.245mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.245mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0.254mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="0.254mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="0.754mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="0.754mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.254mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.254mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="1.754mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.754mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="2.254mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.254mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="2.754mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="2.754mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.254mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="3.254mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="3.754mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="3.754mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="4.254mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="4.254mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="4.754mm" pcbY="2.01mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="4.754mm" pcbY="-2.008mm" layer="top" width="1.1mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-5.947mm" pcbY="1.82mm" layer="top" width="1.32mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-5.947mm" pcbY="-1.82mm" layer="top" width="1.32mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="5.955mm" pcbY="1.82mm" layer="top" width="1.32mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="5.96mm" pcbY="-1.82mm" layer="top" width="1.32mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>




<courtyardrect pcbX={0} pcbY={0} width={13.84} height={5.7} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R47: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={15.015} pcbY={-1.29} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R10: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R11: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C12: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R43: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R8: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R33: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D8: LED_G_0603_KP-1608ZGC; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R19: R_590k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R22: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R40: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C9: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP18: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// R18: R_1M_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C44: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C47: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R32: R_510k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R45: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C8: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP16: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="top_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// R52: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C42: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// REF**: LOGO; antmicro-footprints:antmicro-logo_scaled_12mm
export const Footprint_REF__ = () => (<footprint originalLayer="top">
        <courtyardrect pcbX={0.04} pcbY={0.02} width={14.604} height={6.544} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D2: LED_G_0603_KP-1608ZGC; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP19: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// TP3: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// R38: R_470R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C15: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// MP1: MP_Pad6mm_Drill3mm; antmicro-footprints:MP_Pad6mm_Drill3mm
export const Footprint_MP1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.9} anchorAlignment="bottom_left" text="MP_Pad6mm_Drill3mm" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C45: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C10: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D5: LED_G_0603_KP-1608ZGC; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R41: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R42: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C13: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R44: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP1: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// C6: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R2: R_1k5_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.15}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// D1: LED_G_0603_KP-1608ZGC; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP11: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// C7: C_1u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R9: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C49: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// REF**: oshw_logo; antmicro-footprints:oshw-logo
export const Footprint_REF___ = () => (<footprint originalLayer="top">
        <courtyardrect pcbX={0.005} pcbY={0} width={8.11} height={8.42} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R51: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R20: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C11: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// FB1: FB_220Z_2.2A_TDK-MPZ_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R49: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R49 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-0.22} pcbY={1} anchorAlignment="bottom_right" text="R_100k_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// TP2: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// C37: C_220n_16V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C37 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R27: R_110k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R28: R_1M5_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// TP9: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// D9: PMEG3010CEJ,115; antmicro-footprints:D_SOD-323F
export const Footprint_D9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.051mm" pcbY="0.001mm" layer="bottom" cornerRadius="0.045mm" width="0.8mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.05mm" pcbY="0.001mm" layer="bottom" cornerRadius="0.045mm" width="0.8mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnoterect pcbX={-0.002318} pcbY={0} width={2.495365} height={1.352} strokeWidth={0.1} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.1} height={1.9} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// U6: TLV76701_WSON; antmicro-footprints:WSON-6-1EP_2x2mm_P0.65mm
export const Footprint_U6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.975mm" pcbY="-0.652mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.45mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.975mm" pcbY="0mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.45mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.975mm" pcbY="0.65mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.45mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.973mm" pcbY="0.65mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.45mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.973mm" pcbY="0mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.45mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.973mm" pcbY="-0.652mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.45mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" layer="bottom" cornerRadius="0.056mm" width="1.72mm" height="1.12mm" ccwRotation={90} shape="rotated_rect"/>




<courtyardrect pcbX={0} pcbY={0} width={2.9} height={2.5} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C21: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C1: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// D4: PUSB3F96X_PASS; antmicro-footprints:Nexperia_DFN-10_2.5x1mm_P0.5mm
export const Footprint_D4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-0.501mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1.25, "y": -0.5 }, { "x": -1.25, "y": 0.15 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.25, "y": -0.5 }, { "x": -1.25, "y": -0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.25, "y": 0.15 }, { "x": -0.9, "y": 0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9, "y": 0.5 }, { "x": 1.25, "y": 0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.25, "y": 0.5 }, { "x": 1.25, "y": -0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-0.016} pcbY={1.705} anchorAlignment="bottom_left" text="PUSB3F96X_PASS" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.8} height={1.45} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R26: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// U4: TPS65150_HTSSOP; antmicro-footprints:HTSSOP-24_W4.4mm_P0.65mm
export const Footprint_U4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.94mm" pcbY="-3.575mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.94mm" pcbY="-2.925mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.94mm" pcbY="-2.275mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.94mm" pcbY="-1.625mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.94mm" pcbY="-0.975mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.94mm" pcbY="-0.325mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.94mm" pcbY="0.325mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.94mm" pcbY="0.975mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.94mm" pcbY="1.625mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.94mm" pcbY="2.275mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.94mm" pcbY="2.925mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-2.94mm" pcbY="3.575mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.94mm" pcbY="3.575mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="2.94mm" pcbY="2.925mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2.94mm" pcbY="2.275mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.94mm" pcbY="1.625mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.94mm" pcbY="0.975mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.94mm" pcbY="0.325mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.94mm" pcbY="-0.325mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.94mm" pcbY="-0.975mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.94mm" pcbY="-1.625mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.94mm" pcbY="-2.275mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.94mm" pcbY="-2.925mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.94mm" pcbY="-3.575mm" layer="bottom" width="0.45mm" height="1.475mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="5.16mm" height="2.4mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.2, "y": -3.9 }, { "x": 2.2, "y": -3.9 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.2, "y": -3.9 }, { "x": 2.2, "y": 3.9 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.2, "y": -3.25 }, { "x": -1.55, "y": -3.9 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.2, "y": 3.9 }, { "x": -2.2, "y": -3.9 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.2, "y": 3.9 }, { "x": -2.2, "y": 3.9 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -3.92, "y": -4.2 }, { "x": 3.92, "y": -4.2 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.92, "y": -4.2 }, { "x": 3.92, "y": 4.2 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.92, "y": 4.2 }, { "x": -3.92, "y": -4.2 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.92, "y": 4.2 }, { "x": -3.92, "y": 4.2 }]} layer="bottom"/>
      </footprint>);
// R4: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={1.772047} anchorAlignment="bottom_right" text="R_100k_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R30: R_330k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C23: C_22u_25V_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.35} height={1.9} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// Q4: PJE138K; antmicro-footprints:SOT-523
export const Footprint_Q4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.652mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.802, "y": -0.276 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": -0.425 }, { "x": -0.802, "y": -0.276 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.424 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": -0.652, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": 0.8, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9144, "y": 0.9652 }, { "x": -0.918267, "y": 0.98464 }, { "x": -0.929279, "y": 1.001121 }, { "x": -0.94576, "y": 1.012133 }, { "x": -0.9652, "y": 1.016 }, { "x": -0.98464, "y": 1.012133 }, { "x": -1.001121, "y": 1.001121 }, { "x": -1.012133, "y": 0.98464 }, { "x": -1.016, "y": 0.9652 }, { "x": -1.012133, "y": 0.94576 }, { "x": -1.001121, "y": 0.929279 }, { "x": -0.98464, "y": 0.918267 }, { "x": -0.9652, "y": 0.9144 }, { "x": -0.94576, "y": 0.918267 }, { "x": -0.929279, "y": 0.929279 }, { "x": -0.918267, "y": 0.94576 }, { "x": -0.9144, "y": 0.9652 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.12, "y": 1.15 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": -1.12, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": 1.1, "y": -1.16 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.16 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C28: C_1u_25V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C18: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C17: C_220n_16V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// TP13: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={3.436727} pcbY={2.667787} anchorAlignment="bottom_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// R48: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R48 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R39: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R39 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C29: C_22u_25V_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.9} height={1.35} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R15: R_330k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// U2: NTS0104_DHVQFN; antmicro-footprints:DHVQFN-14-1EP_2.5x3mm
export const Footprint_U2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.25mm" pcbY="-1.5mm" layer="bottom" width="0.3mm" height="0.8mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin2"]} pcbX="-1.25mm" pcbY="-1mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="-0.5mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin4"]} pcbX="-1.25mm" pcbY="0mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin5"]} pcbX="-1.25mm" pcbY="0.494mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin6"]} pcbX="-1.25mm" pcbY="0.994mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin7"]} pcbX="-0.25mm" pcbY="1.499mm" layer="bottom" width="0.3mm" height="0.8mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin8"]} pcbX="0.244mm" pcbY="1.499mm" layer="bottom" width="0.3mm" height="0.8mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin9"]} pcbX="1.249mm" pcbY="0.994mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin10"]} pcbX="1.249mm" pcbY="0.494mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin11"]} pcbX="1.249mm" pcbY="0mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin12"]} pcbX="1.249mm" pcbY="-0.5mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin13"]} pcbX="1.249mm" pcbY="-1mm" layer="bottom" width="0.8mm" height="0.3mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin14"]} pcbX="0.244mm" pcbY="-1.5mm" layer="bottom" width="0.3mm" height="0.8mm" radius="0.15mm" ccwRotation={-180} shape="rotated_pill"/>
<smtpad portHints={["pin15"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="1mm" height="1.5mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 1.249, "y": -1.5 }, { "x": 1.249, "y": 1.499 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.249, "y": 1.499 }, { "x": -1.25, "y": 1.499 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -1.5 }, { "x": 1.249, "y": -1.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.25 }, { "x": -1, "y": -1.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.25, "y": 1.499 }, { "x": -1.25, "y": -1.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.469} pcbY={2.898} anchorAlignment="bottom_left" text="NTS0104_DHVQFN" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardrect pcbX={-0.025} pcbY={-0.025} width={3.65} height={3.95} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R13: R_590k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R50: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R50 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R37: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R37 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// D3: PUSB3F96X_PASS; antmicro-footprints:Nexperia_DFN-10_2.5x1mm_P0.5mm
export const Footprint_D3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.5mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1mm" pcbY="0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.5mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-0.501mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1mm" pcbY="-0.3875mm" layer="bottom" width="0.475mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1.25, "y": -0.5 }, { "x": -1.25, "y": 0.15 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.25, "y": -0.5 }, { "x": -1.25, "y": -0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.25, "y": 0.15 }, { "x": -0.9, "y": 0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9, "y": 0.5 }, { "x": 1.25, "y": 0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.25, "y": 0.5 }, { "x": 1.25, "y": -0.5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-0.016} pcbY={1.705} anchorAlignment="bottom_left" text="PUSB3F96X_PASS" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.8} height={1.45} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C38: C_22u_25V_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C38 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.35} height={1.9} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C35: C_330n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// D10: BAT54S-E3-08; antmicro-footprints:SOT-23-3
export const Footprint_D10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 1.75, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 0.85, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.45 }, { "x": 0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 1.65 }, { "x": -0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -1.6 }, { "x": 0.825, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -0.45 }, { "x": 1.75, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -1.75, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -0.85, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.65 }, { "x": -0.85, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": 0.825, "y": -1.6 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": -0.9, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -0.85, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.4 }, { "x": -1.75, "y": 0.5 }]} layer="bottom"/>
      </footprint>);
// TP21: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// D7: RB521S30T1G; antmicro-footprints:SOD-523
export const Footprint_D7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.701mm" pcbY="0mm" layer="bottom" cornerRadius="0.0625mm" width="0.5mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.699mm" pcbY="0mm" layer="bottom" cornerRadius="0.0625mm" width="0.5mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.65, "y": -0.425 }, { "x": 0.65, "y": 0.423 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.35, "y": -0.4 }, { "x": -0.35, "y": 0.4 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": -0.425 }, { "x": 0.65, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": 0.423 }, { "x": 0.65, "y": 0.423 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": 0.423 }, { "x": -0.652, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2} height={1.2} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R25: R_820k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// Q6: PJE138K; antmicro-footprints:SOT-523
export const Footprint_Q6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.652mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.802, "y": -0.276 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": -0.425 }, { "x": -0.802, "y": -0.276 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.424 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": -0.652, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": 0.8, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9144, "y": 0.9652 }, { "x": -0.918267, "y": 0.98464 }, { "x": -0.929279, "y": 1.001121 }, { "x": -0.94576, "y": 1.012133 }, { "x": -0.9652, "y": 1.016 }, { "x": -0.98464, "y": 1.012133 }, { "x": -1.001121, "y": 1.001121 }, { "x": -1.012133, "y": 0.98464 }, { "x": -1.016, "y": 0.9652 }, { "x": -1.012133, "y": 0.94576 }, { "x": -1.001121, "y": 0.929279 }, { "x": -0.98464, "y": 0.918267 }, { "x": -0.9652, "y": 0.9144 }, { "x": -0.94576, "y": 0.918267 }, { "x": -0.929279, "y": 0.929279 }, { "x": -0.918267, "y": 0.94576 }, { "x": -0.9144, "y": 0.9652 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.12, "y": 1.15 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": -1.12, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": 1.1, "y": -1.16 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.16 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C36: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C36 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// J2: JST_SUR_1x10_SM10B-SURS-TF-LF-SN; antmicro-footprints:Conn_JST_SUR_1x10_SM10B-SURS-TF-LF-SN
export const Footprint_J2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-3.6mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.8mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.2mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.4mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.4mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.2mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="2.8mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="3.6mm" pcbY="-1.1mm" layer="bottom" cornerRadius="0.0625mm" width="1mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-4.9mm" pcbY="0.85mm" layer="bottom" cornerRadius="0.15mm" width="1.7mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="4.9mm" pcbY="0.85mm" layer="bottom" cornerRadius="0.15mm" width="1.7mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>






<fabricationnotetext pcbX={0} pcbY={2.92} anchorAlignment="bottom_left" text="JST_SUR_1x10_SM10B-SURS-TF-LF-SN" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={2.7} height={10.2} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0.05} width={11.5} height={3.8} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// TP8: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// R34: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R34 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C22: C_330n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R14: R_120k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R24: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C26: C_1u_25V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R23: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// TP20: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// TP10: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// TP7: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// J3: FFC_Amphenol_1x40_62684-401100AHLF; antmicro-footprints:Conn_FFC_Amphenol_1x40_62684-401100AHLF
export const Footprint_J3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-9.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-9.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-8.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-8.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-7.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-7.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-6.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-6.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-5.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-4.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-4.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-1.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-1.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-0.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="0.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="1.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="1.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="2.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="2.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="3.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="3.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="4.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="4.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="5.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="5.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="6.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="6.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="7.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="7.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="8.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="8.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="9.25mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="9.75mm" pcbY="-2.55mm" layer="bottom" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} layer="bottom" shape="polygon" points={[{ "x": -10.65, "y": -1.035 }, { "x": -12.25, "y": -1.035 }, { "x": -12.25, "y": -0.235 }, { "x": -13.05, "y": -0.235 }, { "x": -13.05, "y": 1.365 }, { "x": -10.65, "y": 1.365 }]}/>
<smtpad portHints={["pin41"]} layer="bottom" shape="polygon" points={[{ "x": 10.65, "y": -1.035 }, { "x": 12.25, "y": -1.035 }, { "x": 12.25, "y": -0.235 }, { "x": 13.05, "y": -0.235 }, { "x": 13.05, "y": 1.365 }, { "x": 10.65, "y": 1.365 }]}/>








<fabricationnotepath route={[{ "x": 12.75, "y": -2.237 }, { "x": 12.75, "y": 2.7 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 12.75, "y": 2.713 }, { "x": -12.75, "y": 2.713 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -12.75, "y": -2.237 }, { "x": 12.75, "y": -2.237 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -12.75, "y": 2.7 }, { "x": -12.75, "y": -2.237 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={-0.15} width={26.6} height={6.5} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C40: C_1u_25V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C40 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C3: C_1u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// D6: BAT54S-E3-08; antmicro-footprints:SOT-23-3
export const Footprint_D6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.75, "y": 1.4 }, { "x": -1.75, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -0.85, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": -0.9, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": 0.825, "y": -1.6 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.65 }, { "x": -0.85, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -0.85, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -1.75, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -0.45 }, { "x": 1.75, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -1.6 }, { "x": 0.825, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 1.65 }, { "x": -0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.45 }, { "x": 0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 0.85, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 1.75, "y": 0.45 }]} layer="bottom"/>
      </footprint>);
// R12: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// TP23: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// C30: C_22u_25V_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.9} height={1.35} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// L1: L_3u3_2.5A_1008; antmicro-footprints:L_1008_2520Metric
export const Footprint_L1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.075mm" pcbY="0mm" layer="bottom" cornerRadius="0.0625mm" width="1.25mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.075mm" pcbY="0mm" layer="bottom" cornerRadius="0.0625mm" width="1.25mm" height="2.2mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.25, "y": 0.997 }, { "x": -1.25, "y": -0.8 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.25, "y": -0.8 }, { "x": -1.05, "y": -0.999 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.05, "y": -0.999 }, { "x": 1.249, "y": -0.999 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.249, "y": 0.997 }, { "x": -1.25, "y": 0.997 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.249, "y": -0.999 }, { "x": 1.249, "y": 0.997 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.5} anchorAlignment="bottom_left" text="L_3u3_2.5A_1008" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={2.5} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C33: C_22p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// TP4: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// Q7: SSM3J332R; antmicro-footprints:SOT-23-3
export const Footprint_Q7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 1.75, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 0.85, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.45 }, { "x": 0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 1.65 }, { "x": -0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -1.6 }, { "x": 0.825, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -0.45 }, { "x": 1.75, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -1.75, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -0.85, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.65 }, { "x": -0.85, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": 0.825, "y": -1.6 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": -0.9, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -0.85, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.4 }, { "x": -1.75, "y": 0.5 }]} layer="bottom"/>
      </footprint>);
// R6: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// U1: TLV70018_SC70; antmicro-footprints:SC-70-5
export const Footprint_U1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.756mm" pcbY="0.893mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.006mm" pcbY="0.893mm" layer="bottom" cornerRadius="0.05mm" width="0.4mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.743mm" pcbY="0.893mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.743mm" pcbY="-0.907mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.756mm" pcbY="-0.907mm" layer="bottom" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.006, "y": 0.293 }, { "x": -1.006, "y": -0.657 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.006, "y": 0.293 }, { "x": -0.706, "y": 0.593 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.657 }, { "x": 0.993, "y": -0.657 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.993, "y": 0.593 }, { "x": -0.706, "y": 0.593 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.993, "y": -0.657 }, { "x": 0.993, "y": 0.593 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={-0.005} width={2.5} height={2.61} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// U5: MPQ7235GQBE; antmicro-footprints:QFN-13_2.5x3mm
export const Footprint_U5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.901mm" pcbY="-0.3mm" layer="bottom" cornerRadius="0.025mm" width="0.2mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.901mm" pcbY="0.299mm" layer="bottom" cornerRadius="0.025mm" width="0.2mm" height="1.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.975mm" pcbY="1.449mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.326mm" pcbY="1.449mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.325mm" pcbY="1.449mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.974mm" pcbY="1.449mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.1mm" pcbY="0.599mm" layer="bottom" cornerRadius="0.025mm" width="0.2mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.025mm" width="0.2mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.1mm" pcbY="-0.6mm" layer="bottom" cornerRadius="0.025mm" width="0.2mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.974mm" pcbY="-1.45mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.325mm" pcbY="-1.45mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.326mm" pcbY="-1.45mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.975mm" pcbY="-1.45mm" layer="bottom" cornerRadius="0.03125mm" width="0.7mm" height="0.25mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.3, "y": 1.55 }, { "x": 1.3, "y": -1.551 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.301, "y": 1.55 }, { "x": 1.3, "y": 1.55 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.301, "y": -0.7 }, { "x": -1.301, "y": 1.55 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.3, "y": -1.551 }, { "x": -0.451, "y": -1.551 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.451, "y": -1.551 }, { "x": -1.301, "y": -0.7 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.299} pcbY={5.4} anchorAlignment="bottom_left" text="MPQ7235GQBE" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={3.8} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C4: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// U3: SN65DSI84; antmicro-footprints:HTQFP-64_10x10mm_P0.5mm
export const Footprint_U3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-5.74mm" pcbY="-3.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-5.74mm" pcbY="-3.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-5.74mm" pcbY="-2.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-5.74mm" pcbY="-2.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-5.74mm" pcbY="-1.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-5.74mm" pcbY="-1.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-5.74mm" pcbY="-0.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-5.74mm" pcbY="-0.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-5.74mm" pcbY="0.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.74mm" pcbY="0.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-5.74mm" pcbY="1.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-5.74mm" pcbY="1.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-5.74mm" pcbY="2.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-5.74mm" pcbY="2.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.74mm" pcbY="3.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.74mm" pcbY="3.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-3.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-2.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-2.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-1.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-1.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-0.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="0.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="0.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="1.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="2.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.25mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.75mm" pcbY="5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="5.74mm" pcbY="3.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="5.74mm" pcbY="3.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="5.74mm" pcbY="2.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="5.74mm" pcbY="2.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="5.74mm" pcbY="1.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="5.74mm" pcbY="1.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="5.74mm" pcbY="0.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="5.74mm" pcbY="0.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="5.74mm" pcbY="-0.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="5.74mm" pcbY="-0.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="5.74mm" pcbY="-1.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="5.74mm" pcbY="-1.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="5.74mm" pcbY="-2.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="5.74mm" pcbY="-2.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="5.74mm" pcbY="-3.25mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="5.74mm" pcbY="-3.75mm" layer="bottom" width="1.475mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="3.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="3.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="2.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="2.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="1.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="1.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="0.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="0.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="-0.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="-0.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin59"]} pcbX="-1.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin60"]} pcbX="-1.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin61"]} pcbX="-2.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin62"]} pcbX="-2.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin63"]} pcbX="-3.25mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin64"]} pcbX="-3.75mm" pcbY="-5.74mm" layer="bottom" width="0.3mm" height="1.475mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin65"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="8mm" height="8mm" ccwRotation={-180} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 5, "y": -5 }, { "x": 5, "y": 5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5, "y": 5 }, { "x": -5, "y": 5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.5, "y": -5 }, { "x": 5, "y": -5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5, "y": -4.5 }, { "x": -4.5, "y": -5 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5, "y": 5 }, { "x": -5, "y": -4.5 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": 6.72, "y": -6.72 }, { "x": 6.72, "y": 6.72 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.72, "y": 6.72 }, { "x": -6.72, "y": 6.72 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.72, "y": -6.72 }, { "x": 6.72, "y": -6.72 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.72, "y": 6.72 }, { "x": -6.72, "y": -6.72 }]} layer="bottom"/>
      </footprint>);
// C5: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// TP15: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// C31: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C31 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C32: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C32 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// TP17: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// TP12: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={6.577} pcbY={3.611742} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// C25: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// Q8: PJE138K; antmicro-footprints:SOT-523
export const Footprint_Q8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.652mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.802, "y": -0.276 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": -0.425 }, { "x": -0.802, "y": -0.276 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.424 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": -0.652, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": 0.8, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9144, "y": 0.9652 }, { "x": -0.918267, "y": 0.98464 }, { "x": -0.929279, "y": 1.001121 }, { "x": -0.94576, "y": 1.012133 }, { "x": -0.9652, "y": 1.016 }, { "x": -0.98464, "y": 1.012133 }, { "x": -1.001121, "y": 1.001121 }, { "x": -1.012133, "y": 0.98464 }, { "x": -1.016, "y": 0.9652 }, { "x": -1.012133, "y": 0.94576 }, { "x": -1.001121, "y": 0.929279 }, { "x": -0.98464, "y": 0.918267 }, { "x": -0.9652, "y": 0.9144 }, { "x": -0.94576, "y": 0.918267 }, { "x": -0.929279, "y": 0.929279 }, { "x": -0.918267, "y": 0.94576 }, { "x": -0.9144, "y": 0.9652 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.1} pcbY={1.824} anchorAlignment="bottom_right" text="PJE138K" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.12, "y": 1.15 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": -1.12, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": 1.1, "y": -1.16 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.16 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// R17: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R29: R_20R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R5: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={1.772047} anchorAlignment="bottom_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C2: C_1u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// TP14: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// TP22: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_right" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// Q3: SSM3J332R; antmicro-footprints:SOT-23-3
export const Footprint_Q3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="0.6mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="0.6mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="0.6mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": 0.825, "y": -1.6 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": -0.9, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -1.6 }, { "x": 0.825, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -1.75, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -0.45 }, { "x": 1.75, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 1.75, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.45 }, { "x": 0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 0.85, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -0.85, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -0.85, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.4 }, { "x": -1.75, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.65 }, { "x": -0.85, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 1.65 }, { "x": -0.85, "y": 1.65 }]} layer="bottom"/>
      </footprint>);
// R7: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C46: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C46 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R31: R_1R2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R31 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C24: C_22p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C39: C_1u_25V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C39 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R36: R_110k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R36 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R35: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C20: C_2n2_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// Q2: PJE138K; antmicro-footprints:SOT-523
export const Footprint_Q2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.65mm" layer="bottom" width="0.51mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="0.65mm" layer="bottom" width="0.51mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.652mm" layer="bottom" width="0.51mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -0.652, "y": -0.425 }, { "x": -0.802, "y": -0.276 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": -0.652, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": 0.8, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.802, "y": -0.276 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.424 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9652, "y": 1.016 }, { "x": -0.98464, "y": 1.012133 }, { "x": -1.001121, "y": 1.001121 }, { "x": -1.012133, "y": 0.98464 }, { "x": -1.016, "y": 0.9652 }, { "x": -1.012133, "y": 0.94576 }, { "x": -1.001121, "y": 0.929279 }, { "x": -0.98464, "y": 0.918267 }, { "x": -0.9652, "y": 0.9144 }, { "x": -0.94576, "y": 0.918267 }, { "x": -0.929279, "y": 0.929279 }, { "x": -0.918267, "y": 0.94576 }, { "x": -0.9144, "y": 0.9652 }, { "x": -0.918267, "y": 0.98464 }, { "x": -0.929279, "y": 1.001121 }, { "x": -0.94576, "y": 1.012133 }, { "x": -0.9652, "y": 1.016 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": 1.1, "y": -1.16 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": -1.12, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.16 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.15 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C27: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C43: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C43 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// L2: L_10u_0.5A_Murata-8200; antmicro-footprints:L_Murata-8200
export const Footprint_L2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.145mm" pcbY="0mm" layer="bottom" cornerRadius="0.076mm" width="3.05mm" height="1.52mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.145mm" pcbY="0mm" layer="bottom" cornerRadius="0.076mm" width="3.05mm" height="1.52mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={2.5} height={3.2} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={4.32} height={3.56} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C16: C_330n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// Q1: PJE138K; antmicro-footprints:SOT-523
export const Footprint_Q1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="0.65mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="-0.652mm" layer="bottom" width="0.4mm" height="0.51mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -0.802, "y": -0.276 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.652, "y": -0.425 }, { "x": -0.802, "y": -0.276 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.424 }, { "x": -0.802, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": -0.652, "y": -0.425 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.425 }, { "x": 0.8, "y": 0.424 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.9144, "y": 0.9652 }, { "x": -0.918267, "y": 0.98464 }, { "x": -0.929279, "y": 1.001121 }, { "x": -0.94576, "y": 1.012133 }, { "x": -0.9652, "y": 1.016 }, { "x": -0.98464, "y": 1.012133 }, { "x": -1.001121, "y": 1.001121 }, { "x": -1.012133, "y": 0.98464 }, { "x": -1.016, "y": 0.9652 }, { "x": -1.012133, "y": 0.94576 }, { "x": -1.001121, "y": 0.929279 }, { "x": -0.98464, "y": 0.918267 }, { "x": -0.9652, "y": 0.9144 }, { "x": -0.94576, "y": 0.918267 }, { "x": -0.929279, "y": 0.929279 }, { "x": -0.918267, "y": 0.94576 }, { "x": -0.9144, "y": 0.9652 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.12, "y": 1.15 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": -1.12, "y": 1.15 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.16 }, { "x": 1.1, "y": -1.16 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.1, "y": -1.16 }, { "x": 1.1, "y": 1.15 }]} layer="bottom"/>
      </footprint>);
// C34: C_330n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C34 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// TP6: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="bottom"/>
      </footprint>);
// Q5: SSM3J332R; antmicro-footprints:SOT-23-3
export const Footprint_Q5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="0.6mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="0.6mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="0.6mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardoutline outline={[{ "x": 0.85, "y": 1.65 }, { "x": -0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.65 }, { "x": -0.85, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.4 }, { "x": -1.75, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -0.85, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -0.85, "y": 0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 0.85, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.45 }, { "x": 0.85, "y": 1.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 1.75, "y": 0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -0.45 }, { "x": 1.75, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -1.75, "y": -0.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.825, "y": -1.6 }, { "x": 0.825, "y": -0.45 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": -0.9, "y": -1.4 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.6 }, { "x": 0.825, "y": -1.6 }]} layer="bottom"/>
      </footprint>);
// R16: R_49k9_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C14: C_1u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C41: C_22u_25V_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C41 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="bottom" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>


<fabricationnoterect pcbX={0} pcbY={0} width={1.9} height={1.35} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
