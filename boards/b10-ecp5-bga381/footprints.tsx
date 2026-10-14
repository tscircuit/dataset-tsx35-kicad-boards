// ECP5 BGA-381 FT2232HQ FIFO board
// Source: https://github.com/gildobjanschi/ECP5_BGA381_FT2232HQ_FIFO_EXT
// Commit: 81403f7487a9eded36c6500b8c8b6c12a6705f81; license: MIT. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// D21: YELLOW; LED_SMD:LED_0603_1608Metric
export const Footprint_D21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="YELLOW" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D21" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D1: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// SW1: PTS645SK43SMTR92 LFS; Button_Switch_SMD:SW_SPST_PTS645
export const Footprint_SW1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-3.98mm" pcbY="2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin1"]} pcbX="3.98mm" pcbY="2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-3.98mm" pcbY="-2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="3.98mm" pcbY="-2.25mm" layer="top" width="1.3mm" height="1.55mm" ccwRotation={90} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": -3, "y": -3 }, { "x": 3, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": -3 }, { "x": 3, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -3, "y": 3 }, { "x": -3, "y": -3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 3, "y": 3 }, { "x": -3, "y": 3 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0, "y": 1.750714 }, { "x": -0.669969, "y": 1.617449 }, { "x": -1.237942, "y": 1.237942 }, { "x": -1.617449, "y": 0.669969 }, { "x": -1.750714, "y": 0 }, { "x": -1.617449, "y": -0.669969 }, { "x": -1.237942, "y": -1.237942 }, { "x": -0.669969, "y": -1.617449 }, { "x": 0, "y": -1.750714 }, { "x": 0.669969, "y": -1.617449 }, { "x": 1.237942, "y": -1.237942 }, { "x": 1.617449, "y": -0.669969 }, { "x": 1.750714, "y": 0 }, { "x": 1.617449, "y": 0.669969 }, { "x": 1.237942, "y": 1.237942 }, { "x": 0.669969, "y": 1.617449 }, { "x": 0, "y": 1.750714 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-4.15} anchorAlignment="center" text="PTS645SK43SMTR92 LFS" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={4.05} anchorAlignment="center" text="SW1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -5.05, "y": -3.4 }, { "x": 5.05, "y": -3.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.05, "y": -3.4 }, { "x": 5.05, "y": 3.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.05, "y": 3.4 }, { "x": -5.05, "y": -3.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.05, "y": 3.4 }, { "x": 5.05, "y": 3.4 }]} layer="top"/>
      </footprint>);
// D19: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D19" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D4: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D18: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D18" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// H2: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H2 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H2" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// D2: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D10: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D10" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// H1: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H1 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H1" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// H4: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H4 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H4" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// D20: RED; LED_SMD:LED_0603_1608Metric
export const Footprint_D20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="RED" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D20" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D3: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP3: 5190TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5190TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// D5: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP9: 5194TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5194TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// R29: 100; Resistor_SMD:R_0603_1608Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// T1: DA101JC; ECP5_BGA381_FT2232HQ_FIFO_EXT:DA101J_MUR
export const Footprint_T1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-5.842mm" pcbY="2.54mm" layer="top" width="0.6858mm" height="1.7272mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-5.842mm" pcbY="0mm" layer="top" width="0.6858mm" height="1.7272mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-5.842mm" pcbY="-2.54mm" layer="top" width="0.6858mm" height="1.7272mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="5.842mm" pcbY="-2.54mm" layer="top" width="0.6858mm" height="1.7272mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="5.842mm" pcbY="0mm" layer="top" width="0.6858mm" height="1.7272mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="5.842mm" pcbY="2.54mm" layer="top" width="0.6858mm" height="1.7272mm" ccwRotation={90} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -4.7625, "y": -4.4958 }, { "x": 4.7625, "y": -4.4958 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": -4.4958 }, { "x": 4.7625, "y": 4.4958 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -6.35, "y": -2.8575 }, { "x": -4.7625, "y": -2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": -2.8575 }, { "x": -4.7625, "y": -2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": -2.8575 }, { "x": 6.35, "y": -2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 6.35, "y": -2.8575 }, { "x": 6.35, "y": -2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -6.35, "y": -2.2225 }, { "x": -6.35, "y": -2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": -2.2225 }, { "x": -6.35, "y": -2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": -2.2225 }, { "x": 4.7625, "y": -2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 6.35, "y": -2.2225 }, { "x": 4.7625, "y": -2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -6.35, "y": -0.3175 }, { "x": -4.7625, "y": -0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": -0.3175 }, { "x": -4.7625, "y": 0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": -0.3175 }, { "x": 6.35, "y": -0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 6.35, "y": -0.3175 }, { "x": 6.35, "y": 0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -6.35, "y": 0.3175 }, { "x": -6.35, "y": -0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": 0.3175 }, { "x": -6.35, "y": 0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": 0.3175 }, { "x": 4.7625, "y": -0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 6.35, "y": 0.3175 }, { "x": 4.7625, "y": 0.3175 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -6.35, "y": 2.2225 }, { "x": -4.7625, "y": 2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": 2.2225 }, { "x": -4.7625, "y": 2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": 2.2225 }, { "x": 6.35, "y": 2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 6.35, "y": 2.2225 }, { "x": 6.35, "y": 2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -6.35, "y": 2.8575 }, { "x": -6.35, "y": 2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": 2.8575 }, { "x": -6.35, "y": 2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": 2.8575 }, { "x": 4.7625, "y": 2.2225 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 6.35, "y": 2.8575 }, { "x": 4.7625, "y": 2.8575 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": -4.7625, "y": 4.4958 }, { "x": -4.7625, "y": -4.4958 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 4.7625, "y": 4.4958 }, { "x": -4.7625, "y": 4.4958 }]} strokeWidth={0.0254}/>
<fabricationnotepath route={[{ "x": 0.3048, "y": 4.4958 }, { "x": 0.289882, "y": 4.401612 }, { "x": 0.246588, "y": 4.316643 }, { "x": 0.179157, "y": 4.249212 }, { "x": 0.094188, "y": 4.205918 }, { "x": 0, "y": 4.191 }, { "x": -0.094188, "y": 4.205918 }, { "x": -0.179157, "y": 4.249212 }, { "x": -0.246588, "y": 4.316643 }, { "x": -0.289882, "y": 4.401612 }, { "x": -0.3048, "y": 4.4958 }]} strokeWidth={0.0254}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="DA101JC" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="T1" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-4.3815} pcbY={4.4196} anchorAlignment="center" text="*" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={-4.3815} pcbY={4.4196} anchorAlignment="center" text="*" font="tscircuit2024" fontSize={1}/>



<courtyardoutline outline={[{ "x": -5.0165, "y": -4.7498 }, { "x": -5.0165, "y": -3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.0165, "y": -4.7498 }, { "x": -5.0165, "y": -4.7498 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.9596, "y": -3.1369 }, { "x": -5.0165, "y": -3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.9596, "y": -3.1369 }, { "x": -6.9596, "y": 3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.0165, "y": -3.1369 }, { "x": 5.0165, "y": -4.7498 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.9596, "y": -3.1369 }, { "x": 5.0165, "y": -3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -6.9596, "y": 3.1369 }, { "x": -5.0165, "y": 3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.0165, "y": 3.1369 }, { "x": -5.0165, "y": 4.7498 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.9596, "y": 3.1369 }, { "x": 6.9596, "y": -3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.9596, "y": 3.1369 }, { "x": 5.0165, "y": 3.1369 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -5.0165, "y": 4.7498 }, { "x": 5.0165, "y": 4.7498 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 5.0165, "y": 4.7498 }, { "x": 5.0165, "y": 3.1369 }]} layer="top"/>
      </footprint>);
// R27: 75; Resistor_SMD:R_0603_1608Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="75" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
      </footprint>);
// TP1: 5197TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5197TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// D23: YELLOW; LED_SMD:LED_0603_1608Metric
export const Footprint_D23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="YELLOW" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D23" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D25: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D25" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D8: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D8" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D16: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D16" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// G***: LOGO; LOGO
export const Footprint_G___ = () => (<footprint originalLayer="top">
        






      </footprint>);
// D9: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D9" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D12: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D12" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP8: 5191TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5191TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// J2: RCJ-044; ECP5_BGA381_FT2232HQ_FIFO_EXT:CUI_RCJ-042
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="-4mm" pcbY="0mm" outerHeight="4.8mm" outerWidth="2.4mm" holeHeight="3.4mm" holeWidth="1.3mm" shape="pill" pcbRotation="0deg"/>
<platedhole portHints={["pin2"]} pcbX="-8.5mm" pcbY="0mm" outerHeight="1.7mm" outerWidth="3.4mm" holeHeight="1mm" holeWidth="2.3mm" shape="pill" pcbRotation="0deg"/>















<fabricationnotepath route={[{ "x": 0, "y": 5 }, { "x": 0, "y": 4.15 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -10, "y": 5 }, { "x": 0, "y": 5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0, "y": 4.15 }, { "x": 8.91, "y": 4.15 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0, "y": 4.15 }, { "x": 0, "y": -4.15 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 9.5, "y": 3.56 }, { "x": 9.5, "y": -3.76 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -9.6, "y": 2 }, { "x": -10, "y": 2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -10, "y": 2 }, { "x": -10, "y": 5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -9.6, "y": -2 }, { "x": -9.6, "y": 2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -10, "y": -2 }, { "x": -9.6, "y": -2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 9.11, "y": -4.15 }, { "x": 0, "y": -4.15 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0, "y": -4.15 }, { "x": 0, "y": -5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 0, "y": -5 }, { "x": -10, "y": -5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -10, "y": -5 }, { "x": -10, "y": -2 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -3.99, "y": -3.2 }, { "x": -3.951732, "y": -3.192388 }, { "x": -3.919289, "y": -3.170711 }, { "x": -3.897612, "y": -3.138268 }, { "x": -3.89, "y": -3.1 }, { "x": -3.897612, "y": -3.061732 }, { "x": -3.919289, "y": -3.029289 }, { "x": -3.951732, "y": -3.007612 }, { "x": -3.99, "y": -3 }, { "x": -4.028268, "y": -3.007612 }, { "x": -4.060711, "y": -3.029289 }, { "x": -4.082388, "y": -3.061732 }, { "x": -4.09, "y": -3.1 }, { "x": -4.082388, "y": -3.138268 }, { "x": -4.060711, "y": -3.170711 }, { "x": -4.028268, "y": -3.192388 }, { "x": -3.99, "y": -3.2 }]} strokeWidth={0.2}/>
<fabricationnotepath route={[{ "x": 8.91, "y": 4.15 }, { "x": 9.002296, "y": 4.142736 }, { "x": 9.09232, "y": 4.121123 }, { "x": 9.177854, "y": 4.085694 }, { "x": 9.256793, "y": 4.03732 }, { "x": 9.327193, "y": 3.977193 }, { "x": 9.38732, "y": 3.906793 }, { "x": 9.435694, "y": 3.827854 }, { "x": 9.471123, "y": 3.74232 }, { "x": 9.492736, "y": 3.652296 }, { "x": 9.5, "y": 3.56 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 9.5, "y": -3.76 }, { "x": 9.490222, "y": -3.846783 }, { "x": 9.461378, "y": -3.929215 }, { "x": 9.414915, "y": -4.003161 }, { "x": 9.353161, "y": -4.064915 }, { "x": 9.279215, "y": -4.111378 }, { "x": 9.196783, "y": -4.140222 }, { "x": 9.11, "y": -4.15 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={-3.102485} pcbY={-6.517495} anchorAlignment="center" text="RCJ-044" font="tscircuit2024" fontSize={1.006087}/>

<courtyardoutline outline={[{ "x": 0.25, "y": 5.4 }, { "x": -1.95, "y": 5.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": 5.4 }, { "x": -1.95, "y": 5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": 5.25 }, { "x": -10.45, "y": 5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -10.45, "y": 5.25 }, { "x": -10.45, "y": -5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.75, "y": 4.4 }, { "x": 0.25, "y": 4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.25, "y": 4.4 }, { "x": 0.25, "y": 5.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.75, "y": -4.4 }, { "x": 9.75, "y": 4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.25, "y": -4.4 }, { "x": 9.75, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": -5.25 }, { "x": -1.95, "y": -5.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -10.45, "y": -5.25 }, { "x": -1.95, "y": -5.25 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.25, "y": -5.4 }, { "x": 0.25, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.95, "y": -5.4 }, { "x": 0.25, "y": -5.4 }]} layer="top"/>
      </footprint>);
// R28: 100; Resistor_SMD:R_0603_1608Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="100" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// C3: 0.1µF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="0.1µF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D13: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D13" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D14: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D14" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D15: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D15" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP7: 5191TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5191TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// TP2: 5197TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5197TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// C4: 18nF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="top" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="18nF" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.4}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// H3: MountingHole; MountingHole:MountingHole_3.2mm_M3
export const Footprint_H3 = () => (<footprint originalLayer="top">
        <hole pcbX="0mm" pcbY="0mm" diameter="3.2mm"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="H3" font="tscircuit2024" fontSize={1}/>
<courtyardcircle pcbX={0} pcbY={0} radius={3.45} layer="top"/>
      </footprint>);
// R26: 150; Resistor_SMD:R_0603_1608Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="top" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="150" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D6: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D6" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D11: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D11" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// J3: HDMI A; ECP5_BGA381_FT2232HQ_FIFO_EXT:AMPHENOL_10029449-001RLF
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin20"]} pcbX="-7.85mm" pcbY="-4.9mm" outerDiameter="1.95mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="-7.25mm" pcbY="0mm" outerDiameter="1.95mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="7.25mm" pcbY="0mm" outerDiameter="1.95mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin20"]} pcbX="7.85mm" pcbY="-4.9mm" outerDiameter="1.95mm" holeDiameter="1.3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="4.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="4.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="3.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="3.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="2.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="2.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="1.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="1.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-1.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-1.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-2.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-2.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-3.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.75mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.25mm" pcbY="1mm" layer="top" width="0.3mm" height="1.9mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 7.5, "y": -8.5 }, { "x": -7.5, "y": -8.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 7.5, "y": -7.5 }, { "x": 7.5, "y": -8.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 7.5, "y": -7.5 }, { "x": -7.5, "y": -7.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 7.5, "y": 1.4 }, { "x": 7.5, "y": -7.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -7.5, "y": -8.5 }, { "x": -7.5, "y": -7.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -7.5, "y": -7.5 }, { "x": -7.5, "y": 1.4 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -7.5, "y": 1.4 }, { "x": 7.5, "y": 1.4 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 5.146, "y": 1.8 }, { "x": 5.165335, "y": 1.702798 }, { "x": 5.220395, "y": 1.620395 }, { "x": 5.302798, "y": 1.565335 }, { "x": 5.4, "y": 1.546 }, { "x": 5.497202, "y": 1.565335 }, { "x": 5.579605, "y": 1.620395 }, { "x": 5.634665, "y": 1.702798 }, { "x": 5.654, "y": 1.8 }, { "x": 5.634665, "y": 1.897202 }, { "x": 5.579605, "y": 1.979605 }, { "x": 5.497202, "y": 2.034665 }, { "x": 5.4, "y": 2.054 }, { "x": 5.302798, "y": 2.034665 }, { "x": 5.220395, "y": 1.979605 }, { "x": 5.165335, "y": 1.897202 }, { "x": 5.146, "y": 1.8 }]} strokeWidth={0}/>
<fabricationnotetext pcbX={6.2} pcbY={-9.415} anchorAlignment="center" text="HDMI A" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={-7} anchorAlignment="center" text="PCB EDGE" font="tscircuit2024" fontSize={0.64}/>

<courtyardoutline outline={[{ "x": 9.08, "y": -8.75 }, { "x": -9.08, "y": -8.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 9.08, "y": 2.2 }, { "x": 9.08, "y": -8.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.08, "y": -8.75 }, { "x": -9.08, "y": 2.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -9.08, "y": 2.2 }, { "x": 9.08, "y": 2.2 }]} layer="top"/>
      </footprint>);
// TP6: 5190TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5190TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// D7: BLUE; LED_SMD:LED_0603_1608Metric
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="BLUE" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D7" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D22: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D22" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// D17: YELLOW; LED_SMD:LED_0603_1608Metric
export const Footprint_D17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="YELLOW" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D17" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// TP5: 5190TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5190TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// TP4: 5190TR; ECP5_BGA381_FT2232HQ_FIFO_EXT:KEYSTONE_5197TR
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" width="3mm" height="1.5mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -1.25, "y": 1.5 }, { "x": -1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": -1.25, "y": -1.5 }, { "x": 1.25, "y": -1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": 1.5 }, { "x": -1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotepath route={[{ "x": 1.25, "y": -1.5 }, { "x": 1.25, "y": 1.5 }]} strokeWidth={0.127}/>
<fabricationnotetext pcbX={7.775} pcbY={-3.385} anchorAlignment="center" text="5190TR" font="tscircuit2024" fontSize={1}/>
<courtyardoutline outline={[{ "x": -1.75, "y": 1.75 }, { "x": -1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.75, "y": -1.75 }, { "x": 1.75, "y": -1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": 1.75 }, { "x": -1.75, "y": 1.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.75, "y": -1.75 }, { "x": 1.75, "y": 1.75 }]} layer="top"/>
      </footprint>);
// U2: DSLVDS1047; ECP5_BGA381_FT2232HQ_FIFO_EXT:TSSOP-16-1EP_4.4x5mm_P0.65mm
export const Footprint_U2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.9mm" pcbY="2.275mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.9mm" pcbY="1.625mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.9mm" pcbY="0.975mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.9mm" pcbY="0.325mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.9mm" pcbY="-0.325mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.9mm" pcbY="-0.975mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.9mm" pcbY="-1.625mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.9mm" pcbY="-2.275mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="2.9mm" pcbY="-2.275mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="2.9mm" pcbY="-1.625mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="2.9mm" pcbY="-0.975mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="2.9mm" pcbY="-0.325mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="2.9mm" pcbY="0.325mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="2.9mm" pcbY="0.975mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="2.9mm" pcbY="1.625mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="2.9mm" pcbY="2.275mm" layer="top" width="0.45mm" height="1.5mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 2.2, "y": 2.5 }, { "x": 2.2, "y": -2.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.2, "y": 2.5 }, { "x": 2.2, "y": 2.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.2, "y": 1.5 }, { "x": -1.2, "y": 2.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.2, "y": -2.5 }, { "x": -2.2, "y": -2.5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.2, "y": -2.5 }, { "x": -2.2, "y": 1.5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-3.55} anchorAlignment="center" text="DSLVDS1047" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={5} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={0.8}/>

<courtyardoutline outline={[{ "x": 3.5, "y": 2.9 }, { "x": 3.5, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 2.9 }, { "x": 3.5, "y": 2.9 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": 2.9 }, { "x": -3.5, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.5, "y": -2.8 }, { "x": 3.5, "y": -2.8 }]} layer="top"/>
      </footprint>);
// D24: GREEN; LED_SMD:LED_0603_1608Metric
export const Footprint_D24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7875mm" pcbY="0mm" layer="top" cornerRadius="0.109375mm" width="0.95mm" height="0.875mm" ccwRotation={90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.1 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.4 }, { "x": -0.8, "y": 0.1 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": -0.5, "y": 0.4 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.43} anchorAlignment="center" text="GREEN" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="D24" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="top"/>
      </footprint>);
// U1: 74HC04; Package_SO:TSSOP-14_4.4x5mm_P0.65mm
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.8625mm" pcbY="1.95mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.8625mm" pcbY="1.3mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.8625mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.8625mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.8625mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.8625mm" pcbY="-1.3mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.8625mm" pcbY="-1.95mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.8625mm" pcbY="-1.95mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="2.8625mm" pcbY="-1.3mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="2.8625mm" pcbY="-0.65mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="2.8625mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="2.8625mm" pcbY="0.65mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="2.8625mm" pcbY="1.3mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="2.8625mm" pcbY="1.95mm" layer="top" cornerRadius="0.05mm" width="1.475mm" height="0.4mm" shape="rect"/>





<fabricationnotepath route={[{ "x": -2.2, "y": 1.5 }, { "x": -1.2, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -2.2, "y": -2.5 }, { "x": -2.2, "y": 1.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -1.2, "y": 2.5 }, { "x": 2.2, "y": 2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2, "y": 2.5 }, { "x": 2.2, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 2.2, "y": -2.5 }, { "x": -2.2, "y": -2.5 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-3.45} anchorAlignment="center" text="74HC04" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": -3.85, "y": 2.75 }, { "x": -3.85, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3.85, "y": -2.75 }, { "x": 3.85, "y": -2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.85, "y": 2.75 }, { "x": -3.85, "y": 2.75 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3.85, "y": -2.75 }, { "x": 3.85, "y": 2.75 }]} layer="top"/>
      </footprint>);
// R25: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R25 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R1: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R12: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R23: 750; Resistor_SMD:R_0603_1608Metric
export const Footprint_R23 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="750" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R6: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R18: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R18 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R7: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R21: 750; Resistor_SMD:R_0603_1608Metric
export const Footprint_R21 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="750" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R14: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R10: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R20: 750; Resistor_SMD:R_0603_1608Metric
export const Footprint_R20 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="750" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R4: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R4 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R15: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R3: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R9: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R22: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R22 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// C2: 0.1µF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="bottom" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="bottom" cornerRadius="0.1125mm" width="0.95mm" height="0.9mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="0.1µF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R24: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R24 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R17: 750; Resistor_SMD:R_0603_1608Metric
export const Footprint_R17 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="750" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// J1: FLE-126-01-G-DV; ECP5_BGA381_FT2232HQ_FIFO_EXT:SAMTEC_FLE-126-01-G-DV
export const Footprint_J1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-15.875mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-15.875mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-14.605mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-14.605mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-13.335mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="-13.335mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="-12.065mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="-12.065mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin9"]} pcbX="-10.795mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin10"]} pcbX="-10.795mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin11"]} pcbX="-9.525mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin12"]} pcbX="-9.525mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin13"]} pcbX="-8.255mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin14"]} pcbX="-8.255mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin15"]} pcbX="-6.985mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin16"]} pcbX="-6.985mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin17"]} pcbX="-5.715mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin18"]} pcbX="-5.715mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin19"]} pcbX="-4.445mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin20"]} pcbX="-4.445mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin21"]} pcbX="-3.175mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin22"]} pcbX="-3.175mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin23"]} pcbX="-1.905mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin24"]} pcbX="-1.905mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin25"]} pcbX="-0.635mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin26"]} pcbX="-0.635mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin27"]} pcbX="0.635mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin28"]} pcbX="0.635mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin29"]} pcbX="1.905mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin30"]} pcbX="1.905mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin31"]} pcbX="3.175mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin32"]} pcbX="3.175mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin33"]} pcbX="4.445mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin34"]} pcbX="4.445mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin35"]} pcbX="5.715mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin36"]} pcbX="5.715mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin37"]} pcbX="6.985mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin38"]} pcbX="6.985mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin39"]} pcbX="8.255mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin40"]} pcbX="8.255mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin41"]} pcbX="9.525mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin42"]} pcbX="9.525mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin43"]} pcbX="10.795mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin44"]} pcbX="10.795mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin45"]} pcbX="12.065mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin46"]} pcbX="12.065mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin47"]} pcbX="13.335mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin48"]} pcbX="13.335mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin49"]} pcbX="14.605mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin50"]} pcbX="14.605mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin51"]} pcbX="15.875mm" pcbY="-1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>
<smtpad portHints={["pin52"]} pcbX="15.875mm" pcbY="1.8425mm" layer="bottom" width="0.74mm" height="1.675mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -16.51, "y": 1.665 }, { "x": 16.51, "y": 1.665 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -16.51, "y": -1.665 }, { "x": -16.51, "y": 1.665 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 16.51, "y": 1.665 }, { "x": 16.51, "y": -1.665 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 16.51, "y": -1.665 }, { "x": -16.51, "y": -1.665 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -16.085, "y": -3.44 }, { "x": -16.092612, "y": -3.401732 }, { "x": -16.114289, "y": -3.369289 }, { "x": -16.146732, "y": -3.347612 }, { "x": -16.185, "y": -3.34 }, { "x": -16.223268, "y": -3.347612 }, { "x": -16.255711, "y": -3.369289 }, { "x": -16.277388, "y": -3.401732 }, { "x": -16.285, "y": -3.44 }, { "x": -16.277388, "y": -3.478268 }, { "x": -16.255711, "y": -3.510711 }, { "x": -16.223268, "y": -3.532388 }, { "x": -16.185, "y": -3.54 }, { "x": -16.146732, "y": -3.532388 }, { "x": -16.114289, "y": -3.510711 }, { "x": -16.092612, "y": -3.478268 }, { "x": -16.085, "y": -3.44 }]} strokeWidth={0.2} layer="bottom"/>
<fabricationnotetext pcbX={-3.54} pcbY={4.31} anchorAlignment="center" text="FLE-126-01-G-DV" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -16.76, "y": 2.93 }, { "x": 16.76, "y": 2.93 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -16.76, "y": -2.93 }, { "x": -16.76, "y": 2.93 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 16.76, "y": 2.93 }, { "x": 16.76, "y": -2.93 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 16.76, "y": -2.93 }, { "x": -16.76, "y": -2.93 }]} layer="bottom"/>
      </footprint>);
// R11: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R5: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R13: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R19: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R19 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R2: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R8: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// R16: 330; Resistor_SMD:R_0603_1608Metric
export const Footprint_R16 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.825mm" pcbY="0mm" layer="bottom" cornerRadius="0.1mm" width="0.95mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": -0.4125 }, { "x": -0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4125 }, { "x": -0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": 0.4125 }, { "x": 0.8, "y": 0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4125 }, { "x": 0.8, "y": -0.4125 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="330" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={1} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
// C1: 0.1µF; Capacitor_SMD:C_0603_1608Metric
export const Footprint_C1 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-0.775mm" pcbY="0mm" layer="bottom" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.775mm" pcbY="0mm" layer="bottom" cornerRadius="0.1125mm" width="0.9mm" height="0.95mm" shape="rect"/>


<fabricationnotepath route={[{ "x": -0.8, "y": 0.4 }, { "x": 0.8, "y": 0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": -0.8, "y": -0.4 }, { "x": -0.8, "y": 0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.4 }, { "x": 0.8, "y": -0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.4 }, { "x": -0.8, "y": -0.4 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={1.43} anchorAlignment="center" text="0.1µF" font="tscircuit2024" fontSize={1} layer="bottom"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.4} layer="bottom"/>

<courtyardoutline outline={[{ "x": -1.48, "y": 0.73 }, { "x": 1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -1.48, "y": -0.73 }, { "x": -1.48, "y": 0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": 0.73 }, { "x": 1.48, "y": -0.73 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 1.48, "y": -0.73 }, { "x": -1.48, "y": -0.73 }]} layer="bottom"/>
      </footprint>);
