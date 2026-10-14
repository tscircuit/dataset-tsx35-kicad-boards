// Antmicro GMSL serializer
// Source: https://github.com/antmicro/gmsl-serializer
// Commit: 58641df7b331050bbb4456cb4cb73e3975ae9de9; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// R31: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C3: C_220n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_220n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R14: R_0R_22.4A_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_right" text="R_0R_22.4A_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U6: MAX96717GTJ_VY+; antmicro-footprints:TQFN-32-1EP_5x5mm_P0.5mm
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.4mm" pcbY="1.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="1.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.4mm" pcbY="0.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.4mm" pcbY="0.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.4mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.4mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.4mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.4mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.75mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.25mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.75mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.25mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.25mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.75mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.25mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1.75mm" pcbY="-2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.4mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.4mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.4mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.4mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.4mm" pcbY="0.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.4mm" pcbY="0.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.4mm" pcbY="1.25mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.4mm" pcbY="1.75mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.75mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.25mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.75mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.25mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.25mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.75mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.25mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.75mm" pcbY="2.4mm" layer="top" cornerRadius="0.03175mm" width="0.254mm" height="0.8128mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.15mm" height="3.15mm" ccwRotation={0} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": 2.502, "y": 2.502 }, { "x": 2.502, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 2.502 }, { "x": -2.502, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.902 }, { "x": 2.502, "y": 1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.902 }, { "x": 2.502, "y": 1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": 2.502 }, { "x": 1.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": 2.502 }, { "x": 1.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.598 }, { "x": 2.502, "y": 1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.598 }, { "x": 2.502, "y": 1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.598, "y": 2.502 }, { "x": 1.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.598, "y": 2.502 }, { "x": 1.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.402 }, { "x": 2.502, "y": 1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.402 }, { "x": 2.502, "y": 1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": 2.502 }, { "x": 1.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": 2.502 }, { "x": 1.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.098 }, { "x": 2.502, "y": 1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 1.098 }, { "x": 2.502, "y": 1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.098, "y": 2.502 }, { "x": 1.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.098, "y": 2.502 }, { "x": 1.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.902 }, { "x": 2.502, "y": 0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.902 }, { "x": 2.502, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": 2.502 }, { "x": 0.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": 2.502 }, { "x": 0.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.598 }, { "x": 2.502, "y": 0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.598 }, { "x": 2.502, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.598, "y": 2.502 }, { "x": 0.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.598, "y": 2.502 }, { "x": 0.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.402 }, { "x": 2.502, "y": 0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.402 }, { "x": 2.502, "y": 0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": 2.502 }, { "x": 0.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": 2.502 }, { "x": 0.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.098 }, { "x": 2.502, "y": 0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": 0.098 }, { "x": 2.502, "y": 0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.098, "y": 2.502 }, { "x": 0.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.098, "y": 2.502 }, { "x": 0.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.098 }, { "x": 2.502, "y": -0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.098 }, { "x": 2.502, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.098, "y": 2.502 }, { "x": -0.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.098, "y": 2.502 }, { "x": -0.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.402 }, { "x": 2.502, "y": -0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.402 }, { "x": 2.502, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.402, "y": 2.502 }, { "x": -0.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.402, "y": 2.502 }, { "x": -0.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.598 }, { "x": 2.502, "y": -0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.598 }, { "x": 2.502, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": 2.502 }, { "x": -0.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": 2.502 }, { "x": -0.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.902 }, { "x": 2.502, "y": -0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -0.902 }, { "x": 2.502, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.902, "y": 2.502 }, { "x": -0.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.902, "y": 2.502 }, { "x": -0.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.098 }, { "x": 2.502, "y": -1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.098 }, { "x": 2.502, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.098, "y": 2.502 }, { "x": -1.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.098, "y": 2.502 }, { "x": -1.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.402 }, { "x": 2.502, "y": -1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.402 }, { "x": 2.502, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.402, "y": 2.502 }, { "x": -1.098, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.402, "y": 2.502 }, { "x": -1.402, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.598 }, { "x": 2.502, "y": -1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.598 }, { "x": 2.502, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.598, "y": 2.502 }, { "x": -1.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.598, "y": 2.502 }, { "x": -1.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.902 }, { "x": 2.502, "y": -1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -1.902 }, { "x": 2.502, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.902, "y": 2.502 }, { "x": -1.598, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.902, "y": 2.502 }, { "x": -1.902, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -2.502 }, { "x": 2.502, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.502, "y": -2.502 }, { "x": 2.502, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 2.502 }, { "x": -2.502, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 2.502 }, { "x": -2.502, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": -2.502 }, { "x": 1.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": -2.502 }, { "x": 1.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.902 }, { "x": -2.502, "y": 1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.902 }, { "x": -2.502, "y": 1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.598, "y": -2.502 }, { "x": 1.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.598, "y": -2.502 }, { "x": 1.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.598 }, { "x": -2.502, "y": 1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.598 }, { "x": -2.502, "y": 1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": -2.502 }, { "x": 1.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": -2.502 }, { "x": 1.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.402 }, { "x": -2.502, "y": 1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.402 }, { "x": -2.502, "y": 1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.232 }, { "x": -1.232, "y": 2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.098, "y": -2.502 }, { "x": 1.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.098, "y": -2.502 }, { "x": 1.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.098 }, { "x": -2.502, "y": 1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 1.098 }, { "x": -2.502, "y": 1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": -2.502 }, { "x": 0.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": -2.502 }, { "x": 0.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.902 }, { "x": -2.502, "y": 0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.902 }, { "x": -2.502, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.598, "y": -2.502 }, { "x": 0.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.598, "y": -2.502 }, { "x": 0.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.598 }, { "x": -2.502, "y": 0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.598 }, { "x": -2.502, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": -2.502 }, { "x": 0.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": -2.502 }, { "x": 0.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.402 }, { "x": -2.502, "y": 0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.402 }, { "x": -2.502, "y": 0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.098, "y": -2.502 }, { "x": 0.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.098, "y": -2.502 }, { "x": 0.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.098 }, { "x": -2.502, "y": 0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": 0.098 }, { "x": -2.502, "y": 0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.098, "y": -2.502 }, { "x": -0.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.098, "y": -2.502 }, { "x": -0.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.098 }, { "x": -2.502, "y": -0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.098 }, { "x": -2.502, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.402, "y": -2.502 }, { "x": -0.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.402, "y": -2.502 }, { "x": -0.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.402 }, { "x": -2.502, "y": -0.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.402 }, { "x": -2.502, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": -2.502 }, { "x": -0.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": -2.502 }, { "x": -0.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.598 }, { "x": -2.502, "y": -0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.598 }, { "x": -2.502, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.902, "y": -2.502 }, { "x": -0.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.902, "y": -2.502 }, { "x": -0.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.902 }, { "x": -2.502, "y": -0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -0.902 }, { "x": -2.502, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.098, "y": -2.502 }, { "x": -1.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.098, "y": -2.502 }, { "x": -1.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.098 }, { "x": -2.502, "y": -1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.098 }, { "x": -2.502, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.402, "y": -2.502 }, { "x": -1.098, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.402, "y": -2.502 }, { "x": -1.402, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.402 }, { "x": -2.502, "y": -1.098 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.402 }, { "x": -2.502, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.598, "y": -2.502 }, { "x": -1.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.598, "y": -2.502 }, { "x": -1.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.598 }, { "x": -2.502, "y": -1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.598 }, { "x": -2.502, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.902, "y": -2.502 }, { "x": -1.598, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.902, "y": -2.502 }, { "x": -1.902, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.902 }, { "x": -2.502, "y": -1.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -1.902 }, { "x": -2.502, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -2.502 }, { "x": 2.502, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.502, "y": -2.502 }, { "x": -2.502, "y": -2.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.735355, "y": 2.014645 }, { "x": -2.719134, "y": 2.003806 }, { "x": -2.7, "y": 2 }, { "x": -2.680866, "y": 2.003806 }, { "x": -2.664645, "y": 2.014645 }, { "x": -2.653806, "y": 2.030866 }, { "x": -2.65, "y": 2.05 }, { "x": -2.653806, "y": 2.069134 }, { "x": -2.664645, "y": 2.085355 }, { "x": -2.680866, "y": 2.096194 }, { "x": -2.7, "y": 2.1 }, { "x": -2.719134, "y": 2.096194 }, { "x": -2.735355, "y": 2.085355 }, { "x": -2.746194, "y": 2.069134 }, { "x": -2.75, "y": 2.05 }, { "x": -2.746194, "y": 2.030866 }, { "x": -2.735355, "y": 2.014645 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-3.05} pcbY={-4} anchorAlignment="bottom_left" text="MAX96717GTJ_VY+" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -2.88, "y": 2.92 }, { "x": 2.88, "y": 2.92 }, { "x": 2.88, "y": -2.9 }, { "x": -2.88, "y": -2.9 }]} layer="top"/>
      </footprint>);
// TP9: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// TP7: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// D5: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_right" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R44: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R33: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R41: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C14: C_1u_16V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_1u_16V_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C10: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C7: C_22u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_22u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R37: R_31k6_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_31k6_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R20: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R7: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R1: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C19: C_10u_25V_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_10u_25V_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// D11: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="top_right" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// TP5: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// R6: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_4k7_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C12: C_1u_16V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_16V_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R35: R_470R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// Y1: Resonator_25MHz_ABM8G; antmicro-footprints:Resonator_SMD_Abracon_ABM8G_3.2x2.5mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -1.751, "y": -0.399 }, { "x": -0.451, "y": -0.399 }, { "x": -0.451, "y": -1.499 }, { "x": -1.531, "y": -1.499 }, { "x": -1.751, "y": -1.279 }]}/>
<smtpad portHints={["pin2"]} pcbX="1.199mm" pcbY="-0.949mm" layer="top" width="1.3mm" height="1.1mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.199mm" pcbY="0.85mm" layer="top" width="1.3mm" height="1.1mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.101mm" pcbY="0.85mm" layer="top" width="1.3mm" height="1.1mm" ccwRotation={0} shape="rotated_rect"/>





<fabricationnotetext pcbX={-1.75} pcbY={-2.548} anchorAlignment="bottom_left" text="Resonator_25MHz_ABM8G" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -1.907, "y": 1.55 }, { "x": 2.006, "y": 1.55 }, { "x": 2.006, "y": -1.649 }, { "x": -1.907001, "y": -1.649 }]} layer="top"/>
      </footprint>);
// C11: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R19: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R28: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U4: REF3012AIDBZT; antmicro-footprints:SOT-23-3
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.951mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="-0.949mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.0005mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 0.688, "y": -1.519 }, { "x": 0.688, "y": 1.52 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": 0.688, "y": 1.526 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": -0.712, "y": 1.325 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.519 }, { "x": 0.688, "y": -1.519 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.712, "y": 1.325 }, { "x": -0.712, "y": -1.523 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.9} pcbY={-2.7} anchorAlignment="bottom_right" text="REF3012AIDBZT" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 0.85, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 1.75, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -1.65 }, { "x": -0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.45 }, { "x": 0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 0.45 }, { "x": 1.75, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 1.6 }, { "x": 0.825, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.65 }, { "x": -0.85, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -0.85, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -1.75, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": 0.825, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": -0.9, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.4 }, { "x": -1.75, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -0.85, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
      </footprint>);
// R39: R_470R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R29: R_51R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_right" text="R_51R_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D9: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_right" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J1: Conn_FFC_WE_68715014022; antmicro-footprints:Conn_FFC_WE_68715014x22
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-12.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-11.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-11.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-10.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-10.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-9.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-9.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-8.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-6.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-6.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-5.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-4.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-4.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-3.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-2.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-2.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-1.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-1.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-0.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="0.248mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.748mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="1.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="2.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="4.248mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="4.748mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="5.248mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="5.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="6.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="6.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="7.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="7.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="8.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="8.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="9.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="9.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="10.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="10.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="11.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="11.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="12.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="1.2mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-14.198mm" pcbY="0.3mm" layer="top" cornerRadius="0.0675mm" width="3mm" height="2.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="14.198mm" pcbY="0.3mm" layer="top" cornerRadius="0.0675mm" width="3mm" height="2.7mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="bottom_right" text="Conn_FFC_WE_68715014022" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={-0.15} width={32.4} height={6.8} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C18: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_10u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C8: C_22u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_22u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R17: R_5k1_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_5k1_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C2: C_10u_25V_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_10u_25V_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C34: C_22u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_22u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C6: C_22u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_22u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R46: R_200R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_200R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// L3: L_22u_1.12A_Coilcraft-MSS6132T; antmicro-footprints:L_Coilcraft-MSS6132T
export const Footprint_L3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -1, "y": 2.4 }, { "x": -1.5, "y": 2.117646 }, { "x": -1.75, "y": 1.9 }, { "x": -2, "y": 1.65 }, { "x": -2.3, "y": 1.2 }, { "x": -2.6, "y": 0.4 }, { "x": -2.7, "y": 0.4 }, { "x": -2.71, "y": 2.9 }, { "x": -1, "y": 2.9 }]}/>
<smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -0.978872, "y": -2.4 }, { "x": -1.478872, "y": -2.117646 }, { "x": -1.728872, "y": -1.9 }, { "x": -1.978872, "y": -1.65 }, { "x": -2.278872, "y": -1.2 }, { "x": -2.578872, "y": -0.4 }, { "x": -2.678872, "y": -0.4 }, { "x": -2.688872, "y": -2.9 }, { "x": -0.978872, "y": -2.9 }]}/>
<smtpad portHints={["pin1"]} pcbX="-2.71mm" pcbY="0mm" layer="top" width="6mm" height="0.575mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} layer="top" shape="polygon" points={[{ "x": 0.978872, "y": 2.4 }, { "x": 1.478872, "y": 2.117646 }, { "x": 1.728872, "y": 1.9 }, { "x": 1.978872, "y": 1.65 }, { "x": 2.278872, "y": 1.2 }, { "x": 2.578872, "y": 0.4 }, { "x": 2.678872, "y": 0.4 }, { "x": 2.688872, "y": 2.9 }, { "x": 0.978872, "y": 2.9 }]}/>
<smtpad portHints={["pin2"]} layer="top" shape="polygon" points={[{ "x": 1, "y": -2.4 }, { "x": 1.5, "y": -2.117646 }, { "x": 1.75, "y": -1.9 }, { "x": 2, "y": -1.65 }, { "x": 2.3, "y": -1.2 }, { "x": 2.6, "y": -0.4 }, { "x": 2.7, "y": -0.4 }, { "x": 2.71, "y": -2.9 }, { "x": 1, "y": -2.9 }]}/>
<smtpad portHints={["pin2"]} pcbX="2.71mm" pcbY="0mm" layer="top" width="6mm" height="0.575mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={-0.508} pcbY={-4.826} anchorAlignment="bottom_left" text="L_22u_1.12A_Coilcraft-MSS6132T" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={6.2} height={6.2} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={6.7} height={6.7} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C32: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C4: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R25: R_100R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D2: AXGD10402KR; antmicro-footprints:D_0402_1005Metric
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.51, "y": -0.255 }, { "x": -0.51, "y": 0.255 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.51, "y": 0.255 }, { "x": 0.51, "y": 0.255 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.2, "y": 0.25 }, { "x": -0.5, "y": -0.05 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.51, "y": -0.255 }, { "x": -0.51, "y": -0.255 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.51, "y": 0.255 }, { "x": 0.51, "y": -0.255 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-2.54} pcbY={-2.54} anchorAlignment="bottom_left" text="AXGD10402KR" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R3: R_100R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C15: C_1u_16V_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_16V_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP8: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// U5: TLV73312PDBVT; antmicro-footprints:SOT-23-5
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.351mm" pcbY="0.951mm" layer="top" width="1mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.351mm" pcbY="0mm" layer="top" width="1mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.351mm" pcbY="-0.949mm" layer="top" width="1mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.35mm" pcbY="-0.949mm" layer="top" width="1mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.35mm" pcbY="0.951mm" layer="top" width="1mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -0.398, "y": 1.526 }, { "x": -0.874, "y": 1.05 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.002} pcbY={-2.799} anchorAlignment="bottom_right" text="TLV73312PDBVT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.0005} pcbY={0.001} width={1.747} height={3.048} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0.005} width={3.8} height={3.51} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C22: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D4: PESD4USB5U-TTS; antmicro-footprints:DFN-10_2.5x1mm
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.425mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.425mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.425mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.425mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.425mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.425mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.425mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.425mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0.425mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="0.425mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.9 }, { "x": -0.5, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.15, "y": 1.25 }, { "x": -0.5, "y": 0.9 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": -0.15, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1.25 }, { "x": 0.5, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={2.032} pcbY={-1.524} anchorAlignment="bottom_left" text="PESD4USB5U-TTS" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.7} height={3.2} layer="top" pcbRotation="0deg"/>
      </footprint>);
// MP4: MP_Pad6mm_Drill3mm; antmicro-footprints:MP_Pad6mm_Drill3mm
export const Footprint_MP4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.9} anchorAlignment="bottom_left" text="MP_Pad6mm_Drill3mm" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// TP1: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// R34: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D1: PESD4USB5U-TTS; antmicro-footprints:DFN-10_2.5x1mm
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.425mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.425mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.425mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.425mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.425mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.425mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.425mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.425mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0.425mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="0.425mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.9 }, { "x": -0.5, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.15, "y": 1.25 }, { "x": -0.5, "y": 0.9 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": -0.15, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1.25 }, { "x": 0.5, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={2.032} pcbY={-1.524} anchorAlignment="bottom_left" text="PESD4USB5U-TTS" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.7} height={3.2} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R8: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R32: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C5: C_22u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_22u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R12: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C31: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// U1: AP62301_TSOT; antmicro-footprints:TSOT23-6
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.301mm" pcbY="0.947mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.301mm" pcbY="-0.004mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.301mm" pcbY="-0.954mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.299mm" pcbY="-0.954mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.299mm" pcbY="-0.004mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.299mm" pcbY="0.947mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.45, "y": 1.521 }, { "x": -0.876, "y": 1.096 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.44} pcbY={-3.9} anchorAlignment="bottom_right" text="AP62301_TSOT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={-0.0015} width={1.75} height={3.053} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.86} height={3.4} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R40: R_1k65_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_1k65_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// L2: L_1u_2.6A_0806; antmicro-footprints:L_0806_2016Metric
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.001mm" layer="top" cornerRadius="0.075mm" width="1mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0.001mm" layer="top" cornerRadius="0.075mm" width="1mm" height="1.8mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="bottom_left" text="L_1u_2.6A_0806" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.0035} width={1.9} height={1.757} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.5} height={2.1} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U2: AP62301_TSOT; antmicro-footprints:TSOT23-6
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.301mm" pcbY="0.947mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.301mm" pcbY="-0.004mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.301mm" pcbY="-0.954mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.299mm" pcbY="-0.954mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.299mm" pcbY="-0.004mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.299mm" pcbY="0.947mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.45, "y": 1.521 }, { "x": -0.876, "y": 1.096 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.6} anchorAlignment="bottom_right" text="AP62301_TSOT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={-0.0015} width={1.75} height={3.053} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.86} height={3.4} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// MP1: MP_Pad6mm_Drill3mm; antmicro-footprints:MP_Pad6mm_Drill3mm
export const Footprint_MP1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.9} anchorAlignment="bottom_left" text="MP_Pad6mm_Drill3mm" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C33: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_10u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// L7: L_3u3_3.1A_Bourns-SRP3212A; antmicro-footprints:L_Bourns-SRP3212A
export const Footprint_L7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.175mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="1.35mm" height="2.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.175mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="1.35mm" height="2.8mm" shape="rect"/>


<fabricationnotetext pcbX={1.49} pcbY={-1.5} anchorAlignment="bottom_left" text="L_3u3_3.1A_Bourns-SRP3212A" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={3.218} height={2.52} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.2} height={3.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R38: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J2: Conn_FAKRA_59S2AQ-40MT5-Z_1; antmicro-footprints:Conn_FAKRA_59S2AQ-40MT5-Z_1
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin2"]} pcbX="-3mm" pcbY="-0.6mm" outerDiameter="1.8mm" holeDiameter="1.45mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-3mm" pcbY="-7.6mm" outerDiameter="1.8mm" holeDiameter="1.45mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="3mm" pcbY="-7.6mm" outerDiameter="1.8mm" holeDiameter="1.45mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="3mm" pcbY="-0.6mm" outerDiameter="1.8mm" holeDiameter="1.45mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.2375mm" width="1.9mm" height="3.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3mm" pcbY="-0.9mm" layer="top" cornerRadius="0.225mm" width="1.8mm" height="5.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3mm" pcbY="-8.1mm" layer="top" cornerRadius="0.225mm" width="1.8mm" height="5.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="3mm" pcbY="-8.1mm" layer="top" cornerRadius="0.225mm" width="1.8mm" height="5.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="3mm" pcbY="-0.9mm" layer="top" cornerRadius="0.225mm" width="1.8mm" height="5.2mm" shape="rect"/>




<fabricationnotetext pcbX={10.668} pcbY={-5.588} anchorAlignment="bottom_left" text="Conn_FAKRA_59S2AQ-40MT5-Z_1" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={1.57} width={10} height={24.86} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R4: R_100R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C17: C_33p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_33p_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R21: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP4: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// L6: L_470n_1A_Coilcraft-PFL1609; antmicro-footprints:L_Coilcraft-PFL1609
export const Footprint_L6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.635mm" pcbY="0mm" layer="top" cornerRadius="0.048mm" width="0.64mm" height="1.02mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.635mm" pcbY="0mm" layer="top" cornerRadius="0.048mm" width="0.64mm" height="1.02mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="bottom_right" text="L_470n_1A_Coilcraft-PFL1609" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.8} height={1.07} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.4} height={1.68} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP2: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// R27: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R2: R_12k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_12k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// L4: L_6u8_1A_Coilcraft-1210POC; antmicro-footprints:L_Coilcraft-1210POC
export const Footprint_L4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.27mm" pcbY="0mm" layer="top" width="0.65mm" height="2.65mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.27mm" pcbY="0mm" layer="top" width="0.65mm" height="2.65mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.65, "y": -1.335 }, { "x": 1.65, "y": 1.335 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.65, "y": -1.335 }, { "x": -1.65, "y": -1.335 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.65, "y": 1.335 }, { "x": -1.65, "y": 1.335 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.65, "y": -1.335 }, { "x": -1.65, "y": 1.335 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="bottom_right" text="L_6u8_1A_Coilcraft-1210POC" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3.8} height={3.17} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R11: R_12k4_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_12k4_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U3: AP62301_TSOT; antmicro-footprints:TSOT23-6
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.301mm" pcbY="0.947mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.301mm" pcbY="-0.004mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.301mm" pcbY="-0.954mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.299mm" pcbY="-0.954mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.299mm" pcbY="-0.004mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.299mm" pcbY="0.947mm" layer="top" width="1.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.45, "y": 1.521 }, { "x": -0.876, "y": 1.096 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.13} pcbY={-1.85} anchorAlignment="top_right" text="AP62301_TSOT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={-0.0015} width={1.75} height={3.053} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.86} height={3.4} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// L5: L_470n_1A_Coilcraft-PFL1609; antmicro-footprints:L_Coilcraft-PFL1609
export const Footprint_L5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.635mm" pcbY="0mm" layer="top" cornerRadius="0.048mm" width="0.64mm" height="1.02mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.635mm" pcbY="0mm" layer="top" cornerRadius="0.048mm" width="0.64mm" height="1.02mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="bottom_right" text="L_470n_1A_Coilcraft-PFL1609" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.8} height={1.07} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.4} height={1.68} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R15: R_470R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// MP3: MP_Pad6mm_Drill3mm; antmicro-footprints:MP_Pad6mm_Drill3mm
export const Footprint_MP3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.9} anchorAlignment="bottom_left" text="MP_Pad6mm_Drill3mm" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// Q1: DMG1012T-7; antmicro-footprints:SOT-523
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="-0.65mm" layer="top" width="0.51mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="-0.65mm" layer="top" width="0.51mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0.652mm" layer="top" width="0.51mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": 0.425 }, { "x": -0.652, "y": 0.425 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.425 }, { "x": 0.8, "y": -0.424 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.652, "y": 0.425 }, { "x": -0.802, "y": 0.276 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.802, "y": 0.276 }, { "x": -0.802, "y": -0.424 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.424 }, { "x": -0.802, "y": -0.424 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.9652, "y": -1.016 }, { "x": -0.94576, "y": -1.012133 }, { "x": -0.929279, "y": -1.001121 }, { "x": -0.918267, "y": -0.98464 }, { "x": -0.9144, "y": -0.9652 }, { "x": -0.918267, "y": -0.94576 }, { "x": -0.929279, "y": -0.929279 }, { "x": -0.94576, "y": -0.918267 }, { "x": -0.9652, "y": -0.9144 }, { "x": -0.98464, "y": -0.918267 }, { "x": -1.001121, "y": -0.929279 }, { "x": -1.012133, "y": -0.94576 }, { "x": -1.016, "y": -0.9652 }, { "x": -1.012133, "y": -0.98464 }, { "x": -1.001121, "y": -1.001121 }, { "x": -0.98464, "y": -1.012133 }, { "x": -0.9652, "y": -1.016 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.1} pcbY={-1.824} anchorAlignment="bottom_left" text="DMG1012T-7" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": 1.1, "y": 1.16 }, { "x": 1.1, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.16 }, { "x": 1.1, "y": 1.16 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.16 }, { "x": -1.12, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.15 }, { "x": 1.1, "y": -1.15 }]} layer="top"/>
      </footprint>);
// R22: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R9: R_52k3_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_52k3_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R18: R_80k6_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_80k6_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// N1: antmicro_logo; antmicro-footprints:antmicro-logo_scaled_12mm_mask
export const Footprint_N1 = () => (<footprint originalLayer="top">
        <courtyardrect pcbX={0.04} pcbY={0.02} width={14.604} height={6.544} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP3: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// C30: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R10: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R5: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_4k7_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R24: R_100R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R42: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R45: R_0R_22.4A_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="top_right" text="R_0R_22.4A_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C1: C_10u_25V_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_10u_25V_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// L1: L_3u3_3.1A_Bourns-SRP3212A; antmicro-footprints:L_Bourns-SRP3212A
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.175mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="1.35mm" height="2.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.175mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="1.35mm" height="2.8mm" shape="rect"/>


<fabricationnotetext pcbX={0.05} pcbY={-2.8} anchorAlignment="bottom_left" text="L_3u3_3.1A_Bourns-SRP3212A" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={3.218} height={2.52} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.2} height={3.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// Q3: DMG1012T-7; antmicro-footprints:SOT-523
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.5mm" pcbY="-0.65mm" layer="top" width="0.51mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.498mm" pcbY="-0.65mm" layer="top" width="0.51mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="0.652mm" layer="top" width="0.51mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": 0.425 }, { "x": -0.652, "y": 0.425 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.425 }, { "x": 0.8, "y": -0.424 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.652, "y": 0.425 }, { "x": -0.802, "y": 0.276 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.802, "y": 0.276 }, { "x": -0.802, "y": -0.424 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.424 }, { "x": -0.802, "y": -0.424 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.9652, "y": -1.016 }, { "x": -0.94576, "y": -1.012133 }, { "x": -0.929279, "y": -1.001121 }, { "x": -0.918267, "y": -0.98464 }, { "x": -0.9144, "y": -0.9652 }, { "x": -0.918267, "y": -0.94576 }, { "x": -0.929279, "y": -0.929279 }, { "x": -0.94576, "y": -0.918267 }, { "x": -0.9652, "y": -0.9144 }, { "x": -0.98464, "y": -0.918267 }, { "x": -1.001121, "y": -0.929279 }, { "x": -1.012133, "y": -0.94576 }, { "x": -1.016, "y": -0.9652 }, { "x": -1.012133, "y": -0.98464 }, { "x": -1.001121, "y": -1.001121 }, { "x": -0.98464, "y": -1.012133 }, { "x": -0.9652, "y": -1.016 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.1} pcbY={-1.824} anchorAlignment="bottom_left" text="DMG1012T-7" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": 1.1, "y": 1.16 }, { "x": 1.1, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.16 }, { "x": 1.1, "y": 1.16 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.16 }, { "x": -1.12, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.15 }, { "x": 1.1, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C20: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C21: C_220n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_220n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C29: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R26: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D3: PESD4USB5U-TTS; antmicro-footprints:DFN-10_2.5x1mm
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.425mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.425mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.425mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.425mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.425mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.425mm" pcbY="-1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.425mm" pcbY="-0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.425mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0.425mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="0.425mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 0.9 }, { "x": -0.5, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.15, "y": 1.25 }, { "x": -0.5, "y": 0.9 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": -0.15, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -1.25 }, { "x": 0.5, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={2.032} pcbY={-1.524} anchorAlignment="bottom_left" text="PESD4USB5U-TTS" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.7} height={3.2} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R13: R_0R_22.4A_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_right" text="R_0R_22.4A_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D8: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_right" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// MP2: MP_Pad6mm_Drill3mm; antmicro-footprints:MP_Pad6mm_Drill3mm
export const Footprint_MP2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.9} anchorAlignment="bottom_left" text="MP_Pad6mm_Drill3mm" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.25} layer="top"/>
      </footprint>);
// C35: C_22u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_22u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C16: C_33p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_right" text="C_33p_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R23: R_402R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={360} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_right" text="R_402R_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R30: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP6: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="top"/>
      </footprint>);
// D6: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_right" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R16: R_5k1_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_right" text="R_5k1_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C28: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-0.676445} pcbY={2.119857} anchorAlignment="bottom_right" text="C_10n_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }, { "x": -0.925, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C24: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-1.022927} pcbY={2.155213} anchorAlignment="bottom_right" text="C_100n_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }, { "x": -0.925, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C25: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-0.676445} pcbY={2.119857} anchorAlignment="bottom_right" text="C_10u_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }, { "x": -0.925, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C26: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-1.022927} pcbY={2.155213} anchorAlignment="bottom_right" text="C_10u_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }, { "x": -0.925, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C27: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-0.676445} pcbY={2.119857} anchorAlignment="bottom_right" text="C_10n_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }, { "x": -0.925, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C23: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={-1.022927} pcbY={2.155213} anchorAlignment="bottom_right" text="C_10n_0402" font="tscircuit2024" fontSize={0.7} layer="bottom"/>

<courtyardoutline outline={[{ "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }, { "x": -0.925, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
