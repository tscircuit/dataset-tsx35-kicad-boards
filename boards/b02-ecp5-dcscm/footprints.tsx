// Antmicro ECP5 DC-SCM
// Source: https://github.com/antmicro/ecp5-dc-scm
// Commit: 0019313fd2e214f618788e5e61636a4a023ee361; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// R79: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R79 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R79" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R95: R_49R9_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R95 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_49R9_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R95" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C110: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C110 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.91} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U15: TPS54561QDPRRQ1; antmicro-footprints:WSON-10-1EP_4x4mm_P0.8mm_EP2.6x3mm
export const Footprint_U15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.9mm" pcbY="1.6mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.9mm" pcbY="0.8mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.9mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.9mm" pcbY="-0.8mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.9mm" pcbY="-1.6mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.9mm" pcbY="-1.6mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.9mm" pcbY="-0.8mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.9mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.9mm" pcbY="0.8mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.9mm" pcbY="1.6mm" layer="top" cornerRadius="0.025mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="2.6mm" height="3mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -2, "y": 1.5 }, { "x": -1.5, "y": 2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2, "y": -2 }, { "x": -2, "y": 1.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.5, "y": 2 }, { "x": 2, "y": 2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2, "y": 2 }, { "x": 2, "y": -2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2, "y": -2 }, { "x": -2, "y": -2 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.4} anchorAlignment="bottom_left" text="TPS54561QDPRRQ1" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={-0.0505} pcbY={0} width={5.039} height={4.4} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C111: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C111 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U11: TPS51200DRCT; antmicro-footprints:VSON-10-1EP_3x3mm
export const Footprint_U11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.438mm" pcbY="1.01mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.438mm" pcbY="0.51mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.438mm" pcbY="0.011mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.438mm" pcbY="-0.488mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-1.438mm" pcbY="-0.988mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.437mm" pcbY="-0.988mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.437mm" pcbY="-0.488mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.437mm" pcbY="0.011mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.437mm" pcbY="0.51mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="1.437mm" pcbY="1.01mm" layer="top" cornerRadius="0.03125mm" width="0.25mm" height="0.875mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="0.011mm" layer="top" cornerRadius="0.125mm" width="2mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.5, "y": 0.76 }, { "x": -0.75, "y": 1.51 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.5, "y": -1.489 }, { "x": -1.5, "y": 0.76 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.75, "y": 1.51 }, { "x": 1.499, "y": 1.51 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.499, "y": 1.51 }, { "x": 1.499, "y": -1.489 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.499, "y": -1.489 }, { "x": -1.5, "y": -1.489 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-2} pcbY={-2.7} anchorAlignment="bottom_left" text="TPS51200DRCT" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -1.97, "y": -1.215 }, { "x": -1.97, "y": 1.24 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.65 }, { "x": -1.65, "y": 1.24 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": 1.24 }, { "x": -1.97, "y": 1.24 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": -1.215 }, { "x": -1.97, "y": -1.215 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": -1.215 }, { "x": -1.65, "y": -1.625 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.65, "y": -1.625 }, { "x": 1.65, "y": -1.625 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": 1.65 }, { "x": -1.65, "y": 1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": 1.24 }, { "x": 1.65, "y": 1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": 1.24 }, { "x": 1.97, "y": 1.24 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.215 }, { "x": 1.97, "y": -1.215 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.65, "y": -1.625 }, { "x": 1.65, "y": -1.215 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.97, "y": 1.24 }, { "x": 1.97, "y": -1.215 }]} layer="top"/>
      </footprint>);
// C240: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C240 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C240" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C201: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C201 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C201" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C199: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C199 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C199" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R80: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R80 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R80" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R78: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R78 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R78" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C197: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C197 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C197" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C202: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C202 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C202" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C198: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C198 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C198" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C200: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C200 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C200" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C78: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C78 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C78" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R99: R_470k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R99 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_470k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R99" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R98: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R98 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R98" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R89: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R89 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R89" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C109: C_47u_1210; antmicro-footprints:C_1210_3225Metric
export const Footprint_C109 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.145mm" pcbY="0mm" layer="top" width="1.52mm" height="3.05mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.145mm" pcbY="0mm" layer="top" width="1.52mm" height="3.05mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-2.8} anchorAlignment="center" text="C_47u_1210" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C109" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={0} pcbY={0} width={3.2} height={2.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.2} height={3.5} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C108: C_750p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C108 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_750p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C108" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C107: C_180p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C107 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_180p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C107" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C106: C_1n8_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C106 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_1n8_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C106" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// L1: XAL5030-801; antmicro-footprints:L_Coilcraft-XAL5030
export const Footprint_L1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.655mm" pcbY="0mm" layer="top" cornerRadius="0.059mm" width="1.18mm" height="4.7mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.655mm" pcbY="0mm" layer="top" cornerRadius="0.059mm" width="1.18mm" height="4.7mm" shape="rect"/>




<fabricationnotepath route={[{ "x": -2.74, "y": 2.84 }, { "x": 2.74, "y": 2.84 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.74, "y": -2.84 }, { "x": -2.74, "y": 2.84 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.74, "y": 2.84 }, { "x": 2.74, "y": -2.84 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.74, "y": -2.84 }, { "x": -2.74, "y": -2.84 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.4318} pcbY={-4.2418} anchorAlignment="center" text="XAL5030-801" font="tscircuit2024" fontSize={1.27}/>

<courtyardrect pcbX={0} pcbY={0} width={5.78} height={5.98} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D7: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D8: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D9: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D10: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D11: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D12: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R94: R_0R_1206; antmicro-footprints:R_1206_3216Metric
export const Footprint_R94 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="-0.001mm" layer="top" cornerRadius="0.14375mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5mm" pcbY="-0.001mm" layer="top" cornerRadius="0.14375mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.601, "y": 0.802 }, { "x": -1.601, "y": -0.8 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.601, "y": 0.802 }, { "x": 1.6, "y": 0.802 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.601, "y": -0.8 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.6, "y": 0.802 }, { "x": 1.6, "y": -0.8 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.6} anchorAlignment="center" text="R_0R_1206" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R94" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={0} width={4.65} height={2.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R101: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R101 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R101" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D13: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP7: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// U12: LM3881MME_NOPB; antmicro-footprints:VSSOP-8_3x3mm_P0.65mm
export const Footprint_U12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.096mm" pcbY="0.975mm" layer="top" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.096mm" pcbY="0.326mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.096mm" pcbY="-0.325mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.096mm" pcbY="-0.974mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.105mm" pcbY="-0.974mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.105mm" pcbY="-0.325mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="2.105mm" pcbY="0.326mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="2.105mm" pcbY="0.975mm" layer="top" cornerRadius="0.114497mm" width="1.556504mm" height="0.457986mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1.497, "y": 1.502 }, { "x": 1.504, "y": 1.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.497, "y": -1.5 }, { "x": -1.497, "y": 1.502 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.504, "y": 1.502 }, { "x": 1.504, "y": -1.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.504, "y": -1.5 }, { "x": -1.497, "y": -1.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.0254} pcbY={-2.9972} anchorAlignment="center" text="LM3881MME_NOPB" font="tscircuit2024" fontSize={1.27}/>

<courtyardrect pcbX={0} pcbY={-0.012} width={6} height={3.7} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U10: AS4C256M16D3; antmicro-footprints:BGA-96_9.0x13.0mm_Layout2x3x16_P0.8mm
export const Footprint_U10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.202mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-2.4mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-1.601mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="1.6mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="2.398mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="3.2mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin7"]} pcbX="-3.202mm" pcbY="5.202mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin8"]} pcbX="-2.4mm" pcbY="5.202mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin9"]} pcbX="-1.601mm" pcbY="5.202mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin10"]} pcbX="1.6mm" pcbY="5.202mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin11"]} pcbX="2.398mm" pcbY="5.202mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin12"]} pcbX="3.2mm" pcbY="5.202mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin13"]} pcbX="-3.202mm" pcbY="4.401mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin14"]} pcbX="-2.4mm" pcbY="4.401mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin15"]} pcbX="-1.601mm" pcbY="4.401mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin16"]} pcbX="1.6mm" pcbY="4.401mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin17"]} pcbX="2.398mm" pcbY="4.401mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin18"]} pcbX="3.2mm" pcbY="4.401mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin19"]} pcbX="-3.202mm" pcbY="3.601mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin20"]} pcbX="-2.4mm" pcbY="3.601mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin21"]} pcbX="-1.601mm" pcbY="3.601mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin22"]} pcbX="1.6mm" pcbY="3.601mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin23"]} pcbX="2.398mm" pcbY="3.601mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin24"]} pcbX="3.2mm" pcbY="3.601mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin25"]} pcbX="-3.202mm" pcbY="2.801mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin26"]} pcbX="-2.4mm" pcbY="2.801mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin27"]} pcbX="-1.601mm" pcbY="2.801mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin28"]} pcbX="1.6mm" pcbY="2.801mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin29"]} pcbX="2.398mm" pcbY="2.801mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin30"]} pcbX="3.2mm" pcbY="2.801mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin31"]} pcbX="-3.202mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin32"]} pcbX="-2.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin33"]} pcbX="-1.601mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin34"]} pcbX="1.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin35"]} pcbX="2.398mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin36"]} pcbX="3.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin37"]} pcbX="-3.202mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin38"]} pcbX="-2.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin39"]} pcbX="-1.601mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin40"]} pcbX="1.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin41"]} pcbX="2.398mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin42"]} pcbX="3.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin43"]} pcbX="-3.202mm" pcbY="0.402mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin44"]} pcbX="-2.4mm" pcbY="0.402mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin45"]} pcbX="-1.601mm" pcbY="0.402mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin46"]} pcbX="1.6mm" pcbY="0.402mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin47"]} pcbX="2.398mm" pcbY="0.402mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin48"]} pcbX="3.2mm" pcbY="0.402mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin49"]} pcbX="-3.202mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin50"]} pcbX="-2.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin51"]} pcbX="-1.601mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin52"]} pcbX="1.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin53"]} pcbX="2.398mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin54"]} pcbX="3.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin55"]} pcbX="-3.202mm" pcbY="-1.199mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin56"]} pcbX="-2.4mm" pcbY="-1.199mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin57"]} pcbX="-1.601mm" pcbY="-1.199mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin58"]} pcbX="1.6mm" pcbY="-1.199mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin59"]} pcbX="2.398mm" pcbY="-1.199mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin60"]} pcbX="3.2mm" pcbY="-1.199mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin61"]} pcbX="-3.202mm" pcbY="-1.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin62"]} pcbX="-2.4mm" pcbY="-1.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin63"]} pcbX="-1.601mm" pcbY="-1.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin64"]} pcbX="1.6mm" pcbY="-1.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin65"]} pcbX="2.398mm" pcbY="-1.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin66"]} pcbX="3.2mm" pcbY="-1.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin67"]} pcbX="-3.202mm" pcbY="-2.798mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin68"]} pcbX="-2.4mm" pcbY="-2.798mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin69"]} pcbX="-1.601mm" pcbY="-2.798mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin70"]} pcbX="1.6mm" pcbY="-2.798mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin71"]} pcbX="2.398mm" pcbY="-2.798mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin72"]} pcbX="3.2mm" pcbY="-2.798mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin73"]} pcbX="-3.202mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin74"]} pcbX="-2.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin75"]} pcbX="-1.601mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin76"]} pcbX="1.6mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin77"]} pcbX="2.398mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin78"]} pcbX="3.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin79"]} pcbX="-3.202mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin80"]} pcbX="-2.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin81"]} pcbX="-1.601mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin82"]} pcbX="1.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin83"]} pcbX="2.398mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin84"]} pcbX="3.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin85"]} pcbX="-3.202mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin86"]} pcbX="-2.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin87"]} pcbX="-1.601mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin88"]} pcbX="1.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin89"]} pcbX="2.398mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin90"]} pcbX="3.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin91"]} pcbX="-3.202mm" pcbY="-5.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin92"]} pcbX="-2.4mm" pcbY="-5.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin93"]} pcbX="-1.601mm" pcbY="-5.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin94"]} pcbX="1.6mm" pcbY="-5.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin95"]} pcbX="2.398mm" pcbY="-5.999mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin96"]} pcbX="3.2mm" pcbY="-5.999mm" layer="top" radius="0.2mm" shape="circle"/>






<fabricationnotepath route={[{ "x": -4.5, "y": 6 }, { "x": -4.5, "y": -6.499 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -4.5, "y": -6.499 }, { "x": 4.498, "y": -6.499 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -4, "y": 6.5 }, { "x": -4.5, "y": 6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 4.498, "y": 6.5 }, { "x": -4, "y": 6.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 4.498, "y": -6.499 }, { "x": 4.498, "y": 6.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-7.5} anchorAlignment="center" text="AS4C256M16D3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U10" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={-0.001} pcbY={0.0005} width={9.998} height={13.999} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U7: NVT2008BQ,115; antmicro-footprints:VQFN-20_1EP_4.5x2.5mm_P0.5mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -2.538, "y": -0.378 }, { "x": -2.616, "y": -0.3 }, { "x": -2.616, "y": -0.183 }, { "x": -2.614751, "y": -0.170319 }, { "x": -2.611052, "y": -0.158126 }, { "x": -2.605046, "y": -0.146888 }, { "x": -2.596962, "y": -0.137038 }, { "x": -2.587112, "y": -0.128954 }, { "x": -2.575874, "y": -0.122948 }, { "x": -2.563681, "y": -0.119249 }, { "x": -2.551, "y": -0.118 }, { "x": -1.821, "y": -0.118 }, { "x": -1.808319, "y": -0.119249 }, { "x": -1.796126, "y": -0.122948 }, { "x": -1.784888, "y": -0.128954 }, { "x": -1.775038, "y": -0.137038 }, { "x": -1.766954, "y": -0.146888 }, { "x": -1.760948, "y": -0.158126 }, { "x": -1.757249, "y": -0.170319 }, { "x": -1.756, "y": -0.183 }, { "x": -1.756, "y": -0.313 }, { "x": -1.757249, "y": -0.325681 }, { "x": -1.760948, "y": -0.337874 }, { "x": -1.766954, "y": -0.349112 }, { "x": -1.775038, "y": -0.358962 }, { "x": -1.784888, "y": -0.367046 }, { "x": -1.796126, "y": -0.373052 }, { "x": -1.808319, "y": -0.376751 }, { "x": -1.821, "y": -0.378 }]}/>
<smtpad portHints={["pin2"]} pcbX="-1.75mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.25mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.75mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.25mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.248mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.748mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.249mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="1.749mm" pcbY="-1.185mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.185mm" pcbY="-0.248mm" layer="top" cornerRadius="0.026mm" width="0.26mm" height="0.86mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="2.185mm" pcbY="0.25mm" layer="top" cornerRadius="0.026mm" width="0.26mm" height="0.86mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="1.749mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="1.249mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.748mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="0.248mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-0.25mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-0.75mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-1.25mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-1.75mm" pcbY="1.186mm" layer="top" cornerRadius="0.026mm" width="0.86mm" height="0.26mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-2.186mm" pcbY="0.25mm" layer="top" cornerRadius="0.026mm" width="0.26mm" height="0.86mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="1mm" height="3mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -2.25, "y": -1.249 }, { "x": -2.25, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.249, "y": 1.25 }, { "x": -2.25, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.249, "y": -1.249 }, { "x": -2.25, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.249, "y": -1.249 }, { "x": 2.249, "y": 1.25 }]} strokeWidth={0.15}/>

<courtyardrect pcbX={-0.0015} pcbY={0.0005} width={5.419} height={3.419} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C55: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C55" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R57: R_200k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_200k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R57" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C196: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C196 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C196" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D3: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// D4: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// D5: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// Q1: 2N7002_SOT-23-3; antmicro-footprints:SOT-23-3
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.951mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="-0.949mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.0005mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.325 }, { "x": -0.712, "y": -1.523 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.519 }, { "x": 0.688, "y": -1.519 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": -0.712, "y": 1.325 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": 0.688, "y": 1.526 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.688, "y": -1.519 }, { "x": 0.688, "y": 1.52 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.025} pcbY={-3.25} anchorAlignment="center" text="2N7002_SOT-23-3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.125} pcbY={-0.15} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -0.85, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.4 }, { "x": -1.75, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": -0.9, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": 0.825, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -1.75, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -0.85, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.65 }, { "x": -0.85, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 1.6 }, { "x": 0.825, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 0.45 }, { "x": 1.75, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.45 }, { "x": 0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -1.65 }, { "x": -0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 1.75, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 0.85, "y": -0.45 }]} layer="top"/>
      </footprint>);
// Q2: 2N7002_SOT-23-3; antmicro-footprints:SOT-23-3
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.951mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="-0.949mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.0005mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.325 }, { "x": -0.712, "y": -1.523 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.519 }, { "x": 0.688, "y": -1.519 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": -0.712, "y": 1.325 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": 0.688, "y": 1.526 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.688, "y": -1.519 }, { "x": 0.688, "y": 1.52 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.025} pcbY={-3.25} anchorAlignment="center" text="2N7002_SOT-23-3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.125} pcbY={-0.15} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -0.85, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.4 }, { "x": -1.75, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": -0.9, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": 0.825, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -1.75, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -0.85, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.65 }, { "x": -0.85, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 1.6 }, { "x": 0.825, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 0.45 }, { "x": 1.75, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.45 }, { "x": 0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -1.65 }, { "x": -0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 1.75, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 0.85, "y": -0.45 }]} layer="top"/>
      </footprint>);
// Q3: 2N7002_SOT-23-3; antmicro-footprints:SOT-23-3
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.951mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="-0.949mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.0005mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.325 }, { "x": -0.712, "y": -1.523 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.519 }, { "x": 0.688, "y": -1.519 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": -0.712, "y": 1.325 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": 0.688, "y": 1.526 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.688, "y": -1.519 }, { "x": 0.688, "y": 1.52 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.025} pcbY={-3.25} anchorAlignment="center" text="2N7002_SOT-23-3" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.125} pcbY={-0.15} anchorAlignment="center" text="Q3" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -0.85, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.4 }, { "x": -1.75, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": -0.9, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": 0.825, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -1.75, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -0.85, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.65 }, { "x": -0.85, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 1.6 }, { "x": 0.825, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 0.45 }, { "x": 1.75, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.45 }, { "x": 0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -1.65 }, { "x": -0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 1.75, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 0.85, "y": -0.45 }]} layer="top"/>
      </footprint>);
// R69: R_1k1_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R69 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_1k1_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R69" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R70: R_1k1_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R70 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_1k1_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R70" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R71: R_1k1_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R71 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_1k1_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R71" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U21: ECP5UM5G_85_CABGA756; antmicro-footprints:BGA-1024-756_27x27mm_Layout32x32_P0.8mm
export const Footprint_U21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-11.6mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-10.8mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-10mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="-9.2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="-7.6mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="-6.8mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin7"]} pcbX="-6mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin8"]} pcbX="-5.2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin9"]} pcbX="-4.4mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin10"]} pcbX="-2.8mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin11"]} pcbX="-2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin12"]} pcbX="-1.2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin13"]} pcbX="-0.4mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin14"]} pcbX="0.4mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin15"]} pcbX="1.2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin16"]} pcbX="2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin17"]} pcbX="2.8mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin18"]} pcbX="4.4mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin19"]} pcbX="5.2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin20"]} pcbX="6mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin21"]} pcbX="6.8mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin22"]} pcbX="7.6mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin23"]} pcbX="9.2mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin24"]} pcbX="10mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin25"]} pcbX="10.8mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin26"]} pcbX="11.6mm" pcbY="12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin27"]} pcbX="-5.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin28"]} pcbX="-4.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin29"]} pcbX="-3.6mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin30"]} pcbX="-2.8mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin31"]} pcbX="-2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin32"]} pcbX="-1.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin33"]} pcbX="-0.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin34"]} pcbX="0.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin35"]} pcbX="1.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin36"]} pcbX="2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin37"]} pcbX="2.8mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin38"]} pcbX="3.6mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin39"]} pcbX="4.4mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin40"]} pcbX="5.2mm" pcbY="-3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin41"]} pcbX="-12.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin42"]} pcbX="-11.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin43"]} pcbX="-10.8mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin44"]} pcbX="-10mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin45"]} pcbX="-9.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin46"]} pcbX="-8.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin47"]} pcbX="-7.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin48"]} pcbX="-5.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin49"]} pcbX="-4.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin50"]} pcbX="-3.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin51"]} pcbX="-2.8mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin52"]} pcbX="-2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin53"]} pcbX="-1.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin54"]} pcbX="-0.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin55"]} pcbX="0.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin56"]} pcbX="1.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin57"]} pcbX="2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin58"]} pcbX="2.8mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin59"]} pcbX="3.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin60"]} pcbX="4.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin61"]} pcbX="5.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin62"]} pcbX="7.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin63"]} pcbX="8.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin64"]} pcbX="9.2mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin65"]} pcbX="10mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin66"]} pcbX="10.8mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin67"]} pcbX="11.6mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin68"]} pcbX="12.4mm" pcbY="-4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin69"]} pcbX="-12.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin70"]} pcbX="-11.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin71"]} pcbX="-10.8mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin72"]} pcbX="-10mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin73"]} pcbX="-9.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin74"]} pcbX="-8.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin75"]} pcbX="-7.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin76"]} pcbX="-5.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin77"]} pcbX="-4.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin78"]} pcbX="-3.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin79"]} pcbX="-2.8mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin80"]} pcbX="-2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin81"]} pcbX="-1.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin82"]} pcbX="-0.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin83"]} pcbX="0.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin84"]} pcbX="1.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin85"]} pcbX="2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin86"]} pcbX="2.8mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin87"]} pcbX="3.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin88"]} pcbX="4.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin89"]} pcbX="5.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin90"]} pcbX="7.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin91"]} pcbX="8.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin92"]} pcbX="9.2mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin93"]} pcbX="10mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin94"]} pcbX="10.8mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin95"]} pcbX="11.6mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin96"]} pcbX="12.4mm" pcbY="-5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin97"]} pcbX="-12.4mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin98"]} pcbX="-11.6mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin99"]} pcbX="-10.8mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin100"]} pcbX="-10mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin101"]} pcbX="-9.2mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin102"]} pcbX="-8.4mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin103"]} pcbX="-7.6mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin104"]} pcbX="7.6mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin105"]} pcbX="8.4mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin106"]} pcbX="9.2mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin107"]} pcbX="10mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin108"]} pcbX="10.8mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin109"]} pcbX="11.6mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin110"]} pcbX="12.4mm" pcbY="-6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin111"]} pcbX="-12.4mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin112"]} pcbX="-11.6mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin113"]} pcbX="-10.8mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin114"]} pcbX="-10mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin115"]} pcbX="-9.2mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin116"]} pcbX="-8.4mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin117"]} pcbX="-7.6mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin118"]} pcbX="7.6mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin119"]} pcbX="8.4mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin120"]} pcbX="9.2mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin121"]} pcbX="10mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin122"]} pcbX="10.8mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin123"]} pcbX="11.6mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin124"]} pcbX="12.4mm" pcbY="-6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin125"]} pcbX="-4.4mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin126"]} pcbX="-3.6mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin127"]} pcbX="-2mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin128"]} pcbX="-1.2mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin129"]} pcbX="-0.4mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin130"]} pcbX="0.4mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin131"]} pcbX="2mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin132"]} pcbX="2.8mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin133"]} pcbX="4.4mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin134"]} pcbX="5.2mm" pcbY="-7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin135"]} pcbX="-12.4mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin136"]} pcbX="-11.6mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin137"]} pcbX="-10.8mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin138"]} pcbX="-10mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin139"]} pcbX="-9.2mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin140"]} pcbX="-6mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin141"]} pcbX="-4.4mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin142"]} pcbX="-3.6mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin143"]} pcbX="-2mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin144"]} pcbX="-1.2mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin145"]} pcbX="-0.4mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin146"]} pcbX="0.4mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin147"]} pcbX="2mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin148"]} pcbX="2.8mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin149"]} pcbX="4.4mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin150"]} pcbX="5.2mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin151"]} pcbX="6mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin152"]} pcbX="9.2mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin153"]} pcbX="10mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin154"]} pcbX="10.8mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin155"]} pcbX="11.6mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin156"]} pcbX="12.4mm" pcbY="-8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin157"]} pcbX="-12.4mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin158"]} pcbX="-11.6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin159"]} pcbX="-10.8mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin160"]} pcbX="-10mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin161"]} pcbX="-9.2mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin162"]} pcbX="-7.6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin163"]} pcbX="-6.8mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin164"]} pcbX="-6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin165"]} pcbX="-4.4mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin166"]} pcbX="-3.6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin167"]} pcbX="-2mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin168"]} pcbX="-1.2mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin169"]} pcbX="-0.4mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin170"]} pcbX="0.4mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin171"]} pcbX="2mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin172"]} pcbX="2.8mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin173"]} pcbX="4.4mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin174"]} pcbX="5.2mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin175"]} pcbX="6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin176"]} pcbX="6.8mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin177"]} pcbX="7.6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin178"]} pcbX="9.2mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin179"]} pcbX="10mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin180"]} pcbX="10.8mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin181"]} pcbX="11.6mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin182"]} pcbX="12.4mm" pcbY="-9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin183"]} pcbX="-12.4mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin184"]} pcbX="-11.6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin185"]} pcbX="-10.8mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin186"]} pcbX="-10mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin187"]} pcbX="-9.2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin188"]} pcbX="-7.6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin189"]} pcbX="-6.8mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin190"]} pcbX="-6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin191"]} pcbX="-5.2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin192"]} pcbX="-4.4mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin193"]} pcbX="-3.6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin194"]} pcbX="-2.8mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin195"]} pcbX="-2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin196"]} pcbX="-1.2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin197"]} pcbX="-0.4mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin198"]} pcbX="0.4mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin199"]} pcbX="1.2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin200"]} pcbX="2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin201"]} pcbX="2.8mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin202"]} pcbX="3.6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin203"]} pcbX="4.4mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin204"]} pcbX="5.2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin205"]} pcbX="6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin206"]} pcbX="6.8mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin207"]} pcbX="7.6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin208"]} pcbX="9.2mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin209"]} pcbX="10mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin210"]} pcbX="10.8mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin211"]} pcbX="11.6mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin212"]} pcbX="12.4mm" pcbY="-10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin213"]} pcbX="-12.4mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin214"]} pcbX="-11.6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin215"]} pcbX="-10.8mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin216"]} pcbX="-10mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin217"]} pcbX="-9.2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin218"]} pcbX="-7.6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin219"]} pcbX="-6.8mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin220"]} pcbX="-6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin221"]} pcbX="-5.2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin222"]} pcbX="-4.4mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin223"]} pcbX="-3.6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin224"]} pcbX="-2.8mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin225"]} pcbX="-2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin226"]} pcbX="-1.2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin227"]} pcbX="-0.4mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin228"]} pcbX="0.4mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin229"]} pcbX="1.2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin230"]} pcbX="2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin231"]} pcbX="2.8mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin232"]} pcbX="3.6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin233"]} pcbX="4.4mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin234"]} pcbX="5.2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin235"]} pcbX="6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin236"]} pcbX="6.8mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin237"]} pcbX="7.6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin238"]} pcbX="9.2mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin239"]} pcbX="10mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin240"]} pcbX="10.8mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin241"]} pcbX="11.6mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin242"]} pcbX="12.4mm" pcbY="-10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin243"]} pcbX="-12.4mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin244"]} pcbX="-11.6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin245"]} pcbX="-10.8mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin246"]} pcbX="-10mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin247"]} pcbX="-9.2mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin248"]} pcbX="-7.6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin249"]} pcbX="-6.8mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin250"]} pcbX="-6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin251"]} pcbX="-4.4mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin252"]} pcbX="-3.6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin253"]} pcbX="-2mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin254"]} pcbX="-1.2mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin255"]} pcbX="0.4mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin256"]} pcbX="1.2mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin257"]} pcbX="2.8mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin258"]} pcbX="3.6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin259"]} pcbX="5.2mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin260"]} pcbX="6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin261"]} pcbX="7.6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin262"]} pcbX="9.2mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin263"]} pcbX="10mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin264"]} pcbX="10.8mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin265"]} pcbX="11.6mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin266"]} pcbX="12.4mm" pcbY="-11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin267"]} pcbX="-11.6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin268"]} pcbX="-10.8mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin269"]} pcbX="-10mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin270"]} pcbX="-9.2mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin271"]} pcbX="-7.6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin272"]} pcbX="-6.8mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin273"]} pcbX="-6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin274"]} pcbX="-4.4mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin275"]} pcbX="-3.6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin276"]} pcbX="-2mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin277"]} pcbX="-1.2mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin278"]} pcbX="0.4mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin279"]} pcbX="1.2mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin280"]} pcbX="2.8mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin281"]} pcbX="3.6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin282"]} pcbX="5.2mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin283"]} pcbX="6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin284"]} pcbX="7.6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin285"]} pcbX="9.2mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin286"]} pcbX="10mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin287"]} pcbX="10.8mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin288"]} pcbX="11.6mm" pcbY="-12.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin289"]} pcbX="-12.4mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin290"]} pcbX="-11.6mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin291"]} pcbX="-10.8mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin292"]} pcbX="-10mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin293"]} pcbX="-9.2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin294"]} pcbX="-7.6mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin295"]} pcbX="-6.8mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin296"]} pcbX="-6mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin297"]} pcbX="-5.2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin298"]} pcbX="-4.4mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin299"]} pcbX="-2.8mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin300"]} pcbX="-2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin301"]} pcbX="-1.2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin302"]} pcbX="-0.4mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin303"]} pcbX="0.4mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin304"]} pcbX="1.2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin305"]} pcbX="2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin306"]} pcbX="2.8mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin307"]} pcbX="4.4mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin308"]} pcbX="5.2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin309"]} pcbX="6mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin310"]} pcbX="6.8mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin311"]} pcbX="7.6mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin312"]} pcbX="9.2mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin313"]} pcbX="10mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin314"]} pcbX="10.8mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin315"]} pcbX="11.6mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin316"]} pcbX="12.4mm" pcbY="11.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin317"]} pcbX="-12.4mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin318"]} pcbX="-11.6mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin319"]} pcbX="-10.8mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin320"]} pcbX="-10mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin321"]} pcbX="-9.2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin322"]} pcbX="-7.6mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin323"]} pcbX="-6.8mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin324"]} pcbX="-6mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin325"]} pcbX="-5.2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin326"]} pcbX="-4.4mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin327"]} pcbX="-2.8mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin328"]} pcbX="-2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin329"]} pcbX="-1.2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin330"]} pcbX="-0.4mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin331"]} pcbX="0.4mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin332"]} pcbX="1.2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin333"]} pcbX="2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin334"]} pcbX="2.8mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin335"]} pcbX="4.4mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin336"]} pcbX="5.2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin337"]} pcbX="6mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin338"]} pcbX="6.8mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin339"]} pcbX="7.6mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin340"]} pcbX="9.2mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin341"]} pcbX="10mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin342"]} pcbX="10.8mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin343"]} pcbX="11.6mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin344"]} pcbX="12.4mm" pcbY="10.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin345"]} pcbX="-12.4mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin346"]} pcbX="-11.6mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin347"]} pcbX="-10.8mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin348"]} pcbX="-10mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin349"]} pcbX="-9.2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin350"]} pcbX="-7.6mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin351"]} pcbX="-6.8mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin352"]} pcbX="-6mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin353"]} pcbX="-5.2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin354"]} pcbX="-4.4mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin355"]} pcbX="-2.8mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin356"]} pcbX="-2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin357"]} pcbX="-1.2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin358"]} pcbX="-0.4mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin359"]} pcbX="0.4mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin360"]} pcbX="1.2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin361"]} pcbX="2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin362"]} pcbX="2.8mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin363"]} pcbX="4.4mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin364"]} pcbX="5.2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin365"]} pcbX="6mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin366"]} pcbX="6.8mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin367"]} pcbX="7.6mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin368"]} pcbX="9.2mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin369"]} pcbX="10mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin370"]} pcbX="10.8mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin371"]} pcbX="11.6mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin372"]} pcbX="12.4mm" pcbY="10mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin373"]} pcbX="-12.4mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin374"]} pcbX="-11.6mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin375"]} pcbX="-10.8mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin376"]} pcbX="-10mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin377"]} pcbX="-9.2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin378"]} pcbX="-7.6mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin379"]} pcbX="-6.8mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin380"]} pcbX="-6mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin381"]} pcbX="-5.2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin382"]} pcbX="-4.4mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin383"]} pcbX="-2.8mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin384"]} pcbX="-2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin385"]} pcbX="-1.2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin386"]} pcbX="-0.4mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin387"]} pcbX="0.4mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin388"]} pcbX="1.2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin389"]} pcbX="2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin390"]} pcbX="2.8mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin391"]} pcbX="4.4mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin392"]} pcbX="5.2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin393"]} pcbX="6mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin394"]} pcbX="6.8mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin395"]} pcbX="7.6mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin396"]} pcbX="9.2mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin397"]} pcbX="10mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin398"]} pcbX="10.8mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin399"]} pcbX="11.6mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin400"]} pcbX="12.4mm" pcbY="9.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin401"]} pcbX="-12.4mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin402"]} pcbX="-11.6mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin403"]} pcbX="-10.8mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin404"]} pcbX="-10mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin405"]} pcbX="-9.2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin406"]} pcbX="-6.8mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin407"]} pcbX="-6mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin408"]} pcbX="-5.2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin409"]} pcbX="-4.4mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin410"]} pcbX="-2.8mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin411"]} pcbX="-2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin412"]} pcbX="-1.2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin413"]} pcbX="-0.4mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin414"]} pcbX="0.4mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin415"]} pcbX="1.2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin416"]} pcbX="2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin417"]} pcbX="2.8mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin418"]} pcbX="4.4mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin419"]} pcbX="5.2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin420"]} pcbX="6mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin421"]} pcbX="6.8mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin422"]} pcbX="9.2mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin423"]} pcbX="10mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin424"]} pcbX="10.8mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin425"]} pcbX="11.6mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin426"]} pcbX="12.4mm" pcbY="8.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin427"]} pcbX="-6mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin428"]} pcbX="-5.2mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin429"]} pcbX="-4.4mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin430"]} pcbX="-2mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin431"]} pcbX="-1.2mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin432"]} pcbX="-0.4mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin433"]} pcbX="0.4mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin434"]} pcbX="1.2mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin435"]} pcbX="2mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin436"]} pcbX="4.4mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin437"]} pcbX="5.2mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin438"]} pcbX="6mm" pcbY="7.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin439"]} pcbX="-12.4mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin440"]} pcbX="-11.6mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin441"]} pcbX="-10.8mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin442"]} pcbX="-10mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin443"]} pcbX="-9.2mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin444"]} pcbX="-8.4mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin445"]} pcbX="8.4mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin446"]} pcbX="9.2mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin447"]} pcbX="10mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin448"]} pcbX="10.8mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin449"]} pcbX="11.6mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin450"]} pcbX="12.4mm" pcbY="6.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin451"]} pcbX="-12.4mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin452"]} pcbX="-11.6mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin453"]} pcbX="-10.8mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin454"]} pcbX="-10mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin455"]} pcbX="-9.2mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin456"]} pcbX="-8.4mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin457"]} pcbX="-7.6mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin458"]} pcbX="7.6mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin459"]} pcbX="8.4mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin460"]} pcbX="9.2mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin461"]} pcbX="10mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin462"]} pcbX="10.8mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin463"]} pcbX="11.6mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin464"]} pcbX="12.4mm" pcbY="6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin465"]} pcbX="-12.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin466"]} pcbX="-11.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin467"]} pcbX="-10.8mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin468"]} pcbX="-10mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin469"]} pcbX="-9.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin470"]} pcbX="-8.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin471"]} pcbX="-7.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin472"]} pcbX="-5.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin473"]} pcbX="-4.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin474"]} pcbX="-3.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin475"]} pcbX="-2.8mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin476"]} pcbX="-2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin477"]} pcbX="-1.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin478"]} pcbX="-0.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin479"]} pcbX="0.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin480"]} pcbX="1.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin481"]} pcbX="2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin482"]} pcbX="2.8mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin483"]} pcbX="3.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin484"]} pcbX="4.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin485"]} pcbX="5.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin486"]} pcbX="7.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin487"]} pcbX="8.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin488"]} pcbX="9.2mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin489"]} pcbX="10mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin490"]} pcbX="10.8mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin491"]} pcbX="11.6mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin492"]} pcbX="12.4mm" pcbY="5.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin493"]} pcbX="-12.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin494"]} pcbX="-11.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin495"]} pcbX="-10.8mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin496"]} pcbX="-10mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin497"]} pcbX="-9.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin498"]} pcbX="-8.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin499"]} pcbX="-7.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin500"]} pcbX="-5.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin501"]} pcbX="-4.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin502"]} pcbX="-3.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin503"]} pcbX="-2.8mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin504"]} pcbX="-2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin505"]} pcbX="-1.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin506"]} pcbX="-0.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin507"]} pcbX="0.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin508"]} pcbX="1.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin509"]} pcbX="2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin510"]} pcbX="2.8mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin511"]} pcbX="3.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin512"]} pcbX="4.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin513"]} pcbX="5.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin514"]} pcbX="7.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin515"]} pcbX="8.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin516"]} pcbX="9.2mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin517"]} pcbX="10mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin518"]} pcbX="10.8mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin519"]} pcbX="11.6mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin520"]} pcbX="12.4mm" pcbY="4.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin521"]} pcbX="-5.2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin522"]} pcbX="-4.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin523"]} pcbX="-3.6mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin524"]} pcbX="-2.8mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin525"]} pcbX="-2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin526"]} pcbX="-1.2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin527"]} pcbX="-0.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin528"]} pcbX="0.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin529"]} pcbX="1.2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin530"]} pcbX="2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin531"]} pcbX="2.8mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin532"]} pcbX="3.6mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin533"]} pcbX="4.4mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin534"]} pcbX="5.2mm" pcbY="3.6mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin535"]} pcbX="-12.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin536"]} pcbX="-11.6mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin537"]} pcbX="-10.8mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin538"]} pcbX="-10mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin539"]} pcbX="-9.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin540"]} pcbX="-8.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin541"]} pcbX="-7.6mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin542"]} pcbX="-5.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin543"]} pcbX="-4.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin544"]} pcbX="-3.6mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin545"]} pcbX="-2.8mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin546"]} pcbX="-2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin547"]} pcbX="-1.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin548"]} pcbX="-0.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin549"]} pcbX="0.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin550"]} pcbX="1.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin551"]} pcbX="2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin552"]} pcbX="2.8mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin553"]} pcbX="3.6mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin554"]} pcbX="4.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin555"]} pcbX="5.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin556"]} pcbX="7.6mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin557"]} pcbX="8.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin558"]} pcbX="9.2mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin559"]} pcbX="10mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin560"]} pcbX="10.8mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin561"]} pcbX="11.6mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin562"]} pcbX="12.4mm" pcbY="2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin563"]} pcbX="-12.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin564"]} pcbX="-11.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin565"]} pcbX="-10.8mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin566"]} pcbX="-10mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin567"]} pcbX="-9.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin568"]} pcbX="-8.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin569"]} pcbX="-7.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin570"]} pcbX="-5.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin571"]} pcbX="-4.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin572"]} pcbX="-3.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin573"]} pcbX="-2.8mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin574"]} pcbX="-2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin575"]} pcbX="-1.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin576"]} pcbX="-0.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin577"]} pcbX="0.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin578"]} pcbX="1.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin579"]} pcbX="2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin580"]} pcbX="2.8mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin581"]} pcbX="3.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin582"]} pcbX="4.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin583"]} pcbX="5.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin584"]} pcbX="7.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin585"]} pcbX="8.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin586"]} pcbX="9.2mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin587"]} pcbX="10mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin588"]} pcbX="10.8mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin589"]} pcbX="11.6mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin590"]} pcbX="12.4mm" pcbY="2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin591"]} pcbX="-12.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin592"]} pcbX="-11.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin593"]} pcbX="-10.8mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin594"]} pcbX="-10mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin595"]} pcbX="-9.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin596"]} pcbX="-8.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin597"]} pcbX="-7.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin598"]} pcbX="-5.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin599"]} pcbX="-4.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin600"]} pcbX="-3.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin601"]} pcbX="-2.8mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin602"]} pcbX="-2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin603"]} pcbX="-1.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin604"]} pcbX="-0.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin605"]} pcbX="0.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin606"]} pcbX="1.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin607"]} pcbX="2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin608"]} pcbX="2.8mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin609"]} pcbX="3.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin610"]} pcbX="4.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin611"]} pcbX="5.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin612"]} pcbX="7.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin613"]} pcbX="8.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin614"]} pcbX="9.2mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin615"]} pcbX="10mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin616"]} pcbX="10.8mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin617"]} pcbX="11.6mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin618"]} pcbX="12.4mm" pcbY="1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin619"]} pcbX="-12.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin620"]} pcbX="-11.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin621"]} pcbX="-10.8mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin622"]} pcbX="-10mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin623"]} pcbX="-9.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin624"]} pcbX="-8.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin625"]} pcbX="-7.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin626"]} pcbX="-5.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin627"]} pcbX="-4.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin628"]} pcbX="-3.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin629"]} pcbX="-2.8mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin630"]} pcbX="-2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin631"]} pcbX="-1.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin632"]} pcbX="-0.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin633"]} pcbX="0.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin634"]} pcbX="1.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin635"]} pcbX="2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin636"]} pcbX="2.8mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin637"]} pcbX="3.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin638"]} pcbX="4.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin639"]} pcbX="5.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin640"]} pcbX="7.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin641"]} pcbX="8.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin642"]} pcbX="9.2mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin643"]} pcbX="10mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin644"]} pcbX="10.8mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin645"]} pcbX="11.6mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin646"]} pcbX="12.4mm" pcbY="0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin647"]} pcbX="-12.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin648"]} pcbX="-11.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin649"]} pcbX="-10.8mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin650"]} pcbX="-10mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin651"]} pcbX="-9.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin652"]} pcbX="-8.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin653"]} pcbX="-7.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin654"]} pcbX="-5.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin655"]} pcbX="-4.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin656"]} pcbX="-3.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin657"]} pcbX="-2.8mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin658"]} pcbX="-2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin659"]} pcbX="-1.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin660"]} pcbX="-0.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin661"]} pcbX="0.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin662"]} pcbX="1.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin663"]} pcbX="2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin664"]} pcbX="2.8mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin665"]} pcbX="3.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin666"]} pcbX="4.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin667"]} pcbX="5.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin668"]} pcbX="7.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin669"]} pcbX="8.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin670"]} pcbX="9.2mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin671"]} pcbX="10mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin672"]} pcbX="10.8mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin673"]} pcbX="11.6mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin674"]} pcbX="12.4mm" pcbY="-0.4mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin675"]} pcbX="-12.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin676"]} pcbX="-11.6mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin677"]} pcbX="-10.8mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin678"]} pcbX="-10mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin679"]} pcbX="-9.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin680"]} pcbX="-8.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin681"]} pcbX="-7.6mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin682"]} pcbX="-5.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin683"]} pcbX="-4.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin684"]} pcbX="-3.6mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin685"]} pcbX="-2.8mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin686"]} pcbX="-2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin687"]} pcbX="-1.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin688"]} pcbX="-0.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin689"]} pcbX="0.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin690"]} pcbX="1.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin691"]} pcbX="2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin692"]} pcbX="2.8mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin693"]} pcbX="3.6mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin694"]} pcbX="4.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin695"]} pcbX="5.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin696"]} pcbX="7.6mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin697"]} pcbX="8.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin698"]} pcbX="9.2mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin699"]} pcbX="10mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin700"]} pcbX="10.8mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin701"]} pcbX="11.6mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin702"]} pcbX="12.4mm" pcbY="-1.2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin703"]} pcbX="-12.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin704"]} pcbX="-11.6mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin705"]} pcbX="-10.8mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin706"]} pcbX="-10mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin707"]} pcbX="-9.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin708"]} pcbX="-8.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin709"]} pcbX="-5.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin710"]} pcbX="-4.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin711"]} pcbX="-3.6mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin712"]} pcbX="-2.8mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin713"]} pcbX="-2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin714"]} pcbX="-1.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin715"]} pcbX="-0.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin716"]} pcbX="0.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin717"]} pcbX="1.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin718"]} pcbX="2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin719"]} pcbX="2.8mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin720"]} pcbX="3.6mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin721"]} pcbX="4.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin722"]} pcbX="5.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin723"]} pcbX="8.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin724"]} pcbX="9.2mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin725"]} pcbX="10mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin726"]} pcbX="10.8mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin727"]} pcbX="11.6mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin728"]} pcbX="12.4mm" pcbY="-2mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin729"]} pcbX="-12.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin730"]} pcbX="-11.6mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin731"]} pcbX="-10.8mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin732"]} pcbX="-10mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin733"]} pcbX="-9.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin734"]} pcbX="-8.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin735"]} pcbX="-7.6mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin736"]} pcbX="-5.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin737"]} pcbX="-4.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin738"]} pcbX="-3.6mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin739"]} pcbX="-2.8mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin740"]} pcbX="-2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin741"]} pcbX="-1.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin742"]} pcbX="-0.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin743"]} pcbX="0.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin744"]} pcbX="1.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin745"]} pcbX="2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin746"]} pcbX="2.8mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin747"]} pcbX="3.6mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin748"]} pcbX="4.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin749"]} pcbX="5.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin750"]} pcbX="7.6mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin751"]} pcbX="8.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin752"]} pcbX="9.2mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin753"]} pcbX="10mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin754"]} pcbX="10.8mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin755"]} pcbX="11.6mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>
<smtpad portHints={["pin756"]} pcbX="12.4mm" pcbY="-2.8mm" layer="top" radius="0.2mm" shape="circle"/>














<fabricationnotepath route={[{ "x": -13.5, "y": 12.5 }, { "x": -13.5, "y": -13.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.5, "y": -13.5 }, { "x": 13.5, "y": -13.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -12.5, "y": 13.5 }, { "x": -13.5, "y": 12.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 13.5, "y": 13.5 }, { "x": -12.5, "y": 13.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 13.5, "y": -13.5 }, { "x": 13.5, "y": 13.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-14.5} anchorAlignment="center" text="ECP5UM5G_85_CABGA756" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={0} pcbY={0} width={28} height={28} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R10: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R7: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R6: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R5: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U1: KSZ9031RNXCA; antmicro-footprints:QFN-48-1EP_7x7x0.9mm_P0.5mm_EP3.5x3.5mm
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.5mm" pcbY="2.75mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin2"]} pcbX="-3.5mm" pcbY="2.25mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin3"]} pcbX="-3.5mm" pcbY="1.75mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin4"]} pcbX="-3.5mm" pcbY="1.25mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin5"]} pcbX="-3.5mm" pcbY="0.75mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin6"]} pcbX="-3.5mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin7"]} pcbX="-3.5mm" pcbY="-0.248mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin8"]} pcbX="-3.5mm" pcbY="-0.748mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin9"]} pcbX="-3.5mm" pcbY="-1.249mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin10"]} pcbX="-3.5mm" pcbY="-1.749mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin11"]} pcbX="-3.5mm" pcbY="-2.249mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin12"]} pcbX="-3.5mm" pcbY="-2.749mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin13"]} pcbX="-2.75mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin14"]} pcbX="-2.25mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin15"]} pcbX="-1.75mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin16"]} pcbX="-1.25mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin17"]} pcbX="-0.75mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin18"]} pcbX="-0.25mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin19"]} pcbX="0.248mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin20"]} pcbX="0.748mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin21"]} pcbX="1.249mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin22"]} pcbX="1.749mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin23"]} pcbX="2.249mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin24"]} pcbX="2.749mm" pcbY="-3.499mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin25"]} pcbX="3.499mm" pcbY="-2.749mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin26"]} pcbX="3.499mm" pcbY="-2.249mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin27"]} pcbX="3.499mm" pcbY="-1.749mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin28"]} pcbX="3.499mm" pcbY="-1.249mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin29"]} pcbX="3.499mm" pcbY="-0.748mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin30"]} pcbX="3.499mm" pcbY="-0.248mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin31"]} pcbX="3.499mm" pcbY="0.25mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin32"]} pcbX="3.499mm" pcbY="0.75mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin33"]} pcbX="3.499mm" pcbY="1.25mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin34"]} pcbX="3.499mm" pcbY="1.75mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin35"]} pcbX="3.499mm" pcbY="2.25mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin36"]} pcbX="3.499mm" pcbY="2.75mm" layer="top" width="0.3mm" height="0.9mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin37"]} pcbX="2.749mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin38"]} pcbX="2.249mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin39"]} pcbX="1.749mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin40"]} pcbX="1.249mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin41"]} pcbX="0.748mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin42"]} pcbX="0.248mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin43"]} pcbX="-0.25mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin44"]} pcbX="-0.75mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin45"]} pcbX="-1.25mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin46"]} pcbX="-1.75mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin47"]} pcbX="-2.25mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin48"]} pcbX="-2.75mm" pcbY="3.5mm" layer="top" width="0.9mm" height="0.3mm" radius="0.15mm" ccwRotation={90} shape="rotated_pill"/>
<smtpad portHints={["pin49"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.5mm" height="3.5mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -3.5, "y": 2.5 }, { "x": -3.5, "y": -3.499 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.5, "y": -3.499 }, { "x": 3.499, "y": -3.499 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.5, "y": 3.5 }, { "x": -3.5, "y": 2.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.499, "y": 3.5 }, { "x": -2.5, "y": 3.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.499, "y": -3.499 }, { "x": 3.499, "y": 3.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.0254} pcbY={-5.7404} anchorAlignment="center" text="KSZ9031RNXCA" font="tscircuit2024" fontSize={1.27}/>

<courtyardrect pcbX={0} pcbY={0} width={8.3} height={8.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C20: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C26: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R4: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R3: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R2: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R1: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R13: R_12k1_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_12k1_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R48: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R48" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U9: USB3300-EZK-TR; antmicro-footprints:QFN-32-1EP_5x5mm
export const Footprint_U9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.495mm" pcbY="1.702mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.495mm" pcbY="1.2mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.495mm" pcbY="0.701mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.495mm" pcbY="0.201mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.495mm" pcbY="-0.296mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.495mm" pcbY="-0.8mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.495mm" pcbY="-1.3mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.495mm" pcbY="-1.8mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.768mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.269mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.772mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.272mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.229mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.728mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.23mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1.73mm" pcbY="-2.523mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.456mm" pcbY="-1.8mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.456mm" pcbY="-1.3mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.456mm" pcbY="-0.8mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.456mm" pcbY="-0.296mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.456mm" pcbY="0.201mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.456mm" pcbY="0.701mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.456mm" pcbY="1.2mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.456mm" pcbY="1.702mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.73mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.23mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.728mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.229mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.272mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.772mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.269mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.768mm" pcbY="2.426mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-0.02mm" pcbY="-0.048mm" layer="top" width="3.45mm" height="3.45mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -2.499, "y": 2.299 }, { "x": -2.298, "y": 2.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={3.23987} pcbY={-3.520501} anchorAlignment="center" text="USB3300-EZK-TR" font="tscircuit2024" fontSize={0.482094}/>
<fabricationnoterect pcbX={0.0005} pcbY={0.0005} width={4.999} height={4.999} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.005} pcbY={0.005} width={5.49} height={5.49} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R77: R_12k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R77 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_12k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R77" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C41: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C41 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C41" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C38: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R17: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R18: R_330R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_330R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C36: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C32: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R19: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C40: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C40 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C40" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C31: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C42: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C42 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R20: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-0.2} pcbY={-1.1} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C37: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C35: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C33: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J2: Bus_M.2_1-2199230-6; antmicro-footprints:Bus_M.2_Socket_Key_M_TE_1-2199230-6
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <hole pcbX="-10mm" pcbY="-1.499mm" diameter="1.1mm"/>
<hole pcbX="9.997mm" pcbY="-1.499mm" diameter="1.6mm"/>
<smtpad portHints={["pin1"]} pcbX="-9.25mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-9.003mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-8.753mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-8.503mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-8.253mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-8.001mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-7.752mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-7.502mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-7.252mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7.002mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-6.752mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-6.502mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-6.252mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-6.002mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.752mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-5.502mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-5.252mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-5.002mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.752mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-4.502mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-4.252mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-4.002mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-3.751mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-3.501mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-3.251mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="-3.001mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="-2.751mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="-2.501mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-2.251mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-2.001mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.752mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.502mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-1.252mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="-1.002mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="-0.751mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="-0.501mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="-0.251mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="-0.001mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="0.248mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="0.498mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="0.748mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="0.998mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="1.249mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="1.499mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="1.749mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="1.999mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="2.249mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="2.499mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="2.749mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="2.999mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="3.249mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="3.499mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="3.749mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="3.999mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="4.248mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="4.498mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="4.748mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin58"]} pcbX="4.998mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin67"]} pcbX="7.248mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin68"]} pcbX="7.498mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin69"]} pcbX="7.748mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin70"]} pcbX="7.998mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin71"]} pcbX="8.247mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin72"]} pcbX="8.497mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin73"]} pcbX="8.747mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin74"]} pcbX="8.997mm" pcbY="-3.773mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin75"]} pcbX="9.247mm" pcbY="3.775mm" layer="top" width="0.3mm" height="1.55mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin76"]} pcbX="-10.352mm" pcbY="3mm" layer="top" width="1.2mm" height="2.75mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin77"]} pcbX="10.349mm" pcbY="3mm" layer="top" width="1.2mm" height="2.75mm" ccwRotation={-180} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -10.949, "y": 3.55 }, { "x": -10.4, "y": 4.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -10.949, "y": -4.2 }, { "x": -10.949, "y": 3.55 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -10.4, "y": 4.1 }, { "x": 10.95, "y": 4.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 10.95, "y": 4.1 }, { "x": 10.95, "y": -4.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 10.95, "y": -4.2 }, { "x": -10.949, "y": -4.2 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={2.99206} pcbY={-4.516565} anchorAlignment="center" text="Bus_M.2_1-2199230-6" font="tscircuit2024" fontSize={1.40848}/>

<courtyardoutline outline={[{ "x": -11.16, "y": 4.83 }, { "x": -11.16, "y": -4.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -11.16, "y": -4.78 }, { "x": 11.15, "y": -4.78 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.15, "y": 4.83 }, { "x": -11.16, "y": 4.83 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 11.15, "y": -4.78 }, { "x": 11.15, "y": 4.83 }]} layer="top"/>
      </footprint>);
// D1: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U4: W25Q32JVSSIQ; antmicro-footprints:SOIC-8_5.3x5.3x2mm_P1.27mm
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.601mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.601mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.601mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.601mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="3.6mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="3.6mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -2.641, "y": 2.641 }, { "x": 2.64, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": 1.371 }, { "x": -1.371, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": -2.64 }, { "x": -2.641, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": 2.641 }, { "x": 2.64, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": -2.64 }, { "x": -2.641, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.8} anchorAlignment="bottom_left" text="W25Q32JVSSIQ" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={9.35} height={6} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U5: W25Q32JVSSIQ; antmicro-footprints:SOIC-8_5.3x5.3x2mm_P1.27mm
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.601mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.601mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.601mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.601mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="3.6mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="3.6mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -2.641, "y": 2.641 }, { "x": 2.64, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": 1.371 }, { "x": -1.371, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": -2.64 }, { "x": -2.641, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": 2.641 }, { "x": 2.64, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": -2.64 }, { "x": -2.641, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.8} anchorAlignment="bottom_left" text="W25Q32JVSSIQ" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={9.35} height={6} layer="top" pcbRotation="0deg"/>
      </footprint>);
// J1: L834-1G1T-S7; antmicro-footprints:RJ45_BEL_L834-1G1T-S7
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <hole pcbX="-13.235mm" pcbY="-1.009mm" diameter="2.31mm"/>
<hole pcbX="-13.235mm" pcbY="-8.63mm" diameter="2.31mm"/>
<hole pcbX="3.073mm" pcbY="-3.43mm" diameter="2.31mm"/>
<hole pcbX="3.073mm" pcbY="-11.047mm" diameter="2.31mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.02mm" rectPadWidth="1.53mm" rectPadHeight="1.53mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="-2.032mm" pcbY="0mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="-4.064mm" pcbY="0mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="-6.096mm" pcbY="0mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="-8.128mm" pcbY="0mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="-10.16mm" pcbY="0mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="1.015mm" pcbY="2.54mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="-1.016mm" pcbY="2.54mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="-3.048mm" pcbY="2.54mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="-7.112mm" pcbY="2.54mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="-9.144mm" pcbY="2.54mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="-11.176mm" pcbY="2.54mm" outerDiameter="1.53mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="1.945mm" pcbY="-13.97mm" outerDiameter="1.725mm" holeDiameter="1.15mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="1.945mm" pcbY="-16.508mm" outerDiameter="1.725mm" holeDiameter="1.15mm" shape="circle"/>
<platedhole portHints={["pin15"]} pcbX="-12.106mm" pcbY="-13.97mm" outerDiameter="1.725mm" holeDiameter="1.15mm" shape="circle"/>
<platedhole portHints={["pin16"]} pcbX="-12.106mm" pcbY="-16.508mm" outerDiameter="1.725mm" holeDiameter="1.15mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="-13.235mm" pcbY="-5.328mm" outerDiameter="2.1mm" holeDiameter="1.4mm" shape="circle"/>
<platedhole portHints={["pin17"]} pcbX="3.073mm" pcbY="-6.73mm" outerDiameter="2.1mm" holeDiameter="1.4mm" shape="circle"/>







<fabricationnotepath route={[{ "x": -13.34, "y": 4.121 }, { "x": -13.34, "y": -21.94 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.34, "y": -21.94 }, { "x": 3.179, "y": -21.94 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.179, "y": 4.121 }, { "x": -13.34, "y": 4.121 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.179, "y": -21.94 }, { "x": 3.179, "y": 4.121 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.34, "y": -21.94 }, { "x": -13.382202, "y": -21.849832 }, { "x": -13.423812, "y": -21.759389 }, { "x": -13.464828, "y": -21.668675 }, { "x": -13.505248, "y": -21.577694 }, { "x": -13.545071, "y": -21.48645 }, { "x": -13.584295, "y": -21.394947 }, { "x": -13.622918, "y": -21.303189 }, { "x": -13.660938, "y": -21.21118 }, { "x": -13.698355, "y": -21.118923 }, { "x": -13.735165, "y": -21.026423 }, { "x": -13.771369, "y": -20.933683 }, { "x": -13.806964, "y": -20.840708 }, { "x": -13.841948, "y": -20.747502 }, { "x": -13.87632, "y": -20.654068 }, { "x": -13.910079, "y": -20.560411 }, { "x": -13.943224, "y": -20.466535 }, { "x": -13.975752, "y": -20.372443 }, { "x": -14.007662, "y": -20.27814 }, { "x": -14.038953, "y": -20.18363 }, { "x": -14.069625, "y": -20.088917 }, { "x": -14.099674, "y": -19.994005 }, { "x": -14.1291, "y": -19.898898 }, { "x": -14.157903, "y": -19.803599 }, { "x": -14.18608, "y": -19.708114 }, { "x": -14.21363, "y": -19.612447 }, { "x": -14.240552, "y": -19.516601 }, { "x": -14.266845, "y": -19.42058 }, { "x": -14.292508, "y": -19.324389 }, { "x": -14.31754, "y": -19.228032 }, { "x": -14.34194, "y": -19.131512 }, { "x": -14.365706, "y": -19.034835 }, { "x": -14.388838, "y": -18.938004 }, { "x": -14.411335, "y": -18.841024 }, { "x": -14.433195, "y": -18.743898 }, { "x": -14.454418, "y": -18.646631 }, { "x": -14.475002, "y": -18.549227 }, { "x": -14.494948, "y": -18.451689 }, { "x": -14.514253, "y": -18.354024 }, { "x": -14.532918, "y": -18.256233 }, { "x": -14.550942, "y": -18.158323 }, { "x": -14.568323, "y": -18.060296 }, { "x": -14.58506, "y": -17.962158 }, { "x": -14.601154, "y": -17.863912 }, { "x": -14.616604, "y": -17.765562 }, { "x": -14.631408, "y": -17.667114 }, { "x": -14.645567, "y": -17.56857 }, { "x": -14.659079, "y": -17.469936 }, { "x": -14.671944, "y": -17.371215 }, { "x": -14.684162, "y": -17.272412 }, { "x": -14.695731, "y": -17.173531 }, { "x": -14.706652, "y": -17.074576 }, { "x": -14.716924, "y": -16.975552 }, { "x": -14.726546, "y": -16.876462 }, { "x": -14.735519, "y": -16.777312 }, { "x": -14.743841, "y": -16.678105 }, { "x": -14.751513, "y": -16.578845 }, { "x": -14.758533, "y": -16.479538 }, { "x": -14.764903, "y": -16.380186 }, { "x": -14.770621, "y": -16.280795 }, { "x": -14.775687, "y": -16.181368 }, { "x": -14.780101, "y": -16.081911 }, { "x": -14.783862, "y": -15.982426 }, { "x": -14.786972, "y": -15.882919 }, { "x": -14.789429, "y": -15.783394 }, { "x": -14.791233, "y": -15.683855 }, { "x": -14.792385, "y": -15.584306 }, { "x": -14.792884, "y": -15.484752 }, { "x": -14.79273, "y": -15.385196 }, { "x": -14.791923, "y": -15.285644 }, { "x": -14.790464, "y": -15.186099 }, { "x": -14.788352, "y": -15.086566 }, { "x": -14.785588, "y": -14.987049 }, { "x": -14.782171, "y": -14.887552 }, { "x": -14.778101, "y": -14.788079 }, { "x": -14.77338, "y": -14.688636 }, { "x": -14.768007, "y": -14.589225 }, { "x": -14.761982, "y": -14.489852 }, { "x": -14.755306, "y": -14.390521 }, { "x": -14.747978, "y": -14.291235 }, { "x": -14.74, "y": -14.192 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 4.578, "y": -14.192 }, { "x": 4.585967, "y": -14.291232 }, { "x": 4.593283, "y": -14.390514 }, { "x": 4.59995, "y": -14.489842 }, { "x": 4.605965, "y": -14.589211 }, { "x": 4.611329, "y": -14.688618 }, { "x": 4.616042, "y": -14.788057 }, { "x": 4.620104, "y": -14.887525 }, { "x": 4.623513, "y": -14.987018 }, { "x": 4.626271, "y": -15.086531 }, { "x": 4.628377, "y": -15.18606 }, { "x": 4.629831, "y": -15.285601 }, { "x": 4.630633, "y": -15.385149 }, { "x": 4.630783, "y": -15.4847 }, { "x": 4.630281, "y": -15.58425 }, { "x": 4.629127, "y": -15.683794 }, { "x": 4.62732, "y": -15.783329 }, { "x": 4.624862, "y": -15.88285 }, { "x": 4.621751, "y": -15.982353 }, { "x": 4.617989, "y": -16.081833 }, { "x": 4.613576, "y": -16.181286 }, { "x": 4.608511, "y": -16.280708 }, { "x": 4.602795, "y": -16.380095 }, { "x": 4.596428, "y": -16.479443 }, { "x": 4.58941, "y": -16.578746 }, { "x": 4.581742, "y": -16.678002 }, { "x": 4.573424, "y": -16.777205 }, { "x": 4.564456, "y": -16.876351 }, { "x": 4.554839, "y": -16.975437 }, { "x": 4.544573, "y": -17.074457 }, { "x": 4.533659, "y": -17.173409 }, { "x": 4.522096, "y": -17.272286 }, { "x": 4.509887, "y": -17.371086 }, { "x": 4.49703, "y": -17.469803 }, { "x": 4.483527, "y": -17.568434 }, { "x": 4.469378, "y": -17.666975 }, { "x": 4.454584, "y": -17.765421 }, { "x": 4.439145, "y": -17.863768 }, { "x": 4.423063, "y": -17.962011 }, { "x": 4.406337, "y": -18.060147 }, { "x": 4.388969, "y": -18.158172 }, { "x": 4.370959, "y": -18.25608 }, { "x": 4.352308, "y": -18.353869 }, { "x": 4.333017, "y": -18.451533 }, { "x": 4.313087, "y": -18.549069 }, { "x": 4.292518, "y": -18.646472 }, { "x": 4.271311, "y": -18.743738 }, { "x": 4.249468, "y": -18.840863 }, { "x": 4.226989, "y": -18.937843 }, { "x": 4.203875, "y": -19.034674 }, { "x": 4.180127, "y": -19.131351 }, { "x": 4.155747, "y": -19.227871 }, { "x": 4.130735, "y": -19.324229 }, { "x": 4.105092, "y": -19.420421 }, { "x": 4.078819, "y": -19.516443 }, { "x": 4.051919, "y": -19.61229 }, { "x": 4.024391, "y": -19.70796 }, { "x": 3.996236, "y": -19.803447 }, { "x": 3.967457, "y": -19.898748 }, { "x": 3.938054, "y": -19.993858 }, { "x": 3.908029, "y": -20.088773 }, { "x": 3.877383, "y": -20.18349 }, { "x": 3.846117, "y": -20.278004 }, { "x": 3.814232, "y": -20.372311 }, { "x": 3.781731, "y": -20.466407 }, { "x": 3.748614, "y": -20.560288 }, { "x": 3.714882, "y": -20.65395 }, { "x": 3.680538, "y": -20.74739 }, { "x": 3.645582, "y": -20.840602 }, { "x": 3.610016, "y": -20.933583 }, { "x": 3.573842, "y": -21.02633 }, { "x": 3.537062, "y": -21.118837 }, { "x": 3.499676, "y": -21.211102 }, { "x": 3.461686, "y": -21.303119 }, { "x": 3.423095, "y": -21.394886 }, { "x": 3.383903, "y": -21.486398 }, { "x": 3.344113, "y": -21.577652 }, { "x": 3.303726, "y": -21.668642 }, { "x": 3.262743, "y": -21.759367 }, { "x": 3.221167, "y": -21.84982 }, { "x": 3.179, "y": -21.94 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={2.16} pcbY={12.635} anchorAlignment="center" text="L834-1G1T-S7" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -15.06, "y": -22.19 }, { "x": -15.06, "y": 0.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": 4.4 }, { "x": 3.5, "y": 4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": 0.3 }, { "x": -15.06, "y": 0.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": 0.3 }, { "x": -13.6, "y": 4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.5, "y": 0.3 }, { "x": 3.5, "y": 4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.87, "y": 0.3 }, { "x": 3.5, "y": 0.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.87, "y": 0.3 }, { "x": 4.87, "y": -22.19 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.87, "y": -22.19 }, { "x": -15.06, "y": -22.19 }]} layer="top"/>
      </footprint>);
// U3: W25Q32JVSSIQ; antmicro-footprints:SOIC-8_5.3x5.3x2mm_P1.27mm
export const Footprint_U3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.601mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.601mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.601mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.601mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="3.6mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="3.6mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -2.641, "y": 2.641 }, { "x": 2.64, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": 1.371 }, { "x": -1.371, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": -2.64 }, { "x": -2.641, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": 2.641 }, { "x": 2.64, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": -2.64 }, { "x": -2.641, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.8} anchorAlignment="bottom_left" text="W25Q32JVSSIQ" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={9.35} height={6} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U2: W25Q32JVSSIQ; antmicro-footprints:SOIC-8_5.3x5.3x2mm_P1.27mm
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.601mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.601mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.601mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.601mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="3.6mm" pcbY="-1.904mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="3.6mm" pcbY="-0.633mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="3.6mm" pcbY="0.635mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="3.6mm" pcbY="1.905mm" layer="top" cornerRadius="0.08125mm" width="1.65mm" height="0.65mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -2.641, "y": 2.641 }, { "x": 2.64, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": 1.371 }, { "x": -1.371, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.641, "y": -2.64 }, { "x": -2.641, "y": 2.641 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": 2.641 }, { "x": 2.64, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.64, "y": -2.64 }, { "x": -2.641, "y": -2.64 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.8} anchorAlignment="bottom_left" text="W25Q32JVSSIQ" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={9.35} height={6} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R126: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R126 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R126" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R127: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R127 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R127" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R128: R_22R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R128 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_22R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R128" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R129: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R129 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R129" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D14: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C39: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C39 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// TP1: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// C241: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C241 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C241" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R140: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R140 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_0R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP8: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP9: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP10: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP11: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// R96: R_53k6_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R96 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_53k6_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R96" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C104: C_47p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C104 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_47p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C104" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C102: C_4n7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C102 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_4n7_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C102" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R90: R_16k9_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R90 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_16k9_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R90" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R97: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R97 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R97" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C105: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C105 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C105" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R91: R_243k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R91 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_243k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R91" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R137: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R137 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R137" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R138: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R138 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R138" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R139: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R139 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R139" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C95: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C95 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C95" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R85: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R85 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R85" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D6: PDS760; antmicro-footprints:PowerDI5
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.084mm" width="4.86mm" height="3.36mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.862mm" pcbY="0.94mm" layer="top" cornerRadius="0.17375mm" width="1.4mm" height="1.39mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.862mm" pcbY="-0.941mm" layer="top" cornerRadius="0.17375mm" width="1.4mm" height="1.39mm" ccwRotation={-180} shape="rotated_rect"/>






<fabricationnotetext pcbX={0} pcbY={-3.4} anchorAlignment="bottom_left" text="PDS760" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={-0.001} pcbY={0} width={7.402} height={4.6} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R120: R_66k5_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R120 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_66k5_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R120" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R142: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R142 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_0R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// L5: IHLP1212AEERR47M11; antmicro-footprints:L_Vishay-IHLP-1212AE
export const Footprint_L5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>






<fabricationnoterect pcbX={0} pcbY={0} width={3.606} height={3.202} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.7} height={3.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// L6: IHLP1212AEERR47M11; antmicro-footprints:L_Vishay-IHLP-1212AE
export const Footprint_L6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>






<fabricationnoterect pcbX={0} pcbY={0} width={3.606} height={3.202} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.7} height={3.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U18: TPS62823DLCT; antmicro-footprints:QFN-8_2x1.5mm
export const Footprint_U18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.677mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.677mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.677mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.677mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.675mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.675mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.675mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.675mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.998 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.998, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": 1 }, { "x": 0.998, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": -0.998 }, { "x": -1, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.075} anchorAlignment="center" text="TPS62823DLCT" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U18" font="tscircuit2024" fontSize={0.5}/>

<courtyardrect pcbX={0} pcbY={0} width={2.2} height={2.5} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U19: TPS62823DLCT; antmicro-footprints:QFN-8_2x1.5mm
export const Footprint_U19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.677mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.677mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.677mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.677mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.675mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.675mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.675mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.675mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.998 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.998, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": 1 }, { "x": 0.998, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": -0.998 }, { "x": -1, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.075} anchorAlignment="center" text="TPS62823DLCT" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U19" font="tscircuit2024" fontSize={0.5}/>

<courtyardrect pcbX={0} pcbY={0} width={2.2} height={2.5} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U20: TPS62823DLCT; antmicro-footprints:QFN-8_2x1.5mm
export const Footprint_U20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.677mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.677mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.677mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.677mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.675mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.675mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.675mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.675mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.998 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.998, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": 1 }, { "x": 0.998, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": -0.998 }, { "x": -1, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.075} anchorAlignment="center" text="TPS62823DLCT" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U20" font="tscircuit2024" fontSize={0.5}/>

<courtyardrect pcbX={0} pcbY={0} width={2.2} height={2.5} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R119: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R119 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R119" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R118: R_124k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R118 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_124k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R118" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R121: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R121 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R121" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R117: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R117 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R117" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R116: R_200k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R116 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_200k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R116" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R115: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R115 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R115" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R114: R_453k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R114 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_453k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R114" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U17: TPS62823DLCT; antmicro-footprints:QFN-8_2x1.5mm
export const Footprint_U17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.677mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.677mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.677mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.677mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.675mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.675mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.675mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.675mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.998 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.998, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": 1 }, { "x": 0.998, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": -0.998 }, { "x": -1, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.075} anchorAlignment="center" text="TPS62823DLCT" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U17" font="tscircuit2024" fontSize={0.5}/>

<courtyardrect pcbX={0} pcbY={0} width={2.2} height={2.5} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R143: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R143 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_0R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C113: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C113 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C113" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C115: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C115 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C115" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C130: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C130 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C130" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C131: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C131 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C131" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C128: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C128 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C128" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C125: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C125 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C125" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C126: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C126 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C126" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C124: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C124 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C124" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C123: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C123 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C123" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C120: C_120p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C120 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_120p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C120" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C121: C_120p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C121 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_120p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C121" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C119: C_120p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C119 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_120p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C119" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C118: C_120p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C118 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_120p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C118" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C116: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C116 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C116" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C117: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C117 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C117" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C114: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C114 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C114" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R145: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R145 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_0R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// L3: IHLP1212AEERR47M11; antmicro-footprints:L_Vishay-IHLP-1212AE
export const Footprint_L3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>






<fabricationnoterect pcbX={0} pcbY={0} width={3.606} height={3.202} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.7} height={3.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R141: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R141 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_0R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C122: C_120p_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C122 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_120p_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C122" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C127: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C127 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C127" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C132: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C132 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C132" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R123: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R123 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R123" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// L7: IHLP1212AEERR47M11; antmicro-footprints:L_Vishay-IHLP-1212AE
export const Footprint_L7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>






<fabricationnoterect pcbX={0} pcbY={0} width={3.606} height={3.202} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.7} height={3.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// L4: IHLP1212AEERR47M11; antmicro-footprints:L_Vishay-IHLP-1212AE
export const Footprint_L4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.35mm" pcbY="0mm" layer="top" cornerRadius="0.06mm" width="1.5mm" height="1.2mm" shape="rect"/>






<fabricationnoterect pcbX={0} pcbY={0} width={3.606} height={3.202} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={4.7} height={3.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R100: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R100 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R100" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R93: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R93 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R93" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// J7: PinHeader_1x6_P2.54mm_Drill1.1mm; antmicro-footprints:PinHeader_1x6_P2.54mm_Drill1.1mm
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.9mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="2.539mm" pcbY="0mm" outerDiameter="1.9mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="5.078mm" pcbY="0mm" outerDiameter="1.9mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="7.618mm" pcbY="0mm" outerDiameter="1.9mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="10.159mm" pcbY="0mm" outerDiameter="1.9mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="12.698mm" pcbY="0mm" outerDiameter="1.9mm" holeDiameter="1.1mm" shape="circle"/>




<fabricationnotetext pcbX={2.320593} pcbY={-2.138773} anchorAlignment="center" text="PinHeader_1x6_P2.54mm_Drill1.1mm" font="tscircuit2024" fontSize={0.641492}/>

<courtyardoutline outline={[{ "x": -1.5, "y": 1.5 }, { "x": 14.18, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.5, "y": -1.48 }, { "x": -1.5, "y": 1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 14.18, "y": 1.5 }, { "x": 14.18, "y": -1.48 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 14.18, "y": -1.48 }, { "x": -1.5, "y": -1.48 }]} layer="top"/>
      </footprint>);
// R75: R_12k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R75 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_12k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R75" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C56: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C56" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// U8: USB3300-EZK-TR; antmicro-footprints:QFN-32-1EP_5x5mm
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.495mm" pcbY="1.702mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.495mm" pcbY="1.2mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.495mm" pcbY="0.701mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.495mm" pcbY="0.201mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.495mm" pcbY="-0.296mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.495mm" pcbY="-0.8mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.495mm" pcbY="-1.3mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.495mm" pcbY="-1.8mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.768mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.269mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.772mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.272mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.229mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.728mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.23mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1.73mm" pcbY="-2.523mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.456mm" pcbY="-1.8mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.456mm" pcbY="-1.3mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.456mm" pcbY="-0.8mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.456mm" pcbY="-0.296mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.456mm" pcbY="0.201mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.456mm" pcbY="0.701mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.456mm" pcbY="1.2mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.456mm" pcbY="1.702mm" layer="top" width="0.85mm" height="0.28mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.73mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.23mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.728mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.229mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.272mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.772mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.269mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.768mm" pcbY="2.426mm" layer="top" width="0.28mm" height="0.85mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="-0.02mm" pcbY="-0.048mm" layer="top" width="3.45mm" height="3.45mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -2.499, "y": 2.299 }, { "x": -2.298, "y": 2.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={3.23987} pcbY={-3.520501} anchorAlignment="center" text="USB3300-EZK-TR" font="tscircuit2024" fontSize={0.482094}/>
<fabricationnoterect pcbX={0.0005} pcbY={0.0005} width={4.999} height={4.999} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.005} pcbY={0.005} width={5.49} height={5.49} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP2: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP3: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP6: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP12: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// C100: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C100 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C100" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R88: R_10R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R88 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_10R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C96: C_10u_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C96 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.95} anchorAlignment="center" text="C_10u_0805" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.9} height={1.35} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C97: C_10u_0805; antmicro-footprints:C_0805_2012Metric
export const Footprint_C97 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.2mm" height="1.3mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.95} anchorAlignment="center" text="C_10u_0805" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.9} height={1.35} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C248: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C248 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C248" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// SW1: SW_B3U-1000P_SMD; antmicro-footprints:SW_B3U-1000P_SMD
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.7mm" pcbY="0mm" layer="top" width="0.8mm" height="1.7mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="1.699mm" pcbY="0mm" layer="top" width="0.8mm" height="1.7mm" shape="rect"/>









<fabricationnotetext pcbX={0} pcbY={-2.63} anchorAlignment="center" text="SW_B3U-1000P_SMD" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="SW1" font="tscircuit2024" fontSize={0.5}/>
<fabricationnoterect pcbX={-0.0005} pcbY={0.0005} width={2.999} height={2.579} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.0005} pcbY={0.0005} width={4.499} height={3.099} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R86: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R86 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R86" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R87: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R87 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R87" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// L2: WE_7447798720; antmicro-footprints:L_WE-PDF-1064
export const Footprint_L2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-4.1mm" pcbY="0mm" layer="top" cornerRadius="0.12mm" width="3.4mm" height="2.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="4.1mm" pcbY="0mm" layer="top" cornerRadius="0.12mm" width="3.4mm" height="2.4mm" ccwRotation={90} shape="rotated_rect"/>







<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={10.2} height={10.2} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": -5.55, "y": 1.95 }, { "x": -5.55, "y": -1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.55, "y": -1.95 }, { "x": -5.35, "y": -1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.35, "y": 5.35 }, { "x": -5.35, "y": 1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.35, "y": 1.95 }, { "x": -5.55, "y": 1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.35, "y": -1.95 }, { "x": -5.35, "y": -5.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.35, "y": -5.35 }, { "x": 5.35, "y": -5.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.35, "y": 5.35 }, { "x": -5.35, "y": 5.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.35, "y": 1.95 }, { "x": 5.35, "y": 5.35 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.35, "y": -1.95 }, { "x": 5.55, "y": -1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.35, "y": -5.35 }, { "x": 5.35, "y": -1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.55, "y": 1.95 }, { "x": 5.35, "y": 1.95 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.55, "y": 1.95 }, { "x": 5.55, "y": -1.95 }]} layer="top"/>
      </footprint>);
// C129: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C129 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C129" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C101: C_10u_25V_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C101 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="C_10u_25V_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C260: C_10u_25V_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C260 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="C_10u_25V_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C261: C_10u_25V_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C261 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="C_10u_25V_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C59: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C59" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C112: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C112 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// Y4: Oscillator_12MHz_ASFLMB; antmicro-footprints:Oscillator_SMD_Abracon_ASFLMB_5x3.2x0.85mm
export const Footprint_Y4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.049mm" pcbY="1.17mm" layer="top" width="1.1mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.049mm" pcbY="-1.369mm" layer="top" width="1.1mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.252mm" pcbY="-1.369mm" layer="top" width="1.1mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.252mm" pcbY="1.17mm" layer="top" width="1.1mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotetext pcbX={-0.05} pcbY={-2.925} anchorAlignment="center" text="Oscillator_12MHz_ASFLMB" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-2} pcbY={0} anchorAlignment="center" text="Y4" font="tscircuit2024" fontSize={0.3}/>

<courtyardrect pcbX={0.1} pcbY={-0.1} width={3.8} height={5.6} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP15: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP14: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// TP13: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// J5: SFF-TA-1002-4C+; antmicro-footprints:SFF-TA-1002-4C+
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-18.205mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-17.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-17mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-16.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-15.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-15.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-14.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-14mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-13.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-12.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-12.2mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-11.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-11mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-10.4mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-9.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-9.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-8.6mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-7.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-6.8mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-6.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="-5.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="-5mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="-4.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="-3.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="-3.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="-2.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="-2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="2.01mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="2.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="3.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="3.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="4.4mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="5mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="5.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="6.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="6.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="7.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="8.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="9.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="9.8mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="14.715mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="15.3mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="15.9mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="16.5mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="17.1mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="17.7mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="18.3mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="18.9mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="19.5mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="20.1mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin53"]} pcbX="20.7mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin54"]} pcbX="21.3mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin55"]} pcbX="21.9mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin56"]} pcbX="22.5mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin57"]} pcbX="23.1mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin58"]} pcbX="23.7mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin59"]} pcbX="24.3mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin60"]} pcbX="24.9mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin61"]} pcbX="25.5mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin62"]} pcbX="26.1mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin63"]} pcbX="26.7mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin64"]} pcbX="27.3mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin65"]} pcbX="27.9mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin66"]} pcbX="28.5mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin67"]} pcbX="29.1mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin68"]} pcbX="29.7mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin69"]} pcbX="30.3mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin70"]} pcbX="30.9mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin71"]} pcbX="-18.205mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin72"]} pcbX="-17.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin73"]} pcbX="-17mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin74"]} pcbX="-16.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin75"]} pcbX="-15.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin76"]} pcbX="-15.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin77"]} pcbX="-14.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin78"]} pcbX="-14mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin79"]} pcbX="-13.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin80"]} pcbX="-12.8mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin81"]} pcbX="-12.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin82"]} pcbX="-11.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin83"]} pcbX="-11mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin84"]} pcbX="-10.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin85"]} pcbX="-9.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin86"]} pcbX="-9.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin87"]} pcbX="-8.6mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin88"]} pcbX="-8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin89"]} pcbX="-7.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin90"]} pcbX="-6.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin91"]} pcbX="-6.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin92"]} pcbX="-5.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin93"]} pcbX="-5mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin94"]} pcbX="-4.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin95"]} pcbX="-3.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin96"]} pcbX="-3.2mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin97"]} pcbX="-2.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin98"]} pcbX="-2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin99"]} pcbX="2.01mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin100"]} pcbX="2.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin101"]} pcbX="3.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin102"]} pcbX="3.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin103"]} pcbX="4.4mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin104"]} pcbX="5mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin105"]} pcbX="5.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin106"]} pcbX="6.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin107"]} pcbX="6.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin108"]} pcbX="7.4mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin109"]} pcbX="8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin110"]} pcbX="8.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin111"]} pcbX="9.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin112"]} pcbX="9.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin113"]} pcbX="14.715mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin114"]} pcbX="15.3mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin115"]} pcbX="15.9mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin116"]} pcbX="16.5mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin117"]} pcbX="17.1mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin118"]} pcbX="17.7mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin119"]} pcbX="18.3mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin120"]} pcbX="18.9mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin121"]} pcbX="19.5mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin122"]} pcbX="20.1mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin123"]} pcbX="20.7mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin124"]} pcbX="21.3mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin125"]} pcbX="21.9mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin126"]} pcbX="22.5mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin127"]} pcbX="23.1mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin128"]} pcbX="23.7mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin129"]} pcbX="24.3mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin130"]} pcbX="24.9mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin131"]} pcbX="25.5mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin132"]} pcbX="26.1mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin133"]} pcbX="26.7mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin134"]} pcbX="27.3mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin135"]} pcbX="27.9mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin136"]} pcbX="28.5mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin137"]} pcbX="29.1mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin138"]} pcbX="29.7mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin139"]} pcbX="30.3mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin140"]} pcbX="30.9mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin141"]} pcbX="-30.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin142"]} pcbX="-29.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin143"]} pcbX="-29.2mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin144"]} pcbX="-28.6mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin145"]} pcbX="-28mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin146"]} pcbX="-27.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin147"]} pcbX="-26.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin148"]} pcbX="-26.2mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin149"]} pcbX="-25.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin150"]} pcbX="-25mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin151"]} pcbX="-24.4mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin152"]} pcbX="-23.8mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin153"]} pcbX="-23.2mm" pcbY="0mm" layer="bottom" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin154"]} pcbX="-22.6mm" pcbY="0.2mm" layer="bottom" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin155"]} pcbX="-30.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin156"]} pcbX="-29.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin157"]} pcbX="-29.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin158"]} pcbX="-28.6mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin159"]} pcbX="-28mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin160"]} pcbX="-27.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin161"]} pcbX="-26.8mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin162"]} pcbX="-26.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin163"]} pcbX="-25.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin164"]} pcbX="-25mm" pcbY="0mm" layer="top" width="0.38mm" height="2.12mm" shape="rect"/>
<smtpad portHints={["pin165"]} pcbX="-24.4mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin166"]} pcbX="-23.8mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin167"]} pcbX="-23.2mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<smtpad portHints={["pin168"]} pcbX="-22.6mm" pcbY="0.2mm" layer="top" width="0.38mm" height="1.72mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -35, "y": 4.6 }, { "x": -31.98, "y": 4.6 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -31.48, "y": -1.19 }, { "x": -31.48, "y": 4.1 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -30.73, "y": -1.94 }, { "x": -31.48, "y": -1.19 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -30.73, "y": -1.94 }, { "x": -22.275, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -21.525, "y": -1.19 }, { "x": -22.275, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -21.525, "y": -1.19 }, { "x": -21.525, "y": 4.06 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -19.275, "y": -1.19 }, { "x": -19.275, "y": 4.06 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -19.275, "y": -1.19 }, { "x": -18.525, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -18.525, "y": -1.94 }, { "x": -1.67, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.92, "y": -1.19 }, { "x": -1.67, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.92, "y": -1.19 }, { "x": -0.92, "y": 4.26 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.93, "y": -1.19 }, { "x": 0.93, "y": 4.34 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.93, "y": -1.19 }, { "x": 1.68, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 1.68, "y": -1.94 }, { "x": 10.135, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 10.135, "y": -1.94 }, { "x": 10.885, "y": -1.19 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 10.885, "y": -1.19 }, { "x": 10.885, "y": 3.81 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 13.635, "y": -1.19 }, { "x": 13.635, "y": 3.89 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 14.385, "y": -1.94 }, { "x": 13.635, "y": -1.19 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 14.385, "y": -1.94 }, { "x": 31.2451, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 32, "y": -1.19 }, { "x": 31.2451, "y": -1.94 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 32, "y": -1.19 }, { "x": 32, "y": 4.1 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -31.98, "y": 4.6 }, { "x": -31.882455, "y": 4.590392 }, { "x": -31.788658, "y": 4.561939 }, { "x": -31.702215, "y": 4.515734 }, { "x": -31.626447, "y": 4.453553 }, { "x": -31.564266, "y": 4.377785 }, { "x": -31.518061, "y": 4.291342 }, { "x": -31.489608, "y": 4.197545 }, { "x": -31.48, "y": 4.1 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -21.525, "y": 4.06 }, { "x": -21.524231, "y": 4.157711 }, { "x": -21.514991, "y": 4.254986 }, { "x": -21.49735, "y": 4.351095 }, { "x": -21.471441, "y": 4.445311 }, { "x": -21.437459, "y": 4.536925 }, { "x": -21.395661, "y": 4.625248 }, { "x": -21.34636, "y": 4.709612 }, { "x": -21.28993, "y": 4.789384 }, { "x": -21.226794, "y": 4.863962 }, { "x": -21.157428, "y": 4.932783 }, { "x": -21.082356, "y": 4.99533 }, { "x": -21.002142, "y": 5.051131 }, { "x": -20.917392, "y": 5.099766 }, { "x": -20.828743, "y": 5.140867 }, { "x": -20.736864, "y": 5.174127 }, { "x": -20.642446, "y": 5.199293 }, { "x": -20.546202, "y": 5.216177 }, { "x": -20.448857, "y": 5.22465 }, { "x": -20.351143, "y": 5.22465 }, { "x": -20.253798, "y": 5.216177 }, { "x": -20.157554, "y": 5.199293 }, { "x": -20.063136, "y": 5.174127 }, { "x": -19.971257, "y": 5.140867 }, { "x": -19.882608, "y": 5.099766 }, { "x": -19.797858, "y": 5.051131 }, { "x": -19.717644, "y": 4.99533 }, { "x": -19.642572, "y": 4.932783 }, { "x": -19.573206, "y": 4.863962 }, { "x": -19.51007, "y": 4.789384 }, { "x": -19.45364, "y": 4.709612 }, { "x": -19.404339, "y": 4.625248 }, { "x": -19.362541, "y": 4.536925 }, { "x": -19.328559, "y": 4.445311 }, { "x": -19.30265, "y": 4.351095 }, { "x": -19.285009, "y": 4.254986 }, { "x": -19.275769, "y": 4.157711 }, { "x": -19.275, "y": 4.06 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.92, "y": 4.26 }, { "x": -0.919031, "y": 4.358239 }, { "x": -0.907658, "y": 4.455822 }, { "x": -0.886009, "y": 4.551651 }, { "x": -0.854327, "y": 4.644647 }, { "x": -0.81297, "y": 4.733762 }, { "x": -0.762404, "y": 4.817993 }, { "x": -0.703196, "y": 4.896391 }, { "x": -0.636015, "y": 4.968075 }, { "x": -0.561617, "y": 5.032237 }, { "x": -0.480838, "y": 5.088153 }, { "x": -0.39459, "y": 5.135196 }, { "x": -0.303842, "y": 5.172835 }, { "x": -0.209617, "y": 5.200647 }, { "x": -0.112975, "y": 5.218317 }, { "x": -0.015005, "y": 5.225648 }, { "x": 0.08319, "y": 5.222557 }, { "x": 0.180505, "y": 5.209078 }, { "x": 0.275844, "y": 5.185363 }, { "x": 0.368133, "y": 5.15168 }, { "x": 0.456334, "y": 5.108407 }, { "x": 0.539452, "y": 5.056032 }, { "x": 0.616554, "y": 4.995145 }, { "x": 0.686769, "y": 4.926431 }, { "x": 0.749308, "y": 4.850663 }, { "x": 0.803467, "y": 4.768695 }, { "x": 0.848635, "y": 4.68145 }, { "x": 0.884304, "y": 4.58991 }, { "x": 0.910073, "y": 4.495106 }, { "x": 0.925652, "y": 4.398106 }, { "x": 0.930864, "y": 4.3 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 10.885, "y": 3.81 }, { "x": 10.885642, "y": 3.908011 }, { "x": 10.893262, "y": 4.005727 }, { "x": 10.90782, "y": 4.102653 }, { "x": 10.929243, "y": 4.198297 }, { "x": 10.957422, "y": 4.292171 }, { "x": 10.992214, "y": 4.383802 }, { "x": 11.033442, "y": 4.472722 }, { "x": 11.080898, "y": 4.55848 }, { "x": 11.13434, "y": 4.640642 }, { "x": 11.193496, "y": 4.71879 }, { "x": 11.258067, "y": 4.792527 }, { "x": 11.327725, "y": 4.861479 }, { "x": 11.402116, "y": 4.925296 }, { "x": 11.480862, "y": 4.983653 }, { "x": 11.563563, "y": 5.036256 }, { "x": 11.649801, "y": 5.082835 }, { "x": 11.739136, "y": 5.123156 }, { "x": 11.831116, "y": 5.157014 }, { "x": 11.925273, "y": 5.184235 }, { "x": 12.021129, "y": 5.204683 }, { "x": 12.118198, "y": 5.218254 }, { "x": 12.215987, "y": 5.224878 }, { "x": 12.314, "y": 5.224522 }, { "x": 12.411738, "y": 5.217187 }, { "x": 12.508706, "y": 5.202912 }, { "x": 12.604411, "y": 5.181768 }, { "x": 12.698368, "y": 5.153863 }, { "x": 12.790099, "y": 5.119339 }, { "x": 12.879139, "y": 5.07837 }, { "x": 12.965036, "y": 5.031165 }, { "x": 13.047353, "y": 4.977963 }, { "x": 13.125673, "y": 4.919035 }, { "x": 13.199598, "y": 4.854679 }, { "x": 13.268753, "y": 4.785223 }, { "x": 13.332787, "y": 4.711019 }, { "x": 13.391374, "y": 4.632443 }, { "x": 13.444218, "y": 4.549896 }, { "x": 13.491049, "y": 4.463795 }, { "x": 13.53163, "y": 4.374577 }, { "x": 13.565756, "y": 4.282697 }, { "x": 13.593252, "y": 4.18862 }, { "x": 13.61398, "y": 4.092823 }, { "x": 13.627834, "y": 3.995794 }, { "x": 13.634743, "y": 3.898025 }, { "x": 13.634673, "y": 3.800012 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotepath route={[{ "x": 32, "y": 4.1 }, { "x": 32.009608, "y": 4.197545 }, { "x": 32.038061, "y": 4.291342 }, { "x": 32.084266, "y": 4.377785 }, { "x": 32.146447, "y": 4.453553 }, { "x": 32.222215, "y": 4.515734 }, { "x": 32.308658, "y": 4.561939 }, { "x": 32.402455, "y": 4.590392 }, { "x": 32.5, "y": 4.6 }]} strokeWidth={0.12} layer="bottom"/>
<fabricationnotetext pcbX={-24.2} pcbY={-4.8} anchorAlignment="center" text="SFF-TA-1002-4C+" font="tscircuit2024" fontSize={1}/>

      </footprint>);
// J6: USB-Micro-B_Amphenol_10118192-0001LF; antmicro-footprints:USB-Micro-B_Receptacle_Amphenol_10118192
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.301mm" pcbY="2.226mm" layer="top" width="0.4mm" height="1.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.651mm" pcbY="2.226mm" layer="top" width="0.4mm" height="1.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0mm" pcbY="2.226mm" layer="top" width="0.4mm" height="1.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.65mm" pcbY="2.226mm" layer="top" width="0.4mm" height="1.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.3mm" pcbY="2.226mm" layer="top" width="0.4mm" height="1.35mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.801mm" pcbY="-0.449mm" layer="top" cornerRadius="0.09mm" width="1.8mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.101mm" pcbY="2.101mm" layer="top" cornerRadius="0.08mm" width="2.1mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-1.2mm" pcbY="-0.449mm" layer="top" cornerRadius="0.095mm" width="1.9mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="1.199mm" pcbY="-0.449mm" layer="top" cornerRadius="0.095mm" width="1.9mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.1mm" pcbY="2.101mm" layer="top" cornerRadius="0.08mm" width="2.1mm" height="1.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="3.8mm" pcbY="-0.449mm" layer="top" cornerRadius="0.09mm" width="1.8mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotepath route={[{ "x": -3.951, "y": 2.351 }, { "x": -3.951, "y": -2.749 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.951, "y": 2.351 }, { "x": -3.5, "y": 2.801 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.951, "y": -2.769 }, { "x": 3.95, "y": -2.769 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.95, "y": 2.801 }, { "x": -3.5, "y": 2.801 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.95, "y": -2.769 }, { "x": 3.95, "y": 2.801 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-4.25} anchorAlignment="center" text="USB-Micro-B_Amphenol_10118192-0001LF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1}/>

<courtyardrect pcbX={-0.0015} pcbY={0.0015} width={9.513} height={6.099} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C262: C_10u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C262 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_10u_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C262" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R8: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_100k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// TP16: TP_1mm_SMD; antmicro-footprints:TP_SMD_1mm
export const Footprint_TP16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.5mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.4} anchorAlignment="bottom_left" text="TP_1mm_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.6} layer="top"/>
      </footprint>);
// R144: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R144 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.9} anchorAlignment="center" text="R_0R_0603" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U16: TPS62823DLCT; antmicro-footprints:QFN-8_2x1.5mm
export const Footprint_U16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.677mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.677mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.677mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.677mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.675mm" pcbY="-0.748mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.675mm" pcbY="-0.248mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.675mm" pcbY="0.25mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.675mm" pcbY="0.75mm" layer="top" width="0.25mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1, "y": 0.5 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1, "y": -0.998 }, { "x": -1, "y": 0.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": 0.998, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": 1 }, { "x": 0.998, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.998, "y": -0.998 }, { "x": -1, "y": -0.998 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.075} anchorAlignment="center" text="TPS62823DLCT" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U16" font="tscircuit2024" fontSize={0.5}/>

<courtyardrect pcbX={0} pcbY={0} width={2.2} height={2.5} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// U6: MTFC16GAPALNA-AIT; antmicro-footprints:BGA-170-100_18x14mm_Layout17x10_P1mm
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-4.5mm" pcbY="8mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-3.5mm" pcbY="8mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="3.499mm" pcbY="8mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="4.499mm" pcbY="8mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="-4.5mm" pcbY="7mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="4.499mm" pcbY="7mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin7"]} pcbX="-3.5mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin8"]} pcbX="-2.5mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin9"]} pcbX="-1.5mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin10"]} pcbX="-0.5mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin11"]} pcbX="0.499mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin12"]} pcbX="1.499mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin13"]} pcbX="2.499mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin14"]} pcbX="3.499mm" pcbY="5mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin15"]} pcbX="-3.5mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin16"]} pcbX="-2.5mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin17"]} pcbX="-1.5mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin18"]} pcbX="-0.5mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin19"]} pcbX="0.499mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin20"]} pcbX="1.499mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin21"]} pcbX="2.499mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin22"]} pcbX="3.499mm" pcbY="4mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin23"]} pcbX="-3.5mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin24"]} pcbX="-2.5mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin25"]} pcbX="-1.5mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin26"]} pcbX="-0.5mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin27"]} pcbX="0.499mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin28"]} pcbX="1.499mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin29"]} pcbX="2.499mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin30"]} pcbX="3.499mm" pcbY="3mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin31"]} pcbX="-3.5mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin32"]} pcbX="-2.5mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin33"]} pcbX="-1.5mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin34"]} pcbX="-0.5mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin35"]} pcbX="0.499mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin36"]} pcbX="1.499mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin37"]} pcbX="2.499mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin38"]} pcbX="3.499mm" pcbY="2mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin39"]} pcbX="-3.5mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin40"]} pcbX="-2.5mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin41"]} pcbX="-1.5mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin42"]} pcbX="-0.5mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin43"]} pcbX="0.499mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin44"]} pcbX="1.499mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin45"]} pcbX="2.499mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin46"]} pcbX="3.499mm" pcbY="1mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin47"]} pcbX="-3.5mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin48"]} pcbX="-2.5mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin49"]} pcbX="-1.5mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin50"]} pcbX="-0.5mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin51"]} pcbX="0.499mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin52"]} pcbX="1.499mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin53"]} pcbX="2.499mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin54"]} pcbX="3.499mm" pcbY="0mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin55"]} pcbX="-3.5mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin56"]} pcbX="-2.5mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin57"]} pcbX="-1.5mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin58"]} pcbX="-0.5mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin59"]} pcbX="0.499mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin60"]} pcbX="1.499mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin61"]} pcbX="2.499mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin62"]} pcbX="3.499mm" pcbY="-0.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin63"]} pcbX="-3.5mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin64"]} pcbX="-2.5mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin65"]} pcbX="-1.5mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin66"]} pcbX="-0.5mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin67"]} pcbX="0.499mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin68"]} pcbX="1.499mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin69"]} pcbX="2.499mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin70"]} pcbX="3.499mm" pcbY="-1.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin71"]} pcbX="-3.5mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin72"]} pcbX="-2.5mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin73"]} pcbX="-1.5mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin74"]} pcbX="-0.5mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin75"]} pcbX="0.499mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin76"]} pcbX="1.499mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin77"]} pcbX="2.499mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin78"]} pcbX="3.499mm" pcbY="-2.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin79"]} pcbX="-3.5mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin80"]} pcbX="-2.5mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin81"]} pcbX="-1.5mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin82"]} pcbX="-0.5mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin83"]} pcbX="0.499mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin84"]} pcbX="1.499mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin85"]} pcbX="2.499mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin86"]} pcbX="3.499mm" pcbY="-3.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin87"]} pcbX="-3.5mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin88"]} pcbX="-2.5mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin89"]} pcbX="-1.5mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin90"]} pcbX="-0.5mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin91"]} pcbX="0.499mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin92"]} pcbX="1.499mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin93"]} pcbX="2.499mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin94"]} pcbX="3.499mm" pcbY="-4.999mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin95"]} pcbX="-4.5mm" pcbY="-6.998mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin96"]} pcbX="4.499mm" pcbY="-6.998mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin97"]} pcbX="-4.5mm" pcbY="-7.998mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin98"]} pcbX="-3.5mm" pcbY="-7.998mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin99"]} pcbX="3.499mm" pcbY="-7.998mm" layer="top" radius="0.185mm" shape="circle"/>
<smtpad portHints={["pin100"]} pcbX="4.499mm" pcbY="-7.998mm" layer="top" radius="0.185mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -7, "y": -8.999 }, { "x": -7, "y": 9 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.998, "y": 9 }, { "x": -7, "y": 9 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.998, "y": -8.999 }, { "x": -7, "y": -8.999 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.998, "y": -8.999 }, { "x": 6.998, "y": 9 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={16.305925} pcbY={-13.334495} anchorAlignment="center" text="MTFC16GAPALNA-AIT" font="tscircuit2024" fontSize={1.339362}/>

<courtyardrect pcbX={0} pcbY={0} width={14.6} height={18.6} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R9: R_2k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_2k2_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J8: Molex_Pico-Lock_1x2_504050-0291; antmicro-footprints:Conn_Molex_Pico-Lock_1x2_504050-0291
export const Footprint_J8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.749mm" pcbY="2.85mm" layer="top" cornerRadius="0.075mm" width="1mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="2.85mm" layer="top" cornerRadius="0.075mm" width="1mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.354mm" pcbY="-2.338mm" layer="top" cornerRadius="0.15625mm" width="1.8mm" height="1.25mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="3.356mm" pcbY="-2.338mm" layer="top" cornerRadius="0.15625mm" width="1.8mm" height="1.25mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -3.374, "y": 2.86 }, { "x": 3.374, "y": 2.86 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.374, "y": -3.239 }, { "x": -3.374, "y": 2.86 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.374, "y": -3.239 }, { "x": -1.749, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.749, "y": -3.249 }, { "x": -1.749, "y": -1.188 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -1.188 }, { "x": -1.749, "y": -1.188 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -1.188 }, { "x": 1.75, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -3.239 }, { "x": 3.374, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.374, "y": 2.86 }, { "x": 3.374, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.749} pcbY={-4.35} anchorAlignment="bottom_left" text="Molex_Pico-Lock_1x2_504050-0291" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -4.249, "y": -1.18 }, { "x": -3.629, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.249, "y": -3.47 }, { "x": -4.249, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.629, "y": 3.61 }, { "x": 3.621, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.629, "y": -1.18 }, { "x": -3.629, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.621, "y": 3.61 }, { "x": 3.621, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.621, "y": -1.18 }, { "x": 4.231, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.231, "y": -1.18 }, { "x": 4.231, "y": -3.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.231, "y": -3.47 }, { "x": -4.249, "y": -3.47 }]} layer="top"/>
      </footprint>);
// J18: Molex_Pico-Lock_1x2_504050-0291; antmicro-footprints:Conn_Molex_Pico-Lock_1x2_504050-0291
export const Footprint_J18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.749mm" pcbY="2.85mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.75mm" pcbY="2.85mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.354mm" pcbY="-2.338mm" layer="top" cornerRadius="0.15625mm" width="1.25mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="3.356mm" pcbY="-2.338mm" layer="top" cornerRadius="0.15625mm" width="1.25mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -3.374, "y": 2.86 }, { "x": 3.374, "y": 2.86 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.374, "y": -3.239 }, { "x": -3.374, "y": 2.86 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.374, "y": -3.239 }, { "x": -1.749, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.749, "y": -3.249 }, { "x": -1.749, "y": -1.188 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -1.188 }, { "x": -1.749, "y": -1.188 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -1.188 }, { "x": 1.75, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.75, "y": -3.239 }, { "x": 3.374, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.374, "y": 2.86 }, { "x": 3.374, "y": -3.239 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.749} pcbY={-4.35} anchorAlignment="bottom_left" text="Molex_Pico-Lock_1x2_504050-0291" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -4.249, "y": -1.18 }, { "x": -3.629, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.249, "y": -3.47 }, { "x": -4.249, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.629, "y": 3.61 }, { "x": 3.621, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.629, "y": -1.18 }, { "x": -3.629, "y": 3.61 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.621, "y": 3.61 }, { "x": 3.621, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.621, "y": -1.18 }, { "x": 4.231, "y": -1.18 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.231, "y": -1.18 }, { "x": 4.231, "y": -3.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.231, "y": -3.47 }, { "x": -4.249, "y": -3.47 }]} layer="top"/>
      </footprint>);
// Y2: Oscillator_24MHz_ASEMB; antmicro-footprints:Oscillator_SMD_Abracon_ASEMB_3.2x2.5mm
export const Footprint_Y2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.951mm" pcbY="1.049mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.951mm" pcbY="-1.05mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.948mm" pcbY="-1.05mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.948mm" pcbY="1.049mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -1.2192, "y": 1.4224 }, { "x": -1.0668, "y": 1.5748 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-10.2616} pcbY={-2.8956} anchorAlignment="bottom_left" text="Oscillator_24MHz_ASEMB" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.0015} pcbY={0.0005} width={2.501} height={3.201} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={-0.0015} pcbY={0.0005} width={3.501} height={4.201} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// Y3: Oscillator_24MHz_ASEMB; antmicro-footprints:Oscillator_SMD_Abracon_ASEMB_3.2x2.5mm
export const Footprint_Y3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.951mm" pcbY="1.049mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.951mm" pcbY="-1.05mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.948mm" pcbY="-1.05mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.948mm" pcbY="1.049mm" layer="top" width="1mm" height="0.9mm" ccwRotation={-180} shape="rotated_rect"/>

<fabricationnotepath route={[{ "x": -1.2192, "y": 1.4224 }, { "x": -1.0668, "y": 1.5748 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-10.2616} pcbY={-2.8956} anchorAlignment="bottom_left" text="Oscillator_24MHz_ASEMB" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.0015} pcbY={0.0005} width={2.501} height={3.201} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={-0.0015} pcbY={0.0005} width={3.501} height={4.201} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// Q17: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0.951mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="-0.949mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="0.0005mm" layer="top" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.325 }, { "x": -0.712, "y": -1.523 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.519 }, { "x": 0.688, "y": -1.519 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": -0.712, "y": 1.325 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.437, "y": 1.526 }, { "x": 0.688, "y": 1.526 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.688, "y": -1.519 }, { "x": 0.688, "y": 1.52 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.025} pcbY={-3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-0.125} pcbY={-0.15} anchorAlignment="center" text="Q17" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -1.75, "y": 0.5 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -0.5 }, { "x": -0.85, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.4 }, { "x": -1.75, "y": -0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": -0.9, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.6 }, { "x": 0.825, "y": 1.6 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.4 }, { "x": -1.75, "y": 1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": 0.5 }, { "x": -1.75, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -0.5 }, { "x": -0.85, "y": 0.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.4 }, { "x": -1.75, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.85, "y": -1.65 }, { "x": -0.85, "y": -1.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 1.6 }, { "x": 0.825, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.825, "y": 0.45 }, { "x": 1.75, "y": 0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -0.45 }, { "x": 0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.85, "y": -1.65 }, { "x": -0.85, "y": -1.65 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 0.45 }, { "x": 1.75, "y": -0.45 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -0.45 }, { "x": 0.85, "y": -0.45 }]} layer="top"/>
      </footprint>);
// D15: LED_G_0603_LG_L29K-G2J1-24-Z; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.199, "y": 0.202 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": 0 }, { "x": -0.597, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.199, "y": -0.2 }, { "x": -0.199, "y": -0.1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.101, "y": 0 }, { "x": 0.201, "y": -0.2 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0.202 }, { "x": -0.101, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": 0 }, { "x": 0.201, "y": 0.202 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.201, "y": -0.2 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.599, "y": 0 }, { "x": 0.201, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.77} anchorAlignment="center" text="LED_G_0603_LG_L29K-G2J1-24-Z" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R130: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R130 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R130" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// F1: 0466003.NR; antmicro-footprints:F_1206_3216Metric
export const Footprint_F1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.5mm" pcbY="-0.001mm" layer="top" cornerRadius="0.14375mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.5mm" pcbY="-0.001mm" layer="top" cornerRadius="0.14375mm" width="1.15mm" height="1.8mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -1.677, "y": 0.861 }, { "x": 1.624, "y": 0.861 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.677, "y": -0.792 }, { "x": -1.677, "y": 0.861 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.624, "y": 0.861 }, { "x": 1.624, "y": -0.792 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.624, "y": -0.792 }, { "x": -1.677, "y": -0.792 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.1778} pcbY={-2.3622} anchorAlignment="center" text="0466003.NR" font="tscircuit2024" fontSize={1.27}/>

<courtyardrect pcbX={0} pcbY={0} width={4.65} height={2.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP4: RCW-0C; antmicro-footprints:TP_1206_SMD_RCW-0C
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="1.8mm" height="3.4mm" ccwRotation={-90} shape="rotated_rect"/>








<fabricationnotetext pcbX={0} pcbY={-2.05} anchorAlignment="center" text="RCW-0C" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={-0.0005} pcbY={0.001} width={1.626} height={3.201} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={-0.0005} pcbY={0.001} width={4.201} height={2.626} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP5: RCW-0C; antmicro-footprints:TP_1206_SMD_RCW-0C
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="1.8mm" height="3.4mm" ccwRotation={-90} shape="rotated_rect"/>








<fabricationnotetext pcbX={0} pcbY={-2.05} anchorAlignment="center" text="RCW-0C" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={0.4}/>
<fabricationnoterect pcbX={-0.0005} pcbY={0.001} width={1.626} height={3.201} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={-0.0005} pcbY={0.001} width={4.201} height={2.626} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C34: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.25}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// N1: antmicro_logo; antmicro-footprints:antmicro-logo_scaled_20mm
export const Footprint_N1 = () => (<footprint originalLayer="top">
        <courtyardrect pcbX={0} pcbY={0.18} width={24.638} height={11.018} layer="top" pcbRotation="0deg"/>
      </footprint>);
// N2: oshw_logo; antmicro-footprints:oshw-logo
export const Footprint_N2 = () => (<footprint originalLayer="top">
        <courtyardrect pcbX={0.005} pcbY={0} width={8.11} height={8.42} layer="top" pcbRotation="0deg"/>
      </footprint>);
// Y5: Oscillator_25MHz_ESC_2016MV; antmicro-footprints:Oscillator_SMD_ECS_2016MV_2x1.6x0.85mm
export const Footprint_Y5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.486mm" pcbY="0.637mm" layer="top" width="0.6858mm" height="0.7874mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.486mm" pcbY="-0.636mm" layer="top" width="0.6858mm" height="0.7874mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.487mm" pcbY="-0.636mm" layer="top" width="0.6858mm" height="0.7874mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.487mm" pcbY="0.637mm" layer="top" width="0.6858mm" height="0.7874mm" ccwRotation={-180} shape="rotated_rect"/>





<fabricationnotetext pcbX={0} pcbY={-2.2} anchorAlignment="bottom_right" text="Oscillator_25MHz_ESC_2016MV" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.001} pcbY={0} width={1.702} height={2.108} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0.005} width={2.1} height={2.49} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U14: FT4232H_VQFN; antmicro-footprints:QFN-56-1EP_8x8mm_P0.5mm
export const Footprint_U14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.938mm" pcbY="3.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.938mm" pcbY="2.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-3.938mm" pcbY="2.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-3.938mm" pcbY="1.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-3.938mm" pcbY="1.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-3.938mm" pcbY="0.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-3.938mm" pcbY="0.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.938mm" pcbY="-0.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.938mm" pcbY="-0.749mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-3.938mm" pcbY="-1.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.938mm" pcbY="-1.749mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.938mm" pcbY="-2.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.938mm" pcbY="-2.749mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.938mm" pcbY="-3.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-3.25mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.75mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-2.25mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-1.75mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-1.25mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-0.75mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-0.25mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="0.249mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="0.749mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="1.249mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.749mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="2.249mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="2.749mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="3.249mm" pcbY="-3.937mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="3.937mm" pcbY="-3.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="3.937mm" pcbY="-2.749mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="3.937mm" pcbY="-2.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.937mm" pcbY="-1.749mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.937mm" pcbY="-1.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="3.937mm" pcbY="-0.749mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="3.937mm" pcbY="-0.249mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="3.937mm" pcbY="0.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="3.937mm" pcbY="0.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="3.937mm" pcbY="1.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="3.937mm" pcbY="1.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="3.937mm" pcbY="2.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="3.937mm" pcbY="2.75mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="3.937mm" pcbY="3.25mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="3.249mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="2.749mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="2.249mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="1.749mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="1.249mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="0.749mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="0.249mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="-0.25mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-0.75mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="-1.25mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin53"]} pcbX="-1.75mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin54"]} pcbX="-2.25mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin55"]} pcbX="-2.75mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin56"]} pcbX="-3.25mm" pcbY="3.938mm" layer="top" cornerRadius="0.0375mm" width="0.875mm" height="0.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin57"]} pcbX="0mm" pcbY="0mm" layer="top" width="5.9mm" height="5.9mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -4, "y": 3 }, { "x": -3, "y": 4 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-5.32} anchorAlignment="center" text="FT4232H_VQFN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U14" font="tscircuit2024" fontSize={1}/>
<fabricationnoterect pcbX={0} pcbY={0} width={8} height={8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={8.8} height={8.8} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J4: PinSocket_2x6_P2.54mm_Drill1.02mm_PMOD; antmicro-footprints:PinSocket_2x6_P2.54mm_Drill1.02mm_PMOD
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.539mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="0mm" pcbY="-5.078mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="0mm" pcbY="-7.618mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="0mm" pcbY="-10.159mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="0mm" pcbY="-12.698mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="2.539mm" pcbY="0mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="2.539mm" pcbY="-2.539mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="2.539mm" pcbY="-5.078mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="2.539mm" pcbY="-7.618mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="2.539mm" pcbY="-10.159mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="2.539mm" pcbY="-12.698mm" outerDiameter="1.8mm" holeDiameter="1.02mm" shape="circle"/>








<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": -1.27, "y": -13.97 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 3.809, "y": 1.27 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -13.97 }, { "x": 3.809, "y": -13.97 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.809, "y": 1.27 }, { "x": 3.809, "y": -13.97 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={1.6} pcbY={-15.8} anchorAlignment="bottom_left" text="PinSocket_2x6_P2.54mm_Drill1.02mm_PMOD" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -1.52, "y": 1.52 }, { "x": 4.04, "y": 1.52 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.52, "y": -14.22 }, { "x": -1.52, "y": 1.52 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.52, "y": -14.22 }, { "x": 4.04, "y": -14.22 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.04, "y": -14.22 }, { "x": 4.04, "y": 1.52 }]} layer="top"/>
      </footprint>);
// J9: PinHeader_2x7_P2mm_Drill1mm_Shrouded; antmicro-footprints:PinHeader_2x7_P2mm_Drill1mm_Shrouded
export const Footprint_J9 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1mm" rectPadWidth="1.75mm" rectPadHeight="1.75mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="-180deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="2mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="4mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="4mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="6mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="6mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="8mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="8mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="10mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="10mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin13"]} pcbX="12mm" pcbY="0mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>
<platedhole portHints={["pin14"]} pcbX="12mm" pcbY="1.999mm" outerDiameter="1.75mm" holeDiameter="1mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -2.33, "y": -2.15 }, { "x": -2.33, "y": 4.13 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 14.356, "y": 4.15 }, { "x": -2.32, "y": 4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 14.356, "y": -1.898 }, { "x": 14.356, "y": 4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 14.356, "y": -2.15 }, { "x": -2.293, "y": -2.15 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.4} anchorAlignment="bottom_right" text="PinHeader_2x7_P2mm_Drill1mm_Shrouded" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -2.51, "y": 4.34 }, { "x": 14.51, "y": 4.34 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.51, "y": -2.34 }, { "x": -2.51, "y": 4.34 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.51, "y": -2.34 }, { "x": 14.51, "y": -2.34 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 14.51, "y": -2.34 }, { "x": 14.51, "y": 4.34 }]} layer="top"/>
      </footprint>);
// H2: Spacer_Drill3.7mm_H4mm_9774040151R; antmicro-footprints:Spacer_Drill3.7mm_H4mm_9774040151R
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3.7mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-3.95} anchorAlignment="bottom_left" text="Spacer_Drill3.7mm_H4mm_9774040151R" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// U13: LM21212-2; antmicro-footprints:HTSSOP-20_W4.4mm_P0.65mm
export const Footprint_U13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.97mm" pcbY="2.925mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.97mm" pcbY="2.275mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.97mm" pcbY="1.625mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.97mm" pcbY="0.975mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.97mm" pcbY="0.325mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.97mm" pcbY="-0.325mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.97mm" pcbY="-0.975mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.97mm" pcbY="-1.625mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-2.97mm" pcbY="-2.275mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.97mm" pcbY="-2.925mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="2.97mm" pcbY="-2.925mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="2.97mm" pcbY="-2.275mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.97mm" pcbY="-1.625mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="2.97mm" pcbY="-0.975mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2.97mm" pcbY="-0.325mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.97mm" pcbY="0.325mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.97mm" pcbY="0.975mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.97mm" pcbY="1.625mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.97mm" pcbY="2.275mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.97mm" pcbY="2.925mm" layer="top" cornerRadius="0.092399mm" width="0.42mm" height="1.4mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="0mm" pcbY="-0.37mm" layer="top" cornerRadius="0.0996mm" width="4.55mm" height="3.32mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -2.25, "y": 3.3 }, { "x": 2.25, "y": 3.3 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.25, "y": -3.3 }, { "x": -2.25, "y": 3.3 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.25, "y": -3.3 }, { "x": 2.25, "y": -3.3 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.25, "y": -3.3 }, { "x": 2.25, "y": 3.3 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.11} pcbY={-5.065} anchorAlignment="bottom_left" text="LM21212-2" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={7.46} height={7.75} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J3: Plug_Molex_SlimStack_2x25_529910508; antmicro-footprints:Conn_Plug_Molex_SlimStack_2x25_529910508
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-6.007mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-6.007mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-5.507mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-5.507mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-5.006mm" pcbY="2.05mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-5.006mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-4.506mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-4.506mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-4.007mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-4.007mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-3.507mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-3.507mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-3.007mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-3.007mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.507mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.507mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-2.005mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-2.005mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-1.505mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-1.505mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-1.005mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="-1.005mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="-0.505mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.505mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="-0.005mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="-0.005mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="0.493mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="0.493mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="0.994mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="0.994mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="1.494mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="1.494mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="1.993mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="1.993mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="2.493mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="2.493mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="2.993mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="2.993mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="3.493mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="3.493mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="3.994mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="3.994mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="4.494mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="4.494mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="4.994mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="4.994mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="5.494mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="5.494mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="5.994mm" pcbY="2.041mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="5.994mm" pcbY="-2.058mm" layer="top" width="0.3mm" height="1.8mm" shape="rect"/>







<fabricationnotetext pcbX={0} pcbY={-4.75} anchorAlignment="bottom_left" text="Plug_Molex_SlimStack_2x25_529910508" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -8.657, "y": 3.399 }, { "x": -8.657, "y": -3.401 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -8.657, "y": -3.401 }, { "x": 8.643, "y": -3.401 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.643, "y": 3.399 }, { "x": -8.657, "y": 3.399 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 8.643, "y": -3.401 }, { "x": 8.643, "y": 3.399 }]} layer="top"/>
      </footprint>);
// H1: Spacer_Drill3.7mm_H2.5mm_9774025151R; antmicro-footprints:Spacer_Drill3.7mm_H2.5mm_9774025151R
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="6mm" holeDiameter="3.7mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="bottom_left" text="Spacer_Drill3.7mm_H2.5mm_9774025151R" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={3.05} layer="top"/>
      </footprint>);
// R45: R_316k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R45 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_316k_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R45" font="tscircuit2024" fontSize={0.25}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D2: SP3011-06UTG; antmicro-footprints:USON-14_3.5x1.35_P0.5mm
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -0.423, "y": 1.6 }, { "x": -0.413245, "y": 1.599039 }, { "x": -0.403866, "y": 1.596194 }, { "x": -0.395221, "y": 1.591573 }, { "x": -0.387645, "y": 1.585355 }, { "x": -0.381427, "y": 1.577779 }, { "x": -0.376806, "y": 1.569134 }, { "x": -0.373961, "y": 1.559755 }, { "x": -0.373, "y": 1.55 }, { "x": -0.373, "y": 1.45 }, { "x": -0.373961, "y": 1.440245 }, { "x": -0.376806, "y": 1.430866 }, { "x": -0.381427, "y": 1.422221 }, { "x": -0.387645, "y": 1.414645 }, { "x": -0.395221, "y": 1.408427 }, { "x": -0.403866, "y": 1.403806 }, { "x": -0.413245, "y": 1.400961 }, { "x": -0.423, "y": 1.4 }, { "x": -0.823, "y": 1.4 }, { "x": -0.832755, "y": 1.400961 }, { "x": -0.842134, "y": 1.403806 }, { "x": -0.850779, "y": 1.408427 }, { "x": -0.858355, "y": 1.414645 }, { "x": -0.864573, "y": 1.422221 }, { "x": -0.869194, "y": 1.430866 }, { "x": -0.872039, "y": 1.440245 }, { "x": -0.873, "y": 1.45 }, { "x": -0.873, "y": 1.56 }, { "x": -0.833, "y": 1.6 }]}/>
<smtpad portHints={["pin2"]} pcbX="-0.623mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.623mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.623mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.623mm" pcbY="-0.498mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.623mm" pcbY="-0.998mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.623mm" pcbY="-1.499mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.625mm" pcbY="-1.499mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.625mm" pcbY="-0.998mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.625mm" pcbY="-0.498mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.625mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.625mm" pcbY="0.5mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.625mm" pcbY="1mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.625mm" pcbY="1.5mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.5mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.7, "y": 1.55 }, { "x": -0.5, "y": 1.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.7, "y": -1.75 }, { "x": -0.7, "y": 1.55 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1.75 }, { "x": 0.65, "y": 1.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": 1.75 }, { "x": 0.65, "y": -1.75 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.65, "y": -1.75 }, { "x": -0.7, "y": -1.75 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={-1.3} pcbY={-3} anchorAlignment="bottom_left" text="SP3011-06UTG" font="tscircuit2024" fontSize={0.7}/>


<courtyardrect pcbX={0.025} pcbY={0} width={1.95} height={3.8} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// Y1: Oscillator_100MHz_ECS_3225MV; antmicro-footprints:Oscillator_SMD_ECS_3225MV_3.2x2.5x1.2mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.8mm" pcbY="1.1mm" layer="top" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.8mm" pcbY="-1.1mm" layer="top" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.8mm" pcbY="-1.1mm" layer="top" width="1.2mm" height="1.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.8mm" pcbY="1.1mm" layer="top" width="1.2mm" height="1.4mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.25, "y": 1.6 }, { "x": -1.25, "y": -1.6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.6 }, { "x": -1.25, "y": 1.6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.6 }, { "x": 1.25, "y": -1.6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.6 }, { "x": -1.25, "y": -1.6 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.302} anchorAlignment="bottom_left" text="Oscillator_100MHz_ECS_3225MV" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3} height={3.7} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R11: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// Q11: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q11" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// Q12: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q12" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// Q13: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q13" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// Q14: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q14" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// Q15: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q15" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// R104: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R104 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R104" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R105: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R105 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R105" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R107: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R107 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R107" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R108: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R108 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R108" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R109: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R109 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R109" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R110: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R110 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R110" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R111: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R111 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R111" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R112: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R112 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R112" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R113: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R113 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R113" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R106: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R106 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R106" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R15: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R47: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R47 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R47" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R132: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R132 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R132" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C49: C_22u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C49 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_22u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R68: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R68 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R68" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R66: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R66 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R66" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R64: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R64 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R64" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R63: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R63 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R63" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R61: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R61 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R61" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C50: C_22u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C50 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_22u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C48: C_22u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C48 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_22u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C51: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C51 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C51" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C52: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C52 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C52" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C53: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C53 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C53" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C64: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C64 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C64" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C67: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C67 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C67" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C72: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C72 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C72" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C79: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C79 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C79" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C80: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C80 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C80" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C81: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C81 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C81" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C82: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C82 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C82" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C83: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C83 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C83" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C84: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C84 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C84" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C85: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C85 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C85" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C86: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C86 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C86" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C88: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C88 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C88" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C89: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C89 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C89" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C92: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C92 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C92" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C94: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C94 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C94" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R76: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R76 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R76" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R81: R_240R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R81 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_240R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R81" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R82: R_51R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R82 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_51R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R82" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C133: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C133 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C134: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C134 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C134" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C136: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C136 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C136" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C137: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C137 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C137" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C138: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C138 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C138" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C143: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C143 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C143" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C145: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C145 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C145" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C147: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C147 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C147" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C148: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C148 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C148" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C150: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C150 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C150" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C152: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C152 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C152" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C154: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C154 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C157: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C157 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C155: C_47u_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C155 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_47u_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C156: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C156 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C156" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C160: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C160 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C160" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C158: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C158 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C158" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C159: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C159 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C159" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C163: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C163 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C163" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C161: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C161 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C161" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C162: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C162 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C162" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C164: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C164 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C164" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C165: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C165 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C165" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C166: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C166 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C166" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C167: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C167 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C167" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C168: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C168 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C168" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C169: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C169 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C169" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C170: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C170 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C170" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C171: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C171 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C171" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C172: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C172 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C172" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C173: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C173 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C173" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C174: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C174 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C174" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C175: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C175 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C175" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C176: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C176 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C176" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C177: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C177 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C177" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C178: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C178 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C178" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C179: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C179 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C179" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C181: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C181 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C181" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C182: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C182 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C182" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C183: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C183 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C183" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C184: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C184 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C184" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C185: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C185 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C185" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C186: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C186 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C186" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C187: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C187 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C187" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C188: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C188 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C188" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C189: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C189 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C189" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C190: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C190 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C190" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C191: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C191 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C191" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C192: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C192 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C192" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C193: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C193 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C193" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C203: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C203 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C203" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C204: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C204 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C204" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C206: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C206 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C206" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C207: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C207 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C207" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C209: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C209 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C209" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C210: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C210 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C210" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C211: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C211 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C211" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C212: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C212 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C212" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C213: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C213 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C213" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C214: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C214 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C214" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C215: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C215 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C215" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C218: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C218 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C218" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C219: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C219 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C219" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C220: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C220 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C220" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C221: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C221 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C221" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C222: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C222 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C222" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C223: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C223 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C223" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C224: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C224 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C224" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C225: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C225 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C225" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C226: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C226 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C226" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C228: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C228 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C228" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C229: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C229 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C229" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C230: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C230 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C230" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C231: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C231 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C231" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C232: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C232 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C232" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C233: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C233 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C233" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C234: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C234 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C234" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C235: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C235 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C235" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C236: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C236 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C236" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C237: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C237 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C237" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C238: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C238 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C238" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C239: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C239 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C239" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// FB4: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// FB5: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// FB6: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// FB7: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// FB8: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C139: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C139 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C139" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C140: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C140 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C140" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C141: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C141 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C141" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C142: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C142 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C142" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C144: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C144 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C144" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C146: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C146 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C146" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C149: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C149 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C149" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C151: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C151 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C151" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C194: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C194 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C194" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C180: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C180 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C180" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C153: C_1n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C153 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_1n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C153" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C135: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C135 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C135" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C195: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C195 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C195" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C22: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C21: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C19: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C19 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C18: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C17: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C16: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C15: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C14: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C13: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C12: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C10: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C8: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C7: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C6: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C3: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C2: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// FB2: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// FB1: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C25: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C24: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C23: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C1: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C47: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C47 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C47" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C69: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C69 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C69" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C76: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C76 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C76" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C70: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C70 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C70" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C77: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C77 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C77" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C29: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C30: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R83: R_51R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R83 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_51R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R83" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C43: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C43 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C44: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C44 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C45: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C45 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C45" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R21: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R23: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R25: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R27: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R29: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R29 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R31: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R31 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R31" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R33: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R33 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R35: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R35 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R35" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R37: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R37 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R37" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R39: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R39 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R39" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R41: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R41 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R41" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R43: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R43 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R43" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C46: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C46 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C46" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R24: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R28: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R32: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R32" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R36: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R36 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R36" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R40: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R40 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R40" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R44: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R44 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R44" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R22: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R26: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R30: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R30 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R30" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R34: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R34 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R34" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R38: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R38 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R38" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R42: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R42 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R42" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C208: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C208 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C208" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R131: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R131 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R131" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R124: 8x51R_0602_array; antmicro-footprints:R_Array_8x0602_Panasonic_EXB2HV
export const Footprint_R124 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="-1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9mm" pcbY="-1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.9mm" pcbY="-0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.9mm" pcbY="-0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.9mm" pcbY="0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.9mm" pcbY="0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.9mm" pcbY="1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-0.9mm" pcbY="1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.9mm" pcbY="1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.9mm" pcbY="1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.9mm" pcbY="0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.9mm" pcbY="0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.9mm" pcbY="-0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.9mm" pcbY="-0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="0.9mm" pcbY="-1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.9mm" pcbY="-1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 2 }, { "x": 0.8, "y": 2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -2 }, { "x": -0.8, "y": 2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 2 }, { "x": 0.8, "y": -2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -2 }, { "x": -0.8, "y": -2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3} anchorAlignment="center" text="8x51R_0602_array" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R124" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.1} height={4.4} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R125: 8x51R_0602_array; antmicro-footprints:R_Array_8x0602_Panasonic_EXB2HV
export const Footprint_R125 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="-1.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9mm" pcbY="-1.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.9mm" pcbY="-0.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.9mm" pcbY="-0.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.9mm" pcbY="0.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.9mm" pcbY="0.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.9mm" pcbY="1.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-0.9mm" pcbY="1.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.9mm" pcbY="1.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.9mm" pcbY="1.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.9mm" pcbY="0.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.9mm" pcbY="0.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.9mm" pcbY="-0.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.9mm" pcbY="-0.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="0.9mm" pcbY="-1.25mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.9mm" pcbY="-1.75mm" layer="bottom" width="0.8mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 2 }, { "x": 0.8, "y": 2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -2 }, { "x": -0.8, "y": 2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 2 }, { "x": 0.8, "y": -2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -2 }, { "x": -0.8, "y": -2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3} anchorAlignment="center" text="8x51R_0602_array" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R125" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.1} height={4.4} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R136: 8x51R_0602_array; antmicro-footprints:R_Array_8x0602_Panasonic_EXB2HV
export const Footprint_R136 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.9mm" pcbY="-1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.9mm" pcbY="-1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.9mm" pcbY="-0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.9mm" pcbY="-0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.9mm" pcbY="0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-0.9mm" pcbY="0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-0.9mm" pcbY="1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-0.9mm" pcbY="1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.9mm" pcbY="1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.9mm" pcbY="1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="0.9mm" pcbY="0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="0.9mm" pcbY="0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.9mm" pcbY="-0.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.9mm" pcbY="-0.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="0.9mm" pcbY="-1.25mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.9mm" pcbY="-1.75mm" layer="bottom" width="0.3mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": 2 }, { "x": 0.8, "y": 2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -2 }, { "x": -0.8, "y": 2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 2 }, { "x": 0.8, "y": -2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -2 }, { "x": -0.8, "y": -2 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={3} anchorAlignment="center" text="8x51R_0602_array" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R136" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={3.1} height={4.4} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R133: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R133 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R133" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R134: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R134 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R134" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R135: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R135 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R135" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R49: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R49 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R49" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R50: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R50 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R50" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R51: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R51 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R51" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R52: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R52 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R52" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R53: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R53 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R53" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R54: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R54 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R54" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R55: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R55 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R55" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R56: R_357k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R56 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_357k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R56" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C242: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C242 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C242" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C243: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C243 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C243" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C244: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C244 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C244" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C245: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C245 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C245" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C246: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C246 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C246" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C247: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C247 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C247" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R67: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R67 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R67" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R62: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R62 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R62" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// Q16: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" ccwRotation={-180} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q16" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// C205: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C205 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C205" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C27: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C28: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R12: R_10k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k2_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R16: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C54: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C54 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C54" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C60: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C60 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C60" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R74: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R74 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R74" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C73: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C73 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C73" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C75: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C75 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C75" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C66: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C66 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C66" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C63: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C63 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C63" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C61: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C61 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C61" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C65: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C65 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C65" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C71: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C71 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C71" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C68: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C68 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C68" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C62: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C62 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C62" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R103: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R103 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R103" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C90: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C90 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C90" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C87: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C87 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C87" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// Q10: 2N7002; antmicro-footprints:SOT-23-3
export const Footprint_Q10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="-0.951mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.1mm" pcbY="0.949mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.1mm" pcbY="-0.0005mm" layer="bottom" cornerRadius="0.045mm" width="1mm" height="0.6mm" shape="rect"/>







<fabricationnotepath route={[{ "x": -0.712, "y": 1.519 }, { "x": 0.688, "y": 1.519 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.712, "y": -1.325 }, { "x": -0.712, "y": 1.523 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": -0.712, "y": -1.325 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.437, "y": -1.526 }, { "x": 0.688, "y": -1.526 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.688, "y": 1.519 }, { "x": 0.688, "y": -1.52 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0.025} pcbY={3.25} anchorAlignment="center" text="2N7002" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={-0.125} pcbY={0.15} anchorAlignment="center" text="Q10" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

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
// C93: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C93 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C93" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C216: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C216 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C216" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C217: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C217 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C217" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R65: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R65 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R65" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R102: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R102 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R102" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R59: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R59 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R59" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C98: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C98 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C98" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C99: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C99 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C99" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// FB9: FB_600Z_0.3A_Murata-BLM15AG_0402; antmicro-footprints:FB_0402_1005Metric
export const Footprint_FB9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="FB_600Z_0.3A_Murata-BLM15AG_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB9" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R149: R_12k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R149 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-0.005} pcbY={1.25} anchorAlignment="center" text="R_12k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R149" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R148: R_1k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R148 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_1k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R148" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R147: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R147 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R147" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// FB10: FB_600Z_0.3A_Murata-BLM15AG_0402; antmicro-footprints:FB_0402_1005Metric
export const Footprint_FB10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="FB_600Z_0.3A_Murata-BLM15AG_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="FB10" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R146: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R146 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R146" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C257: C_3u3_0603; antmicro-footprints:C_0603_1608Metric
export const Footprint_C257 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="C_3u3_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// R150: R_4k7_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R150 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_4k7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R150" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// R151: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R151 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_10k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R151" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C255: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C255 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C255" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C254: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C254 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C254" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C259: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C259 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C259" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C253: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C253 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C253" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C258: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C258 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C258" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C252: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C252 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C252" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C249: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C249 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C249" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C251: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C251 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C251" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="180deg"/>
      </footprint>);
// C250: C_4u7_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C250 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_4u7_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C250" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C227: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C227 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C227" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C256: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C256 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C256" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C74: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C74 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C74" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C91: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C91 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C91" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C57: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C57 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C57" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// C58: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C58 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C58" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// FB3: FB_120Z_2A_Murata-BLM18PG_0603; antmicro-footprints:FB_0603_1608Metric
export const Footprint_FB3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="bottom" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": 0.406 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.406 }, { "x": -0.803, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": -0.803, "y": -0.408 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.408 }, { "x": 0.8, "y": 0.406 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.9} anchorAlignment="center" text="FB_120Z_2A_Murata-BLM18PG_0603" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="bottom" pcbRotation="-180deg"/>
      </footprint>);
// R60: R_47k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R60 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_47k_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R60" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// R14: R_22R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="R_22R_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.25} layer="bottom"/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C11: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C9: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// C5: C_10n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_10n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="0deg"/>
      </footprint>);
// C4: C_470n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="bottom" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.248 }, { "x": -0.494, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.25 }, { "x": 0.504, "y": -0.25 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.248 }, { "x": -0.494, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.25 }, { "x": 0.504, "y": 0.248 }]} strokeWidth={0.15} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.17} anchorAlignment="center" text="C_470n_0402" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.25} layer="bottom"/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
