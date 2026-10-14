// Antmicro dual IPEX CSI interposer
// Source: https://github.com/antmicro/dual-ipex-csi-interposer
// Commit: 6b6bd0af5aafe13c02377d534a23a6373922f350; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// J1: WE_68715014522; dual-ipex-csi-interposer-footprints:WE_68715014522
export const Footprint_J1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-12.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-11.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-11.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-10.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-10.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-9.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-9.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-8.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-8.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-7.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-7.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-6.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-6.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-5.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-5.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="-4.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="-4.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="-3.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="-3.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="-2.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="-2.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="-1.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="-1.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="-0.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="-0.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="0.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="0.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="1.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="1.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="2.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="2.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin32"]} pcbX="3.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin33"]} pcbX="3.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin34"]} pcbX="4.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin35"]} pcbX="4.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin36"]} pcbX="5.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin37"]} pcbX="5.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin38"]} pcbX="6.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin39"]} pcbX="6.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin40"]} pcbX="7.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin41"]} pcbX="7.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin42"]} pcbX="8.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin43"]} pcbX="8.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin44"]} pcbX="9.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin45"]} pcbX="9.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin46"]} pcbX="10.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin47"]} pcbX="10.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin48"]} pcbX="11.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin49"]} pcbX="11.75mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin50"]} pcbX="12.25mm" pcbY="-0.6mm" layer="top" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-14.2mm" pcbY="-2.7mm" layer="top" width="2.5mm" height="3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="14.2mm" pcbY="1.25mm" layer="top" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="14.2mm" pcbY="-2.45mm" layer="top" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin51"]} pcbX="-14.2mm" pcbY="1.25mm" layer="top" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>












<fabricationnotetext pcbX={-0.3} pcbY={-6.65} anchorAlignment="center" text="WE_68715014522" font="tscircuit2024" fontSize={1}/>

<courtyardoutline outline={[{ "x": 15.85, "y": -5.3 }, { "x": 15.85, "y": 3.7 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -15.85, "y": -5.3 }, { "x": 15.85, "y": -5.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -15.85, "y": 3.7 }, { "x": -15.85, "y": -5.3 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 15.85, "y": 3.7 }, { "x": -15.85, "y": 3.7 }]} layer="top"/>
      </footprint>);
// N1: oshw_logo; dual-ipex-csi-interposer-footprints:oshw-logo
export const Footprint_N1 = () => (<footprint />);
// N2: antmicro_logo; dual-ipex-csi-interposer-footprints:antmicro-logo_scaled_12mm
export const Footprint_N2 = () => (<footprint />);
// MP4: PCB_Mount_Hole_2.2_4.5; dual-ipex-csi-interposer-footprints:mounting-hole-2.2mm
export const Footprint_MP4 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.7mm" holeDiameter="2.2mm" shape="circle"/>
<fabricationnotetext pcbX={-0.1524} pcbY={4.1529} anchorAlignment="center" text="PCB_Mount_Hole_2.2_4.5" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// MP2: PCB_Mount_Hole_2.2_4.5; dual-ipex-csi-interposer-footprints:mounting-hole-2.2mm
export const Footprint_MP2 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.7mm" holeDiameter="2.2mm" shape="circle"/>
<fabricationnotetext pcbX={-0.1524} pcbY={4.1529} anchorAlignment="center" text="PCB_Mount_Hole_2.2_4.5" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// MP1: PCB_Mount_Hole_2.2_4.5; dual-ipex-csi-interposer-footprints:mounting-hole-2.2mm
export const Footprint_MP1 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.7mm" holeDiameter="2.2mm" shape="circle"/>
<fabricationnotetext pcbX={-0.1524} pcbY={4.1529} anchorAlignment="center" text="PCB_Mount_Hole_2.2_4.5" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// R1: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R2: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// TP8: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP7: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP1: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP2: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP5: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP4: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP3: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP6: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// MP3: PCB_Mount_Hole_2.2_4.5; dual-ipex-csi-interposer-footprints:mounting-hole-2.2mm
export const Footprint_MP3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" outerDiameter="3.7mm" holeDiameter="2.2mm" shape="circle"/>
<fabricationnotetext pcbX={-0.1524} pcbY={4.1529} anchorAlignment="center" text="PCB_Mount_Hole_2.2_4.5" font="tscircuit2024" fontSize={1}/>
      </footprint>);
// R7: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// C1: C_100n_0402; dual-ipex-csi-interposer-footprints:0402-cap
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R8: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R6: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// TP9: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// TP10: TP_SMD1MM; dual-ipex-csi-interposer-footprints:Testpoint_smd_1mm
export const Footprint_TP10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0.0508mm" layer="top" radius="0.5mm" shape="circle"/>

      </footprint>);
// R5: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// C2: C_100n_0402; dual-ipex-csi-interposer-footprints:0402-cap
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="C_100n_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R4: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R3: R_0R_0402; dual-ipex-csi-interposer-footprints:0402-res
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.485mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.1}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -0.25 }, { "x": -0.5, "y": 0.25 }]} strokeWidth={0.1}/>
<fabricationnotetext pcbX={0} pcbY={-1.17} anchorAlignment="center" text="R_0R_0402" font="tscircuit2024" fontSize={1}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.25}/>

<courtyardoutline outline={[{ "x": 0.93, "y": 0.47 }, { "x": 0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.93, "y": -0.47 }, { "x": -0.93, "y": -0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": -0.47 }, { "x": -0.93, "y": 0.47 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.93, "y": 0.47 }, { "x": 0.93, "y": 0.47 }]} layer="top"/>
      </footprint>);
// J2: MSAK24025P30; dual-ipex-csi-interposer-footprints:MSAK24025P30
export const Footprint_J2 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-7.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-6.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-6.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-5.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-5.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-4.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-4.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-1.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-1.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-0.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-0.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="0.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="1.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="1.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="3.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="3.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="4.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="4.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="5.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="5.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="6.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="6.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="7.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="9.18mm" pcbY="2.46mm" layer="bottom" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-9.18mm" pcbY="2.46mm" layer="bottom" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>

<courtyardoutline outline={[{ "x": -11, "y": -0.9 }, { "x": 11, "y": -0.9 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -11, "y": 5 }, { "x": -11, "y": -0.9 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 11, "y": -0.9 }, { "x": 11, "y": 5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -11, "y": 5 }, { "x": 11, "y": 5 }]} layer="bottom"/>
      </footprint>);
// J3: MSAK24025P30; dual-ipex-csi-interposer-footprints:MSAK24025P30
export const Footprint_J3 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-7.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-6.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-6.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-5.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-5.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="-4.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="-4.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="-3.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="-3.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="-2.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin11"]} pcbX="-2.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin12"]} pcbX="-1.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin13"]} pcbX="-1.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin14"]} pcbX="-0.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin15"]} pcbX="-0.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin16"]} pcbX="0.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin17"]} pcbX="0.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin18"]} pcbX="1.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin19"]} pcbX="1.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin20"]} pcbX="2.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin21"]} pcbX="2.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin22"]} pcbX="3.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin23"]} pcbX="3.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin24"]} pcbX="4.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin25"]} pcbX="4.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin26"]} pcbX="5.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin27"]} pcbX="5.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin28"]} pcbX="6.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin29"]} pcbX="6.75mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin30"]} pcbX="7.25mm" pcbY="0.6mm" layer="bottom" width="1.2mm" height="0.3mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="-9.18mm" pcbY="2.46mm" layer="bottom" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin31"]} pcbX="9.18mm" pcbY="2.46mm" layer="bottom" width="3mm" height="2.7mm" ccwRotation={-90} shape="rotated_rect"/>

<courtyardoutline outline={[{ "x": -11, "y": 5 }, { "x": 11, "y": 5 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -11, "y": -0.9 }, { "x": 11, "y": -0.9 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": -11, "y": 5 }, { "x": -11, "y": -0.9 }]} layer="bottom"/>
<courtyardoutline outline={[{ "x": 11, "y": -0.9 }, { "x": 11, "y": 5 }]} layer="bottom"/>
      </footprint>);
