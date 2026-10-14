// Seven
// Source: https://github.com/id8-engineering/seven-hardware
// Commit: 7c69a1482ffd1dddc206294a55602477c55e17d8; license: CERN-OHL-P-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// C16: 39pF; seven-lib:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="39pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C19: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="0deg"/>
      </footprint>);
// LS1: CMT-8504-100-SMT-TR; seven-lib:XDCR_CMT-8504-100-SMT-TR
export const Footprint_LS1 = () => (<footprint originalLayer="top">
        <smtpad pcbX="3.5mm" pcbY="3.5mm" layer="top" width="2.5mm" height="2.5mm" shape="rect"/>
<smtpad pcbX="3.5mm" pcbY="-3.5mm" layer="top" width="2.5mm" height="2.5mm" shape="rect"/>
<smtpad portHints={["pin1"]} pcbX="-3.5mm" pcbY="-3.5mm" layer="top" width="2.5mm" height="2.5mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.5mm" pcbY="3.5mm" layer="top" width="2.5mm" height="2.5mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -4.25, "y": 4.25 }, { "x": -4.25, "y": -4.25 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -4.25, "y": -4.25 }, { "x": 4.25, "y": -4.25 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 4.25, "y": 4.25 }, { "x": -4.25, "y": 4.25 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 4.25, "y": -4.25 }, { "x": 4.25, "y": 4.25 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={10.795} pcbY={-6.35} anchorAlignment="center" text="CMT-8504-100-SMT-TR" font="tscircuit2024" fontSize={1}/>



<courtyardoutline outline={[{ "x": -5, "y": 5 }, { "x": -2, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5, "y": 2 }, { "x": -5, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5, "y": -2 }, { "x": -4.5, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5, "y": -5 }, { "x": -5, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.5, "y": 2 }, { "x": -5, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.5, "y": -2 }, { "x": -4.5, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": 5 }, { "x": -2, "y": 4.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": 4.5 }, { "x": 2, "y": 4.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": -4.5 }, { "x": -2, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2, "y": -5 }, { "x": -5, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2, "y": 5 }, { "x": 5, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2, "y": 4.5 }, { "x": 2, "y": 5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2, "y": -4.5 }, { "x": -2, "y": -4.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2, "y": -5 }, { "x": 2, "y": -4.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.5, "y": 2 }, { "x": 4.5, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.5, "y": -2 }, { "x": 5, "y": -2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": 5 }, { "x": 5, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": 2 }, { "x": 4.5, "y": 2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": -2 }, { "x": 5, "y": -5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5, "y": -5 }, { "x": 2, "y": -5 }]} layer="top"/>
      </footprint>);
// J5: Conn_01x02; seven-lib:PhoenixContact_MSTBA_2,5_2-G-5,08_1x02_P5.08mm_Horizontal
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.4mm" rectPadWidth="2.08mm" rectPadHeight="3.6mm" rectBorderRadius="0.125mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="5.08mm" pcbY="0mm" outerHeight="3.6mm" outerWidth="2.08mm" holeHeight="1.4mm" holeWidth="1.4mm" shape="pill" pcbRotation="0deg"/>













<fabricationnotepath route={[{ "x": 0.95, "y": 2 }, { "x": 0, "y": 0.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 0.5 }, { "x": -0.95, "y": 2 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.54} pcbY={-11.2} anchorAlignment="center" text="Conn_01x02" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={2.54} pcbY={1.3} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={2.54} pcbY={-4} width={12} height={12.16} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={2.545} pcbY={-4} width={13.17} height={13} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// JP3: SolderJumper_2_Bridged; seven-lib:SolderJumper-2_P1.3mm_Bridged_RoundedPad1.0x1.5mm
export const Footprint_JP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.65mm" pcbY="-0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-0.65mm" pcbY="0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -0.15, "y": -0.75 }, { "x": -0.65, "y": -0.75 }, { "x": -0.65, "y": 0.75 }, { "x": -0.15, "y": 0.75 }]}/>
<smtpad portHints={["pin2"]} pcbX="0.65mm" pcbY="-0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.65mm" pcbY="0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin2"]} layer="top" shape="polygon" points={[{ "x": 0.65, "y": -0.75 }, { "x": 0.15, "y": -0.75 }, { "x": 0.15, "y": 0.75 }, { "x": 0.65, "y": 0.75 }]}/>








<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="SolderJumper_2_Bridged" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.65, "y": 1.25 }, { "x": 1.65, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.25 }, { "x": -1.65, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.25 }, { "x": 1.65, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.25 }, { "x": -1.65, "y": -1.25 }]} layer="top"/>
      </footprint>);
// C24: 1.0nF; seven-lib:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1.0nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C12: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U3: TPD3F303DPVR; seven-lib:SON50P210X160X65-9N
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.78mm" pcbY="0.75mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.78mm" pcbY="0.25mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.78mm" pcbY="-0.25mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.78mm" pcbY="-0.75mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.78mm" pcbY="-0.75mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.78mm" pcbY="-0.25mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.78mm" pcbY="0.25mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.78mm" pcbY="0.75mm" layer="top" cornerRadius="0.016875mm" width="0.77mm" height="0.27mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="top" width="0.4mm" height="1.7mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 1.05 }, { "x": 0.8, "y": -1.05 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.05 }, { "x": 0.8, "y": -1.05 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": 0.8, "y": 1.05 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.05 }, { "x": -0.8, "y": -1.05 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.85, "y": 0.75 }, { "x": -1.842388, "y": 0.711732 }, { "x": -1.820711, "y": 0.679289 }, { "x": -1.788268, "y": 0.657612 }, { "x": -1.75, "y": 0.65 }, { "x": -1.711732, "y": 0.657612 }, { "x": -1.679289, "y": 0.679289 }, { "x": -1.657612, "y": 0.711732 }, { "x": -1.65, "y": 0.75 }, { "x": -1.657612, "y": 0.788268 }, { "x": -1.679289, "y": 0.820711 }, { "x": -1.711732, "y": 0.842388 }, { "x": -1.75, "y": 0.85 }, { "x": -1.788268, "y": 0.842388 }, { "x": -1.820711, "y": 0.820711 }, { "x": -1.842388, "y": 0.788268 }, { "x": -1.85, "y": 0.75 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={6.1016} pcbY={-1.7884} anchorAlignment="center" text="TPD3F303DPVR" font="tscircuit2024" fontSize={0.64}/>

<courtyardoutline outline={[{ "x": 1.415, "y": 1.3 }, { "x": 1.415, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.415, "y": -1.3 }, { "x": 1.415, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.415, "y": 1.3 }, { "x": 1.415, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.415, "y": 1.3 }, { "x": -1.415, "y": -1.3 }]} layer="top"/>
      </footprint>);
// VDD_GNSS1: VDD_GNSS; seven-lib:TestPoint_Pad_2.0x2.0mm
export const Footprint_VDD_GNSS1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="2mm" height="2mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="VDD_GNSS1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
      </footprint>);
// Q1: MMST3904-7-F; seven-lib:SOT65P210X110-3N
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.9652mm" pcbY="0.6604mm" layer="top" width="1.1176mm" height="0.4572mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9652mm" pcbY="-0.6604mm" layer="top" width="1.1176mm" height="0.4572mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.9652mm" pcbY="0mm" layer="top" width="1.1176mm" height="0.4572mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 1.0922, "y": -0.2032 }, { "x": 1.0922, "y": 0.2032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.0922, "y": 0.2032 }, { "x": 0.6858, "y": 0.2032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6858, "y": -1.0922 }, { "x": 0.6858, "y": -0.2032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6858, "y": -0.2032 }, { "x": 1.0922, "y": -0.2032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6858, "y": -0.2032 }, { "x": 0.6858, "y": 0.2032 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6858, "y": 0.2032 }, { "x": 0.6858, "y": 1.0922 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.6858, "y": 1.0922 }, { "x": 0.3048, "y": 1.0922 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.0922 }, { "x": -0.3048, "y": 1.0922 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3048, "y": 1.0922 }, { "x": -0.6858, "y": 1.0922 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": -1.0922 }, { "x": 0.6858, "y": -1.0922 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": -1.0922 }, { "x": -0.6858, "y": -0.8382 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": -0.8382 }, { "x": -0.6858, "y": -0.4572 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": -0.4572 }, { "x": -1.0922, "y": -0.4572 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": 0.4572 }, { "x": -0.6858, "y": -0.4572 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": 0.8382 }, { "x": -0.6858, "y": 0.4572 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": 0.8382 }, { "x": -1.0922, "y": 0.8382 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.6858, "y": 1.0922 }, { "x": -0.6858, "y": 0.8382 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.0922, "y": -0.8382 }, { "x": -0.6858, "y": -0.8382 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.0922, "y": -0.4572 }, { "x": -1.0922, "y": -0.8382 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.0922, "y": 0.4572 }, { "x": -0.6858, "y": 0.4572 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.0922, "y": 0.8382 }, { "x": -1.0922, "y": 0.4572 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.0922 }, { "x": 0.289882, "y": 0.998012 }, { "x": 0.246588, "y": 0.913043 }, { "x": 0.179157, "y": 0.845612 }, { "x": 0.094188, "y": 0.802318 }, { "x": 0, "y": 0.7874 }, { "x": -0.094188, "y": 0.802318 }, { "x": -0.179157, "y": 0.845612 }, { "x": -0.246588, "y": 0.913043 }, { "x": -0.289882, "y": 0.998012 }, { "x": -0.3048, "y": 1.0922 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={2.3368} pcbY={-1.7018} anchorAlignment="center" text="MMST3904-7-F" font="tscircuit2024" fontSize={0.32}/>

      </footprint>);
// J7: NSIM-2-C; seven-lib:CUI_NSIM-2-C
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.17mm" pcbY="4.1mm" layer="top" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.63mm" pcbY="4.1mm" layer="top" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.91mm" pcbY="4.1mm" layer="top" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.9mm" pcbY="4.1mm" layer="top" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.64mm" pcbY="4.1mm" layer="top" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="3.18mm" pcbY="4.1mm" layer="top" width="0.9mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-5.85mm" pcbY="-8.8mm" layer="top" width="1.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-5.85mm" pcbY="0mm" layer="top" width="1.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="5.85mm" pcbY="0mm" layer="top" width="1.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="5.85mm" pcbY="-8.8mm" layer="top" width="1.3mm" height="1.8mm" shape="rect"/>








<fabricationnotepath route={[{ "x": -6, "y": 4.3 }, { "x": -6, "y": -9.7 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -6, "y": -9.7 }, { "x": 6, "y": -9.7 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 6, "y": 4.3 }, { "x": -6, "y": 4.3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 6, "y": -9.7 }, { "x": 6, "y": 4.3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3.1, "y": 5.3 }, { "x": -3.107612, "y": 5.338268 }, { "x": -3.129289, "y": 5.370711 }, { "x": -3.161732, "y": 5.392388 }, { "x": -3.2, "y": 5.4 }, { "x": -3.238268, "y": 5.392388 }, { "x": -3.270711, "y": 5.370711 }, { "x": -3.292388, "y": 5.338268 }, { "x": -3.3, "y": 5.3 }, { "x": -3.292388, "y": 5.261732 }, { "x": -3.270711, "y": 5.229289 }, { "x": -3.238268, "y": 5.207612 }, { "x": -3.2, "y": 5.2 }, { "x": -3.161732, "y": 5.207612 }, { "x": -3.129289, "y": 5.229289 }, { "x": -3.107612, "y": 5.261732 }, { "x": -3.1, "y": 5.3 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={1.27} pcbY={-12.065} anchorAlignment="center" text="NSIM-2-C" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -6.75, "y": 4.95 }, { "x": -6.75, "y": -9.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.75, "y": -9.95 }, { "x": 6.75, "y": -9.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.75, "y": 4.95 }, { "x": -6.75, "y": 4.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.75, "y": -9.95 }, { "x": 6.75, "y": 4.95 }]} layer="top"/>
      </footprint>);
// VDD_3V3: VDD_3V3; seven-lib:TestPoint_Pad_2.0x2.0mm
export const Footprint_VDD_3V3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="2mm" height="2mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={-2.05} anchorAlignment="center" text="VDD_3V3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="VDD_3V3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
      </footprint>);
// C32: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="0deg"/>
      </footprint>);
// mB1: ~; seven-lib:mikroBUS_socket_left
export const Footprint_mB1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin9"]} pcbX="-11.77mm" pcbY="9.19mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin10"]} pcbX="-11.77mm" pcbY="6.65mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-11.77mm" pcbY="4.11mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-11.77mm" pcbY="1.57mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-11.77mm" pcbY="-0.97mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="-11.77mm" pcbY="-3.51mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="-11.77mm" pcbY="-6.05mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="-11.77mm" pcbY="-8.59mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>



























<fabricationnotepath route={[{ "x": -13.548, "y": -10.368 }, { "x": -13.548, "y": 10.968 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.992, "y": -10.368 }, { "x": -13.548, "y": -10.368 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -13.548, "y": 10.968 }, { "x": -9.992, "y": 10.968 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.992, "y": 10.968 }, { "x": -9.992, "y": -10.368 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -13.67, "y": -10.49 }, { "x": -13.67, "y": 9.54 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.86, "y": -10.49 }, { "x": -13.67, "y": -10.49 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.67, "y": 9.54 }, { "x": -13.67, "y": 11.09 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.663479, "y": 11.009098 }, { "x": 6.266521, "y": 11.009098 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.266521, "y": 11.009098 }, { "x": 6.276521, "y": 15.959098 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.67, "y": 11.09 }, { "x": -9.87, "y": 11.09 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.87, "y": 11.09 }, { "x": -9.86, "y": -10.49 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.663479, "y": 15.949098 }, { "x": -6.663479, "y": 11.009098 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.276521, "y": 15.959098 }, { "x": -6.663479, "y": 15.949098 }]} layer="top"/>
      </footprint>);
// R17: 4k7; seven-lib:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4k7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// J9: LTE; seven-lib:LPRS_SMA_CONNECTOR
export const Footprint_J9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.508mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-2.4mm" pcbY="2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-2.4mm" pcbY="-2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.4mm" pcbY="-2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="2.4mm" pcbY="2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>




<fabricationnotepath route={[{ "x": -3.2, "y": 3.2 }, { "x": 3.2, "y": 3.2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3.2, "y": -3.2 }, { "x": -3.2, "y": 3.2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.2, "y": 3.2 }, { "x": 3.2, "y": -3.2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.2, "y": -3.2 }, { "x": -3.2, "y": -3.2 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-0.325} pcbY={4.635} anchorAlignment="center" text="J9" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.61, "y": 3.61 }, { "x": 3.61, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.61, "y": -3.61 }, { "x": -3.61, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.61, "y": 3.61 }, { "x": 3.61, "y": -3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.61, "y": -3.61 }, { "x": -3.61, "y": -3.61 }]} layer="top"/>
      </footprint>);
// U5: ISL85410FRZ-T7A; seven-lib:DFN12_L12.4X3_REN
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.397mm" pcbY="1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.397mm" pcbY="0.750001mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.397mm" pcbY="0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.397mm" pcbY="-0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.397mm" pcbY="-0.750001mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.397mm" pcbY="-1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.397mm" pcbY="-1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.397mm" pcbY="-0.750001mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.397mm" pcbY="-0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.397mm" pcbY="0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="1.397mm" pcbY="0.750001mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="1.397mm" pcbY="1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="0mm" layer="top" width="1.778mm" height="3.4036mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 1.4986, "y": -1.9939 }, { "x": 1.4986, "y": 1.9939 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 1.4986, "y": 1.9939 }, { "x": -1.4986, "y": 1.9939 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": -1.9939 }, { "x": 1.4986, "y": -1.9939 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -1.4986, "y": 1.9939 }, { "x": -1.4986, "y": -1.9939 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }, { "x": -0.9906, "y": 1.25 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 1.9939 }, { "x": 0.289882, "y": 1.899712 }, { "x": 0.246588, "y": 1.814743 }, { "x": 0.179157, "y": 1.747312 }, { "x": 0.094188, "y": 1.704018 }, { "x": 0, "y": 1.6891 }, { "x": -0.094188, "y": 1.704018 }, { "x": -0.179157, "y": 1.747312 }, { "x": -0.246588, "y": 1.814743 }, { "x": -0.289882, "y": 1.899712 }, { "x": -0.3048, "y": 1.9939 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="ISL85410FRZ-T7A" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 2.0574, "y": -1.631 }, { "x": 1.7526, "y": -1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.0574, "y": 1.631 }, { "x": 2.0574, "y": -1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.0574, "y": 1.631 }, { "x": 1.7526, "y": 1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7526, "y": -2.2479 }, { "x": -1.7526, "y": -2.2479 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7526, "y": -1.631 }, { "x": 1.7526, "y": -2.2479 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7526, "y": 2.2479 }, { "x": 1.7526, "y": 1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7526, "y": -2.2479 }, { "x": -1.7526, "y": -1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7526, "y": 1.631 }, { "x": -1.7526, "y": 2.2479 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7526, "y": 2.2479 }, { "x": 1.7526, "y": 2.2479 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.0574, "y": -1.631 }, { "x": -1.7526, "y": -1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.0574, "y": -1.631 }, { "x": -2.0574, "y": 1.631 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.0574, "y": 1.631 }, { "x": -1.7526, "y": 1.631 }]} layer="top"/>
      </footprint>);
// C8: 1.0uF; seven-lib:C_0603_1608Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="1.0uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// JP4: SolderJumper_2_Bridged; seven-lib:SolderJumper-2_P1.3mm_Bridged_RoundedPad1.0x1.5mm
export const Footprint_JP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.65mm" pcbY="-0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-0.65mm" pcbY="0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -0.15, "y": -0.75 }, { "x": -0.65, "y": -0.75 }, { "x": -0.65, "y": 0.75 }, { "x": -0.15, "y": 0.75 }]}/>
<smtpad portHints={["pin2"]} pcbX="0.65mm" pcbY="-0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.65mm" pcbY="0.25mm" layer="top" radius="0.5mm" shape="circle"/>
<smtpad portHints={["pin2"]} layer="top" shape="polygon" points={[{ "x": 0.65, "y": -0.75 }, { "x": 0.15, "y": -0.75 }, { "x": 0.15, "y": 0.75 }, { "x": 0.65, "y": 0.75 }]}/>








<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="SolderJumper_2_Bridged" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.65, "y": 1.25 }, { "x": 1.65, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.25 }, { "x": -1.65, "y": -1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.25 }, { "x": 1.65, "y": 1.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.25 }, { "x": -1.65, "y": -1.25 }]} layer="top"/>
      </footprint>);
// C11: N.C.; seven-lib:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="N.C." font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C28: 22nF; seven-lib:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="22nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C33: 470pF; seven-lib:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="470pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C2: 4.7uF; seven-lib:C_0603_1608Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="4.7uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R16: 1k; seven-lib:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C7: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C34: 27pF; seven-lib:C_0402_1005Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="27pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C31: 22uF; seven-lib:C_0805_2012Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="22uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// S1: TL3336AF160Q; seven-lib:SW_TL3336AF160Q
export const Footprint_S1 = () => (<footprint originalLayer="top">
        <platedhole portHints={undefined} pcbX="0mm" pcbY="0mm" outerHeight="1.1mm" outerWidth="3.2mm" holeHeight="0.6mm" holeWidth="2.4mm" shape="pill" pcbRotation="360deg"/>
<smtpad pcbX="-4.3mm" pcbY="-1.3mm" layer="top" width="1.3mm" height="1.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad pcbX="-4.3mm" pcbY="-4.3mm" layer="top" width="1.3mm" height="1.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad pcbX="4.3mm" pcbY="-1.3mm" layer="top" width="1.3mm" height="1.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad pcbX="4.3mm" pcbY="-4.3mm" layer="top" width="1.3mm" height="1.5mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="2.25mm" pcbY="-3.55mm" layer="top" width="1.9mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.25mm" pcbY="-3.55mm" layer="top" width="1.9mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -3.55, "y": -6.4 }, { "x": 3.55, "y": -6.4 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.55, "y": -6.4 }, { "x": 3.55, "y": 0.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3.55, "y": 0.6 }, { "x": -3.55, "y": -6.4 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.75, "y": 0.6 }, { "x": -3.55, "y": 0.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.75, "y": 0.6 }, { "x": -1.75, "y": 2.1 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.75, "y": 0.6 }, { "x": -1.75, "y": 0.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.55, "y": 0.6 }, { "x": 1.75, "y": 0.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.75, "y": 2.1 }, { "x": 1.75, "y": 2.1 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.75, "y": 2.1 }, { "x": 1.75, "y": 0.6 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.8, "y": -3.45 }, { "x": 5.761732, "y": -3.457612 }, { "x": 5.729289, "y": -3.479289 }, { "x": 5.707612, "y": -3.511732 }, { "x": 5.7, "y": -3.55 }, { "x": 5.707612, "y": -3.588268 }, { "x": 5.729289, "y": -3.620711 }, { "x": 5.761732, "y": -3.642388 }, { "x": 5.8, "y": -3.65 }, { "x": 5.838268, "y": -3.642388 }, { "x": 5.870711, "y": -3.620711 }, { "x": 5.892388, "y": -3.588268 }, { "x": 5.9, "y": -3.55 }, { "x": 5.892388, "y": -3.511732 }, { "x": 5.870711, "y": -3.479289 }, { "x": 5.838268, "y": -3.457612 }, { "x": 5.8, "y": -3.45 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={4.225} pcbY={-9.705} anchorAlignment="center" text="TL3336AF160Q" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -5.3, "y": -6.8 }, { "x": 5.3, "y": -6.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.3, "y": -6.8 }, { "x": 5.3, "y": 2.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.3, "y": 2.35 }, { "x": -5.3, "y": -6.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.3, "y": 2.35 }, { "x": -5.3, "y": 2.35 }]} layer="top"/>
      </footprint>);
// C27: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R2: 10k; seven-lib:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U1: nRF9151-LAXX; seven-lib:LGA_9151_12.1x11.1mm
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -5.85, "y": 5.315 }, { "x": -5.849327, "y": 5.321828 }, { "x": -5.847336, "y": 5.328394 }, { "x": -5.844101, "y": 5.334445 }, { "x": -5.839749, "y": 5.339749 }, { "x": -5.834445, "y": 5.344101 }, { "x": -5.828394, "y": 5.347336 }, { "x": -5.821828, "y": 5.349327 }, { "x": -5.815, "y": 5.35 }, { "x": -5.185, "y": 5.35 }, { "x": -5.178172, "y": 5.349327 }, { "x": -5.171606, "y": 5.347336 }, { "x": -5.165555, "y": 5.344101 }, { "x": -5.160251, "y": 5.339749 }, { "x": -5.155899, "y": 5.334445 }, { "x": -5.152664, "y": 5.328394 }, { "x": -5.150673, "y": 5.321828 }, { "x": -5.15, "y": 5.315 }, { "x": -5.15, "y": 4.895 }, { "x": -5.395, "y": 4.65 }, { "x": -5.815, "y": 4.65 }, { "x": -5.821828, "y": 4.650673 }, { "x": -5.828394, "y": 4.652664 }, { "x": -5.834445, "y": 4.655899 }, { "x": -5.839749, "y": 4.660251 }, { "x": -5.844101, "y": 4.665555 }, { "x": -5.847336, "y": 4.671606 }, { "x": -5.849327, "y": 4.678172 }, { "x": -5.85, "y": 4.685 }]}/>
<smtpad portHints={["pin2"]} pcbX="-5.625mm" pcbY="4.25037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-5.625mm" pcbY="3.75037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-5.625mm" pcbY="3.25037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-5.625mm" pcbY="2.75037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-5.625mm" pcbY="2.25037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-5.625mm" pcbY="1.75037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-5.625mm" pcbY="1.25037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-5.625mm" pcbY="0.75037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-5.625mm" pcbY="0.25037mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-5.625mm" pcbY="-0.24963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-5.625mm" pcbY="-0.74963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-5.625mm" pcbY="-1.24963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-5.625mm" pcbY="-1.74963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.625mm" pcbY="-2.24963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.625mm" pcbY="-2.74963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-5.625mm" pcbY="-3.24963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-5.625mm" pcbY="-3.74963mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-5.625mm" pcbY="-4.24999mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-5.5mm" pcbY="-5mm" layer="top" cornerRadius="0.0175mm" width="0.7mm" height="0.7mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-4.75mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="-4.25mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="-3.74997mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="-3.24997mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="-2.74997mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="-2.24997mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="-1.74997mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="-1.25mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.75mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.25mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="0.25mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="0.75mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="1.25002mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="1.75003mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="2.25003mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="2.75003mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="3.25003mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="3.75002mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="4.25003mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="4.75003mm" pcbY="-5.125mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="5.5mm" pcbY="-5mm" layer="top" cornerRadius="0.0175mm" width="0.7mm" height="0.7mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="5.625mm" pcbY="-4.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="5.625mm" pcbY="-3.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="5.625mm" pcbY="-3.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="5.625mm" pcbY="-2.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="5.625mm" pcbY="-2.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="5.625mm" pcbY="-1.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="5.625mm" pcbY="-1.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="5.625mm" pcbY="-0.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="5.625mm" pcbY="-0.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="5.625mm" pcbY="0.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="5.625mm" pcbY="0.75001mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin53"]} pcbX="5.625mm" pcbY="1.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin54"]} pcbX="5.625mm" pcbY="1.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin55"]} pcbX="5.625mm" pcbY="2.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin56"]} pcbX="5.625mm" pcbY="2.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin57"]} pcbX="5.625mm" pcbY="3.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin58"]} pcbX="5.625mm" pcbY="3.75mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin59"]} pcbX="5.625mm" pcbY="4.25mm" layer="top" cornerRadius="0.0075mm" width="0.45mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin60"]} pcbX="5.5mm" pcbY="5mm" layer="top" cornerRadius="0.0175mm" width="0.7mm" height="0.7mm" shape="rect"/>
<smtpad portHints={["pin61"]} pcbX="4.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin62"]} pcbX="4.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin63"]} pcbX="3.74997mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin64"]} pcbX="3.24997mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin65"]} pcbX="2.74997mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin66"]} pcbX="2.24997mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin67"]} pcbX="1.74998mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin68"]} pcbX="1.24997mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin69"]} pcbX="0.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin70"]} pcbX="0.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin71"]} pcbX="-0.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin72"]} pcbX="-0.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin73"]} pcbX="-1.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin74"]} pcbX="-1.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin75"]} pcbX="-2.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin76"]} pcbX="-2.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin77"]} pcbX="-3.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin78"]} pcbX="-3.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin79"]} pcbX="-4.25mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin80"]} pcbX="-4.75mm" pcbY="5.12501mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.45mm" shape="rect"/>
<smtpad portHints={["pin81"]} pcbX="-4.1mm" pcbY="3.40001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin82"]} pcbX="-4.1mm" pcbY="2.85mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin83"]} pcbX="-4.1mm" pcbY="2.30001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin84"]} pcbX="-4.1mm" pcbY="0.55mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin85"]} pcbX="-4.1mm" pcbY="0mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin86"]} pcbX="-4.1mm" pcbY="-0.54999mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin87"]} pcbX="-4.1mm" pcbY="-2.3mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin88"]} pcbX="-4.1mm" pcbY="-2.84999mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin89"]} pcbX="-4.1mm" pcbY="-3.4mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin90"]} pcbX="-0.55mm" pcbY="-2.15mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin91"]} pcbX="0mm" pcbY="-2.15mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin92"]} pcbX="0.55mm" pcbY="-2.15mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin93"]} pcbX="4.1mm" pcbY="-3.4mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin94"]} pcbX="4.1mm" pcbY="-2.84999mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin95"]} pcbX="4.1mm" pcbY="-2.3mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin96"]} pcbX="4.1mm" pcbY="-0.54999mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin97"]} pcbX="4.1mm" pcbY="0mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin98"]} pcbX="4.1mm" pcbY="0.55mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin99"]} pcbX="4.1mm" pcbY="2.30001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin100"]} pcbX="4.1mm" pcbY="2.85mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin101"]} pcbX="4.1mm" pcbY="3.40001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin102"]} pcbX="0.55mm" pcbY="2.15001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin103"]} pcbX="0mm" pcbY="2.15001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin104"]} pcbX="-0.55mm" pcbY="2.15001mm" layer="top" cornerRadius="0.0075mm" width="0.3mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin105"]} pcbX="-2.85mm" pcbY="2.85mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin106"]} pcbX="-2.85mm" pcbY="0mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin107"]} pcbX="-2.85mm" pcbY="-2.84999mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin108"]} pcbX="0mm" pcbY="-3.57499mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.95mm" shape="rect"/>
<smtpad portHints={["pin109"]} pcbX="2.85mm" pcbY="-2.84999mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin110"]} pcbX="2.85mm" pcbY="0mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin111"]} pcbX="2.85mm" pcbY="2.85mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin112"]} pcbX="0mm" pcbY="3.57501mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.95mm" shape="rect"/>
<smtpad portHints={["pin113"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.04mm" width="1.6mm" height="1.6mm" shape="rect"/>









<fabricationnotepath route={[{ "x": -6.05, "y": 4.55 }, { "x": -6.05, "y": -5.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -6.05, "y": -5.55 }, { "x": 6.05, "y": -5.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -5.05, "y": 5.55 }, { "x": -6.05, "y": 4.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 6.05, "y": 5.55 }, { "x": -5.05, "y": 5.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 6.05, "y": -5.55 }, { "x": 6.05, "y": 5.55 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-6.55} anchorAlignment="center" text="nRF9151-LAXX" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -6.3, "y": 5.8 }, { "x": 6.3, "y": 5.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.3, "y": -5.8 }, { "x": -6.3, "y": 5.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.3, "y": 5.8 }, { "x": 6.3, "y": -5.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.3, "y": -5.8 }, { "x": -6.3, "y": -5.8 }]} layer="top"/>
      </footprint>);
// L2: 2.2uH; seven-lib:L_0805_2012Metric
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0625mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0625mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="1.2mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.55} anchorAlignment="center" text="2.2uH" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L2" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={0.9} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.5} height={1.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R3: 300; seven-lib:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="300" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R10: DNP; seven-lib:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="DNP" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R14: 220; seven-lib:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="220" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// REF**: MountingHole_2.1mm; MountingHole:MountingHole_2.1mm
export const Footprint_REF__ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.1mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.05} anchorAlignment="center" text="MountingHole_2.1mm" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="REF**" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.35} layer="top"/>
      </footprint>);
// C4: 100nF; seven-lib:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// REF**: MountingHole_2.1mm; MountingHole:MountingHole_2.1mm
export const Footprint_REF___ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.1mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.05} anchorAlignment="center" text="MountingHole_2.1mm" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="REF**" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.35} layer="top"/>
      </footprint>);
// R11: 100k; seven-lib:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="100k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C17: 39pF; seven-lib:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="39pF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R7: 250k; seven-lib:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="250k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C5: 1.0uF; seven-lib:C_0603_1608Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="1.0uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C6: 1.0uF; seven-lib:C_0603_1608Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="1.0uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C35: 1.0uF; seven-lib:C_0603_1608Metric
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="1.0uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C21: 100nF; seven-lib:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// VDD_1V8: VDD_1V8; seven-lib:TestPoint_Pad_2.0x2.0mm
export const Footprint_VDD_1V8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="2mm" height="2mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={-2.05} anchorAlignment="center" text="VDD_1V8" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="VDD_1V8" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
      </footprint>);
// L1: N.C.; seven-lib:L_0603_1608Metric
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="N.C." font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D3: LED; seven-lib:LED_0603_1608Metric
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="LED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={0.4}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C26: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// REF**: MountingHole_2.1mm; MountingHole:MountingHole_2.1mm
export const Footprint_REF____ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.1mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.05} anchorAlignment="center" text="MountingHole_2.1mm" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="REF**" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.35} layer="top"/>
      </footprint>);
// R1: 10k; seven-lib:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="10k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C20: 100nF; seven-lib:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C3: 1.0uF; seven-lib:C_0603_1608Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="1.0uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="180deg"/>
      </footprint>);
// L3: 68nH; seven-lib:L_0603_1608Metric
export const Footprint_L3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="68nH" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L3" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R5: 0; seven-lib:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="0" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// FB1: 22Ω @ 100MHz; seven-lib:L_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="22Ω @ 100MHz" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB1" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R4: 0; seven-lib:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="0" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J8: GNSS; seven-lib:LPRS_SMA_CONNECTOR
export const Footprint_J8 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.508mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-2.4mm" pcbY="2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-2.4mm" pcbY="-2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.4mm" pcbY="-2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="2.4mm" pcbY="2.4mm" outerDiameter="1.92mm" holeDiameter="1.28mm" shape="circle"/>




<fabricationnotepath route={[{ "x": -3.2, "y": 3.2 }, { "x": 3.2, "y": 3.2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3.2, "y": -3.2 }, { "x": -3.2, "y": 3.2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.2, "y": 3.2 }, { "x": 3.2, "y": -3.2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.2, "y": -3.2 }, { "x": -3.2, "y": -3.2 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-0.325} pcbY={4.635} anchorAlignment="center" text="J8" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.61, "y": 3.61 }, { "x": 3.61, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.61, "y": -3.61 }, { "x": -3.61, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.61, "y": 3.61 }, { "x": 3.61, "y": -3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.61, "y": -3.61 }, { "x": -3.61, "y": -3.61 }]} layer="top"/>
      </footprint>);
// REF**: MountingHole_2.1mm; MountingHole:MountingHole_2.1mm
export const Footprint_REF_____ = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="2.1mm"/>
<fabricationnotetext pcbX={0} pcbY={-3.05} anchorAlignment="center" text="MountingHole_2.1mm" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="REF**" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.35} layer="top"/>
      </footprint>);
// R8: 0; seven-lib:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="0" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C1: 10nF; seven-lib:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="10nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R13: 12.4k; seven-lib:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="12.4k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R18: 4k7; seven-lib:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="4k7" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C13: 4.7uF; seven-lib:C_0603_1608Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="4.7uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.96} height={1.46} layer="top" pcbRotation="180deg"/>
      </footprint>);
// L5: 22uH; seven-lib:L_1008_2520Metric
export const Footprint_L5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.075mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.25mm" height="2.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.075mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.25mm" height="2.2mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-2.05} anchorAlignment="center" text="22uH" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L5" font="tscircuit2024" fontSize={0.62}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2.5} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={2.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C14: 100nF; seven-lib:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// VDD_5V5: VDD_5V_OUT; seven-lib:TestPoint_Pad_2.0x2.0mm
export const Footprint_VDD_5V5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="2mm" height="2mm" ccwRotation={-180} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="VDD_5V5" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.5, "y": -1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": -1.5, "y": -1.5 }]} layer="top"/>
      </footprint>);
// mB2: ~; seven-lib:mikroBUS_socket_right
export const Footprint_mB2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="11.59mm" pcbY="-1.09mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="11.59mm" pcbY="1.45mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="11.59mm" pcbY="3.99mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="11.59mm" pcbY="6.53mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="11.59mm" pcbY="9.07mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="11.59mm" pcbY="11.61mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="11.59mm" pcbY="14.15mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="11.59mm" pcbY="16.69mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>


















<fabricationnotepath route={[{ "x": 9.812, "y": -2.868 }, { "x": 12.352, "y": -2.868 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.352, "y": -2.868 }, { "x": 12.606, "y": -2.868 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.606, "y": -2.868 }, { "x": 13.368, "y": -2.106 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.368, "y": -2.106 }, { "x": 13.368, "y": -1.852 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.368, "y": -1.852 }, { "x": 13.368, "y": 18.468 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.812, "y": 18.468 }, { "x": 9.812, "y": -2.868 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.368, "y": 18.468 }, { "x": 9.812, "y": 18.468 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 9.69, "y": -3 }, { "x": 9.69, "y": 17.03 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 13.5, "y": -3 }, { "x": 9.69, "y": -3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.69, "y": 17.03 }, { "x": 9.69, "y": 18.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.69, "y": 18.58 }, { "x": 13.49, "y": 18.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 13.49, "y": 18.58 }, { "x": 13.5, "y": -3 }]} layer="top"/>
      </footprint>);
// R15: 1k; seven-lib:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D1: BAT54KFILM; seven-lib:D_SOD-523
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.7mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.075mm" width="0.7mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.65, "y": 0.45 }, { "x": 0.65, "y": -0.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": 0.45 }, { "x": 0.65, "y": 0.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.1, "y": 0.2 }, { "x": -0.2, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.1, "y": 0 }, { "x": 0.25, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.2, "y": 0 }, { "x": -0.35, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.2, "y": 0 }, { "x": 0.1, "y": -0.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.1, "y": -0.2 }, { "x": 0.1, "y": 0.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.2, "y": -0.2 }, { "x": -0.2, "y": 0.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -0.45 }, { "x": -0.65, "y": -0.45 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.65, "y": -0.45 }, { "x": -0.65, "y": 0.45 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="center" text="BAT54KFILM" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.3} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.25, "y": 0.7 }, { "x": 1.25, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.25, "y": 0.7 }, { "x": 1.25, "y": 0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.25, "y": -0.7 }, { "x": -1.25, "y": -0.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.25, "y": -0.7 }, { "x": -1.25, "y": 0.7 }]} layer="top"/>
      </footprint>);
// L4: 2.2uH; seven-lib:L_0805_2012Metric
export const Footprint_L4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.0625mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.0625mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.875mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.55} anchorAlignment="center" text="2.2uH" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L4" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={0.9} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.5} height={1.7} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C9: 10uF; seven-lib:C_0805_2012Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={2} height={1.25} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="0deg"/>
      </footprint>);
// mB4: ~; seven-lib:mikroBUS_socket_right
export const Footprint_mB4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="11.59mm" pcbY="-1.09mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="11.59mm" pcbY="1.45mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="11.59mm" pcbY="3.99mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="11.59mm" pcbY="6.53mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="11.59mm" pcbY="9.07mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="11.59mm" pcbY="11.61mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="11.59mm" pcbY="14.15mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="11.59mm" pcbY="16.69mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>


















<fabricationnotepath route={[{ "x": 9.812, "y": -2.868 }, { "x": 12.352, "y": -2.868 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.352, "y": -2.868 }, { "x": 12.606, "y": -2.868 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 12.606, "y": -2.868 }, { "x": 13.368, "y": -2.106 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.368, "y": -2.106 }, { "x": 13.368, "y": -1.852 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.368, "y": -1.852 }, { "x": 13.368, "y": 18.468 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 9.812, "y": 18.468 }, { "x": 9.812, "y": -2.868 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 13.368, "y": 18.468 }, { "x": 9.812, "y": 18.468 }]} strokeWidth={0.1}/>

<courtyardoutline outline={[{ "x": 9.69, "y": -3 }, { "x": 9.69, "y": 17.03 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 13.5, "y": -3 }, { "x": 9.69, "y": -3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.69, "y": 17.03 }, { "x": 9.69, "y": 18.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.69, "y": 18.58 }, { "x": 13.49, "y": 18.58 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 13.49, "y": 18.58 }, { "x": 13.5, "y": -3 }]} layer="top"/>
      </footprint>);
// U4: nPM1300-QEXX; seven-lib:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm_ThermalVias
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin33"]} pcbX="-1mm" pcbY="1mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="-1mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="-1mm" pcbY="-1mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="1mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="0mm" pcbY="-1mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="1mm" pcbY="1mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="1mm" pcbY="0mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<platedhole portHints={["pin33"]} pcbX="1mm" pcbY="-1mm" outerDiameter="0.5mm" holeDiameter="0.2mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-2.45mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.45mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.45mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.45mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.45mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.45mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.45mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.45mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="0.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="0.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="1.25mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="1.75mm" pcbY="-2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="2.45mm" pcbY="-1.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="2.45mm" pcbY="-1.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="2.45mm" pcbY="-0.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="2.45mm" pcbY="-0.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="2.45mm" pcbY="0.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="2.45mm" pcbY="0.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="2.45mm" pcbY="1.25mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="2.45mm" pcbY="1.75mm" layer="top" cornerRadius="0.03125mm" width="0.8mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="1.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="1.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="0.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="0.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.25mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.75mm" pcbY="2.45mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="2.5mm" height="2.5mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.6mm" height="3.6mm" shape="rect"/>









<fabricationnotepath route={[{ "x": -1.5, "y": 2.5 }, { "x": 2.5, "y": 2.5 }, { "x": 2.5, "y": -2.5 }, { "x": -2.5, "y": -2.5 }, { "x": -2.5, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.8} anchorAlignment="center" text="nPM1300-QEXX" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.1, "y": 2.13 }, { "x": -2.75, "y": 2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.1, "y": -2.13 }, { "x": -3.1, "y": 2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": 2.75 }, { "x": -2.13, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": 2.13 }, { "x": -2.75, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": -2.13 }, { "x": -3.1, "y": -2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.75, "y": -2.75 }, { "x": -2.75, "y": -2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.13, "y": 3.1 }, { "x": 2.13, "y": 3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.13, "y": 2.75 }, { "x": -2.13, "y": 3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.13, "y": -2.75 }, { "x": -2.75, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.13, "y": -3.1 }, { "x": -2.13, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.13, "y": 3.1 }, { "x": 2.13, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.13, "y": 2.75 }, { "x": 2.75, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.13, "y": -2.75 }, { "x": 2.13, "y": -3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.13, "y": -3.1 }, { "x": -2.13, "y": -3.1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": 2.75 }, { "x": 2.75, "y": 2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": 2.13 }, { "x": 3.1, "y": 2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": -2.13 }, { "x": 2.75, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.75, "y": -2.75 }, { "x": 2.13, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.1, "y": 2.13 }, { "x": 3.1, "y": -2.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.1, "y": -2.13 }, { "x": 2.75, "y": -2.13 }]} layer="top"/>
      </footprint>);
// C29: 100nF; seven-lib:C_0402_1005Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R6: 47k; seven-lib:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="47k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.54} height={1.05} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J3: Conn_01x03; seven-lib:PinHeader_1x03_P2.54mm_Vertical_SMD_Pin1Left
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.655mm" pcbY="2.54mm" layer="top" width="1mm" height="2.51mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.655mm" pcbY="0mm" layer="top" width="1mm" height="2.51mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.655mm" pcbY="-2.54mm" layer="top" width="1mm" height="2.51mm" ccwRotation={-90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 1.27, "y": 3.81 }, { "x": 1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.32, "y": 3.81 }, { "x": 1.27, "y": 3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 2.86 }, { "x": -0.32, "y": 3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 2.86 }, { "x": -2.54, "y": 2.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 2.86 }, { "x": -2.54, "y": 2.22 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 2.22 }, { "x": -1.27, "y": 2.22 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.54, "y": 0.32 }, { "x": 2.54, "y": -0.32 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 0.32 }, { "x": 2.54, "y": 0.32 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -0.32 }, { "x": 1.27, "y": -0.32 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -2.22 }, { "x": -2.54, "y": -2.22 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -2.22 }, { "x": -2.54, "y": -2.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": -2.86 }, { "x": -1.27, "y": -2.86 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -3.81 }, { "x": -1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -3.81 }, { "x": -1.27, "y": 2.86 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.92} anchorAlignment="center" text="Conn_01x03" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={0} width={6.82} height={8.62} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R12: 90.9k; seven-lib:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="90.9k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.26}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.05} height={0.54} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// mB3: ~; seven-lib:mikroBUS_socket_left
export const Footprint_mB3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin9"]} pcbX="-11.77mm" pcbY="9.19mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin10"]} pcbX="-11.77mm" pcbY="6.65mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-11.77mm" pcbY="4.11mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-11.77mm" pcbY="1.57mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="-11.77mm" pcbY="-0.97mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="-11.77mm" pcbY="-3.51mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="-11.77mm" pcbY="-6.05mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="-11.77mm" pcbY="-8.59mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>



























<fabricationnotepath route={[{ "x": -13.548, "y": -10.368 }, { "x": -13.548, "y": 10.968 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.992, "y": -10.368 }, { "x": -13.548, "y": -10.368 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -13.548, "y": 10.968 }, { "x": -9.992, "y": 10.968 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -9.992, "y": 10.968 }, { "x": -9.992, "y": -10.368 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -13.67, "y": -10.49 }, { "x": -13.67, "y": 9.54 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.86, "y": -10.49 }, { "x": -13.67, "y": -10.49 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.67, "y": 9.54 }, { "x": -13.67, "y": 11.09 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.663479, "y": 11.009098 }, { "x": 6.266521, "y": 11.009098 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.266521, "y": 11.009098 }, { "x": 6.276521, "y": 15.959098 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.67, "y": 11.09 }, { "x": -9.87, "y": 11.09 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.87, "y": 11.09 }, { "x": -9.86, "y": -10.49 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.663479, "y": 15.949098 }, { "x": -6.663479, "y": 11.009098 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.276521, "y": 15.959098 }, { "x": -6.663479, "y": 15.949098 }]} layer="top"/>
      </footprint>);
// C30: 47uF; seven-lib:C_0805_2012Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="47uF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.25} height={2} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.4} height={1.96} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C10: 1.0nF; seven-lib:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1.0nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C18: 1.0nF; seven-lib:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1.0nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
// J1: JST_SH_BM03B-SRSS-TB_1x03; seven-lib:JST_SH_BM03B-SRSS-TB_1x03-1MP_P1.00mm_Vertical
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.3mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="2.3mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -2.5, "y": 1.9 }, { "x": 2.5, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -1 }, { "x": -2.5, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -1 }, { "x": 2.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -1 }, { "x": -1, "y": -0.292893 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.292893 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.5, "y": -1 }, { "x": 2.5, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="JST_SH_BM03B-SRSS-TB_1x03" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.25} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-1} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={0} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={1} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": -3.4, "y": 2.6 }, { "x": -1.19, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.4, "y": -0.2 }, { "x": -3.4, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3, "y": -0.2 }, { "x": -3.4, "y": -0.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3, "y": -1.5 }, { "x": -3, "y": -0.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -1.5 }, { "x": -3, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.8, "y": -2.6 }, { "x": -1.8, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.19, "y": 2.6 }, { "x": -1.19, "y": 2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.19, "y": 2.4 }, { "x": 1.19, "y": 2.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.19, "y": 2.6 }, { "x": 3.4, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.19, "y": 2.4 }, { "x": 1.19, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -1.5 }, { "x": 1.8, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.8, "y": -2.6 }, { "x": -1.8, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3, "y": -0.2 }, { "x": 3, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3, "y": -1.5 }, { "x": 1.8, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.4, "y": 2.6 }, { "x": 3.4, "y": -0.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.4, "y": -0.2 }, { "x": 3, "y": -0.2 }]} layer="top"/>
      </footprint>);
// C15: N.C.; seven-lib:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0.2} pcbY={-1.4} anchorAlignment="center" text="N.C." font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// JP1: Current measurement; seven-lib:PinHeader_1x02_P2.54mm_Vertical_SMD_Pin1Left
export const Footprint_JP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.655mm" pcbY="1.27mm" layer="top" width="1mm" height="2.51mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.655mm" pcbY="-1.27mm" layer="top" width="1mm" height="2.51mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -1.27, "y": -2.54 }, { "x": -1.27, "y": 1.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -2.54 }, { "x": -1.27, "y": -2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -1.59 }, { "x": 1.27, "y": -1.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": -0.95 }, { "x": 2.54, "y": -0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.54, "y": -0.95 }, { "x": 2.54, "y": -1.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 0.95 }, { "x": -1.27, "y": 0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.54, "y": 1.59 }, { "x": -2.54, "y": 0.95 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 1.59 }, { "x": -2.54, "y": 1.59 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 1.59 }, { "x": -0.32, "y": 2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.32, "y": 2.54 }, { "x": 1.27, "y": 2.54 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 2.54 }, { "x": 1.27, "y": -2.54 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.65} anchorAlignment="center" text="Current measurement" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="JP1" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={0} width={6.82} height={6.08} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D5: SK6805-EC15; seven-lib:LED_SK6805_EC15-PLCC4
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.44mm" pcbY="0.56mm" layer="top" width="0.5mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.44mm" pcbY="-0.34mm" layer="top" width="0.5mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.46mm" pcbY="-0.34mm" layer="top" width="0.5mm" height="0.5mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.46mm" pcbY="0.56mm" layer="top" width="0.5mm" height="0.5mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -1.35, "y": 1.2 }, { "x": -1.35, "y": -1.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.35, "y": -0.6 }, { "x": -0.75, "y": -1.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.35, "y": -1.2 }, { "x": 1.35, "y": -1.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.32, "y": -1.24 }, { "x": 1.32, "y": 1.16 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.35, "y": 1.2 }, { "x": -1.35, "y": 1.2 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0 }, { "x": 0.92388, "y": 0.382683 }, { "x": 0.707107, "y": 0.707107 }, { "x": 0.382683, "y": 0.92388 }, { "x": 0, "y": 1 }, { "x": -0.382683, "y": 0.92388 }, { "x": -0.707107, "y": 0.707107 }, { "x": -0.92388, "y": 0.382683 }, { "x": -1, "y": 0 }, { "x": -0.92388, "y": -0.382683 }, { "x": -0.707107, "y": -0.707107 }, { "x": -0.382683, "y": -0.92388 }, { "x": 0, "y": -1 }, { "x": 0.382683, "y": -0.92388 }, { "x": 0.707107, "y": -0.707107 }, { "x": 0.92388, "y": -0.382683 }, { "x": 1, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2.7} anchorAlignment="center" text="SK6805-EC15" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.4}/>


<courtyardoutline outline={[{ "x": -1.75, "y": 1.45 }, { "x": -1.75, "y": -1.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.45 }, { "x": 1.75, "y": -1.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.45 }, { "x": -1.75, "y": 1.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.45 }, { "x": 1.75, "y": 1.45 }]} layer="top"/>
      </footprint>);
// C25: 1.0nF; seven-lib:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="1.0nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.1} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.82} height={0.92} layer="top" pcbRotation="0deg"/>
      </footprint>);
