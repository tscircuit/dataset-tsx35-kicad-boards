// Antmicro CVBS-to-MIPI bridge
// Source: https://github.com/antmicro/cvbs-mipi-bridge
// Commit: 7cbcec2bceaf6e1efd25cce1d73ff4989dfcfe02; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// REF**: antmicro-logo_scaled_20mm; cvbs-mipi-bridge-footprints:antmicro-logo_scaled_20mm_mask
export const Footprint_REF__ = () => (<footprint />);
// S1: SW_KMR211NGLFS_SMD; cvbs-mipi-bridge-footprints:SW_KMR211NGLFS_SMD
export const Footprint_S1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.048mm" pcbY="0.8mm" layer="top" width="0.9mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="2.05mm" pcbY="0.8mm" layer="top" width="0.9mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.048mm" pcbY="-0.802mm" layer="top" width="0.9mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="2.05mm" pcbY="-0.802mm" layer="top" width="0.9mm" height="1mm" shape="rect"/>






<fabricationnotepath route={[{ "x": -2.1, "y": 1.6 }, { "x": -2.1, "y": -1.601 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.1, "y": -1.601 }, { "x": 2.101, "y": -1.601 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.248, "y": 0.8 }, { "x": 0.25, "y": 0.8 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.25, "y": -0.802 }, { "x": -0.248, "y": -0.802 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.101, "y": 1.6 }, { "x": -2.1, "y": 1.6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.101, "y": -1.601 }, { "x": 2.101, "y": 1.6 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.248, "y": -0.802 }, { "x": -0.344634, "y": -0.796271 }, { "x": -0.43987, "y": -0.778927 }, { "x": -0.532319, "y": -0.750221 }, { "x": -0.620631, "y": -0.710572 }, { "x": -0.703514, "y": -0.66056 }, { "x": -0.779759, "y": -0.600915 }, { "x": -0.848252, "y": -0.532507 }, { "x": -0.907992, "y": -0.456337 }, { "x": -0.958108, "y": -0.373516 }, { "x": -0.997867, "y": -0.285255 }, { "x": -1.026689, "y": -0.192841 }, { "x": -1.044152, "y": -0.097626 }, { "x": -1.050001, "y": -0.001 }, { "x": -1.044152, "y": 0.095626 }, { "x": -1.026689, "y": 0.190841 }, { "x": -0.997867, "y": 0.283255 }, { "x": -0.958108, "y": 0.371516 }, { "x": -0.907992, "y": 0.454337 }, { "x": -0.848252, "y": 0.530507 }, { "x": -0.779759, "y": 0.598915 }, { "x": -0.703514, "y": 0.65856 }, { "x": -0.620631, "y": 0.708572 }, { "x": -0.532319, "y": 0.748221 }, { "x": -0.43987, "y": 0.776927 }, { "x": -0.344634, "y": 0.794271 }, { "x": -0.248, "y": 0.8 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.25, "y": 0.8 }, { "x": 0.34655, "y": 0.79416 }, { "x": 0.441692, "y": 0.776725 }, { "x": 0.534039, "y": 0.747948 }, { "x": 0.622244, "y": 0.708251 }, { "x": 0.70502, "y": 0.65821 }, { "x": 0.781162, "y": 0.598557 }, { "x": 0.849558, "y": 0.530162 }, { "x": 0.909211, "y": 0.45402 }, { "x": 0.959251, "y": 0.371244 }, { "x": 0.998949, "y": 0.283039 }, { "x": 1.027725, "y": 0.190692 }, { "x": 1.045161, "y": 0.09555 }, { "x": 1.051001, "y": -0.001 }, { "x": 1.045161, "y": -0.09755 }, { "x": 1.027725, "y": -0.192692 }, { "x": 0.998949, "y": -0.285039 }, { "x": 0.959251, "y": -0.373244 }, { "x": 0.909211, "y": -0.45602 }, { "x": 0.849558, "y": -0.532162 }, { "x": 0.781162, "y": -0.600557 }, { "x": 0.70502, "y": -0.66021 }, { "x": 0.622244, "y": -0.710251 }, { "x": 0.534039, "y": -0.749948 }, { "x": 0.441692, "y": -0.778725 }, { "x": 0.34655, "y": -0.79616 }, { "x": 0.25, "y": -0.802 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.8} anchorAlignment="bottom_left" text="SW_KMR211NGLFS_SMD" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0.0015} pcbY={-0.0005} width={5.499} height={3.499} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C15: C_10n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// Q1: BSS138PW; cvbs-mipi-bridge-footprints:SC70-3
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.051mm" pcbY="0.65mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.051mm" pcbY="-0.65mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.05mm" pcbY="0mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={90} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="bottom_left" text="BSS138PW" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.001} width={2} height={1.25} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": -1.4, "y": -1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": -0.9, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": 0.9, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1 }, { "x": -1.4, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.3 }, { "x": -0.9, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 1.3 }, { "x": 0.9, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.4 }, { "x": 1.4, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.4 }, { "x": 0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -1.3 }, { "x": -0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": 0.4 }, { "x": 1.4, "y": -0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": -0.4 }, { "x": 0.9, "y": -0.4 }]} layer="top"/>
      </footprint>);
// C27: C_1u_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C3: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R32: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// IC2: TLV70018_SC70; cvbs-mipi-bridge-footprints:SC-70-5
export const Footprint_IC2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.756mm" pcbY="-0.893mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.006mm" pcbY="-0.893mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.743mm" pcbY="-0.893mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.743mm" pcbY="0.907mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.756mm" pcbY="0.907mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.006, "y": 0.657 }, { "x": 0.993, "y": 0.657 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.293 }, { "x": -1.006, "y": 0.657 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.293 }, { "x": -0.706, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.993, "y": 0.657 }, { "x": 0.993, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.993, "y": -0.593 }, { "x": -0.706, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="bottom_left" text="TLV70018_SC70" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.005} width={2.5} height={2.61} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP4: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// R3: R_51R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_51R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R33: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R12: R_470R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R21: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R16: R_1M_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_1M_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R10: R_24R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_24R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP5: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// J4: RCA_Jack_KLPX-0848A-2-Y; cvbs-mipi-bridge-footprints:RCA_Jack_KLPX-0848A-2-Y
export const Footprint_J4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="4.799mm" pcbY="0mm" outerHeight="3.2mm" outerWidth="2.4mm" holeHeight="2.2mm" holeWidth="1.4mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.2mm" holeDiameter="2.2mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -13.401, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": -4.15 }, { "x": -3.9, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": 5 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.15 }, { "x": -3.9, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.998 }, { "x": 6.099, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": 5 }, { "x": -3.9, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": -4.998 }, { "x": 6.099, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-6.2} anchorAlignment="bottom_left" text="RCA_Jack_KLPX-0848A-2-Y" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -13.6, "y": 4.42 }, { "x": -4.1, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": -4.4 }, { "x": -13.6, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 5.21 }, { "x": 6.49, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 4.42 }, { "x": -4.1, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -4.4 }, { "x": -13.6, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -5.2 }, { "x": -4.1, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": 5.21 }, { "x": 6.49, "y": -5.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": -5.2 }, { "x": -4.1, "y": -5.2 }]} layer="top"/>
      </footprint>);
// R29: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C7: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C4: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// J2: Molex_Nano-Fit_1x2_1053131102; cvbs-mipi-bridge-footprints:Conn_Molex_Nano-Fit_1x2_1053131102
export const Footprint_J2 = () => (<footprint originalLayer="top">
        <hole pcbX="-2.5mm" pcbY="-7.179mm" diameter="1.7mm"/>
<hole pcbX="0mm" pcbY="-7.179mm" diameter="1.7mm"/>
<platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1.3mm" shape="circle"/>
<platedhole portHints={["pin2"]} pcbX="-2.5mm" pcbY="0mm" outerDiameter="2mm" holeDiameter="1.3mm" shape="circle"/>






<fabricationnotetext pcbX={0} pcbY={-13.1} anchorAlignment="bottom_left" text="Molex_Nano-Fit_1x2_1053131102" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={-1.251} pcbY={-5.5} width={6.94} height={13.2} layer="top" pcbRotation="180deg"/>
      </footprint>);
// Q2: BSS138PW; cvbs-mipi-bridge-footprints:SC70-3
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.051mm" pcbY="0.65mm" layer="top" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.051mm" pcbY="-0.65mm" layer="top" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="1.05mm" pcbY="0mm" layer="top" width="0.6mm" height="0.6mm" shape="rect"/>




<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="bottom_left" text="BSS138PW" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.001} width={1.25} height={2} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": -1.4, "y": -1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": -0.9, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": 0.9, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1 }, { "x": -1.4, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.3 }, { "x": -0.9, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 1.3 }, { "x": 0.9, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.4 }, { "x": 1.4, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.4 }, { "x": 0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -1.3 }, { "x": -0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": 0.4 }, { "x": 1.4, "y": -0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": -0.4 }, { "x": 0.9, "y": -0.4 }]} layer="top"/>
      </footprint>);
// R19: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// FB3: FB_220Z_1.5A_WE-CBF_0805; cvbs-mipi-bridge-footprints:FB_0805_2012Metric
export const Footprint_FB3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.948, "y": 0.681 }, { "x": 0.948, "y": 0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": 0.676 }, { "x": -0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": -0.681 }, { "x": 0.948, "y": -0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.948, "y": 0.676 }, { "x": 0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.001} pcbY={-1.801} anchorAlignment="bottom_left" text="FB_220Z_1.5A_WE-CBF_0805" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J7: PinHeader_1x2_P2.54mm_Drill1.1mm; cvbs-mipi-bridge-footprints:PinHeader_1x2_P2.54_Drill0.9mm
export const Footprint_J7 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="0.9mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="2.539mm" pcbY="-0.02mm" outerDiameter="1.7mm" holeDiameter="0.9mm" shape="circle"/>








<fabricationnotepath route={[{ "x": -1.27, "y": 1.27 }, { "x": 3.809, "y": 1.27 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.269 }, { "x": -1.27, "y": 1.27 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.27, "y": -1.269 }, { "x": 3.809, "y": -1.269 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 3.809, "y": -1.269 }, { "x": 3.809, "y": 1.27 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.8} pcbY={-2.8} anchorAlignment="bottom_left" text="PinHeader_1x2_P2.54mm_Drill1.1mm" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -1.52, "y": 1.52 }, { "x": -1.52, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.04, "y": 1.52 }, { "x": -1.52, "y": 1.52 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.04, "y": 1.52 }, { "x": 4.04, "y": -1.5 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 4.04, "y": -1.5 }, { "x": -1.52, "y": -1.5 }]} layer="top"/>
      </footprint>);
// C6: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R5: R_51R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_51R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// D8: LED_G_0603_KP-1608ZGC; cvbs-mipi-bridge-footprints:LED_0603_1608Metric_G
export const Footprint_D8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.849, "y": -0.025 }, { "x": -0.442, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.6, "y": 0.001 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.201 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.001 }, { "x": -0.202, "y": -0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": -0.201 }, { "x": 0.1, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.1, "y": 0.001 }, { "x": -0.202, "y": 0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.001 }, { "x": 0.596, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": -0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D5: LED_G_0603_KP-1608ZGC; cvbs-mipi-bridge-footprints:LED_0603_1608Metric_G
export const Footprint_D5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.849, "y": -0.025 }, { "x": -0.442, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.6, "y": 0.001 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.201 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.001 }, { "x": -0.202, "y": -0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": -0.201 }, { "x": 0.1, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.1, "y": 0.001 }, { "x": -0.202, "y": 0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.001 }, { "x": 0.596, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": -0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// IC1: ADV7282-M; cvbs-mipi-bridge-footprints:LFCSP-32-1EP-5x5mm
export const Footprint_IC1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.452mm" pcbY="1.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.452mm" pcbY="1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.452mm" pcbY="0.751mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.452mm" pcbY="0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-2.452mm" pcbY="-0.248mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-2.452mm" pcbY="-0.749mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-2.452mm" pcbY="-1.249mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-2.452mm" pcbY="-1.749mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-1.75mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-1.25mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-0.751mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-0.25mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="0.248mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="0.749mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="1.249mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="1.749mm" pcbY="-2.451mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="2.451mm" pcbY="-1.749mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="2.451mm" pcbY="-1.249mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="2.451mm" pcbY="-0.749mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.451mm" pcbY="-0.248mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.451mm" pcbY="0.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="2.451mm" pcbY="0.751mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="2.451mm" pcbY="1.25mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="2.451mm" pcbY="1.75mm" layer="top" width="0.8128mm" height="0.254mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="1.749mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="1.249mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.749mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="0.248mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="-0.25mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="-0.751mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-1.25mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="-1.75mm" pcbY="2.452mm" layer="top" width="0.254mm" height="0.8128mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" layer="top" width="3.7592mm" height="3.7592mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -2.553, "y": 2.553 }, { "x": -2.553, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 2.553 }, { "x": -2.553, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.903 }, { "x": -2.553, "y": 1.903 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.903 }, { "x": -2.553, "y": 1.599 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.751 }, { "x": -1.751, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.599 }, { "x": -2.553, "y": 1.903 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.599 }, { "x": -2.553, "y": 1.599 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.403 }, { "x": -2.553, "y": 1.403 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.403 }, { "x": -2.553, "y": 1.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.099 }, { "x": -2.553, "y": 1.403 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 1.099 }, { "x": -2.553, "y": 1.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.904 }, { "x": -2.553, "y": 0.904 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.904 }, { "x": -2.553, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.598 }, { "x": -2.553, "y": 0.904 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.598 }, { "x": -2.553, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.404 }, { "x": -2.553, "y": 0.404 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.404 }, { "x": -2.553, "y": 0.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.099 }, { "x": -2.553, "y": 0.404 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": 0.099 }, { "x": -2.553, "y": 0.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.097 }, { "x": -2.553, "y": -0.097 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.097 }, { "x": -2.553, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.402 }, { "x": -2.553, "y": -0.097 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.402 }, { "x": -2.553, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.596 }, { "x": -2.553, "y": -0.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.596 }, { "x": -2.553, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.902 }, { "x": -2.553, "y": -0.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -0.902 }, { "x": -2.553, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.096 }, { "x": -2.553, "y": -1.096 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.096 }, { "x": -2.553, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.402 }, { "x": -2.553, "y": -1.096 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.402 }, { "x": -2.553, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.596 }, { "x": -2.553, "y": -1.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.596 }, { "x": -2.553, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.902 }, { "x": -2.553, "y": -1.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -1.902 }, { "x": -2.553, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -2.551 }, { "x": -2.553, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -2.553, "y": -2.551 }, { "x": 2.551, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.903, "y": 2.553 }, { "x": -1.903, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.903, "y": 2.553 }, { "x": -1.599, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.903, "y": -2.551 }, { "x": -1.903, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.903, "y": -2.551 }, { "x": -1.599, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.599, "y": 2.553 }, { "x": -1.903, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.599, "y": 2.553 }, { "x": -1.599, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.599, "y": -2.551 }, { "x": -1.903, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.599, "y": -2.551 }, { "x": -1.599, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.403, "y": 2.553 }, { "x": -1.403, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.403, "y": 2.553 }, { "x": -1.099, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.403, "y": -2.551 }, { "x": -1.403, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.403, "y": -2.551 }, { "x": -1.099, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.099, "y": 2.553 }, { "x": -1.403, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.099, "y": 2.553 }, { "x": -1.099, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.099, "y": -2.551 }, { "x": -1.403, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.099, "y": -2.551 }, { "x": -1.099, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.904, "y": 2.553 }, { "x": -0.904, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.904, "y": 2.553 }, { "x": -0.598, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.904, "y": -2.551 }, { "x": -0.904, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.904, "y": -2.551 }, { "x": -0.598, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": 2.553 }, { "x": -0.904, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": 2.553 }, { "x": -0.598, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": -2.551 }, { "x": -0.904, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.598, "y": -2.551 }, { "x": -0.598, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.404, "y": 2.553 }, { "x": -0.404, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.404, "y": 2.553 }, { "x": -0.099, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.404, "y": -2.551 }, { "x": -0.404, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.404, "y": -2.551 }, { "x": -0.099, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.099, "y": 2.553 }, { "x": -0.404, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.099, "y": 2.553 }, { "x": -0.099, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.099, "y": -2.551 }, { "x": -0.404, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.099, "y": -2.551 }, { "x": -0.099, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.097, "y": 2.553 }, { "x": 0.097, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.097, "y": 2.553 }, { "x": 0.402, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.097, "y": -2.551 }, { "x": 0.097, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.097, "y": -2.551 }, { "x": 0.402, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": 2.553 }, { "x": 0.097, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": 2.553 }, { "x": 0.402, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": -2.551 }, { "x": 0.097, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.402, "y": -2.551 }, { "x": 0.402, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.596, "y": 2.553 }, { "x": 0.596, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.596, "y": 2.553 }, { "x": 0.902, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.596, "y": -2.551 }, { "x": 0.596, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.596, "y": -2.551 }, { "x": 0.902, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": 2.553 }, { "x": 0.596, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": 2.553 }, { "x": 0.902, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": -2.551 }, { "x": 0.596, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.902, "y": -2.551 }, { "x": 0.902, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.096, "y": 2.553 }, { "x": 1.096, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.096, "y": 2.553 }, { "x": 1.402, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.096, "y": -2.551 }, { "x": 1.096, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.096, "y": -2.551 }, { "x": 1.402, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": 2.553 }, { "x": 1.096, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": 2.553 }, { "x": 1.402, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": -2.551 }, { "x": 1.096, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.402, "y": -2.551 }, { "x": 1.402, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.596, "y": 2.553 }, { "x": 1.596, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.596, "y": 2.553 }, { "x": 1.902, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.596, "y": -2.551 }, { "x": 1.596, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.596, "y": -2.551 }, { "x": 1.902, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": 2.553 }, { "x": 1.596, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": 2.553 }, { "x": 1.902, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": -2.551 }, { "x": 1.596, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.902, "y": -2.551 }, { "x": 1.902, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 2.553 }, { "x": -2.553, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 2.553 }, { "x": 2.551, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.903 }, { "x": 2.551, "y": 1.903 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.903 }, { "x": 2.551, "y": 1.599 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.599 }, { "x": 2.551, "y": 1.903 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.599 }, { "x": 2.551, "y": 1.599 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.403 }, { "x": 2.551, "y": 1.403 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.403 }, { "x": 2.551, "y": 1.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.099 }, { "x": 2.551, "y": 1.403 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 1.099 }, { "x": 2.551, "y": 1.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.904 }, { "x": 2.551, "y": 0.904 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.904 }, { "x": 2.551, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.598 }, { "x": 2.551, "y": 0.904 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.598 }, { "x": 2.551, "y": 0.598 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.404 }, { "x": 2.551, "y": 0.404 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.404 }, { "x": 2.551, "y": 0.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.099 }, { "x": 2.551, "y": 0.404 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": 0.099 }, { "x": 2.551, "y": 0.099 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.097 }, { "x": 2.551, "y": -0.097 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.097 }, { "x": 2.551, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.402 }, { "x": 2.551, "y": -0.097 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.402 }, { "x": 2.551, "y": -0.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.596 }, { "x": 2.551, "y": -0.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.596 }, { "x": 2.551, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.902 }, { "x": 2.551, "y": -0.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -0.902 }, { "x": 2.551, "y": -0.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.096 }, { "x": 2.551, "y": -1.096 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.096 }, { "x": 2.551, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.402 }, { "x": 2.551, "y": -1.096 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.402 }, { "x": 2.551, "y": -1.402 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.596 }, { "x": 2.551, "y": -1.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.596 }, { "x": 2.551, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.902 }, { "x": 2.551, "y": -1.596 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -1.902 }, { "x": 2.551, "y": -1.902 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -2.551 }, { "x": 2.551, "y": 2.553 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 2.551, "y": -2.551 }, { "x": 2.551, "y": -2.551 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="bottom_left" text="ADV7282-M" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -3, "y": 2.15 }, { "x": -2.81, "y": 2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -3, "y": -2.12 }, { "x": -3, "y": 2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.81, "y": 2.81 }, { "x": -2.15, "y": 2.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.81, "y": 2.15 }, { "x": -2.81, "y": 2.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.81, "y": -2.12 }, { "x": -3, "y": -2.12 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.81, "y": -2.8 }, { "x": -2.81, "y": -2.12 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": 3 }, { "x": 2.12, "y": 3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": 2.81 }, { "x": -2.15, "y": 3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": -2.8 }, { "x": -2.81, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -2.15, "y": -3 }, { "x": -2.15, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.12, "y": 3 }, { "x": 2.12, "y": 2.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.12, "y": 2.81 }, { "x": 2.8, "y": 2.81 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.12, "y": -2.8 }, { "x": 2.12, "y": -3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.12, "y": -3 }, { "x": -2.15, "y": -3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.8, "y": 2.81 }, { "x": 2.8, "y": 2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.8, "y": 2.15 }, { "x": 3, "y": 2.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.8, "y": -2.12 }, { "x": 2.8, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 2.8, "y": -2.8 }, { "x": 2.12, "y": -2.8 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3, "y": 2.15 }, { "x": 3, "y": -2.12 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 3, "y": -2.12 }, { "x": 2.8, "y": -2.12 }]} layer="top"/>
      </footprint>);
// C22: C_10p_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10p_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// IC4: SN74AUP1G17_SC70; cvbs-mipi-bridge-footprints:SC-70-5
export const Footprint_IC4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.756mm" pcbY="-0.893mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.006mm" pcbY="-0.893mm" layer="top" cornerRadius="0.05mm" width="0.6mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="0.743mm" pcbY="-0.893mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.743mm" pcbY="0.907mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.756mm" pcbY="0.907mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": -1.006, "y": 0.657 }, { "x": 0.993, "y": 0.657 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.293 }, { "x": -1.006, "y": 0.657 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.293 }, { "x": -0.706, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.993, "y": 0.657 }, { "x": 0.993, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.993, "y": -0.593 }, { "x": -0.706, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="bottom_left" text="SN74AUP1G17_SC70" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.005} width={2.5} height={2.61} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C29: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP9: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// C19: C_10n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R15: R_22k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_22k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// Q3: BSS138PW; cvbs-mipi-bridge-footprints:SC70-3
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.051mm" pcbY="0.65mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.051mm" pcbY="-0.65mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.05mm" pcbY="0mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="bottom_left" text="BSS138PW" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.001} width={2} height={1.25} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": -1.4, "y": -1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": -0.9, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": 0.9, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1 }, { "x": -1.4, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.3 }, { "x": -0.9, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 1.3 }, { "x": 0.9, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.4 }, { "x": 1.4, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.4 }, { "x": 0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -1.3 }, { "x": -0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": 0.4 }, { "x": 1.4, "y": -0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": -0.4 }, { "x": 0.9, "y": -0.4 }]} layer="top"/>
      </footprint>);
// R13: R_470R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C2: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R31: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// J5: RCA_Jack_KLPX-0848A-2-Y; cvbs-mipi-bridge-footprints:RCA_Jack_KLPX-0848A-2-Y
export const Footprint_J5 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="4.799mm" pcbY="0mm" outerHeight="3.2mm" outerWidth="2.4mm" holeHeight="2.2mm" holeWidth="1.4mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.2mm" holeDiameter="2.2mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -13.401, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": -4.15 }, { "x": -3.9, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": 5 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.15 }, { "x": -3.9, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.998 }, { "x": 6.099, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": 5 }, { "x": -3.9, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": -4.998 }, { "x": 6.099, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-6.2} anchorAlignment="bottom_left" text="RCA_Jack_KLPX-0848A-2-Y" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -13.6, "y": 4.42 }, { "x": -4.1, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": -4.4 }, { "x": -13.6, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 5.21 }, { "x": 6.49, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 4.42 }, { "x": -4.1, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -4.4 }, { "x": -13.6, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -5.2 }, { "x": -4.1, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": 5.21 }, { "x": 6.49, "y": -5.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": -5.2 }, { "x": -4.1, "y": -5.2 }]} layer="top"/>
      </footprint>);
// TP13: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// R24: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R14: R_470R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D3: UCLAMP2501T.TCT; cvbs-mipi-bridge-footprints:SLP1006P2T
export const Footprint_D3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.421mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.425mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.506, "y": 0 }, { "x": -0.156, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": 0.22 }, { "x": -0.13, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": -0.22 }, { "x": 0.174, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0.22 }, { "x": 0.174, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0 }, { "x": -0.13, "y": 0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.184, "y": -0.01 }, { "x": 0.534, "y": -0.01 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.5} anchorAlignment="bottom_left" text="UCLAMP2501T.TCT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.002} width={0.804} height={1.504} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.01} pcbY={0} width={1.73} height={1.15} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// FB1: FB_220Z_1.5A_WE-CBF_0805; cvbs-mipi-bridge-footprints:FB_0805_2012Metric
export const Footprint_FB1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.948, "y": 0.681 }, { "x": 0.948, "y": 0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": 0.676 }, { "x": -0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": -0.681 }, { "x": 0.948, "y": -0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.948, "y": 0.676 }, { "x": 0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.001} pcbY={-1.801} anchorAlignment="bottom_left" text="FB_220Z_1.5A_WE-CBF_0805" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C25: C_1u_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R1: R_24R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_24R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// D1: UCLAMP2501T.TCT; cvbs-mipi-bridge-footprints:SLP1006P2T
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.421mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.425mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.506, "y": 0 }, { "x": -0.156, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": 0.22 }, { "x": -0.13, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": -0.22 }, { "x": 0.174, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0.22 }, { "x": 0.174, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0 }, { "x": -0.13, "y": 0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.184, "y": -0.01 }, { "x": 0.534, "y": -0.01 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.5} anchorAlignment="bottom_left" text="UCLAMP2501T.TCT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.002} width={0.804} height={1.504} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.01} pcbY={0} width={1.73} height={1.15} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J1: Conn_FFC_WE_68715014522; cvbs-mipi-bridge-footprints:Conn_FFC_WE_68715014x22
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-12.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-11.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-11.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-10.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-10.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-9.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-9.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-8.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-6.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-6.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-5.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-4.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-4.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-3.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-2.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-2.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-1.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-1.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.75mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-0.25mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="0.248mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.748mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="1.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="2.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="4.248mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="4.748mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="5.248mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="5.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="6.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="6.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="7.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="7.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="8.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="8.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="9.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="9.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="10.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="10.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="11.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="11.749mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="12.249mm" pcbY="2.15mm" layer="top" cornerRadius="0.0375mm" width="0.3mm" height="1.2mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-14.198mm" pcbY="0.3mm" layer="top" cornerRadius="0.0675mm" width="2.7mm" height="3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin52"]} pcbX="14.198mm" pcbY="0.3mm" layer="top" cornerRadius="0.0675mm" width="2.7mm" height="3mm" ccwRotation={-180} shape="rotated_rect"/>









<fabricationnotetext pcbX={0} pcbY={-4.5} anchorAlignment="bottom_left" text="Conn_FFC_WE_68715014522" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={-0.15} width={32.4} height={6.8} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP1: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// TP10: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// R4: R_24R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_24R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP14: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// R8: R_24R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_24R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// FB4: FB_220Z_1.5A_WE-CBF_0805; cvbs-mipi-bridge-footprints:FB_0805_2012Metric
export const Footprint_FB4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.948, "y": 0.681 }, { "x": 0.948, "y": 0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": 0.676 }, { "x": -0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": -0.681 }, { "x": 0.948, "y": -0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.948, "y": 0.676 }, { "x": 0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.001} pcbY={-1.801} anchorAlignment="bottom_left" text="FB_220Z_1.5A_WE-CBF_0805" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R7: R_4k7_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_4k7_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R25: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R20: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// D6: LED_G_0603_KP-1608ZGC; cvbs-mipi-bridge-footprints:LED_0603_1608Metric_G
export const Footprint_D6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.849, "y": -0.025 }, { "x": -0.442, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.6, "y": 0.001 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.201 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.001 }, { "x": -0.202, "y": -0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": -0.201 }, { "x": 0.1, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.1, "y": 0.001 }, { "x": -0.202, "y": 0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.001 }, { "x": 0.596, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": -0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C28: C_1u_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R18: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C12: C_1u_0603; cvbs-mipi-bridge-footprints:C_0603_1608Metric
export const Footprint_C12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_1u_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1.6} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C11: C_10n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// TP6: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// R6: R_4k7_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_4k7_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R17: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C16: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// J3: RCA_Jack_KLPX-0848A-2-Y; cvbs-mipi-bridge-footprints:RCA_Jack_KLPX-0848A-2-Y
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="4.799mm" pcbY="0mm" outerHeight="3.2mm" outerWidth="2.4mm" holeHeight="2.2mm" holeWidth="1.4mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.2mm" holeDiameter="2.2mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -13.401, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": -4.15 }, { "x": -3.9, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": 5 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.15 }, { "x": -3.9, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.998 }, { "x": 6.099, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": 5 }, { "x": -3.9, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": -4.998 }, { "x": 6.099, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-6.2} anchorAlignment="bottom_left" text="RCA_Jack_KLPX-0848A-2-Y" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -13.6, "y": 4.42 }, { "x": -4.1, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": -4.4 }, { "x": -13.6, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 5.21 }, { "x": 6.49, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 4.42 }, { "x": -4.1, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -4.4 }, { "x": -13.6, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -5.2 }, { "x": -4.1, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": 5.21 }, { "x": 6.49, "y": -5.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": -5.2 }, { "x": -4.1, "y": -5.2 }]} layer="top"/>
      </footprint>);
// TP8: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// IC5: SN74AUP1G17_SC70; cvbs-mipi-bridge-footprints:SC-70-5
export const Footprint_IC5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.756mm" pcbY="-0.893mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.006mm" pcbY="-0.893mm" layer="top" cornerRadius="0.05mm" width="0.4mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="0.743mm" pcbY="-0.893mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.743mm" pcbY="0.907mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.756mm" pcbY="0.907mm" layer="top" cornerRadius="0.075mm" width="0.6mm" height="0.6mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.006, "y": 0.657 }, { "x": 0.993, "y": 0.657 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.293 }, { "x": -1.006, "y": 0.657 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.006, "y": -0.293 }, { "x": -0.706, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.993, "y": 0.657 }, { "x": 0.993, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.993, "y": -0.593 }, { "x": -0.706, "y": -0.593 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="bottom_left" text="SN74AUP1G17_SC70" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.005} width={2.5} height={2.61} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C24: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R2: R_1k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_1k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C17: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C8: C_1u_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C30: C_10u_0603; cvbs-mipi-bridge-footprints:C_0603_1608Metric
export const Footprint_C30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_10u_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C21: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C31: C_10u_0603; cvbs-mipi-bridge-footprints:C_0603_1608Metric
export const Footprint_C31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_10u_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R9: R_51R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_51R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// TP11: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// FB5: FB_220Z_1.5A_WE-CBF_0805; cvbs-mipi-bridge-footprints:FB_0805_2012Metric
export const Footprint_FB5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.948, "y": 0.681 }, { "x": 0.948, "y": 0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": 0.676 }, { "x": -0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.948, "y": -0.681 }, { "x": 0.948, "y": -0.681 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.948, "y": 0.676 }, { "x": 0.948, "y": -0.676 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.001} pcbY={-1.801} anchorAlignment="bottom_left" text="FB_220Z_1.5A_WE-CBF_0805" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C18: C_10n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// J6: RCA_Jack_KLPX-0848A-2-Y; cvbs-mipi-bridge-footprints:RCA_Jack_KLPX-0848A-2-Y
export const Footprint_J6 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="4.799mm" pcbY="0mm" outerHeight="3.2mm" outerWidth="2.4mm" holeHeight="2.2mm" holeWidth="1.4mm" shape="pill" pcbRotation="90deg"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.2mm" holeDiameter="2.2mm" shape="circle"/>





<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -13.401, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": 4.151 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -13.401, "y": -4.15 }, { "x": -3.9, "y": -4.15 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": 5 }, { "x": -3.9, "y": 4.151 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.15 }, { "x": -3.9, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -3.9, "y": -4.998 }, { "x": 6.099, "y": -4.998 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": 5 }, { "x": -3.9, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 6.099, "y": -4.998 }, { "x": 6.099, "y": 5 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-6.2} anchorAlignment="bottom_left" text="RCA_Jack_KLPX-0848A-2-Y" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -13.6, "y": 4.42 }, { "x": -4.1, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -13.6, "y": -4.4 }, { "x": -13.6, "y": 4.42 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 5.21 }, { "x": 6.49, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": 4.42 }, { "x": -4.1, "y": 5.21 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -4.4 }, { "x": -13.6, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -4.1, "y": -5.2 }, { "x": -4.1, "y": -4.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": 5.21 }, { "x": 6.49, "y": -5.2 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 6.49, "y": -5.2 }, { "x": -4.1, "y": -5.2 }]} layer="top"/>
      </footprint>);
// R27: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// TP15: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// C20: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D2: UCLAMP2501T.TCT; cvbs-mipi-bridge-footprints:SLP1006P2T
export const Footprint_D2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.421mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.425mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.506, "y": 0 }, { "x": -0.156, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": 0.22 }, { "x": -0.13, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": -0.22 }, { "x": 0.174, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0.22 }, { "x": 0.174, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0 }, { "x": -0.13, "y": 0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.184, "y": -0.01 }, { "x": 0.534, "y": -0.01 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.5} anchorAlignment="bottom_left" text="UCLAMP2501T.TCT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.002} width={0.804} height={1.504} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.01} pcbY={0} width={1.73} height={1.15} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C32: C_10u_0603; cvbs-mipi-bridge-footprints:C_0603_1608Metric
export const Footprint_C32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={-1.42757} pcbY={-1.770288} anchorAlignment="bottom_left" text="C_10u_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP7: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// TP12: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// REF**: OSHW-Logo_5.7x6mm_Mask; cvbs-mipi-bridge-footprints:OSHW-Logo_5.7x6mm_Mask
export const Footprint_REF___ = () => (<footprint originalLayer="top">
        <fabricationnotetext pcbX={0} pcbY={-4} anchorAlignment="bottom_left" text="OSHW-Logo_5.7x6mm_Mask" font="tscircuit2024" fontSize={0.7}/>
      </footprint>);
// TP3: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// C23: C_10p_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_10p_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// Y1: Resonator_28.63636MHz_ABM8G; cvbs-mipi-bridge-footprints:Oscillator_SMD_Geyer_KX-7-4Pin_3.2x2.5mm
export const Footprint_Y1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} layer="top" shape="polygon" points={[{ "x": -1.751, "y": -0.399 }, { "x": -0.451, "y": -0.399 }, { "x": -0.451, "y": -1.499 }, { "x": -1.531, "y": -1.499 }, { "x": -1.751, "y": -1.279 }]}/>
<smtpad portHints={["pin2"]} pcbX="1.199mm" pcbY="-0.949mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.199mm" pcbY="0.85mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-1.101mm" pcbY="0.85mm" layer="top" width="1.1mm" height="1.3mm" ccwRotation={90} shape="rotated_rect"/>





<fabricationnotetext pcbX={-1.75} pcbY={-2.548} anchorAlignment="bottom_left" text="Resonator_28.63636MHz_ABM8G" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0.0495} pcbY={-0.0495} width={3.913} height={3.199} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R26: R_470R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_470R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D7: LED_G_0603_KP-1608ZGC; cvbs-mipi-bridge-footprints:LED_0603_1608Metric_G
export const Footprint_D7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>









<fabricationnotepath route={[{ "x": -0.849, "y": -0.025 }, { "x": -0.442, "y": -0.381 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.6, "y": 0.001 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.201 }, { "x": -0.202, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": 0.001 }, { "x": -0.202, "y": -0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.202, "y": -0.201 }, { "x": 0.1, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.1, "y": 0.001 }, { "x": -0.202, "y": 0.201 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": 0.001 }, { "x": 0.596, "y": 0.001 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.198, "y": -0.201 }, { "x": 0.198, "y": 0.101 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_left" text="LED_G_0603_KP-1608ZGC" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.802} height={1.698} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// D4: UCLAMP2501T.TCT; cvbs-mipi-bridge-footprints:SLP1006P2T
export const Footprint_D4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.421mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.425mm" pcbY="0mm" layer="top" width="0.6mm" height="0.55mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.506, "y": 0 }, { "x": -0.156, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": 0.22 }, { "x": -0.13, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.13, "y": -0.22 }, { "x": 0.174, "y": 0 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0.22 }, { "x": 0.174, "y": -0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.174, "y": 0 }, { "x": -0.13, "y": 0.22 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.184, "y": -0.01 }, { "x": 0.534, "y": -0.01 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.5} anchorAlignment="bottom_left" text="UCLAMP2501T.TCT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.002} width={0.804} height={1.504} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0.01} pcbY={0} width={1.73} height={1.15} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP2: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// C14: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C9: C_1u_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R11: R_51R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_51R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C26: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C1: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R23: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// Q4: BSS138PW; cvbs-mipi-bridge-footprints:SC70-3
export const Footprint_Q4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.051mm" pcbY="0.65mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.051mm" pcbY="-0.65mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="1.05mm" pcbY="0mm" layer="top" width="0.6mm" height="0.6mm" ccwRotation={-90} shape="rotated_rect"/>




<fabricationnotetext pcbX={0} pcbY={-2.3} anchorAlignment="bottom_left" text="BSS138PW" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.002} pcbY={-0.001} width={2} height={1.25} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardoutline outline={[{ "x": -1.4, "y": -1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": -0.9, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1.3 }, { "x": 0.9, "y": 1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": 1 }, { "x": -1.4, "y": 1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1 }, { "x": -1.4, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.9, "y": -1.3 }, { "x": -0.9, "y": -1 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 1.3 }, { "x": 0.9, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": 0.4 }, { "x": 1.4, "y": 0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -0.4 }, { "x": 0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.9, "y": -1.3 }, { "x": -0.9, "y": -1.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": 0.4 }, { "x": 1.4, "y": -0.4 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 1.4, "y": -0.4 }, { "x": 0.9, "y": -0.4 }]} layer="top"/>
      </footprint>);
// R30: R_0R_0805; cvbs-mipi-bridge-footprints:R_0805_2012Metric
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" layer="top" cornerRadius="0.15mm" width="1.3mm" height="1.2mm" ccwRotation={-90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.951, "y": 0.682 }, { "x": 0.949, "y": 0.682 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.951, "y": 0.677 }, { "x": -0.951, "y": -0.675 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.951, "y": -0.68 }, { "x": 0.949, "y": -0.68 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.949, "y": 0.677 }, { "x": 0.949, "y": -0.675 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.8} anchorAlignment="bottom_left" text="R_0R_0805" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={3.9} height={1.8} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R22: R_0R_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// TP16: TP_1.5mm_SMD; cvbs-mipi-bridge-footprints:TP_SMD_1.5mm
export const Footprint_TP16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7}/>

      </footprint>);
// C5: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R28: R_100k_0402; cvbs-mipi-bridge-footprints:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C10: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// C13: C_100n_0402; cvbs-mipi-bridge-footprints:C_0402_1005Metric
export const Footprint_C13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// MP3: Spacer_Drill3mm_H3mm_9774030243R; cvbs-mipi-bridge-footprints:Spacer_Drill3mm_H3mm_9774030243R
export const Footprint_MP3 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.5mm" holeDiameter="3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="2.65mm" shape="circle"/>
<fabricationnotepath route={[{ "x": -2.175, "y": 0 }, { "x": -2.009438, "y": -0.832336 }, { "x": -1.537957, "y": -1.537957 }, { "x": -0.832336, "y": -2.009438 }, { "x": 0, "y": -2.175 }, { "x": 0.832336, "y": -2.009438 }, { "x": 1.537957, "y": -1.537957 }, { "x": 2.009438, "y": -0.832336 }, { "x": 2.175, "y": 0 }, { "x": 2.009438, "y": 0.832336 }, { "x": 1.537957, "y": 1.537957 }, { "x": 0.832336, "y": 2.009438 }, { "x": 0, "y": 2.175 }, { "x": -0.832336, "y": 2.009438 }, { "x": -1.537957, "y": 1.537957 }, { "x": -2.009438, "y": 0.832336 }, { "x": -2.175, "y": 0 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.25} pcbY={3.75} anchorAlignment="bottom_left" text="Spacer_Drill3mm_H3mm_9774030243R" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.9} layer="bottom"/>
      </footprint>);
// MP1: Spacer_Drill3mm_H3mm_9774030243R; cvbs-mipi-bridge-footprints:Spacer_Drill3mm_H3mm_9774030243R
export const Footprint_MP1 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.5mm" holeDiameter="3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="2.65mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 0, "y": 2.175 }, { "x": -0.832336, "y": 2.009438 }, { "x": -1.537957, "y": 1.537957 }, { "x": -2.009438, "y": 0.832336 }, { "x": -2.175, "y": 0 }, { "x": -2.009438, "y": -0.832336 }, { "x": -1.537957, "y": -1.537957 }, { "x": -0.832336, "y": -2.009438 }, { "x": 0, "y": -2.175 }, { "x": 0.832336, "y": -2.009438 }, { "x": 1.537957, "y": -1.537957 }, { "x": 2.009438, "y": -0.832336 }, { "x": 2.175, "y": 0 }, { "x": 2.009438, "y": 0.832336 }, { "x": 1.537957, "y": 1.537957 }, { "x": 0.832336, "y": 2.009438 }, { "x": 0, "y": 2.175 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.25} pcbY={3.75} anchorAlignment="bottom_left" text="Spacer_Drill3mm_H3mm_9774030243R" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.9} layer="bottom"/>
      </footprint>);
// MP4: Spacer_Drill3mm_H3mm_9774030243R; cvbs-mipi-bridge-footprints:Spacer_Drill3mm_H3mm_9774030243R
export const Footprint_MP4 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.5mm" holeDiameter="3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="2.65mm" shape="circle"/>
<fabricationnotepath route={[{ "x": -2.175, "y": 0 }, { "x": -2.009438, "y": -0.832336 }, { "x": -1.537957, "y": -1.537957 }, { "x": -0.832336, "y": -2.009438 }, { "x": 0, "y": -2.175 }, { "x": 0.832336, "y": -2.009438 }, { "x": 1.537957, "y": -1.537957 }, { "x": 2.009438, "y": -0.832336 }, { "x": 2.175, "y": 0 }, { "x": 2.009438, "y": 0.832336 }, { "x": 1.537957, "y": 1.537957 }, { "x": 0.832336, "y": 2.009438 }, { "x": 0, "y": 2.175 }, { "x": -0.832336, "y": 2.009438 }, { "x": -1.537957, "y": 1.537957 }, { "x": -2.009438, "y": 0.832336 }, { "x": -2.175, "y": 0 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.25} pcbY={3.75} anchorAlignment="bottom_left" text="Spacer_Drill3mm_H3mm_9774030243R" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.9} layer="bottom"/>
      </footprint>);
// MP2: Spacer_Drill3mm_H3mm_9774030243R; cvbs-mipi-bridge-footprints:Spacer_Drill3mm_H3mm_9774030243R
export const Footprint_MP2 = () => (<footprint originalLayer="bottom">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.5mm" holeDiameter="3mm" shape="circle"/>
<smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="2.65mm" shape="circle"/>
<fabricationnotepath route={[{ "x": 0, "y": -2.175 }, { "x": 0.832336, "y": -2.009438 }, { "x": 1.537957, "y": -1.537957 }, { "x": 2.009438, "y": -0.832336 }, { "x": 2.175, "y": 0 }, { "x": 2.009438, "y": 0.832336 }, { "x": 1.537957, "y": 1.537957 }, { "x": 0.832336, "y": 2.009438 }, { "x": 0, "y": 2.175 }, { "x": -0.832336, "y": 2.009438 }, { "x": -1.537957, "y": 1.537957 }, { "x": -2.009438, "y": 0.832336 }, { "x": -2.175, "y": 0 }, { "x": -2.009438, "y": -0.832336 }, { "x": -1.537957, "y": -1.537957 }, { "x": -0.832336, "y": -2.009438 }, { "x": 0, "y": -2.175 }]} strokeWidth={0.1} layer="bottom"/>
<fabricationnotetext pcbX={-2.25} pcbY={3.75} anchorAlignment="bottom_left" text="Spacer_Drill3mm_H3mm_9774030243R" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={2.9} layer="bottom"/>
      </footprint>);
