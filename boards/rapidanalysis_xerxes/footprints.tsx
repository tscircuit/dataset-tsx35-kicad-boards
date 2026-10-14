// Xerxes
// Source: https://github.com/rapidanalysis/xerxes
// Commit: 43abf5730d092358bc6d10e9faa7233818b5412e; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// R1: 2.2K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="2.2K 1%" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// U6: DP5405; Xerxes:DP5405
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-23.83mm" pcbY="-3.4mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="-21.29mm" pcbY="-3.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="270deg"/>
<platedhole portHints={["pin3"]} pcbX="-18.75mm" pcbY="-3.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="270deg"/>
<platedhole portHints={["pin4"]} pcbX="-16.21mm" pcbY="-3.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="270deg"/>
<platedhole portHints={["pin5"]} pcbX="19.35mm" pcbY="-3.4mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin6"]} pcbX="21.89mm" pcbY="-3.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="270deg"/>
<platedhole portHints={["pin7"]} pcbX="24.43mm" pcbY="-3.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="270deg"/>
<platedhole portHints={["pin8"]} pcbX="26.97mm" pcbY="-3.4mm" outerHeight="1.7mm" outerWidth="1.7mm" holeHeight="1mm" holeWidth="1mm" shape="pill" pcbRotation="270deg"/>
<fabricationnotetext pcbX={0} pcbY={-1} anchorAlignment="center" text="DP5405" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-2.5} anchorAlignment="center" text="U6" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -28.79, "y": 5.19 }, { "x": 28.82, "y": 5.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -28.79, "y": -5.13 }, { "x": -28.79, "y": 5.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.97, "y": -5.19 }, { "x": -28.79, "y": -5.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.95, "y": -11.13 }, { "x": -0.97, "y": -5.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 13.26, "y": -5.14 }, { "x": 13.26, "y": -11.14 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 13.26, "y": -11.14 }, { "x": -0.95, "y": -11.13 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 28.82, "y": 5.15 }, { "x": 28.82, "y": -5.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 28.82, "y": -5.15 }, { "x": 13.26, "y": -5.14 }]} layer="top"/>
      </footprint>);
// U8: CDDFN10-3324P; Xerxes:USON-10_2.5x1.0mm_P0.5mm
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.385mm" pcbY="1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.385mm" pcbY="0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.385mm" pcbY="0mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.385mm" pcbY="-0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.385mm" pcbY="-1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.385mm" pcbY="-1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.385mm" pcbY="-0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.385mm" pcbY="0mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0.385mm" pcbY="0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="0.385mm" pcbY="1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 1.25 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": -0.25, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.01829} pcbY={-2.5} anchorAlignment="center" text="CDDFN10-3324P" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={0.55}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 1.5 }, { "x": 0.91, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -1.5 }, { "x": -0.91, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 1.5 }, { "x": 0.91, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -1.5 }, { "x": -0.91, "y": -1.5 }]} layer="top"/>
      </footprint>);
// J4: Conn_01x02; Xerxes:PinHeader_1x02_P2.54mm_Vertical
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -3.81 }, { "x": -1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -3.81 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -3.81 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.92} anchorAlignment="center" text="Conn_01x02" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-1.27} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 1.77, "y": -4.32 }, { "x": 1.77, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.77, "y": 1.77 }, { "x": -1.77, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.77, "y": -4.32 }, { "x": 1.77, "y": -4.32 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.77, "y": 1.77 }, { "x": -1.77, "y": -4.32 }]} layer="top"/>
      </footprint>);
// Sym2: ~; Xerxes:RapidAnalysis_Logo
export const Footprint_Sym2 = () => (<footprint originalLayer="top">
        























































































      </footprint>);
// R15: 5.1k; Xerxes:R_0603_1608Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C3: 16SVPK220M; Xerxes:CAP_16SVPK220M
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.8mm" pcbY="0mm" layer="top" width="3.5mm" height="1.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.8mm" pcbY="0mm" layer="top" width="3.5mm" height="1.6mm" shape="rect"/>









<fabricationnotepath route={[{ "x": -3.3, "y": 1.95 }, { "x": -1.95, "y": 3.3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3.3, "y": -1.95 }, { "x": -3.3, "y": 1.95 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.95, "y": 3.3 }, { "x": 3.3, "y": 3.3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.95, "y": -3.3 }, { "x": -3.3, "y": -1.95 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.3, "y": 3.3 }, { "x": 3.3, "y": -3.3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 3.3, "y": -3.3 }, { "x": -1.95, "y": -3.3 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -4.25, "y": 1.6 }, { "x": -4.257612, "y": 1.638268 }, { "x": -4.279289, "y": 1.670711 }, { "x": -4.311732, "y": 1.692388 }, { "x": -4.35, "y": 1.7 }, { "x": -4.388268, "y": 1.692388 }, { "x": -4.420711, "y": 1.670711 }, { "x": -4.442388, "y": 1.638268 }, { "x": -4.45, "y": 1.6 }, { "x": -4.442388, "y": 1.561732 }, { "x": -4.420711, "y": 1.529289 }, { "x": -4.388268, "y": 1.507612 }, { "x": -4.35, "y": 1.5 }, { "x": -4.311732, "y": 1.507612 }, { "x": -4.279289, "y": 1.529289 }, { "x": -4.257612, "y": 1.561732 }, { "x": -4.25, "y": 1.6 }]} strokeWidth={0.2}/>
<fabricationnotetext pcbX={6.24} pcbY={-4.335} anchorAlignment="center" text="16SVPK220M" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -4.8, "y": 1.05 }, { "x": -3.55, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.8, "y": -1.05 }, { "x": -4.8, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 2.075 }, { "x": -2.075, "y": 3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": 1.05 }, { "x": -3.55, "y": 2.075 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -1.05 }, { "x": -4.8, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.55, "y": -2.075 }, { "x": -3.55, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.075, "y": 3.55 }, { "x": 3.55, "y": 3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.075, "y": -3.55 }, { "x": -3.55, "y": -2.075 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 3.55 }, { "x": 3.55, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": 1.05 }, { "x": 4.8, "y": 1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -1.05 }, { "x": 3.55, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.55, "y": -3.55 }, { "x": -2.075, "y": -3.55 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.8, "y": 1.05 }, { "x": 4.8, "y": -1.05 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.8, "y": -1.05 }, { "x": 3.55, "y": -1.05 }]} layer="top"/>
      </footprint>);
// J2: USB_C_Receptacle_USB2.0_16P; Xerxes:USB4205-GF-A
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="3.57mm" diameter="0.8128mm"/>
<hole pcbX="0mm" pcbY="-3.58mm" diameter="0.8128mm"/>
<platedhole portHints={["pin17"]} pcbX="-2.029998mm" pcbY="3.220001mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="-2.029998mm" pcbY="-2.879999mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="2.029998mm" pcbY="3.220001mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<platedhole portHints={["pin17"]} pcbX="2.029998mm" pcbY="-2.879999mm" outerHeight="2.1mm" outerWidth="1mm" holeHeight="1.7mm" holeWidth="0.6mm" shape="pill" pcbRotation="360deg"/>
<smtpad portHints={["pin1"]} pcbX="0.875mm" pcbY="2.6mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.875mm" pcbY="1.8mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.875mm" pcbY="1.05mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.875mm" pcbY="0.35mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.875mm" pcbY="-0.35mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.875mm" pcbY="-1.05mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.875mm" pcbY="-1.8mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.875mm" pcbY="-2.6mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-0.875mm" pcbY="-2.6mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-0.875mm" pcbY="-1.8mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.875mm" pcbY="-1.05mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.875mm" pcbY="-0.35mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-0.875mm" pcbY="0.35mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-0.875mm" pcbY="1.05mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-0.875mm" pcbY="1.8mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-0.875mm" pcbY="2.6mm" layer="top" width="0.4572mm" height="1.0414mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.029998mm" pcbY="3.220001mm" layer="top" width="1.4986mm" height="0.889mm" radius="0.4445mm" ccwRotation={90} shape="rotated_pill"/>








<fabricationnotepath route={[{ "x": -1.8542, "y": -9.8754 }, { "x": 1.8542, "y": -9.8754 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 1.8542, "y": -9.8754 }, { "x": 1.8542, "y": 4.119999 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": -1.8542, "y": 4.119999 }, { "x": -1.8542, "y": -9.8754 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 1.8542, "y": 4.119999 }, { "x": -1.8542, "y": 4.119999 }]} strokeWidth={0.1524}/>
<fabricationnotepath route={[{ "x": 0.875, "y": 4.886 }, { "x": 0.729198, "y": 4.856998 }, { "x": 0.605592, "y": 4.774408 }, { "x": 0.523002, "y": 4.650802 }, { "x": 0.494, "y": 4.505 }, { "x": 0.523002, "y": 4.359198 }, { "x": 0.605592, "y": 4.235592 }, { "x": 0.729198, "y": 4.153002 }, { "x": 0.875, "y": 4.124 }, { "x": 1.020802, "y": 4.153002 }, { "x": 1.144408, "y": 4.235592 }, { "x": 1.226998, "y": 4.359198 }, { "x": 1.256, "y": 4.505 }, { "x": 1.226998, "y": 4.650802 }, { "x": 1.144408, "y": 4.774408 }, { "x": 1.020802, "y": 4.856998 }, { "x": 0.875, "y": 4.886 }]} strokeWidth={0.1524}/>
<courtyardoutline outline={[{ "x": -2.728499, "y": -10.1294 }, { "x": 2.728499, "y": -10.1294 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.728499, "y": -10.1294 }, { "x": 2.728499, "y": 4.373999 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.728499, "y": 4.373999 }, { "x": -2.728499, "y": -10.1294 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.728499, "y": 4.373999 }, { "x": -2.728499, "y": 4.373999 }]} layer="top"/>
      </footprint>);
// C2: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="top" cornerRadius="0.125mm" width="1mm" height="1.45mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": 1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": -1.7, "y": 0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": 1.7, "y": -0.98 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": -1.7, "y": -0.98 }]} layer="top"/>
      </footprint>);
// J7: BM04B-SRSS-TBLFSN; Xerxes:JST_SH_BM04B-SRSS-TB_1x04-1MP_P1.00mm_Vertical
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.8mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.8mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": 3, "y": -1 }, { "x": 3, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -0.292893 }, { "x": -1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -1 }, { "x": -1.5, "y": -0.292893 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": -1 }, { "x": 3, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": -1 }, { "x": -3, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": 1.9 }, { "x": 3, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="BM04B-SRSS-TBLFSN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.25} anchorAlignment="center" text="J7" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={1.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={0.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={-0.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={-1.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardoutline outline={[{ "x": 3.9, "y": -2.6 }, { "x": 3.9, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": 2.6 }, { "x": -3.9, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -2.6 }, { "x": 3.9, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": 2.6 }, { "x": -3.9, "y": -2.6 }]} layer="top"/>
      </footprint>);
// R7: 470R; Xerxes:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="470R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C4: 100n; Xerxes:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25}/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": -0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": -0.91, "y": -0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": 0.91, "y": 0.46 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": 0.91, "y": -0.46 }]} layer="top"/>
      </footprint>);
// Conn2: ComputeModule5 High Speed rail; Xerxes:CONN_DF40C-100DS-0.4V51_HIR
export const Footprint_Conn2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-9.799998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-9.799998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-9.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-9.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-9mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-9mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-8.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-8.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-8.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-7.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-7.399998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-7.399998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-6.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-6.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-6.599999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-6.599999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-6.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-6.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-5.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="-5.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="-5.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="-5.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="-5mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="-5mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="-4.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="-4.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="-4.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="-4.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="-3.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="-3.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="-3.399998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="-3.399998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="-2.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="-2.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="-2.6mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="-2.6mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="-2.200001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="-2.200001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="-1.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="-1.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="-1.4mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="-1.4mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="-1.000001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="-1.000001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="-0.599999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="-0.599999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="-0.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="-0.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="0.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="0.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin53"]} pcbX="0.600001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin54"]} pcbX="0.600001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin55"]} pcbX="1.000001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin56"]} pcbX="1.000001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin57"]} pcbX="1.4mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin58"]} pcbX="1.4mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin59"]} pcbX="1.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin60"]} pcbX="1.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin61"]} pcbX="2.200001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin62"]} pcbX="2.200001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin63"]} pcbX="2.6mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin64"]} pcbX="2.6mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin65"]} pcbX="2.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin66"]} pcbX="2.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin67"]} pcbX="3.400001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin68"]} pcbX="3.400001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin69"]} pcbX="3.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin70"]} pcbX="3.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin71"]} pcbX="4.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin72"]} pcbX="4.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin73"]} pcbX="4.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin74"]} pcbX="4.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin75"]} pcbX="5mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin76"]} pcbX="5mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin77"]} pcbX="5.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin78"]} pcbX="5.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin79"]} pcbX="5.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin80"]} pcbX="5.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin81"]} pcbX="6.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin82"]} pcbX="6.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin83"]} pcbX="6.599999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin84"]} pcbX="6.599999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin85"]} pcbX="6.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin86"]} pcbX="6.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin87"]} pcbX="7.4mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin88"]} pcbX="7.4mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin89"]} pcbX="7.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin90"]} pcbX="7.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin91"]} pcbX="8.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin92"]} pcbX="8.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin93"]} pcbX="8.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin94"]} pcbX="8.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin95"]} pcbX="9mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin96"]} pcbX="9mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin97"]} pcbX="9.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin98"]} pcbX="9.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin99"]} pcbX="9.799998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin100"]} pcbX="9.799998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -11.4046, "y": 1.7907 }, { "x": 11.4046, "y": 1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -11.4046, "y": -1.7907 }, { "x": -11.4046, "y": 1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 11.4046, "y": 1.7907 }, { "x": 11.4046, "y": -1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 11.4046, "y": -1.7907 }, { "x": -11.4046, "y": -1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="ComputeModule5 High Speed rail" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Conn2" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -11.6586, "y": 2.149599 }, { "x": 11.6586, "y": 2.149599 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -11.6586, "y": -2.149599 }, { "x": -11.6586, "y": 2.149599 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.6586, "y": 2.149599 }, { "x": 11.6586, "y": -2.149599 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.6586, "y": -2.149599 }, { "x": -11.6586, "y": -2.149599 }]} layer="top"/>
      </footprint>);
// Module1: Compute Module 5; Xerxes:Raspberry-Pi-5-Compute-Module
export const Footprint_Module1 = () => (<footprint originalLayer="top">
        <hole pcbX="3.5mm" pcbY="51.49mm" diameter="2.7mm"/>
<hole pcbX="3.5mm" pcbY="3.49mm" diameter="2.7mm"/>
<hole pcbX="36.5mm" pcbY="51.49mm" diameter="2.7mm"/>
<hole pcbX="36.5mm" pcbY="3.49mm" diameter="2.7mm"/>












<fabricationnotetext pcbX={20.02} pcbY={3.3} anchorAlignment="center" text="Compute Module 5" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// J5: Conn_01x03; Xerxes:PinHeader_1x03_P2.54mm_Vertical
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.08mm" outerDiameter="1.7mm" holeDiameter="1mm" shape="circle"/>






<fabricationnotepath route={[{ "x": 1.27, "y": -6.35 }, { "x": -1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 1.27, "y": 1.27 }, { "x": 1.27, "y": -6.35 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.635, "y": 1.27 }, { "x": 1.27, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -6.35 }, { "x": -1.27, "y": 0.635 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 0.635 }, { "x": -0.635, "y": 1.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-7.46} anchorAlignment="center" text="Conn_01x03" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-2.54} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": 1.77, "y": -6.85 }, { "x": 1.77, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.77, "y": 1.77 }, { "x": -1.77, "y": 1.77 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.77, "y": -6.85 }, { "x": 1.77, "y": -6.85 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.77, "y": 1.77 }, { "x": -1.77, "y": -6.85 }]} layer="top"/>
      </footprint>);
// D2: LED Red; Xerxes:LED_0603_1608Metric
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="LED Red" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// U5: 74LVC1G07; Xerxes:SOT-353_SC-70-5
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.95mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.95mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.95mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="0.65mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.675, "y": -1.1 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": 0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.675, "y": 1.1 }, { "x": -0.175, "y": 1.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.175, "y": 1.1 }, { "x": -0.675, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.675, "y": 0.6 }, { "x": -0.675, "y": -1.1 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="center" text="74LVC1G07" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={0.5}/>
<courtyardoutline outline={[{ "x": 1.6, "y": -1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": -1.4 }, { "x": 1.6, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": 1.6, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.6, "y": 1.4 }, { "x": -1.6, "y": -1.4 }]} layer="top"/>
      </footprint>);
// Conn1: ComputeModule5 GPIO rail; Xerxes:CONN_DF40C-100DS-0.4V51_HIR
export const Footprint_Conn1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-9.799998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-9.799998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-9.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-9.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-9mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-9mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-8.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-8.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-8.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-7.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-7.399998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-7.399998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-6.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-6.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-6.599999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-6.599999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-6.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-6.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-5.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="-5.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="-5.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="-5.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="-5mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="-5mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="-4.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="-4.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="-4.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="-4.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="-3.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="-3.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="-3.399998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="-3.399998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="-2.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="-2.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="-2.6mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="-2.6mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="-2.200001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="-2.200001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="-1.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="-1.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="-1.4mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="-1.4mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="-1.000001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="-1.000001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="-0.599999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="-0.599999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="-0.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="-0.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="0.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="0.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin53"]} pcbX="0.600001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin54"]} pcbX="0.600001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin55"]} pcbX="1.000001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin56"]} pcbX="1.000001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin57"]} pcbX="1.4mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin58"]} pcbX="1.4mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin59"]} pcbX="1.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin60"]} pcbX="1.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin61"]} pcbX="2.200001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin62"]} pcbX="2.200001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin63"]} pcbX="2.6mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin64"]} pcbX="2.6mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin65"]} pcbX="2.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin66"]} pcbX="2.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin67"]} pcbX="3.400001mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin68"]} pcbX="3.400001mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin69"]} pcbX="3.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin70"]} pcbX="3.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin71"]} pcbX="4.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin72"]} pcbX="4.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin73"]} pcbX="4.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin74"]} pcbX="4.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin75"]} pcbX="5mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin76"]} pcbX="5mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin77"]} pcbX="5.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin78"]} pcbX="5.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin79"]} pcbX="5.799999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin80"]} pcbX="5.799999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin81"]} pcbX="6.2mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin82"]} pcbX="6.2mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin83"]} pcbX="6.599999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin84"]} pcbX="6.599999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin85"]} pcbX="6.999999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin86"]} pcbX="6.999999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin87"]} pcbX="7.4mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin88"]} pcbX="7.4mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin89"]} pcbX="7.8mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin90"]} pcbX="7.8mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin91"]} pcbX="8.199999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin92"]} pcbX="8.199999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin93"]} pcbX="8.599998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin94"]} pcbX="8.599998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin95"]} pcbX="9mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin96"]} pcbX="9mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin97"]} pcbX="9.399999mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin98"]} pcbX="9.399999mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin99"]} pcbX="9.799998mm" pcbY="-1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<smtpad portHints={["pin100"]} pcbX="9.799998mm" pcbY="1.539999mm" layer="top" width="0.2286mm" height="0.7112mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -11.4046, "y": 1.7907 }, { "x": 11.4046, "y": 1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -11.4046, "y": -1.7907 }, { "x": -11.4046, "y": 1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 11.4046, "y": 1.7907 }, { "x": 11.4046, "y": -1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 11.4046, "y": -1.7907 }, { "x": -11.4046, "y": -1.7907 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="ComputeModule5 GPIO rail" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="Conn1" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -11.6586, "y": 2.149599 }, { "x": 11.6586, "y": 2.149599 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -11.6586, "y": -2.149599 }, { "x": -11.6586, "y": 2.149599 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.6586, "y": 2.149599 }, { "x": 11.6586, "y": -2.149599 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.6586, "y": -2.149599 }, { "x": -11.6586, "y": -2.149599 }]} layer="top"/>
      </footprint>);
// J8: BM03B-SRSS-TBLFSN; Xerxes:JST_SH_BM03B-SRSS-TB_1x03-1MP_P1.00mm_Vertical
export const Footprint_J8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.3mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="2.3mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": 2.5, "y": -1 }, { "x": 2.5, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.292893 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -1 }, { "x": -1, "y": -0.292893 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -1 }, { "x": 2.5, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": -1 }, { "x": -2.5, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 1.9 }, { "x": 2.5, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="BM03B-SRSS-TBLFSN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.25} anchorAlignment="center" text="J8" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={1} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={0} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={-1} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardoutline outline={[{ "x": 3.4, "y": -2.6 }, { "x": 3.4, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.4, "y": 2.6 }, { "x": -3.4, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.4, "y": -2.6 }, { "x": 3.4, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.4, "y": 2.6 }, { "x": -3.4, "y": -2.6 }]} layer="top"/>
      </footprint>);
// R14: 5.1k; Xerxes:R_0603_1608Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.8mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="5.1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// J6: BM04B-SRSS-TBLFSN; Xerxes:JST_SH_BM04B-SRSS-TB_1x04-1MP_P1.00mm_Vertical
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.5mm" pcbY="-1.325mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.8mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.8mm" pcbY="1.2mm" layer="top" cornerRadius="0.125mm" width="1.2mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": 3, "y": -1 }, { "x": 3, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -0.292893 }, { "x": -1, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2, "y": -1 }, { "x": -1.5, "y": -0.292893 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": -1 }, { "x": 3, "y": -1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": -1 }, { "x": -3, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": 1.9 }, { "x": 3, "y": 1.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.3} anchorAlignment="center" text="BM04B-SRSS-TBLFSN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0.25} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={1.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={0.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={-0.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<fabricationnoterect pcbX={-1.5} pcbY={1.25} width={0.3} height={0.6} strokeWidth={0.1} isFilled={false} hasStroke={true}/>
<courtyardoutline outline={[{ "x": 3.9, "y": -2.6 }, { "x": 3.9, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.9, "y": 2.6 }, { "x": -3.9, "y": 2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": -2.6 }, { "x": 3.9, "y": -2.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.9, "y": 2.6 }, { "x": -3.9, "y": -2.6 }]} layer="top"/>
      </footprint>);
// R11: 1k; Xerxes:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D3: LED Green; Xerxes:LED_0603_1608Metric
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="LED Green" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={0.4}/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// R12: 1k; Xerxes:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R6: 470R; Xerxes:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="470R" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.26}/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// J9: BM06B-SRSS-TBLFSN; Xerxes:CONN_BM06B-SRSS-TB_JST
export const Footprint_J9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="2.5mm" pcbY="1.7728mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5mm" pcbY="1.7728mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.499999mm" pcbY="1.7728mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.499999mm" pcbY="1.7728mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.5mm" pcbY="1.7728mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.5mm" pcbY="1.7728mm" layer="top" width="0.6mm" height="1.55mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.8mm" pcbY="-0.752199mm" layer="top" width="1.2mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="3.8mm" pcbY="-0.752199mm" layer="top" width="1.2mm" height="1.8mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -4.0005, "y": 1.4478 }, { "x": -4.0005, "y": -1.447801 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.0005, "y": -1.447801 }, { "x": 4.0005, "y": -1.447801 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.0005, "y": 1.4478 }, { "x": -4.0005, "y": 1.4478 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.0005, "y": -1.447801 }, { "x": 4.0005, "y": 1.4478 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={1.7728} anchorAlignment="center" text="BM06B-SRSS-TBLFSN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={1.7728} anchorAlignment="center" text="J9" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -4.653999, "y": 2.8018 }, { "x": -4.653999, "y": -1.906199 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.653999, "y": -1.906199 }, { "x": 4.653999, "y": -1.906199 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.653999, "y": 2.8018 }, { "x": -4.653999, "y": 2.8018 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.653999, "y": -1.906199 }, { "x": 4.653999, "y": 2.8018 }]} layer="top"/>
      </footprint>);
// U4: MagJack-RJ45; Xerxes:TRJG0926HENL
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <hole pcbX="-5.715mm" pcbY="0mm" diameter="3.2mm"/>
<hole pcbX="5.715mm" pcbY="0mm" diameter="3.2mm"/>
<platedhole portHints={["pin1"]} pcbX="-5.715mm" pcbY="8.89mm" holeShape="circle" padShape="rect" holeDiameter="0.9mm" rectPadWidth="1.5mm" rectPadHeight="1.5mm" rectBorderRadius="0.12525mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="360deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="-4.445mm" pcbY="6.35mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-3.175mm" pcbY="8.89mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-1.905mm" pcbY="6.35mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="-0.635mm" pcbY="8.89mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="0.635mm" pcbY="6.35mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="1.905mm" pcbY="8.89mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="3.175mm" pcbY="6.35mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="4.445mm" pcbY="8.89mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="5.715mm" pcbY="6.35mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-5.715mm" pcbY="3.83mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-3.175mm" pcbY="2.56mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="3.175mm" pcbY="2.56mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="5.715mm" pcbY="3.83mm" outerDiameter="1.5mm" holeDiameter="0.9mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="-6.63mm" pcbY="-4.06mm" outerDiameter="1.5mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="-4.09mm" pcbY="-4.06mm" outerDiameter="1.5mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="4.09mm" pcbY="-4.06mm" outerDiameter="1.5mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin18"]} pcbX="6.63mm" pcbY="-4.06mm" outerDiameter="1.5mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin19"]} pcbX="-7.875mm" pcbY="3.05mm" outerDiameter="2.5mm" holeDiameter="1.7mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="7.875mm" pcbY="3.05mm" outerDiameter="2.5mm" holeDiameter="1.7mm" shape="circle"/>








<fabricationnotepath route={[{ "x": -8, "y": -10.9 }, { "x": 8, "y": -10.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8, "y": 5.37 }, { "x": -8, "y": -10.9 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8, "y": 10.5 }, { "x": -8, "y": 0 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -8, "y": 10.5 }, { "x": 8, "y": 10.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 8, "y": 10.5 }, { "x": 8, "y": -10.9 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-11.58} anchorAlignment="center" text="MagJack-RJ45" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U4" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -8.25, "y": -11.15 }, { "x": 8.25, "y": -11.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.25, "y": 1.43 }, { "x": -8.25, "y": -11.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.25, "y": 1.43 }, { "x": 8.25, "y": -11.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.25, "y": 2.43 }, { "x": -8.25, "y": 1.43 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.25, "y": 2.43 }, { "x": -9.25, "y": 3.71 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.25, "y": 2.43 }, { "x": 8.25, "y": 1.43 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.25, "y": 2.43 }, { "x": 9.25, "y": 3.71 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.25, "y": 4.71 }, { "x": -9.25, "y": 3.71 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.25, "y": 4.71 }, { "x": -8.25, "y": 10.76 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.25, "y": 4.71 }, { "x": 9.25, "y": 3.71 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.25, "y": 4.71 }, { "x": 8.25, "y": 10.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.25, "y": 10.75 }, { "x": 8.25, "y": 10.75 }]} layer="top"/>
      </footprint>);
// U7: CDDFN10-3324P; Xerxes:USON-10_2.5x1.0mm_P0.5mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.385mm" pcbY="1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.385mm" pcbY="0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.385mm" pcbY="0mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.385mm" pcbY="-0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.385mm" pcbY="-1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.385mm" pcbY="-1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="0.385mm" pcbY="-0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="0.385mm" pcbY="0mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="0.385mm" pcbY="0.5mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="0.385mm" pcbY="1mm" layer="top" cornerRadius="0.0375mm" width="0.55mm" height="0.3mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 1.25 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": -0.25, "y": 1.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 1.25 }, { "x": 0.5, "y": -1.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0.01829} pcbY={-2.5} anchorAlignment="center" text="CDDFN10-3324P" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={0.55}/>
<courtyardoutline outline={[{ "x": -0.91, "y": 1.5 }, { "x": 0.91, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -1.5 }, { "x": -0.91, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 1.5 }, { "x": 0.91, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -1.5 }, { "x": -0.91, "y": -1.5 }]} layer="top"/>
      </footprint>);
// Sym1: ~; Xerxes:Xerxes_Logo
export const Footprint_Sym1 = () => (<footprint originalLayer="bottom">
        





      </footprint>);
// C11: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// C8: 100n; Xerxes:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.62mm" height="0.56mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// J10: DF40HC(4.0)-50DS-0.4V(51); Xerxes:HRS_DF40HC_4.0_-50DS-0.4V_51_
export const Footprint_J10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="4.8mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="4.8mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="4.4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="4.4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="3.2mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="3.2mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="2.8mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="2.8mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="2.4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="1.6mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="1.6mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="1.2mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="1.2mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0.8mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="0.8mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="0.4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="0.4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="0mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="0mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="-0.4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="-0.4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.8mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.8mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.2mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.2mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-1.6mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="-1.6mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="-2mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="-2mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="-2.4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="-2.4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="-2.8mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="-2.8mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="-3.2mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="-3.2mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="-3.6mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="-3.6mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="-4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="-4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="-4.4mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="-4.4mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="-4.8mm" pcbY="1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="-4.8mm" pcbY="-1.54mm" layer="bottom" width="0.2mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": 6.3, "y": -1.47 }, { "x": 6.3, "y": 1.47 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.3, "y": 1.47 }, { "x": -6.3, "y": 1.47 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -6.3, "y": -1.47 }, { "x": 6.3, "y": -1.47 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -6.3, "y": 1.47 }, { "x": -6.3, "y": -1.47 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 4.7, "y": 2.49 }, { "x": 4.707612, "y": 2.451732 }, { "x": 4.729289, "y": 2.419289 }, { "x": 4.761732, "y": 2.397612 }, { "x": 4.8, "y": 2.39 }, { "x": 4.838268, "y": 2.397612 }, { "x": 4.870711, "y": 2.419289 }, { "x": 4.892388, "y": 2.451732 }, { "x": 4.9, "y": 2.49 }, { "x": 4.892388, "y": 2.528268 }, { "x": 4.870711, "y": 2.560711 }, { "x": 4.838268, "y": 2.582388 }, { "x": 4.8, "y": 2.59 }, { "x": 4.761732, "y": 2.582388 }, { "x": 4.729289, "y": 2.560711 }, { "x": 4.707612, "y": 2.528268 }, { "x": 4.7, "y": 2.49 }]} strokeWidth={0.2} layer="bottom"/>
<fabricationnotetext pcbX={8.1975} pcbY={2.675} anchorAlignment="center" text="DF40HC(4.0)-50DS-0.4V(51)" font="tscircuit2024" fontSize={0.787402} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.55, "y": -2.14 }, { "x": -6.55, "y": -2.14 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 6.55, "y": 2.14 }, { "x": 6.55, "y": -2.14 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.55, "y": -2.14 }, { "x": -6.55, "y": 2.14 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -6.55, "y": 2.14 }, { "x": 6.55, "y": 2.14 }]} layer="bottom"/>
      </footprint>);
// R8: 10K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="10K 1%" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// R4: 2.2K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="2.2K 1%" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// D1: LED Green; Xerxes:LED_0603_1608Metric
export const Footprint_D1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="bottom" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="bottom" cornerRadius="0.109375mm" width="0.875mm" height="0.95mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.1 }, { "x": -0.5, "y": -0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": -0.8, "y": -0.1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="LED Green" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
      </footprint>);
// D6: SMAJ58A; Xerxes:D_SMA
export const Footprint_D6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="2.5mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="2.5mm" height="1.8mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -2.3, "y": 1.5 }, { "x": -2.3, "y": -1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.64944, "y": 0.00102 }, { "x": -1.55114, "y": 0.00102 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.64944, "y": 0.00102 }, { "x": 0.50118, "y": 0.75032 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.64944, "y": 0.00102 }, { "x": 0.50118, "y": -0.79908 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.64944, "y": -0.79908 }, { "x": -0.64944, "y": 0.80112 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.50118, "y": 0.75032 }, { "x": 0.50118, "y": -0.79908 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.50118, "y": 0.00102 }, { "x": 1.4994, "y": 0.00102 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.3, "y": 1.5 }, { "x": -2.3, "y": 1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.3, "y": -1.5 }, { "x": -2.3, "y": -1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.3, "y": -1.5 }, { "x": 2.3, "y": 1.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.6} anchorAlignment="center" text="SMAJ58A" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-2.5} anchorAlignment="center" text="D6" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 1.75 }, { "x": -3.5, "y": -1.75 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.5, "y": -1.75 }, { "x": 3.5, "y": -1.75 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 1.75 }, { "x": -3.5, "y": 1.75 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.5, "y": -1.75 }, { "x": 3.5, "y": 1.75 }]} layer="bottom"/>
      </footprint>);
// U1: RT9742GGJ5; Xerxes:SOT-23-5
export const Footprint_U1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1375mm" pcbY="-0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1375mm" pcbY="0mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.1375mm" pcbY="0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.1375mm" pcbY="0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.1375mm" pcbY="-0.95mm" layer="bottom" cornerRadius="0.075mm" width="1.325mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": 0.8, "y": -1.45 }, { "x": -0.4, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 1.45 }, { "x": 0.8, "y": -1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.4, "y": -1.45 }, { "x": -0.8, "y": -1.05 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -1.05 }, { "x": -0.8, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 1.45 }, { "x": 0.8, "y": 1.45 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.4} anchorAlignment="center" text="RT9742GGJ5" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.4} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.05, "y": -1.7 }, { "x": 2.05, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.05, "y": 1.7 }, { "x": -2.05, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.05, "y": -1.7 }, { "x": 2.05, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.05, "y": 1.7 }, { "x": -2.05, "y": -1.7 }]} layer="bottom"/>
      </footprint>);
// C10: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// R10: 2.2K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="2.2K 1%" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// C9: 4.7nF; Xerxes:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.16} anchorAlignment="center" text="4.7nF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
      </footprint>);
// R9: 100K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="100K 1%" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// D4: MB6S; Xerxes:TO-269AA
export const Footprint_D4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-3.075mm" pcbY="-1.27mm" layer="bottom" width="1mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.075mm" pcbY="1.27mm" layer="bottom" width="1mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="3.075mm" pcbY="1.27mm" layer="bottom" width="1mm" height="0.8mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="3.075mm" pcbY="-1.27mm" layer="bottom" width="1mm" height="0.8mm" shape="rect"/>
















<fabricationnotepath route={[{ "x": -2.05, "y": 2.4 }, { "x": -2.05, "y": -1.7 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.05, "y": -1.7 }, { "x": -1.35, "y": -2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.35, "y": -2.4 }, { "x": 2.05, "y": -2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.05, "y": 2.4 }, { "x": -2.05, "y": 2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.05, "y": -2.4 }, { "x": 2.05, "y": 2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3.5} anchorAlignment="center" text="MB6S" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-0.065} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.82, "y": -2.65 }, { "x": -3.82, "y": 2.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.82, "y": -2.65 }, { "x": 3.83, "y": -2.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.83, "y": 2.65 }, { "x": -3.82, "y": 2.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.83, "y": 2.65 }, { "x": 3.83, "y": -2.65 }]} layer="bottom"/>
      </footprint>);
// C7: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// D5: MB6S; Xerxes:TO-269AA
export const Footprint_D5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-3.075mm" pcbY="-1.27mm" layer="bottom" width="1mm" height="0.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.075mm" pcbY="1.27mm" layer="bottom" width="1mm" height="0.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="3.075mm" pcbY="1.27mm" layer="bottom" width="1mm" height="0.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="3.075mm" pcbY="-1.27mm" layer="bottom" width="1mm" height="0.8mm" ccwRotation={-180} shape="rotated_rect"/>
















<fabricationnotepath route={[{ "x": 2.05, "y": -2.4 }, { "x": 2.05, "y": 2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.05, "y": 2.4 }, { "x": -2.05, "y": 2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.35, "y": -2.4 }, { "x": 2.05, "y": -2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.05, "y": -1.7 }, { "x": -1.35, "y": -2.4 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.05, "y": 2.4 }, { "x": -2.05, "y": -1.7 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3.5} anchorAlignment="center" text="MB6S" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={-0.065} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.83, "y": 2.65 }, { "x": 3.83, "y": -2.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.83, "y": 2.65 }, { "x": -3.82, "y": 2.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.82, "y": -2.65 }, { "x": 3.83, "y": -2.65 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.82, "y": -2.65 }, { "x": -3.82, "y": 2.65 }]} layer="bottom"/>
      </footprint>);
// C12: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// L1: 2.2uH; Xerxes:L_Bourns_SRP5030CC
export const Footprint_L1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.25mm" pcbY="0mm" layer="bottom" cornerRadius="0.25mm" width="2.8mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="2.25mm" pcbY="0mm" layer="bottom" cornerRadius="0.25mm" width="2.8mm" height="2mm" ccwRotation={-90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 2.85, "y": 2.6 }, { "x": 2.85, "y": -2.6 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.85, "y": 2.6 }, { "x": 2.85, "y": 2.6 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.85, "y": -1.6 }, { "x": -2.85, "y": 2.6 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 2.85, "y": -2.6 }, { "x": -1.85, "y": -2.6 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.85, "y": -2.6 }, { "x": -2.85, "y": -1.6 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3.6} anchorAlignment="center" text="2.2uH" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": 2.85 }, { "x": -3.1, "y": 2.85 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": 2.85 }, { "x": 3.1, "y": 1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.1, "y": 2.85 }, { "x": -3.1, "y": 1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 1.8 }, { "x": 3.5, "y": -1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": 1.8 }, { "x": 3.5, "y": 1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 1.8 }, { "x": -3.1, "y": 1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.5, "y": -1.8 }, { "x": 3.1, "y": -1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": -1.8 }, { "x": 3.1, "y": -2.85 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.1, "y": -1.8 }, { "x": -3.5, "y": -1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.1, "y": -1.8 }, { "x": -3.1, "y": -2.85 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -3.5, "y": -1.8 }, { "x": -3.5, "y": 1.8 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 3.1, "y": -2.85 }, { "x": -3.1, "y": -2.85 }]} layer="bottom"/>
      </footprint>);
// J1: Micro_SD_Card_Det; Xerxes:SDCARD_MOLEX_503398-1892
export const Footprint_J1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.38mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.28mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.18mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.92mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.02mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.12mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="4.22mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="5.32mm" pcbY="-5.625mm" layer="bottom" width="1.1mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-4.17mm" pcbY="6.84mm" layer="bottom" width="0.93mm" height="0.9mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.095mm" pcbY="6.915mm" layer="bottom" width="0.78mm" height="1.05mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-6.48mm" pcbY="5.64mm" layer="bottom" width="3.33mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-6.26mm" pcbY="-5.61mm" layer="bottom" width="1.83mm" height="1.14mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="6.4mm" pcbY="-5.125mm" layer="bottom" width="2.8mm" height="0.86mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="6.48mm" pcbY="5.64mm" layer="bottom" width="3.33mm" height="0.7mm" ccwRotation={-90} shape="rotated_rect"/>






<fabricationnotepath route={[{ "x": 6.55, "y": 7.025 }, { "x": 6.55, "y": -7.025 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -6.55, "y": 7.025 }, { "x": 6.55, "y": 7.025 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 6.55, "y": -7.025 }, { "x": -6.55, "y": -7.025 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -6.55, "y": -7.025 }, { "x": -6.55, "y": 7.025 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -2.38, "y": -5.875 }, { "x": -2.341732, "y": -5.867388 }, { "x": -2.309289, "y": -5.845711 }, { "x": -2.287612, "y": -5.813268 }, { "x": -2.28, "y": -5.775 }, { "x": -2.287612, "y": -5.736732 }, { "x": -2.309289, "y": -5.704289 }, { "x": -2.341732, "y": -5.682612 }, { "x": -2.38, "y": -5.675 }, { "x": -2.418268, "y": -5.682612 }, { "x": -2.450711, "y": -5.704289 }, { "x": -2.472388, "y": -5.736732 }, { "x": -2.48, "y": -5.775 }, { "x": -2.472388, "y": -5.813268 }, { "x": -2.450711, "y": -5.845711 }, { "x": -2.418268, "y": -5.867388 }, { "x": -2.38, "y": -5.875 }]} strokeWidth={0.2} layer="bottom"/>
<fabricationnotetext pcbX={3.719055} pcbY={8.349145} anchorAlignment="center" text="Micro_SD_Card_Det" font="tscircuit2024" fontSize={1.001094} layer="bottom"/>
<courtyardoutline outline={[{ "x": 7, "y": 7.5 }, { "x": 7, "y": -7.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -7, "y": 7.5 }, { "x": 7, "y": 7.5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 7, "y": -7.25 }, { "x": -7, "y": -7.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -7, "y": -7.25 }, { "x": -7, "y": 7.5 }]} layer="bottom"/>
      </footprint>);
// U2: ASEK-32.768KHZ-L-R-T; Xerxes:Crystal_SMD_3225-4Pin_3.2x2.5mm
export const Footprint_U2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.85mm" layer="bottom" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0.85mm" layer="bottom" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.85mm" layer="bottom" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.1mm" pcbY="-0.85mm" layer="bottom" width="1.4mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 1.6, "y": -1.25 }, { "x": 1.6, "y": 1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.6, "y": 1.25 }, { "x": -1.6, "y": 1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.6, "y": 1.25 }, { "x": -1.6, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": -1.25 }, { "x": 1.6, "y": -1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1.6, "y": 1.25 }, { "x": -1.6, "y": -1.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2.45} anchorAlignment="center" text="ASEK-32.768KHZ-L-R-T" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.1, "y": -1.7 }, { "x": 2.1, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 2.1, "y": 1.7 }, { "x": -2.1, "y": 1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.1, "y": -1.7 }, { "x": 2.1, "y": -1.7 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -2.1, "y": 1.7 }, { "x": -2.1, "y": -1.7 }]} layer="bottom"/>
      </footprint>);
// C13: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// C6: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1.45mm" height="1mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
// U3: AP3441SHE-7B; Xerxes:DFN-8-1EP_2x2mm_P0.5mm_EP1.05x1.75mm
export const Footprint_U3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.9mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.9mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.9mm" pcbY="0.75mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.9mm" pcbY="0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.9mm" pcbY="-0.25mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.9mm" pcbY="-0.75mm" layer="bottom" width="0.5mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" layer="bottom" width="1.05mm" height="1.75mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 1, "y": -1 }, { "x": -0.5, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 1 }, { "x": 1, "y": -1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1 }, { "x": -1, "y": -0.5 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.5 }, { "x": -1, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": 1 }, { "x": 1, "y": 1 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={2} anchorAlignment="center" text="AP3441SHE-7B" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.4, "y": -1.25 }, { "x": -1.4, "y": -1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.4, "y": 1.25 }, { "x": 1.4, "y": -1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.4, "y": 1.25 }, { "x": -1.4, "y": 1.25 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.4, "y": 1.25 }, { "x": -1.4, "y": -1.25 }]} layer="bottom"/>
      </footprint>);
// R2: 12K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="12K 1%" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// C5: 100n; Xerxes:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07mm" width="0.56mm" height="0.62mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.16} anchorAlignment="center" text="100n" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": -0.46 }, { "x": -0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.91, "y": 0.46 }, { "x": 0.91, "y": -0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": -0.46 }, { "x": -0.91, "y": 0.46 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.91, "y": 0.46 }, { "x": 0.91, "y": 0.46 }]} layer="bottom"/>
      </footprint>);
// R13: 1k; Xerxes:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// R5: 2.2K 1%; Xerxes:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="2.2K 1%" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
      </footprint>);
// R3: 1k; Xerxes:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="bottom" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="1k" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.26} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="bottom"/>
      </footprint>);
// J3: Bus_M.2_Socket_M; Xerxes:M.2 M Key socket
export const Footprint_J3 = () => (<footprint originalLayer="bottom">
        <hole pcbX="-10mm" pcbY="0mm" diameter="1.15mm"/>
<hole pcbX="10mm" pcbY="0mm" diameter="1.65mm"/>
<platedhole portHints={["pin76"]} pcbX="0mm" pcbY="28.25mm" outerDiameter="5.8mm" holeDiameter="3.7mm" shape="circle"/>
<platedhole portHints={["pin77"]} pcbX="0mm" pcbY="40.25mm" outerDiameter="5.8mm" holeDiameter="3.7mm" shape="circle"/>
<platedhole portHints={["pin78"]} pcbX="0mm" pcbY="58.25mm" outerDiameter="5.8mm" holeDiameter="3.7mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="-9.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-9mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-8.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-8.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-8.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-8mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-7.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-7.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-7.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-6.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-6.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-6.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-6mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-5.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-4.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-4.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-4mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-3.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-3.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-3.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="-3mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="-2.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="-2.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-2.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-2mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-1.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="-1mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="-0.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="-0.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="-0.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="0mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="0.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="0.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="0.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="1mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="1.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="1.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="1.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="2mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="2.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="2.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="2.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="3mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="3.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="3.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="3.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="4mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="4.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="4.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="4.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin67"]} pcbX="7.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin68"]} pcbX="7.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin69"]} pcbX="7.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin70"]} pcbX="8mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin71"]} pcbX="8.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin72"]} pcbX="8.5mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin73"]} pcbX="8.75mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin74"]} pcbX="9mm" pcbY="2.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin75"]} pcbX="9.25mm" pcbY="-5.275mm" layer="bottom" width="1.55mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin79"]} pcbX="-10.35mm" pcbY="-4.5mm" layer="bottom" width="2.75mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin80"]} pcbX="10.35mm" pcbY="-4.5mm" layer="bottom" width="2.75mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 11, "y": 2.48 }, { "x": 11, "y": -5.7 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -11, "y": 2.48 }, { "x": 11, "y": 2.48 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": 11, "y": -5.7 }, { "x": -11, "y": -5.7 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -11, "y": -5.7 }, { "x": -11, "y": 2.48 }]} strokeWidth={0.127} layer="bottom"/>
<fabricationnotepath route={[{ "x": -9.25, "y": -6.896 }, { "x": -9.211732, "y": -6.888388 }, { "x": -9.179289, "y": -6.866711 }, { "x": -9.157612, "y": -6.834268 }, { "x": -9.15, "y": -6.796 }, { "x": -9.157612, "y": -6.757732 }, { "x": -9.179289, "y": -6.725289 }, { "x": -9.211732, "y": -6.703612 }, { "x": -9.25, "y": -6.696 }, { "x": -9.288268, "y": -6.703612 }, { "x": -9.320711, "y": -6.725289 }, { "x": -9.342388, "y": -6.757732 }, { "x": -9.35, "y": -6.796 }, { "x": -9.342388, "y": -6.834268 }, { "x": -9.320711, "y": -6.866711 }, { "x": -9.288268, "y": -6.888388 }, { "x": -9.25, "y": -6.896 }]} strokeWidth={0.2} layer="bottom"/>
<fabricationnotetext pcbX={2.54} pcbY={-8.255} anchorAlignment="center" text="Bus_M.2_Socket_M" font="tscircuit2024" fontSize={1} layer="bottom"/>
<courtyardoutline outline={[{ "x": 11.25, "y": 3.3 }, { "x": -11.25, "y": 3.3 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -11.25, "y": 3.3 }, { "x": -11.25, "y": -6.3 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 11.25, "y": -6.3 }, { "x": 11.25, "y": 3.3 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -11.25, "y": -6.3 }, { "x": 11.25, "y": -6.3 }]} layer="bottom"/>
      </footprint>);
// C1: 10u; Xerxes:C_0805_2012Metric
export const Footprint_C1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.95mm" pcbY="0mm" layer="bottom" cornerRadius="0.125mm" width="1mm" height="1.45mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -1, "y": 0.625 }, { "x": 1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -1, "y": -0.625 }, { "x": -1, "y": 0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": 0.625 }, { "x": 1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1, "y": -0.625 }, { "x": -1, "y": -0.625 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.68} anchorAlignment="center" text="10u" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.5} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": 0.98 }, { "x": 1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.7, "y": -0.98 }, { "x": -1.7, "y": 0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": 0.98 }, { "x": 1.7, "y": -0.98 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.7, "y": -0.98 }, { "x": -1.7, "y": -0.98 }]} layer="bottom"/>
      </footprint>);
