// Antmicro PMOD I3C sensor board
// Source: https://github.com/antmicro/pmod-i3c-sensor-board
// Commit: 5ee5d34ff918422fe7af59f7ffdc9d4bdabf18a7; license: Apache-2.0. See LICENSE.upstream.
// Native component/footprint/net TSX. Original copper routing is omitted.
import type {} from '@tscircuit/core';
// U5: MMC5603NJ; antmicro-footprints:WLP-4_0.82x0.82mm
export const Footprint_U5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.2mm" pcbY="0.2mm" layer="top" radius="0.115mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="0.2mm" pcbY="0.2mm" layer="top" radius="0.115mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-0.2mm" pcbY="-0.2mm" layer="top" radius="0.115mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="0.2mm" pcbY="-0.2mm" layer="top" radius="0.115mm" shape="circle"/>







<fabricationnotetext pcbX={-1.025} pcbY={-1.735} anchorAlignment="bottom_left" text="MMC5603NJ" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="bottom_left" text="https://www.memsic.com/Public/Uploads/uploadfile/files/20220119/MMC5603NJDatasheetRev.B.pdf" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="bottom_left" text="I2C/I3C, 3-axis Magnetic Sensor, BGA WLP-4, VDD 1.6 V to 3.6 V" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.025} pcbY={-2.935} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.025} pcbY={-5.335} anchorAlignment="bottom_left" text="U5" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.025} pcbY={-4.135} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.61, "y": 0.61 }, { "x": 0.61, "y": 0.61 }, { "x": 0.61, "y": -0.61 }, { "x": -0.61, "y": -0.61 }]} layer="top"/>
      </footprint>);
// F1: F_20mA_0603; antmicro-footprints:F_0603_1608Metric
export const Footprint_F1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="1mm" height="0.8mm" ccwRotation={90} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": -0.803, "y": -0.406 }, { "x": -0.803, "y": 0.408 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": -0.406 }, { "x": -0.803, "y": -0.406 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.408 }, { "x": 0.8, "y": -0.406 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.408 }, { "x": -0.803, "y": 0.408 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.700001} anchorAlignment="top_right" text="F_20mA_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.653001} pcbY={-5.9} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.653} pcbY={-4.6} anchorAlignment="top_right" text="F1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.653} pcbY={-3.162} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R1: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R1" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// REF**: LOGO; antmicro-footprints:antmicro-logo_scaled_12mm
export const Footprint_REF__ = () => (<footprint originalLayer="top">
        <fabricationnotetext pcbX={-5.878} pcbY={-4.324} anchorAlignment="bottom_left" text="REF**" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-5.878} pcbY={-6.724} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-5.878} pcbY={-5.524} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<courtyardrect pcbX={0.04} pcbY={0.02} width={14.604} height={6.544} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R30: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R30 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="R_0R_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-5.9} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-3.898} anchorAlignment="bottom_left" text="R30" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-4.9} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R21: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R21 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R21" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R12: R_2k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R12 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_2k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R12" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R33: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R33 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="R_0R_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-3.898} anchorAlignment="bottom_left" text="R33" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-5.9} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-4.9} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R60: R_200R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R60 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_200R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R60" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R8: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R8" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// U7: TPD4E05U06QDQARQ1; antmicro-footprints:USON-10_2.5x1mm_P0.5mm
export const Footprint_U7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.387mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.387mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.387mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.55mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.387mm" pcbY="-0.498mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.387mm" pcbY="-0.998mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.385mm" pcbY="-0.998mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.385mm" pcbY="-0.498mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.385mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.55mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.385mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.385mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.498, "y": 1.25 }, { "x": 0.498, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.498, "y": 1.25 }, { "x": -0.25, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 1.25 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.249 }, { "x": 0.498, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -0.5, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.018} pcbY={-2.499} anchorAlignment="top_right" text="TPD4E05U06QDQARQ1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.802} pcbY={-4.498} anchorAlignment="top_right" text="U7" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.802} pcbY={-6.9} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.802} pcbY={-5.7} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.0005} width={1.6} height={2.999} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R59: R_100k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R59 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_100k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R59" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// Q2: DMC31D5UDJ; antmicro-footprints:SOT-963
export const Footprint_Q2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.45mm" pcbY="0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.45mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.45mm" pcbY="-0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.45mm" pcbY="-0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.45mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.45mm" pcbY="0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": 0, "y": 0.5 }, { "x": -0.4, "y": 0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.001001} pcbY={-1.999} anchorAlignment="bottom_left" text="DMC31D5UDJ" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1} pcbY={-5.199} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1} pcbY={-6.399} anchorAlignment="bottom_left" text="Q2" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1} pcbY={-3.999} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.5} height={1.5} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R29: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R29 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R29" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// D1: ESD9X5.0ST5G; antmicro-footprints:SOD-923
export const Footprint_D1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.438mm" pcbY="0mm" layer="top" cornerRadius="0.040625mm" width="0.325mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.436mm" pcbY="0mm" layer="top" cornerRadius="0.040625mm" width="0.325mm" height="0.4mm" ccwRotation={-90} shape="rotated_rect"/>







<fabricationnotepath route={[{ "x": -0.202, "y": 0.3 }, { "x": -0.202, "y": -0.298 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.3} anchorAlignment="bottom_left" text="ESD9X5.0ST5G" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.68} pcbY={-4.5} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.68} pcbY={-3.3} anchorAlignment="bottom_left" text="D1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.68} pcbY={-5.7} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={0.598} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.36} height={0.82} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R2: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R2" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// J3: PinHeader_2x6_P2.54mm_Drill1.1mm_Horizontal; antmicro-footprints:PinHeader_2x6_P2.54mm_Drill1.1mm_Horizontal
export const Footprint_J3 = () => (<footprint originalLayer="top">
        <platedhole portHints={["pin1"]} pcbX="0mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.1mm" rectPadWidth="1.725mm" rectPadHeight="1.725mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="180deg" shape="circular_hole_with_rect_pad"/>
<platedhole portHints={["pin2"]} pcbX="0mm" pcbY="-2.54mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin5"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin6"]} pcbX="5.08mm" pcbY="-2.54mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin7"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin8"]} pcbX="7.62mm" pcbY="-2.54mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin9"]} pcbX="10.16mm" pcbY="0mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin10"]} pcbX="10.16mm" pcbY="-2.54mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin11"]} pcbX="12.7mm" pcbY="0mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>
<platedhole portHints={["pin12"]} pcbX="12.7mm" pcbY="-2.54mm" outerDiameter="1.725mm" holeDiameter="1.1mm" shape="circle"/>









<fabricationnotetext pcbX={-1.62} pcbY={-14.2} anchorAlignment="top_right" text="PinHeader_2x6_P2.54mm_Drill1.1mm_Horizontal" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.77} pcbY={-16.47} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.77} pcbY={-17.67} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.77} pcbY={-15.270001} anchorAlignment="top_right" text="J3" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={6.35} pcbY={-6.005} width={16.24} height={14.53} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R15: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R15 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R15" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R31: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R31 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="R_0R_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-3.898} anchorAlignment="bottom_left" text="R31" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-4.9} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-5.9} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP4: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-5.101} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-3.901} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-2.7} anchorAlignment="bottom_left" text="TP4" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// TP1: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-5.101} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-3.901} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-2.7} anchorAlignment="bottom_left" text="TP1" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// R36: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R36 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="R_0R_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-4.9} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-3.898} anchorAlignment="bottom_left" text="R36" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-5.9} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R7: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R7" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R6: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R6" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// F2: F_20mA_0603; antmicro-footprints:F_0603_1608Metric
export const Footprint_F2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" ccwRotation={-180} shape="rotated_rect"/>


<fabricationnotepath route={[{ "x": 0.8, "y": -0.406 }, { "x": -0.803, "y": -0.406 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.408 }, { "x": 0.8, "y": -0.406 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.8, "y": 0.408 }, { "x": -0.803, "y": 0.408 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.803, "y": -0.406 }, { "x": -0.803, "y": 0.408 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-1.700001} anchorAlignment="top_right" text="F_20mA_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.653} pcbY={-4.6} anchorAlignment="top_right" text="F2" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.653} pcbY={-3.162} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.653001} pcbY={-5.9} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R3: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R3" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// D3: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D3 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_left" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.4224} pcbY={-5.999} anchorAlignment="bottom_left" text="D3" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.4224} pcbY={-3.599} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.4224} pcbY={-4.799} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// Q4: DMC2400UV-7; antmicro-footprints:SOT-563
export const Footprint_Q4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.749mm" pcbY="0.499mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.749mm" pcbY="-0.001mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.749mm" pcbY="-0.497mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.747mm" pcbY="-0.497mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.747mm" pcbY="-0.001mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.747mm" pcbY="0.499mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 0.651, "y": -0.847 }, { "x": -0.653, "y": -0.847 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.651, "y": 0.849 }, { "x": 0.651, "y": -0.847 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.453, "y": 0.849 }, { "x": 0.651, "y": 0.849 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.453, "y": 0.849 }, { "x": -0.653, "y": 0.678 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.653, "y": 0.678 }, { "x": -0.653, "y": -0.847 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="top_right" text="DMC2400UV-7" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.299} pcbY={-4.924} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.299} pcbY={-7.323} anchorAlignment="top_right" text="Q4" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.299} pcbY={-6.124} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={-0.005} pcbY={0.01} width={2.39} height={2.22} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C5: C_2u2_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_2u2_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="top_right" text="C5" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R19: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R19 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R19" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R34: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R34 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="R_0R_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-5.9} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-3.898} anchorAlignment="bottom_left" text="R34" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-4.9} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// TP3: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-3.901} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-5.101} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-2.7} anchorAlignment="bottom_left" text="TP3" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// U6: AP7366_SOT; antmicro-footprints:SOT-23-5
export const Footprint_U6 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-1.351mm" pcbY="0.951mm" layer="top" width="0.55mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-1.351mm" pcbY="0mm" layer="top" width="0.55mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-1.351mm" pcbY="-0.949mm" layer="top" width="0.55mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="1.35mm" pcbY="-0.949mm" layer="top" width="0.55mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="1.35mm" pcbY="0.951mm" layer="top" width="0.55mm" height="1mm" ccwRotation={-90} shape="rotated_rect"/>










<fabricationnotepath route={[{ "x": -0.398, "y": 1.526 }, { "x": -0.874, "y": 1.05 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.002} pcbY={-2.799} anchorAlignment="bottom_left" text="AP7366_SOT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.898} pcbY={-4.299} anchorAlignment="bottom_left" text="U6" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.898} pcbY={-6.7} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.898} pcbY={-5.499} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0.0005} pcbY={0.001} width={3.048} height={1.747} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0.005} width={3.8} height={3.51} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R20: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R20 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R20" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R57: R_33k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R57 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_33k2_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R57" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C2: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="top_right" text="C2" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R24: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R24 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R24" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U2: SN74LVC1G240_SC70; antmicro-footprints:SOT-353
export const Footprint_U2 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="bottom_left" text="SN74LVC1G240_SC70" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.206} pcbY={-5.227} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.206} pcbY={-4.027} anchorAlignment="bottom_left" text="U2" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.206} pcbY={-6.427} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.005} width={2.5} height={2.91} layer="top" pcbRotation="0deg"/>
      </footprint>);
// Q5: DMG1012T-7; antmicro-footprints:SOT-523
export const Footprint_Q5 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={-1.12} pcbY={-5.024} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.12} pcbY={-6.224} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.12} pcbY={-3.824} anchorAlignment="bottom_left" text="Q5" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": 1.1, "y": 1.16 }, { "x": 1.1, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.16 }, { "x": 1.1, "y": 1.16 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": 1.16 }, { "x": -1.12, "y": -1.15 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -1.12, "y": -1.15 }, { "x": 1.1, "y": -1.15 }]} layer="top"/>
      </footprint>);
// C4: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="bottom_left" text="C4" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R9: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R9" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R22: R_2k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R22 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_2k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R22" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R58: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R58 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R58" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R27: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R27 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R27" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R51: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R51 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R51" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C9: C_1u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C9 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="top_right" text="C9" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R10: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R10" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R26: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R26 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R26" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R13: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R13 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R13" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// D2: LED_G_0603_LTST-C190GKT; antmicro-footprints:LED_0603_1608Metric_G
export const Footprint_D2 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={-0.001} pcbY={-1.599} anchorAlignment="bottom_left" text="LED_G_0603_LTST-C190GKT" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.4224} pcbY={-3.599} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.4224} pcbY={-4.799} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.4224} pcbY={-5.999} anchorAlignment="bottom_left" text="D2" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={-0.001} pcbY={0.001} width={1.698} height={0.802} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R48: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R48 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R48" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U8: TPD4E05U06QDQARQ1; antmicro-footprints:USON-10_2.5x1mm_P0.5mm
export const Footprint_U8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.387mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.387mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.387mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.55mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="-0.387mm" pcbY="-0.498mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="-0.387mm" pcbY="-0.998mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.385mm" pcbY="-0.998mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin7"]} pcbX="0.385mm" pcbY="-0.498mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin8"]} pcbX="0.385mm" pcbY="0mm" layer="top" cornerRadius="0.05mm" width="0.55mm" height="0.4mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin9"]} pcbX="0.385mm" pcbY="0.5mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin10"]} pcbX="0.385mm" pcbY="1mm" layer="top" cornerRadius="0.03125mm" width="0.55mm" height="0.25mm" ccwRotation={-180} shape="rotated_rect"/>



<fabricationnotepath route={[{ "x": 0.498, "y": 1.25 }, { "x": 0.498, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.498, "y": 1.25 }, { "x": -0.25, "y": 1.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.25, "y": 1.25 }, { "x": -0.5, "y": 1 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": -1.249 }, { "x": 0.498, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.5, "y": 1 }, { "x": -0.5, "y": -1.249 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.018} pcbY={-2.499} anchorAlignment="top_right" text="TPD4E05U06QDQARQ1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.802} pcbY={-6.9} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.802} pcbY={-4.498} anchorAlignment="top_right" text="U8" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.802} pcbY={-5.7} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.0005} width={1.6} height={2.999} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// U4: BMA580; antmicro-footprints:Bosch_WLCSP-6_0.84x1.18mm
export const Footprint_U4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.2mm" pcbY="0.4mm" layer="top" radius="0.09mm" shape="circle"/>
<smtpad portHints={["pin2"]} pcbX="-0.2mm" pcbY="0mm" layer="top" radius="0.09mm" shape="circle"/>
<smtpad portHints={["pin3"]} pcbX="-0.2mm" pcbY="-0.4mm" layer="top" radius="0.09mm" shape="circle"/>
<smtpad portHints={["pin4"]} pcbX="0.2mm" pcbY="-0.4mm" layer="top" radius="0.09mm" shape="circle"/>
<smtpad portHints={["pin5"]} pcbX="0.2mm" pcbY="0mm" layer="top" radius="0.09mm" shape="circle"/>
<smtpad portHints={["pin6"]} pcbX="0.2mm" pcbY="0.4mm" layer="top" radius="0.09mm" shape="circle"/>





<fabricationnotepath route={[{ "x": 0.419, "y": -0.584 }, { "x": 0.419, "y": 0.584 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.419, "y": 0.584 }, { "x": -0.419, "y": 0.584 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.219, "y": 0.584 }, { "x": -0.419, "y": 0.384 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.419, "y": -0.584 }, { "x": 0.419, "y": -0.584 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.419, "y": 0.584 }, { "x": -0.419, "y": -0.584 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-0.67} pcbY={-1.94} anchorAlignment="bottom_left" text="BMA580" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.65} pcbY={-6.7} anchorAlignment="top_right" text="https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bma580-ds000.pdf" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="top_right" text="SPI/I2C/I3C, 3-axis Accelerometer, BGA 6-WLCSP, VDD 1.6V - 3.6V" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.67} pcbY={-5.54} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.67} pcbY={-3.14} anchorAlignment="bottom_left" text="U4" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.67} pcbY={-4.34} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": 0.67, "y": -0.84 }, { "x": -0.67, "y": -0.84 }]} layer="top"/>
<courtyardoutline outline={[{ "x": 0.67, "y": 0.84 }, { "x": 0.67, "y": -0.84 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.67, "y": -0.84 }, { "x": -0.67, "y": 0.84 }]} layer="top"/>
<courtyardoutline outline={[{ "x": -0.67, "y": 0.84 }, { "x": 0.67, "y": 0.84 }]} layer="top"/>
      </footprint>);
// C8: C_1u_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C8 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="top_right" text="C_1u_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="top_right" text="C8" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// R5: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R5 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": -0.5, "y": -0.25 }, { "x": 0.5, "y": -0.25 }, { "x": 0.5, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R5" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": -0.925, "y": -0.47 }, { "x": 0.925, "y": -0.47 }, { "x": 0.925, "y": 0.47 }]} layer="top"/>
      </footprint>);
// R32: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R32 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R32" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R17: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R17 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R17" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R28: R_200R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R28 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_200R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R28" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R25: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R25 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R25" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP2: TP_0.75mm_SMD; antmicro-footprints:TP_SMD_0.75mm
export const Footprint_TP2 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="top" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={-1.2} anchorAlignment="bottom_left" text="TP_0.75mm_SMD" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-5.101} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-3.901} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.4} pcbY={-2.7} anchorAlignment="bottom_left" text="TP2" font="tscircuit2024" fontSize={0.7}/>

<courtyardcircle pcbX={0} pcbY={0} radius={0.475} layer="top"/>
      </footprint>);
// Q3: DMC2400UV-7; antmicro-footprints:SOT-563
export const Footprint_Q3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.749mm" pcbY="0.499mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.749mm" pcbY="-0.001mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.749mm" pcbY="-0.497mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin4"]} pcbX="0.747mm" pcbY="-0.497mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin5"]} pcbX="0.747mm" pcbY="-0.001mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin6"]} pcbX="0.747mm" pcbY="0.499mm" layer="top" cornerRadius="0.0375mm" width="0.6mm" height="0.3mm" ccwRotation={-180} shape="rotated_rect"/>








<fabricationnotepath route={[{ "x": 0.651, "y": -0.847 }, { "x": -0.653, "y": -0.847 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.651, "y": 0.849 }, { "x": 0.651, "y": -0.847 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.453, "y": 0.849 }, { "x": 0.651, "y": 0.849 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.453, "y": 0.849 }, { "x": -0.653, "y": 0.678 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.653, "y": 0.678 }, { "x": -0.653, "y": -0.847 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2} anchorAlignment="top_right" text="DMC2400UV-7" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.299} pcbY={-4.924} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.299} pcbY={-6.124} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.299} pcbY={-7.323} anchorAlignment="top_right" text="Q3" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={-0.005} pcbY={0.01} width={2.39} height={2.22} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// R23: R_2k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R23 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_2k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R23" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R55: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R55 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R55" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R37: R_0R_0603; antmicro-footprints:R_0603_1608Metric
export const Footprint_R37 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.7mm" pcbY="0mm" layer="top" cornerRadius="0.08mm" width="0.8mm" height="1mm" shape="rect"/>


<fabricationnotetext pcbX={0} pcbY={-1.6} anchorAlignment="bottom_left" text="R_0R_0603" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-5.9} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-4.9} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.25} pcbY={-3.898} anchorAlignment="bottom_left" text="R37" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1.6} height={0.8} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={2.5} height={1.3} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R38: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R38 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R38" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// U3: SN74LVC1G240_SC70; antmicro-footprints:SOT-353
export const Footprint_U3 = () => (<footprint originalLayer="top">
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
<fabricationnotetext pcbX={0} pcbY={-2.4} anchorAlignment="bottom_left" text="SN74LVC1G240_SC70" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.206} pcbY={-4.027} anchorAlignment="bottom_left" text="U3" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.206} pcbY={-6.427} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.206} pcbY={-5.227} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0.005} width={2.5} height={2.91} layer="top" pcbRotation="0deg"/>
      </footprint>);
// U1: P3T1755DP/Q900Z; antmicro-footprints:TSSOP-8_3x3mm_P0.65mm
export const Footprint_U1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-2.148mm" pcbY="0.962mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-2.148mm" pcbY="0.313mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-2.148mm" pcbY="-0.338mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="-2.148mm" pcbY="-0.987mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="2.151mm" pcbY="-0.987mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="2.151mm" pcbY="-0.338mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin7"]} pcbX="2.151mm" pcbY="0.313mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>
<smtpad portHints={["pin8"]} pcbX="2.151mm" pcbY="0.962mm" layer="top" cornerRadius="0.05mm" width="1.47mm" height="0.4mm" shape="rect"/>



<fabricationnotepath route={[{ "x": -1.55, "y": 0.937 }, { "x": -1.55, "y": -1.561 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.55, "y": 0.937 }, { "x": -0.949, "y": 1.539 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -1.55, "y": -1.561 }, { "x": 1.552, "y": -1.561 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.949, "y": 1.539 }, { "x": 1.552, "y": 1.539 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 1.552, "y": 1.539 }, { "x": 1.552, "y": -1.561 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0} pcbY={-2.8} anchorAlignment="bottom_left" text="P3T1755DP/Q900Z" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.789} pcbY={-7.78} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.789} pcbY={-6.58} anchorAlignment="bottom_left" text="U1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1.789} pcbY={-8.98} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={-0.011} width={6.3} height={3.6} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R54: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R54 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R54" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R16: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R16 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R16" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C1: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="bottom_left" text="C1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R14: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R14 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R14" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="180deg"/>
      </footprint>);
// C10: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C10 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="bottom_left" text="C10" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// Q1: DMC31D5UDJ; antmicro-footprints:SOT-963
export const Footprint_Q1 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.45mm" pcbY="0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="-0.45mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin3"]} pcbX="-0.45mm" pcbY="-0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin4"]} pcbX="0.45mm" pcbY="-0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin5"]} pcbX="0.45mm" pcbY="0mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>
<smtpad portHints={["pin6"]} pcbX="0.45mm" pcbY="0.35mm" layer="top" cornerRadius="0.025mm" width="0.2mm" height="0.2mm" shape="rect"/>



<fabricationnotepath route={[{ "x": 0, "y": 0.5 }, { "x": -0.4, "y": 0.1 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={0.001001} pcbY={-1.999} anchorAlignment="bottom_left" text="DMC31D5UDJ" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1} pcbY={-6.399} anchorAlignment="bottom_left" text="Q1" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1} pcbY={-3.999} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-1} pcbY={-5.199} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.8} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.5} height={1.5} layer="top" pcbRotation="0deg"/>
      </footprint>);
// R4: R_10k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R4 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_10k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R4" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R11: R_2k_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R11 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_2k_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R11" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// C3: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C3 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" shape="rect"/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="bottom_left" text="C3" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="0deg"/>
      </footprint>);
// C7: C_100n_0402; antmicro-footprints:C_0402_1005Metric
export const Footprint_C7 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": 0.504, "y": 0.25 }, { "x": 0.504, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": 0.25 }, { "x": 0.504, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": 0.504, "y": -0.248 }, { "x": -0.494, "y": -0.248 }]} strokeWidth={0.15}/>
<fabricationnotepath route={[{ "x": -0.494, "y": -0.248 }, { "x": -0.494, "y": 0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.022927} pcbY={-2.155213} anchorAlignment="bottom_left" text="C_100n_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-3.399} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-5.799} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.939} pcbY={-4.599} anchorAlignment="bottom_left" text="C7" font="tscircuit2024" fontSize={0.7}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R56: R_41k2_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R56 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={-90} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="bottom_left" text="R_41k2_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="bottom_left" text="R56" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={0.5} height={1} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-180deg"/>
      </footprint>);
// R35: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R35 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.64mm" height="0.59mm" ccwRotation={90} shape="rotated_rect"/>
<fabricationnotepath route={[{ "x": -0.5, "y": 0.25 }, { "x": 0.5, "y": 0.25 }, { "x": 0.5, "y": -0.25 }, { "x": -0.5, "y": -0.25 }]} strokeWidth={0.15}/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772046} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.949999} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R35" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>

<courtyardoutline outline={[{ "x": -0.925, "y": 0.47 }, { "x": 0.925, "y": 0.47 }, { "x": 0.925, "y": -0.47 }, { "x": -0.925, "y": -0.47 }]} layer="top"/>
      </footprint>);
// R18: R_0R_0402; antmicro-footprints:R_0402_1005Metric
export const Footprint_R18 = () => (<footprint originalLayer="top">
        <smtpad portHints={["pin1"]} pcbX="-0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<smtpad portHints={["pin2"]} pcbX="0.48mm" pcbY="0mm" layer="top" cornerRadius="0.07375mm" width="0.59mm" height="0.64mm" ccwRotation={-180} shape="rotated_rect"/>
<fabricationnotetext pcbX={-1.011843} pcbY={-1.772047} anchorAlignment="top_right" text="R_0R_0402" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-5.169} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-3.168} anchorAlignment="top_right" text="R18" font="tscircuit2024" fontSize={0.7}/>
<fabricationnotetext pcbX={-0.95} pcbY={-4.169} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7}/>
<fabricationnoterect pcbX={0} pcbY={0} width={1} height={0.5} strokeWidth={0.15} isFilled={false} hasStroke={true}/>

<courtyardrect pcbX={0} pcbY={0} width={1.85} height={0.94} layer="top" pcbRotation="-360deg"/>
      </footprint>);
// TP15: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP15 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="bottom_left" text="TP15" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// TP12: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP12 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP12" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// BoardFeature_83: ; 
export const Footprint_BoardFeature_83 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// TP11: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP11 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP11" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// BoardFeature_85: ; 
export const Footprint_BoardFeature_85 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// TP7: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP7 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP7" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// BoardFeature_87: ; 
export const Footprint_BoardFeature_87 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// TP13: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP13 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="bottom_left" text="TP13" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// TP6: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP6 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP6" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// TP14: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP14 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="-2.520275mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.7} anchorAlignment="bottom_left" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="bottom_left" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="bottom_left" text="TP14" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="bottom_left" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// TP10: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP10 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP10" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// REF**: OSHW-Logo_5.7x6mm_SilkScreen; antmicro-footprints:OSHW-Logo_5.7x6mm_SilkScreen
export const Footprint_REF___ = () => (<footprint originalLayer="bottom">
        

















<courtyardrect pcbX={0.005} pcbY={0} width={7.73} height={8.04} layer="bottom" pcbRotation="-360deg"/>
      </footprint>);
// TP9: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP9 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP9" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// BoardFeature_94: ; 
export const Footprint_BoardFeature_94 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.375mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={0} anchorAlignment="center" text="" font="tscircuit2024" fontSize={1.27} layer="bottom"/>

      </footprint>);
// TP5: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP5 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP5" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
// TP8: TP_1.5mm_SMD; antmicro-footprints:TP_SMD_1.5mm
export const Footprint_TP8 = () => (<footprint originalLayer="bottom">
        <smtpad portHints={["pin1"]} pcbX="0mm" pcbY="0mm" layer="bottom" radius="0.75mm" shape="circle"/>
<fabricationnotetext pcbX={0} pcbY={1.700001} anchorAlignment="top_right" text="TP_1.5mm_SMD" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={5.301} anchorAlignment="top_right" text="License: Apache-2.0" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={2.9} anchorAlignment="top_right" text="TP8" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<fabricationnotetext pcbX={-0.7} pcbY={4.101} anchorAlignment="top_right" text="Author: Antmicro" font="tscircuit2024" fontSize={0.7} layer="bottom"/>
<courtyardcircle pcbX={0} pcbY={0} radius={0.85} layer="bottom"/>
      </footprint>);
