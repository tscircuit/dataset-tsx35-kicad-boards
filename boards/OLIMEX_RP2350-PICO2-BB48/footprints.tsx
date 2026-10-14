// RP2350-PICO2-BB48
// Source: https://github.com/OLIMEX/RP2350-PICO2-BB48
// Commit: 74b030363ca03eea5bfa6dac59cbcd9e4277e910; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// FID1: Fiducial; OLIMEX_Other-FP:Fiducial1x3_Paste
export const Footprint_FID1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
      </footprint>);
// LED1: LED/GREEN/0603; OLIMEX_LEDs-FP:LED_0603_KA
export const Footprint_LED1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.762mm" pcbY="0mm" layer="top" width="0.8mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.762mm" pcbY="0mm" layer="top" width="0.8mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>

















<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="LED/GREEN/0603" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// FID3: Fiducial; OLIMEX_Other-FP:Fiducial1x3
export const Footprint_FID3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
      </footprint>);
// FID2: Fiducial; OLIMEX_Other-FP:Fiducial1x3
export const Footprint_FID2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
      </footprint>);
// D1: 1N5822/SS34/SMA; OLIMEX_Diodes-FP:SMA-KA
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.5mm" pcbY="0mm" layer="top" width="1.7mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-2.373mm" pcbY="0mm" layer="top" width="1.192mm" height="1.746mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.373mm" pcbY="0mm" layer="top" width="1.192mm" height="1.746mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.5mm" pcbY="0mm" layer="top" width="1.7mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotepath route={[{ "x": -2.5, "y": 1.35 }, { "x": 2.5, "y": 1.35 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -1.35 }, { "x": -2.5, "y": 1.35 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.5, "y": 1.35 }, { "x": 2.5, "y": -1.35 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -1.35 }, { "x": -2.5, "y": -1.35 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="1N5822/SS34/SMA" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R18: 2.2k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="2.2k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R17: 2.2k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="2.2k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// RST1: YTS-A016-X; OLIMEX_Buttons-FP:YTS-A016-X
export const Footprint_RST1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.075mm" pcbY="1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="2.075mm" pcbY="1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.075mm" pcbY="-1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.075mm" pcbY="-1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -2.1, "y": 1.7 }, { "x": 2.1, "y": 1.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": -2.1, "y": -1.7 }, { "x": -2.1, "y": 1.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 2.1, "y": 1.7 }, { "x": 2.1, "y": -1.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 2.1, "y": -1.7 }, { "x": -2.1, "y": -1.7 }]} strokeWidth={0.12}/>

      </footprint>);
// R5: 5.1k/1%/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="5.1k/1%/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R12: 1M/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="1M/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// pUEXT1: SH1.0-10P-180D; OLIMEX_Connectors-FP:BM10B-SRSS-TB
export const Footprint_pUEXT1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin11"]} pcbX="-5.8mm" pcbY="0.35mm" layer="top" width="1.2mm" height="3.1mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="5.8mm" pcbY="0.35mm" layer="top" width="1.2mm" height="3.1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-4.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="1.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="3.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="4.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -6, "y": 1.8 }, { "x": 6, "y": 1.8 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -6, "y": -1.1 }, { "x": -6, "y": 1.8 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 6, "y": 1.8 }, { "x": 6, "y": -1.1 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 6, "y": -1.1 }, { "x": -6, "y": -1.1 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-0.1} pcbY={-4.8} anchorAlignment="center" text="SH1.0-10P-180D" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.592} anchorAlignment="center" text="Vertical mount" font="tscircuit2024" fontSize={0.889}/>


<courtyardoutline outline={[{ "x": -6.65, "y": 2.25 }, { "x": -6.65, "y": -2.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.65, "y": -2.45 }, { "x": 6.65, "y": -2.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.65, "y": 2.25 }, { "x": -6.65, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.65, "y": -2.45 }, { "x": 6.65, "y": 2.25 }]} layer="top"/>
      </footprint>);
// BOOT1: YTS-A016-X; OLIMEX_Buttons-FP:YTS-A016-X
export const Footprint_BOOT1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.075mm" pcbY="1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="2.075mm" pcbY="1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.075mm" pcbY="-1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.075mm" pcbY="-1.075mm" layer="top" width="0.65mm" height="1.05mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -2.1, "y": 1.7 }, { "x": 2.1, "y": 1.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": -2.1, "y": -1.7 }, { "x": -2.1, "y": 1.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 2.1, "y": 1.7 }, { "x": 2.1, "y": -1.7 }]} strokeWidth={0.12}/>
<fabricationnotepath route={[{ "x": 2.1, "y": -1.7 }, { "x": -2.1, "y": -1.7 }]} strokeWidth={0.12}/>

      </footprint>);
// R15: 2.2k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="2.2k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// USB-C1: USB-C-16P-F(A40-00119-A52-12); OLIMEX_Connectors-FP:USB2.0_TYPE-C(A40-00119-A52-12)_Paste
export const Footprint_USB_C1 = () => (<footprint originalLayer="top">
        <hole pcbX="-2.53mm" pcbY="2.89mm" diameter="0.6mm"/>
<hole pcbX="-2.53mm" pcbY="-2.89mm" diameter="0.6mm"/>
<platedhole portHints={["pin1"]} pcbX="-3.03mm" pcbY="4.32mm" outerHeight="2.2mm" outerWidth="1.2mm" holeHeight="1.7mm" holeWidth="0.8mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin1"]} pcbX="-3.03mm" pcbY="-4.32mm" outerHeight="2.2mm" outerWidth="1.2mm" holeHeight="1.7mm" holeWidth="0.8mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin1"]} pcbX="1.15mm" pcbY="4.32mm" outerHeight="2mm" outerWidth="1.3mm" holeHeight="1.4mm" holeWidth="0.8mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin1"]} pcbX="1.15mm" pcbY="-4.32mm" outerHeight="2mm" outerWidth="1.3mm" holeHeight="1.4mm" holeWidth="0.8mm" shape="pill" pcbRotation="90deg"/>
<smtpad portHints={["pin1"]} pcbX="-3.03mm" pcbY="4.9276mm" layer="top" width="1.1mm" height="2.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="-3.03mm" pcbY="-4.9276mm" layer="top" width="1.1mm" height="2.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="1.15mm" pcbY="4.9276mm" layer="top" width="1.1mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="1.15mm" pcbY="-4.9276mm" layer="top" width="1.1mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.932mm" pcbY="-3.325mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.932mm" pcbY="-2.525mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.932mm" pcbY="-1.25mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.932mm" pcbY="-0.25mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.932mm" pcbY="0.25mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.932mm" pcbY="1.25mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.932mm" pcbY="2.525mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.932mm" pcbY="3.325mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.932mm" pcbY="3.075mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.932mm" pcbY="2.275mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.932mm" pcbY="1.75mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.932mm" pcbY="0.75mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.932mm" pcbY="-0.75mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-3.932mm" pcbY="-1.75mm" layer="top" width="0.25mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-3.932mm" pcbY="-2.275mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-3.932mm" pcbY="-3.075mm" layer="top" width="0.3mm" height="1.15mm" ccwRotation={-90} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -3.75, "y": 4.47 }, { "x": 3.75, "y": 4.47 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3.75, "y": -4.47 }, { "x": -3.75, "y": 4.47 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.75, "y": 4.47 }, { "x": -3.75, "y": -4.47 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.75, "y": 4.47 }, { "x": 3.75, "y": -4.47 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.75, "y": -4.47 }, { "x": -3.75, "y": 4.47 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3.75, "y": -4.47 }, { "x": -3.75, "y": -4.47 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={5.715} pcbY={0} anchorAlignment="center" text="USB-C-16P-F(A40-00119-A52-12)" font="tscircuit2024" fontSize={1.27}/>

<courtyardoutline outline={[{ "x": -4.5, "y": 5 }, { "x": -4.5, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.5, "y": -5 }, { "x": 3.9, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": 5 }, { "x": -4.5, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": -5 }, { "x": 3.9, "y": 5 }]} layer="top"/>
      </footprint>);
// R13: 220k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="220k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C14: 4.7uF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="4.7uF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// SWD1: NA(NH1x3); OLIMEX_Connectors-FP:HN1x3
export const Footprint_SWD1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.778mm" rectPadHeight="1.778mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>






















<fabricationnotetext pcbX={-0.762} pcbY={2.286} anchorAlignment="center" text="NA(NH1x3)" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// L1: 3.3uH/2.0A/DCR=140mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-3R3MTS00); OLIMEX_RLC-FP:L_2016_MM
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" width="1.8mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" width="1.8mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.8 }, { "x": 1, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.8 }, { "x": -1, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="3.3uH/2.0A/DCR=140mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-3R3MTS00)" font="tscircuit2024" fontSize={1.27}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={2} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R2: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// Q1: Q12MHz/18pF/30ppm/4P/3.2x2.5mm(ABM8-12.000MHZ-D2Y-T); OLIMEX_Crystal-FP:TSX-3.2x2.5mm_GND(3)
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.8mm" layer="top" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0.8mm" layer="top" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1mm" pcbY="0.8mm" layer="top" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.8mm" layer="top" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="Q12MHz/18pF/30ppm/4P/3.2x2.5mm(ABM8-12.000MHZ-D2Y-T)" font="tscircuit2024" fontSize={1.27}/>


      </footprint>);
// C21: 27pF/50V/5%/C0G/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="27pF/50V/5%/C0G/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// FB1: PZ1005U601-R45TF/0.34OHM/0.45A; OLIMEX_RLC-FP:L_0402_5MIL_DWS
export const Footprint_FB1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="PZ1005U601-R45TF/0.34OHM/0.45A" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// Logo_OLIMEX_80: Logo_OLIMEX_80; OLIMEX_Signs-FP:Logo_OLIMEX_80
export const Footprint_Logo_OLIMEX_80 = () => (<footprint originalLayer="top">
        




      </footprint>);
// C22: 22uF/6.3V/20%/X5R/C0603; OLIMEX_RLC-FP:C_0603_5MIL_DWS
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.889mm" pcbY="0mm" layer="top" width="1.016mm" height="1.016mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.889mm" pcbY="0mm" layer="top" width="1.016mm" height="1.016mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.762, "y": 0.381 }, { "x": -0.762, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.762, "y": -0.381 }, { "x": 0.762, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0, "y": 0.381 }, { "x": -0.762, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.762, "y": 0.381 }, { "x": 0, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.762, "y": -0.381 }, { "x": 0.762, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.127} pcbY={-1.778} anchorAlignment="center" text="22uF/6.3V/20%/X5R/C0603" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C2: NA(100nF/10V/20%/X5R/C0402); OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="NA(100nF/10V/20%/X5R/C0402)" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// U3: RP2350B(QFN-80_10.00x10.00x0.90mm_P0.4mm); OLIMEX_IC-FP:QFN-80_10.00x10.00x0.90mm_P0.4mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin81"]} pcbX="-1.2mm" pcbY="1.2mm" outerDiameter="1mm" holeDiameter="0.6mm" shape="circle"/>
<platedhole portHints={["pin81"]} pcbX="-1.2mm" pcbY="-1.2mm" outerDiameter="1mm" holeDiameter="0.6mm" shape="circle"/>
<platedhole portHints={["pin81"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.8mm" holeDiameter="1.2mm" shape="circle"/>
<platedhole portHints={["pin81"]} pcbX="1.2mm" pcbY="1.2mm" outerDiameter="1mm" holeDiameter="0.6mm" shape="circle"/>
<platedhole portHints={["pin81"]} pcbX="1.27mm" pcbY="-1.2mm" outerDiameter="1mm" holeDiameter="0.6mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-3.8mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.4mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.6mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.2mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.8mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-1.4mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-1mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-0.6mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.2mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.2mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.6mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="1mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="1.4mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.8mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.2mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.6mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="3mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="3.4mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="3.8mm" pcbY="-4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="4.8965mm" pcbY="-3.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="4.8965mm" pcbY="-3.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="4.8965mm" pcbY="-3mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="4.8965mm" pcbY="-2.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="4.8965mm" pcbY="-2.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="4.8965mm" pcbY="-1.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="4.8965mm" pcbY="-1.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="4.8965mm" pcbY="-1mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="4.8965mm" pcbY="-0.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="4.8965mm" pcbY="-0.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="4.8965mm" pcbY="0.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="4.8965mm" pcbY="0.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="4.8965mm" pcbY="1mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="4.8965mm" pcbY="1.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="4.8965mm" pcbY="1.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="4.8965mm" pcbY="2.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="4.8965mm" pcbY="2.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="4.8965mm" pcbY="3mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="4.8965mm" pcbY="3.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="4.8965mm" pcbY="3.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="3.8mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="3.4mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="3mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="2.6mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="2.2mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="1.8mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="1.4mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="1mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0.6mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="0.2mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-0.2mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="-0.6mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="-1mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="-1.4mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="-1.8mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="-2.2mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="-2.6mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="-3mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin59"]} pcbX="-3.4mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin60"]} pcbX="-3.8mm" pcbY="4.8965mm" layer="top" width="0.78mm" height="0.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin61"]} pcbX="-4.8965mm" pcbY="3.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin62"]} pcbX="-4.8965mm" pcbY="3.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin63"]} pcbX="-4.8965mm" pcbY="3mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin64"]} pcbX="-4.8965mm" pcbY="2.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin65"]} pcbX="-4.8965mm" pcbY="2.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin66"]} pcbX="-4.8965mm" pcbY="1.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin67"]} pcbX="-4.8965mm" pcbY="1.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin68"]} pcbX="-4.8965mm" pcbY="1mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin69"]} pcbX="-4.8965mm" pcbY="0.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin70"]} pcbX="-4.8965mm" pcbY="0.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin71"]} pcbX="-4.8965mm" pcbY="-0.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin72"]} pcbX="-4.8965mm" pcbY="-0.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin73"]} pcbX="-4.8965mm" pcbY="-1mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin74"]} pcbX="-4.8965mm" pcbY="-1.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin75"]} pcbX="-4.8965mm" pcbY="-1.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin76"]} pcbX="-4.8965mm" pcbY="-2.2mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin77"]} pcbX="-4.8965mm" pcbY="-2.6mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin78"]} pcbX="-4.8965mm" pcbY="-3mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin79"]} pcbX="-4.8965mm" pcbY="-3.4mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin80"]} pcbX="-4.8965mm" pcbY="-3.8mm" layer="top" width="0.2mm" height="0.78mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin81"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.6mm" height="3.6mm" ccwRotation={90} shape="rotated_rect"/>













<fabricationnotepath route={[{ "x": -5, "y": 5 }, { "x": 5, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5, "y": 5 }, { "x": 5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5, "y": -5 }, { "x": -5, "y": 5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -4.3, "y": -5 }, { "x": -5, "y": -4.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": 5 }, { "x": -5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": 5 }, { "x": 5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 5, "y": -5 }, { "x": -5, "y": -5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={7} anchorAlignment="center" text="RP2350B(QFN-80_10.00x10.00x0.90mm_P0.4mm)" font="tscircuit2024" fontSize={1.016}/>


<courtyardoutline outline={[{ "x": -5.5, "y": 5.5 }, { "x": -5.5, "y": -5.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.5, "y": -5.5 }, { "x": 5.5, "y": -5.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.5, "y": 5.5 }, { "x": -5.5, "y": 5.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.5, "y": -5.5 }, { "x": 5.5, "y": 5.5 }]} layer="top"/>
      </footprint>);
// L2: 1.0uH/4.2A/DCR=35mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-1R0MTS00); OLIMEX_RLC-FP:L_2016_MM
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" width="0.9mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" width="0.9mm" height="1.8mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.8 }, { "x": 1, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.8 }, { "x": -1, "y": -0.8 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="1.0uH/4.2A/DCR=35mR/20%/2.00x1.60x1.00mm/L2016(PIM201610-1R0MTS00)" font="tscircuit2024" fontSize={1.27}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={2} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U2: TPS62A02ADRLR(SOT-563-6); OLIMEX_Regulators-FP:SOT-563-6
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0.75mm" pcbY="-0.5mm" layer="top" width="0.25mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="0mm" layer="top" width="0.25mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.75mm" pcbY="0.5mm" layer="top" width="0.25mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.75mm" pcbY="0.5mm" layer="top" width="0.25mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.75mm" pcbY="0mm" layer="top" width="0.25mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.75mm" pcbY="-0.5mm" layer="top" width="0.25mm" height="0.7mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.85, "y": -0.85 }, { "x": 0.85, "y": 0.85 }]} strokeWidth={0.05}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 0.85 }, { "x": -0.65, "y": -0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -0.85 }, { "x": 0.45, "y": -0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 0.85 }, { "x": -0.65, "y": 0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -0.65 }, { "x": 0.45, "y": -0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -0.65 }, { "x": 0.65, "y": 0.85 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.85, "y": -0.85 }, { "x": -0.85, "y": 0.85 }]} strokeWidth={0.05}/>
<fabricationnotepath route={[{ "x": 0.85, "y": -0.85 }, { "x": -0.85, "y": -0.85 }, { "x": -0.85, "y": 0.85 }, { "x": 0.85, "y": 0.85 }]} strokeWidth={0.05}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="TPS62A02ADRLR(SOT-563-6)" font="tscircuit2024" fontSize={1.27}/>


<courtyardoutline outline={[{ "x": -1.35, "y": 1.1 }, { "x": -1.35, "y": -1.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.35, "y": 1.1 }, { "x": 1.35, "y": 1.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.35, "y": -1.1 }, { "x": -1.35, "y": -1.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.35, "y": -1.1 }, { "x": 1.35, "y": 1.1 }]} layer="top"/>
      </footprint>);
// R3: 33R/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.5} anchorAlignment="center" text="33R/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C20: 27pF/50V/5%/C0G/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="27pF/50V/5%/C0G/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C18: 4.7uF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="4.7uF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C24: 22uF/6.3V/20%/X5R/C0603; OLIMEX_RLC-FP:C_0603_5MIL_DWS
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.889mm" pcbY="0mm" layer="top" width="1.016mm" height="1.016mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.889mm" pcbY="0mm" layer="top" width="1.016mm" height="1.016mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.762, "y": 0.381 }, { "x": -0.762, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.762, "y": -0.381 }, { "x": 0.762, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0, "y": 0.381 }, { "x": -0.762, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.762, "y": 0.381 }, { "x": 0, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.762, "y": -0.381 }, { "x": 0.762, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.127} pcbY={-1.778} anchorAlignment="center" text="22uF/6.3V/20%/X5R/C0603" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R11: 1k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="1k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R1: 10k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="10k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C1: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// U1: W25Q16JVSSIQ; OLIMEX_IC-FP:SO-8_208mil
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="3.235mm" layer="top" width="0.6mm" height="2.2mm" shape="rect"/>






<fabricationnotetext pcbX={3.60934} pcbY={0.19812} anchorAlignment="center" text="W25Q16JVSSIQ" font="tscircuit2024" fontSize={1.1}/>




      </footprint>);
// R9: 1k/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="1k/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C25: NA(22uF/6.3V/20%/X5R/C0603); OLIMEX_RLC-FP:C_0603_5MIL_DWS
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.889mm" pcbY="0mm" layer="top" width="1.016mm" height="1.016mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.889mm" pcbY="0mm" layer="top" width="1.016mm" height="1.016mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.762, "y": 0.381 }, { "x": -0.762, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.762, "y": -0.381 }, { "x": 0.762, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0, "y": 0.381 }, { "x": -0.762, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.762, "y": 0.381 }, { "x": 0, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.762, "y": -0.381 }, { "x": 0.762, "y": 0.381 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.127} pcbY={-1.778} anchorAlignment="center" text="NA(22uF/6.3V/20%/X5R/C0603)" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R14: 49.9k/1%/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.397} anchorAlignment="center" text="49.9k/1%/R0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// QWST1: SH1.0-4P-180D; OLIMEX_Connectors-FP:BM04B-SRSS-TB
export const Footprint_QWST1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin5"]} pcbX="-2.8mm" pcbY="0.35mm" layer="top" width="1.2mm" height="3.1mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.8mm" pcbY="0.35mm" layer="top" width="1.2mm" height="3.1mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="1.5mm" pcbY="-1.425mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -3, "y": 1.8 }, { "x": 3, "y": 1.8 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3, "y": -1.1 }, { "x": -3, "y": 1.8 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3, "y": 1.8 }, { "x": 3, "y": -1.1 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3, "y": -1.1 }, { "x": -3, "y": -1.1 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={0} pcbY={-4.699} anchorAlignment="center" text="SH1.0-4P-180D" font="tscircuit2024" fontSize={1.27}/>
<fabricationnotetext pcbX={-0.127} pcbY={0.127} anchorAlignment="center" text="mount" font="tscircuit2024" fontSize={0.508}/>
<fabricationnotetext pcbX={0} pcbY={1.143} anchorAlignment="center" text="Vertical" font="tscircuit2024" fontSize={0.508}/>


<courtyardoutline outline={[{ "x": -3.65, "y": 2.25 }, { "x": -3.65, "y": -2.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.65, "y": -2.45 }, { "x": 3.65, "y": -2.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.65, "y": 2.25 }, { "x": -3.65, "y": 2.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.65, "y": -2.45 }, { "x": 3.65, "y": 2.25 }]} layer="top"/>
      </footprint>);
// C19: 4.7uF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="4.7uF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C6: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// C5: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="top" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": -0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotepath route={[{ "x": 0.49784, "y": -0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604}/>
<fabricationnotetext pcbX={0} pcbY={-1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27}/>

      </footprint>);
// R10: 5.1k/1%/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="5.1k/1%/R0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// R7: 27R/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="27R/R0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// R6: 27R/R0402; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="27R/R0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C10: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C4: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// R20: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// Sign_PB-Free: Sign_PB-Free; OLIMEX_Signs-FP:Sign_PB-Free
export const Footprint_Sign_PB_Free = () => (<footprint originalLayer="bottom">
        

<fabricationnotetext pcbX={-0.2794} pcbY={-3.52552} anchorAlignment="center" text="Sign_PB-Free" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0.05588} pcbY={3.15214} anchorAlignment="center" text="Sign_PB-Free" font="tscircuit2024" fontSize={1} layer="bottom"/>

      </footprint>);
// C17: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C9: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C16: 4.7uF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="4.7uF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C11: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// U4: NA(W25Q128JVSIQ(SOIC-8_208mils)); OLIMEX_IC-FP:SO-8_208mil
export const Footprint_U4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="-3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="-3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="-3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="-3.235mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={3.60934} pcbY={-0.19812} anchorAlignment="center" text="NA(W25Q128JVSIQ(SOIC-8_208mils))" font="tscircuit2024" fontSize={1.1} layer="bottom"/>

      </footprint>);
// U5: NA(APS6404L-3SQR-SN(SOIC-8_150mils)); OLIMEX_IC-FP:SO-8
export const Footprint_U5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="-2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="-2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="-2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="-2.6mm" layer="bottom" width="2.2mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotetext pcbX={3.60934} pcbY={-0.19812} anchorAlignment="center" text="NA(APS6404L-3SQR-SN(SOIC-8_150mils))" font="tscircuit2024" fontSize={1.1} layer="bottom"/>


      </footprint>);
// FID4: Fiducial; OLIMEX_Other-FP:Fiducial1x3_Paste
export const Footprint_FID4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
      </footprint>);
// C3: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C8: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C26: NA(100nF/10V/20%/X5R/C0402); OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="NA(100nF/10V/20%/X5R/C0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// Sign_Antistatic_Small: Sign_Antistatic; OLIMEX_Signs-FP:Sign_Antistatic_4.5mmX2.8mm
export const Footprint_Sign_Antistatic_Small = () => (<footprint originalLayer="bottom">
        













































































<fabricationnotetext pcbX={0} pcbY={-3.0226} anchorAlignment="center" text="Sign_Antistatic_Small" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.02286} pcbY={3.302} anchorAlignment="center" text="Sign_Antistatic" font="tscircuit2024" fontSize={1} layer="bottom"/>
      </footprint>);
// R25: NA(33R/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="NA(33R/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// R16: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// FID6: Fiducial; OLIMEX_Other-FP:Fiducial1x3
export const Footprint_FID6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
      </footprint>);
// R23: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C12: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C13: 4.7uF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="4.7uF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// EXT2: HN1x27; OLIMEX_Connectors-FP:HN1x27
export const Footprint_EXT2 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="-33.02mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.778mm" rectPadHeight="1.778mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="-30.48mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-27.94mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-25.4mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="-22.86mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="-20.32mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="-17.78mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="-15.24mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="-12.7mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="-10.16mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-7.62mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-5.08mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="10.16mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="12.7mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="15.24mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="17.78mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin22"]} pcbX="20.32mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin23"]} pcbX="22.86mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin24"]} pcbX="25.4mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin25"]} pcbX="27.94mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin26"]} pcbX="30.48mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin27"]} pcbX="33.02mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>

























































































































































































































































































































































































































































<fabricationnotetext pcbX={-31.242} pcbY={-2.286} anchorAlignment="center" text="HN1x27" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// FID5: Fiducial; OLIMEX_Other-FP:Fiducial1x3
export const Footprint_FID5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.5mm" shape="circle"/>
      </footprint>);
// R21: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// EXT1: HN1x27; OLIMEX_Connectors-FP:HN1x27
export const Footprint_EXT1 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="-33.02mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.778mm" rectPadHeight="1.778mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="-30.48mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-27.94mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-25.4mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="-22.86mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="-20.32mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="-17.78mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="-15.24mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="-12.7mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="-10.16mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-7.62mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-5.08mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="10.16mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="12.7mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="15.24mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin21"]} pcbX="17.78mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin22"]} pcbX="20.32mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin23"]} pcbX="22.86mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin24"]} pcbX="25.4mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin25"]} pcbX="27.94mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin26"]} pcbX="30.48mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin27"]} pcbX="33.02mm" pcbY="0mm" outerDiameter="1.778mm" holeDiameter="1mm" shape="circle"/>

























































































































































































































































































































































































































































<fabricationnotetext pcbX={-31.242} pcbY={-2.286} anchorAlignment="center" text="HN1x27" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// R22: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C7: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// Logo_OLIMEX_80-Bot: Logo_OLIMEX_80; OLIMEX_Signs-FP:Logo_OLIMEX_80
export const Footprint_Logo_OLIMEX_80_Bot = () => (<footprint originalLayer="bottom">
        




      </footprint>);
// R19: NA(10k/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R19 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="NA(10k/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// Sign_OSHW_7.3x6.0mm: Sign_OSHW_7.3x6.0mm; OLIMEX_Signs-FP:Sign_OSHW_7.3x6.0mmn
export const Footprint_Sign_OSHW_7_3x6_0mm = () => (<footprint originalLayer="bottom">
        

      </footprint>);
// L3: NA(600OHM/2A/UPZ2012E-601-2R0TF/0805); OLIMEX_RLC-FP:L_0805_5MIL_DWS
export const Footprint_L3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.016mm" pcbY="0mm" layer="bottom" width="1.524mm" height="1.27mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.016mm" pcbY="0mm" layer="bottom" width="1.524mm" height="1.27mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={2.159} anchorAlignment="center" text="NA(600OHM/2A/UPZ2012E-601-2R0TF/0805)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// Sign_CE: CE_Sign; OLIMEX_Signs-FP:CE_Sign
export const Footprint_Sign_CE = () => (<footprint originalLayer="bottom">
        













      </footprint>);
// R24: NA(33R/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="NA(33R/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// R27: NA; OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.5mm" height="0.55mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.5} anchorAlignment="center" text="NA" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// Sign_RecycleBin_1: Sign_RecycleBin_1; OLIMEX_Signs-FP:Sign_RecycleBin_1
export const Footprint_Sign_RecycleBin_1 = () => (<footprint originalLayer="bottom">
        












































      </footprint>);
// C27: NA(47uF/6.3V/20%/X5R/C0805); OLIMEX_RLC-FP:C_0805_5MIL_DWS
export const Footprint_C27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.016mm" pcbY="0mm" layer="bottom" width="1.27mm" height="1.524mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.016mm" pcbY="0mm" layer="bottom" width="1.27mm" height="1.524mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1.016, "y": 0.635 }, { "x": -1.016, "y": -0.635 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.016, "y": -0.635 }, { "x": 0, "y": -0.635 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0, "y": -0.635 }, { "x": 1.016, "y": -0.635 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.016, "y": 0.635 }, { "x": -1.016, "y": 0.635 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.016, "y": -0.635 }, { "x": 1.016, "y": 0.635 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.032} anchorAlignment="center" text="NA(47uF/6.3V/20%/X5R/C0805)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// C15: 100nF/10V/20%/X5R/C0402; OLIMEX_RLC-FP:C_0402_5MIL_DWS
export const Footprint_C15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.905} anchorAlignment="center" text="100nF/10V/20%/X5R/C0402" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// MICRO_SD1: NA(TFC-9P-1.7H(ATFFS150A01BR016)); OLIMEX_Connectors-FP:uSD(TFC-9P-1.xH(ATFFS150A01BR016))
export const Footprint_MICRO_SD1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="3.85mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.75mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.65mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.9mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.55mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.65mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.75mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.85mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.2mm" pcbY="3.3mm" layer="bottom" width="0.5mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.3mm" pcbY="1.55mm" layer="bottom" width="1.5mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.3mm" pcbY="-0.5mm" layer="bottom" width="1.5mm" height="4.5mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.3mm" pcbY="-2.9mm" layer="bottom" width="1.5mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="5.3mm" pcbY="1.55mm" layer="bottom" width="1.5mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="5.3mm" pcbY="-0.5mm" layer="bottom" width="1.5mm" height="4.5mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="5.3mm" pcbY="-2.9mm" layer="bottom" width="1.5mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -5.625, "y": 3.5 }, { "x": -5.625, "y": -3.5 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.625, "y": 3.5 }, { "x": 5.625, "y": 3.5 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.625, "y": 3.5 }, { "x": 5.625, "y": -3.5 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.625, "y": 2.5 }, { "x": 5.625, "y": 2.5 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.625, "y": 0.575 }, { "x": -5.625, "y": -1.925 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.625, "y": -3.5 }, { "x": 5.625, "y": 3.5 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -5.625, "y": -3.5 }, { "x": 5.625, "y": -3.5 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.7991, "y": 11.0499 }, { "x": -4.7991, "y": -2.34606 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.999, "y": -3.14616 }, { "x": 4.09852, "y": -3.14616 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.7, "y": 1.3 }, { "x": -1.7, "y": -0.1 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.7, "y": -0.1 }, { "x": -0.1, "y": -0.1 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.1, "y": -0.1 }, { "x": 1, "y": -0.7 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.2, "y": 2.2 }, { "x": 0.2, "y": 1.3 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.2, "y": 1.3 }, { "x": -1.7, "y": 1.3 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.6, "y": 0.1 }, { "x": 0.5, "y": 0 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.6, "y": 0.1 }, { "x": 0.7, "y": 0 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.7, "y": -3.14786 }, { "x": 0.7, "y": 11.85214 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.9, "y": 2.2 }, { "x": 0.9, "y": 2.2 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.9, "y": 1.3 }, { "x": 0.9, "y": 2.2 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.1, "y": -0.1 }, { "x": 2.8, "y": -0.1 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.8, "y": 1.3 }, { "x": 0.9, "y": 1.3 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.8, "y": -0.1 }, { "x": 2.8, "y": 1.3 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.89862, "y": -2.34606 }, { "x": 4.89862, "y": 1.78652 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.01546, "y": 2.071 }, { "x": 6.08226, "y": 3.13272 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.399, "y": 11.85 }, { "x": -3.999, "y": 11.85 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.49806, "y": 4.95136 }, { "x": 5.49806, "y": 5.78448 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.6149, "y": 6.06896 }, { "x": 6.1991, "y": 6.65062 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.625, "y": 3.5 }, { "x": 5.625, "y": -3.5 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.625, "y": 0.575 }, { "x": 5.625, "y": -1.925 }]} strokeWidth={0.254} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.0975, "y": 4.7507 }, { "x": 5.69872, "y": 4.7507 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.1991, "y": 6.65062 }, { "x": 6.1991, "y": 11.0499 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.1991, "y": 3.4172 }, { "x": 6.1991, "y": 4.65164 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -4.7991, "y": 11.0499 }, { "x": -4.793266, "y": 11.146341 }, { "x": -4.77585, "y": 11.241376 }, { "x": -4.747106, "y": 11.333619 }, { "x": -4.707453, "y": 11.421725 }, { "x": -4.657469, "y": 11.504408 }, { "x": -4.597883, "y": 11.580464 }, { "x": -4.529564, "y": 11.648783 }, { "x": -4.453508, "y": 11.708369 }, { "x": -4.370825, "y": 11.758353 }, { "x": -4.282719, "y": 11.798006 }, { "x": -4.190476, "y": 11.82675 }, { "x": -4.095441, "y": 11.844166 }, { "x": -3.999, "y": 11.85 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -3.999, "y": -3.14616 }, { "x": -4.095441, "y": -3.140326 }, { "x": -4.190476, "y": -3.12291 }, { "x": -4.282719, "y": -3.094166 }, { "x": -4.370825, "y": -3.054513 }, { "x": -4.453508, "y": -3.004529 }, { "x": -4.529564, "y": -2.944943 }, { "x": -4.597883, "y": -2.876624 }, { "x": -4.657469, "y": -2.800568 }, { "x": -4.707453, "y": -2.717885 }, { "x": -4.747106, "y": -2.629779 }, { "x": -4.77585, "y": -2.537536 }, { "x": -4.793266, "y": -2.442501 }, { "x": -4.7991, "y": -2.34606 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.6, "y": 0.1 }, { "x": 0.596301, "y": 0.005849 }, { "x": 0.585226, "y": -0.087721 }, { "x": 0.566844, "y": -0.180134 }, { "x": 0.541267, "y": -0.27082 }, { "x": 0.508655, "y": -0.35922 }, { "x": 0.469207, "y": -0.444788 }, { "x": 0.423168, "y": -0.526998 }, { "x": 0.37082, "y": -0.605342 }, { "x": 0.312487, "y": -0.679337 }, { "x": 0.248528, "y": -0.748528 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.89862, "y": -2.34606 }, { "x": 4.892786, "y": -2.442501 }, { "x": 4.87537, "y": -2.537536 }, { "x": 4.846626, "y": -2.629779 }, { "x": 4.806973, "y": -2.717885 }, { "x": 4.756989, "y": -2.800568 }, { "x": 4.697403, "y": -2.876624 }, { "x": 4.629084, "y": -2.944943 }, { "x": 4.553028, "y": -3.004529 }, { "x": 4.470345, "y": -3.054513 }, { "x": 4.382239, "y": -3.094166 }, { "x": 4.289996, "y": -3.12291 }, { "x": 4.194961, "y": -3.140326 }, { "x": 4.09852, "y": -3.14616 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.898677, "y": 1.78906 }, { "x": 4.906327, "y": 1.86685 }, { "x": 4.929014, "y": 1.941651 }, { "x": 4.965864, "y": 2.010584 }, { "x": 5.01546, "y": 2.071 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.399, "y": 11.85 }, { "x": 5.495441, "y": 11.844166 }, { "x": 5.590476, "y": 11.82675 }, { "x": 5.682719, "y": 11.798006 }, { "x": 5.770825, "y": 11.758353 }, { "x": 5.853508, "y": 11.708369 }, { "x": 5.929564, "y": 11.648783 }, { "x": 5.997883, "y": 11.580464 }, { "x": 6.057469, "y": 11.504408 }, { "x": 6.107453, "y": 11.421725 }, { "x": 6.147106, "y": 11.333619 }, { "x": 6.17585, "y": 11.241376 }, { "x": 6.193266, "y": 11.146341 }, { "x": 6.1991, "y": 11.0499 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.497065, "y": 5.78448 }, { "x": 5.504789, "y": 5.86297 }, { "x": 5.527681, "y": 5.938443 }, { "x": 5.564861, "y": 6.007998 }, { "x": 5.6149, "y": 6.06896 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 5.69872, "y": 4.7507 }, { "x": 5.621931, "y": 4.765974 }, { "x": 5.556832, "y": 4.809472 }, { "x": 5.513334, "y": 4.874571 }, { "x": 5.49806, "y": 4.95136 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.0975, "y": 4.75324 }, { "x": 6.16935, "y": 4.72349 }, { "x": 6.1991, "y": 4.65164 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.200095, "y": 3.416498 }, { "x": 6.192262, "y": 3.338196 }, { "x": 6.169336, "y": 3.262917 }, { "x": 6.132195, "y": 3.19354 }, { "x": 6.08226, "y": 3.13272 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={5.3} anchorAlignment="center" text="NA(TFC-9P-1.7H(ATFFS150A01BR016))" font="tscircuit2024" fontSize={1.1} layer="bottom"/>
<fabricationnotetext pcbX={0.25} pcbY={-2.4} anchorAlignment="center" text="Card Detect" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<fabricationnotetext pcbX={0.25} pcbY={-1.4} anchorAlignment="center" text="Normal Open Switch" font="tscircuit2024" fontSize={0.5} layer="bottom"/>

      </footprint>);
// R26: NA(33R/R0402); OLIMEX_RLC-FP:R_0402_5MIL_DWS
export const Footprint_R26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.508mm" pcbY="0mm" layer="bottom" width="0.55mm" height="0.5mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": -0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": 0.24892 }, { "x": 0.49784, "y": 0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.49784, "y": -0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.49784, "y": 0.24892 }, { "x": 0.49784, "y": -0.24892 }]} strokeWidth={0.06604} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.397} anchorAlignment="center" text="NA(33R/R0402)" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
