// discretesim test board
// Source: https://github.com/cnlohr/discretesim
// Commit: f7a169ee07b18b6c857d23582474b8ba20185436; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// TP39: GNDXOR; cnhardware:TPTHRU
export const Footprint_TP39 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P36: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP87: JOIN2; cnhardware:TPTHRU
export const Footprint_TP87 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N58: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N58 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP6: GNDFF; cnhardware:TPTHRU
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP93: JOIN3; cnhardware:TPTHRU
export const Footprint_TP93 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N10: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P14: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// D2: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP10: VCCRO; cnhardware:TPTHRU
export const Footprint_TP10 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N70: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// R36: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// R34: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP59: JOIN0; cnhardware:TPTHRU
export const Footprint_TP59 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP11: ROON; cnhardware:TPTHRU
export const Footprint_TP11 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP88: JOIN2; cnhardware:TPTHRU
export const Footprint_TP88 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P64: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P64 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
      </footprint>);
// TP63: JOIN1; cnhardware:TPTHRU
export const Footprint_TP63 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R13: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P13: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP25: 2NOR0; cnhardware:TPTHRU
export const Footprint_TP25 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D18: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P20: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP22: VCC3NAND; cnhardware:TPTHRU
export const Footprint_TP22 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D10: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N17: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P8: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP85: JOIN2; cnhardware:TPTHRU
export const Footprint_TP85 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP1: BOS; cnhardware:TPTHRU
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R51: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP114: JKJ; cnhardware:TPTHRU
export const Footprint_TP114 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P49: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// P71: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P52: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP127: VCCXOR2; cnhardware:TPTHRU
export const Footprint_TP127 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N23: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP28: GND2NOR; cnhardware:TPTHRU
export const Footprint_TP28 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP70: NG; cnhardware:TPTHRU
export const Footprint_TP70 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N26: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N19: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// D20: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N20: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N52: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP107: RSQ; cnhardware:TPTHRU
export const Footprint_TP107 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP65: JOIN1; cnhardware:TPTHRU
export const Footprint_TP65 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P58: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P58 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N76: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N76 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// TP109: RSS; cnhardware:TPTHRU
export const Footprint_TP109 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP131: FAA; cnhardware:TPTHRU
export const Footprint_TP131 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D11: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N6: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N74: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N74 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// N28: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// R11: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP99: GND; cnhardware:TPTHRU
export const Footprint_TP99 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N4: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P57: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP15: 3NANDI2; cnhardware:TPTHRU
export const Footprint_TP15 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP133: FASO; cnhardware:TPTHRU
export const Footprint_TP133 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N13: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// D3: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP35: VCCXM; cnhardware:TPTHRU
export const Footprint_TP35 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P45: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N64: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N64 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// N18: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// D8: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// R9: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N41: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP69: PD; cnhardware:TPTHRU
export const Footprint_TP69 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R50: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP118: FASO; cnhardware:TPTHRU
export const Footprint_TP118 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP117: FACO; cnhardware:TPTHRU
export const Footprint_TP117 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N54: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP115: VCCJK; cnhardware:TPTHRU
export const Footprint_TP115 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P56: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P68: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P68 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP64: JOIN1; cnhardware:TPTHRU
export const Footprint_TP64 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N69: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P5: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP44: PG; cnhardware:TPTHRU
export const Footprint_TP44 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R1: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N16: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP119: FACi; cnhardware:TPTHRU
export const Footprint_TP119 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P75: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P6: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP61: JOIN1; cnhardware:TPTHRU
export const Footprint_TP61 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP7: GNDRO; cnhardware:TPTHRU
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P66: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P66 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P24: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// P43: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N60: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// P55: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP30: XM1; cnhardware:TPTHRU
export const Footprint_TP30 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP103: JKCK; cnhardware:TPTHRU
export const Footprint_TP103 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP86: JOIN2; cnhardware:TPTHRU
export const Footprint_TP86 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP21: 3NANDOUT; cnhardware:TPTHRU
export const Footprint_TP21 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP23: GND3NAND; cnhardware:TPTHRU
export const Footprint_TP23 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P2: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// D12: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP46: ND; cnhardware:TPTHRU
export const Footprint_TP46 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P16: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP122: VCCFA; cnhardware:TPTHRU
export const Footprint_TP122 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R49: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N38: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP20: 3NANDI2; cnhardware:TPTHRU
export const Footprint_TP20 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP91: JOIN3; cnhardware:TPTHRU
export const Footprint_TP91 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N61: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N61 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP40: LED0; cnhardware:TPTHRU
export const Footprint_TP40 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP50: R; cnhardware:TPTHRU
export const Footprint_TP50 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// P33: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R5: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N27: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP71: ND; cnhardware:TPTHRU
export const Footprint_TP71 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP135: GNDFA; cnhardware:TPTHRU
export const Footprint_TP135 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP52: R; cnhardware:TPTHRU
export const Footprint_TP52 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N46: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R2: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P31: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP34: XORA; cnhardware:TPTHRU
export const Footprint_TP34 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP8: VCCRO; cnhardware:TPTHRU
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP43: PS; cnhardware:TPTHRU
export const Footprint_TP43 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P62: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P62 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R16: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// R40: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P15: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// N57: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R7: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N33: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// D1: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP81: PD; cnhardware:TPTHRU
export const Footprint_TP81 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R33: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P69: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP125: XOR2B; cnhardware:TPTHRU
export const Footprint_TP125 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P12: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// N40: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R24: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P46: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N75: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// R48: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP96: JOIN3; cnhardware:TPTHRU
export const Footprint_TP96 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N66: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N66 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
      </footprint>);
// TP3: FFOUT; cnhardware:TPTHRU
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP80: PS; cnhardware:TPTHRU
export const Footprint_TP80 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP100: GND; cnhardware:TPTHRU
export const Footprint_TP100 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP111: GNDRS; cnhardware:TPTHRU
export const Footprint_TP111 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP13: 3NANDI0; cnhardware:TPTHRU
export const Footprint_TP13 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N42: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// N29: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P70: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// N8: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N65: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N65 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P38: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP126: XOR2O; cnhardware:TPTHRU
export const Footprint_TP126 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP94: JOIN3; cnhardware:TPTHRU
export const Footprint_TP94 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N77: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// R32: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N36: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP67: PG; cnhardware:TPTHRU
export const Footprint_TP67 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D16: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P25: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP98: GND; cnhardware:TPTHRU
export const Footprint_TP98 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D14: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P17: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P40: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP55: JOIN0; cnhardware:TPTHRU
export const Footprint_TP55 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N68: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N68 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P47: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP48: NG; cnhardware:TPTHRU
export const Footprint_TP48 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R19: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N73: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N73 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP14: 3NANDI1; cnhardware:TPTHRU
export const Footprint_TP14 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP26: 2NOROUT; cnhardware:TPTHRU
export const Footprint_TP26 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N7: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP66: JOIN1; cnhardware:TPTHRU
export const Footprint_TP66 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N1: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP9: GNDRO; cnhardware:TPTHRU
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P60: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP58: JOIN0; cnhardware:TPTHRU
export const Footprint_TP58 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R43: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP110: RSCK; cnhardware:TPTHRU
export const Footprint_TP110 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP132: FACO; cnhardware:TPTHRU
export const Footprint_TP132 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP24: 2NOR1; cnhardware:TPTHRU
export const Footprint_TP24 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D21: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N43: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N43 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R17: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP19: 3NANDI0; cnhardware:TPTHRU
export const Footprint_TP19 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N62: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N62 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P23: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP31: XM2; cnhardware:TPTHRU
export const Footprint_TP31 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N50: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP5: VCCFF; cnhardware:TPTHRU
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP16: VCC3NAND; cnhardware:TPTHRU
export const Footprint_TP16 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R52: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R52 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// R28: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP37: XOROUT; cnhardware:TPTHRU
export const Footprint_TP37 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP12: 3NANDOUT; cnhardware:TPTHRU
export const Footprint_TP12 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N49: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N49 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// P26: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P72: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P72 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
      </footprint>);
// R18: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP73: PG; cnhardware:TPTHRU
export const Footprint_TP73 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P32: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// P51: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R47: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP2: BOR; cnhardware:TPTHRU
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP105: JKNQ; cnhardware:TPTHRU
export const Footprint_TP105 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R15: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP116: GNDJK; cnhardware:TPTHRU
export const Footprint_TP116 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R14: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP90: JOIN2; cnhardware:TPTHRU
export const Footprint_TP90 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P41: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// N2: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P30: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R41: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P54: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N12: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP53: R; cnhardware:TPTHRU
export const Footprint_TP53 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N47: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N47 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP72: NS; cnhardware:TPTHRU
export const Footprint_TP72 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N48: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R45: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP33: XMINN; cnhardware:TPTHRU
export const Footprint_TP33 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P48: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP74: PS; cnhardware:TPTHRU
export const Footprint_TP74 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P63: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P63 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP106: RSNQ; cnhardware:TPTHRU
export const Footprint_TP106 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N56: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// D17: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP108: RSR; cnhardware:TPTHRU
export const Footprint_TP108 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP79: PG; cnhardware:TPTHRU
export const Footprint_TP79 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P7: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP27: VCC2NOR; cnhardware:TPTHRU
export const Footprint_TP27 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP77: ND; cnhardware:TPTHRU
export const Footprint_TP77 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP68: PS; cnhardware:TPTHRU
export const Footprint_TP68 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R10: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N71: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP83: ND; cnhardware:TPTHRU
export const Footprint_TP83 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R39: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N21: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R27: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N55: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R30: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N14: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P67: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P67 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP49: R; cnhardware:TPTHRU
export const Footprint_TP49 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// P21: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P29: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP84: NS; cnhardware:TPTHRU
export const Footprint_TP84 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R46: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R46 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP97: GND; cnhardware:TPTHRU
export const Footprint_TP97 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R37: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={0} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// R6: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P44: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP104: JKQ; cnhardware:TPTHRU
export const Footprint_TP104 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P77: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P27: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP102: GND; cnhardware:TPTHRU
export const Footprint_TP102 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R21: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N24: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R26: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// R22: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N11: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// N22: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// N45: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N25: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N15: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// R42: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N34: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P61: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P61 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP130: FAB; cnhardware:TPTHRU
export const Footprint_TP130 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP42: LED2; cnhardware:TPTHRU
export const Footprint_TP42 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R44: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P10: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P74: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P74 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.25mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.7mm" height="0.4mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
      </footprint>);
// R35: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P1: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R12: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// R4: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP54: R; cnhardware:TPTHRU
export const Footprint_TP54 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R31: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// P73: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P73 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P9: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP134: VCCFA; cnhardware:TPTHRU
export const Footprint_TP134 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP62: JOIN1; cnhardware:TPTHRU
export const Footprint_TP62 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N51: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P22: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// D13: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P3: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// D7: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P18: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// D19: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N63: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N63 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP29: XORB; cnhardware:TPTHRU
export const Footprint_TP29 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP51: R; cnhardware:TPTHRU
export const Footprint_TP51 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P53: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// N39: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP47: NS; cnhardware:TPTHRU
export const Footprint_TP47 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP41: LED1; cnhardware:TPTHRU
export const Footprint_TP41 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP4: ROON; cnhardware:TPTHRU
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R23: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P19: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P11: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// R29: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP60: JOIN0; cnhardware:TPTHRU
export const Footprint_TP60 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N31: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP92: JOIN3; cnhardware:TPTHRU
export const Footprint_TP92 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP18: 3NANDI1; cnhardware:TPTHRU
export const Footprint_TP18 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N53: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N53 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP101: GND; cnhardware:TPTHRU
export const Footprint_TP101 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D6: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// P35: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P76: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P76 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P65: RZM001P02T2L; cnhardware:DFN1006-3-PCH
export const Footprint_P65 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P28: BSS84KNC; cnhardware:DFN1006-3-PCH
export const Footprint_P28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// P39: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// D4: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP56: JOIN0; cnhardware:TPTHRU
export const Footprint_TP56 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P37: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP128: GNDXOR2; cnhardware:TPTHRU
export const Footprint_TP128 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N44: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N44 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP36: GNDXM; cnhardware:TPTHRU
export const Footprint_TP36 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R25: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N35: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N32: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP120: FAB; cnhardware:TPTHRU
export const Footprint_TP120 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N3: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// TP112: VCCRS; cnhardware:TPTHRU
export const Footprint_TP112 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP129: FACi; cnhardware:TPTHRU
export const Footprint_TP129 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP45: PD; cnhardware:TPTHRU
export const Footprint_TP45 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R8: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP89: JOIN2; cnhardware:TPTHRU
export const Footprint_TP89 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P59: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP57: JOIN0; cnhardware:TPTHRU
export const Footprint_TP57 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP17: GND3NAND; cnhardware:TPTHRU
export const Footprint_TP17 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP82: NG; cnhardware:TPTHRU
export const Footprint_TP82 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D5: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP76: NG; cnhardware:TPTHRU
export const Footprint_TP76 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N67: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N67 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
      </footprint>);
// P4: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// P42: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// TP32: XMINP; cnhardware:TPTHRU
export const Footprint_TP32 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP78: NS; cnhardware:TPTHRU
export const Footprint_TP78 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP113: JKK; cnhardware:TPTHRU
export const Footprint_TP113 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// P34: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R20: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N37: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// N9: NX7002BKMB315; cnhardware:DFN1006-3-NCH
export const Footprint_N9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP124: XOR2A; cnhardware:TPTHRU
export const Footprint_TP124 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D15: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// N30: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
// R38: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.54mm" height="0.64mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
      </footprint>);
// TP75: PD; cnhardware:TPTHRU
export const Footprint_TP75 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R3: 1k; cnhardware:R_0402_1005Metric_COMPACT
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.51mm" pcbY="0mm" layer="top" cornerRadius="0.0675mm" width="0.64mm" height="0.54mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.525, "y": 0.27 }, { "x": 0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": 0.27 }, { "x": 0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.525, "y": -0.27 }, { "x": -0.525, "y": -0.27 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.525, "y": -0.27 }, { "x": -0.525, "y": 0.27 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// TP121: FAA; cnhardware:TPTHRU
export const Footprint_TP121 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP123: GNDFA; cnhardware:TPTHRU
export const Footprint_TP123 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N72: 2SK3541; cnhardware:DFN1006-3-NCH
export const Footprint_N72 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.35mm" pcbY="0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.35mm" pcbY="-0.225mm" layer="top" width="0.4mm" height="0.25mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.35mm" pcbY="0mm" layer="top" width="0.4mm" height="0.7mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.5, "y": -0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": -0.5, "y": 0.15 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.35, "y": 0.3 }, { "x": 0.5, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.3 }, { "x": 0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.3 }, { "x": -0.5, "y": -0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.8, "y": 0.5 }, { "x": 0.7, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.8, "y": -0.5 }, { "x": -0.8, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": 0.5 }, { "x": 0.7, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.7, "y": -0.5 }, { "x": -0.8, "y": -0.5 }]} layer="top"/>
      </footprint>);
// TP95: JOIN3; cnhardware:TPTHRU
export const Footprint_TP95 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP38: VCCXOR; cnhardware:TPTHRU
export const Footprint_TP38 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.8mm" rectPadHeight="1.85mm" rectBorderRadius="0.27mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>

<courtyardrect pcbX={0} pcbY={0} width={2.54} height={2.54} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N5: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// D9: LED; cnhardware:LED_0402_1005Metric_COMPACT
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.3, "y": -0.25 }, { "x": -0.3, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.25 }, { "x": -0.4, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.45 }, { "x": 0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 0.45 }, { "x": 0.9, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.45 }, { "x": -0.9, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -0.45 }, { "x": -0.9, "y": 0.45 }]} layer="top"/>
      </footprint>);
// N59: 2SK3541; cnhardware:SOT-723-COMPACT
export const Footprint_N59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.41mm" height="0.38mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
      </footprint>);
// P50: RZM001P02T2L; cnhardware:SOT-723-COMPACTP
export const Footprint_P50 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.535mm" pcbY="0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.535mm" pcbY="-0.4mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.535mm" pcbY="0mm" layer="top" cornerRadius="0.0475mm" width="0.38mm" height="0.41mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.4, "y": 0.6 }, { "x": 0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.1, "y": 0.6 }, { "x": 0.4, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": 0.3 }, { "x": -0.1, "y": 0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.4, "y": -0.6 }, { "x": -0.4, "y": -0.6 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.3 }]} strokeWidth={0.1}/>
<courtyardoutline outline={[{ "x": 0.85, "y": 0.75 }, { "x": 0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.75 }, { "x": 0.85, "y": 0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.75 }, { "x": -0.85, "y": -0.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.75 }, { "x": -0.85, "y": 0.75 }]} layer="top"/>
      </footprint>);
